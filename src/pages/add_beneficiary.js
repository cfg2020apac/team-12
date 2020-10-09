import React from "react"
import BeneficiaryCard from "../components/BeneficiaryCard"
import Layout from "../components/Layout"
import { useForm } from "react-hook-form";
import firebase from "firebase"
import "firebase/firestore"
const AddBeneficiary = () => {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => write(values);
    // const onSubmit = values => console.log(values);

    

    function write(values){
        var beneficiaryRef = firebase.firestore().collection("/beneficiary");
        beneficiaryRef.add({
            age: values["age"],
            contact_num: values["contact_number"],
            hdb: "0",
            marital: values["marital_status"],
            name: values["name"],
            occupation: values["occupation"],
            services: "000"
          })
          .then(function(docRef) {
              console.log("Tutorial created with ID: ", docRef.id);
          })
          .catch(function(error) {
              console.error("Error adding Tutorial: ", error);
          });
    }

    return (
        <Layout>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div class="mb-6 pt-3 rounded bg-gray-200">
              <label
                class="block text-gray-700 text-sm font-bold mb-2 ml-3"
              >
                Name
              </label>
              <input ref={register}
                type="text"
                name="name"
                class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
              />
        </div>
        <div class="mb-6 pt-3 rounded bg-gray-200">
              <label
                class="block text-gray-700 text-sm font-bold mb-2 ml-3"
              >
                Age
              </label>
              <input ref={register}
                type="text"
                name="age"
                class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
              />
        </div>
        <div class="mb-6 pt-3 rounded bg-gray-200">
              <label
                class="block text-gray-700 text-sm font-bold mb-2 ml-3"
              >
                Gender
              </label>

                <select name="gender" ref={register}>
                <option value="female">female</option>
                <option value="male">male</option>
                </select>
        </div> 
        <div class="mb-6 pt-3 rounded bg-gray-200">
              <label
                class="block text-gray-700 text-sm font-bold mb-2 ml-3"
              >
                Occupation
              </label>
              <input ref={register}
                type="text"
                name="occupation"
                class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
              />
              
        </div>
        <div class="mb-6 pt-3 rounded bg-gray-200">
              <label
                class="block text-gray-700 text-sm font-bold mb-2 ml-3"
              >
                Marital Status
              </label>
              <select name="marital_status" ref={register}>
                <option value="Married">Married</option>
                <option value="Single">Single</option>
                <option value="Divorced">Divorced</option>
                </select>
        </div>
        <div class="mb-6 pt-3 rounded bg-gray-200">
              <label
                class="block text-gray-700 text-sm font-bold mb-2 ml-3"
              >
                Contact Number
              </label>
              <input ref={register}
                type="text"
                name="contact_number"
                class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
              />
        </div>

        <input type="submit"  class="bg-purple-600 hover:bg-purple-700 py-2 rounded shadow-lg hover:shadow-xl transition duration-200 text-center" />
      </form>
       </Layout>
    );
}

export default AddBeneficiary