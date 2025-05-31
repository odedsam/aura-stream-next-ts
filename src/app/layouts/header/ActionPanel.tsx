'use client';

import NotificationComponent from './Notification';
import SearchComponent from './Search';

const ActionPanel: React.FC = () => {
  return (
    <div className="flex items-center space-x-4">
      <SearchComponent />
      <NotificationComponent />
    </div>
  );
};

export default ActionPanel;
