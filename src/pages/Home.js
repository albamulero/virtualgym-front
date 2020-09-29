import React, { useEffect, useState, Component } from "react"
import { Image, Card, Col, Row, Divider } from "antd"
import { Link } from "react-router-dom"

const { Meta } = Card


function Home() {

  
  return (
    <div>
      <Image
        width="100%" 
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
      <div>
      <Divider orientation='left'></Divider>
        <Row gutter={16} >
          <Col >
            <Card
              style={{marginLeft: 20, marginBottom:30}}
                cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              } >
              <Meta
                title=""
                description="This is the description"
              />
            </Card>
          </Col>
          <Col >
            <Card
              style={{marginLeft: 20, marginBottom:30}}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              } >
              <Meta
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col >
            <Card
              style={{ marginLeft: 20, marginBottom:30}}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              } >
              <Meta
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
        </Row>
        <Row gutter={24} >
          <Col >
            <Card
              style={{ marginLeft: 20, marginBottom:30 }}
                cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              } >
              <Meta
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col >
            <Card
              style={{marginLeft: 20, marginBottom:30}}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              } >
              <Meta
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col >
            <Card
              style={{marginLeft: 20, marginBottom:30}}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              } >
              <Meta
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
        </Row>
        </div>
 
      </div>
    
        
  );
}
export default Home
