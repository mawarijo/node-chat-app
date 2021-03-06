class Users {
  constructor() {
    this.users = [];
  }
  addUser(id, name, room) {
    const user = { id, name, room };
    this.users.push(user);

    return user;
  }
  removeUser(id) {
    const removedUser = this.getUser(id);

    if (removedUser) {
      this.users = this.users.filter((user) => user.id !== id);
    }

    return removedUser;
  }
  getUser(id) {
    return this.users.filter((user) => user.id === id)[0];
  }
  getUserList(room) {
    const userList = this.users.filter((user) => user.room === room);
    const namesList = userList.map((user) => user.name);

    return namesList;
  }
}

module.exports = {
  Users
};
