module.exports = {
	// 配置路径别名
	configureWebpack: {
		devServer: {
			disableHostCheck: true,
			proxy: {
				"/mall/app": {
					"target": "http://8.131.230.77",
					"changeOrigin": true,
					"secure": false
				},
			}

		}
	}
}
