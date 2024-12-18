const teamMembers = [
    {
      name: "Marco Bianchi",
      role: "Designer",
      email: "marcobianchi@team.com",
      img: "img/male1.png"
    },
    {
      name: "Laura Rossi",
      role: "Front-end Developer",
      email: "laurarossi@team.com",
      img: "img/female1.png"
    },
    {
      name: "Giorgio Verdi",
      role: "Back-end Developer",
      email: "giorgioverdi@team.com",
      img: "img/male2.png"
    },
    {
      name: "Marta Ipsum",
      role: "SEO Specialist",
      email: "martarossi@team.com",
      img: "img/female2.png"
    },
    {
      name: "Roberto Lorem",
      role: "SEO Specialist",
      email: "robertolorem@team.com",
      img: "img/male3.png"
    },
    {
      name: "Daniela Amet",
      role: "Analyst",
      email: "danielaamet@team.com",
      img: "img/female3.png"
    }
  ];
  //ID'S ELEMENT//
  const teamContainer = document.getElementById("teamContainer");

   //CREO UNA FUNZIONE PER CREARE LE CARD//
   function createTeamCards() {
    teamMembers.forEach(member => {
      const card = document.createElement("div");
      card.classList.add("team-card");
      card.innerHTML = `
        <img src="${member.img}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p><strong>${member.role}</strong></p>
        <a>${member.email}</a>
      `;
  teamContainer.appendChild(card);
  });
  }
  createTeamCards();
  
  