import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import SmilingJu from "/static/img/smiling_ju.png";
// import SmilingJu from "lananas-portfolio/static/img/smiling_ju.png";
// import header from "../components/";


import styles from "../css/main_header.scss";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary')}>
      <div className="container">
        {/* <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        <div className="text-header">
          <h1 className="title-h1">Une Designeuse se perd dans le code</h1>
          <p className="subtitle-p">Je vais faire un composant pour les textes</p>
        </div>
        <img src={SmilingJu} className="img-smiling-ju" alt="smiling-julie" />
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
