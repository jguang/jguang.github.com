##angular.copy
深度 copy
	
	angular.copy(source, destination);

If no destination is supplied, a copy of the object or array is created.

If a destination is provided, all of its elements (for arrays) or properties (for objects)are deleted and then all elements/properties from the source are copied to it.

If `source` is not an object or array (inc. `null` and `undefined`), `source` is returned.

If `source` is identical to 'destination' an exception will be thrown.

