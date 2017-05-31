yalla.framework.addComponent("/dist/component/userProfile", (function() {
  var $path = "/dist/component/userProfile";
  var $patchChanges = yalla.framework.renderToScreen;
  var $export = {};
  var $context = {};
  var _parentComponent = yalla.framework.getParentComponent;
  var $inject = yalla.framework.createInjector("/dist/component/userProfile");

  function ComponentEvent(type, data, target, currentTarget) {
    this.data = data;
    this.target = target;
    this.type = type;
    this.currentTarget = currentTarget;
  }

  var _elementOpen = IncrementalDOM.elementOpen,
    _elementClose = IncrementalDOM.elementClose,
    _elementOpenStart = IncrementalDOM.elementOpenStart,
    _elementOpenEnd = IncrementalDOM.elementOpenEnd,
    _elementVoid = IncrementalDOM.elementVoid,
    _text = IncrementalDOM.text,
    _attr = IncrementalDOM.attr,
    _skip = IncrementalDOM.skip;

  function initState(props) {
    return {}
  };


  function initState(props) {
    return {
      error: {
        message: props.errorMessage
      }
    };
  }

  function loadProfile(profile, errorMessage) {
    if (!this.state.error.message) this.state.error.message = errorMessage;
    return profile ? profile : {};
  }

  function onRegister() {
    this.state.error.message = '';
    var form = this.target.form;

    if (form.elements.password.value != form.elements.repeatPassword.value) {
      this.state.error.message = "Please repeat your password correctly";
      $patchChanges();
      return;
    }

    var profile = {};
    profile.id = form.elements.id.value;
    profile.firstName = form.elements.firstName.value;
    profile.lastName = form.elements.lastName.value;
    profile.email = form.elements.email.value;
    profile.phone = form.elements.phone.value;
    profile.username = form.elements.email.value;

    if (profile.username) profile.username = profile.username.toLowerCase();
    if (form.elements.password.value != '') profile.password = form.elements.password.value;

    profile.address1 = form.elements.address1.value;
    profile.city = form.elements.city.value;
    profile.isAdmin = (form.elements.isAdmin.value == "on");
    profile.isTravelAgent = (form.elements.isTravelAgent.value == "on");
    debugger;
    this.emitEvent('save', profile);
  }

  function onCancel() {
    this.emitEvent('cancel');
  }


  function $render(_props, _slotView) {
    _elementOpenStart("link", "");
    _attr("element", "dist.component.userProfile");
    _attr("href", "asset/css/custom-style.css");
    _attr("rel", "stylesheet");
    _elementOpenEnd("link");
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
    _elementClose("link");
    $context["alert"] = $inject("/component/alert");
    var alert = $context["alert"];
    $context["entry"] = $inject("/component/entry");
    var entry = $context["entry"];
    _elementOpenStart("div", "");
    _attr("element", "dist.component.userProfile");
    _attr("class", "container all-5px");
    _elementOpenEnd("div");
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
    _elementOpenStart("div", "");
    _attr("class", "row centered-form no-top-margin");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "form-panel col-xs-12 col-sm-12 col-md-12 col-lg-12");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "panel panel-default frosted-glass");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "panel-heading");
    _elementOpenEnd("div");
    if (_props.profile) {
      _elementOpenStart("h3", "");
      _attr("class", "panel-title");
      _elementOpenEnd("h3");
      _text("Your Profile");
      _elementClose("h3");
    }
    if (!_props.profile) {
      _elementOpenStart("h3", "");
      _attr("class", "panel-title");
      _elementOpenEnd("h3");
      _text("Please Sign Up");
      _elementOpenStart("small", "");
      _elementOpenEnd("small");
      _text("It's free!");
      _elementClose("small");
      _elementClose("h3");
    }
    _elementClose("div");
    _elementOpenStart("div", "");
    _attr("class", "panel-body custom-panel-body");
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
      self.component = __component;
      self.component.__state = self.component.__state || {};
      self.state = self.component.__state;

      function asyncFunc__1(data) {
        _elementOpenStart("form", "");
        _attr("role", "form");
        _elementOpenEnd("form");
        _elementOpenStart("input", "");
        _attr("type", "hidden");
        _attr("name", "id");
        _attr("value", data.id);
        _elementOpenEnd("input");
        _elementClose("input");
        _elementOpenStart("div", "");
        _attr("class", "row");
        _elementOpenEnd("div");
        $context["entry"].render({
          "type": "text",
          "prompt": "First Name",
          "name": "firstName",
          "value": data.firstName
        }, function(slotName) {});
        $context["entry"].render({
          "type": "text",
          "prompt": "Last Name",
          "name": "lastName",
          "value": data.lastName
        }, function(slotName) {});
        _elementClose("div");
        _elementOpenStart("div", "");
        _attr("class", "row");
        _elementOpenEnd("div");
        $context["entry"].render({
          "type": "email",
          "prompt": "Email",
          "name": "email",
          "value": data.email
        }, function(slotName) {});
        $context["entry"].render({
          "type": "text",
          "prompt": "Phone",
          "name": "phone",
          "value": data.phone
        }, function(slotName) {});
        _elementClose("div");
        _elementOpenStart("div", "");
        _attr("class", "row");
        _elementOpenEnd("div");
        $context["entry"].render({
          "type": "textarea",
          "prompt": "Address",
          "name": "address1",
          "value": data.address1
        }, function(slotName) {});
        _elementClose("div");
        _elementOpenStart("div", "");
        _attr("class", "row");
        _elementOpenEnd("div");
        $context["entry"].render({
          "type": "text",
          "prompt": "City",
          "name": "city",
          "value": data.city
        }, function(slotName) {});
        _elementClose("div");
        _elementOpenStart("div", "");
        _attr("class", "row");
        _elementOpenEnd("div");
        $context["entry"].render({
          "type": "checkbox",
          "prompt": "Travel Agent",
          "name": "isTravelAgent",
          "value": data.isTravelAgent
        }, function(slotName) {});
        $context["entry"].render({
          "type": "checkbox",
          "prompt": "Administrator",
          "name": "isAdmin",
          "value": data.isAdmin
        }, function(slotName) {});
        _elementClose("div");
        _elementOpenStart("div", "");
        _attr("class", "row");
        _elementOpenEnd("div");
        $context["entry"].render({
          "type": "password",
          "prompt": "Password",
          "name": "password",
          "value": data.password
        }, function(slotName) {});
        $context["entry"].render({
          "type": "password",
          "prompt": "Repeat Password",
          "name": "repeatPassword"
        }, function(slotName) {});
        _elementClose("div");
        $context["alert"].render({
          "alertType": 'error',
          "message": __state.error.message
        }, function(slotName) {});
        _elementOpenStart("div", "");
        _attr("class", "row");
        _elementOpenEnd("div");
        $context["entry"].render({
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
            self.component = __component;
            self.component.__state = self.component.__state || {};
            self.state = self.component.__state;
            self.emitEvent = function(eventName, data) {
              var event = new ComponentEvent(eventName, data, self.target, self.currentTarget);
              if ('on' + eventName in _props) {
                _props['on' + eventName](event);
              }
            };
            return onRegister.bind(self)();
          }
        }, function(slotName) {});
        $context["entry"].render({
          "type": "button",
          "name": "btnCancel",
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
            self.component = __component;
            self.component.__state = self.component.__state || {};
            self.state = self.component.__state;
            self.emitEvent = function(eventName, data) {
              var event = new ComponentEvent(eventName, data, self.target, self.currentTarget);
              if ('on' + eventName in _props) {
                _props['on' + eventName](event);
              }
            };
            return onCancel.bind(self)();
          }
        }, function(slotName) {});
        _elementClose("div");
        _elementClose("form");
      }
      var promise = loadProfile.bind(self)(_props.profile, _props.errorMessage);
      if (promise && typeof promise == "object" && "then" in promise) {
        _skip();
        promise.then(function(_result) {
          $patchChanges(node, function() {
            asyncFunc__1.call(self, _result)
          });
        }).catch(function(err) {
          console.log(err);
        });
      } else {
        asyncFunc__1.call(self, promise)
      }
    })({
      element: IncrementalDOM.currentElement(),
      pointer: IncrementalDOM.currentPointer()
    });
    _elementClose("div");
    _elementClose("div");
    _elementClose("div");
    _elementClose("div");
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());