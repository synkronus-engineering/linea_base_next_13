import {
  API_STATUS,
  RESPONSE_APIREST,
  RESPONSE_ERRORS,
  handleError,
} from '@/src/lib/res_definitions';
import { createServerRouteClient } from '@/src/lib/supabase';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  let result = {} as RESPONSE_APIREST;
  const path_switch = req.nextUrl.searchParams.get('path_switch');
  const {
    data: { user: user },
  } = await createServerRouteClient(cookies).auth.getUser();

  try {
    switch (path_switch) {
      case 'info':
        {
          result = await createServerRouteClient(cookies)
            .from('profiles')
            .select('*')
            .eq('id', user?.id)
            .maybeSingle();
        }
        break;

      default:
        result = {
          data: null,
          status: API_STATUS.NOT_FOUND,
          error: RESPONSE_ERRORS.BAD_REQUEST,
        };
        break;
    }

    return NextResponse.json({ ...result });
  } catch (error) {
    return NextResponse.json(handleError(error));
  }
}

// profile object
// {
//   "username": "javierg89@gmail.com",
//   "mobile_number": "3183791842",
//   "avatar_url": "",
//   "first_name": "Alcides",
//   "last_name": "Brieva",
//   "birth_date": "2000-10-04T17:00:15.000Z",
//   "gender_id": "24ed3e70-23b9-47dd-a577-4f98e602ad96",
//   "gender": {
//       "name": "Otro"
//   }
// }

// user object data from auth
// {
//   "access_token": "",
//   "token_type": "bearer",
//   "expires_in": 3600,
//   "refresh_token": "Nw3jMsIyX9alIHRQy2h5Yw",
//   "user": {
//       "id": "90e2f168-a7aa-476a-86b9-80ebfad1c958",
//       "aud": "authenticated",
//       "role": "authenticated",
//       "email": "javierg89@gmail.com",
//       "email_confirmed_at": "2022-10-31T16:52:13.542979Z",
//       "phone": "",
//       "confirmation_sent_at": "2022-10-31T16:51:52.701332Z",
//       "confirmed_at": "2022-10-31T16:52:13.542979Z",
//       "last_sign_in_at": "2023-07-15T16:24:31.313779156Z",
//       "app_metadata": {
//           "provider": "email",
//           "providers": [
//               "email",
//               "google"
//           ]
//       },
//       "user_metadata": {
//           "avatar_url": "https://lh3.googleusercontent.com/a/AAcHTtcEdveWl4qISlbg6VdXE4su0d6EsmqSnxDkr-K3VMGoqi0=s96-c",
//           "email": "javierg89@gmail.com",
//           "email_verified": true,
//           "full_name": "Javier Gonzalez",
//           "iss": "https://accounts.google.com",
//           "name": "Javier Gonzalez",
//           "picture": "https://lh3.googleusercontent.com/a/AAcHTtcEdveWl4qISlbg6VdXE4su0d6EsmqSnxDkr-K3VMGoqi0=s96-c",
//           "provider_id": "102342252134634031964",
//           "sub": "102342252134634031964"
//       },
//       "identities": [
//           {
//               "id": "90e2f168-a7aa-476a-86b9-80ebfad1c958",
//               "user_id": "90e2f168-a7aa-476a-86b9-80ebfad1c958",
//               "identity_data": {
//                   "email": "javierg89@gmail.com",
//                   "sub": "90e2f168-a7aa-476a-86b9-80ebfad1c958"
//               },
//               "provider": "email",
//               "last_sign_in_at": "2022-10-31T16:51:52.699174Z",
//               "created_at": "2022-10-31T16:51:52.699211Z",
//               "updated_at": "2022-11-25T00:00:00Z"
//           },
//           {
//               "id": "102342252134634031964",
//               "user_id": "90e2f168-a7aa-476a-86b9-80ebfad1c958",
//               "identity_data": {
//                   "avatar_url": "https://lh3.googleusercontent.com/a/AAcHTtcEdveWl4qISlbg6VdXE4su0d6EsmqSnxDkr-K3VMGoqi0=s96-c",
//                   "email": "javierg89@gmail.com",
//                   "email_verified": true,
//                   "full_name": "Javier Gonzalez",
//                   "iss": "https://accounts.google.com",
//                   "name": "Javier Gonzalez",
//                   "picture": "https://lh3.googleusercontent.com/a/AAcHTtcEdveWl4qISlbg6VdXE4su0d6EsmqSnxDkr-K3VMGoqi0=s96-c",
//                   "provider_id": "102342252134634031964",
//                   "sub": "102342252134634031964"
//               },
//               "provider": "google",
//               "last_sign_in_at": "2023-06-22T23:26:38.116744Z",
//               "created_at": "2023-06-22T23:26:38.116785Z",
//               "updated_at": "2023-07-12T18:47:34.267789Z"
//           }
//       ],
//       "created_at": "2022-10-31T16:51:52.696016Z",
//       "updated_at": "2023-07-15T16:24:31.317791Z"
//   }
// }
