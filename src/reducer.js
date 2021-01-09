
//初始化10000
//涨工资  +100
//扣工资 -100

let reducer = (state=0,action) =>{
    let result = state;
    switch (action.type) {
      case '涨工资':
        result +=100;
        break;
        case '扣工资':
          result -=110;
          break;
      
      default:
        break;
    }
    return result;
  }
  
export default reducer;