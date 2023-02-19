import * as React from "react"
import { Link } from "gatsby"
import "../style/site.scss"
import { firestore } from "../utils/firebase"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { useState } from "react"

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
                            return (
                                <div className="projectCard">
                                <div class="space-x-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                                    <img class="rounded-t-lg" src={project.screenshot} alt="" width={440} height={500}/>
                                    <div class="p-5">
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{project.name}</h5>
                                            <p class="mb-3 font-normal text-gray-700">{project.description}</p>
                                            <p class="mb-5 font-normal text-gray-300">Technologies: {project.technologies}</p>
                                <a href={project.link} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#8338ec] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                 GitHub
                                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                </a>
                                </div>
                            </div>
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