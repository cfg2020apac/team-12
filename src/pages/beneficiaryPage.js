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
  const [cr, setCr] = useState(null)
  const [hdb, setHDB] = useState(null)

  useEffect(() => {
    setBd(location.state.i)
  }, [location])

  useEffect(() => {
    if (bd == null) {
      return
    }
    firebase
      .firestore()
      .collection("counselling_records")
      .doc(bd.name)
      .get()
      .then(function (snapshot) {
        setCr(snapshot.data())
        console.log(snapshot.data().posts)
      })

    firebase
      .firestore()
      .collection("hdb_eligibility")
      .doc(bd.name)
      .get()
      .then(function (snapshot) {
        setHDB(snapshot.data())
      })
  }, [bd])

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

      {hdb ? (
        <HDBCard
          header="HDB"
          items={{
            allocation: hdb.allocation,
            collection: hdb.collection,
            doc_approval: hdb.doc_approval,
            eligibility: hdb.eligibility,
            matching: hdb.matching,
          }}
          clientName={"Thomas"}
        />
      ) : (
        <div></div>
      )}

      {/* Items should be sent as "Completed" "Pending" "Not Completed" */}
      {cr ? (
        <BeneficiaryCard header="Counselling" items={cr.posts} />
      ) : (
        <div></div>
      )}
    </Layout>
  )
}

export default BeneficiaryPage
