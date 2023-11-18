import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createClient} from '@supabase/supabase-js';

const supabaseUrl = 'https://udmokqsitnzlkneysnzb.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkbW9rcXNpdG56bGtuZXlzbnpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAyOTgwMzksImV4cCI6MjAxNTg3NDAzOX0.S1qiV6DLZwUQATikukl7YQClNhtTjbL26wW99jsYb8k';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
