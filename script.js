const data = [
  {
    title: "Signature Machine",
    desc: "A recreation of the signature machine from Buckshot Roulette in blender.",
    img: "https://raw.githubusercontent.com/gooseyduck/gooseyduck.github.io/refs/heads/main/Screenshot%202026-04-30%20190234.png"
  },
  {
    title: "placeholder",
    desc: "placeholder",
    img: "https://media.discordapp.net/attachments/1485410934431416602/1499229227348787321/IMG_3429.jpg?ex=69f4b246&is=69f360c6&hm=f165606aa4660b790ce2466339677ea54cbd2f0395685d6cf6d203fbe6985481&=&format=webp&width=234&height=336"
  },
  {
    title: "placeholder",
    desc: "placeholder",
    img: "https://media.discordapp.net/attachments/1485410934431416602/1499229227348787321/IMG_3429.jpg?ex=69f4b246&is=69f360c6&hm=f165606aa4660b790ce2466339677ea54cbd2f0395685d6cf6d203fbe6985481&=&format=webp&width=234&height=336"
  }
];

const gallery = document.getElementById("gallery");

data.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${item.img}" />
    <div class="card-content">
      <h2>${item.title}</h2>
      <p>${item.desc}</p>
    </div>
  `;

  gallery.appendChild(card);
});
