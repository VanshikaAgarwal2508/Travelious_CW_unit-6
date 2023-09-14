import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import{ TiLocation} from 'react-icons/ti'
import { useEffect } from 'react';

import {Link as Rlink} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { ALL_ROUTE, ONLY_LOGIN } from '../Redux/actionTypes';
import { getCurrentUser } from '../Redux/action';

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();



 
 const currUser = useSelector((store) => {
    return store.accountReducer.currUser;
  });
    useEffect(() => {
      const userEmail = JSON.parse(localStorage.getItem("userEmail"));
      if (userEmail) {
        console.log(userEmail)
        let currUser = { email : userEmail };
        getCurrentUser(currUser, dispatch);
      }
    }, []);

  
    console.log(currUser)
    
 const dispatch= useDispatch()
  const handleLogin=()=>{
    dispatch({type:ONLY_LOGIN})
  }

  const handleRegister=()=>{
    dispatch({type:ONLY_LOGIN})
  }

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'80px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        // backgroundColor={'green.500'}
       style={{backgroundImage: "linear-gradient(to right , #215f37, #125037, #0c4134, #0f332d, #132423)"}}

        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3}  /> : <HamburgerIcon w={5} h={5}  />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
            mr={"70px"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
             as={Rlink}
             to={'/'}
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('orange', 'white')}
            mr={'120px'}
            ml={"55px"}
            fontSize={'xl'}
            fontWeight={800}
            >
       <TiLocation size={30} style={{marginLeft:"-25px",marginBottom:"-33px"}}/>   TRLVS
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button
            as={Rlink}
            to={'/login'}
            fontSize={'lg'}
            fontWeight={500}
            color={"whiteAlpha.700"}
            variant={'link'}
            // href={'/login'}
            onClick={()=>{handleLogin()}}
            >
              {/* {
                currUser.email && "Log In"
              } */}
           {currUser.firstName ? currUser.firstName : "Log In"}
          </Button>
          <Button
          onClick={()=>{handleRegister()}}
             as={Rlink}
             to={'/register'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'lg'}
            fontWeight={600}
            color={'white'}
            p={"5"}
            // bg={'orange.400'}
            mr={"55px"}
            // href={'/register'}

            style={{backgroundImage: "linear-gradient(to right, #e26109, #e9701c, #ef7e2c, #f68c3a, #fc9949)"}}
            _hover={{
              bg: 'orange.300',

            }}>
          {/* {
            currUser.payload && " Register"
          }  */}
          Register
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('whiteAlpha.700', 'white');
  const linkHoverColor = useColorModeValue('gray.200', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link as={Rlink} to={navItem.href}
                p={10}
                // href={navItem.href ?? '#'}
                fontSize={'lg'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('orange.50', 'gray.700') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'orange.500' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'orange.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

{/* lllllllllll */}
      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Discover',
    children: [
      {
        label: 'Explore Your Destination',
        subLabel: 'Trending Design to inspire you',
        href: '/discover',
      },
      {
        label: 'New & Noteworthy',
        subLabel: 'Up-and-coming Designers',
        href: '/discover',
      },
    ],
  },
  {
    label: 'Services',
    children: [
      {
        label: 'Job Board',
        subLabel: 'Find your dream design job',
        href: '#',
      },
      {
        label: 'Freelance Projects',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
    ],
  },
  {
    label: 'Community',
    href: '/learn',
  },
  {
    label: 'About Us',
    href: 'hire',
  },
];