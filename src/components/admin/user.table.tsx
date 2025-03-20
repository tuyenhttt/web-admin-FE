"use client";
import { handleDeleteUserAction } from "@/utils/actions";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import { Button, Popconfirm, Table } from "antd";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import UserCreate from "./user.create";
import UserUpdate from "./user.update";

interface IUser {
  _id: string;
  email: string;
}

interface IMeta {
  current: number;
  pageSize: number;
  pages: number;
  total: number;
}

interface IProps {
  users?: IUser[];
  meta?: IMeta;
}

const UserTable = ({
  users = [],
  meta = { current: 1, pageSize: 10, pages: 1, total: 0 },
}: IProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);
  const [dataUpdate, setDataUpdate] = useState<IUser | null>(null);

  const columns = [
    {
      title: "STT",
      render: (_: any, record: IUser, index: number) => {
        return <>{index + 1 + (meta.current - 1) * meta.pageSize}</>;
      },
    },
    {
      title: "_id",
      dataIndex: "_id",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Actions",
      render: (_: any, record: IUser) => (
        <>
          <EditTwoTone
            twoToneColor="#f57800"
            style={{ cursor: "pointer", margin: "0 20px" }}
            onClick={() => {
              setIsUpdateModalOpen(true);
              setDataUpdate(record);
            }}
          />

          <Popconfirm
            placement="leftTop"
            title={"Delete this user"}
            description={"Are you sure to delete this user?"}
            onConfirm={async () => await handleDeleteUserAction(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <span style={{ cursor: "pointer" }}>
              <DeleteTwoTone twoToneColor="#ff4d4f" />
            </span>
          </Popconfirm>
        </>
      ),
    },
  ];

  const onChange = (pagination: any) => {
    if (pagination && pagination.current) {
      const params = new URLSearchParams(searchParams);
      params.set("current", pagination.current.toString());
      replace(`${pathname}?${params.toString()}`);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <span>Manager Users</span>
        <Button onClick={() => setIsCreateModalOpen(true)}>Create User</Button>
      </div>
      <Table
        bordered
        dataSource={users}
        columns={columns}
        rowKey="_id"
        pagination={
          meta
            ? {
                current: meta.current,
                pageSize: meta.pageSize,
                total: meta.total,
                showSizeChanger: true,
                showTotal: (total, range) => (
                  <div>
                    {range[0]}-{range[1]} trên {total} rows
                  </div>
                ),
              }
            : false
        }
        onChange={onChange}
      />

      <UserCreate
        isCreateModalOpen={isCreateModalOpen}
        setIsCreateModalOpen={setIsCreateModalOpen}
      />

      <UserUpdate
        isUpdateModalOpen={isUpdateModalOpen}
        setIsUpdateModalOpen={setIsUpdateModalOpen}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
      />
    </>
  );
};

export default UserTable;
