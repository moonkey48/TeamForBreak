import React from 'react';
import s from './makeRoom.module.css';

const MakeRoom = () => {
    return <div className={s.container}>
        <div className={s.popup}>
            <form>
                <dl>
                    <dt>타이틀</dt>
                    <dd>
                        <input type="text" />
                    </dd>
                </dl>
                <dl>
                    <dt>설명</dt>
                    <dd>
                        <textarea cols={30} rows={10}></textarea>
                    </dd>
                </dl>
                <dl>
                    <dt>목표날짜</dt>
                    <dd>
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                    </dd>
                </dl>
                <dl>
                    <dt>실패 벌금</dt>
                    <dd>
                        <input type="text" />
                        <p>1회 실패시 누적되는 벌금입니다.<br />나중에 수정가능합니다.🙃
                        </p>
                    </dd>
                </dl>
            </form>
            <h3 className={s.message}>새로운 팀을 생성하신 스타터님께서는 Edit 페이지에서<br />참여코드를 원하는 팀원분들께 공유해주세요.</h3>
            <div className={s.buttonBox}>
                <button>취소</button>
                <button>팀 생성하기</button>
            </div>
        </div>
    </div>
}

export default MakeRoom;