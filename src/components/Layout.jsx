import React from 'react'
import Navbar from './Navbar'
import { useStaticQuery, graphql } from 'gatsby'
import '../styles/global.css'

export default function Layout({ children }) {

    
    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          copyright
        }
      }
    }`)

    const { copyright } = data.site.siteMetadata

  return (
    <div className='layout'>
        
        <Navbar />

        <div className='content'>

            { children }

        </div>

        <footer>
            <p>{copyright}</p>
        </footer>



    </div>
  )
}
