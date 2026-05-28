import relax from '../assets/images/stories/relax-in-nature.png'
import mountainWoman from '../assets/images/stories/mountains-woman.png'
import snowCouple from '../assets/images/stories/snow-couple.png'
import snowBiking from '../assets/images/stories/snow-biking.png'
import alpsMountain from '../assets/images/stories/alps-photo.png'

export interface Story {
  id: string
  user: string
  img: string
}


export const stories: Story [] = [
  { id: '1', user: 'John Doe', img: snowCouple },
  { id: '2', user: 'Mark Kay', img: snowBiking },
  { id: '3', user: 'Susan Smith', img: relax },
  { id: '4', user: 'Edu Lopez', img: alpsMountain },
  { id: '5', user: 'Jane Urban', img: mountainWoman },
]