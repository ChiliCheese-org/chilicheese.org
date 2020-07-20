export const DISTANCE_UNITS = {
  MILES: "mi",
  KILOMETERS: "km",
};

export const distance = (
  { lat: lat1, lng: lon1 },
  { lat: lat2, lng: lon2 },
  precision = 2,
  unit = DISTANCE_UNITS.MILES
) => {
  if (
    lat1 === undefined ||
    lon1 === undefined ||
    lat2 === undefined ||
    lon2 === undefined
  ) {
    console.log(lat1, lon1, lat2, lon2);
    return;
  }
  if (lat1 === lat2 && lon1 === lon2) {
    return 0;
  } else {
    const radlat1 = (Math.PI * lat1) / 180;
    const radlat2 = (Math.PI * lat2) / 180;
    const theta = lon1 - lon2;
    const radtheta = (Math.PI * theta) / 180;
    let dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit === DISTANCE_UNITS.KILOMETERS) {
      dist = dist * 1.609344;
    }
    if (unit === DISTANCE_UNITS.MILES) {
      dist = dist * 0.8684;
    }
    return `${dist.toFixed(precision)}${unit}`;
  }
};
