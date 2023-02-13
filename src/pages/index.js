import * as React from "react"
import { Link } from "gatsby"
import "../style/site.scss"
import Menu from "../components/menu"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
        <div class="container">
        <nav class="flex items-center justify-between px-2 py-2.5">
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
          </nav>
      
          <h1 class="font-black">MANH ANH TUAN NGUYEN</h1>
          <h4>Welcome to my web portfolio! Enjoy your stay...</h4>
          <Profile/>
        </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

export function Profile() {

  return <StaticImage src="../images/photo.jpg" imgStyle={{border: "10px green"}} alt="portrait"/>
}