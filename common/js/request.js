var host = "http://cms-api.cqtouquan.com";
import Helper from './helper';
module.exports={
	
	requestAll(url="",param={},header={}){
		return this.reqeust({url:url,data:param,header:header});
	},
	reqeust(config={}){
		let config_default={
			url:"",
			method:"post",
			data:{api_version:"1.0.0"},
			header:{"content-type":"application/x-www-form-urlencoded"},
			dataType:"json"
		};
		
		//let postData = Object.assign({},config_default,config);
		let postData = Helper.deepMerge(config_default,config);  // 深度拷贝
		
		console.log(postData);
		
		return new Promise((resolve,reject)=>{
			uni.request({
				url:host+postData.url,
				data:postData.data,
				header:postData.header,
				dataType:postData.dataType,
				success(res) {
					if(res.statusCode==200){
						if(res.data.code==0){
							resolve(res.data);
						}else{
							uni.showToast({
								title:res.data.msg,
								icon:"none"
							});
						}
					}else{
						reject(err);
					}
				},
				fail(err) {
					reject(err);
				}
			});
		})
		
	}
}