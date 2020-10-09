import React , {useState} from 'react';

const HDBModal = (props) => {
  const {clientName, eligibility, documents, matching, allocation, key_collected} = props
  const { setShowModal, items } = props;
  const [newPost, setNewPost] = useState("")
  const [newDate, setNewDate] = useState("")
  const [newComments, setNewComments] = useState("")

  const submitButton = () =>{
      setShowModal(false)
  }

  const InputStyle = {
    margin:'10px', display:'flex', alignItems:'flex-start', justifyContent:'space-between'
  }

  const dropdownOptions = ["Not Completed", "Pending", "Completed"]

  const changeSelection = (selection, value) =>{
    items[selection] = value
  }

  return (
    <div
    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    // onClick={() => setShowModal(false)}
  >
    <div className="relative w-3/5 my-6 mx-auto max-w-3xl">
      {/*content*/}
      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
        {/*header*/}
        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
          <h3 className="text-3xl font-semibold">
            Save session
          </h3>
          <button
            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
            onClick={() => setShowModal(false)}
          >
            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
              ×
            </span>
          </button>
        </div>
        {/*body*/}
        <div className="relative p-6 flex flex-col" >
              <div style={InputStyle}>
              Client Name: <span> &nbsp; </span><span> &nbsp; </span><span> &nbsp; </span>
              <input type='text' className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-4/6 py-2 px-4 text-gray-700"   placeholder={clientName} disabled="disabled" />
              </div>

              <div style={InputStyle}>
                <div style={{justifyContent:'flex-start', alignSelf:'flex-start'}}>
                Eligibility: 
                </div>
              
              <select
              onChange={(event) => changeSelection('eligibility', event.target.value)}>
                {dropdownOptions.map((value,index) =>{
                  return <option value={value} selected={value == items['eligibility']}  >{value}</option>
                })}
              </select>

              </div>

              <div style={InputStyle}>
              Document Approval: 
              <select 
                onChange={(event) => changeSelection('doc_approval', event.target.value)}
                // value = {items[2]}
              >
                {dropdownOptions.map((value,index) =>{
                  return <option value={value} selected={value == items['doc_approval']} >{value}</option>
                })}
              </select>
             </div>

              <div style={InputStyle}>
              Matching with Tenant: 
              <select
              onChange={(event) => changeSelection('matching', event.target.value)}
              // value = {items[3]}
              >
                {dropdownOptions.map((value,index) =>{
                  return <option value={value} selected={value == items['matching']} >{value}</option>
                })}
              </select>
              </div>

              <div style={InputStyle}>
              Alocation of HDB Unit: 
              <select
              onChange={(event) => changeSelection('allocation', event.target.value)}
              // value = {items[4]}
              >
                {dropdownOptions.map((value,index) =>{
                  return <option value={value} selected={value == items['allocation']} >{value}</option>
                })}
              </select>
              </div>

              <div style={InputStyle}>
              Key Collection: 
              <select
              onChange={(event) => changeSelection('collection', event.target.value)}
              // value = {items[5]}
              >
                {dropdownOptions.map((value,index) =>{
                  return <option value={value} selected={value == items['collection']} >{value}</option>
                })}
              </select>
              </div>
        </div>

        {/*footer*/}
        <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
          <button
            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
            type="button"
            style={{ transition: "all .15s ease" }}
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
          <button
            className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
            type="button"
            style={{ transition: "all .15s ease" }}
            onClick={() => 

                submitButton()}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};


export default HDBModal;