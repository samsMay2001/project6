import { useEffect } from "react";
import { useSelector } from "react-redux";
import { FetchFriends } from "../../redux/slices/app";
import { dispatch } from "../../redux/store";

export const Friends = () => {
  const { friends } = useSelector((state) => state.app);
  useEffect(() => {
    dispatch(FetchFriends());
  }, []);
  return friends && friends.length > 0 ? (
    friends.map((item, index) => <div>Friend {index + 1}</div>)
  ) : (
    <div>No friends found</div>
  );
};
