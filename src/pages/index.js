import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import SmilingJu from "/static/img/smiling_ju.png";
import styles from "../css/mainheader.css";


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary')}>
      <div className="container">
        {/* <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        <div className="text-header">
          <h1 className="title-h1">Une Designeuse se perd dans le code</h1>
          <p className="subtitle-p">
          Je me présente, Julie graphiste ayant fait une reconversion pro' dans le front-end. Durant nos modules nous avions touché à de l'UI-UX ce qui m'a redonné goût au design et depuis je m'auto-forme.
          </p>
        </div>

        <div className="block-right">
          <img src={SmilingJu} className="img-smiling-ju" alt="smiling-julie" />
          <p className="name-lastname">Julie Thézénas</p>
          <p className="designer">UI UX designer</p>
          <p className="developer">Front-end développeuse</p>
          <div className="CV-box">CV à DL</div>
        </div>
        
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
