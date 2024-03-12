import React, { useEffect } from 'react'

import 'src/App.css'
import 'src/static/common.css'

import Navbar from 'src/components/navbar/Navbar'
import Intro from 'src/components/parts/Intro'
import Section from 'src/components/parts/Section'
import Gallery from 'src/components/parts/Gallery'
import AboutMe from 'src/components/parts/AboutMe'
import Start from 'src/components/parts/Start'
import Contact from 'src/components/parts/Contact'
import Footer from 'src/components/parts/Footer'

import 'bootstrap/dist/css/bootstrap.min.css'

function App () {
  useEffect(() => {
    document.title = 'MMPK'
  }, [])

  return (
    <div className='app'>
      <Navbar />
      <Section name='main' child={<Start />}></Section>
      <div style={{ marginLeft: '15vw', marginRight: '15vw' }}>
        <Section name='aboutMe' child={<AboutMe />}></Section>
        <Section name='projects' child={<Intro title='TODO' />}></Section>
        <Section name='gallery' child={<Gallery />}></Section>
        <Section name='contact' child={<Contact />}></Section>
      </div>
      <Section name='footer' child={<Footer />}></Section>
    </div>
  )
}

export default App
