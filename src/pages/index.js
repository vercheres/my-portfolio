import * as React from "react"
import { Link } from "gatsby"
import "../style/site.scss"

const IndexPage = () => {
  return (
    <main>
        <div className="indexHeader">
          <h1 class="text-[#FC5185] font-semibold">MANH ANH TUAN NGUYEN</h1>
          <h4 class="text-blue-300 font-light">Welcome to my web portfolio, enjoy your stay...</h4>
        </div>
        <div className="navigationBar">
          <nav>
            <ul>
              <li>
                  <Link to="/" class="text-slate-400">Home</Link>
              </li>
            </ul>
          </nav>
        </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
