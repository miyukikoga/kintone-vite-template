const { execSync } = require('child_process');
const glob = require('glob');

const command = `npx kintone-customize-uploader --base-url ${process.env.KINTONE_BASE_URL} --username ${process.env.KINTONE_USER} --password ${process.env.KINTONE_PASSWORD} `;

const appNameList = process.argv.slice(2);
if (appNameList.length === 0) {
  console.error('引数にアプリ名を入れてください。');
}
const entries = glob.sync(
  `src/apps/${appNameList}/customize-manifest-dev.json`,
);
entries.forEach((file) => {
  console.log('\nuploading... ', file);
  const result = execSync(command + file);
  console.log('\n' + result);
});
