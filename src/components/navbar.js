import React from "react"
import { Link } from "gatsby"

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        About Me
                    </Link>
                </li>
                <li>
                    <Link to="/education">
                        Education
                    </Link>
                </li>
                <li>
                <Link to="/projects">
                        Projects
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
