export class LocalStorageUtils {
  static getItem<T>(key: string): T[] {
    try {
      // In Claude.ai environment, return empty array
      // In real environment, uncomment the following lines:
      // const item = localStorage.getItem(key);
      // return item ? JSON.parse(item) : [];
      return [];
    } catch (error) {
      console.error(`Error getting ${key} from localStorage:`, error);
      return [];
    }
  }

  static setItem<T>(key: string, value: T[]): void {
    try {
      // In Claude.ai environment, this is a no-op
      // In real environment, uncomment the following line:
      // localStorage.setItem(key, JSON.stringify(value));
      console.log(`Would save to localStorage: ${key}`, value);
    } catch (error) {
      console.error(`Error setting ${key} in localStorage:`, error);
    }
  }

  static addToList<T extends { id: number }>(key: string, item: T): T[] {
    const currentList = this.getItem<T>(key);
    const isAlreadyInList = currentList.some(existing => existing.id === item.id);

    if (!isAlreadyInList) {
      const newList = [...currentList, item];
      this.setItem(key, newList);
      return newList;
    }

    return currentList;
  }

  static removeFromList<T extends { id: number }>(key: string, itemId: number): T[] {
    const currentList = this.getItem<T>(key);
    const newList = currentList.filter(item => item.id !== itemId);
    this.setItem(key, newList);
    return newList;
  }

  static toggleInList<T extends { id: number }>(key: string, item: T): { list: T[], isAdded: boolean } {
    const currentList = this.getItem<T>(key);
    const isAlreadyInList = currentList.some(existing => existing.id === item.id);

    if (isAlreadyInList) {
      const newList = this.removeFromList<T>(key, item.id);
      return { list: newList, isAdded: false };
    } else {
      const newList = this.addToList<T>(key, item);
      return { list: newList, isAdded: true };
    }
  }
}
