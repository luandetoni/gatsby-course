import * as React from "react"
import { Link } from 'gatsby'

import Layout from "../components/Layout"
import Seo from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <PostItem 
      slug="/about/"
      category="Misc"
      date="13 de Março de 2022"
      timeToRead="5"
      title="Diga não ao Medium: tenha sua própria plataforma"
      description="Algumas razões para vocês ter a sua própria plataforma ao invés de soluções como Medium."
    />
  </Layout>
)

export default IndexPage
