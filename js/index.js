let map = L.map('map').setView([48.831770942, 37.937645504], 14);

// let myGeoJSON = {"type": "FeatureCollection","name": "boundary","crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },"features": [{ "type": "Feature", "properties": { "id": 2 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 28.017106145119566, 50.827900830649995 ], [ 28.016236891419343, 50.830531024104218 ], [ 28.01643878260133, 50.831170346180514 ], [ 28.019158705469774, 50.831361021185728 ], [ 28.01987654078351, 50.827513872551179 ], [ 28.017106145119566, 50.827900830649995 ] ] ] ] } }]};
// L.geoJSON(myGeoJSON).addTo(map);

let osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="copyright">Openstreetmap</a>'
}).addTo(map);

let baseMaps = {
  'Карта': osmLayer,
  'Кадастровое деление': L.tileLayer.wms('https://m1.land.gov.ua/geowebcache/service/wms?', {
    tiled: true,
    format: 'image/png',
    layers: 'kadastr',
  })
};

let marker1 = L.marker([48.837995308, 37.916132744], {
  draggable: false,
  title: "marker_1",
}).addTo(map).bindPopup('1420988400:01:063:0003').on('click', clickZoom);

let marker2 = L.marker([48.838417055, 37.925196334], {
  draggable: false,
  title: "marker_2",
}).addTo(map).bindPopup('1420988400:01:001:0005').on('click', clickZoom);

let marker3 = L.marker([48.838963516, 37.930609147], {
  draggable: false,
  title: "marker_3",
}).addTo(map).bindPopup('1420988400:01:005:0040').on('click', clickZoom);

let marker4 = L.marker([48.836398926, 37.915855016], {
  draggable: false,
  title: "marker_4",
}).addTo(map).bindPopup('1420988400:01:063:0005').on('click', clickZoom);

let marker5 = L.marker([48.830403964, 37.926789827], {
  draggable: false,
  title: "marker_5",
}).addTo(map).bindPopup('1420988400:01:001:0017').on('click', clickZoom);

let marker6 = L.marker([48.827500233, 37.92736716], {
  draggable: false,
  title: "marker_6",
}).addTo(map).bindPopup('1420988400:01:001:0021').on('click', clickZoom);

let marker7 = L.marker([48.829677449, 37.926934273], {
  draggable: false,
  title: "marker_7",
}).addTo(map).bindPopup('1420988400:01:001:0018').on('click', clickZoom);

let marker8 = L.marker([48.831675951, 37.926536924], {
  draggable: false,
  title: "marker_8",
}).addTo(map).bindPopup('1420988400:01:001:0015').on('click', clickZoom);

let marker9 = L.marker([48.82621385, 37.918052482], {
  draggable: false,
  title: "marker_9",
}).addTo(map).bindPopup('1420988400:01:063:0018').on('click', clickZoom);

let marker10 = L.marker([48.833312754, 37.926211442], {
  draggable: false,
  title: "marker_10",
}).addTo(map).bindPopup('1420988400:01:001:0012').on('click', clickZoom);

let marker11 = L.marker([48.832487527, 37.916691384], {
  draggable: false,
  title: "marker_11",
}).addTo(map).bindPopup('1420988400:01:063:0010').on('click', clickZoom);

let marker12 = L.marker([48.831493426, 37.924163657], {
  draggable: false,
  title: "marker_12",
}).addTo(map).bindPopup('1420988400:01:001:0025').on('click', clickZoom);

let marker13 = L.marker([48.835635952, 37.916020149], {
  draggable: false,
  title: "marker_13",
}).addTo(map).bindPopup('1420988400:01:063:0006').on('click', clickZoom);

let marker14 = L.marker([48.834769682, 37.925921727], {
  draggable: false,
  title: "marker_14",
}).addTo(map).bindPopup('1420988400:01:001:0010').on('click', clickZoom);

let marker15 = L.marker([48.827006737, 37.917876268], {
  draggable: false,
  title: "marker_15",
}).addTo(map).bindPopup('1420988400:01:063:0017').on('click', clickZoom);

let marker16 = L.marker([48.828585945, 37.917525251], {
  draggable: false,
  title: "marker_16",
}).addTo(map).bindPopup('1420988400:01:063:0015').on('click', clickZoom);

let marker17 = L.marker([48.834041219, 37.926066598], {
  draggable: false,
  title: "marker_17",
}).addTo(map).bindPopup('1420988400:01:001:0011').on('click', clickZoom);

let marker18 = L.marker([48.833258624, 37.916527443], {
  draggable: false,
  title: "marker_18",
}).addTo(map).bindPopup('1420988400:01:063:0009').on('click', clickZoom);

let marker19 = L.marker([48.830156331, 37.917186876], {
  draggable: false,
  title: "marker_19",
}).addTo(map).bindPopup('1420988400:01:063:0013').on('click', clickZoom);

let marker20 = L.marker([48.828225582, 37.927222937], {
  draggable: false,
  title: "marker_20",
}).addTo(map).bindPopup('1420988400:01:001:0020').on('click', clickZoom);

let marker21 = L.marker([48.831130675, 37.926645346], {
  draggable: false,
  title: "marker_21",
}).addTo(map).bindPopup('1420988400:01:001:0016').on('click', clickZoom);

let marker22 = L.marker([48.832039598, 37.926464593], {
  draggable: false,
  title: "marker_22",
}).addTo(map).bindPopup('1420988400:01:001:0014').on('click', clickZoom);

let marker23 = L.marker([48.830936641, 37.917021032], {
  draggable: false,
  title: "marker_23",
}).addTo(map).bindPopup('1420988400:01:063:0012').on('click', clickZoom);

let marker24 = L.marker([48.83715429, 37.915698555], {
  draggable: false,
  title: "marker_24",
}).addTo(map).bindPopup('1420988400:01:063:0004').on('click', clickZoom);

let marker25 = L.marker([48.827797526, 37.917700496], {
  draggable: false,
  title: "marker_25",
}).addTo(map).bindPopup('1420988400:01:063:0016').on('click', clickZoom);

let marker26 = L.marker([48.829372336, 37.917353571], {
  draggable: false,
  title: "marker_26",
}).addTo(map).bindPopup('1420988400:01:063:0014').on('click', clickZoom);

let marker27 = L.marker([48.831713793, 37.916855826], {
  draggable: false,
  title: "marker_27",
}).addTo(map).bindPopup('1420988400:01:063:0011').on('click', clickZoom);

let marker28 = L.marker([48.834849797, 37.916189184], {
  draggable: false,
  title: "marker_28",
}).addTo(map).bindPopup('1420988400:01:063:0007').on('click', clickZoom);

let marker29 = L.marker([48.834046067, 37.916360072], {
  draggable: false,
  title: "marker_29",
}).addTo(map).bindPopup('1420988400:01:063:0008').on('click', clickZoom);

let marker30 = L.marker([48.829482012, 37.938125858], {
  draggable: false,
  title: "marker_30",
}).addTo(map).bindPopup('1420988400:01:005:0021').on('click', clickZoom);

let marker31 = L.marker([48.835157064, 37.936934797], {
  draggable: false,
  title: "marker_31",
}).addTo(map).bindPopup('1420988400:01:005:0010').on('click', clickZoom);

let marker32 = L.marker([48.839437956, 37.947956287], {
  draggable: false,
  title: "marker_32",
}).addTo(map).bindPopup('1420988400:01:009:0004').on('click', clickZoom);

let marker33 = L.marker([48.838676143, 37.948120825], {
  draggable: false,
  title: "marker_33",
}).addTo(map).bindPopup('1420988400:01:009:0005').on('click', clickZoom);

let marker34 = L.marker([48.837932711, 37.948281428], {
  draggable: false,
  title: "marker_34",
}).addTo(map).bindPopup('1420988400:01:009:0006').on('click', clickZoom);

let marker35 = L.marker([48.836608614, 37.948567361], {
  draggable: false,
  title: "marker_35",
}).addTo(map).bindPopup('1420988400:01:009:0008').on('click', clickZoom);

let marker36 = L.marker([48.829767579, 37.950044674], {
  draggable: false,
  title: "marker_36",
}).addTo(map).bindPopup('1420988400:01:009:0020').on('click', clickZoom);

let marker37 = L.marker([48.823775945, 37.928106585], {
  draggable: false,
  title: "marker_37",
}).addTo(map).bindPopup('1420988400:01:003:0003').on('click', clickZoom);

let marker38 = L.marker([48.838138116, 37.936386854], {
  draggable: false,
  title: "marker_38",
}).addTo(map).bindPopup('1420988400:01:005:0005').on('click', clickZoom);

let marker39 = L.marker([48.831638229, 37.949640761], {
  draggable: false,
  title: "marker_39",
}).addTo(map).bindPopup('1420988400:01:009:0017').on('click', clickZoom);

let marker40 = L.marker([48.831039202, 37.937799084], {
  draggable: false,
  title: "marker_40",
}).addTo(map).bindPopup('1420988400:01:005:0018').on('click', clickZoom);

let marker41 = L.marker([48.826775271, 37.927511276], {
  draggable: false,
  title: "marker_41",
}).addTo(map).bindPopup('1420988400:01:001:0022').on('click', clickZoom);

let marker42 = L.marker([48.834748313, 37.948969142], {
  draggable: false,
  title: "marker_42",
}).addTo(map).bindPopup('1420988400:01:009:0011').on('click', clickZoom);

let marker43 = L.marker([48.837244042, 37.948430158], {
  draggable: false,
  title: "marker_43",
}).addTo(map).bindPopup('1420988400:01:009:0007').on('click', clickZoom);

let marker44 = L.marker([48.830532376, 37.93174667], {
  draggable: false,
  title: "marker_44",
}).addTo(map).bindPopup('1420988400:01:005:0041').on('click', clickZoom);

let marker45 = L.marker([48.829735802, 37.921963196], {
  draggable: false,
  title: "marker_45",
}).addTo(map).bindPopup('1420988400:01:003:0011').on('click', clickZoom);

let marker46 = L.marker([48.832555941, 37.943606439], {
  draggable: false,
  title: "marker_46",
}).addTo(map).bindPopup('1420988400:01:009:0027').on('click', clickZoom);

let marker47 = L.marker([48.833505431, 37.949237535], {
  draggable: false,
  title: "marker_47",
}).addTo(map).bindPopup('1420988400:01:009:0013').on('click', clickZoom);

let marker48 = L.marker([48.831858571, 37.928910077], {
  draggable: false,
  title: "marker_48",
}).addTo(map).bindPopup('1420988400:01:001:0026').on('click', clickZoom);

let marker49 = L.marker([48.820989354, 37.928671555], {
  draggable: false,
  title: "marker_49",
}).addTo(map).bindPopup('1420988400:01:003:0007').on('click', clickZoom);

let marker50 = L.marker([48.827250782, 37.950588053], {
  draggable: false,
  title: "marker_50",
}).addTo(map).bindPopup('1420988400:01:009:0024').on('click', clickZoom);

let marker51 = L.marker([48.833975553, 37.937182821], {
  draggable: false,
  title: "marker_51",
}).addTo(map).bindPopup('1420988400:01:005:0012').on('click', clickZoom);

let marker52 = L.marker([48.821002285, 37.939777263], {
  draggable: false,
  title: "marker_52",
}).addTo(map).bindPopup('1420988400:01:005:0038').on('click', clickZoom);

let marker53 = L.marker([48.83279833, 37.937429906], {
  draggable: false,
  title: "marker_53",
}).addTo(map).bindPopup('1420988400:01:005:0014').on('click', clickZoom);

let marker54 = L.marker([48.837686843, 37.925341581], {
  draggable: false,
  title: "marker_54",
}).addTo(map).bindPopup('1420988400:01:001:0006').on('click', clickZoom);

let marker55 = L.marker([48.837531895, 37.93643634], {
  draggable: false,
  title: "marker_55",
}).addTo(map).bindPopup('1420988400:01:005:0006').on('click', clickZoom);

let marker56 = L.marker([48.828125576, 37.938406536], {
  draggable: false,
  title: "marker_56",
}).addTo(map).bindPopup('1420988400:01:005:0025').on('click', clickZoom);

let marker57 = L.marker([48.832416709, 37.949472638], {
  draggable: false,
  title: "marker_57",
}).addTo(map).bindPopup('1420988400:01:009:0015').on('click', clickZoom);

let marker58 = L.marker([48.822310307, 37.939630625], {
  draggable: false,
  title: "marker_58",
}).addTo(map).bindPopup('1420988400:01:005:0036').on('click', clickZoom);

let marker59 = L.marker([48.821683309, 37.939762158], {
  draggable: false,
  title: "marker_59",
}).addTo(map).bindPopup('1420988400:01:005:0037').on('click', clickZoom);

let marker60 = L.marker([48.821666921, 37.928534205], {
  draggable: false,
  title: "marker_60",
}).addTo(map).bindPopup('1420988400:01:003:0006').on('click', clickZoom);

let marker61 = L.marker([48.823055079, 37.928252755], {
  draggable: false,
  title: "marker_61",
}).addTo(map).bindPopup('1420988400:01:003:0004').on('click', clickZoom);

let marker62 = L.marker([48.835368796, 37.948835136], {
  draggable: false,
  title: "marker_62",
}).addTo(map).bindPopup('1420988400:01:009:0010').on('click', clickZoom);

let marker63 = L.marker([48.827893288, 37.950449334], {
  draggable: false,
  title: "marker_63",
}).addTo(map).bindPopup('1420988400:01:009:0023').on('click', clickZoom);

let marker64 = L.marker([48.824621755, 37.918406324], {
  draggable: false,
  title: "marker_64",
}).addTo(map).bindPopup('1420988400:01:063:0020').on('click', clickZoom);

let marker65 = L.marker([48.823822816, 37.918583865], {
  draggable: false,
  title: "marker_65",
}).addTo(map).bindPopup('1420988400:01:063:0021').on('click', clickZoom);

let marker66 = L.marker([48.825315526, 37.927675638], {
  draggable: false,
  title: "marker_66",
}).addTo(map).bindPopup('1420988400:01:001:0024').on('click', clickZoom);

let marker67 = L.marker([48.832105317, 37.949539882], {
  draggable: false,
  title: "marker_67",
}).addTo(map).bindPopup('1420988400:01:009:0016').on('click', clickZoom);

let marker68 = L.marker([48.822352589, 37.928395177], {
  draggable: false,
  title: "marker_68",
}).addTo(map).bindPopup('1420988400:01:003:0005').on('click', clickZoom);

let marker69 = L.marker([48.829143263, 37.950179426], {
  draggable: false,
  title: "marker_69",
}).addTo(map).bindPopup('1420988400:01:009:0021').on('click', clickZoom);

let marker70 = L.marker([48.828518565, 37.950314338], {
  draggable: false,
  title: "marker_70",
}).addTo(map).bindPopup('1420988400:01:009:0022').on('click', clickZoom);

let marker71 = L.marker([48.830454351, 37.937921836], {
  draggable: false,
  title: "marker_71",
}).addTo(map).bindPopup('1420988400:01:005:0019').on('click', clickZoom);

let marker72 = L.marker([48.828706752, 37.938288572], {
  draggable: false,
  title: "marker_72",
}).addTo(map).bindPopup('1420988400:01:005:0024').on('click', clickZoom);

let marker73 = L.marker([48.82349667, 37.939381749], {
  draggable: false,
  title: "marker_73",
}).addTo(map).bindPopup('1420988400:01:005:0034').on('click', clickZoom);

let marker74 = L.marker([48.832210791, 37.937553193], {
  draggable: false,
  title: "marker_74",
}).addTo(map).bindPopup('1420988400:01:005:0015').on('click', clickZoom);

let marker75 = L.marker([48.826389319, 37.938774861], {
  draggable: false,
  title: "marker_75",
}).addTo(map).bindPopup('1420988400:01:005:0028').on('click', clickZoom);

let marker76 = L.marker([48.831478248, 37.937706985], {
  draggable: false,
  title: "marker_76",
}).addTo(map).bindPopup('1420988400:01:005:0017').on('click', clickZoom);

let marker77 = L.marker([48.82653369, 37.950198097], {
  draggable: false,
  title: "marker_77",
}).addTo(map).bindPopup('1420988400:01:009:0025').on('click', clickZoom);

let marker78 = L.marker([48.830391513, 37.949909967], {
  draggable: false,
  title: "marker_78",
}).addTo(map).bindPopup('1420988400:01:009:0019').on('click', clickZoom);

let marker79 = L.marker([48.835749164, 37.936810559], {
  draggable: false,
  title: "marker_79",
}).addTo(map).bindPopup('1420988400:01:005:0009').on('click', clickZoom);

let marker80 = L.marker([48.836957015, 37.925486724], {
  draggable: false,
  title: "marker_80",
}).addTo(map).bindPopup('1420988400:01:001:0007').on('click', clickZoom);

let marker81 = L.marker([48.836936847, 37.936561229], {
  draggable: false,
  title: "marker_81",
}).addTo(map).bindPopup('1420988400:01:005:0007').on('click', clickZoom);

let marker82 = L.marker([48.832585071, 37.92635616], {
  draggable: false,
  title: "marker_82",
}).addTo(map).bindPopup('1420988400:01:001:0013').on('click', clickZoom);

let marker83 = L.marker([48.825418593, 37.918229218], {
  draggable: false,
  title: "marker_83",
}).addTo(map).bindPopup('1420988400:01:063:0019').on('click', clickZoom);

let marker84 = L.marker([48.827546154, 37.938532076], {
  draggable: false,
  title: "marker_84",
}).addTo(map).bindPopup('1420988400:01:005:0026').on('click', clickZoom);

let marker85 = L.marker([48.835988707, 37.948701282], {
  draggable: false,
  title: "marker_85",
}).addTo(map).bindPopup('1420988400:01:009:0009').on('click', clickZoom);

let marker86 = L.marker([48.836227387, 37.925631842], {
  draggable: false,
  title: "marker_86",
}).addTo(map).bindPopup('1420988400:01:001:0008').on('click', clickZoom);

let marker87 = L.marker([48.824503494, 37.927959067], {
  draggable: false,
  title: "marker_87",
}).addTo(map).bindPopup('1420988400:01:003:0002').on('click', clickZoom);

let marker88 = L.marker([48.826050312, 37.927655382], {
  draggable: false,
  title: "marker_88",
}).addTo(map).bindPopup('1420988400:01:001:0023').on('click', clickZoom);

let marker89 = L.marker([48.82523623, 37.939016785], {
  draggable: false,
  title: "marker_89",
}).addTo(map).bindPopup('1420988400:01:005:0031').on('click', clickZoom);

let marker90 = L.marker([48.824660491, 37.939137559], {
  draggable: false,
  title: "marker_90",
}).addTo(map).bindPopup('1420988400:01:005:0032').on('click', clickZoom);

let marker91 = L.marker([48.823020986, 37.91876207], {
  draggable: false,
  title: "marker_91",
}).addTo(map).bindPopup('1420988400:01:063:0022').on('click', clickZoom);

let marker92 = L.marker([48.829288089, 37.938166634], {
  draggable: false,
  title: "marker_92",
}).addTo(map).bindPopup('1420988400:01:005:0022').on('click', clickZoom);

let marker93 = L.marker([48.832883414, 37.949371854], {
  draggable: false,
  title: "marker_93",
}).addTo(map).bindPopup('1420988400:01:009:0014').on('click', clickZoom);

let marker94 = L.marker([48.839602643, 37.936271673], {
  draggable: false,
  title: "marker_94",
}).addTo(map).bindPopup('1420988400:01:005:0003').on('click', clickZoom);

let marker95 = L.marker([48.825668163, 37.938926109], {
  draggable: false,
  title: "marker_95",
}).addTo(map).bindPopup('1420988400:01:005:0030').on('click', clickZoom);

let marker96 = L.marker([48.826967471, 37.938653533], {
  draggable: false,
  title: "marker_96",
}).addTo(map).bindPopup('1420988400:01:005:0027').on('click', clickZoom);

let marker97 = L.marker([48.828951323, 37.927078655], {
  draggable: false,
  title: "marker_97",
}).addTo(map).bindPopup('1420988400:01:001:0019').on('click', clickZoom);

let marker98 = L.marker([48.834566043, 37.937058897], {
  draggable: false,
  title: "marker_98",
}).addTo(map).bindPopup('1420988400:01:005:0011').on('click', clickZoom);

let marker99 = L.marker([48.82152878, 37.919093639], {
  draggable: false,
  title: "marker_99",
}).addTo(map).bindPopup('1420988400:01:063:0024').on('click', clickZoom);

let marker100 = L.marker([48.82080689, 37.919254064], {
  draggable: false,
  title: "marker_100",
}).addTo(map).bindPopup('1420988400:01:063:0025').on('click', clickZoom);

let marker101 = L.marker([48.833386406, 37.937306475], {
  draggable: false,
  title: "marker_101",
}).addTo(map).bindPopup('1420988400:01:005:0013').on('click', clickZoom);

let marker102 = L.marker([48.831015061, 37.949775306], {
  draggable: false,
  title: "marker_102",
}).addTo(map).bindPopup('1420988400:01:009:0018').on('click', clickZoom);

let marker103 = L.marker([48.838838554, 37.936469665], {
  draggable: false,
  title: "marker_103",
}).addTo(map).bindPopup('1420988400:01:005:0004').on('click', clickZoom);

let marker104 = L.marker([48.829094259, 37.938207119], {
  draggable: false,
  title: "marker_104",
}).addTo(map).bindPopup('1420988400:01:005:0023').on('click', clickZoom);

let marker105 = L.marker([48.834127066, 37.949103325], {
  draggable: false,
  title: "marker_105",
}).addTo(map).bindPopup('1420988400:01:009:0012').on('click', clickZoom);

let marker106 = L.marker([48.836342604, 37.936685969], {
  draggable: false,
  title: "marker_106",
}).addTo(map).bindPopup('1420988400:01:005:0008').on('click', clickZoom);

let marker107 = L.marker([48.825956307, 37.938865718], {
  draggable: false,
  title: "marker_107",
}).addTo(map).bindPopup('1420988400:01:005:0029').on('click', clickZoom);

let marker108 = L.marker([48.822254358, 37.918932423], {
  draggable: false,
  title: "marker_108",
}).addTo(map).bindPopup('1420988400:01:063:0023').on('click', clickZoom);

let marker109 = L.marker([48.822907516, 37.939505364], {
  draggable: false,
  title: "marker_109",
}).addTo(map).bindPopup('1420988400:01:005:0035').on('click', clickZoom);

let marker110 = L.marker([48.824081533, 37.939259033], {
  draggable: false,
  title: "marker_110",
}).addTo(map).bindPopup('1420988400:01:005:0033').on('click', clickZoom);

let marker111 = L.marker([48.829870563, 37.938044344], {
  draggable: false,
  title: "marker_111",
}).addTo(map).bindPopup('1420988400:01:005:0020').on('click', clickZoom);

let marker112 = L.marker([48.835498147, 37.925776864], {
  draggable: false,
  title: "marker_112",
}).addTo(map).bindPopup('1420988400:01:001:0009').on('click', clickZoom);

let marker113 = L.marker([48.831770942, 37.937645504], {
  draggable: false,
  title: "marker_113",
}).addTo(map).bindPopup('1420988400:01:005:0016').on('click', clickZoom);

function clickZoom(e) {
  map.setView(e.target.getLatLng(), 16);
}

//everything below here controls interaction from outside the map
let markers = [];
markers.push(marker1);
markers.push(marker2);
markers.push(marker3);
markers.push(marker4);
markers.push(marker5);
markers.push(marker6);
markers.push(marker7);
markers.push(marker8);
markers.push(marker9);
markers.push(marker10);
markers.push(marker11);
markers.push(marker12);
markers.push(marker13);
markers.push(marker14);
markers.push(marker15);
markers.push(marker16);
markers.push(marker17);
markers.push(marker18);
markers.push(marker19);
markers.push(marker20);
markers.push(marker21);
markers.push(marker22);
markers.push(marker23);
markers.push(marker24);
markers.push(marker25);
markers.push(marker26);
markers.push(marker27);
markers.push(marker28);
markers.push(marker29);
markers.push(marker30);
markers.push(marker31);
markers.push(marker32);
markers.push(marker33);
markers.push(marker34);
markers.push(marker35);
markers.push(marker36);
markers.push(marker37);
markers.push(marker38);
markers.push(marker39);
markers.push(marker40);
markers.push(marker41);
markers.push(marker42);
markers.push(marker43);
markers.push(marker44);
markers.push(marker45);
markers.push(marker46);
markers.push(marker47);
markers.push(marker48);
markers.push(marker49);
markers.push(marker50);
markers.push(marker51);
markers.push(marker52);
markers.push(marker53);
markers.push(marker54);
markers.push(marker55);
markers.push(marker56);
markers.push(marker57);
markers.push(marker58);
markers.push(marker59);
markers.push(marker60);
markers.push(marker61);
markers.push(marker62);
markers.push(marker63);
markers.push(marker64);
markers.push(marker65);
markers.push(marker66);
markers.push(marker67);
markers.push(marker68);
markers.push(marker69);
markers.push(marker70);
markers.push(marker71);
markers.push(marker72);
markers.push(marker73);
markers.push(marker74);
markers.push(marker75);
markers.push(marker76);
markers.push(marker77);
markers.push(marker78);
markers.push(marker79);
markers.push(marker80);
markers.push(marker81);
markers.push(marker82);
markers.push(marker83);
markers.push(marker84);
markers.push(marker85);
markers.push(marker86);
markers.push(marker87);
markers.push(marker88);
markers.push(marker89);
markers.push(marker90);
markers.push(marker91);
markers.push(marker92);
markers.push(marker93);
markers.push(marker94);
markers.push(marker95);
markers.push(marker96);
markers.push(marker97);
markers.push(marker98);
markers.push(marker99);
markers.push(marker100);
markers.push(marker101);
markers.push(marker102);
markers.push(marker103);
markers.push(marker104);
markers.push(marker105);
markers.push(marker106);
markers.push(marker107);
markers.push(marker108);
markers.push(marker109);
markers.push(marker110);
markers.push(marker111);
markers.push(marker112);
markers.push(marker113);

function markerFunction(id) {
  for (let i in markers) {
    let markerID = markers[i].options.title;
    let position = markers[i].getLatLng();
    if (markerID === id) {
      map.setView(position, 15);
      markers[i].openPopup();
    }
  }
}

$("a").click(function() {
  markerFunction($(this)[0].id);
});

let group1 = L.layerGroup([
  marker5, marker6, marker7, marker8, marker10, marker12, marker14, marker17, marker20, marker21, marker22, marker30, marker31, marker40, marker41, marker44, marker48, marker51, marker53, marker56, marker66,
  marker71, marker72, marker74, marker75, marker76, marker79, marker81, marker82, marker84, marker87, marker88, marker89, marker92, marker95, marker96, marker97, marker98, marker101,
  marker104, marker106, marker107, marker111, marker112, marker113
]).addTo(map);

let group2 = L.layerGroup([
  marker1, marker2, marker3, marker4, marker9, marker11, marker13, marker15, marker16, marker18, marker19, marker23, marker24, marker25, marker26, marker27, marker28, marker29, marker32, marker33, marker34,
  marker35, marker36, marker37, marker38, marker39, marker42, marker43, marker45, marker46, marker47, marker49, marker50, marker52, marker54, marker55, marker57, marker58, marker59, marker60, marker61, marker62,
  marker63, marker64, marker65, marker67, marker68, marker69, marker70, marker73, marker77, marker78, marker80, marker83, marker85, marker86, marker90, marker91, marker93, marker94, marker99, marker100,
  marker102, marker103, marker105, marker108, marker109, marker110
]).addTo(map);

L.control.layers(baseMaps, {
  'Попадающие маркеры в геозоне': group1,
  'Непопадающие маркеры в геозоне': group2,
}).addTo(map);

// create a red polygon from an array of LatLng points
let latlngs = [[48.835712572, 37.921256796],[48.823847111, 37.923831717],[48.825711869, 37.94417359],[48.837407408, 37.941512839],[48.835712572, 37.921256796]];

// create a red polyline from an array of arrays of LatLng points
let polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);