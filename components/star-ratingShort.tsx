import React from 'react';
import { Rate } from 'antd';

const StarRatingShort: React.FC = () => <div className='text-base'>
 <Rate count={1} disabled defaultValue={5} />4/5
 </div>

export default StarRatingShort;