"use client"; // This directive indicates that the component is a client component

import React, { useState } from "react";
import "../../app/dashboard/style.css";
import { Table, Button, Input, Modal, Space } from "antd";

const Page = () => {
  const [taskName, setTaskName] = useState("");
  const [visible, setVisible] = useState(false);
  const handleInputChange = (e) => {
    setTaskName(e.target.value);
  };
  const addNewTask = () => {
    setVisible(true);
  };
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Status",
      key: "Status",
      render: (text, record) => (
        <Space>
          <p>Active</p>
        </Space>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space>
          <Button type="primary" onClick={addNewTask}>
            Edit
          </Button>
          <Button danger>Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <div className="flex justify-center py-8">
        <div className="w-[800px] bg-slate-50 p-6 rounded-md">
          <Button type="primary" className=" p-5" onClick={addNewTask}>
            Add New Task
          </Button>

          <Table
            dataSource={dataSource}
            columns={columns}
            className=" mt-4 custom-table"
            style={{
              width: "100%",
              borderRadius: "10px",
              // backgroundColor: "white",
              // border: "0.5px solid #DCDCDC",
            }}
          />
        </div>
      </div>
      <Modal
        open={visible}
        width={800}
        title="Add New Task"
        onCancel={() => setVisible(false)}
        onOk={() => setVisible(false)}
      >
        <div className=" w-full">
          <div className="flex flex-col sm:flex-row">
            <div className=" p-2  sm:w-full ">
              <p>Input Taks Name:</p>
              <Input
                onChange={handleInputChange}
                placeholder="Enter task name"
                className=" p-4 mt-1"
              />
            </div>
            <div className="   p-2   sm:w-full">
              <p>Input Task Description:</p>
              <Input.TextArea
                placeholder="Enter task description"
                className=" mt-1"
                rows={10}
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Page;
