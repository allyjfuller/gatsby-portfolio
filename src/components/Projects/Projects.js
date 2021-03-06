import React from 'react'
import ProjectList from './ProjectList'
import {useStaticQuery, graphql} from 'gatsby'

const getProjects = graphql`
query{
    projects: allContentfulProject{
        edges{
        node{
          title
          description{
            description
          }
          slug
          contentful_id
          updated
          images{
            fluid{
            ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Projects = () => {
    const {projects} = useStaticQuery(getProjects);

    return (
        
            <ProjectList projects={projects} />
        
    )
}

export default Projects
