import React, { useEffect } from 'react'
import classes from './loginPage.module.css'
import { useForm } from 'react-hook-form';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Title from '../../components/Title/Title';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { EMAIL } from '../../constants/patterns';

export default function LoginPage() {

    const { handleSubmit, register, formState: { errors }, } = useForm();

    const navigate = useNavigate();
    const { user, login } = useAuth();
    const [params] = useSearchParams();
    const returnURL = params.get('returnURL');
    
    useEffect(() => {
        if(!user) return;
        returnURL ? navigate(returnURL) : navigate('/');
    }, [user]);

    const submit = async ({email, password}) => {
        await login(email,password);
    };

  return (
    <div className={classes.container}>
        <div className={classes.details}>
            <Title title='Login'/>
            <form onSubmit={handleSubmit(submit)} noValidate>
                <Input type='email' label='Email' {...register('email', {
                    required: true,
                    pattern: EMAIL,
                })}
                error={errors.email} />

                <Input type='password' label='Password' {...register('password', {
                    required: true,
                })}
                error={errors.password} />
                <Button type='submit' text='Login' />
                <div className={classes.register}>
                    New User? &nbsp;
                    <Link to={`/register?${returnURL ? '?returnURL=' + returnURL : ''}`} className={classes.link}>
                        Register Here
                    </Link>
                </div>
            </form>
        </div>
    </div>
  )
}
