import MainHeader from './components/main-header/main-header';
import './globals.css';

export const metadata = {
  title: 'NextLevel Cleaning ',
  description: 'Best cleaning by professionals.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
