const gifts = document.querySelectorAll('.Gift');
const popup = document.getElementById('giftPopup');
const closeBtn = document.getElementById('closeBtn');

gifts.forEach(gift => {
  gift.addEventListener('click', () => {
    // Show popup
    popup.style.display = 'flex';

    // Change content based on gift
    const giftNumber = gift.dataset.gift;
    const msg = popup.querySelector('.gift-msg');
    const gif = popup.querySelector('.gift-gif');
    const photo = popup.querySelector('.gift-photo');

    switch(giftNumber) {
      case "1":
        msg.textContent = "Cute n Warm hug for you my babyy💗😊";
        gif.src = "Hug_2.gif";
        // photo.src = "photo1.jpg";
        break;
      case "2":
        msg.textContent = "Kisses bohot saare aapke liye meri kissable girl 😘";
        gif.src = "Kisses.gif";
        // photo.src = "photo2.jpg";
        break;
      case "3":
        msg.textContent = "Aapke liye ek chota sa digital Dark chocolate boquet Babyy😊💗";
        gif.src = "Dark_chocolate.jpg";
        // photo.src = "Dark_chocolate.jpg";
        break;
      case "4":
        msg.textContent = "N ye aapke liye thode sweet chocolates meri sweet babyy 😊💗";
        gif.src = "Silk.jpg";
        // photo.src = "Silk.jpg";
        break;
      case "5":
        msg.textContent = "Flower for My beautiful n preety Shriyaa💗😘😊";
        gif.src = "Flower.jpg";
        // photo.src = "Flower.jpg";
        break;
      case "6":
        msg.textContent = "At the end Drink more water Babyy💝 ";
        gif.src = "Water.gif";
        // photo.src = "photo6.jpg";
        break;
      default:
        msg.textContent = "This is a special gift 💌";
        // gif.src = "placeholder.gif";
        // photo.src = "placeholder.jpg";
    }
  });
});

// Close popup
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';

});





