import { Table, Modal, Button, Alert } from 'antd';
import { useState, useEffect, Fragment } from 'react';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { PatientForm } from '../Forms/PatientForm';
import { callApiGet,callApiPut, callApiPost, callApiDelete } from "../../Services/CallApi";
import apis from "../../Services/Apis";
import Spinner from "../Loading/Spinner";


export function PatientManagment() {
    const [visible, setVisible] = useState(false);
    const [edit, setEdit] = useState(null);
    const [columnsData, setColumnsData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [msg, setMsg] = useState({MsgType:"", Msg:"", description:""});
    

    useEffect(() => {
        LoadData();        
      },[]);


    const columns = [
        {
            key: "patientId",
            title: "Patient ID",
            dataIndex: "patientId",
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.patientId > b.patientId,
        },
        {
            key: "patientFirstName",
            title: "First Name",
            dataIndex: "patientFirstName",
        },
        {
            key: "patientLastName",
            title: "Last Name",
            dataIndex: "patientLastName",
        },
        {
            key: "patientContactNo",
            title: "Contact No",
            dataIndex: "patientContactNo",
        },
        {
            key: "patientAddress",
            title: "Address",
            dataIndex: "patientAddress",
        },
        {
            key: "patientCity",
            title: "City",
            dataIndex: "patientCity",
        },
        {
            key: "patientCountry",
            title: "Country",
            dataIndex: "patientCountry",
            filters: [
                {
                    text: "Local",
                    value: "Sri Lanka",
                },
                {
                    text: "Foreign",
                    value: "India",
                },
            ],
            onFilter: (value, record) => record.patientCountry.indexOf(value) === 0,
        },
        {
            key: "patientNIC",
            title: "NIC",
            dataIndex: "patientNIC",
        },                
        {
            key: "action",
            title: "Actions",
            render: (record) => {
                return (
                    <Fragment>
                        <DeleteOutlined style={{ color: "red", marginRight: "15px" }} onClick={() => DeleteData(record)} />
                        <EditOutlined style={{ color: "blue" }} onClick={() => EditData(record)} />
                    </Fragment>
                );
            },
        },
    ]

    const LoadData = ()=>{
        setLoading(true);
        callApiGet(apis.PATIENT)        
            .then((res) => {
                setColumnsData(res);
                setLoading(false);
                console.log(res);
            })
            .catch((err) => { 
                setError(err.message);
                setLoading(false); 
            });    

            
    }

    const AddNew = () => {
        setEdit({ patientId: "PT1002", patientFirstName: "", patientLastName: "", patientContactNo: "", patientAddress: "", 
        patientCity: "", patientNIC: "", patientPostalCode :"", patientCountry:""});
        setVisible(true);
    }

    const EditData = (record) => {
        setVisible(true);
        setEdit(record);
    }

    const UpdateData = () => {
        setLoading(true);
        const {patientId} = edit;
        
        if(patientId){
            callApiPut(apis.PATIENT, edit)        
            .then((res) => {
                LoadData();  
                setLoading(false);
                setMsg({  MsgType:"success", Msg:"Success", description:"Successfully updated" });
            })
            .catch((err) => { 
                setMsg({  MsgType:"error", Msg:"Error", description:err.message });
                setLoading(false); 
            });   
        }else{
            callApiPost(apis.PATIENT, edit)        
            .then((res) => {
                LoadData();  
                setLoading(false);
                setMsg({  MsgType:"success", Msg:"Success", description:"Successfully saved" });
            })
            .catch((err) => { 
                setError(err.message);
                setLoading(false); 
                setMsg({  MsgType:"error", Msg:"Error", description:err.message });
            });   
        }      
        setVisible(false);  
    }

    const DeleteData = (record) => {
        const { patientId, patientFirstName } = record;
        Modal.confirm({
            title: `Please confirm to delete patient ID... ${ patientId } <br/> [ ${ patientFirstName }]`,
            onOk: () => {
                setLoading(true);
                callApiDelete(apis.PATIENT, record)        
                .then((res) => {
                    LoadData();  
                    setLoading(false);
                    setMsg({  MsgType:"success", Msg:"Success", description:"Successfully deleted" });
                })
                .catch((err) => { 
                    setMsg({  MsgType:"Error", Msg:"Error", description:err.message });
                    setLoading(false); 
                });  
            }
        });
    }

    const CloseModal = () => {
        setVisible(false);
    }

    return (
        <Fragment>

            {loading ? <Spinner /> : ""}    

            {!msg.MsgType ? "" : (<Alert message={msg.Msg} description={msg.description} type={msg.MsgType} showIcon />)            }

            <Button type='primary' onClick={AddNew} style={{ marginBottom: "20px", float: "right" }} > <PlusOutlined /> Add New </Button>

            <Table dataSource={columnsData} columns={columns} pagination={{ showSizeChanger: true }} className="table-striped-rows" />
            <Modal title="Patient Data" open={visible} onCancel={CloseModal}
                footer={[
                    <Button form="myForm" key="Cancel" htmlType="reset" onClick={CloseModal} >Cancel</Button>,
                    <Button form="myForm" key="submit" htmlType="submit" type="primary" >Save</Button>,
                ]} >

                <PatientForm edit={edit} setEdit={setEdit} onSubmit={UpdateData} />

            </Modal>
        </Fragment>

    )

}