import { hogehoge } from './hoge';

kintone.events.on('app.record.index.show', async (event: unknown) => {
  console.log('app1');
  hogehoge();
  return event;
});
