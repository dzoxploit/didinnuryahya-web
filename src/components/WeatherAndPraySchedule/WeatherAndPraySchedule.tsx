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

interface Weather {
  temperature: number;
}

interface PrayerTimesType {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
}

interface RamadhanDay {
  imsak: string;
  maghrib: string;
}

export default function WeatherAndPraySchedule() {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [prayer, setPrayer] = useState<PrayerTimesType | null>(null);
  const [ramadhan, setRamadhan] = useState<RamadhanDay | null>(null);
  const [locationName, setLocationName] = useState("Subang, West Java 🇮🇩");
  const [isDay, setIsDay] = useState(true);

  const today = new Date();
  const dateStr = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;

  const fetchData = async (lat: number, lon: number) => {
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`,
    );
    const weatherData = await weatherRes.json();
    setWeather(weatherData.current_weather);

    const prayerRes = await fetch(
      `https://api.aladhan.com/v1/timings/${dateStr}?latitude=${lat}&longitude=${lon}&method=11`,
    );
    const prayerData = await prayerRes.json();
    setPrayer(prayerData.data.timings);

    const ramadhanRes = await fetch(
      "https://api.aladhan.com/v1/calendarByCity/2026/3?city=Subang&country=Indonesia&method=11",
    );
    const ramadhanData = await ramadhanRes.json();
    const todayRamadhan = ramadhanData.data.find(
      (d: any) => d.date.gregorian.day === String(today.getDate()),
    );
    if (todayRamadhan) {
      setRamadhan({
        imsak: todayRamadhan.timings.Imsak,
        maghrib: todayRamadhan.timings.Maghrib,
      });
    }
  };

  useEffect(() => {
    const hour = new Date().getHours();
    setIsDay(hour >= 6 && hour < 18);

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLocationName("Your Location 📍");
          fetchData(pos.coords.latitude, pos.coords.longitude);
        },
        () => fetchData(-6.571589, 107.758736),
      );
    } else fetchData(-6.571589, 107.758736);
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
        {/* LEFT SIDE */}
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

        {/* RIGHT SIDE */}
        <RightColumn>
          <SectionTitle>🌙 Jadwal Puasa</SectionTitle>
          {ramadhan && (
            <RamadhanList>
              <HighlightLine>🌙 Imsak: {ramadhan.imsak}</HighlightLine>
              <HighlightLine>🌇 Maghrib: {ramadhan.maghrib}</HighlightLine>
            </RamadhanList>
          )}
        </RightColumn>
      </GridLayout>
    </WidgetContainer>
  );
}
