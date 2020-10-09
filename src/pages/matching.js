import React, { useState, useEffect } from "react"
import BeneficiaryCard from "../components/BeneficiaryCard"
import MatchingCard from "../components/MatchingCard"
import Layout from "../components/Layout"

export default function PersonalMatching() {
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
      body: JSON.stringify({ name: "yeehan" }),
    }
    fetch("http://127.0.0.1:5050/knn", requestOptions)
      .then(response => response.json())
      .then(data => setMatches(data))
      .catch(error => {
        console.log(error)
      })
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, [])
  // const arr = JSON.parse(matches)
  // console.log(arr[0])
  return (
    <Layout>
      <div>
        <BeneficiaryCard
          header="HDB"
          items={[
            ["10 Oct 2020", "Last Session with Counsellor", "Text box"],
            ["8 Oct 2020", "First Session with Counsellor", "Text box"],
          ]}
        />
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
      </div>
    </Layout>
  )
}
