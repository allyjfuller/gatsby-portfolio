import React from 'react'
import Layout from '../components/Layout'
import styles from '../css/error.module.css'
import { Link } from 'gatsby'
import Banner from '../components/Banner'

export default function error() {
    return (
        <Layout>
            <header className={styles.error}>
                <Banner title="Dead end, mate.">
                    <Link to='/' className="btn-white">Go Back</Link>
                </Banner>
            </header>
        </Layout>
    )
}
