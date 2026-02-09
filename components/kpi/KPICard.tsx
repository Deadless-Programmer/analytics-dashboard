interface Props {
  title: string;
  value: string | number;
  change: string;
  positive?: boolean;
}

export default function KPICard({
  title,
  value,
  change,
  positive = true,
}: Props) {
  return (
    <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-2xl font-bold">{value}</h2>

      <p
        className={`mt-2 text-sm ${
          positive ? "text-green-600" : "text-red-600"
        }`}
      >
        {positive ? "▲" : "▼"} {change}
      </p>
    </div>
  );
}