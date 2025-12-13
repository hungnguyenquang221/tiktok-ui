import styles from './Sidebar.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);
function SideBar() {
    return <aside className={cx('wrapper')}><h2>Sidebar</h2></aside>;
}
export default SideBar;