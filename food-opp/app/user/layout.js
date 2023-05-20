import Header from './Header';
import { Toaster } from 'react-hot-toast';

const UserLayout = ({ children }) => {
  return (
    <section className='bg-[#FBF4F4]'>
      <Toaster />
      <Header />
      {children}
    </section>
  );
};

export default UserLayout;


