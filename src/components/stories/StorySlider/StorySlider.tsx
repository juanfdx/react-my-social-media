import './StorySlider.css'
import {  useState } from 'react';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { stories } from '../../../data/stories'
import { sliderBreakpoints } from '../../../utils/functions';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AddIcon from '@mui/icons-material/Add';


export const StorySlider = () => {
 
  const { width } = useWindowSize();
  // 1. Keep track of the current/previous width in state
  const [prevWidth, setPrevWidth] = useState(width);

  const [position, setPosition] = useState(0);
  const [transition, setTransition] = useState(false);

  // 2. Check if the width has changed since the last render 
  // (now useEffect is not recommended to update state directly anymore)
  if (width !== prevWidth) {
    setPrevWidth(width);
    setPosition(0);
    setTransition(false);
  }


  if (!stories || stories.length === 0) return null;

  const imgToShow = sliderBreakpoints(width, stories.length);

  const imgAmount = stories?.length
  const slideMoveX = imgAmount/imgToShow
  const slideWidth = slideMoveX * 100
  const cardWidth = 100 / imgAmount 


  const maxTranslate = (imgAmount - imgToShow) * cardWidth;

  const handleNext = () => {
    setTransition(true);
    if (Math.abs(position) < maxTranslate) {
      setPosition(position - cardWidth);
    }
  };

  const handlePrevious = () => {
    setTransition(true);
    if (position < 0) {
      setPosition(position + cardWidth);
    }
  };

  


  return (
    <div className='story-slider'>
      <div className='story-slider__mask'>
        
        <div 
          className={`story-slider__slide ${transition ? 'story-slider__slide--transition' : ''}`}
          style={{
            width: `${slideWidth}%`,
            transform: `translateX(${position}%)`,
          }}
        >
          {stories.map(story => (
            <div 
              key={story.id}
              className='story-slider__card'
              style={{ width: `${cardWidth}%` }} 
            >
              <img className='story-slider__img' src={story.img} alt={story.user} />
              <span className='story-slider__label'>{story.user}</span>
            </div>
          ))}
        </div>

        <button className='story-slider__add-story-btn'>
          <AddIcon className='story-slider__add-story-icon' />
        </button>

        {/* Buttons */}
        {imgAmount > imgToShow && (    
          <>
            <button className='story-slider__btn story-slider__btn--prev' onClick={handlePrevious}>
              <ArrowBackIosIcon />
            </button>
            <button className='story-slider__btn story-slider__btn--next' onClick={handleNext}>
              <ArrowForwardIosIcon />
            </button>
          </>
        )}

      </div>
    </div>
  )
}