import * as React from "react"
import Svg, { Path } from "react-native-svg"

function AgeIcon(props) {
  return (
    <Svg width={14} height={18} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M7.866 3.91a1.627 1.627 0 01-2.36 0 1.769 1.769 0 01-.06-2.37l.03-.034L6.685.25l1.211 1.256.03.034c.59.679.565 1.72-.06 2.37zm-7.6 6.18c.548-2.803 3.33-4.84 6.57-4.84s6.022 2.037 6.57 4.84a.833.833 0 01-.817.993H1.084a.833.833 0 01-.818-.993zm1.77 6.332l-1.11-2.5a.833.833 0 01.761-1.172h9.998c.603 0 1.007.62.762 1.172l-1.111 2.5a.833.833 0 01-.761.495H2.798a.833.833 0 01-.761-.495z"
        fill="#262626"
        fillRule="evenodd"
      />
    </Svg>
  )
}

export default AgeIcon
