import s from './App.module.scss'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
	return (
		<div className={s.container}>
			<Header />
			<Main />
			<Sidebar />
		</div>
	)
}

export default App
