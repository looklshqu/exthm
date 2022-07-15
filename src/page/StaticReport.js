import { Link } from "react-router-dom";
import subt from "../img/sub_t.gif";

function StaticReports() {
  return (
    <>
      <p className="local_t">
        <img src="../img/dot2.gif" alt="" /> 통합모니터링 {">"} 통계 {">"}{" "}
        <span className="t_c">통계테이블</span>
      </p>
      <ul className="tap_menu">
        <li className="on">
          <Link to="">통계테이블</Link>
        </li>
        <li>
          <Link to="">그래프</Link>
        </li>
      </ul>
      <div style={{ content: "", display: "block", clear: "both" }}> </div>
      <p className="sub_title">통계테이블</p>

      <div className="sub_content">
        <p>
          <img src={subt} />
        </p>
        <div className="ss_cont">
          <table
            width={1200}
            cellPadding={0}
            cellSpacing={0}
            border={0}
            align="center"
          >
            <tbody>
              <tr>
                <td width={300} valign="top">
                  <table
                    width={280}
                    border={0}
                    cellSpacing={1}
                    bgcolor="#9c9c9c"
                    align="center"
                  >
                    <tbody>
                      <tr bgcolor="#FFFFFF">
                        <td>
                          <table
                            width={280}
                            cellPadding={0}
                            align="center"
                            cellSpacing={0}
                            border={0}
                          >
                            <tbody>
                              <tr className="trTable">
                                <td height={30} width={55}></td>
                                <td width={130}>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Date</b>
                                </td>
                                <td width="40">
                                  &nbsp;<b>Hour</b>
                                </td>
                                <td width="40">
                                  &nbsp;<b>Min</b>
                                </td>
                                <td width="15"></td>
                              </tr>
                              <tr className="trTable">
                                <td height="33" align="right">
                                  <b>From</b>&nbsp;
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    className="input-text"
                                    size={11}
                                  />
                                </td>
                                <td>
                                  <select defaultValue={0}>
                                    <option value={0}>0</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={8}>8</option>
                                    <option value={9}>9</option>
                                    <option value={10}>10</option>
                                    <option value={11}>11</option>
                                    <option value={12}>12</option>
                                    <option value={13}>13</option>
                                    <option value={14}>14</option>
                                    <option value={15}>15</option>
                                    <option value={16}>16</option>
                                    <option value={17}>17</option>
                                    <option value={18}>18</option>
                                    <option value={19}>19</option>
                                    <option value={20}>20</option>
                                    <option value={21}>21</option>
                                    <option value={22}>22</option>
                                    <option value={23}>23</option>
                                  </select>
                                </td>
                                <td>
                                  <select defaultValue={0}>
                                    <option value={0}>0</option>
                                    <option value={5}>5</option>
                                    <option value={10}>10</option>
                                    <option value={15}>15</option>
                                    <option value={20}>20</option>
                                    <option value={25}>25</option>
                                    <option value={30}>30</option>
                                    <option value={35}>35</option>
                                    <option value={40}>40</option>
                                    <option value={45}>45</option>
                                    <option value={50}>50</option>
                                    <option value={55}>55</option>
                                  </select>
                                </td>
                                <td></td>
                              </tr>
                              <tr className="trTable">
                                <td height={33} align="right">
                                  <b>~To</b>&nbsp;
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    size={11}
                                    className="input-text"
                                  />
                                </td>
                                <td>
                                  <select defaultValue={23}>
                                    <option value={0}>0</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={8}>8</option>
                                    <option value={9}>9</option>
                                    <option value={10}>10</option>
                                    <option value={11}>11</option>
                                    <option value={12}>12</option>
                                    <option value={13}>13</option>
                                    <option value={14}>14</option>
                                    <option value={15}>15</option>
                                    <option value={16}>16</option>
                                    <option value={17}>17</option>
                                    <option value={18}>18</option>
                                    <option value={19}>19</option>
                                    <option value={20}>20</option>
                                    <option value={21}>21</option>
                                    <option value={22}>22</option>
                                    <option value={23}>23</option>
                                  </select>
                                </td>
                                <td>
                                  <select defaultValue={55}>
                                    <option value={0}>0</option>
                                    <option value={5}>5</option>
                                    <option value={10}>10</option>
                                    <option value={15}>15</option>
                                    <option value={20}>20</option>
                                    <option value={25}>25</option>
                                    <option value={30}>30</option>
                                    <option value={35}>35</option>
                                    <option value={40}>40</option>
                                    <option value={45}>45</option>
                                    <option value={50}>50</option>
                                    <option value={55}>55</option>
                                  </select>
                                </td>
                                <td></td>
                              </tr>
                              <tr>
                                <td colSpan={4} height={30} align="center" valign="middle">
                                    <input type="radio" name="radio" defaultChecked="checked" /><b>10 Min</b>
                                    &nbsp;&nbsp;&nbsp;
                                    <input type="radio" name="radio" /><b>1 Hour </b>
                                </td>
                              </tr>
                              <tr>
                                <td colSpan={4} height={30} align="center" valign="middle">
                                    &nbsp;&nbsp;&nbsp;
                                    <input type="button" className="btn" onClick={() => {}} value="조회" />
                                </td>
                              </tr>
                              <tr>
                                <td colSpan={4} height={5} align="center" valign="middle"></td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <br />

                  <table width={280} align="center" border={0} cellSpacing={1} className="hi_td">
                    <tbody>
                        <tr className="trTable" bgcolor="#FFFFFF">
                            <th colSpan={4} align="center" valign="middle">
                                <b>로거선택&nbsp;:&nbsp;</b>&nbsp;&nbsp;&nbsp;&nbsp;
                                <Link to="">[ 전체선택</Link>
                                <Link to="">/ 전체해제 </Link>
                                <Link to="">/ 반전 ]</Link>
                            </th>
                        </tr>
                        <tr bgcolor="#FFFFFF">
                            <td align="center" width="9%"></td>
                            <td align="left" style={{ wordBreak: "break-all", width: "41%"}}></td>
                        </tr>
                        <tr bgcolor="#FFFFFF">
                            <td align="center" style={{ verticalAlign: "middle", width: "9%"}}>
                                <input type="checkbox" name="jck" value="1|1" />
                            </td>
                            <td align="left" style={{ wordBreak: "break-all", width: "41%"}}>서버실 습도</td>
                            <td align="center" style={{ verticalAlign: "middle", width: "9%"}}>
                                <input type="checkbox" name="jck" value="1|2" />
                            </td>
                            <td align="left" style={{ wordBreak: "break-all", width: "41%"}}>서버실 온도</td>
                        </tr>
                    </tbody>
                  </table>
                  <br /><br />
                </td>
                <td width={900} valign="top" align="center">
                    <table width={890} align="center" border={0} cellSpacing={1} bgcolor="#FFFFFF">
                        <tbody>
                            <tr bgcolor="#FFFFFF">

                            </tr>
                        </tbody>
                    </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default StaticReports;
