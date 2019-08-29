const proxy = require("http-proxy-middleware");

module.exports = (app) => {
    app.use(
        proxy(
            "/api", {
                target: "http://m.laiyifen.com",
                changeOrigin: true,
            }
        )),
        app.use(
            proxy(
                "/cms", {
                    target: " http://m.laiyifen.com/",
                    changeOrigin: true,
                }
            ))
}