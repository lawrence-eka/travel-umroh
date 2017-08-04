yalla.framework.addComponent("/dist/user/userProfile", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/user/userProfile");
  var $export = {};
  var $path = "/dist/user/userProfile";
  var _elementName = "dist.user.userProfile";
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
    if (props.onSaved) props.onSaved.subscribe(onSaved.bind(this));
    var state = {
      alert: new Alert(null, $patchChanges, ["alert", "docsTravelAgent"]),
      originalProfile: null,
      onSave: new Event(),
      showDocsTravelAgent: false,

    };
    state.alert.alert(props.error);
    infoText = '';
    return state;
  }

  function onPropertyChange(event) {
    //debugger;
    if (event.error) this.state.alert.alert(event.error.newValue);
  }

  function gotNeedApproval(profile, which) {
    return (profile.needApproval && profile.needApproval.hasOwnProperty(which));
  }

  function loadProfile(profile) {
    profile = (profile ? profile : {});
    this.state.originalProfile = profile;
    this.state.showDocsTravelAgent = (profile.isTravelAgent || (profile.needApproval && profile.needApproval.isTravelAgent));
    return this.state.originalProfile;
  }

  function whatTitle(profile) {
    if (!profile) return "Please Sign Up";
    else if (profile.id == storage.me.read().id) return "Your Profile";
    else return "User Profile";
  }

  function onTravelAgentClick(event) {
    debugger;
    this.state.showDocsTravelAgent = event.data;
    $patchChanges("docsTravelAgent");
  }

  function onRegister() {
    this.state.infoText = "Saving your profile...";
    $patchChanges("info");
    //debugger;
    this.state.alert.alert('');
    var form = this.target.form;

    if (form.elements.password.value != form.elements.repeatPassword.value) {
      this.state.infoText = "";
      $patchChanges("info");
      this.state.alert.alert({
        name: "repeatPassword",
        message: "Please repeat your password correctly"
      });
      return;
    }

    var profile = this.state.originalProfile;
    profile.id = form.elements.id.value;
    profile.firstName = form.elements.firstName.value;
    profile.lastName = form.elements.lastName.value;
    profile.email = form.elements.email.value;
    profile.phone = form.elements.phone.value;
    profile.username = form.elements.email.value;
    profile.isMember = form.elements.isMember.checked;

    if (profile.username) profile.username = profile.username.toLowerCase();
    if (form.elements.password.value != '') profile.password = form.elements.password.value;

    //debugger;
    profile.address1 = form.elements.address1.value;
    profile.city = form.elements.city.value;
    //        if((profile.isAdmin ? true : false) != form.elements.isAdmin.checked) {
    //        	profile.isAdmin = (form.elements.isAdmin.checked);
    //        } else {
    //        	delete profile.isAdmin;
    //	        if(profile.needApproval) delete profile.needApproval.isAdmin;
    //        }

    if ((profile.isTravelAgent ? true : false) != form.elements.isTravelAgent.checked) {
      profile.isTravelAgent = (form.elements.isTravelAgent.checked);
    } else {
      delete profile.isTravelAgent;
      if (profile.needApproval) delete profile.needApproval.isTravelAgent;
    }

    //	    if(profile.needApproval && !profile.needApproval.hasOwnProperty('isAdmin') && !profile.needApproval.hasOwnProperty('isTravelAgent')) {
    if (profile.needApproval && !profile.needApproval.hasOwnProperty('isTravelAgent')) {
      profile.needApproval = null;
    }
    register.bind(this)(profile);
  }

  function onCancel() {
    this.emitEvent('cancel');
  }

  function register(profile) {
    debugger;
    //profile = profile.data;
    var self = this;
    if (!profile.id) {
      dpd.users.post(profile, function(user, err) {
        if (err) {
          debugger;
          self.state.infoText = "";
          $patchChanges("info");
          self.state.alert.alert(err);
        } else {
          dpd.users.login({
            "username": profile.username,
            "password": profile.password
          }, function(user, err) {
            profile.sid = user.id;
            afterSaveProfile.bind(self)(user, err, profile);
          });
        }
      });
    } else {
      dpd.users.put(profile.id, profile, function(user, err) {
        //debugger;
        profile.sid = storage.me.read().sid;
        afterSaveProfile.bind(self)(user, err, profile);
      });
    }
  }

  function afterSaveProfile(user, err, profile) {
    if (err) {
      this.state.infoText = "";
      $patchChanges("info");
      this.state.alert.alert(err);
      $patchChanges();
    } else {
      profile.password = undefined;
      storage.me.save(profile, storage.me.isRemembered());
      debugger;
      if (this.state.onSave.listeners.length) this.state.onSave.publish(afterSaveAttachments.bind(this));
      else afterSaveAttachments.bind(this)();
    }
  }

  function afterSaveAttachments(result, error) {
    debugger;
    if (error) {
      debugger;
      this.state.infoText = "";
      $patchChanges("info");
      this.state.alert.alert(error);
      //$patchChanges("docsTravelAgent");
    } else {
      this.emitEvent('save');
    }
  }

  function $render(_props, _slotView) {
    _context["alert"] = $inject("/component/alert");
    var alert = _context["alert"];
    _context["entry"] = $inject("/component/entry");
    var entry = _context["entry"];
    _context["home"] = $inject("/component/home-button");
    var home = _context["home"];
    _context["panel"] = $inject("/component/panel");
    var panel = _context["panel"];
    _context["ppLink"] = $inject("/component/ppLink");
    var ppLink = _context["ppLink"];
    _context["attachments"] = $inject("/component/attachments/home");
    var attachments = _context["attachments"];
    _elementOpenStart("div", "");
    _attr("element", "dist.user.userProfile");
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
    var _params = {
      "title": whatTitle.bind(self)(_props.profile)
    };
    _context["panel"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {
      if (slotName === "footer") {
        _elementOpenStart("div", "");
        _elementOpenEnd("div");
        var _params = {};
        _context["ppLink"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        _elementClose("div");
      }
      if (slotName === "body") {
        _elementOpenStart("div", "");
        _elementOpenEnd("div");
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
            _elementOpenStart("form", "");
            _elementOpenEnd("form");
            _elementOpenStart("div", "");
            _attr("class", "row");
            _elementOpenEnd("div");
            yalla.framework.registerRef("alert", IncrementalDOM.currentElement(), function() {
              _elementOpenStart("input", "");
              _attr("type", "hidden");
              _attr("name", "id");
              _attr("value", data.id);
              _elementOpenEnd("input");
              _elementClose("input");
              var _params = {
                "type": "text",
                "prompt": "First Name",
                "name": "firstName",
                "value": data.firstName
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              var _params = {
                "type": "text",
                "prompt": "Last Name",
                "name": "lastName",
                "value": data.lastName
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              var _params = {
                "type": "email",
                "prompt": "Email",
                "name": "email",
                "value": data.email,
                "alias": "username",
                "alert": _state.alert
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              var _params = {
                "type": "text",
                "prompt": "Phone",
                "name": "phone",
                "value": data.phone
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              var _params = {
                "type": "textarea",
                "prompt": "Address",
                "name": "address1",
                "value": data.address1
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              var _params = {
                "type": "text",
                "prompt": "City",
                "name": "city",
                "value": data.city
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              var _params = {
                "type": "checkbox",
                "prompt": "Member",
                "name": "isMember",
                "checked": data.isMember
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              if (!gotNeedApproval(data, 'isTravelAgent')) {
                _elementOpenStart("div", "");
                _elementOpenEnd("div");
                var _params = {
                  "type": "checkbox",
                  "prompt": "Travel Agent",
                  "name": "isTravelAgent",
                  "checked": data.isTravelAgent,
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
                    onTravelAgentClick.bind(self)(event);
                  }
                };
                _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
                _elementClose("div");
              }
              if (gotNeedApproval(data, 'isTravelAgent')) {
                _elementOpenStart("div", "");
                _elementOpenEnd("div");
                var _params = {
                  "type": "checkbox",
                  "prompt": "Travel Agent*",
                  "name": "isTravelAgent",
                  "checked": data.needApproval.isTravelAgent,
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
                    onTravelAgentClick.bind(self)(event);
                  }
                };
                _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
                var _params = {
                  "type": "label",
                  "prompt": ('*' + (data.needApproval.isTravelAgent ? 'Request for' : 'Revokal of') + ' Travel Agent Access under review')
                };
                _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
                _elementClose("div");
              }
            })()
            _elementClose("div");
            _elementOpenStart("div", "");
            _elementOpenEnd("div");
            yalla.framework.registerRef("docsTravelAgent", IncrementalDOM.currentElement(), function() {
              if (_state.showDocsTravelAgent) {
                _elementOpenStart("div", "");
                _attr("class", "row");
                _elementOpenEnd("div");
                var _params = {
                  "userId": data.id,
                  "prompt": "Proof of Travel Agency",
                  "collection": "docstravelagent",
                  "folder": "upload/docstravelagent/",
                  "onSave": _state.onSave,
                  "onsaved": function(event) {
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
                    afterSaveAttachments.bind(self)();
                  },
                  "name": "docsTravelAgent",
                  "alert": _state.alert,
                  "maxFile": "10",
                  "maxSize": "100mb"
                };
                _context["attachments"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
                _elementClose("div");
              }
            })()
            _elementClose("div");
            _elementOpenStart("div", "");
            _attr("class", "row");
            _elementOpenEnd("div");
            yalla.framework.registerRef("alert", IncrementalDOM.currentElement(), function() {
              var _params = {
                "type": "password",
                "prompt": "Password",
                "name": "password",
                "value": data.password,
                "alert": _state.alert
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              var _params = {
                "type": "password",
                "prompt": "Repeat Password",
                "name": "repeatPassword",
                "alert": _state.alert
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              var _params = {
                "type": "button",
                "name": "btnSave",
                "value": _props.profile ? 'Save' : 'Register',
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
                  onRegister.bind(self)();
                }
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              var _params = {
                "value": "Cancel",
                "divClass": "col-xs-6 col-sm-6 col-md-6 col-lg-6"
              };
              _context["home"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            })()
            _elementClose("div");
            _elementClose("form");
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
            _elementOpenStart("span", "");
            _elementOpenEnd("span");
            yalla.framework.registerRef("info", IncrementalDOM.currentElement(), function() {
              if (_state.infoText) {
                var _params = {
                  "alertType": "info",
                  "message": _state.infoText
                };
                _context["alert"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              }
            })()
            _elementClose("span");
          }
          var promise = loadProfile.bind(self)(_props.profile);
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
    });
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());