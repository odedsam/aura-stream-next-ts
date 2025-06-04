import { useState } from 'react';
import { LocalStorageUtils } from '@/utils/localStorage';

export function useLocalStorage<T extends { id: number }>(
  key: string,
  initialValue: T[] = [],
): [T[], (item: T) => void, (itemId: number) => void, (item: T) => void] {
  const [items, setItems] = useState<T[]>(() => {
    const stored = LocalStorageUtils.getItem<T>(key);
    return stored.length > 0 ? stored : initialValue;
  });

  const addItem = (item: T): void => {
    const newList = LocalStorageUtils.addToList(key, item);
    setItems(newList);
  };

  const removeItem = (itemId: number): void => {
    const newList = LocalStorageUtils.removeFromList<T>(key, itemId);
    setItems(newList);
  };

  const toggleItem = (item: T): void => {
    const { list } = LocalStorageUtils.toggleInList(key, item);
    setItems(list);
  };

  return [items, addItem, removeItem, toggleItem];
}
