import React, {useState, FormEvent} from 'react';
import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonImg, IonInput, IonLoading, IonPage, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import { school } from 'ionicons/icons';
import { History } from 'history';

interface ChildComponentProps {
  history : History
  /* other props for ChildComponent */
}


const Login: React.FC<ChildComponentProps>= ({history}) => {

  const [nis, setNis] = useState();
  const [password, setPassword] = useState();
  const [showLoading, setShowLoading] = useState(false);
  const [isPopUp, setIsPopUp] = useState(false);
  const [pesanLogin, setPesanLogin] = useState("");

  const nisCheck = (nis: FormEvent<HTMLIonInputElement>) => {

    setNis(nis.currentTarget.value);
  }

  const passwordCheck = (password: FormEvent<HTMLIonInputElement>) => {

    setPassword(password.currentTarget.value);
  }

  const loginCheck = () => {

    setShowLoading(true);

    //login code here

    setTimeout(() => {

      if(nis && password) {

        console.log("nis : ", nis);
        console.log("password : ", password);
        console.log('proses login');
      }

      else {

        console.log("harap isi field");
        setPesanLogin("field tidak boleh kosong");
        setIsPopUp(true);
      }

      setShowLoading(false);

    }, 2000);
  }

  const backPage = () => {

    history.push("/auth")
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="success" mode="ios">
          <IonButtons slot="start">
            <IonButton onClick={backPage}>
              <IonIcon slot="icon-only" name="arrow-back" />
            </IonButton>
          </IonButtons>

          <IonTitle>SMK Fatahillah</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <IonLoading
          isOpen={showLoading}
          message={'Memuat'}
          mode="ios"
        />

        <br/>

        <IonCard mode="ios" className="ion-padding-horizontal">
          <IonInput onInput={nisCheck} id="nisInput" value={nis} type="number" placeholder="Nomor Induk Siswa" />
        </IonCard>

        <IonCard mode="ios" className="ion-padding-horizontal">
          <IonInput onInput={passwordCheck} id="passwordInput" value={password} type="password" placeholder="Kata Sandi" />
        </IonCard>

        <IonButton onClick={loginCheck} className="ion-padding-horizontal" color="success" mode="ios" expand="block">
          LOGIN
        </IonButton>

        <IonToast
          isOpen={isPopUp}
          onDidDismiss={() => setIsPopUp(false)}
          message={pesanLogin}
          showCloseButton={true}
          color="dark"
          mode="ios"
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
