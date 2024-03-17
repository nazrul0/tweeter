import '@styles/globals.css';
// import { Children } from 'react/cjs/react.production.min';

export const metadata = {
    title: 'Tweeter',
    description: 'Discover & Share Thoughts'
}

const RootLayout = ({ children }) => {
  return (
    <html>
        <body>
            <div className='main'>
                <div className='gradient' />
            </div>

            <main className='app'>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout