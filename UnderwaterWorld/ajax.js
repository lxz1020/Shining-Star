let ajaxTimes = 0

// 请求地址的基本路径
// const baseUrl = ''
function request(params) {
    // 每次调用 request 方法时，将 ajaxTimes 计数器自增一
    ajaxTimes++

    // 显示加载数据的提示
    uni.showLoading({
        title: '加载中',
        mask: true
    })
	 const token = uni.getStorageSync('token');
    return new Promise(function (resolve, reject) {
        uni.request({
            ...params,
            method: params.methods,
            url:params.url,
			header:{
				token
			},
            success(res) {
                resolve(res)
            },
            fail(err) {
                reject(err)
            },
            complete() {
                // 每当完成一个请求，让 ajaxTimes 计数器自减一
                ajaxTimes--

                if (ajaxTimes === 0) {
                    // 停止加载数据的提示
                    uni.hideLoading()
                }
            }
        })
    })
}

export {
	request
}