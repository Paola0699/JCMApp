import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'my-app',
  webDir: 'build',
  bundledWebRuntime: false,
  server:{
    url: 'http://192.168.1.71:3000',
    cleartext: true
  }
};

export default config;
