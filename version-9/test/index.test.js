import { describe, test } from '@jest/globals';
import fetchMock from 'fetch-mock';

import { makeRequest } from '../src/index';

describe('fetch mock upgrade', () => {
    afterEach(() => {
        fetchMock.reset();
    });

    test('toStrictEqual() should return true', async () => {
        fetchMock.get('http://example.com/my-url', {
            success: true,
        });
        expect(await makeRequest()).toStrictEqual({
            success: true,
        });
    });

    test('same constructor', async () => {
        const a = {
            success: true,
        };

        const b = {
            success: true,
        }

        fetchMock.get('http://example.com/my-url', a);

        const response = await makeRequest();

        expect(response.constructor).toStrictEqual(b.constructor);
    });
});
