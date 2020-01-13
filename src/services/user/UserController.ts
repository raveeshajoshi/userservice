import { getUserInfo } from "./../providers/postGresDataProvider";

export const isValidUser = async (q: string) => {
  let userInfo = await getUserInfo(q);
  if(userInfo){
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
  return await getUserInfo(q);
};