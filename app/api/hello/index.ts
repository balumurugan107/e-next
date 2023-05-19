import { updateTokenToStore } from "@/app/GlobalRedux/Slices/login";
import { readCookie, tokenKey } from "@/_constants"
import { useDispatch } from "react-redux";

export const appProps = () =>{
    const token = readCookie(tokenKey);
    console.log(token,"token")
    const dispatch = useDispatch();
    dispatch(updateTokenToStore(token));
}