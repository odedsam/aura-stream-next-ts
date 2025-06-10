'use client';

import { useEffect, useRef } from 'react';
import { Bell, X, Check, Trash2 } from 'lucide-react';
import { formatTime } from '@/utils';
import {
  useNotifications,
  useUnreadCount,
  useIsNotificationsOpen,
  useToggleNotifications,
  useMarkAsRead,
} from '@/app/store/uiStore';
import AlertBadge from '@/app/components/ui/Badge';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  timestamp: Date;
  isRead: boolean;
}

const NotificationComponent = () => {
  const notifications = useNotifications();
  const unreadCount = useUnreadCount();
  const isNotificationsOpen = useIsNotificationsOpen();
  const toggleNotifications = useToggleNotifications();
  const markAsRead = useMarkAsRead();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (isNotificationsOpen) {
          toggleNotifications();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isNotificationsOpen, toggleNotifications]);

  const handleNotificationClick = (notificationId: string) => {
    markAsRead(notificationId);
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <Check className="w-4 h-4 text-green-500" />;
      case 'warning':
        return <Bell className="w-4 h-4 text-yellow-500" />;
      case 'error':
        return <X className="w-4 h-4 text-red-500" />;
      default:
        return <Bell className="w-4 h-4 text-blue-500" />;
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleNotifications}
        className="cursor-pointer p-2 text-gray-300 hover:text-white transition-colors duration-200 relative"
        aria-label="Open notifications">
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && <AlertBadge count={unreadCount} maxCount={9} className="bg-red-def" />}
      </button>

      {/* Notifications Dropdown */}
      {isNotificationsOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-50">
          <div className="p-4 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold">Notifications</h3>
              {unreadCount > 0 && (
                <span className="text-sm text-gray-def">{unreadCount} unread</span>
              )}
            </div>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-6 text-center text-gray-def">
                <Bell className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p>No notifications yet</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-700">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    onClick={() => handleNotificationClick(notification.id!)}
                    className={`p-4 hover:bg-gray-800 transition-colors cursor-pointer ${!notification.isRead ? 'bg-gray-800/50' : ''}`}>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        {getNotificationIcon(notification.type ?? 'Untitled')}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p
                            className={`text-sm font-medium ${notification.isRead ? 'text-gray-300' : 'text-white'}`}>
                            {notification.title}
                          </p>
                          {!notification.isRead && (
                            <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                          )}
                        </div>
                        <p className="text-sm text-gray-def mt-1">{notification.message}</p>
                        <p className="text-xs text-gray-500 mt-2">
                          {notification.timestamp ? formatTime(notification.timestamp) : 'Unknown'}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {notifications.length > 0 && (
            <div className="p-3 border-t border-gray-700">
              <button className="w-full text-sm text-gray-def hover:text-white transition-colors">
                Mark all as read
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationComponent;
