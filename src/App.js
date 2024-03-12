import React, { useEffect } from 'react'

import 'src/App.css'
import 'src/static/common.css'

import Navbar from 'src/components/navbar/Navbar'
import Intro from 'src/components/parts/Intro'
import Section from 'src/components/parts/Section'

import 'bootstrap/dist/css/bootstrap.min.css'

function App () {
  useEffect(() => {
    document.title = 'MPK'
  }, [])

  return (
    <div className='app'>
      <Navbar />
      <Section name='test1' child={<Intro title='test1' />}></Section>
      <Section name='test2' child={<Intro title='test2' />}></Section>
      <Section name='test3' child={<Intro title='test3' />}></Section>
      <Section name='test4' child={<Intro title='test4' />}></Section>
      <Section name='test5' child={<Intro title='test5' />}></Section>
      <Section name='test6' child={<Intro title='test6' />}></Section>
    </div>
  )
}

export default App
