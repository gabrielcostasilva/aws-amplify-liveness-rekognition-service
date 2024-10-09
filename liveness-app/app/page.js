'use client';

import { FaceLivenessDetectorCore } from '@aws-amplify/ui-react-liveness';
import { ThemeProvider } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: process.env.USER_POOL_ID,
      userPoolClientId: process.env.WEB_CLIENT_ID,
      identityPoolId: process.env.IDENTITY_POOL_ID,
      loginWith: {
        email: true,
      },
      allowGuestAccess: true,
    },
  },
})

export default function Home() {
  return (
    <ThemeProvider>
      <FaceLivenessDetectorCore
        sessionId={process.env.SESSION_ID}
        region={process.env.REGION}
        onAnalysisComplete={async (arg) => { console.log("Done!", arg); return true }}
        onError={(onError) => { console.log("error: ", onError) }}
      />
    </ThemeProvider>

  )
}
