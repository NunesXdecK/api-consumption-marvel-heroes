import { useEffect, useState } from "react"

interface BGControl {
  bgColor: string
  strokeColor: string
  stroke: number
  tStroke: number
  one: number
  tOne: number
  two: number
  tTwo: number
  three: number
  tThree: number
}

export default function useBGSVG() {
  const [active, setActive] = useState<boolean>(false)
  const [bgControl, setBgControl] = useState<BGControl>({
    bgColor: '#000000',
    strokeColor: '#D60',
    stroke: 1,
    tStroke: 1,
    one: 0,
    tOne: 0,
    two: 0,
    tTwo: 0,
    three: 0,
    tThree: 0
  })

  const svg = `
    <svg class='bg-svg' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'>
      <rect style="transition-duration: 50ms;" fill='${bgControl.bgColor}' width='2000' height='1500' />
      <defs>
        <circle style="transition-duration: 50ms;" stroke='${bgControl.strokeColor}' vector-effect='non-scaling-stroke' id='a' fill='none' stroke-width='${bgControl.stroke}'
          r='315' />
        <use id='f' href='#a' stroke-dasharray='100 100 100 9999' />
        <use id='b' href='#a' stroke-dasharray='250 250 250 250 250 9999' />
        <use id='e' href='#a' stroke-dasharray='1000 500 1000 500 9999' />
        <use id='g' href='#a' stroke-dasharray='1500 9999' />
        <use id='h' href='#a' stroke-dasharray='2000 500 500 9999' />
        <use id='j' href='#a' stroke-dasharray='800 800 800 800 800 9999' />
        <use id='k' href='#a' stroke-dasharray='1200 1200 1200 1200 1200 9999' />
        <use id='l' href='#a' stroke-dasharray='1600 1600 1600 1600 1600 9999' />
      </defs>
      <g transform='translate(1000 750)' stroke-opacity='0.75'>
        <g style="transition-duration: 50ms;" transform='rotate(${bgControl.one} 0 0)'>
          <circle fill='${bgControl.strokeColor}' fill-opacity='0.75' r='10' />
          <g style="transition-duration: 50ms;" transform='rotate(${bgControl.two} 0 0)'>
            <use href='#f' transform='scale(.1) rotate(50 0 0)' />
            <use href='#f' transform='scale(.2) rotate(100 0 0)' />
            <use href='#f' transform='scale(.3) rotate(150 0 0)' />
          </g>
          <g style="transition-duration: 50ms;" transform='rotate(${bgControl.three} 0 0)'>
            <use href='#b' transform='scale(.4) rotate(200 0 0)' />
            <use href='#z' transform='scale(.5) rotate(250 0 0)' />
          </g>
          <g id='z' style="transition-duration: 50ms;" transform='rotate(${bgControl.two} 0 0)'>
            <g style="transition-duration: 50ms;" transform='rotate(${bgControl.one} 0 0)'>
              <use href='#b' />
              <use href='#b' transform='scale(1.2) rotate(90 0 0)' />
              <use href='#b' transform='scale(1.4) rotate(60 0 0)' />
              <use href='#e' transform='scale(1.6) rotate(120 0 0)' />
              <use href='#e' transform='scale(1.8) rotate(30 0 0)' />
            </g>
          </g>
          <g id='y' style="transition-duration: 50ms;" transform='rotate(${bgControl.three} 0 0)'>
            <g style="transition-duration: 50ms;" transform='rotate(${bgControl.one} 0 0)'>
              <use href='#e' transform='scale(1.1) rotate(20 0 0)' />
              <use href='#g' transform='scale(1.3) rotate(-40 0 0)' />
              <use href='#g' transform='scale(1.5) rotate(60 0 0)' />
              <use href='#h' transform='scale(1.7) rotate(-80 0 0)' />
              <use href='#j' transform='scale(1.9) rotate(100 0 0)' />
            </g>
          </g>
          <g style="transition-duration: 50ms;" transform='rotate(${bgControl.one} 0 0)'>
            <g style="transition-duration: 50ms;" transform='rotate(${bgControl.two} 0 0)'>
              <g style="transition-duration: 50ms;" transform='rotate(${bgControl.three} 0 0)'>
                <use href='#h' transform='scale(2) rotate(60 0 0)' />
                <use href='#j' transform='scale(2.1) rotate(120 0 0)' />
                <use href='#j' transform='scale(2.3) rotate(180 0 0)' />
                <use href='#h' transform='scale(2.4) rotate(240 0 0)' />
                <use href='#j' transform='scale(2.5) rotate(300 0 0)' />
              </g>
              <use href='#y' transform='scale(2) rotate(180 0 0)' />
              <use href='#j' transform='scale(2.7)' />
              <use href='#j' transform='scale(2.8) rotate(45 0 0)' />
              <use href='#j' transform='scale(2.9) rotate(90 0 0)' />
              <use href='#k' transform='scale(3.1) rotate(135 0 0)' />
              <use href='#k' transform='scale(3.2) rotate(180 0 0)' />
            </g>
            <use href='#k' transform='scale(3.3) rotate(225 0 0)' />
            <use href='#k' transform='scale(3.5) rotate(270 0 0)' />
            <use href='#k' transform='scale(3.6) rotate(315 0 0)' />
            <use href='#k' transform='scale(3.7)' />
            <use href='#k' transform='scale(3.9) rotate(75 0 0)' />
          </g>
        </g>
      </g>
    </svg>`

  const handleMoveBG = (bgControl: BGControl) => {
    setBgControl(old => {
      return { ...old, ...bgControl }
    })
    setActive(true)
  }

  useEffect(() => {
    if (!active) return
    const interval = setInterval(() => {
      setBgControl((old) => {
        const {
          stroke,
          tStroke,
          one,
          tOne,
          two,
          tTwo,
          three,
          tThree,
        } = old
        if (
          stroke === tStroke
          && one === tOne
          && two === tTwo
          && three === tThree
        ) setActive(false)
        return {
          ...old,
          stroke: stroke === tStroke ? stroke : tStroke > stroke ? stroke + 1 : stroke - 1,
          one: one === tOne ? one : tOne > one ? one + 1 : one - 1,
          two: two === tTwo ? two : tTwo > two ? two + 1 : two - 1,
          three: three === tThree ? three : tThree > three ? three + 1 : three - 1,
        }
      })
    }, 50)

    return () => {
      clearInterval(interval)
    }
  }, [active])

  return {
    active,
    bgControl,
    bg: `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`,
    handleMoveBG
  }
  //return encodeURIComponent(svg.trim().replace(/\s\s+/g, ' '))
}