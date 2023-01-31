import * as React from "react"
import { Link, Layout } from "gatsby"
import "../style/site.css"

const AboutPage = () => {
    return (
      <Layout>
        <main>
          <div>
            <h1 className="text-3xl">ABOUT ME</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel elementum neque, id interdum leo. Nullam egestas sapien vel suscipit blandit. Cras porttitor dui posuere interdum maximus. Nulla vestibulum metus sit amet commodo egestas. Ut rhoncus pellentesque justo at consequat. Nam ornare ac magna at porta. Sed libero dolor, placerat quis tortor a, vulputate volutpat sem. Sed eros orci, tempus et diam pretium, tempor tempor purus.</p>
          </div>
        </main>
      </Layout>
    )
  }
  
  export default AboutPage
  
  export const Head = () => <title>About Me</title>