import PageNav from "../components/PageNav";
import Spinner from "../components/Spinner";
import styles from "./Menu.module.css";

function Menu({ menu, isLoading }) {
  if (isLoading) return <Spinner />;

  return (
    <div>
      <PageNav />
      <ul className={styles.menu}>
        <h2 className={styles.title}>Our Menu</h2>
        {menu.map((menu) => (
          <li key={menu.id} menu={menu}>
            <div className={styles.container}>
              <p className={styles.name}>{menu.name}</p>
              <p className={styles.price}>{menu.price}</p>
            </div>
            <p className={styles.description}>{menu.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
