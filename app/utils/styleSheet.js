import { StyleSheet, Dimensions } from 'react-native';

const PREFIXES = {
  small: 's',
  medium: 'm',
  big: 'b',
};

const DIMENSIONS = {
  IPHONE_5: {
    width: 320,
    height: 568,
    prefix: PREFIXES.small,
  },
  IPHONE_6_7_8: {
    width: 375,
    height: 667,
    prefix: PREFIXES.medium,
    fallback: PREFIXES.small,
  },
  IPHONE_PLUS_6_7_8: {
    width: 414,
    height: 736,
    prefix: PREFIXES.big,
    fallback: PREFIXES.medium,
  },
  IPHONE_X: {
    width: 375,
    height: 812,
    prefix: PREFIXES.medium,
    fallback: PREFIXES.small,
  },
  defaultDimensions: {
    width: 375,
    height: 667,
    prefix: PREFIXES.medium,
    fallback: PREFIXES.small,
  },
};

const getRightPhone = (dimensions) => {
  let rightPhone = Object.keys(DIMENSIONS)
    .map(key => DIMENSIONS[key])
    .find(({ width, height }) =>
      dimensions.width === width && dimensions.height === height);

  if (!rightPhone) {
    rightPhone = DIMENSIONS.defaultDimensions;
  }

  return rightPhone;
};

class ExtendedStyleSheet {
  constructor() {
    // _p – phone
    this._p = getRightPhone(Dimensions.get('window'));
  }

  create(stylesObj) {
    const transformedObj = this._transform(stylesObj);
    return StyleSheet.create(
      transformedObj,
    );
  }

  select(obj) {
    const { prefix, fallback } = this._p;
    const keys = Object.keys(obj);

    if (keys.indexOf(prefix) > -1) {
      return obj[prefix];
    } else if (keys.indexOf(fallback) > -1) {
      return obj[fallback];
    }

    const key = keys.find(k => k !== prefix && k !== fallback);
    return obj[key];
  }

  // transforming style object with selections into valid RN StyleSheet
  // for example
  // const exampleStyles = {
  //   root: {
  //     width: {
  //       s: 10,
  //       m: 20,
  //       b: 30,
  //     },
  //   },
  // };
  // after transforming styles styles.root.width will have a value
  // 10 for iphone 5/5s/5c, 20 for iphone 6/7/8/x, 30 for plus versions
  _transform(stylesObj) {
    const { prefix, fallback } = this._p;

    const transformedStyles = {};

    // go through all the properties of our styles
    // example: exampleStyles has properties ['root']
    Object.keys(stylesObj).forEach((styleProperty) => {
      // if property is not an object just assign it to our styles object and go to the next one
      // example: styleProperty === 'root'
      // typeof exampleStyles['root'] === 'object'
      // so wi will pass it
      if (typeof stylesObj[styleProperty] !== 'object') {
        transformedStyles[styleProperty] = stylesObj[styleProperty];
        return;
      }

      // creating styles object for our styles
      // example: transformedStyles = { root: {} }
      transformedStyles[styleProperty] = {};

      // go through all the properties of our styles[styleProperty]
      // example: exampleStyles['root'] has properties ['width']
      Object.keys(stylesObj[styleProperty]).forEach((style) => {
        // again if property is not an object just assign it to our styles
        // object and go to the next one
        // but now we will add it to "class" (styles object key)
        // example: typeof exampleStyles['root']['width'] === 'object'
        if (typeof stylesObj[styleProperty][style] !== 'object') {
          transformedStyles[styleProperty][style] = stylesObj[styleProperty][style];
          return;
        }

        // create array of all the style keys
        // example exampleStyles['root']['width'] has properties ['s', 'm', 'b']
        const styleKeys = Object.keys(stylesObj[styleProperty][style]);

        // if the array contain our prefix
        // we will add it its value to transformedStyles
        // example: prefix === 'm'
        // const transformedStyles['root']['width'] exampleStyles['root']['width']['m']
        if (styleKeys.indexOf(prefix) > -1) {
          transformedStyles[styleProperty][style] = stylesObj[styleProperty][style][prefix];
        // if the array not contain our prefix we will use fallback
        // and will add its value to transformedStyles
        } else if (styleKeys.indexOf(fallback) > -1) {
          transformedStyles[styleProperty][style] = stylesObj[styleProperty][style][fallback];
        // if array of all the style keys not contain any prefixes
        // add it as it is to styles
        } else {
          transformedStyles[styleProperty][style] = stylesObj[styleProperty][style];
        }
      });
    });

    return transformedStyles;
  }
}

const sheet = new ExtendedStyleSheet();

export default sheet;
