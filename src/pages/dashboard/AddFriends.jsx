import { useEffect } from "react";
import { useSelector } from "react-redux";
import { FetchFriends, FetchUsers } from "../../redux/slices/app";
import { dispatch } from "../../redux/store";

export function AddFriends() {
  useEffect(() => {}, []);
  return <div>Add friends</div>;
}

export function FriendRequests() {
  return <div>Friend Requests</div>;
}
