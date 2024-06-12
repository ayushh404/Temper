declare module 'tailwindcss/lib/util/flattenColorPalette' {
    // Define the actual type based on its usage or Tailwind's source code.
    // In most cases, this function takes an object and returns a flattened object.
    export default function flattenColorPalette(colors: Record<string, string | Record<string, string>>): Record<string, string>;
  }
  