import React from "react"
import BeneficiaryCard from '../components/BeneficiaryCard'

export default function personal(){
    return(
        <div>
            <BeneficiaryCard header="HDB" items={[ ['10 Oct 2020', 'Last Session with Counsellor', 'Text box'], ['8 Oct 2020', 'First Session with Counsellor', 'Text box'] ]} />
        </div>
    )
}