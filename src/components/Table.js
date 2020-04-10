import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function TableDashboard(props) {
  const {data} = props

  if(!data || !data.title){
    return <React.Fragment>
    <Title>Welcome</Title>
    Please select category on the left
    {true}
  </React.Fragment>
  }

 return <>
  <React.Fragment>
          <Title>{data.title}</Title>
          <Table size="small">
            <TableHead>
              <TableRow>
                  {data.header.map((el, index_) => (
                    <TableCell key={index_}>{el}</TableCell>
                  ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.rows.map((row, index) => {
                
                return (
                  <TableRow key={index}>
                    {data.header.map((el, index_) => {                   
                      return <TableCell key={index_}>{JSON.stringify(row[el]).replace('"',"").replace('"',"")}</TableCell>
                    }
                  )}
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </React.Fragment> 
        
        
 </>

}
