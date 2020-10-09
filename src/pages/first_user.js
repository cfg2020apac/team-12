import React, { useState, useEffect } from "react"

// Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
const FirstUser = () => {
  //const [match]= useState(0);

  const [matches, setMatches] = useState({})
  const d = {}
  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit

      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer",
      body: JSON.stringify({ name: "yee han" }),
    }
    fetch("http://127.0.0.1:5050/knn", requestOptions)
      .then(response => response.json())
      .then(data => setMatches(data))
      .catch(error => {
        console.log(error)
      })
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, [])

  return (
    <div>
      <span>{JSON.stringify(matches)}</span>
      <hr />
    </div>
  )
}
export default FirstUser
