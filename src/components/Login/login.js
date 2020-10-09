import React, { useState } from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [fpactive, setFpactive] = useState(false)

  const handleEmailChange = event => {
    const target = event.target
    const value = target.value

    setEmail(value)
  }

  const handlePasswordChange = event => {
    const target = event.target
    const value = target.value

    setPassword(value)
  }

  const toggleFpactive = e => {
    e.preventDefault()
    setFpactive(!fpactive)
  }

  return (
    <div>
      <Helmet>
        <title>Login - New Hope Community Services</title>
      </Helmet>
      <main class="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <section>
          <h3 class="font-bold text-2xl">New Hope Community Services</h3>
          <p class="text-gray-600 pt-2">Sign in to your account.</p>
        </section>

        <section class="mt-10">
          <form class="flex flex-col" method="POST" action="#">
            <div class="mb-6 pt-3 rounded bg-gray-200">
              <label
                class="block text-gray-700 text-sm font-bold mb-2 ml-3"
                for="email"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
              />
            </div>
            <div class="mb-6 pt-3 rounded bg-gray-200">
              <label
                class="block text-gray-700 text-sm font-bold mb-2 ml-3"
                for="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
              />
            </div>
            <div class="flex justify-end">
              <a
                href="#"
                class="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6"
              >
                Forgot your password?
              </a>
            </div>
            <Link
              to="/dashboard"
              class="bg-purple-600 hover:bg-purple-700 py-2 rounded shadow-lg hover:shadow-xl transition duration-200 text-center"
            >
              <button class="text-white font-bold py-2 rounded" type="submit">
                Sign In
              </button>
            </Link>
          </form>
        </section>
      </main>

      <div class="max-w-lg mx-auto text-center mt-12 mb-6">
        <p class="text-black">
          Don't have an account?
          <a href="#" class="font-bold hover:underline pl-2">
            Sign up
          </a>
          .
        </p>
      </div>
    </div>
  )
}

export default Login
