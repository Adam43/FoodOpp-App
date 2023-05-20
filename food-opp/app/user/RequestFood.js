'use client';

import { PlusIcon } from '@heroicons/react/24/solid';
import { Button } from '@material-tailwind/react';
import Link from 'next/link';

export default function RequestFood() {
  return (
    <div className="mx-1 flex flex-wrap p-1 flex-col items-center">
      <div className="w-[300px] flex flex-row justify-center">
        <Link href="/user/new-request">
          <Button className="flex items-center gap-2 text-lg">
            <PlusIcon strokeWidth={2} className="w-6 h-6" /> CREATE AN EVENT
          </Button>
        </Link>
      </div>
    </div>
  );
}
