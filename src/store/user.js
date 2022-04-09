import { defineStore } from 'pinia'
import API from "../test/api"
import { useAppStore } from './app'

export const useUserStore = defineStore({
    id: 'user',
    // 开启数据缓存
    persist: {
        enabled: true,
        // strategies: [
        //   {
        //     key: 'my_user',
        //     storage: localStorage,
        //   }
        // ]
        strategies: [
            {
              storage: localStorage,
              paths: ['name', 'age']
            }
          ]
    },
    state: () => {
      return {
        name: '张三',
        age: 18,
        gender: '男'
      }
    },
    getters: {
        fullName: (state) => {
          return state.name + '丰'
        }
      },
    actions: {
      updateName(name) {
        this.name = name
      },
      async login(account, pwd) {
        Promise.all([API.getOnlinePerson(account, pwd),API.getRegPerson()]).then(function([onlinePerson,RegPerson]){
            //这里写等这两个ajax都成功返回数据才执行的业务逻辑
            API.calOnlinePercent(onlinePerson.onlinePerson,RegPerson).then(function(percent){
                const appStore = useAppStore()
                let data = { percent,...onlinePerson }
                appStore.setData(data) // 调用 app store 里的 action 方法
                return data
            })
        })
       
        
      }
    }
  })
  

