export function setCookie(name: string, value: string, duration = 604800) {
	const nameCpy = name;

	document.cookie = `${nameCpy}=${value}; Max-Age=${duration}; Domain=${
		import.meta.env.VITE_DOMAIN
	}; path=/; SameSite=Lax`;
}

export function getCookie(name: string) {
	const nameCpy = name;

	const match = document.cookie.match(new RegExp(`(^| )${nameCpy}=([^;]+)`));

	if (match) return match[2];
	return null;
}

export function deleteCookie(name: string) {
	const nameCpy = name;

	document.cookie = `${nameCpy}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;domain=${
		import.meta.env.VITE_DOMAIN
	};path=/`;
}
