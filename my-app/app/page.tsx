import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/footer'
import Mainnm from './main/Main'
import Navigation from './navigation/navigation'
import B1 from './b1/page'
import B2 from './b2/page'
import FormSignUp from './b3/page'
import B4 from './b5/page'
import B5 from './b6/page'
import B6 from './b7/page'
export default function page() {
  return (
    <div>page
      <Header>
      </Header>
        <Navigation></Navigation>
      <Footer></Footer>
      <Mainnm></Mainnm>
      <B1></B1>
      <B2></B2>
      <FormSignUp></FormSignUp>
      <B4></B4>
      <B5></B5>
      <B6></B6>
    </div>
  )
}
