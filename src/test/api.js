function getOnlinePerson(account, pwd){
    //模拟
    return new Promise(function(resolve,reject){
        var onlinePerson = Math.ceil(Math.random()*1000)
        setTimeout(function(){
            resolve( { account, pwd,onlinePerson })
        },Math.random()*1000)
    })
   
}
function getRegPerson(){
    //模拟
    return new Promise(function(resolve,reject){
            var RegPerson = Math.ceil(Math.random()*1000)+1000
            setTimeout(function(){
                resolve(RegPerson)
            },Math.random()*1000)
            })
  
}
 
function calOnlinePercent(onlinePerson,RegPerson){
    return new Promise(function(resolve,reject){ 
        var percent = Math.ceil(onlinePerson/RegPerson*100)
        setTimeout(function(){
            resolve(percent)
        },Math.random()*1000)
    })
}


export default {
    getOnlinePerson,
    getRegPerson,
    calOnlinePercent
}