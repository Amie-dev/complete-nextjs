"use client"

import axios from "axios"
import { useSession } from "next-auth/react"
import React, { useEffect, useState } from "react"

type userType = {
  name: string
  email: string
  _id: string
  image?: string
}

type userContextType = {
  user: userType | undefined | null
  setUser: React.Dispatch<React.SetStateAction<userType | undefined>>
}

export const userDataContext = React.createContext<userContextType | undefined>(undefined)

export function UserContext({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<userType | undefined>(undefined)
  const session = useSession()

  useEffect(() => {
    async function getUser() {
      if (session.status !== "authenticated") return
      try {
        const res = await axios.get("/api/user")
        console.log(res)
        setUser(res.data.user)
      } catch (error) {
        console.error(error)
      }
    }
    getUser()
  }, [session.status])

  return (
    <userDataContext.Provider value={{ user, setUser }}>
      {children}
    </userDataContext.Provider>
  )
}

export function useUserData() {
  const context = React.useContext(userDataContext)
  if (!context) {
    throw new Error("useUserData must be used within a UserContext provider")
  }
  return context
}
