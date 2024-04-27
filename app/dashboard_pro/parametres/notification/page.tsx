'use client'
import React, {useState} from 'react';
import { Switch } from 'antd';
import { NextPage } from "next"
const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};



const NotificationSettings:NextPage=()=>{
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [disabled, setDisabled] = useState(true);
    const toggle = () => {
        setDisabled(!disabled);
      };
    return(
        <div style={{width:'100%', padding:'3%'}}>
            <h1>Notifications</h1>
            <div style={{border:'solid 2px #EAEAEA ', padding:'3%', paddingRight:'10%'}}>
                <div className="flex justify-between">
                    <div>
                        <span className="text-base">Notifications générales</span>
                    </div>
                    <div className="flex flex-row">
                        <span style={{marginRight:'30%', marginLeft:'-50%'}} className="text-base flex items-center">Application</span>
                        <span style={{marginRight:'30%'}} className="text-base flex items-center">Email</span>
                        <span  className="text-base flex items-center">SMS</span>
                    </div>
                </div>
                <br />
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <span className="text-xl">Notifications générales</span>
                        <span className="text-base">Toutes les notifications</span>
                    </div>
                    <div  className="flex flex-row">
                    <div style={{marginRight:'45%', marginLeft:'-55%'}}><Switch defaultChecked onChange={onChange} /></div>
                    <div style={{marginRight:'30%'}}><Switch defaultChecked onChange={onChange} /></div>
                    <div ><Switch  disabled={disabled} /></div>
                    </div>
                </div>
                <br />
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <span className="text-xl">Statut de réservation</span>
                        <span className="text-base">Touts les statuts de réservations</span>
                    </div>
                    <div  className="flex flex-row">
                    <div style={{marginRight:'45%', marginLeft:'-55%'}}><Switch defaultChecked onChange={onChange} /></div>
                    <div style={{marginRight:'30%'}}><Switch defaultChecked onChange={onChange} /></div>
                    <div ><Switch defaultChecked onChange={onChange} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NotificationSettings