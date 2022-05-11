import React from 'react';
import ReactBodymovin from 'react-bodymovin'
import animationData from './data.json'

export const Animation = () => {
  const animation = {
    loop: true,
    autoplay: true,
    prerender: true,
    animationData: animationData
  }
  return (
    <>
      <div>Animation</div>
      <ReactBodymovin options={animation} />
    </>
  )
}
