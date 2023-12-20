import { Fragment } from 'react'
import emtechLogo from '../assets/images/logo.png'
import { Menu, Transition } from '@headlessui/react'
import { useDispatch } from 'react-redux'
import { clearLocalStorage } from '../utils/storageUtils'
import { logout } from '../pages/login/login-slice'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../routes/routeConfig'

export function LogoHeader() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isLoggedIn } = useAuth()

  return (
    <div className="tw-w-full tw-py-6 tw-flex tw-justify-between tw-items-center tw-px-28 ">
      <img
        src={emtechLogo}
        alt="EMTECH Logo"
        className="tw-max-h-5 tw-cursor-pointer"
        onClick={(e) => {
          e.preventDefault()
          navigate(PATH.home)
        }}
      />
      {isLoggedIn && (
        <Menu as="div" className="tw-relative">
          <div>
            <Menu.Button className="tw-relative tw-rounded-full focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-primary focus:tw-ring-offset-2 focus:tw-ring-offset-white">
              <img
                className="tw-h-8 tw-w-8 tw-rounded-full"
                src="https://picsum.photos/200/300"
                alt=""
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="tw-transition tw-ease-out tw-duration-100"
            enterFrom="tw-transform tw-opacity-0 tw-scale-95"
            enterTo="tw-transform tw-opacity-100 tw-scale-100"
            leave="tw-transition tw-ease-in tw-duration-75"
            leaveFrom="tw-transform tw-opacity-100 tw-scale-100"
            leaveTo="tw-transform tw-opacity-0 tw-scale-95"
          >
            <Menu.Items
              className="tw-absolute tw-right-0 tw-z-10 tw-mt-2 tw-w-48 tw-origin-top-right tw-rounded-md tw-bg-white tw-py-1 tw-shadow-lg
              tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none"
            >
              <Menu.Item>
                <a
                  href="/"
                  className="tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700"
                  onClick={(e) => {
                    e.preventDefault()
                    navigate(PATH.createRelease)
                  }}
                >
                  Create New Release
                </a>
              </Menu.Item>
              {/* <Menu.Item>
                <a
                  href="/"
                  className="tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700"
                >
                  Edit Release
                </a>
              </Menu.Item> */}
              <Menu.Item>
                <a
                  href="/"
                  className="tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700"
                  onClick={(e) => {
                    e.preventDefault()
                    clearLocalStorage()
                    dispatch(logout())
                  }}
                >
                  Sign out
                </a>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      )}
    </div>
  )
}
