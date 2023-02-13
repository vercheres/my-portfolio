import * as React from "react"
import { Link } from "gatsby"
import "../style/site.scss"
import { getProjects } from "../utils/logger"
import { firestore } from "../utils/firebase"
import Layout from "../components/layout"

const ProjectPage = () => {
    React.useEffect(() => {
        getProjects()
    }, [])
    return (
        <Layout>
        <div class="container">
        <nav class="flex items-center justify-between px-2 py-2.5">
            <ul class="flex items-center justify-between">
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
            <h1 class="font-black">PROJECTS</h1>
            <h4>A list of projects that I worked on/have been a part of, amusez vous!</h4>
            <div class="flex">
                <div className="projectDetail">
                    {}
                </div>
            </div>
        </div>
    </Layout>
    )
}

export default ProjectPage

export const Head = () => <title>Projects</title>