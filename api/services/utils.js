module.exports = {

  /**
   *
   * Service to store utility functions.
   *
   * */

  /**
  *
  * getArray: Gets standard array for an associative array.(Object in javascript) ;
  *
  **/
  getArray : function(obj){
    var arr = [];
    var j;
    for(j in obj){
      if(obj.hasOwnProperty(j)){
        arr.push(obj[j]);
      }
    }
    return arr;
  }
};
