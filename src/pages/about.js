import * as React from "react"
import { Link } from "gatsby"
import "../style/site.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
const AboutPage = () => {
    return (
        <Layout>
          <SEO title="About"/>
          <nav class="flex items-center sm:px-4 px-2 py-2.5">
          <div class="container flex flex-wrap items-center justify-between mx-auto">
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0">
              <li>
                  <Link to="/" class="block py-2 pl-3 pr-4 md:p-0">Home</Link>
              </li>
              <li>
                  <Link to="/about/" class="block py-2 pl-3 pr-4 md:p-0">About Me</Link>
              </li>
              <li>
                  <Link to="/projects/" class="block py-2 pl-3 pr-4 md:p-0">Projects</Link>
              </li>
              <li>
                  <Link to="/hobbies/" class="block py-2 pl-3 pr-4 md:p-0">Hobbies</Link>
              </li>
              <li>
                  <Link to="/contact/" class="block py-2 pl-3 pr-4 md:p-0">Contact</Link>
              </li>
            </ul>
            </div>
            </div>
          </nav>
        
          <h1 class="font-black">ABOUT ME</h1>
          <p class="break-words">So a little bit about myself, I am a 4th year CS college student based in Saint-Lambert, Québec. I have had the privilege to work with a multitude of technologies, software, frameworks, and last but not least: my peers, throughout the years in the program.</p>
    </Layout>
    )
}

export default AboutPage

export const Head = () => <title>About Me</title>