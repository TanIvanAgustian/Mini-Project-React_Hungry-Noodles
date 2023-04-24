import { getAuthCookie } from './utils/cookies'
import { redirect } from 'react-router-dom'

export default function Auth(){
    const mustAdmin = () => {
        const token = getAuthCookie()
        if (!token) {
            return redirect('/')
        }
        else if (token && token != "bf69de5b-15f7-4a3f-85d2-52cd8048af93"){
            return redirect('/HomePage')
        }
        return null
    }
    const mustLogin = () => {
        const token = getAuthCookie()
        if (token && token == "bf69de5b-15f7-4a3f-85d2-52cd8048af93") {
            return redirect('/Homepage/Admin')
        }
        else if (token){
            return redirect('/Homepage')
        }
        return null
    }
    const mustUser = () => {
        const token = getAuthCookie()
        if (token && token == "bf69de5b-15f7-4a3f-85d2-52cd8048af93") {
            return redirect('/Homepage/Admin')
        }
        else if (!token){
            return redirect('/')
        }
        return null
    }

    return {mustAdmin,mustLogin,mustUser};
}