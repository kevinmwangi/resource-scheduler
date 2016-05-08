import {
  darkBlack,
} from 'material-ui/styles/colors'

import { fade } from 'material-ui/utils/colorManipulator'

import { palette } from '../themes/customLightTheme'

export default Object.assign({
  scheduledColor: fade(palette.primary1Color, 0.4),
  barColor: fade(palette.primary1Color, 0.9),
  streamDisabledColor: fade(darkBlack, 0.2),
  streamColor: fade(darkBlack, 0.06),
}, palette)
