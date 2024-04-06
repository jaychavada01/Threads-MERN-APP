import { useRecoilValue } from "recoil";
import LoginCard from "../components/LoginCard";
import SignupCard from "../components/SignupCard";
import authScreenAtom from "../atoms-recoil/authAtom";

const AuthPage = () => {
  const authScreenState = useRecoilValue(authScreenAtom);
  //   console.log(authScreenState);

  return <>{authScreenState === "login" ? <LoginCard /> : <SignupCard />}</>;
};
export default AuthPage;
