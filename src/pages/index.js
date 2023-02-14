import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import "../style/site.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import TextScramble, { ScrambleTexts } from '@twistezo/react-text-scramble'

const texts = [
  'MANH ANH TUAN NGUYEN',
  'INTERN @ SERTI',
  'CS STUDENT @ CÉGÉP CHAMPLAIN SAINT-LAMBERT'
]
const IndexPage = () => {
  const [pause, setPause] = useState(false)

  return (
    <Layout>
      <SEO title="Home" />
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
          <h1 class="font-black"><TextScramble
          texts={texts}
          letterSpeed={10}
          nextLetterSpeed={100}
          pauseTime={1500}
          paused={pause}
        /></h1>
          <h4>Welcome to my web portfolio! Enjoy your stay...</h4>
          
          <StaticImage src="../images/photo.jpg" class="rounded-lg drop-shadow-3xl" layout="constrained" alt="portrait" width={350} height={500} quality={90} />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
