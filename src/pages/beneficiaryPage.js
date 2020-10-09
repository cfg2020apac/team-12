import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import Profile from "../components/Profile"
import BeneficiaryCard from "../components/BeneficiaryCard"
import HDBCard from "../components/HDBCard"
import { Helmet } from "react-helmet"
import firebase from "firebase"
import "firebase/firestore"

const BeneficiaryPage = ({ beneficiaryData, name }) => {
  const [cr, setCr] = useState()
  useEffect(() => {
    if (beneficiaryData !== undefined && name !== undefined) {
      //console.log(beneficiaryData)
      var ref = firebase
        .firestore()
        .collection("counselling_records")
        .doc(name)
        .get()
        .then(function (snapshot) {
          console.log("inside then")
          setCr(snapshot.data())
        })
    }
  }, [beneficiaryData])
  console.log(cr)
  return (
    <Layout>
      <Helmet>
        <title>Beneficiary Page - New Hope Community Services</title>
      </Helmet>
      {beneficiaryData ? (
        <Profile
          name={name}
          age={beneficiaryData.age}
          marital={beneficiaryData.marital}
          occupation={beneficiaryData.occupation}
        />
      ) : (
        <div></div>
      )}

      <HDBCard
        header="HDB"
        items={{
          allocation: "Completed",
          collection: "Completed",
          doc_approval: "Completed",
          eligibility: "Not Completed",
          matching: "Not Completed",
        }}
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

export default BeneficiaryPage
