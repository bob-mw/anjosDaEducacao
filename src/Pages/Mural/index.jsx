import React, { useState } from 'react'
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import * as S from './styled'
import CardItem from '../../components/CardItem'
import CardList from '../../components/CardList'

const Store = ({ match }) => {
    let { id } = match.params;
    const imageHasLoaded = true
  
    return (
      <>
        <CardList selectedId={id} />
        <AnimatePresence>
          {id && imageHasLoaded && <CardItem id={id} key="item" />}
        </AnimatePresence>
      </>
    )
  }

const Mural = () => {

    return (  
      <>
          <S.Title>Mural de depoimentos</S.Title>
          <S.Container>
              <AnimateSharedLayout type="crossfade">
                  <Router>
                      <Route path={["/mural/:id", "/mural"]} component={Store} />
                  </Router>
              </AnimateSharedLayout>
          </S.Container>
      </>
    )
}

export default Mural