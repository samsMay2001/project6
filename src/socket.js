import io from "socket.io-client";

let socket;

const connectSocket = (user_id) => {
  socket = io("https://33srd5-4000.csb.app", {
    query: `user_id=${user_id}`,
  });
};

export { socket, connectSocket };
