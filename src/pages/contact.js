import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Layout from '../components/layout'
import "./style.css"

export default () => (
  <StaticQuery
    query={graphql`
      query SieTitleQuery {
        site {
          siteMetadata {
            title
            theme
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <div className="section">
          <form
            name="test"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />                <h4 style={{ color: `white` }}>Ideas, thoughts, coffee?</h4>
            <h4 style={{ color: `white` }}>Contact {data.site.siteMetadata.title}</h4>
            <label for="name">Name: *</label>
            <input name="name" placeholder="  First and Last Name" type="text" /><br />
            <label for="email">Email: *</label>
            <input name="email" placeholder="  Email" type="email" /><br />
            <label for="message">Your Message:</label>
            <textarea name="message" placeholder="  Anything else we should know before your lesson?" type="textarea" /><br />
            <button style={{ margin: `15px auto`, borderRadius: `10px` }}>Submit</button>
          </form>
        </div>
      </Layout>
    )}
  />
)
