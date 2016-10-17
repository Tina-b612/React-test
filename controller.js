
var locaData = store("miaov");
//先取一下浏览器中localStorage中 text 的值
console.log(locaData)
//如果取到了值
if(locaData.length){
	//同步数据
	data = locaData;
}else{ //如果没有取到值,则存一下
	store("miaov",data);
}



var controller = {
	addItem(item){
		data.push({
			id: new Date().getTime(),
			title: item,
			isChecked: false
		});
		//数据更新以后，调用render，重新渲染界面
		controller.render();
		//新增的数据存在localStorage中
		store("miaov",data);
	},
	deleteItem(id){
		data = data.filter(function (item){
			return item.id !== id;
		});
		
		controller.render();
		store("miaov",data);
	},
	toggoleItem(id){
		data.forEach(function(item){
			if(item.id == id){
				item.isChecked = !item.isChecked;
			}
		})
		controller.render();
		store("miaov",data);
	},
	toggleAllItem(checked){
		data.forEach(function (item){
			item.isChecked = checked;
		})
		controller.render();
		store("miaov",data);
	}
	
	
	
}
