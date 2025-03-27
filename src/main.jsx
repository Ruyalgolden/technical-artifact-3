import React from 'react'
import { createRoot } from 'react-dom/client'
import CardComponent from './CardComponent.jsx'
import BannerComponent from './BannerComponent.jsx'
import ListComponent from './ListComponent.jsx'
import GalleryComponent from './GalleryComponent.jsx'
import data from './data.js'
createRoot(document.getElementById('root')).render(
  <>
    <BannerComponent/>
    <CardComponent />
    <ListComponent data={data.pikachu}/>
    <GalleryComponent data={data.pikachu}/>
  </>
)
