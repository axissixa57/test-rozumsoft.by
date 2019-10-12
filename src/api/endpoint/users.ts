const users = [
  {
    id: "1",
    name: "Вася",
    email: "administrator@gmail.com",
    password: "1234567",
    token:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEiLCJuYW1lIjoi0JLQsNGB0Y8iLCJlbWFpbCI6ImFkbWluaXN0cmF0b3JAZ21haWwuY29tIiwianRpIjoiNzQ4Zjg4OTYtNGUzNy00ODAwLTkxOTktYmMzMGQ4NmQzZTk3IiwiaWF0IjoxNTcwNzk1Nzg0LCJleHAiOjE1NzA3OTkzODR9.6Hqm6lHnnMRGoXi6t4b-ZEXelGj-v7D2H_3PwQ_jos0"
  },
  {
    id: "2",
    name: "Петя",
    email: "moderator@gmail.com",
    password: "7654321",
    token:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjIiLCJuYW1lIjoi0J_QtdGC0Y8iLCJlbWFpbCI6Im1vZGVyYXRvckBnbWFpbC5jb20iLCJqdGkiOiJiY2Y5MDZlNC0yYzMwLTQ3NWYtODBmNS01YWYzNTcwZDc4YWMiLCJpYXQiOjE1NzA3OTI2NDksImV4cCI6MTU3MDc5NjI0OX0.9nn-DeFE7pYbqle3LxIhiFmCH_HhmLS6ff-3hTsryAg"
  }
];

export default {
  signIn: (data: { email: string; password: string }) => {
    const user = users.find(u => u.email === data.email);
    if (!user) {
      return Promise.resolve({
        status: "error",
        message: "User not found",
        user: null
      });
    }

    if (user.password !== data.password) {
      return Promise.resolve({
        status: "error",
        message: "Incorrect password",
        user: null
      });
    }

    return Promise.resolve({
      status: "success",
      message: "User found",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        token: user.token
      }
    });
  }
};
