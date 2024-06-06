import { createRoot } from 'react-dom/client';
import { Button } from '../../components/button';
import { clickEvent } from './features/hoge';

kintone.events.on('app.record.index.show', () => {
  console.log('app1');

  const targetEl = kintone.app.getHeaderSpaceElement();
  if (targetEl == null) return;

  const root = createRoot(targetEl);
  root.render(<Button title="ボタン" handleClick={clickEvent} />);
});
