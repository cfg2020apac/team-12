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



  return (
    <div>
      <Helmet>
        <title>Dashboard - New Hope Community Services</title>
      </Helmet>
      <Layout>
        <div className="border px-4 py-3 rounded-lg m-4">
          <PageTitle>Dashboard</PageTitle>

          {/* <!-- Cards --> */}
          <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
            <InfoCard title="Total Beneficiaries" value={num_beneficiary}>
              {/*<RoundIcon*/}
              {/*  icon={PeopleIcon}*/}
              {/*  iconColorClass="text-orange-500 dark:text-orange-100"*/}
              {/*  bgColorClass="bg-orange-100 dark:bg-orange-500"*/}
              {/*  className="mr-4"*/}
              {/*/>*/}
            </InfoCard>

            <InfoCard title="Total Service Partners" value="40">
              {/*<RoundIcon*/}
              {/*  icon={MoneyIcon}*/}
              {/*  iconColorClass="text-green-500 dark:text-green-100"*/}
              {/*  bgColorClass="bg-green-100 dark:bg-green-500"*/}
              {/*  className="mr-4"*/}
              {/*/>*/}
            </InfoCard>

            <InfoCard title="New Beneficiaries this month" value="23">
              {/*<RoundIcon*/}
              {/*  icon={CartIcon}*/}
              {/*  iconColorClass="text-blue-500 dark:text-blue-100"*/}
              {/*  bgColorClass="bg-blue-100 dark:bg-blue-500"*/}
              {/*  className="mr-4"*/}
              {/*/>*/}
            </InfoCard>

            <InfoCard
              title="Beneficiaries found housing in this month"
              value="12"
            >
              {/*<RoundIcon*/}
              {/*  icon={ChatIcon}*/}
              {/*  iconColorClass="text-teal-500 dark:text-teal-100"*/}
              {/*  bgColorClass="bg-teal-100 dark:bg-teal-500"*/}
              {/*  className="mr-4"*/}
              {/*/>*/}
            </InfoCard>
          </div>

          <PageTitle>Charts</PageTitle>

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
