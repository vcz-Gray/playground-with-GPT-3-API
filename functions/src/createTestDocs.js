const cors = require("cors")({ origin: true });

exports.createTestDocs = async (req, res, firestore) => {
  if (req.method !== "POST") {
    res.status(403).send("Forbidden!");
    return;
  }

  cors(req, res, async () => {
    const id = req.param("id").toString();
    console.log("req.parmas", req.params);
    console.log("req.body: ", req.body);
    const doc = await firestore.collection("users").doc(id).get();
    const tmpData = {
      firstName: "G",
      lastName: "P",
      birthYear: 1993,
    };

    if (doc.exists) {
      console.log("EEEEEEEE");
      res.status(200).send(doc);
    } else {
      console.log("FFFFFFFFF");
      await firestore.collection("users").doc(id).set(tmpData);
      res.status(200).send(`We have no data for docID ${id}`);
    }
  });
};
