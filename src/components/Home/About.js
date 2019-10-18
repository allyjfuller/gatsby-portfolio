import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'
import img from '../../images/defaultBcg.jpeg'

const About = () => {
    return (
        <section className={styles.about}>
            <Title title="about" subtitle="me" />
            <div className={styles.aboutCenter}>
                <article className={styles.aboutImg}>
                    <div className={styles.imgContainer}>
                        <img src={img} alt="about me" />
                    </div>
                </article>
                <article className={styles.aboutInfo}>
                    <h4>Explore the difference</h4>
                    <p>Lorem Ipsum, dolor...</p>
                    <p>Lorem Ipsum, dolor...</p>
                    <button type="button" className="btn-primary">
                        Resume
                    </button>
                </article>
            </div>
        </section>
    )
}

export default About
