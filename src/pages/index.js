import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import "../style/site.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import Typewriter from 'typewriter-effect';
import PDF from './Tuan_Resume_Stage.pdf';
import Tilt from 'react-parallax-tilt';

const texts = [
  'INTERN @ SERTI KEYLOOP',
  'CS STUDENT @ CÉGÉP CHAMPLAIN',
]
const IndexPage = () => {
  const [pause, setPause] = useState(false)
  
  const onDownloadClick = () => {
    fetch(PDF).then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = PDF;
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
          <div class="flex flex-row mb-13 gap-4">
            <div> 
              <Tilt>
                <StaticImage src="../images/photo.jpg" class="rounded-lg drop-shadow-3xl" layout="constrained" alt="portrait" width={350} height={500} quality={90} />
              </Tilt>
            </div>
            <div class="flex-col">
              <h3 class="font-black"><Typewriter options={{strings: "Manh Anh Tuan, Nguyen", autoStart: true, loop: false}}/></h3>
              <h4 class="font-black"><Typewriter options={{strings: texts, autoStart: true, loop: true}}/></h4>
              <p>Hi, thank you for visiting my website! My name's Tuan.</p>
              <p>I am a Computer Science student based in Saint-Lambert, Québec.</p>
              <p>With 4 years of experience working with a myriad of programming languages, software, and technologies.</p>
              <p>You can check out my résumé below.</p>
              <button class="shadow bg-[#0081a7] hover:bg-[#029ecc] focus:shadow-outline disabled:bg-gray-500 focus:outline-none text-white font-bold py-2 px-4 rounded" onClick={onDownloadClick}>Resume</button>
            </div>
          </div>
          <br/>
          <br/>
          <div class="flex flex-row mt-10 gap-4">
            <div class="flex-col">
              <h3 class="font-black"><Typewriter options={{strings: "Education", autoStart: true, loop: false}}/></h3>
              <h4 class="font-black"><Typewriter options={{strings: "2019-2023", autoStart: true, loop: false}}/></h4>
              <p>I received my collegial-level education from CÉGÉP Champlain Saint-Lambert.</p>

            </div>
            <div> 
              <Tilt>
                <StaticImage src="../images/college.jpeg" class="rounded-lg drop-shadow-3xl" layout="constrained" alt="portrait" width={700} height={450} quality={90} />
              </Tilt>
            </div>
          </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
