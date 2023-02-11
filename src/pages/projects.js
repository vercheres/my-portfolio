import * as React from "react"
import { Link } from "gatsby"
import "../style/site.scss"
import { getProjects } from "../utils/projects"

const ProjectPage = () => {
    React.useEffect(() => {
        getProjects()
    }, [])
    return (
        <main>
        <div className="indexHeader">
        <nav class="flex items-center justify-between">
            <ul class="flex items-center justify-between">
              <li class="mr-7">
                  <Link to="/">Home</Link>
              </li>
              <li class="mr-7">
                  <Link to="/about/">About Me</Link>
              </li>
              <li class="mr-7">
                  <Link to="/projects/">Projects</Link>
              </li>
              <li class="mr-7">
                  <Link to="/hobbies/">Hobbies</Link>
              </li>
              <li class="mr-7">
                  <Link to="/contact/">Contact</Link>
              </li>
            </ul>
          </nav>
          <h1 class="font-black">PROJECTS</h1>

        </div>
    </main>
    )
}

export default ProjectPage

export const Head = () => <title>Projects</title>