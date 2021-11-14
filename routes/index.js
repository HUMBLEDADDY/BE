module.exports = (app) => {
  const express = require("express");
  const router = express.Router();
  var choose = 18;
  var students = [
    { index: 0, count: 0, name: "吴芷怡", id: "201813138004" },
    { index: 1, count: 0, name: "谢帅悦", id: "201813138009" },
    { index: 2, count: 0, name: "徐秉皓", id: "201813138014" },
    { index: 3, count: 0, name: "陈泽新", id: "201813138016" },
    { index: 4, count: 0, name: "朱思瑾", id: "201813138018" },
    { index: 5, count: 0, name: "宋子维", id: "201813138020" },
    { index: 6, count: 0, name: "秦阳灿", id: "201813138024" },
    { index: 7, count: 0, name: "陈洋", id: "201813138027" },
    { index: 8, count: 0, name: "骆庆", id: "201813138029" },
    { index: 9, count: 0, name: "郑浩楠", id: "201813138030" },
    { index: 10, count: 0, name: "喻宇轩", id: "201813138031" },
    { index: 11, count: 0, name: "黄世龙", id: "201813138033" },
    { index: 12, count: 0, name: "钟浩杰", id: "201813138034" },
    { index: 13, count: 0, name: "韩圣东", id: "201813138036" },
    { index: 14, count: 0, name: "付雨婷", id: "201813138042" },
    { index: 15, count: 0, name: "郑畅", id: "201813138044" },
    { index: 16, count: 0, name: "方懿拓", id: "201813138058" },
    { index: 17, count: 0, name: "张开芫", id: "201813138061" },
    { index: 18, count: 0, name: "王中旭", id: "201813138063" },
    { index: 19, count: 0, name: "谢尔夫", id: "201813138065" },
    { index: 20, count: 0, name: "曾明昱", id: "201813138066" },
    { index: 21, count: 0, name: "唐孜辰", id: "201813138069" },
    { index: 22, count: 0, name: "朱万坤", id: "201813138070" },
    { index: 23, count: 0, name: "刘国昊", id: "201813138075" },
    { index: 24, count: 0, name: "陈嘉明", id: "201813138080" },
    { index: 25, count: 0, name: "王凯文", id: "201813138081" },
    { index: 26, count: 0, name: "乐青青", id: "201813138086" },
    { index: 27, count: 0, name: "张欣", id: "201813138087" },
    { index: 28, count: 0, name: "易梦华", id: "201813138096" },
    { index: 29, count: 0, name: "黄小喻", id: "201813138103" },
    { index: 30, count: 0, name: "储晓杰", id: "201813138109" },
    { index: 31, count: 0, name: "吴家豪", id: "201813138117" },
  ];
  app.get("/number", async (req, res) => {
    res.send({ number: choose });
  });
  app.get("/reset", async (req, res) => {
    for (i in students) {
      students[i].count = 0;
    }
    console.log("kjsfne");
    res.send("ok");
  });
  app.post("/submit", async (req, res) => {
    const a = req.body;
    for (i in a) {
      students[a[i].index].count++;
    }
    res.send("ok");
  });
  app.get("/search", async (req, res) => {
    res.send(students);
  });
  app.use("/", router);
};
