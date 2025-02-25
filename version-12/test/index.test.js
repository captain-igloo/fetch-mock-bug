import { describe, test } from '@jest/globals';
import fetchMock from 'fetch-mock';

import { makeRequest } from '../src/index';

describe('fetch mock upgrade', () => {
    fetchMock.mockGlobal();

    afterEach(() => {
        fetchMock.removeRoutes();
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

        expect(fetchMock.get('http://example.com/my-url', a).constructor).toStrictEqual(b.constructor);
    });
});
