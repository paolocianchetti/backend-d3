// Query n.6
db.getCollection('D3').find({
    $and: [
      { eyeColor: { $ne: 'green' } },
      { eyeColor: { $ne: 'blue' } }
    ]
});

// 35 results
[{
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
    "_id": "5f032c752f8b7cc47c79bda7",
    "index": 28,
    "guid": "63699dd4-d803-41ca-a636-2a04fd644130",
    "isActive": true,
    "balance": "$2,473.16",
    "picture": "http://placehold.it/32x32",
    "age": 38,
    "eyeColor": "brown",
    "name": {
      "first": "Bowman",
      "last": "Graham"
    },
    "company": "CINCYR",
    "email": "bowman.graham@cincyr.us",
    "phone": "+1 (908) 490-3446",
    "address": "606 Kossuth Place, Why, Wyoming, 9061",
    "about": "Anim labore elit consequat enim aliquip culpa laboris cillum cupidatat esse voluptate aliquip. Consequat adipisicing eu mollit proident elit ipsum dolore occaecat esse eiusmod anim. Amet mollit nostrud exercitation consectetur occaecat nostrud sint proident ut dolor veniam. Adipisicing ad fugiat eu ea ipsum ad anim ea quis. Lorem ea aliquip id magna. Exercitation nulla dolor sit proident. Cillum esse culpa tempor dolor tempor proident.",
    "registered": "Saturday, October 12, 2019 3:07 AM",
    "latitude": "77.608921",
    "longitude": "81.878334",
    "tags": [
      "laborum",
      "esse",
      "laboris",
      "magna",
      "et"
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
        "name": "Leonard Roy"
      },
      {
        "id": 1,
        "name": "Lamb Crane"
      },
      {
        "id": 2,
        "name": "Frances Bolton"
      }
    ],
    "greeting": "Hello, Bowman! You have 10 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5f032c75cc53666281a31322",
    "index": 63,
    "guid": "1faf0e41-d6b0-4593-9194-882da7df9d7c",
    "isActive": false,
    "balance": "$1,497.66",
    "picture": "http://placehold.it/32x32",
    "age": 21,
    "eyeColor": "brown",
    "name": {
      "first": "Jeanne",
      "last": "Morse"
    },
    "company": "ATOMICA",
    "email": "jeanne.morse@atomica.info",
    "phone": "+1 (898) 498-3736",
    "address": "549 Poly Place, Crayne, Virgin Islands, 7189",
    "about": "Mollit ea pariatur tempor cupidatat laboris nulla veniam do. Irure duis laboris esse laborum exercitation ex nostrud aliqua ea. Pariatur officia pariatur aute culpa anim reprehenderit mollit Lorem ut.",
    "registered": "Sunday, November 15, 2015 12:16 AM",
    "latitude": "-16.834855",
    "longitude": "-161.248815",
    "tags": [
      "veniam",
      "mollit",
      "laborum",
      "eu",
      "exercitation"
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
        "name": "Christensen Fields"
      },
      {
        "id": 1,
        "name": "Lara Mcdowell"
      },
      {
        "id": 2,
        "name": "Norton Nguyen"
      }
    ],
    "greeting": "Hello, Jeanne! You have 8 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5f032c756bc16994ea969ae5",
    "index": 76,
    "guid": "46be546c-f3a2-43fd-8e1c-fd22206e62f5",
    "isActive": true,
    "balance": "$3,351.40",
    "picture": "http://placehold.it/32x32",
    "age": 35,
    "eyeColor": "brown",
    "name": {
      "first": "Harper",
      "last": "Dillard"
    },
    "company": "GENMOM",
    "email": "harper.dillard@genmom.us",
    "phone": "+1 (947) 579-3937",
    "address": "499 Coffey Street, Blende, New Jersey, 6176",
    "about": "Sit esse nisi laborum irure ea velit enim laboris adipisicing tempor eu. Culpa aliqua magna mollit elit. Et do enim tempor officia eu laboris nostrud aliquip minim veniam occaecat. Fugiat fugiat eu non aliqua qui nulla id. Elit excepteur officia occaecat minim. Consequat anim dolor duis consequat est officia minim est.",
    "registered": "Wednesday, June 22, 2016 10:38 AM",
    "latitude": "-85.050726",
    "longitude": "-93.181516",
    "tags": [
      "adipisicing",
      "ullamco",
      "nostrud",
      "et",
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
        "name": "Coffey Lewis"
      },
      {
        "id": 1,
        "name": "Humphrey Kerr"
      },
      {
        "id": 2,
        "name": "Olson Riggs"
      }
    ],
    "greeting": "Hello, Harper! You have 5 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5f032c758a93922edbe18189",
    "index": 33,
    "guid": "8e590ede-eef8-4db9-b39a-bc3d2fa67858",
    "isActive": false,
    "balance": "$1,631.70",
    "picture": "http://placehold.it/32x32",
    "age": 39,
    "eyeColor": "brown",
    "name": {
      "first": "Pearlie",
      "last": "Salazar"
    },
    "company": "EVENTIX",
    "email": "pearlie.salazar@eventix.net",
    "phone": "+1 (908) 507-3647",
    "address": "718 Bills Place, Carrizo, West Virginia, 6289",
    "about": "Deserunt ut in Lorem id non mollit id velit incididunt. In elit sit esse fugiat sit nostrud pariatur exercitation sit in elit anim irure quis. In irure ad sunt incididunt qui ut officia officia cillum ipsum. Ex officia ipsum labore aute Lorem aliquip qui ut reprehenderit nisi tempor quis. Cillum tempor adipisicing exercitation ipsum id consequat. Irure labore duis nostrud ipsum quis ex ea esse Lorem exercitation. Ea dolore voluptate Lorem ut cupidatat mollit enim.",
    "registered": "Monday, August 14, 2017 12:57 PM",
    "latitude": "-1.170372",
    "longitude": "111.790795",
    "tags": [
      "culpa",
      "esse",
      "dolore",
      "cillum",
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
        "name": "Trina Thompson"
      },
      {
        "id": 1,
        "name": "Ila Ochoa"
      },
      {
        "id": 2,
        "name": "Mattie Cannon"
      }
    ],
    "greeting": "Hello, Pearlie! You have 7 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5f032c751de6176e00193293",
    "index": 53,
    "guid": "8a9fa4f3-5a37-453e-acbc-f6151dcae281",
    "isActive": true,
    "balance": "$3,588.16",
    "picture": "http://placehold.it/32x32",
    "age": 38,
    "eyeColor": "brown",
    "name": {
      "first": "Gomez",
      "last": "Dejesus"
    },
    "company": "COREPAN",
    "email": "gomez.dejesus@corepan.biz",
    "phone": "+1 (860) 433-3085",
    "address": "240 Story Street, Mansfield, Hawaii, 3430",
    "about": "Non veniam nulla enim laborum enim. Tempor qui aute magna reprehenderit velit culpa. Laborum ullamco aliquip proident duis eu ea nisi est excepteur ad labore reprehenderit.",
    "registered": "Wednesday, March 2, 2016 7:05 PM",
    "latitude": "-85.657895",
    "longitude": "146.778322",
    "tags": [
      "nostrud",
      "non",
      "dolor",
      "eiusmod",
      "veniam"
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
        "name": "Adkins Cruz"
      },
      {
        "id": 1,
        "name": "Adrian Owen"
      },
      {
        "id": 2,
        "name": "Branch Cameron"
      }
    ],
    "greeting": "Hello, Gomez! You have 5 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5f032c75f990fc1d967a98a6",
    "index": 91,
    "guid": "17a10791-4968-4c7d-85bc-b8532d46e120",
    "isActive": true,
    "balance": "$1,247.85",
    "picture": "http://placehold.it/32x32",
    "age": 40,
    "eyeColor": "brown",
    "name": {
      "first": "Sophie",
      "last": "Murphy"
    },
    "company": "ROCKABYE",
    "email": "sophie.murphy@rockabye.co.uk",
    "phone": "+1 (912) 450-2011",
    "address": "479 Cropsey Avenue, Dupuyer, West Virginia, 3421",
    "about": "Minim non nulla aliqua deserunt quis quis eiusmod eu aliqua amet. Ea velit laborum occaecat culpa laborum laborum cupidatat fugiat adipisicing ex esse duis labore quis. Id ut pariatur nostrud et eu ea consequat laborum pariatur. Cillum ex ullamco sit deserunt ex aliqua anim dolor do deserunt. Et excepteur veniam labore Lorem esse exercitation duis ipsum esse veniam occaecat. Nulla veniam nostrud mollit laborum incididunt qui velit sit qui dolor sit esse.",
    "registered": "Tuesday, March 17, 2015 6:17 PM",
    "latitude": "-58.186518",
    "longitude": "-73.083085",
    "tags": [
      "commodo",
      "ipsum",
      "laborum",
      "ullamco",
      "qui"
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
        "name": "Porter Morton"
      },
      {
        "id": 1,
        "name": "Schultz Hebert"
      },
      {
        "id": 2,
        "name": "Marjorie Hampton"
      }
    ],
    "greeting": "Hello, Sophie! You have 7 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5f032c7516612b9d9bcfd6c1",
    "index": 56,
    "guid": "51954452-7990-4a87-b06c-22ffc38672a9",
    "isActive": true,
    "balance": "$3,992.00",
    "picture": "http://placehold.it/32x32",
    "age": 34,
    "eyeColor": "brown",
    "name": {
      "first": "Goodwin",
      "last": "Little"
    },
    "company": "QUAREX",
    "email": "goodwin.little@quarex.com",
    "phone": "+1 (895) 431-3144",
    "address": "427 Grove Street, Blairstown, Arizona, 3702",
    "about": "Excepteur dolore ut nisi reprehenderit excepteur esse. Est eiusmod ullamco occaecat velit occaecat irure. Laboris occaecat consequat eiusmod ad. Sit commodo exercitation adipisicing occaecat ex anim cupidatat consectetur fugiat.",
    "registered": "Wednesday, March 4, 2015 12:07 AM",
    "latitude": "4.590178",
    "longitude": "-56.120911",
    "tags": [
      "est",
      "laboris",
      "in",
      "pariatur",
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
        "name": "Stout Cooke"
      },
      {
        "id": 1,
        "name": "Clemons Gray"
      },
      {
        "id": 2,
        "name": "Janette Clay"
      }
    ],
    "greeting": "Hello, Goodwin! You have 9 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5f032c75e299bbab98063130",
    "index": 68,
    "guid": "2b5fc094-8901-4155-adc0-d7968697abe3",
    "isActive": true,
    "balance": "$3,721.00",
    "picture": "http://placehold.it/32x32",
    "age": 40,
    "eyeColor": "brown",
    "name": {
      "first": "Marianne",
      "last": "Walter"
    },
    "company": "AUSTECH",
    "email": "marianne.walter@austech.com",
    "phone": "+1 (918) 435-3625",
    "address": "371 Heath Place, Hoehne, District Of Columbia, 3855",
    "about": "Ea eiusmod tempor et mollit consequat in commodo. Fugiat dolor elit exercitation aliqua labore consectetur anim sunt pariatur duis. Eiusmod pariatur deserunt magna voluptate adipisicing ex incididunt. Sit et labore fugiat esse nisi minim minim consequat amet dolor ipsum labore aliquip. Cupidatat nostrud nulla in tempor ut ut incididunt laborum occaecat sint laborum.",
    "registered": "Friday, January 31, 2014 10:31 PM",
    "latitude": "-1.550169",
    "longitude": "92.773567",
    "tags": [
      "laborum",
      "duis",
      "dolor",
      "sunt",
      "dolor"
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
        "name": "Barnes Church"
      },
      {
        "id": 1,
        "name": "Rodriguez Webb"
      },
      {
        "id": 2,
        "name": "Esmeralda Curry"
      }
    ],
    "greeting": "Hello, Marianne! You have 8 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5f032c751bc0c90730fb5ad8",
    "index": 51,
    "guid": "471c3520-869a-416a-b772-eff1fcd8b5e6",
    "isActive": false,
    "balance": "$1,465.81",
    "picture": "http://placehold.it/32x32",
    "age": 33,
    "eyeColor": "brown",
    "name": {
      "first": "Collier",
      "last": "Garner"
    },
    "company": "BITTOR",
    "email": "collier.garner@bittor.info",
    "phone": "+1 (851) 439-2644",
    "address": "740 Lawrence Avenue, Ronco, Alabama, 1870",
    "about": "Lorem consectetur exercitation duis reprehenderit velit occaecat. Magna consectetur est magna labore Lorem consequat sint proident. Exercitation officia do irure deserunt proident. Id ex esse minim fugiat cillum. Pariatur elit sunt dolor veniam veniam.",
    "registered": "Sunday, November 23, 2014 8:36 AM",
    "latitude": "51.610071",
    "longitude": "11.791982",
    "tags": [
      "in",
      "fugiat",
      "aliqua",
      "dolore",
      "ullamco"
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
        "name": "Angelita Suarez"
      },
      {
        "id": 1,
        "name": "Faith Evans"
      },
      {
        "id": 2,
        "name": "Holland Gibbs"
      }
    ],
    "greeting": "Hello, Collier! You have 6 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5f032c7574724b80a9057a45",
    "index": 69,
    "guid": "51b20864-789b-420e-b6a2-948cfd671736",
    "isActive": false,
    "balance": "$3,902.22",
    "picture": "http://placehold.it/32x32",
    "age": 40,
    "eyeColor": "brown",
    "name": {
      "first": "Mcclain",
      "last": "Atkinson"
    },
    "company": "SILODYNE",
    "email": "mcclain.atkinson@silodyne.net",
    "phone": "+1 (945) 412-3792",
    "address": "548 Roosevelt Court, Wikieup, Georgia, 252",
    "about": "Aliquip do anim dolore cupidatat exercitation labore labore in excepteur fugiat non. Culpa est consectetur nostrud exercitation sint eu est magna magna dolor Lorem. Consequat nostrud consequat irure cillum. Consectetur qui consequat do amet adipisicing commodo proident cupidatat. Ea reprehenderit fugiat mollit reprehenderit. In exercitation minim aliquip laboris est. Culpa adipisicing enim mollit eu incididunt officia laboris proident quis occaecat labore tempor proident nisi.",
    "registered": "Tuesday, April 29, 2014 2:49 PM",
    "latitude": "49.231507",
    "longitude": "-29.400924",
    "tags": [
      "in",
      "do",
      "sunt",
      "commodo",
      "Lorem"
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
        "name": "Margery Matthews"
      },
      {
        "id": 1,
        "name": "Ruthie Cardenas"
      },
      {
        "id": 2,
        "name": "Brooke Dalton"
      }
    ],
    "greeting": "Hello, Mcclain! You have 8 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5f032c75bd34619aed6dc587",
    "index": 80,
    "guid": "63c52add-9b69-4cce-b3ef-cada8ebd00e8",
    "isActive": true,
    "balance": "$1,662.29",
    "picture": "http://placehold.it/32x32",
    "age": 39,
    "eyeColor": "brown",
    "name": {
      "first": "Dyer",
      "last": "Meadows"
    },
    "company": "RAMEON",
    "email": "dyer.meadows@rameon.com",
    "phone": "+1 (930) 517-2221",
    "address": "221 Hausman Street, Chloride, Oklahoma, 6597",
    "about": "Irure do ut magna nulla excepteur in nisi dolore sunt et excepteur incididunt est. Nisi laborum eu incididunt ea nostrud fugiat quis tempor eiusmod culpa. Qui occaecat qui tempor sint qui minim quis eiusmod. Id magna laborum laborum officia quis sint.",
    "registered": "Saturday, March 4, 2017 2:12 PM",
    "latitude": "-51.173623",
    "longitude": "-129.868157",
    "tags": [
      "quis",
      "sit",
      "velit",
      "sunt",
      "eiusmod"
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
        "name": "Marsh Sexton"
      },
      {
        "id": 1,
        "name": "Mayer Graves"
      },
      {
        "id": 2,
        "name": "Guerra Collins"
      }
    ],
    "greeting": "Hello, Dyer! You have 10 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5f032c75f7bfd09da016cf8f",
    "index": 81,
    "guid": "aa81525d-54b0-4aa5-a60b-4d4a2e516075",
    "isActive": true,
    "balance": "$1,774.96",
    "picture": "http://placehold.it/32x32",
    "age": 26,
    "eyeColor": "brown",
    "name": {
      "first": "Hartman",
      "last": "Parsons"
    },
    "company": "KNEEDLES",
    "email": "hartman.parsons@kneedles.net",
    "phone": "+1 (961) 588-3126",
    "address": "346 Terrace Place, Rockingham, North Carolina, 605",
    "about": "Ut nostrud pariatur proident anim eu pariatur incididunt voluptate eu consequat. Laborum ea sint qui ex laborum sit. Do fugiat qui nostrud qui excepteur magna reprehenderit velit sunt. Anim reprehenderit eiusmod culpa qui voluptate laborum eu esse eiusmod. Aute qui esse anim laboris cupidatat. Aliquip eu et ipsum eiusmod cillum. Excepteur do amet esse sint ex tempor proident laboris in anim do minim do.",
    "registered": "Sunday, September 21, 2014 11:03 PM",
    "latitude": "-60.672589",
    "longitude": "-108.530057",
    "tags": [
      "aute",
      "minim",
      "et",
      "incididunt",
      "velit"
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
        "name": "Denise Noel"
      },
      {
        "id": 1,
        "name": "Colette Parrish"
      },
      {
        "id": 2,
        "name": "Carolina Hurst"
      }
    ],
    "greeting": "Hello, Hartman! You have 9 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5f032c7566acef17011227a8",
    "index": 47,
    "guid": "7fee054e-d043-4b1c-b365-5a3604213cf4",
    "isActive": false,
    "balance": "$2,168.31",
    "picture": "http://placehold.it/32x32",
    "age": 34,
    "eyeColor": "brown",
    "name": {
      "first": "Parks",
      "last": "Jackson"
    },
    "company": "COMCUR",
    "email": "parks.jackson@comcur.tv",
    "phone": "+1 (801) 449-3432",
    "address": "399 Kaufman Place, Cornfields, Oregon, 887",
    "about": "Tempor nulla nulla reprehenderit eiusmod veniam laborum sit exercitation culpa id laborum. Magna laboris veniam sunt ex deserunt amet sit eiusmod anim consequat. Adipisicing nisi cupidatat dolor non eiusmod nulla excepteur. Voluptate reprehenderit aliqua voluptate consectetur irure elit eu. In mollit Lorem officia proident pariatur. Ex labore cupidatat reprehenderit sunt deserunt enim magna adipisicing.",
    "registered": "Friday, October 14, 2016 6:32 PM",
    "latitude": "32.533966",
    "longitude": "-66.79683",
    "tags": [
      "id",
      "dolore",
      "magna",
      "excepteur",
      "adipisicing"
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
        "name": "Maldonado Gallegos"
      },
      {
        "id": 1,
        "name": "Marian Hayes"
      },
      {
        "id": 2,
        "name": "Stanley Jensen"
      }
    ],
    "greeting": "Hello, Parks! You have 10 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5f032c759434572339d66a6a",
    "index": 77,
    "guid": "372414d5-a2e2-47e9-b04c-435091a18943",
    "isActive": true,
    "balance": "$3,178.93",
    "picture": "http://placehold.it/32x32",
    "age": 23,
    "eyeColor": "brown",
    "name": {
      "first": "Marguerite",
      "last": "Mosley"
    },
    "company": "QUILTIGEN",
    "email": "marguerite.mosley@quiltigen.biz",
    "phone": "+1 (859) 442-3370",
    "address": "101 Kimball Street, Lupton, Massachusetts, 9367",
    "about": "Veniam aliqua occaecat commodo proident ex irure. Id amet in adipisicing velit in sit fugiat occaecat ullamco adipisicing. Veniam labore nostrud tempor dolore pariatur.",
    "registered": "Tuesday, April 1, 2014 12:17 AM",
    "latitude": "83.823124",
    "longitude": "-15.635416",
    "tags": [
      "incididunt",
      "exercitation",
      "occaecat",
      "exercitation",
      "pariatur"
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
        "name": "Matthews Mccormick"
      },
      {
        "id": 1,
        "name": "James Case"
      },
      {
        "id": 2,
        "name": "Rosanna Travis"
      }
    ],
    "greeting": "Hello, Marguerite! You have 8 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5f032c7532dd9b9dccdd9d68",
    "index": 78,
    "guid": "34f4256f-b6b5-4ead-bd49-d8bbb34bb38d",
    "isActive": false,
    "balance": "$3,589.17",
    "picture": "http://placehold.it/32x32",
    "age": 32,
    "eyeColor": "brown",
    "name": {
      "first": "Bennett",
      "last": "Donovan"
    },
    "company": "MANUFACT",
    "email": "bennett.donovan@manufact.ca",
    "phone": "+1 (976) 432-3373",
    "address": "439 Prescott Place, Beaulieu, Louisiana, 2392",
    "about": "Ullamco officia laboris commodo id est laborum in exercitation nostrud. Ipsum sint excepteur consectetur exercitation excepteur. Consectetur qui exercitation cillum nulla dolor laborum. Nisi deserunt quis occaecat qui consequat occaecat excepteur reprehenderit ullamco excepteur magna occaecat.",
    "registered": "Thursday, January 12, 2017 10:12 PM",
    "latitude": "-6.276322",
    "longitude": "-11.641325",
    "tags": [
      "quis",
      "eiusmod",
      "nostrud",
      "quis",
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
        "name": "Tanner Watson"
      },
      {
        "id": 1,
        "name": "Sharron Allison"
      },
      {
        "id": 2,
        "name": "Lambert Herman"
      }
    ],
    "greeting": "Hello, Bennett! You have 8 unread messages.",
    "favoriteFruit": "strawberry"
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
    "_id": "5f032c754b7a28a165346f85",
    "index": 5,
    "guid": "5a02c359-6bd4-444c-a9fe-1c009dc49372",
    "isActive": false,
    "balance": "$3,249.63",
    "picture": "http://placehold.it/32x32",
    "age": 39,
    "eyeColor": "brown",
    "name": {
      "first": "Victoria",
      "last": "Solis"
    },
    "company": "FITCORE",
    "email": "victoria.solis@fitcore.biz",
    "phone": "+1 (840) 439-2588",
    "address": "979 Moore Place, Carbonville, Virgin Islands, 6830",
    "about": "Irure pariatur minim ipsum ex officia et voluptate ut dolor pariatur ut. Laborum aliqua nostrud anim deserunt et eu. Elit ullamco esse Lorem ea ullamco reprehenderit eu. Pariatur nostrud nisi veniam dolore duis.",
    "registered": "Friday, November 16, 2018 7:00 AM",
    "latitude": "-32.410106",
    "longitude": "162.043851",
    "tags": [
      "elit",
      "in",
      "amet",
      "nulla",
      "ipsum"
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
        "name": "Alana Kim"
      },
      {
        "id": 1,
        "name": "Keisha Ewing"
      },
      {
        "id": 2,
        "name": "Mccoy Richards"
      }
    ],
    "greeting": "Hello, Victoria! You have 8 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5f032c75c76adfa32b023c98",
    "index": 92,
    "guid": "5d557f8c-12ec-41a0-80e6-6c2877746b79",
    "isActive": true,
    "balance": "$2,527.09",
    "picture": "http://placehold.it/32x32",
    "age": 33,
    "eyeColor": "brown",
    "name": {
      "first": "Beth",
      "last": "Christensen"
    },
    "company": "AMTAP",
    "email": "beth.christensen@amtap.com",
    "phone": "+1 (882) 473-3887",
    "address": "826 Nixon Court, Goldfield, Wisconsin, 8497",
    "about": "Non velit officia magna tempor minim. Ea sunt laboris cillum excepteur non exercitation voluptate. Sunt qui exercitation cillum elit dolor labore laboris in aute adipisicing enim pariatur reprehenderit deserunt. Quis ad ipsum ut laboris laboris nulla. Non sint consequat eu esse et ea. Esse elit enim culpa ipsum.",
    "registered": "Wednesday, February 19, 2014 8:36 AM",
    "latitude": "38.742294",
    "longitude": "3.790919",
    "tags": [
      "aliqua",
      "eiusmod",
      "minim",
      "qui",
      "duis"
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
        "name": "Nancy Good"
      },
      {
        "id": 1,
        "name": "Mercado Booker"
      },
      {
        "id": 2,
        "name": "Christian Barr"
      }
    ],
    "greeting": "Hello, Beth! You have 10 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5f032c750ecb6faad68ddd00",
    "index": 94,
    "guid": "12411d76-5122-4d63-b6a0-e3df9d7a3a93",
    "isActive": true,
    "balance": "$1,806.41",
    "picture": "http://placehold.it/32x32",
    "age": 22,
    "eyeColor": "brown",
    "name": {
      "first": "Serrano",
      "last": "Griffin"
    },
    "company": "EZENTIA",
    "email": "serrano.griffin@ezentia.org",
    "phone": "+1 (800) 557-2564",
    "address": "540 Grafton Street, Benson, Minnesota, 4505",
    "about": "Irure qui et voluptate id deserunt sint culpa reprehenderit cillum consectetur ut eiusmod. Duis consequat in voluptate pariatur officia. Non eu nostrud ex tempor do in. Veniam do culpa ea enim consequat eiusmod sint. Enim tempor do do pariatur cillum dolore aliquip. Consequat excepteur ullamco fugiat mollit adipisicing Lorem eiusmod in deserunt. Proident occaecat laboris Lorem eiusmod.",
    "registered": "Friday, July 12, 2019 12:23 AM",
    "latitude": "53.231642",
    "longitude": "131.46672",
    "tags": [
      "amet",
      "aliqua",
      "consectetur",
      "qui",
      "est"
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
        "name": "Hester Head"
      },
      {
        "id": 1,
        "name": "Anne Cain"
      },
      {
        "id": 2,
        "name": "Finley Haley"
      }
    ],
    "greeting": "Hello, Serrano! You have 6 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5f032c754dc6777fe22e0818",
    "index": 39,
    "guid": "21157a10-c838-4727-b8e6-97041013c7d4",
    "isActive": false,
    "balance": "$1,151.42",
    "picture": "http://placehold.it/32x32",
    "age": 20,
    "eyeColor": "brown",
    "name": {
      "first": "Neal",
      "last": "Harvey"
    },
    "company": "BIOLIVE",
    "email": "neal.harvey@biolive.info",
    "phone": "+1 (802) 540-3165",
    "address": "466 Erasmus Street, Coinjock, Northern Mariana Islands, 7032",
    "about": "Quis aliquip eu ipsum veniam tempor qui anim ea reprehenderit veniam. Irure nulla anim ipsum minim exercitation do. Labore est minim nulla aute non dolor dolor eiusmod excepteur excepteur cupidatat ut.",
    "registered": "Monday, May 8, 2017 4:14 AM",
    "latitude": "76.478381",
    "longitude": "-6.506003",
    "tags": [
      "occaecat",
      "consectetur",
      "aliqua",
      "Lorem",
      "ea"
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
        "name": "Kelsey Benson"
      },
      {
        "id": 1,
        "name": "Carson Boyle"
      },
      {
        "id": 2,
        "name": "Madden Marshall"
      }
    ],
    "greeting": "Hello, Neal! You have 7 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5f032c75c50ddc558db0687d",
    "index": 50,
    "guid": "e41e9d42-1541-4986-95dc-dcb05197c802",
    "isActive": true,
    "balance": "$1,011.95",
    "picture": "http://placehold.it/32x32",
    "age": 22,
    "eyeColor": "brown",
    "name": {
      "first": "Vicky",
      "last": "Adams"
    },
    "company": "PORTALINE",
    "email": "vicky.adams@portaline.biz",
    "phone": "+1 (998) 584-2974",
    "address": "108 Sunnyside Avenue, Fairview, Utah, 1660",
    "about": "Deserunt laboris enim ut incididunt consectetur fugiat voluptate. Irure ex nostrud sunt magna reprehenderit reprehenderit voluptate esse culpa amet exercitation incididunt. Officia qui quis pariatur cupidatat magna. Commodo quis velit culpa eiusmod excepteur do non do. Minim tempor anim sunt duis id mollit cupidatat reprehenderit. Ut nulla sunt ullamco dolore deserunt dolor labore. Et laborum sint sit enim duis aliquip nostrud anim laborum.",
    "registered": "Tuesday, August 6, 2019 9:47 AM",
    "latitude": "35.249196",
    "longitude": "-162.462806",
    "tags": [
      "fugiat",
      "qui",
      "minim",
      "in",
      "exercitation"
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
        "name": "Baxter Roman"
      },
      {
        "id": 1,
        "name": "Hamilton Gallagher"
      },
      {
        "id": 2,
        "name": "Deloris Copeland"
      }
    ],
    "greeting": "Hello, Vicky! You have 7 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5f032c75666c8b759e7292ac",
    "index": 72,
    "guid": "4fedae28-59c7-45be-a7c1-081dce52572e",
    "isActive": true,
    "balance": "$1,769.99",
    "picture": "http://placehold.it/32x32",
    "age": 35,
    "eyeColor": "brown",
    "name": {
      "first": "Rosales",
      "last": "Fitzpatrick"
    },
    "company": "APPLICA",
    "email": "rosales.fitzpatrick@applica.name",
    "phone": "+1 (816) 429-2482",
    "address": "490 Ruby Street, Fannett, Michigan, 7406",
    "about": "Velit ullamco qui officia ad anim culpa consequat occaecat. Labore consequat exercitation nulla Lorem laborum dolor laborum officia eu occaecat consectetur. Pariatur irure laboris id aliquip consequat nisi occaecat deserunt nostrud veniam id. Reprehenderit reprehenderit dolor esse dolor voluptate adipisicing laboris do qui. Enim irure et dolor laboris Lorem eiusmod Lorem cillum reprehenderit mollit esse tempor. Veniam sit ea nostrud velit qui aliqua nisi. Amet aliqua laboris sunt laborum amet consectetur non aliquip et cupidatat do.",
    "registered": "Tuesday, December 4, 2018 10:38 PM",
    "latitude": "-79.615315",
    "longitude": "-169.784464",
    "tags": [
      "reprehenderit",
      "exercitation",
      "laborum",
      "ex",
      "id"
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
        "name": "Atkinson Poole"
      },
      {
        "id": 1,
        "name": "Garza Bradford"
      },
      {
        "id": 2,
        "name": "Alexander Waller"
      }
    ],
    "greeting": "Hello, Rosales! You have 5 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5f032c75d2ed43de176c8594",
    "index": 73,
    "guid": "0d7346ba-cb85-4654-ab17-8a471cd46d8b",
    "isActive": true,
    "balance": "$1,483.22",
    "picture": "http://placehold.it/32x32",
    "age": 24,
    "eyeColor": "brown",
    "name": {
      "first": "Harriet",
      "last": "Rollins"
    },
    "company": "PULZE",
    "email": "harriet.rollins@pulze.me",
    "phone": "+1 (805) 472-2670",
    "address": "561 Pulaski Street, Beyerville, Kansas, 7587",
    "about": "Adipisicing eu ullamco eiusmod aute magna sint. Sit quis nisi est id. Consectetur consequat sint eu proident occaecat elit. In velit velit duis sunt culpa consectetur eiusmod est enim et sint. Adipisicing proident nostrud ea occaecat exercitation occaecat culpa reprehenderit ea aliqua in fugiat qui. Do laboris ad ullamco id ad nulla occaecat duis deserunt. Velit esse aute eiusmod qui dolor duis qui.",
    "registered": "Tuesday, March 21, 2017 4:36 PM",
    "latitude": "-24.970995",
    "longitude": "-78.001875",
    "tags": [
      "nulla",
      "ut",
      "in",
      "ullamco",
      "veniam"
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
        "name": "Sonya Clayton"
      },
      {
        "id": 1,
        "name": "Phillips Mcleod"
      },
      {
        "id": 2,
        "name": "Willa Sparks"
      }
    ],
    "greeting": "Hello, Harriet! You have 7 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5f032c754e8be86d914d2aaf",
    "index": 10,
    "guid": "9629ee5d-7981-4aa5-a697-132b5bbf2579",
    "isActive": true,
    "balance": "$3,655.91",
    "picture": "http://placehold.it/32x32",
    "age": 26,
    "eyeColor": "brown",
    "name": {
      "first": "Jodie",
      "last": "Randolph"
    },
    "company": "NEBULEAN",
    "email": "jodie.randolph@nebulean.org",
    "phone": "+1 (956) 573-3089",
    "address": "244 Chester Court, Golconda, District Of Columbia, 8965",
    "about": "Eu ut irure eu aliqua in quis aute commodo laboris laborum quis ea ea. Pariatur exercitation aliquip tempor dolor minim irure esse. Incididunt consequat velit culpa laboris occaecat in veniam proident occaecat magna ut culpa tempor in. Deserunt irure culpa do commodo et et ut quis pariatur quis laborum nulla dolore. Aute sunt voluptate nostrud adipisicing officia exercitation enim ea.",
    "registered": "Wednesday, August 5, 2015 6:25 PM",
    "latitude": "54.819903",
    "longitude": "103.152486",
    "tags": [
      "tempor",
      "nostrud",
      "irure",
      "aute",
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
        "name": "Mckinney Melendez"
      },
      {
        "id": 1,
        "name": "Solomon Mcmillan"
      },
      {
        "id": 2,
        "name": "Young Reid"
      }
    ],
    "greeting": "Hello, Jodie! You have 7 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5f032c75152ffe6d6a8ddea1",
    "index": 25,
    "guid": "0380cde2-c023-428b-a3aa-26af6519ce3d",
    "isActive": false,
    "balance": "$3,902.66",
    "picture": "http://placehold.it/32x32",
    "age": 25,
    "eyeColor": "brown",
    "name": {
      "first": "Marisa",
      "last": "Vinson"
    },
    "company": "COMCUBINE",
    "email": "marisa.vinson@comcubine.me",
    "phone": "+1 (875) 526-2492",
    "address": "119 Thornton Street, Romeville, Kentucky, 6639",
    "about": "Adipisicing Lorem sit nostrud tempor. Culpa amet proident culpa reprehenderit amet laboris proident irure voluptate commodo. Excepteur voluptate excepteur id ut fugiat proident deserunt nostrud velit aliquip excepteur. Non veniam voluptate eiusmod nisi occaecat magna incididunt reprehenderit in nisi voluptate consectetur culpa veniam. Velit consectetur aute nisi dolore eu. Proident tempor pariatur laborum in incididunt anim nisi amet id quis exercitation. Incididunt ad duis ipsum aute tempor nulla eu tempor nisi voluptate aliquip eu.",
    "registered": "Wednesday, September 21, 2016 1:46 AM",
    "latitude": "35.815968",
    "longitude": "175.837829",
    "tags": [
      "laboris",
      "incididunt",
      "Lorem",
      "sit",
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
        "name": "Fannie Trevino"
      },
      {
        "id": 1,
        "name": "Mullen Daniels"
      },
      {
        "id": 2,
        "name": "Black Shaw"
      }
    ],
    "greeting": "Hello, Marisa! You have 6 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5f032c750104360e3b611010",
    "index": 46,
    "guid": "656efed0-3c66-4079-a659-87719c9eaae4",
    "isActive": true,
    "balance": "$2,278.86",
    "picture": "http://placehold.it/32x32",
    "age": 31,
    "eyeColor": "brown",
    "name": {
      "first": "Elva",
      "last": "Byers"
    },
    "company": "KOG",
    "email": "elva.byers@kog.org",
    "phone": "+1 (918) 557-2835",
    "address": "650 Stewart Street, Needmore, Puerto Rico, 6737",
    "about": "Quis consequat nulla nulla Lorem et. Id anim anim occaecat ut labore nisi ut aute. Id nulla mollit aliquip id duis ullamco laboris. Exercitation occaecat est id nulla. Quis reprehenderit qui minim quis pariatur consequat deserunt ipsum aliqua. Laboris in sunt sint sit laborum fugiat duis.",
    "registered": "Friday, October 6, 2017 3:55 PM",
    "latitude": "-8.263096",
    "longitude": "-61.797263",
    "tags": [
      "duis",
      "dolore",
      "occaecat",
      "incididunt",
      "nisi"
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
        "name": "Sanford Mills"
      },
      {
        "id": 1,
        "name": "Tonya Mann"
      },
      {
        "id": 2,
        "name": "Gilbert Ayala"
      }
    ],
    "greeting": "Hello, Elva! You have 10 unread messages.",
    "favoriteFruit": "apple"
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
    "_id": "5f032c75bf773af1bb3b0594",
    "index": 79,
    "guid": "0098bbc6-161c-4b15-9493-bff3f99d6b27",
    "isActive": false,
    "balance": "$2,230.25",
    "picture": "http://placehold.it/32x32",
    "age": 25,
    "eyeColor": "brown",
    "name": {
      "first": "Vilma",
      "last": "Brewer"
    },
    "company": "MICRONAUT",
    "email": "vilma.brewer@micronaut.co.uk",
    "phone": "+1 (923) 565-2019",
    "address": "370 Wilson Avenue, Titanic, Maine, 1961",
    "about": "Labore duis adipisicing veniam non excepteur laboris consectetur do anim Lorem. Eu nostrud sunt ipsum aute laboris elit reprehenderit esse esse deserunt aliquip sit aute. Labore mollit nulla proident anim commodo tempor sit velit ea. Aute dolor commodo qui exercitation ut aliquip deserunt sint.",
    "registered": "Saturday, July 19, 2014 12:46 AM",
    "latitude": "-37.627578",
    "longitude": "-124.789192",
    "tags": [
      "sit",
      "non",
      "ipsum",
      "adipisicing",
      "Lorem"
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
        "name": "Contreras Zamora"
      },
      {
        "id": 1,
        "name": "Sawyer Patel"
      },
      {
        "id": 2,
        "name": "Virginia Tyler"
      }
    ],
    "greeting": "Hello, Vilma! You have 5 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5f032c752f5f0db369cec1f4",
    "index": 82,
    "guid": "2f15d065-0f82-4173-a16e-b3c2db805dea",
    "isActive": true,
    "balance": "$1,460.76",
    "picture": "http://placehold.it/32x32",
    "age": 22,
    "eyeColor": "brown",
    "name": {
      "first": "Deidre",
      "last": "Vazquez"
    },
    "company": "KENGEN",
    "email": "deidre.vazquez@kengen.org",
    "phone": "+1 (891) 522-2869",
    "address": "916 Lynch Street, Hiwasse, Iowa, 1100",
    "about": "Sint nostrud elit aliqua nulla adipisicing proident irure fugiat duis exercitation. Velit ad adipisicing incididunt enim occaecat pariatur tempor irure aliquip veniam duis ex elit aliquip. Commodo nisi occaecat aliqua magna non tempor id culpa cillum. Exercitation eu aliqua anim ea. Fugiat laborum id eu tempor reprehenderit non duis veniam. Quis sit in id est dolor sunt excepteur quis velit commodo duis pariatur reprehenderit voluptate.",
    "registered": "Sunday, April 16, 2017 9:09 PM",
    "latitude": "-88.651226",
    "longitude": "-17.901705",
    "tags": [
      "dolore",
      "amet",
      "consequat",
      "est",
      "cupidatat"
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
        "name": "Roberson Gentry"
      },
      {
        "id": 1,
        "name": "Taylor Sanders"
      },
      {
        "id": 2,
        "name": "Dunlap Moran"
      }
    ],
    "greeting": "Hello, Deidre! You have 6 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5f032c755aa1ead14f20a6df",
    "index": 83,
    "guid": "4411f744-31f4-42a2-ba50-4cd967a54ae1",
    "isActive": true,
    "balance": "$1,875.75",
    "picture": "http://placehold.it/32x32",
    "age": 26,
    "eyeColor": "brown",
    "name": {
      "first": "Reyna",
      "last": "Nolan"
    },
    "company": "PLUTORQUE",
    "email": "reyna.nolan@plutorque.tv",
    "phone": "+1 (835) 477-3159",
    "address": "930 Evans Street, Chilton, Kentucky, 9166",
    "about": "Quis dolore enim labore ut quis ipsum consectetur commodo anim nulla voluptate eiusmod. Est aute commodo ad nisi ipsum esse ad ipsum consectetur. Anim laborum est labore voluptate ut cillum magna est eu officia culpa. Labore mollit ipsum ea sunt ut enim do elit deserunt eiusmod labore sint ut. Do cillum quis ut reprehenderit pariatur officia proident magna pariatur incididunt sunt consectetur.",
    "registered": "Saturday, November 11, 2017 7:37 AM",
    "latitude": "52.201245",
    "longitude": "68.057664",
    "tags": [
      "exercitation",
      "esse",
      "est",
      "est",
      "ipsum"
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
        "name": "Jeanie Wynn"
      },
      {
        "id": 1,
        "name": "Tammi Hess"
      },
      {
        "id": 2,
        "name": "Reynolds Pace"
      }
    ],
    "greeting": "Hello, Reyna! You have 8 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5f032c753951dda2c6fcaf0b",
    "index": 90,
    "guid": "ecbb7259-90ea-4a87-b5c9-de12e79dc6b0",
    "isActive": false,
    "balance": "$3,101.27",
    "picture": "http://placehold.it/32x32",
    "age": 26,
    "eyeColor": "brown",
    "name": {
      "first": "Kellie",
      "last": "Campbell"
    },
    "company": "ARTIQ",
    "email": "kellie.campbell@artiq.ca",
    "phone": "+1 (909) 576-2465",
    "address": "781 Clara Street, Westerville, Marshall Islands, 9759",
    "about": "Irure ea dolore fugiat labore aute tempor. Fugiat exercitation sunt do aliqua cupidatat amet exercitation. Incididunt pariatur sit fugiat tempor reprehenderit velit aute elit commodo ullamco dolor velit non. Occaecat eiusmod aliquip minim dolore consectetur aliquip qui proident eiusmod. Eu commodo ut tempor dolore reprehenderit pariatur aliquip incididunt incididunt consequat laborum incididunt ullamco anim. Incididunt ullamco aute consectetur commodo magna magna exercitation ex esse pariatur officia. Officia laborum commodo aute reprehenderit et tempor anim officia incididunt qui aliqua voluptate deserunt.",
    "registered": "Wednesday, January 9, 2019 9:36 AM",
    "latitude": "-45.416137",
    "longitude": "51.401394",
    "tags": [
      "pariatur",
      "excepteur",
      "et",
      "qui",
      "ex"
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
        "name": "Kristi Hill"
      },
      {
        "id": 1,
        "name": "Lilly Blanchard"
      },
      {
        "id": 2,
        "name": "Clements Solomon"
      }
    ],
    "greeting": "Hello, Kellie! You have 8 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5f032c75cdfb7ec8ea6af78c",
    "index": 40,
    "guid": "4f2937e2-dea2-4cc8-864f-7ee47fc953f7",
    "isActive": true,
    "balance": "$1,836.92",
    "picture": "http://placehold.it/32x32",
    "age": 21,
    "eyeColor": "brown",
    "name": {
      "first": "Aguirre",
      "last": "Hodge"
    },
    "company": "PROFLEX",
    "email": "aguirre.hodge@proflex.us",
    "phone": "+1 (950) 483-3795",
    "address": "435 Lloyd Court, Whitestone, Washington, 8655",
    "about": "Labore enim id quis mollit labore labore minim. Non ad et ad enim ut veniam irure ad id cillum. Do veniam nulla anim aute mollit sint id eu incididunt dolor exercitation occaecat anim. Labore ipsum laborum culpa occaecat ipsum eiusmod in laboris reprehenderit ad ea esse magna esse.",
    "registered": "Thursday, October 2, 2014 7:22 PM",
    "latitude": "-28.719151",
    "longitude": "124.248659",
    "tags": [
      "commodo",
      "adipisicing",
      "laborum",
      "nisi",
      "non"
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
        "name": "Blair Michael"
      },
      {
        "id": 1,
        "name": "Blackburn Jimenez"
      },
      {
        "id": 2,
        "name": "Hilda Moon"
      }
    ],
    "greeting": "Hello, Aguirre! You have 10 unread messages.",
    "favoriteFruit": "apple"
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