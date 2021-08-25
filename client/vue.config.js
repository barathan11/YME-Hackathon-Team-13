module.exports = {
    // edit the title
    chainWebpack: (config) => {
        config.plugin('html').tap((args) => {
            args[0].title = 'ActivateMY';
            return args;
        });
    },
};
