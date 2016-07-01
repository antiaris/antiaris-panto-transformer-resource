# antiaris-panto-transformer-resource
[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

Resource transformer for panto.

```js
panto.loadTransformer('resource');

panto.pick('**/*.html').pipe(panto.read()).pipe(panto.resource({
    getResourceAlias: res => {
        return 'http://cdn.com/' + res;
    }
})).end();
```

## options
 - getResourceAlias: function

[npm-url]: https://npmjs.org/package/antiaris-panto-transformer-resource
[downloads-image]: http://img.shields.io/npm/dm/antiaris-panto-transformer-resource.svg
[npm-image]: http://img.shields.io/npm/v/antiaris-panto-transformer-resource.svg
[travis-url]: https://travis-ci.org/antiaris/antiaris-panto-transformer-resource
[travis-image]: http://img.shields.io/travis/antiaris/antiaris-panto-transformer-resource.svg
[david-dm-url]:https://david-dm.org/antiaris/antiaris-panto-transformer-resource
[david-dm-image]:https://david-dm.org/antiaris/antiaris-panto-transformer-resource.svg
[david-dm-dev-url]:https://david-dm.org/antiaris/antiaris-panto-transformer-resource#info=devDependencies
[david-dm-dev-image]:https://david-dm.org/antiaris/antiaris-panto-transformer-resource/dev-status.svg