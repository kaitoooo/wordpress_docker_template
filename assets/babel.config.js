const config = (api) => {
    api.cache(true);
    const presets = [
        [
            '@babel/preset-env',
            {
                useBuiltIns: 'usage',
                corejs: '3.17',
            },
        ],
    ];
    const plugins = ['@babel/plugin-transform-template-literals'];
    const sourceType = 'unambiguous';
    return {
        presets,
        plugins,
        sourceType,
    };
};

module.exports = config;
