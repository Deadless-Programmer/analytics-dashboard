

export const fetchDashboardData = async () => {
  const res = await fetch("/data/dashboard.json");
  return res.json();
};