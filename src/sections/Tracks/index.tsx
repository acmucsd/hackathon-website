import { data } from './tracks';
import s from './style.module.css';

export default function Tracks() {
  return (
    <div className={s.container} id="tracks">
      <div>
        <h1 className={s.header}>Tracks</h1>
        {data.map(({ title, description }) => (
          <>
            <h1>{title}</h1>
            <h3 className={s.description}>{description}</h3>
          </>
        ))}
      </div>
    </div>
  );
}
