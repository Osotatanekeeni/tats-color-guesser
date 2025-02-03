const colors = [
  {
    target: "#FF0000", // Red
    choices: ["#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"],
  },
  {
    target: "#00FF00", // Green
    choices: ["#FF0000", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"],
  },
  {
    target: "#0000FF", // Blue
    choices: ["#FF0000", "#00FF00", "#FFFF00", "#FF00FF", "#00FFFF"], 
  },
  {
    target: "#FFFF00", // Yellow
    choices: ["#FF0000", "#00FF00", "#0000FF", "#FF00FF", "#00FFFF"],
  },
  {
    target: "#FF00FF", // Magenta
    choices: ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF"],
  },
  {
    target: "#00FFFF", // Cyan
    choices: ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF"],
  },
  {
    target: "#800000", // Maroon
    choices: ["#008000", "#000080", "#808000", "#800080", "#008080"],
  },
  {
    target: "#008000", // Green
    choices: ["#800000", "#000080", "#808000", "#800080", "#008080"],
  },
  {
    target: "#000080", // Navy
    choices: ["#800000", "#008000", "#808000", "#800080", "#008080"],
  },
  {
    target: "#808000", // Olive
    choices: ["#800000", "#008000", "#000080", "#800080", "#008080"],
  },
  {
    target: "#800080", // Purple
    choices: ["#800000", "#008000", "#000080", "#808000", "#008080"],
  },
  {
    target: "#008080", // Teal
    choices: ["#800000", "#008000", "#000080", "#808000", "#800080"],
  },
  {
    target: "#FFA500", // Orange
    choices: ["#800080", "#008080", "#000080", "#008000", "#800000"],
  },
  {
    target: "#A52A2A", // Brown
    choices: ["#5F9EA0", "#D2691E", "#FF7F50", "#6495ED", "#DC143C"],
  },
  {
    target: "#5F9EA0", // CadetBlue
    choices: ["#A52A2A", "#D2691E", "#FF7F50", "#6495ED", "#DC143C"],
  },
  {
    target: "#D2691E", // Chocolate
    choices: ["#A52A2A", "#5F9EA0", "#FF7F50", "#6495ED", "#DC143C"],
  },
  {
    target: "#FF7F50", // Coral
    choices: ["#A52A2A", "#5F9EA0", "#D2691E", "#6495ED", "#DC143C"],
  },
  {
    target: "#6495ED", // CornflowerBlue
    choices: ["#A52A2A", "#5F9EA0", "#D2691E", "#FF7F50", "#DC143C"],
  },
  {
    target: "#DC143C", // Crimson
    choices: ["#A52A2A", "#5F9EA0", "#D2691E", "#FF7F50", "#6495ED"],
  },
  {
    target: "#00CED1", // DarkTurquoise
    choices: ["#FFD700", "#ADFF2F", "#FF69B4", "#CD5C5C", "#4B0082"],
  },
  {
    target: "#FFD700", // Gold
    choices: ["#00CED1", "#ADFF2F", "#FF69B4", "#CD5C5C", "#4B0082"],
  },
  {
    target: "#ADFF2F", // GreenYellow
    choices: ["#00CED1", "#FFD700", "#FF69B4", "#CD5C5C", "#4B0082"],
  },
  {
    target: "#FF69B4", // HotPink
    choices: ["#00CED1", "#FFD700", "#ADFF2F", "#CD5C5C", "#4B0082"],
  },
  {
    target: "#CD5C5C", // IndianRed
    choices: ["#00CED1", "#FFD700", "#ADFF2F", "#FF69B4", "#4B0082"],
  },
  {
    target: "#4B0082", // Indigo
    choices: ["#00CED1", "#FFD700", "#ADFF2F", "#FF69B4", "#CD5C5C"],
  },
  {
    target: "#F0E68C", // Khaki
    choices: ["#8B4513", "#2E8B57", "#6A5ACD", "#708090", "#FF6347"],
  },
  {
    target: "#8B4513", // SaddleBrown
    choices: ["#F0E68C", "#2E8B57", "#6A5ACD", "#708090", "#FF6347"],
  },
  {
    target: "#2E8B57", // SeaGreen
    choices: ["#F0E68C", "#8B4513", "#6A5ACD", "#708090", "#FF6347"],
  },
  {
    target: "#6A5ACD", // SlateBlue
    choices: ["#F0E68C", "#8B4513", "#2E8B57", "#708090", "#FF6347"],
  },
  {
    target: "#708090", // SlateGray
    choices: ["#F0E68C", "#8B4513", "#2E8B57", "#6A5ACD", "#FF6347"],
  },
  {
    target: "#FF6347", // Tomato
    choices: ["#F0E68C", "#8B4513", "#2E8B57", "#6A5ACD", "#708090"],
  },
  {
    target: "#4682B4", // SteelBlue
    choices: ["#D2B48C", "#D8BFD8", "#FF6347", "#40E0D0", "#EE82EE"],
  },
  {
    target: "#D2B48C", // Tan
    choices: ["#4682B4", "#D8BFD8", "#FF6347", "#40E0D0", "#EE82EE"],
  },
  {
    target: "#D8BFD8", // Thistle
    choices: ["#4682B4", "#D2B48C", "#FF6347", "#40E0D0", "#EE82EE"],
  },
  {
    target: "#FF6347", // Tomato
    choices: ["#4682B4", "#D2B48C", "#D8BFD8", "#40E0D0", "#EE82EE"],
  },
  {
    target: "#40E0D0", // Turquoise
    choices: ["#4682B4", "#D2B48C", "#D8BFD8", "#FF6347", "#EE82EE"],
  },
  {
    target: "#EE82EE", // Violet
    choices: ["#4682B4", "#D2B48C", "#D8BFD8", "#FF6347", "#40E0D0"],
  },
  {
    target: "#F5DEB3", // Wheat
    choices: ["#9ACD32", "#8A2BE2", "#A52A2A", "#DEB887", "#5F9EA0"],
  },
  {
    target: "#9ACD32", // YellowGreen
    choices: ["#F5DEB3", "#8A2BE2", "#A52A2A", "#DEB887", "#5F9EA0"],
  },
  {
    target: "#8A2BE2", // BlueViolet
    choices: ["#F5DEB3", "#9ACD32", "#A52A2A", "#DEB887", "#5F9EA0"],
  },
  {
    target: "#A52A2A", // Brown
    choices: ["#F5DEB3", "#9ACD32", "#8A2BE2", "#DEB887", "#5F9EA0"],
  },
  {
    target: "#DEB887", // BurlyWood
    choices: ["#F5DEB3", "#9ACD32", "#8A2BE2", "#A52A2A", "#5F9EA0"],
  },
  {
    target: "#5F9EA0", // CadetBlue
    choices: ["#F5DEB3", "#9ACD32", "#8A2BE2", "#A52A2A", "#DEB887"],
  },
];

export default colors;