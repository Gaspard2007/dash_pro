import React from 'react';
import { Col, Row, Divider} from 'antd';
import CardServiceSupp from './card-services-supp';

const GridServiceSupp: React.FC = () => (
  <>
    <Row gutter={[48, 32]}>
  <Col span={8}><CardServiceSupp/></Col>
  <Col span={8}><CardServiceSupp/></Col>
  <Col span={8}><CardServiceSupp/></Col>
</Row>
  </>
);

export default GridServiceSupp;