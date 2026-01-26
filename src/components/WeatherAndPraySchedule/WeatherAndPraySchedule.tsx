import { useEffect, useState } from "react";
import {
  WidgetContainer,
  Skyline,
  Sky,
  SunMoon,
  Buildings,
  LocationTitle,
  WeatherLine,
  GridLayout,
  LeftColumn,
  RightColumn,
  SectionTitle,
  PrayerList,
  RamadhanList,
  HighlightLine,
} from "./styles";

import { getCityFromCoords } from "./getCityFromCoords";

interface Weather {
  temperature: number;
}
interface PrayerTimesType {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
  Imsak: string;
}

export default function WeatherAndPraySchedule() {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [prayer, setPrayer] = useState<PrayerTimesType | null>(null);
  const [locationName, setLocationName] = useState("Detecting location...");
  const [isDay, setIsDay] = useState(true);

  const fetchData = async (lat: number, lon: number) => {
    const today = new Date();
    const dateStr = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;

    // WEATHER
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`,
    );
    const weatherData = await weatherRes.json();
    setWeather(weatherData.current_weather);

    // PRAYER TIMES (GPS BASED)
    const prayerRes = await fetch(
      `https://api.aladhan.com/v1/timings/${dateStr}?latitude=${lat}&longitude=${lon}&method=11`,
    );
    const prayerData = await prayerRes.json();
    setPrayer(prayerData.data.timings);
  };

  useEffect(() => {
    const initLocation = async () => {
      const hour = new Date().getHours();
      setIsDay(hour >= 6 && hour < 18);

      const savedLat = localStorage.getItem("lat");
      const savedLon = localStorage.getItem("lon");

      // 🔁 Always re-check location if permission allowed
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (pos) => {
            const lat = pos.coords.latitude;
            const lon = pos.coords.longitude;

            localStorage.setItem("lat", String(lat));
            localStorage.setItem("lon", String(lon));

            const city = await getCityFromCoords(lat, lon);
            setLocationName(`${city} 📍`);
            fetchData(lat, lon);
          },
          async () => {
            // fallback to cache
            if (savedLat && savedLon) {
              const city = await getCityFromCoords(
                Number(savedLat),
                Number(savedLon),
              );
              setLocationName(`${city} 📍`);
              fetchData(Number(savedLat), Number(savedLon));
            } else {
              fetchData(-6.571589, 107.758736);
              setLocationName("Subang, West Java 🇮🇩");
            }
          },
          { enableHighAccuracy: true, timeout: 10000 },
        );
      }
    };

    initLocation();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const lat = Number(localStorage.getItem("lat"));
      const lon = Number(localStorage.getItem("lon"));
      if (lat && lon) fetchData(lat, lon);
    }, 1800000); // 30 min

    return () => clearInterval(interval);
  }, []);

  return (
    <WidgetContainer>
      <Skyline>
        <Sky isDay={isDay} />
        <SunMoon isDay={isDay} />
        <Buildings />
      </Skyline>

      <LocationTitle>🌍 {locationName}</LocationTitle>
      {weather && <WeatherLine>🌡 {weather.temperature}°C</WeatherLine>}

      <GridLayout>
        <LeftColumn>
          <SectionTitle>🕌 Jadwal Sholat Hari Ini</SectionTitle>
          {prayer && (
            <PrayerList>
              <p>🌅 Fajr: {prayer.Fajr}</p>
              <p>☀️ Dhuhr: {prayer.Dhuhr}</p>
              <p>🌤 Asr: {prayer.Asr}</p>
              <HighlightLine>🌇 Maghrib: {prayer.Maghrib}</HighlightLine>
              <p>🌙 Isha: {prayer.Isha}</p>
            </PrayerList>
          )}
        </LeftColumn>

        <RightColumn>
          <SectionTitle>🌙 Jadwal Puasa</SectionTitle>
          {prayer && (
            <RamadhanList>
              <HighlightLine>🌙 Imsak: {prayer.Imsak}</HighlightLine>
              <HighlightLine>🌇 Maghrib: {prayer.Maghrib}</HighlightLine>
            </RamadhanList>
          )}
        </RightColumn>
      </GridLayout>
    </WidgetContainer>
  );
}
