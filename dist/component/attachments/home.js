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
    var self = this;
    if (props.onSave) props.onSave.subscribe(onSaveEvent.bind(self));
    if (props.alert) props.alert.onError.subscribe(errorSelector.bind(this));
    debugger;
    var ms = (isNaN(parseInt(props.maxSize)) ? 1000000 : props.maxSize).toString().toLowerCase();
    ms = parseInt(ms) * (ms.indexOf('g') >= 0 ? 1000000000 : ms.indexOf('m') >= 0 ? 1000000 : ms.indexOf('k') >= 0 ? 1000 : 1);
    return {
      newFiles: [],
      delFiles: [],
      curFiles: null,
      collection: props.collection,
      userId: props.userId,
      maxSize: ms,
      maxFile: isNaN(parseInt(props.maxFile)) ? 5 : parseInt(props.maxFile),
      name: props.name,
      error: null,
      attachmentList: props.attachmentList,
    }
  }

  function errorSelector(errors) {
    this._state.error = null;
    if (errors) {
      for (var i in errors) {
        if ((this._state.name && errors[i].name == this._state.name) || (this._state.alias && errors[i].name == this._state.alias)) {
          this._state.error = errors[i].message;
          errors.splice(i, 1);
        }
      }
    }
  }

  function loadFiles() {
    var self = this;
    //debugger;
    return new Promise(function(resolve) {
      debugger;
      var q = {};
      if (self.state.userId) {
        q.uploaderId = self.state.userId;
        q.id = {
          $in: self.state.attachmentList
        };
      }
      dpd[self.state.collection].get(q, function(data, statusCode, headers, config) {
        debugger;
        self.state.curFiles = data;
        resolve(data);
      });
    });
  }

  function onFileDeleted(event) {
    $patchChanges("existingFiles");
  }

  function onDelete(event) {
    //debugger;
    this.state.delFiles = this.state.delFiles.concat(event.data);
  }

  function onUndelete(event) {
    //debugger;
    var i = this.state.delFiles.indexOf(event.data);
    if (i >= 0) this.state.delFiles.splice(i, 1);
  }

  function onAddFile() {
    var form = this.target.form;
    var self = this;
    this.state.newFiles = this.state.newFiles.concat(form.elements.addFile.files[0])
    form.reset();
    $patchChanges("newFiles");
    return;
  }

  function onCancelAdd(event) {
    //debugger;
    var i = this.state.newFiles.indexOf(event.data);
    if (i >= 0) this.state.newFiles.splice(i, 1);
    $patchChanges("newFiles");
    return;
  }

  function onSaveEvent(fnc) {
    console.log('preparing all promises');
    //debugger;
    var self = this;
    //debugger;
    if (this._state.curFiles.length + this._state.newFiles.length - this._state.delFiles.length > this._state.maxFile) {
      fnc({
        name: self._state.name,
        message: 'You can upload only ' + this._state.maxFile + ' file' + (this._state.maxFile > 1 ? 's' : '')
      });
      return;
    }
    console.log(self);
    for (var i in this._state.newFiles) {
      //debugger;
      if (this._state.newFiles[i].size > this._state.maxSize) {
        fnc({
          name: this._state.name,
          message: this._state.newFiles[i].name + " (" + this._state.newFiles[i].size.toGMKByte() + ") is too large. Max size is " + this._state.maxSize.toGMKByte() + ""
        });
        return;
      }
    }
    Promise.all(deleteFiles.bind(this)().concat(saveFiles.bind(this)())).then(function(results) {
      console.log(self);
      var r = [];
      self._state.curFiles.forEach(function(x) {
        r.push(x.id)
      });
      results.find(function(x) {
        return x.hasOwnProperty('add')
      }).add.forEach(function(x) {
        r.push(x)
      });
      results.filter(function(x) {
        return x.hasOwnProperty('del')
      }).forEach(function(x) {
        r = r.filter(function(i) {
          return i != x.del;
        })
      });
      //debugger;
      $patchChanges("newFiles");
      $patchChanges("existingFiles");
      fnc(r);
    }).catch(function(err) {
      $patchChanges("newFiles");
      $patchChanges("existingFiles");
      fnc(null, err);
    });
  }

  function deleteFiles() {
    console.log('promise to delete');
    var self = this;
    var promises = [];
    for (var i in self._state.delFiles) {
      promises.push(
        new Promise(function(resolve, reject) {
          //debugger;
          dpd[self._state.collection].del(self._state.delFiles[i].id, function(res, err) {
            if (err) {
              //debugger;
              reject({
                name: self._state.name,
                message: err
              });
            } else {
              //debugger;
              var delFile = self._state.delFiles.find(function(x) {
                return res.message.indexOf(x.filename) > 0;
              });
              self._state.delFiles.find(function(x) {
                return res.message.indexOf(x.filename) > 0;
              })
              console.log(res);
              resolve({
                del: (delFile ? delFile.id : null)
              });
            }
          });
        })
      );
    }
    return promises;
  }

  function saveFiles() {
    var self = this;
    console.log('promise to upload');
    return [new Promise(function(resolve, reject) {
      var fd = new FormData()
      //debugger;
      if (self._state.newFiles.length > 0) {
        for (var i in self._state.newFiles) {
          //debugger;
          fd.append("uploadedFile", self._state.newFiles[i])
        }
        var xhr = new XMLHttpRequest();
        xhr.open('PUT', '/' + self._state.collection);
        xhr.onload = function() {
          var response = JSON.parse(this.responseText);

          if (this.status < 300) {
            //debugger;
            var results = [];
            response.forEach(function(x) {
              results.push(x.id);
            });
            console.log("Upload success.");
            self._state.newFiles.length = 0;
            resolve({
              add: results
            });
          } else {
            console.log(response.message);
            reject({
              name: self._state.name,
              message: response.message
            });
          }
        };
        xhr.onerror = function(err) {
          reject({
            name: self._state.name,
            message: err
          });
        }
        xhr.send(fd);
      } else {
        console.log("Nothing to upload.");
        resolve();
      }
    })];
  }



  function $render(_props, _slotView) {
    _context["list"] = $inject("/component/attachments/list");
    var list = _context["list"];
    _context["entry"] = $inject("/component/entry");
    var entry = _context["entry"];
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
            "folder": _props.folder,
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
            "onundelete": function(event) {
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
              onUndelete.bind(self)(event);
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
            "list": _state.newFiles,
            "oncancelAdd": function(event) {
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
              onCancelAdd.bind(self)(event);
            }
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
        _elementOpenStart("div", "");
        _attr("class", "container");
        _elementOpenEnd("div");
        _elementOpenStart("div", "");
        _attr("class", "row");
        _elementOpenEnd("div");
        if (_state.error) {
          var _params = {
            "type": "label",
            "class": "custom-entry-prompt custom-error-text",
            "prompt": _state.error
          };
          _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        }
        _elementClose("div");
        _elementClose("div");
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