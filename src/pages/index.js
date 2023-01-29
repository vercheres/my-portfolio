import * as React from "react"
import { Link, Layout } from "gatsby"
import "../style/site.css"


export function Header() {
  
}
const IndexPage = () => {
  return (
      <main>
        <div>
          <h1 className="text-3xl">MANH ANH TUAN NGUYEN</h1>
          <p>Welcome to my web portfolio, enjoy your stay...</p>
        </div>
      </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
