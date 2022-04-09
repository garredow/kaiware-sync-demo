import { KaiwareSync } from 'kaiware-sync';

const sync = new KaiwareSync({
  appId: 'com.garredow.kaiware-sync-demo',
});
sync.handleAuthCallback();
