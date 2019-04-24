"use strict";
import React from "react";

// antd 全局css
// import 'antd/dist/antd.less';  // or 'antd/dist/antd.css'

import Form from 'antd/lib/form';
import 'antd/lib/form/style/css';

import Row from 'antd/lib/row';
import 'antd/lib/row/style/css';

import Col from 'antd/lib/col';
import 'antd/lib/col/style/css';

import Input from 'antd/lib/input';
import 'antd/lib/input/style/css';

import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';

import Icon from 'antd/lib/icon';
import 'antd/lib/icon/style/css';

import DatePicker from 'antd/lib/date-picker';
import 'antd/lib/date-picker/style/css';

import Select from 'antd/lib/select';
import 'antd/lib/select/style/css';

import AutoComplete from 'antd/lib/auto-complete';
import 'antd/lib/auto-complete/style/css';

import Cascader from 'antd/lib/cascader';
import 'antd/lib/cascader/style/css';

// 样式
import "./index.less";
// 规则
import {rules} from "@edwardxyt/gws-javascripts";

const { RangePicker } = DatePicker;
const { Option } = Select;

class FilterComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			expand: false, //默认为不展开的状态
			fields: [],
			dataSource: []
		};
	}

	/**
	 * FIXME:
	 * TODO:
	 */

	// 重置按钮
	handleReset = () => {
		this.props.form.resetFields();
	};

	// 展开与收起
	toggle = () => {
		const { expand } = this.state;
		this.setState({ expand: !expand });
	};

	componentDidMount() {
		const { history, data } = this.props;
	}
	render() {
		const { getFieldDecorator } = this.props.form;
		const count = this.state.expand ? 10 : 3;
		const { data } = this.props;

		const fields = data.map((item, index) => {
			// 输入框
			if (item.type === "text") {
				return (
					<Col
                        span={8}
                        key={index}
                        style={{ display: index < count ? "block" : "none" }}
                    >
                        <Form.Item label={item.label}>
                            {getFieldDecorator(item.name, {
                                rules: item.rules,
                                initialValue: item.initialValue
                            })(
                                <Input
                                    style={{ width: "100%" }}
                                    placeholder={item.placeholder}
                                />
                            )}
                        </Form.Item>
                    </Col>
				);
			}

			// 日期
			if (item.type === "datePicker") {
				return (
					<Col
                        span={8}
                        key={index}
                        style={{ display: index < count ? "block" : "none" }}
                    >
                        <Form.Item label={item.label}>
                            {getFieldDecorator(item.name, {
                                rules: item.rules,
                                initialValue: item.initialValue
                            })(
                                <DatePicker
                                    style={{ width: "100%" }}
                                    format="YYYY/MM/DD"
                                    placeholder={item.placeholder}
                                />
                            )}
                        </Form.Item>
                    </Col>
				);
			}

			// 日期范围
			if (item.type === "rangePicker") {
				return (
					<Col
                        span={8}
                        key={index}
                        style={{ display: index < count ? "block" : "none" }}
                    >
                        <Form.Item label={item.label}>
                            {getFieldDecorator(item.name, {
                                rules: item.rules,
                                initialValue: item.initialValue
                            })(<RangePicker style={{ width: "100%" }} />)}
                        </Form.Item>
                    </Col>
				);
			}
			// 下拉
			if (item.type === "select") {
				return (
					<Col
                        span={8}
                        key={index}
                        style={{ display: index < count ? "block" : "none" }}
                    >
                        <Form.Item label={item.label}>
                            {getFieldDecorator(item.name, {
                                rules: item.rules,
                                initialValue: item.initialValue
                            })(
                                <Select
                                    showSearch
                                    style={{ width: "100%" }}
                                    placeholder="请选择"
                                >
                                    {item.options.map((item, index) => {
                                        return (
                                            <Option
                                                key={index}
                                                value={item.value}
                                            >
                                                {item.title}
                                            </Option>
                                        );
                                    })}
                                </Select>
                            )}
                        </Form.Item>
                    </Col>
				);
			}
			// 补全
			if (item.type === "autoComplete") {
				return (
					<Col
                        span={8}
                        key={index}
                        style={{ display: index < count ? "block" : "none" }}
                    >
                        <Form.Item label={item.label}>
                            {getFieldDecorator(item.name, {
                                rules: item.rules
                            })(
                                <AutoComplete
                                    style={{ width: "100%" }}
                                    dataSource={item.dataSource}
                                    onSelect={this.autoCompleteSelect}
                                    onSearch={item.onSearch}
                                    filterOption={(inputValue, option) =>
                                        option.props.children
                                            .toUpperCase()
                                            .indexOf(
                                                inputValue.toUpperCase()
                                            ) !== -1
                                    }
                                    placeholder={item.placeholder}
									allowClear
                                />
                            )}
                        </Form.Item>
                    </Col>
				);
			}
			// 级联
			if (item.type === "cascader") {
				return (
					<Col
                        span={8}
                        key={index}
                        style={{ display: index < count ? "block" : "none" }}
                    >
                        <Form.Item label={item.label}>
                            {getFieldDecorator(item.name, {
                                rules: item.rules
                            })(
                                <Cascader
                                    showSearch
                                    style={{ width: "100%" }}
                                    options={item.options}
                                    onChange={this.onChangeCascader}
                                    placeholder="请选择"
                                />
                            )}
                        </Form.Item>
                    </Col>
				);
			}
		});
		return (
			<Form
                className="ant-advanced-search-form"
                onSubmit={this.props.cb(this.props.form)}
            >
                <Row gutter={24}>
                    {fields}
                    {data.length < 3 ? (
                        <Col span={8} key={3} style={{ paddingTop: "27px" }}>
                            <Button htmlType="submit" type="primary">
                                搜索
                            </Button>
                            <Button
                                style={{ marginLeft: 8 }}
                                onClick={this.handleReset}
                            >
                                重置
                            </Button>
                        </Col>
                    ) : null}
                </Row>
                {/* 过滤器大于3时，搜索重置按钮另起一行，且收起展开按钮出现 */}
                {data.length > 2 ? (
                    <Row>
                        <Col span={24} style={{ textAlign: "right" }}>
                            <Button htmlType="submit" type="primary">
                                搜索
                            </Button>
                            <Button
                                style={{ marginLeft: 8 }}
                                onClick={this.handleReset}
                            >
                                重置
                            </Button>
                            {data.length > 3 ? (
                                <a
                                    style={{ marginLeft: 8, fontSize: 12 }}
                                    onClick={this.toggle}
                                >
                                    {this.state.expand ? "收起" : "展开"}
                                    <Icon
                                        type={this.state.expand ? "up" : "down"}
                                    />
                                </a>
                            ) : null}
                        </Col>
                    </Row>
                ) : null}
            </Form>
		);
	}
}
const FilterForm = Form.create()(FilterComponent);
export default FilterForm;
