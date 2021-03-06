/**
 * @description
 * The IE does not support custom Events (which we use to trigger certain things, like the "key.escape" event)
 * @see https://stackoverflow.com/a/26596324/2217462
 */
(function () {
	const _window = window as {} as any;
	if (typeof _window.CustomEvent === "function") return false; //If not IE

	function CustomEvent(event: any, params: any) {
		params = params || {bubbles: false, cancelable: false, detail: undefined};
		var evt = document.createEvent('CustomEvent');
		evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
		return evt;
	}

	CustomEvent.prototype = _window.Event.prototype;

	_window.CustomEvent = CustomEvent;
})();