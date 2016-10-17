function classNames(op){
	var cls = "";
	
	for(var attr in op ){
		if(op[attr]){
			cls += " "+attr;
		}
	}
	
	return cls.trim();
}

var store = (namespace,data) => {
	if (data) {
		//如果有第二个参数，则存入浏览器的localStorage
		return localStorage.setItem(namespace, JSON.stringify(data));
	}
	//如果只有第一个参数，则取出浏览器namespace中对应的值
	var store = localStorage.getItem(namespace);
	//如果有，则解析后返回如果没有返回空[]
	return (store && JSON.parse(store)) || [];
	
}
