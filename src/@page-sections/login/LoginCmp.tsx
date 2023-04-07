'use client';
import { useSupabaseApp } from '@/providers/SupabaseProvider';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

const LoginPage = () => {
  const { supabase } = useSupabaseApp();

  return (
    <Auth
      supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }}
      theme="default"
      providers={['google']}
      socialLayout="horizontal"
      localization={{ variables: { ...authOptionCfg } }}
    />
  );
};

const authOptionCfg = {
  sign_up: {
    email_label: 'Email',
    password_label: 'Crear Contraseña',
    button_label: 'Registrarse',
    social_provider_text: 'Ingresar con',
    link_text: 'No Tienes Cuenta? Registrate',
  },
  sign_in: {
    email_label: 'Email',
    password_label: 'Contraseña',
    button_label: 'Ingresar',
    social_provider_text: 'Ingresar con',
    link_text: 'Tienes Cuenta? Ingresa!',
  },
  magic_link: {
    email_input_label: 'Email address',
    email_input_placeholder: 'Your email address',
    button_label: 'Enviar Magic Link',
    link_text: 'Enviar a magic link email',
  },
  forgotten_password: {
    email_label: 'Email',
    password_label: 'Contraseña',
    button_label: 'Enviar instrucciones',
    link_text: 'Olvidé la contraseña?',
  },
  update_password: {
    password_label: 'Nueva contraseña',
    password_input_placeholder: 'Nueva contraseña',
    button_label: 'Actualizar contraseña',
  },
};

export default LoginPage;
