import { useEffect } from "react";
import { useSelector } from "react-redux";
import { FetchFriends, FetchUsers } from "../../redux/slices/app";
import { dispatch } from "../../redux/store";

export function AddFriends() {
  const {friends, users} = useSelector((state)=> state.app )
  const {_id} = useSelector((state) => state.auth)


  useEffect(() => {
    dispatch(FetchUsers(friends, _id))
  }, []);
  return (
    (users && users.map((item, index)=> (
      <div>User {index+1}</div>
    )))
  );
}

export function FriendRequests() {
  return <div>Friend Requests</div>;
}
