import React from 'react'
import Layout from '../../components/Layout'
import styles from '../../styles/projects.module.css'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'




export default function Projects({data}) {

    console.log(data);
    const projects = data.projects.nodes
    const contact = data.contact.siteMetadata.contact

    return (
        <Layout>
            <div className={styles.portfolio}>
                <h2>Portfolio</h2>
                <h3>Projects & Websites I've Created</h3>
                <div className={styles.projects}>
                    { projects.map(project => (
                        <Link key={project.id} to={project.frontmatter.slug}>
                            <div>
                                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid}/>
                            <h3>{project.frontmatter.title}</h3>
                            <p>{ project.frontmatter.stack}</p>

                            </div>
                        </Link>
                    ))}


                </div>
                <p>Do you like what you see? Contact me at {contact} for a quote!</p>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query ProjectsPage {
  projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        title
        stack
        slug
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      id
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}

`
