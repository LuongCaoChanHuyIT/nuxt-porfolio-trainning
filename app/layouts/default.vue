<template>
  <div>
    <header class="p-4 bg-gray-200">
      <nav>
        <NuxtLink to="/">Home</NuxtLink> |
        <NuxtLink to="/about">About</NuxtLink> |
        <NuxtLink to="/admin/dashboard">Admin</NuxtLink>
      </nav>
    </header>

    <main class="p-6">
      <slot />
    </main>

    <footer class="p-4 bg-gray-200">
      <p>© 2025 My Nuxt App</p>
    </footer>
  </div>
</template>
