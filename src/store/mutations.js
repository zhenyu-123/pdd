
import {
    HOME_CASUAL
} from './mutation-types'
export default {
    //['home_casual'],为了将公共的变量转为字符串,从而使用常量替代mutation事件类型
    [HOME_CASUAL](state, { home_casual }) {
        state.homecasual = home_casual;
    }
}