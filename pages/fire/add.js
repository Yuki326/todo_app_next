import {useState,useEffect} from 'react'
import firebase from 'firebase/compat/app'
import {useRouter} from 'next/router'
import '../../components/fire'

const db = firebase.firestore()

export default function Add(){
  const [message,setMessage] = useState('add data')
  const [name,setName] = useState('')
  const [mail,setMail] = useState('')
  const [age,setAge] = useState(0)
  const router = useRouter()

  const onChangeName = ((e)=>{
    setName(e.target.value)
  })
  const onChangeMail = ((e)=>{
    setMail(e.target.value)
  })
  const onChangeAge = ((e)=>{
    setAge(e.target.value)
  })

  const doAction = ((e)=>{
    const ob = {
      name:name,
      mail:mail,
      age:age
    }
    db.collection('mydata').add(ob).then(ref=>{
      router.push('/fire')
    })
  })
  return(
    <>
      <div>
        <label>Name:</label>
        <input type = "text" onChange={onChangeName}></input>
      </div>
      <div>
        <label>Mail:</label>
        <input type = "text" onChange={onChangeMail}></input>
      </div>
      <div>
        <label>Age:</label>
        <input type = "number" onChange={onChangeAge}></input>
      </div>
      <button onClick={doAction}>Add</button>
    </>
  )
}