module.exports = {
  darkMode: 'class',
  purge: ['./src/**/*.md', './_includes/**/*.liquid'],
  theme: {
    extend: {
      typography: (theme) => ({
        dark: {
          css: {
            color: "white",
            a: {
              color: "#ff4848",
              "&:hover": {
                color: "#b30000",
              },
            },
            h1: {
              color: "white",
            },
            h2: {
              color: "white",
            },
            h3: {
              color: "white",
            },
            h4: {
              color: "white",
            },
            h5: {
              color: "white",
            },
            h6: {
              color: "white",
            },
            th: {
              color: "white",
            },
            strong: {
              color: "white",
            },
            "blockquote p": {
              color: "white",
            },
            code: {
              color: "white",
            },
            figcaption: {
              color: theme("colors.gray.500"),
            },
            "::selection": {
              backgroundColor: "white",
            },
          },
        }
      })
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
      textDecoration: ['active']
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
