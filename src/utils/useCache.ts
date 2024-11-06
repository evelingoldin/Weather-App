// src/features/Caching/useCache.ts

interface CacheOptions {
    expiryInMinutes?: number; // Optional expiry time in minutes
  }
  
  const useCache = {
    set: (key: string, value: any, options?: CacheOptions): void => {
      const data = {
        value,
        expiry: options?.expiryInMinutes
          ? Date.now() + options.expiryInMinutes * 60 * 1000
          : null,
      };
      localStorage.setItem(key, JSON.stringify(data));
    },
  
    get: (key: string): any | null => {
      const cachedItem = localStorage.getItem(key);
      if (!cachedItem) return null;
  
      try {
        const data = JSON.parse(cachedItem);
        if (data.expiry && Date.now() > data.expiry) {
          localStorage.removeItem(key);
          return null; // Cache expired
        }
        return data.value;
      } catch (error) {
        console.error("Failed to parse cached data:", error);
        return null;
      }
    },
  
    remove: (key: string): void => {
      localStorage.removeItem(key);
    },
  
    clearAll: (): void => {
      localStorage.clear();
    },
  };
  
  export default useCache;
  