import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.myproject',
  appName: 'myproject',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
