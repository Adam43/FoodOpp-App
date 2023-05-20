'use client';

import { Button } from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between p-24">
      <div className="flex gap-4 w-full">
        <Link
          href="/user"
          className="flex justify-center items-center w-full h-96"
        >
          <Button className="w-full h-60 text-5xl">User page</Button>
        </Link>
        <Link
          href="/vendor"
          className="flex justify-center items-center w-full h-96"
        >
          <Button className="w-full h-60 text-5xl">Vendor page</Button>
        </Link>
      </div>
    </main>
  );
}
