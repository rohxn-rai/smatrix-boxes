This is a assignment project provided by **Edxso** for the role of **Full Stack Developer**. This project is made on **NextJS** Framework along with **Tailwind CSS** for styling.

### The App has 3 major tasks

1. Creating a 3x3 Matrix.
2. When the boxes are clicked they change colour to green.
3. When the last box is clicked they all change colour to orange in the same sequence that they were clicked in (Task 2 sequence).

## Task - 1

![home](/public/home.png)

## Task - 2

![clicks](/public/clicks.png)

## Task - 3

![updateclicks](/public/updateclicks.png)

## Known Issues

When the restart button is clicked during the Task - 3, the app is unable to recognize a stop for changing colours. This only happens if all the boxes have not turned to orange after the last box is clicked and the user clicks restart.

## Framework

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load a custom font that I personally prefer.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
