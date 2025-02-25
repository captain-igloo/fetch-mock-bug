With fetch-mock version 9, I was using jest's "toStrictEqual()" to compare the JSON response from a fetch call with what is expected.  This worked fine, but with fetch-mock 12 my tests fail.  If I change "toStrictEqual()" to "toEqual()" the tests pass.  The problem is that the constructors of the expected and actual objects differ in version 12.  See https://github.com/jestjs/jest/blob/main/packages/expect-utils/src/utils.ts#L398 .  Is this a bug in fetch-mock or do I need to switch to "toEqual()" now?

git clone git@github.com:captain-igloo/fetch-mock-bug.git

cd fetch-mock-bug/version-9
npm ci
npm run test

cd fetch-mock-bug/version-12
npm ci
npm run test

