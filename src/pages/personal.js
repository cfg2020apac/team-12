import React from "react"
import BeneficiaryCard from "../components/BeneficiaryCard"
import Layout from "../components/Layout"

const Personal = () => {
  return (
    <Layout>
      <BeneficiaryCard
        header="HDB"
        items={[
          ["10 Oct 2020", "Last Session with Counsellor", "Text box"],
          ["8 Oct 2020", "First Session with Counsellor", "Text box"],
        ]}
      />
    </Layout>
  )
}

export default Personal
