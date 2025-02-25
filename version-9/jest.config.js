
const config = {
    transformIgnorePatterns: ["/node_modules/(?!data-uri-to-buffer|fetch-blob|formdata-polyfill|node-fetch)"],
    roots: ['./test'],
};

module.exports = config;
