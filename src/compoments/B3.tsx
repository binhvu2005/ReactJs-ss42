import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.bing.com/ck/a?!&&p=3072e18dcdd58f77JmltdHM9MTcxNjMzNjAwMCZpZ3VpZD0wMjgwZGQ4Yi1iMjZiLTZjYzEtMTQxYi1jZTE0YjM2MzZkNjAmaW5zaWQ9NTQ4MQ&ptn=3&ver=2&hsh=3&fclid=0280dd8b-b26b-6cc1-141b-ce14b3636d60&u=a1L2ltYWdlcy9zZWFyY2g_cT0lRTElQkElQTNuaCUyMGclQzMlQTFpJkZPUk09SVFGUkJBJmlkPTJFQjFGNzlFNEM4QTJCMDY1NzM3NTc0NUNGREU3ODU3M0Y2MUZFQjk&ntb=1https://www.bing.com/ck/a?!&&p=a65296ff7b48c574JmltdHM9MTcxNjMzNjAwMCZpZ3VpZD0wMjgwZGQ4Yi1iMjZiLTZjYzEtMTQxYi1jZTE0YjM2MzZkNjAmaW5zaWQ9NTQ4Nw&ptn=3&ver=2&hsh=3&fclid=0280dd8b-b26b-6cc1-141b-ce14b3636d60&u=a1L2ltYWdlcy9zZWFyY2g_cT0lRTElQkElQTNuaCUyMGclQzMlQTFpJkZPUk09SVFGUkJBJmlkPTA0QUY0NjdCMUQ4REE5RDI3MjdDM0E3NDM1N0ZCOTdDOUFFODJBNEY&ntb=1" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;