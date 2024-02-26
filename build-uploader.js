const { build } = require('vite');
const { execSync } = require('child_process');
const glob = require('glob');

const command = `npx kintone-customize-uploader --base-url ${process.env.KINTONE_BASE_URL} --username ${process.env.KINTONE_USER} --password ${process.env.KINTONE_PASSWORD} `;

async function buildWithConfig(buildMode, configPath) {
  await build({
    mode: buildMode,
    configFile: configPath,
  });
}

async function main() {
  // アップロードする環境
  const environment = process.argv.slice(2).includes('prod') ? 'prod' : 'test';
  console.log({ environment });

  const entries =
    environment === 'prod'
      ? glob.sync('src/apps/**/customize-manifest.json')
      : glob.sync('src/apps/**/customize-manifest-test.json');

  const buildMode = environment === 'prod' ? 'production' : 'test';

  entries.forEach(async (uploadConfigPath) => {
    const appName = uploadConfigPath.split('/')[2];
    const buildConfigPath = `src/apps/${appName}/vite.config.mjs`;
    // ビルドする
    console.log(`Building with ${buildConfigPath}...`);
    await buildWithConfig(buildMode, buildConfigPath);
    console.log(`Build completed for ${buildConfigPath}`);

    // アップロードする
    console.log('\nuploading... ', uploadConfigPath);
    const result = execSync(command + uploadConfigPath);
    console.log('\n' + result);
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
