import {} from "react";
import Header from "./Header";
import RequestFood from "./RequestFood";
import RequestList from "./RequestList";

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
    return (
        <div className="flex flex-col gap-4 p-4">
            <Header />
            <RequestFood />
            <RequestList/>
        </div>
    )
  }
