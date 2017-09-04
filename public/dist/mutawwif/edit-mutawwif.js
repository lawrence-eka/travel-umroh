yalla.framework.addComponent("/dist/mutawwif/edit-mutawwif", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/mutawwif/edit-mutawwif");
  var $export = {};
  var $path = "/dist/mutawwif/edit-mutawwif";
  var _elementName = "dist.mutawwif.edit-mutawwif";
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

  function initState(props) {
    //debugger;
    var state = {
      mutawwifId: props.mutawwifId,
      contactPersonId: props.contactPersonId,
      data: null,
      alert: new Alert(null, $patchChanges, "alert"),
    }
    return state;
  }

  function getMutawwif() {
    var self = this;
    return new Promise(function(resolve) {
      if (!self.state.contactPersonId || !self.state.mutawwifId) {
        self.state.data = {};
        resolve(self.state.data);
      } else {
        dpd.mutawwifs.get({
          id: self.state.mutawwifId,
          contactPersonId: self.state.contactPersonId
        }, function(mutawwif) {
          self.state.data = mutawwif;
          resolve(self.state.data);
        });
      }
    });
  }

  function onCancel() {
    this.emitEvent('close');
  }

  function onSave() {
    //debugger;
    var self = this;
    var fe = self.target.form.elements;

    var mtw = self.state.data;
    mtw.contactPersonId = self.state.contactPersonId;
    mtw.firstName = fe.firstName.value;
    mtw.middleName = fe.middleName.value;
    mtw.lastName = fe.lastName.value;
    mtw.phone = fe.phone.value;
    mtw.address = fe.address.value;
    var img = fe.pict.blob;
    if (!self.state.contactPersonId) {
      self.emitEvent('close');
    } else if (!self.state.mutawwifId) {
      dpd.mutawwifs.post(mtw, function(result, err) {
        self.state.alert.alert(err);
        if (!err) {
          prepareProfilePicture.bind(self)(img, result.id);
        }
      });
    } else {
      dpd.mutawwifs.put(self.state.mutawwifId, mtw, function(result, err) {
        self.state.alert.alert(err);
        if (!err) {
          prepareProfilePicture.bind(self)(img, self.state.mutawwifId)
        }
      }); /**/
    }
  }

  function prepareProfilePicture(img, mutawwifId) {
    var self = this;
    if (img) {
      saveFiles.bind(this)([img], mutawwifId + '.jpg')
        .then(function(result) {
          //debugger;
          dpd.mutawwifs.put(mutawwifId, {
            pictureId: result.add[0]
          }, function(result) {
            self.emitEvent('close')
          })
        })
        .catch(function(err) {
          //debugger;
          self.state.alert.alert(err);
        });
    } else {
      //debugger;
      self.emitEvent('close')
    }
  }

  function saveFiles(imgs, newFileName) {
    var self = this;
    console.log('promise to upload');

    return new Promise(function(resolve, reject) {
      var fd = new FormData();
      //debugger;
      if (imgs.length > 0) {
        /* new way started */
        for (var i in imgs) {
          fd.append("uploadedFile", imgs[i].blob, newFileName ? newFileName : imgs[i].filename.name)
        }
        var xhr = new XMLHttpRequest();
        xhr.open('PUT', '/mutawwifphotos');
        xhr.onload = function() {
          var response = JSON.parse(this.responseText);

          if (this.status < 300) {
            //debugger;
            var results = [];
            response.forEach(function(x) {
              results.push(x.id);
            });
            console.log("Upload success.");
            resolve({
              add: results
            });
          } else {
            console.log(response.message);
            reject({
              message: response.message
            });
          }
        };
        xhr.onerror = function(err) {
          reject({
            message: err
          });
        }
        xhr.send(fd);
      } else {
        console.log("Nothing to upload.");
        resolve();
      }
    });
  }


  function $render(_props, _slotView) {
    _context["panel"] = $inject("/component/panel");
    var panel = _context["panel"];
    _context["entry"] = $inject("/component/entry");
    var entry = _context["entry"];
    _context["alert"] = $inject("/component/alert");
    var alert = _context["alert"];
    _context["pict"] = $inject("/component/profile-picture/home");
    var pict = _context["pict"];
    _elementOpenStart("div", "");
    _attr("element", "dist.mutawwif.edit-mutawwif");
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
          "title": (_state.mutawwifId ? 'Edit' : 'New') + ' Mutawwif',
          "nofooter": "nofooter"
        };
        _context["panel"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {
          if (slotName === "body") {
            _elementOpenStart("div", "");
            _elementOpenEnd("div");
            _elementOpenStart("span", "");
            _elementOpenEnd("span");
            yalla.framework.registerRef("alert", IncrementalDOM.currentElement(), function() {
              _elementOpenStart("form", "");
              _elementOpenEnd("form");
              _elementOpenStart("div", "");
              _attr("class", "row");
              _elementOpenEnd("div");
              var _params = {
                "name": "pict",
                "img": '/upload/mutawwifphotos/' + data.id + '.jpg'
              };
              _context["pict"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              var _params = {
                "type": "text",
                "prompt": "First Name",
                "name": "firstName",
                "value": data.firstName,
                "alert": _state.alert
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              var _params = {
                "type": "text",
                "prompt": "Middle Name",
                "name": "middleName",
                "value": data.middleName,
                "alert": _state.alert
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              var _params = {
                "type": "text",
                "prompt": "Last Name",
                "name": "lastName",
                "value": data.lastName,
                "alert": _state.alert
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              var _params = {
                "type": "text",
                "prompt": "Phone Name",
                "name": "phone",
                "value": data.phone,
                "alert": _state.alert
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              var _params = {
                "type": "textarea",
                "prompt": "Address",
                "name": "address",
                "value": data.address,
                "alert": _state.alert
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              var _params = {
                "type": "button",
                "value": "Save",
                "divClass": "col-xs-6 col-sm-6 col-md-6 col-lg-6",
                "onclick": function(event) {
                  var self = {
                    target: event.target
                  };
                  self.properties = _props;
                  if ('elements' in self.target) {
                    self.elements = self.target.elements;
                  }
                  self.currentTarget = this == event.target ? self.target : _parentComponent(event.currentTarget);
                  self.component = _component;
                  self.component._state = self.component._state || {};
                  self.state = self.component._state;
                  self.emitEvent = function(eventName, data) {
                    var event = new ComponentEvent(eventName, data, self.target, self.currentTarget);
                    if ('on' + eventName in _props) {
                      _props['on' + eventName](event);
                    }
                  };
                  onSave.bind(self)();
                }
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              var _params = {
                "type": "button",
                "value": "Cancel",
                "divClass": "col-xs-6 col-sm-6 col-md-6 col-lg-6",
                "onclick": function(event) {
                  var self = {
                    target: event.target
                  };
                  self.properties = _props;
                  if ('elements' in self.target) {
                    self.elements = self.target.elements;
                  }
                  self.currentTarget = this == event.target ? self.target : _parentComponent(event.currentTarget);
                  self.component = _component;
                  self.component._state = self.component._state || {};
                  self.state = self.component._state;
                  self.emitEvent = function(eventName, data) {
                    var event = new ComponentEvent(eventName, data, self.target, self.currentTarget);
                    if ('on' + eventName in _props) {
                      _props['on' + eventName](event);
                    }
                  };
                  onCancel.bind(self)();
                }
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              _elementClose("div");
              _elementClose("form");
              var _params = {
                "message": _state.alert.text.bind(self)(),
                "alertType": _state.alert.type.bind(self)()
              };
              _context["alert"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            })()
            _elementClose("span");
            _elementClose("div");
          }
        });
      }
      var promise = getMutawwif.bind(self)();
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