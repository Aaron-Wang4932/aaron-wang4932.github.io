function App() {
  return(
      <main>
        <h1 className="text-4xl font-bold">
            hi my portfolio is wip
            <a
                href="https://www.nyan.cat/"
                className="opacity-100 hover:opacity-30 transition-opacity duration-200">
                😼😼😼
            </a>
        </h1>
        <h2>here is some info for now:</h2>
        <h3>email (UofT):</h3>
        <code>
            <a
                href="mailto:aaronh.wang@mail.utoronto.ca"
                className="underline text-blue-300 hover:no-underline hover:text-blue-500 transition-colors"
                target={"_blank"}
                rel="noopener noreferrer">
                aaronh.wang@mail.utoronto.ca
            </a>
        </code>
        <h3>email (personal):</h3>
        <code>
            <a
                href="mailto:aaronw4932@gmail.com"
                className="underline text-blue-300 hover:no-underline hover:text-blue-500 transition-colors"
                target={"_blank"}
                rel="noopener noreferrer">
                aaronw4932@gmail.com
            </a>
        </code>
        <h3>linkedin:</h3>
        <code>
            <a
                href="https://www.linkedin.com/in/aaron-wang-046529318/"
                className="underline text-blue-300 hover:no-underline hover:text-blue-500 transition-colors"
                target={"_blank"}
                rel="noopener noreferrer">
                click me!
            </a>
        </code>
        <h3>discord (add me if u wanna talk!):</h3>
        <code>thunderborb.</code>
      </main>
  )
}

export default App
