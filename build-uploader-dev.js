const { build } = require('vite');
const { execSync } = require('child_process');

const command = `npx kintone-customize-uploader --base-url ${process.env.KINTONE_BASE_URL} --username ${process.env.KINTONE_USER} --password ${process.env.KINTONE_PASSWORD} `;

async function buildWithConfig(configPath) {
  await build({
    mode: 'development',
    configFile: configPath,
  });
}

async function main() {
  const appName = process.argv.slice(2);
  if (appName.length === 0) {
    console.error('引数にアプリ名を入れてください。');
  }

  // ビルドする
  const buildConfigPath = `src/apps/${appName}/vite.config.mjs`;
  console.log(`Building with ${buildConfigPath}...`);
  await buildWithConfig(buildConfigPath);
  console.log(`Build completed for ${buildConfigPath}`);

  // アップロードする
  const uploadConfigPath = `src/apps/${appName}/customize-manifest-dev.json`;
  console.log('\nuploading... ', uploadConfigPath);
  const result = execSync(command + uploadConfigPath);
  console.log('\n' + result);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
