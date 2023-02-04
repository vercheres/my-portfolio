import * as React from "react"
import { Link } from "gatsby"
import "../style/site.scss"

const AboutPage = () => {
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
                  <Link to="/education/">Education</Link>
              </li>
              <li class="mr-7">
                  <Link to="/projects/">Projects</Link>
              </li>
              <li class="mr-7">
                  <Link to="/hobbies/">Hobbies</Link>
              </li>
            </ul>
          </nav>
          <h1 class="font-black">ABOUT ME</h1>
          <p>So a little bit about myself, I am a 4th year CS college student based in Saint-Lambert, Québec. I have had the privilege to work with a multitude of technologies, software, frameworks, and </p>
        </div>
    </main>
    )
}

export default AboutPage

export const Head = () => <title>About Me</title>