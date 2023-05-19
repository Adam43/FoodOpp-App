'use client';

import {
  getUserActiveRequests,
  getUserExpiredRequests,
} from '@/src/requests/requests';
import { CheckCircleIcon, ClockIcon } from '@heroicons/react/24/solid';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';
import React from 'react';

const dummyCard = <>CARD</>;

const RequestList = ({}) => {
  const expiredCards = getUserActiveRequests({ userId: 123 });
  const activeCards = getUserExpiredRequests({ userId: 123 });

  const tabs = [
    {
      label: 'Active',
      value: 'active',
      icon: CheckCircleIcon,
      cards: activeCards,
    },
    {
      label: 'History',
      value: 'history',
      icon: ClockIcon,
      cards: expiredCards,
    },
  ];

  return (
    <div>
      <Tabs value="dashboard">
        <TabsHeader>
          {tabs.map(({ label, value, icon }) => (
            <Tab key={value} value={value}>
              <div className="flex items-center gap-2">
                {React.createElement(icon, { className: 'w-5 h-5' })}
                {label}
              </div>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {tabs.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
      {dummyCard}
    </div>
  );
};

export default RequestList;
