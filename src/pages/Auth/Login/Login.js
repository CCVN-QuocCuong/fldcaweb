import React from "react";
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginValidation } from '../../../schema/auth'
import AuthenticationLayout from '../../../layouts/Authentication'
import './style.css'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { login, azureLoginSuccess } from '../../../store/actions/auth'
import { clearErrorMessage } from '../../../store/actions/auth'
import logoImage from '../../../assets/images/fieldlogging.png'
import azureIcon from '../../../assets/images/Microsoft_Azure.svg.png'
import { Auth, Hub } from 'aws-amplify'
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth'

// import logo from 'assets/images/logo.png';

export function Login(props) {
  const [error, isLoginSuccess] = useAppSelector((state) => [
    state.auth.errorLogin,
    state.auth.isLoginSuccess
  ]);
  const dispatch = useAppDispatch()

  useEffect(() => {
    const unsubscribe = Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          dispatch(azureLoginSuccess(data))
          break;
        case "signOut":
          dispatch(azureLoginSuccess(null))
          break;
      }
    });
    return unsubscribe;
  }, []);


  useEffect(() => {
    if (isLoginSuccess) {
      window.location.href = "/"
    }
  }, [isLoginSuccess])

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(LoginValidation)
  });


  const onSubmit = async (data) => {
    const params = {
      username: data.email,
      password: data.password,
      remember: data.remember
    }
    dispatch(login(params))
  };

  const watchEmail = watch("email")

  useEffect(() => {
    dispatch(clearErrorMessage())
  }, [watchEmail, dispatch]);

  const onLoginWithAzure = () => {
    Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Google })
  }

  return (
    <AuthenticationLayout>
      <main className="d-flex w-100 login-form">
        <div className="container d-flex flex-column">
          <div className="row vh-100">
            <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
              <div className="d-table-cell align-middle">

               
                <div className="card" style={{ marginTop: "30px" }}>
                  <div className="card-body">
                    <div className="m-sm-4">
                      <div className="text-center mt-4">
                        <div style={{ padding: 10}}> <img src={logoImage} alt="" className="avatar-big" /> </div>
                        <p className="lead">
                          Sign in your account
                        </p>
                      </div>
                      <form onSubmit={handleSubmit(onSubmit)} className="center_form">
                        {error && (
                          <div className="error login-error invalid-" style={{ color: 'red' }}>
                            <p>The email or password you entered is incorrect.</p>
                            <p>Please try again!</p>
                          </div>
                        )}

                        <div className="mb-3">
                          <label className="form-label">Email</label>
                          <input
                            {...register('email')}
                            onBlur={(e: any) => setValue("email", e.target.value.replace(" ", "").trim())}
                            className={`form-control form-control-lg rounded-0 ${errors.email ? 'is-invalid' : ''}`}
                            name="email"
                          />
                          <div className="invalid-feedback">{errors.email?.message}</div>
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Password</label>
                          <input
                            {...register('password')}
                            className={`form-control form-control-lg rounded-0 ${errors.password ? 'is-invalid' : ''}`}
                            type="password" name="password"
                          />
                          <div className="invalid-feedback">{errors.password?.message}</div>
                        </div>
                        <div style={{paddingTop: 20}} className="text-center mt-3">
                          <button type="submit" className="btn btn-block btn-primary-login rounded-0">Login</button>
                        </div>
                        <div  className="text-center mt-3">
                          <button type="button" onClick={() => onLoginWithAzure()} className="btn btn-block btn-primary-login-azure rounded-0">
                            <img src={azureIcon} alt="" className="avatar-azure" /> 
                            <span style={{padding: 5}}> Login with Azure </span> 
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
    </AuthenticationLayout >
  )
};

