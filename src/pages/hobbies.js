import * as React from "react"
import { Link } from "gatsby"
import "../style/site.scss"
import Layout from "../components/layout"
const HobbiesPage = () => {
    return (
        <Layout>
        <div class="container">
        <nav class="flex items-center justify-between">
            <ul class="flex items-center justify-between">
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
          </nav>
          <h1 class="font-black">HOBBIES</h1>
          <h4></h4>
        </div>
    </Layout>
    )
}

export default HobbiesPage

export const Head = () => <title>Hobbies</title>