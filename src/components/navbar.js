import React from "react"
import "../style/site.scss"

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a href="/">
                        Home
                    </a>
                </li>
                <li>
                    <a href="/about">
                        About Me
                    </a>
                </li>
                <li>
                    <a href="/education">
                        Education
                    </a>
                </li>
                <li>
                    <a href="/projects">
                        Projects
                    </a>
                </li>
            </ul>
        </nav>
    )
}
