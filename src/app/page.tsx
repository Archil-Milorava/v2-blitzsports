'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation" 
import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client"

const Page = () => {
  const [data, setData] = useState(null)
  const [isSigningOut, setIsSigningOut] = useState(false) 
  const router = useRouter()

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const session = await authClient.getSession()
        setData(session)
      } catch (error) {
        console.error("Failed to fetch session:", error)
      }
    }
    fetchSession()
  }, [])

  const handleSignOut = async () => {
    setIsSigningOut(true) // Disable button while processing
    try {
      const { error } = await authClient.signOut()
      
      if (error) {
        throw error // Throw to catch block
      }
      
      // 1. Clear local data immediately (Instant UI feedback)
      setData(null)
      
      // 2. Redirect to home or login
      router.push("/") 
      router.refresh() // Ensure server components refresh if you have them
      
    } catch (error) {
      console.error("Sign out failed:", error)
      alert("Failed to sign out. Please try again.") // Basic user feedback
    } finally {
      setIsSigningOut(false)
    }
  }


  console.log(data?.data?.user);
  
  return (
    <div className="p-4">
      <div className="mb-4">
        {data ? (
          <>
            <h1 className="text-xl font-bold">{data.user?.name}</h1>
            <p className="text-gray-600">{data.user?.email}</p>
            {/* Added check to ensure image exists before rendering */}
            {data.user?.image && (
               <img 
                 src={data.user.image} 
                 alt="User" 
                 className="w-10 h-10 rounded-full mt-2"
               />
            )}
          </>
        ) : (
          <p>Not signed in</p>
        )}
      </div>

      <Button 
        onClick={handleSignOut} 
        disabled={isSigningOut} // Prevent double clicks
      >
        {isSigningOut ? "Signing out..." : "Sign Out"}
      </Button>
    </div>
  )
}

export default Page