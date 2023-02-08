const db = require("./config");

(async () => {
  await db.ref("users").set(
    {
      firstname: "asd",
      lastname: "qwe",
      birthyear: 1598,
    },
    function (err) {
      if (err) {
        console.log("Error: ", err);
      } else {
        console.log("Success!");
      }
    },
  );
})();
