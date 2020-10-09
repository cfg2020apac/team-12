import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import Profile from "../components/Profile"
import BeneficiaryCard from "../components/BeneficiaryCard"
import HDBCard from "../components/HDBCard"
import MatchingCard from "../components/MatchingCard"

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

  const d = [
    { name: "a", area: "", morning_night: "", noise_level: "", age: "" },
    { name: "a", area: "", morning_night: "", noise_level: "", age: "" },
    { name: "a", area: "", morning_night: "", noise_level: "", age: "" },
    { name: "a", area: "", morning_night: "", noise_level: "", age: "" },
  ]

  const [matches, setMatches] = useState(JSON.stringify(d))

  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    // setMatches(JSON.stringify(d))
    if (bd == null) {
      return
    }
    const requestOptions = {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit

      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer",
      body: JSON.stringify({ name: bd.name }),
    }
    fetch("http://127.0.0.1:5050/knn", requestOptions)
      .then(response => response.json())
      .then(data => setMatches(data))
      .catch(error => {
        console.log(error)
      })
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
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
      <MatchingCard
        header="Matching Possibilities"
        items={[
          [
            JSON.parse(matches)[0]["name"][0].toUpperCase() + JSON.parse(matches)[0]["name"].substring(1),
            "Area: " + JSON.parse(matches)[0]["area"],
            "Morning/Night Person: " +
              JSON.parse(matches)[0]["morning_night"],
            "Noise Level: " + JSON.parse(matches)[0]["noise_level"],
            "Age Group: " + JSON.parse(matches)[0]["age"],
          ],
          [
            JSON.parse(matches)[1]["name"][0].toUpperCase() + JSON.parse(matches)[1]["name"].substring(1),
            "Area: " + JSON.parse(matches)[1]["area"],
            "Morning/Night Person: " +
              JSON.parse(matches)[1]["morning_night"],
            "Noise Level: " + JSON.parse(matches)[1]["noise_level"],
            "Age Group: " + JSON.parse(matches)[1]["age"],
          ],
          [
            JSON.parse(matches)[2]["name"][0].toUpperCase() + JSON.parse(matches)[2]["name"].substring(1),
            "Area: " + JSON.parse(matches)[2]["area"],
            "Morning/Night Person: " +
              JSON.parse(matches)[2]["morning_night"],
            "Noise Level: " + JSON.parse(matches)[0]["noise_level"],
            "Age Group: " + JSON.parse(matches)[2]["age"],
          ],
          [
            JSON.parse(matches)[3]["name"][0].toUpperCase() + JSON.parse(matches)[3]["name"].substring(1),
            "Area: " + JSON.parse(matches)[3]["area"],
            "Morning/Night Person: " +
              JSON.parse(matches)[3]["morning_night"],
            "Noise Level: " + JSON.parse(matches)[0]["noise_level"],
            "Age Group: " + JSON.parse(matches)[3]["age"],
          ],
        ]}
      />
    </Layout>
  )
}

export default BeneficiaryPage
