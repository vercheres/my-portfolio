import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import "../style/site.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import TextScramble, { ScrambleTexts } from '@twistezo/react-text-scramble'
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import Typewriter from 'typewriter-effect';

const texts = [
  'INTERN @ SERTI KEYLOOP',
  'CS STUDENT @ CÉGÉP CHAMPLAIN',
]
const IndexPage = () => {
  const [pause, setPause] = useState(false)
  
  const onDownloadClick = () => {
    fetch('My_Resume_Stage.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'My_Resume_Stage.pdf';
        alink.click();
    })
    })
  }

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
                  <Link to="/skills/" class="block py-2 pl-3 pr-4 md:p-0">Skills</Link>
              </li>
              <li>
                  <Link to="/projects/" class="block py-2 pl-3 pr-4 md:p-0">Projects</Link>
              </li>
              <li>
                  <Link to="/contact/" class="block py-2 pl-3 pr-4 md:p-0">Contact</Link>
              </li>
              <li>
                  <a href="https://www.linkedin.com/in/anhtuannguyen14/"><FaLinkedin/></a>
              </li>
              <li>
                  <a href="https://github.com/vercheres"><FaGithub/></a>
              </li>
            </ul>
            </div>
            </div>
          </nav>
          <h1 class="font-black">PORTFOLIO</h1>
          <div class="flex flex-row gap-4">
            <div> 
              <StaticImage src="../images/photo.jpg" class="rounded-lg drop-shadow-3xl" layout="constrained" alt="portrait" width={350} height={500} quality={90} />
            </div>
            <div class="flex-col">
              <h3 class="font-black"><Typewriter options={{strings: "Manh Anh Tuan, Nguyen", autoStart: true, loop: false}}/></h3>
              <h4 class="font-black"><Typewriter options={{strings: texts, autoStart: true, loop: true}}/></h4>
              <p>Hello! My name's Tuan</p>
              <p>I am a Computer Science student based in Saint-Lambert, Québec.</p>
              <p></p>
              <button class="shadow bg-[#0081a7] hover:bg-[#029ecc] focus:shadow-outline disabled:bg-gray-500 focus:outline-none text-white font-bold py-2 px-4 rounded" onClick={onDownloadClick}>Resume</button>
            </div>
          </div>
          <div class="flex flex-row gap-4">
            
            <div class="flex-col">
              <h3 class="font-black"><Typewriter options={{strings: "Manh Anh Tuan, Nguyen", autoStart: true, loop: false}}/></h3>
              <h4 class="font-black"><Typewriter options={{strings: texts, autoStart: true, loop: true}}/></h4>
              <p>Hello! My name's Tuan</p>
              <p>I am a Computer Science student based in Saint-Lambert, Québec.</p>
              <p></p>
              <button class="shadow bg-[#0081a7] hover:bg-[#029ecc] focus:shadow-outline disabled:bg-gray-500 focus:outline-none text-white font-bold py-2 px-4 rounded" onClick={onDownloadClick}>Resume</button>
            </div>
            <div> 
              <StaticImage src="../images/photo.jpg" class="rounded-lg drop-shadow-3xl" layout="constrained" alt="portrait" width={350} height={500} quality={90} />
            </div>
          </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
