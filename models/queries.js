const pool = require("./pool");

const postRegisterUser = (username, hashedPassword) => {
  return pool.query(
    "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *",
    [username, hashedPassword]
  );
};

const getUserByUsername = (username) => {
  return pool.query("SELECT * FROM users WHERE username = $1", [username]);
}

const postNewRoom = (roomName) => {
  return pool.query("INSERT INTO messagerooms (name) VALUES ($1) RETURNING *", [
    roomName,
  ]);
};

const getMessagesByRoomId = (roomId) => {
  return pool.query(
    "SELECT * FROM messages WHERE messageroom_id = $1 ORDER BY created_at DESC",
    [roomId]
  );
};

const getRooms = () => {
  return pool.query("SELECT * FROM messagerooms ORDER BY created_at DESC");
};

module.exports = {
  // user related
  postRegisterUser,

  //   room related
  postNewRoom,
  getMessagesByRoomId,
  getRooms,

  //   message related

};
