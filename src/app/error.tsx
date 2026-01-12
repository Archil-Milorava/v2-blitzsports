'use client' // Error components must be Client Components

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-4 text-center">
      <h2 className="text-2xl font-bold text-gray-800">რაღაც აირია!</h2>
      <p className="text-gray-600 mt-2 mb-6">
        {error.message || "მონაცემების ჩატვირთვა ვერ მოხერხდა."}
      </p>
      <button
        onClick={() => reset()} // This attempts to re-render the segment
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        თავიდან ცდა
      </button>
    </div>
  )
}