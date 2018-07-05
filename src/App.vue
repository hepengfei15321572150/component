<template>
	<div id="app">
		<div @click="change">点我</div>
		<alert :status="status"></alert>
	</div>
</template>

<script>
export default {
	data() {
		return {
			status:true
		}
	},
	methods:{
		change(){
			this.status = !this.status;
//			console.log(this.status)
		}
	}
}
</script>

<style>
	
</style>