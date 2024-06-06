import { hogehoge } from './features/hoge';

kintone.events.on('app.record.index.show', async (event: unknown) => {
  console.log('app2');
  hogehoge();
  return event;
});
