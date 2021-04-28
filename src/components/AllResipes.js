import React from "react"
import TagList from "./Taglist"
import RecipesList from "./RecipesList"
import { graphql, useStaticQuery } from "gatsby"
const query = graphql`
  {
    allContentfulRecipe(sort: { fields: contentful_id, order: ASC }) {
      nodes {
        id
        cookTime
        prepTime
        title
        content {
          tags
        }
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
    }
  }
`

const AllResipes = () => {
  const data = useStaticQuery(query)
  const recipes = data.allContentfulRecipe.nodes

  return (
    <section className="page">
      <h1>All Recipes</h1>
      <div className="recipes-container ">
        <TagList recipes={recipes} />
        <RecipesList recipes={recipes} />
      </div>
    </section>
  )
}

export default AllResipes
