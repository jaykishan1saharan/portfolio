import {
  cert,
  getApps,
  initializeApp,
} from "firebase-admin/app";

import { getMessaging } from "firebase-admin/messaging";

const serviceAccount = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT_JSON!
);

serviceAccount.private_key =
  serviceAccount.private_key
    .replace(/\\n/g, "\n")
    .trim();

const firebaseAdminApp =
  getApps().length === 0
    ? initializeApp({
        credential: cert(serviceAccount),
      })
    : getApps()[0];

export const adminMessaging =
  getMessaging(firebaseAdminApp);