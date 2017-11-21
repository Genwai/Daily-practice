//removeChild()的封装
	function  removeChild(node) {
		var p = node && node.parentNode;
		if (!p) {
			return null;
		}
		return p.removeChild(node);
	}
