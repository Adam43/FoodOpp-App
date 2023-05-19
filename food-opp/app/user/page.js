import Cardcomponent from './Cardcomponent';
import Header from './Header';
import RequestList from './RequestList';

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <Header />
      <Cardcomponent />
      <RequestList />
    </div>
  );
}
