import {Link} from 'react-router-dom';
import logo from '../img/logo.gif';
import modify from '../img/btn_modify1.gif';
import logout from '../img/btn_logout.gif';

function Top() {
    return (
        <>
            <div className="divTop">
                <div className="divTopSub">
                    <p className="logo">
                        <img src={logo} alt='logo' />
                    </p>
                    <ul className="top_menu">
                        <li><Link to="" className="ic_1">통합모니터링</Link></li>
                        <li><Link to="" className="ic_2">경보이력</Link></li>
                        <li><Link to="" className="ic_3">통계보고서</Link></li>
                        <li><Link to="" className="ic_4">접속기록</Link></li>
                        <li><Link to="" className="ic_5">환경설정</Link></li>
                    </ul>
                    <ul className="hi_admin">
                        <li className="hi">
                            <span>안녕하세요. 이승휘님</span>
                        </li>
                        <li>
                            <Link to=""><img src={modify} alt='정보수정' /></Link>
                            <Link to=""><img src={logout} alt='로그아웃' /></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Top;