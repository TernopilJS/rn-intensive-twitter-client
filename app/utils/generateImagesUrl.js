// generating images cache file in /app/constants/images

const fs = require('fs');
const path = require('path');

const fileTemplate = `import { Asset } from 'expo';

const loadImages = async () => {
  await Asset.loadAsync([
    __INSERT__
  ]);
};

export default loadImages;

`;
const requireTemplate = 'require(\'../assets/images/__INSERT__\')';
const assetsPath = path.resolve(__dirname, '../assets/images');
const imagesFilePath = path.resolve(__dirname, '../constants/images.js');

const generateImagesCacheFile = () => {
  const files = fs.readdirSync(assetsPath)
    .filter(item => item !== '.DS_Store');
  const requireMap = files.map(item => requireTemplate.replace('__INSERT__', item));
  const imagesFile = fileTemplate.replace('__INSERT__', `${requireMap.join(',\n    ')},`);

  fs.writeFileSync(imagesFilePath, imagesFile);
};

generateImagesCacheFile();
