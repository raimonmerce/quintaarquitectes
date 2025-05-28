import Main from "./components/Main"
import './App.css'

function App() {

  const rootStyles = getComputedStyle(document.documentElement);
  const themeColor = rootStyles.getPropertyValue('--color-primary').trim();

  const metaTag = document.querySelector('meta[name="theme-color"]');
  if (metaTag && themeColor) {
    metaTag.setAttribute('content', themeColor);
  }


  return (
    <>
      <Main/>
    </>
  )
}

export default App
