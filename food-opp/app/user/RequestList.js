'use client';

import { CheckCircleIcon, ClockIcon } from '@heroicons/react/24/solid';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';
import { getAllEvents } from '@/src/api/events/events';
import React, { useEffect, useState } from 'react';
import Cardcomponent from './Cardcomponent';
import EmptyList from 'components/EmptyResults/EmptyResults';

const RequestList = ({}) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await getAllEvents();

      setEvents(response);
    };

    fetchEvents();
  }, []);

  let activeCards = events
    .filter((request) => {
      return new Date(request.expiresAt) >= Date.now();
    })
    .map((request) => {
      return (
        <Cardcomponent
          key={request.id}
          requestId={request.id}
          name={request.name}
          status={request.status}
          createdAt={request.createdAt}
          expiresAt={request.expiresAt}
          groupSize={request.groupSize}
          type={request.type}
          notes={request.notes}
          location={request.location}
        />
      );
    });

  // Show a note if list is empty
  if (activeCards.length === 0) {
    activeCards = <EmptyList />;
  }

  const expiredCards = events
    .filter((request) => {
      return new Date(request.expiresAt) < Date.now();
    })
    .map((request) => {
      return (
        <Cardcomponent
          key={request.id}
          requestId={request.id}
          name={request.name}
          status={request.status}
          createdAt={request.createdAt}
          expiresAt={request.expiresAt}
          groupSize={request.groupSize}
          type={request.type}
          notes={request.notes}
          location={request.location}
        />
      );
    });

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
      <Tabs value="active">
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
    </div>
  );
};

export default RequestList;
