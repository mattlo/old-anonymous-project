Ext.override(Ext.Element, {
	/**
	 * Returns the value of a namespaced attribute from the element's underlying DOM node.
	 * @param {String} namespace The namespace in which to look for the attribute
	 * @param {String} name The attribute name
	 * @return {String} The attribute value
	 * @deprecated
	 */
	getAttributeNS: function(ns, name) {
		return this.getAttribute(name, ns);
	},
	/**
	 * Returns the value of an (optionally namespaced) attribute from an
	 * element's underlying DOM node.
	 * @param {String} name The attribute name
	 * @param {String} namespace (optional) The namespace in which to look for the attribute
	 * @return {String} The attribute value
	 */
	getAttribute: function(name, ns) {
		// put current code from getAttributeNS here
	}
});