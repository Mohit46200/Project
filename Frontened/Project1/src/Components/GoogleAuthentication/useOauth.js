import { useGoogleLogin } from "@react-oauth/google";

export const useOauth = () => {

    const responseGoogle = async (authResult) => {
        try {
            console.log(authResult);
        } catch (err) {
            console.error("Error is ", err);
        }
    };

    const login = useGoogleLogin({
        onSuccess: responseGoogle,
        onError: responseGoogle,
        flow: "auth-code",
    });

    return login;
};