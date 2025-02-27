import { createClient } from '@supabase/supabase-js';
import Constants from 'expo-constants';

const supabaseUrl = Constants.expoConfig?.extra?.supabaseUrl;
//const supabaseAnonKey = Constants.expoConfig?.extra?.supabaseAnonKey 
const supabaseServiceRole = Constants.expoConfig?.extra?.supabaseServiceRole;

if (!supabaseUrl || !supabaseServiceRole) {
  throw new Error('Missing Supabase configuration');
}

export const supabase = createClient(
  supabaseUrl, 
  supabaseServiceRole,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);