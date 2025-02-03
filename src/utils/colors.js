const colors = [
  {
    target: "#2ECC71",
    choices: ["#58D68D", "#26A65B", "#229954", "#82E0AA", "#1E8449"],
  },
  {
    target: "#3498DB",
    choices: ["#5DADE2", "#2A80B9", "#2471A3", "#85C1E9", "#1F618D"],
  },
  {
    target: "#E67E22",
    choices: ["#F39C12", "#D35400", "#BA4A00", "#F5B041", "#8F3B00"],
  },
  {
    target: "#FF33A1",
    choices: ["#FF66B2", "#E02B8F", "#D12982", "#FF80C4", "#B8246E"],
  },
  {
    target: "#33FFA1",
    choices: ["#66FFB2", "#2BE08F", "#29D182", "#80FFC4", "#24B86E"],
  },
  {
    target: "#A133FF",
    choices: ["#B266FF", "#8F2BE0", "#8229D1", "#C480FF", "#6E24B8"],
  },
  {
    target: "#FF5733",
    choices: ["#FF8D72", "#E04B2B", "#D14429", "#FF9A85", "#B83A24"],
  },
  {
    target: "#C70039",
    choices: ["#E02B5A", "#B80033", "#A6002E", "#FF4D6F", "#8F0026"],
  },
  {
    target: "#900C3F",
    choices: ["#B8004D", "#820035", "#73002F", "#D1005E", "#5E0022"],
  },
  {
    target: "#581845",
    choices: ["#7A0030", "#4A0028", "#3D0021", "#9E004A", "#2F0019"],
  },
  {
    target: "#FFC300",
    choices: ["#FFD700", "#E6B800", "#CC9E00", "#FFEB3B", "#B38F00"],
  },
  {
    target: "#DAF7A6",
    choices: ["#E6FFB3", "#CCE699", "#B3CC80", "#FFFFCC", "#99B366"],
  },
  {
    target: "#FF5733",
    choices: ["#FF8D72", "#E04B2B", "#D14429", "#FF9A85", "#B83A24"],
  },
  {
    target: "#C70039",
    choices: ["#E02B5A", "#B80033", "#A6002E", "#FF4D6F", "#8F0026"],
  },
  {
    target: "#900C3F",
    choices: ["#B8004D", "#820035", "#73002F", "#D1005E", "#5E0022"],
  },
  {
    target: "#581845",
    choices: ["#7A0030", "#4A0028", "#3D0021", "#9E004A", "#2F0019"],
  },
  {
    target: "#FFC300",
    choices: ["#FFD700", "#E6B800", "#CC9E00", "#FFEB3B", "#B38F00"],
  },
  {
    target: "#DAF7A6",
    choices: ["#E6FFB3", "#CCE699", "#B3CC80", "#FFFFCC", "#99B366"],
  },
  {
    target: "#FF5733",
    choices: ["#FF8D72", "#E04B2B", "#D14429", "#FF9A85", "#B83A24"],
  },
  {
    target: "#C70039",
    choices: ["#E02B5A", "#B80033", "#A6002E", "#FF4D6F", "#8F0026"],
  },
  {
    target: "#900C3F",
    choices: ["#B8004D", "#820035", "#73002F", "#D1005E", "#5E0022"],
  },
  {
    target: "#581845",
    choices: ["#7A0030", "#4A0028", "#3D0021", "#9E004A", "#2F0019"],
  },
  {
    target: "#FFC300",
    choices: ["#FFD700", "#E6B800", "#CC9E00", "#FFEB3B", "#B38F00"],
  },
  {
    target: "#DAF7A6",
    choices: ["#E6FFB3", "#CCE699", "#B3CC80", "#FFFFCC", "#99B366"],
  },
  {
    target: "#FF5733",
    choices: ["#FF8D72", "#E04B2B", "#D14429", "#FF9A85", "#B83A24"],
  },
  {
    target: "#C70039",
    choices: ["#E02B5A", "#B80033", "#A6002E", "#FF4D6F", "#8F0026"],
  },
  {
    target: "#900C3F",
    choices: ["#B8004D", "#820035", "#73002F", "#D1005E", "#5E0022"],
  },
  {
    target: "#581845",
    choices: ["#7A0030", "#4A0028", "#3D0021", "#9E004A", "#2F0019"],
  },
  {
    target: "#FFC300",
    choices: ["#FFD700", "#E6B800", "#CC9E00", "#FFEB3B", "#B38F00"],
  },
  {
    target: "#DAF7A6",
    choices: ["#E6FFB3", "#CCE699", "#B3CC80", "#FFFFCC", "#99B366"],
  },
  {
    target: "#FF5733",
    choices: ["#FF8D72", "#E04B2B", "#D14429", "#FF9A85", "#B83A24"],
  },
  {
    target: "#C70039",
    choices: ["#E02B5A", "#B80033", "#A6002E", "#FF4D6F", "#8F0026"],
  },
  {
    target: "#900C3F",
    choices: ["#B8004D", "#820035", "#73002F", "#D1005E", "#5E0022"],
  },
  {
    target: "#581845",
    choices: ["#7A0030", "#4A0028", "#3D0021", "#9E004A", "#2F0019"],
  },
  {
    target: "#FFC300",
    choices: ["#FFD700", "#E6B800", "#CC9E00", "#FFEB3B", "#B38F00"],
  },
  {
    target: "#DAF7A6",
    choices: ["#E6FFB3", "#CCE699", "#B3CC80", "#FFFFCC", "#99B366"],
  },
  {
    target: "#FF5733",
    choices: ["#FF8D72", "#E04B2B", "#D14429", "#FF9A85", "#B83A24"],
  },
  {
    target: "#C70039",
    choices: ["#E02B5A", "#B80033", "#A6002E", "#FF4D6F", "#8F0026"],
  },
  {
    target: "#900C3F",
    choices: ["#B8004D", "#820035", "#73002F", "#D1005E", "#5E0022"],
  },
  {
    target: "#581845",
    choices: ["#7A0030", "#4A0028", "#3D0021", "#9E004A", "#2F0019"],
  },
  {
    target: "#FFC300",
    choices: ["#FFD700", "#E6B800", "#CC9E00", "#FFEB3B", "#B38F00"],
  },
  {
    target: "#DAF7A6",
    choices: ["#E6FFB3", "#CCE699", "#B3CC80", "#FFFFCC", "#99B366"],
  },
];

export default colors;