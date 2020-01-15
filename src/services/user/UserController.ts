import { getUserInfo } from "./../providers/postGresDataProvider";

export const isValidUser = async (q: string) => {
  let userInfo = await getUserInfo(q);
  
  if(userInfo.length > 0 && userInfo[0].loginid){
    return {
      "response_code":"OK",
      "valid_user":"OK"
    }
  }else{
    return {
      "response_code":"OK",
      "valid_user":"NOT_OK"
    }
  }
};