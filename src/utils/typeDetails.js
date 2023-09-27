export const getTypeDetails = (type) => {
  switch (type.toLowerCase()) {
    case "electric":
      return { borderColor: "#FFD700", emoji: "⚡️", color: "#fff" };
    case "water":
      return { borderColor: "#6493EA", emoji: "💧", color: "#fff" };
    case "fire":
      return { borderColor: "#FF5733", emoji: "🔥", color: "#fff" };
    case "grass":
      return { borderColor: "#66CC66", emoji: "🌿", color: "#fff" };
    case "flying":
      return { borderColor: "#12CBC4", emoji: "🪽", color: "#fff" };
    case "poison":
      return { borderColor: "#b71540", emoji: "🦠", color: "#fff" };
    case "bug":
      return { borderColor: "#795548", emoji: "🕸", color: "#fff" };
    case "ghost":
      return { borderColor: "#dfe6e9", emoji: "👻", color: "#fff" };
    case "fighting":
      return { borderColor: "#d63031", emoji: "🥊", color: "#fff" };
    case "normal":
      return { borderColor: "#d63031", emoji: "🍄", color: "#fff" };
    case "rock":
      return { borderColor: "#636e72", emoji: "🪨", color: "#fff" };
    case "steel":
      return { borderColor: "#60a3bc", emoji: "🔩", color: "#fff" };
    case "psychic":
      return { borderColor: "#78e08f", emoji: "🌬", color: "#fff" };
    case "ice":
      return { borderColor: "#82ccdd", emoji: "❄️", color: "#fff" };
    case "dragon":
      return { borderColor: "#e55039", emoji: "🐉", color: "#fff" };
    case "fairy":
      return { borderColor: "#78e08f", emoji: "🦋", color: "#fff" };
    case "dark":
      return { borderColor: "#000", emoji: "🐺", color: "#fff" };
    case "Shadow":
      return { borderColor: "#57606f", emoji: "🐾", color: "#fff" };
    default:
      // return { borderColor: "#A0A0A0", emoji: "❓" };
      return { borderColor: "white", emoji: "❓", color: "#000" };
  }
};