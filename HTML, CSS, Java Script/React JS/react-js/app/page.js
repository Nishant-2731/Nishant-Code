"use client"
import React, { useState } from 'react'
import Header from "@/Components/Header"

const page = () => {
  const [user, setUser] = useState("Nishant")
  return (
    <>
    <Header user={user}/>
    Page
    </>
  )
}

export default page