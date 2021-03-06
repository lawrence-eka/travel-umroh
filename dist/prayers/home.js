yalla.framework.addComponent("/dist/prayers/home", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/prayers/home");
  var $export = {};
  var $path = "/dist/prayers/home";
  var _elementName = "dist.prayers.home";
  var _context = {};
  var _parentComponent = yalla.framework.getParentComponent;
  var _merge = yalla.utils.merge;

  function ComponentEvent(type, data, target, currentTarget) {
    this.data = data;
    this.target = target;
    this.type = type;
    this.currentTarget = currentTarget;
  }

  var _elementOpen = IncrementalDOM.elementOpen;
  var _elementClose = IncrementalDOM.elementClose;
  var _elementOpenStart = IncrementalDOM.elementOpenStart;
  var _elementOpenEnd = IncrementalDOM.elementOpenEnd;
  var _elementVoid = IncrementalDOM.elementVoid;
  var _text = IncrementalDOM.text;
  var _attr = IncrementalDOM.attr;
  var _skip = IncrementalDOM.skip;

  function initState(props) {
    return {}
  };

  function onPropertyChange(event) {};


  function getDuas() {
    return new Promise(function(resolve) {
      resolve(duas);
    });
  }

  var duas = [{
      name: 'Niat Umrah',
      arabic: 'لَبَّيْكَ اللَّهُمَّ عُمْرَةً',
      latin: 'Labbaik Allahumma ‘umratan.',
      indonesia: 'Aku sambut panggilan-Mu ya Allah untuk berumrah.',
    },
    {
      name: 'Talbiyah',
      arabic: 'لَبَّيْْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لاَ شَرِيْكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ لاَ شَرِيْكَ لَكَ',
      latin: 'Labbaik Allahumma labbaik, Labbaika laa syariika laka labbaik. Innal hamda wanni’mata laka wal mulka, laa syarikalak.',
      indonesia: 'Aku datang memenuhi panggilan-Mu ya Allah, aku datang memenuhi panggilan-Mu, aku datang memenuhi panggilan-Mu tidak ada sekutu bagi-Mu, aku datang memenuhi panggilan-Mu. Sesungguhnya segala puji, nikmat dan segenap kekuasan adalah milik-Mu, tidak ada sekutu bagi-Mu.',
    },
    {
      name: 'Sholawat',
      arabic: 'أَللَّهُمَّ صَلِّ عَلىَ مُحَمَّدٍ وَعَلى آلِ مُحَمَّدٍ',
      latin: 'Allahumma shalli ‘alaa Muhammad. wa’alaa aali Muhammad.',
      indonesia: 'Ya Allah limpahkanlah rahmat kepada Muhammad dan keluarganya.',
    },
    {
      name: 'Doa masuk kota Mekkah',
      arabic: 'اَللّٰهُمَّ هٰذَا حَرَمُكَ وَأَمْنُكَ فَحَرِّمْ لَحْمِيْ وَدَمِيْ وَشَعْرِيْ وَبَشَرِيْ عَلَى النَّارِ وَاٰمِنِّيْ مِنْ عَذَابِكَ يَوْمَ تَبْعَثُ عِبَادَكَ وَاجْعَلْنِيْ مِنْ أَوْلِيَآئِكَ وَأَهْلِ طَاعَتِكَ',
      latin: 'Allahumma haadza haramuka wa amnuka faharrimlahmi wadamii wabasyarii ‘alannar, wa aminnii min ‘adzabika yauma tab’atsu ‘ibaadaka waj’alnii min auliyaa ika wa ahli thoo’atik.',
      indonesia: 'Ya Allah kota ini adalah tanah Haram-Mu dan tempat yang aman, maka hindarkanlah daging, darah, rambut, bulu dan kulitku dari neraka. Amankanlah aku dari siksaMu pada hari Engkau membangkitkan aku ke dalam golongan auliaMu dan ahli ta’at pada Mu.',
    },
    {
      name: 'Doa Saat Masuk Masjidil Haram',
      arabic: 'اَللّٰهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ فَحَيِّنَا رَبَّنَا بِالسَّلَامِ وَأَدْخِلْنَا الْجَنَّةَ دَارَالسَّلَامَ تَبَارَكْتَ وَتَعَالَيْتَ يَا ذَاالْجَلَالِ وَاْلإِكْرَامِ. اَللّٰهُمَّ افْتَحْ لِيْ أَبْوَابَ رَحْمَتِكَ وَمَغْفِرَتِكَ وَأَدْخِلْنِيْ فِيْهَا. بِسْمِ اللهِ وَالْحَمْدُ ِللهِ وَالصَّلَاةُ وَالسَّلَامُ عَلٰى رَسُوْلِ اللهِ',
      latin: 'Allahumma antassalaam, waminkassalaam fahayyinaa rabbanaa bissalaam wa adkhilnal jannata daarassalaam tabaarakta wata’aalaita yaa dzaljalaali wal ikraam. Allahummaftah lii abwaaba rahmatika wamaghfiratika wa adkhilnii fiihaa. Bismillahi walhamdulillahi wasshalaatu wassalaamu ‘alaa rasuulillaah.',
      indonesia: 'Ya Allah Engkau sumber keselamatan, dan daripadaMu lah datangnya keselamatan itu semua. Maka sambutlah kami wahai tuhan dengan selamat sejahtera dan masukanlah kami ke dalam surga negeriMu yang bahagia, Maha Pemberi berkat dan Maha Tinggilah Engkau wahai Tuhan yang punya keagungan dan kehormatan. Ya Allah bukakanlah untukku pintu rahmat dan ampunan, masukanlah aku ke dalam ampunanMu. Dengan nama Allah dan segala puji bagi Allah salawat dan salam untuk Rasulullah.',
    },
    {
      name: 'Doa Melihat Ka’bah',
      arabic: 'اَللّٰهُمَّ زِدْ هٰذَا الْبَيْتَ تَشْرِيْفًا وَتَعْظِيْمًا وَتَكْرِيْمًا وَمَهَابَةً وَزِدْ مَنْ شَرَّفَّهُ وَكَرَّمَهُ مِمَّنْ حَجَّهُ أَوِاعْتَمَرَهُ تَشْرِيْفًا وَتَعْظِيْمًا وَتَكْرِيْمًا وَبِرًّا',
      latin: 'Allahumma zid haadzal baita tasyriifan wata’dziiman watakriiman wamahaabatan wazid man syarroffahu wa karramahu mimman hajjahu awi’tamarahu tasyriifan wata’dzhiiman watakriiman wabirran.',
      indonesia: 'Ya Allah, tambahkan lah kemuliaan, kehormatan, keagungan dan kehebatan pada Baitullah ini dan tambahkanlah pula pada orang-orang yang memuliakan, menghormati dan mengagungkannya diantara mereka yang berhaji atau yang berumroh padanya dengan kemuliaan, kehormatan, kebesaran dan kebaikan.',
    },
    {
      name: 'Doa Thawaf',
      arabic: 'رَبَّنَا اَتِنَا فِى الدُّنْيَا حَسَنَةً وَفِى الْأَخِرَةِ حَسَنَةً وَفِنَا عَذَابَ النَّارِ',
      latin: 'Robbana aatina fid dunyaa hasanah, wa fil akhiroti hasanah, wa qinaa ‘adzaban naar.',
      indonesia: 'Ya Allah, berikanlah kepada Kami kebaikan di dunia, berikan pula kebaikan di akhirat dan lindungilah Kami dari adzab neraka.',
    },
    {
      name: 'Doa sebelum minum air zam – zam',
      arabic: 'اَللّٰهُمَّ إِنِّيْ أْسْأَلُكَ عِلْمً نَافِعًا وَرِزْقًا وَاسِعًا وَشِفَآءً مِنْ كُلِّ دَآءٍ وَسَقَمٍ بِرَحْمَتِكَ يَآ أَرْحَمَ الرَّاحِمِيْنَ',
      latin: 'Allahumma innii as aluka ‘ilman naafi’an wa rizqan waasi’an wasyifaa an min kulli daa in wasaqamin birahmatika yaa arhamarraahimiin.',
      indonesia: 'Ya Allah, aku mohon kepadaMu ilmu pengetahuan yang bermanfaat, rizki yang luas dan sembuh dari segala sakit dan penyakit pikun dengan rahmatMu ya Allah yang Maha Pengasih lagi Maha Penyayang.',
    },
    {
      name: 'Do’a Saat Hendak Mendaki Bukit Safa Sebelum Mulai Sa’i',
      arabic: 'بِسْمِ اللهِ الرَّ حْمَنِ الرَّ حِيْمِ. أبْدَأُ بِمَا بَدَأَ اللهُ بِهِ وَرَسُوْلُهُ. إِنَّ الصَّفَا وَالْمَرْوَةَ مِرْشَعَآئِرِ اللهِ، فَمَنْ حَجَّ الْبَيْتَ أَوِ اعْتَمَرَ فَلاَ جُنَاحَ عَلَيْهِ أَنْ يَطَّوَّفَ بِهِمَا وَمَنْ تَطَوَّعَ خَيْرًا فَإِنَّ اللهَ شَاكِرٌ عَلِيْمٌ',
      latin: 'Bismillahir-rahmaanir-rahiim. Abda-u bimaa bada-allahu bihi wa rasuuluh, innash-shofaa wal-marwata min sya’aairillahi, faman hajjal-baita awi’tamara falaa junaaha ‘alaihi an-yaththawwafa bihimaa, waman tathawwa’a khairan fainnallaha syaakirun ‘aliim.',
      indonesia: 'Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang. Aku mulai dengan apa yang telah dimulai oleh Allah dan RasulNya. Sesungguhnya Shafa dan Marwah sebagian dari syiar-syiar (tanda kebesaran) Allah. Maka barangsiapa yang berhaji ataupun berumrah, maka tidak ada dosa baginya mengerjakan sa’i antara keduanya. Dan barangsiapa yang mengerjakan suatu kebajikan dengan kerelaan hati, maka sesungguhnya Allah Maha Penerima Kebaikan lagi Maha Mengetahui.',
    },
    {
      name: 'Do’a Di Bukit Safa, Menghadap Ka’bah',
      arabic: 'اللهُ أَكْبَرُ اَللهُ أَكْبَرُ اللهُ أَكْبَرُ وَلِلّهِ الْحَمْدُ: اللهُ أَكْبَرُ عَلى مَا هَدَانَا وَالْحَمْدُ لِلّهِ عَلَى مَا أَوْلاَنَا. لاَإِلَهَ إِلاَّ اللهُ وَحْدَهُ لاَشَرِيْكَ لَهُ. لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِيْ وَيُمِيْتُ بِيَدِهِ الْخَيْرُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرٌ. لاَإِلَهَ إِلاَّ اللهُ وَحْدَهُ لاشريك لَهُ أَنْجَزَ وَعْدَهُ وَنَصَرَ عَبْدَهُ وَهَزَمَ الْأَحْزَابَ وَحْدَهُ لاَإِلَهَ إِلاَّ اللهُ وَلاَنَعْبُدُ إِلاّ إِيَّاهُ مُخْلِصِيْنَ لَهُ الدِّيْنَ وَلَوْ كَرِهَ الْكَافِرُوْنَ',
      latin: 'Allahu Akbar, Allahu Akbar, Allahu Akbar, wa lillahil-hamd. Allahu Akbar ‘alaa maa hadaanaa wal-hamdu lillahi ‘alaa maa aulaanaa. Laa ilaaha illallahu wahdahu laa syariika lahu, lahul mulku wa lahul-hamdu yuhyii wa yumiitu biyadihil-khairu wa huwa ‘alaa kulli syaiin qodiir. Laa ilaaha illallah wahdahu laa syariika lahu, anjaza wa’dahu, wa nashara ‘abdahu, wa hazamal-ahzaaba wahdahu, laa ilaaha illallahu wa laa na’budu illa iyyaahu mukhlishiina lahud-diina wa law karihal-kaafiruun.',
      indonesia: 'Allah Maha Besar, Allah Maha Besar, Allah Maha Besar. Segala puji bagi Allah, Allah Maha Besar, ataspetunjuk yang diberikanNya kepada kami, segala puji bagi Allah atas karunia yang telah dianugerahkanNya kepada kami, tidak ada tuhan selain Allah Yang Maha Esa, tidak ada sekutu bagiNya. BagiNya kerajaan dan pujian. Dialah yang menghidupkan dan mematikan, pada kekuasaanNya segala kebaikan dan Dia berkuasa atas segala sesuatu. Tiada Tuhan selain Allah Yang Maha Esa, tidak ada sekutu bagiNya, yang telah menepati janjiNya, menolong hambaNya dan dia sendiri menghancurkan musuh-musuhNya. Tidak ada tuhan selain Allah dan kami tidak menyembah kecuali kepadaNya dengan ikhlas semata kepadaNya walaupun orang-orang kafir membenci.',
    },
    {
      name: 'Do’a Di Bukit Marwah Selesai Sa’i',
      arabic: 'اللّهُمَّ رَبَّنَا تَقَبَّلْ مِنَّا وَعَافِنَا وَاعْفُ عَنَّا وَعَلَى طَاعَتِكَ وَشُكْرِكَ أَعِنَّا وَعَلَى غَيْرِكَ لاَتَكِلْنَا وَعَلَى اْلإِيْمَانِ واْلإِسْلاَمِ الَكَامِلِ جَمِيْعًا تَوَفَّنَا وَأَنْتَ رَاضٍ عَنَّا اللّهُمَّ ارْحَمْنِيْ أَنْ أَتَكَلَّفَ مَالاَ يَعْنِيْنِيْ وَارْزُقْنِيْ حُسْنَ النَّظَرِ فِيْمَا يُرْضِيْكَ عَنِّيْ يَاأَرْحَمَ الرَّا حِمِيْنَ',
      latin: 'Allahumma rabbanaa taqabbal minnaa wa ‘aafinaa wa’fu ‘annaa wa ‘alaa thaa’atika wa syukrika a’innaa, wa ‘alaa ghairika laa takilnaa, wa ‘alal-imaani wal-islaamil-kaamili jamii’an tawaffanaa wa anta raadhin ‘annaa. Allahumma rhamnii bitarkil-ma’aashii abadan ma abqaitanii, warhamnii an atakallafa maa laa ya’niinii, warzuqnii husnan-nazhori fiimaa yurdhiika ‘annii, yaa arhamar-rahiimiin.',
      indonesia: 'Ya Allah ya Tuhan kami, terimalah amalan kami, berilah perlindungan kepada kami, maafkanlah kesalahan kami dan berilah pertolongan kepada kami untuk taat dan bersyukur kepadaMu. Jangan Engkau jadikan kami bergantung kepada selain Engkau. Matikanlah kami dalam iman dan islam secara sempurna dalam keridhaanMu. Ya Allah, rahmatilah kami sehingga mampu meninggalkan segala kejahatan selama hidup kami, dan rahmatilah kami sehingga tidak berbuat hal yang tidak berguna. Karuniakanlah kepada kami sikap pandang yang baik terhadap apa-apa yang membuatMu ridha terhadap kami, wahai Tuhan yang Maha Pengasih dari segala pengasih.',
    },
    {
      name: 'Do’a Menggunting Rambut',
      arabic: 'اَللهُ اَكْبَرْ اَللهُ اَكْبَرْ اَللهُ اَكْبَرْاَلْحَمْدُ للهِ عَلَى مَا هَدَانَا وَالْحَمْدُ للهِ عَلَى مَا أَنْعَمَنَابِهِ عَلَيْهَااَللَّهُمَّ هَذِهِ نَاصِيَتِي فَتَقَبَّلْ مِنِّي وَاغْفِرْ ذُنُوْبِىاَللَهُمَّ اغْفِرْ لِلْمُحَلِّقِيْنَ وَاْلمَقْصُوْرِيْنَ يَاوَاسِعَ الْمَغْفِرَةٍاَللَّهُمَّ اثْبُتْ لِى بِكُلِّ شَعْرَةٍ حَسَنَةً وَامْحُ عَنِّي بِهَا سَيِّئَةً. وَارْفَعْ لِىْ بِهَا عِنْدَكَ دَرَجَةً',
      latin: 'Allahu Akbar, Allahu Akbar, Allahu Akbar. Alhamdu lillahi ‘alaa maa hadaanaa, wal-hamdu lillahi ‘alaa maa an’amanaa bihi ‘alainaa. Allahumma hadzihii naashiyatii fa taqabbal minni, waghfir dzunuubii. Allahumma ghfir lil-muhalliqiina wal-muqoshshiriin, ya waasi’al-maghfirah. Allahumma-tsbut lii bikulli sya’ratin hasanatan. Wamhu ‘annii bihaa sayyiatan, warfa’ lii bihaa ‘indaka darajah.',
      indonesia: 'Allah Maha Besar, Allah Maha Besar, Allah Maha Besar. Segala puji bagi Allah atas petunjukNya kepada kami, dan segala puji bagi Allah atas apa-apa yang Dia karuniakan kepada kami.. Ya Allah, inilah ubun-ubunku, maka terimalah dariku (amal ibadahku), dan ampunilah dosa-dosaku. Ya Allah, ampunilah orang-orang yang mencukur dan memendekkan rambutnya. Ya Allah, tetapkanlah untuk diriku setiap helai rambut dengan satu kebajikan, dan hapuskanlah dengannya satu keburukan, dan angkatlah serajatku di sisiMu.',
    },
    {
      name: 'Do’a Selesai Menggunting Rambut (tahallul)',
      arabic: 'اَلْحَمْدُ للهِ الَّدِى قَضَى عَنَا مَنَاسِكَنَااَللَّهُمَّ زِدْنَا اِيْمَانَا وَيَقِيْنَا وَعَوْنَا وَاغْفِرْ لَنَا وَلِوَالِدَيْنَا وَلِسَائِرِ اْلمُسْلِمِيْنَ وَاْلمُسْلِمَاتِ',
      latin: 'Alhamdulillahi l-ladzii qadhaa ‘annaa manaasikanaa. Allahumma zidnaa iimanan wa yaqiinan wa ‘aunan waghfir lanaa wa liwaalidainaa wa lisaa-iril muslimiina wal-muslimaat.',
      indonesia: 'Segala puji bagi Allah yang telah menyelesaikan manasik kami. Ya Allah, tambahkanlah kepada kami iman, keyakinan dan pertolongan. Dan ampunilah kami, kedua orangtua kami, dan seluruh kaum muslimin dan muslimat.',
      fin: true,
    },
  ];


  function $render(_props, _slotView) {
    _context["panel"] = $inject("/component/panel");
    var panel = _context["panel"];
    _context["entry"] = $inject("/component/entry-naked");
    var entry = _context["entry"];
    _context["pname"] = $inject("/prayers/prayer-name");
    var pname = _context["pname"];
    _context["home"] = $inject("/component/home-button");
    var home = _context["home"];
    _context["collapsible"] = $inject("/component/collapsible-entry");
    var collapsible = _context["collapsible"];
    _elementOpenStart("div", "");
    _attr("element", "dist.prayers.home");
    _elementOpenEnd("div");
    var _component = IncrementalDOM.currentElement();
    var _validComponent = yalla.framework.validComponentName(_component, _elementName)
    _component._state = _component._state && _validComponent ? _component._state : initState.bind(_component)(_props);
    _component._state._name = _elementName;
    var _state = _component._state;
    var _self = {
      component: _component,
      properties: _props,
      state: _component._state
    };
    if (_validComponent) {
      yalla.framework.propertyCheckChanges(_component._properties, _props, onPropertyChange.bind(_self));
    }
    _component._properties = _props;
    (function(domNode) {
      var node = domNode.element;
      var self = {
        target: node
      };
      self.properties = _props;
      if ('elements' in self.target) {
        self.elements = self.target.elements;
      }
      self.currentTarget = self.target;
      self.component = _component;
      self.component._state = self.component._state || {};
      self.state = self.component._state;

      function asyncFunc_1(data) {
        var _params = {
          "title": "Prayers"
        };
        _context["panel"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {
          if (slotName === "body") {
            _elementOpenStart("div", "");
            _elementOpenEnd("div");
            var _array = data || [];
            _array.forEach(function(dua) {
              _elementOpenStart("span", "");
              _elementOpenEnd("span");
              var _params = {
                "name": dua.name,
                "isLastEntry": dua.fin
              };
              _context["collapsible"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {
                if (slotName === "detail") {
                  _elementOpenStart("div", "");
                  _elementOpenEnd("div");
                  _elementOpenStart("div", "");
                  _attr("class", "col-xs-12");
                  _elementOpenEnd("div");
                  _elementOpenStart("div", "");
                  _attr("class", "pull-right");
                  _elementOpenEnd("div");
                  var _params = {
                    "type": "label",
                    "prompt": dua.arabic,
                    "class": "custom-arabic-text"
                  };
                  _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
                  _elementClose("div");
                  _elementClose("div");
                  _elementOpenStart("div", "");
                  _attr("class", "col-xs-12");
                  _elementOpenEnd("div");
                  var _params = {
                    "type": "label",
                    "prompt": dua.latin,
                    "class": "custom-normal-text custom-italic-text"
                  };
                  _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
                  _elementClose("div");
                  _elementOpenStart("div", "");
                  _attr("class", "col-xs-12");
                  _elementOpenEnd("div");
                  var _params = {
                    "type": "label",
                    "prompt": " ",
                    "class": "custom-normal-text"
                  };
                  _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
                  _elementClose("div");
                  _elementOpenStart("div", "");
                  _attr("class", "col-xs-12");
                  _elementOpenEnd("div");
                  var _params = {
                    "type": "label",
                    "prompt": dua.indonesia,
                    "class": "custom-normal-text"
                  };
                  _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
                  _elementClose("div");
                  _elementClose("div");
                }
              });
              _elementClose("span");
            });
            _elementClose("div");
          }
          if (slotName === "footer") {
            _elementOpenStart("div", "");
            _elementOpenEnd("div");
            _elementOpenStart("div", "");
            _attr("class", "row");
            _elementOpenEnd("div");
            var _params = {};
            _context["home"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            _elementClose("div");
            _elementClose("div");
          }
        });
      }
      var promise = getDuas.bind(self)();
      if (promise && typeof promise == "object" && "then" in promise) {
        _skip();
        promise.then(function(_result) {
          $patchChanges(node, function() {
            asyncFunc_1.call(self, _result)
          });
        }).catch(function(err) {
          console.log(err);
        });
      } else {
        asyncFunc_1.call(self, promise)
      }
    })({
      element: IncrementalDOM.currentElement(),
      pointer: IncrementalDOM.currentPointer()
    });
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());