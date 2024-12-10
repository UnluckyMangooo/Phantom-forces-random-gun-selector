// Gun data with all categories and guns
const Primaries = {
    "assault": [
    { class: "Assault Rifle", name: "AK12", rank: 0 },
    { class: "Assault Rifle", name: "M16A1", rank: 28 },
    { class: "Assault Rifle", name: "M16A4", rank: 22 },
    { class: "Assault Rifle", name: "G36", rank: 25 },
    { class: "Assault Rifle", name: "AN-94", rank: 10 },
    { class: "Assault Rifle", name: "AS VAL", rank: 15 },
    { class: "Assault Rifle", name: "SCAR-L", rank: 16 },
    { class: "Assault Rifle", name: "AUG A1", rank: 20 },
    { class: "Assault Rifle", name: "AUG A2", rank: 39 },
    { class: "Assault Rifle", name: "M16A3", rank: 31 },
    { class: "Assault Rifle", name: "Type 20", rank: 37 },
    { class: "Assault Rifle", name: "FAMAS F1", rank: 45 },
    { class: "Assault Rifle", name: "K2", rank: 42 },
    { class: "Assault Rifle", name: "AK47", rank: 47 },
    { class: "Assault Rifle", name: "AUG A3", rank: 52 },
    { class: "Assault Rifle", name: "L85A2", rank: 55 },
    { class: "Assault Rifle", name: "HK416", rank: 64 },
    { class: "Assault Rifle", name: "AK74", rank: 74 },
    { class: "Assault Rifle", name: "AKM", rank: 94 },
    { class: "Assault Rifle", name: "AK103", rank: 103 },
    { class: "Assault Rifle", name: "TAR-21", rank: 111 },
    { class: "Assault Rifle", name: "StG-44", rank: 116 },
    { class: "Assault Rifle", name: "Type 88", rank: 122 },
    { class: "Assault Rifle", name: "M231", rank: 123 },
    { class: "Assault Rifle", name: "C7A2", rank: 128 },
    { class: "Assault Rifle", name: "G11K2", rank: 211 },
    ],
  
    "pdw": [
    { class: "PDW", name: "MP5K", rank: 0 },
    { class: "PDW", name: "UMP45", rank: 5 },
    { class: "PDW", name: "G36C", rank: 7 },
    { class: "PDW", name: "MP7", rank: 9 },
    { class: "PDW", name: "MAC10", rank: 23 },
    { class: "PDW", name: "P90", rank: 24 },
    { class: "PDW", name: "MP-9", rank: 29 },
    { class: "PDW", name: "MP5", rank: 40 },
    { class: "PDW", name: "Colt SMG 633", rank: 49 },
    { class: "PDW", name: "L2A3", rank: 53 },
    { class: "PDW", name: "MP5SD", rank: 60 },
    { class: "PDW", name: "MP10", rank: 66 },
    { class: "PDW", name: "M3A1", rank: 71 },
    { class: "PDW", name: "MP5/10", rank: 74 },
    { class: "PDW", name: "Uzi", rank: 77 },
    { class: "PDW", name: "AUG A3 Para", rank: 80 },
    { class: "PDW", name: "K7", rank: 84 },
    { class: "PDW", name: "AKS74U", rank: 88 },
    { class: "PDW", name: "PPSh-41", rank: 92 },
    { class: "PDW", name: "FAL Para Shorty", rank: 98 },
    { class: "PDW", name: "Kriss Vector", rank: 100 },
    { class: "PDW", name: "PP-19 Bizon", rank: 105 },
    { class: "PDW", name: "MP40", rank: 107 },
    { class: "PDW", name: "X95 SMG", rank: 115 },
    { class: "PDW", name: "Tommy Gun", rank: 121 },
    { class: "PDW", name: "RAMA 1130", rank: 126 },
    { class: "PDW", name: "Colt MARS", rank: 36 },
    { class: "PDW", name: "BWC-9 A", rank: 149 },
    { class: "PDW", name: "Five-0", rank: 155 },
  ],
  
  "lmg": [
    { class: "LMG", name: "Colt LMG", rank: 0 },
    { class: "LMG", name: "M60E6", rank: 19 },
    { class: "LMG", name: "AUG HBAR", rank: 27 },
    { class: "LMG", name: "MG36", rank: 33 },
    { class: "LMG", name: "RPK-12", rank: 37 },
    { class: "LMG", name: "L86 LSW", rank: 43 },
    { class: "LMG", name: "AK-12BR", rank: 44 },
    { class: "LMG", name: "RPK", rank: 54 },
    { class: "LMG", name: "HK21", rank: 67 },
    { class: "LMG", name: "HAMR IAR", rank: 72 },
    { class: "LMG", name: "RPK74", rank: 88 },
    { class: "LMG", name: "MG3KWS", rank: 101 },
    { class: "LMG", name: "M1918A2", rank: 118 },
    { class: "LMG", name: "MGV-176", rank: 176 },
    { class: "LMG", name: "Stoner 96", rank: 196 },
    { class: "LMG", name: "ChainSAW", rank: 226 },
    { class: "LMG", name: "MG42", rank: 242 },
  ],
  
  "sniper": [
    { class: "Sniper Rifle", name: "Intervention", rank: 0 },
    { class: "Sniper Rifle", name: "Remington 700", rank: 12 },
    { class: "Sniper Rifle", name: "AWS", rank: 41 },
    { class: "Sniper Rifle", name: "BFG 50", rank: 65 },
    { class: "Sniper Rifle", name: "AWM", rank: 82 },
    { class: "Sniper Rifle", name: "TRG-42", rank: 84 },
    { class: "Sniper Rifle", name: "Mosin Nagant", rank: 91 },
    { class: "Sniper Rifle", name: "Dragunov SVDS", rank: 104 },
    { class: "Sniper Rifle", name: "The Fix", rank: 124 },
    { class: "Sniper Rifle", name: "M1903", rank: 136 },
    { class: "Sniper Rifle", name: "K14", rank: 138 },
    { class: "Sniper Rifle", name: "Hecate II", rank: 150 },
    { class: "Sniper Rifle", name: "FT300", rank: 160 },
    { class: "Sniper Rifle", name: "M107", rank: 170 },
    { class: "Sniper Rifle", name: "Steyr Scout", rank: 195 },
    { class: "Sniper Rifle", name: "WA2000", rank: 200 },
    { class: "Sniper Rifle", name: "NTW-20", rank: 220 }
  ],
  
  "carbine": [
    { class: "Carbine", name: "M4A1", rank: 0 },
    { class: "Carbine", name: "G36K", rank: 6 },
    { class: "Carbine", name: "M4", rank: 14 },
    { class: "Carbine", name: "L22", rank: 28 },
    { class: "Carbine", name: "SCAR PDW", rank: 32 },
    { class: "Carbine", name: "AK-12U", rank: 35 },
    { class: "Carbine", name: "Groza-1", rank: 42 },
    { class: "Carbine", name: "OTs-126", rank: 48 },
    { class: "Carbine", name: "AK-9", rank: 51 },
    { class: "Carbine", name: "Honey Badger", rank: 62 },
    { class: "Carbine", name: "K1A", rank: 63 },
    { class: "Carbine", name: "SR-3M", rank: 69 },
    { class: "Carbine", name: "Groza-4", rank: 79 },
    { class: "Carbine", name: "MC51", rank: 86 },
    { class: "Carbine", name: "FAL 50.63 Para", rank: 89 }
  ],
  
  "dmr": [
    { class: "DMR", name: "MK11", rank: 3 },
    { class: "DMR", name: "SKS", rank: 13 },
    { class: "DMR", name: "SL-8", rank: 34 },
    { class: "DMR", name: "Dragunov SVU", rank: 38 },
    { class: "DMR", name: "VSS Vintorez", rank: 46 },
    { class: "DMR", name: "MSG90", rank: 59 },
    { class: "DMR", name: "M21", rank: 68 },
    { class: "DMR", name: "Beowulf TCR", rank: 70 },
    { class: "DMR", name: "SA58 SPR", rank: 78 },
    { class: "DMR", name: "SCAR SSR", rank: 85 },
    { class: "DMR", name: "SVK12", rank: 116 },
  ],
  
  "battleRifle": [
    { class: "Battle Rifle", name: "M14", rank: 2 },
    { class: "Battle Rifle", name: "Beowulf ECR", rank: 21 },
    { class: "Battle Rifle", name: "SCAR-H", rank: 30 },
    { class: "Battle Rifle", name: "G3A3", rank: 59 },
    { class: "Battle Rifle", name: "AG-3", rank: 76 },
    { class: "Battle Rifle", name: "HK417", rank: 78 },
    { class: "Battle Rifle", name: "Henry 45-70", rank: 96 },
    { class: "Battle Rifle", name: "FAL 50.00", rank: 107 },
    { class: "Battle Rifle", name: "HCAR", rank: 181 },
  ],
  
  "shotgun": [
    { class: "Shotgun", name: "KSG-12", rank: 1 },
    { class: "Shotgun", name: "Remington 870", rank: 11 },
    { class: "Shotgun", name: "AK-12/76", rank: 24 },
    { class: "Shotgun", name: "KS-23M", rank: 56 },
    { class: "Shotgun", name: "Saiga-12", rank: 63 },
    { class: "Shotgun", name: "Stevens DB", rank: 81 },
    { class: "Shotgun", name: "E-Gun", rank: 87 },
    { class: "Shotgun", name: "AA-12", rank: 112 },
    { class: "Shotgun", name: "SPAS-12", rank: 120 },
    { class: "Shotgun", name: "DT11 Pro", rank: 133 },
    { class: "Shotgun", name: "USAS-12", rank: 189 },
  ]
};
  
  const Secondaries = {
  "pistol": [
    { class: "Pistol", name: "M9", rank: 0 },
    { class: "Pistol", name: "G17", rank: 0 },
    { class: "Pistol", name: "M17", rank: 13 },
    { class: "Pistol", name: "M1911A1", rank: 8 },
    { class: "Pistol", name: "Desert Eagle L5", rank: 18 },
    { class: "Pistol", name: "G21", rank: 21 },
    { class: "Pistol", name: "G23", rank: 23 },
    { class: "Pistol", name: "M45A1", rank: 34 },
    { class: "Pistol", name: "G40", rank: 40 },
    { class: "Pistol", name: "G50", rank: 50 },
    { class: "Pistol", name: "KG-99", rank: 50 },
    { class: "Pistol", name: "Five Seven", rank: 57 },
    { class: "Pistol", name: "ZIP 22", rank: 61 },
    { class: "Pistol", name: "GI M1", rank: 73 },
    { class: "Pistol", name: "Hardballer", rank: 84 },
    { class: "Pistol", name: "Izhevsk PB", rank: 91 },
    { class: "Pistol", name: "Makarov PM", rank: 92 },
    { class: "Pistol", name: "GB-22", rank: 99 },
    { class: "Pistol", name: "Desert Eagle XIX", rank: 102 },
    { class: "Pistol", name: "AM III", rank: 109 },
    { class: "Pistol", name: "Gyrojet Mark I", rank: 122 },
    { class: "Pistol", name: "GSP", rank: 131 },
    { class: "Pistol", name: "Grizzly", rank: 144 },
    { class: "Pistol", name: "M2011", rank: 150 },
    { class: "Pistol", name: "Alien", rank: 179 },
    { class: "Pistol", name: "AF2011-A1", rank: 201 },
  ],
  
  "machinePistol": [
    { class: "Machine Pistol", name: "G18C", rank: 17 },
    { class: "Machine Pistol", name: "93R", rank: 26 },
    { class: "Machine Pistol", name: "PP-2000", rank: 42 },
    { class: "Machine Pistol", name: "TEC-9", rank: 50 },
    { class: "Machine Pistol", name: "Micro Uzi", rank: 68 },
    { class: "Machine Pistol", name: "Škorpion vz. 61", rank: 84 },
    { class: "Machine Pistol", name: "ASMI", rank: 97 },
    { class: "Machine Pistol", name: "MP1911", rank: 106 },
    { class: "Machine Pistol", name: "Arm Pistol", rank: 110 },
  ],
  
  "revolver": [
    { class: "Revolver", name: "MP412 REX", rank: 4 },
    { class: "Revolver", name: "Mateba 6", rank: 29 },
    { class: "Revolver", name: "1858 New Army", rank: 58 },
    { class: "Revolver", name: "Redhawk 44", rank: 82 },
    { class: "Revolver", name: "Judge", rank: 113 },
    { class: "Revolver", name: "Executioner", rank: 137 },
  ],
  
  "other": [
    { class: "Other", name: "Serbu Shotgun", rank: 36 },
    { class: "Other", name: "SFG 50", rank: 75 },
    { class: "Other", name: "M79 Thumper", rank: 79 },
    { class: "Other", name: "Coilgun", rank: 87 },
    { class: "Other", name: "Sawed Off", rank: 90 },
    { class: "Other", name: "Saiga-12U", rank: 95 },
    { class: "Other", name: "Obrez", rank: 117 },
    { class: "Other", name: "SASS 308", rank: 132 },
    { class: "Other", name: "Thunder", rank: 190 },
  ]  
};

// Function to generate random gun selection
function generateRandomSelection() {
  const rank = parseInt(document.getElementById('rank').value);
  const primaryCategory = document.getElementById('primary').value;
  const secondaryCategory = document.getElementById('secondary').value;
  const randomizeAll = document.getElementById('randomize').checked;

  if (!rank || !primaryCategory || !secondaryCategory) {
      alert("Please fill in all fields.");
      return;
  }

  let primaryOptions = [];
  let secondaryOptions = [];

  if (randomizeAll) {
      // Randomize categories if checkbox is checked
      const randomPrimaryCategory = getRandomCategory(Primaries);
      const randomSecondaryCategory = getRandomCategory(Secondaries);

      primaryOptions = randomPrimaryCategory.filter(gun => gun.rank <= rank);
      secondaryOptions = randomSecondaryCategory.filter(gun => gun.rank <= rank);

      document.getElementById('primary').value = randomPrimaryCategory;
      document.getElementById('secondary').value = randomSecondaryCategory;
  } else {
      // Otherwise, use the selected categories
      primaryOptions = Primaries[primaryCategory].filter(gun => gun.rank <= rank);
      secondaryOptions = Secondaries[secondaryCategory].filter(gun => gun.rank <= rank);
  }

  // Randomize selection
  const randomPrimary = getRandomGun(primaryOptions);
  const randomSecondary = getRandomGun(secondaryOptions);
  const randomKills = Math.floor(Math.random() * 16) + 5;

  // Display result
  document.getElementById('gunResult').innerText = `Primary Gun: ${randomPrimary.name}\nSecondary Gun: ${randomSecondary.name}`;
  document.getElementById('killsResult').innerText = `Kills needed: ${randomKills}`;
}

// Function to randomly pick a gun from the list
function getRandomGun(gunArray) {
  return gunArray[Math.floor(Math.random() * gunArray.length)];
}

// Function to randomly pick a category
function getRandomCategory(gunCategory) {
  const categories = Object.keys(gunCategory);
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  return gunCategory[randomCategory];
}
