import React, { useState, useEffect } from "react"
import Modal from "../components/Modal"
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

const BeneficiaryCard = ({ header, items }) => {
  useEffect(() => {
    console.log("here")
    var ref = firebase
      .firestore()
      .collection("test-data")
      .get()
      .then(function (snapshot) {
        snapshot.forEach(function (child) {
          console.log(child.id)
        })
      })
  }, [])

  const [status, showModal] = useState(false)

  const Header = {
    color: "black",
    backgroundColor: "#BBD95C",
    fontWeight: "bold",
    width: "100%",
    height: "50px",
    flexStart: "start",
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    verticalAlign: "middle",
    alignItems: "center",
  }

  const Container = {
    padding: "15px",
    display: "flex",
    margin: "10px",
    marginRight: "20px",
    marignLeft: "20px",
    flexDirection: "column",
  }

  const GreyCards = {
    backgroundColor: "#F4F4F4",
    marginTop: "15px",
    borderRadius: "10px",
    padding: "10px",
  }

  const changeModal = () => {
    showModal(!status)
    console.log("HIT", status)
  }

  return (
    <div style={Container}>
      <div style={Header}>
        <div style={{ verticalAlign: "middle", display: "table-cell" }}>
          {header}
        </div>

        {status ? <Modal setShowModal={showModal} items={items} /> : null}
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40 my-1 mx-1 "
          onClick={changeModal}
        >
          Add Post
        </button>
      </div>

      {items
        .slice(0)
        .reverse()
        .map((value, index) => {
          return (
            <div style={GreyCards} key={index}>
              Date: {value[0]}
              <div>
                <strong>{value[1]}</strong>{" "}
              </div>
              <div> {value[2]} </div>
            </div>
          )
        })}
    </div>
  )
}

export default BeneficiaryCard
