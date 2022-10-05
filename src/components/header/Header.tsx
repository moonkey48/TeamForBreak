import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return(
        <header>
            <div className={s.header_left}>
                <div className={s.logo}></div>
                <div className={s.colBox}>
                    <h3 className={`${s.t_small} ${s.color_lightGrey}`} style={{marginBottom:'6px'}}>Team Goal</h3>
                    <h3 className={`${s.t_large} ${s.color_grey}`}>Daily Design</h3>
                </div>
                <div className={s.colBox}>
                    <h3 className={`${s.t_small} ${s.color_lightGrey}`} style={{marginBottom:'6px'}}>진행도</h3>
                    <h3 className={s.progressBox}>
                        <div className={`${s.t_small} ${s.amount}`}>30%</div>
                        <div className={s.progress_bar}></div>
                    </h3>
                </div>
                <div className={s.fineBox}>
                    <h3 className={`${s.t_small} ${s.color_grey}`}>모인벌금</h3>
                    <h3 className={`${s.t_small} ${s.color_grey}`}>40,000원</h3>
                </div>
            </div>
            <button className={s.editButton}></button>
        </header>
    )
}

export default Header;