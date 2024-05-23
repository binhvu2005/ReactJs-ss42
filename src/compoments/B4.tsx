import Dropdown from 'react-bootstrap/Dropdown';

function BasicExample() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Vũ Thanh Bình
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">cài đặt</Dropdown.Item>
        <Dropdown.Item href="#/action-2">đổi mk</Dropdown.Item>
        <Dropdown.Item href="#/action-3">đăng xuất</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;