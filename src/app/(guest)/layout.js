import Footer from '../ui/footer';
import Header from '../ui/header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
