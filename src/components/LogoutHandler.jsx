import * as cookies from "js-cookie"

const LogoutHandler = ({ history }) => {
  useEffect(
    () => {
      Cookies.remove("session");
      history.push("/login");
    },
    [history]
  );

  return <div>Logging out!</div>;
};
