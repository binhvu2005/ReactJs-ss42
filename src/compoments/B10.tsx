import { Button, Table } from "react-bootstrap";

const users = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    gender: "Nam",
    dob: "01/01/1990",
    email: "nguyenvana@example.com",
    address: "Hà Nội",
  },
  {
    id: 2,
    name: "Trần Thị B",
    gender: "Nữ",
    dob: "02/02/1995",
    email: "tranthib@example.com",
    address: "TP. Hồ Chí Minh",
  },
  {
    id: 3,
    name: "Phạm Văn C",
    gender: "Nam",
    dob: "03/03/1992",
    email: "phamvanc@example.com",
    address: "Đà Nẵng",
  },
  {
    id: 4,
    name: "Lê Thị D",
    gender: "Nữ",
    dob: "04/04/1993",
    email: "lethi@example.com",
    address: "Hải Phòng",
  },
  {
    id: 5,
    name: "Nguyễn Văn E",
    gender: "Nam",
    dob: "05/05/1991",
    email: "nguyenvane@example.com",
    address: "Cần Thơ",
  },
];

function Bt10() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>STT</th>
          <th>Họ và tên</th>
          <th>Giới tính</th>
          <th>Ngày sinh</th>
          <th>Email</th>
          <th>Địa chỉ</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.gender}</td>
            <td>{user.dob}</td>
            <td>{user.email}</td>
            <td>{user.address}</td>
            <td>
              <Button variant="warning" size="sm" className="me-2">
                Sửa
              </Button>
              <Button variant="danger" size="sm">
                Xóa
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Bt10;
