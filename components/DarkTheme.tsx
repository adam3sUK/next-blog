const DarkTheme = () => {
  return (
    <style jsx global>{`
    /* Dark Theme */
    :root {
      --background-color: rgb(16, 16, 16);
      --text-color: rgb(242, 242, 242);
      --link-color: rgb(227, 201, 0);
    }
  `}</style>
  )
}

export default DarkTheme;