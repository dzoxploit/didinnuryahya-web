import styled, { keyframes } from "styled-components";

/* ================= ANIMATIONS ================= */

const moveAcross = keyframes`
  0% { left: -40px; top: 20px; }
  50% { top: 5px; }
  100% { left: 110%; top: 20px; }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`;

/* ================= SMART WIDGET CARD ================= */

export const WidgetContainer = styled.div`
  margin: 6rem auto 3rem auto;
  padding: 2.5rem 3rem;
  border-radius: 22px;

  width: 100%;
  max-width: 900px; /* ⬅ sekarang lebar */

  background: linear-gradient(
    180deg,
    rgba(20, 20, 20, 0.95),
    rgba(12, 12, 12, 0.98)
  );

  border: 1px solid rgba(35, 206, 107, 0.4);
  box-shadow:
    0 0 0 1px rgba(35, 206, 107, 0.2),
    0 15px 60px rgba(0, 0, 0, 0.6);

  color: white;
  animation: ${fadeIn} 0.8s ease forwards;
`;

/* ================= SKYLINE ================= */

export const Skyline = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  border-radius: 18px;
  overflow: hidden;
  margin-bottom: 2rem;
`;

export const Sky = styled.div<{ isDay: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${({ isDay }) =>
    isDay
      ? "linear-gradient(#87ceeb, #f0f8ff)"
      : "linear-gradient(#0f2027, #203a43, #2c5364)"};
`;

export const SunMoon = styled.div<{ isDay: boolean }>`
  position: absolute;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  animation: ${moveAcross} 18s linear infinite;
  background: ${({ isDay }) => (isDay ? "#ffd93b" : "#f5f3ce")};
  box-shadow: ${({ isDay }) => (isDay ? "0 0 15px #ffd93b" : "0 0 10px #fff")};
`;

export const Buildings = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 35px;
  background: repeating-linear-gradient(to right, #111 0 30px, #222 30px 60px);
`;

/* ================= LOCATION & WEATHER ================= */

export const LocationTitle = styled.h4`
  font-size: 5rem;
  margin-bottom: 0.3rem;
  font-weight: 600;
`;

export const WeatherLine = styled.p`
  margin: 0 0 1rem 0;
  font-size: 5.05rem;
  opacity: 0.85;
`;

/* ================= GRID SECTION ================= */

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 1.2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftColumn = styled.div``;
export const RightColumn = styled.div``;

/* ================= SECTION TITLE ================= */

export const SectionTitle = styled.h4`
  margin-bottom: 0.8rem;
  font-size: 1rem;
  opacity: 0.9;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding-bottom: 4px;
`;

/* ================= PRAYER LIST ================= */

export const PrayerList = styled.div`
  font-size: 2rem;

  p {
    margin: 6px 0;
    display: flex;
    justify-content: space-between;
  }
`;

/* ================= RAMADHAN LIST ================= */

export const RamadhanList = styled.div`
  font-size: 2rem;

  p {
    margin: 6px 0;
    display: flex;
    justify-content: space-between;
  }
`;

/* ================= HIGHLIGHT ================= */

export const HighlightLine = styled.p`
  font-weight: 600;
  color: #23ce6b;
  margin: 6px 0;
  display: flex;
  justify-content: space-between;
`;

/* ================= RAMADHAN SCHEDULE CARD ================= */

export const Container = styled.div`
  margin: 2.5rem auto 0 auto;
  padding: 1.5rem 2rem;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(35, 206, 107, 0.3);

  width: 100%;
  max-width: 900px;
`;

export const Title = styled.h3`
  margin-bottom: 3rem;
`;

/* ================= RAMADHAN TABLE ROW ================= */

export const Row = styled.div`
  display: grid;
  grid-template-columns: 70px 140px 1fr 1fr;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  font-size: 2rem;
`;

export const Highlight = styled.span`
  color: #23ce6b;
  font-weight: 600;
`;
