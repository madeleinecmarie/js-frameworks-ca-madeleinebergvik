import styles from "../../styles/Home.module.css";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <div className={styles.container}>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>

            {session ? (
              <div>
                <li>
                  <Link href="/admin">Admin</Link>
                </li>
                <button onClick={() => signOut()}>Sign Out</button>
              </div>
            ) : (
              <button onClick={() => signIn()}>Sign In</button>
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
}
