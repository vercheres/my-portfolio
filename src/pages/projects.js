import * as React from "react"
import { Link } from "gatsby"
import "../style/site.scss"
import { firestore } from "../utils/firebase"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { useState } from "react"
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"

const ProjectPage = () => {

    const [projects, setProjects] = useState([])

    const fetchProjects = async() => {
        firestore.collection('projects').get().then(snapshot => {
            snapshot.forEach(entry => {
                var data = entry.data()
                setProjects(arr => [...arr, data])
            })
        })
    }

    React.useEffect(() => {
        fetchProjects();
    }, [])

    return (
        <Layout>
        <SEO title="projects"/>
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
            <h1 class="font-black">PROJECTS</h1>
            <h4>Here are some projects that I worked on/have been a part of in the past.</h4>
            <br/>
            <div class="flex">
                <div class="grid grid-cols-3 content-between" className="projectDetail">
                    {
                        projects && projects.map(project => {
                            console.log(project)
                            const screenshot = project.screenshot
                            return (
                                
                                <div className="projectContainer">
                                    <img class="object-contain" src={screenshot} max-width="100"/>
                                    <a href={project.link}>
                                            <h4>{project.name}</h4>
                                    </a>
                                            <p class="break-words">{project.description}</p>
                                            <p class="break-words">Technologies: {project.technologies}</p>
                                </div>  
                            )
                        })
                    }
                </div>
            </div>
    </Layout>
    )
}

export default ProjectPage

export const Head = () => <title>Projects</title>