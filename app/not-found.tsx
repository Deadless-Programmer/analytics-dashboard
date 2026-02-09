// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
  

      <div className="flex flex-1 items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-gray-200">404</h1>
          <h2 className="mt-4 text-3xl font-semibold text-gray-800">
            Page Not Found
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Sorry, the page you&lsquo;re looking for doesn&lsquo;t exist or has been moved.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Go back to Dashboard
            </Link>

            <Link
              href="/support" 
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>

      {/* Footer optional */}
     
    </div>
  );
}