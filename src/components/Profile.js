import React from "react"
import ProfilePic from "../../static/person-placeholder.png"

const Profile = () => {
    return (
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
                <div>Age: 30</div>
                <div>Marital Status: Married</div>
                <div>Occupation: Teacher</div>
              </div>
            </div>
          </div>
    )
}
export default Profile