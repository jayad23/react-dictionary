import React from 'react'
import { useCustomNavigation } from '@hooks/useCustomNavigation'

const About = () => {
  const { handleNavigation } = useCustomNavigation()
  return (
    <div>
      <h1>About</h1>
      <button onClick={() => handleNavigation("/")}>GO HOME</button>
    </div>
  )
}

export default About