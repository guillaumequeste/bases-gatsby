import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

import Img from "gatsby-image"

const BlogPostTemplate = ({ data }) => {

    // extract the contents from data
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;

    let post = data.markdownRemark

    let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid

    // return the component layout
    return (
        <Layout>
            <h1>{ frontmatter.title }</h1>
            <h3> { frontmatter.author } | { frontmatter.date } </h3>
            <Img fluid={featuredImgFluid} style={{width: 250, height:250}} />
            <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </Layout>
    );
}
export default BlogPostTemplate;

export const postDataQuery = graphql`
query postDataQuery($path: String!) {
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
        author
        date
        featuredImage {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
      }
    }
  }
`