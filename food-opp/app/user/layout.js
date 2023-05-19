import Header from './Header';

const UserLayout = ({ children }) => {
  return (
    <section>
      <Header />
      {children}
    </section>
  );
};

export default UserLayout;
