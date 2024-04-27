import React from 'react';
import { Col, Row, Divider} from 'antd';
import CardPostalouer from './card-postealouer';

const GridPosteaLouer: React.FC = () => (
  <>
    <Row gutter={[48, 32]}>
  <Col span={8}><CardPostalouer/></Col>
  <Col span={8}><CardPostalouer/></Col>
  <Col span={8}><CardPostalouer/></Col>
</Row>
  </>
);

export default GridPosteaLouer;