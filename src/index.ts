import type { Express, Router } from 'express';
import process from 'node:process';
import { errorHandler, notFoundHandler } from '@/middleware/errors';
import routes from '@/routes';
import dotenv from 'dotenv';
import express from 'express';
import logger from 'morgan';
import vhost from 'vhost';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Morgan logging
app.use(logger(process.env.LOG_MODE || 'short'));

// Domains can have their own routes file; not currently used
// domainKey => routes file
const domains: Record<string, Router> = {
  'adamberg.dev': routes,
  'adamberg.me': routes,
  'adambergman.com': routes,
  'adambergman.dev': routes,
  'adambergman.me': routes,
  'adambergman.net': routes,
  'adber.me': routes,
  'adberg.dev': routes,
  'adberg.io': routes,
  'adberg.me': routes,
  'atb.dev': routes,
  'bergy.dev': routes,
  'bergy.io': routes,
  'brg.mn': routes,
};

// Loop the domains list and setup vhosts
Object.keys(domains).forEach((d) => {
  // Main domain
  // @ts-expect-error @types/vhost doesn't seem compatible with passing a router, but it works
  app.use(vhost(d, domains[d]));
  // Catch subdomains
  // @ts-expect-error @types/vhost doesn't seem compatible with passing a router, but it works
  app.use(vhost(`*.${d}}`, domains[d]));
});

// FOR DEV ONLY: In development a host won't be set so no vhost-based routes
// will be loaded in. The main routes are loaded below so that localhost will work
// in dev and to be there as a fallback just in case
app.use(routes);

// Error handling
app.use(errorHandler);
app.use(notFoundHandler);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on ${port}`);
});
