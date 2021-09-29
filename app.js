const express = require("express");
const cors = require("cors");

const app = express();
const port = 8080;

app.use(cors());

app.get("/numeric/:id", (req, res) => {
  res.json(numeric[req.params.id]);
});

app.get("/content/:id", (req, res) => {
  res.json(content[req.params.id]);
});

app.get("/chart/:type", (req, res) => {
  res.json(chart[req.params.type]);
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});

const numeric = {
  1: {
    data: "$ 8971.1655",
  },
  2: {
    data: "$ 5764.98",
  },
  3: {
    data: "$ 8971.1655",
  },
  4: {
    data: "$ 5764.98",
  },
};

const content = {
  1: {
    data: "You have 7 notifications",
  },
};

const chart = {
  table: {
    type: "Table",
    width: "500px",
    options: {
      showRowNumber: true,
    },
    data: [
      [
        {
          type: "string",
          label: "Name",
        },
        {
          type: "number",
          label: "Salary",
        },
        {
          type: "boolean",
          label: "Full Time Employee",
        },
      ],
      [
        "Mike",
        {
          v: 10000,
          f: "$10,000",
        },
        true,
      ],
      [
        "Jim",
        {
          v: 8000,
          f: "$8,000",
        },
        false,
      ],
      [
        "Alice",
        {
          v: 12500,
          f: "$12,500",
        },
        true,
      ],
      [
        "Bob",
        {
          v: 7000,
          f: "$7,000",
        },
        true,
      ],
    ],
  },
  line: {
    type: "LineChart",
    width: "100%",
    height: "200px",
    class: "line-chart-container",
    options: {
      hAxis: {
        title: "Time",
      },
      vAxis: {
        title: "Popularity",
      },
    },
    data: [
      ["x", "dogs"],
      [0, 0],
      [1, 10],
      [2, 23],
      [3, 17],
      [4, 18],
      [5, 9],
      [6, 11],
      [7, 27],
      [8, 33],
      [9, 40],
      [10, 32],
      [11, 35],
    ],
  },
  pie: {
    type: "PieChart",
    height: "200px",
    class: "pie-chart-container",
    options: {
      title: "Pie Chart",
    },
    data: [
      ["Task", "Hours per Day"],
      ["Work", 11],
      ["Eat", 2],
      ["Commute", 2],
      ["Watch TV", 2],
      ["Sleep", 7],
    ],
  },
};
