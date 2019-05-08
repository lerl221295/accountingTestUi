import React from 'react';
import PropTypes from 'prop-types';
import {
  Row, Col,
  ListGroup, ListGroupItem,
  CardBody, Card,
  UncontrolledCollapse
} from 'reactstrap';

const buildInfoList = (data) => (
    <Row>
      <Col sm={{size: 8, offset: 2}}>
        <ListGroup>
          {
            data.map(({id, type, amount, effectiveDate}) => {
              const time = new Date(effectiveDate);
              return (
                <ListGroupItem id={`toggle${id}`} color={type === 'credit' ? 'success' : 'info'}>
                  <span>{`Operation Type: ${type} - Amount: ${amount}`} </span>
                  <UncontrolledCollapse toggler={`#toggle${id}`} >
                    <Card>
                      <CardBody>
                        <span>ID: {id}</span>
                        <br/>
                        <span>Time: {time.toString()}</span>
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                </ListGroupItem>
              )
            })
          }
        </ListGroup>
      </Col>
    </Row>
)

/**
 * Transactions table stateless component
 *
 * @param {Object} * Props
 * @returns {function} Component
 */
const Transactions = ({data, error, loading, loaded}) => {
  if(loading) {
    return <h1>...Loading</h1>
  }

  if(loaded && data.length) {
    return buildInfoList(data);
  }

  if(error) {
    return <h1>Oops, the data fetching wasn't good, we'll fixed ;)</h1>;
  }

  return <h1>There are no transactions ...</h1>
}

Transactions.propTypes = {
  data: PropTypes.array,
  error: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  loaded: PropTypes.bool.isRequired
};

export default Transactions;
