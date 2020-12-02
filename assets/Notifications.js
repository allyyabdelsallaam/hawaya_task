import * as React from "react"
import Svg, { Defs, RadialGradient, Stop, G, Path } from "react-native-svg"

function NotificationIcon(props) {
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
      <G fillRule="evenodd">
        <Path
          d="M8.5 9.855A3.502 3.502 0 007.5 3a3.5 3.5 0 00-1 6.855V20.5a1 1 0 102 0V9.855zm8 5.29V4.5a1 1 0 112 0v10.645a3.502 3.502 0 01-1 6.855 3.5 3.5 0 01-1-6.855zM6 6.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm10 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
          fill="#262626"
        />
        <Path
          d="M3 6a3 3 0 100-6 3 3 0 000 6z"
          transform="translate(16 2)"
          fill="url(#prefix__a)"
        />
      </G>
    </Svg>
  )
}

export default NotificationIcon
