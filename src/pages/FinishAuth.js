import {useSearchParams} from "react-router-dom";

function setCookie(name,value,hours) {
    var expires = "";
    if (hours) {
        var date = new Date();
        date.setTime(date.getTime() + (hours*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    const cookieString = name + "=" + (value || "")  + expires + "; path=/";
    console.log(cookieString);
    document.cookie = cookieString;
}

const FinishAuth = (props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const code  = searchParams.get("access_token")
    console.log(`access_token: ${code}`)
    setCookie('access_token',code,1)
    window.location.replace('http://localhost:3000/');
    return null;
}

export default FinishAuth