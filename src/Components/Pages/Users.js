import { Table, Modal, Button } from 'antd';
import { useState, Fragment } from 'react';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { CustomForm } from '../Forms/CustomForm';



const columnsData = [
    {
        id: 1,
        name: "Leanne Graham",
        email: "Sincere@april.com",
        address: "London Kulas Light Apt. 556",
        phone: 1 - 7799 - 736 - 89931,
        website: "https://tekolio.com/",
    },
    {
        id: 2,
        name: "Ervin Howell",
        email: "Shanna@melissa.org",
        address: "New York Victor Plains Suite 879",
        phone: 99199 - 692 - 65935,
        website: "anastasia.net",
    },
    {
        id: 3,
        name: "Clementine Bauch",
        email: "Nathan@yesenia.net",
        address: "Douglas Extension uitzipcod",
        phone: 1 - 463 - 123 - 4447,
        website: "ramiro.info",
    },
    {
        id: 4,
        name: "Patricia Lebsack",
        email: "Julianne.OConner@kory.org",
        address: "Hoeger Mal Apt. 692 South Elvis",
        phone: 493 - 1799 - 9623,
        website: "kale.biz",
    },
    {
        id: 5,
        name: "Chelsey Dietrich",
        email: "Lucio_Hettinger@annie.com",
        address: "Skiles ks Suit 51 Roscoevi",
        phone: 254 - 954 - 1289,
        website: "demarco.info",
    },
    {
        id: 6,
        name: "Mrs. Dennis Schulist",
        email: "Karley_Dach@jasper.net",
        address: "Norberto Crossing",
        phone: 1 - 477 - 935 - 8478 - 64399,
        website: "ola.org",
    },
    {
        id: 7,
        name: "Kurtis Weissnat",
        email: "Telly.Hoeger@billy.com",
        address: "Rex Tra Suite 2 Howemouth",
        phone: 2199 - 9967 - 6132,
        website: "elvis.io",
    },
    {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        email: "Sherwood@rosamond.net",
        address: "Ellsworth mit Sui 729 Aliyavi",
        phone: 493.6943 - 1499,
        website: "jacynthe.com",
    },
    {
        id: 9,
        name: "Glenna Reichert",
        email: "Chaim_McDermott@dana.org",
        address: "Dayna Park uitzipcod",
        phone: 976 - 6794 - 412996,
        website: "conrad.com",
    },
    {
        id: 10,
        name: "Clementina DuBuque",
        email: "Rey.Padberg@karina.com",
        address: "Kattie Turnpike Suite 198 Lebsackbury",
        phone: 9924 - 648 - 38994,
        website: "ambrose.net",
    }
]

export function Users() {
    const [visible, setVisible] = useState(false);
    const [edit, setEdit] = useState(null);

    const columns = [
        {
            key: "name",
            title: "Name",
            dataIndex: "name",
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.name > b.name,
        },
        {
            key: "email",
            title: "Email",
            dataIndex: "email",
        },
        {
            key: "address",
            title: "Address",
            dataIndex: "address",
            filters: [
                {
                    text: "London",
                    value: "London",
                },
                {
                    text: "New York",
                    value: "New York",
                },
            ],
            onFilter: (value, record) => record.address.indexOf(value) === 0,
        },
        {
            key: "phone",
            title: "Phone Number",
            dataIndex: "phone",
        },
        {
            key: "website",
            title: "Website",
            dataIndex: "website",
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

    const AddNew = () => {
        setEdit({ name: "", email: "", address: "", phone: "", website: "" });
        setVisible(true);
    }

    const EditData = (record) => {
        setVisible(true);
        setEdit(record);
    }

    const UpdateData = () => {
        setVisible(false);
    }

    const DeleteData = (record) => {
        const { name } = record;
        Modal.confirm({
            title: `Please confirm to delete... ` + { name },
            onOk: () => {
                alert(name);
            }
        });
    }

    const CloseModal = () => {
        setVisible(false);
    }

    return (
        <Fragment>

            <Button type='primary' onClick={AddNew} style={{ marginBottom: "20px", float: "right" }} > <PlusOutlined /> Add New </Button>

            <Table dataSource={columnsData} columns={columns} pagination={{ showSizeChanger: true }} className="table-striped-rows" />
            <Modal title="Edit data.." open={visible} onCancel={CloseModal}
                footer={[
                    <Button form="myForm" key="Cancel" htmlType="reset" onClick={CloseModal} >Cancel</Button>,
                    <Button form="myForm" key="submit" htmlType="submit" type="primary" >Save</Button>,
                ]} >

                <CustomForm edit={edit} setEdit={setEdit} onSubmit={UpdateData} />

            </Modal>
        </Fragment>

    )

}