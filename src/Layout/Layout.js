import { Outlet } from 'react-router-dom';
import Top from './Top';
import Footer from './Footer';

export default function Layout() {
    return (
      <>
        <Top />
        <Outlet />
        <Footer />
      </>
    );
  }