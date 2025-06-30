import Footer from '@/layout/blocks/Footer';
import Header from '@/layout/blocks/Header';
import Main from '@/layout/blocks/Main';
import { Outlet } from 'react-router';

export default function BaseLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
}
