import 'tailwindcss/tailwind.css'
import "../styles/global.css"
import Router from 'next/router'
import ProgressBar from '@badrap/bar-of-progress';


const progress = new ProgressBar({
  size: 8,
  color: "#FD5B61",
  className: "z-50",
  delay: 80,
})

Router.events.on('routeChangeStart' , progress.start);
Router.events.on('routeChangeComplete',progress.finish);
Router.events.on('routeChangeError', progress.finish);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
