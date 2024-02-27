import Image from "next/image";
import styles from "./page.module.css";
import Alert from '@mui/material/Alert';


export default function Home() {
  return (
    <main className={styles.main}>
      <Alert severity="success">This is a success Alert.</Alert>
    </main>
  );
}
