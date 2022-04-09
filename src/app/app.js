import Kass, { signin } from 'kass-lib';

async function handler() {
  await signin();
  console.log('Signed in!!');

  const kass = new Kass({
    appId: 'com.garredow.kass-demo',
    baseUrl: 'https://kass.kaiware.io',
  });

  await kass.set({ theme: 'dark', color: 'red' });

  const result = await kass.get();
  console.log('settings', result);
}

document.querySelector('#btnAuth0').addEventListener('click', handler);
