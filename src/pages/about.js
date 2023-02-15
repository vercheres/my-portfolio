import * as React from "react"
import { Link } from "gatsby"
import "../style/site.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProgressBar from "../components/progress-bar"
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
          <p class="break-words">So a little bit about myself, I am a 4th year CS college student based in Saint-Lambert, Québec. I have had the privilege to work with a multitude of technologies, software, frameworks, and last but not least: my peers, throughout the years in the program. </p>

          <h4 class="font-black">My professional skills</h4>
          <p></p>
          {programmingData.map((item, idx) => (
            <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} label={item.label} />
          ))}
          <h4 class="font-black">My language skills</h4>

          {languagesData.map((item, idx) => (
            <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} label={item.label} />
          ))}
    </Layout>
    )
}

export default AboutPage

export const Head = () => <title>About Me</title>