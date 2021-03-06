import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import developers from '../data/developers.json'
import members from '../data/members.json'
import GithubCard from '../components/GithubCard'
import { repos } from '../data/github'

export default function Oss() {
  const [activePill, setActivePill] = React.useState('All')
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  const developerTags = developers
    .reduce((acc, x) => acc.concat(x.tags), []) // get all tags
    .filter((v, i, a) => a.indexOf(v) === i) // remove duplicates
    .sort((a, b) => a.localeCompare(b)) // alphabetical
  const developerPills = ['All'].concat(developerTags)

  return (
    <Layout title={`${siteConfig.title}`} description={siteConfig.tagline}>
      <section className={'section-lg'}>
        <div className="container">
          <div className={'row '}>
            <div className="col">
              <h2 className="with-underline">Open source</h2>
              <p className="">
                DEUS.finance is maintained by the DEUS DAO and is completely open source software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DAO Members */}
      <section className={'section-lg'} id="council">
        <div className="container">
        <h2 className="with-underline">DAO Council Members</h2>
          <div className="row is-multiline">
            {members
              .map((x, idx) => (
                <div className={'col col--4'} key={idx}>
                  <div className="card">
                    <div className="card__body">
                      <div className="avatar">
                        <div className="avatar__photo-link avatar__photo avatar__photo--lg">
                          <img alt={x.name} src={`img/members/${x.img_name}`} />
                        </div>
                        <div className="avatar__intro">
                          <h4 className="avatar__name">{x.name}</h4>
                          <small className="avatar__subtitle">{x.role}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <br />
        </div>
      </section>

      {/* Developers */}
      <section className={'section-lg'} id="developers">
        <div className="container">
          <h2>Developers</h2>
          <ul class="pills">
            {developerPills.map((x) => (
              <li
                key={x}
                class={`pills__item ${activePill == x ? 'pills__item--active' : ''}`}
                onClick={() => setActivePill(x)}
              >
                {x}
              </li>
            ))}
          </ul>

          <div className="row is-multiline">
            {developers
              .filter((x) => activePill == 'All' || x.tags.includes(activePill))
              .sort((a, b) => a.handle.localeCompare(b.handle))
              .map((x, idx) => (
                <div className={'col col--4'} key={idx}>
                  <a className="card" href={`https://github.com/${x.handle}`} target="_blank">
                    <div className="card__body">
                      <div className="avatar">
                        <div className="avatar__photo-link avatar__photo avatar__photo--lg">
                          <img alt={x.handle} src={`https://github.com/${x.handle}.png`} />
                        </div>
                        <div className="avatar__intro">
                          <h4 className="avatar__name">@{x.handle}</h4>
                          <small className="avatar__subtitle">{x.description}</small>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Repositories */}
      <section className={'section-lg'} id="repositories">
        <div className="container">
          <h2>Repositories</h2>
          <div className="row is-multiline">
            {repos.map((props, idx) => (
              <div className={'col col--6'}>
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
        </div>
      </section>
    </Layout>
  )
}

function ContributorCard({ title, description, href, stars, handle }) {
  return (
    <a className={'card'} href={href} style={{ height: '100%' }}>
      <div className="card__body">
        <h4 style={styles.h4} style={{ margin: 0 }}>
          {title.toUpperCase()}
        </h4>
        <small>{description}</small>
      </div>
      <hr style={styles.hr} />
      <div style={styles.cardBase}>
        <div>@{handle}</div>
        <div>{stars} ★</div>
      </div>
    </a>
  )
}

const styles = {
  hr: {
    margin: '15px 0 10px 0',
  },
  h3: {
    margin: 0,
    textTransform: 'capitalize',
  },
  cardBase: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '0 15px 10px 15px',
    fontSize: '0.8em',
  },
}
