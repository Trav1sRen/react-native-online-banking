import { createClient } from '@supabase/supabase-js';
import { MMKV } from 'react-native-mmkv';
import 'react-native-url-polyfill/auto';

const storage = new MMKV({ id: 'supabase-storage' });

const mmkvStorageConfig = {
  setItem: (key: string, data: string | number | boolean | Uint8Array) => storage.set(key, data),
  getItem: (key: string) => storage.getString(key) as string | null,
  removeItem: (key: string) => storage.delete(key),
};

export const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!,
  {
    auth: {
      storage: mmkvStorageConfig,
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: false,
    },
  }
);
