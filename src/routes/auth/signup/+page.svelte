<script lang="ts">
	import { authClient } from '$lib/auth-client';

  function signup(e: Event) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const passwordConfirm = form.password_confirm.value;

    
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
		<button type="submit">Sign Up</button>
	</form>
</div>

<p>
	Already have an account? <a href="/auth/login">Login</a>
</p>
