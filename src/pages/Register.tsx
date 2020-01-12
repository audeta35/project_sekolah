import React, {useState, FormEvent} from 'react';
import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonImg, IonInput, IonLoading, IonPage, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import { school } from 'ionicons/icons';
import { History } from 'history';

interface ChildComponentProps {
  history : History
  /* other props for ChildComponent */
}


const Register: React.FC<ChildComponentProps>= ({history}) => {

  const [nis, setNis] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [showLoading, setShowLoading] = useState(false);
  const [isPopUp, setIsPopUp] = useState(false);
  const [pesanRegister, setPesanRegister] = useState("");

  const nisCheck = (nis: FormEvent<HTMLIonInputElement>) => {

    setNis(nis.currentTarget.value);
  }

  const emailCheck = (email: FormEvent<HTMLIonInputElement>) => {

    setEmail(email.currentTarget.value);
  }

  const phoneCheck = (phone: FormEvent<HTMLIonInputElement>) => {

    setPhone(phone.currentTarget.value);
  }

  const passwordCheck = (password: FormEvent<HTMLIonInputElement>) => {

    setPassword(password.currentTarget.value);
  }

  const registerCheck = () => {

    setShowLoading(true);

    //login code here

    setTimeout(() => {

      if(nis && email && phone && password) {

        console.log("nis : ", nis);
        console.log("email : ", email);
        console.log("phone : ", phone);
        console.log("password : ", password);
        console.log('proses register');
      }

      else {

        console.log("harap isi field");
        setPesanRegister("field tidak boleh kosong");
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
          <IonInput onInput={emailCheck} id="nisInput" value={email} type="email" placeholder="Email Anda" />
        </IonCard>

        <IonCard mode="ios" className="ion-padding-horizontal">
          <IonInput onInput={phoneCheck} id="nisInput" value={phone} type="number" placeholder="Nomor Telepon" />
        </IonCard>

        <IonCard mode="ios" className="ion-padding-horizontal">
          <IonInput onInput={passwordCheck} id="passwordInput" value={password} type="password" placeholder="Kata Sandi" />
        </IonCard>

        <IonButton onClick={registerCheck} className="ion-padding-horizontal" color="success" mode="ios" expand="block">
          REGISTER
        </IonButton>

        <IonToast
          isOpen={isPopUp}
          onDidDismiss={() => setIsPopUp(false)}
          message={pesanRegister}
          showCloseButton={true}
          color="dark"
          mode="ios"
        />
      </IonContent>
    </IonPage>
  );
};

export default Register;
