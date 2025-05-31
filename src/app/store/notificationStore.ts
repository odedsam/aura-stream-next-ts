// app/store/notificationStore.ts
import { create } from 'zustand';

interface NotificationState {
  notifications: any[]; // החלף בטיפוס ההתראה המתאים
  addNotification: (notification: any) => void;
  markAsRead: (id: string) => void;
  unreadCount: number;
  setUnreadCount: (count: number) => void;
  isNotificationsOpen: boolean;
  toggleNotifications: () => void;
}

export const useNotificationStore = create<NotificationState>()((set, get) => ({
  notifications: [],
  unreadCount: 0,
  setUnreadCount: (count) => set({ unreadCount: count }),
  addNotification: (notification) => set((state) => ({ notifications: [...state.notifications, notification], unreadCount: state.unreadCount + 1 })),
  markAsRead: (id) => set((state) => ({
    notifications: state.notifications.map((n) => (n.id === id ? { ...n, isRead: true } : n)),
    unreadCount: state.unreadCount > 0 ? state.unreadCount - 1 : 0,
  })),
  isNotificationsOpen: false,
  toggleNotifications: () => set((state) => ({ isNotificationsOpen: !state.isNotificationsOpen })),
}));

export const useNotifications = () => useNotificationStore((state) => state.notifications);
export const useAddNotification = () => useNotificationStore((state) => state.addNotification);
export const useMarkAsRead = () => useNotificationStore((state) => state.markAsRead);
export const useUnreadCount = () => useNotificationStore((state) => state.unreadCount);
export const useSetUnreadCount = () => useNotificationStore((state) => state.setUnreadCount);
export const useIsNotificationsOpen = () => useNotificationStore((state) => state.isNotificationsOpen);
export const useToggleNotifications = () => useNotificationStore((state) => state.toggleNotifications);
