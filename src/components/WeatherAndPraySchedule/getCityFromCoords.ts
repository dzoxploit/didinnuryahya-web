export async function getCityFromCoords(lat: number, lon: number) {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`,
  );
  const data = await res.json();

  return (
    data.address.city || data.address.town || data.address.county || "Subang"
  );
}
