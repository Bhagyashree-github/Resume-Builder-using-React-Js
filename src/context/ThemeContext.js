import {createContext, useState} from 'react'
import '../Style/theme.css'

const ThemeContext = createContext(null)

export default ThemeContext;



// const [theme, setTheme] = useState('light')
// const toggleTheme = ()=>{
//     setTheme(theme ==='light'? 'dark':'light')
// }
// const color = theme ==='light'? '#333' : "#fff"
// const backgroundColor = theme ==='light'? '#fff':'#333'

// document.body.style.color = color;
// document.body.style.backgroundColor = backgroundColor