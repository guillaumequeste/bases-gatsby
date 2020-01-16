import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PageEssai = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the essai page</h1>
    <p>Welcome to page essai</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PageEssai
