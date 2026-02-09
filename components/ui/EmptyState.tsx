// components/ui/EmptyChartState.tsx
export default function EmptyChartState({ title }: { title: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="mb-4 font-semibold text-gray-800">{title}</h3>
      <div className="h-75 flex flex-col items-center justify-center text-gray-400">
        <svg className="w-16 h-16 mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <p className="text-lg">No data available</p>
        <p className="text-sm mt-1">Change filters or date range</p>
      </div>
    </div>
  );
}