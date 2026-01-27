import { useEffect, useState } from "react";
import { getCityFromCoords } from "./getCityFromCoords";
import { Container, Title, Row, Highlight } from "./styles";

interface Day {
  date: string;
  imsak: string;
  maghrib: string;
}

export default function RamadhanFullSchedule() {
  const [data, setData] = useState<Day[]>([]);
  const [city, setCity] = useState("Subang");

  const fetchSchedule = async (cityName: string) => {
    const feb = await fetch(
      `https://api.aladhan.com/v1/calendarByCity/2026/2?city=${cityName}&country=Indonesia&method=11`,
    ).then((r) => r.json());

    const mar = await fetch(
      `https://api.aladhan.com/v1/calendarByCity/2026/3?city=${cityName}&country=Indonesia&method=11`,
    ).then((r) => r.json());

    const combined = [...feb.data, ...mar.data];

    const startIndex = combined.findIndex(
      (d: any) =>
        d.date.gregorian.day === "18" && d.date.gregorian.month.number === 2,
    );

    const monthRamadhan = combined
      .slice(startIndex, startIndex + 30)
      .map((d: any, i: number) => ({
        date: `${d.date.gregorian.day} ${d.date.gregorian.month.en}`,
        imsak: d.timings.Imsak,
        maghrib: d.timings.Maghrib,
      }));

    setData(monthRamadhan);
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const detectedCity = await getCityFromCoords(
            pos.coords.latitude,
            pos.coords.longitude,
          );
          setCity(detectedCity);
          fetchSchedule(detectedCity);
        },
        () => fetchSchedule("Subang"),
      );
    } else {
      fetchSchedule("Subang");
    }
  }, []);

  return (
    <Container id="ramadhan-schedule">
      <Title>🌙 Jadwal Puasa Ramadhan — {city}</Title>

      {data.map((d, i) => (
        <Row key={i}>
          <span>Hari {i + 1}</span>
          <span>{d.date}</span>
          <Highlight>Imsak {d.imsak}</Highlight>
          <Highlight>Maghrib {d.maghrib}</Highlight>
        </Row>
      ))}
    </Container>
  );
}
