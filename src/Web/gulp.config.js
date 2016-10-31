module.exports = {
    angular2AppFolder : "./angular2app/",
    rootJsFolder: "./wwwroot/js/",
    rootCssFolder: "./wwwroot/styles/",
    rootAppFolder: "./wwwroot/app/",
    sources: {
        jsFilesInclSourcePaths: [
            "node_modules/core-js/client/shim.min.js",
            "node_modules/zone.js/dist/zone.js",
            "node_modules/reflect-metadata/Reflect.js",
            "node_modules/systemjs/dist/system.src.js"
        ],
        angularRC: "node_modules/@angular/**/*.*",
        Rxjs: "node_modules/rxjs/**/*.*",
        bootstrap: "node_modules/bootstrap/dist/**/*.*"
    }
}; 