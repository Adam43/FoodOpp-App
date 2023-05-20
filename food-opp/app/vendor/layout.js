import Header from './Header';
import { Toaster } from 'react-hot-toast';

export const UserLayout = ({ children }) => {
  return (
    <section>
      <Toaster />
      <Header />
      {children}
    </section>
  );
};

export default UserLayout;
