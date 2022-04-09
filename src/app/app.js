import { KaiwareSync } from 'kaiware-sync';

async function handler() {
  const sync = new KaiwareSync({
    appId: 'com.garredow.kaiware-sync-demo',
  });

  await sync.signin();
  console.log('Signed in!!');

  await sync.set({ theme: 'dark', color: 'red' });

  const result = await sync.get();
  console.log('settings', result);
}

document.querySelector('#btnAuth0').addEventListener('click', handler);
