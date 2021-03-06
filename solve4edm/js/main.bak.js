// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

function initAutocomplete() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 53.9333, lng: -116.5765},
    zoom: 5
  });

  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  //draw polygon for Cypress 
  var outerCoords = [
          {lat: 50.5718410, lng: -110.0050918},
          {lat: 50.8349621, lng: -110.0051348},
          {lat: 50.1351609, lng: -110.0047639},
          {lat: 50.2224963, lng: -110.0050535},
          {lat: 50.3317206, lng: -110.0050723},
          {lat: 50.3464025, lng: -110.0051833},
          {lat: 50.3680521, lng: -110.0050587},
          {lat: 50.5718410, lng: -110.0050918},
          {lat: 49.5236665, lng: -110.0050914},
          {lat: 49.5745870, lng: -110.0051015},
          {lat: 49.5821319, lng: -110.0051030},
          {lat: 49.6110633, lng: -110.0051088},
          {lat: 49.6475868, lng: -110.0051026},
          {lat: 49.6547692, lng: -110.0051014},
          {lat: 49.6692976, lng: -110.0050990},
          {lat: 50.0477738, lng: -110.0050347},
          {lat: 50.1351609, lng: -110.0047639},
          {lat: 48.9996092, lng: -110.0050777},
          {lat: 49.0000000, lng: -110.0050778},
          {lat: 49.0433396, lng: -110.0050860},
          {lat: 49.5236665, lng: -110.0050914},
          {lat: 48.9988170, lng: -110.5894948},
          {lat: 48.9989167, lng: -110.5141667},
          {lat: 48.9991389, lng: -110.3533056},
          {lat: 48.9993333, lng: -110.2275000},
          {lat: 48.9993889, lng: -110.1916944},
          {lat: 48.9995278, lng: -110.0798889},
          {lat: 48.9996092, lng: -110.0050777},
          {lat: 50.0201196, lng: -110.9874022},
          {lat: 49.8581419, lng: -110.9873199},
          {lat: 49.7844810, lng: -110.9873199},
          {lat: 49.7844810, lng: -110.9337616},
          {lat: 49.7844810, lng: -110.8185768},
          {lat: 49.7283657, lng: -110.8185768},
          {lat: 49.7283657, lng: -110.7848454},
          {lat: 49.7283657, lng: -110.7728291},
          {lat: 49.6834852, lng: -110.7728291},
          {lat: 49.6834852, lng: -110.7608128},
          {lat: 49.6763764, lng: -110.7608128},
          {lat: 49.6763764, lng: -110.7728291},
          {lat: 49.6694888, lng: -110.7728291},
          {lat: 49.6694888, lng: -110.6186771},
          {lat: 49.6116832, lng: -110.6186771},
          {lat: 49.6116832, lng: -110.5640888},
          {lat: 49.5513590, lng: -110.5640888},
          {lat: 49.5451220, lng: -110.5640888},
          {lat: 49.5451220, lng: -110.5331898},
          {lat: 49.4353989, lng: -110.5331898},
          {lat: 49.2522043, lng: -110.5331898},
          {lat: 49.2522043, lng: -110.5815983},
          {lat: 49.2522043, lng: -110.5936146},
          {lat: 49.1979429, lng: -110.5936146},
          {lat: 49.1979429, lng: -110.5894947},
          {lat: 48.9988170, lng: -110.5894948},
          {lat: 49.8978109, lng: -111.6462690},
          {lat: 49.8974841, lng: -111.6359654},
          {lat: 49.9004009, lng: -111.6017278},
          {lat: 49.9055560, lng: -111.5872220},
          {lat: 49.9105229, lng: -111.5780081},
          {lat: 49.9181074, lng: -111.5696195},
          {lat: 49.9239269, lng: -111.5584402},
          {lat: 49.9248249, lng: -111.5434265},
          {lat: 49.9227968, lng: -111.5283767},
          {lat: 49.9156536, lng: -111.4984691},
          {lat: 49.9071978, lng: -111.4834406},
          {lat: 49.9029934, lng: -111.4681328},
          {lat: 49.9034832, lng: -111.4567804},
          {lat: 49.9043229, lng: -111.4464175},
          {lat: 49.9099341, lng: -111.4327669},
          {lat: 49.9165541, lng: -111.4221055},
          {lat: 49.9243027, lng: -111.4187591},
          {lat: 49.9364910, lng: -111.4262863},
          {lat: 49.9455283, lng: -111.4250148},
          {lat: 49.9553184, lng: -111.4109220},
          {lat: 49.9637891, lng: -111.4088215},
          {lat: 49.9755658, lng: -111.4145863},
          {lat: 49.9802615, lng: -111.4111395},
          {lat: 49.9807905, lng: -111.4068758},
          {lat: 49.9788738, lng: -111.4004794},
          {lat: 49.9701730, lng: -111.3896904},
          {lat: 49.9654578, lng: -111.3811351},
          {lat: 49.9653322, lng: -111.3732017},
          {lat: 49.9693466, lng: -111.3668026},
          {lat: 49.9740083, lng: -111.3659715},
          {lat: 49.9847970, lng: -111.3634815},
          {lat: 49.9925649, lng: -111.3527694},
          {lat: 50.0046929, lng: -111.3387046},
          {lat: 50.0166507, lng: -111.3300818},
          {lat: 50.0187278, lng: -111.3254854},
          {lat: 50.0173348, lng: -111.3094705},
          {lat: 50.0183594, lng: -111.2987466},
          {lat: 50.0249347, lng: -111.2930399},
          {lat: 50.0344296, lng: -111.2926276},
          {lat: 50.0420621, lng: -111.2905213},
          {lat: 50.0492385, lng: -111.2864986},
          {lat: 50.0529162, lng: -111.2759312},
          {lat: 50.0519598, lng: -111.2610478},
          {lat: 50.0494642, lng: -111.2553561},
          {lat: 50.0506464, lng: -111.2479978},
          {lat: 50.0537437, lng: -111.2204354},
          {lat: 50.0521620, lng: -111.2080573},
          {lat: 50.0549909, lng: -111.1867624},
          {lat: 50.0579571, lng: -111.1777532},
          {lat: 50.0583330, lng: -111.1655560},
          {lat: 50.0629046, lng: -111.1496749},
          {lat: 50.0699944, lng: -111.1338134},
          {lat: 50.0706723, lng: -111.1265766},
          {lat: 50.0688886, lng: -111.1229713},
          {lat: 50.0633762, lng: -111.1165662},
          {lat: 50.0567194, lng: -111.1055691},
          {lat: 50.0506411, lng: -111.0931856},
          {lat: 50.0480795, lng: -111.0819038},
          {lat: 50.0358929, lng: -111.0705493},
          {lat: 50.0353059, lng: -111.0641226},
          {lat: 50.0346878, lng: -111.0542555},
          {lat: 50.0320123, lng: -111.0475855},
          {lat: 50.0153711, lng: -111.0409232},
          {lat: 50.0130063, lng: -111.0346829},
          {lat: 50.0133739, lng: -111.0225818},
          {lat: 50.0167763, lng: -111.0191279},
          {lat: 50.0182425, lng: -111.0144049},
          {lat: 50.0180172, lng: -111.0007624},
          {lat: 50.0201196, lng: -110.9874022},
          {lat: 49.9287263, lng: -111.6858925},
          {lat: 49.9242782, lng: -111.6860831},
          {lat: 49.9111992, lng: -111.6792000},
          {lat: 49.9030407, lng: -111.6687865},
          {lat: 49.8980532, lng: -111.6539092},
          {lat: 49.8978109, lng: -111.6462690},
          {lat: 50.1356271, lng: -111.6705461},
          {lat: 50.1311608, lng: -111.6675599},
          {lat: 50.1271991, lng: -111.6642984},
          {lat: 50.1259886, lng: -111.6615518},
          {lat: 50.1215863, lng: -111.6527971},
          {lat: 50.1178440, lng: -111.6452440},
          {lat: 50.1127805, lng: -111.6385492},
          {lat: 50.1088173, lng: -111.6346010},
          {lat: 50.1054044, lng: -111.6313394},
          {lat: 50.1027619, lng: -111.6299661},
          {lat: 50.1006698, lng: -111.6260179},
          {lat: 50.0979170, lng: -111.6201814},
          {lat: 50.0964854, lng: -111.6131433},
          {lat: 50.0927412, lng: -111.6062768},
          {lat: 50.0891068, lng: -111.6052469},
          {lat: 50.0845910, lng: -111.6043885},
          {lat: 50.0804052, lng: -111.6067918},
          {lat: 50.0785325, lng: -111.6134866},
          {lat: 50.0755580, lng: -111.6198381},
          {lat: 50.0728038, lng: -111.6236146},
          {lat: 50.0676253, lng: -111.6268762},
          {lat: 50.0642094, lng: -111.6265329},
          {lat: 50.0606830, lng: -111.6230996},
          {lat: 50.0578177, lng: -111.6182931},
          {lat: 50.0549521, lng: -111.6107400},
          {lat: 50.0529682, lng: -111.6052469},
          {lat: 50.0505433, lng: -111.6012986},
          {lat: 50.0490001, lng: -111.5954622},
          {lat: 50.0477876, lng: -111.5877374},
          {lat: 50.0448112, lng: -111.5813859},
          {lat: 50.0399605, lng: -111.5736612},
          {lat: 50.0364323, lng: -111.5716012},
          {lat: 50.0331245, lng: -111.5733178},
          {lat: 50.0308088, lng: -111.5812143},
          {lat: 50.0309191, lng: -111.5867074},
          {lat: 50.0295958, lng: -111.5911706},
          {lat: 50.0254053, lng: -111.5940889},
          {lat: 50.0222069, lng: -111.5930589},
          {lat: 50.0181260, lng: -111.5915139},
          {lat: 50.0138241, lng: -111.5901407},
          {lat: 50.0091909, lng: -111.5889390},
          {lat: 50.0051088, lng: -111.5889390},
          {lat: 50.0023505, lng: -111.5882524},
          {lat: 49.9967230, lng: -111.5884240},
          {lat: 49.9949574, lng: -111.5896257},
          {lat: 49.9919777, lng: -111.5916856},
          {lat: 49.9891083, lng: -111.5949472},
          {lat: 49.9863490, lng: -111.5975221},
          {lat: 49.9855764, lng: -111.6011270},
          {lat: 49.9834793, lng: -111.6035302},
          {lat: 49.9823754, lng: -111.6088517},
          {lat: 49.9807197, lng: -111.6110833},
          {lat: 49.9803885, lng: -111.6164048},
          {lat: 49.9787327, lng: -111.6182931},
          {lat: 49.9775184, lng: -111.6232713},
          {lat: 49.9752001, lng: -111.6267045},
          {lat: 49.9749793, lng: -111.6316827},
          {lat: 49.9752001, lng: -111.6342576},
          {lat: 49.9758624, lng: -111.6402658},
          {lat: 49.9769664, lng: -111.6452440},
          {lat: 49.9776288, lng: -111.6517671},
          {lat: 49.9771872, lng: -111.6560586},
          {lat: 49.9752001, lng: -111.6605218},
          {lat: 49.9703423, lng: -111.6629251},
          {lat: 49.9647110, lng: -111.6668733},
          {lat: 49.9602939, lng: -111.6684182},
          {lat: 49.9564286, lng: -111.6721948},
          {lat: 49.9546615, lng: -111.6785463},
          {lat: 49.9528944, lng: -111.6847261},
          {lat: 49.9525630, lng: -111.6881593},
          {lat: 49.9514585, lng: -111.6921075},
          {lat: 49.9489921, lng: -111.6947105},
          {lat: 49.9452736, lng: -111.6955131},
          {lat: 49.9350464, lng: -111.6879689},
          {lat: 49.9318435, lng: -111.6858822},
          {lat: 49.9287263, lng: -111.6858925},
          {lat: 50.7177814, lng: -111.3893760},
          {lat: 50.7049297, lng: -111.3891318},
          {lat: 50.6786196, lng: -111.3891121},
          {lat: 50.6596679, lng: -111.3890689},
          {lat: 50.6085685, lng: -111.3890213},
          {lat: 50.5720033, lng: -111.3889564},
          {lat: 50.5719721, lng: -111.3792941},
          {lat: 50.5639321, lng: -111.3793284},
          {lat: 50.5509642, lng: -111.3792244},
          {lat: 50.4700614, lng: -111.3792184},
          {lat: 50.4555095, lng: -111.3792443},
          {lat: 50.3026676, lng: -111.3790680},
          {lat: 50.2807960, lng: -111.3792790},
          {lat: 50.2516428, lng: -111.3794945},
          {lat: 50.2224583, lng: -111.3792872},
          {lat: 50.2225132, lng: -111.3696742},
          {lat: 50.1936298, lng: -111.3694238},
          {lat: 50.1353933, lng: -111.3695455},
          {lat: 50.1356271, lng: -111.3916683},
          {lat: 50.1356271, lng: -111.4536381},
          {lat: 50.1352970, lng: -111.4835348},
          {lat: 50.1353064, lng: -111.5062011},
          {lat: 50.1356271, lng: -111.5271091},
          {lat: 50.1353787, lng: -111.5854861},
          {lat: 50.1356271, lng: -111.6705461},
          {lat: 50.6149248, lng: -110.2813625},
          {lat: 50.7183355, lng: -110.2813625},
          {lat: 50.7177814, lng: -111.3893760},
          {lat: 50.6149248, lng: -110.2813625},
          {lat: 50.6186064, lng: -110.2788730},
          {lat: 50.6206929, lng: -110.2723373},
          {lat: 50.6216999, lng: -110.2600406},
          {lat: 50.6247092, lng: -110.2517240},
          {lat: 50.6270383, lng: -110.2404012},
          {lat: 50.6305683, lng: -110.2134188},
          {lat: 50.6334891, lng: -110.1920689},
          {lat: 50.6369487, lng: -110.1872060},
          {lat: 50.6429443, lng: -110.1865987},
          {lat: 50.6459825, lng: -110.1835262},
          {lat: 50.6506332, lng: -110.1679717},
          {lat: 50.6565184, lng: -110.1594405},
          {lat: 50.6598304, lng: -110.1577932},
          {lat: 50.6641034, lng: -110.1520836},
          {lat: 50.6681573, lng: -110.1417432},
          {lat: 50.6789602, lng: -110.1314689},
          {lat: 50.6853289, lng: -110.1334601},
          {lat: 50.6902607, lng: -110.1343042},
          {lat: 50.6946536, lng: -110.1296510},
          {lat: 50.6981593, lng: -110.1281597},
          {lat: 50.7025521, lng: -110.1313207},
          {lat: 50.7108186, lng: -110.1404862},
          {lat: 50.7201432, lng: -110.1407256},
          {lat: 50.7262713, lng: -110.1327357},
          {lat: 50.7304547, lng: -110.1191198},
          {lat: 50.7371369, lng: -110.1054790},
          {lat: 50.7377966, lng: -110.0985726},
          {lat: 50.7336462, lng: -110.0845104},
          {lat: 50.7335242, lng: -110.0803208},
          {lat: 50.7298615, lng: -110.0646610},
          {lat: 50.7314934, lng: -110.0575647},
          {lat: 50.7388546, lng: -110.0510422},
          {lat: 50.7459738, lng: -110.0532118},
          {lat: 50.7562394, lng: -110.0584252},
          {lat: 50.7825036, lng: -110.0730716},
          {lat: 50.7925031, lng: -110.0835161},
          {lat: 50.7968168, lng: -110.0838510},
          {lat: 50.8031076, lng: -110.0726438},
          {lat: 50.8158942, lng: -110.0584075},
          {lat: 50.8220681, lng: -110.0457525},
          {lat: 50.8300679, lng: -110.0235583},
          {lat: 50.8343921, lng: -110.0070810},
          {lat: 50.8349621, lng: -110.0051348}
  ];

  // Define the LatLng coordinates for the polygon's inner path.
  // Note that the points forming the inner path are wound in the
  // opposite direction to those in the outer path, to form the hole.
  var innerCoords = [
          {lat: 50.0988912, lng: -110.7554292},
          {lat: 50.1135772, lng: -110.7554714},
          {lat: 50.1134803, lng: -110.7326380},
          {lat: 50.1134819, lng: -110.7320102},
          {lat: 50.1134063, lng: -110.6899008},
          {lat: 50.1123557, lng: -110.6889510},
          {lat: 50.1113619, lng: -110.6879602},
          {lat: 50.1099805, lng: -110.6869767},
          {lat: 50.1074966, lng: -110.6863354},
          {lat: 50.1061361, lng: -110.6867538},
          {lat: 50.1053594, lng: -110.6872166},
          {lat: 50.1034177, lng: -110.6888655},
          {lat: 50.1014398, lng: -110.6905177},
          {lat: 50.0999804, lng: -110.6914245},
          {lat: 50.0980166, lng: -110.6922104},
          {lat: 50.0970760, lng: -110.6926528},
          {lat: 50.0961643, lng: -110.6925405},
          {lat: 50.0949831, lng: -110.6918681},
          {lat: 50.0936697, lng: -110.6908096},
          {lat: 50.0919296, lng: -110.6885135},
          {lat: 50.0911406, lng: -110.6872092},
          {lat: 50.0903087, lng: -110.6823752},
          {lat: 50.0895977, lng: -110.6760990},
          {lat: 50.0893299, lng: -110.6727969},
          {lat: 50.0900151, lng: -110.6717810},
          {lat: 50.0906967, lng: -110.6704497},
          {lat: 50.0925907, lng: -110.6678589},
          {lat: 50.0941157, lng: -110.6657175},
          {lat: 50.0952160, lng: -110.6650075},
          {lat: 50.0964326, lng: -110.6638118},
          {lat: 50.0970359, lng: -110.6629011},
          {lat: 50.0978922, lng: -110.6604076},
          {lat: 50.0985769, lng: -110.6576866},
          {lat: 50.0989942, lng: -110.6547517},
          {lat: 50.0991892, lng: -110.6540031},
          {lat: 50.0993100, lng: -110.6516256},
          {lat: 50.0991364, lng: -110.6493840},
          {lat: 50.0986298, lng: -110.6468661},
          {lat: 50.0977258, lng: -110.6446818},
          {lat: 50.0962615, lng: -110.6432492},
          {lat: 50.0943042, lng: -110.6426663},
          {lat: 50.0926399, lng: -110.6425031},
          {lat: 50.0915109, lng: -110.6429885},
          {lat: 50.0899665, lng: -110.6443238},
          {lat: 50.0874174, lng: -110.6473019},
          {lat: 50.0869756, lng: -110.6484564},
          {lat: 50.0855504, lng: -110.6507279},
          {lat: 50.0832927, lng: -110.6532705},
          {lat: 50.0809935, lng: -110.6551228},
          {lat: 50.0801096, lng: -110.6561935},
          {lat: 50.0787286, lng: -110.6573569},
          {lat: 50.0775342, lng: -110.6581219},
          {lat: 50.0764368, lng: -110.6582783},
          {lat: 50.0757355, lng: -110.6582665},
          {lat: 50.0750322, lng: -110.6579979},
          {lat: 50.0737550, lng: -110.6566728},
          {lat: 50.0726665, lng: -110.6545790},
          {lat: 50.0720835, lng: -110.6522107},
          {lat: 50.0718531, lng: -110.6486653},
          {lat: 50.0725462, lng: -110.6442502},
          {lat: 50.0731283, lng: -110.6417120},
          {lat: 50.0733842, lng: -110.6407717},
          {lat: 50.0739068, lng: -110.6358299},
          {lat: 50.0738453, lng: -110.6347573},
          {lat: 50.0740500, lng: -110.6340167},
          {lat: 50.0746800, lng: -110.6284674},
          {lat: 50.0739386, lng: -110.6260792},
          {lat: 50.0736696, lng: -110.6253721},
          {lat: 50.0732393, lng: -110.6248767},
          {lat: 50.0711127, lng: -110.6242858},
          {lat: 50.0696440, lng: -110.6244654},
          {lat: 50.0684181, lng: -110.6235320},
          {lat: 50.0660434, lng: -110.6219305},
          {lat: 50.0656250, lng: -110.6222442},
          {lat: 50.0646175, lng: -110.6223694},
          {lat: 50.0634931, lng: -110.6234159},
          {lat: 50.0623551, lng: -110.6264023},
          {lat: 50.0612422, lng: -110.6314508},
          {lat: 50.0606723, lng: -110.6377199},
          {lat: 50.0609891, lng: -110.6391428},
          {lat: 50.0605750, lng: -110.6437309},
          {lat: 50.0598645, lng: -110.6461674},
          {lat: 50.0587044, lng: -110.6481755},
          {lat: 50.0569496, lng: -110.6499901},
          {lat: 50.0555590, lng: -110.6504182},
          {lat: 50.0535992, lng: -110.6499170},
          {lat: 50.0516616, lng: -110.6483618},
          {lat: 50.0500845, lng: -110.6447438},
          {lat: 50.0493739, lng: -110.6445206},
          {lat: 50.0482207, lng: -110.6410267},
          {lat: 50.0475345, lng: -110.6398423},
          {lat: 50.0460193, lng: -110.6376049},
          {lat: 50.0435599, lng: -110.6355464},
          {lat: 50.0425527, lng: -110.6358044},
          {lat: 50.0413710, lng: -110.6362479},
          {lat: 50.0410497, lng: -110.6368299},
          {lat: 50.0405311, lng: -110.6371662},
          {lat: 50.0405446, lng: -110.6366854},
          {lat: 50.0405549, lng: -110.6303622},
          {lat: 50.0260569, lng: -110.6302020},
          {lat: 50.0260555, lng: -110.6274346},
          {lat: 50.0232048, lng: -110.6298265},
          {lat: 50.0226550, lng: -110.6289141},
          {lat: 50.0218344, lng: -110.6279925},
          {lat: 50.0206847, lng: -110.6270705},
          {lat: 50.0197863, lng: -110.6261252},
          {lat: 50.0186494, lng: -110.6246345},
          {lat: 50.0186503, lng: -110.6236039},
          {lat: 50.0186544, lng: -110.6190279},
          {lat: 50.0108203, lng: -110.6190136},
          {lat: 50.0099928, lng: -110.6181739},
          {lat: 50.0094757, lng: -110.6178248},
          {lat: 50.0088322, lng: -110.6175862},
          {lat: 50.0083342, lng: -110.6175090},
          {lat: 50.0079100, lng: -110.6175177},
          {lat: 50.0074978, lng: -110.6175603},
          {lat: 50.0069186, lng: -110.6177846},
          {lat: 50.0003700, lng: -110.6219139},
          {lat: 49.9998212, lng: -110.6222388},
          {lat: 49.9992377, lng: -110.6223795},
          {lat: 49.9987708, lng: -110.6224206},
          {lat: 49.9983022, lng: -110.6223866},
          {lat: 49.9976105, lng: -110.6221746},
          {lat: 49.9952017, lng: -110.6213035},
          {lat: 49.9947718, lng: -110.6211752},
          {lat: 49.9943418, lng: -110.6210655},
          {lat: 49.9932672, lng: -110.6209260},
          {lat: 49.9917840, lng: -110.6209394},
          {lat: 49.9912729, lng: -110.6208578},
          {lat: 49.9907975, lng: -110.6206746},
          {lat: 49.9904413, lng: -110.6204676},
          {lat: 49.9900913, lng: -110.6201916},
          {lat: 49.9898638, lng: -110.6199614},
          {lat: 49.9895477, lng: -110.6195908},
          {lat: 49.9895482, lng: -110.6206051},
          {lat: 49.9895754, lng: -110.7437601},
          {lat: 49.9902159, lng: -110.7437739},
          {lat: 50.0186658, lng: -110.7438047},
          {lat: 50.0186890, lng: -110.7780968},
          {lat: 50.0333780, lng: -110.7781243},
          {lat: 50.0334531, lng: -110.8009864},
          {lat: 50.0523044, lng: -110.8007823},
          {lat: 50.0988912, lng: -110.7554292},
          {lat: 50.0988917, lng: -110.7784077},
          {lat: 50.0917888, lng: -110.7783004},
          {lat: 50.0918301, lng: -110.8012172},
          {lat: 50.0769739, lng: -110.8010885},
          {lat: 50.0770275, lng: -110.8116250},
          {lat: 50.0770289, lng: -110.8119031},
          {lat: 50.0702209, lng: -110.8118194},
          {lat: 50.0700770, lng: -110.8117260},
          {lat: 50.0693696, lng: -110.8115018},
          {lat: 50.0686742, lng: -110.8114645},
          {lat: 50.0683624, lng: -110.8114271},
          {lat: 50.0679547, lng: -110.8118007},
          {lat: 50.0670902, lng: -110.8117384},
          {lat: 50.0655390, lng: -110.8113148},
          {lat: 50.0644925, lng: -110.8113361},
          {lat: 50.0637244, lng: -110.8111924},
          {lat: 50.0628016, lng: -110.8112547},
          {lat: 50.0621895, lng: -110.8112960},
          {lat: 50.0618409, lng: -110.8115491},
          {lat: 50.0617167, lng: -110.8112832},
          {lat: 50.0612982, lng: -110.8114509},
          {lat: 50.0608068, lng: -110.8118936},
          {lat: 50.0602927, lng: -110.8117343},
          {lat: 50.0596513, lng: -110.8117273},
          {lat: 50.0587285, lng: -110.8121880},
          {lat: 50.0586058, lng: -110.8122553},
          {lat: 50.0575157, lng: -110.8122016},
          {lat: 50.0570038, lng: -110.8120287},
          {lat: 50.0562727, lng: -110.8120008},
          {lat: 50.0558527, lng: -110.8118930},
          {lat: 50.0552273, lng: -110.8115597},
          {lat: 50.0546832, lng: -110.8111282},
          {lat: 50.0541702, lng: -110.8105065},
          {lat: 50.0528195, lng: -110.8076600},
          {lat: 50.0525160, lng: -110.8063256},
          {lat: 50.0524732, lng: -110.8059037},
          {lat: 50.0524056, lng: -110.8028978},
          {lat: 50.0525206, lng: -110.8023646},
          {lat: 50.0523044, lng: -110.8007823}
  ];

  var cypressCounty = new google.maps.Polygon({
    paths: [outerCoords, innerCoords],
    strokeColor: '#FFC107',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FFC107',
    fillOpacity: 0.35
  });
  cypressCounty.setMap(map);

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}
