import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav
      class="flex items-center justify-between flex-wrap p-6"
      // style={{ backgroundColor: "#363740" }}
    >
      <div class="flex items-center flex-shrink-0 mr-8">
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
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-600 mr-6 border-b-4 border-transparent hover:border-green-1"
          >
            <div class="border-b-4 px-2">Overview</div>
          </a>
          <a
            href="/"
            class="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-600 hover:text-white mr-6"
          >
            <div class="border-b-4 border-green-500 px-2">Beneficiaries</div>
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-600 hover:text-white mr-6"
          >
            <div class="border-b-4 px-2">Matching</div>
          </a>
        </div>
        <div>
          <a
            href="#"
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
