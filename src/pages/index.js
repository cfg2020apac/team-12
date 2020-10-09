import React from "react"
import Layout from "../components/Layout"
import HomePage from "../components/landing/HomePage"

export default function Index() {
  let pageName = "index"
  return (
    <Layout activePage={pageName}>
      <HomePage />
    </Layout>
  )
}
