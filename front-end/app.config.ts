export default {
  expo: {
    name: "your-app-name",
    slug: "your-app-slug",
    scheme: "your-app-scheme",
    version: "1.0.0",
    extra: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY,
      supabaseServiceRole: process.env.SUPABASE_SERVICE_ROLE_KEY,
    },
    plugins: [],
    newArchEnabled: true
  }
};