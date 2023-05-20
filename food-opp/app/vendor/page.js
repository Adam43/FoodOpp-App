import Header from './Header';
import RequestList from './RequestList';
import { VendorLandingPage } from './vendor-landing-page';

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <VendorLandingPage />
    </div>
  );
}
