import React, { useState, useEffect } from 'react'

import InfoCard from '../components/Cards/InfoCard'
import ChartCard from '../components/Chart/ChartCard'
import { Doughnut, Line } from 'react-chartjs-2'
import ChartLegend from '../components/Chart/ChartLegend'
import PageTitle from '../components/Typography/PageTitle'
// import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon } from '../icons'
// import RoundIcon from '../components/RoundIcon'
import response from '../utils/demo/tableData'

import {
  doughnutOptions,
  lineOptions,
  doughnutLegends,
  lineLegends,
} from '../utils/demo/chartsData'
import Layout from "../components/Layout"

function Dashboard() {
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])

  // pagination setup
  const resultsPerPage = 10
  const totalResults = response.length

  // pagination change control
  function onPageChange(p) {
    setPage(p)
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage))
  }, [page])

  return (
    <>
      <Layout>
        <div className="border px-4 py-3 rounded-lg m-4">

          <PageTitle>Dashboard</PageTitle>

          {/* <!-- Cards --> */}
          <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
            <InfoCard title="Total Beneficiaries" value="156">
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

            <InfoCard title="Beneficiaries found housing in this month" value="12">
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
    </>
  )
}

export default Dashboard