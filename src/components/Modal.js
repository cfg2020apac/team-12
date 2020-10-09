import React , {useState} from 'react';

const Modal = (props) => {
  const { setShowModal, items } = props;
  const [newPost, setNewPost] = useState("")
  const [newDate, setNewDate] = useState("")
  const [newComments, setNewComments] = useState("")

  const submitButton = () =>{
      items.push([newDate, newPost, newComments])
      setShowModal(false)
  }

  const InputStyle = {
    margin:'10px', display:'flex', justifyContent:"space-around", alignItems:'flex-start', width:'100%', 
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
        <div className="relative p-6 flex flex-col items-start" >
              <div style={InputStyle}>
                    {/* Date: <DayPicker onDayClick={(day) => setNewDate({ day })} /> */}
                Date:          
                <input type='text' className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-4/6 py-2 px-4 text-gray-700" placeholder="Add session date" onChange={e => setNewDate(e.target.value)}  value={newDate}  />
                </div>

                <div style={InputStyle}>
                Session info: 
                <input type='text' className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-4/6 py-2 px-4 text-gray-700" placeholder="Add title of session" onChange={e => setNewPost(e.target.value)}  value={newPost}  />
                </div>

                <div style={InputStyle}>
                Session comments: 
                <input type='text' className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-4/6 py-2 px-4 text-gray-700" placeholder="Add session comments" onChange={e => setNewComments(e.target.value)}  value={newComments}  />
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


export default Modal;