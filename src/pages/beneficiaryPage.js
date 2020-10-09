import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import Profile from "../components/Profile"
import BeneficiaryCard from "../components/BeneficiaryCard"
import HDBCard from '../components/HDBCard'
import { Helmet } from "react-helmet"
import firebase from "firebase"
import "firebase/firestore"

const BeneficiaryPage = ({beneficiaryData, name}) => {
  const [cr, setCr] = useState()
  useEffect(() => {
    if(beneficiaryData!== undefined && name !== undefined){
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

export default BeneficiaryPage
