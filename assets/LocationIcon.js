import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LocationIcon(props) {
  return (
    <Svg width={14} height={17} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M11.63 2.17c2.521 2.48 2.602 6.451.242 9.026l.007.006-4.962 4.881-4.962-4.881.006-.007a6.482 6.482 0 01.242-9.024C4.806-.39 9.027-.39 11.63 2.17zM6.918 4.418a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
        fill="#262626"
        fillRule="evenodd"
      />
    </Svg>
  )
}

export default LocationIcon
