

export const fetchDashboardData = async () => {
  await new Promise((res) => setTimeout(res, 800)); 
  const res = await fetch("/data/dashboard.json");
  if (!res.ok) throw new Error("Failed to fetch dashboard data");
  return res.json();
};