import React, {useContext} from 'react';
import { SessionContext } from "../components/session.ts";

const AccountPage = () => {
  const session = useContext(SessionContext)
  return(
    <div>
      <h6>username: {session.username}</h6>
    </div>
  )
}

export default AccountPage
