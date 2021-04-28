import React from "react"
import Layout from "../components/Layout"
// import SetupTags from "../utils/SetupTags"

import { Link, graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

const Tags = () => {
  const data = useStaticQuery(query)
  const data1 = data.allContentfulRecipe.nodes

  const allTags = {}
  data1.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      if (allTags[tag]) {
        allTags[tag] = allTags[tag] + 1
      } else {
        allTags[tag] = 1
      }
    })
  })
  const newTags = Object.entries(allTags).sort((a, b) => {
    const [firstTag] = a
    const [secondTag] = b
    return firstTag.localeCompare(secondTag)
  })

  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag
            return (
              <Link key={index} to={`/${text}`} className="tag">
                <h5>{text}</h5>
                <p>{value} Recipe</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export default Tags
