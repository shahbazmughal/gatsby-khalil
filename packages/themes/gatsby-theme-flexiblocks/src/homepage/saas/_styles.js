/**
 *
 * These styles are solely for adding [background images] or
 * [background colors] to blocks.
 *
 */
import heroBg from './assets/contour-pattern.svg'
import heroBgmarkiting from './assets/contour-pattern.svg'
import circle from './assets/circle.png'
export default {
heroContainer: {
  position: 'relative',
  zIndex: 1, // ensure it's above the parent
  '::before': {
    content: '""',
    position: 'absolute',
    top: -65,
    left: 0,
    width: '100%',
    height: '51%', // or '50%' depending on your design
    zIndex: -1,
    background: `url(${heroBgmarkiting}) no-repeat center top, 
      linear-gradient(180deg, rgb(211, 234, 232) 0%, rgb(227, 242, 241) 100%)`,
    backgroundSize: 'cover'
  }
},

  socialProofContainer: {
    position: `relative`,
    '::before': {
      content: `" "`,
      width: `100%`,
      height: `100%`,
      position: `absolute`,
      top: 0,
      left: 0,
      zIndex: -2,
      bg: `#F6F7FA`
    }
  },
      featuresContainer: {
      position: 'relative',
      backgroundColor: '#fbfbfb',
      zIndex: 0,
      overflow: 'visible',
      pt: 5,
      pb: 6,
    '::before': {
      content: `""`,
      width: `100%`,
      height: [`70%`, null, `150%`],
      position: `absolute`,
      top: [`5%`, null],
      left: `70%`,
      zIndex: -1,
      borderRadius: `xl`,
      transform: `skew(23deg, 0deg) rotate(-10deg)`,
      background: `radial-gradient(
          circle,
          #0a836d 0%, 
          #0a836d 100% 
        )`,
      backgroundSize: `100%`,
      backgroundPosition: `650px bottom`
    },
    '::after': {
      display: [`none`, `block`],
      content: `" "`,
      position: `absolute`,
      top: `-7%`,
      overflow: `visible`,
      left: `100%`,
      transform: `translate(-50%, 0)`,
      zIndex: -1,
      size: '600px',
      background: `url(${circle}) no-repeat center center`,
      backgroundSize: `cover`,
      filter: `brightness(60%) sepia(100) saturate(100) hue-rotate(25deg)`,
      opacity: 0.1
    }
  }
}
