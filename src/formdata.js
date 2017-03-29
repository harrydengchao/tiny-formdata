// 传统 form 表单形式数据请求，适用于 附件下载

class RequestFormData {
	constructor() {

	}
	request({params = {}, data = {}, url = '', callback = function(){}, method = 'post'}) {
		/**
		 * params: get 请求参数
		 * data = post 请求参数
		 * url： 请求URL
		 * method: 默认 post 方法，不需要传入
		 */
		let config = {};
		if (method.toLowerCase() === 'post') {
			config = data;
      // 存在 url 参数
      if (params && Object.keys(params).length > 0) {
        url += '?' + Object.keys(params).map(item => `${item}=${params[item]}`).join('&')
      }
		}
		else if (method.toLowerCase() === 'get') {
			config = params;
		}
		let _form = document.createElement('form');
		_form.className = 'download-tool';
		let formProp = {
			style: 'display:none',
			method: method,
			action: url
		}
		for (let prop in formProp) {
			_form.setAttribute(prop, formProp[prop]);
		}
		Object.keys(config).forEach((item, index) => {
			let inputProp = {
				type: 'hidden',
				name: item,
				value: config[item]
			}
			let _input = document.createElement('input');
			for (let prop in inputProp) {
				_input.setAttribute(prop, inputProp[prop]);
			}
			_form.appendChild(_input);
		});
		document.body.appendChild(_form);
		_form.submit();
		_form.parentNode.removeChild(_form);
	}
}

/* 附件下载 */
let requestFormData = new RequestFormData();
let request = requestFormData.request.bind(requestFormData);

export default request
