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
  margin: clamp(4rem, 10vh, 6rem) auto 3rem auto;
  padding: clamp(1.2rem, 3vw, 2.5rem);
  border-radius: 22px;

  width: 100%;
  max-width: 900px;

  background: linear-gradient(
    180deg,
    rgba(20, 20, 20, 0.95),
    rgba(12, 12, 12, 0.98)
  );

  border: 1px solid rgba(35, 206, 107, 0.4);
  box-shadow: 0 15px 60px rgba(0, 0, 0, 0.6);

  color: white;
  animation: ${fadeIn} 0.8s ease forwards;
`;

/* ================= SKYLINE ================= */

export const Skyline = styled.div`
  position: relative;
  width: 100%;
  height: clamp(100px, 20vw, 150px);
  border-radius: 18px;
  overflow: hidden;
  margin-bottom: 1.5rem;
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
  font-size: clamp(1.6rem, 6vw, 3rem);
  margin-bottom: 0.3rem;
  font-weight: 600;
  line-height: 1.2;
`;

export const WeatherLine = styled.p`
  margin: 0 0 1rem 0;
  font-size: clamp(1.8rem, 7vw, 3.5rem);
  opacity: 0.9;
`;

/* ================= GRID SECTION ================= */

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(1rem, 3vw, 2rem);
  margin-top: 1.2rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftColumn = styled.div``;
export const RightColumn = styled.div``;

/* ================= SECTION TITLE ================= */

export const SectionTitle = styled.h4`
  margin-bottom: 0.8rem;
  font-size: clamp(0.9rem, 3.5vw, 1rem);
  opacity: 0.9;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding-bottom: 4px;
`;

/* ================= PRAYER LIST ================= */

export const PrayerList = styled.div`
  font-size: clamp(0.95rem, 3.8vw, 1.4rem);

  p {
    margin: 6px 0;
    display: flex;
    justify-content: space-between;
  }
`;

/* ================= RAMADHAN LIST ================= */

export const RamadhanList = styled.div`
  font-size: clamp(0.95rem, 3.8vw, 1.4rem);

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
  padding: clamp(1rem, 3vw, 2rem);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(35, 206, 107, 0.3);

  width: 100%;
  max-width: 900px;
`;

export const Title = styled.h3`
  margin-bottom: 2rem;
  font-size: clamp(1.2rem, 5vw, 1.8rem);
`;

/* ================= RAMADHAN TABLE ROW ================= */

export const Row = styled.div`
  display: grid;
  grid-template-columns: 70px 140px 1fr 1fr;
  gap: 10px;
  font-size: clamp(0.85rem, 3.5vw, 1.2rem);

  @media (min-width: 1400px) {
    grid-template-columns: 90px 180px 1fr 1fr;
    font-size: 2rem;
    row-gap: 15px;
    padding: 8px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    font-size: 1.3rem;
    row-gap: 4px;
    padding: 5px;
  }
`;

export const Highlight = styled.span`
  color: #23ce6b;
  font-weight: 600;
`;
