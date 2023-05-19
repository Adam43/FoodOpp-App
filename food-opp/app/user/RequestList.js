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
import Cardcomponent from './Cardcomponent';

const dummyCard = <>CARD</>;

const RequestList = ({}) => {
  const expiredRequests = getUserActiveRequests({ userId: 123 });
  const activeRequests = getUserExpiredRequests({ userId: 123 });
  const activeCards = activeRequests.map((request) => {
    return <Cardcomponent
      name={request.name}
      status={request.status}
      createdAt={request.createdAt}
      expiresAt={request.expiresAt}
      groupSize={request.groupSize}
      type={request.type}
      notes={request.notes} />

  })

  const expiredCards = expiredRequests.map((request) => {
    return <Cardcomponent
      name={request.name} />
  })

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
          {tabs.map(({ value, cards }) => (
            <TabPanel key={value} value={value}>
              {cards}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
      {dummyCard}
    </div>
  );
};

export default RequestList;
