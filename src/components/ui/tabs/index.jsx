import style from './index.module.scss';
import cn from 'classnames';
import { useState } from 'react';

const Tabs = ({ defaultValue, tabs }) => {
  const [active, setActive] = useState(defaultValue);

  return (
    <div className={style.Wrapper}>
			{/* Render tabs header  */}
      <div className={style.Header}>
        {tabs.map((tab) => (
          <div
            className={cn(style.Tab, {
              [style.Active]: active === tab.placeholder,
            })}
            onClick={() => setActive(tab.placeholder)}
            key={tab.placeholder}>
            {tab.placeholder}
          </div>
        ))}
      </div>
			{/* Render content in tabs */}
      <div className={style.Content}>
        {tabs.map((tab) => (active === tab.placeholder ? tab.content() : null))}
      </div>
    </div>
  );
};

export default Tabs;
