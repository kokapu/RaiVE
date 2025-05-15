import { P as re, v as K, A as g, B as Q, C as ie, E as se, G as ae } from "./index-Dtmgwx_K.js";
class E {
  /**
   * Creates a new `EventEmitter`object.
   *
   * @param {boolean} [eventsSuspended=false] Whether the `EventEmitter` is initially in a suspended
   * state (i.e. not executing callbacks).
   */
  constructor(e = !1) {
    this.eventMap = {}, this.eventsSuspended = e == !0;
  }
  /**
   * The callback function is executed when the associated event is triggered via [`emit()`](#emit).
   * The [`emit()`](#emit) method relays all additional arguments it received to the callback
   * functions. Since [`emit()`](#emit) can be passed a variable number of arguments, it is up to
   * the developer to make sure the arguments match those of the associated callback. In addition,
   * the callback also separately receives all the arguments present in the listener's
   * [`arguments`](Listener#arguments) property. This makes it easy to pass data from where the
   * listener is added to where the listener is executed.
   *
   * @callback EventEmitter~callback
   * @param {...*} [args] A variable number of arguments matching the ones (if any) that were passed
   * to the [`emit()`](#emit) method (except, the first one) followed by the arguments found in the
   * listener's [`arguments`](Listener#arguments) array.
   */
  /**
   * Adds a listener for the specified event. It returns the [`Listener`]{@link Listener} object
   * that was created and attached to the event.
   *
   * To attach a global listener that will be triggered for any events, use
   * [`EventEmitter.ANY_EVENT`]{@link #ANY_EVENT} as the first parameter. Note that a global
   * listener will also be triggered by non-registered events.
   *
   * @param {string|Symbol} event The event to listen to.
   * @param {EventEmitter~callback} callback The callback function to execute when the event occurs.
   * @param {Object} [options={}]
   * @param {Object} [options.context=this] The value of `this` in the callback function.
   * @param {boolean} [options.prepend=false] Whether the listener should be added at the beginning
   * of the listeners array and thus executed first.
   * @param {number} [options.duration=Infinity] The number of milliseconds before the listener
   * automatically expires.
   * @param {number} [options.remaining=Infinity] The number of times after which the callback
   * should automatically be removed.
   * @param {array} [options.arguments] An array of arguments which will be passed separately to the
   * callback function. This array is stored in the [`arguments`]{@link Listener#arguments}
   * property of the [`Listener`]{@link Listener} object and can be retrieved or modified as
   * desired.
   *
   * @returns {Listener} The newly created [`Listener`]{@link Listener} object.
   *
   * @throws {TypeError} The `event` parameter must be a string or
   * [`EventEmitter.ANY_EVENT`]{@link EventEmitter#ANY_EVENT}.
   * @throws {TypeError} The `callback` parameter must be a function.
   */
  addListener(e, t, n = {}) {
    if (typeof e == "string" && e.length < 1 || e instanceof String && e.length < 1 || typeof e != "string" && !(e instanceof String) && e !== E.ANY_EVENT)
      throw new TypeError("The 'event' parameter must be a string or EventEmitter.ANY_EVENT.");
    if (typeof t != "function") throw new TypeError("The callback must be a function.");
    const r = new $(e, this, t, n);
    return this.eventMap[e] || (this.eventMap[e] = []), n.prepend ? this.eventMap[e].unshift(r) : this.eventMap[e].push(r), r;
  }
  /**
   * Adds a one-time listener for the specified event. The listener will be executed once and then
   * destroyed. It returns the [`Listener`]{@link Listener} object that was created and attached
   * to the event.
   *
   * To attach a global listener that will be triggered for any events, use
   * [`EventEmitter.ANY_EVENT`]{@link EventEmitter#ANY_EVENT} as the first parameter. Note that a
   * global listener will also be triggered by non-registered events.
   *
   * @param {string|Symbol} event The event to listen to
   * @param {EventEmitter~callback} callback The callback function to execute when the event occurs
   * @param {Object} [options={}]
   * @param {Object} [options.context=this] The context to invoke the callback function in.
   * @param {boolean} [options.prepend=false] Whether the listener should be added at the beginning
   * of the listeners array and thus executed first.
   * @param {number} [options.duration=Infinity] The number of milliseconds before the listener
   * automatically expires.
   * @param {array} [options.arguments] An array of arguments which will be passed separately to the
   * callback function. This array is stored in the [`arguments`]{@link Listener#arguments}
   * property of the [`Listener`]{@link Listener} object and can be retrieved or modified as
   * desired.
   *
   * @returns {Listener} The newly created [`Listener`]{@link Listener} object.
   *
   * @throws {TypeError} The `event` parameter must be a string or
   * [`EventEmitter.ANY_EVENT`]{@link EventEmitter#ANY_EVENT}.
   * @throws {TypeError} The `callback` parameter must be a function.
   */
  addOneTimeListener(e, t, n = {}) {
    n.remaining = 1, this.addListener(e, t, n);
  }
  /**
   * Identifier to use when adding or removing a listener that should be triggered when any events
   * occur.
   *
   * @type {Symbol}
   */
  static get ANY_EVENT() {
    return Symbol.for("Any event");
  }
  /**
   * Returns `true` if the specified event has at least one registered listener. If no event is
   * specified, the method returns `true` if any event has at least one listener registered (this
   * includes global listeners registered to
   * [`EventEmitter.ANY_EVENT`]{@link EventEmitter#ANY_EVENT}).
   *
   * Note: to specifically check for global listeners added with
   * [`EventEmitter.ANY_EVENT`]{@link EventEmitter#ANY_EVENT}, use
   * [`EventEmitter.ANY_EVENT`]{@link EventEmitter#ANY_EVENT} as the parameter.
   *
   * @param {string|Symbol} [event=(any event)] The event to check
   * @param {function|Listener} [callback=(any callback)] The actual function that was added to the
   * event or the {@link Listener} object returned by `addListener()`.
   * @returns {boolean}
   */
  hasListener(e, t) {
    return e === void 0 ? this.eventMap[E.ANY_EVENT] && this.eventMap[E.ANY_EVENT].length > 0 ? !0 : Object.entries(this.eventMap).some(([, n]) => n.length > 0) : this.eventMap[e] && this.eventMap[e].length > 0 ? t instanceof $ ? this.eventMap[e].filter((r) => r === t).length > 0 : typeof t == "function" ? this.eventMap[e].filter((r) => r.callback === t).length > 0 : t == null : !1;
  }
  /**
   * An array of all the unique event names for which the emitter has at least one registered
   * listener.
   *
   * Note: this excludes global events registered with
   * [`EventEmitter.ANY_EVENT`]{@link EventEmitter#ANY_EVENT} because they are not tied to a
   * specific event.
   *
   * @type {string[]}
   * @readonly
   */
  get eventNames() {
    return Object.keys(this.eventMap);
  }
  /**
   * Returns an array of all the [`Listener`]{@link Listener} objects that have been registered for
   * a specific event.
   *
   * Please note that global events (those added with
   * [`EventEmitter.ANY_EVENT`]{@link EventEmitter#ANY_EVENT}) are not returned for "regular"
   * events. To get the list of global listeners, specifically use
   * [`EventEmitter.ANY_EVENT`]{@link EventEmitter#ANY_EVENT} as the parameter.
   *
   * @param {string|Symbol} event The event to get listeners for.
   * @returns {Listener[]} An array of [`Listener`]{@link Listener} objects.
   */
  getListeners(e) {
    return this.eventMap[e] || [];
  }
  /**
   * Suspends execution of all callbacks functions registered for the specified event type.
   *
   * You can suspend execution of callbacks registered with
   * [`EventEmitter.ANY_EVENT`]{@link EventEmitter#ANY_EVENT} by passing
   * [`EventEmitter.ANY_EVENT`]{@link EventEmitter#ANY_EVENT} to `suspendEvent()`. Beware that this
   * will not suspend all callbacks but only those registered with
   * [`EventEmitter.ANY_EVENT`]{@link EventEmitter#ANY_EVENT}. While this may seem counter-intuitive
   * at first glance, it allows the selective suspension of global listeners while leaving other
   * listeners alone. If you truly want to suspends all callbacks for a specific
   * [`EventEmitter`]{@link EventEmitter}, simply set its `eventsSuspended` property to `true`.
   *
   * @param {string|Symbol} event The event name (or `EventEmitter.ANY_EVENT`) for which to suspend
   * execution of all callback functions.
   */
  suspendEvent(e) {
    this.getListeners(e).forEach((t) => {
      t.suspended = !0;
    });
  }
  /**
   * Resumes execution of all suspended callback functions registered for the specified event type.
   *
   * You can resume execution of callbacks registered with
   * [`EventEmitter.ANY_EVENT`]{@link EventEmitter#ANY_EVENT} by passing
   * [`EventEmitter.ANY_EVENT`]{@link EventEmitter#ANY_EVENT} to `unsuspendEvent()`. Beware that
   * this will not resume all callbacks but only those registered with
   * [`EventEmitter.ANY_EVENT`]{@link EventEmitter#ANY_EVENT}. While this may seem
   * counter-intuitive, it allows the selective unsuspension of global listeners while leaving other
   * callbacks alone.
   *
   * @param {string|Symbol} event The event name (or `EventEmitter.ANY_EVENT`) for which to resume
   * execution of all callback functions.
   */
  unsuspendEvent(e) {
    this.getListeners(e).forEach((t) => {
      t.suspended = !1;
    });
  }
  /**
   * Returns the number of listeners registered for a specific event.
   *
   * Please note that global events (those added with
   * [`EventEmitter.ANY_EVENT`]{@link EventEmitter#ANY_EVENT}) do not count towards the remaining
   * number for a "regular" event. To get the number of global listeners, specifically use
   * [`EventEmitter.ANY_EVENT`]{@link EventEmitter#ANY_EVENT} as the parameter.
   *
   * @param {string|Symbol} event The event which is usually a string but can also be the special
   * [`EventEmitter.ANY_EVENT`]{@link EventEmitter#ANY_EVENT} symbol.
   * @returns {number} An integer representing the number of listeners registered for the specified
   * event.
   */
  getListenerCount(e) {
    return this.getListeners(e).length;
  }
  /**
   * Executes the callback function of all the [`Listener`]{@link Listener} objects registered for
   * a given event. The callback functions are passed the additional arguments passed to `emit()`
   * (if any) followed by the arguments present in the [`arguments`](Listener#arguments) property of
   * the [`Listener`](Listener) object (if any).
   *
   * If the [`eventsSuspended`]{@link #eventsSuspended} property is `true` or the
   * [`Listener.suspended`]{@link Listener#suspended} property is `true`, the callback functions
   * will not be executed.
   *
   * This function returns an array containing the return values of each of the callbacks.
   *
   * It should be noted that the regular listeners are triggered first followed by the global
   * listeners (those added with [`EventEmitter.ANY_EVENT`]{@link EventEmitter#ANY_EVENT}).
   *
   * @param {string} event The event
   * @param {...*} args Arbitrary number of arguments to pass along to the callback functions
   *
   * @returns {Array} An array containing the return value of each of the executed listener
   * functions.
   *
   * @throws {TypeError} The `event` parameter must be a string.
   */
  emit(e, ...t) {
    if (typeof e != "string" && !(e instanceof String))
      throw new TypeError("The 'event' parameter must be a string.");
    if (this.eventsSuspended) return;
    let n = [], r = this.eventMap[E.ANY_EVENT] || [];
    return this.eventMap[e] && (r = r.concat(this.eventMap[e])), r.forEach((s) => {
      if (s.suspended) return;
      let d = [...t];
      Array.isArray(s.arguments) && (d = d.concat(s.arguments)), s.remaining > 0 && (n.push(s.callback.apply(s.context, d)), s.count++), --s.remaining < 1 && s.remove();
    }), n;
  }
  /**
   * Removes all the listeners that were added to the object upon which the method is called and
   * that match the specified criterias. If no parameters are passed, all listeners added to this
   * object will be removed. If only the `event` parameter is passed, all listeners for that event
   * will be removed from that object. You can remove global listeners by using
   * [`EventEmitter.ANY_EVENT`]{@link EventEmitter#ANY_EVENT} as the first parameter.
   *
   * To use more granular options, you must at least define the `event`. Then, you can specify the
   * callback to match or one or more of the additional options.
   *
   * @param {string} [event] The event name.
   * @param {EventEmitter~callback} [callback] Only remove the listeners that match this exact
   * callback function.
   * @param {Object} [options]
   * @param {*} [options.context] Only remove the listeners that have this exact context.
   * @param {number} [options.remaining] Only remove the listener if it has exactly that many
   * remaining times to be executed.
   */
  removeListener(e, t, n = {}) {
    if (e === void 0) {
      this.eventMap = {};
      return;
    } else if (!this.eventMap[e])
      return;
    let r = this.eventMap[e].filter((s) => t && s.callback !== t || n.remaining && n.remaining !== s.remaining || n.context && n.context !== s.context);
    r.length ? this.eventMap[e] = r : delete this.eventMap[e];
  }
  /**
   * The `waitFor()` method is an async function which returns a promise. The promise is fulfilled
   * when the specified event occurs. The event can be a regular event or
   * [`EventEmitter.ANY_EVENT`]{@link EventEmitter#ANY_EVENT} (if you want to resolve as soon as any
   * event is emitted).
   *
   * If the `duration` option is set, the promise will only be fulfilled if the event is emitted
   * within the specified duration. If the event has not been fulfilled after the specified
   * duration, the promise is rejected. This makes it super easy to wait for an event and timeout
   * after a certain time if the event is not triggered.
   *
   * @param {string|Symbol} event The event to wait for
   * @param {Object} [options={}]
   * @param {number} [options.duration=Infinity] The number of milliseconds to wait before the
   * promise is automatically rejected.
   */
  async waitFor(e, t = {}) {
    return t.duration = parseInt(t.duration), (isNaN(t.duration) || t.duration <= 0) && (t.duration = 1 / 0), new Promise((n, r) => {
      let s, d = this.addListener(e, () => {
        clearTimeout(s), n();
      }, { remaining: 1 });
      t.duration !== 1 / 0 && (s = setTimeout(() => {
        d.remove(), r("The duration expired before the event was emitted.");
      }, t.duration));
    });
  }
  /**
   * The number of unique events that have registered listeners.
   *
   * Note: this excludes global events registered with
   * [`EventEmitter.ANY_EVENT`]{@link EventEmitter#ANY_EVENT} because they are not tied to a
   * specific event.
   *
   * @type {number}
   * @readonly
   */
  get eventCount() {
    return Object.keys(this.eventMap).length;
  }
}
class $ {
  /**
   * Creates a new `Listener` object
   *
   * @param {string|Symbol} event The event being listened to
   * @param {EventEmitter} target The [`EventEmitter`]{@link EventEmitter} object that the listener
   * is attached to.
   * @param {EventEmitter~callback} callback The function to call when the listener is triggered
   * @param {Object} [options={}]
   * @param {Object} [options.context=target] The context to invoke the listener in (a.k.a. the
   * value of `this` inside the callback function).
   * @param {number} [options.remaining=Infinity] The remaining number of times after which the
   * callback should automatically be removed.
   * @param {array} [options.arguments] An array of arguments that will be passed separately to the
   * callback function upon execution. The array is stored in the [`arguments`]{@link #arguments}
   * property and can be retrieved or modified as desired.
   *
   * @throws {TypeError} The `event` parameter must be a string or
   * [`EventEmitter.ANY_EVENT`]{@link EventEmitter#ANY_EVENT}.
   * @throws {ReferenceError} The `target` parameter is mandatory.
   * @throws {TypeError} The `callback` must be a function.
   */
  constructor(e, t, n, r = {}) {
    if (typeof e != "string" && !(e instanceof String) && e !== E.ANY_EVENT)
      throw new TypeError("The 'event' parameter must be a string or EventEmitter.ANY_EVENT.");
    if (!t)
      throw new ReferenceError("The 'target' parameter is mandatory.");
    if (typeof n != "function")
      throw new TypeError("The 'callback' must be a function.");
    r.arguments !== void 0 && !Array.isArray(r.arguments) && (r.arguments = [r.arguments]), r = Object.assign({
      context: t,
      remaining: 1 / 0,
      arguments: void 0,
      duration: 1 / 0
    }, r), r.duration !== 1 / 0 && setTimeout(() => this.remove(), r.duration), this.arguments = r.arguments, this.callback = n, this.context = r.context, this.count = 0, this.event = e, this.remaining = parseInt(r.remaining) >= 1 ? parseInt(r.remaining) : 1 / 0, this.suspended = !1, this.target = t;
  }
  /**
   * Removes the listener from its target.
   */
  remove() {
    this.target.removeListener(
      this.event,
      this.callback,
      { context: this.context, remaining: this.remaining }
    );
  }
}
/**
 * The `Enumerations` class contains enumerations and arrays of elements used throughout the
 * library. All its properties are static and should be referenced using the class name. For
 * example: `Enumerations.CHANNEL_MESSAGES`.
 *
 * @license Apache-2.0
 * @since 3.0.0
 */
class i {
  /**
   * @enum {Object.<string, number>}
   * @readonly
   * @deprecated since 3.1 (use Enumerations.CHANNEL_MESSAGES instead)
   * @private
   * @static
   */
  static get MIDI_CHANNEL_MESSAGES() {
    return this.validation && console.warn(
      "The MIDI_CHANNEL_MESSAGES enum has been deprecated. Use the Enumerations.CHANNEL_MESSAGES enum instead."
    ), i.CHANNEL_MESSAGES;
  }
  /**
   * Enumeration of all MIDI channel message names and their associated 4-bit numerical value:
   *
   * | Message Name        | Hexadecimal | Decimal |
   * |---------------------|-------------|---------|
   * | `noteoff`           | 0x8         | 8       |
   * | `noteon`            | 0x9         | 9       |
   * | `keyaftertouch`     | 0xA         | 10      |
   * | `controlchange`     | 0xB         | 11      |
   * | `programchange`     | 0xC         | 12      |
   * | `channelaftertouch` | 0xD         | 13      |
   * | `pitchbend`         | 0xE         | 14      |
   *
   * @enum {Object.<string, number>}
   * @readonly
   * @since 3.1
   * @static
   */
  static get CHANNEL_MESSAGES() {
    return {
      noteoff: 8,
      // 8
      noteon: 9,
      // 9
      keyaftertouch: 10,
      // 10
      controlchange: 11,
      // 11
      programchange: 12,
      // 12
      channelaftertouch: 13,
      // 13
      pitchbend: 14
      // 14
    };
  }
  /**
   * A simple array of the 16 valid MIDI channel numbers (`1` to `16`):
   *
   * @type {number[]}
   * @readonly
   * @since 3.1
   * @static
   */
  static get CHANNEL_NUMBERS() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  }
  /**
   * @type {number[]}
   * @readonly
   * @deprecated since 3.1 (use Enumerations.CHANNEL_NUMBERS instead)
   * @private
   * @static
   */
  static get MIDI_CHANNEL_NUMBERS() {
    return this.validation && console.warn(
      "The MIDI_CHANNEL_NUMBERS array has been deprecated. Use the Enumerations.CHANNEL_NUMBERS array instead."
    ), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  }
  /**
   * Enumeration of all MIDI channel mode message names and their associated numerical value:
   *
   *
   * | Message Name          | Hexadecimal | Decimal |
   * |-----------------------|-------------|---------|
   * | `allsoundoff`         | 0x78        | 120     |
   * | `resetallcontrollers` | 0x79        | 121     |
   * | `localcontrol`        | 0x7A        | 122     |
   * | `allnotesoff`         | 0x7B        | 123     |
   * | `omnimodeoff`         | 0x7C        | 124     |
   * | `omnimodeon`          | 0x7D        | 125     |
   * | `monomodeon`          | 0x7E        | 126     |
   * | `polymodeon`          | 0x7F        | 127     |
   *
   * @enum {Object.<string, number>}
   * @readonly
   * @since 3.1
   * @static
   */
  static get CHANNEL_MODE_MESSAGES() {
    return {
      allsoundoff: 120,
      resetallcontrollers: 121,
      localcontrol: 122,
      allnotesoff: 123,
      omnimodeoff: 124,
      omnimodeon: 125,
      monomodeon: 126,
      polymodeon: 127
    };
  }
  /**
   * @enum {Object.<string, number>}
   * @deprecated since 3.1 (use Enumerations.CHANNEL_MODE_MESSAGES instead)
   * @private
   * @readonly
   * @static
   */
  static get MIDI_CHANNEL_MODE_MESSAGES() {
    return this.validation && console.warn(
      "The MIDI_CHANNEL_MODE_MESSAGES enum has been deprecated. Use the Enumerations.CHANNEL_MODE_MESSAGES enum instead."
    ), i.CHANNEL_MODE_MESSAGES;
  }
  /**
   * @enum {Object.<string, number>}
   * @readonly
   * @static
   * @private
   * @deprecated since version 3.0.26 (use `CONTROL_CHANGE_MESSAGES` instead)
   */
  static get MIDI_CONTROL_CHANGE_MESSAGES() {
    return this.validation && console.warn(
      "The MIDI_CONTROL_CHANGE_MESSAGES enum has been deprecated. Use the Enumerations.CONTROL_CHANGE_MESSAGES array instead."
    ), {
      bankselectcoarse: 0,
      modulationwheelcoarse: 1,
      breathcontrollercoarse: 2,
      controller3: 3,
      footcontrollercoarse: 4,
      portamentotimecoarse: 5,
      dataentrycoarse: 6,
      volumecoarse: 7,
      balancecoarse: 8,
      controller9: 9,
      pancoarse: 10,
      expressioncoarse: 11,
      effectcontrol1coarse: 12,
      effectcontrol2coarse: 13,
      controller14: 14,
      controller15: 15,
      generalpurposeslider1: 16,
      generalpurposeslider2: 17,
      generalpurposeslider3: 18,
      generalpurposeslider4: 19,
      controller20: 20,
      controller21: 21,
      controller22: 22,
      controller23: 23,
      controller24: 24,
      controller25: 25,
      controller26: 26,
      controller27: 27,
      controller28: 28,
      controller29: 29,
      controller30: 30,
      controller31: 31,
      bankselectfine: 32,
      modulationwheelfine: 33,
      breathcontrollerfine: 34,
      controller35: 35,
      footcontrollerfine: 36,
      portamentotimefine: 37,
      dataentryfine: 38,
      volumefine: 39,
      balancefine: 40,
      controller41: 41,
      panfine: 42,
      expressionfine: 43,
      effectcontrol1fine: 44,
      effectcontrol2fine: 45,
      controller46: 46,
      controller47: 47,
      controller48: 48,
      controller49: 49,
      controller50: 50,
      controller51: 51,
      controller52: 52,
      controller53: 53,
      controller54: 54,
      controller55: 55,
      controller56: 56,
      controller57: 57,
      controller58: 58,
      controller59: 59,
      controller60: 60,
      controller61: 61,
      controller62: 62,
      controller63: 63,
      holdpedal: 64,
      portamento: 65,
      sustenutopedal: 66,
      softpedal: 67,
      legatopedal: 68,
      hold2pedal: 69,
      soundvariation: 70,
      resonance: 71,
      soundreleasetime: 72,
      soundattacktime: 73,
      brightness: 74,
      soundcontrol6: 75,
      soundcontrol7: 76,
      soundcontrol8: 77,
      soundcontrol9: 78,
      soundcontrol10: 79,
      generalpurposebutton1: 80,
      generalpurposebutton2: 81,
      generalpurposebutton3: 82,
      generalpurposebutton4: 83,
      controller84: 84,
      controller85: 85,
      controller86: 86,
      controller87: 87,
      controller88: 88,
      controller89: 89,
      controller90: 90,
      reverblevel: 91,
      tremololevel: 92,
      choruslevel: 93,
      celestelevel: 94,
      phaserlevel: 95,
      databuttonincrement: 96,
      databuttondecrement: 97,
      nonregisteredparametercoarse: 98,
      nonregisteredparameterfine: 99,
      registeredparametercoarse: 100,
      registeredparameterfine: 101,
      controller102: 102,
      controller103: 103,
      controller104: 104,
      controller105: 105,
      controller106: 106,
      controller107: 107,
      controller108: 108,
      controller109: 109,
      controller110: 110,
      controller111: 111,
      controller112: 112,
      controller113: 113,
      controller114: 114,
      controller115: 115,
      controller116: 116,
      controller117: 117,
      controller118: 118,
      controller119: 119,
      allsoundoff: 120,
      resetallcontrollers: 121,
      localcontrol: 122,
      allnotesoff: 123,
      omnimodeoff: 124,
      omnimodeon: 125,
      monomodeon: 126,
      polymodeon: 127
    };
  }
  /**
   * An array of objects, ordered by control number, describing control change messages. Each object
   * in the array has 3 properties with some objects having a fourth one (`position`) :
   *
   *  * `number`: MIDI control number (0-127);
   *  * `name`: name of emitted event (eg: `bankselectcoarse`, `choruslevel`, etc) that can be
   *  listened to;
   *  * `description`: user-friendly description of the controller's purpose;
   *  * `position` (optional): whether this controller's value should be considered an `msb` or
   *  `lsb`
   *
   * Not all controllers have a predefined function. For those that don't, `name` is the word
   * "controller" followed by the number (e.g. `controller112`).
   *
   * | Event name                     | Control Number |
   * |--------------------------------|----------------|
   * | `bankselectcoarse`             | 0              |
   * | `modulationwheelcoarse`        | 1              |
   * | `breathcontrollercoarse`       | 2              |
   * | `controller3`                  | 3              |
   * | `footcontrollercoarse`         | 4              |
   * | `portamentotimecoarse`         | 5              |
   * | `dataentrycoarse`              | 6              |
   * | `volumecoarse`                 | 7              |
   * | `balancecoarse`                | 8              |
   * | `controller9`                  | 9              |
   * | `pancoarse`                    | 10             |
   * | `expressioncoarse`             | 11             |
   * | `effectcontrol1coarse`         | 12             |
   * | `effectcontrol2coarse`         | 13             |
   * | `controller14`                 | 14             |
   * | `controller15`                 | 15             |
   * | `generalpurposecontroller1`    | 16             |
   * | `generalpurposecontroller2`    | 17             |
   * | `generalpurposecontroller3`    | 18             |
   * | `generalpurposecontroller4`    | 19             |
   * | `controller20`                 | 20             |
   * | `controller21`                 | 21             |
   * | `controller22`                 | 22             |
   * | `controller23`                 | 23             |
   * | `controller24`                 | 24             |
   * | `controller25`                 | 25             |
   * | `controller26`                 | 26             |
   * | `controller27`                 | 27             |
   * | `controller28`                 | 28             |
   * | `controller29`                 | 29             |
   * | `controller30`                 | 30             |
   * | `controller31`                 | 31             |
   * | `bankselectfine`               | 32             |
   * | `modulationwheelfine`          | 33             |
   * | `breathcontrollerfine`         | 34             |
   * | `controller35`                 | 35             |
   * | `footcontrollerfine`           | 36             |
   * | `portamentotimefine`           | 37             |
   * | `dataentryfine`                | 38             |
   * | `channelvolumefine`            | 39             |
   * | `balancefine`                  | 40             |
   * | `controller41`                 | 41             |
   * | `panfine`                      | 42             |
   * | `expressionfine`               | 43             |
   * | `effectcontrol1fine`           | 44             |
   * | `effectcontrol2fine`           | 45             |
   * | `controller46`                 | 46             |
   * | `controller47`                 | 47             |
   * | `controller48`                 | 48             |
   * | `controller49`                 | 49             |
   * | `controller50`                 | 50             |
   * | `controller51`                 | 51             |
   * | `controller52`                 | 52             |
   * | `controller53`                 | 53             |
   * | `controller54`                 | 54             |
   * | `controller55`                 | 55             |
   * | `controller56`                 | 56             |
   * | `controller57`                 | 57             |
   * | `controller58`                 | 58             |
   * | `controller59`                 | 59             |
   * | `controller60`                 | 60             |
   * | `controller61`                 | 61             |
   * | `controller62`                 | 62             |
   * | `controller63`                 | 63             |
   * | `damperpedal`                  | 64             |
   * | `portamento`                   | 65             |
   * | `sostenuto`                    | 66             |
   * | `softpedal`                    | 67             |
   * | `legatopedal`                  | 68             |
   * | `hold2`                        | 69             |
   * | `soundvariation`               | 70             |
   * | `resonance`                    | 71             |
   * | `releasetime`                  | 72             |
   * | `attacktime`                   | 73             |
   * | `brightness`                   | 74             |
   * | `decaytime`                    | 75             |
   * | `vibratorate`                  | 76             |
   * | `vibratodepth`                 | 77             |
   * | `vibratodelay`                 | 78             |
   * | `controller79`                 | 79             |
   * | `generalpurposecontroller5`    | 80             |
   * | `generalpurposecontroller6`    | 81             |
   * | `generalpurposecontroller7`    | 82             |
   * | `generalpurposecontroller8`    | 83             |
   * | `portamentocontrol`            | 84             |
   * | `controller85`                 | 85             |
   * | `controller86`                 | 86             |
   * | `controller87`                 | 87             |
   * | `highresolutionvelocityprefix` | 88             |
   * | `controller89`                 | 89             |
   * | `controller90`                 | 90             |
   * | `effect1depth`                 | 91             |
   * | `effect2depth`                 | 92             |
   * | `effect3depth`                 | 93             |
   * | `effect4depth`                 | 94             |
   * | `effect5depth`                 | 95             |
   * | `dataincrement`                | 96             |
   * | `datadecrement`                | 97             |
   * | `nonregisteredparameterfine`   | 98             |
   * | `nonregisteredparametercoarse` | 99             |
   * | `nonregisteredparameterfine`   | 100            |
   * | `registeredparametercoarse`    | 101            |
   * | `controller102`                | 102            |
   * | `controller103`                | 103            |
   * | `controller104`                | 104            |
   * | `controller105`                | 105            |
   * | `controller106`                | 106            |
   * | `controller107`                | 107            |
   * | `controller108`                | 108            |
   * | `controller109`                | 109            |
   * | `controller110`                | 110            |
   * | `controller111`                | 111            |
   * | `controller112`                | 112            |
   * | `controller113`                | 113            |
   * | `controller114`                | 114            |
   * | `controller115`                | 115            |
   * | `controller116`                | 116            |
   * | `controller117`                | 117            |
   * | `controller118`                | 118            |
   * | `controller119`                | 119            |
   * | `allsoundoff`                  | 120            |
   * | `resetallcontrollers`          | 121            |
   * | `localcontrol`                 | 122            |
   * | `allnotesoff`                  | 123            |
   * | `omnimodeoff`                  | 124            |
   * | `omnimodeon`                   | 125            |
   * | `monomodeon`                   | 126            |
   * | `polymodeon`                   | 127            |
   *
   * @type {object[]}
   * @readonly
   * @static
   * @since 3.1
   */
  static get CONTROL_CHANGE_MESSAGES() {
    return [
      {
        number: 0,
        name: "bankselectcoarse",
        description: "Bank Select (Coarse)",
        position: "msb"
      },
      {
        number: 1,
        name: "modulationwheelcoarse",
        description: "Modulation Wheel (Coarse)",
        position: "msb"
      },
      {
        number: 2,
        name: "breathcontrollercoarse",
        description: "Breath Controller (Coarse)",
        position: "msb"
      },
      {
        number: 3,
        name: "controller3",
        description: "Undefined",
        position: "msb"
      },
      {
        number: 4,
        name: "footcontrollercoarse",
        description: "Foot Controller (Coarse)",
        position: "msb"
      },
      {
        number: 5,
        name: "portamentotimecoarse",
        description: "Portamento Time (Coarse)",
        position: "msb"
      },
      {
        number: 6,
        name: "dataentrycoarse",
        description: "Data Entry (Coarse)",
        position: "msb"
      },
      {
        number: 7,
        name: "volumecoarse",
        description: "Channel Volume (Coarse)",
        position: "msb"
      },
      {
        number: 8,
        name: "balancecoarse",
        description: "Balance (Coarse)",
        position: "msb"
      },
      {
        number: 9,
        name: "controller9",
        description: "Controller 9 (Coarse)",
        position: "msb"
      },
      {
        number: 10,
        name: "pancoarse",
        description: "Pan (Coarse)",
        position: "msb"
      },
      {
        number: 11,
        name: "expressioncoarse",
        description: "Expression Controller (Coarse)",
        position: "msb"
      },
      {
        number: 12,
        name: "effectcontrol1coarse",
        description: "Effect Control 1 (Coarse)",
        position: "msb"
      },
      {
        number: 13,
        name: "effectcontrol2coarse",
        description: "Effect Control 2 (Coarse)",
        position: "msb"
      },
      {
        number: 14,
        name: "controller14",
        description: "Undefined",
        position: "msb"
      },
      {
        number: 15,
        name: "controller15",
        description: "Undefined",
        position: "msb"
      },
      {
        number: 16,
        name: "generalpurposecontroller1",
        description: "General Purpose Controller 1 (Coarse)",
        position: "msb"
      },
      {
        number: 17,
        name: "generalpurposecontroller2",
        description: "General Purpose Controller 2 (Coarse)",
        position: "msb"
      },
      {
        number: 18,
        name: "generalpurposecontroller3",
        description: "General Purpose Controller 3 (Coarse)",
        position: "msb"
      },
      {
        number: 19,
        name: "generalpurposecontroller4",
        description: "General Purpose Controller 4 (Coarse)",
        position: "msb"
      },
      {
        number: 20,
        name: "controller20",
        description: "Undefined",
        position: "msb"
      },
      {
        number: 21,
        name: "controller21",
        description: "Undefined",
        position: "msb"
      },
      {
        number: 22,
        name: "controller22",
        description: "Undefined",
        position: "msb"
      },
      {
        number: 23,
        name: "controller23",
        description: "Undefined",
        position: "msb"
      },
      {
        number: 24,
        name: "controller24",
        description: "Undefined",
        position: "msb"
      },
      {
        number: 25,
        name: "controller25",
        description: "Undefined",
        position: "msb"
      },
      {
        number: 26,
        name: "controller26",
        description: "Undefined",
        position: "msb"
      },
      {
        number: 27,
        name: "controller27",
        description: "Undefined",
        position: "msb"
      },
      {
        number: 28,
        name: "controller28",
        description: "Undefined",
        position: "msb"
      },
      {
        number: 29,
        name: "controller29",
        description: "Undefined",
        position: "msb"
      },
      {
        number: 30,
        name: "controller30",
        description: "Undefined",
        position: "msb"
      },
      {
        number: 31,
        name: "controller31",
        description: "Undefined",
        position: "msb"
      },
      {
        number: 32,
        name: "bankselectfine",
        description: "Bank Select (Fine)",
        position: "lsb"
      },
      {
        number: 33,
        name: "modulationwheelfine",
        description: "Modulation Wheel (Fine)",
        position: "lsb"
      },
      {
        number: 34,
        name: "breathcontrollerfine",
        description: "Breath Controller (Fine)",
        position: "lsb"
      },
      {
        number: 35,
        name: "controller35",
        description: "Undefined",
        position: "lsb"
      },
      {
        number: 36,
        name: "footcontrollerfine",
        description: "Foot Controller (Fine)",
        position: "lsb"
      },
      {
        number: 37,
        name: "portamentotimefine",
        description: "Portamento Time (Fine)",
        position: "lsb"
      },
      {
        number: 38,
        name: "dataentryfine",
        description: "Data Entry (Fine)",
        position: "lsb"
      },
      {
        number: 39,
        name: "channelvolumefine",
        description: "Channel Volume (Fine)",
        position: "lsb"
      },
      {
        number: 40,
        name: "balancefine",
        description: "Balance (Fine)",
        position: "lsb"
      },
      {
        number: 41,
        name: "controller41",
        description: "Undefined",
        position: "lsb"
      },
      {
        number: 42,
        name: "panfine",
        description: "Pan (Fine)",
        position: "lsb"
      },
      {
        number: 43,
        name: "expressionfine",
        description: "Expression Controller (Fine)",
        position: "lsb"
      },
      {
        number: 44,
        name: "effectcontrol1fine",
        description: "Effect control 1 (Fine)",
        position: "lsb"
      },
      {
        number: 45,
        name: "effectcontrol2fine",
        description: "Effect control 2 (Fine)",
        position: "lsb"
      },
      {
        number: 46,
        name: "controller46",
        description: "Undefined",
        position: "lsb"
      },
      {
        number: 47,
        name: "controller47",
        description: "Undefined",
        position: "lsb"
      },
      {
        number: 48,
        name: "controller48",
        description: "General Purpose Controller 1 (Fine)",
        position: "lsb"
      },
      {
        number: 49,
        name: "controller49",
        description: "General Purpose Controller 2 (Fine)",
        position: "lsb"
      },
      {
        number: 50,
        name: "controller50",
        description: "General Purpose Controller 3 (Fine)",
        position: "lsb"
      },
      {
        number: 51,
        name: "controller51",
        description: "General Purpose Controller 4 (Fine)",
        position: "lsb"
      },
      {
        number: 52,
        name: "controller52",
        description: "Undefined",
        position: "lsb"
      },
      {
        number: 53,
        name: "controller53",
        description: "Undefined",
        position: "lsb"
      },
      {
        number: 54,
        name: "controller54",
        description: "Undefined",
        position: "lsb"
      },
      {
        number: 55,
        name: "controller55",
        description: "Undefined",
        position: "lsb"
      },
      {
        number: 56,
        name: "controller56",
        description: "Undefined",
        position: "lsb"
      },
      {
        number: 57,
        name: "controller57",
        description: "Undefined",
        position: "lsb"
      },
      {
        number: 58,
        name: "controller58",
        description: "Undefined",
        position: "lsb"
      },
      {
        number: 59,
        name: "controller59",
        description: "Undefined",
        position: "lsb"
      },
      {
        number: 60,
        name: "controller60",
        description: "Undefined",
        position: "lsb"
      },
      {
        number: 61,
        name: "controller61",
        description: "Undefined",
        position: "lsb"
      },
      {
        number: 62,
        name: "controller62",
        description: "Undefined",
        position: "lsb"
      },
      {
        number: 63,
        name: "controller63",
        description: "Undefined",
        position: "lsb"
      },
      {
        number: 64,
        name: "damperpedal",
        description: "Damper Pedal On/Off"
      },
      {
        number: 65,
        name: "portamento",
        description: "Portamento On/Off"
      },
      {
        number: 66,
        name: "sostenuto",
        description: "Sostenuto On/Off"
      },
      {
        number: 67,
        name: "softpedal",
        description: "Soft Pedal On/Off"
      },
      {
        number: 68,
        name: "legatopedal",
        description: "Legato Pedal On/Off"
      },
      {
        number: 69,
        name: "hold2",
        description: "Hold 2 On/Off"
      },
      {
        number: 70,
        name: "soundvariation",
        description: "Sound Variation",
        position: "lsb"
      },
      {
        number: 71,
        name: "resonance",
        description: "Resonance",
        position: "lsb"
      },
      {
        number: 72,
        name: "releasetime",
        description: "Release Time",
        position: "lsb"
      },
      {
        number: 73,
        name: "attacktime",
        description: "Attack Time",
        position: "lsb"
      },
      {
        number: 74,
        name: "brightness",
        description: "Brightness",
        position: "lsb"
      },
      {
        number: 75,
        name: "decaytime",
        description: "Decay Time",
        position: "lsb"
      },
      {
        number: 76,
        name: "vibratorate",
        description: "Vibrato Rate",
        position: "lsb"
      },
      {
        number: 77,
        name: "vibratodepth",
        description: "Vibrato Depth",
        position: "lsb"
      },
      {
        number: 78,
        name: "vibratodelay",
        description: "Vibrato Delay",
        position: "lsb"
      },
      {
        number: 79,
        name: "controller79",
        description: "Undefined",
        position: "lsb"
      },
      {
        number: 80,
        name: "generalpurposecontroller5",
        description: "General Purpose Controller 5",
        position: "lsb"
      },
      {
        number: 81,
        name: "generalpurposecontroller6",
        description: "General Purpose Controller 6",
        position: "lsb"
      },
      {
        number: 82,
        name: "generalpurposecontroller7",
        description: "General Purpose Controller 7",
        position: "lsb"
      },
      {
        number: 83,
        name: "generalpurposecontroller8",
        description: "General Purpose Controller 8",
        position: "lsb"
      },
      {
        number: 84,
        name: "portamentocontrol",
        description: "Portamento Control",
        position: "lsb"
      },
      {
        number: 85,
        name: "controller85",
        description: "Undefined"
      },
      {
        number: 86,
        name: "controller86",
        description: "Undefined"
      },
      {
        number: 87,
        name: "controller87",
        description: "Undefined"
      },
      {
        number: 88,
        name: "highresolutionvelocityprefix",
        description: "High Resolution Velocity Prefix",
        position: "lsb"
      },
      {
        number: 89,
        name: "controller89",
        description: "Undefined"
      },
      {
        number: 90,
        name: "controller90",
        description: "Undefined"
      },
      {
        number: 91,
        name: "effect1depth",
        description: "Effects 1 Depth (Reverb Send Level)"
      },
      {
        number: 92,
        name: "effect2depth",
        description: "Effects 2 Depth"
      },
      {
        number: 93,
        name: "effect3depth",
        description: "Effects 3 Depth (Chorus Send Level)"
      },
      {
        number: 94,
        name: "effect4depth",
        description: "Effects 4 Depth"
      },
      {
        number: 95,
        name: "effect5depth",
        description: "Effects 5 Depth"
      },
      {
        number: 96,
        name: "dataincrement",
        description: "Data Increment"
      },
      {
        number: 97,
        name: "datadecrement",
        description: "Data Decrement"
      },
      {
        number: 98,
        name: "nonregisteredparameterfine",
        description: "Non-Registered Parameter Number (Fine)",
        position: "lsb"
      },
      {
        number: 99,
        name: "nonregisteredparametercoarse",
        description: "Non-Registered Parameter Number (Coarse)",
        position: "msb"
      },
      {
        number: 100,
        name: "registeredparameterfine",
        description: "Registered Parameter Number (Fine)",
        position: "lsb"
      },
      {
        number: 101,
        name: "registeredparametercoarse",
        description: "Registered Parameter Number (Coarse)",
        position: "msb"
      },
      {
        number: 102,
        name: "controller102",
        description: "Undefined"
      },
      {
        number: 103,
        name: "controller103",
        description: "Undefined"
      },
      {
        number: 104,
        name: "controller104",
        description: "Undefined"
      },
      {
        number: 105,
        name: "controller105",
        description: "Undefined"
      },
      {
        number: 106,
        name: "controller106",
        description: "Undefined"
      },
      {
        number: 107,
        name: "controller107",
        description: "Undefined"
      },
      {
        number: 108,
        name: "controller108",
        description: "Undefined"
      },
      {
        number: 109,
        name: "controller109",
        description: "Undefined"
      },
      {
        number: 110,
        name: "controller110",
        description: "Undefined"
      },
      {
        number: 111,
        name: "controller111",
        description: "Undefined"
      },
      {
        number: 112,
        name: "controller112",
        description: "Undefined"
      },
      {
        number: 113,
        name: "controller113",
        description: "Undefined"
      },
      {
        number: 114,
        name: "controller114",
        description: "Undefined"
      },
      {
        number: 115,
        name: "controller115",
        description: "Undefined"
      },
      {
        number: 116,
        name: "controller116",
        description: "Undefined"
      },
      {
        number: 117,
        name: "controller117",
        description: "Undefined"
      },
      {
        number: 118,
        name: "controller118",
        description: "Undefined"
      },
      {
        number: 119,
        name: "controller119",
        description: "Undefined"
      },
      {
        number: 120,
        name: "allsoundoff",
        description: "All Sound Off"
      },
      {
        number: 121,
        name: "resetallcontrollers",
        description: "Reset All Controllers"
      },
      {
        number: 122,
        name: "localcontrol",
        description: "Local Control On/Off"
      },
      {
        number: 123,
        name: "allnotesoff",
        description: "All Notes Off"
      },
      {
        number: 124,
        name: "omnimodeoff",
        description: "Omni Mode Off"
      },
      {
        number: 125,
        name: "omnimodeon",
        description: "Omni Mode On"
      },
      {
        number: 126,
        name: "monomodeon",
        description: "Mono Mode On"
      },
      {
        number: 127,
        name: "polymodeon",
        description: "Poly Mode On"
      }
    ];
  }
  /**
   * Enumeration of all MIDI registered parameters and their associated pair of numerical values.
   * MIDI registered parameters extend the original list of control change messages. Currently,
   * there are only a limited number of them:
   *
   *
   * | Control Function             | [LSB, MSB]   |
   * |------------------------------|--------------|
   * | `pitchbendrange`             | [0x00, 0x00] |
   * | `channelfinetuning`          | [0x00, 0x01] |
   * | `channelcoarsetuning`        | [0x00, 0x02] |
   * | `tuningprogram`              | [0x00, 0x03] |
   * | `tuningbank`                 | [0x00, 0x04] |
   * | `modulationrange`            | [0x00, 0x05] |
   * | `azimuthangle`               | [0x3D, 0x00] |
   * | `elevationangle`             | [0x3D, 0x01] |
   * | `gain`                       | [0x3D, 0x02] |
   * | `distanceratio`              | [0x3D, 0x03] |
   * | `maximumdistance`            | [0x3D, 0x04] |
   * | `maximumdistancegain`        | [0x3D, 0x05] |
   * | `referencedistanceratio`     | [0x3D, 0x06] |
   * | `panspreadangle`             | [0x3D, 0x07] |
   * | `rollangle`                  | [0x3D, 0x08] |
   *
   * @enum {Object.<string, number[]>}
   * @readonly
   * @since 3.1
   * @static
   */
  static get REGISTERED_PARAMETERS() {
    return {
      pitchbendrange: [0, 0],
      channelfinetuning: [0, 1],
      channelcoarsetuning: [0, 2],
      tuningprogram: [0, 3],
      tuningbank: [0, 4],
      modulationrange: [0, 5],
      azimuthangle: [61, 0],
      elevationangle: [61, 1],
      gain: [61, 2],
      distanceratio: [61, 3],
      maximumdistance: [61, 4],
      maximumdistancegain: [61, 5],
      referencedistanceratio: [61, 6],
      panspreadangle: [61, 7],
      rollangle: [61, 8]
    };
  }
  /**
   * @enum {Object.<string, number[]>}
   * @readonly
   * @deprecated since 3.1 (use Enumerations.REGISTERED_PARAMETERS instead)
   * @private
   * @static
   */
  static get MIDI_REGISTERED_PARAMETERS() {
    return this.validation && console.warn(
      "The MIDI_REGISTERED_PARAMETERS enum has been deprecated. Use the Enumerations.REGISTERED_PARAMETERS enum instead."
    ), i.MIDI_REGISTERED_PARAMETERS;
  }
  /**
   * Enumeration of all valid MIDI system messages and matching numerical values. This library also
   * uses two additional custom messages.
   *
   * **System Common Messages**
   *
   * | Function               | Hexadecimal | Decimal |
   * |------------------------|-------------|---------|
   * | `sysex`                | 0xF0        |  240    |
   * | `timecode`             | 0xF1        |  241    |
   * | `songposition`         | 0xF2        |  242    |
   * | `songselect`           | 0xF3        |  243    |
   * | `tunerequest`          | 0xF6        |  246    |
   * | `sysexend`             | 0xF7        |  247    |
   *
   * The `sysexend` message is never actually received. It simply ends a sysex stream.
   *
   * **System Real-Time Messages**
   *
   * | Function               | Hexadecimal | Decimal |
   * |------------------------|-------------|---------|
   * | `clock`                | 0xF8        |  248    |
   * | `start`                | 0xFA        |  250    |
   * | `continue`             | 0xFB        |  251    |
   * | `stop`                 | 0xFC        |  252    |
   * | `activesensing`        | 0xFE        |  254    |
   * | `reset`                | 0xFF        |  255    |
   *
   * Values 249 and 253 are relayed by the
   * [Web MIDI API](https://developer.mozilla.org/en-US/docs/Web/API/Web_MIDI_API) but they do not
   * serve any specific purpose. The
   * [MIDI 1.0 spec](https://www.midi.org/specifications/item/table-1-summary-of-midi-message)
   * simply states that they are undefined/reserved.
   *
   * **Custom Messages**
   *
   * These two messages are mostly for internal use. They are not MIDI messages and cannot be sent
   * or forwarded.
   *
   * | Function               | Hexadecimal | Decimal |
   * |------------------------|-------------|---------|
   * | `midimessage`          |             |  0      |
   * | `unknownsystemmessage` |             |  -1     |
   *
   * @enum {Object.<string, number>}
   * @readonly
   * @since 3.1
   * @static
   */
  static get SYSTEM_MESSAGES() {
    return {
      // System common messages
      sysex: 240,
      // 240
      timecode: 241,
      // 241
      songposition: 242,
      // 242
      songselect: 243,
      // 243
      tunerequest: 246,
      // 246
      tuningrequest: 246,
      // for backwards-compatibility (deprecated in version 3.0)
      sysexend: 247,
      // 247 (never actually received - simply ends a sysex)
      // System real-time messages
      clock: 248,
      // 248
      start: 250,
      // 250
      continue: 251,
      // 251
      stop: 252,
      // 252
      activesensing: 254,
      // 254
      reset: 255,
      // 255
      // Custom WebMidi.js messages
      midimessage: 0,
      unknownsystemmessage: -1
    };
  }
  /**
   * @enum {Object.<string, number>}
   * @readonly
   * @deprecated since 3.1 (use Enumerations.SYSTEM_MESSAGES instead)
   * @private
   * @static
   */
  static get MIDI_SYSTEM_MESSAGES() {
    return this.validation && console.warn(
      "The MIDI_SYSTEM_MESSAGES enum has been deprecated. Use the Enumerations.SYSTEM_MESSAGES enum instead."
    ), i.SYSTEM_MESSAGES;
  }
  /**
   * Array of channel-specific event names that can be listened for. This includes channel mode
   * events and RPN/NRPN events.
   *
   * @type {string[]}
   * @readonly
   */
  static get CHANNEL_EVENTS() {
    return [
      // MIDI channel message events
      "noteoff",
      "controlchange",
      "noteon",
      "keyaftertouch",
      "programchange",
      "channelaftertouch",
      "pitchbend",
      // MIDI channel mode events
      "allnotesoff",
      "allsoundoff",
      "localcontrol",
      "monomode",
      "omnimode",
      "resetallcontrollers",
      // RPN/NRPN events
      "nrpn",
      "nrpn-dataentrycoarse",
      "nrpn-dataentryfine",
      "nrpn-dataincrement",
      "nrpn-datadecrement",
      "rpn",
      "rpn-dataentrycoarse",
      "rpn-dataentryfine",
      "rpn-dataincrement",
      "rpn-datadecrement",
      // Legacy (remove in v4)
      "nrpn-databuttonincrement",
      "nrpn-databuttondecrement",
      "rpn-databuttonincrement",
      "rpn-databuttondecrement"
    ];
  }
}
/**
 * The `Note` class represents a single musical note such as `"D3"`, `"G#4"`, `"F-1"`, `"Gb7"`, etc.
 *
 * `Note` objects can be played back on a single channel by calling
 * [`OutputChannel.playNote()`]{@link OutputChannel#playNote} or, on multiple channels of the same
 * output, by calling [`Output.playNote()`]{@link Output#playNote}.
 *
 * The note has [`attack`](#attack) and [`release`](#release) velocities set at `0.5` by default.
 * These can be changed by passing in the appropriate option. It is also possible to set a
 * system-wide default for attack and release velocities by using the
 * [`WebMidi.defaults`](WebMidi#defaults) property.
 *
 * If you prefer to work with raw MIDI values (`0` to `127`), you can use [`rawAttack`](#rawAttack) and
 * [`rawRelease`](#rawRelease) to both get and set the values.
 *
 * The note may have a [`duration`](#duration). If it does, playback will be automatically stopped
 * when the duration has elapsed by sending a `"noteoff"` event. By default, the duration is set to
 * `Infinity`. In this case, it will never stop playing unless explicitly stopped by calling a
 * method such as [`OutputChannel.stopNote()`]{@link OutputChannel#stopNote},
 * [`Output.stopNote()`]{@link Output#stopNote} or similar.
 *
 * @license Apache-2.0
 * @since 3.0.0
 */
class b {
  /**
   * Creates a `Note` object.
   *
   * @param value {string|number} The value used to create the note. If an identifier string is used,
   * it must start with the note letter, optionally followed by an accidental and followed by the
   * octave number (`"C3"`, `"G#4"`, `"F-1"`, `"Db7"`, etc.). If a number is used, it must be an
   * integer between 0 and 127. In this case, middle C is considered to be C4 (note number 60).
   *
   * @param {object} [options={}]
   *
   * @param {number} [options.duration=Infinity] The number of milliseconds before the note should be
   * explicitly stopped.
   *
   * @param {number} [options.attack=0.5] The note's attack velocity as a float between 0 and 1. If
   * you wish to use an integer between 0 and 127, use the `rawAttack` option instead. If both
   * `attack` and `rawAttack` are specified, the latter has precedence.
   *
   * @param {number} [options.release=0.5] The note's release velocity as a float between 0 and 1. If
   * you wish to use an integer between 0 and 127, use the `rawRelease` option instead. If both
   * `release` and `rawRelease` are specified, the latter has precedence.
   *
   * @param {number} [options.rawAttack=64] The note's attack velocity as an integer between 0 and
   * 127. If you wish to use a float between 0 and 1, use the `release` option instead. If both
   * `attack` and `rawAttack` are specified, the latter has precedence.
   *
   * @param {number} [options.rawRelease=64] The note's release velocity as an integer between 0 and
   * 127. If you wish to use a float between 0 and 1, use the `release` option instead. If both
   * `release` and `rawRelease` are specified, the latter has precedence.
   *
   * @throws {Error} Invalid note identifier
   * @throws {RangeError} Invalid name value
   * @throws {RangeError} Invalid accidental value
   * @throws {RangeError} Invalid octave value
   * @throws {RangeError} Invalid duration value
   * @throws {RangeError} Invalid attack value
   * @throws {RangeError} Invalid release value
   */
  constructor(e, t = {}) {
    this.duration = l.defaults.note.duration, this.attack = l.defaults.note.attack, this.release = l.defaults.note.release, t.duration != null && (this.duration = t.duration), t.attack != null && (this.attack = t.attack), t.rawAttack != null && (this.attack = o.from7bitToFloat(t.rawAttack)), t.release != null && (this.release = t.release), t.rawRelease != null && (this.release = o.from7bitToFloat(t.rawRelease)), Number.isInteger(e) ? this.identifier = o.toNoteIdentifier(e) : this.identifier = e;
  }
  /**
   * The name, optional accidental and octave of the note, as a string.
   * @type {string}
   * @since 3.0.0
   */
  get identifier() {
    return this._name + (this._accidental || "") + this._octave;
  }
  set identifier(e) {
    const t = o.getNoteDetails(e);
    if (l.validation && !e)
      throw new Error("Invalid note identifier");
    this._name = t.name, this._accidental = t.accidental, this._octave = t.octave;
  }
  /**
   * The name (letter) of the note. If you need the full name with octave and accidental, you can
   * use the [`identifier`]{@link Note#identifier} property instead.
   * @type {string}
   * @since 3.0.0
   */
  get name() {
    return this._name;
  }
  set name(e) {
    if (l.validation && (e = e.toUpperCase(), !["C", "D", "E", "F", "G", "A", "B"].includes(e)))
      throw new Error("Invalid name value");
    this._name = e;
  }
  /**
   * The accidental (#, ##, b or bb) of the note.
   * @type {string}
   * @since 3.0.0
   */
  get accidental() {
    return this._accidental;
  }
  set accidental(e) {
    if (l.validation && (e = e.toLowerCase(), !["#", "##", "b", "bb"].includes(e)))
      throw new Error("Invalid accidental value");
    this._accidental = e;
  }
  /**
   * The octave of the note.
   * @type {number}
   * @since 3.0.0
   */
  get octave() {
    return this._octave;
  }
  set octave(e) {
    if (l.validation && (e = parseInt(e), isNaN(e)))
      throw new Error("Invalid octave value");
    this._octave = e;
  }
  /**
   * The duration of the note as a positive decimal number representing the number of milliseconds
   * that the note should play for.
   *
   * @type {number}
   * @since 3.0.0
   */
  get duration() {
    return this._duration;
  }
  set duration(e) {
    if (l.validation && (e = parseFloat(e), isNaN(e) || e === null || e < 0))
      throw new RangeError("Invalid duration value.");
    this._duration = e;
  }
  /**
   * The attack velocity of the note as an integer between 0 and 1.
   * @type {number}
   * @since 3.0.0
   */
  get attack() {
    return this._attack;
  }
  set attack(e) {
    if (l.validation && (e = parseFloat(e), isNaN(e) || !(e >= 0 && e <= 1)))
      throw new RangeError("Invalid attack value.");
    this._attack = e;
  }
  /**
   * The release velocity of the note as an integer between 0 and 1.
   * @type {number}
   * @since 3.0.0
   */
  get release() {
    return this._release;
  }
  set release(e) {
    if (l.validation && (e = parseFloat(e), isNaN(e) || !(e >= 0 && e <= 1)))
      throw new RangeError("Invalid release value.");
    this._release = e;
  }
  /**
   * The attack velocity of the note as a positive integer between 0 and 127.
   * @type {number}
   * @since 3.0.0
   */
  get rawAttack() {
    return o.fromFloatTo7Bit(this._attack);
  }
  set rawAttack(e) {
    this._attack = o.from7bitToFloat(e);
  }
  /**
   * The release velocity of the note as a positive integer between 0 and 127.
   * @type {number}
   * @since 3.0.0
   */
  get rawRelease() {
    return o.fromFloatTo7Bit(this._release);
  }
  set rawRelease(e) {
    this._release = o.from7bitToFloat(e);
  }
  /**
   * The MIDI number of the note (`0` - `127`). This number is derived from the note identifier
   * using C4 as a reference for middle C.
   *
   * @type {number}
   * @readonly
   * @since 3.0.0
   */
  get number() {
    return o.toNoteNumber(this.identifier);
  }
  /**
   * Returns a MIDI note number offset by octave and/or semitone. If the calculated value is less
   * than 0, 0 will be returned. If the calculated value is more than 127, 127 will be returned. If
   * an invalid value is supplied, 0 will be used.
   *
   * @param [octaveOffset] {number} An integer to offset the note number by octave.
   * @param [semitoneOffset] {number} An integer to offset the note number by semitone.
   * @returns {number} An integer between 0 and 127
   */
  getOffsetNumber(e = 0, t = 0) {
    return l.validation && (e = parseInt(e) || 0, t = parseInt(t) || 0), Math.min(Math.max(this.number + e * 12 + t, 0), 127);
  }
}
/**
 * The `Utilities` class contains general-purpose utility methods. All methods are static and
 * should be called using the class name. For example: `Utilities.getNoteDetails("C4")`.
 *
 * @license Apache-2.0
 * @since 3.0.0
 */
class o {
  /**
   * Returns a MIDI note number matching the identifier passed in the form of a string. The
   * identifier must include the octave number. The identifier also optionally include a sharp (#),
   * a double sharp (##), a flat (b) or a double flat (bb) symbol. For example, these are all valid
   * identifiers: C5, G4, D#-1, F0, Gb7, Eb-1, Abb4, B##6, etc.
   *
   * When converting note identifiers to numbers, C4 is considered to be middle C (MIDI note number
   * 60) as per the scientific pitch notation standard.
   *
   * The resulting note number can be offset by using the `octaveOffset` parameter.
   *
   * @param identifier {string} The identifier in the form of a letter, followed by an optional "#",
   * "##", "b" or "bb" followed by the octave number. For exemple: C5, G4, D#-1, F0, Gb7, Eb-1,
   * Abb4, B##6, etc.
   *
   * @param {number} [octaveOffset=0] A integer to offset the octave by.
   *
   * @returns {number} The MIDI note number (an integer between 0 and 127).
   *
   * @throws RangeError Invalid 'octaveOffset' value
   *
   * @throws TypeError Invalid note identifier
   *
   * @license Apache-2.0
   * @since 3.0.0
   * @static
   */
  static toNoteNumber(e, t = 0) {
    if (t = t == null ? 0 : parseInt(t), isNaN(t)) throw new RangeError("Invalid 'octaveOffset' value");
    typeof e != "string" && (e = "");
    const n = this.getNoteDetails(e);
    if (!n) throw new TypeError("Invalid note identifier");
    const r = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
    let s = (n.octave + 1 + t) * 12;
    if (s += r[n.name], n.accidental && (n.accidental.startsWith("b") ? s -= n.accidental.length : s += n.accidental.length), s < 0 || s > 127) throw new RangeError("Invalid octaveOffset value");
    return s;
  }
  /**
   * Given a proper note identifier (`C#4`, `Gb-1`, etc.) or a valid MIDI note number (0-127), this
   * method returns an object containing broken down details about the specified note (uppercase
   * letter, accidental and octave).
   *
   * When a number is specified, the translation to note is done using a value of 60 for middle C
   * (C4 = middle C).
   *
   * @param value {string|number} A note identifier A  atring ("C#4", "Gb-1", etc.) or a MIDI note
   * number (0-127).
   *
   * @returns {{accidental: string, identifier: string, name: string, octave: number }}
   *
   * @throws TypeError Invalid note identifier
   *
   * @since 3.0.0
   * @static
   */
  static getNoteDetails(e) {
    Number.isInteger(e) && (e = this.toNoteIdentifier(e));
    const t = e.match(/^([CDEFGAB])(#{0,2}|b{0,2})(-?\d+)$/i);
    if (!t) throw new TypeError("Invalid note identifier");
    const n = t[1].toUpperCase(), r = parseInt(t[3]);
    let s = t[2].toLowerCase();
    return s = s === "" ? void 0 : s, {
      accidental: s,
      identifier: n + (s || "") + r,
      name: n,
      octave: r
    };
  }
  /**
   * Returns a sanitized array of valid MIDI channel numbers (1-16). The parameter should be a
   * single integer or an array of integers.
   *
   * For backwards-compatibility, passing `undefined` as a parameter to this method results in all
   * channels being returned (1-16). Otherwise, parameters that cannot successfully be parsed to
   * integers between 1 and 16 are silently ignored.
   *
   * @param [channel] {number|number[]} An integer or an array of integers to parse as channel
   * numbers.
   *
   * @returns {number[]} An array of 0 or more valid MIDI channel numbers.
   *
   * @since 3.0.0
   * @static
   */
  static sanitizeChannels(e) {
    let t;
    if (l.validation) {
      if (e === "all")
        t = ["all"];
      else if (e === "none")
        return [];
    }
    return Array.isArray(e) ? t = e : t = [e], t.indexOf("all") > -1 && (t = i.MIDI_CHANNEL_NUMBERS), t.map(function(n) {
      return parseInt(n);
    }).filter(function(n) {
      return n >= 1 && n <= 16;
    });
  }
  /**
   * Returns a valid timestamp, relative to the navigation start of the document, derived from the
   * `time` parameter. If the parameter is a string starting with the "+" sign and followed by a
   * number, the resulting timestamp will be the sum of the current timestamp plus that number. If
   * the parameter is a positive number, it will be returned as is. Otherwise, false will be
   * returned.
   *
   * @param [time] {number|string} The time string (e.g. `"+2000"`) or number to parse
   * @return {number|false} A positive number or `false` (if the time cannot be converted)
   *
   * @since 3.0.0
   * @static
   */
  static toTimestamp(e) {
    let t = !1;
    const n = parseFloat(e);
    return isNaN(n) ? !1 : (typeof e == "string" && e.substring(0, 1) === "+" ? n >= 0 && (t = l.time + n) : n >= 0 && (t = n), t);
  }
  /**
   * Returns a valid MIDI note number (0-127) given the specified input. The input usually is a
   * string containing a note identifier (`"C3"`, `"F#4"`, `"D-2"`, `"G8"`, etc.). If an integer
   * between 0 and 127 is passed, it will simply be returned as is (for convenience). Other strings
   * will be parsed for integer value, if possible.
   *
   * If the input is an identifier, the resulting note number is offset by the `octaveOffset`
   * parameter. For example, if you pass in "C4" (note number 60) and the `octaveOffset` value is
   * -2, the resulting MIDI note number will be 36.
   *
   * @param input {string|number} A string or number to extract the MIDI note number from.
   * @param octaveOffset {number} An integer to offset the octave by
   *
   * @returns {number|false} A valid MIDI note number (0-127) or `false` if the input could not
   * successfully be parsed to a note number.
   *
   * @since 3.0.0
   * @static
   */
  static guessNoteNumber(e, t) {
    t = parseInt(t) || 0;
    let n = !1;
    if (Number.isInteger(e) && e >= 0 && e <= 127)
      n = parseInt(e);
    else if (parseInt(e) >= 0 && parseInt(e) <= 127)
      n = parseInt(e);
    else if (typeof e == "string" || e instanceof String)
      try {
        n = this.toNoteNumber(e.trim(), t);
      } catch {
        return !1;
      }
    return n;
  }
  /**
   * Returns an identifier string representing a note name (with optional accidental) followed by an
   * octave number. The octave can be offset by using the `octaveOffset` parameter.
   *
   * @param {number} number The MIDI note number to convert to a note identifier
   * @param {number} octaveOffset An offset to apply to the resulting octave
   *
   * @returns {string}
   *
   * @throws RangeError Invalid note number
   * @throws RangeError Invalid octaveOffset value
   *
   * @since 3.0.0
   * @static
   */
  static toNoteIdentifier(e, t) {
    if (e = parseInt(e), isNaN(e) || e < 0 || e > 127) throw new RangeError("Invalid note number");
    if (t = t == null ? 0 : parseInt(t), isNaN(t)) throw new RangeError("Invalid octaveOffset value");
    const n = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"], r = Math.floor(e / 12 - 1) + t;
    return n[e % 12] + r.toString();
  }
  /**
   * Converts the `input` parameter to a valid [`Note`]{@link Note} object. The input usually is an
   * unsigned integer (0-127) or a note identifier (`"C4"`, `"G#5"`, etc.). If the input is a
   * [`Note`]{@link Note} object, it will be returned as is.
   *
   * If the input is a note number or identifier, it is possible to specify options by providing the
   * `options` parameter.
   *
   * @param [input] {number|string|Note}
   *
   * @param {object} [options={}]
   *
   * @param {number} [options.duration=Infinity] The number of milliseconds before the note should
   * be explicitly stopped.
   *
   * @param {number} [options.attack=0.5] The note's attack velocity as a float between 0 and 1. If
   * you wish to use an integer between 0 and 127, use the `rawAttack` option instead. If both
   * `attack` and `rawAttack` are specified, the latter has precedence.
   *
   * @param {number} [options.release=0.5] The note's release velocity as a float between 0 and 1. If
   * you wish to use an integer between 0 and 127, use the `rawRelease` option instead. If both
   * `release` and `rawRelease` are specified, the latter has precedence.
   *
   * @param {number} [options.rawAttack=64] The note's attack velocity as an integer between 0 and
   * 127. If you wish to use a float between 0 and 1, use the `release` option instead. If both
   * `attack` and `rawAttack` are specified, the latter has precedence.
   *
   * @param {number} [options.rawRelease=64] The note's release velocity as an integer between 0 and
   * 127. If you wish to use a float between 0 and 1, use the `release` option instead. If both
   * `release` and `rawRelease` are specified, the latter has precedence.
   *
   * @param {number} [options.octaveOffset=0] An integer to offset the octave by. **This is only
   * used when the input value is a note identifier.**
   *
   * @returns {Note}
   *
   * @throws TypeError The input could not be parsed to a note
   *
   * @since version 3.0.0
   * @static
   */
  static buildNote(e, t = {}) {
    if (t.octaveOffset = parseInt(t.octaveOffset) || 0, e instanceof b) return e;
    let n = this.guessNoteNumber(e, t.octaveOffset);
    if (n === !1)
      throw new TypeError(`The input could not be parsed as a note (${e})`);
    return t.octaveOffset = void 0, new b(n, t);
  }
  /**
   * Converts an input value, which can be an unsigned integer (0-127), a note identifier, a
   * [`Note`]{@link Note}  object or an array of the previous types, to an array of
   * [`Note`]{@link Note}  objects.
   *
   * [`Note`]{@link Note}  objects are returned as is. For note numbers and identifiers, a
   * [`Note`]{@link Note} object is created with the options specified. An error will be thrown when
   * encountering invalid input.
   *
   * Note: if both the `attack` and `rawAttack` options are specified, the later has priority. The
   * same goes for `release` and `rawRelease`.
   *
   * @param [notes] {number|string|Note|number[]|string[]|Note[]}
   *
   * @param {object} [options={}]
   *
   * @param {number} [options.duration=Infinity] The number of milliseconds before the note should
   * be explicitly stopped.
   *
   * @param {number} [options.attack=0.5] The note's attack velocity as a float between 0 and 1. If
   * you wish to use an integer between 0 and 127, use the `rawAttack` option instead. If both
   * `attack` and `rawAttack` are specified, the latter has precedence.
   *
   * @param {number} [options.release=0.5] The note's release velocity as a float between 0 and 1. If
   * you wish to use an integer between 0 and 127, use the `rawRelease` option instead. If both
   * `release` and `rawRelease` are specified, the latter has precedence.
   *
   * @param {number} [options.rawAttack=64] The note's attack velocity as an integer between 0 and
   * 127. If you wish to use a float between 0 and 1, use the `release` option instead. If both
   * `attack` and `rawAttack` are specified, the latter has precedence.
   *
   * @param {number} [options.rawRelease=64] The note's release velocity as an integer between 0 and
   * 127. If you wish to use a float between 0 and 1, use the `release` option instead. If both
   * `release` and `rawRelease` are specified, the latter has precedence.
   *
   * @param {number} [options.octaveOffset=0] An integer to offset the octave by. **This is only
   * used when the input value is a note identifier.**
   *
   * @returns {Note[]}
   *
   * @throws TypeError An element could not be parsed as a note.
   *
   * @since 3.0.0
   * @static
   */
  static buildNoteArray(e, t = {}) {
    let n = [];
    return Array.isArray(e) || (e = [e]), e.forEach((r) => {
      n.push(this.buildNote(r, t));
    }), n;
  }
  /**
   * Returns a number between 0 and 1 representing the ratio of the input value divided by 127 (7
   * bit). The returned value is restricted between 0 and 1 even if the input is greater than 127 or
   * smaller than 0.
   *
   * Passing `Infinity` will return `1` and passing `-Infinity` will return `0`. Otherwise, when the
   * input value cannot be converted to an integer, the method returns 0.
   *
   * @param value {number} A positive integer between 0 and 127 (inclusive)
   * @returns {number} A number between 0 and 1 (inclusive)
   * @static
   */
  static from7bitToFloat(e) {
    return e === 1 / 0 && (e = 127), e = parseInt(e) || 0, Math.min(Math.max(e / 127, 0), 1);
  }
  /**
   * Returns an integer between 0 and 127 which is the result of multiplying the input value by
   * 127. The input value should be a number between 0 and 1 (inclusively). The returned value is
   * restricted between 0 and 127 even if the input is greater than 1 or smaller than 0.
   *
   * Passing `Infinity` will return `127` and passing `-Infinity` will return `0`. Otherwise, when
   * the input value cannot be converted to a number, the method returns 0.
   *
   * @param value {number} A positive float between 0 and 1 (inclusive)
   * @returns {number} A number between 0 and 127 (inclusive)
   * @static
   */
  static fromFloatTo7Bit(e) {
    return e === 1 / 0 && (e = 1), e = parseFloat(e) || 0, Math.min(Math.max(Math.round(e * 127), 0), 127);
  }
  /**
   * Combines and converts MSB and LSB values (0-127) to a float between 0 and 1. The returned value
   * is within between 0 and 1 even if the result is greater than 1 or smaller than 0.
   *
   * @param msb {number} The most significant byte as a integer between 0 and 127.
   * @param [lsb=0] {number} The least significant byte as a integer between 0 and 127.
   * @returns {number} A float between 0 and 1.
   */
  static fromMsbLsbToFloat(e, t = 0) {
    l.validation && (e = Math.min(Math.max(parseInt(e) || 0, 0), 127), t = Math.min(Math.max(parseInt(t) || 0, 0), 127));
    const n = ((e << 7) + t) / 16383;
    return Math.min(Math.max(n, 0), 1);
  }
  /**
   * Extracts 7bit MSB and LSB values from the supplied float.
   *
   * @param value {number} A float between 0 and 1
   * @returns {{lsb: number, msb: number}}
   */
  static fromFloatToMsbLsb(e) {
    l.validation && (e = Math.min(Math.max(parseFloat(e) || 0, 0), 1));
    const t = Math.round(e * 16383);
    return {
      msb: t >> 7,
      lsb: t & 127
    };
  }
  /**
   * Returns the supplied MIDI note number offset by the requested octave and semitone values. If
   * the calculated value is less than 0, 0 will be returned. If the calculated value is more than
   * 127, 127 will be returned. If an invalid offset value is supplied, 0 will be used.
   *
   * @param number {number} The MIDI note to offset as an integer between 0 and 127.
   * @param octaveOffset {number} An integer to offset the note by (in octave)
   * @param octaveOffset {number} An integer to offset the note by (in semitones)
   * @returns {number} An integer between 0 and 127
   *
   * @throws {Error} Invalid note number
   * @static
   */
  static offsetNumber(e, t = 0, n = 0) {
    if (l.validation) {
      if (e = parseInt(e), isNaN(e)) throw new Error("Invalid note number");
      t = parseInt(t) || 0, n = parseInt(n) || 0;
    }
    return Math.min(Math.max(e + t * 12 + n, 0), 127);
  }
  /**
   * Returns the name of the first property of the supplied object whose value is equal to the one
   * supplied. If nothing is found, `undefined` is returned.
   *
   * @param object {object} The object to look for the property in.
   * @param value {*} Any value that can be expected to be found in the object's properties.
   * @returns {string|undefined} The name of the matching property or `undefined` if nothing is
   * found.
   * @static
   */
  static getPropertyByValue(e, t) {
    return Object.keys(e).find((n) => e[n] === t);
  }
  /**
   * Returns the name of a control change message matching the specified number (0-127). Some valid
   * control change numbers do not have a specific name or purpose assigned in the MIDI
   * [spec](https://midi.org/specifications-old/item/table-3-control-change-messages-data-bytes-2).
   * In these cases, the method returns `controllerXXX` (where XXX is the number).
   *
   * @param {number} number An integer (0-127) representing the control change message
   * @returns {string|undefined} The matching control change name or `undefined` if no match was
   * found.
   *
   * @static
   */
  static getCcNameByNumber(e) {
    if (!(l.validation && (e = parseInt(e), !(e >= 0 && e <= 127))))
      return i.CONTROL_CHANGE_MESSAGES[e].name;
  }
  /**
   * Returns the number of a control change message matching the specified name.
   *
   * @param {string} name A string representing the control change message
   * @returns {string|undefined} The matching control change number or `undefined` if no match was
   * found.
   *
   * @since 3.1
   * @static
   */
  static getCcNumberByName(e) {
    let t = i.CONTROL_CHANGE_MESSAGES.find((n) => n.name === e);
    return t ? t.number : i.MIDI_CONTROL_CHANGE_MESSAGES[e];
  }
  /**
   * Returns the channel mode name matching the specified number. If no match is found, the function
   * returns `false`.
   *
   * @param {number} number An integer representing the channel mode message (120-127)
   * @returns {string|false} The name of the matching channel mode or `false` if no match could be
   * found.
   *
   * @since 2.0.0
   */
  static getChannelModeByNumber(e) {
    if (!(e >= 120 && e <= 127)) return !1;
    for (let t in i.CHANNEL_MODE_MESSAGES)
      if (i.CHANNEL_MODE_MESSAGES.hasOwnProperty(t) && e === i.CHANNEL_MODE_MESSAGES[t])
        return t;
    return !1;
  }
  /**
   * Indicates whether the execution environment is Node.js (`true`) or not (`false`)
   * @type {boolean}
   */
  static get isNode() {
    return typeof process < "u" && process.versions != null && process.versions.node != null;
  }
  /**
   * Indicates whether the execution environment is a browser (`true`) or not (`false`)
   * @type {boolean}
   */
  static get isBrowser() {
    return typeof window < "u" && typeof window.document < "u";
  }
}
/**
 * The `OutputChannel` class represents a single output MIDI channel. `OutputChannel` objects are
 * provided by an [`Output`](Output) port which, itself, is made available by a device. The
 * `OutputChannel` object is derived from the host's MIDI subsystem and should not be instantiated
 * directly.
 *
 * All 16 `OutputChannel` objects can be found inside the parent output's
 * [`channels`]{@link Output#channels} property.
 *
 * @param {Output} output The [`Output`](Output) this channel belongs to.
 * @param {number} number The MIDI channel number (`1` - `16`).
 *
 * @extends EventEmitter
 * @license Apache-2.0
 * @since 3.0.0
 */
class J extends E {
  /**
   * Creates an `OutputChannel` object.
   *
   * @param {Output} output The [`Output`](Output) this channel belongs to.
   * @param {number} number The MIDI channel number (`1` - `16`).
   */
  constructor(e, t) {
    super(), this._output = e, this._number = t, this._octaveOffset = 0;
  }
  /**
   * Unlinks the MIDI subsystem, removes all listeners attached to the channel and nulls the channel
   * number. This method is mostly for internal use. It has not been prefixed with an underscore
   * since it is called by other objects such as the `Output` object.
   *
   * @private
   */
  destroy() {
    this._output = null, this._number = null, this._octaveOffset = 0, this.removeListener();
  }
  /**
   * Sends a MIDI message on the MIDI output port. If no time is specified, the message will be
   * sent immediately. The message should be an array of 8-bit unsigned integers (`0` - `225`),
   * a
   * [`Uint8Array`]{@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array}
   * object or a [`Message`](Message) object.
   *
   * It is usually not necessary to use this method directly as you can use one of the simpler
   * helper methods such as [`playNote()`](#playNote), [`stopNote()`](#stopNote),
   * [`sendControlChange()`](#sendControlChange), etc.
   *
   * Details on the format of MIDI messages are available in the summary of
   * [MIDI messages]{@link https://www.midi.org/specifications-old/item/table-1-summary-of-midi-message}
   * from the MIDI Manufacturers Association.
   *
   * @param message {number[]|Uint8Array|Message} A `Message` object, an array of 8-bit unsigned
   * integers or a `Uint8Array` object (not available in Node.js) containing the message bytes.
   *
   * @param {object} [options={}]
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @throws {RangeError} The first byte (status) must be an integer between 128 and 255.
   *
   * @throws {RangeError} Data bytes must be integers between 0 and 255.
   *
   * @returns {OutputChannel} Returns the `OutputChannel` object so methods can be chained.
   */
  send(e, t = { time: 0 }) {
    return this.output.send(e, t), this;
  }
  /**
   * Sends a MIDI **key aftertouch** message at the scheduled time. This is a key-specific
   * aftertouch. For a channel-wide aftertouch message, use
   * [`sendChannelAftertouch()`]{@link #sendChannelAftertouch}.
   *
   * @param target {number|Note|string|number[]|Note[]|string[]} The note(s) for which you are sending
   * an aftertouch value. The notes can be specified by using a MIDI note number (`0` - `127`), a
   * [`Note`](Note) object, a note identifier (e.g. `C3`, `G#4`, `F-1`, `Db7`) or an array of the
   * previous types. When using a note identifier, octave range must be between `-1` and `9`. The
   * lowest note is `C-1` (MIDI note number `0`) and the highest note is `G9` (MIDI note number
   * `127`).
   *
   * When using a note identifier, the octave value will be offset by the local
   * [`octaveOffset`](#octaveOffset) and by
   * [`Output.octaveOffset`](Output#octaveOffset) and [`WebMidi.octaveOffset`](WebMidi#octaveOffset)
   * (if those values are not `0`). When using a key number, `octaveOffset` values are ignored.
   *
   * @param [pressure=0.5] {number} The pressure level (between `0` and `1`). An invalid pressure
   * value will silently trigger the default behaviour. If the `rawValue` option is set to `true`,
   * the pressure is defined by using an integer between `0` and `127`.
   *
   * @param {object} [options={}]
   *
   * @param {boolean} [options.rawValue=false] A boolean indicating whether the value should be
   * considered a float between `0` and `1.0` (default) or a raw integer between `0` and `127`.
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @return {OutputChannel} Returns the `OutputChannel` object so methods can be chained.
   *
   * @throws RangeError Invalid key aftertouch value.
   */
  sendKeyAftertouch(e, t, n = {}) {
    if (l.validation) {
      if (n.useRawValue && (n.rawValue = n.useRawValue), isNaN(parseFloat(t)))
        throw new RangeError("Invalid key aftertouch value.");
      if (n.rawValue) {
        if (!(t >= 0 && t <= 127 && Number.isInteger(t)))
          throw new RangeError("Key aftertouch raw value must be an integer between 0 and 127.");
      } else if (!(t >= 0 && t <= 1))
        throw new RangeError("Key aftertouch value must be a float between 0 and 1.");
    }
    n.rawValue || (t = o.fromFloatTo7Bit(t));
    const r = l.octaveOffset + this.output.octaveOffset + this.octaveOffset;
    return Array.isArray(e) || (e = [e]), o.buildNoteArray(e).forEach((s) => {
      this.send(
        [
          (i.CHANNEL_MESSAGES.keyaftertouch << 4) + (this.number - 1),
          s.getOffsetNumber(r),
          t
        ],
        { time: o.toTimestamp(n.time) }
      );
    }), this;
  }
  /**
   * Sends a MIDI **control change** message to the channel at the scheduled time. The control
   * change message to send can be specified numerically (`0` to `127`) or by using one of the
   * following common names:
   *
   * | Number | Name                          |
   * |--------|-------------------------------|
   * | 0      |`bankselectcoarse`             |
   * | 1      |`modulationwheelcoarse`        |
   * | 2      |`breathcontrollercoarse`       |
   * | 4      |`footcontrollercoarse`         |
   * | 5      |`portamentotimecoarse`         |
   * | 6      |`dataentrycoarse`              |
   * | 7      |`volumecoarse`                 |
   * | 8      |`balancecoarse`                |
   * | 10     |`pancoarse`                    |
   * | 11     |`expressioncoarse`             |
   * | 12     |`effectcontrol1coarse`         |
   * | 13     |`effectcontrol2coarse`         |
   * | 18     |`generalpurposeslider3`        |
   * | 19     |`generalpurposeslider4`        |
   * | 32     |`bankselectfine`               |
   * | 33     |`modulationwheelfine`          |
   * | 34     |`breathcontrollerfine`         |
   * | 36     |`footcontrollerfine`           |
   * | 37     |`portamentotimefine`           |
   * | 38     |`dataentryfine`                |
   * | 39     |`volumefine`                   |
   * | 40     |`balancefine`                  |
   * | 42     |`panfine`                      |
   * | 43     |`expressionfine`               |
   * | 44     |`effectcontrol1fine`           |
   * | 45     |`effectcontrol2fine`           |
   * | 64     |`holdpedal`                    |
   * | 65     |`portamento`                   |
   * | 66     |`sustenutopedal`               |
   * | 67     |`softpedal`                    |
   * | 68     |`legatopedal`                  |
   * | 69     |`hold2pedal`                   |
   * | 70     |`soundvariation`               |
   * | 71     |`resonance`                    |
   * | 72     |`soundreleasetime`             |
   * | 73     |`soundattacktime`              |
   * | 74     |`brightness`                   |
   * | 75     |`soundcontrol6`                |
   * | 76     |`soundcontrol7`                |
   * | 77     |`soundcontrol8`                |
   * | 78     |`soundcontrol9`                |
   * | 79     |`soundcontrol10`               |
   * | 80     |`generalpurposebutton1`        |
   * | 81     |`generalpurposebutton2`        |
   * | 82     |`generalpurposebutton3`        |
   * | 83     |`generalpurposebutton4`        |
   * | 91     |`reverblevel`                  |
   * | 92     |`tremololevel`                 |
   * | 93     |`choruslevel`                  |
   * | 94     |`celestelevel`                 |
   * | 95     |`phaserlevel`                  |
   * | 96     |`dataincrement`                |
   * | 97     |`datadecrement`                |
   * | 98     |`nonregisteredparametercoarse` |
   * | 99     |`nonregisteredparameterfine`   |
   * | 100    |`registeredparametercoarse`    |
   * | 101    |`registeredparameterfine`      |
   * | 120    |`allsoundoff`                  |
   * | 121    |`resetallcontrollers`          |
   * | 122    |`localcontrol`                 |
   * | 123    |`allnotesoff`                  |
   * | 124    |`omnimodeoff`                  |
   * | 125    |`omnimodeon`                   |
   * | 126    |`monomodeon`                   |
   * | 127    |`polymodeon`                   |
   *
   * As you can see above, not all control change message have a matching name. This does not mean
   * you cannot use the others. It simply means you will need to use their number
   * (`0` to `127`) instead of their name. While you can still use them, numbers `120` to `127` are
   * usually reserved for *channel mode* messages. See
   * [`sendChannelMode()`]{@link OutputChannel#sendChannelMode} method for more info.
   *
   * To view a detailed list of all available **control change** messages, please consult "Table 3 -
   * Control Change Messages" from the [MIDI Messages](
   * https://www.midi.org/specifications/item/table-3-control-change-messages-data-bytes-2)
   * specification.
   *
   * **Note**: messages #0-31 (MSB) are paired with messages #32-63 (LSB). For example, message #1
   * (`modulationwheelcoarse`) can be accompanied by a second control change message for
   * `modulationwheelfine` to achieve a greater level of precision. if you want to specify both MSB
   * and LSB for messages between `0` and `31`, you can do so by passing a 2-value array as the
   * second parameter.
   *
   * @param {number|string} controller The MIDI controller name or number (`0` - `127`).
   *
   * @param {number|number[]} value The value to send (0-127). You can also use a two-position array
   * for controllers 0 to 31. In this scenario, the first value will be sent as usual and the second
   * value will be sent to the matching LSB controller (which is obtained by adding 32 to the first
   * controller)
   *
   * @param {object} [options={}]
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @throws {RangeError} Controller numbers must be between 0 and 127.
   * @throws {RangeError} Invalid controller name.
   * @throws {TypeError} The value array must have a length of 2.
   *
   * @returns {OutputChannel} Returns the `OutputChannel` object so methods can be chained.
   *
   * @license Apache-2.0
   * @since 3.0.0
   */
  sendControlChange(e, t, n = {}) {
    if (typeof e == "string" && (e = o.getCcNumberByName(e)), Array.isArray(t) || (t = [t]), l.validation) {
      if (e === void 0)
        throw new TypeError(
          "Control change must be identified with a valid name or an integer between 0 and 127."
        );
      if (!Number.isInteger(e) || !(e >= 0 && e <= 127))
        throw new TypeError("Control change number must be an integer between 0 and 127.");
      if (t = t.map((r) => {
        const s = Math.min(Math.max(parseInt(r), 0), 127);
        if (isNaN(s)) throw new TypeError("Values must be integers between 0 and 127");
        return s;
      }), t.length === 2 && e >= 32)
        throw new TypeError("To use a value array, the controller must be between 0 and 31");
    }
    return t.forEach((r, s) => {
      this.send(
        [
          (i.CHANNEL_MESSAGES.controlchange << 4) + (this.number - 1),
          e + s * 32,
          t[s]
        ],
        { time: o.toTimestamp(n.time) }
      );
    }), this;
  }
  /**
   * Selects a MIDI non-registered parameter so it is affected by upcoming data entry, data
   * increment and data decrement messages.
   *
   * @param parameter {number[]} A two-position array specifying the two control bytes that identify
   * the registered parameter. The NRPN MSB (99 or 0x63) is a position 0. The NRPN LSB (98 or 0x62)
   * is at position 1.
   *
   * @private
   *
   * @param {object} [options={}]
   *
   * @param {number|string} [options.time] If `time` is a string prefixed with `"+"` and followed by
   * a number, the message will be delayed by that many milliseconds. If the value is a number, the
   * operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @returns {OutputChannel} Returns the `OutputChannel` object so methods can be chained.
   */
  _selectNonRegisteredParameter(e, t = {}) {
    return this.sendControlChange(99, e[0], t), this.sendControlChange(98, e[1], t), this;
  }
  /**
   * Deselects the currently active MIDI registered parameter so it is no longer affected by data
   * entry, data increment and data decrement messages.
   *
   * Current best practice recommends doing that after each call to
   * [_setCurrentParameter()]{@link #_setCurrentParameter}.
   *
   * @private
   *
   * @param {object} [options={}]
   *
   * @param {number|string} [options.time] If `time` is a string prefixed with `"+"` and followed by
   * a number, the message will be delayed by that many milliseconds. If the value is a number, the
   * operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @returns {OutputChannel} Returns the `OutputChannel` object so methods can be chained.
   */
  _deselectRegisteredParameter(e = {}) {
    return this.sendControlChange(101, 127, e), this.sendControlChange(100, 127, e), this;
  }
  /**
   * Deselects the currently active MIDI non-registered parameter so it is no longer affected by
   * data entry, data increment and data decrement messages.
   *
   * @private
   *
   * @param {object} [options={}]
   *
   * @param {number|string} [options.time] If `time` is a string prefixed with `"+"` and followed by
   * a number, the message will be delayed by that many milliseconds. If the value is a number, the
   * operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @returns {OutputChannel} Returns the `OutputChannel` object so methods can be chained.
   */
  _deselectNonRegisteredParameter(e = {}) {
    return this.sendControlChange(101, 127, e), this.sendControlChange(100, 127, e), this;
  }
  /**
   * Selects a MIDI registered parameter so it is affected by upcoming data entry, data increment
   * and data decrement messages.
   *
   * @private
   *
   * @param parameter {number[]} A two-position array of integers specifying the two control bytes
   * (0x65, 0x64) that identify the registered parameter. The integers must be between 0 and 127.
   *
   * @param {object} [options={}]
   *
   * @param {number|string} [options.time] If `time` is a string prefixed with `"+"` and followed by
   * a number, the message will be delayed by that many milliseconds. If the value is a number, the
   * operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @returns {OutputChannel} Returns the `OutputChannel` object so methods can be chained.
   */
  _selectRegisteredParameter(e, t = {}) {
    return this.sendControlChange(101, e[0], t), this.sendControlChange(100, e[1], t), this;
  }
  /**
   * Sets the value of the currently selected MIDI registered parameter.
   *
   * @private
   *
   * @param data {number|number[]}
   *
   * @param {object} [options={}]
   *
   * @param {number|string} [options.time] If `time` is a string prefixed with `"+"` and followed by
   * a number, the message will be delayed by that many milliseconds. If the value is a number, the
   * operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @returns {OutputChannel} Returns the `OutputChannel` object so methods can be chained.
   */
  _setCurrentParameter(e, t = {}) {
    return e = [].concat(e), this.sendControlChange(6, e[0], t), e.length < 2 ? this : (this.sendControlChange(38, e[1], t), this);
  }
  /**
   * Decrements the specified MIDI registered parameter by 1. Here is the full list of parameter
   * names that can be used with this function:
   *
   *  * Pitchbend Range (0x00, 0x00): `"pitchbendrange"`
   *  * Channel Fine Tuning (0x00, 0x01): `"channelfinetuning"`
   *  * Channel Coarse Tuning (0x00, 0x02): `"channelcoarsetuning"`
   *  * Tuning Program (0x00, 0x03): `"tuningprogram"`
   *  * Tuning Bank (0x00, 0x04): `"tuningbank"`
   *  * Modulation Range (0x00, 0x05): `"modulationrange"`
   *  * Azimuth Angle (0x3D, 0x00): `"azimuthangle"`
   *  * Elevation Angle (0x3D, 0x01): `"elevationangle"`
   *  * Gain (0x3D, 0x02): `"gain"`
   *  * Distance Ratio (0x3D, 0x03): `"distanceratio"`
   *  * Maximum Distance (0x3D, 0x04): `"maximumdistance"`
   *  * Maximum Distance Gain (0x3D, 0x05): `"maximumdistancegain"`
   *  * Reference Distance Ratio (0x3D, 0x06): `"referencedistanceratio"`
   *  * Pan Spread Angle (0x3D, 0x07): `"panspreadangle"`
   *  * Roll Angle (0x3D, 0x08): `"rollangle"`
   *
   * @param parameter {String|number[]} A string identifying the parameter's name (see above) or a
   * two-position array specifying the two control bytes (0x65, 0x64) that identify the registered
   * parameter.
   *
   * @param {object} [options={}]
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @throws TypeError The specified registered parameter is invalid.
   *
   * @returns {OutputChannel} Returns the `OutputChannel` object so methods can be chained.
   */
  sendRpnDecrement(e, t = {}) {
    if (Array.isArray(e) || (e = i.REGISTERED_PARAMETERS[e]), l.validation) {
      if (e === void 0)
        throw new TypeError("The specified registered parameter is invalid.");
      let n = !1;
      if (Object.getOwnPropertyNames(i.REGISTERED_PARAMETERS).forEach((r) => {
        i.REGISTERED_PARAMETERS[r][0] === e[0] && i.REGISTERED_PARAMETERS[r][1] === e[1] && (n = !0);
      }), !n) throw new TypeError("The specified registered parameter is invalid.");
    }
    return this._selectRegisteredParameter(e, t), this.sendControlChange(97, 0, t), this._deselectRegisteredParameter(t), this;
  }
  /**
   * Increments the specified MIDI registered parameter by 1. Here is the full list of parameter
   * names that can be used with this function:
   *
   *  * Pitchbend Range (0x00, 0x00): `"pitchbendrange"`
   *  * Channel Fine Tuning (0x00, 0x01): `"channelfinetuning"`
   *  * Channel Coarse Tuning (0x00, 0x02): `"channelcoarsetuning"`
   *  * Tuning Program (0x00, 0x03): `"tuningprogram"`
   *  * Tuning Bank (0x00, 0x04): `"tuningbank"`
   *  * Modulation Range (0x00, 0x05): `"modulationrange"`
   *  * Azimuth Angle (0x3D, 0x00): `"azimuthangle"`
   *  * Elevation Angle (0x3D, 0x01): `"elevationangle"`
   *  * Gain (0x3D, 0x02): `"gain"`
   *  * Distance Ratio (0x3D, 0x03): `"distanceratio"`
   *  * Maximum Distance (0x3D, 0x04): `"maximumdistance"`
   *  * Maximum Distance Gain (0x3D, 0x05): `"maximumdistancegain"`
   *  * Reference Distance Ratio (0x3D, 0x06): `"referencedistanceratio"`
   *  * Pan Spread Angle (0x3D, 0x07): `"panspreadangle"`
   *  * Roll Angle (0x3D, 0x08): `"rollangle"`
   *
   * @param parameter {String|number[]} A string identifying the parameter's name (see above) or a
   * two-position array specifying the two control bytes (0x65, 0x64) that identify the registered
   * parameter.
   *
   * @param {object} [options={}]
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @throws TypeError The specified registered parameter is invalid.
   *
   * @returns {OutputChannel} Returns the `OutputChannel` object so methods can be chained.
   */
  sendRpnIncrement(e, t = {}) {
    if (Array.isArray(e) || (e = i.REGISTERED_PARAMETERS[e]), l.validation) {
      if (e === void 0)
        throw new TypeError("The specified registered parameter is invalid.");
      let n = !1;
      if (Object.getOwnPropertyNames(i.REGISTERED_PARAMETERS).forEach((r) => {
        i.REGISTERED_PARAMETERS[r][0] === e[0] && i.REGISTERED_PARAMETERS[r][1] === e[1] && (n = !0);
      }), !n) throw new TypeError("The specified registered parameter is invalid.");
    }
    return this._selectRegisteredParameter(e, t), this.sendControlChange(96, 0, t), this._deselectRegisteredParameter(t), this;
  }
  /**
   * Plays a note or an array of notes on the channel. The first parameter is the note to play. It
   * can be a single value or an array of the following valid values:
   *
   *  - A [`Note`]{@link Note} object
   *  - A MIDI note number (integer between `0` and `127`)
   *  - A note name, followed by the octave (e.g. `"C3"`, `"G#4"`, `"F-1"`, `"Db7"`)
   *
   * The `playNote()` method sends a **note on** MIDI message for all specified notes. If a
   * `duration` is set in the `options` parameter or in the [`Note`]{@link Note} object's
   * [`duration`]{@link Note#duration} property, it will also schedule a **note off** message
   * to end the note after said duration. If no `duration` is set, the note will simply play until
   * a matching **note off** message is sent with [`stopNote()`]{@link OutputChannel#stopNote} or
   * [`sendNoteOff()`]{@link OutputChannel#sendNoteOff}.
   *
   *  The execution of the **note on** command can be delayed by using the `time` property of the
   * `options` parameter.
   *
   * When using [`Note`]{@link Note} objects, the durations and velocities defined in the
   * [`Note`]{@link Note} objects have precedence over the ones specified via the method's `options`
   * parameter.
   *
   * **Note**: per the MIDI standard, a **note on** message with an attack velocity of `0` is
   * functionally equivalent to a **note off** message.
   *
   * @param note {number|string|Note|number[]|string[]|Note[]} The note(s) to play. The notes can be
   * specified by using a MIDI note number (`0` - `127`), a note identifier (e.g. `C3`, `G#4`,
   * `F-1`, `Db7`), a [`Note`]{@link Note} object or an array of the previous types. When using a
   * note identifier, the octave range must be between `-1` and `9`. The lowest note is `C-1` (MIDI
   * note number `0`) and the highest note is `G9` (MIDI note number `127`).
   *
   * @param {object} [options={}]
   *
   * @param {number} [options.duration] A positive decimal number larger than `0` representing the
   * number of milliseconds to wait before sending a **note off** message. If invalid or left
   * undefined, only a **note on** message will be sent.
   *
   * @param {number} [options.attack=0.5] The velocity at which to play the note (between `0` and
   * `1`). If the `rawAttack` option is also defined, it will have priority. An invalid velocity
   * value will silently trigger the default of `0.5`.
   *
   * @param {number} [options.rawAttack=64] The attack velocity at which to play the note (between
   * `0` and `127`). This has priority over the `attack` property. An invalid velocity value will
   * silently trigger the default of 64.
   *
   * @param {number} [options.release=0.5] The velocity at which to release the note (between `0`
   * and `1`). If the `rawRelease` option is also defined, it will have priority. An invalid
   * velocity value will silently trigger the default of `0.5`. This is only used with the
   * **note off** event triggered when `options.duration` is set.
   *
   * @param {number} [options.rawRelease=64] The velocity at which to release the note (between `0`
   * and `127`). This has priority over the `release` property. An invalid velocity value will
   * silently trigger the default of 64. This is only used with the **note off** event triggered
   * when `options.duration` is set.
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @returns {OutputChannel} Returns the `OutputChannel` object so methods can be chained.
   */
  playNote(e, t = {}) {
    this.sendNoteOn(e, t);
    const n = Array.isArray(e) ? e : [e];
    for (let r of n)
      if (parseInt(r.duration) > 0) {
        const s = {
          time: (o.toTimestamp(t.time) || l.time) + parseInt(r.duration),
          release: r.release,
          rawRelease: r.rawRelease
        };
        this.sendNoteOff(r, s);
      } else if (parseInt(t.duration) > 0) {
        const s = {
          time: (o.toTimestamp(t.time) || l.time) + parseInt(t.duration),
          release: t.release,
          rawRelease: t.rawRelease
        };
        this.sendNoteOff(r, s);
      }
    return this;
  }
  /**
   * Sends a **note off** message for the specified notes on the channel. The first parameter is the
   * note. It can be a single value or an array of the following valid values:
   *
   *  - A MIDI note number (integer between `0` and `127`)
   *  - A note name, followed by the octave (e.g. `"C3"`, `"G#4"`, `"F-1"`, `"Db7"`)
   *  - A [`Note`]{@link Note} object
   *
   * The execution of the **note off** command can be delayed by using the `time` property of the
   * `options` parameter.
   *
   * When using [`Note`]{@link Note} objects, the release velocity defined in the
   * [`Note`]{@link Note} objects has precedence over the one specified via the method's `options`
   * parameter.
   *
   * @param note {number|string|Note|number[]|string[]|Note[]} The note(s) to stop. The notes can be
   * specified by using a MIDI note number (0-127), a note identifier (e.g. C3, G#4, F-1, Db7), a
   * [`Note`]{@link Note} object or an array of the previous types. When using a note name, octave
   * range must be between -1 and 9. The lowest note is C-1 (MIDI note number 0) and the highest
   * note is G9 (MIDI note number 127).
   *
   * @param {object} [options={}]
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @param {number} [options.release=0.5] The velocity at which to release the note
   * (between `0` and `1`).  If the `rawRelease` option is also defined, `rawRelease` will have
   * priority. An invalid velocity value will silently trigger the default of `0.5`.
   *
   * @param {number} [options.rawRelease=64] The velocity at which to release the note
   * (between `0` and `127`). If the `release` option is also defined, `rawRelease` will have
   * priority. An invalid velocity value will silently trigger the default of `64`.
   *
   * @returns {OutputChannel} Returns the `OutputChannel` object so methods can be chained.
   */
  sendNoteOff(e, t = {}) {
    if (l.validation) {
      if (t.rawRelease != null && !(t.rawRelease >= 0 && t.rawRelease <= 127))
        throw new RangeError("The 'rawRelease' option must be an integer between 0 and 127");
      if (t.release != null && !(t.release >= 0 && t.release <= 1))
        throw new RangeError("The 'release' option must be an number between 0 and 1");
      t.rawVelocity && (t.rawRelease = t.velocity, console.warn("The 'rawVelocity' option is deprecated. Use 'rawRelease' instead.")), t.velocity && (t.release = t.velocity, console.warn("The 'velocity' option is deprecated. Use 'attack' instead."));
    }
    let n = 64;
    t.rawRelease != null ? n = t.rawRelease : isNaN(t.release) || (n = Math.round(t.release * 127));
    const r = l.octaveOffset + this.output.octaveOffset + this.octaveOffset;
    return o.buildNoteArray(e, { rawRelease: parseInt(n) }).forEach((s) => {
      this.send(
        [
          (i.CHANNEL_MESSAGES.noteoff << 4) + (this.number - 1),
          s.getOffsetNumber(r),
          s.rawRelease
        ],
        { time: o.toTimestamp(t.time) }
      );
    }), this;
  }
  /**
   * Sends a **note off** message for the specified MIDI note number. The first parameter is the
   * note to stop. It can be a single value or an array of the following valid values:
   *
   *  - A MIDI note number (integer between `0` and `127`)
   *  - A note identifier (e.g. `"C3"`, `"G#4"`, `"F-1"`, `"Db7"`)
   *  - A [`Note`](Note) object
   *
   * The execution of the **note off** command can be delayed by using the `time` property of the
   * `options` parameter.
   *
   * @param note {number|Note|string|number[]|Note[]|string[]} The note(s) to stop. The notes can be
   * specified by using a MIDI note number (`0` - `127`), a note identifier (e.g. `C3`, `G#4`, `F-1`,
   * `Db7`) or an array of the previous types. When using a note identifier, octave range must be
   * between `-1` and `9`. The lowest note is `C-1` (MIDI note number `0`) and the highest note is
   * `G9` (MIDI note number `127`).
   *
   * @param {Object} [options={}]
   *
   * @param {number} [options.release=0.5] The velocity at which to release the note
   * (between `0` and `1`).  If the `rawRelease` option is also defined, `rawRelease` will have
   * priority. An invalid velocity value will silently trigger the default of `0.5`.
   *
   * @param {number} [options.rawRelease=64] The velocity at which to release the note
   * (between `0` and `127`). If the `release` option is also defined, `rawRelease` will have
   * priority. An invalid velocity value will silently trigger the default of `64`.
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @returns {Output} Returns the `Output` object so methods can be chained.
   */
  stopNote(e, t = {}) {
    return this.sendNoteOff(e, t);
  }
  /**
   * Sends a **note on** message for the specified note(s) on the channel. The first parameter is
   * the note. It can be a single value or an array of the following valid values:
   *
   *  - A [`Note`]{@link Note} object
   *  - A MIDI note number (integer between `0` and `127`)
   *  - A note identifier (e.g. `"C3"`, `"G#4"`, `"F-1"`, `"Db7"`)
   *
   *  When passing a [`Note`]{@link Note}object or a note name, the `octaveOffset` will be applied.
   *  This is not the case when using a note number. In this case, we assume you know exactly which
   *  MIDI note number should be sent out.
   *
   * The execution of the **note on** command can be delayed by using the `time` property of the
   * `options` parameter.
   *
   * When using [`Note`]{@link Note} objects, the attack velocity defined in the
   * [`Note`]{@link Note} objects has precedence over the one specified via the method's `options`
   * parameter. Also, the `duration` is ignored. If you want to also send a **note off** message,
   * use the [`playNote()`]{@link #playNote} method instead.
   *
   * **Note**: As per the MIDI standard, a **note on** message with an attack velocity of `0` is
   * functionally equivalent to a **note off** message.
   *
   * @param note {number|string|Note|number[]|string[]|Note[]} The note(s) to play. The notes can be
   * specified by using a MIDI note number (0-127), a note identifier (e.g. C3, G#4, F-1, Db7), a
   * [`Note`]{@link Note} object or an array of the previous types.
   *
   * @param {object} [options={}]
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @param {number} [options.attack=0.5] The velocity at which to play the note (between `0` and
   * `1`).  If the `rawAttack` option is also defined, `rawAttack` will have priority. An invalid
   * velocity value will silently trigger the default of `0.5`.
   *
   * @param {number} [options.rawAttack=64] The velocity at which to release the note (between `0`
   * and `127`). If the `attack` option is also defined, `rawAttack` will have priority. An invalid
   * velocity value will silently trigger the default of `64`.
   *
   * @returns {OutputChannel} Returns the `OutputChannel` object so methods can be chained.
   */
  sendNoteOn(e, t = {}) {
    if (l.validation) {
      if (t.rawAttack != null && !(t.rawAttack >= 0 && t.rawAttack <= 127))
        throw new RangeError("The 'rawAttack' option must be an integer between 0 and 127");
      if (t.attack != null && !(t.attack >= 0 && t.attack <= 1))
        throw new RangeError("The 'attack' option must be an number between 0 and 1");
      t.rawVelocity && (t.rawAttack = t.velocity, t.rawRelease = t.release, console.warn("The 'rawVelocity' option is deprecated. Use 'rawAttack' or 'rawRelease'.")), t.velocity && (t.attack = t.velocity, console.warn("The 'velocity' option is deprecated. Use 'attack' instead."));
    }
    let n = 64;
    t.rawAttack != null ? n = t.rawAttack : isNaN(t.attack) || (n = Math.round(t.attack * 127));
    const r = l.octaveOffset + this.output.octaveOffset + this.octaveOffset;
    return o.buildNoteArray(e, { rawAttack: n }).forEach((s) => {
      this.send(
        [
          (i.CHANNEL_MESSAGES.noteon << 4) + (this.number - 1),
          s.getOffsetNumber(r),
          s.rawAttack
        ],
        { time: o.toTimestamp(t.time) }
      );
    }), this;
  }
  /**
   * Sends a MIDI **channel mode** message. The channel mode message to send can be specified
   * numerically or by using one of the following common names:
   *
   * |  Type                |Number| Shortcut Method                                               |
   * | ---------------------|------|-------------------------------------------------------------- |
   * | `allsoundoff`        | 120  | [`sendAllSoundOff()`]{@link #sendAllSoundOff}                 |
   * | `resetallcontrollers`| 121  | [`sendResetAllControllers()`]{@link #sendResetAllControllers} |
   * | `localcontrol`       | 122  | [`sendLocalControl()`]{@link #sendLocalControl}               |
   * | `allnotesoff`        | 123  | [`sendAllNotesOff()`]{@link #sendAllNotesOff}                 |
   * | `omnimodeoff`        | 124  | [`sendOmniMode(false)`]{@link #sendOmniMode}                  |
   * | `omnimodeon`         | 125  | [`sendOmniMode(true)`]{@link #sendOmniMode}                   |
   * | `monomodeon`         | 126  | [`sendPolyphonicMode("mono")`]{@link #sendPolyphonicMode}     |
   * | `polymodeon`         | 127  | [`sendPolyphonicMode("poly")`]{@link #sendPolyphonicMode}     |
   *
   * **Note**: as you can see above, to make it easier, all channel mode messages also have a matching
   * helper method.
   *
   * It should be noted that, per the MIDI specification, only `localcontrol` and `monomodeon` may
   * require a value that's not zero. For that reason, the `value` parameter is optional and
   * defaults to 0.
   *
   * @param {number|string} command The numerical identifier of the channel mode message (integer
   * between `120` and `127`) or its name as a string.
   *
   * @param {number} [value=0] The value to send (integer between `0` - `127`).
   *
   * @param {object} [options={}]
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @returns {OutputChannel} Returns the `OutputChannel` object so methods can be chained.
   */
  sendChannelMode(e, t = 0, n = {}) {
    if (typeof e == "string" && (e = i.CHANNEL_MODE_MESSAGES[e]), l.validation) {
      if (e === void 0)
        throw new TypeError("Invalid channel mode message name or number.");
      if (isNaN(e) || !(e >= 120 && e <= 127))
        throw new TypeError("Invalid channel mode message number.");
      if (isNaN(parseInt(t)) || t < 0 || t > 127)
        throw new RangeError("Value must be an integer between 0 and 127.");
    }
    return this.send(
      [
        (i.CHANNEL_MESSAGES.controlchange << 4) + (this.number - 1),
        e,
        t
      ],
      { time: o.toTimestamp(n.time) }
    ), this;
  }
  /**
   * Sets OMNI mode to `"on"` or `"off"`. MIDI's OMNI mode causes the instrument to respond to
   * messages from all channels.
   *
   * It should be noted that support for OMNI mode is not as common as it used to be.
   *
   * @param [state=true] {boolean} Whether to activate OMNI mode (`true`) or not (`false`).
   *
   * @param {object} [options={}]
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @throws {TypeError} Invalid channel mode message name.
   * @throws {RangeError} Channel mode controller numbers must be between 120 and 127.
   * @throws {RangeError} Value must be an integer between 0 and 127.
   *
   * @returns {OutputChannel} Returns the `OutputChannel` object so methods can be chained.
   */
  sendOmniMode(e, t = {}) {
    return e === void 0 || e ? this.sendChannelMode("omnimodeon", 0, t) : this.sendChannelMode("omnimodeoff", 0, t), this;
  }
  /**
   * Sends a MIDI **channel aftertouch** message. For key-specific aftertouch, you should instead
   * use [`sendKeyAftertouch()`]{@link #sendKeyAftertouch}.
   *
   * @param [pressure] {number} The pressure level (between `0` and `1`). If the `rawValue` option
   * is set to `true`, the pressure can be defined by using an integer between `0` and `127`.
   *
   * @param {object} [options={}]
   *
   * @param {boolean} [options.rawValue=false] A boolean indicating whether the value should be
   * considered a float between `0` and `1.0` (default) or a raw integer between `0` and `127`.
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @returns {OutputChannel} Returns the `OutputChannel` object so methods can be chained.
   *
   * @throws RangeError Invalid channel aftertouch value.
   */
  sendChannelAftertouch(e, t = {}) {
    if (l.validation) {
      if (isNaN(parseFloat(e)))
        throw new RangeError("Invalid channel aftertouch value.");
      if (t.rawValue) {
        if (!(e >= 0 && e <= 127 && Number.isInteger(e)))
          throw new RangeError(
            "Channel aftertouch raw value must be an integer between 0 and 127."
          );
      } else if (!(e >= 0 && e <= 1))
        throw new RangeError("Channel aftertouch value must be a float between 0 and 1.");
    }
    return t.rawValue || (e = o.fromFloatTo7Bit(e)), this.send(
      [
        (i.CHANNEL_MESSAGES.channelaftertouch << 4) + (this.number - 1),
        Math.round(e)
      ],
      { time: o.toTimestamp(t.time) }
    ), this;
  }
  /**
   * Sends a **master tuning** message. The value is decimal and must be larger than -65 semitones
   * and smaller than 64 semitones.
   *
   * Because of the way the MIDI specification works, the decimal portion of the value will be
   * encoded with a resolution of 14bit. The integer portion must be between -64 and 63
   * inclusively. This function actually generates two MIDI messages: a **Master Coarse Tuning** and
   * a **Master Fine Tuning** RPN messages.
   *
   * @param [value=0.0] {number} The desired decimal adjustment value in semitones (-65 < x < 64)
   *
   * @param {object} [options={}]
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @throws {RangeError} The value must be a decimal number between larger than -65 and smaller
   * than 64.
   *
   * @returns {OutputChannel} Returns the `OutputChannel` object so methods can be chained.
   */
  sendMasterTuning(e, t = {}) {
    if (e = parseFloat(e) || 0, l.validation && !(e > -65 && e < 64))
      throw new RangeError(
        "The value must be a decimal number larger than -65 and smaller than 64."
      );
    let n = Math.floor(e) + 64, r = e - Math.floor(e);
    r = Math.round((r + 1) / 2 * 16383);
    let s = r >> 7 & 127, d = r & 127;
    return this.sendRpnValue("channelcoarsetuning", n, t), this.sendRpnValue("channelfinetuning", [s, d], t), this;
  }
  /**
   * Sends a **modulation depth range** message to adjust the depth of the modulation wheel's range.
   * The range can be specified with the `semitones` parameter, the `cents` parameter or by
   * specifying both parameters at the same time.
   *
   * @param {number} semitones The desired adjustment value in semitones (integer between 0 and
   * 127).
   *
   * @param {number} [cents=0] The desired adjustment value in cents (integer between 0 and 127).
   *
   * @param {Object} [options={}]
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @returns {OutputChannel} Returns the `OutputChannel` object so methods can be chained.
   */
  sendModulationRange(e, t, n = {}) {
    if (l.validation) {
      if (!Number.isInteger(e) || !(e >= 0 && e <= 127))
        throw new RangeError("The semitones value must be an integer between 0 and 127.");
      if (t != null && (!Number.isInteger(t) || !(t >= 0 && t <= 127)))
        throw new RangeError("If specified, the cents value must be an integer between 0 and 127.");
    }
    return t >= 0 && t <= 127 || (t = 0), this.sendRpnValue("modulationrange", [e, t], n), this;
  }
  /**
   * Sets a non-registered parameter (NRPN) to the specified value. The NRPN is selected by passing
   * in a two-position array specifying the values of the two control bytes. The value is specified
   * by passing in a single integer (most cases) or an array of two integers.
   *
   * NRPNs are not standardized in any way. Each manufacturer is free to implement them any way
   * they see fit. For example, according to the Roland GS specification, you can control the
   * **vibrato rate** using NRPN (1, 8). Therefore, to set the **vibrato rate** value to **123** you
   * would use:
   *
   * ```js
   * WebMidi.outputs[0].channels[0].sendNrpnValue([1, 8], 123);
   * ```
   *
   * In some rarer cases, you need to send two values with your NRPN messages. In such cases, you
   * would use a 2-position array. For example, for its **ClockBPM** parameter (2, 63), Novation
   * uses a 14-bit value that combines an MSB and an LSB (7-bit values). So, for example, if the
   * value to send was 10, you could use:
   *
   * ```js
   * WebMidi.outputs[0].channels[0].sendNrpnValue([2, 63], [0, 10]);
   * ```
   *
   * For further implementation details, refer to the manufacturer's documentation.
   *
   * @param nrpn {number[]} A two-position array specifying the two control bytes (0x63,
   * 0x62) that identify the non-registered parameter.
   *
   * @param [data=[]] {number|number[]} An integer or an array of integers with a length of 1 or 2
   * specifying the desired data.
   *
   * @param {Object} [options={}]
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @throws {RangeError} The control value must be between 0 and 127.
   * @throws {RangeError} The msb value must be between 0 and 127
   *
   * @returns {OutputChannel} Returns the `OutputChannel` object so methods can be chained.
   */
  sendNrpnValue(e, t, n = {}) {
    if (t = [].concat(t), l.validation) {
      if (!Array.isArray(e) || !Number.isInteger(e[0]) || !Number.isInteger(e[1]))
        throw new TypeError("The specified NRPN is invalid.");
      if (!(e[0] >= 0 && e[0] <= 127))
        throw new RangeError("The first byte of the NRPN must be between 0 and 127.");
      if (!(e[1] >= 0 && e[1] <= 127))
        throw new RangeError("The second byte of the NRPN must be between 0 and 127.");
      t.forEach((r) => {
        if (!(r >= 0 && r <= 127))
          throw new RangeError("The data bytes of the NRPN must be between 0 and 127.");
      });
    }
    return this._selectNonRegisteredParameter(e, n), this._setCurrentParameter(t, n), this._deselectNonRegisteredParameter(n), this;
  }
  /**
   * Sends a MIDI **pitch bend** message at the scheduled time. The resulting bend is relative to
   * the pitch bend range that has been defined. The range can be set with
   * [`sendPitchBendRange()`]{@link #sendPitchBendRange}. So, for example, if the pitch
   * bend range has been set to 12 semitones, using a bend value of -1 will bend the note 1 octave
   * below its nominal value.
   *
   * @param {number|number[]} [value] The intensity of the bend (between -1.0 and 1.0). A value of
   * zero means no bend. If the `rawValue` option is set to `true`, the intensity of the bend can be
   * defined by either using a single integer between 0 and 127 (MSB) or an array of two integers
   * between 0 and 127 representing, respectively, the MSB (most significant byte) and the LSB
   * (least significant byte). The MSB is expressed in semitones with `64` meaning no bend. A value
   * lower than `64` bends downwards while a value higher than `64` bends upwards. The LSB is
   * expressed in cents (1/100 of a semitone). An LSB of `64` also means no bend.
   *
   * @param {Object} [options={}]
   *
   * @param {boolean} [options.rawValue=false] A boolean indicating whether the value should be
   * considered as a float between -1.0 and 1.0 (default) or as raw integer between 0 and 127 (or
   * an array of 2 integers if using both MSB and LSB).
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @returns {OutputChannel} Returns the `OutputChannel` object so methods can be chained.
   */
  sendPitchBend(e, t = {}) {
    if (l.validation)
      if (t.rawValue && Array.isArray(e)) {
        if (!(e[0] >= 0 && e[0] <= 127))
          throw new RangeError("The pitch bend MSB must be an integer between 0 and 127.");
        if (!(e[1] >= 0 && e[1] <= 127))
          throw new RangeError("The pitch bend LSB must be an integer between 0 and 127.");
      } else if (t.rawValue && !Array.isArray(e)) {
        if (!(e >= 0 && e <= 127))
          throw new RangeError("The pitch bend MSB must be an integer between 0 and 127.");
      } else {
        if (isNaN(e) || e === null)
          throw new RangeError("Invalid pitch bend value.");
        if (!(e >= -1 && e <= 1))
          throw new RangeError("The pitch bend value must be a float between -1 and 1.");
      }
    let n = 0, r = 0;
    if (t.rawValue && Array.isArray(e))
      n = e[0], r = e[1];
    else if (t.rawValue && !Array.isArray(e))
      n = e;
    else {
      const s = o.fromFloatToMsbLsb((e + 1) / 2);
      n = s.msb, r = s.lsb;
    }
    return this.send(
      [
        (i.CHANNEL_MESSAGES.pitchbend << 4) + (this.number - 1),
        r,
        n
      ],
      { time: o.toTimestamp(t.time) }
    ), this;
  }
  /**
   * Sends a **pitch bend range** message at the scheduled time to adjust the range used by the
   * pitch bend lever. The range is specified by using the `semitones` and `cents` parameters. For
   * example, setting the `semitones` parameter to `12` means that the pitch bend range will be 12
   * semitones above and below the nominal pitch.
   *
   * @param semitones {number} The desired adjustment value in semitones (between 0 and 127). While
   * nothing imposes that in the specification, it is very common for manufacturers to limit the
   * range to 2 octaves (-12 semitones to 12 semitones).
   *
   * @param [cents=0] {number} The desired adjustment value in cents (integer between 0-127).
   *
   * @param {Object} [options={}]
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @throws {RangeError} The semitones value must be an integer between 0 and 127.
   * @throws {RangeError} The cents value must be an integer between 0 and 127.
   *
   * @returns {OutputChannel} Returns the `OutputChannel` object so methods can be chained.
   */
  sendPitchBendRange(e, t, n = {}) {
    if (l.validation) {
      if (!Number.isInteger(e) || !(e >= 0 && e <= 127))
        throw new RangeError("The semitones value must be an integer between 0 and 127.");
      if (!Number.isInteger(t) || !(t >= 0 && t <= 127))
        throw new RangeError("The cents value must be an integer between 0 and 127.");
    }
    return this.sendRpnValue("pitchbendrange", [e, t], n), this;
  }
  /**
   * Sends a MIDI **program change** message at the scheduled time.
   *
   * @param [program=1] {number} The MIDI patch (program) number (integer between `0` and `127`).
   *
   * @param {Object} [options={}]
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @throws {TypeError} Failed to execute 'send' on 'MIDIOutput': The value at index 1 is greater
   * than 0xFF.
   *
   * @returns {OutputChannel} Returns the `OutputChannel` object so methods can be chained.
   *
   */
  sendProgramChange(e, t = {}) {
    if (e = parseInt(e) || 0, l.validation && !(e >= 0 && e <= 127))
      throw new RangeError("The program number must be between 0 and 127.");
    return this.send(
      [
        (i.CHANNEL_MESSAGES.programchange << 4) + (this.number - 1),
        e
      ],
      { time: o.toTimestamp(t.time) }
    ), this;
  }
  /**
   * Sets the specified MIDI registered parameter to the desired value. The value is defined with
   * up to two bytes of data (msb, lsb) that each can go from 0 to 127.
   *
   * MIDI
   * [registered parameters](https://www.midi.org/specifications-old/item/table-3-control-change-messages-data-bytes-2)
   * extend the original list of control change messages. The MIDI 1.0 specification lists only a
   * limited number of them:
   *
   * | Numbers      | Function                 |
   * |--------------|--------------------------|
   * | (0x00, 0x00) | `pitchbendrange`         |
   * | (0x00, 0x01) | `channelfinetuning`      |
   * | (0x00, 0x02) | `channelcoarsetuning`    |
   * | (0x00, 0x03) | `tuningprogram`          |
   * | (0x00, 0x04) | `tuningbank`             |
   * | (0x00, 0x05) | `modulationrange`        |
   * | (0x3D, 0x00) | `azimuthangle`           |
   * | (0x3D, 0x01) | `elevationangle`         |
   * | (0x3D, 0x02) | `gain`                   |
   * | (0x3D, 0x03) | `distanceratio`          |
   * | (0x3D, 0x04) | `maximumdistance`        |
   * | (0x3D, 0x05) | `maximumdistancegain`    |
   * | (0x3D, 0x06) | `referencedistanceratio` |
   * | (0x3D, 0x07) | `panspreadangle`         |
   * | (0x3D, 0x08) | `rollangle`              |
   *
   * Note that the **Tuning Program** and **Tuning Bank** parameters are part of the *MIDI Tuning
   * Standard*, which is not widely implemented.
   *
   * @param rpn {string|number[]} A string identifying the parameter's name (see above) or a
   * two-position array specifying the two control bytes (e.g. `[0x65, 0x64]`) that identify the
   * registered parameter.
   *
   * @param [data=[]] {number|number[]} An single integer or an array of integers with a maximum
   * length of 2 specifying the desired data.
   *
   * @param {Object} [options={}]
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @returns {OutputChannel} Returns the `OutputChannel` object so methods can be chained.
   */
  sendRpnValue(e, t, n = {}) {
    if (Array.isArray(e) || (e = i.REGISTERED_PARAMETERS[e]), l.validation) {
      if (!Number.isInteger(e[0]) || !Number.isInteger(e[1]))
        throw new TypeError("The specified NRPN is invalid.");
      if (!(e[0] >= 0 && e[0] <= 127))
        throw new RangeError("The first byte of the RPN must be between 0 and 127.");
      if (!(e[1] >= 0 && e[1] <= 127))
        throw new RangeError("The second byte of the RPN must be between 0 and 127.");
      [].concat(t).forEach((r) => {
        if (!(r >= 0 && r <= 127))
          throw new RangeError("The data bytes of the RPN must be between 0 and 127.");
      });
    }
    return this._selectRegisteredParameter(e, n), this._setCurrentParameter(t, n), this._deselectRegisteredParameter(n), this;
  }
  /**
   * Sets the MIDI tuning bank to use. Note that the **Tuning Bank** parameter is part of the
   * *MIDI Tuning Standard*, which is not widely implemented.
   *
   * @param value {number} The desired tuning bank (integer between `0` and `127`).
   *
   * @param {Object} [options={}]
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @throws {RangeError} The bank value must be between 0 and 127.
   *
   * @returns {OutputChannel} Returns the `OutputChannel` object so methods can be chained.
   */
  sendTuningBank(e, t = {}) {
    if (l.validation && (!Number.isInteger(e) || !(e >= 0 && e <= 127)))
      throw new RangeError("The tuning bank number must be between 0 and 127.");
    return this.sendRpnValue("tuningbank", e, t), this;
  }
  /**
   * Sets the MIDI tuning program to use. Note that the **Tuning Program** parameter is part of the
   * *MIDI Tuning Standard*, which is not widely implemented.
   *
   * @param value {number} The desired tuning program (integer between `0` and `127`).
   *
   * @param {Object} [options={}]
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @throws {RangeError} The program value must be between 0 and 127.
   *
   * @returns {OutputChannel} Returns the `OutputChannel` object so methods can be chained.
   */
  sendTuningProgram(e, t = {}) {
    if (l.validation && (!Number.isInteger(e) || !(e >= 0 && e <= 127)))
      throw new RangeError("The tuning program number must be between 0 and 127.");
    return this.sendRpnValue("tuningprogram", e, t), this;
  }
  /**
   * Turns local control on or off. Local control is usually enabled by default. If you disable it,
   * the instrument will no longer trigger its own sounds. It will only send the MIDI messages to
   * its out port.
   *
   * @param [state=false] {boolean} Whether to activate local control (`true`) or disable it
   * (`false`).
   *
   * @param {Object} [options={}]
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @returns {OutputChannel} Returns the `OutputChannel` object so methods can be chained.
   */
  sendLocalControl(e, t = {}) {
    return e ? this.sendChannelMode("localcontrol", 127, t) : this.sendChannelMode("localcontrol", 0, t);
  }
  /**
   * Sends an **all notes off** channel mode message. This will make all currently playing notes
   * fade out just as if their key had been released. This is different from the
   * [`sendAllSoundOff()`]{@link #sendAllSoundOff} method which mutes all sounds immediately.
   *
   * @param {Object} [options={}]
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @returns {OutputChannel} Returns the `OutputChannel` object so methods can be chained.
   */
  sendAllNotesOff(e = {}) {
    return this.sendChannelMode("allnotesoff", 0, e);
  }
  /**
   * Sends an **all sound off** channel mode message. This will silence all sounds playing on that
   * channel but will not prevent new sounds from being triggered.
   *
   * @param {Object} [options={}]
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @returns {OutputChannel} Returns the `OutputChannel` object so methods can be chained.
   */
  sendAllSoundOff(e = {}) {
    return this.sendChannelMode("allsoundoff", 0, e);
  }
  /**
   * Sends a **reset all controllers** channel mode message. This resets all controllers, such as
   * the pitch bend, to their default value.
   *
   * @param {Object} [options={}]
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @returns {OutputChannel} Returns the `OutputChannel` object so methods can be chained.
   */
  sendResetAllControllers(e = {}) {
    return this.sendChannelMode("resetallcontrollers", 0, e);
  }
  /**
   * Sets the polyphonic mode. In `"poly"` mode (usually the default), multiple notes can be played
   * and heard at the same time. In `"mono"` mode, only one note will be heard at once even if
   * multiple notes are being played.
   *
   * @param {string} [mode=poly] The mode to use: `"mono"` or `"poly"`.
   *
   * @param {Object} [options={}]
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @returns {OutputChannel} Returns the `OutputChannel` object so methods can be chained.
   */
  sendPolyphonicMode(e, t = {}) {
    return e === "mono" ? this.sendChannelMode("monomodeon", 0, t) : this.sendChannelMode("polymodeon", 0, t);
  }
  /**
   * An integer to offset the reported octave of outgoing note-specific messages (`noteon`,
   * `noteoff` and `keyaftertouch`). By default, middle C (MIDI note number 60) is placed on the 4th
   * octave (C4).
   *
   * Note that this value is combined with the global offset value defined in
   * [`WebMidi.octaveOffset`](WebMidi#octaveOffset) and with the parent value defined in
   * [`Output.octaveOffset`]{@link Output#octaveOffset}.
   *
   * @type {number}
   *
   * @since 3.0
   */
  get octaveOffset() {
    return this._octaveOffset;
  }
  set octaveOffset(e) {
    if (this.validation && (e = parseInt(e), isNaN(e)))
      throw new TypeError("The 'octaveOffset' property must be an integer.");
    this._octaveOffset = e;
  }
  /**
   * The parent [`Output`]{@link Output} this channel belongs to.
   * @type {Output}
   * @since 3.0
   */
  get output() {
    return this._output;
  }
  /**
   * This channel's MIDI number (`1` - `16`).
   * @type {number}
   * @since 3.0
   */
  get number() {
    return this._number;
  }
}
/**
 * The `Output` class represents a single MIDI output port (not to be confused with a MIDI channel).
 * A port is made available by a MIDI device. A MIDI device can advertise several input and output
 * ports. Each port has 16 MIDI channels which can be accessed via the [`channels`](#channels)
 * property.
 *
 * The `Output` object is automatically instantiated by the library according to the host's MIDI
 * subsystem and should not be directly instantiated.
 *
 * You can access all available `Output` objects by referring to the
 * [`WebMidi.outputs`](WebMidi#outputs) array or by using methods such as
 * [`WebMidi.getOutputByName()`](WebMidi#getOutputByName) or
 * [`WebMidi.getOutputById()`](WebMidi#getOutputById).
 *
 * @fires Output#opened
 * @fires Output#disconnected
 * @fires Output#closed
 *
 * @extends EventEmitter
 * @license Apache-2.0
 */
class I extends E {
  /**
   * Creates an `Output` object.
   *
   * @param {MIDIOutput} midiOutput [`MIDIOutput`](https://developer.mozilla.org/en-US/docs/Web/API/MIDIOutput)
   * object as provided by the MIDI subsystem.
   */
  constructor(e) {
    super(), this._midiOutput = e, this._octaveOffset = 0, this.channels = [];
    for (let t = 1; t <= 16; t++) this.channels[t] = new J(this, t);
    this._midiOutput.onstatechange = this._onStateChange.bind(this);
  }
  /**
   * Destroys the `Output`. All listeners are removed, all channels are destroyed and the MIDI
   * subsystem is unlinked.
   * @returns {Promise<void>}
   */
  async destroy() {
    this.removeListener(), this.channels.forEach((e) => e.destroy()), this.channels = [], this._midiOutput && (this._midiOutput.onstatechange = null), await this.close(), this._midiOutput = null;
  }
  /**
   * @private
   */
  _onStateChange(e) {
    let t = {
      timestamp: l.time
    };
    e.port.connection === "open" ? (t.type = "opened", t.target = this, t.port = t.target, this.emit("opened", t)) : e.port.connection === "closed" && e.port.state === "connected" ? (t.type = "closed", t.target = this, t.port = t.target, this.emit("closed", t)) : e.port.connection === "closed" && e.port.state === "disconnected" ? (t.type = "disconnected", t.port = {
      connection: e.port.connection,
      id: e.port.id,
      manufacturer: e.port.manufacturer,
      name: e.port.name,
      state: e.port.state,
      type: e.port.type
    }, this.emit("disconnected", t)) : e.port.connection === "pending" && e.port.state === "disconnected" || console.warn("This statechange event was not caught:", e.port.connection, e.port.state);
  }
  /**
   * Opens the output for usage. When the library is enabled, all ports are automatically opened.
   * This method is only useful for ports that have been manually closed.
   *
   * @returns {Promise<Output>} The promise is fulfilled with the `Output` object.
   */
  async open() {
    try {
      return await this._midiOutput.open(), Promise.resolve(this);
    } catch (e) {
      return Promise.reject(e);
    }
  }
  /**
   * Closes the output connection. When an output is closed, it cannot be used to send MIDI messages
   * until the output is opened again by calling [`open()`]{@link #open}. You can check
   * the connection status by looking at the [`connection`]{@link #connection} property.
   *
   * @returns {Promise<void>}
   */
  async close() {
    this._midiOutput ? await this._midiOutput.close() : await Promise.resolve();
  }
  /**
   * Sends a MIDI message on the MIDI output port. If no time is specified, the message will be
   * sent immediately. The message should be an array of 8 bit unsigned integers (0-225), a
   * [`Uint8Array`]{@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array}
   * object or a [`Message`](Message) object.
   *
   * It is usually not necessary to use this method directly as you can use one of the simpler
   * helper methods such as [`playNote()`](#playNote), [`stopNote()`](#stopNote),
   * [`sendControlChange()`](#sendControlChange), etc.
   *
   * Details on the format of MIDI messages are available in the summary of
   * [MIDI messages]{@link https://www.midi.org/specifications-old/item/table-1-summary-of-midi-message}
   * from the MIDI Manufacturers Association.
   *
   * @param message {number[]|Uint8Array|Message} An array of 8bit unsigned integers, a `Uint8Array`
   * object (not available in Node.js) containing the message bytes or a `Message` object.
   *
   * @param {object} [options={}]
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @throws {RangeError} The first byte (status) must be an integer between 128 and 255.
   *
   * @returns {Output} Returns the `Output` object so methods can be chained.
   *
   * @license Apache-2.0
   */
  send(e, t = { time: 0 }, n = 0) {
    if (e instanceof U && (e = o.isNode ? e.data : e.rawData), e instanceof Uint8Array && o.isNode && (e = Array.from(e)), l.validation) {
      if (!Array.isArray(e) && !(e instanceof Uint8Array) && (e = [e], Array.isArray(t) && (e = e.concat(t)), t = isNaN(n) ? { time: 0 } : { time: n }), !(parseInt(e[0]) >= 128 && parseInt(e[0]) <= 255))
        throw new RangeError("The first byte (status) must be an integer between 128 and 255.");
      e.slice(1).forEach((r) => {
        if (r = parseInt(r), !(r >= 0 && r <= 255))
          throw new RangeError("Data bytes must be integers between 0 and 255.");
      }), t || (t = { time: 0 });
    }
    return this._midiOutput.send(e, o.toTimestamp(t.time)), this;
  }
  /**
   * Sends a MIDI [**system exclusive**]{@link
    * https://www.midi.org/specifications-old/item/table-4-universal-system-exclusive-messages}
   * (*sysex*) message. There are two categories of system exclusive messages: manufacturer-specific
   * messages and universal messages. Universal messages are further divided into three subtypes:
   *
   *   * Universal non-commercial (for research and testing): `0x7D`
   *   * Universal non-realtime: `0x7E`
   *   * Universal realtime: `0x7F`
   *
   * The method's first parameter (`identification`) identifies the type of message. If the value of
   * `identification` is `0x7D` (125), `0x7E` (126) or `0x7F` (127), the message will be identified
   * as a **universal non-commercial**, **universal non-realtime** or **universal realtime** message
   * (respectively).
   *
   * If the `identification` value is an array or an integer between 0 and 124, it will be used to
   * identify the manufacturer targeted by the message. The *MIDI Manufacturers Association*
   * maintains a full list of
   * [Manufacturer ID Numbers](https://www.midi.org/specifications-old/item/manufacturer-id-numbers).
   *
   * The `data` parameter should only contain the data of the message. When sending out the actual
   * MIDI message, WEBMIDI.js will automatically prepend the data with the **sysex byte** (`0xF0`)
   * and the identification byte(s). It will also automatically terminate the message with the
   * **sysex end byte** (`0xF7`).
   *
   * To use the `sendSysex()` method, system exclusive message support must have been enabled. To
   * do so, you must set the `sysex` option to `true` when calling
   * [`WebMidi.enable()`]{@link WebMidi#enable}:
   *
   * ```js
   * WebMidi.enable({sysex: true})
   *   .then(() => console.log("System exclusive messages are enabled");
   * ```
   *
   * ##### Examples of manufacturer-specific system exclusive messages
   *
   * If you want to send a sysex message to a Korg device connected to the first output, you would
   * use the following code:
   *
   * ```js
   * WebMidi.outputs[0].sendSysex(0x42, [0x1, 0x2, 0x3, 0x4, 0x5]);
   * ```
   * In this case `0x42` is the ID of the manufacturer (Korg) and `[0x1, 0x2, 0x3, 0x4, 0x5]` is the
   * data being sent.
   *
   * The parameters can be specified using any number notation (decimal, hex, binary, etc.).
   * Therefore, the code above is equivalent to this code:
   *
   * ```js
   * WebMidi.outputs[0].sendSysex(66, [1, 2, 3, 4, 5]);
   * ```
   *
   * Some manufacturers are identified using 3 bytes. In this case, you would use a 3-position array
   * as the first parameter. For example, to send the same sysex message to a
   * *Native Instruments* device:
   *
   * ```js
   * WebMidi.outputs[0].sendSysex([0x00, 0x21, 0x09], [0x1, 0x2, 0x3, 0x4, 0x5]);
   * ```
   *
   * There is no limit for the length of the data array. However, it is generally suggested to keep
   * system exclusive messages to 64Kb or less.
   *
   * ##### Example of universal system exclusive message
   *
   * If you want to send a universal sysex message, simply assign the correct identification number
   * in the first parameter. Number `0x7D` (125) is for non-commercial, `0x7E` (126) is for
   * non-realtime and `0x7F` (127) is for realtime.
   *
   * So, for example, if you wanted to send an identity request non-realtime message (`0x7E`), you
   * could use the following:
   *
   * ```js
   * WebMidi.outputs[0].sendSysex(0x7E, [0x7F, 0x06, 0x01]);
   * ```
   *
   * For more details on the format of universal messages, consult the list of
   * [universal sysex messages](https://www.midi.org/specifications-old/item/table-4-universal-system-exclusive-messages).
   *
   * @param {number|number[]} identification An unsigned integer or an array of three unsigned
   * integers between `0` and `127` that either identify the manufacturer or sets the message to be
   * a **universal non-commercial message** (`0x7D`), a **universal non-realtime message** (`0x7E`)
   * or a **universal realtime message** (`0x7F`). The *MIDI Manufacturers Association* maintains a
   * full list of
   * [Manufacturer ID Numbers](https://www.midi.org/specifications-old/item/manufacturer-id-numbers).
   *
   * @param {number[]|Uint8Array} [data] A `Uint8Array` or an array of unsigned integers between `0`
   * and `127`. This is the data you wish to transfer.
   *
   * @param {object} [options={}]
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @throws {DOMException} Failed to execute 'send' on 'MIDIOutput': System exclusive message is
   * not allowed.
   *
   * @throws {TypeError} Failed to execute 'send' on 'MIDIOutput': The value at index x is greater
   * than 0xFF.
   *
   * @returns {Output} Returns the `Output` object so methods can be chained.
   */
  sendSysex(e, t = [], n = {}) {
    if (e = [].concat(e), t instanceof Uint8Array) {
      const r = new Uint8Array(1 + e.length + t.length + 1);
      r[0] = i.SYSTEM_MESSAGES.sysex, r.set(Uint8Array.from(e), 1), r.set(t, 1 + e.length), r[r.length - 1] = i.SYSTEM_MESSAGES.sysexend, this.send(r, { time: n.time });
    } else {
      const r = e.concat(t, i.SYSTEM_MESSAGES.sysexend);
      this.send([i.SYSTEM_MESSAGES.sysex].concat(r), { time: n.time });
    }
    return this;
  }
  /**
   * Clears all MIDI messages that have been queued and scheduled but not yet sent.
   *
   * **Warning**: this method is defined in the
   * [Web MIDI API specification](https://www.w3.org/TR/webmidi/#MIDIOutput) but has not been
   * implemented by all browsers yet. You can follow
   * [this issue](https://github.com/djipco/webmidi/issues/52) for more info.
   *
   * @returns {Output} Returns the `Output` object so methods can be chained.
   */
  clear() {
    return this._midiOutput.clear ? this._midiOutput.clear() : l.validation && console.warn(
      "The 'clear()' method has not yet been implemented in your environment."
    ), this;
  }
  /**
   * Sends a MIDI **timecode quarter frame** message. Please note that no processing is being done
   * on the data. It is up to the developer to format the data according to the
   * [MIDI Timecode](https://en.wikipedia.org/wiki/MIDI_timecode) format.
   *
   * @param value {number} The quarter frame message content (integer between 0 and 127).
   *
   * @param {object} [options={}]
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @returns {Output} Returns the `Output` object so methods can be chained.
   */
  sendTimecodeQuarterFrame(e, t = {}) {
    if (l.validation && (e = parseInt(e), isNaN(e) || !(e >= 0 && e <= 127)))
      throw new RangeError("The value must be an integer between 0 and 127.");
    return this.send(
      [
        i.SYSTEM_MESSAGES.timecode,
        e
      ],
      { time: t.time }
    ), this;
  }
  /**
   * Sends a **song position** MIDI message. The value is expressed in MIDI beats (between `0` and
   * `16383`) which are 16th note. Position `0` is always the start of the song.
   *
   * @param {number} [value=0] The MIDI beat to cue to (integer between `0` and `16383`).
   *
   * @param {object} [options={}]
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @returns {Output} Returns the `Output` object so methods can be chained.
   *
   * @since 3.0.0
   */
  sendSongPosition(e = 0, t = {}) {
    e = Math.floor(e) || 0;
    var n = e >> 7 & 127, r = e & 127;
    return this.send(
      [
        i.SYSTEM_MESSAGES.songposition,
        n,
        r
      ],
      { time: t.time }
    ), this;
  }
  /**
   * Sends a **song select** MIDI message.
   *
   * @param {number} [value=0] The number of the song to select (integer between `0` and `127`).
   *
   * @param {object} [options={}]
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @throws The song number must be between 0 and 127.
   *
   * @returns {Output} Returns the `Output` object so methods can be chained.
   *
   * @since 3.0.0
   */
  sendSongSelect(e = 0, t = {}) {
    if (l.validation && (e = parseInt(e), isNaN(e) || !(e >= 0 && e <= 127)))
      throw new RangeError("The program value must be between 0 and 127");
    return this.send(
      [
        i.SYSTEM_MESSAGES.songselect,
        e
      ],
      { time: t.time }
    ), this;
  }
  /**
   * Sends a MIDI **tune request** real-time message.
   *
   * @param {object} [options={}]
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @returns {Output} Returns the `Output` object so methods can be chained.
   *
   * @since 3.0.0
   */
  sendTuneRequest(e = {}) {
    return this.send(
      [i.SYSTEM_MESSAGES.tunerequest],
      { time: e.time }
    ), this;
  }
  /**
   * Sends a MIDI **clock** real-time message. According to the standard, there are 24 MIDI clocks
   * for every quarter note.
   *
   * @param {object} [options={}]
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @returns {Output} Returns the `Output` object so methods can be chained.
   */
  sendClock(e = {}) {
    return this.send(
      [i.SYSTEM_MESSAGES.clock],
      { time: e.time }
    ), this;
  }
  /**
   * Sends a **start** real-time message. A MIDI Start message starts the playback of the current
   * song at beat 0. To start playback elsewhere in the song, use the
   * [`sendContinue()`]{@link #sendContinue} method.
   *
   * @param {object} [options={}]
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @returns {Output} Returns the `Output` object so methods can be chained.
   */
  sendStart(e = {}) {
    return this.send(
      [i.SYSTEM_MESSAGES.start],
      { time: e.time }
    ), this;
  }
  /**
   * Sends a **continue** real-time message. This resumes song playback where it was previously
   * stopped or where it was last cued with a song position message. To start playback from the
   * start, use the [`sendStart()`]{@link Output#sendStart}` method.
   *
   * @param {object} [options={}]
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @returns {Output} Returns the `Output` object so methods can be chained.
   */
  sendContinue(e = {}) {
    return this.send(
      [i.SYSTEM_MESSAGES.continue],
      { time: e.time }
    ), this;
  }
  /**
   * Sends a **stop** real-time message. This tells the device connected to this output to stop
   * playback immediately (or at the scheduled time, if specified).
   *
   * @param {object} [options={}]
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @returns {Output} Returns the `Output` object so methods can be chained.
   */
  sendStop(e = {}) {
    return this.send(
      [i.SYSTEM_MESSAGES.stop],
      { time: e.time }
    ), this;
  }
  /**
   * Sends an **active sensing** real-time message. This tells the device connected to this port
   * that the connection is still good. Active sensing messages are often sent every 300 ms if there
   * was no other activity on the MIDI port.
   *
   * @param {object} [options={}]
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @returns {Output} Returns the `Output` object so methods can be chained.
   */
  sendActiveSensing(e = {}) {
    return this.send(
      [i.SYSTEM_MESSAGES.activesensing],
      { time: e.time }
    ), this;
  }
  /**
   * Sends a **reset** real-time message. This tells the device connected to this output that it
   * should reset itself to a default state.
   *
   * @param {object} [options={}]
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @returns {Output} Returns the `Output` object so methods can be chained.
   */
  sendReset(e = {}) {
    return this.send(
      [i.SYSTEM_MESSAGES.reset],
      { time: e.time }
    ), this;
  }
  /**
   * @private
   * @deprecated since version 3.0
   */
  sendTuningRequest(e = {}) {
    return l.validation && console.warn(
      "The sendTuningRequest() method has been deprecated. Use sendTuningRequest() instead."
    ), this.sendTuneRequest(e);
  }
  /**
   * Sends a MIDI **key aftertouch** message to the specified channel(s) at the scheduled time. This
   * is a key-specific aftertouch. For a channel-wide aftertouch message, use
   * [`setChannelAftertouch()`]{@link #setChannelAftertouch}.
   *
   * @param note {number|Note|string|number[]|Note[]|string[]} The note(s) for which you are sending
   * an aftertouch value. The notes can be specified by using a MIDI note number (`0` - `127`), a
   * [`Note`](Note) object, a note identifier (e.g. `C3`, `G#4`, `F-1`, `Db7`) or an array of the
   * previous types. When using a note identifier, octave range must be between `-1` and `9`. The
   * lowest note is `C-1` (MIDI note number `0`) and the highest note is `G9` (MIDI note number
   * `127`).
   *
   * @param [pressure=0.5] {number} The pressure level (between 0 and 1). An invalid pressure value
   * will silently trigger the default behaviour. If the `rawValue` option is set to `true`, the
   * pressure can be defined by using an integer between 0 and 127.
   *
   * @param {object} [options={}]
   *
   * @param {number|number[]} [options.channels=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]]
   * The MIDI channel number (between `1` and `16`) or an array of channel numbers to use. If no
   * channel is specified, all channels will be used.
   *
   * @param {boolean} [options.rawValue=false] A boolean indicating whether the value should be
   * considered a float between `0` and `1.0` (default) or a raw integer between `0` and `127`.
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @return {Output} Returns the `Output` object so methods can be chained.
   *
   * @since 3.0.0
   */
  sendKeyAftertouch(e, t, n = {}) {
    return n.channels == null && (n.channels = i.MIDI_CHANNEL_NUMBERS), o.sanitizeChannels(n.channels).forEach((r) => {
      this.channels[r].sendKeyAftertouch(e, t, n);
    }), this;
  }
  /**
   * Sends a MIDI **control change** message to the specified channel(s) at the scheduled time. The
   * control change message to send can be specified numerically (0-127) or by using one of the
   * following common names:
   *
   * | Number | Name                          |
   * |--------|-------------------------------|
   * | 0      |`bankselectcoarse`             |
   * | 1      |`modulationwheelcoarse`        |
   * | 2      |`breathcontrollercoarse`       |
   * | 4      |`footcontrollercoarse`         |
   * | 5      |`portamentotimecoarse`         |
   * | 6      |`dataentrycoarse`              |
   * | 7      |`volumecoarse`                 |
   * | 8      |`balancecoarse`                |
   * | 10     |`pancoarse`                    |
   * | 11     |`expressioncoarse`             |
   * | 12     |`effectcontrol1coarse`         |
   * | 13     |`effectcontrol2coarse`         |
   * | 18     |`generalpurposeslider3`        |
   * | 19     |`generalpurposeslider4`        |
   * | 32     |`bankselectfine`               |
   * | 33     |`modulationwheelfine`          |
   * | 34     |`breathcontrollerfine`         |
   * | 36     |`footcontrollerfine`           |
   * | 37     |`portamentotimefine`           |
   * | 38     |`dataentryfine`                |
   * | 39     |`volumefine`                   |
   * | 40     |`balancefine`                  |
   * | 42     |`panfine`                      |
   * | 43     |`expressionfine`               |
   * | 44     |`effectcontrol1fine`           |
   * | 45     |`effectcontrol2fine`           |
   * | 64     |`holdpedal`                    |
   * | 65     |`portamento`                   |
   * | 66     |`sustenutopedal`               |
   * | 67     |`softpedal`                    |
   * | 68     |`legatopedal`                  |
   * | 69     |`hold2pedal`                   |
   * | 70     |`soundvariation`               |
   * | 71     |`resonance`                    |
   * | 72     |`soundreleasetime`             |
   * | 73     |`soundattacktime`              |
   * | 74     |`brightness`                   |
   * | 75     |`soundcontrol6`                |
   * | 76     |`soundcontrol7`                |
   * | 77     |`soundcontrol8`                |
   * | 78     |`soundcontrol9`                |
   * | 79     |`soundcontrol10`               |
   * | 80     |`generalpurposebutton1`        |
   * | 81     |`generalpurposebutton2`        |
   * | 82     |`generalpurposebutton3`        |
   * | 83     |`generalpurposebutton4`        |
   * | 91     |`reverblevel`                  |
   * | 92     |`tremololevel`                 |
   * | 93     |`choruslevel`                  |
   * | 94     |`celestelevel`                 |
   * | 95     |`phaserlevel`                  |
   * | 96     |`dataincrement`                |
   * | 97     |`datadecrement`                |
   * | 98     |`nonregisteredparametercoarse` |
   * | 99     |`nonregisteredparameterfine`   |
   * | 100    |`registeredparametercoarse`    |
   * | 101    |`registeredparameterfine`      |
   * | 120    |`allsoundoff`                  |
   * | 121    |`resetallcontrollers`          |
   * | 122    |`localcontrol`                 |
   * | 123    |`allnotesoff`                  |
   * | 124    |`omnimodeoff`                  |
   * | 125    |`omnimodeon`                   |
   * | 126    |`monomodeon`                   |
   * | 127    |`polymodeon`                   |
   *
   * Note: as you can see above, not all control change message have a matching name. This does not
   * mean you cannot use the others. It simply means you will need to use their number (`0` - `127`)
   * instead of their name. While you can still use them, numbers `120` to `127` are usually
   * reserved for *channel mode* messages. See [`sendChannelMode()`]{@link #sendChannelMode} method
   * for more info.
   *
   * To view a list of all available **control change** messages, please consult [Table 3 - Control
   * Change Messages](https://www.midi.org/specifications-old/item/table-3-control-change-messages-data-bytes-2)
   * from the MIDI specification.
   *
   * @param controller {number|string} The MIDI controller name or number (0-127).
   *
   * @param [value=0] {number} The value to send (0-127).
   *
   * @param {object} [options={}]
   *
   * @param {number|number[]} [options.channels=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]]
   * The MIDI channel number (between `1` and `16`) or an array of channel numbers to use. If no
   * channel is specified, all channels will be used.
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @throws {RangeError} Controller numbers must be between 0 and 127.
   * @throws {RangeError} Invalid controller name.
   *
   * @return {Output} Returns the `Output` object so methods can be chained.
   */
  sendControlChange(e, t, n = {}, r = {}) {
    if (l.validation && (Array.isArray(n) || Number.isInteger(n) || n === "all")) {
      const s = n;
      n = r, n.channels = s, n.channels === "all" && (n.channels = i.MIDI_CHANNEL_NUMBERS);
    }
    return n.channels == null && (n.channels = i.MIDI_CHANNEL_NUMBERS), o.sanitizeChannels(n.channels).forEach((s) => {
      this.channels[s].sendControlChange(e, t, n);
    }), this;
  }
  /**
   * Sends a **pitch bend range** message to the specified channel(s) at the scheduled time so that
   * they adjust the range used by their pitch bend lever. The range is specified by using the
   * `semitones` and `cents` parameters. For example, setting the `semitones` parameter to `12`
   * means that the pitch bend range will be 12 semitones above and below the nominal pitch.
   *
   * @param {number} [semitones=0] The desired adjustment value in semitones (between `0` and `127`).
   * While nothing imposes that in the specification, it is very common for manufacturers to limit
   * the range to 2 octaves (-12 semitones to 12 semitones).
   *
   * @param {number} [cents=0] The desired adjustment value in cents (integer between `0` and
   * `127`).
   *
   * @param {object} [options={}]
   *
   * @param {number|number[]} [options.channels=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]]
   * The MIDI channel number (between `1` and `16`) or an array of channel numbers to use. If no
   * channel is specified, all channels will be used.
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @throws {RangeError} The msb value must be between 0 and 127.
   * @throws {RangeError} The lsb value must be between 0 and 127.
   *
   * @returns {Output} Returns the `Output` object so methods can be chained.
   *
   * @since 3.0.0
   */
  sendPitchBendRange(e = 0, t = 0, n = {}) {
    return n.channels == null && (n.channels = i.MIDI_CHANNEL_NUMBERS), o.sanitizeChannels(n.channels).forEach((r) => {
      this.channels[r].sendPitchBendRange(e, t, n);
    }), this;
  }
  /**
   * @private
   * @deprecated since version 3.0
   */
  setPitchBendRange(e = 0, t = 0, n = "all", r = {}) {
    return l.validation && (console.warn(
      "The setPitchBendRange() method is deprecated. Use sendPitchBendRange() instead."
    ), r.channels = n, r.channels === "all" && (r.channels = i.MIDI_CHANNEL_NUMBERS)), this.sendPitchBendRange(e, t, r);
  }
  /**
   * Sets the specified MIDI registered parameter to the desired value. The value is defined with
   * up to two bytes of data (msb, lsb) that each can go from `0` to `127`.
   *
   * MIDI
   * [registered parameters](https://www.midi.org/specifications-old/item/table-3-control-change-messages-data-bytes-2)
   * extend the original list of control change messages. The MIDI 1.0 specification lists only a
   * limited number of them:
   *
   * | Numbers      | Function                 |
   * |--------------|--------------------------|
   * | (0x00, 0x00) | `pitchbendrange`         |
   * | (0x00, 0x01) | `channelfinetuning`      |
   * | (0x00, 0x02) | `channelcoarsetuning`    |
   * | (0x00, 0x03) | `tuningprogram`          |
   * | (0x00, 0x04) | `tuningbank`             |
   * | (0x00, 0x05) | `modulationrange`        |
   * | (0x3D, 0x00) | `azimuthangle`           |
   * | (0x3D, 0x01) | `elevationangle`         |
   * | (0x3D, 0x02) | `gain`                   |
   * | (0x3D, 0x03) | `distanceratio`          |
   * | (0x3D, 0x04) | `maximumdistance`        |
   * | (0x3D, 0x05) | `maximumdistancegain`    |
   * | (0x3D, 0x06) | `referencedistanceratio` |
   * | (0x3D, 0x07) | `panspreadangle`         |
   * | (0x3D, 0x08) | `rollangle`              |
   *
   * Note that the `tuningprogram` and `tuningbank` parameters are part of the *MIDI Tuning
   * Standard*, which is not widely implemented.
   *
   * @param parameter {string|number[]} A string identifying the parameter's name (see above) or a
   * two-position array specifying the two control bytes (e.g. `[0x65, 0x64]`) that identify the
   * registered parameter.
   *
   * @param [data=[]] {number|number[]} A single integer or an array of integers with a maximum
   * length of 2 specifying the desired data.
   *
   * @param {object} [options={}]
   *
   * @param {number|number[]} [options.channels=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]]
   * The MIDI channel number (between `1` and `16`) or an array of channel numbers to use. If no
   * channel is specified, all channels will be used.
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @returns {Output} Returns the `Output` object so methods can be chained.
   */
  sendRpnValue(e, t, n = {}) {
    return n.channels == null && (n.channels = i.MIDI_CHANNEL_NUMBERS), o.sanitizeChannels(n.channels).forEach((r) => {
      this.channels[r].sendRpnValue(e, t, n);
    }), this;
  }
  /**
   * @private
   * @deprecated since version 3.0
   */
  setRegisteredParameter(e, t = [], n = "all", r = {}) {
    return l.validation && (console.warn(
      "The setRegisteredParameter() method is deprecated. Use sendRpnValue() instead."
    ), r.channels = n, r.channels === "all" && (r.channels = i.MIDI_CHANNEL_NUMBERS)), this.sendRpnValue(e, t, r);
  }
  /**
   * Sends a MIDI **channel aftertouch** message to the specified channel(s). For key-specific
   * aftertouch, you should instead use [`setKeyAftertouch()`]{@link #setKeyAftertouch}.
   *
   * @param [pressure=0.5] {number} The pressure level (between `0` and `1`). An invalid pressure
   * value will silently trigger the default behaviour. If the `rawValue` option is set to `true`,
   * the pressure can be defined by using an integer between `0` and `127`.
   *
   * @param {object} [options={}]
   *
   * @param {number|number[]} [options.channels=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]]
   * The MIDI channel number (between `1` and `16`) or an array of channel numbers to use. If no
   * channel is specified, all channels will be used.
   *
   * @param {boolean} [options.rawValue=false] A boolean indicating whether the value should be
   * considered a float between `0` and `1.0` (default) or a raw integer between `0` and `127`.
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @return {Output} Returns the `Output` object so methods can be chained.
   * @since 3.0.0
   */
  sendChannelAftertouch(e, t = {}, n = {}) {
    if (l.validation && (Array.isArray(t) || Number.isInteger(t) || t === "all")) {
      const r = t;
      t = n, t.channels = r, t.channels === "all" && (t.channels = i.MIDI_CHANNEL_NUMBERS);
    }
    return t.channels == null && (t.channels = i.MIDI_CHANNEL_NUMBERS), o.sanitizeChannels(t.channels).forEach((r) => {
      this.channels[r].sendChannelAftertouch(e, t);
    }), this;
  }
  /**
   * Sends a MIDI **pitch bend** message to the specified channel(s) at the scheduled time.
   *
   * The resulting bend is relative to the pitch bend range that has been defined. The range can be
   * set with [`sendPitchBendRange()`]{@link #sendPitchBendRange}. So, for example, if the pitch
   * bend range has been set to 12 semitones, using a bend value of `-1` will bend the note 1 octave
   * below its nominal value.
   *
   * @param {number|number[]} value The intensity of the bend (between `-1.0` and `1.0`). A value of
   * `0` means no bend. If an invalid value is specified, the nearest valid value will be used
   * instead. If the `rawValue` option is set to `true`, the intensity of the bend can be defined by
   * either using a single integer between `0` and `127` (MSB) or an array of two integers between
   * `0` and `127` representing, respectively, the MSB (most significant byte) and the LSB (least
   * significant byte). The MSB is expressed in semitones with `64` meaning no bend. A value lower
   * than `64` bends downwards while a value higher than `64` bends upwards. The LSB is expressed
   * in cents (1/100 of a semitone). An LSB of `64` also means no bend.
   *
   * @param {object} [options={}]
   *
   * @param {number|number[]} [options.channels=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]]
   * The MIDI channel number (between `1` and `16`) or an array of channel numbers to use. If no
   * channel is specified, all channels will be used.
   *
   * @param {boolean} [options.rawValue=false] A boolean indicating whether the value should be
   * considered as a float between `-1.0` and `1.0` (default) or as raw integer between `0` and
   * 127` (or an array of 2 integers if using both MSB and LSB).
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @returns {Output} Returns the `Output` object so methods can be chained.
   *
   * @since 3.0.0
   */
  sendPitchBend(e, t = {}, n = {}) {
    if (l.validation && (Array.isArray(t) || Number.isInteger(t) || t === "all")) {
      const r = t;
      t = n, t.channels = r, t.channels === "all" && (t.channels = i.MIDI_CHANNEL_NUMBERS);
    }
    return t.channels == null && (t.channels = i.MIDI_CHANNEL_NUMBERS), o.sanitizeChannels(t.channels).forEach((r) => {
      this.channels[r].sendPitchBend(e, t);
    }), this;
  }
  /**
   * Sends a MIDI **program change** message to the specified channel(s) at the scheduled time.
   *
   * @param {number} [program=0] The MIDI patch (program) number (integer between `0` and `127`).
   *
   * @param {Object} [options={}]
   *
   * @param {number|number[]} [options.channels=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]]
   * The MIDI channel number (between `1` and `16`) or an array of channel numbers to use. If no
   * channel is specified, all channels will be used.
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @throws {TypeError} Failed to execute 'send' on 'MIDIOutput': The value at index 1 is greater
   * than 0xFF.
   *
   * @return {Output} Returns the `Output` object so methods can be chained.
   *
   * @since 3.0.0
   */
  sendProgramChange(e = 0, t = {}, n = {}) {
    if (l.validation && (Array.isArray(t) || Number.isInteger(t) || t === "all")) {
      const r = t;
      t = n, t.channels = r, t.channels === "all" && (t.channels = i.MIDI_CHANNEL_NUMBERS);
    }
    return t.channels == null && (t.channels = i.MIDI_CHANNEL_NUMBERS), o.sanitizeChannels(t.channels).forEach((r) => {
      this.channels[r].sendProgramChange(e, t);
    }), this;
  }
  /**
   * Sends a **modulation depth range** message to the specified channel(s) so that they adjust the
   * depth of their modulation wheel's range. The range can be specified with the `semitones`
   * parameter, the `cents` parameter or by specifying both parameters at the same time.
   *
   * @param [semitones=0] {number} The desired adjustment value in semitones (integer between
   * 0 and 127).
   *
   * @param [cents=0] {number} The desired adjustment value in cents (integer between 0 and 127).
   *
   * @param {Object} [options={}]
   *
   * @param {number|number[]} [options.channels=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]]
   * The MIDI channel number (between `1` and `16`) or an array of channel numbers to use. If no
   * channel is specified, all channels will be used.
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @throws {RangeError} The msb value must be between 0 and 127
   * @throws {RangeError} The lsb value must be between 0 and 127
   *
   * @return {Output} Returns the `Output` object so methods can be chained.
   *
   * @since 3.0.0
   */
  sendModulationRange(e, t, n = {}) {
    return n.channels == null && (n.channels = i.MIDI_CHANNEL_NUMBERS), o.sanitizeChannels(n.channels).forEach((r) => {
      this.channels[r].sendModulationRange(e, t, n);
    }), this;
  }
  /**
   * @private
   * @deprecated since version 3.0
   */
  setModulationRange(e = 0, t = 0, n = "all", r = {}) {
    return l.validation && (console.warn(
      "The setModulationRange() method is deprecated. Use sendModulationRange() instead."
    ), r.channels = n, r.channels === "all" && (r.channels = i.MIDI_CHANNEL_NUMBERS)), this.sendModulationRange(e, t, r);
  }
  /**
   * Sends a master tuning message to the specified channel(s). The value is decimal and must be
   * larger than `-65` semitones and smaller than `64` semitones.
   *
   * Because of the way the MIDI specification works, the decimal portion of the value will be
   * encoded with a resolution of 14bit. The integer portion must be between -64 and 63
   * inclusively. This function actually generates two MIDI messages: a **Master Coarse Tuning** and
   * a **Master Fine Tuning** RPN messages.
   *
   * @param [value=0.0] {number} The desired decimal adjustment value in semitones (-65 < x < 64)
   *
   * @param {Object} [options={}]
   *
   * @param {number|number[]} [options.channels=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]]
   * The MIDI channel number (between `1` and `16`) or an array of channel numbers to use. If no
   * channel is specified, all channels will be used.
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @throws {RangeError} The value must be a decimal number between larger than -65 and smaller
   * than 64.
   *
   * @return {Output} Returns the `Output` object so methods can be chained.
   *
   * @since 3.0.0
   */
  sendMasterTuning(e, t = {}) {
    return t.channels == null && (t.channels = i.MIDI_CHANNEL_NUMBERS), o.sanitizeChannels(t.channels).forEach((n) => {
      this.channels[n].sendMasterTuning(e, t);
    }), this;
  }
  /**
   * @private
   * @deprecated since version 3.0
   */
  setMasterTuning(e, t = {}, n = {}) {
    return l.validation && (console.warn(
      "The setMasterTuning() method is deprecated. Use sendMasterTuning() instead."
    ), n.channels = t, n.channels === "all" && (n.channels = i.MIDI_CHANNEL_NUMBERS)), this.sendMasterTuning(e, n);
  }
  /**
   * Sets the MIDI tuning program to use. Note that the **Tuning Program** parameter is part of the
   * *MIDI Tuning Standard*, which is not widely implemented.
   *
   * @param value {number} The desired tuning program (integer between `0` and `127`).
   *
   * @param {Object} [options={}]
   *
   * @param {number|number[]} [options.channels=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]]
   * The MIDI channel number (between `1` and `16`) or an array of channel numbers to use. If no
   * channel is specified, all channels will be used.
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @throws {RangeError} The program value must be between 0 and 127.
   *
   * @return {Output} Returns the `Output` object so methods can be chained.
   *
   * @since 3.0.0
   */
  sendTuningProgram(e, t = {}) {
    return t.channels == null && (t.channels = i.MIDI_CHANNEL_NUMBERS), o.sanitizeChannels(t.channels).forEach((n) => {
      this.channels[n].sendTuningProgram(e, t);
    }), this;
  }
  /**
   * @private
   * @deprecated since version 3.0
   */
  setTuningProgram(e, t = "all", n = {}) {
    return l.validation && (console.warn(
      "The setTuningProgram() method is deprecated. Use sendTuningProgram() instead."
    ), n.channels = t, n.channels === "all" && (n.channels = i.MIDI_CHANNEL_NUMBERS)), this.sendTuningProgram(e, n);
  }
  /**
   * Sets the MIDI tuning bank to use. Note that the **Tuning Bank** parameter is part of the
   * *MIDI Tuning Standard*, which is not widely implemented.
   *
   * @param {number} [value=0] The desired tuning bank (integer between `0` and `127`).
   *
   * @param {Object} [options={}]
   *
   * @param {number|number[]} [options.channels=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]]
   * The MIDI channel number (between `1` and `16`) or an array of channel numbers to use. If no
   * channel is specified, all channels will be used.
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @throws {RangeError} The bank value must be between 0 and 127.
   *
   * @return {Output} Returns the `Output` object so methods can be chained.
   *
   * @since 3.0.0
   */
  sendTuningBank(e = 0, t = {}) {
    return t.channels == null && (t.channels = i.MIDI_CHANNEL_NUMBERS), o.sanitizeChannels(t.channels).forEach((n) => {
      this.channels[n].sendTuningBank(e, t);
    }), this;
  }
  /**
   * @private
   * @deprecated since version 3.0
   */
  setTuningBank(e, t = "all", n = {}) {
    return l.validation && (console.warn(
      "The setTuningBank() method is deprecated. Use sendTuningBank() instead."
    ), n.channels = t, n.channels === "all" && (n.channels = i.MIDI_CHANNEL_NUMBERS)), this.sendTuningBank(e, n);
  }
  /**
   * Sends a MIDI **channel mode** message to the specified channel(s). The channel mode message to
   * send can be specified numerically or by using one of the following common names:
   *
   * |  Type                |Number| Shortcut Method                                               |
   * | ---------------------|------|-------------------------------------------------------------- |
   * | `allsoundoff`        | 120  | [`sendAllSoundOff()`]{@link #sendAllSoundOff}                 |
   * | `resetallcontrollers`| 121  | [`sendResetAllControllers()`]{@link #sendResetAllControllers} |
   * | `localcontrol`       | 122  | [`sendLocalControl()`]{@link #sendLocalControl}               |
   * | `allnotesoff`        | 123  | [`sendAllNotesOff()`]{@link #sendAllNotesOff}                 |
   * | `omnimodeoff`        | 124  | [`sendOmniMode(false)`]{@link #sendOmniMode}                  |
   * | `omnimodeon`         | 125  | [`sendOmniMode(true)`]{@link #sendOmniMode}                   |
   * | `monomodeon`         | 126  | [`sendPolyphonicMode("mono")`]{@link #sendPolyphonicMode}     |
   * | `polymodeon`         | 127  | [`sendPolyphonicMode("poly")`]{@link #sendPolyphonicMode}     |
   *
   * Note: as you can see above, to make it easier, all channel mode messages also have a matching
   * helper method.
   *
   * It should also be noted that, per the MIDI specification, only `localcontrol` and `monomodeon`
   * may require a value that's not zero. For that reason, the `value` parameter is optional and
   * defaults to 0.
   *
   * @param {number|string} command The numerical identifier of the channel mode message (integer
   * between 120-127) or its name as a string.
   *
   * @param {number} [value=0] The value to send (integer between 0-127).
   *
   * @param {Object} [options={}]
   *
   * @param {number|number[]} [options.channels=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]]
   * The MIDI channel number (between `1` and `16`) or an array of channel numbers to use. If no
   * channel is specified, all channels will be used.
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @throws {TypeError} Invalid channel mode message name.
   * @throws {RangeError} Channel mode controller numbers must be between 120 and 127.
   * @throws {RangeError} Value must be an integer between 0 and 127.
   *
   * @return {Output} Returns the `Output` object so methods can be chained.
   *
   */
  sendChannelMode(e, t = 0, n = {}, r = {}) {
    if (l.validation && (Array.isArray(n) || Number.isInteger(n) || n === "all")) {
      const s = n;
      n = r, n.channels = s, n.channels === "all" && (n.channels = i.MIDI_CHANNEL_NUMBERS);
    }
    return n.channels == null && (n.channels = i.MIDI_CHANNEL_NUMBERS), o.sanitizeChannels(n.channels).forEach((s) => {
      this.channels[s].sendChannelMode(e, t, n);
    }), this;
  }
  /**
   * Sends an **all sound off** channel mode message. This will silence all sounds playing on that
   * channel but will not prevent new sounds from being triggered.
   *
   * @param {Object} [options={}]
   *
   * @param {number|number[]} [options.channels=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]]
   * The MIDI channel number (between `1` and `16`) or an array of channel numbers to use. If no
   * channel is specified, all channels will be used.
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @returns {Output}
   *
   * @since 3.0.0
   */
  sendAllSoundOff(e = {}) {
    return e.channels == null && (e.channels = i.MIDI_CHANNEL_NUMBERS), o.sanitizeChannels(e.channels).forEach((t) => {
      this.channels[t].sendAllSoundOff(e);
    }), this;
  }
  /**
   * Sends an **all notes off** channel mode message. This will make all currently playing notes
   * fade out just as if their key had been released. This is different from the
   * [`sendAllSoundOff()`]{@link #sendAllSoundOff} method which mutes all sounds immediately.
   *
   * @param {Object} [options={}]
   *
   * @param {number|number[]} [options.channels=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]]
   * The MIDI channel number (between `1` and `16`) or an array of channel numbers to use. If no
   * channel is specified, all channels will be used.
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @returns {Output}
   *
   * @since 3.0.0
   */
  sendAllNotesOff(e = {}) {
    return e.channels == null && (e.channels = i.MIDI_CHANNEL_NUMBERS), o.sanitizeChannels(e.channels).forEach((t) => {
      this.channels[t].sendAllNotesOff(e);
    }), this;
  }
  /**
   * Sends a **reset all controllers** channel mode message. This resets all controllers, such as
   * the pitch bend, to their default value.
   *
   * @param {Object} [options={}]
   *
   * @param {number|number[]} [options.channels=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]]
   * The MIDI channel number (between `1` and `16`) or an array of channel numbers to use. If no
   * channel is specified, all channels will be used.
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @returns {Output}
   */
  sendResetAllControllers(e = {}, t = {}) {
    if (l.validation && (Array.isArray(e) || Number.isInteger(e) || e === "all")) {
      const n = e;
      e = t, e.channels = n, e.channels === "all" && (e.channels = i.MIDI_CHANNEL_NUMBERS);
    }
    return e.channels == null && (e.channels = i.MIDI_CHANNEL_NUMBERS), o.sanitizeChannels(e.channels).forEach((n) => {
      this.channels[n].sendResetAllControllers(e);
    }), this;
  }
  /**
   * Sets the polyphonic mode. In `poly` mode (usually the default), multiple notes can be played
   * and heard at the same time. In `mono` mode, only one note will be heard at once even if
   * multiple notes are being played.
   *
   * @param mode {string} The mode to use: `mono` or `poly`.
   *
   * @param {Object} [options={}]
   *
   * @param {number|number[]} [options.channels=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]]
   * The MIDI channel number (between `1` and `16`) or an array of channel numbers to use. If no
   * channel is specified, all channels will be used.
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @return {Output} Returns the `Output` object so methods can be chained.
   *
   * @since 3.0.0
   */
  sendPolyphonicMode(e, t = {}, n = {}) {
    if (l.validation && (Array.isArray(t) || Number.isInteger(t) || t === "all")) {
      const r = t;
      t = n, t.channels = r, t.channels === "all" && (t.channels = i.MIDI_CHANNEL_NUMBERS);
    }
    return t.channels == null && (t.channels = i.MIDI_CHANNEL_NUMBERS), o.sanitizeChannels(t.channels).forEach((r) => {
      this.channels[r].sendPolyphonicMode(e, t);
    }), this;
  }
  /**
   * Turns local control on or off. Local control is usually enabled by default. If you disable it,
   * the instrument will no longer trigger its own sounds. It will only send the MIDI messages to
   * its out port.
   *
   * @param [state=false] {boolean} Whether to activate local control (`true`) or disable it
   * (`false`).
   *
   * @param {Object} [options={}]
   *
   * @param {number|number[]} [options.channels=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]]
   * The MIDI channel number (between `1` and `16`) or an array of channel numbers to use. If no
   * channel is specified, all channels will be used.
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @return {Output} Returns the `Output` object so methods can be chained.
   *
   * @since 3.0.0
   */
  sendLocalControl(e, t = {}, n = {}) {
    if (l.validation && (Array.isArray(t) || Number.isInteger(t) || t === "all")) {
      const r = t;
      t = n, t.channels = r, t.channels === "all" && (t.channels = i.MIDI_CHANNEL_NUMBERS);
    }
    return t.channels == null && (t.channels = i.MIDI_CHANNEL_NUMBERS), o.sanitizeChannels(t.channels).forEach((r) => {
      this.channels[r].sendLocalControl(e, t);
    }), this;
  }
  /**
   * Sets OMNI mode to **on** or **off** for the specified channel(s). MIDI's OMNI mode causes the
   * instrument to respond to messages from all channels.
   *
   * It should be noted that support for OMNI mode is not as common as it used to be.
   *
   * @param [state] {boolean} Whether to activate OMNI mode (`true`) or not (`false`).
   *
   * @param {Object} [options={}]
   *
   * @param {number|number[]} [options.channels=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]]
   * The MIDI channel number (between `1` and `16`) or an array of channel numbers to use. If no
   * channel is specified, all channels will be used.
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @throws {TypeError} Invalid channel mode message name.
   * @throws {RangeError} Channel mode controller numbers must be between 120 and 127.
   * @throws {RangeError} Value must be an integer between 0 and 127.
   *
   * @return {Output} Returns the `Output` object so methods can be chained.
   *
   * @since 3.0.0
   */
  sendOmniMode(e, t = {}, n = {}) {
    if (l.validation && (Array.isArray(t) || Number.isInteger(t) || t === "all")) {
      const r = t;
      t = n, t.channels = r, t.channels === "all" && (t.channels = i.MIDI_CHANNEL_NUMBERS);
    }
    return t.channels == null && (t.channels = i.MIDI_CHANNEL_NUMBERS), o.sanitizeChannels(t.channels).forEach((r) => {
      this.channels[r].sendOmniMode(e, t);
    }), this;
  }
  /**
   * Sets a non-registered parameter to the specified value. The NRPN is selected by passing a
   * two-position array specifying the values of the two control bytes. The value is specified by
   * passing a single integer (most cases) or an array of two integers.
   *
   * NRPNs are not standardized in any way. Each manufacturer is free to implement them any way
   * they see fit. For example, according to the Roland GS specification, you can control the
   * **vibrato rate** using NRPN (`1`, `8`). Therefore, to set the **vibrato rate** value to `123`
   * you would use:
   *
   * ```js
   * WebMidi.outputs[0].sendNrpnValue([1, 8], 123);
   * ```
   *
   * You probably want to should select a channel so the message is not sent to all channels. For
   * instance, to send to channel `1` of the first output port, you would use:
   *
   * ```js
   * WebMidi.outputs[0].sendNrpnValue([1, 8], 123, 1);
   * ```
   *
   * In some rarer cases, you need to send two values with your NRPN messages. In such cases, you
   * would use a 2-position array. For example, for its **ClockBPM** parameter (`2`, `63`), Novation
   * uses a 14-bit value that combines an MSB and an LSB (7-bit values). So, for example, if the
   * value to send was `10`, you could use:
   *
   * ```js
   * WebMidi.outputs[0].sendNrpnValue([2, 63], [0, 10], 1);
   * ```
   *
   * For further implementation details, refer to the manufacturer's documentation.
   *
   * @param parameter {number[]} A two-position array specifying the two control bytes (`0x63`,
   * `0x62`) that identify the non-registered parameter.
   *
   * @param [data=[]] {number|number[]} An integer or an array of integers with a length of 1 or 2
   * specifying the desired data.
   *
   * @param {Object} [options={}]
   *
   * @param {number|number[]} [options.channels=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]]
   * The MIDI channel number (between `1` and `16`) or an array of channel numbers to use. If no
   * channel is specified, all channels will be used.
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @throws {RangeError} The control value must be between 0 and 127.
   * @throws {RangeError} The msb value must be between 0 and 127
   *
   * @returns {Output} Returns the `Output` object so methods can be chained.
   */
  sendNrpnValue(e, t, n = {}) {
    return n.channels == null && (n.channels = i.MIDI_CHANNEL_NUMBERS), o.sanitizeChannels(n.channels).forEach((r) => {
      this.channels[r].sendNrpnValue(e, t, n);
    }), this;
  }
  /**
   * @private
   * @deprecated since version 3.0
   */
  setNonRegisteredParameter(e, t = [], n = "all", r = {}) {
    return l.validation && (console.warn(
      "The setNonRegisteredParameter() method is deprecated. Use sendNrpnValue() instead."
    ), r.channels = n, r.channels === "all" && (r.channels = i.MIDI_CHANNEL_NUMBERS)), this.sendNrpnValue(e, t, r);
  }
  /**
   * Increments the specified MIDI registered parameter by 1. Here is the full list of parameter
   * names that can be used with this method:
   *
   *  * Pitchbend Range (0x00, 0x00): `"pitchbendrange"`
   *  * Channel Fine Tuning (0x00, 0x01): `"channelfinetuning"`
   *  * Channel Coarse Tuning (0x00, 0x02): `"channelcoarsetuning"`
   *  * Tuning Program (0x00, 0x03): `"tuningprogram"`
   *  * Tuning Bank (0x00, 0x04): `"tuningbank"`
   *  * Modulation Range (0x00, 0x05): `"modulationrange"`
   *  * Azimuth Angle (0x3D, 0x00): `"azimuthangle"`
   *  * Elevation Angle (0x3D, 0x01): `"elevationangle"`
   *  * Gain (0x3D, 0x02): `"gain"`
   *  * Distance Ratio (0x3D, 0x03): `"distanceratio"`
   *  * Maximum Distance (0x3D, 0x04): `"maximumdistance"`
   *  * Maximum Distance Gain (0x3D, 0x05): `"maximumdistancegain"`
   *  * Reference Distance Ratio (0x3D, 0x06): `"referencedistanceratio"`
   *  * Pan Spread Angle (0x3D, 0x07): `"panspreadangle"`
   *  * Roll Angle (0x3D, 0x08): `"rollangle"`
   *
   * @param parameter {String|number[]} A string identifying the parameter's name (see above) or a
   * two-position array specifying the two control bytes (0x65, 0x64) that identify the registered
   * parameter.
   *
   * @param {Object} [options={}]
   *
   * @param {number|number[]} [options.channels=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]]
   * The MIDI channel number (between `1` and `16`) or an array of channel numbers to use. If no
   * channel is specified, all channels will be used.
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @returns {Output} Returns the `Output` object so methods can be chained.
   */
  sendRpnIncrement(e, t = {}) {
    return t.channels == null && (t.channels = i.MIDI_CHANNEL_NUMBERS), o.sanitizeChannels(t.channels).forEach((n) => {
      this.channels[n].sendRpnIncrement(e, t);
    }), this;
  }
  /**
   * @private
   * @deprecated since version 3.0
   */
  incrementRegisteredParameter(e, t = "all", n = {}) {
    return l.validation && (console.warn(
      "The incrementRegisteredParameter() method is deprecated. Use sendRpnIncrement() instead."
    ), n.channels = t, n.channels === "all" && (n.channels = i.MIDI_CHANNEL_NUMBERS)), this.sendRpnIncrement(e, n);
  }
  /**
   * Decrements the specified MIDI registered parameter by 1. Here is the full list of parameter
   * names that can be used with this method:
   *
   *  * Pitchbend Range (0x00, 0x00): `"pitchbendrange"`
   *  * Channel Fine Tuning (0x00, 0x01): `"channelfinetuning"`
   *  * Channel Coarse Tuning (0x00, 0x02): `"channelcoarsetuning"`
   *  * Tuning Program (0x00, 0x03): `"tuningprogram"`
   *  * Tuning Bank (0x00, 0x04): `"tuningbank"`
   *  * Modulation Range (0x00, 0x05): `"modulationrange"`
   *  * Azimuth Angle (0x3D, 0x00): `"azimuthangle"`
   *  * Elevation Angle (0x3D, 0x01): `"elevationangle"`
   *  * Gain (0x3D, 0x02): `"gain"`
   *  * Distance Ratio (0x3D, 0x03): `"distanceratio"`
   *  * Maximum Distance (0x3D, 0x04): `"maximumdistance"`
   *  * Maximum Distance Gain (0x3D, 0x05): `"maximumdistancegain"`
   *  * Reference Distance Ratio (0x3D, 0x06): `"referencedistanceratio"`
   *  * Pan Spread Angle (0x3D, 0x07): `"panspreadangle"`
   *  * Roll Angle (0x3D, 0x08): `"rollangle"`
   *
   * @param parameter {String|number[]} A string identifying the parameter's name (see above) or a
   * two-position array specifying the two control bytes (0x65, 0x64) that identify the registered
   * parameter.
   *
   * @param {Object} [options={}]
   *
   * @param {number|number[]} [options.channels=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]]
   * The MIDI channel number (between `1` and `16`) or an array of channel numbers to use. If no
   * channel is specified, all channels will be used.
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @throws TypeError The specified parameter is not available.
   *
   * @returns {Output} Returns the `Output` object so methods can be chained.
   */
  sendRpnDecrement(e, t = {}) {
    return t.channels == null && (t.channels = i.MIDI_CHANNEL_NUMBERS), o.sanitizeChannels(t.channels).forEach((n) => {
      this.channels[n].sendRpnDecrement(e, t);
    }), this;
  }
  /**
   * @private
   * @deprecated since version 3.0
   */
  decrementRegisteredParameter(e, t = "all", n = {}) {
    return l.validation && (console.warn(
      "The decrementRegisteredParameter() method is deprecated. Use sendRpnDecrement() instead."
    ), n.channels = t, n.channels === "all" && (n.channels = i.MIDI_CHANNEL_NUMBERS)), this.sendRpnDecrement(e, n);
  }
  /**
   * Sends a **note off** message for the specified MIDI note number on the specified channel(s).
   * The first parameter is the note to stop. It can be a single value or an array of the following
   * valid values:
   *
   *  - A MIDI note number (integer between `0` and `127`)
   *  - A note identifier (e.g. `"C3"`, `"G#4"`, `"F-1"`, `"Db7"`)
   *  - A [`Note`](Note) object
   *
   * The execution of the **note off** command can be delayed by using the `time` property of the
   * `options` parameter.
   *
   * @param note {number|Note|string|number[]|Note[]|string[]} The note(s) to stop. The notes can be
   * specified by using a MIDI note number (`0` - `127`), a note identifier (e.g. `C3`, `G#4`,
   * `F-1`, `Db7`) or an array of the previous types. When using a note identifier, octave range
   * must be between `-1` and `9`. The lowest note is `C-1` (MIDI note number `0`) and the highest
   * note is `G9` (MIDI note number `127`).
   *
   * @param {Object} [options={}]
   *
   * @param {number|number[]} [options.channels=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]]
   * The MIDI channel number (between `1` and `16`) or an array of channel numbers to use. If no
   * channel is specified, all channels will be used.
   *
   * @param {number} [options.release=0.5] The velocity at which to release the note
   * (between `0` and `1`).  If the `rawRelease` option is also defined, `rawRelease` will have
   * priority. An invalid velocity value will silently trigger the default of `0.5`.
   *
   * @param {number} [options.rawRelease=64] The velocity at which to release the note
   * (between `0` and `127`). If the `release` option is also defined, `rawRelease` will have
   * priority. An invalid velocity value will silently trigger the default of `64`.
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @returns {Output} Returns the `Output` object so methods can be chained.
   */
  sendNoteOff(e, t = {}, n = {}) {
    if (l.validation && (Array.isArray(t) || Number.isInteger(t) || t === "all")) {
      const r = t;
      t = n, t.channels = r, t.channels === "all" && (t.channels = i.MIDI_CHANNEL_NUMBERS);
    }
    return t.channels == null && (t.channels = i.MIDI_CHANNEL_NUMBERS), o.sanitizeChannels(t.channels).forEach((r) => {
      this.channels[r].sendNoteOff(e, t);
    }), this;
  }
  /**
   * Sends a **note off** message for the specified MIDI note number on the specified channel(s).
   * The first parameter is the note to stop. It can be a single value or an array of the following
   * valid values:
   *
   *  - A MIDI note number (integer between `0` and `127`)
   *  - A note identifier (e.g. `"C3"`, `"G#4"`, `"F-1"`, `"Db7"`)
   *  - A [`Note`](Note) object
   *
   * The execution of the **note off** command can be delayed by using the `time` property of the
   * `options` parameter.
   *
   * @param note {number|Note|string|number[]|Note[]|string[]} The note(s) to stop. The notes can be
   * specified by using a MIDI note number (`0` - `127`), a note identifier (e.g. `C3`, `G#4`, `F-1`,
   * `Db7`) or an array of the previous types. When using a note identifier, octave range must be
   * between `-1` and `9`. The lowest note is `C-1` (MIDI note number `0`) and the highest note is
   * `G9` (MIDI note number `127`).
   *
   * @param {Object} [options={}]
   *
   * @param {number|number[]} [options.channels=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]]
   * The MIDI channel number (between `1` and `16`) or an array of channel numbers to use. If no
   * channel is specified, all channels will be used.
   *
   * @param {number} [options.release=0.5] The velocity at which to release the note
   * (between `0` and `1`).  If the `rawRelease` option is also defined, `rawRelease` will have
   * priority. An invalid velocity value will silently trigger the default of `0.5`.
   *
   * @param {number} [options.rawRelease=64] The velocity at which to release the note
   * (between `0` and `127`). If the `release` option is also defined, `rawRelease` will have
   * priority. An invalid velocity value will silently trigger the default of `64`.
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @returns {Output} Returns the `Output` object so methods can be chained.
   */
  stopNote(e, t) {
    return this.sendNoteOff(e, t);
  }
  /**
   * Plays a note or an array of notes on one or more channels of this output. If you intend to play
   * notes on a single channel, you should probably use
   * [`OutputChannel.playNote()`](OutputChannel#playNote) instead.
   *
   * The first parameter is the note to play. It can be a single value or an array of the following
   * valid values:
   *
   *  - A MIDI note number (integer between `0` and `127`)
   *  - A note identifier (e.g. `"C3"`, `"G#4"`, `"F-1"`, `"Db7"`)
   *  - A [`Note`]{@link Note} object
   *
   * The `playNote()` method sends a **note on** MIDI message for all specified notes on all
   * specified channels. If no channel is specified, it will send to all channels. If a `duration`
   * is set in the `options` parameter or in the [`Note`]{@link Note} object's
   * [`duration`]{@link Note#duration} property, it will also schedule a **note off** message to end
   * the note after said duration. If no `duration` is set, the note will simply play until a
   * matching **note off** message is sent with [`stopNote()`]{@link #stopNote}.
   *
   * The execution of the **note on** command can be delayed by using the `time` property of the
   * `options` parameter.
   *
   * When using [`Note`]{@link Note} objects, the durations and velocities defined in the
   * [`Note`]{@link Note} objects have precedence over the ones specified via the method's `options`
   * parameter.
   *
   * **Note**: As per the MIDI standard, a **note on** message with an attack velocity of `0` is
   * functionally equivalent to a **note off** message.
   *
   * @param note {number|string|Note|number[]|string[]|Note[]} The note(s) to play. The notes can be
   * specified by using a MIDI note number (0-127), a note identifier (e.g. C3, G#4, F-1, Db7), a
   * [`Note`]{@link Note} object or an array of the previous types. When using a note identifier,
   * octave range must be between -1 and 9. The lowest note is C-1 (MIDI note number `0`) and the
   * highest note is G9 (MIDI note number `127`).
   *
   * @param {Object} [options={}]
   *
   * @param {number|number[]} [options.channels=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]]
   * The MIDI channel number (between `1` and `16`) or an array of channel numbers to use. If no
   * channel is specified, all channels will be used.
   *
   * @param {number} [options.duration=undefined] The number of milliseconds after which a
   * **note off** message will be scheduled. If left undefined, only a **note on** message is sent.
   *
   * @param {number} [options.attack=0.5] The velocity at which to play the note (between `0` and
   * `1`). If the `rawAttack` option is also defined, it will have priority. An invalid velocity
   * value will silently trigger the default of `0.5`.
   *
   * @param {number} [options.rawAttack=64] The attack velocity at which to play the note (between
   * `0` and `127`). This has priority over the `attack` property. An invalid velocity value will
   * silently trigger the default of 64.
   *
   * @param {number} [options.release=0.5] The velocity at which to release the note (between `0`
   * and `1`). If the `rawRelease` option is also defined, it will have priority. An invalid
   * velocity value will silently trigger the default of `0.5`. This is only used with the
   * **note off** event triggered when `options.duration` is set.
   *
   * @param {number} [options.rawRelease=64] The velocity at which to release the note (between `0`
   * and `127`). This has priority over the `release` property. An invalid velocity value will
   * silently trigger the default of 64. This is only used with the **note off** event triggered
   * when `options.duration` is set.
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @returns {Output} Returns the `Output` object so methods can be chained.
   */
  playNote(e, t = {}, n = {}) {
    if (l.validation && (t.rawVelocity && console.warn("The 'rawVelocity' option is deprecated. Use 'rawAttack' instead."), t.velocity && console.warn("The 'velocity' option is deprecated. Use 'velocity' instead."), Array.isArray(t) || Number.isInteger(t) || t === "all")) {
      const r = t;
      t = n, t.channels = r, t.channels === "all" && (t.channels = i.MIDI_CHANNEL_NUMBERS);
    }
    return t.channels == null && (t.channels = i.MIDI_CHANNEL_NUMBERS), o.sanitizeChannels(t.channels).forEach((r) => {
      this.channels[r].playNote(e, t);
    }), this;
  }
  /**
   * Sends a **note on** message for the specified MIDI note number on the specified channel(s). The
   * first parameter is the number. It can be a single value or an array of the following valid
   * values:
   *
   *  - A MIDI note number (integer between `0` and `127`)
   *  - A note identifier (e.g. `"C3"`, `"G#4"`, `"F-1"`, `"Db7"`)
   *  - A [`Note`](Note) object
   *
   *  The execution of the **note on** command can be delayed by using the `time` property of the
   * `options` parameter.
   *
   * **Note**: As per the MIDI standard, a **note on** message with an attack velocity of `0` is
   * functionally equivalent to a **note off** message.
   *
   * @param note {number|Note|string|number[]|Note[]|string[]} The note(s) to stop. The notes can be
   * specified by using a MIDI note number (`0` - `127`), a note identifier (e.g. `C3`, `G#4`, `F-1`,
   * `Db7`) or an array of the previous types. When using a note identifier, octave range must be
   * between `-1` and `9`. The lowest note is `C-1` (MIDI note number `0`) and the highest note is
   * `G9` (MIDI note number `127`).
   *
   * @param {Object} [options={}]
   *
   * @param {number|number[]} [options.channels=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]]
   * The MIDI channel number (between `1` and `16`) or an array of channel numbers to use. If no
   * channel is specified, all channels will be used.
   *
   * @param {number} [options.attack=0.5] The velocity at which to play the note (between `0` and
   * `1`).  If the `rawAttack` option is also defined, `rawAttack` will have priority. An invalid
   * velocity value will silently trigger the default of `0.5`.
   *
   * @param {number} [options.rawAttack=64] The velocity at which to release the note (between `0`
   * and `127`). If the `attack` option is also defined, `rawAttack` will have priority. An invalid
   * velocity value will silently trigger the default of `64`.
   *
   * @param {number|string} [options.time=(now)] If `time` is a string prefixed with `"+"` and
   * followed by a number, the message will be delayed by that many milliseconds. If the value is a
   * positive number
   * ([`DOMHighResTimeStamp`]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
   * the operation will be scheduled for that time. The current time can be retrieved with
   * [`WebMidi.time`]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the
   * operation will be carried out as soon as possible.
   *
   * @returns {Output} Returns the `Output` object so methods can be chained.
   */
  sendNoteOn(e, t = {}, n = {}) {
    if (l.validation && (Array.isArray(t) || Number.isInteger(t) || t === "all")) {
      const r = t;
      t = n, t.channels = r, t.channels === "all" && (t.channels = i.MIDI_CHANNEL_NUMBERS);
    }
    return t.channels == null && (t.channels = i.MIDI_CHANNEL_NUMBERS), o.sanitizeChannels(t.channels).forEach((r) => {
      this.channels[r].sendNoteOn(e, t);
    }), this;
  }
  /**
   * Name of the MIDI output.
   *
   * @type {string}
   * @readonly
   */
  get name() {
    return this._midiOutput.name;
  }
  /**
   * ID string of the MIDI output. The ID is host-specific. Do not expect the same ID on different
   * platforms. For example, Google Chrome and the Jazz-Plugin report completely different IDs for
   * the same port.
   *
   * @type {string}
   * @readonly
   */
  get id() {
    return this._midiOutput.id;
  }
  /**
   * Output port's connection state: `pending`, `open` or `closed`.
   *
   * @type {string}
   * @readonly
   */
  get connection() {
    return this._midiOutput.connection;
  }
  /**
   * Name of the manufacturer of the device that makes this output port available.
   *
   * @type {string}
   * @readonly
   */
  get manufacturer() {
    return this._midiOutput.manufacturer;
  }
  /**
   * State of the output port: `connected` or `disconnected`.
   *
   * @type {string}
   * @readonly
   */
  get state() {
    return this._midiOutput.state;
  }
  /**
   * Type of the output port (it will always be: `output`).
   *
   * @type {string}
   * @readonly
   */
  get type() {
    return this._midiOutput.type;
  }
  /**
   * An integer to offset the octave of outgoing notes. By default, middle C (MIDI note number 60)
   * is placed on the 4th octave (C4).
   *
   * Note that this value is combined with the global offset value defined in
   * [`WebMidi.octaveOffset`](WebMidi#octaveOffset) (if any).
   *
   * @type {number}
   *
   * @since 3.0
   */
  get octaveOffset() {
    return this._octaveOffset;
  }
  set octaveOffset(e) {
    if (this.validation && (e = parseInt(e), isNaN(e)))
      throw new TypeError("The 'octaveOffset' property must be an integer.");
    this._octaveOffset = e;
  }
}
/**
 * The `Forwarder` class allows the forwarding of MIDI messages to predetermined outputs. When you
 * call its [`forward()`](#forward) method, it will send the specified [`Message`](Message) object
 * to all the outputs listed in its [`destinations`](#destinations) property.
 *
 * If specific channels or message types have been defined in the [`channels`](#channels) or
 * [`types`](#types) properties, only messages matching the channels/types will be forwarded.
 *
 * While it can be manually instantiated, you are more likely to come across a `Forwarder` object as
 * the return value of the [`Input.addForwarder()`](Input#addForwarder) method.
 *
 * @license Apache-2.0
 * @since 3.0.0
 */
class B {
  /**
   * Creates a `Forwarder` object.
   *
   * @param {Output|Output[]} [destinations=\[\]] An [`Output`](Output) object, or an array of such
   * objects, to forward the message to.
   *
   * @param {object} [options={}]
   * @param {string|string[]} [options.types=(all messages)] A MIDI message type or an array of such
   * types (`"noteon"`, `"controlchange"`, etc.), that the specified message must match in order to
   * be forwarded. If this option is not specified, all types of messages will be forwarded. Valid
   * messages are the ones found in either
   * [`SYSTEM_MESSAGES`](Enumerations#SYSTEM_MESSAGES)
   * or [`CHANNEL_MESSAGES`](Enumerations#CHANNEL_MESSAGES).
   * @param {number|number[]} [options.channels=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]]
   * A MIDI channel number or an array of channel numbers that the message must match in order to be
   * forwarded. By default all MIDI channels are included (`1` to `16`).
   */
  constructor(e = [], t = {}) {
    this.destinations = [], this.types = [
      ...Object.keys(i.SYSTEM_MESSAGES),
      ...Object.keys(i.CHANNEL_MESSAGES)
    ], this.channels = i.MIDI_CHANNEL_NUMBERS, this.suspended = !1, Array.isArray(e) || (e = [e]), t.types && !Array.isArray(t.types) && (t.types = [t.types]), t.channels && !Array.isArray(t.channels) && (t.channels = [t.channels]), l.validation && (e.forEach((n) => {
      if (!(n instanceof I))
        throw new TypeError("Destinations must be of type 'Output'.");
    }), t.types !== void 0 && t.types.forEach((n) => {
      if (!i.SYSTEM_MESSAGES.hasOwnProperty(n) && !i.CHANNEL_MESSAGES.hasOwnProperty(n))
        throw new TypeError("Type must be a valid message type.");
    }), t.channels !== void 0 && t.channels.forEach((n) => {
      if (!i.MIDI_CHANNEL_NUMBERS.includes(n))
        throw new TypeError("MIDI channel must be between 1 and 16.");
    })), this.destinations = e, t.types && (this.types = t.types), t.channels && (this.channels = t.channels);
  }
  /**
   * Sends the specified message to the forwarder's destination(s) if it matches the specified
   * type(s) and channel(s).
   *
   * @param {Message} message The [`Message`](Message) object to forward.
   */
  forward(e) {
    this.suspended || this.types.includes(e.type) && (e.channel && !this.channels.includes(e.channel) || this.destinations.forEach((t) => {
      l.validation && !(t instanceof I) || t.send(e);
    }));
  }
}
/**
 * The `InputChannel` class represents a single MIDI input channel (1-16) from a single input
 * device. This object is derived from the host's MIDI subsystem and should not be instantiated
 * directly.
 *
 * All 16 `InputChannel` objects can be found inside the input's [`channels`](Input#channels)
 * property.
 *
 * @fires InputChannel#midimessage
 * @fires InputChannel#unknownmessage
 *
 * @fires InputChannel#noteoff
 * @fires InputChannel#noteon
 * @fires InputChannel#keyaftertouch
 * @fires InputChannel#programchange
 * @fires InputChannel#channelaftertouch
 * @fires InputChannel#pitchbend
 *
 * @fires InputChannel#allnotesoff
 * @fires InputChannel#allsoundoff
 * @fires InputChannel#localcontrol
 * @fires InputChannel#monomode
 * @fires InputChannel#omnimode
 * @fires InputChannel#resetallcontrollers
 *
 * @fires InputChannel#event:nrpn
 * @fires InputChannel#event:nrpn-dataentrycoarse
 * @fires InputChannel#event:nrpn-dataentryfine
 * @fires InputChannel#event:nrpn-dataincrement
 * @fires InputChannel#event:nrpn-datadecrement
 * @fires InputChannel#event:rpn
 * @fires InputChannel#event:rpn-dataentrycoarse
 * @fires InputChannel#event:rpn-dataentryfine
 * @fires InputChannel#event:rpn-dataincrement
 * @fires InputChannel#event:rpn-datadecrement
 *
 * @fires InputChannel#controlchange
 * @fires InputChannel#event:controlchange-controllerxxx
 * @fires InputChannel#event:controlchange-bankselectcoarse
 * @fires InputChannel#event:controlchange-modulationwheelcoarse
 * @fires InputChannel#event:controlchange-breathcontrollercoarse
 * @fires InputChannel#event:controlchange-footcontrollercoarse
 * @fires InputChannel#event:controlchange-portamentotimecoarse
 * @fires InputChannel#event:controlchange-dataentrycoarse
 * @fires InputChannel#event:controlchange-volumecoarse
 * @fires InputChannel#event:controlchange-balancecoarse
 * @fires InputChannel#event:controlchange-pancoarse
 * @fires InputChannel#event:controlchange-expressioncoarse
 * @fires InputChannel#event:controlchange-effectcontrol1coarse
 * @fires InputChannel#event:controlchange-effectcontrol2coarse
 * @fires InputChannel#event:controlchange-generalpurposecontroller1
 * @fires InputChannel#event:controlchange-generalpurposecontroller2
 * @fires InputChannel#event:controlchange-generalpurposecontroller3
 * @fires InputChannel#event:controlchange-generalpurposecontroller4
 * @fires InputChannel#event:controlchange-bankselectfine
 * @fires InputChannel#event:controlchange-modulationwheelfine
 * @fires InputChannel#event:controlchange-breathcontrollerfine
 * @fires InputChannel#event:controlchange-footcontrollerfine
 * @fires InputChannel#event:controlchange-portamentotimefine
 * @fires InputChannel#event:controlchange-dataentryfine
 * @fires InputChannel#event:controlchange-channelvolumefine
 * @fires InputChannel#event:controlchange-balancefine
 * @fires InputChannel#event:controlchange-panfine
 * @fires InputChannel#event:controlchange-expressionfine
 * @fires InputChannel#event:controlchange-effectcontrol1fine
 * @fires InputChannel#event:controlchange-effectcontrol2fine
 * @fires InputChannel#event:controlchange-damperpedal
 * @fires InputChannel#event:controlchange-portamento
 * @fires InputChannel#event:controlchange-sostenuto
 * @fires InputChannel#event:controlchange-softpedal
 * @fires InputChannel#event:controlchange-legatopedal
 * @fires InputChannel#event:controlchange-hold2
 * @fires InputChannel#event:controlchange-soundvariation
 * @fires InputChannel#event:controlchange-resonance
 * @fires InputChannel#event:controlchange-releasetime
 * @fires InputChannel#event:controlchange-attacktime
 * @fires InputChannel#event:controlchange-brightness
 * @fires InputChannel#event:controlchange-decaytime
 * @fires InputChannel#event:controlchange-vibratorate
 * @fires InputChannel#event:controlchange-vibratodepth
 * @fires InputChannel#event:controlchange-vibratodelay
 * @fires InputChannel#event:controlchange-generalpurposecontroller5
 * @fires InputChannel#event:controlchange-generalpurposecontroller6
 * @fires InputChannel#event:controlchange-generalpurposecontroller7
 * @fires InputChannel#event:controlchange-generalpurposecontroller8
 * @fires InputChannel#event:controlchange-portamentocontrol
 * @fires InputChannel#event:controlchange-highresolutionvelocityprefix
 * @fires InputChannel#event:controlchange-effect1depth
 * @fires InputChannel#event:controlchange-effect2depth
 * @fires InputChannel#event:controlchange-effect3depth
 * @fires InputChannel#event:controlchange-effect4depth
 * @fires InputChannel#event:controlchange-effect5depth
 * @fires InputChannel#event:controlchange-dataincrement
 * @fires InputChannel#event:controlchange-datadecrement
 * @fires InputChannel#event:controlchange-nonregisteredparameterfine
 * @fires InputChannel#event:controlchange-nonregisteredparametercoarse
 * @fires InputChannel#event:controlchange-registeredparameterfine
 * @fires InputChannel#event:controlchange-registeredparametercoarse
 * @fires InputChannel#event:controlchange-allsoundoff
 * @fires InputChannel#event:controlchange-resetallcontrollers
 * @fires InputChannel#event:controlchange-localcontrol
 * @fires InputChannel#event:controlchange-allnotesoff
 * @fires InputChannel#event:controlchange-omnimodeoff
 * @fires InputChannel#event:controlchange-omnimodeon
 * @fires InputChannel#event:controlchange-monomodeon
 * @fires InputChannel#event:controlchange-polymodeon
 * @fires InputChannel#event:
 *
 * @extends EventEmitter
 * @license Apache-2.0
 * @since 3.0.0
 */
class X extends E {
  /**
   * Creates an `InputChannel` object.
   *
   * @param {Input} input The [`Input`](Input) object this channel belongs to.
   * @param {number} number The channel's MIDI number (1-16).
   */
  constructor(e, t) {
    super(), this._input = e, this._number = t, this._octaveOffset = 0, this._nrpnBuffer = [], this._rpnBuffer = [], this.parameterNumberEventsEnabled = !0, this.notesState = new Array(128).fill(!1);
  }
  /**
   * Destroys the `InputChannel` by removing all listeners and severing the link with the MIDI
   * subsystem's input.
   */
  destroy() {
    this._input = null, this._number = null, this._octaveOffset = 0, this._nrpnBuffer = [], this.notesState = new Array(128).fill(!1), this.parameterNumberEventsEnabled = !1, this.removeListener();
  }
  /**
   * @param e MIDIMessageEvent
   * @private
   */
  _processMidiMessageEvent(e) {
    const t = Object.assign({}, e);
    t.port = this.input, t.target = this, t.type = "midimessage", this.emit(t.type, t), this._parseEventForStandardMessages(t);
  }
  /**
   * Parses incoming channel events and emit standard MIDI message events (noteon, noteoff, etc.)
   * @param e Event
   * @private
   */
  _parseEventForStandardMessages(e) {
    const t = Object.assign({}, e);
    t.type = t.message.type || "unknownmessage";
    const n = e.message.dataBytes[0], r = e.message.dataBytes[1];
    if (t.type === "noteoff" || t.type === "noteon" && r === 0)
      this.notesState[n] = !1, t.type = "noteoff", t.note = new b(
        o.offsetNumber(
          n,
          this.octaveOffset + this.input.octaveOffset + l.octaveOffset
        ),
        {
          rawAttack: 0,
          rawRelease: r
        }
      ), t.value = o.from7bitToFloat(r), t.rawValue = r, t.velocity = t.note.release, t.rawVelocity = t.note.rawRelease;
    else if (t.type === "noteon")
      this.notesState[n] = !0, t.note = new b(
        o.offsetNumber(
          n,
          this.octaveOffset + this.input.octaveOffset + l.octaveOffset
        ),
        { rawAttack: r }
      ), t.value = o.from7bitToFloat(r), t.rawValue = r, t.velocity = t.note.attack, t.rawVelocity = t.note.rawAttack;
    else if (t.type === "keyaftertouch")
      t.note = new b(
        o.offsetNumber(
          n,
          this.octaveOffset + this.input.octaveOffset + l.octaveOffset
        )
      ), t.value = o.from7bitToFloat(r), t.rawValue = r, t.identifier = t.note.identifier, t.key = t.note.number, t.rawKey = n;
    else if (t.type === "controlchange") {
      t.controller = {
        number: n,
        name: i.CONTROL_CHANGE_MESSAGES[n].name,
        description: i.CONTROL_CHANGE_MESSAGES[n].description,
        position: i.CONTROL_CHANGE_MESSAGES[n].position
      }, t.subtype = t.controller.name || "controller" + n, t.value = o.from7bitToFloat(r), t.rawValue = r;
      const s = Object.assign({}, t);
      s.type = `${t.type}-controller${n}`, delete s.subtype, this.emit(s.type, s);
      const d = Object.assign({}, t);
      d.type = `${t.type}-` + i.CONTROL_CHANGE_MESSAGES[n].name, delete d.subtype, d.type.indexOf("controller") !== 0 && this.emit(d.type, d), t.message.dataBytes[0] >= 120 && this._parseChannelModeMessage(t), this.parameterNumberEventsEnabled && this._isRpnOrNrpnController(t.message.dataBytes[0]) && this._parseEventForParameterNumber(t);
    } else t.type === "programchange" ? (t.value = n, t.rawValue = t.value) : t.type === "channelaftertouch" ? (t.value = o.from7bitToFloat(n), t.rawValue = n) : t.type === "pitchbend" ? (t.value = ((r << 7) + n - 8192) / 8192, t.rawValue = (r << 7) + n) : t.type = "unknownmessage";
    this.emit(t.type, t);
  }
  /**
   * @param e {Object}
   * @private
   */
  _parseChannelModeMessage(e) {
    const t = Object.assign({}, e);
    t.type = t.controller.name, t.type === "localcontrol" && (t.value = t.message.data[2] === 127, t.rawValue = t.message.data[2]), t.type === "omnimodeon" ? (t.type = "omnimode", t.value = !0, t.rawValue = t.message.data[2]) : t.type === "omnimodeoff" && (t.type = "omnimode", t.value = !1, t.rawValue = t.message.data[2]), t.type === "monomodeon" ? (t.type = "monomode", t.value = !0, t.rawValue = t.message.data[2]) : t.type === "polymodeon" && (t.type = "monomode", t.value = !1, t.rawValue = t.message.data[2]), this.emit(t.type, t);
  }
  /**
   * Parses inbound events to identify RPN/NRPN sequences.
   * @param e Event
   * @private
   */
  _parseEventForParameterNumber(e) {
    const t = e.message.dataBytes[0], n = e.message.dataBytes[1];
    t === 99 || t === 101 ? (this._nrpnBuffer = [], this._rpnBuffer = [], t === 99 ? this._nrpnBuffer = [e.message] : n !== 127 && (this._rpnBuffer = [e.message])) : t === 98 || t === 100 ? t === 98 ? (this._rpnBuffer = [], this._nrpnBuffer.length === 1 ? this._nrpnBuffer.push(e.message) : this._nrpnBuffer = []) : (this._nrpnBuffer = [], this._rpnBuffer.length === 1 && n !== 127 ? this._rpnBuffer.push(e.message) : this._rpnBuffer = []) : (t === 6 || t === 38 || t === 96 || t === 97) && (this._rpnBuffer.length === 2 ? this._dispatchParameterNumberEvent(
      "rpn",
      this._rpnBuffer[0].dataBytes[1],
      this._rpnBuffer[1].dataBytes[1],
      e
    ) : this._nrpnBuffer.length === 2 ? this._dispatchParameterNumberEvent(
      "nrpn",
      this._nrpnBuffer[0].dataBytes[1],
      this._nrpnBuffer[1].dataBytes[1],
      e
    ) : (this._nrpnBuffer = [], this._rpnBuffer = []));
  }
  /**
   * Indicates whether the specified controller can be part of an RPN or NRPN sequence
   * @param controller
   * @returns {boolean}
   * @private
   */
  _isRpnOrNrpnController(e) {
    return e === 6 || e === 38 || e === 96 || e === 97 || e === 98 || e === 99 || e === 100 || e === 101;
  }
  /**
   * @private
   */
  _dispatchParameterNumberEvent(e, t, n, r) {
    e = e === "nrpn" ? "nrpn" : "rpn";
    const s = {
      target: r.target,
      timestamp: r.timestamp,
      message: r.message,
      parameterMsb: t,
      parameterLsb: n,
      value: o.from7bitToFloat(r.message.dataBytes[1]),
      rawValue: r.message.dataBytes[1]
    };
    e === "rpn" ? s.parameter = Object.keys(i.REGISTERED_PARAMETERS).find((_) => i.REGISTERED_PARAMETERS[_][0] === t && i.REGISTERED_PARAMETERS[_][1] === n) : s.parameter = (t << 7) + n;
    const d = i.CONTROL_CHANGE_MESSAGES[r.message.dataBytes[0]].name;
    s.type = `${e}-${d}`, this.emit(s.type, s);
    const h = Object.assign({}, s);
    h.type === "nrpn-dataincrement" ? h.type = "nrpn-databuttonincrement" : h.type === "nrpn-datadecrement" ? h.type = "nrpn-databuttondecrement" : h.type === "rpn-dataincrement" ? h.type = "rpn-databuttonincrement" : h.type === "rpn-datadecrement" && (h.type = "rpn-databuttondecrement"), this.emit(h.type, h), s.type = e, s.subtype = d, this.emit(s.type, s);
  }
  /**
   * @deprecated since version 3.
   * @private
   */
  getChannelModeByNumber(e) {
    return l.validation && (console.warn(
      "The 'getChannelModeByNumber()' method has been moved to the 'Utilities' class."
    ), e = Math.floor(e)), o.getChannelModeByNumber(e);
  }
  /**
   * @deprecated since version 3.
   * @private
   */
  getCcNameByNumber(e) {
    if (l.validation && (console.warn(
      "The 'getCcNameByNumber()' method has been moved to the 'Utilities' class."
    ), e = parseInt(e), !(e >= 0 && e <= 127)))
      throw new RangeError("Invalid control change number.");
    return o.getCcNameByNumber(e);
  }
  /**
   * Returns the playing status of the specified note (`true` if the note is currently playing,
   * `false` if it is not). The `note` parameter can be an unsigned integer (0-127), a note
   * identifier (`"C4"`, `"G#5"`, etc.) or a [`Note`]{@link Note} object.
   *
   * IF the note is specified using an integer (0-127), no octave offset will be applied.
   *
   * @param {number|string|Note} note The note to get the state for. The
   * [`octaveOffset`](#octaveOffset) (channel, input and global) will be factored in for note
   * identifiers and [`Note`]{@link Note} objects.
   * @returns {boolean}
   * @since version 3.0.0
   */
  getNoteState(e) {
    e instanceof b && (e = e.identifier);
    const t = o.guessNoteNumber(
      e,
      l.octaveOffset + this.input.octaveOffset + this.octaveOffset
    );
    return this.notesState[t];
  }
  /**
   * An integer to offset the reported octave of incoming note-specific messages (`noteon`,
   * `noteoff` and `keyaftertouch`). By default, middle C (MIDI note number 60) is placed on the 4th
   * octave (C4).
   *
   * If, for example, `octaveOffset` is set to 2, MIDI note number 60 will be reported as C6. If
   * `octaveOffset` is set to -1, MIDI note number 60 will be reported as C3.
   *
   * Note that this value is combined with the global offset value defined by
   * [`WebMidi.octaveOffset`](WebMidi#octaveOffset) object and with the value defined on the parent
   * input object with [`Input.octaveOffset`](Input#octaveOffset).
   *
   * @type {number}
   *
   * @since 3.0
   */
  get octaveOffset() {
    return this._octaveOffset;
  }
  set octaveOffset(e) {
    if (this.validation && (e = parseInt(e), isNaN(e)))
      throw new TypeError("The 'octaveOffset' property must be an integer.");
    this._octaveOffset = e;
  }
  /**
   * The [`Input`](Input) this channel belongs to.
   * @type {Input}
   * @since 3.0
   */
  get input() {
    return this._input;
  }
  /**
   * This channel's MIDI number (1-16).
   * @type {number}
   * @since 3.0
   */
  get number() {
    return this._number;
  }
  /**
   * Whether RPN/NRPN events are parsed and dispatched.
   * @type {boolean}
   * @since 3.0
   * @deprecated Use parameterNumberEventsEnabled instead.
   * @private
   */
  get nrpnEventsEnabled() {
    return this.parameterNumberEventsEnabled;
  }
  set nrpnEventsEnabled(e) {
    this.validation && (e = !!e), this.parameterNumberEventsEnabled = e;
  }
}
/**
 * The `Message` class represents a single MIDI message. It has several properties that make it
 * easy to make sense of the binary data it contains.
 *
 * @license Apache-2.0
 * @since 3.0.0
 */
class U {
  /**
   * Creates a new `Message` object from raw MIDI data.
   *
   * @param {Uint8Array} data The raw data of the MIDI message as a
   * [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)
   * of integers between `0` and `255`.
   */
  constructor(e) {
    this.rawData = e, this.data = Array.from(this.rawData), this.statusByte = this.rawData[0], this.rawDataBytes = this.rawData.slice(1), this.dataBytes = this.data.slice(1), this.isChannelMessage = !1, this.isSystemMessage = !1, this.command = void 0, this.channel = void 0, this.manufacturerId = void 0, this.type = void 0, this.statusByte < 240 ? (this.isChannelMessage = !0, this.command = this.statusByte >> 4, this.channel = (this.statusByte & 15) + 1) : (this.isSystemMessage = !0, this.command = this.statusByte), this.isChannelMessage ? this.type = o.getPropertyByValue(i.CHANNEL_MESSAGES, this.command) : this.isSystemMessage && (this.type = o.getPropertyByValue(i.SYSTEM_MESSAGES, this.command)), this.statusByte === i.SYSTEM_MESSAGES.sysex && (this.dataBytes[0] === 0 ? (this.manufacturerId = this.dataBytes.slice(0, 3), this.dataBytes = this.dataBytes.slice(3, this.rawDataBytes.length - 1), this.rawDataBytes = this.rawDataBytes.slice(3, this.rawDataBytes.length - 1)) : (this.manufacturerId = [this.dataBytes[0]], this.dataBytes = this.dataBytes.slice(1, this.dataBytes.length - 1), this.rawDataBytes = this.rawDataBytes.slice(1, this.rawDataBytes.length - 1)));
  }
}
/**
 * The `Input` class represents a single MIDI input port. This object is automatically instantiated
 * by the library according to the host's MIDI subsystem and does not need to be directly
 * instantiated. Instead, you can access all `Input` objects by referring to the
 * [`WebMidi.inputs`](WebMidi#inputs) array. You can also retrieve inputs by using methods such as
 * [`WebMidi.getInputByName()`](WebMidi#getInputByName) and
 * [`WebMidi.getInputById()`](WebMidi#getInputById).
 *
 * Note that a single MIDI device may expose several inputs and/or outputs.
 *
 * **Important**: the `Input` class does not directly fire channel-specific MIDI messages
 * (such as [`noteon`](InputChannel#event:noteon) or
 * [`controlchange`](InputChannel#event:controlchange), etc.). The [`InputChannel`](InputChannel)
 * object does that. However, you can still use the
 * [`Input.addListener()`](#addListener) method to listen to channel-specific events on multiple
 * [`InputChannel`](InputChannel) objects at once.
 *
 * @fires Input#opened
 * @fires Input#disconnected
 * @fires Input#closed
 * @fires Input#midimessage
 *
 * @fires Input#sysex
 * @fires Input#timecode
 * @fires Input#songposition
 * @fires Input#songselect
 * @fires Input#tunerequest
 * @fires Input#clock
 * @fires Input#start
 * @fires Input#continue
 * @fires Input#stop
 * @fires Input#activesensing
 * @fires Input#reset
 *
 * @fires Input#unknownmidimessage
 *
 * @extends EventEmitter
 * @license Apache-2.0
 */
class Z extends E {
  /**
   * Creates an `Input` object.
   *
   * @param {MIDIInput} midiInput [`MIDIInput`](https://developer.mozilla.org/en-US/docs/Web/API/MIDIInput)
   * object as provided by the MIDI subsystem (Web MIDI API).
   */
  constructor(e) {
    super(), this._midiInput = e, this._octaveOffset = 0, this.channels = [];
    for (let t = 1; t <= 16; t++) this.channels[t] = new X(this, t);
    this._forwarders = [], this._midiInput.onstatechange = this._onStateChange.bind(this), this._midiInput.onmidimessage = this._onMidiMessage.bind(this);
  }
  /**
   * Destroys the `Input` by removing all listeners, emptying the [`channels`](#channels) array and
   * unlinking the MIDI subsystem. This is mostly for internal use.
   *
   * @returns {Promise<void>}
   */
  async destroy() {
    this.removeListener(), this.channels.forEach((e) => e.destroy()), this.channels = [], this._forwarders = [], this._midiInput && (this._midiInput.onstatechange = null, this._midiInput.onmidimessage = null), await this.close(), this._midiInput = null;
  }
  /**
   * Executed when a `"statechange"` event occurs.
   *
   * @param e
   * @private
   */
  _onStateChange(e) {
    let t = {
      timestamp: l.time,
      target: this,
      port: this
      // for consistency
    };
    e.port.connection === "open" ? (t.type = "opened", this.emit("opened", t)) : e.port.connection === "closed" && e.port.state === "connected" ? (t.type = "closed", this.emit("closed", t)) : e.port.connection === "closed" && e.port.state === "disconnected" ? (t.type = "disconnected", t.port = {
      connection: e.port.connection,
      id: e.port.id,
      manufacturer: e.port.manufacturer,
      name: e.port.name,
      state: e.port.state,
      type: e.port.type
    }, this.emit("disconnected", t)) : e.port.connection === "pending" && e.port.state === "disconnected" || console.warn("This statechange event was not caught: ", e.port.connection, e.port.state);
  }
  /**
   * Executed when a `"midimessage"` event is received
   * @param e
   * @private
   */
  _onMidiMessage(e) {
    const t = new U(e.data), n = {
      port: this,
      target: this,
      message: t,
      timestamp: e.timeStamp,
      type: "midimessage",
      data: t.data,
      // @deprecated (will be removed in v4)
      rawData: t.data,
      // @deprecated (will be removed in v4)
      statusByte: t.data[0],
      // @deprecated (will be removed in v4)
      dataBytes: t.dataBytes
      // @deprecated (will be removed in v4)
    };
    this.emit("midimessage", n), t.isSystemMessage ? this._parseEvent(n) : t.isChannelMessage && this.channels[t.channel]._processMidiMessageEvent(n), this._forwarders.forEach((r) => r.forward(t));
  }
  /**
   * @private
   */
  _parseEvent(e) {
    const t = Object.assign({}, e);
    t.type = t.message.type || "unknownmidimessage", t.type === "songselect" && (t.song = e.data[1] + 1, t.value = e.data[1], t.rawValue = t.value), this.emit(t.type, t);
  }
  /**
   * Opens the input for usage. This is usually unnecessary as the port is opened automatically when
   * WebMidi is enabled.
   *
   * @returns {Promise<Input>} The promise is fulfilled with the `Input` object.
   */
  async open() {
    try {
      await this._midiInput.open();
    } catch (e) {
      return Promise.reject(e);
    }
    return Promise.resolve(this);
  }
  /**
   * Closes the input. When an input is closed, it cannot be used to listen to MIDI messages until
   * the input is opened again by calling [`Input.open()`](Input#open).
   *
   * **Note**: if what you want to do is stop events from being dispatched, you should use
   * [`eventsSuspended`](#eventsSuspended) instead.
   *
   * @returns {Promise<Input>} The promise is fulfilled with the `Input` object
   */
  async close() {
    if (!this._midiInput) return Promise.resolve(this);
    try {
      await this._midiInput.close();
    } catch (e) {
      return Promise.reject(e);
    }
    return Promise.resolve(this);
  }
  /**
   * @private
   * @deprecated since v3.0.0 (moved to 'Utilities' class)
   */
  getChannelModeByNumber() {
    l.validation && console.warn(
      "The 'getChannelModeByNumber()' method has been moved to the 'Utilities' class."
    );
  }
  /**
   * Adds an event listener that will trigger a function callback when the specified event is
   * dispatched. The event usually is **input-wide** but can also be **channel-specific**.
   *
   * Input-wide events do not target a specific MIDI channel so it makes sense to listen for them
   * at the `Input` level and not at the [`InputChannel`](InputChannel) level. Channel-specific
   * events target a specific channel. Usually, in this case, you would add the listener to the
   * [`InputChannel`](InputChannel) object. However, as a convenience, you can also listen to
   * channel-specific events directly on an `Input`. This allows you to react to a channel-specific
   * event no matter which channel it actually came through.
   *
   * When listening for an event, you simply need to specify the event name and the function to
   * execute:
   *
   * ```javascript
   * const listener = WebMidi.inputs[0].addListener("midimessage", e => {
   *   console.log(e);
   * });
   * ```
   *
   * Calling the function with an input-wide event (such as
   * [`"midimessage"`]{@link #event:midimessage}), will return the [`Listener`](Listener) object
   * that was created.
   *
   * If you call the function with a channel-specific event (such as
   * [`"noteon"`]{@link InputChannel#event:noteon}), it will return an array of all
   * [`Listener`](Listener) objects that were created (one for each channel):
   *
   * ```javascript
   * const listeners = WebMidi.inputs[0].addListener("noteon", someFunction);
   * ```
   *
   * You can also specify which channels you want to add the listener to:
   *
   * ```javascript
   * const listeners = WebMidi.inputs[0].addListener("noteon", someFunction, {channels: [1, 2, 3]});
   * ```
   *
   * In this case, `listeners` is an array containing 3 [`Listener`](Listener) objects. The order of
   * the listeners in the array follows the order the channels were specified in.
   *
   * Note that, when adding channel-specific listeners, it is the [`InputChannel`](InputChannel)
   * instance that actually gets a listener added and not the `Input` instance. You can check that
   * by calling [`InputChannel.hasListener()`](InputChannel#hasListener()).
   *
   * There are 8 families of events you can listen to:
   *
   * 1. **MIDI System Common** Events (input-wide)
   *
   *    * [`songposition`]{@link Input#event:songposition}
   *    * [`songselect`]{@link Input#event:songselect}
   *    * [`sysex`]{@link Input#event:sysex}
   *    * [`timecode`]{@link Input#event:timecode}
   *    * [`tunerequest`]{@link Input#event:tunerequest}
   *
   * 2. **MIDI System Real-Time** Events (input-wide)
   *
   *    * [`clock`]{@link Input#event:clock}
   *    * [`start`]{@link Input#event:start}
   *    * [`continue`]{@link Input#event:continue}
   *    * [`stop`]{@link Input#event:stop}
   *    * [`activesensing`]{@link Input#event:activesensing}
   *    * [`reset`]{@link Input#event:reset}
   *
   * 3. **State Change** Events (input-wide)
   *
   *    * [`opened`]{@link Input#event:opened}
   *    * [`closed`]{@link Input#event:closed}
   *    * [`disconnected`]{@link Input#event:disconnected}
   *
   * 4. **Catch-All** Events (input-wide)
   *
   *    * [`midimessage`]{@link Input#event:midimessage}
   *    * [`unknownmidimessage`]{@link Input#event:unknownmidimessage}
   *
   * 5. **Channel Voice** Events (channel-specific)
   *
   *    * [`channelaftertouch`]{@link InputChannel#event:channelaftertouch}
   *    * [`controlchange`]{@link InputChannel#event:controlchange}
   *      * [`controlchange-controller0`]{@link InputChannel#event:controlchange-controller0}
   *      * [`controlchange-controller1`]{@link InputChannel#event:controlchange-controller1}
   *      * [`controlchange-controller2`]{@link InputChannel#event:controlchange-controller2}
   *      * (...)
   *      * [`controlchange-controller127`]{@link InputChannel#event:controlchange-controller127}
   *    * [`keyaftertouch`]{@link InputChannel#event:keyaftertouch}
   *    * [`noteoff`]{@link InputChannel#event:noteoff}
   *    * [`noteon`]{@link InputChannel#event:noteon}
   *    * [`pitchbend`]{@link InputChannel#event:pitchbend}
   *    * [`programchange`]{@link InputChannel#event:programchange}
   *
   *    Note: you can listen for a specific control change message by using an event name like this:
   *    `controlchange-controller23`, `controlchange-controller99`, `controlchange-controller122`,
   *    etc.
   *
   * 6. **Channel Mode** Events (channel-specific)
   *
   *    * [`allnotesoff`]{@link InputChannel#event:allnotesoff}
   *    * [`allsoundoff`]{@link InputChannel#event:allsoundoff}
   *    * [`localcontrol`]{@link InputChannel#event:localcontrol}
   *    * [`monomode`]{@link InputChannel#event:monomode}
   *    * [`omnimode`]{@link InputChannel#event:omnimode}
   *    * [`resetallcontrollers`]{@link InputChannel#event:resetallcontrollers}
   *
   * 7. **NRPN** Events (channel-specific)
   *
   *    * [`nrpn`]{@link InputChannel#event:nrpn}
   *    * [`nrpn-dataentrycoarse`]{@link InputChannel#event:nrpn-dataentrycoarse}
   *    * [`nrpn-dataentryfine`]{@link InputChannel#event:nrpn-dataentryfine}
   *    * [`nrpn-dataincrement`]{@link InputChannel#event:nrpn-dataincrement}
   *    * [`nrpn-datadecrement`]{@link InputChannel#event:nrpn-datadecrement}
   *
   * 8. **RPN** Events (channel-specific)
   *
   *    * [`rpn`]{@link InputChannel#event:rpn}
   *    * [`rpn-dataentrycoarse`]{@link InputChannel#event:rpn-dataentrycoarse}
   *    * [`rpn-dataentryfine`]{@link InputChannel#event:rpn-dataentryfine}
   *    * [`rpn-dataincrement`]{@link InputChannel#event:rpn-dataincrement}
   *    * [`rpn-datadecrement`]{@link InputChannel#event:rpn-datadecrement}
   *
   * @param event {string | EventEmitter.ANY_EVENT} The type of the event.
   *
   * @param listener {function} A callback function to execute when the specified event is detected.
   * This function will receive an event parameter object. For details on this object's properties,
   * check out the documentation for the various events (links above).
   *
   * @param {object} [options={}]
   *
   * @param {array} [options.arguments] An array of arguments which will be passed separately to the
   * callback function. This array is stored in the [`arguments`](Listener#arguments) property of
   * the [`Listener`](Listener) object and can be retrieved or modified as desired.
   *
   * @param {number|number[]} [options.channels=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]]
   * An integer between 1 and 16 or an array of such integers representing the MIDI channel(s) to
   * listen on. If no channel is specified, all channels will be used. This parameter is ignored for
   * input-wide events.
   *
   * @param {object} [options.context=this] The value of `this` in the callback function.
   *
   * @param {number} [options.duration=Infinity] The number of milliseconds before the listener
   * automatically expires.
   *
   * @param {boolean} [options.prepend=false] Whether the listener should be added at the beginning
   * of the listeners array and thus be triggered before others.
   *
   * @param {number} [options.remaining=Infinity] The number of times after which the callback
   * should automatically be removed.
   *
   * @returns {Listener|Listener[]} If the event is input-wide, a single [`Listener`](Listener)
   * object is returned. If the event is channel-specific, an array of all the
   * [`Listener`](Listener) objects is returned (one for each channel).
   */
  addListener(e, t, n = {}) {
    if (l.validation && typeof n == "function") {
      let r = t != null ? [].concat(t) : void 0;
      t = n, n = { channels: r };
    }
    if (i.CHANNEL_EVENTS.includes(e)) {
      n.channels === void 0 && (n.channels = i.MIDI_CHANNEL_NUMBERS);
      let r = [];
      return o.sanitizeChannels(n.channels).forEach((s) => {
        r.push(this.channels[s].addListener(e, t, n));
      }), r;
    } else
      return super.addListener(e, t, n);
  }
  /**
   * Adds a one-time event listener that will trigger a function callback when the specified event
   * happens. The event can be **channel-bound** or **input-wide**. Channel-bound events are
   * dispatched by [`InputChannel`]{@link InputChannel} objects and are tied to a specific MIDI
   * channel while input-wide events are dispatched by the `Input` object itself and are not tied
   * to a specific channel.
   *
   * Calling the function with an input-wide event (such as
   * [`"midimessage"`]{@link #event:midimessage}), will return the [`Listener`](Listener) object
   * that was created.
   *
   * If you call the function with a channel-specific event (such as
   * [`"noteon"`]{@link InputChannel#event:noteon}), it will return an array of all
   * [`Listener`](Listener) objects that were created (one for each channel):
   *
   * ```javascript
   * const listeners = WebMidi.inputs[0].addOneTimeListener("noteon", someFunction);
   * ```
   *
   * You can also specify which channels you want to add the listener to:
   *
   * ```javascript
   * const listeners = WebMidi.inputs[0].addOneTimeListener("noteon", someFunction, {channels: [1, 2, 3]});
   * ```
   *
   * In this case, the `listeners` variable contains an array of 3 [`Listener`](Listener) objects.
   *
   * The code above will add a listener for the `"noteon"` event and call `someFunction` when the
   * event is triggered on MIDI channels `1`, `2` or `3`.
   *
   * Note that, when adding events to channels, it is the [`InputChannel`](InputChannel) instance
   * that actually gets a listener added and not the `Input` instance.
   *
   * Note: if you want to add a listener to a single MIDI channel you should probably do so directly
   * on the [`InputChannel`](InputChannel) object itself.
   *
   * There are 8 families of events you can listen to:
   *
   * 1. **MIDI System Common** Events (input-wide)
   *
   *    * [`songposition`]{@link Input#event:songposition}
   *    * [`songselect`]{@link Input#event:songselect}
   *    * [`sysex`]{@link Input#event:sysex}
   *    * [`timecode`]{@link Input#event:timecode}
   *    * [`tunerequest`]{@link Input#event:tunerequest}
   *
   * 2. **MIDI System Real-Time** Events (input-wide)
   *
   *    * [`clock`]{@link Input#event:clock}
   *    * [`start`]{@link Input#event:start}
   *    * [`continue`]{@link Input#event:continue}
   *    * [`stop`]{@link Input#event:stop}
   *    * [`activesensing`]{@link Input#event:activesensing}
   *    * [`reset`]{@link Input#event:reset}
   *
   * 3. **State Change** Events (input-wide)
   *
   *    * [`opened`]{@link Input#event:opened}
   *    * [`closed`]{@link Input#event:closed}
   *    * [`disconnected`]{@link Input#event:disconnected}
   *
   * 4. **Catch-All** Events (input-wide)
   *
   *    * [`midimessage`]{@link Input#event:midimessage}
   *    * [`unknownmidimessage`]{@link Input#event:unknownmidimessage}
   *
   * 5. **Channel Voice** Events (channel-specific)
   *
   *    * [`channelaftertouch`]{@link InputChannel#event:channelaftertouch}
   *    * [`controlchange`]{@link InputChannel#event:controlchange}
   *      * [`controlchange-controller0`]{@link InputChannel#event:controlchange-controller0}
   *      * [`controlchange-controller1`]{@link InputChannel#event:controlchange-controller1}
   *      * [`controlchange-controller2`]{@link InputChannel#event:controlchange-controller2}
   *      * (...)
   *      * [`controlchange-controller127`]{@link InputChannel#event:controlchange-controller127}
   *    * [`keyaftertouch`]{@link InputChannel#event:keyaftertouch}
   *    * [`noteoff`]{@link InputChannel#event:noteoff}
   *    * [`noteon`]{@link InputChannel#event:noteon}
   *    * [`pitchbend`]{@link InputChannel#event:pitchbend}
   *    * [`programchange`]{@link InputChannel#event:programchange}
   *
   *    Note: you can listen for a specific control change message by using an event name like this:
   *    `controlchange-controller23`, `controlchange-controller99`, `controlchange-controller122`,
   *    etc.
   *
   * 6. **Channel Mode** Events (channel-specific)
   *
   *    * [`allnotesoff`]{@link InputChannel#event:allnotesoff}
   *    * [`allsoundoff`]{@link InputChannel#event:allsoundoff}
   *    * [`localcontrol`]{@link InputChannel#event:localcontrol}
   *    * [`monomode`]{@link InputChannel#event:monomode}
   *    * [`omnimode`]{@link InputChannel#event:omnimode}
   *    * [`resetallcontrollers`]{@link InputChannel#event:resetallcontrollers}
   *
   * 7. **NRPN** Events (channel-specific)
   *
   *    * [`nrpn`]{@link InputChannel#event:nrpn}
   *    * [`nrpn-dataentrycoarse`]{@link InputChannel#event:nrpn-dataentrycoarse}
   *    * [`nrpn-dataentryfine`]{@link InputChannel#event:nrpn-dataentryfine}
   *    * [`nrpn-dataincrement`]{@link InputChannel#event:nrpn-dataincrement}
   *    * [`nrpn-datadecrement`]{@link InputChannel#event:nrpn-datadecrement}
   *
   * 8. **RPN** Events (channel-specific)
   *
   *    * [`rpn`]{@link InputChannel#event:rpn}
   *    * [`rpn-dataentrycoarse`]{@link InputChannel#event:rpn-dataentrycoarse}
   *    * [`rpn-dataentryfine`]{@link InputChannel#event:rpn-dataentryfine}
   *    * [`rpn-dataincrement`]{@link InputChannel#event:rpn-dataincrement}
   *    * [`rpn-datadecrement`]{@link InputChannel#event:rpn-datadecrement}
   *
   * @param event {string} The type of the event.
   *
   * @param listener {function} A callback function to execute when the specified event is detected.
   * This function will receive an event parameter object. For details on this object's properties,
   * check out the documentation for the various events (links above).
   *
   * @param {object} [options={}]
   *
   * @param {array} [options.arguments] An array of arguments which will be passed separately to the
   * callback function. This array is stored in the [`arguments`](Listener#arguments) property of
   * the [`Listener`](Listener) object and can be retrieved or modified as desired.
   *
   * @param {number|number[]} [options.channels]  An integer between 1 and 16 or an array of
   * such integers representing the MIDI channel(s) to listen on. This parameter is ignored for
   * input-wide events.
   *
   * @param {object} [options.context=this] The value of `this` in the callback function.
   *
   * @param {number} [options.duration=Infinity] The number of milliseconds before the listener
   * automatically expires.
   *
   * @param {boolean} [options.prepend=false] Whether the listener should be added at the beginning
   * of the listeners array and thus be triggered before others.
   *
   * @returns {Listener[]} An array of all [`Listener`](Listener) objects that were created.
   */
  addOneTimeListener(e, t, n = {}) {
    return n.remaining = 1, this.addListener(e, t, n);
  }
  /**
   * This is an alias to the [Input.addListener()]{@link Input#addListener} method.
   * @since 2.0.0
   * @deprecated since v3.0
   * @private
   */
  on(e, t, n, r) {
    return this.addListener(e, t, n, r);
  }
  /**
   * Checks if the specified event type is already defined to trigger the specified callback
   * function. For channel-specific events, the function will return `true` only if all channels
   * have the listener defined.
   *
   * @param event {string|Symbol} The type of the event.
   *
   * @param listener {function} The callback function to check for.
   *
   * @param {object} [options={}]
   *
   * @param {number|number[]} [options.channels]  An integer between 1 and 16 or an array of such
   * integers representing the MIDI channel(s) to check. This parameter is ignored for input-wide
   * events.
   *
   * @returns {boolean} Boolean value indicating whether or not the `Input` or
   * [`InputChannel`](InputChannel) already has this listener defined.
   */
  hasListener(e, t, n = {}) {
    if (l.validation && typeof n == "function") {
      let r = [].concat(t);
      t = n, n = { channels: r };
    }
    return i.CHANNEL_EVENTS.includes(e) ? (n.channels === void 0 && (n.channels = i.MIDI_CHANNEL_NUMBERS), o.sanitizeChannels(n.channels).every((r) => this.channels[r].hasListener(e, t))) : super.hasListener(e, t);
  }
  /**
   * Removes the specified event listener. If no listener is specified, all listeners matching the
   * specified event will be removed. If the event is channel-specific, the listener will be removed
   * from all [`InputChannel`]{@link InputChannel} objects belonging to that channel. If no event is
   * specified, all listeners for the `Input` as well as all listeners for all
   * [`InputChannel`]{@link InputChannel} objects belonging to the `Input` will be removed.
   *
   * By default, channel-specific listeners will be removed from all
   * [`InputChannel`]{@link InputChannel} objects unless the `options.channel` narrows it down.
   *
   * @param [type] {string} The type of the event.
   *
   * @param [listener] {function} The callback function to check for.
   *
   * @param {object} [options={}]
   *
   * @param {number|number[]} [options.channels]  An integer between 1 and 16 or an array of
   * such integers representing the MIDI channel(s) to match. This parameter is ignored for
   * input-wide events.
   *
   * @param {*} [options.context] Only remove the listeners that have this exact context.
   *
   * @param {number} [options.remaining] Only remove the listener if it has exactly that many
   * remaining times to be executed.
   */
  removeListener(e, t, n = {}) {
    if (l.validation && typeof n == "function") {
      let r = [].concat(t);
      t = n, n = { channels: r };
    }
    if (n.channels === void 0 && (n.channels = i.MIDI_CHANNEL_NUMBERS), e == null)
      return o.sanitizeChannels(n.channels).forEach((r) => {
        this.channels[r] && this.channels[r].removeListener();
      }), super.removeListener();
    i.CHANNEL_EVENTS.includes(e) ? o.sanitizeChannels(n.channels).forEach((r) => {
      this.channels[r].removeListener(e, t, n);
    }) : super.removeListener(e, t, n);
  }
  /**
   * Adds a forwarder that will forward all incoming MIDI messages matching the criteria to the
   * specified [`Output`](Output) destination(s). This is akin to the hardware MIDI THRU port, with
   * the added benefit of being able to filter which data is forwarded.
   *
   * @param {Output|Output[]} output An [`Output`](Output) object, or an array of such
   * objects, to forward messages to.
   * @param {object} [options={}]
   * @param {string|string[]} [options.types=(all messages)] A message type, or an array of such
   * types (`noteon`, `controlchange`, etc.), that the message type must match in order to be
   * forwarded. If this option is not specified, all types of messages will be forwarded. Valid
   * messages are the ones found in either
   * [`SYSTEM_MESSAGES`](Enumerations#SYSTEM_MESSAGES) or
   * [`CHANNEL_MESSAGES`](Enumerations#CHANNEL_MESSAGES).
   * @param {number|number[]} [options.channels=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]]
   * A MIDI channel number or an array of channel numbers that the message must match in order to be
   * forwarded. By default all MIDI channels are included (`1` to `16`).
   *
   * @returns {Forwarder} The [`Forwarder`](Forwarder) object created to handle the forwarding. This
   * is useful if you wish to manipulate or remove the [`Forwarder`](Forwarder) later on.
   */
  addForwarder(e, t = {}) {
    let n;
    return e instanceof B ? n = e : n = new B(e, t), this._forwarders.push(n), n;
  }
  /**
   * Removes the specified [`Forwarder`](Forwarder) object from the input.
   *
   * @param {Forwarder} forwarder The [`Forwarder`](Forwarder) to remove (the
   * [`Forwarder`](Forwarder) object is returned when calling `addForwarder()`.
   */
  removeForwarder(e) {
    this._forwarders = this._forwarders.filter((t) => t !== e);
  }
  /**
   * Checks whether the specified [`Forwarder`](Forwarder) object has already been attached to this
   * input.
   *
   * @param {Forwarder} forwarder The [`Forwarder`](Forwarder) to check for (the
   * [`Forwarder`](Forwarder) object is returned when calling [`addForwarder()`](#addForwarder).
   * @returns {boolean}
   */
  hasForwarder(e) {
    return this._forwarders.includes(e);
  }
  /**
   * Name of the MIDI input.
   *
   * @type {string}
   * @readonly
   */
  get name() {
    return this._midiInput.name;
  }
  /**
   * ID string of the MIDI port. The ID is host-specific. Do not expect the same ID on different
   * platforms. For example, Google Chrome and the Jazz-Plugin report completely different IDs for
   * the same port.
   *
   * @type {string}
   * @readonly
   */
  get id() {
    return this._midiInput.id;
  }
  /**
   * Input port's connection state: `pending`, `open` or `closed`.
   *
   * @type {string}
   * @readonly
   */
  get connection() {
    return this._midiInput.connection;
  }
  /**
   * Name of the manufacturer of the device that makes this input port available.
   *
   * @type {string}
   * @readonly
   */
  get manufacturer() {
    return this._midiInput.manufacturer;
  }
  /**
   * An integer to offset the reported octave of incoming notes. By default, middle C (MIDI note
   * number 60) is placed on the 4th octave (C4).
   *
   * If, for example, `octaveOffset` is set to 2, MIDI note number 60 will be reported as C6. If
   * `octaveOffset` is set to -1, MIDI note number 60 will be reported as C3.
   *
   * Note that this value is combined with the global offset value defined in the
   * [`WebMidi.octaveOffset`](WebMidi#octaveOffset) property (if any).
   *
   * @type {number}
   *
   * @since 3.0
   */
  get octaveOffset() {
    return this._octaveOffset;
  }
  set octaveOffset(e) {
    if (this.validation && (e = parseInt(e), isNaN(e)))
      throw new TypeError("The 'octaveOffset' property must be an integer.");
    this._octaveOffset = e;
  }
  /**
   * State of the input port: `connected` or `disconnected`.
   *
   * @type {string}
   * @readonly
   */
  get state() {
    return this._midiInput.state;
  }
  /**
   * The port type. In the case of the `Input` object, this is always: `input`.
   *
   * @type {string}
   * @readonly
   */
  get type() {
    return this._midiInput.type;
  }
  /**
   * @type {boolean}
   * @private
   * @deprecated since v3.0.0 (moved to 'InputChannel' class)
   */
  get nrpnEventsEnabled() {
    return l.validation && console.warn("The 'nrpnEventsEnabled' property has been moved to the 'InputChannel' class."), !1;
  }
}
/**
 * The `WebMidi` object makes it easier to work with the low-level Web MIDI API. Basically, it
 * simplifies sending outgoing MIDI messages and reacting to incoming MIDI messages.
 *
 * When using the WebMidi.js library, you should know that the `WebMidi` class has already been
 * instantiated. You cannot instantiate it yourself. If you use the **IIFE** version, you should
 * simply use the global object called `WebMidi`. If you use the **CJS** (CommonJS) or **ESM** (ES6
 * module) version, you get an already-instantiated object when you import the module.
 *
 * @fires WebMidi#connected
 * @fires WebMidi#disabled
 * @fires WebMidi#disconnected
 * @fires WebMidi#enabled
 * @fires WebMidi#error
 * @fires WebMidi#midiaccessgranted
 * @fires WebMidi#portschanged
 *
 * @extends EventEmitter
 * @license Apache-2.0
 */
let oe = class extends E {
  /**
   * The WebMidi class is a singleton and you cannot instantiate it directly. It has already been
   * instantiated for you.
   */
  constructor() {
    super(), this.defaults = {
      note: {
        attack: o.from7bitToFloat(64),
        release: o.from7bitToFloat(64),
        duration: 1 / 0
      }
    }, this.interface = null, this.validation = !0, this._inputs = [], this._disconnectedInputs = [], this._outputs = [], this._disconnectedOutputs = [], this._stateChangeQueue = [], this._octaveOffset = 0;
  }
  /**
   * Checks if the Web MIDI API is available in the current environment and then tries to connect to
   * the host's MIDI subsystem. This is an asynchronous operation and it causes a security prompt to
   * be displayed to the user.
   *
   * To enable the use of MIDI system exclusive messages, the `sysex` option should be set to
   * `true`. However, under some environments (e.g. Jazz-Plugin), the `sysex` option is ignored
   * and system exclusive messages are always enabled. You can check the
   * [`sysexEnabled`](#sysexEnabled) property to confirm.
   *
   * To enable access to software synthesizers available on the host, you would set the `software`
   * option to `true`. However, this option is only there to future-proof the library as support for
   * software synths has not yet been implemented in any browser (as of September 2021).
   *
   * By the way, if you call the [`enable()`](#enable) method while WebMidi.js is already enabled,
   * the callback function will be executed (if any), the promise will resolve but the events
   * ([`"midiaccessgranted"`](#event:midiaccessgranted), [`"connected"`](#event:connected) and
   * [`"enabled"`](#event:enabled)) will not be fired.
   *
   * There are 3 ways to execute code after `WebMidi` has been enabled:
   *
   * - Pass a callback function in the `options`
   * - Listen to the [`"enabled"`](#event:enabled) event
   * - Wait for the promise to resolve
   *
   * In order, this is what happens towards the end of the enabling process:
   *
   * 1. [`"midiaccessgranted"`](#event:midiaccessgranted) event is triggered once the user has
   * granted access to use MIDI.
   * 2. [`"connected"`](#event:connected) events are triggered (for each available input and output)
   * 3. [`"enabled"`](#event:enabled) event is triggered when WebMidi.js is fully ready
   * 4. specified callback (if any) is executed
   * 5. promise is resolved and fulfilled with the `WebMidi` object.
   *
   * **Important note**: starting with Chrome v77, a page using Web MIDI API must be hosted on a
   * secure origin (`https://`, `localhost` or `file:///`) and the user will always be prompted to
   * authorize the operation (no matter if the `sysex` option is `true` or not).
   *
   * ##### Example
   * ```js
   * // Enabling WebMidi and using the promise
   * WebMidi.enable().then(() => {
   *   console.log("WebMidi.js has been enabled!");
   * })
   * ```
   *
   * @param [options] {object}
   *
   * @param [options.callback] {function} A function to execute once the operation completes. This
   * function will receive an `Error` object if enabling the Web MIDI API failed.
   *
   * @param [options.sysex=false] {boolean} Whether to enable MIDI system exclusive messages or not.
   *
   * @param [options.validation=true] {boolean} Whether to enable library-wide validation of method
   * arguments and setter values. This is an advanced setting that should be used carefully. Setting
   * [`validation`](#validation) to `false` improves performance but should only be done once the
   * project has been thoroughly tested with [`validation`](#validation)  turned on.
   *
   * @param [options.software=false] {boolean} Whether to request access to software synthesizers on
   * the host system. This is part of the spec but has not yet been implemented by most browsers as
   * of April 2020.
   *
   * @param [options.requestMIDIAccessFunction] {function} A custom function to use to return
   * the MIDIAccess object. This is useful if you want to use a polyfill for the Web MIDI API
   * or if you want to use a custom implementation of the Web MIDI API - probably for testing
   * purposes.
   *
   * @async
   *
   * @returns {Promise.<WebMidi>} The promise is fulfilled with the `WebMidi` object for
   * chainability
   *
   * @throws {Error} The Web MIDI API is not supported in your environment.
   * @throws {Error} Jazz-Plugin must be installed to use WebMIDIAPIShim.
   */
  async enable(e = {}, t = !1) {
    if (o.isNode)
      try {
        window.navigator;
      } catch {
        let h = await Object.getPrototypeOf(async function() {
        }).constructor(`
        let jzz = await import("jzz");
        return jzz.default;
        `)();
        global.navigator || (global.navigator = {}), Object.assign(global.navigator, h);
      }
    if (this.validation = e.validation !== !1, this.validation && (typeof e == "function" && (e = { callback: e, sysex: t }), t && (e.sysex = !0)), this.enabled)
      return typeof e.callback == "function" && e.callback(), Promise.resolve();
    const n = {
      timestamp: this.time,
      target: this,
      type: "error",
      error: void 0
    }, r = {
      timestamp: this.time,
      target: this,
      type: "midiaccessgranted"
    }, s = {
      timestamp: this.time,
      target: this,
      type: "enabled"
    };
    try {
      typeof e.requestMIDIAccessFunction == "function" ? this.interface = await e.requestMIDIAccessFunction(
        { sysex: e.sysex, software: e.software }
      ) : this.interface = await navigator.requestMIDIAccess(
        { sysex: e.sysex, software: e.software }
      );
    } catch (d) {
      return n.error = d, this.emit("error", n), typeof e.callback == "function" && e.callback(d), Promise.reject(d);
    }
    this.emit("midiaccessgranted", r), this.interface.onstatechange = this._onInterfaceStateChange.bind(this);
    try {
      await this._updateInputsAndOutputs();
    } catch (d) {
      return n.error = d, this.emit("error", n), typeof e.callback == "function" && e.callback(d), Promise.reject(d);
    }
    return this.emit("enabled", s), typeof e.callback == "function" && e.callback(), Promise.resolve(this);
  }
  /**
   * Completely disables **WebMidi.js** by unlinking the MIDI subsystem's interface and closing all
   * [`Input`](Input) and [`Output`](Output) objects that may have been opened. This also means that
   * listeners added to [`Input`](Input) objects, [`Output`](Output) objects or to `WebMidi` itself
   * are also destroyed.
   *
   * @async
   * @returns {Promise<Array>}
   *
   * @throws {Error} The Web MIDI API is not supported by your environment.
   *
   * @since 2.0.0
   */
  async disable() {
    return this.interface && (this.interface.onstatechange = void 0), this._destroyInputsAndOutputs().then(() => {
      navigator && typeof navigator.close == "function" && navigator.close(), this.interface = null;
      let e = {
        timestamp: this.time,
        target: this,
        type: "disabled"
      };
      this.emit("disabled", e), this.removeListener();
    });
  }
  /**
   * Returns the [`Input`](Input) object that matches the specified ID string or `false` if no
   * matching input is found. As per the Web MIDI API specification, IDs are strings (not integers).
   *
   * Please note that IDs change from one host to another. For example, Chrome does not use the same
   * kind of IDs as Jazz-Plugin.
   *
   * @param id {string} The ID string of the input. IDs can be viewed by looking at the
   * [`WebMidi.inputs`](WebMidi#inputs) array. Even though they sometimes look like integers, IDs
   * are strings.
   * @param [options] {object}
   * @param [options.disconnected] {boolean} Whether to retrieve a disconnected input
   *
   * @returns {Input} An [`Input`](Input) object matching the specified ID string or `undefined`
   * if no matching input can be found.
   *
   * @throws {Error} WebMidi is not enabled.
   *
   * @since 2.0.0
   */
  getInputById(e, t = { disconnected: !1 }) {
    if (this.validation) {
      if (!this.enabled) throw new Error("WebMidi is not enabled.");
      if (!e) return;
    }
    if (t.disconnected) {
      for (let n = 0; n < this._disconnectedInputs.length; n++)
        if (this._disconnectedInputs[n].id === e.toString()) return this._disconnectedInputs[n];
    } else
      for (let n = 0; n < this.inputs.length; n++)
        if (this.inputs[n].id === e.toString()) return this.inputs[n];
  }
  /**
   * Returns the first [`Input`](Input) object whose name **contains** the specified string. Note
   * that the port names change from one environment to another. For example, Chrome does not report
   * input names in the same way as the Jazz-Plugin does.
   *
   * @param name {string} The non-empty string to look for within the name of MIDI inputs (such as
   * those visible in the [inputs](WebMidi#inputs) array).
   *
   * @returns {Input} The [`Input`](Input) that was found or `undefined` if no input contained the
   * specified name.
   * @param [options] {object}
   * @param [options.disconnected] {boolean} Whether to retrieve a disconnected input
   *
   * @throws {Error} WebMidi is not enabled.
   *
   * @since 2.0.0
   */
  getInputByName(e, t = { disconnected: !1 }) {
    if (this.validation) {
      if (!this.enabled) throw new Error("WebMidi is not enabled.");
      if (!e) return;
      e = e.toString();
    }
    if (t.disconnected) {
      for (let n = 0; n < this._disconnectedInputs.length; n++)
        if (~this._disconnectedInputs[n].name.indexOf(e)) return this._disconnectedInputs[n];
    } else
      for (let n = 0; n < this.inputs.length; n++)
        if (~this.inputs[n].name.indexOf(e)) return this.inputs[n];
  }
  /**
   * Returns the first [`Output`](Output) object whose name **contains** the specified string. Note
   * that the port names change from one environment to another. For example, Chrome does not report
   * input names in the same way as the Jazz-Plugin does.
   *
   * @param name {string} The non-empty string to look for within the name of MIDI inputs (such as
   * those visible in the [`outputs`](#outputs) array).
   * @param [options] {object}
   * @param [options.disconnected] {boolean} Whether to retrieve a disconnected output
   *
   * @returns {Output} The [`Output`](Output) that was found or `undefined` if no output matched
   * the specified name.
   *
   * @throws {Error} WebMidi is not enabled.
   *
   * @since 2.0.0
   */
  getOutputByName(e, t = { disconnected: !1 }) {
    if (this.validation) {
      if (!this.enabled) throw new Error("WebMidi is not enabled.");
      if (!e) return;
      e = e.toString();
    }
    if (t.disconnected) {
      for (let n = 0; n < this._disconnectedOutputs.length; n++)
        if (~this._disconnectedOutputs[n].name.indexOf(e)) return this._disconnectedOutputs[n];
    } else
      for (let n = 0; n < this.outputs.length; n++)
        if (~this.outputs[n].name.indexOf(e)) return this.outputs[n];
  }
  /**
   * Returns the [`Output`](Output) object that matches the specified ID string or `false` if no
   * matching output is found. As per the Web MIDI API specification, IDs are strings (not
   * integers).
   *
   * Please note that IDs change from one host to another. For example, Chrome does not use the same
   * kind of IDs as Jazz-Plugin.
   *
   * @param id {string} The ID string of the port. IDs can be viewed by looking at the
   * [`WebMidi.outputs`](WebMidi#outputs) array.
   * @param [options] {object}
   * @param [options.disconnected] {boolean} Whether to retrieve a disconnected output
   *
   * @returns {Output} An [`Output`](Output) object matching the specified ID string. If no
   * matching output can be found, the method returns `undefined`.
   *
   * @throws {Error} WebMidi is not enabled.
   *
   * @since 2.0.0
   */
  getOutputById(e, t = { disconnected: !1 }) {
    if (this.validation) {
      if (!this.enabled) throw new Error("WebMidi is not enabled.");
      if (!e) return;
    }
    if (t.disconnected) {
      for (let n = 0; n < this._disconnectedOutputs.length; n++)
        if (this._disconnectedOutputs[n].id === e.toString()) return this._disconnectedOutputs[n];
    } else
      for (let n = 0; n < this.outputs.length; n++)
        if (this.outputs[n].id === e.toString()) return this.outputs[n];
  }
  /**
   * @private
   * @deprecated since version 3.0.0, use Utilities.toNoteNumber() instead.
   */
  noteNameToNumber(e) {
    return this.validation && console.warn(
      "The noteNameToNumber() method is deprecated. Use Utilities.toNoteNumber() instead."
    ), o.toNoteNumber(e, this.octaveOffset);
  }
  /**
   * @private
   * @deprecated since 3.0.0, use Utilities.getNoteDetails() instead.
   */
  getOctave(e) {
    return this.validation && (console.warn("The getOctave()is deprecated. Use Utilities.getNoteDetails() instead"), e = parseInt(e)), !isNaN(e) && e >= 0 && e <= 127 ? o.getNoteDetails(o.offsetNumber(e, this.octaveOffset)).octave : !1;
  }
  /**
   * @private
   * @deprecated since 3.0.0, use Utilities.sanitizeChannels() instead.
   */
  sanitizeChannels(e) {
    return this.validation && console.warn("The sanitizeChannels() method has been moved to the utilities class."), o.sanitizeChannels(e);
  }
  /**
   * @private
   * @deprecated since version 3.0.0, use Utilities.sanitizeChannels() instead.
   */
  toMIDIChannels(e) {
    return this.validation && console.warn(
      "The toMIDIChannels() method has been deprecated. Use Utilities.sanitizeChannels() instead."
    ), o.sanitizeChannels(e);
  }
  /**
   * @private
   * @deprecated since version 3.0.0, use Utilities.guessNoteNumber() instead.
   */
  guessNoteNumber(e) {
    return this.validation && console.warn(
      "The guessNoteNumber() method has been deprecated. Use Utilities.guessNoteNumber() instead."
    ), o.guessNoteNumber(e, this.octaveOffset);
  }
  /**
   * @private
   * @deprecated since version 3.0.0, use Utilities.buildNoteArray() instead.
   */
  getValidNoteArray(e, t = {}) {
    return this.validation && console.warn(
      "The getValidNoteArray() method has been moved to the Utilities.buildNoteArray()"
    ), o.buildNoteArray(e, t);
  }
  /**
   * @private
   * @deprecated since version 3.0.0, use Utilities.toTimestamp() instead.
   */
  convertToTimestamp(e) {
    return this.validation && console.warn(
      "The convertToTimestamp() method has been moved to Utilities.toTimestamp()."
    ), o.toTimestamp(e);
  }
  /**
   * @return {Promise<void>}
   * @private
   */
  async _destroyInputsAndOutputs() {
    let e = [];
    return this.inputs.forEach((t) => e.push(t.destroy())), this.outputs.forEach((t) => e.push(t.destroy())), Promise.all(e).then(() => {
      this._inputs = [], this._outputs = [];
    });
  }
  /**
   * @private
   */
  _onInterfaceStateChange(e) {
    this._updateInputsAndOutputs();
    let t = {
      timestamp: e.timeStamp,
      type: e.port.state,
      target: this
    };
    if (e.port.state === "connected" && e.port.connection === "open") {
      e.port.type === "output" ? t.port = this.getOutputById(e.port.id) : e.port.type === "input" && (t.port = this.getInputById(e.port.id)), this.emit(e.port.state, t);
      const n = Object.assign({}, t);
      n.type = "portschanged", this.emit(n.type, n);
    } else if (e.port.state === "disconnected" && e.port.connection === "pending") {
      e.port.type === "input" ? t.port = this.getInputById(e.port.id, { disconnected: !0 }) : e.port.type === "output" && (t.port = this.getOutputById(e.port.id, { disconnected: !0 })), this.emit(e.port.state, t);
      const n = Object.assign({}, t);
      n.type = "portschanged", this.emit(n.type, n);
    }
  }
  /**
   * @private
   */
  async _updateInputsAndOutputs() {
    return Promise.all([
      this._updateInputs(),
      this._updateOutputs()
    ]);
  }
  /**
   * @private
   */
  async _updateInputs() {
    if (!this.interface) return;
    for (let t = this._inputs.length - 1; t >= 0; t--) {
      const n = this._inputs[t];
      Array.from(this.interface.inputs.values()).find((s) => s === n._midiInput) || (this._disconnectedInputs.push(n), this._inputs.splice(t, 1));
    }
    let e = [];
    return this.interface.inputs.forEach((t) => {
      if (!this._inputs.find((n) => n._midiInput === t)) {
        let n = this._disconnectedInputs.find((r) => r._midiInput === t);
        n || (n = new Z(t)), this._inputs.push(n), e.push(n.open());
      }
    }), Promise.all(e);
  }
  /**
   * @private
   */
  async _updateOutputs() {
    if (!this.interface) return;
    for (let t = this._outputs.length - 1; t >= 0; t--) {
      const n = this._outputs[t];
      Array.from(this.interface.outputs.values()).find((s) => s === n._midiOutput) || (this._disconnectedOutputs.push(n), this._outputs.splice(t, 1));
    }
    let e = [];
    return this.interface.outputs.forEach((t) => {
      if (!this._outputs.find((n) => n._midiOutput === t)) {
        let n = this._disconnectedOutputs.find((r) => r._midiOutput === t);
        n || (n = new I(t)), this._outputs.push(n), e.push(n.open());
      }
    }), Promise.all(e);
  }
  // injectPluginMarkup(parent) {
  //
  //   // Silently ignore on Node.js
  //   if (Utilities.isNode) return;
  //
  //   // Default to <body> if no parent is specified
  //   if (!(parent instanceof Element) && !(parent instanceof HTMLDocument)) {
  //     parent = document.body;
  //   }
  //
  //   // IE10 needs this:
  //   // <meta http-equiv="X-UA-Compatible" content="requiresActiveX=true"/>
  //
  //   // Create markup and add to parent
  //   const obj = document.createElement("object");
  //   obj.classid = "CLSID:1ACE1618-1C7D-4561-AEE1-34842AA85E90"; // IE
  //   if (!obj.isJazz) obj.type = "audio/x-jazz";                 // Standards-compliant
  //   obj.style.visibility = "hidden";
  //   obj.style.width = obj.style.height = "0px";
  //   parent.appendChild(obj);
  //
  // }
  /**
   * Indicates whether access to the host's MIDI subsystem is active or not.
   *
   * @readonly
   * @type {boolean}
   */
  get enabled() {
    return this.interface !== null;
  }
  /**
   * An array of all currently available MIDI inputs.
   *
   * @readonly
   * @type {Input[]}
   */
  get inputs() {
    return this._inputs;
  }
  /**
   * @private
   * @deprecated
   */
  get isNode() {
    return this.validation && console.warn("WebMidi.isNode has been deprecated. Use Utilities.isNode instead."), o.isNode;
  }
  /**
   * @private
   * @deprecated
   */
  get isBrowser() {
    return this.validation && console.warn("WebMidi.isBrowser has been deprecated. Use Utilities.isBrowser instead."), o.isBrowser;
  }
  /**
   * An integer to offset the octave of notes received from external devices or sent to external
   * devices.
   *
   * When a MIDI message comes in on an input channel the reported note name will be offset. For
   * example, if the `octaveOffset` is set to `-1` and a [`"noteon"`](InputChannel#event:noteon)
   * message with MIDI number 60 comes in, the note will be reported as C3 (instead of C4).
   *
   * By the same token, when [`OutputChannel.playNote()`](OutputChannel#playNote) is called, the
   * MIDI note number being sent will be offset. If `octaveOffset` is set to `-1`, the MIDI note
   * number sent will be 72 (instead of 60).
   *
   * @type {number}
   *
   * @since 2.1
   */
  get octaveOffset() {
    return this._octaveOffset;
  }
  set octaveOffset(e) {
    if (this.validation && (e = parseInt(e), isNaN(e)))
      throw new TypeError("The 'octaveOffset' property must be an integer.");
    this._octaveOffset = e;
  }
  /**
   * An array of all currently available MIDI outputs as [`Output`](Output) objects.
   *
   * @readonly
   * @type {Output[]}
   */
  get outputs() {
    return this._outputs;
  }
  /**
   * Indicates whether the environment provides support for the Web MIDI API or not.
   *
   * **Note**: in environments that do not offer built-in MIDI support, this will report `true` if
   * the
   * [`navigator.requestMIDIAccess`](https://developer.mozilla.org/en-US/docs/Web/API/MIDIAccess)
   * function is available. For example, if you have installed WebMIDIAPIShim.js but no plugin, this
   * property will be `true` even though actual support might not be there.
   *
   * @readonly
   * @type {boolean}
   */
  get supported() {
    return typeof navigator < "u" && !!navigator.requestMIDIAccess;
  }
  /**
   * Indicates whether MIDI system exclusive messages have been activated when WebMidi.js was
   * enabled via the [`enable()`](#enable) method.
   *
   * @readonly
   * @type boolean
   */
  get sysexEnabled() {
    return !!(this.interface && this.interface.sysexEnabled);
  }
  /**
   * The elapsed time, in milliseconds, since the time
   * [origin](https://developer.mozilla.org/en-US/docs/Web/API/DOMHighResTimeStamp#The_time_origin).
   * Said simply, it is the number of milliseconds that passed since the page was loaded. Being a
   * floating-point number, it has sub-millisecond accuracy. According to the
   * [documentation](https://developer.mozilla.org/en-US/docs/Web/API/DOMHighResTimeStamp), the
   * time should be accurate to 5 µs (microseconds). However, due to various constraints, the
   * browser might only be accurate to one millisecond.
   *
   * Note: `WebMidi.time` is simply an alias to `performance.now()`.
   *
   * @type {DOMHighResTimeStamp}
   * @readonly
   */
  get time() {
    return performance.now();
  }
  /**
   * The version of the library as a [semver](https://semver.org/) string.
   *
   * @readonly
   * @type string
   */
  get version() {
    return "3.1.12";
  }
  /**
   * The flavour of the library. Can be one of:
   *
   * * `esm`: ECMAScript Module
   * * `cjs`: CommonJS Module
   * * `iife`: Immediately-Invoked Function Expression
   *
   * @readonly
   * @type string
   * @since 3.0.25
   */
  get flavour() {
    return "esm";
  }
  /**
   * @private
   * @deprecated since 3.0.0. Use Enumerations.CHANNEL_EVENTS instead.
   */
  get CHANNEL_EVENTS() {
    return this.validation && console.warn(
      "The CHANNEL_EVENTS enum has been moved to Enumerations.CHANNEL_EVENTS."
    ), i.CHANNEL_EVENTS;
  }
  /**
   * @private
   * @deprecated since 3.0.0. Use Enumerations.SYSTEM_MESSAGES instead.
   */
  get MIDI_SYSTEM_MESSAGES() {
    return this.validation && console.warn(
      "The MIDI_SYSTEM_MESSAGES enum has been moved to Enumerations.SYSTEM_MESSAGES."
    ), i.SYSTEM_MESSAGES;
  }
  /**
   * @private
   * @deprecated since 3.0.0. Use Enumerations.CHANNEL_MODE_MESSAGES instead
   */
  get MIDI_CHANNEL_MODE_MESSAGES() {
    return this.validation && console.warn(
      "The MIDI_CHANNEL_MODE_MESSAGES enum has been moved to Enumerations.CHANNEL_MODE_MESSAGES."
    ), i.CHANNEL_MODE_MESSAGES;
  }
  /**
   * @private
   * @deprecated since 3.0.0. Use Enumerations.CONTROL_CHANGE_MESSAGES instead.
   */
  get MIDI_CONTROL_CHANGE_MESSAGES() {
    return this.validation && console.warn(
      "The MIDI_CONTROL_CHANGE_MESSAGES enum has been replaced by the Enumerations.CONTROL_CHANGE_MESSAGES array."
    ), i.MIDI_CONTROL_CHANGE_MESSAGES;
  }
  /**
   * @deprecated since 3.0.0. Use Enumerations.REGISTERED_PARAMETERS instead.
   * @private
   */
  get MIDI_REGISTERED_PARAMETER() {
    return this.validation && console.warn(
      "The MIDI_REGISTERED_PARAMETER enum has been moved to Enumerations.REGISTERED_PARAMETERS."
    ), i.REGISTERED_PARAMETERS;
  }
  /**
   * @deprecated since 3.0.0.
   * @private
   */
  get NOTES() {
    return this.validation && console.warn("The NOTES enum has been deprecated."), ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  }
};
const l = new oe();
l.constructor = null;
const le = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Enumerations: i,
  Forwarder: B,
  Input: Z,
  InputChannel: X,
  Message: U,
  Note: b,
  Output: I,
  OutputChannel: J,
  Utilities: o,
  WebMidi: l
}, Symbol.toStringTag, { value: "Module" })), { WebMidi: c } = le;
function de() {
  return typeof navigator.requestMIDIAccess == "function";
}
function w(a) {
  return a.map((e) => `'${e.name}'`).join(" | ");
}
function ee(a = {}) {
  const { onReady: e, onConnected: t, onDisconnected: n, onEnabled: r } = a;
  if (!c.enabled) {
    if (!de())
      throw new Error("Your Browser does not support WebMIDI.");
    return c.addListener("connected", () => {
      t?.(c);
    }), c.addListener("enabled", () => {
      r?.(c);
    }), c.addListener("disconnected", (s) => {
      n?.(c, s);
    }), new Promise((s, d) => {
      if (c.enabled) {
        s(c);
        return;
      }
      c.enable(
        (h) => {
          h && d(h), e?.(c), s(c);
        },
        { sysex: !0 }
      );
    });
  }
}
function D(a, e) {
  if (!e.length)
    throw new Error("🔌 No MIDI devices found. Connect a device or enable IAC Driver.");
  if (typeof a == "number")
    return e[a];
  const t = (s) => e.find((d) => d.name.includes(s));
  if (typeof a == "string")
    return t(a);
  const n = t("IAC"), r = n ?? e[0];
  if (!r)
    throw new Error(
      `🔌 MIDI device '${r || ""}' not found. Use one of ${w(e)}`
    );
  return n ?? e[0];
}
typeof window < "u" && window.addEventListener("message", (a) => {
  c?.enabled && a.data === "strudel-stop" && c.outputs.forEach((e) => e.sendStop());
});
const y = /* @__PURE__ */ new Map();
function te(a) {
  return Object.fromEntries(
    Object.entries(a).map(([e, t]) => (typeof t == "number" && (t = { ccn: t }), [Q(e), t]))
  );
}
function ce(a, e = "") {
  if (!a.startsWith("github:"))
    throw new Error('expected "github:" at the start of pseudoUrl');
  let [t, n] = a.split("github:");
  return n = n.endsWith("/") ? n.slice(0, -1) : n, n.split("/").length === 2 && (n += "/main"), `https://raw.githubusercontent.com/${n}/${e}`;
}
function ye(a) {
  y.set("default", te(a));
}
let v = {};
async function we(a) {
  typeof a == "string" && (a.startsWith("github:") && (a = ce(a, "midimap.json")), v[a] || (v[a] = fetch(a).then((e) => e.json())), a = await v[a]), typeof a == "object" && Object.entries(a).forEach(([e, t]) => y.set(e, te(t)));
}
const _e = /* @__PURE__ */ new Map();
function he(a = 0, e = 0, t = 1, n = 1) {
  if (e === t)
    throw new Error("min and max cannot be the same value");
  let r = (a - e) / (t - e);
  return r = Math.min(1, Math.max(0, r)), Math.pow(r, n);
}
function fe(a, e) {
  return Object.keys(e).filter((t) => !!a[Q(t)]).map((t) => {
    const { ccn: n, min: r = 0, max: s = 1, exp: d = 1 } = a[t], h = he(e[t], r, s, d);
    return { ccn: n, ccv: h };
  });
}
function O(a, e, t, n, r) {
  if (typeof e != "number" || e < 0 || e > 1)
    throw new Error("expected ccv to be a number between 0 and 1");
  if (!["string", "number"].includes(typeof a))
    throw new Error("expected ccn to be a number or a string");
  const s = Math.round(e * 127);
  t.sendControlChange(a, s, n, { time: r });
}
function W(a, e, t, n) {
  if (typeof a != "number" || a < 0 || a > 127)
    throw new Error("expected progNum (program change) to be a number between 0 and 127");
  e.sendProgramChange(a, t, { time: n });
}
function q(a, e, t, n) {
  if (Array.isArray(a)) {
    if (!a.every((r) => Number.isInteger(r) && r >= 0 && r <= 255))
      throw new Error("all sysexid bytes must be integers between 0 and 255");
  } else if (!Number.isInteger(a) || a < 0 || a > 255)
    throw new Error("A:sysexid must be an number between 0 and 255 or an array of such integers");
  if (!Array.isArray(e))
    throw new Error("expected sysex to be an array of numbers (0-255)");
  if (!e.every((r) => Number.isInteger(r) && r >= 0 && r <= 255))
    throw new Error("all sysex bytes must be integers between 0 and 255");
  t.sendSysex(a, e, { time: n });
}
function ue(a, e, t, n, r) {
  if (Array.isArray(a)) {
    if (!a.every((s) => Number.isInteger(s) && s >= 0 && s <= 255))
      throw new Error("all nrpnn bytes must be integers between 0 and 255");
  } else if (!Number.isInteger(e) || e < 0 || e > 255)
    throw new Error("A:sysexid must be an number between 0 and 255 or an array of such integers");
  t.sendNRPN(a, e, n, { time: r });
}
function me(a, e, t, n) {
  if (typeof a != "number" || a < -1 || a > 1)
    throw new Error("expected midibend to be a number between -1 and 1");
  e.sendPitchBend(a, t, { time: n });
}
function Ee(a, e, t, n) {
  if (typeof a != "number" || a < 0 || a > 1)
    throw new Error("expected miditouch to be a number between 0 and 1");
  e.sendChannelAftertouch(a, t, { time: n });
}
function pe(a, e, t, n, r, s) {
  if (a == null || a === "")
    throw new Error("note cannot be null or empty");
  if (e != null && (typeof e != "number" || e < 0 || e > 1))
    throw new Error("velocity must be a number between 0 and 1");
  if (t != null && (typeof t != "number" || t < 0))
    throw new Error("duration must be a positive number");
  const d = typeof a == "number" ? a : ie(a), h = new b(d, { attack: e, duration: t });
  n.playNote(h, r, {
    time: s
  });
}
re.prototype.midi = function(a, e = {}) {
  if (K(a))
    throw new Error(
      `.midi does not accept Pattern input for midiport. Make sure to pass device name with single quotes. Example: .midi('${c.outputs?.[0]?.name || "IAC Driver Bus 1"}')`
    );
  if (typeof a == "object") {
    const { port: n, isController: r = !1, ...s } = a;
    e = {
      isController: r,
      ...s,
      ...e
      // Keep any options passed separately
    }, a = n;
  }
  let t = {
    // Default configuration values
    isController: !1,
    // Disable sending notes for midi controllers
    latencyMs: 34,
    // Default latency to get audio engine to line up in ms
    noteOffsetMs: 10,
    // Default note-off offset to prevent glitching in ms
    midichannel: 1,
    // Default MIDI channel
    velocity: 0.9,
    // Default velocity
    gain: 1,
    // Default gain
    midimap: "default",
    // Default MIDI map
    midiport: a,
    // Store the port in the config
    ...e
    // Override defaults with provided options
  };
  return ee({
    onEnabled: ({ outputs: n }) => {
      const r = D(t.midiport, n), s = n.filter((d) => d.name !== r.name);
      g(
        `Midi enabled! Using "${r.name}". ${s?.length ? `Also available: ${w(s)}` : ""}`
      );
    },
    onDisconnected: ({ outputs: n }) => g(`Midi device disconnected! Available: ${w(n)}`)
  }), this.onTrigger((n, r, s, d, h) => {
    if (!c.enabled) {
      g("Midi not enabled");
      return;
    }
    r.ensureObjectValue();
    const _ = t.latencyMs, u = `+${se(h, s) + _}`;
    let {
      note: L,
      nrpnn: P,
      nrpv: x,
      ccn: G,
      ccv: H,
      midichan: p = t.midichannel,
      midicmd: m,
      midibend: k,
      miditouch: F,
      polyTouch: be,
      gain: ne = t.gain,
      velocity: C = t.velocity,
      progNum: V,
      sysexid: z,
      sysexdata: j,
      midimap: S = t.midimap,
      midiport: Y = t.midiport
    } = r.value;
    const f = D(Y, c.outputs);
    if (!f) {
      g(
        `[midi] midiport "${Y}" not found! available: ${c.outputs.map((N) => `'${N.name}'`).join(", ")}`
      );
      return;
    }
    if (C = ne * C, y.has(S) ? fe(y.get(S), r.value).forEach(({ ccn: R, ccv: T }) => O(R, T, f, p, u)) : S !== "default" && g(`[midi] midimap "${S}" not found! Available maps: ${[...y.keys()].join(", ")}`), L !== void 0 && !t.isController) {
      const N = r.duration.valueOf() / d * 1e3 - t.noteOffsetMs;
      pe(L, C, N, f, p, u);
    }
    if (V !== void 0 && W(V, f, p, u), z !== void 0 && j !== void 0 && q(z, j, f, u), H !== void 0 && G !== void 0 && O(G, H, f, p, u), P !== void 0 && x !== void 0 && ue(P, x, f, p, u), k !== void 0 && me(k, f, p, u), F !== void 0 && Ee(F, f, p, u), r.whole.begin + 0 === 0 && f.sendStart({ time: u }), ["clock", "midiClock"].includes(m))
      f.sendClock({ time: u });
    else if (["start"].includes(m))
      f.sendStart({ time: u });
    else if (["stop"].includes(m))
      f.sendStop({ time: u });
    else if (["continue"].includes(m))
      f.sendContinue({ time: u });
    else if (Array.isArray(m)) {
      if (m[0] === "progNum")
        W(m[1], f, p, u);
      else if (m[0] === "cc")
        m.length === 2 && O(m[0], m[1] / 127, f, p, u);
      else if (m[0] === "sysex" && m.length === 3) {
        const [N, R, T] = m;
        q(R, T, f, u);
      }
    }
  });
};
let M = {};
const A = {};
async function Se(a) {
  if (K(a))
    throw new Error(
      `midin: does not accept Pattern as input. Make sure to pass device name with single quotes. Example: midin('${c.outputs?.[0]?.name || "IAC Driver Bus 1"}')`
    );
  const e = await ee(), t = D(a, c.inputs);
  if (!t)
    throw new Error(
      `midiin: device "${a}" not found.. connected devices: ${w(c.inputs)}`
    );
  if (e) {
    const r = c.inputs.filter((s) => s.name !== t.name);
    g(
      `Midi enabled! Using "${t.name}". ${r?.length ? `Also available: ${w(r)}` : ""}`
    ), A[a] = {};
  }
  const n = (r) => ae(() => A[a][r] || 0);
  return M[a] && t.removeListener("midimessage", M[a]), M[a] = (r) => {
    const s = r.dataBytes[0], d = r.dataBytes[1];
    A[a] && (A[a][s] = d / 127);
  }, t.addListener("midimessage", M[a]), n;
}
export {
  c as WebMidi,
  ye as defaultmidimap,
  ee as enableWebMidi,
  y as midicontrolMap,
  we as midimaps,
  Se as midin,
  _e as midisoundMap
};
