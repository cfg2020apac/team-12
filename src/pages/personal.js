import React from "react"
import ProfilePic from "../../static/person-placeholder.png"
import Layout from "../components/Layout"
import Profile from "../components/Profile"
import BeneficiaryCard from '../components/BeneficiaryCard'

const personal = () => {
  return (
          <Layout>
           <Profile name="helo" age="30" marital="Married" occupation="Teacher"/>
           <BeneficiaryCard header="HDB" items={[ ['10 Oct 2020', 'Last Session with Counsellor', 'Text box'], ['8 Oct 2020', 'First Session with Counsellor', 'Text box'] ]} />
          </Layout>
  )
}

export default personal
