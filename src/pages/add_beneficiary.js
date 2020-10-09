import React from "react"
import BeneficiaryCard from "../components/BeneficiaryCard"
import Layout from "../components/Layout"
import { useForm } from "react-hook-form";
import firebase from "firebase"
import { Helmet } from "react-helmet"
import "firebase/firestore"
const AddBeneficiary = () => {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => write(values);
    // const onSubmit = values => console.log(values);

    

    function write(values){
        cancelCourse()
        alert("Form has been submitted!")
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

    function cancelCourse(){ 
      document.getElementById("form").reset();
    }



    return (
        <Layout>
        <Helmet>
        <title>Add Beneficiary - New Hope Community Services</title>
      </Helmet>
      <div>
      <form onSubmit={handleSubmit(onSubmit)} id = "form" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
        <div className="mb-6 pt-3 rounded bg-gray-200">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 ml-3"
              >
                Name
              </label>
              <input ref={register}
                type="text"
                name="name"
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-purple-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
              />
        </div>
        <div className="mb-6 pt-3 rounded bg-gray-200">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 ml-3"
              >
                Age
              </label>
              <input ref={register}
                type="text"
                name="age"
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-purple-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
              />
        </div>
        <div className="mb-6 pt-3 rounded bg-gray-200 flex justify-initial text-center align-middle">
              <label
                className="inline-block  align-middle text-gray-700 text-sm font-bold mb-2 ml-3"
              >
                Gender
              </label>

                <select name="gender" style={{backgroundColor:'transparent', marginBottom:'10px', marginLeft:'20px'}}   ref={register}>
                <option style={{backgroundColor:'transparent', marginBottom:'12px', marginLeft:'10px'}}   value="female">Female</option>
                <option style={{backgroundColor:'transparent', marginBottom:'12px', marginLeft:'10px'}}  value="male">Male</option>
                </select>
        </div> 
        <div className="mb-6 pt-3 rounded bg-gray-200">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 ml-3"
              >
                Occupation
              </label>
              <input ref={register}
                type="text"
                name="occupation"
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-purple-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
              />
              
        </div>
        <div className="mb-6 pt-3 rounded bg-gray-200 flex space-between">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 ml-3"
              >
                Marital Status
              </label>

              <div className="text-align-center "  style={{marginBottom:'12px'}} >
              <select name="marital_status" ref={register} style={{backgroundColor:'transparent', marginBottom:'14px', marginLeft:'20px'}} >
                <option style={{backgroundColor:'transparent', marginBottom:'12px', marginLeft:'10px'}}  value="Married">Married</option>
                <option style={{backgroundColor:'transparent', marginBottom:'12px', marginLeft:'10px'}} value="Single">Single</option>
                <option style={{backgroundColor:'transparent', marginBottom:'12px', marginLeft:'10px'}}  value="Divorced">Divorced</option>
                </select>
              </div>

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
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-purple-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
              />
        </div>

        <button  className="bg-purple-600 hover:bg-purple-700 py-2 rounded shadow-lg w-60  hover:shadow-xl transition duration-200 text-center text-white" style={{width: "120px",padding: "10px"}}>Submit</button>
      </form>
      </div>
      </Layout>
    );
}

export default AddBeneficiary