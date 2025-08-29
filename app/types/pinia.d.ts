declare module "nuxt/schema" {
  interface NuxtConfig {
    pinia?: {
      storesDirs?: string[];
    };
  }
  interface NuxtOptions {
    pinia?: {
      storesDirs?: string[];
    };
  }
}
