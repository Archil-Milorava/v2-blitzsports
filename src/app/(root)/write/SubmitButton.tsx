// components/SubmitButton.tsx
'use client'

import { useFormStatus } from 'react-dom'

export function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button 
      type="submit"
      disabled={pending}
      className="p-2 bg-black text-white font-bold hover:bg-gray-800 transition disabled:bg-gray-500 disabled:cursor-not-allowed"
    >
      {pending ? 'Submitting...' : 'Create Article'}
    </button>
  )
}