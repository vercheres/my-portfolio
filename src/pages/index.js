import * as React from "react"
import "../style/site.scss"
import Navigation from "../components/navbar"

const IndexPage = () => {
  return (
    <main>
        <div className="indexHeader">
          <h1 class="text-[#FC5185]">MANH ANH TUAN NGUYEN</h1>
          <h4 class="text-slate-400">Welcome to my web portfolio, enjoy your stay...</h4>
        </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
