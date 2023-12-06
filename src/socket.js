import io from "socket.io-client";

let socket;

const connectSocket = (user_id) => {
  try {
    // socket = io("https://33srd5-4000.csb.app", {
    //   query: `user_id=${user_id}`,
    // });
    socket = io("http://localhost:4000", {
      query: `user_id=${user_id}`,
    });
  } catch (err) {
    console.log(err);
  }
};

export { socket, connectSocket };
