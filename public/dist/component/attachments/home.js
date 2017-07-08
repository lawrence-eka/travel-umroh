yalla.framework.addComponent("/dist/component/attachments/home", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/component/attachments/home");
  var $export = {};
  var $path = "/dist/component/attachments/home";
  var _elementName = "dist.component.attachments.home";
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
    if (props.onSave) props.onSave.subscribe(onSaveEvent.bind(this));
    return {
      alert: new Alert(null, $patchChanges, "alert"),
      newFiles: [],
      delFiles: [],
      collection: props.collection,
      userId: props.userId,
    }
  }

  function loadFiles() {
    var self = this;
    return new Promise(function(resolve) {
      //debugger;
      var q = {};
      if (self.state.userId) {
        q.uploaderId = self.state.userId;
      }
      dpd[self.state.collection].get(q, function(data, statusCode, headers, config) {
        //debugger;
        resolve(data);
      });
    });
  }

  function onFileDeleted(event) {
    $patchChanges("existingFiles");
  }

  function onDelete(event) {
    this.state.delFiles = this.state.delFiles.concat(event.data);
  }

  function onAddFile() {
    var form = this.target.form;
    var self = this;
    this.state.newFiles = this.state.newFiles.concat(form.elements.addFile.files[0])
    form.reset();
    $patchChanges("newFiles");
    return;
  }

  function onSaveEvent() {
    var self = this;
    var fd = new FormData()
    for (var i in self._state.newFiles) {
      fd.append("uploadedFile", self._state.newFiles[i])
    }
    alert('fd= ' + fd.get('uploadedFile').name);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/' + self._state.collection);
    //var boundary=Math.random().toString().substr(2);
    //xhr.setRequestHeader("Content-type", "multipart/form-data; charset=utf-8; boundary=" + boundary);
    xhr.onload = function() {
      alert("onload");

      var response = JSON.parse(this.responseText);
      self._state.alert.alert(null);

      if (this.status < 300) {
        alert("Upload successful!");
      } else {
        alert(response.message);
      }
    };
    xhr.onerror = function(err) {
      alert("onerror");
      self._state.alert.alert(err);
    }
    xhr.send(fd);

    for (var i in self._state.delFiles) {
      dpd[self._state.collection].del(self._state.delFiles[i], function(res, err) {});
    }
  }


  function $render(_props, _slotView) {
    _context["list"] = $inject("/component/attachments/list");
    var list = _context["list"];
    _context["entry"] = $inject("/component/entry");
    var entry = _context["entry"];
    _context["alert"] = $inject("/component/alert");
    var alert = _context["alert"];
    _elementOpenStart("div", "");
    _attr("element", "dist.component.attachments.home");
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
        _elementOpenStart("div", "");
        _attr("class", "container");
        _elementOpenEnd("div");
        var _params = {
          "naked": "naked",
          "type": "label",
          "prompt": _props.prompt
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        _elementClose("div");
        _elementOpenStart("div", "");
        _elementOpenEnd("div");
        yalla.framework.registerRef("existingFiles", IncrementalDOM.currentElement(), function() {
          var _params = {
            "list": data,
            "folder": "upload/",
            "ondelete": function(event) {
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
              onDelete.bind(self)(event);
            },
            "readonly": _props.readonly
          };
          _context["list"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        })()
        _elementClose("div");
        _elementOpenStart("div", "");
        _elementOpenEnd("div");
        yalla.framework.registerRef("newFiles", IncrementalDOM.currentElement(), function() {
          var _params = {
            "list": _state.newFiles
          };
          _context["list"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        })()
        _elementClose("div");
        if (!_props.readonly) {
          _elementOpenStart("div", "");
          _elementOpenEnd("div");
          _elementOpenStart("form", "");
          _elementOpenEnd("form");
          var _params = {
            "type": "file",
            "name": "addFile",
            "onchange": function(event) {
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
              onAddFile.bind(self)();
            }
          };
          _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
          _elementClose("form");
          _elementClose("div");
        }
        _elementOpenStart("span", "");
        _elementOpenEnd("span");
        yalla.framework.registerRef("alert", IncrementalDOM.currentElement(), function() {
          var _params = {
            "alertType": _state.alert.type.bind(self)(),
            "message": _state.alert.text.bind(self)()
          };
          _context["alert"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        })()
        _elementClose("span");
      }
      var promise = loadFiles.bind(self)();
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