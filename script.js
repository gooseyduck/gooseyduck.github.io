const data = [
  {
    title: "Sunset Vibes",
    desc: "Calm ocean sunset with warm tones.",
    img: "https://images.unsplash.com/photo-1501973801540-537f08ccae7b"
  },
  {
    title: "City Nights",
    desc: "Neon-lit streets after rain.",
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
  },
  {
    title: "Mountain Air",
    desc: "Fog rolling through quiet mountains.",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
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
