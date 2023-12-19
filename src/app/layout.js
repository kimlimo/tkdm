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
    <html lang="en">
      <body className={ptSerif.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
