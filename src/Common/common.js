export default class Common {
    static saveState(data,dashboard){
        let userDetails = JSON.stringify(data)
        sessionStorage.setItem("userDetails", userDetails);
        sessionStorage.setItem("dashboard", dashboard);
    }
    static logout(){
      // sessionStorage.clear()
    }
    static groupBy = keys => array =>
    array.reduce((objectsByKeyValue, obj) => {
      keys.reduce((builder, key,index)=> {
        if(index !== keys.length -1){
          builder[obj[key]] = builder[obj[key]] || {};
        }
        else {
          builder[obj[key]] = (builder[obj[key]] || []).concat(obj);
        }
        return builder[obj[key]];
      },objectsByKeyValue);
      return objectsByKeyValue
    }, {});
}
