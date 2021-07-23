import Head from 'next/head'
import Header from '../components/header'
import Section from '../components/section'
import { getSession, useSession } from 'next-auth/client'
import Login from '../components/login'
import Modal from '@material-tailwind/react/Modal'
import Modalbody from '@material-tailwind/react/ModalBody'
import ModalFooter from '@material-tailwind/react/ModalFooter'
import { useEffect, useState } from 'react'
import Button from '@material-tailwind/react/Button'
import firebase from 'firebase'
import { db } from '../firebase'
import { useCollectionOnce } from 'react-firebase-hooks/firestore'
import Icon from "@material-tailwind/react/Icon"
import DocumentRow from '../components/DocumentRow'


export default function Home() {
  const [session] = useSession();
  const [showModal, setshowModal] = useState(false);
  const [input, setInput] = useState('');
  const [snapshot] = useCollectionOnce(db.collection('userDocs').doc(session.user.email).collection('docs').orderBy('timestamp', 'desc'))
  if (!session) return <Login />

  const createDocument = () => {
    if (!input) return;

    db.collection("userDocs").doc(session.user.email).collection("docs").add({
      filename: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    setInput('')
    setshowModal(false)
  };

  const modal = (
    <Modal size="sm"
      active={showModal}
      toggler={() => setshowModal(false)}>
      <Modalbody>
        <input value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="outline-nonde w-full"
          placeholder="Enter name of document..."
          onKeyDown={(e) => e.key === "Enter" && CreateDocument()}
        />
      </Modalbody>
      <ModalFooter>
        <Button color="blue"
          buttonType="link"
          onClick={(e) => setshowModal(false)}
          ripple="dark"
        >
          Cancel
        </Button>
        <Button color="blue"
          onClick={createDocument}
          ripple="light"
        >
          Create
        </Button>
      </ModalFooter>
    </Modal>
  )

  return (
    <div>
      <Head>
        <title>Google Docs By Amansky</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {modal}
      <Section fun={setshowModal} />
      <section className="bg-white px-10 md:px-0">
        <div className="max-w-3xl mx-auto py-8 text-sm text-gray-700">
          <div className="flex justify-between items-center pb-5">
            <h2 className="pt-1 font-medium flex-grow">
              My Documents
            </h2>
            <p className=" pt-1 flex items-center mr-12">Date Created</p>
            <Icon className="pt-1" name="folder" size="3xl" color="gray" />
          </div>
        {snapshot?.docs.map((doc) => (
          <DocumentRow
            key={doc.id}
            id={doc.id}
            fileName={doc.data().filename}
            date={doc.data().timestamp}
          />
        ))}
        </div>
        </section>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    }
  }
}
