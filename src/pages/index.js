import React from "react"
import { Link } from "gatsby"
import { Site } from "../components/site"
import { SEO } from "../components/seo"
import { Paper, Banner, BannerText, BannerImage } from "../components/ui"

const Home = () => (
  <Site>
    <SEO title="Home" />
    <Banner big underline>
      <BannerImage>
        <img src="https://source.unsplash.com/klub_Ke-268/880x283" alt="" />
      </BannerImage>
      <BannerText>
        <h2>Instant Frappuccino</h2>
      </BannerText>
    </Banner>
    <Paper>
      <p>
        <strong>Pellentesque habitant morbi tristique</strong> senectus et netus
        et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
        vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet
        quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris
        placerat eleifend leo. Quisque sit amet est et sapien ullamcorper
        pharetra. Vestibulum erat wisi, condimentum sed,{" "}
        <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum,
        elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus
        lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar
        facilisis. Ut felis.
      </p>

      <h3>Aromatic Caramelization</h3>

      <ol>
        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
        <li>Aliquam tincidunt mauris eu risus.</li>
      </ol>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna.
        Cras in mi at felis aliquet congue. Ut a est eget ligula molestie
        gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis,
        tellus est malesuada tellus, at luctus turpis elit sit amet quam.
        Vivamus pretium ornare est.
      </p>
    </Paper>
  </Site>
)

export default Home
