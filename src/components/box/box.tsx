import type { ComponentChildren } from 'preact';
import classNames from 'classnames';
import styles from './box.module.css';

interface BoxProps {
  className?: string;
  children?: ComponentChildren;
}

function Box(props: BoxProps) {
  return (
    <div className={classNames(styles.box, props.className)}>
      {props.children}
    </div>
  );
}

export default Box;