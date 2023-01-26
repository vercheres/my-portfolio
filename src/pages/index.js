import * as React from "react"
import { Link } from "gatsby"
import "../style/site.css"

const IndexPage = () => {
  return (
    <main>
        <div>
            <h1>Manh Anh Tuan Nguyen</h1>
            <p>Welcome to my web portfolio, enjoy your stay...</p>
        </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
