import * as React from "react"
import { Link } from "gatsby"
import "../style/site.scss"
import Layout from "../components/layout"

const AboutPage = () => {
    return (
        <Layout>
        <div class="container">
        <nav class="flex items-center justify-between px-2 py-2.5">
            <div class="container flex flex-wrap items-center justify-between mx-auto">
            <ul class="flex items-center justify-between px-2 py-2.5">
              <li class="mr-7">
                  <Link to="/" class="block py-2 pl-3 pr-4">Home</Link>
              </li>
              <li class="mr-7">
                  <Link to="/about/" class="block py-2 pl-3 pr-4">About Me</Link>
              </li>
              <li class="mr-7">
                  <Link to="/projects/" class="block py-2 pl-3 pr-4">Projects</Link>
              </li>
              <li class="mr-7">
                  <Link to="/hobbies/" class="block py-2 pl-3 pr-4">Hobbies</Link>
              </li>
              <li class="mr-7">
                  <Link to="/contact/" class="block py-2 pl-3 pr-4">Contact</Link>
              </li>
            </ul>
            </div>
          </nav>
          <h1 class="font-black">ABOUT ME</h1>
          <p class="flex">So a little bit about myself, I am a 4th year CS college student based in Saint-Lambert, Québec. I have had the privilege to work with a multitude of technologies, software, frameworks, and last but not least: my peers, throughout the years in the program.</p>
        </div>
    </Layout>
    )
}

export default AboutPage

export const Head = () => <title>About Me</title>