// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://e300b41df2ffb6d4592972400a25c0d3@o4506876178464768.ingest.us.sentry.io/4507159179034624",

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: process.env.NODE_ENV === 'development',
  
  // Optimize tracing to reduce instrumentation overhead
  integrations: [
    // Only include instrumentations you actually need
    // Remove or comment out ones you don't use
    new Sentry.Integrations.Http({ tracing: true }),
    // new Sentry.Integrations.Mysql(), // Only if you use MySQL
    // new Sentry.Integrations.Mongo(), // Only if you use MongoDB
    // new Sentry.Integrations.Express(), // Only if you use Express
  ],
  
  // Environment-specific settings
  environment: process.env.NODE_ENV,
  
  // Performance optimizations
  beforeSend(event) {
    // Filter out noise in development
    if (process.env.NODE_ENV === 'development') {
      // You can add custom filtering logic here
      return event;
    }
    return event;
  },
});
