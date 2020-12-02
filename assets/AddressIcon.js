import * as React from "react"
import Svg, { Path } from "react-native-svg"

function AddressIcon(props) {
  return (
    <Svg width={18} height={18} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M6.083 10.25v5.833c0 .46-.373.834-.833.834h-2.5a2.5 2.5 0 01-2.5-2.5v-7.5c0-.257.119-.5.322-.658l7.5-5.833a.833.833 0 011.023 0l7.5 5.833c.203.158.322.4.322.658v7.5a2.5 2.5 0 01-2.5 2.5h-2.5a.833.833 0 01-.834-.834V10.25h-5z"
        fill="#262626"
        fillRule="evenodd"
      />
    </Svg>
  )
}

export default AddressIcon
