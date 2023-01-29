import * as React from "react"
import { Link, Layout } from "gatsby"
import "../style/site.css"

const AboutPage = () => {
    return (
      <Layout>
        <Link to={'/about.js'}>About Me</Link>
  
        <main>
          <div>
            <h1 className="text-3xl">MANH ANH TUAN NGUYEN</h1>
            <p>Welcome to my web portfolio, enjoy your stay...</p>
          </div>
        </main>
      </Layout>
    )
  }
  
  export default AboutPage
  
  export const Head = () => <title>About Me</title>