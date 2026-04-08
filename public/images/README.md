# Blend Men's Grooming — Images

Place your images in this folder and reference them in the app as `/images/filename.ext`.

## Recommended images to add:

| File name          | Usage                          | Recommended size  |
|--------------------|--------------------------------|-------------------|
| `hero-barber.jpg`  | Hero section portrait          | 800×1100px        |
| `gallery-1.jpg`    | Gallery grid                   | 600×600px         |
| `gallery-2.jpg`    | Gallery grid                   | 600×600px         |
| `gallery-3.jpg`    | Gallery grid                   | 600×600px         |
| `gallery-4.jpg`    | Gallery grid                   | 600×600px         |
| `gallery-5.jpg`    | Gallery grid                   | 600×600px         |
| `gallery-6.jpg`    | Gallery grid                   | 600×600px         |
| `gallery-7.jpg`    | Gallery grid                   | 600×600px         |
| `gallery-8.jpg`    | Gallery grid                   | 600×600px         |
| `about-shop.jpg`   | About / interior shot          | 1200×800px        |
| `logo.png`         | Brand logo (transparent bg)    | 400×200px         |

## Usage in Next.js

```tsx
import Image from "next/image";

<Image
  src="/images/hero-barber.jpg"
  alt="Blend barber"
  width={800}
  height={1100}
  priority
/>
```

Once you add images, replace the placeholder divs in `app/page.tsx` with `<Image>` components using the paths above.
