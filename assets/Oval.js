import * as React from "react"
import Svg, { Defs, Path } from "react-native-svg"

function Oval(props) {
  return (
    <Svg width={97} height={97} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Defs></Defs>
      <Path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24z"
        transform="translate(24.5 20.5)"
        fill="#FFF"
        fillRule="evenodd"
        filter="url(#prefix__a)"
      />
    </Svg>
  )
}

export default Oval