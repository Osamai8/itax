export default class Common {
    static saveState(data){
        let userDetails = JSON.stringify(data)
        sessionStorage.setItem("userDetails", userDetails);
    }

}
