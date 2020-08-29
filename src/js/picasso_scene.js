import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const section = document.querySelector('#picasso.artist-section');
const welcomeSection = document.querySelector('#picasso .artist-section__welcome');
const sectionWrapper = document.querySelector('#picasso .artist-section__wrapper');
const sectionInfo = document.querySelector('#picasso .artist-section__info');
const picassoInfo1 = document.querySelectorAll('#picasso-info-1');
const picassoInfo2 = document.querySelectorAll('#picasso-info-2');
const picassoInfo3 = document.querySelectorAll('#picasso-info-3');
const picassoInfo4 = document.querySelectorAll('#picasso-info-4');
const picassoInfo5 = document.querySelectorAll('#picasso-info-5');
const picassoInfo6 = document.querySelectorAll('#picasso-info-6');
const picassoInfo7 = document.querySelectorAll('#picasso-info-7');
const picassoImage1 = document.querySelectorAll('#picasso-image-1');
const picassoImage2 = document.querySelectorAll('#picasso-image-2');
const picassoImage3 = document.querySelectorAll('#picasso-image-3');
const picassoImage4 = document.querySelectorAll('#picasso-image-4');
const picassoImage5 = document.querySelectorAll('#picasso-image-5');
const picassoImage6 = document.querySelectorAll('#picasso-image-6');
const picassoImage7 = document.querySelectorAll('#picasso-image-7');
const picassoImage8 = document.querySelectorAll('#picasso-image-8');
const picassoImage9 = document.querySelectorAll('#picasso-image-9');
const picassoImage10 = document.querySelectorAll('#picasso-image-10');
const picassoImage11 = document.querySelectorAll('#picasso-image-11');
const perspective = 1000;

gsap.timeline({
  scrollTrigger: {
    trigger: section,
    start: 'top top',
    end: '+=15000',
    pin: true,
    anticipatePin: 1,
    // markers: true,
    scrub: 1,
  },
})
  .set(sectionWrapper, { css: { transformPerspective: perspective, transformStyle: 'preserve-3d' } })
// Improve Quality
  .to(welcomeSection, 1, { css: { z: perspective } })
  .fromTo(sectionInfo, 1, { opacity: 0 }, { opacity: 1 })
  .addLabel('show_info_1')
  .addPause(3)
  .to(picassoInfo1, 1, { opacity: 0, display: 'none' })
  .fromTo(picassoInfo2, 1, { opacity: 0 }, { opacity: 1, display: 'block' })
  .addPause(3)
  .to(picassoInfo2, 1, { opacity: 0, display: 'none' })
  .fromTo(picassoInfo3, 1, { opacity: 0 }, { opacity: 1, display: 'block' })
  .addPause(3)
  .to(picassoInfo3, 1, { opacity: 0, display: 'none' })
  .fromTo(picassoInfo4, 1, { opacity: 0 }, { opacity: 1, display: 'block' })
  .addLabel('show_info_4')
  .addPause(3)
  .to(picassoInfo4, 1, { opacity: 0, display: 'none' })
  .fromTo(picassoInfo5, 1, { opacity: 0 }, { opacity: 1, display: 'block' })
  .addPause(3)
  .to(picassoInfo5, 1, { opacity: 0, display: 'none' })
  .fromTo(picassoInfo6, 1, { opacity: 0 }, { opacity: 1, display: 'block' })
  .addPause(3)
  .to(picassoInfo6, 1, { opacity: 0, display: 'none' })
  .fromTo(picassoInfo7, 1, { opacity: 0 }, { opacity: 1, display: 'block' })
  .addPause(3)
  .to(picassoImage1, 10, { y: -15 }, 'show_info_1')
  .to(picassoImage2, 10, { y: -10 }, 'show_info_1')
  .to(picassoImage3, 10, { y: -8 }, 'show_info_1')
  .to(picassoImage4, 10, { y: -6 }, 'show_info_1')
  .to(picassoImage5, 10, { y: -20 }, 'show_info_1')
  .to(picassoImage6, 10, { y: -11, scale: 1.015 }, 'show_info_1')
  .to(picassoImage7, 10, { y: -2 }, 'show_info_1')
  .to(picassoImage8, 10, { y: -20, scale: 1.015 }, 'show_info_1')
  .to(picassoImage9, 10, { y: -20, scale: 1.015 }, 'show_info_1')
  .to(picassoImage10, 10, { y: -10, scale: 1.015 }, 'show_info_1')
  .to(picassoImage11, 10, { x: -30, y: -18, scale: 1.05 }, 'show_info_1');