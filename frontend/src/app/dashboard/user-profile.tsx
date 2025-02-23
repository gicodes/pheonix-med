"use client"

import { Badge, Box, Button, Card, Divider, Stack, Typography } from '@mui/material';
import { useAuth } from '../contexts/auth.context';
import { VerifyWarning } from './warning-card';
import { useEffect, useState } from 'react';
import LogoTxt from '../assets/logo';
import Image from 'next/image';
import Link from 'next/link';

const cardSx = { 
  p: { 
    xs: '0.75rem 1rem', 
    sm: '1rem 2rem', 
    md: '1rem 2rem',
  },
  width: '100%',
  margin: 'auto',    
  bgcolor: '#303030',
  color: 'whitesmoke',
  minWidth: { sm: '444px', md: '500px'},
  maxWidth: { md: '555px'},
  minHeight: { xs: '212px', sm: '200px', md: '224px'}
}

export interface UserData {
  id: number | null;
  name: string | null;
  email: string | null;
  role: "admin" | "nurse" | "doctor" | null;
  user_profile?: object | null;
};

interface UserProfile {
  id: number | null;
  user_profile: {
    dob: string;
    nursesLicense?: string;
    doctorsLicense?: string;
    fullName: string;
    termsAccepted: boolean;
    profileVerified?: boolean;
    image?: string;
  }
  location?: string | null;
  reviews?: object | null;
  notifications?: object | null;
}

const UserProfile = () => {
  const { state } = useAuth();
  const [ user, setUser ] = useState<UserData>();
  const [ userProfile, setUserProfile ] = useState<UserProfile>();

  const isNurse = user?.role==="nurse";
  const user_verified = userProfile?.user_profile?.profileVerified;
  const user_pfp = userProfile?.user_profile?.image || "/images/user_pfp.svg";

  const license_txt = isNurse ? "NMCN approved" : "MDCN approved";
  const office_area_fallback_txt = isNurse ? "Reviews" : "Notifications";
  const office_area = isNurse ? userProfile?.reviews : userProfile?.notifications;
  const license = isNurse ? userProfile?.user_profile?.nursesLicense : userProfile?.user_profile?.doctorsLicense;

  useEffect(() => {
    const userData = state?.user;
    if (userData) setUser(userData);
    
    const getUserByRole = async () => {
      const user_id = userData?.id;
      const user_role = userData?.role;
      if (!userData?.role || !userData?.id) return;

      const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL as string;
      const response = await fetch(`${SERVER_URL}/api/${user_role}s/${user_id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
    
      const data = await response.json();
      setUserProfile(data)
    }

    getUserByRole();
    }, [state]
  )

  return (
    <Box width={'100%'}>
      {user_verified===undefined && <VerifyWarning />}

      <Stack
        direction={{ md: 'row'}} gap={1}
        display={{ xs: 'grid', sm: 'grid', md: 'flex' }}
        justifyContent={{ sm: 'center', md: 'space-between'}}
      >
        <section className='fullWidth'>
          <Card sx={cardSx}>
            <Box>
              <Stack width={'100%'} display={'flex'}>
                <Badge sx={{ fontSize: "small", display: 'flex', justifyContent: 'flex-end'}}>
                  <LogoTxt />
                </Badge>
              </Stack>
              
              <Stack>
                <Typography fontSize={'smaller'} color='wheat'>
                  {isNurse ? "Nurse" : "Doctor" }
                </Typography>
                <Typography my={1}>
                  {user?.name}
                </Typography>
              </Stack>

              <Stack 
                direction={'row'} 
                display={'flex'} 
                justifyContent={'space-between'} 
                my={2}
              >
                <Typography fontSize={'smaller'} color='#909090'>
                  {user?.email}
                </Typography>
                <Button variant='contained' sx={{ mx: 1}}>
                  <Link href={''}>
                  🥼 Edit
                  </Link>
                </Button>
              </Stack>
            </Box>
          </Card>
        </section>
        
        <section // office desk
          id={`${user?.role}`} 
          className='fullWidth'
        >
          <Card sx={cardSx}> 
            { user_verified ? (
              <Box textAlign={'center'} p={2} bgcolor={'#202020'}>
                <Typography fontSize={'small'} color='burlywood'>
                  Upload supporting documents to activate account
                </Typography>
                <Typography fontSize={'11px'} mt={3}>
                  <span className='grid-start'>
                    <span>You are required to provide the following PDF documents for verification ::</span>
                    <span className='block mt-1 text-wheat'>A clear image of your valid medical license</span>
                    <span className='block text-wheat'>Your updated CV</span>
                    <span className='block mb-1 text-wheat'>Your most recent employment letter</span>
                    <span>Submit these documents via <Link className='text-wheat' href={'/upload-docsument'}>Upload A Document</Link></span>
                  </span>
                </Typography>
              </Box>) : (
              <Box 
                display={'flex'} 
                justifyContent={'space-between'} 
                minHeight={'180px'}
              >
                <Stack pt={1} gap={3} width={'30%'}>
                  <Image 
                    width="75" 
                    height="75" 
                    src={user_pfp} 
                    className='round-circle'
                    alt="Pheonix Med User PFP"
                  />
                  { isNurse && <Typography> {userProfile?.location}</Typography>}
                  <Typography fontSize={'10px'} color='gray'>
                    {license_txt} 
                    <span className='block text-silver let-sp fs-mid mono'> {license}</span>
                  </Typography>
                </Stack>
                
                <Stack pt={1} mx={'auto'} width={'70%'} bgcolor={'#1a1a1a'}>
                  <Box textAlign={'center'}>
                    <h5 className='mb-1 text-gray'>{office_area_fallback_txt} 
                      <Divider sx={{ bgcolor: 'gray'}}/> 
                    </h5>

                    { office_area && Object.entries(office_area).length < 1 ? 
                      <Typography fontSize={'smaller'}>
                        You Currently Have No {office_area_fallback_txt}
                      </Typography> : 
                      <Typography fontSize={'smaller'}>
                        {JSON.stringify(office_area)}
                      </Typography>
                    }
                  </Box>
                </Stack>
              </Box>
            )}
          </Card>
        </section>
      </Stack>
    </Box>
  )
}

export default UserProfile