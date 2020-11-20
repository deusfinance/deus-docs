import React, { useState } from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import CustomCodeBlock from '../components/CustomCodeBlock'
import GithubCard from '../components/GithubCard'
import HowCard from '../components/HowCard'
import { repos } from '../data/github'

const swapsVSstonks = `
const favorite_stonk = await centralized_database.findOne({
  exchange: 'NASDAQ',
  stonk: 'TESLA, Inc.',
  ticker: 'TSLA'
}).select()

const mint = await DEUS_SWAP.mint({
  origin: 'NASDAQ',
  stonk: favorite_stonk,
  isERC20: true,
  decimals: 18,
  isTradeable: true,
  isPermissionless: true
})

if (mint.isSuccess) {
  console.log('Decentralizing the entire derivatives market...')
}
`.trim()

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout title={`${siteConfig.title}`} description={siteConfig.tagline}>
      <main className="HomePage">
        {/* HEADER */}
        <header className={classnames('hero full', styles.heroBanner)}>
          <div className="container">
            <div className="row">
              <div className="col col--5">
                <h2 className="hero__title">{siteConfig.tagline}</h2>
                <p className="hero__subtitle">
                next generation asset tokenization
                </p>
                <div>
                  <Link
                    className={classnames(
                      'button hero--button button--md button--secondary button--outline responsive-button',
                      styles.button
                    )}
                    to={useBaseUrl('docs')}
                    style={{ marginLeft: 0, marginTop: 10 }}
                  >
                    Learn More
                  </Link>
                  <Link
                    className={classnames(
                      'button hero--button button--md button--primary responsive-button',
                      styles.button
                    )}
                    to={'https://app.deus.finance/swap'}
                    style={{ marginTop: 10 }}
                  >
                    Swap to tokenized stocks
                  </Link>
                </div>
              </div>
              <div className="col col--7">
                <CustomCodeBlock
                  header="Trading stocks on Uniswap and other decentralized exchanges is now a reality."
                  js={swapsVSstonks}
                />
              </div>
            </div>
          </div>
        </header>

          {/* OSS */}
          {/*}<section className={'section-lg'}>
            <div className="container">
              <div className={classnames('row', styles.responsiveCentered)}>
                <div className="col col--6 col--offset-3">
                  <h2 className="">Open source</h2>
                  <p className="">
                    Supabase <Link to={'/oss'}>loves open source</Link>. Follow us on{' '}
                    <a href="https://github.com/supabase">GitHub</a>. <strong>Watch</strong> the
                    releases of each repo to get notified when we are ready for Beta launch.
                  </p>
                </div>
              </div>

              <div className="row is-multiline">
                {repos
                  .filter((x) => ['supabase', 'realtime', 'postgres', 'pg-api'].includes(x.name))
                  .map((props, idx) => (
                    <div className={'col col--6'} key={idx}>
                      <GithubCard
                        key={idx}
                        title={props.name}
                        description={props.description}
                        href={props.html_url}
                        stars={props.stargazers_count}
                        handle={props.full_name}
                      />
                    </div>
                  ))}
              </div>
              <div style={{ textAlign: 'right' }}>
                <a href="/oss">See more →</a>
              </div>
            </div>
          </section> */}


      </main>
    </Layout>
  )
}

export default Home
