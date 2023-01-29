import Form from './form.vue';
import FormItem from './form-item.vue';

Form.Item = FormItem;

Form.install = (Vue) => {
	Vue.component(Form.name, Form);
};

export default Form;
