<template>
	<div id="vue_alert">

	</div>
</template>
<script>
export default{
	props:[ 'status','content' ],
	data(){
		return{
			el:null
		}
	},
	watch:{
		status(newVal,oldVal){
			console.log(newVal)
			if( newVal === true ){
				this.show();
			}else{
				this.hide();
			};
		}
	},
	mounted(){
		if( this.status === true ){
			this.show();
		}else{
			this.hide();
		}
	},
	methods:{
		show(){
			let div = document.createElement('div');
			div.style.width = '100%';
			div.style.height = '100%';
			div.style.position = 'absolute';
			div.style.left = '0';
			div.style.top = '0';
			div.style.background = 'rgba(0,0,0,.5)';
			div.innerHTML = '你好胖';
			
			document.getElementsByTagName('body')[0].appendChild(div);
		},
		hide(){
			
		}
	}
}
</script>
<style lang="less" scoped>
/*@import '../assets/style/style.less';*/

</style>