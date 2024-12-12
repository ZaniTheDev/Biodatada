// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    
    // Profile data array
    const profileData = [
      {
        name: "Muhammad Hamzah Tizani",
        year: "2008",
        month: "february",
        bgImage: "img/bg-hamzah.jpeg",
        profileImage: "img/pfp1.jpg",
        contact: "mailto:hamzah@example.com"
      },
      {
        name: "Muhammad Haikal Akbar",
        year: "2007",
        month: "???",
        bgImage: "img/bg-haikal.jpg",
        profileImage: "img/pfp-haikal.jpeg",
        contact: "https://www.instagram.com/"
      },
      {
        name: "Andika Dwi Saputra",
        year: "2008",
        month: "???",
        bgImage: "img/bg-dika.jpg",
        profileImage: "img/pfp-dika.jpeg",
        contact: "mailto:andika@example.com"
      },
      {
        name: "Gabriel Sebastian Kaka",
        year: "2008",
        month: "???",
        bgImage: "img/bg-gabriel.jpg",
        profileImage: "img/pfp-gabriel.jpg",
        contact: "mailto:andika@example.com"
      },
      {
        name: "Bagas Naufal Aulia",
        year: "2007",
        month: "??",
        bgImage: "img/bg-bagas.jpg",
        profileImage: "img/pfp-bagas.jpg",
        contact: "mailto:haikal@example.com"
      },
      {
        name: "Muhammad Rizki Fahman",
        year: "2007",
        month: "???",
        bgImage: "img/bg-rizki.jpg",
        profileImage: "img/pfp-rizki.jpg",
        contact: "mailto:haikal@example.com"
      },

      {
        name: "Muhammad Rizki Fahman",
        year: "2007",
        month: "???",
        bgImage: "img/bg-rizki.jpg",
        profileImage: "img/pfp-rizki.jpg",
        contact: "mailto:haikal@example.com"
      },
      {
        name: "Muhammad Rizki Fahman",
        year: "2007",
        month: "???",
        bgImage: "img/bg-rizki.jpg",
        profileImage: "img/pfp-rizki.jpg",
        contact: "mailto:haikal@example.com"
      },
    ];
  
    // Clear existing content
    container.innerHTML = '';
  
    // Create and append cards
    profileData.forEach((profile, index) => {
      const card = document.createElement('div');
      card.className = 'card';
      
      card.innerHTML = `
        <div class="image">
          <img src="${profile.bgImage}" alt="Background">
        </div>
        <div class="profile-image">
          <img src="${profile.profileImage}" alt="Profile">
        </div>
        <div class="name">
          <div class="child">${profile.name}</div>
        </div>
        <div class="spacer"></div>
        <div class="date">
          <div class="child">${profile.year}</div>
          <div class="child">${profile.month}</div>
        </div>
        <div class="button-wrapper">
        <a href="${profile.contact}" class="contact-btn">Contact Me</a>
      </div>
        
      `;
  
      container.appendChild(card);
  
      // Add animation
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
  
      // Trigger animation after a slight delay
      setTimeout(() => {
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 300); // 200ms delay between each card
    });
  });