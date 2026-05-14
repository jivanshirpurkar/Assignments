import { test, expect } from '@playwright/test';

test('test1', { tag: '@sanity' }, async ({ page: any }) => {
    console.log('This is test1');
});


test('test2', { tag: '@regression' }, async ({ page: any }) => {
    console.log('This is test2');
});

test('test3', { tag: '@somke' }, async ({ page: any }) => {
    console.log('This is test3');
});


test('test4', {
    tag: ['@sanity', '@regression']
}, async ({ page }) => {

    console.log('This is test3');

});

