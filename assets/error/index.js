"use strict";
import React from "react";
import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';

// error less
import "./index.less";
// pic
import pic_404 from "./404_bg.svg";

class Error extends React.Component {
    constructor(props) {
        super(props);
    }
    handleBack = () => {
        let { history } = this.props;
        history.goBack();
    };
    handleRef = () => {
        window.location.reload();
    };
    // renderBtn() {
    // 	let error = this.props.error || 404;
    // 	if (error == 101) {
    // 		return (
    // 			<div className={style.backButton} onClick={this.handleRef}>
    //                 刷新
    //             </div>
    // 		);
    // 	}
    // }
    render() {
        let text = this.props.text || "抱歉，你访问的页面不存在";
        return (
            <div className="error-box">
                <img src={pic_404} />
                <div className="err-right">
                    <div className="error-text">
                        <span>404</span>
                        <span>{text}</span>
                    </div>
                    <Button type="primary" onClick={this.handleBack}>
                        返回上一页
                    </Button>
                    {/* {this.renderBtn()} */}
                </div>
            </div>
        );
    }
}

export default Error;
