// Query n.3
db.getCollection('D3').find({
    $and: [
      { age: { $gt: 26 } },
      { age: { $lte: 30 } }
    ]
  });

// 19 results
[{
    "_id": "5f032c7594810a371bb64a24",
    "index": 6,
    "guid": "dae58098-793d-4468-939b-49be807a876f",
    "isActive": false,
    "balance": "$2,070.81",
    "picture": "http://placehold.it/32x32",
    "age": 29,
    "eyeColor": "blue",
    "name": {
      "first": "Berry",
      "last": "Sykes"
    },
    "company": "ACRUEX",
    "email": "berry.sykes@acruex.ca",
    "phone": "+1 (930) 595-2268",
    "address": "629 Jardine Place, Hartsville/Hartley, Maryland, 1144",
    "about": "Aliqua velit sunt voluptate ipsum sint veniam enim ipsum. Consectetur Lorem ullamco incididunt laboris nostrud elit culpa. Duis officia id irure eu enim. Laborum mollit non adipisicing mollit id cillum tempor ad est commodo deserunt magna cupidatat.",
    "registered": "Saturday, September 24, 2016 4:03 PM",
    "latitude": "13.559739",
    "longitude": "-129.222394",
    "tags": [
      "incididunt",
      "incididunt",
      "magna",
      "id",
      "nulla"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Stuart Stanley"
      },
      {
        "id": 1,
        "name": "Browning Mitchell"
      },
      {
        "id": 2,
        "name": "Pacheco Bird"
      }
    ],
    "greeting": "Hello, Berry! You have 7 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5f032c7520ece2b76284e31d",
    "index": 11,
    "guid": "90e00a91-6ed1-44ec-9657-8d68677abad3",
    "isActive": false,
    "balance": "$1,101.70",
    "picture": "http://placehold.it/32x32",
    "age": 28,
    "eyeColor": "brown",
    "name": {
      "first": "Michele",
      "last": "Dudley"
    },
    "company": "COMVEX",
    "email": "michele.dudley@comvex.tv",
    "phone": "+1 (978) 580-2959",
    "address": "346 Berkeley Place, Morgandale, Georgia, 6932",
    "about": "Et exercitation aliquip dolore tempor deserunt sunt labore do irure. Adipisicing qui ullamco quis ex irure nisi tempor consectetur cupidatat eiusmod pariatur. Laboris eiusmod proident deserunt ad minim labore quis adipisicing aliqua eiusmod et. Ipsum eu mollit aliqua nulla laboris dolor aute aliqua officia laborum aute eiusmod consequat aute.",
    "registered": "Wednesday, January 25, 2017 4:10 AM",
    "latitude": "54.529064",
    "longitude": "-94.282803",
    "tags": [
      "irure",
      "do",
      "aliqua",
      "nisi",
      "ut"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Berger Navarro"
      },
      {
        "id": 1,
        "name": "Sonja Kirkland"
      },
      {
        "id": 2,
        "name": "Nicholson Mclean"
      }
    ],
    "greeting": "Hello, Michele! You have 8 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5f032c7504f6c476dafd2caf",
    "index": 18,
    "guid": "c4d5c018-254f-40d3-a1e9-893fec046d8b",
    "isActive": false,
    "balance": "$3,785.31",
    "picture": "http://placehold.it/32x32",
    "age": 30,
    "eyeColor": "blue",
    "name": {
      "first": "Rosario",
      "last": "Goodman"
    },
    "company": "KROG",
    "email": "rosario.goodman@krog.ca",
    "phone": "+1 (802) 429-2061",
    "address": "364 Kingsway Place, Clinton, New Jersey, 9570",
    "about": "Labore incididunt labore nostrud enim proident in tempor. Veniam cillum adipisicing aliqua nulla. Nisi officia laboris in ex proident dolor. Labore minim amet mollit laborum id tempor ut elit ipsum. Ea ut commodo nulla mollit cupidatat adipisicing. Tempor ea ullamco minim cupidatat est exercitation sint fugiat id esse dolor ullamco ad id. Non aliqua nisi velit voluptate ullamco.",
    "registered": "Sunday, September 7, 2014 6:30 PM",
    "latitude": "15.465496",
    "longitude": "176.309981",
    "tags": [
      "velit",
      "amet",
      "mollit",
      "ea",
      "quis"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Aurelia Hardy"
      },
      {
        "id": 1,
        "name": "Velez Chang"
      },
      {
        "id": 2,
        "name": "Cotton Cantu"
      }
    ],
    "greeting": "Hello, Rosario! You have 10 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5f032c75360e27de08faeb2b",
    "index": 42,
    "guid": "83d160e0-652b-41a0-987c-32bb474d55ff",
    "isActive": true,
    "balance": "$1,889.92",
    "picture": "http://placehold.it/32x32",
    "age": 30,
    "eyeColor": "blue",
    "name": {
      "first": "Mejia",
      "last": "Reed"
    },
    "company": "JASPER",
    "email": "mejia.reed@jasper.ca",
    "phone": "+1 (907) 567-2319",
    "address": "513 Strauss Street, Falconaire, Rhode Island, 1557",
    "about": "Duis velit cupidatat minim quis cillum nostrud. Nisi fugiat do labore nostrud duis non nisi quis aliqua dolore ullamco eiusmod culpa commodo. Esse nulla officia ea minim dolor esse exercitation minim labore labore in. Minim aliqua laborum occaecat veniam adipisicing Lorem enim ipsum ad adipisicing ad velit voluptate pariatur. Voluptate qui proident et proident eiusmod sint fugiat ad dolore anim in officia. Dolore aute laboris enim incididunt nulla in duis qui amet sunt irure quis dolor. Enim proident ex sit aliqua aliqua sint Lorem esse adipisicing proident officia qui dolor.",
    "registered": "Monday, August 11, 2014 3:55 PM",
    "latitude": "56.209056",
    "longitude": "56.664817",
    "tags": [
      "officia",
      "enim",
      "ut",
      "sit",
      "elit"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Janine Blackburn"
      },
      {
        "id": 1,
        "name": "Cooley Nielsen"
      },
      {
        "id": 2,
        "name": "Marsha Barber"
      }
    ],
    "greeting": "Hello, Mejia! You have 10 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5f032c75e6f7106f31bc5e7b",
    "index": 49,
    "guid": "b9090aba-9cec-4a95-af57-6b2e28c93bdc",
    "isActive": true,
    "balance": "$3,978.24",
    "picture": "http://placehold.it/32x32",
    "age": 30,
    "eyeColor": "green",
    "name": {
      "first": "Virgie",
      "last": "Petersen"
    },
    "company": "DATAGEN",
    "email": "virgie.petersen@datagen.me",
    "phone": "+1 (937) 519-3991",
    "address": "744 Granite Street, Coleville, Delaware, 2711",
    "about": "Id ea id tempor dolore officia Lorem culpa eiusmod voluptate qui. Consequat exercitation adipisicing in proident irure exercitation aute et aliqua laborum qui do cillum esse. Nulla fugiat dolore aliqua aliqua laboris eiusmod ipsum ex Lorem dolor amet ut. Deserunt eu ex consectetur do mollit cupidatat ex in. Enim duis excepteur pariatur consectetur veniam cupidatat pariatur commodo. Est enim labore labore ullamco ad irure officia aute laborum eu dolore dolor.",
    "registered": "Thursday, May 15, 2014 8:35 PM",
    "latitude": "55.545438",
    "longitude": "46.418614",
    "tags": [
      "ad",
      "eu",
      "in",
      "nostrud",
      "deserunt"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Fran Faulkner"
      },
      {
        "id": 1,
        "name": "Hunter Ellison"
      },
      {
        "id": 2,
        "name": "Shepard Quinn"
      }
    ],
    "greeting": "Hello, Virgie! You have 9 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5f032c75e86c506b09b79115",
    "index": 36,
    "guid": "dbe13915-5ad2-4ec8-b3ca-f7017396d1c7",
    "isActive": true,
    "balance": "$2,618.91",
    "picture": "http://placehold.it/32x32",
    "age": 30,
    "eyeColor": "blue",
    "name": {
      "first": "Maryellen",
      "last": "Neal"
    },
    "company": "EXOZENT",
    "email": "maryellen.neal@exozent.name",
    "phone": "+1 (844) 448-2404",
    "address": "941 Metrotech Courtr, Brandermill, Minnesota, 2925",
    "about": "Incididunt proident ea qui irure amet aliqua tempor nisi esse. Dolor eiusmod esse amet officia adipisicing commodo esse eiusmod pariatur aute consequat ea enim. Irure Lorem sint ullamco do velit proident cillum aliqua. Adipisicing laborum incididunt dolor sit. Nostrud anim incididunt dolore ullamco labore labore incididunt enim enim aute.",
    "registered": "Monday, June 8, 2015 9:35 AM",
    "latitude": "-52.497138",
    "longitude": "124.82571",
    "tags": [
      "id",
      "commodo",
      "minim",
      "magna",
      "proident"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Rodriquez Boyer"
      },
      {
        "id": 1,
        "name": "Manuela Dawson"
      },
      {
        "id": 2,
        "name": "Toni Gay"
      }
    ],
    "greeting": "Hello, Maryellen! You have 6 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5f032c752af865f3a44900a1",
    "index": 44,
    "guid": "6038e37f-fb3e-486a-ba12-7e1896f633c7",
    "isActive": true,
    "balance": "$3,345.77",
    "picture": "http://placehold.it/32x32",
    "age": 27,
    "eyeColor": "blue",
    "name": {
      "first": "Karen",
      "last": "Trujillo"
    },
    "company": "ISBOL",
    "email": "karen.trujillo@isbol.com",
    "phone": "+1 (973) 415-3946",
    "address": "540 Sapphire Street, Herlong, New York, 7134",
    "about": "Id cupidatat sunt amet id labore labore sint proident quis excepteur sit fugiat officia. Ut mollit nulla officia excepteur. Quis eiusmod excepteur reprehenderit officia sunt magna aliqua cupidatat commodo amet commodo non qui. Adipisicing irure ut est Lorem eiusmod proident ut et. Cillum exercitation aliqua laborum enim velit id.",
    "registered": "Friday, February 27, 2015 2:50 AM",
    "latitude": "-68.290669",
    "longitude": "82.211389",
    "tags": [
      "officia",
      "nisi",
      "Lorem",
      "incididunt",
      "esse"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Minnie Mcpherson"
      },
      {
        "id": 1,
        "name": "Laurel Houston"
      },
      {
        "id": 2,
        "name": "Suzanne Wheeler"
      }
    ],
    "greeting": "Hello, Karen! You have 5 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5f032c752ca7e08c42b86e27",
    "index": 95,
    "guid": "0a1bf82a-6a19-4a45-b146-aed66edc0e78",
    "isActive": true,
    "balance": "$1,620.40",
    "picture": "http://placehold.it/32x32",
    "age": 28,
    "eyeColor": "brown",
    "name": {
      "first": "Margaret",
      "last": "Yang"
    },
    "company": "TETRATREX",
    "email": "margaret.yang@tetratrex.tv",
    "phone": "+1 (810) 559-3002",
    "address": "535 Hutchinson Court, Ballico, Pennsylvania, 6998",
    "about": "Elit irure fugiat magna sint deserunt commodo anim ex. Mollit id anim quis tempor ea adipisicing magna occaecat duis ex cupidatat duis consectetur. Est anim ut velit ea duis est laborum nostrud duis. Pariatur amet eu ad aute ullamco aliqua.",
    "registered": "Saturday, December 29, 2018 2:27 PM",
    "latitude": "-53.628751",
    "longitude": "32.996048",
    "tags": [
      "sit",
      "et",
      "fugiat",
      "quis",
      "anim"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Ava Beasley"
      },
      {
        "id": 1,
        "name": "Randall Pollard"
      },
      {
        "id": 2,
        "name": "Mullins Mckinney"
      }
    ],
    "greeting": "Hello, Margaret! You have 7 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5f032c757f11108d1d091bb7",
    "index": 4,
    "guid": "fd92930f-36a9-4d24-a1f2-8388878e6741",
    "isActive": true,
    "balance": "$2,722.29",
    "picture": "http://placehold.it/32x32",
    "age": 29,
    "eyeColor": "green",
    "name": {
      "first": "Janell",
      "last": "Farley"
    },
    "company": "EXOVENT",
    "email": "janell.farley@exovent.us",
    "phone": "+1 (805) 457-2574",
    "address": "522 Hamilton Avenue, Retsof, North Dakota, 9229",
    "about": "Ut reprehenderit quis consequat proident occaecat aute qui Lorem nisi nulla labore consequat. Occaecat laboris veniam occaecat nisi amet eiusmod ea in est cillum. Ea Lorem in cillum aliqua anim ullamco. Anim Lorem aliquip voluptate sit fugiat fugiat voluptate mollit duis officia nostrud eu laborum excepteur. Exercitation est non officia occaecat. Sint et id do excepteur tempor.",
    "registered": "Saturday, January 25, 2014 10:00 PM",
    "latitude": "-2.301834",
    "longitude": "5.359606",
    "tags": [
      "ad",
      "laborum",
      "ut",
      "ut",
      "elit"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Johnston Spears"
      },
      {
        "id": 1,
        "name": "Durham Gill"
      },
      {
        "id": 2,
        "name": "Sharon Stevenson"
      }
    ],
    "greeting": "Hello, Janell! You have 10 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5f032c75f6fe43b15e84fff2",
    "index": 35,
    "guid": "407f85df-561f-4b4d-8d6f-ee2e8ad09450",
    "isActive": true,
    "balance": "$3,273.29",
    "picture": "http://placehold.it/32x32",
    "age": 28,
    "eyeColor": "blue",
    "name": {
      "first": "Roman",
      "last": "Wolf"
    },
    "company": "SPRINGBEE",
    "email": "roman.wolf@springbee.tv",
    "phone": "+1 (808) 409-2416",
    "address": "677 Albemarle Terrace, Islandia, Arkansas, 8176",
    "about": "Ipsum esse enim deserunt incididunt ut et. In quis labore laboris dolor amet in officia consequat occaecat officia sunt excepteur est. Proident dolor nostrud sit do labore laboris non adipisicing nisi consequat sunt. Voluptate nisi minim non ipsum voluptate amet consectetur. Proident eiusmod minim minim cupidatat aliqua velit. Esse nulla excepteur irure enim dolor qui eu qui amet id anim nulla elit.",
    "registered": "Saturday, August 26, 2017 10:18 PM",
    "latitude": "71.547125",
    "longitude": "-160.466493",
    "tags": [
      "sint",
      "quis",
      "dolore",
      "irure",
      "enim"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Enid Stuart"
      },
      {
        "id": 1,
        "name": "Camacho Jordan"
      },
      {
        "id": 2,
        "name": "Stacie Gregory"
      }
    ],
    "greeting": "Hello, Roman! You have 5 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5f032c7520092bcf83f7bcd6",
    "index": 19,
    "guid": "10dd929f-3747-4560-b846-d0d14c8516ed",
    "isActive": false,
    "balance": "$1,206.61",
    "picture": "http://placehold.it/32x32",
    "age": 29,
    "eyeColor": "blue",
    "name": {
      "first": "Janice",
      "last": "Cote"
    },
    "company": "ANOCHA",
    "email": "janice.cote@anocha.co.uk",
    "phone": "+1 (858) 419-2266",
    "address": "572 Crescent Street, Chestnut, Massachusetts, 9501",
    "about": "Occaecat voluptate veniam eiusmod consectetur eiusmod aliqua est commodo minim nostrud fugiat. Reprehenderit sint id labore do sint dolor sunt non aliquip nostrud magna nisi adipisicing sit. Esse pariatur pariatur minim duis Lorem nulla pariatur velit sunt. Deserunt laborum id sunt non laborum qui sit nisi. Minim id ullamco magna amet culpa mollit sunt commodo reprehenderit. Ex cillum cillum et consectetur nulla irure velit mollit deserunt. Sunt ullamco exercitation do laborum cillum veniam enim nulla reprehenderit laborum.",
    "registered": "Monday, July 7, 2014 6:31 AM",
    "latitude": "6.353728",
    "longitude": "21.149637",
    "tags": [
      "consectetur",
      "ullamco",
      "exercitation",
      "velit",
      "nostrud"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Macdonald Mack"
      },
      {
        "id": 1,
        "name": "Rosie Bates"
      },
      {
        "id": 2,
        "name": "Alisa Rodgers"
      }
    ],
    "greeting": "Hello, Janice! You have 8 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5f032c75f9823441986fd60d",
    "index": 45,
    "guid": "bba38ea7-72ff-429d-97b7-bba3d3c42c26",
    "isActive": false,
    "balance": "$2,458.63",
    "picture": "http://placehold.it/32x32",
    "age": 27,
    "eyeColor": "green",
    "name": {
      "first": "Amie",
      "last": "Cleveland"
    },
    "company": "ANIVET",
    "email": "amie.cleveland@anivet.net",
    "phone": "+1 (939) 599-3041",
    "address": "854 Estate Road, Caledonia, New Mexico, 6865",
    "about": "Ea dolore nisi est amet nulla anim consectetur ex sit ad veniam nisi fugiat. Commodo duis do Lorem ipsum mollit nisi consectetur do adipisicing consectetur ea deserunt exercitation. Lorem proident quis anim voluptate tempor ea duis fugiat eu quis occaecat nostrud ut esse. Ullamco dolore in tempor ullamco id voluptate ea consequat occaecat proident. Veniam culpa ut consequat elit dolor sint mollit est incididunt. Ut consectetur dolor ex incididunt incididunt aute et.",
    "registered": "Thursday, June 4, 2015 4:22 PM",
    "latitude": "55.869769",
    "longitude": "23.919679",
    "tags": [
      "esse",
      "duis",
      "reprehenderit",
      "reprehenderit",
      "aliqua"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Miles Schwartz"
      },
      {
        "id": 1,
        "name": "Linda Santos"
      },
      {
        "id": 2,
        "name": "Olsen Gillespie"
      }
    ],
    "greeting": "Hello, Amie! You have 5 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5f032c7518e072a37524bc28",
    "index": 55,
    "guid": "73722135-8fdf-4d46-9fc6-7d26718d228d",
    "isActive": true,
    "balance": "$3,755.35",
    "picture": "http://placehold.it/32x32",
    "age": 27,
    "eyeColor": "brown",
    "name": {
      "first": "Love",
      "last": "David"
    },
    "company": "MOREGANIC",
    "email": "love.david@moreganic.co.uk",
    "phone": "+1 (821) 505-3046",
    "address": "444 Columbia Place, Marienthal, Colorado, 120",
    "about": "Deserunt voluptate proident culpa aliquip consequat. Voluptate esse do incididunt laborum aute quis voluptate nostrud consequat nulla consectetur proident consequat exercitation. Esse irure consectetur elit esse. Laborum aliqua magna irure nulla elit elit eu consectetur ad nostrud. In excepteur consectetur cillum occaecat non laborum sint dolor velit dolore sit. Consectetur nisi eiusmod cillum esse irure esse ipsum ea. Officia ullamco culpa cillum consequat qui qui nulla sit sint pariatur adipisicing.",
    "registered": "Wednesday, June 10, 2015 10:24 AM",
    "latitude": "-51.864718",
    "longitude": "-8.257922",
    "tags": [
      "anim",
      "Lorem",
      "sunt",
      "officia",
      "do"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Susanna Melton"
      },
      {
        "id": 1,
        "name": "April Pena"
      },
      {
        "id": 2,
        "name": "Glass Obrien"
      }
    ],
    "greeting": "Hello, Love! You have 10 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5f032c75927513e2ec4041b0",
    "index": 48,
    "guid": "78d58f59-a5a4-465e-908f-1bf52c05fc64",
    "isActive": true,
    "balance": "$3,078.98",
    "picture": "http://placehold.it/32x32",
    "age": 29,
    "eyeColor": "blue",
    "name": {
      "first": "Rae",
      "last": "Powers"
    },
    "company": "DOGNOSIS",
    "email": "rae.powers@dognosis.name",
    "phone": "+1 (938) 412-2913",
    "address": "443 Elm Avenue, Riviera, Indiana, 7909",
    "about": "Nostrud eu nisi non in incididunt reprehenderit pariatur tempor id. Laborum ut id esse excepteur sit excepteur exercitation duis veniam ullamco aliqua. Nulla dolor magna nostrud nostrud. Amet mollit culpa ullamco mollit cupidatat sit in mollit exercitation magna. Fugiat aliquip consequat cupidatat ut nisi.",
    "registered": "Monday, December 8, 2014 6:57 PM",
    "latitude": "14.505711",
    "longitude": "41.178461",
    "tags": [
      "dolore",
      "reprehenderit",
      "reprehenderit",
      "incididunt",
      "nulla"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Leanna Greer"
      },
      {
        "id": 1,
        "name": "Allison Lawrence"
      },
      {
        "id": 2,
        "name": "Louella Peck"
      }
    ],
    "greeting": "Hello, Rae! You have 9 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5f032c75fdea996120c03b67",
    "index": 89,
    "guid": "85ec9560-7994-41a2-9042-2d5ac70a0d74",
    "isActive": true,
    "balance": "$2,424.21",
    "picture": "http://placehold.it/32x32",
    "age": 30,
    "eyeColor": "blue",
    "name": {
      "first": "Galloway",
      "last": "Salas"
    },
    "company": "NETPLODE",
    "email": "galloway.salas@netplode.biz",
    "phone": "+1 (822) 442-3141",
    "address": "498 Doscher Street, Dotsero, Connecticut, 9877",
    "about": "Consectetur anim sit officia sit irure. Sunt culpa pariatur aute est velit deserunt. Eiusmod mollit ut in culpa officia sint anim tempor. Cillum non nostrud mollit officia quis nostrud. Occaecat consectetur laboris elit commodo ea ad nostrud deserunt nostrud ut pariatur.",
    "registered": "Thursday, February 21, 2019 12:02 PM",
    "latitude": "74.6949",
    "longitude": "-104.44775",
    "tags": [
      "amet",
      "ea",
      "quis",
      "enim",
      "voluptate"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Eileen Watts"
      },
      {
        "id": 1,
        "name": "Opal Roberts"
      },
      {
        "id": 2,
        "name": "Johanna Buckner"
      }
    ],
    "greeting": "Hello, Galloway! You have 6 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5f032c752177d079a793dbd3",
    "index": 27,
    "guid": "469069ff-bb19-476c-b98f-ec81137582a2",
    "isActive": false,
    "balance": "$2,855.40",
    "picture": "http://placehold.it/32x32",
    "age": 28,
    "eyeColor": "green",
    "name": {
      "first": "Cox",
      "last": "Hutchinson"
    },
    "company": "LEXICONDO",
    "email": "cox.hutchinson@lexicondo.info",
    "phone": "+1 (820) 574-3209",
    "address": "903 Riverdale Avenue, Levant, Tennessee, 3934",
    "about": "Non esse anim excepteur consequat culpa minim amet eiusmod culpa velit. Non exercitation nostrud sit amet. Nostrud non dolor duis quis excepteur dolor nisi sunt in adipisicing aute. Sunt laborum eu esse ex dolor est laboris ut eiusmod.",
    "registered": "Tuesday, November 26, 2019 10:59 AM",
    "latitude": "-26.7091",
    "longitude": "96.96157",
    "tags": [
      "sint",
      "Lorem",
      "culpa",
      "voluptate",
      "voluptate"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Sandoval Joyner"
      },
      {
        "id": 1,
        "name": "Daisy Adkins"
      },
      {
        "id": 2,
        "name": "Callie Walsh"
      }
    ],
    "greeting": "Hello, Cox! You have 10 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5f032c75509ef232751224d3",
    "index": 32,
    "guid": "3b6b5060-2af7-4e5f-8f65-533f9832556d",
    "isActive": false,
    "balance": "$3,674.18",
    "picture": "http://placehold.it/32x32",
    "age": 28,
    "eyeColor": "brown",
    "name": {
      "first": "Dorothy",
      "last": "Williams"
    },
    "company": "TECHTRIX",
    "email": "dorothy.williams@techtrix.com",
    "phone": "+1 (953) 485-3163",
    "address": "755 Interborough Parkway, Cannondale, Marshall Islands, 6703",
    "about": "Occaecat aliqua in enim culpa ut et amet. Et sunt minim eu minim id in eu. Nisi quis quis quis Lorem reprehenderit mollit amet cillum enim magna cupidatat occaecat commodo. Enim reprehenderit consectetur excepteur tempor.",
    "registered": "Friday, April 25, 2014 12:35 AM",
    "latitude": "74.854679",
    "longitude": "-103.275836",
    "tags": [
      "esse",
      "ullamco",
      "anim",
      "mollit",
      "reprehenderit"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Sherri Baldwin"
      },
      {
        "id": 1,
        "name": "Sexton House"
      },
      {
        "id": 2,
        "name": "Milagros Knight"
      }
    ],
    "greeting": "Hello, Dorothy! You have 6 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5f032c752451a4a348e75801",
    "index": 37,
    "guid": "b75a7b2d-d3bf-4975-9cda-50284a948cec",
    "isActive": true,
    "balance": "$3,803.61",
    "picture": "http://placehold.it/32x32",
    "age": 28,
    "eyeColor": "blue",
    "name": {
      "first": "Frankie",
      "last": "Donaldson"
    },
    "company": "ENERSOL",
    "email": "frankie.donaldson@enersol.me",
    "phone": "+1 (978) 588-3983",
    "address": "739 Cobek Court, Remington, Pennsylvania, 4813",
    "about": "Nostrud exercitation fugiat nostrud veniam sit cillum aliqua ad eiusmod minim non eu officia. Amet enim nulla consequat pariatur duis aliquip in incididunt enim qui aliqua excepteur pariatur consectetur. Enim incididunt minim incididunt non tempor sint esse irure.",
    "registered": "Friday, April 29, 2016 6:14 AM",
    "latitude": "4.921762",
    "longitude": "-117.861801",
    "tags": [
      "amet",
      "irure",
      "voluptate",
      "excepteur",
      "excepteur"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Mia Britt"
      },
      {
        "id": 1,
        "name": "Zamora Doyle"
      },
      {
        "id": 2,
        "name": "Ball Schneider"
      }
    ],
    "greeting": "Hello, Frankie! You have 6 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5f032c75181cbdbe4927360f",
    "index": 70,
    "guid": "4bd831d6-40b2-4abc-ad6d-b62c0cc18e6b",
    "isActive": true,
    "balance": "$3,498.11",
    "picture": "http://placehold.it/32x32",
    "age": 29,
    "eyeColor": "brown",
    "name": {
      "first": "Reilly",
      "last": "Oneil"
    },
    "company": "ZOGAK",
    "email": "reilly.oneil@zogak.org",
    "phone": "+1 (912) 403-2616",
    "address": "951 Seeley Street, Camptown, Texas, 9859",
    "about": "Non labore tempor est consequat. Esse in aliqua eiusmod ad duis aliquip tempor excepteur. Magna dolore nisi velit cupidatat sit sit laborum. Lorem sit aute reprehenderit exercitation. Proident nulla consequat dolore mollit cillum ipsum tempor enim irure nisi deserunt laborum sit.",
    "registered": "Sunday, July 17, 2016 5:16 PM",
    "latitude": "-40.985866",
    "longitude": "152.610352",
    "tags": [
      "esse",
      "in",
      "nisi",
      "dolor",
      "cillum"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Jennifer Velez"
      },
      {
        "id": 1,
        "name": "Jeri Savage"
      },
      {
        "id": 2,
        "name": "Norma Guzman"
      }
    ],
    "greeting": "Hello, Reilly! You have 7 unread messages.",
    "favoriteFruit": "apple"
}]