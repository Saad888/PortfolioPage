import styles from '@/styles/main.module.scss'
import Image from 'next/image'

export default function Main () {
  return (
    <>
      <div className={styles.parent}>
        <Backslash type={'main-backslash'} />
        <div className={styles.container}>
          <Backslash type={'secondary-backslash'} />
          <Image src="/assets/main.jpg" alt="main" className={styles.mainImg} width={4000} height={4000} />
        </div>
      </div>
    </>
  )
}

function Backslash (props: any) {
  return <div className={`${styles.backslash} ${styles[props.type]}`} />
}
