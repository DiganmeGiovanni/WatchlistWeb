
import 'bootstrap/dist/css/bootstrap.css'
import '../src/sass/watchlist.scss'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: {
      extraSmall: {
        name: 'Extra Small (320px)',
        styles: {
          width: '320px',
          height: '1080px',
        }
      },
      small: {
        name: 'Small (576)',
        styles: {
          width: '576px',
          height: '1080px',
        }
      },
      medium: {
        name: 'Medium (768)',
        styles: {
          width: '768px',
          height: '1080px',
        }
      },
      large: {
        name: 'Large (992)',
        styles: {
          width: '992px',
          height: '1080px',
        }
      },
      extraLarge: {
        name: 'Extra large (1200)',
        styles: {
          width: '1200px',
          height: '1080px'
        }
      }
    }
  }
}