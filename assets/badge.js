import * as React from "react"
import Svg, { Defs, RadialGradient, Stop, Path } from "react-native-svg"

function badge(props) {
  return (
    <Svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Defs>
        <RadialGradient
          gradientUnits="objectBoundingBox"
          cx="79.171%"
          cy="84.821%"
          fx="79.171%"
          fy="84.821%"
          r="89.528%"
          gradientTransform="rotate(27.919 .792 .848)"
          id="prefix__a"
        >
          <Stop offset="0%" stopColor="#00EAAC" />
          <Stop offset="0%" stopColor="#00EAAE" />
          <Stop offset="100%" stopColor="#00DEEB" />
        </RadialGradient>
      </Defs>
      <Path
        d="M12 0L8.49 3.524l-4.975-.01.009 4.975L0 12l3.524 3.511-.01 4.974 4.975-.009L12 24l3.511-3.524 4.974.01-.009-4.975L24 12l-3.524-3.51.01-4.975-4.975.009L12 0z"
        fill="url(#prefix__a)"
        fillRule="evenodd"
      />
      <Path
        d="M16.5 9l-5.672 6-2.578-2.727"
        fill="none"
        stroke="#FFF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default badge