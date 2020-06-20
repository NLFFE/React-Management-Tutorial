import React from 'react';
import './App.css';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';



const customers = [
  {
    'id':'1',
    'image':'https://placeimg.com/64/64/1',
    'name': '김진뉴1',
    'birthday':'961111',
    'gender':'남자',
    'job':'대학생'
  },
  {
    'id':'2',
    'image':'https://placeimg.com/64/64/2',
    'name': '김진뉴2',
    'birthday':'961111',
    'gender':'중성',
    'job':'프로그래머'
  },
  {
    'id':'3',
    'image':'https://placeimg.com/64/64/any3',
    'name': '김진뉴3',
    'birthday':'12345',
    'gender':'여자',
    'job':'디자이너'
  },
]


function App() {
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {customers.map(c =>{return( <Customer key={c.id} id={c.id} image={c.image} name = {c.name} birthday = {c.birthday} gender = {c.gender} job = {c.job}/>)})}
      </TableBody>
      </Table>
    </Paper>
  );
}

export default App;
