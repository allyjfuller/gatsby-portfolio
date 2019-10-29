import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import StyledHero from "../components/StyledHero"
import { graphql } from 'gatsby'
import About from '../components/Home/About'
import Services from '../components/Home/Services'
import FeaturedProjects from '../components/Home/FeaturedProjects'

export default ({data}) => ( 

<Layout>
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
        <Banner title="Alexandra Fuller" info="Software Engineer">
            <AniLink fade to="/contact/" className="btn-white">
                Hire Me
            </AniLink>
        </Banner>
    </StyledHero>
    <About />
    <Services />
    <FeaturedProjects />
</Layout>
)

export const query = graphql`
query {
    defaultBcg: file(relativePath: { eq:
        "defaultBcg.jpeg"}) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
}
`
