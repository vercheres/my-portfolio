import * as React from "react"
import { Link } from "gatsby"
import "../style/site.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProgressBar from "../components/progress-bar"

import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
const AboutPage = () => {
    const programmingData = [
        { bgcolor: "#ffbf69", completed: 90, label: 'iOS Development' },
        { bgcolor: "#ef476f", completed: 89, label: 'Java' },
        { bgcolor: "#118ab2", completed: 85, label: 'Python' },
        { bgcolor: "#8ac926", completed: 88, label: 'HTML & CSS' },
        { bgcolor: "#06d6a0", completed: 87, label: 'C#' },
        { bgcolor: "#9b5de5", completed: 79, label: 'C++' },
      ];
      const languagesData = [
        { bgcolor: "#ffbf69", completed: 95, label: 'Vietnamese' },
        { bgcolor: "#ef476f", completed: 95, label: 'English' },
        { bgcolor: "#118ab2", completed: 75, label: 'French' },
       
      ];
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
        
          <h1 class="font-black">SKILLS</h1>
         
          <div class="my-8 mb-14">
            <h4 class="font-black">My professional skills</h4>
            <p></p>
          </div>
          <div class="flex gap-7">
          {programmingData.map((item) => (
            <div class="flex flex-col justify-center" style={{ width: 150, height: 150}}>
              <div >
                <CircularProgressbarWithChildren value={item.completed} text={`${item.completed}%`} styles={buildStyles({
                  textSize: '15px',
                  pathColor: "#06d6a0",
                  textColor: "#1b4332"
                })}/>    
              </div>
              <div>
                <p class="text-center text-[20px] mt-3">{item.label}</p>
              </div>
            </div>
          ))}
          </div>
          <div class="mt-14 mb-14">
            <h4 class="font-black">My language skills</h4>
          </div>
          <div class="flex gap-7">
          {languagesData.map((item) => (
            <div class="flex flex-col justify-center" style={{ width: 150, height: 150}}>
              <div >
                <CircularProgressbarWithChildren value={item.completed} text={`${item.completed}%`} styles={buildStyles({
                  textSize: '15px',
                  pathColor: "#06d6a0",
                  textColor: "#1b4332"
                })}/>    
              </div>
              <div>
                <p class="text-center text-[20px] mt-3">{item.label}</p>
              </div>
            </div>
          ))}
          </div>

    </Layout>
    )
}

export default AboutPage

export const Head = () => <title>About Me</title>