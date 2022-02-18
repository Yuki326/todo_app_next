import {useState,useEffect} from 'react'
import firebase from 'firebase/compat/app';
import '../../components/fire'

const db = firebase.firestore()

export default function Main(){
  const mydata = []
  const [data,setData] = useState(mydata)
  const [message,setMessage] = useState('wait ...')
  useEffect = () =>{
    db.collection('mydata').get().then((snapshot)=>{
      snapshot.forEach((document)=>{
        const doc = document.data()
        mydata.push(
          <tr key={document.id}>
            <td>
              <a href={'/fire/del?id='+document.id}>
                {document.id}
              </a>
            </td>
            <td>{doc.name}</td>
          </tr>
        )
      })
      setData(mydata)
      setMessage('Firebase data.')
    },[])
  }
  return(
    <table>
      <thread>
        <th>ID</th>
        <th>NAME</th>
      </thread>
      <tbody>
        {data}
      </tbody>
    </table>
  )
}