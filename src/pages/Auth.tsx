import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonImg, IonPage, IonTitle } from '@ionic/react';
import { History } from 'history';

interface ChildComponentProps {
  history : History
  /* other props for ChildComponent */
}

const Auth: React.FC<ChildComponentProps> = ({history}) => {

  const loginPage = () => {

    history.push('/login')
  }

  const registerPage = () => {

    history.push('/register')
  }

  return (
    <IonPage>
      <IonContent>
        <IonImg src="https://3.bp.blogspot.com/-IkUbU6e7Y1o/V4o8nIWc5uI/AAAAAAAAAJU/34IOjIZT54M2Ow-HVsKeRrlWhSWebQQUACLcB/s1600/SMK%2BYP%2B2.jpg" alt="logo sekolah" className="ion-padding ion-margin" />

        <IonButton onClick={loginPage} className="ion-padding-horizontal" color="success" mode="ios" expand="block">
          Login
        </IonButton>
        <br/>
        <IonButton onClick={registerPage} className="ion-padding-horizontal" color="success" mode="ios" expand="block">
          Register
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Auth;
