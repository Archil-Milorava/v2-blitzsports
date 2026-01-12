import React from 'react'
import { Newspaper } from 'lucide-react'

const LandingNotFound = () => {
  return (
    <div className="flex min-h-62.5 w-full flex-col items-center justify-center rounded-2xl border border-dashed border-gray-400 bg-white/60 p-8 text-center shadow-sm">
      <Newspaper className="mb-4 h-12 w-12 text-gray-500" />
      <h2 className="text-lg font-semibold text-gray-700">არაფერი მოიძებნა</h2>
      <p className="mt-2 text-sm text-gray-500">
        ამ მომენტში სიახლეები ხელმისაწვდომი არ არის
      </p>
    </div>
  )
}

export default LandingNotFound
