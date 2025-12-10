import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "~/components/Image";
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/f9ce554d025b4706351928dd399de887~tplv-tiktokx-cropcenter:720:720.jpeg?dr=14579&refresh_token=08db7a73&x-expires=1765166400&x-signature=SP4FwjysrM%2BCfrYq7I0t54DRlSg%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1" alt="Hoa" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Hoa Dep Trai</span>
                    <FontAwesomeIcon className={cx('check')} icon="fa-solid fa-circle-check" />
                </h4>
                <span className={cx('username')}>hoadptrai</span>
            </div>

        </div>
    );
}
export default AccountItem;