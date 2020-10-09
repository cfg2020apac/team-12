import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import NewHopeLogo from "../icons/NewHopeLogo.jpg"

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState("")
  useEffect(() => {
    let url = window.location.pathname

    if (url.includes("add_beneficiary")) {
      setCurrentPage("add_beneficiary")
    } else if (url.includes("dashboard")) {
      setCurrentPage("dashboard")
    } else if (url.includes("login")) {
      setCurrentPage("login")
    } else {
      setCurrentPage("index")
    }
  }, [])

  return (
    <nav
      class="flex items-center justify-between flex-wrap p-6 shadow bg-white"
      // style={{ backgroundColor: "#363740" }}
    >
      <div class="flex items-center flex-shrink-0 mr-8">
        <div className="relative hidden w-16 h-16 mr-1 rounded-full md:block">
          <img
            className="object-cover w-full h-full"
            src={NewHopeLogo}
            alt=""
            loading="lazy"
          />
        </div>
        <span class="font-semibold text-xl tracking-tight">
          New Hope Community Services
        </span>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-m lg:flex-grow">
          <a
            href="/dashboard"
            class="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-600 mr-6 border-b-4 border-transparent hover:border-green-1"
          >
            {currentPage == "dashboard" ? (
              <div class="border-b-4 border-green-500 px-2">Dashboard</div>
            ) : (
              <div class="border-b-4 px-2">Dashboard</div>
            )}
          </a>
          <a
            href="/"
            class="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-600 hover:text-white mr-6"
          >
            {currentPage == "index" ? (
              <div class="border-b-4 border-green-500 px-2">Beneficiaries</div>
            ) : (
              <div class="border-b-4 px-2">Beneficiaries</div>
            )}
          </a>
          <a
            href="/add_beneficiary"
            class="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-600 hover:text-white mr-6"
          >
            {currentPage == "add_beneficiary" ? (
              <div class="border-b-4 border-green-500 px-2">Add Beneficiary</div>
            ) : (
              <div class="border-b-4 px-2">Add Beneficiary</div>
            )}
          </a>
        </div>
        <div>
          <a
            href="/login"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-gray-700 border-black hover:text-gray-600 hover:bg-gray-200 mt-4 lg:mt-0"
          >
            Login/Logout
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
