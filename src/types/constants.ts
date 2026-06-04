const SCALE = 1

export const SCR = {
  left:   Math.round(220 * SCALE),
  top:    Math.round(120  * SCALE),
  width:  Math.round((372 - 128) * SCALE),
  height: Math.round((330 - 93)  * SCALE),
}

export const MENU = [
  { label: 'home',     path: '/' },
  { label: 'thoughts', path: '/thoughts' },
  { label: 'about',    path: '/about' },
]