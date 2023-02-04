import * as React from "react"
import { Link } from "gatsby"
import "../style/site.scss"

const IndexPage = () => {
  return (
    <main>
        <div className="errorPage">
          <h1 class="font-black">404 :(</h1>
        </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
