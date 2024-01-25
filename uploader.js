const { execSync } = require('child_process');
const glob = require('glob');

const command = `npx kintone-customize-uploader --base-url ${process.env.KINTONE_BASE_URL} --username ${process.env.KINTONE_USER} --password ${process.env.KINTONE_PASSWORD} `;
const entries =
  process.argv.slice(2).length > 0
    ? glob.sync(`src/apps/${process.argv.slice(2)}/customize-manifest.json`)
    : glob.sync('src/apps/**/customize-manifest.json');
entries.forEach((file) => {
  console.log('\nuploading... ', file);
  const result = execSync(command + file);
  console.log('\n' + result);
});
