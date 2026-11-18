// import * as Sentry from '@sentry/sveltekit';
import { building } from '$app/environment';
import { auth } from '$lib/auth';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { svelteKitHandler } from 'better-auth/svelte-kit';

const authHandle: Handle = async ({ event, resolve }) => {
	return svelteKitHandler({ event, resolve, auth, building });
};

const sessionHandle: Handle = async ({ event, resolve }) => {
	const session = await auth.api.getSession({
		headers: event.request.headers
	});
	event.locals.user = session?.user;
	const response = await resolve(event);
	return response;
};

// export const log_one: Handle = async ({ event, resolve }) => {
//   console.log("Log one called before page hit");
//  	const response = await resolve(event);
//   console.log("Log one called after page hit");
//  	return response;
//  }

//  export const log_two: Handle = async ({ event, resolve }) => {
//   console.log("Log two called before page hit");
//  	const response = await resolve(event);
//   console.log("Log two called after page hit");
//  	return response;
//  }

 export const handle = sequence(authHandle, sessionHandle);