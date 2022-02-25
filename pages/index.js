import React from 'react'
import styled from 'styled-components'
import Slider from '../components/Slider'

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  row-gap: 2rem;
`

const Index = () => {
  return (
    <Wrapper>
      <Slider 
        bImage='https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/1.jpg' 
        aImage='https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/1-1.jpg'
        width='400'
        />
        <Slider 
        bImage='https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/4.jpg' 
        aImage='https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/4-1.jpg'
        width='200'
        />
        <Slider 
        bImage='https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/3.jpg' 
        aImage='https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/3-1.jpg'
        width='800'
        />
        <Slider 
        bImage='https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/5-1.jpg' 
        aImage='https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/5.jpg'
        width='600'
        />
        <Slider 
        bImage='https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/6-1.jpg' 
        aImage='https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/6.jpg'
        width='350'
        />
    </Wrapper>
  )
}

export default Index