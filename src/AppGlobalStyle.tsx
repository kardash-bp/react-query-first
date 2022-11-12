import { createGlobalStyle } from 'styled-components'

export const AppGlobalStyle = createGlobalStyle`
:root {

  /* Animations */
  --animation-duration: 0.1s;
  --animation-timing: ease;


  /* sizes */
  --spacing-1: 0;
  --spacing-2: 4;
  --spacing-3: 8;
  --spacing-4: 16;
  --spacing-5: 32;
  --spacing-6: 64;
  --spacing-7: 128;
  --spacing-8: 256;
  --spacing-9: 512;
  --sizes-mini: 11 / 14;
  --sizes-tiny: 12 / 14;
  --sizes-small: 13 / 14;
  --sizes-medium: 14 / 14;
  --sizes-large: 16 / 14;
  --sizes-big: 18 / 14;
  --sizes-huge: 20 / 14;
  --sizes-massive: 24 / 14;

  /* Fonts */
  --fonts-body: Roboto, Helvetiva Neue, Helvetica, Aria, sans-serif;
  --fonts-heading: Poppins, Helvetiva Neue, Helvetica, Aria, sans-serif;
  --fonts-monospace: Fira Code, Menlo, monospace;

  /* Fonts: Weight */
  --fonts-weights-body: 400;
  --fonts-weights-heading: 500;
  --fonts-weights-bold: 700;

  /* Fonts: Line Height */
  --fonts-line-body: 1.5;
  --fonts-line-heading: 1.25;

  /* Breakpoints */
  --breakpoints-mobile: 320px;
  --breakpoints-tablet: 768px;
  --breakpoints-computer: 992px;
  --breakpoints-desktop: 1200px;
  --breakpoints-widescreen: 1920px;

  /* Palette */
  --palette-dirt: #FBFBFB;
  --palette-blue: #B2DAD9;
  --palette-yellow: #F5CF6A;
  --palette-green:#98C568;
  --palette-brown:#5D5550;

  /* Colors */
  --colors-white: #fcfcfc;
  --colors-black: #010101;
  --colors-red: #DB2828;
  --colors-orange: #F2711C;
  --colors-yellow: #FBBD08;
  --colors-olive: #B5CC18;
  --colors-green: #21BA45;
  --colors-teal: #00B5AD;
  --colors-blue: #2185D0;
  --colors-violet: #6435C9;
  --colors-purple: #A333C8;
  --colors-pink: #E03997;
  --colors-brown: #A5673F;
  --colors-grey: #767676;

  --colors-primary: blue;
  --colors-text: #111212;
  --colors-background: #fff;
  --colors-secondary: #6D59F0;
  --colors-muted: #f6f6f9;
  --colors-gray: #D3D7DA;
  --colors-highlight: hsla(205, 100%, 40%, 0.125);
  --colors-disabled: rgba(40, 40, 40, 0.3);
  --colors-disabled-inverted: rgba(225, 225, 225, 0.3);

  /* Colors: States */
  --colors-positive-color: green;
  --colors-positive-bg: #FFF6F6;
  --colors-positive-border: #A3C293;
  --colors-positive-header: #1A531B;
  --colors-positive-text: #2C662D;


  --colors-negative-color: red;
  --colors-negative-bg: #FFF6F6;
  --colors-negative-border: #E0B4B4;
  --colors-negative-header: #912D2B;
  --colors-negative-text: #9F3A38;

  --colors-info-color: #31CCEC;
  --colors-info-bg: #F8FFFF;
  --colors-info-border: #A9D5DE;
  --colors-info-header: #0E566C;
  --colors-info-text: #276F86;

  --colors-warning-color: #F2C037;
  --colors-warning-bg: #C9BA9B;
  --colors-warning-border: #FFFAF3;
  --colors-warning-header: #794B02;
  --colors-warning-text: #573A08;

  
  --colors-brands-facebook: #3B5998;
  --colors-brands-twitter: #55ACEE;
  --colors-brands-googleplus: #DD4B39;
  --colors-brands-linkedin: #1F88BE;
  --colors-brands-youtube: #FF0000;
  --colors-brands-pinterest: #BD081C;
  --colors-brands-instagram: #49769C;

  /* Borders */
  --borders-radius: 0;
  --borders-color: rgba(34, 36, 38, 0.15);
  --borders-strong: rgba(34, 36, 38, 0.22);
  --borders-internal: rgba(34, 36, 38, 0.1);
  --borders-selected: rgba(34, 36, 38, 0.35);
  --borders-selected-strong: rgba(34, 36, 38, 0.5);
  --borders-disabled: rgba(34, 36, 38, 0.5);

  /* Shadows */
  --shadows-subtle: 0px 1px 2px 0 var(--borders-strong);
  --shadows-floating: 
  0px 2px 4px 0px rgba(34, 36, 38, 0.12),
  0px 2px 10px 0px rgba(34, 36, 38, 0.15);
  --shadows-floating-hover: 
  0px 2px 4px 0px rgba(34, 36, 38, 0.15),
  0px 2px 10px 0px rgba(34, 36, 38, 0.25);
}
`
