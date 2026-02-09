// export const fetchDashboardData = async (simulateError = false) => {
//   // simulate network delay
//   await new Promise((res) => setTimeout(res, 1000));

//   // 10% random error
//   if (simulateError && Math.random() < 0.1) {
//     throw new Error("Failed to fetch data. Please try again.");
//   }

//   const data = await fetch("/data/dashboard.json").then((res) => res.json());
//   return data;
// };

// export const fetchDashboardData = async () => {
//   const res = await fetch("/data/dashboard.json");
//   if (!res.ok) throw new Error("Failed to fetch dashboard data");
//   return res.json();
// };

export const fetchDashboardData = async () => {
  await new Promise((res) => setTimeout(res, 800)); 
  const res = await fetch("/data/dashboard.json");
  if (!res.ok) throw new Error("Failed to fetch dashboard data");
  return res.json();
};