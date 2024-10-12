import s from './Header.module.scss'

function Header() {
	return (
		<header className={s.header}>
			<div className={s.left}>
				<span className={s.left__heading}>Сотрудники</span>
				<span className={s.left__period}>Выберите подходящий период</span>
			</div>
			<div className={s.right}>
				<div className={s.right__arrows}>
					<button className={s.right__arrow_left}>
						<img src='/src/images/arrow-left.svg' alt='' />
					</button>
					<div className={s.right__verticalLine}></div>
					<span className={s.right__date}>16 Сентябрь</span>
					<div className={s.right__verticalLine}></div>
					<button className={s.right__arrow_right}>
						<img src='/src/images/arrow-right.svg' alt='' />
					</button>
				</div>
				<button className={s.button}>Неделя</button>
				<button className={s.button}>Месяц</button>
				<button className={`${s.button} ${s.last}`}>Год</button>
				<button className={s.button_period}>Выбрать период</button>
			</div>
		</header>
	)
}

export default Header
