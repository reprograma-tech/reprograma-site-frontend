import styles from './styles.module.scss';
import {useEffect, useState} from 'react';

export function Header(){
  const [showBackground, setShowBackground] = useState(false)
  const [showSubmenu, setShowSubmenu] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  const handleScroll = () => {
    setShowBackground(window.scrollY >= 300)
  }

  const handleSubmenu= () => {
    setShowSubmenu(!showSubmenu)
  }

  return (
    <header className={`${styles.header} ${showBackground?styles.headerFilled:""}`}>
      <div>
        <a href="/"><img src={showBackground?'/images/logo-reprograma.png':'/images/logo-reprograma-reduzido.png'}/></a>   
        <nav className={styles.navigation}>
          <ul className={styles.menu}>
              <li id="menu-ensino" onClick={handleSubmenu}>Ensino
                <div  className={`${styles.submenu} ${showSubmenu ?styles.showSubmenu:""}`}>
                  <a href="/#cursos">Cursos</a>
                  <a href="projetos.html">+ Projetos</a>
                </div>
              </li>
              <li><a href="/equipe">Equipe</a></li>
              <li><a href="parcerias.html">Parceiros</a></li>
              <li><a href="https://www.reprograma.com.br/speed-hiring">Speed Hiring</a></li>
          </ul>
        </nav>
      </div>
      </header>
  )
}

{/* <div className={styles.hamburguer}>
<div className={styles.bar1}></div>
<div className={styles.bar2}></div>
<div className={styles.bar3}></div>
</div> */}

{/* <div className={styles.navMobile}>
<ul className={styles.mobileHeaderUl}>
    <li><a href="https://www.reprograma.com.br/#courses">Cursos</a></li>
    <li><a href="projetos.html">+ Projetos</a></li>
    <li><a href="equipe.html">Equipe</a></li>
    <li><a href="parcerias.html">Parceiros</a></li>
    <li><a href="https://www.reprograma.com.br/speed-hiring">Speed Hiring</a></li>
</ul>
</div> */}
