import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import Profile from "../components/Profile"
import BeneficiaryCard from "../components/BeneficiaryCard"
import HDBCard from "../components/HDBCard"
import { Helmet } from "react-helmet"
import firebase from "firebase"
import "firebase/firestore"

const BeneficiaryPage = ({ location }) => {
  const [bd, setBd] = useState(null)

  useEffect(() => {
    setBd(location.state.i)
  }, [location])

  // useEffect(() => {
  //   var ref = firebase
  //     .firestore()
  //     .collection("counselling_records")
  //     .doc(bd.name)
  //     .get()
  //     .then(function (snapshot) {
  //       console.log("inside then")
  //       setCr(snapshot.data())
  //     })
  // }, [bd])

  return (
    <Layout>
      <Helmet>
        <title>Beneficiary Page - New Hope Community Services</title>
      </Helmet>

      {bd ? (
        <Profile
          name={bd.name}
          age={bd.age}
          marital={bd.marital}
          occupation={bd.occupation}
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
