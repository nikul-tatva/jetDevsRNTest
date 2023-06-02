import { Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

const guidelineBaseWidth = 390
const guidelineBaseHeight = 820

const horizontalScale = (size:number) => Math.ceil(width / guidelineBaseWidth * size)
const verticalScale = (size:number) => Math.ceil(height / guidelineBaseHeight * size)
const scaledWidth = (percent: number) =>  (width * percent) / 100
const scaledHeight = (percent: number) => (height * percent) / 100
  
export {
    horizontalScale, verticalScale, scaledWidth, scaledHeight
}