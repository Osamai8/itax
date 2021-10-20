export default class Common {
    static saveState(data){
        let userDetails = JSON.stringify(data)
        sessionStorage.setItem("userDetails", userDetails);
    }
    static groupBy = key => array =>
    array.reduce((objectsByKeyValue, obj) => {
      const value = obj[key];
      objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
      return objectsByKeyValue;
    }, {});
}
