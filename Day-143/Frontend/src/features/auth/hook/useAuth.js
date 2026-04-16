import { setErro, setLoading, setUser } from "../state/auth.slice";
import { register } from "../service/auth.api";
import { useDispatch } from "react-redux";



export const useAuth = ()=>{

  const dispatch = useDispatch()
  async function handRegister({email,contact,password,fullname,isSeller = false}){

    const data = await register({email,contact,password,fullname, isSeller})

    dispatch(setUser(data.user))

  }

    return {handRegister}
}