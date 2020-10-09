import React, { useState, useEffect } from "react"

import InfoCard from "../components/Cards/InfoCard"
import ChartCard from "../components/Chart/ChartCard"
import { Doughnut, Line } from "react-chartjs-2"
import ChartLegend from "../components/Chart/ChartLegend"
import PageTitle from "../components/Typography/PageTitle"
// import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon } from '../icons'
// import RoundIcon from '../components/RoundIcon'
import response from "../utils/demo/tableData"
import { Link } from "gatsby"
import firebase from "firebase"
import "firebase/firestore"
import {
  doughnutOptions,
  lineOptions,
  doughnutLegends,
  lineLegends,
} from "../utils/demo/chartsData"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"
import moment from "moment";

function Dashboard() {
  const [hdb_eligibility, set_HDB_eligibility] = useState([])
  const [num_beneficiary, set_num_beneficiary] = useState([])

  useEffect(() => {
    var ref = firebase
      .firestore()
      .collection("hdb_eligibility")
      .get()
      .then(function (snapshot) {
        let arr = []
        snapshot.forEach(function (child) {
          arr.push(child.data())
          // getting all the data from each child
        })

        set_HDB_eligibility(arr)
      })

    var ref = firebase
      .firestore()
      .collection("beneficiary")
      .get()
      .then(function (snapshot) {
        let arr = []
        snapshot.forEach(function (child) {
          arr.push(child.data())
          // getting all the data from each child
        })

        set_num_beneficiary(arr.length)
      })
  }, [])

  // Logic to count number of benficiaries in each stage
  var counts = {0:0, 1:0, 2:0, 3:0, 4:0}
  console.log("hdb_eligibility", hdb_eligibility)
  hdb_eligibility.forEach(e => counts[e.stage]++)
  var stage_count = []
  for (var key in counts) {
    if (counts.hasOwnProperty(key)) {
      stage_count.push(counts[key]);
    }
  }
  var test = doughnutOptions
  test.data.datasets[0].data = stage_count;

  var temp = lineOptions
  var t = [2, 7, 8, 6, 8, 9, 11]
  t.pop()
  t.push(num_beneficiary)
  temp.data.datasets[0].data = t;

  var new_beneficiary = t[6] - t[5]


  return (
    <div>
      <Helmet>
        <title>Dashboard - New Hope Community Services</title>
      </Helmet>
      <Layout>
        <div className="border px-2 py-2 rounded-lg m-5 border-transparent">
          {/*<PageTitle>Dashboard</PageTitle>*/}

          {/* <!-- Cards --> */}
          <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
            <InfoCard title="Total Beneficiaries" value={num_beneficiary}>
              <div className="relative hidden w-7 h-7 mr-4 rounded-full md:block justify-center">
                <img
                  className="object-cover w-full h-full rounded-full text-center"
                  src="https://img.icons8.com/material/24/000000/home--v5.png"
                />
              </div>

            </InfoCard>

            <InfoCard title="Total Service Partners" value="40">
              <div className="relative hidden w-7 h-7 mr-4 rounded-full md:block justify-center">
                <img
                  className="object-cover w-full h-full rounded-full text-center"
                  src="https://img.icons8.com/metro/26/000000/handshake.png"
                />
              </div>
            </InfoCard>

            <InfoCard title="New Beneficiaries this month" value={new_beneficiary}>
              <div className="relative hidden w-6 h-6 mr-4 rounded-full md:block justify-center">
                <img
                  className="object-cover w-full h-full rounded-full text-center"
                  src="https://img.icons8.com/ios-filled/50/000000/up.png"
                />
              </div>
            </InfoCard>

            <InfoCard
              title="Found housing in this month"
              value="2"
            >
              <div className="relative hidden w-7 h-7 mr-4 rounded-full md:block justify-center">
                <img
                  className="object-cover w-full h-full rounded-full text-center"
                  src="https://img.icons8.com/material/24/000000/checked-2--v1.png"
                />
              </div>
            </InfoCard>
          </div>

          <h1 className="text-2xl font-semibold text-gray-700">Month's Summary</h1>
          <p classname="text-gray-700 text-xs">  as of: {moment().format("DD/MM/YYYY")}</p> <br/>


          <div className="grid gap-6 mb-8 md:grid-cols-2">
            <ChartCard title="Beneficiaries Housing Status">
              <Doughnut {...doughnutOptions} />
              <ChartLegend legends={doughnutLegends} />
            </ChartCard>

            <ChartCard title="Head count of Beneficiaries">
              <Line {...lineOptions} />
              <ChartLegend legends={lineLegends} />
            </ChartCard>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Dashboard
