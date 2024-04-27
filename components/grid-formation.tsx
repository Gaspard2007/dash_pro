import React from 'react';
import { Col, Row, Divider} from 'antd';
import CardFormation from './card-formation';

const GridFormation: React.FC = () => (
  <>
    <Row gutter={[48, 32]}>
  <Col span={8}><CardFormation/></Col>
  <Col span={8}><CardFormation/></Col>
  <Col span={8}><CardFormation/></Col>
</Row>
  </>
);

export default GridFormation;