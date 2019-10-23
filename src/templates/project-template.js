import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import styles from '../css/template.module.css'
import Img from 'gatsby-image'
import Info from '../components/SingleProject/Info'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Template = ({data}) => {
    const {title, 
        description:{description}, 
        updated, 
        images, 
        overview} 
        = data.project
    
    const [mainImage, ...projectImages] = images
    

    return <Layout>
        <StyledHero img={mainImage.fluid} />
        <section className={styles.template}>
            <div className={styles.center}>
                <div className={styles.images}>
                    {projectImages.map((item, index) => {
                        return <Img key={index} fluid={item.fluid} alt="single project" className={styles.image} />
                    })}
                </div>
                <h2>{title}</h2>
                <div className={styles.info}>
                    <h4>Updated: {updated}</h4>
                </div>
                    <p className={styles.desc}>
                        {description}
                    </p>
                    <h2>Info</h2>
                    <div className={styles.journey}>
                        {overview.map((item, index) => {
                            return <Info key={index} title={item.title} info={item.info}/>
                        })}
                </div>
                <AniLink fade to="/projects" className="btn-primary">
                    back to projects
                </AniLink>
            </div>
        </section>
    </Layout>
}

export const query = graphql `
query($slug:String!){
    project: contentfulProject(slug: {eq: $slug}){
      title
      description{
        description
      }
      updated(formatString:"MMMM YYYY")
      overview{
        title
        info
      }
      images{
        fluid{
        ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default Template
