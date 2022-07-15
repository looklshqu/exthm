import { Link } from "react-router-dom";
import empty from "../img/empty.png";

function TotalMonitoring() {
  return (
    <>
      <div className="tap_wrap_m">
        <ul className="tap_menu_m">
          <Link to="">
            <li className="on">상세</li>
          </Link>
          <Link to="">
            <li>도면</li>
          </Link>
        </ul>
      </div>
      <div className="center_wrap_100" style={{ minHeight: "690px" }}>
        <ul className="m_loader">
          <li className="loader">
            <strong>·</strong>
            <Link to="">
              로더(Loader) 통신 에러 :
              <strong>
                <span>0</span> / <span>1</span>
              </strong>
            </Link>
          </li>
          <li className="loader">
            <strong>·</strong>
            <Link to="">
              로더(Loader) 전원 OFF :
              <strong>
                <span>0</span> / <span>1</span>
              </strong>
            </Link>
          </li>
          <li className="loader">
            <strong>·</strong>
            <Link to="">
              로거(Logger) 통신 에러 :
              <strong>
                <span>0</span> / <span>1</span>
              </strong>
            </Link>
          </li>
          <li className="loader">
            <strong>·</strong>
            <Link to="">
              로거(Logger) 전원 OFF :
              <strong>
                <span>0</span> / <span>1</span>
              </strong>
            </Link>
          </li>
          <li className="loader">
            <strong>·</strong>
            <Link to="">
              센서 경보 발생 :
              <strong>
                <span>0</span> / <span>1</span>
              </strong>
            </Link>
          </li>
          <li className="loader">
            <strong>·</strong>
            자동 경보 시스템 : 정상
            <strong>
              <span></span>
            </strong>
          </li>
        </ul>
        <table
          cellPadding={0}
          cellSpacing={0}
          border={0}
          width="100px"
          className="table_logger"
        >
          <tbody>
            <tr>
              <td style={{ verticalAlign: "top" }}>
                <div>
                  <table className="ta_list">
                    <tbody>
                      <tr className="bar">
                        <th className="bg_no">
                          로거
                          <br />
                          번호
                        </th>
                        <th>센서이름</th>
                        <th colSpan={2}>센서값</th>
                        <th>
                          로거
                          <br />
                          상태
                        </th>
                      </tr>
                      <tr className="list_100">
                        <td className="loger" rowSpan={2}>
                          <span>1</span>
                        </td>
                        <td className="name" style={{ hight: "30px" }}>
                          <span>서버실 습도</span>
                        </td>
                        <td className="tem_num">
                          <span className="c_b2">74.2</span>
                          <span></span>
                        </td>
                        <td className="tem_sign">
                          <img src={empty} alt="" />
                        </td>
                        <td rowSpan={2} className="tem_last">
                          <img src={empty} alt="" /> <img src={empty} alt="" />
                        </td>
                      </tr>
                      <tr className="list_100">
                        <td className="name" style={{ hight: "30px" }}>
                          <span>서버실 온도</span>
                        </td>
                        <td className="tem_num">
                          <span className="c_b2">21.3</span>
                          <span></span>
                        </td>
                        <td className="tem_sign">
                          <img src={empty} alt="" />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={5} className="td_li2"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
              <td style={{ verticalAlign: "top" }}>
                <div>
                  <table className="ta_list">
                    <tbody>
                      <tr className="bar">
                        <th className="bg_no">
                          로거
                          <br />
                          번호
                        </th>
                        <th>센서이름</th>
                        <th colSpan={2}>센서값</th>
                        <th>
                          로거
                          <br />
                          상태
                        </th>
                      </tr>
                      <tr className="list_100">
                        <td className="loger" rowSpan={2}>
                          <span>1</span>
                        </td>
                        <td className="name" style={{ hight: "30px" }}>
                          <span>서버실 습도</span>
                        </td>
                        <td className="tem_num">
                          <span className="c_b2">74.2</span>
                          <span></span>
                        </td>
                        <td className="tem_sign">
                          <img src={empty} alt="" />
                        </td>
                        <td rowSpan={2} className="tem_last">
                          <img src={empty} alt="" /> <img src={empty} alt="" />
                        </td>
                      </tr>
                      <tr className="list_100">
                        <td className="name" style={{ hight: "30px" }}>
                          <span>서버실 온도</span>
                        </td>
                        <td className="tem_num">
                          <span className="c_b2">21.3</span>
                          <span></span>
                        </td>
                        <td className="tem_sign">
                          <img src={empty} alt="" />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={5} className="td_li2"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
              <td style={{ verticalAlign: "top" }}>
                <div>
                  <table className="ta_list">
                    <tbody>
                      <tr className="bar">
                        <th className="bg_no">
                          로거
                          <br />
                          번호
                        </th>
                        <th>센서이름</th>
                        <th colSpan={2}>센서값</th>
                        <th>
                          로거
                          <br />
                          상태
                        </th>
                      </tr>
                      <tr className="list_100">
                        <td className="loger" rowSpan={2}>
                          <span>1</span>
                        </td>
                        <td className="name" style={{ hight: "30px" }}>
                          <span>서버실 습도</span>
                        </td>
                        <td className="tem_num">
                          <span className="c_b2">74.2</span>
                          <span></span>
                        </td>
                        <td className="tem_sign">
                          <img src={empty} alt="" />
                        </td>
                        <td rowSpan={2} className="tem_last">
                          <img src={empty} alt="" /> <img src={empty} alt="" />
                        </td>
                      </tr>
                      <tr className="list_100">
                        <td className="name" style={{ hight: "30px" }}>
                          <span>서버실 온도</span>
                        </td>
                        <td className="tem_num">
                          <span className="c_b2">21.3</span>
                          <span></span>
                        </td>
                        <td className="tem_sign">
                          <img src={empty} alt="" />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={5} className="td_li2"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
              <td style={{ verticalAlign: "top" }}>
              <div>
                  <table className="ta_list">
                    <tbody>
                      <tr className="bar">
                        <th className="bg_no">
                          로거
                          <br />
                          번호
                        </th>
                        <th>센서이름</th>
                        <th colSpan={2}>센서값</th>
                        <th>
                          로거
                          <br />
                          상태
                        </th>
                      </tr>
                      <tr className="list_100">
                        <td className="loger" rowSpan={2}>
                          <span>1</span>
                        </td>
                        <td className="name" style={{ hight: "30px" }}>
                          <span>서버실 습도</span>
                        </td>
                        <td className="tem_num">
                          <span className="c_b2">74.2</span>
                          <span></span>
                        </td>
                        <td className="tem_sign">
                          <img src={empty} alt="" />
                        </td>
                        <td rowSpan={2} className="tem_last">
                          <img src={empty} alt="" /> <img src={empty} alt="" />
                        </td>
                      </tr>
                      <tr className="list_100">
                        <td className="name" style={{ hight: "30px" }}>
                          <span>서버실 온도</span>
                        </td>
                        <td className="tem_num">
                          <span className="c_b2">21.3</span>
                          <span></span>
                        </td>
                        <td className="tem_sign">
                          <img src={empty} alt="" />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={5} className="td_li2"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
              <td style={{ verticalAlign: "top" }}>
              <div>
                  <table className="ta_list">
                    <tbody>
                      <tr className="bar">
                        <th className="bg_no">
                          로거
                          <br />
                          번호
                        </th>
                        <th>센서이름</th>
                        <th colSpan={2}>센서값</th>
                        <th>
                          로거
                          <br />
                          상태
                        </th>
                      </tr>
                      <tr className="list_100">
                        <td className="loger" rowSpan={2}>
                          <span>1</span>
                        </td>
                        <td className="name" style={{ hight: "30px" }}>
                          <span>서버실 습도</span>
                        </td>
                        <td className="tem_num">
                          <span className="c_b2">74.2</span>
                          <span></span>
                        </td>
                        <td className="tem_sign">
                          <img src={empty} alt="" />
                        </td>
                        <td rowSpan={2} className="tem_last">
                          <img src={empty} alt="" /> <img src={empty} alt="" />
                        </td>
                      </tr>
                      <tr className="list_100">
                        <td className="name" style={{ hight: "30px" }}>
                          <span>서버실 온도</span>
                        </td>
                        <td className="tem_num">
                          <span className="c_b2">21.3</span>
                          <span></span>
                        </td>
                        <td className="tem_sign">
                          <img src={empty} alt="" />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={5} className="td_li2"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TotalMonitoring;
