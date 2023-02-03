import * as React from "react"
import { Link } from "gatsby"
import "../style/site.scss"

const IndexPage = () => {
  return (
    <main>
        <div className="indexHeader">
        <nav class="flex items-center justify-between">
            <ul class="flex items-center justify-between">
              <li class="mr-6">
                  <Link to="/">Home</Link>
              </li>
              <li class="mr-6">
                  <Link to="/about/">About Me</Link>
              </li>
              <li class="mr-6">
                  <Link to="/education/">Education</Link>
              </li>
              <li class="mr-6">
                  <Link to="/projects/">Projects</Link>
              </li>
              <li class="mr-6">
                  <Link to="/hobbies/">Hobbies</Link>
              </li>
            </ul>
          </nav>
          <h1 class="font-black">HI THERE!</h1>
          <h4 class="text-[#1d3557]">Welcome to my web portfolio, enjoy your stay...</h4>
        </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
