import Menu from './Menu';
import MenuItem from './Menu/MenuItem';
import styles from './Sidebar.module.scss';
import classnames from 'classnames/bind';
import { HomeIcon, HomeActiveIcon, UserGroupIcon, UserGroupActiveIcon, LiveIcon, LiveActiveIcon } from '~/components/Icons';
import config from '~/config';
const cx = classnames.bind(styles);
function SideBar() {
    return <aside className={cx('wrapper')}>
        <Menu>
            <MenuItem title = "For Your" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />}/>
            <MenuItem title = "Following" to={config.routes.following} icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon />}/>
            <MenuItem title = "Live" to={config.routes.live} icon ={<LiveIcon />} activeIcon={<LiveActiveIcon />}/>
        </Menu>
    </aside>;
}
export default SideBar;