import styles from './toolTip.module.scss';

const ToolTip = (props) => {
    const { text, id } = props;
    return (
        <button className={`${styles.tooltip} ${id === 1 ? styles.one : id === 2 ? styles.two : null}`}>
            {text}
        </button>
    )
}

export default ToolTip