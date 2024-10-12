import { workers } from './../../data/workers.js'
import s from './Main.module.scss'

function Main() {
	return (
		<main className={s.main}>
			<div className={s.contentWrapper}>
				<div className={s.desc}>
					<span className={s.desc__one}>Cотрудники</span>
					<span className={s.desc__two}>Кол-во смен</span>
					<span className={s.desc__three}>Клиентов</span>
					<span className={s.desc__four}>Заработано</span>
					<span className={s.desc__five}>Продано</span>
				</div>
				<div className={s.hr}></div>

				{workers.length > 0 &&
					workers.map((item, index) => (
						<div key={index}>
							<div className={s.workers}>
								<img className={s.workers__img} src={item.img} alt='' />
								<span className={s.workers__name}>{item.name}</span>
								<span className={s.workers__workingCount}>
									{item.workingCount}
								</span>
								<span className={s.workers__clientsCount}>
									{item.clientsCount}
								</span>
								<span className={s.workers__earn}>{item.earn}</span>
								<span className={s.workers__sold}>{item.sold}</span>
							</div>
							{index < workers.length - 1 && (
								<div className={s.workers__hr}></div>
							)}
						</div>
					))}
			</div>
		</main>
	)
}

export default Main
