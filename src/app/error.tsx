'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center p-4 text-center">
      <h2 className="text-2xl font-bold text-gray-800">რაღაც აირია!</h2>
      <p className="mt-2 mb-6 text-gray-600">
        {error.message || 'მონაცემების ჩატვირთვა ვერ მოხერხდა.'}
      </p>
      <button
        onClick={() => reset()}
        className="rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700"
      >
        თავიდან ცდა
      </button>
    </div>
  )
}
