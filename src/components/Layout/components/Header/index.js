import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faUser,
  faCoins,
  faGear,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import { InboxIcon, MessageIcon, UploadIcon } from "~/components/Icons";
import Search from "../Search";
const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  },
];


function Header() {
  const currentUser = true;
  const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: "View profile",
        to: "/hungnguyenquang221",
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: "Get coins",
        to: "/coins",
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: "Settings",
        to: "/settings",
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: "Log out",
        to: "/logout",
        separate: true,
    },
]
  
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "language":
        // handle change language
        console.log(menuItem);
        break;
      default:
    }
  };
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <img src={images.logo} alt="Tiktok" />
        <Search />
        <div className={cx("actions")}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} offset={[10, 10]} content="Upload video" placement="bottom">
                  <button className={cx('action-btn')}>
                    <UploadIcon />
                  </button>
              </Tippy>
              <Tippy 
                delay={[0,50]}
                content = "Message"
                placement="bottom"
              >
                <button className={cx('action-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content ="Inbox" placement="bottom">
                <button className={cx('action-btn')}>
                  <InboxIcon />
                  <span className={cx('badge')}>24</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}
          <Menu items={currentUser ? userMenu: MENU_ITEMS} onChange={handleMenuChange}>
            {
                currentUser ? (
                <img
                  className={cx("user-avatar")}
                  src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/f9ce554d025b4706351928dd399de887~tplv-tiktokx-cropcenter:720:720.jpeg?dr=14579&refresh_token=08db7a73&x-expires=1765166400&x-signature=SP4FwjysrM%2BCfrYq7I0t54DRlSg%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
                  alt="Nguyễn Hưng"
                  fallback = "https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/f9ce554d025b4706351928dd399de887~tplv-tiktokx-cropcenter:720:720.jpeg?dr=14579&refresh_token=7262fb98&x-expires=1765512000&x-signature=%2Fw7xO1kggM6wpNOX7QpZRwPonUI%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
                />
                ) : (
                    <button className={cx("more-btn")}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>
                )
            }
            
          </Menu>
        </div>
      </div>
    </header>
  );
}
export default Header;
