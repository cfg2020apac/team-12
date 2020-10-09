import React from "react"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <div class="overflow-auto" style={{ backgroundColor: "#F7F8FC" }}>
      <Navbar />
      <main class="mb-auto h-screen">{children}</main>
    </div>
  )
}

export default Layout
