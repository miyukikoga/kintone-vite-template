const { execSync } = require('child_process');
const glob = require('glob');

const command = `npx kintone-customize-uploader --base-url ${process.env.KINTONE_BASE_URL} --username ${process.env.KINTONE_USER} --password ${process.env.KINTONE_PASSWORD} `;
// アップロードする環境
const environment = process.argv.slice(2).includes('prod') ? 'prod' : 'test';
console.log({ environment });
const entries =
  environment === 'prod'
    ? glob.sync('src/apps/**/customize-manifest.json')
    : glob.sync('src/apps/**/customize-manifest-test.json');
entries.forEach((file) => {
  console.log('\nuploading... ', file);
  const result = execSync(command + file);
  console.log('\n' + result);
});
