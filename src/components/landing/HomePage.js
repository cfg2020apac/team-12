import React from "react"
import ProfilePic from "../../../static/person-placeholder.png"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

const HomePage = () => {
  return (
    <div class="border rounded-lg m-4">
      {/* title tags */}
      <Helmet>
        <title>Beneficiary List - New Hope Community Services</title>
      </Helmet>

      <div class="px-8 pt-4 max-w flex flex-row">
        <div class="flex font-bold text-3xl flex-grow">All beneficiaries</div>
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
        {/* table header */}
        <div class="flex w-full px-20 mb-2 text-gray-800">
          <div class="w-1/3">Beneficiary name</div>
          <div class="w-1/3 text-center">Services Pending</div>
          <div class="w-1/3 text-center pl-20">HDB Progress</div>
        </div>
        {/* table header end */}

        {/* card start */}
        <Link to="first_user">
          <div class="flex w-full border rounded-lg p-4 mb-4 bg-gray-200">
            {/* Profile */}
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

            {/* Services Pending */}
            <div class="w-1/3 text-center">
              <img
                src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png"
                class="inline object-cover w-12 h-12 mr-4 rounded-full grayscaleit"
                alt="profile picture"
              />
              <img
                src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png"
                class="inline object-cover w-12 h-12 mr-4 rounded-full grayscaleit"
                alt="profile picture"
              />
              <img
                src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png"
                class="inline object-cover w-12 h-12 mr-4 rounded-full grayscaleit"
                alt="profile picture"
              />
            </div>

            {/* HDB Progress */}
            <div class="w-1/3 text-center">
              <button class="bg-red-700 text-white py-2 px-4 rounded-full w-1/3">
                Checking eligibility
              </button>
            </div>
          </div>
        </Link>
        {/* card end */}

        {/* card start */}
        <Link to="second_user">
          <div class="flex w-full border rounded-lg p-4 mb-4 bg-gray-200">
            {/* Profile */}
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

            {/* Services Pending */}
            <div class="w-1/3 text-center">
              <img
                src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png"
                class="inline object-cover w-12 h-12 mr-4 rounded-full"
                alt="profile picture"
              />
              <img
                src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png"
                class="inline object-cover w-12 h-12 mr-4 rounded-full grayscaleit"
                alt="profile picture"
              />
              <img
                src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png"
                class="inline object-cover w-12 h-12 mr-4 rounded-full"
                alt="profile picture"
              />
            </div>

            {/* HDB Progress */}
            <div class="w-1/3 text-center">
              <button class="bg-yellow-400 text-white py-2 px-4 rounded-full w-1/3">
                Pending Match
              </button>
            </div>
          </div>
        </Link>
        {/* card end */}

        {/* card start */}
        <Link to="third_user">
          <div class="flex w-full border rounded-lg p-4 mb-4 bg-gray-200">
            {/* Profile */}
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

            {/* Services Pending */}
            <div class="w-1/3 text-center">
              <img
                src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png"
                class="inline object-cover w-12 h-12 mr-4 rounded-full"
                alt="profile picture"
              />
              <img
                src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png"
                class="inline object-cover w-12 h-12 mr-4 rounded-full"
                alt="profile picture"
              />
              <img
                src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png"
                class="inline object-cover w-12 h-12 mr-4 rounded-full"
                alt="profile picture"
              />
            </div>

            {/* HDB Progress */}
            <div class="w-1/3 text-center">
              <button class="bg-green-600 text-white py-2 px-4 rounded-full w-1/3">
                Approved
              </button>
            </div>
          </div>
        </Link>
        {/* card end */}
      </div>
    </div>
  )
}

export default HomePage
