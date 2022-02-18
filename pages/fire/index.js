import {useState,useEffect} from 'react'
import firebase from 'firebase/compat/app';
import '../../components/fire'
import Link from 'next/link'

const db = firebase.firestore()

export default function Home(){
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
              {document.id}
            </td>
            <td>{doc.name}</td>
            <td>{doc.mail}</td>
            <td>
              <a href={'/fire/del?id='+document.id}>
                削除
              </a>
            </td>
          </tr>
        )
      })
      setData(mydata)
      setMessage('Firebase data.')
    },[])
  }
  return(
    <>
      <table>
        
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>MAIL</th>
            <th></th>
          </tr>
               
          {data}
        
      </table>
      <Link href='/fire/add'><a>データの追加</a></Link>
    </>
    
  )
}