import React from "react"
import ProfilePic from "../../../static/person-placeholder.png"
import { Link } from "gatsby"
const HomePage = () => {
  return (
    <div class="border rounded-lg m-4">
      <div class="px-8 pt-4 max-w flex flex-row">
        <div class="flex font-bold text-xl flex-grow">All beneficiaries</div>
        <div class="flex float-right pr-4">Sort</div>
        <div class="flex float-right">Filter</div>
      </div>
      <div class="px-8 p-8 flex flex-col">
        {/* card start */}

        <div class="flex w-full mx-20 mb-2 text-gray-800">
          <div class="w-1/3">Beneficiary name</div>
          <div class="w-1/3 text-center">Services Pending</div>
          <div class="w-1/3 text-center pl-20">HDB Progress</div>
        </div>
        <a href="#">
          <div class="flex w-full border rounded-lg p-4 mb-4">
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
                <div class="flex text-center">helo</div>
                <div class="flex"> <Link to="../beneficiaryPage">More details</Link></div>
              </div>
            </div>

            {/* Services Pending */}
            <div class="w-1/3 text-center">
              <img
                src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png"
                class="inline object-cover w-12 h-12 mr-4 rounded-full"
                alt="profile picture"
              />
            </div>

            {/* HDB Progress */}
            <div class="w-1/3 text-center">
              <button class="bg-red-700 text-white py-2 px-4 rounded-full">
                Checking eligibility
              </button>
            </div>
          </div>
        </a>
        {/* card end */}

        <a href="#">
          <div class="flex max-w border rounded-lg p-4 mb-4">
            <div>
              <img
                src={ProfilePic}
                class="inline object-cover w-12 h-12 mr-4 rounded-full"
              />
            </div>
            <div class="flex flex-col">
              <div class="flex text-center">helo 2</div>
              <div class="flex"><Link to="../beneficiaryPage">More details</Link></div>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default HomePage
