import { CssBaseline, ThemeProvider } from '@mui/material';
import { ptSerif } from './ui/fonts';
import theme from './ui/theme';
import Header from './ui/header';
import Footer from './ui/footer';

export const metadata = {
  title: 'TKDM',
  description: 'The Kenya Diaspora Media',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ height: '100%' }}>
      <body className={ptSerif.className} style={{ height: '100%' }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <main style={{ height: '100%' }}>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
