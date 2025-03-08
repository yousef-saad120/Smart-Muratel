document.addEventListener("DOMContentLoaded", function() {
    const suraSelect = document.getElementById("sura-select");
    const ayahContainer = document.getElementById("ayah-container");
    const textBox = document.getElementById("text-box");
    
    const alFatihaAyahs = [
        "In the name of Allah, the Most Compassionate, the Merciful.",
        "Praise be to Allah, the Lord of the Worlds.",
        "The Most Compassionate, the Most Merciful.",
        "Master of the Day of Judgment.",
        "You alone we worship, and You alone we ask for help.",
        "Guide us to the straight path.",
        "The path of those You have blessed; not of those who incurred Your Wrath, or of those who went astray.",
        
    ];
    
    function displayAyahs() {
        ayahContainer.innerHTML = "";
        alFatihaAyahs.forEach((ayah, index) => {
            const div = document.createElement("div");
            div.textContent = `${index + 1}. ${ayah}`;
            div.style.margin = "5px 0";
            div.style.padding = "10px";
            div.style.border = "1px solid #ccc";
            div.style.borderRadius = "5px";
            div.style.cursor = "pointer";
            div.style.backgroundColor = "#f9f9f9";
            div.style.width = "100%";
            div.style.textAlign = "center";
            div.addEventListener("click", function() {
                textBox.value = ayah; // Make sure text box gets only the Ayah text
            });
            ayahContainer.appendChild(div);
        });
        ayahContainer.style.display = "block";
    }
    
    suraSelect.addEventListener("change", function() {
        if (suraSelect.value === "fatiha") {
            displayAyahs();
        } else {
            ayahContainer.style.display = "none";
        }
        function handleClick(action) {
            switch(action) {
                case 'play':
                    alert('Play clicked');
                    break;
                case 'pause':
                    alert('Pause clicked');
                    break;
                case 'save':
                    alert('Save clicked');
                    break;
                case 'check':
                    alert('Check clicked');
                    break;
                default:
                    console.log('Unknown action');
            }
        }
    });
});