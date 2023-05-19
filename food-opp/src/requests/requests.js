const { ZERO_FIFTY } = require('../consts/requests');

export const getUserActiveRequests = ({ userId }) => {
  // TODO
  const dummyData = [
    {
      id: 1,
      name: 'Central Park',
      status: 'searching',
      createdAt: 1684521929356,
      expiresAt: 1684529209738,
      groupSize: ZERO_FIFTY,
      type: 'Ice Cream',
      notes: 'Hi we are celebrating a Friday',
    },
    {
      id: 1,
      name: 'Central Park',
      status: 'searching',
      createdAt: 1684521929356,
      expiresAt: 1684529209738,
      groupSize: ZERO_FIFTY,
      type: 'Ice Cream',
      notes: 'Hi we are celebrating a Friday',
    },
  ];

  return dummyData;
};

export const getUserExpiredRequests = ({ userId }) => {
  // TODO
  const dummyData = [
    {
      id: 1,
      name: 'Central Park',
      status: 'searching',
      createdAt: 1684529209738,
      expiresAt: 1684521929356,
      groupSize: ZERO_FIFTY,
      type: 'Ice Cream',
      notes: 'Hi we are celebrating a Friday',
    },
    {
      id: 1,
      name: 'Central Park',
      status: 'searching',
      createdAt: 1684529209738,
      expiresAt: 1684521929356,
      groupSize: ZERO_FIFTY,
      type: 'Ice Cream',
      notes: 'Hi we are celebrating a Friday',
    },
  ];

  return dummyData;
};
