import { Switch } from 'components/Switch/Switch';

const dummyCard = <>CARD</>;

const RequestList = ({}) => {
  return (
    <div>
      <div className="flex w-full justify-end gap-2">
        <div className="text-sm">History</div>
        <Switch className="" />
      </div>
      {dummyCard}
    </div>
  );
};

export default RequestList;
