export async function getCityFromCoords(lat: number, lon: number) {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`,
  );
  const data = await res.json();

  // PRIORITY ORDER tuned for Indonesia
  return (
    data.locality || // Kota / Kecamatan populer
    data.city || // Kota administratif
    data.localityInfo?.administrative?.find(
      (a: any) => a.adminLevel === 3, // Regency / Kabupaten level
    )?.name ||
    data.principalSubdivision || // Provinsi fallback
    "Subang"
  );
}
