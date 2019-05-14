# Common Mixin

This mixin implements the [Common Action Options](https://interactjs.io/docs/action-options) listed on InteractJS, it makes easier to implement all the others mixins and is used by them.

It will make possible to parameterize the Common Action Options as props:


* `max`
  - Type: `Number`
  - Default: `Infinity`


* `maxPerElement`   
  - Type: `Number | String`
  - Default: `'>= 2'`

* `manualStart`
  - Type: `Boolean`
  - Default: `false`

* `hold`
  - Type: `Number`
  - Default: `1000`

* `inertia` (*Only for `drag` and `resize`*)
  - Type: `Boolean`
  - Default: `true`

* `autoScroll`
  - Type: `Boolean | Object`
  - Default: `true`

* `allowFrom`
  - Type: `String`

* `ignoreFrom`
  - Type: `String`

* `enabled`
  - Type: `Boolean`
  - Default: `true`
