import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import firebase from "firebase"
import "firebase/firestore"

firebase.initializeApp({
  apiKey: "AIzaSyDzrk0KMpEdFASSX3n0Z_C9X4m-tve3C1k",
  authDomain: "jp-morgan-c945b.firebaseapp.com",
  databaseURL: "https://jp-morgan-c945b.firebaseio.com",
  projectId: "jp-morgan-c945b",
  storageBucket: "jp-morgan-c945b.appspot.com",
  messagingSenderId: "542910140897",
  appId: "1:542910140897:web:f07a946fffffb2407ec2a0",
  measurementId: "G-HZQ4PB8RPC",
})

const HomePage = () => {
  const [data, setData] = useState()

  const hdbSwitch = hdb =>
    ({
      0: "Checking Eligibility",
      1: "Pending",
      2: "Approved",
    }[hdb])
  const colourSwitch = hdb =>
    ({
      0: "text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600",
      1: "text-yellow-700 bg-yellow-200 rounded-full dark:text-white dark:bg-orange-600",
      2: "text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100",
    }[hdb])

  useEffect(() => {
    //console.log("here")
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

        setData(arr)
      })
  }, [])
  {
    console.log("data", data)
  }
  return (
    <div class="border rounded-lg m-4">
      {/* title tags */}
      <Helmet>
        <title>Beneficiary List - New Hope Community Services</title>
      </Helmet>

      {/* LOOK HERE HOW TO ITERATE */}

      {/* NEW table */}
      <div class="w-full overflow-hidden rounded-lg shadow">
        <div class="w-full overflow-x-auto">
          <table class="w-full whitespace-no-wrap">
            <thead>
              <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                <th class="px-4 py-3">Beneficiary name</th>
                <th class="px-4 py-3">Services Pending</th>
                <th class="px-4 py-3">HDB Progress</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
              {data
                ? data.map(i => (
                    <tr class="text-gray-700 dark:text-gray-400">
                      <td class="px-4 py-3">
                        <div class="flex items-center text-sm">
                          <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                            <img
                              class="object-cover w-full h-full rounded-full"
                              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                              alt=""
                              loading="lazy"
                            />
                            <div
                              class="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            ></div>
                          </div>
                          <div>
                            <p class="font-semibold">{i.name}</p>
                            <p class="text-xs text-gray-600 dark:text-gray-400">
                              {i && i.name ? (
                                <Link to={`../BeneficiaryPage`} state={{ i }}>
                                  More Details
                                </Link>
                              ) : null}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-4 py-3 text-sm">
                        <img
                          src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png"
                          class="inline object-cover w-8 h-8 mr-4 rounded-full"
                          alt="profile picture"
                          title="Service Provider 1"
                        />
                        <img
                          src="https://pickaface.net/gallery/avatar/unr_asdfgh_201009_2337_9lv0eb.png"
                          class="inline object-cover w-8 h-8 mr-4 rounded-full"
                          alt="profile picture"
                          title="Service Provider 2"
                        />
                        <img
                          src="https://pickaface.net/gallery/avatar/unr_tyro_201009_2126_9lr2vu.png"
                          class="inline object-cover w-8 h-8 mr-4 rounded-full"
                          alt="profile picture"
                          title="Service Provider 3"
                        />
                      </td>
                      <td class="px-4 py-3 text-xs">
                        <span
                          class={
                            "px-2 py-1 font-semibold leading-tight " +
                            colourSwitch(i.hdb)
                          }
                        >
                          {hdbSwitch(i.hdb)}
                        </span>
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default HomePage

/* LEGACY CODE

<div class="px-8 pt-4 max-w flex flex-row">
        <div class="flex font-bold text-3xl flex-grow">All Beneficiaries</div>
        <div class="flex float-right pr-4">
          <button class="button rounded-full bg-gray-300 hover:bg-gray-200 py-2 px-8">
            Sort
          </button>
        </div>
        <div class="flex float-right">
          <button class="button rounded-full bg-gray-300 hover:bg-gray-200 py-2 px-8">
            Filter
          </button>
        </div>
      </div>
      <div class="px-8 p-8 flex flex-col">
        table header
        <div class="flex w-full px-20 mb-2 text-gray-800">
          <div class="w-1/3">Beneficiary name</div>
          <div class="w-1/3 text-center">Services Pending</div>
          <div class="w-1/3 text-center pl-20">HDB Progress</div>
        </div>
        {table header end

        card start
        <Link to="first_user">
          <div class="flex w-full border rounded-lg p-4 mb-4 bg-gray-200 shadow">
            {Profile }
            <div class="flex w-1/3">
              <div>
                <img
                  src={ProfilePic}
                  class="inline object-cover w-12 h-12 mr-4 rounded-full"
                  alt="profile picture"
                />
              </div>
              <div class="flex flex-col">
                <div class="flex text-center">Person #1</div>
                <div class="flex text-gray-700">More details</div>
              </div>
            </div>

            {Services Pending }
            <div class="w-1/3 text-center">
              <img
                src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png"
                class="inline object-cover w-12 h-12 mr-4 rounded-full grayscaleit"
                alt="profile picture"
                title="Service Provider 1"
              />
              <img
                src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png"
                class="inline object-cover w-12 h-12 mr-4 rounded-full grayscaleit"
                alt="profile picture"
                title="Service Provider 2"
              />
              <img
                src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png"
                class="inline object-cover w-12 h-12 mr-4 rounded-full grayscaleit"
                alt="profile picture"
                title="Service Provider 3"
              />
            </div>

            {HDB Progress }
            <div class="w-1/3 text-center">
              <button class="py-2 px-4 w-1/3 font-semibold leading-tight text-orange-700 bg-orange-300 rounded-full dark:text-white dark:bg-orange-600">
                Checking eligibility
              </button>
            </div>
          </div>
        </Link>
        {card end }

        {card start }
        <Link to="second_user">
          <div class="flex w-full border rounded-lg p-4 mb-4 bg-gray-200 shadow">
            {Profile }
            <div class="flex w-1/3">
              <div>
                <img
                  src={ProfilePic}
                  class="inline object-cover w-12 h-12 mr-4 rounded-full"
                  alt="profile picture"
                />
              </div>
              <div class="flex flex-col">
                <div class="flex text-center">Person #2</div>
                <div class="flex text-gray-700">More details</div>
              </div>
            </div>

            {Services Pending }
            <div class="w-1/3 text-center">
              <img
                src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png"
                class="inline object-cover w-12 h-12 mr-4 rounded-full"
                alt="profile picture"
                title="Service Provider 1"
              />
              <img
                src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png"
                class="inline object-cover w-12 h-12 mr-4 rounded-full grayscaleit"
                alt="profile picture"
                title="Service Provider 2"
              />
              <img
                src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png"
                class="inline object-cover w-12 h-12 mr-4 rounded-full"
                alt="profile picture"
                title="Service Provider 3"
              />
            </div>

            {HDB Progress }
            <div class="w-1/3 text-center">
              <button class="text-yellow-700 font-semibold bg-yellow-300 py-2 px-4 rounded-full w-1/3">
                Pending Match
              </button>
            </div>
          </div>
        </Link>
        {card end }

        {card start }
        <Link to="third_user">
          <div class="flex w-full border rounded-lg p-4 mb-4 bg-gray-200 shadow">
            {Profile }
            <div class="flex w-1/3">
              <div>
                <img
                  src={ProfilePic}
                  class="inline object-cover w-12 h-12 mr-4 rounded-full"
                  alt="profile picture"
                />
              </div>
              <div class="flex flex-col">
                <div class="flex text-center">Person #3</div>
                <div class="flex text-gray-700">More details</div>
              </div>
            </div>

            {Services Pending }
            <div class="w-1/3 text-center">
              <img
                src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png"
                class="inline object-cover w-12 h-12 mr-4 rounded-full"
                alt="profile picture"
                title="Service Provider 1"
              />
              <img
                src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png"
                class="inline object-cover w-12 h-12 mr-4 rounded-full"
                alt="profile picture"
                title="Service Provider 2"
              />
              <img
                src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png"
                class="inline object-cover w-12 h-12 mr-4 rounded-full"
                alt="profile picture"
                title="Service Provider 3"
              />
            </div>

            {HDB Progress }
            <div class="w-1/3 text-center">
              <button class="py-2 px-4 w-1/3 font-semibold leading-tight text-green-700 bg-green-200 rounded-full dark:bg-green-700 dark:text-green-100">
                Approved
              </button>
            </div>
          </div>
        </Link>
        {card end }




*/
