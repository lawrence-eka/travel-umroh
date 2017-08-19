yalla.framework.addComponent("/dist/umroh-procedure/home", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/umroh-procedure/home");
  var $export = {};
  var $path = "/dist/umroh-procedure/home";
  var _elementName = "dist.umroh-procedure.home";
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


  function getProcedure() {
    return new Promise(function(resolve) {
      resolve(procedure);
    });
  }

  var procedure = [{
      name: 'Menuju Miqat',
      remarks: [{
        msg: "Miqat adalah garis start jama'ah mulai melakan prosesi umrah bisa masjid Dzulhulaifah atau Abyar 'Ali."
      }],
    },
    {
      name: 'Persiapan Ber-ihram',
      remarks: [{
        msg: "Mandi, mengenakan ihram, berwudhlu, shalat sunnah ihram 2 rakaat"
      }],
    },
    {
      name: 'Membaca niat umroh',
      remarks: [{
          msg: "Setelah membaca niat umroh, jauhi hal-hal berikut"
        },
        {
          msg: "Bagi pria",
          bold: true
        },
        {
          msg: "1.Memakai pakaian biasa"
        },
        {
          msg: "2.Memakai sepatu yang menutupi mata kaki"
        },
        {
          msg: "3.Memakai penutup kepala yang melekat dengan kepala seperti topi & peci"
        },
        {
          msg: "Bagi wanita",
          bold: true
        },
        {
          msg: "1.Berkaos tangan"
        },
        {
          msg: "2.Menutup muka"
        },
        {
          msg: "Bagi pria dan wanita",
          bold: true
        },
        {
          msg: "1.Mengenakan wangi-wangian"
        },
        {
          msg: "2.Memotong kuku, dan mencabut/memotong rambut badan"
        },
        {
          msg: "3.Memburu atau menganiaya hewan"
        },
        {
          msg: "4.Kawin, mengawinkan, atau meminang wanita untuk dinikahi"
        },
        {
          msg: "5.Bercumcu atau bersetubuh"
        },
        {
          msg: "6.Memaki, bertengkar, atau mengeluarkan kata-kata kotor"
        },
        {
          msg: "7.Memotong tumbuhan di Tanah Haram"
        }
      ],
    },
    {
      name: 'Berangkat menuju Mekah',
      remarks: [{
        msg: "Selama perjalanan, perbanyaklah berdzikir dan membaca Talbiyah"
      }],
    },
    {
      name: 'Memasuki Masjid Al Haram',
      remarks: [{
        msg: "Dahulukan kaki kanan, sambil membaca Doa Memasuki Masjid Al-Haram."
      }],
    },
    {
      name: 'Melakukan Tawaf',
      remarks: [{
        msg: "Berjalan kaki mengelilingi Kaabah sebanyak 7 kali, dengan posisi Kaabah di sisi kiri. Tawaf dimulai dan berakhir di hadapan Hajar Aswat."
      }],
    },
    {
      name: 'Shalat 2 Rakaat di hadapam Maqam Ibrahim',
      remarks: [{
        msg: "Bacalah surat Al-Kafirun di rakaat pertama dan surat Al-Ikhlas di rakaat kedua."
      }],
    },
    {
      name: 'Minum air Zam-Zam',
      remarks: [{
        msg: "Istirahat sejenak lalu minum air Zam-Zam sambil membaca Doa Minum Air Zam-Zam."
      }],
    },
    {
      name: "Melakukan Sa'i",
      remarks: [{
        msg: "Perjalanan pulang pergi sebanyak 7 kali antara bukit Safa dan bukit Marwah. Saat berada di antara dua lampu hijau, disunnahkan bagi laki-laki untuk berlari-lari kecil."
      }],
    },
    {
      name: 'Melakukan Tahlul',
      remarks: [{
        msg: "Bacalah Doa sebelum Tahlul sebelum mulai pemotongan rambut, dan Doa Sesudah Tahlul setelah pemotongan selesai. Rambut laki-laki boleh digundul atau cukup dipotong pendek, sedangkan rambut perempuan cukup dipotong 2.5 cm sejumput atau merata."
      }],
      fin: true,
    },
  ];


  function $render(_props, _slotView) {
    _context["panel"] = $inject("/component/panel");
    var panel = _context["panel"];
    _context["entry"] = $inject("/component/entry-naked");
    var entry = _context["entry"];
    _context["collapsible"] = $inject("/component/collapsible-entry");
    var collapsible = _context["collapsible"];
    _context["home"] = $inject("/component/home-button");
    var home = _context["home"];
    _elementOpenStart("div", "");
    _attr("element", "dist.umroh-procedure.home");
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
          "title": "Steps of Umra"
        };
        _context["panel"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {
          if (slotName === "body") {
            _elementOpenStart("div", "");
            _elementOpenEnd("div");
            var _array = data || [];
            _array.forEach(function(step) {
              _elementOpenStart("span", "");
              _elementOpenEnd("span");
              var _params = {
                "name": step.name,
                "isLastEntry": step.fin
              };
              _context["collapsible"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {
                if (slotName === "detail") {
                  _elementOpenStart("div", "");
                  _elementOpenEnd("div");
                  var _array = step.remarks || [];
                  _array.forEach(function(rem) {
                    _elementOpenStart("span", "");
                    _elementOpenEnd("span");
                    _elementOpenStart("div", "");
                    _attr("class", "col-xs-12");
                    _elementOpenEnd("div");
                    var _params = {
                      "type": "label",
                      "prompt": rem.msg,
                      "class": (rem.bold ? 'custom-bold-text' : 'custom-normal-text')
                    };
                    _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
                    _elementClose("div");
                    _elementClose("span");
                  });
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
      var promise = getProcedure.bind(self)();
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