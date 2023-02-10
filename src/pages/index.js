import * as React from "react"
import { Link } from "gatsby"
import "../style/site.scss"
import Menu from "../components/menu"

const IndexPage = () => {
  return (
    <main>
        <div className="indexHeader">
        <nav class="flex items-center justify-between">
            <ul class="flex items-center justify-between">
              <li class="mr-7">
                  <Link to="/">Home</Link>
              </li>
              <li class="mr-7">
                  <Link to="/about/">About Me</Link>
              </li>
              <li class="mr-7">
                  <Link to="/projects/">Projects</Link>
              </li>
              <li class="mr-7">
                  <Link to="/hobbies/">Hobbies</Link>
              </li>
              <li class="mr-7">
                  <Link to="/contact/">Contact</Link>
              </li>
            </ul>
          </nav>
          <h1 class="font-black">MANH ANH TUAN NGUYEN</h1>
          <h5>Welcome to my web portfolio! Enjoy your stay...</h5>
        </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
