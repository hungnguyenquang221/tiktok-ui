import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass,  } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import images from '~/assets/images';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
const cx = classNames.bind(styles);
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        // fake API
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    return  <header className= {cx('wrapper')}>
        <div className= {cx('inner')}>
            <img src= {images.logo} alt="Tiktok" />
            <Tippy
                interactive
                visible={searchResult.length > 0}
                placement="bottom"
                offset={[0, 8]}
                appendTo={() => document.body}
                render={(attrs) => (
                    <div 
                        className={cx('search-result')} 
                        tabIndex={-1} 
                        {...attrs}
                        style={{ zIndex: 99999 }}
                    >
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PopperWrapper>
                    </div>
                )}
            >
            <div className = {cx('search')}>
                <input placeholder="Search accounts and videos" spellCheck = {false}/>
                <button className={cx('clear')}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                <FontAwesomeIcon className= {cx('loading')} icon={faSpinner} />
                
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
            </div>
            </Tippy>
            <div className={cx('actions')}>
                <Button text>Upload</Button>
                <Button primary>Log in</Button>
            </div>
        </div>
    </header>;
}
export default Header;