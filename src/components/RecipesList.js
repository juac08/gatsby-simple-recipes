import React from "react"
import { Link } from "gatsby"
import slugify from "slugify"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const RecipesList = ({ recipes = [] }) => {
  return (
    <div className="recipes-list">
      {recipes.map(recipe => {
        const { id, title, image, prepTime, cookTime } = recipe
        const slug = slugify(title, { lower: true })

        const pathToImage = getImage(image)
        return (
          <Link to={`/${slug}`} className="recipe" key={id}>
            <GatsbyImage
              image={pathToImage}
              className="recipe-img"
              alt={title}
            />
            <h5>{title}</h5>
            <p>
              Prep: {prepTime}min | cook: {cookTime}min
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default RecipesList
