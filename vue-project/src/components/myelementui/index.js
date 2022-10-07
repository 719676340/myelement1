import CheckBox from './CheckBox/index.vue'
import CheckBoxGroup from './CheckBoxGroup/index.vue'
import InputNum from './InputNum/index.vue'
import MyButton from './MyButton/index.vue'
import MyCarousel from './MyCarousel/index.vue'
import MyCarouselItem from './MyCarouselItem/index.vue'
import MyDialog from './MyDialog/index.vue'
import MyIcon from './MyIcon/index.vue'
import MyInput from './MyInput/index.vue'
import MyOption from './MyOption/index.vue'
import MyPagination from './MyPagination/index.vue'
import MyRadio from './MyRadio/index.vue'
import MySelect from './MySelect/index.vue'
import MySwitch from './MySwitch/index.vue'
import MyRadioGroup from './MyRadioGroup/index.vue'
import MyMessage from './MyMessage/MyMessage.js'


export {     
  CheckBox,
  CheckBoxGroup,
  InputNum,
  MyButton,
  MyCarousel,
  MyCarouselItem,
  MyDialog,
  MyInput,
  MyIcon,
  MyOption,
  MyPagination,
  MyRadio,
  MySelect,
  MySwitch,
  MyRadioGroup
};

const components = [
  CheckBox,
  CheckBoxGroup,
  InputNum,
  MyButton,
  MyCarousel,
  MyCarouselItem,
  MyDialog,
  MyInput,
  MyIcon,
  MyOption,
  MyPagination,
  MyRadio,
  MySelect,
  MySwitch,
  MyRadioGroup
]
const install = function (app) {
  // 全局注册所有的组件
  app.config.globalProperties.$MyMessage = MyMessage
  components.forEach((item) => {
      app.component(item.name, item)
  })
}
export default {
  install
}