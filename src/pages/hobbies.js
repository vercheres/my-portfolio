import * as React from "react"
import { Link } from "gatsby"
import "../style/site.scss"

const HobbiesPage = () => {
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
          <h1 class="font-black">HOBBIES</h1>
          <h4></h4>
        </div>
    </main>
    )
}

export default HobbiesPage

export const Head = () => <title>Hobbies</title>