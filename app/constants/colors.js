import {
  darkBlack,
  fullBlack,
} from 'material-ui/styles/colors'

import { fade } from 'material-ui/utils/colorManipulator'

import { palette } from '../themes/customLightTheme'

export default Object.assign({
  scheduledColor: fade(palette.primary1Color, 0.35),
  barColor: fade(palette.primary1Color, 0.7),
  weekendDayColor: fade(darkBlack, 0.2),
  streamColor: fade(darkBlack, 0.06),
  streamLabelActiveColor: palette.accent1Color,
  daySelectedColor: fade(palette.accent1Color, 0.2),
  dayInsetColor: fade(fullBlack, 0.3),
}, palette)
