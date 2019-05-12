const FontFaceObserver = require('fontfaceobserver')

const Fonts = () => {
  const links = [
    'https://fonts.googleapis.com/css?family=Roboto:300',
    'https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,300i',
    'https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800',
    'https://fonts.googleapis.com/css?family=Baloo+Bhai'
  ]
  links.forEach((href) => {
    const link = document.createElement('link')
    link.href = href
    link.rel = 'stylesheet'

    document.head.appendChild(link)
  })

  const roboto = new FontFaceObserver('Roboto')
  const opensansC = new FontFaceObserver('Open Sans Condensed')
  const opensans = new FontFaceObserver('Open Sans')
  const baloobhai = new FontFaceObserver('Baloo Bhai')

  roboto.load().then(() => {
    document.documentElement.classList.add('roboto')
  })

  opensansC.load().then(() => {
    document.documentElement.classList.add('opensansC')
  })

  opensans.load().then(() => {
    document.documentElement.classList.add('opensans')
  })

  baloobhai.load().then(() => {
    document.documentElement.classList.add('baloobhai')
  })
}

export default Fonts
