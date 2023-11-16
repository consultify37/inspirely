import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header/Header'
import { Toaster } from 'react-hot-toast'
import Footer from '../components/Footer/Footer'
import TopBar from "../components/TopBar"
import { usePathname } from 'next/navigation'
import CookiePolicy from '../components/CookiePolicy'

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname()

  return (
    <div className="flex flex-col">
      { !pathname?.includes('/admin') ?
        <>
          <TopBar />
          <Header />
        </> : null
      }
      <main className="flex-1 relative">
        <Component {...pageProps} />
        <Toaster />
        <CookiePolicy />
      </main>
      { !pathname?.includes('/admin') ?
        <Footer /> : null
      }
    </div>
  );
}
