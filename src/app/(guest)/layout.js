import Footer from '../ui/footer';
import Header from '../ui/header';

export default function Layout({ children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
