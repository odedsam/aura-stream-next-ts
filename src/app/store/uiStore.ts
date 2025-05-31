// app/store/uiStore.ts
import { create } from 'zustand';

interface UiState {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  isSearchOpen: boolean;
  toggleSearch: () => void;
  notifications: any[]; // החלף בטיפוס ההתראה המתאים
  addNotification: (notification: any) => void;
  markAsRead: (id: string) => void;
  unreadCount: number;
  setUnreadCount: (count: number) => void;
  isNotificationsOpen: boolean;
  toggleNotifications: () => void;
}

export const useUiStore = create<UiState>()((set, get) => ({
  isMobileMenuOpen: false,
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  isSearchOpen: false,
  toggleSearch: () => set((state) => ({ isSearchOpen: !state.isSearchOpen })),
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

// Hooks ממוקדים לשימוש בקומפוננטות
export const useMobileMenuOpen = () => useUiStore((state) => state.isMobileMenuOpen);
export const useToggleMobileMenu = () => useUiStore((state) => state.toggleMobileMenu);
export const useSearchTerm = () => useUiStore((state) => state.searchTerm);
export const useSetSearchTerm = () => useUiStore((state) => state.setSearchTerm);
export const useIsSearchOpen = () => useUiStore((state) => state.isSearchOpen);
export const useToggleSearch = () => useUiStore((state) => state.toggleSearch);
export const useNotifications = () => useUiStore((state) => state.notifications);
export const useAddNotification = () => useUiStore((state) => state.addNotification);
export const useMarkAsRead = () => useUiStore((state) => state.markAsRead);
export const useUnreadCount = () => useUiStore((state) => state.unreadCount);
export const useSetUnreadCount = () => useUiStore((state) => state.setUnreadCount);
export const useIsNotificationsOpen = () => useUiStore((state) => state.isNotificationsOpen);
export const useToggleNotifications = () => useUiStore((state) => state.toggleNotifications);
