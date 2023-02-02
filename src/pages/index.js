import * as React from "react"
import { Link } from "gatsby"
import "../style/site.scss"

const IndexPage = () => {
  return (
    <main>
        <div className="indexHeader">
          <h1 class="text-[#e63946] font-semibold">MANH ANH TUAN NGUYEN</h1>
          <h4 class="text-[#457b9d] font-light">Welcome to my web portfolio, enjoy your stay...</h4>
        </div>
        <div className="navigationBar">
          <nav class="flex items-center justify-between">
            <ul class="flex">
              <li class="mr-6">
                  <Link to="/">Home</Link>
              </li>
              <li class="mr-6">
                  <Link to="/about" >About Me</Link>
              </li>
            </ul>
          </nav>
          </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
