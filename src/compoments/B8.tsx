import Nav from 'react-bootstrap/Nav';

function TabsExample() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">trang chủ</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1"> giới thiệu</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" >
          liên hệ
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default TabsExample;