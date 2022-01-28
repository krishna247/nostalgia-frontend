import {useSearchParams} from "react-router-dom";
import {checkIsLocal} from "../utils";

function setCookie(name,value,hours) {
    let expires = "";
    if (hours) {
        const date = new Date();
        date.setTime(date.getTime() + (hours*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    const cookieString = name + "=" + (value || "")  + expires + "; path=/";
    console.log(cookieString);
    document.cookie = cookieString;
}

const FinishAuth = () => {
    // eslint-disable-next-line no-unused-vars
    const [searchParams, setSearchParams] = useSearchParams();
    const code  = searchParams.get("access_token")
    console.log(`access_token: ${code}`)
    setCookie('access_token',code,1)
    const redirectURL = checkIsLocal() ? "http://localhost:3000" : "http://3.65.240.94:3080"
    window.location.replace(redirectURL);
    return null;
}

export default FinishAuth