export function filterByTime<T>(data: T[], filter: string) {
  if (!Array.isArray(data)) return [];

  switch (filter) {
    case "7d":
      return data.slice(-1);   // last 1 month
    case "30d":
      return data.slice(-3);   // last 3 months
    case "12m":
    default:
      return data;             // all 12 months
  }
}