const obtenerChiste = async () => {
  const res = await fetch("https://official-joke-api.appspot.com/random_joke");
  const data = await res.json();

  return data
};

module.exports = { obtenerChiste };
