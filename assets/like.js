import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LikeBtn(props) {
  return (
    <Svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M16.95 1.998a6.5 6.5 0 00-4.597 1.905L12 4.256l-.353-.353a6.501 6.501 0 00-9.194 9.194l8.84 8.84a1 1 0 001.414 0l8.84-8.84a6.5 6.5 0 00.198-8.987l-.198-.207a6.5 6.5 0 00-4.597-1.905zm3.183 9.685L12 19.816l-8.133-8.133a4.501 4.501 0 116.366-6.366l1.06 1.06a1 1 0 001.414 0l1.06-1.06a4.5 4.5 0 016.193-.164l.173.164a4.5 4.5 0 010 6.366z"
        fill="#E6656D"
        fillRule="evenodd"
      />
    </Svg>
  )
}

export default LikeBtn