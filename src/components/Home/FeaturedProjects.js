import React from 'react'
import Project from '../Projects/Project'
import { useStaticQuery, graphql } from 'gatsby'
import Title from '../Title'
import styles from '../../css/items.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const getProjects = graphql`
query{
    featuredProjects: allContentfulProject(filter:{featured: {eq: true}}){
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

const FeaturedProjects = () => {
    const response = useStaticQuery(getProjects)
const projects = response.featuredProjects.edges;
    return (
        <section className={styles.tours}>
            <Title title="featured" subtitle="projects" />
            <div className={styles.center}>
            {projects.map(({ node }) => {
                return <Project key={node.contentful_id} project={node}/>
            })}
            </div>
            
            <AniLink fade to="/projects" className="btn-primary">
                All Projects
            </AniLink>
        </section>
    )
}

export default FeaturedProjects
