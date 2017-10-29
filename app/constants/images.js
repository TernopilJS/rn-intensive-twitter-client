import { Asset } from 'expo';

const loadImages = async () => {
  await Asset.loadAsync([
    // require('path/to/image.png')
  ]);
};

export default loadImages;
