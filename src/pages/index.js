import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import SimpleHero from "../components/SimpleHero"
import About from '../components/Home/About'
import Services from '../components/Home/Services'

export default () => 

<Layout>
    <SimpleHero>
        <Banner title="Alexandra Fuller" info="Software Engineer">
            <Link to="/projects/" className="btn-white">
                My Work
            </Link>
        </Banner>
    </SimpleHero>
    <About />
    <Services />

</Layout>
