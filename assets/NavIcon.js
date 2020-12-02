import * as React from "react"
import Svg, { Path } from "react-native-svg"

function NavIcon(props) {
  return (
    <Svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0z"
        fill="#262626"
        fillRule="evenodd"
      />
    </Svg>
  )
}

export default NavIcon
