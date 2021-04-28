import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs"
import Layout from "../components/Layout"

const RecipeTemplate = ({ data }) => {
  const {
    title,
    cookTime,
    content,
    prepTime,
    serving,
    description: { description },
    image,
  } = data.contentfulRecipe
  const pathToImage = getImage(image)
  const { tags, instructions, ingredients, tools } = content

  return (
    <Layout>
      <main className="page">
        <div className="recipe-page">
          <section className="recipe-hero">
            <GatsbyImage
              image={pathToImage}
              alt={title}
              className="about-img"
            />
            <div className="recipe-info">
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="recipe-icons">
                <div>
                  <BsClock />
                  <h5>Prep Time</h5>
                  <p>{prepTime} min.</p>
                </div>
                <div>
                  <BsClockHistory />
                  <h5>Cook Time</h5>
                  <p>{cookTime} min.</p>
                </div>
                <div>
                  <BsPeople />
                  <h5>Serving</h5>
                  <p>{serving}</p>
                </div>
              </div>
              <p className="recipe-tags">
                Tags:
                {tags.map((tag, index) => {
                  return (
                    <Link to={`/${tag}`} key={index}>
                      {tag}
                    </Link>
                  )
                })}
              </p>
            </div>
          </section>

          <section className="recipe-content">
            <div>
              <h4>instructions</h4>
              {instructions.map((item, index) => {
                return (
                  <div key={index} className="single-instruction">
                    <header>
                      <p>step {index + 1}</p>
                      <div></div>
                    </header>
                    <p>{item}</p>
                  </div>
                )
              })}
            </div>
            <div className="second-column">
              <div>
                <h4>ingredients</h4>
                {ingredients.map((item, index) => {
                  return (
                    <p key={index} className="single-ingredient">
                      {item}
                    </p>
                  )
                })}
              </div>
              <div>
                <h4>tools</h4>
                {tools.map((item, index) => {
                  return (
                    <p key={index} className="single-tool">
                      {item}
                    </p>
                  )
                })}
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  )
}
export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      cookTime
      serving
      content {
        ingredients
        instructions
        tags
        tools
      }
      description {
        description
      }
      prepTime
      image {
        gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
      }
    }
  }
`

export default RecipeTemplate
