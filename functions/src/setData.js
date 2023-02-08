const { postCards } = require("./types/staticStrings");

const cors = require("cors")({ origin: true });

exports.setData = async (req, res, firestore) => {
  console.log("AAA");
  if (req.method !== "POST") {
    res.status(403).send("Forbidden!");
    return;
  }

  cors(req, res, async () => {
    const promises = [];
    console.log(typeof req.body);
    const body = JSON.parse(req.body);
    console.log(typeof body);

    for (let data of body) {
      (async () => {
        const tmpData = {
          index: data.listNumber,
          category: data.category,
          title: data.name,
        };
        const doc = await firestore.collection(postCards).doc(`${data.listNumber}`).get();
        if (!doc.exists) {
          promises.push(firestore.collection(postCards).doc(`${data.listNumber}`).set(tmpData));
        }
      })();
    }

    return Promise.all(promises)
      .then(() => {
        console.log("Success!");
        res.status(200).send("Success!");
      })
      .catch((e) => {
        console.log(e);
        res.status(403).send("Forbidden");
      });
  });
};
