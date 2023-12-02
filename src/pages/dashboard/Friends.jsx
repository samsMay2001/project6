import { useEffect } from "react";
import { useSelector } from "react-redux";
import { FetchFriends } from "../../redux/slices/app";
import { dispatch } from "../../redux/store";
import { Box, Stack, Typography } from "@mui/material";
import { User } from "./AddFriends";

export const Friends = () => {
  const { _id, firstname } = useSelector((state) => state.auth);
  const { friends, chatList } = useSelector((state) => state.app);
  useEffect(() => {
    dispatch(FetchFriends(_id));
  }, []);
  return (
    <>
      <Box>
        {/* <Stack sx={{ cursor: "pointer" }}>
          <Typography variant={"h6"}>Friends</Typography>
        </Stack> */}
        {friends && friends.length > 0 ? (
          friends.map((item, index) => (
            <Stack style={{ paddingTop: "0px" }}>
              <User
                index={index}
                online="true"
                name={`${item.firstname} ${item.lastname}`}
                img={""}
                user_id={item._id}
                added={true}
                friend={true}
                user={item}
                _chatList={chatList}
                _firstname={firstname}
                _id_c={_id}
              />
            </Stack>
          ))
        ) : (
          <div>No friends found</div>
        )}
      </Box>
    </>
  );
};
// User({ index, online, name, img, user_id, added })
