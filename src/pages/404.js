import * as React from "react"
import "../style/site.scss"

const IndexPage = () => {
  return (
    <main>
        <div className="errorM">
          <h1 class="font-black">404</h1>
        </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
