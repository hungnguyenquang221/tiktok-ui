import classNames from "classnames/bind";
import styles from './AccountPreview.module.scss'
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles)
function AccountPreivew() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/5c23b4d4c6752626bcc9668ad7bb0a20~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=08e728f6&x-expires=1766142000&x-signature=g%2FfHqEsgxvSA8g4WBwbzpS2QjwY%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=a1d2006b&idc=my" alt="" />
                <Button className={cx('follow-btn')} primary>Follow</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>meooconz</strong>
                    <FontAwesomeIcon className={cx('check')} icon = {faCheckCircle} />
                </p>
                <p className={cx('name')}>Mèo</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <strong className={cx('label')}>Followers </strong><strong className={cx('value')}>3.2M </strong>
                    <strong className={cx('label')}>Likes</strong>
                </p>
            </div>
        </div>
    );
}

export default AccountPreivew;