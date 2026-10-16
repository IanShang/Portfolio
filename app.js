// Add a category here to create its navigation link and filter view.
// Project cards use the same renderer for every category.
const categories = [
  { id: "design", label: "Design" },
  { id: "hands-on", label: "Hands On" },
  { id: "models", label: "Models" },
  { id: "minecraft", label: "Minecraft" },
  { id: "photography", label: "Photography" },
  { id: "art", label: "Art" },
];

// Add projects here; each entry appears in its category and the main feed.
// Dates use YYYY-MM or YYYY-MM-DD. Leave date null until you know the date.
// Add images as { src: "images/project.jpg", alt: "Describe the image", caption: "Optional caption" }.
const projects = [
{
  "id": "climate-activism-instagram",
  "category": "hands-on",
  "date": "2021-06-20",
  "title": "Climate Activism Instagram Page",
  "summary": "A page dedicated to climate activism as part of a Social Studies 9 group project:",
  "mediaFormat": "documents",
  "images": [
    {
      "src": "images/climate-activism/instagram-profile.png",
      "alt": "trueclimateactivism Instagram profile with a climate-themed globe logo, 5 posts and 15 followers.",
      "caption": "Climate activism Instagram page \u2014 @trueclimateactivism"
    }
  ],
  "links": [
    {
      "url": "https://www.instagram.com/trueclimateactivism/",
      "label": "@trueclimateactivism",
      "inlineSummary": true
    }
  ]
},
{
  "id": "ansys-aircraft-stringer",
  "category": "hands-on",
  "date": "2026-03-16",
  "title": "ANSYS Analysis of Aircraft Stringer",
  "summary": "A lab in MIE222 Solid Mechanics I and my first experience with ANSYS",
  "mediaFormat": "documents",
  "images": [
    {
      "src": "images/ansys-aircraft-stringer/analysis-1.png",
      "alt": "ANSYS aircraft stringer analysis screenshot 1."
    },
    {
      "src": "images/ansys-aircraft-stringer/analysis-2.png",
      "alt": "ANSYS aircraft stringer analysis screenshot 2."
    },
    {
      "src": "images/ansys-aircraft-stringer/analysis-3.png",
      "alt": "ANSYS aircraft stringer analysis screenshot 3."
    },
    {
      "src": "images/ansys-aircraft-stringer/analysis-4.png",
      "alt": "ANSYS aircraft stringer analysis screenshot 4."
    }
  ]
},
{
  "id": "wormholes-enex",
  "category": "hands-on",
  "date": "2022-05",
  "title": "Grade 10 ENEX Project - Wormholes",
  "summary": "As a part of the Spectrum program of Steveston London Secondary School, each year we are required to research a topic of our interest with the guidance of a professional in the field and present on it at the end of the year. For grade 10, I chose to research Wormholes after reading Hawking's A Brief History of Time in grade 9 (I understood everything except the particle physics chapter which continuously and repetitively put me to sleep). My mentor was Professor Brian McNamara from the University of Waterloo, who frequently exchanged emails with me to help me with this project.",
  "mediaFormat": "documents",
  "images": [
    {
      "preziUrl": "https://prezi.com/p/embed/wNSWwzaK3hVNWeRYDw2v/",
      "alt": "Grade 10 ENEX research presentation on wormholes.",
      "caption": "Grade 10 ENEX Project - Wormholes"
    }
  ]
},
{
  "id": "mousetrap-cart",
  "category": "design",
  "date": "2022-03",
  "title": "Mousetrap Cart Design",
  "summary": "Designed and built a mousetrap powered car in Science 10 to learn about energy conversion",
  "mediaFormat": "documents",
  "images": [
    {
      "driveUrl": "https://drive.google.com/file/d/1wNzaDGLKpF9jQPqTENhSIJcRTQ0sQajE/view",
      "alt": "Mousetrap Cart Design presentation.",
      "caption": "Mousetrap Cart Design \u2014 Science 10"
    }
  ]
},
{
  "id": "engineering-physics-presentation",
  "category": "hands-on",
  "date": "2023-04",
  "title": "Engineering Physics Presentation",
  "summary": "As a part of Engineering 11, we had to research a specific field of engineering and give a presentation on it. I chose to research Engineering Physics",
  "mediaFormat": "documents",
  "images": [
    {
      "driveUrl": "https://drive.google.com/file/d/15YR81i-tkZRV6oipOWeuwloJ4-4f2KJL/view",
      "alt": "Engineering Physics presentation for Engineering 11.",
      "caption": "Engineering Physics \u2014 Engineering 11 presentation"
    }
  ]
},
{
  "id": "technoblade-tnt-challenge",
  "category": "minecraft",
  "date": "2020-10-29",
  "title": "Technoblade's TNT Challenge Set Up",
  "summary": "Original video:",
  "links": [
    {
      "url": "https://www.youtube.com/watch?v=tBfeIXLuOYg",
      "label": "https://www.youtube.com/watch?v=tBfeIXLuOYg",
      "inlineSummary": true
    }
  ],
  "mediaFormat": "documents",
  "images": [
    {
      "videoUrl": "https://youtu.be/iQ4AuIPD1tk",
      "alt": "Technoblade's TNT Challenge setup demonstration.",
      "caption": "Technoblade's TNT Challenge Set Up"
    }
  ]
},
{
  "id": "happy-ghast-hangar",
  "date": "2026-07",
  "title": "Happy Ghast Hangar",
  "summary": "Military style Happy Ghast Hangar, with a fence and leash to tie down your Happy Ghasts",
  "category": "minecraft",
  "mediaFormat": "documents",
  "images": [
    {
      "videoUrl": "https://youtu.be/SyyufJ-cDds",
      "alt": "Happy Ghast Hangar demonstration.",
      "caption": "Happy Ghast Hangar"
    }
  ]
},
{
  "id": "mini-smelter",
  "date": "2021-06",
  "displayDate": "Summer 2021",
  "title": "Mini Smelter",
  "summary": "A compact Minecraft smelter.",
  "highlights": [
    "Fast fuel and input unloading.",
    "4 items / 10 seconds."
  ],
  "category": "minecraft",
  "mediaFormat": "documents",
  "images": [
    {
      "videoUrl": "https://youtu.be/jQVFmAE78Ms",
      "alt": "Mini Smelter demonstration.",
      "caption": "Mini Smelter"
    }
  ]
},
{
  "id": "underground-retreat",
  "date": "2026-07",
  "title": "Underground Retreat",
  "summary": "A small uncovered cave with the following features:",
  "highlights": [
    "Fishing spot included.",
    "Dock and boat included.",
    "Campfire included.",
    "Tent with a bed for sleeping and two barrels.",
    "Conduit for underwater adventures."
  ],
  "category": "minecraft",
  "mediaFormat": "documents",
  "images": [
    {
      "videoUrl": "https://youtu.be/BVCOi6HQk34",
      "alt": "Underground Retreat demonstration.",
      "caption": "Underground Retreat"
    }
  ]
},
{
  "id": "triple-froglight-farm",
  "date": "2026-07",
  "title": "Triple Froglight Farm",
  "summary": "Magma Cube Spawner based froglight farm, with all 3 options operable depending on the AFK location of the operator",
  "category": "minecraft",
  "mediaFormat": "documents",
  "images": [
    {
      "videoUrl": "https://youtu.be/JAGmw5wf4co",
      "alt": "Triple Froglight Farm demonstration.",
      "caption": "Triple Froglight Farm"
    }
  ]
},
{
  "id": "tentable",
  "category": "design",
  "date": "2023-07-27",
  "title": "SHAD 2023 Design Project - Tentable",
  "summary": "As a part of SHAD 2023's theme of reimagining living spaces, we created Tentable: a pitch idea that aims to provide homeless people with cheaper and better tents than current alternatives.",
  "mediaFormat": "documents",
  "images": [
    {
      "driveUrl": "https://drive.google.com/file/d/1Bx8kSg1_9Dc2CcIoEntS4PagJvZEAeRr/view",
      "alt": "Tentable SHAD 2023 pitch presentation PDF.",
      "caption": "Tentable \u2014 SHAD 2023 pitch presentation"
    }
  ]
},
{
  "id": "concrete-converter",
  "category": "minecraft",
  "date": "2024",
  "title": "Semi-Automatic Concrete Converter",
  "summary": "A semi-automatic Minecraft concrete converter design that makes 144 concrete blocks at a time.",
  "mediaFormat": "documents",
  "images": [
    {
      "videoUrl": "https://youtu.be/lIsL3PwqI4w",
      "alt": "Semi-Automatic Concrete Converter demonstration.",
      "caption": "Semi-Automatic Concrete Converter"
    }
  ]
},
{
  "id": "minecraft-bar",
  "category": "minecraft",
  "date": "2026-08",
  "title": "Bar Design",
  "summary": "I really love it when water parks integrate water into their dining areas as well, so I attempted to make a bar where the customer can dip their feet in water as they enjoy their drinks",
  "mediaFormat": "documents",
  "images": [
    {
      "videoUrl": "https://youtu.be/9ucvShac8NY",
      "alt": "Bar Design demonstration.",
      "caption": "Bar Design"
    }
  ]
},
{
  "id": "doomsday-sub",
  "category": "minecraft",
  "date": "2026-07",
  "title": "Doomsday Submarine",
  "summary": "A Minecraft submarine built entirely in Survival Mode, equipped to support a crew of 24 on long underwater missions.",
  "mediaFormat": "documents",
  "images": [
    {
      "videoUrl": "https://youtu.be/xgVnDEWRBT8",
      "alt": "Doomsday Submarine demonstration.",
      "caption": "Doomsday Submarine demonstration"
    }
  ],
  "highlights": [
    "Approximate volume: 14,400 m³.",
    "Accommodates 24 people, each with an individual sleeping compartment and Shulker Box storage.",
    "Sonar at the front and rear detects nearby sounds.",
    "Carries 58 Mending Tridents, some with additional enchantments.",
    "Four sets of enchanted diving armor.",
    "Two Conduits for long underwater missions.",
    "Dining tables seat 12 people.",
    "Six potion brewing stations, with 1,152 Blaze Powder, 1,152 Redstone Dust, and 1,152 Glowstone Dust on board.",
    "Onboard cows, sheep, chickens, and pigs.",
    "Onboard farms for all growable crops, Nether Wart, and sugar cane, with six bee nests to accelerate crop growth."
  ]
},
{
  "id": "aa-tnt-cannon",
  "category": "minecraft",
  "date": "2020-08-14",
  "title": "AA Cannon",
  "summary": "A Minecraft anti-aircraft TNT cannon that fires 100 blocks horizontally and 90 blocks vertically.",
  "mediaFormat": "documents",
  "images": [
    {
      "videoUrl": "https://youtu.be/AbCDThrIees",
      "alt": "AA cannon \u2014 100 blocks horizontal, 90 blocks vertical.",
      "caption": "AA cannon \u2014 100 blocks horizontal, 90 blocks vertical"
    }
  ]
},
{
  "id": "art-9",
  "category": "art",
  "date": "2021",
  "title": "Art 9",
  "summary": "A collection of artwork created in Art 9 in 2021.",
  "mediaFormat": "documents",
  "images": [
    {
      "src": "images/art-9/Contrast.jpg",
      "alt": "Art 9 artwork: Contrast.",
      "caption": "Contrast"
    },
    {
      "src": "images/art-9/Realm.jpg",
      "alt": "Art 9 artwork: Realm.",
      "caption": "Realm"
    },
    {
      "src": "images/art-9/starry night.jpg",
      "alt": "Art 9 artwork: starry night.",
      "caption": "Starry Night"
    }
  ]
},
{
  "id": "cocoa-bean-farm",
  "category": "minecraft",
  "date": "2022-03-31",
  "title": "Cocoa Bean Farm",
  "summary": "A Minecraft cocoa bean farm that uses an inverter setup to push 60 jungle logs. The design allows a wide variety of storage options to be implemented.",
  "mediaFormat": "documents",
  "images": [
    {
      "videoUrl": "https://youtu.be/jhkV5tgTz4E",
      "alt": "Cocoa bean farm demonstration.",
      "caption": "Cocoa bean farm — inverter setup pushing 60 jungle logs"
    }
  ]
},
{
  "id": "horizontal-tnt-cannon",
  "category": "minecraft",
  "date": "2021-02-02",
  "title": "Dual Mode TNT Cannon",
  "summary": "A dual-mode Minecraft TNT cannon that attacks both ground and air targets. Its known effective range for ground attacks is 130 blocks; the effective range for air attacks has not been determined.",
  "mediaFormat": "documents",
  "images": [
    {
      "videoUrl": "https://youtu.be/5y_s-n6q-eI",
      "alt": "Dual mode TNT cannon firing demonstration.",
      "caption": "Horizontal TNT cannon \u2014 130-block range"
    }
  ]
},
{
  "id": "vertical-tnt-cannon",
  "category": "minecraft",
  "date": "2021-01-04",
  "title": "Vertical TNT Cannon",
  "summary": "A Minecraft TNT cannon that fires vertically, launching TNT 115 blocks upward.",
  "mediaFormat": "documents",
  "images": [
    {
      "videoUrl": "https://youtu.be/U0cC9CyFlJ4",
      "alt": "Vertical TNT cannon firing demonstration.",
      "caption": "Vertical TNT cannon \u2014 115-block firing height"
    }
  ]
},
{
  "id": "villager-separator",
  "category": "minecraft",
  "date": "2020-12-30",
  "title": "Baby and Adult Villager Separator",
  "summary": "A Minecraft mechanism designed to separate baby villagers from adult villagers. This older design no longer works in version 26.52.",
  "mediaFormat": "documents",
  "images": [
    {
      "videoUrl": "https://youtu.be/IZ4pdkIqado",
      "alt": "Minecraft baby and adult villager separator concept showcase.",
      "caption": "Villager separator — original concept demonstration"
    }
  ]
},
{
  "id": "custom-servo-chassis",
  "category": "design",
  "date": "2026-06-26",
  "title": "Custom Four-Servo Vehicle Chassis",
  "summary": "A custom 200 × 220 mm vehicle chassis powered by four servo motors. At the client’s request, the servo holders include holes in their sides for compatibility with Lego pieces. The hole positions and dimensions were referenced against actual Lego pieces to match their geometry.",
  "mediaFormat": "documents",
  "images": [
    {
      "src": "images/custom-servo-chassis/assembled.jpg",
      "alt": "Assembled four-wheel vehicle with a custom chassis and servo holders.",
      "caption": "Assembled vehicle"
    },
    {
      "src": "images/custom-servo-chassis/chassis-cad.png",
      "alt": "CAD view of the 200 by 220 mm chassis with mounting points and a patterned central platform.",
      "caption": "Chassis — CAD view"
    },
    {
      "src": "images/custom-servo-chassis/servo-holder-cad.png",
      "alt": "CAD view of a servo holder with side holes designed to match actual Lego pieces.",
      "caption": "Lego-compatible servo holder — CAD view"
    }
  ]
},
{
  "id": "automatic-basalt-generator",
  "category": "minecraft",
  "date": "2020-09-19",
  "title": "Automatic Basalt Generator",
  "summary": "A Minecraft basalt generator that uses TNT to fully automate the process.",
  "mediaFormat": "documents",
  "images": [
    {
      "videoUrl": "https://youtu.be/D_4QNUXdpkU",
      "alt": "Demonstration of a TNT-powered automatic basalt generator in Minecraft.",
      "caption": "TNT-powered automatic basalt generation"
    }
  ]
},
{
  "id": "air-density-model",
  "category": "hands-on",
  "date": "2023-11-10",
  "title": "Air Density vs. Height Model",
  "summary": "A Desmos model of air density versus height based on NASA Glenn’s Earth Atmosphere Model in metric units. I combined the temperature and pressure equations for the troposphere, lower stratosphere, and upper stratosphere with the density equation to graph how air density changes with altitude.",
  "mediaFormat": "documents",
  "images": [
    {
      "src": "images/air-density-model/density-vs-height.png",
      "alt": "Desmos graph of air density versus altitude with three piecewise equations covering the troposphere and stratosphere.",
      "caption": "Air density versus height — NASA-based piecewise model"
    }
  ],
  "links": [
    {
      "url": "https://www.grc.nasa.gov/www/k-12/airplane/atmosmet.html",
      "label": "NASA Earth Atmosphere Model — metric units ↗"
    }
  ]
},
{
  "id": "za-warudo",
  "category": "minecraft",
  "date": "2024-04",
  "title": "ZA WARUDO — World Name Resource Pack",
  "summary": "A Minecraft Bedrock resource pack that replaces the default “My World” name with “Za Warudo” in the English world-creation text.",
  "mediaFormat": "pack",
  "images": [
    {
      "src": "images/za-warudo/pack-icon.png",
      "alt": "ZA WARUDO resource pack icon featuring an animated character.",
      "caption": "ZA WARUDO resource pack icon"
    }
  ],
  "downloads": [
    {
      "src": "downloads/za-warudo.mcpack",
      "label": "Download Bedrock resource pack (.mcpack)"
    }
  ],
  "instructions": "Open the downloaded .mcpack file with Minecraft Bedrock to import it, then activate it in Global Resources. The pack targets English (US) text; the manifest lists Minecraft 1.18.10 as the minimum version."
},
{
  "id": "woodworking-decoration",
  "category": "hands-on",
  "date": "2018-12-12",
  "title": "Woodworking Decoration",
  "summary": "A wooden decoration I made through woodworking in 2018.",
  "mediaFormat": "documents",
  "images": [
    {
      "src": "images/woodworking-decoration/decoration.jpg",
      "alt": "Handmade wooden decoration.",
      "caption": "Handmade woodworking decoration"
    }
  ]
},
{
  "id": "rabbit-cage",
  "category": "hands-on",
  "date": "2021-07",
  "title": "Rabbit Cage",
  "summary": "A rabbit cage I designed, built, assembled, and painted myself to give my rabbits a more enclosed space than their previous cage, which was too exposed to the open air. I sourced materials from stores such as RONA and Home Depot, then sawed, drilled, and screwed the structure together.",
  "highlights": [
    "Added wheels so the cage could be moved around easily.",
    "Designed grid floors so waste could fall to the ground below, reducing the need to clean each level.",
    "The design proved less effective than intended: I later learned that rabbits prefer solid footing to grids.",
    "In winter, the rabbits stayed in the upper half. I suspected the upper level was warmer, possibly because of convection."
  ],
  "mediaFormat": "documents",
  "images": [
    {
      "src": "images/rabbit-cage/1.jpg",
      "alt": "White-painted wooden rabbit cage with its front panel open.",
      "caption": "Painted cage — open front"
    },
    {
      "src": "images/rabbit-cage/2.jpg",
      "alt": "Angled view of the painted rabbit cage showing its enclosed sides and open front panel.",
      "caption": "Enclosed sides and front access"
    },
    {
      "src": "images/rabbit-cage/3.jpg",
      "alt": "Closed side panel of the white-painted rabbit cage.",
      "caption": "Closed side panel"
    },
    {
      "src": "images/rabbit-cage/4.jpg",
      "alt": "Unpainted wooden rabbit cage during construction.",
      "caption": "Cage before painting"
    }
  ]
},
{
  "id": "shad-wind-turbine",
  "category": "design",
  "date": "2023-07",
  "title": "3D-Printed Wind Turbine",
  "summary": "A wind turbine designed in Tinkercad and 3D-printed for the 2023 SHAD program at Ontario Tech University. Our team won second place in the power generation competition.",
  "mediaFormat": "documents",
  "images": [
    {
      "src": "images/wind-turbine/printed-blade-updated.jpg",
      "alt": "Yellow 3D-printed wind turbine blade held in a hand.",
      "caption": "3D-printed turbine blade"
    },
    {
      "src": "images/wind-turbine/tinkercad-updated.png",
      "alt": "Wind turbine blade design displayed in Tinkercad.",
      "caption": "Tinkercad blade design"
    }
  ]
},
{
  "id": "self-righting-mechanism",
  "category": "design",
  "date": "2026-07-27",
  "title": "IMU Self-Righting Mechanism",
  "summary": "A self-righting mechanism connected to a gyroscope/IMU mounted on top.",
  "highlights": [
    "Taught myself SolidWorks to design and build the mechanism.",
    "Used trial and error to find effective configurations.",
    "Learned to use Codex during the project.",
    "Learned to integrate electronic components into a mechanical design.",
    "Used power tools and hand tools for assembly and finishing, including filing."
  ],
  "mediaFormat": "documents",
  "images": [
    {
      "videoUrl": "https://youtube.com/shorts/H1QyjL9x6ZY?feature=share",
      "alt": "Demonstration of the IMU-connected self-righting mechanism.",
      "caption": "Self-righting mechanism with a top-mounted gyroscope/IMU"
    }
  ]
},
{
  "id": "dog-tag",
  "category": "hands-on",
  "date": "2019",
  "title": "Metal Dog Tag",
  "summary": "Made during the first semester of Grade 8 Tech Ed 8 in 2019. This dog tag was one of my first experiences working with metal.",
  "mediaFormat": "documents",
  "images": [
    {
      "src": "images/dog-tag/dog-tag.png",
      "alt": "Metal dog tag with a cutout design and a ball chain.",
      "caption": "Dog tag made in Tech Ed 8"
    }
  ],
  "displayDate": "2019/-/- Grade 8 First Semester"
},
{
  "id": "organized-chaos",
  "category": "art",
  "date": "2018",
  "displayDate": "2018-2019 Grade 7",
  "title": "Organized Chaos",
  "summary": "A Grade 7 painting created using paint and a blowtorch.",
  "mediaFormat": "documents",
  "images": [
    {
      "src": "images/organized-chaos/painting.jpg",
      "alt": "Abstract painting with swirling multicolored patterns.",
      "caption": "Organized Chaos"
    }
  ]
},
{
  "id": "photography-winter-2023",
  "category": "photography",
  "date": "2023-12",
  "displayDate": "Winter 2023/12/- to 2024/1/-",
  "title": "Winter 2023 — UK and Ireland",
  "summary": "Photographs from a winter 2023 trip to the UK and Ireland, capturing lakes, waterfalls, mountains, and coastal landscapes.",
  "mediaFormat": "documents",
  "images": [
    {
      "src": "images/photography-winter-2023/IMG_1216.jpg",
      "alt": "Sunlight breaking through clouds over hills and water.",
      "caption": "Sunlight over the landscape"
    },
    {
      "src": "images/photography-winter-2023/IMG_1202.jpg",
      "alt": "A lake beneath cloudy skies with mountains beyond the shore.",
      "caption": "Lakeside"
    },
    {
      "src": "images/photography-winter-2023/IMG_1207.jpg",
      "alt": "Water cascading through rocks in a wooded stream.",
      "caption": "Woodland waterfall"
    },
    {
      "src": "images/photography-winter-2023/IMG_1208.jpg",
      "alt": "A mountain valley beneath heavy winter clouds.",
      "caption": "Mountain valley"
    },
    {
      "src": "images/photography-winter-2023/IMG_1212.jpg",
      "alt": "A coastal landscape framed by trees under a cloudy sky.",
      "caption": "Coastal view"
    },
    {
      "src": "images/photography-winter-2023/IMG_1213.jpg",
      "alt": "Waves along a rocky coastline beneath cloud breaks.",
      "caption": "Rocky shoreline"
    },
    {
      "src": "images/photography-winter-2023/IMG_1215.jpg",
      "alt": "Green fields stretching towards the coast.",
      "caption": "Green fields by the coast"
    }
  ]
},
{
  "id": "rubber-ducky-experiment",
  "category": "hands-on",
  "date": "2024-06-13",
  "title": "AP Chemistry — Rubber Ducky Experiment",
  "summary": "An AP Chemistry experiment partially designed by me with help from my AP Chemistry teacher, Mr Tovey. Rubber duckies floated on the surface of water around a liquid-nitrogen bottle; when the bottle ruptured during the demonstration, the resulting splash launched the duckies out of the water.",
  "mediaFormat": "documents",
  "images": [
    {
      "videoUrl": "https://youtube.com/shorts/IPNwcu8wyMg?feature=share",
      "alt": "AP Chemistry rubber ducky experiment trial.",
      "caption": "Rubber ducky experiment — trial recording"
    }
  ]
},
{
  "id": "mugen-train",
  "category": "minecraft",
  "date": "2023",
  "title": "Mugen Train",
  "summary": "A close-to-1:1 mock-up of the Mugen Train built in Minecraft, recreating its passenger carriage interior.",
  "mediaFormat": "documents",
  "images": [
    {
      "src": "images/mugen-train/interior.png",
      "alt": "Minecraft recreation of the Mugen Train interior with rows of green seats, wooden partitions, and overhead lanterns.",
      "caption": "Mugen Train — passenger carriage interior"
    }
  ]
},
{
  "id": "orbital-strike-satellite",
  "category": "minecraft",
  "date": "2026-07",
  "title": "Geosynchronous Orbital Strike Satellite",
  "summary": "A decorative Minecraft geosynchronous orbital strike satellite. Lights show its charging progress, while eight giant solar panels power its imagined firing sequence.",
  "mediaFormat": "documents",
  "images": [
    {
      "videoUrl": "https://youtu.be/IVBkYbH_oQo",
      "alt": "Decorative geosynchronous orbital strike satellite.",
      "caption": "Decorative geosynchronous orbital strike satellite"
    }
  ]
},
{
  "id": "triple-engine-stealth-bomber",
  "category": "minecraft",
  "date": "2026-06",
  "title": "Triple-Engine High-Altitude Stealth Bomber",
  "summary": "A Minecraft triple-engine high-altitude stealth bomber designed by me.",
  "mediaFormat": "documents",
  "images": [
    {
      "videoUrl": "https://youtu.be/INDroiSujjU",
      "alt": "Triple-engine high-altitude stealth bomber.",
      "caption": "Triple-engine high-altitude stealth bomber"
    }
  ]
},
{
  "id": "crossbow-tnt-cannon",
  "category": "minecraft",
  "date": "2026-05",
  "title": "Crossbow",
  "summary": "A Minecraft TNT cannon that uses the maximum tick delay for ignited TNT to give it the longest possible travel time.",
  "mediaFormat": "documents",
  "images": [
    {
      "videoUrl": "https://youtu.be/ao_dCNv5WXE",
      "alt": "Crossbow TNT cannon demonstration.",
      "caption": "Crossbow — TNT cannon demonstration"
    }
  ]
},
{
  "id": "crank-slider",
  "category": "hands-on",
  "date": "2026-03-01",
  "title": "Crank Slider",
  "summary": "Completed during a two-day basic machining course at George Brown Polytechnic. Building the crank slider required learning to use a range of machines and applying basic machining techniques to make and assemble the mechanism.",
  "mediaFormat": "documents",
  "images": [
    {
      "videoUrl": "https://youtube.com/shorts/GO8svQy4_HI",
      "alt": "Crank slider mechanism demonstration",
      "caption": "Crank slider in motion"
    }
  ]
},
{
  "id": "speed-reduction-gearbox",
  "category": "design",
  "date": "2025-11-30",
  "title": "16:1 Speed Reduction Gearbox",
  "summary": "A 3D-printed 16:1 speed reduction gearbox that takes only a few minutes to assemble. It lasted more than 30 seconds when tested with a drill.",
  "mediaFormat": "documents",
  "images": [
    {
      "videoUrl": "https://youtube.com/shorts/PSbSJO3dBmw?feature=share",
      "alt": "Drill test of the 16:1 speed reduction gearbox",
      "caption": "Gearbox drill test"
    },
    {
      "src": "images/speed-reduction-gearbox/gearbox.png",
      "alt": "3D-printed 16:1 speed reduction gearbox.",
      "caption": "3D-printed gearbox"
    }
  ]
},
{
  "id": "photography-summer-2026",
  "category": "photography",
  "date": "2026-07",
  "displayDate": "2026/07-08/-",
  "title": "Summer 2026",
  "summary": "A collection of photographs from summer 2026, featuring waterside architecture, an illuminated bridge, school grounds, and sunrise.",
  "mediaFormat": "documents",
  "images": [
    {
      "src": "images/photography-summer-2026/high-school.jpg",
      "alt": "A high school landscape beneath glowing clouds at sunrise or sunset.",
      "caption": "High school"
    },
    {
      "src": "images/photography-summer-2026/ancient-city.jpg",
      "alt": "Traditional architecture and towers reflected in still water beside trees.",
      "caption": "Ancient city"
    },
    {
      "src": "images/photography-summer-2026/bridge.jpg",
      "alt": "A bridge illuminated in red at night with a walkway beside the river.",
      "caption": "Bridge at night"
    },
    {
      "src": "images/photography-summer-2026/sunrise.jpg",
      "alt": "Sunrise over a river viewed from a tree-lined waterfront path.",
      "caption": "Sunrise"
    },
    {
      "src": "images/photography-summer-2026/fudan-campus.jpg",
      "alt": "Fudan campus photographed during summer 2026.",
      "caption": "Fudan campus"
    },
    {
      "src": "images/photography-summer-2026/fudan-campus-2.jpg",
      "alt": "Fudan campus 2 photographed during summer 2026.",
      "caption": "Fudan campus 2"
    },
    {
      "src": "images/photography-summer-2026/fudan-library.jpg",
      "alt": "Fudan library photographed during summer 2026.",
      "caption": "Fudan library"
    },
    {
      "src": "images/photography-summer-2026/hiking.jpg",
      "alt": "Hiking photographed during summer 2026.",
      "caption": "Hiking"
    },
    {
      "src": "images/photography-summer-2026/temple.jpg",
      "alt": "Temple photographed during summer 2026.",
      "caption": "Temple"
    },
    {
      "src": "images/photography-summer-2026/wuhan-monorail.jpg",
      "alt": "Wuhan monorail photographed during summer 2026.",
      "caption": "Wuhan monorail"
    },
    {
      "src": "images/photography-summer-2026/xinjiang-museum.jpg",
      "alt": "Xinjiang museum photographed during summer 2026.",
      "caption": "Xinjiang museum"
    },
    {
      "src": "images/photography-summer-2026/yellow-crane-tower.jpg",
      "alt": "Yellow crane tower photographed during summer 2026.",
      "caption": "Yellow crane tower"
    },
    {
      "src": "images/photography-summer-2026/new-sunrise-1.jpg",
      "alt": "Sunrise above city buildings and campus grounds.",
      "caption": "Sunrise 1 — 2026/07/12"
    },
    {
      "src": "images/photography-summer-2026/new-sunrise-2.jpg",
      "alt": "Sunrise above city buildings and campus grounds.",
      "caption": "Sunrise 2 — 2026/07/10"
    }
  ]
},
{
  "id": "earthquake-resistant-tower",
  "category": "design",
  "date": "2023-07",
  "title": "Earthquake-Resistant Tower",
  "summary": "Built for an earthquake-resistant tower competition with just one requirement: the tower had to be at least 30 cm tall. I concentrated the mass at the bottom using a bottle, keeping the upper structure lightweight. During judging, the tower was shaken longer than the required time and even upside down, yet it did not fail.",
  "mediaFormat": "documents",
  "images": [
    {
      "src": "images/earthquake-tower/tower.png",
      "alt": "Competition tower with a tall lightweight vertical rod and a bottle base taped to a cardboard platform.",
      "caption": "Lightweight tower with mass concentrated at the bottle base"
    }
  ]
},
{
  "id": "photography-summer-2025",
  "category": "photography",
  "date": "2025-07",
  "displayDate": "2025/07-08/-",
  "title": "Summer 2025",
  "summary": "A collection of photographs from summer 2025, capturing city views, quiet paths, waterside scenes, and changing light.",
  "mediaFormat": "documents",
  "images": [
    {
      "src": "images/photography-summer-2025/bird.jpg",
      "alt": "A bird standing on a wooden platform beside a landscaped pond.",
      "caption": "Bird beside a pond"
    },
    {
      "src": "images/photography-summer-2025/neighbourhood.jpg",
      "alt": "A shaded stone walkway beneath wooden pergolas in a green neighbourhood.",
      "caption": "Neighbourhood"
    },
    {
      "src": "images/photography-summer-2025/pavilion.jpg",
      "alt": "A traditional pavilion surrounded by rocks, trees, and a winding path.",
      "caption": "Pavilion"
    },
    {
      "src": "images/photography-summer-2025/pond.jpg",
      "alt": "A long walkway crossing a pond filled with lily pads beneath a cloudy sky.",
      "caption": "Pond"
    },
    {
      "src": "images/photography-summer-2025/sunrise-2.jpg",
      "alt": "Warm clouds above a river and a distant bridge at sunrise.",
      "caption": "Sunrise over the river"
    },
    {
      "src": "images/photography-summer-2025/sunrise-3.jpg",
      "alt": "The rising sun reflected on a river beside a waterfront promenade.",
      "caption": "Riverside sunrise"
    },
    {
      "src": "images/photography-summer-2025/sunrise.jpg",
      "alt": "The sun rising beside a tall building above a city skyline.",
      "caption": "City sunrise"
    },
    {
      "src": "images/photography-summer-2025/sunset.jpg",
      "alt": "The sun setting over a river and skyline, reflected in the water.",
      "caption": "Sunset"
    },
    {
      "src": "images/photography-summer-2025/wuhan.jpg",
      "alt": "An illuminated waterfront and skyline in Wuhan at night.",
      "caption": "Wuhan at night"
    },
    {
      "src": "images/photography-summer-2025/restaurant.jpg",
      "alt": "An outdoor dining area beneath trees and hanging lanterns at night.",
      "caption": "Restaurant"
    }
  ]
},
{
  "id": "uss-saratoga",
  "category": "models",
  "date": "2024-08",
  "title": "USS Saratoga",
  "summary": "A spray-painted USS Saratoga aircraft carrier model with F6F-5N aircraft on its flight deck.",
  "mediaFormat": "documents",
  "images": [
    {
      "src": "images/uss-saratoga/Saratoga.jpg",
      "alt": "USS Saratoga aircraft carrier model with F6F-5N aircraft arranged on its blue flight deck.",
      "caption": "Saratoga.jpg"
    }
  ]
},
{
  "id": "cat-gifting-mechanism",
  "category": "minecraft",
  "date": "2022",
  "title": "Cat Gifting Mechanism",
  "summary": "A Minecraft mechanism that uses the cat gifting mechanic to bring you loot while you sleep. The build arranges cats around the sleeping area and collects their gifts in storage chests.",
  "mediaFormat": "documents",
  "images": [
    {
      "videoUrl": "https://youtu.be/E_xT8J6JhRk",
      "alt": "Cat gifting mechanism demonstration.",
      "caption": "Cat gifting mechanism demonstration"
    }
  ]
},
{
  "id": "honeycomb-farm",
  "category": "minecraft",
  "date": "2022-03",
  "title": "Automatic Honeycomb Farm",
  "summary": "A fully automatic, 1-wide tileable honeycomb farm in Minecraft. Alternating A and B modules form an ABAB layout that can be repeated to expand the farm.",
  "highlights": [
    "Fully automatic.",
    "1-wide tileable design.",
    "Alternating ABAB module layout."
  ],
  "mediaFormat": "documents",
  "images": [
    {
      "videoUrl": "https://youtu.be/94a91W9jKOI",
      "alt": "Automatic honeycomb farm — ABAB module layout.",
      "caption": "Automatic honeycomb farm — ABAB module layout"
    }
  ]
},
{
  "id": "snow-farm",
  "category": "minecraft",
  "date": "2020-12",
  "title": "Snow Farm",
  "summary": "A fully automatic Minecraft snow farm designed to maximize a snow golem’s snow generation area and operate on Peaceful mode.",
  "highlights": [
    "Produces 39,000 snowballs/hour.",
    "Maximizes the snow golem’s snow generation area.",
    "Works on Peaceful mode.",
    "Fully automatic."
  ],
  "mediaFormat": "documents",
  "images": [
    {
      "videoUrl": "https://youtu.be/As58pfX3iPg",
      "alt": "Automatic snow farm — 39,000 snowballs per hour.",
      "caption": "Automatic snow farm — 39,000 snowballs per hour"
    }
  ]
},
{
  "id": "uss-intrepid",
  "category": "models",
  "date": "2025-08",
  "title": "USS Intrepid",
  "summary": "A spray-painted USS Intrepid aircraft carrier model, featuring a detailed flight deck with Grumman E-1B Tracer, Douglas A-4 Skyhawk, and Douglas A-1 Skyraider aircraft.",
  "mediaFormat": "documents",
  "images": [
    {
      "src": "images/uss-intrepid/intrepid.png",
      "alt": "Spray-painted USS Intrepid aircraft carrier model with aircraft arranged on its flight deck.",
      "caption": "intrepid.png"
    }
  ]
},
{
  "id": "imperial-japanese-naval-air-forces",
  "category": "models",
  "date": "2024-08",
  "title": "Imperial Japanese Naval Air Forces",
  "summary": "A collection of models featuring the A6M2, A6M5, and M6A aircraft alongside an I-400 submarine.",
  "mediaFormat": "documents",
  "images": [
    {
      "src": "images/ijnaf/IJNAF.png",
      "alt": "Collection of Japanese naval aircraft and an I-400 submarine model displayed together.",
      "caption": "IJNAF.png"
    },
    {
      "src": "images/ijnaf/A6M2.jpg",
      "alt": "A6M2 aircraft model with light-colored paint and red roundels.",
      "caption": "A6M2.jpg"
    },
    {
      "src": "images/ijnaf/A6M5.jpg",
      "alt": "A6M5 aircraft model with dark green paint and red roundels.",
      "caption": "A6M5.jpg"
    },
    {
      "src": "images/ijnaf/I-400.jpg",
      "alt": "I-400 submarine model displayed on a tabletop.",
      "caption": "I-400.jpg"
    },
    {
      "src": "images/ijnaf/M6A.jpg",
      "alt": "M6A floatplane model with dark green paint and yellow wing markings.",
      "caption": "M6A.jpg"
    }
  ]
},
{
  "id": "test-tubes",
  "category": "minecraft",
  "date": "2026-06",
  "displayDate": "Summer 2026",
  "title": "Test Tubes",
  "highlights": [
    "Uses magma in the water transport channel to speed up killing mobs.",
    "Uses a trident killer to increase loot gained.",
    "Automatically sorts all loot types, with an extra chest for nonstackable items."
  ],
  "summary": "A general overworld mob farm built in Minecraft with four modules. Named Test Tubes, the build combines the four modules into a single farm structure.",
  "mediaFormat": "documents",
  "images": [
    {
      "src": "images/minecraft-builds/GMF.png",
      "alt": "Minecraft overworld mob farm with four tall glass modules arranged around a central structure.",
      "caption": "Test Tubes — four-module overworld mob farm"
    }
  ]
},
{
  "id": "minecraft-pool",
  "category": "minecraft",
  "date": "2026-07",
  "title": "Multiplayer Pool",
  "summary": "A multiplayer pool game built in Minecraft after the Chaos Cubed update. It uses the newly added momentum mechanics and Sulfur Cubes to simulate real pool, bringing a familiar tabletop game into a shared Minecraft world.",
  "mediaFormat": "documents",
  "images": [
    {
      "videoUrl": "https://youtu.be/ctS16BFI0m0",
      "alt": "Multiplayer pool using momentum and Sulfur Cubes.",
      "caption": "Multiplayer pool using momentum and Sulfur Cubes"
    }
  ]
},
{
  "id": "freefall-drag",
  "category": "hands-on",
  "date": "2023-11-22",
  "title": "Freefall Equation with Air Resistance",
  "summary": "A new variation of the freefall equation, derived with Carlton Woo and Trevor Yeung by integrating Newton’s second law twice with a quadratic drag term. The integration took more than six hours. Validated by Prof. G. W. K. Moore at the University of Toronto and Prof. Alfredo de Faria at the University of Waterloo. Developed for a Grade 12 capstone exploring the physics of Pearl Harbor, the equation was compared with existing freefall models and explored in Desmos using historical parameters and estimated drag coefficients.",
  "mediaFormat": "documents",
  "images": [
    {
      "src": "images/freefall-drag/equation.png",
      "alt": "Freefall displacement equation incorporating mass, gravity, drag coefficient, cross-sectional area, fluid density, and time.",
      "caption": "Freefall equation with quadratic drag"
    },
    {
      "src": "images/freefall-drag/derivation-1.jpg",
      "alt": "First handwritten derivation page starting from Newton’s second law and separating variables to integrate the drag equation.",
      "caption": "Deriving velocity from Newton’s second law"
    },
    {
      "src": "images/freefall-drag/derivation-2.jpg",
      "alt": "Second handwritten derivation page integrating velocity to obtain displacement with air resistance.",
      "caption": "Integrating velocity to obtain displacement"
    },
    {
      "src": "images/freefall-drag/desmos.jpg",
      "alt": "Desmos exploration of an approximately 800 kg falling object, with an estimated drag coefficient and position, velocity, and acceleration calculations.",
      "caption": "Desmos exploration of the Pearl Harbor attack: a modified Type 99 #80 Mark 5 AP shell repurposed as an armor-piercing bomb, dropped from 10,000 ft."
    }
  ]
},
{
  "id": "obvious-trapped-chest",
  "category": "minecraft",
  "date": "2024-04",
  "title": "Obvious Trapped Chest",
  "summary": "A Minecraft Bedrock resource pack that adds a bright red perimeter around the lock on trapped chests, helping players easily distinguish them from normal chests. Includes textures for both single and double trapped chests.",
  "mediaFormat": "pack",
  "images": [
    {
      "src": "images/obvious-trapped-chest/pack-icon.png",
      "alt": "TNT block icon used by the Obvious Trapped Chest resource pack.",
      "caption": "Resource pack icon"
    }
  ],
  "downloads": [
    {
      "src": "downloads/obvious-trapped-chest.mcpack",
      "label": "Download Bedrock resource pack (.mcpack)"
    }
  ],
  "instructions": "Open the downloaded .mcpack file with Minecraft Bedrock to import it, then activate Obvious Trapped Chest in your world’s Resource Packs settings. The manifest lists Minecraft 1.18.10 as the minimum version."
},
{
  "id": "minecraft-biome-cnn",
  "category": "design",
  "date": "2026-08-06",
  "title": "Minecraft Biome Classification with a CNN",
  "summary": "A project for APS360 (Applied Fundamentals of Deep Learning) at the University of Toronto: a convolutional neural network that classifies Minecraft screenshots into eight biomes: Basalt Deltas, Crimson Forest, Dripstone Caves, Lush Caves, Mushroom Fields, Soulsand Valley, Sulfur Caves, and Warped Forest. The CNN was compared against color histogram, RGB, ANN, and ResNet models and achieved 84.55% test accuracy. The CNN was also trained with data augmentation, but the augmented-data version was not used as the final model. Its architecture uses two convolutional layers with ReLU and max pooling, followed by two fully connected layers for eight-class prediction.",
  "mediaFormat": "documents",
  "images": [
    {
      "src": "images/minecraft-biome-cnn/architecture.png",
      "alt": "Flowchart of the CNN architecture with two convolutional layers, max pooling, and two fully connected layers predicting eight biomes.",
      "caption": "CNN architecture"
    },
    {
      "src": "images/minecraft-biome-cnn/sulfur-caves.png",
      "alt": "Minecraft Sulfur Caves screenshots in the test dataset.",
      "caption": "Sulfur Caves — test samples"
    },
    {
      "src": "images/minecraft-biome-cnn/warped-forest.png",
      "alt": "Minecraft Warped Forest screenshots in the training dataset.",
      "caption": "Warped Forest — training samples"
    },
    {
      "src": "images/minecraft-biome-cnn/crimson-forest.png",
      "alt": "Minecraft Crimson Forest screenshots in the validation dataset.",
      "caption": "Crimson Forest — validation samples"
    },
    {
      "src": "images/minecraft-biome-cnn/implementation.png",
      "alt": "Google Colab notebook showing the PyTorch BiomeCNN class and its forward pass.",
      "caption": "PyTorch model implementation"
    }
  ]
},
  {
    id: "cinematography-robot-arm",
    category: "design",
    date: "2025-12-02",
    title: "Low Cost, Long-Reach Robot Arm for Cinematography",
    summary: "A team mechanical design project for MIE243 (Mechanical Engineering Design) at the University of Toronto: a six-axis camera arm for beginner filmmakers, designed for a 1.5 kg payload and a 1.2 m reach. The design combines an aluminum structure and 3D-printed components with lead-screw linkages and belt-driven joints. Concept evaluation, SolidWorks motion analysis, and component selection informed an estimated cost of CAD $813.75, excluding electronics.",
    mediaFormat: "drawings",
    images: [
      {
        src: "images/cinematography-robot-arm/sheet-1.jpg",
        alt: "Engineering assembly drawing of the cinematography robot arm with its base, shoulder and elbow linkages, wrist, and numbered parts list.",
        caption: "Final robot arm assembly",
      },
      {
        src: "images/cinematography-robot-arm/sheet-2.jpg",
        alt: "Right-side view of the robot arm with dimensions for the shoulder and elbow components.",
        caption: "Side view and arm dimensions",
      },
      {
        src: "images/cinematography-robot-arm/sheet-3.jpg",
        alt: "Exploded drawing of the robot arm base showing its shaft, bearings, timing belt, and pulleys.",
        caption: "Exploded base assembly and bearings",
      },
      {
        src: "images/cinematography-robot-arm/sheet-4.jpg",
        alt: "Engineering drawing of the assembled base mechanism and belt-driven rotation joint.",
        caption: "Base rotation mechanism",
      },
      {
        src: "images/cinematography-robot-arm/sheet-5.jpg",
        alt: "Exploded engineering drawing of the three-axis wrist showing stepper motors, timing belts, pulleys, shafts, and bearings.",
        caption: "Exploded wrist assembly and bearings",
      },
      {
        src: "images/cinematography-robot-arm/sheet-6.jpg",
        alt: "Dimensioned engineering drawing of the wrist mechanism with its three rotation axes.",
        caption: "Wrist mechanism and dimensions",
      },
    ],
  },
  {
    id: "landmark-charge",
    category: "design",
    date: "2025-04",
    title: "Landmark Charge — EV Charging Campaign",
    summary: "A team campaign for the University of Toronto’s Landmark Garage, using multiple marketing techniques to awareness of underused EV chargers. The Instagram profile has accumulated over 27,000 total views.",
    mediaFormat: "documents",
    images: [
      {
        src: "images/landmark-charge/instagram-profile.png",
        alt: "Landmark Charge Instagram profile showing 6 posts, 62 followers, the EV charging brand, and the Landmark Garage location at 35 Hart House Circle.",
        caption: "Landmark Charge — Instagram campaign page.",
      },
      {
        src: "images/landmark-charge/design-process.png",
        alt: "Design selection flowchart narrowing 89 ideas through feasibility checks, multivoting, a graphical decision chart, and a Pugh chart to one solution.",
        caption: "From initial ideas to the final campaign concept",
      },
      {
        src: "images/landmark-charge/campaign-poster.png",
        alt: "Green Landmark Charge poster featuring a friendly charging station mascot and the slogan Downtown Toronto EV Charging? I Got You!",
        caption: "Landmark Charge campaign poster",
      },
      {
        src: "images/landmark-charge/garage-sign.png",
        alt: "Landmark Garage directional sign with an arrow, garage location, and proposed charging and parking rates.",
        caption: "Garage wayfinding and proposed pricing",
      },
      {
        src: "images/landmark-charge/discount-poster.png",
        alt: "Landmark Charge poster promoting proposed parking and charging discounts with local businesses, with a map to the garage.",
        caption: "Local business partnership and discount concept",
      },
      {
        src: "images/landmark-charge/discount-announcements.png",
        alt: "Two Coming Soon campaign graphics promoting proposed 25 percent charging and 75 percent parking discounts.",
        caption: "Charging and parking discount announcements",
      },
      {
        src: "images/landmark-charge/reach-chart.png",
        alt: "Reach and views chart comparing sponsored and unsponsored campaign posts across graphics, animations, and reels.",
        caption: "Sponsored and organic campaign reach and views",
      },
    ],
  },
];

const navRoot = document.querySelector("#category-nav");
const feedRoot = document.querySelector("#project-feed");
const heading = document.querySelector("#feed-heading");
const description = document.querySelector("#feed-description");
const introDescription = document.querySelector(".intro-description");
const defaultIntroDescription = introDescription.textContent;
const activeSlides = new Map();
const imageViewer = document.createElement("dialog");
imageViewer.className = "image-viewer";
imageViewer.setAttribute("aria-label", "Full image viewer");
imageViewer.innerHTML = '<button type="button" class="viewer-close" aria-label="Close image viewer">Close ×</button><img class="viewer-image" alt=""><p class="viewer-caption"></p><button type="button" class="viewer-arrow viewer-previous" aria-label="Previous photo">←</button><button type="button" class="viewer-arrow viewer-next" aria-label="Next photo">→</button>';
document.body.append(imageViewer);
imageViewer.querySelector("button").addEventListener("click", () => imageViewer.close());
imageViewer.addEventListener("click", (event) => {
  if (event.target === imageViewer) imageViewer.close();
});
imageViewer.addEventListener("close", () => document.body.classList.remove("viewer-open"));

let viewerPhotos = [];
let viewerPhotoIndex = 0;
function updateViewerImage() {
  const image = viewerPhotos[viewerPhotoIndex];
  const fullImage = imageViewer.querySelector("img");
  fullImage.src = image.src;
  fullImage.alt = image.alt;
  imageViewer.querySelector(".viewer-caption").textContent = image.caption || "";
  for (const arrow of imageViewer.querySelectorAll(".viewer-arrow")) arrow.hidden = viewerPhotos.length < 2;
}
function moveViewerPhoto(direction) {
  if (viewerPhotos.length < 2) return;
  viewerPhotoIndex = (viewerPhotoIndex + direction + viewerPhotos.length) % viewerPhotos.length;
  updateViewerImage();
}
imageViewer.querySelector(".viewer-previous").addEventListener("click", () => moveViewerPhoto(-1));
imageViewer.querySelector(".viewer-next").addEventListener("click", () => moveViewerPhoto(1));
imageViewer.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    event.preventDefault();
    moveViewerPhoto(event.key === "ArrowLeft" ? -1 : 1);
  }
});
function openImage(image, project) {
  viewerPhotos = project.images.filter((item) => item.src);
  viewerPhotoIndex = viewerPhotos.indexOf(image);
  updateViewerImage();
  imageViewer.showModal();
  document.body.classList.add("viewer-open");
}

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function getActiveCategory() {
  const requestedId = window.location.hash.slice(1).split("/")[0];
  return categories.find((category) => category.id === requestedId) ?? null;
}

function renderNavigation(activeCategory) {
  navRoot.replaceChildren();
  const mainLink = createElement("a", "nav-link", "Main");
  mainLink.href = window.location.pathname + window.location.search;
  mainLink.addEventListener("click", navigateToSection);
  if (!activeCategory) mainLink.setAttribute("aria-current", "page");
  navRoot.append(mainLink);

  for (const item of categories) {
    const link = createElement("a", "nav-link", item.label);
    link.href = `#${item.id}`;
    link.addEventListener("click", navigateToSection);
    if (item.id === activeCategory?.id) link.setAttribute("aria-current", "page");
    navRoot.append(link);
  }
}

function scrollToSectionHeading(targetHeading = heading) {
  const headingBlock = targetHeading.closest(".section-heading") || targetHeading;
  const top = headingBlock.getBoundingClientRect().top + window.scrollY
    - document.querySelector(".site-header").getBoundingClientRect().height - 32;
  window.scrollTo({ top, behavior: "smooth" });
}

function navigateToSection(event) {
  event.preventDefault();
  history.pushState(null, "", event.currentTarget.hash || window.location.pathname + window.location.search);
  render();
  scrollToSectionHeading();
}

function formatDate(date, label) {
  if (label && (/^\d{4}[/-]/.test(label) || /^Winter \d{4}\//.test(label))) return label;
  if (label && /^Grade /.test(label)) return label;
  const season = label?.match(/^(Summer|Winter) (\d{4})$/);
  if (season) return `${season[2]}/—/— (${season[1]})`;
  if (!date || !/^\d{4}(-\d{2}(-\d{2})?)?$/.test(date)) return "Undated";
  const [year, month = "—", day = "—"] = date.split("-");
  return `${year}/${month}/${day}`;
}

function projectOrder(project) {
  if (!project.date || !/^\d{4}(-\d{2}(-\d{2})?)?$/.test(project.date)) return null;
  const normalized = project.date.length === 4 ? `${project.date}-01-01` : project.date.length === 7 ? `${project.date}-01` : project.date;
  const timestamp = Date.parse(`${normalized}T00:00:00Z`);
  return Number.isFinite(timestamp) ? timestamp : null;
}

function getVisibleProjects(activeCategory) {
  return projects
    .map((project, originalIndex) => ({ project, originalIndex, order: projectOrder(project) }))
    .filter(({ project }) => activeCategory
      ? project.category === activeCategory.id
      : !["minecraft", "photography", "art"].includes(project.category))
    .sort((a, b) => {
      if (a.order === null && b.order === null) return a.originalIndex - b.originalIndex;
      if (a.order === null) return 1;
      if (b.order === null) return -1;
      return b.order - a.order || a.originalIndex - b.originalIndex;
    })
    .map(({ project }) => project);
}

function getVideoEmbedUrl(videoUrl) {
  const url = new URL(videoUrl);
  const host = url.hostname.replace(/^www\./, "");
  if (["youtube.com", "youtu.be"].includes(host)) {
    const id = host === "youtu.be" ? url.pathname.slice(1) : url.searchParams.get("v") || url.pathname.split("/").pop();
    if (/^[A-Za-z0-9_-]{11}$/.test(id)) return `https://www.youtube-nocookie.com/embed/${id}`;
  }
  if (host === "bilibili.com") {
    const bvid = url.pathname.match(/\/video\/(BV[A-Za-z0-9]+)/)?.[1];
    if (bvid) return `https://player.bilibili.com/player.html?bvid=${bvid}&page=1&autoplay=0`;
  }
  throw new Error("Use a YouTube video URL or a Bilibili /video/BV… URL.");
}

function renderProjectImages(project) {
  const media = createElement("div", "project-media");

  if (!project.images?.length) {
    const placeholder = createElement("div", "image-placeholder");
    placeholder.setAttribute("role", "img");
    placeholder.setAttribute("aria-label", "Project image placeholder. Add an image in app.js.");
    placeholder.innerHTML = '<span class="placeholder-corner corner-top-left"></span><span class="placeholder-corner corner-top-right"></span><span class="placeholder-geometry" aria-hidden="true"><i></i><b></b><em></em></span><span class="placeholder-caption">IMAGE / TO BE ADDED</span>';
    media.append(placeholder);
    return media;
  }

  const isCarousel = project.images.length > 1;
  const slides = [];
  let activeIndex = activeSlides.get(project.id) ?? 0;
  if (isCarousel) {
    media.classList.add("image-carousel");
    media.setAttribute("role", "region");
    media.setAttribute("aria-roledescription", "carousel");
    media.setAttribute("aria-label", `${project.title} images`);
  }

  for (const [index, image] of project.images.entries()) {
    const figure = createElement("figure", "project-figure");
    if (isCarousel) {
      figure.hidden = index !== activeIndex;
      figure.setAttribute("role", "group");
      figure.setAttribute("aria-roledescription", "slide");
      figure.setAttribute("aria-label", `${index + 1} of ${project.images.length}`);
    }
    const imageWindow = createElement("div", "image-window");
    if (image.preziUrl) {
      const url = new URL(image.preziUrl);
      if (url.protocol !== "https:" || url.hostname !== "prezi.com" || !/^\/p\/embed\/[A-Za-z0-9_-]+\/$/.test(url.pathname)) throw new Error("Use a Prezi presentation embed URL.");
      imageWindow.classList.add("document-window");
      const frame = document.createElement("iframe");
      frame.src = url.href;
      frame.title = image.alt || project.title;
      frame.loading = "lazy";
      frame.allow = "autoplay; fullscreen";
      frame.allowFullscreen = true;
      frame.referrerPolicy = "strict-origin-when-cross-origin";
      imageWindow.append(frame);
    } else if (image.driveUrl) {
      const url = new URL(image.driveUrl);
      const fileId = url.pathname.match(/^\/file\/d\/([A-Za-z0-9_-]+)(?:\/|$)/)?.[1];
      if (url.hostname !== "drive.google.com" || !fileId) throw new Error("Use a Google Drive file sharing URL.");
      imageWindow.classList.add("document-window");
      const frame = document.createElement("iframe");
      frame.src = `https://drive.google.com/file/d/${fileId}/preview`;
      frame.title = image.alt || project.title;
      frame.loading = "lazy";
      frame.allowFullscreen = true;
      frame.referrerPolicy = "strict-origin-when-cross-origin";
      imageWindow.append(frame);
    } else if (image.videoUrl) {
      imageWindow.classList.add("video-window");
      const frame = document.createElement("iframe");
      frame.src = getVideoEmbedUrl(image.videoUrl);
      frame.title = image.alt || project.title;
      frame.loading = "lazy";
      frame.setAttribute("scrolling", "no");
      frame.allow = "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen";
      frame.allowFullscreen = true;
      frame.referrerPolicy = "strict-origin-when-cross-origin";
      imageWindow.append(frame);
    } else if (image.videoSrc) {
      imageWindow.classList.add("video-window");
      const video = document.createElement("video");
      video.src = image.videoSrc;
      video.controls = true;
      video.playsInline = true;
      video.preload = "metadata";
      video.setAttribute("aria-label", image.alt || project.title);
      imageWindow.append(video);
    } else {
    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.alt;
    img.loading = "lazy";
    img.tabIndex = 0;
    img.setAttribute("role", "button");
    img.setAttribute("aria-label", `View complete image: ${image.alt}`);
    img.addEventListener("click", () => openImage(image, project));
    img.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openImage(image, project);
      }
    });
    imageWindow.tabIndex = 0;
    imageWindow.setAttribute("role", "region");
    imageWindow.setAttribute("aria-label", `${image.caption || image.alt}. Scroll to view the image.`);
    imageWindow.append(img);
    function fitImage() {
      const tall = img.naturalWidth > 0 &&
        img.naturalHeight / img.naturalWidth > imageWindow.clientHeight / imageWindow.clientWidth;
      imageWindow.classList.toggle("is-scrollable", tall);
    }
    img.addEventListener("load", fitImage);
    new ResizeObserver(fitImage).observe(imageWindow);
    }
    figure.append(imageWindow);
    if (image.caption) figure.append(createElement("figcaption", "image-caption", image.caption));
    if (image.videoUrl || image.driveUrl || image.preziUrl) {
      const link = createElement("a", "video-source", image.preziUrl ? "Open presentation in Prezi ↗" : image.driveUrl ? "Open PDF in Google Drive ↗" : "Watch on video platform ↗");
      link.href = image.preziUrl || image.driveUrl || image.videoUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      figure.append(link);
    }
    media.append(figure);
    slides.push(figure);
  }
  if (isCarousel) {
    const controls = createElement("div", "carousel-controls");
    const previous = createElement("button", "carousel-arrow", "←");
    previous.type = "button";
    previous.setAttribute("aria-label", "Previous image");
    const next = createElement("button", "carousel-arrow", "→");
    next.type = "button";
    next.setAttribute("aria-label", "Next image");
    const status = createElement("span", "carousel-status", `${activeIndex + 1} / ${slides.length}`);
    status.setAttribute("aria-live", "polite");
    status.setAttribute("aria-atomic", "true");

    function moveSlide(direction) {
      activeIndex = (activeIndex + direction + slides.length) % slides.length;
      activeSlides.set(project.id, activeIndex);
      slides.forEach((slide, index) => { slide.hidden = index !== activeIndex; });
      slides.forEach((slide, index) => {
        if (index !== activeIndex) slide.querySelector("video")?.pause();
      });
      status.textContent = `${activeIndex + 1} / ${slides.length}`;
    }

    previous.addEventListener("click", () => moveSlide(-1));
    next.addEventListener("click", () => moveSlide(1));
    media.addEventListener("keydown", (event) => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        moveSlide(event.key === "ArrowLeft" ? -1 : 1);
      }
    });
    controls.append(previous, status, next);
    media.append(controls);
  }
  return media;
}

function renderProject(project) {
  const category = categories.find((item) => item.id === project.category);
  if (!category) return null;

  const article = createElement("article", "project-card");
  if (project.mediaFormat === "pack") article.classList.add("has-pack");
  if (["drawings", "documents"].includes(project.mediaFormat)) article.classList.add("has-drawings");
  article.id = project.id;
  if (project.images?.length) article.append(renderProjectImages(project));

  const details = createElement("div", "project-details");
  const metadata = createElement("div", "project-meta");
  metadata.append(createElement("span", "project-category", category.label));
  metadata.append(createElement("time", "project-date", formatDate(project.date, project.displayDate)));
  details.append(metadata);
  const title = createElement("h3", "project-title");
  const entryLink = createElement("a", "project-entry-link", project.title);
  entryLink.href = `#${project.category}/${project.id}`;
  entryLink.title = "Link to this project";
  title.append(entryLink);
  details.append(title);
  const summary = createElement("p", "project-summary", project.summary);
  details.append(summary);
  if (project.highlights?.length) {
    const list = createElement("ul", "project-highlights");
    for (const point of project.highlights) list.append(createElement("li", "", point));
    details.append(list);
  }
  if (project.downloads?.length) {
    const downloads = createElement("div", "project-downloads");
    for (const file of project.downloads) {
      const link = createElement("a", "download-link", file.label);
      link.href = file.src;
      link.setAttribute("download", "");
      downloads.append(link);
    }
    details.append(downloads);
  }
  if (project.instructions) details.append(createElement("p", "project-install", project.instructions));
  for (const source of project.links || []) {
    const link = createElement("a", "project-source", source.label);
    link.href = source.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    if (source.inlineSummary) {
      link.classList.add("inline-source");
      summary.append(" ", link);
    } else details.append(link);
  }
  article.append(details);
  return article;
}

function render() {
  if (window.location.hash === "#all") history.replaceState(null, "", window.location.pathname + window.location.search);
  const activeCategory = getActiveCategory();
  const visibleProjects = getVisibleProjects(activeCategory);
  renderNavigation(activeCategory);
  updateHeroPhoto(activeCategory?.id);
  document.querySelector("#education").hidden = Boolean(activeCategory);
  const categoryIntros = {
    art: "Creative freedom is wonderful",
    design: "A list of items I designed, either by myself or with a team",
    marketing: "Studying engineering doesn't mean I can't do sales pitches",
    photography: "Scenes worth remembering, captured without professional equipment",
    "hands-on": "My experience with crafts, machining, hand tools, woodworking, and doing things manually.",
    minecraft: "Unique Minecraft contraptions, builds, and resource packs designed by me. During my 2026 summer internship, my supervisor kept asking why I design things to be so square and rectangular. I suspect this is why.",
    models: "Trumpeter, Tamiya, and Hasegawa model kits, assembled and spray-painted using techniques I taught myself.",
  };
  introDescription.textContent = categoryIntros[activeCategory?.id] ?? defaultIntroDescription;

  heading.textContent = activeCategory ? activeCategory.label : "Recent work";
  description.textContent = activeCategory
    ? `Projects filed under ${activeCategory.label}.`
    : "A running log, newest first.";

  feedRoot.replaceChildren();
  for (const project of visibleProjects) {
    const card = renderProject(project);
    if (card) feedRoot.append(card);
  }
  if (window.location.hash === "#education") requestAnimationFrame(() => {
    if (window.location.hash === "#education") scrollToSectionHeading(document.querySelector("#education-heading"));
  });
  const requestedEntry = window.location.hash.split("/")[1]?.replace(/^#/, "");
  if (requestedEntry) {
    const target = /^\d+$/.test(requestedEntry)
      ? visibleProjects[Number(requestedEntry) - 1]
      : visibleProjects.find((project) => project.id === requestedEntry);
    if (target) requestAnimationFrame(() => {
      if (window.location.hash.split("/")[1]?.replace(/^#/, "") !== requestedEntry) return;
      document.getElementById(target.id)?.scrollIntoView({ behavior: "instant", block: "start" });
    });
  }
}

document.querySelector("#current-year").textContent = new Date().getFullYear();
document.querySelector(".brand").addEventListener("click", (event) => {
  event.preventDefault();
  history.pushState(null, "", window.location.pathname + window.location.search);
  render();
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  requestAnimationFrame(() => {
    if (!window.location.hash) window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  });
});
document.querySelector("#explore-projects").addEventListener("click", (event) => {
  event.preventDefault();
  scrollToSectionHeading();
});
document.querySelector("#explore-education").addEventListener("click", (event) => {
  event.preventDefault();
  history.pushState(null, "", "#education");
  render();
  scrollToSectionHeading(document.querySelector("#education-heading"));
});
window.addEventListener("popstate", render);
const emailCopyStatus = document.querySelector(".email-copy-status");
let emailCopyTimer;
document.querySelector(".footer-contact").addEventListener("click", async () => {
  const email = "vipianshang@gmail.com";
  let copied = false;
  try {
    await navigator.clipboard.writeText(email);
    copied = true;
  } catch {
    const input = document.createElement("textarea");
    input.value = email;
    input.className = "clipboard-helper";
    document.body.append(input);
    input.select();
    try { copied = document.execCommand("copy"); } catch { /* No success message if copying fails. */ }
    input.remove();
  }
  if (!copied) return;
  clearTimeout(emailCopyTimer);
  emailCopyStatus.textContent = "Email Copied";
  emailCopyStatus.hidden = false;
  emailCopyStatus.classList.remove("is-visible");
  void emailCopyStatus.offsetWidth;
  emailCopyStatus.classList.add("is-visible");
  emailCopyTimer = setTimeout(() => {
    emailCopyStatus.hidden = true;
    emailCopyStatus.textContent = "";
  }, 2000);
});
window.addEventListener("hashchange", render);

// Canvas avoids the browser's standard Save Image and drag-image actions.
const heroPhotoFrame = document.querySelector(".hero-photo-frame");
const heroPhotoCanvas = document.querySelector(".hero-photo");
const heroPhoto = new Image();
function drawHeroPhoto() {
  if (!heroPhoto.naturalWidth) return;
  const scale = window.devicePixelRatio || 1;
  const width = heroPhotoFrame.clientWidth;
  const height = heroPhotoFrame.clientHeight;
  heroPhotoCanvas.width = Math.round(width * scale);
  heroPhotoCanvas.height = Math.round(height * scale);
  const context = heroPhotoCanvas.getContext("2d");
  const fit = Math.max(heroPhotoCanvas.width / heroPhoto.naturalWidth, heroPhotoCanvas.height / heroPhoto.naturalHeight);
  const drawWidth = heroPhoto.naturalWidth * fit;
  const drawHeight = heroPhoto.naturalHeight * fit;
  context.drawImage(heroPhoto, (heroPhotoCanvas.width - drawWidth) / 2, (heroPhotoCanvas.height - drawHeight) / 2, drawWidth, drawHeight);
}
heroPhoto.addEventListener("load", drawHeroPhoto);
// Assign a section its own hero image; unspecified sections retain the clock.
const heroPhotos = {
  "hands-on": "images/hero/hands-on.jpg",
};
let currentHeroPhoto;
function updateHeroPhoto(categoryId) {
  const source = heroPhotos[categoryId] || "images/hero/clockwork-portal.png";
  if (source === currentHeroPhoto) return;
  currentHeroPhoto = source;
  heroPhotoCanvas.getContext("2d").clearRect(0, 0, heroPhotoCanvas.width, heroPhotoCanvas.height);
  heroPhoto.src = source;
}
new ResizeObserver(drawHeroPhoto).observe(heroPhotoFrame);
for (const eventName of ["contextmenu", "dragstart"]) {
  heroPhotoFrame.addEventListener(eventName, (event) => event.preventDefault());
}

render();

// Keep corresponding coursework rows aligned when course names wrap.
const courseworkTables = document.querySelector(".coursework-tables");
const courseworkColumns = [...courseworkTables.querySelectorAll("table")];
const courseworkOriginalRows = courseworkColumns.map((table) => [...table.querySelectorAll("tbody tr")]);
const courseworkChronologicalRows = [];
for (let index = 0; index < Math.max(...courseworkOriginalRows.map((rows) => rows.length)); index++) {
  for (const rows of courseworkOriginalRows) if (rows[index]) courseworkChronologicalRows.push(rows[index]);
}
const narrowCoursework = window.matchMedia("(max-width: 800px)");
function arrangeCoursework() {
  const [left, right] = courseworkColumns;
  if (narrowCoursework.matches) {
    left.querySelector("tbody").replaceChildren(...courseworkChronologicalRows);
    right.querySelector("tbody").replaceChildren();
    left.setAttribute("aria-label", "Highlighted Coursework");
    right.hidden = true;
  } else {
    courseworkColumns.forEach((table, index) => {
      table.querySelector("tbody").replaceChildren(...courseworkOriginalRows[index]);
      table.setAttribute("aria-label", `Coursework, column ${index + 1}`);
      table.hidden = false;
    });
  }
  alignCourseworkRows();
}
narrowCoursework.addEventListener("change", arrangeCoursework);

function alignCourseworkRows() {
  const tables = [...courseworkTables.querySelectorAll("table")];
  const rows = tables.map((table) => [...table.querySelectorAll("tbody tr")]);
  for (const column of rows) for (const row of column) row.style.height = "";
  if (window.matchMedia("(max-width: 800px)").matches) return;
  for (let index = 0; index < Math.max(...rows.map((column) => column.length)); index++) {
    const pair = rows.map((column) => column[index]).filter(Boolean);
    const height = Math.max(...pair.map((row) => row.getBoundingClientRect().height));
    for (const row of pair) row.style.height = `${height}px`;
  }
}
let courseworkWidth;
new ResizeObserver(([entry]) => {
  if (entry.contentRect.width === courseworkWidth) return;
  courseworkWidth = entry.contentRect.width;
  alignCourseworkRows();
}).observe(courseworkTables);
document.fonts.ready.then(alignCourseworkRows);

arrangeCoursework();
