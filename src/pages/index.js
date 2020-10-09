import React from "react"
import Home from "../components/landing/HomePage"
import fbConfig from "../../config/fbConfig"
import firebase from "firebase/app"
import Layout from "../components/Layout"
import HomePage from "../components/landing/HomePage"

export default function Index() {
  return (
    <Layout>
      <HomePage />
    </Layout>
  )
}
