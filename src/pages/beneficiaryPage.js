import React from "react"
import Layout from "../components/Layout"
import Profile from "../components/Profile"
import BeneficiaryCard from "../components/BeneficiaryCard"
import HDBCard from '../components/HDBCard'
import { Helmet } from "react-helmet"

const beneficiaryPage = ({name}) => {
  const [data, setData] = useState()
  useEffect(() => {
    //console.log("here")
    var ref = firebase
      .firestore()
      .collection("beneficiary")
      .get()
      .then(function (snapshot) {
        snapshot.forEach(function (child) {
          if(child.data().name == name){
            setData(child.data())
          }
        })

        
      })
  }, [])
  console.log(data)
  return (
    <Layout>
      <Helmet>
        <title>Beneficiary Page - New Hope Community Services</title>
      </Helmet>
      <Profile name="helo" age="30" marital="Married" occupation="Teacher" />

      <HDBCard         
        header="HDB"
        items={{1:"Completed", 2:"Completed", 3:"Completed", 4:"Not Completed", 5:"Not Completed"}} 
        clientName={"Thomas"}
        />

        {/* Items should be sent as "Completed" "Pending" "Not Completed" */}

      <BeneficiaryCard
        header="Counselling"
        items={[
          ["10 Oct 2020", "Last Session with Counsellor", "Text box"],
          ["8 Oct 2020", "First Session with Counsellor", "Text box"],
        ]}
      />


    </Layout>
  )
}

export default beneficiaryPage
