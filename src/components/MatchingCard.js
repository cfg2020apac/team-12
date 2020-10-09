import React, { useEffect } from "react"

export default function MatchingCard({ header, items }) {
  const Header = {
    color: "black",
    backgroundColor: "#BBD95C",
    fontWeight: "bold",
    width: "100%",
    padding: "20px",
    height: "50px",
    flexStart: "start",
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    verticalAlign: "middle",
    alignItems: "center",
    marignLeft:'10px'

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


  console.log(items)
  return (
    <div style={Container}>
      <div style={Header}>
      <div style={{verticalAlign:'middle', display:'table-cell', marginLeft:'10px'}}> 
        {header}
        </div>
      </div>

      {items.map((value, index) => {
        return (
          <table class="w-full whitespace-no-wrap">
          <tr class="text-gray-700 dark:text-gray-400">
          <td class="px-4 py-3">
          <div style={GreyCards} key={index}>
            <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
              <img
                class="object-cover w-full h-full rounded-full"
                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                alt=""
                loading="lazy"
                style="max-height: 10px; max-width: 10px;"
              />
              </div>
            </div>
            </td>
            <td>
            <strong>{value[0]}</strong>
            <p></p>
            <div> {value[1]} </div>
            <div> {value[2]} </div>
            <div> {value[3]} </div>
            <div> {value[4]} </div>
          </td>
          </tr>
          </table>
        )
      })}
    </div>
  )
}
