/**
 * Copyright (C) 2016 pantojs.xyz
 * test.js
 *
 * changelog
 * 2016-06-24[16:10:03]:revised
 *
 * @author yanni4night@gmail.com
 * @version 1.0.0
 * @since 1.0.0
 */
'use strict';
const assert = require('assert');
const panto = require('panto');
const fs = require('fs');
const ResourceTransformer = require('../');

describe('antiaris-panto-transformer-resource', () => {
    describe('#transform', () => {
        it('should replace all sub resource', done => {
            panto.setOptions({
                cwd: __dirname + '/fixtures/'
            });

            const file = {
                filename: 'test.html',
                content: fs.readFileSync(__dirname + '/fixtures/test.html', 'utf-8')
            };

            new ResourceTransformer({
                getResourceAlias: res => {
                    const map = {
                        'script/1.js': 'http://cdn/1.js',
                        'script/2.js': 'http://cdn/2.js',
                        'img/1.png': 'http://cdn/1.png',
                        'img/bg.jpg': 'http://cdn/bg.jpg',
                        'style/1.css': 'http://cdn/1.css'
                    };
                    return map[res];
                }
            }).transform(file).then(tfile => {
                assert.ok(tfile.content.indexOf('http://cdn/1.js') > -1, 'find "http://cdn/1.js"');
                assert.ok(tfile.content.indexOf('http://cdn/2.js') > -1, 'find "http://cdn/2.js"');
                assert.ok(tfile.content.indexOf('http://cdn/1.png') > -1, 'find "http://cdn/1.png"');
                assert.ok(tfile.content.indexOf('http://cdn/bg.jpg') > -1, 'find "http://cdn/bg.jpg"');
                assert.ok(tfile.content.indexOf('http://cdn/1.css') > -1, 'find "http://cdn/1.css"');
            }).then(() => {
                done();
            });
        });
    });
});