import React, { useEffect, useState } from "react";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  Select,
  message,
  Upload,
  InputNumber,
} from "antd";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import axios from "axios";
import styled from "styled-components";

// 🌟 Styled Components
const PageWrapper = styled.div`
  max-width: 90%;
  margin: auto;
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  color: #2c3e50;
`;

const StyledButton = styled(Button)`
  margin-bottom: 20px;
  background-color: #2980b9;
  color: white;
  &:hover {
    background-color: #1e6b96;
    color: white;
  }
`;

const StyledImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
`;

const StyledVideo = styled.video`
  width: 100px;
  height: 80px;
  border-radius: 8px;
`;

// 📌 Admin Panel Component
const AdminPanel = () => {
  const [data, setData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingGem, setEditingGem] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    fetchGems();
  }, []);

  const fetchGems = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/gems");
      setData(response.data);
    } catch (error) {
      message.error("Failed to fetch data!");
    }
  };

  const showModal = (record = null) => {
    setEditingGem(record);
    form.setFieldsValue(
      record || {
        name: "",
        type: "",
        color: "",
        weight: "",
        shape: "",
        clarity: "",
        price: "",
        stock: "",
        certifications: "",
        images: [],
        video: "",
      }
    );
    setIsModalVisible(true);
  };

  const handleFormSubmit = async (values: any) => {
    try {
      if (editingGem) {
        await axios.put(`http://localhost:5000/api/gems/${editingGem}`, values);
        message.success("Gem updated successfully!");
      } else {
        await axios.post("http://localhost:5000/api/gems", values);
        message.success("New gem added successfully!");
      }
      fetchGems();
      setIsModalVisible(false);
    } catch (error) {
      message.error("Failed to save data!");
    }
  };

  const handleDelete = async (id: any) => {
    try {
      await axios.delete(`http://localhost:5000/api/gems/${id}`);
      message.success("Gem removed successfully!");
      fetchGems();
    } catch (error) {
      message.error("Failed to delete data!");
    }
  };

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Type", dataIndex: "type", key: "type" },
    { title: "Color", dataIndex: "color", key: "color" },
    { title: "Weight", dataIndex: "weight", key: "weight" },
    { title: "Shape", dataIndex: "shape", key: "shape" },
    { title: "Clarity", dataIndex: "clarity", key: "clarity" },
    { title: "Price ($)", dataIndex: "price", key: "price" },
    { title: "Stock", dataIndex: "stock", key: "stock" },
    {
      title: "Certifications",
      dataIndex: "certifications",
      key: "certifications",
    },
    {
      title: "Images",
      dataIndex: "images",
      key: "images",
      render: (images: any) =>
        images && images.length > 0 ? (
          <StyledImage src={images[0]} alt="gem" />
        ) : (
          "No Image"
        ),
    },
    {
      title: "Video",
      dataIndex: "video",
      key: "video",
      render: (video: any) =>
        video ? <StyledVideo src={video} controls /> : "No Video",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: any) => (
        <>
          <Button
            icon={<EditOutlined />}
            onClick={() => showModal(record)}
            style={{ marginRight: 10 }}
          />
          <Button
            icon={<DeleteOutlined />}
            danger
            onClick={() => handleDelete(record._id)}
          />
        </>
      ),
    },
  ];

  return (
    <PageWrapper>
      <Title>Admin Panel - Manage Gemstones</Title>

      <StyledButton
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => showModal()}
      >
        Add New Gemstone
      </StyledButton>

      <Table columns={columns} dataSource={data} rowKey="_id" />

      {/* 🔹 Add/Edit Modal */}
      <Modal
        title={editingGem ? "Edit Gemstone" : "Add New Gemstone"}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form form={form} onFinish={handleFormSubmit} layout="vertical">
          <Form.Item
            name="name"
            label="Gemstone Name"
            rules={[{ required: true, message: "Please select a gem name!" }]}
          >
            <Select
              showSearch
              placeholder="Select a gem name"
              options={[
                { label: "Tourmaline", value: "Tourmaline" },
                { label: "Aquamarine", value: "Aquamarine" },
                { label: "Kunzite", value: "Kunzite" },
                { label: "Topaz", value: "Topaz" },
                { label: "Sphene", value: "Sphene" },
                { label: "Garnet", value: "Garnet" },
                { label: "Emerald", value: "Emerald" },
                { label: "Morganite", value: "Morganite" },
                { label: "Peridot", value: "Peridot" },
              ]}
            />
          </Form.Item>

          <Form.Item
            name="type"
            label="Type"
            rules={[{ required: true, message: "Please select type!" }]}
          >
            <Select placeholder="Select type of the stone">
              <Select.Option value="Precious">Precious</Select.Option>
              <Select.Option value="Semi-Precious">Semi-Precious</Select.Option>
              <Select.Option value="Organic">Organic</Select.Option>
              <Select.Option value="Synthetic">Synthetic</Select.Option>
              <Select.Option value="Imitation">Imitation</Select.Option>
              <Select.Option value="Birthstones">Birthstones</Select.Option>
              <Select.Option value="Healing">Healing</Select.Option>
              <Select.Option value="Natural">Natural</Select.Option>
              <Select.Option value="Treated">Treated</Select.Option>
              <Select.Option value="Crystal">Crystal</Select.Option>
              <Select.Option value="Fancy Colored">Fancy Colored</Select.Option>
              <Select.Option value="Mineral">Mineral</Select.Option>
              <Select.Option value="Rare">Rare</Select.Option>
              <Select.Option value="Other">Other</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="color"
            label="Color"
            rules={[{ required: true, message: "Please enter color!" }]}
          >
            <Input placeholder="e.g. Blue, Red, Green" />
          </Form.Item>

          <Form.Item
            name="weight"
            label="Weight (Carats)"
            rules={[{ required: true, message: "Please enter weight!" }]}
          >
            <Input placeholder="Enter Weight of the stone in Carats. e.g. 2.3 carat" />
          </Form.Item>
          <Form.Item
            name="shape"
            label="Shape"
            rules={[{ required: true, message: "Please select shape!" }]}
          >
            <Select placeholder="Select a Shape">
              <Select.Option value="Round">Round</Select.Option>
              <Select.Option value="Oval">Oval</Select.Option>
              <Select.Option value="Princess">Princess</Select.Option>
              <Select.Option value="Emerald">Emerald</Select.Option>
              <Select.Option value="Cushion">Cushion</Select.Option>
              <Select.Option value="Marquise">Marquise</Select.Option>
              <Select.Option value="Pear">Pear</Select.Option>
              <Select.Option value="Asscher">Asscher</Select.Option>
              <Select.Option value="Heart">Heart</Select.Option>
              <Select.Option value="Radiant">Radiant</Select.Option>
              <Select.Option value="Trillion">Trillion</Select.Option>
              <Select.Option value="Rough">Rough</Select.Option>
              <Select.Option value="Other">Other</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="price"
            label="Price ($)"
            rules={[{ required: true, message: "Please enter price!" }]}
          >
            <InputNumber
              placeholder="Enter the price for this gem"
              style={{ width: "100%" }}
            />
          </Form.Item>

          <Form.Item
            name="stock"
            label="Stock"
            rules={[{ required: true, message: "Please enter stock!" }]}
          >
            <InputNumber
              placeholder="Enter the stock of the gem"
              min={0}
              style={{ width: "100%" }}
            />
          </Form.Item>

          <Form.Item name="images" label="Upload Images">
            <Upload listType="picture" multiple>
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item name="video" label="Upload Video">
            <Upload listType="picture">
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            {editingGem ? "Update Gemstone" : "Add Gemstone"}
          </Button>
        </Form>
      </Modal>
    </PageWrapper>
  );
};

export default AdminPanel;
