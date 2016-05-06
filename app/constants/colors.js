import {
  cyan400,
  darkBlack,
  pink200,
} from 'material-ui/styles/colors'

import { fade } from 'material-ui/utils/colorManipulator'

import { palette } from '../themes/customLightTheme'

export default Object.assign({
  scheduledColor: fade(cyan400, 0.4),
  barColor: fade(cyan400, 0.9),
  streamDisabledColor: fade(darkBlack, 0.2),
  streamColor: fade(darkBlack, 0.06),
}, palette)
