
export async function fetchDashboardData() {
  const res = await fetch("/data/dashboard.json", {
    next: { revalidate: 3600 }, 
  });

  if (!res.ok) {
    throw new Error("Failed to load dashboard data");
  }

  return res.json();
}