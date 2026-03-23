const calendarForm = document.getElementById("calendarForm");
const result = document.getElementById("result");

// Static dataset (offline friendly)
const cropData = {
  maize: {
    southern: { planting: "November - December", harvest: "April - May", tips: "Rotate with legumes to improve soil fertility." },
    east: { planting: "March - April", harvest: "August - September", tips: "Watch out for fall armyworm pests." },
    west: { planting: "May - June", harvest: "October - November", tips: "Ensure proper spacing to avoid overcrowding." }
  },
  tomatoes: {
    southern: { planting: "August - September", harvest: "December - January", tips: "Use mulch to retain soil moisture." },
    east: { planting: "January - February", harvest: "May - June", tips: "Stake plants to prevent fruit rot." },
    west: { planting: "October - November", harvest: "February - March", tips: "Water regularly but avoid waterlogging." }
  },
  cassava: {
    southern: { planting: "October - November", harvest: "12-18 months later", tips: "Select disease-resistant varieties." },
    east: { planting: "April - May", harvest: "12-18 months later", tips: "Weed regularly during first 3 months." },
    west: { planting: "June - July", harvest: "12-18 months later", tips: "Harvest only when roots are mature." }
  }
};

calendarForm.addEventListener("submit", e => {
  e.preventDefault();
  const crop = document.getElementById("crop").value;
  const region = document.getElementById("region").value;

  if (crop && region) {
    const data = cropData[crop][region];
    result.innerHTML = `
      <h2>${crop.charAt(0).toUpperCase() + crop.slice(1)} in ${region.charAt(0).toUpperCase() + region.slice(1)} Africa</h2>
      <p><strong>Planting:</strong> ${data.planting}</p>
      <p><strong>Harvesting:</strong> ${data.harvest}</p>
      <p><strong>Tips:</strong> ${data.tips}</p>
    `;
  } else {
    result.innerHTML = "<p>Please select both crop and region.</p>";
  }
});