import React from "react"
import Layout from "../components/Layout"
import Profile from "../components/Profile"
import BeneficiaryCard from "../components/BeneficiaryCard"
import HDBCard from '../components/HDBCard'

const beneficiaryPage = () => {
  return (
    <Layout>
      <Profile name="helo" age="30" marital="Married" occupation="Teacher" />

      <HDBCard         
        header="HDB"
        items={{1:"Completed", 2:"Completed", 3:"Completed", 4:"Not Completed", 5:"Not Completed"}} 
        clientName={"Thomas"}
        />

        {/* Items should be sent as "Completed" "Pending" "Not Completed" */}

      <BeneficiaryCard
        header="Counselling"
        items={[
          ["10 Oct 2020", "Last Session with Counsellor", "Text box"],
          ["8 Oct 2020", "First Session with Counsellor", "Text box"],
        ]}
      />


    </Layout>
  )
}

export default beneficiaryPage
