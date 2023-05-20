import {} from 'react';
import RequestFood from './RequestFood';
import RequestList from './RequestList';

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <RequestFood />
      <RequestList />
      < Cardcomponent />
    </div>
  );
}
