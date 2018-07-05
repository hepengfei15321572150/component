import alertComponent from './vue-alert';

const alert = {
	install(Vue,options){
		if (typeof window !== 'undefined' && window.Vue) {
		    window.Vue.use(alertComponent);
		};
		
		Vue.component('alert',alertComponent);
	}
}


export default alert;
