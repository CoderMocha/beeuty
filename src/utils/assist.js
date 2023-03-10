const trim = function(string) {
	return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};

export function hasClass(el, cls) {
	if (!el || !cls) return false;
	if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
	if (el.classList) {
		return el.classList.contains(cls);
	} else {
		return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
	}
}

export function addClass(el, cls) {
	if (!el) return;
	let curClass = el.className;
	const classes = (cls || '').split(' ');

	for (let i = 0, j = classes.length; i < j; i++) {
		const clsName = classes[i];
		if (!clsName) continue;

		if (el.classList) {
			el.classList.add(clsName);
		} else {
			if (!hasClass(el, clsName)) {
				curClass += ' ' + clsName;
			}
		}
	}
	if (!el.classList) {
		el.className = curClass;
	}
}

export function removeClass(el, cls) {
	if (!el || !cls) return;
	const classes = cls.split(' ');
	let curClass = ' ' + el.className + ' ';

	for (let i = 0, j = classes.length; i < j; i++) {
		const clsName = classes[i];
		if (!clsName) continue;

		if (el.classList) {
			el.classList.remove(clsName);
		} else {
			if (hasClass(el, clsName)) {
				curClass = curClass.replace(' ' + clsName + ' ', ' ');
			}
		}
	}
	if (!el.classList) {
		el.className = trim(curClass);
	}
}

export function findComponentUpward(context, componentName, componentNames) {
	if (typeof componentName) {
		componentNames = [componentName];
	} else {
		componentNames = componentName;
	}
	let parent = context.$parent;
	let name = parent.$options.name;
	while (parent && (!name || componentNames.indexOf(name) < 0)) {
		parent = parent.$parent;
		if (parent) name = parent.$options.name;
	}
	return parent;
}

export function findComponentDownward(context, componentName) {
	const childrens = context.$children;
	let children = null;

	if (childrens.length) {
		for (const child of childrens) {
			const name = child.$options.name;
			if (name === componentName) {
				children = child;
				break;
			} else {
				children = findComponentDownward(child, componentName);
				if (children) break;
			}
		}
	}
	return children;
}

// Find brothers components
export function findBrothersComponents(context, componentName, exceptMe = true) {
	let res = context.$parent.$children.filter((item) => {
		return item.$options.name === componentName;
	});
	let index = res.findIndex((item) => item._uid === context._uid);
	if (exceptMe) res.splice(index, 1);
	return res;
}
