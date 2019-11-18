import React, { Component } from 'react'

import brennaToCat from './images/Brennatocat.png'
import filmToCats from './images/filmtocats.png'
import finTechToCat from './images/Fintechtocat.png'
import puddleJumperOctodex from './images/puddle_jumper_octodex.jpg'
import sentryToCat from './images/Sentrytocat_octodex.jpg'
import surfToCat from './images/surftocat.png'
import githubIcon from './images/Githubicon.svg'


import CatImages from './components/CatImages'

const App = () => {
  return (
    <>
      <nav class="navBar">
        <img class="githubIcon" src={githubIcon} />
        <header class="octodex">Octodex</header>
        <div class="navWrapper">
          <ul class="leftNav">
            <a href="https://octodex.github.com/" class="visitedLink">Home</a>
            <a href="https://octodex.github.com/faq/" class="link">FAQ</a>
          </ul>
          <ul class="rightNav">
            <a href="https://twitter.com/githubdesign" class="link">Follow us on Twitter</a>
            <a href="https://github.com/" class="link">Back to GitHub.com</a>
          </ul>
        </div>
      </nav>
      <main class="mainContent">
        <CatImages image={brennaToCat} number="1" name="Brennatocat" alt="cat in a lazy boy beanbag cleaning herself" />
        <CatImages image={filmToCats} number="2" name="Filmtocats" alt="two cats making a movie" />
        <CatImages image={finTechToCat} number="3" name="Fintechtocat" alt="technically inclined cat making selections on various touch screens" />
        <CatImages image={puddleJumperOctodex} number="4" name="Puddlejumperoctodex" alt="cat holding a purple umbrella about to jump into a puddle" />
        <CatImages image={sentryToCat} number="5" name="Sentrytocat" alt="firefighter cat holding a spraying fire hose" />
        <CatImages image={surfToCat} number="6" name="Surftocat" alt="winking cat surfing a tall ocean wave" />

        {/* below is a reminder to start with HTML first */}
        {/* <div class="boxStyles">
          <img src={filmToCats} />
          <p>#2: FilmtoCats</p>
        </div>
        <div class="boxStyles">
          <img src={finTechToCat} />
          <p>#3: Fintechtocat</p>
        </div> */}
      </main>
    </>
  )
}

// get the images next to the pics


export default App
