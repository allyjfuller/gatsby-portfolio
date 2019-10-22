import React from 'react'
import Image from 'gatsby-image'
import styles from '../../css/tour.module.css'
import {FaMap} from 'react-icons/fa'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Project = ({project}) => {
    const {title,description,updated,slug,images} = project
    console.log(title);
    return <article>this is a single project</article>
}

export default Project

