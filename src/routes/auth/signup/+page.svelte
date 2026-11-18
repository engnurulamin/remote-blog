<script lang="ts">
	import { goto } from '$app/navigation';
	import { authClient } from '$lib/auth-client';
	import { resolve } from '$app/paths';

	console.log('page loaded');
	
	let error = $state('')

  async function signup(e: Event) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const passwordConfirm = form.password_confirm.value;

		if (password !== passwordConfirm) {
			error = 'Passwords do not match';
			return;
		}
		if(!username || !email || !password || !passwordConfirm) {
			error = 'All fields are required';
			return;
		}

		await authClient.signUp.email({
			email,
			password,
			name: username
		},{
			onSuccess: async () => {
				goto(resolve('/'));
			},
		});

    
  }
</script>

<div class="box-1">
	<h1>Sign Up</h1>
	<form onsubmit={signup}>
		<div class="row">
			<label>
				Username:
				<input required type="text" id="username" />
			</label>
		</div>
		<div class="row">
			<label>
				Email:
				<input required type="email" id="email" />
			</label>
		</div>
		<div class="row">
			<label>
				Password:
				<input required type="password" id="password" />
			</label>
		</div>
		<div class="row">
			<label>
				Confirm Passowrd:
				<input required type="password" id="password_confirm" />
			</label>
		</div>
		<button style="background-color: #000; margin-top: 0.5rem; padding: 0.6rem;" type="submit">Sign Up</button>
		{#if error}
			<p style="color: red;">{error}</p>
		{/if}
	</form>
</div>

<p>
	Already have an account? <a href="/auth/login">Login</a>
</p>
