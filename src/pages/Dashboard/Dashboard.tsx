import { useEffect, useState } from 'react'
import AdminLayout from '../../layouts/Admin'
import { useAppDispatch } from '../../hooks'
import { clearErrorMessage } from '../../store/actions/auth'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { 
  ANDROID,
  IOS,
  AU_USER_GROUP,
  NZ_USER_GROUP,
  AU_NZ_USER_GROUP,
  URL_AU_ANDROID,
  URL_AU_IOS,
  URL_NZ_ANDROID,
  URL_NZ_IOS,
} from '../../config/const'


export function Dashboard(props) {
  const dispatch = useAppDispatch()
  const [devicePlatform, setDevicePlatform] = useState(ANDROID)
  const [refreshIframe, setRefreshIframe] = useState(0)
  const [urlLink, setUrlLink] = useState('')
  const [isShow, setIsShow] = useState(false)
  const [groupName, setGroupName] = useState('')

  useEffect(() => {
    const dataUser = JSON.parse(localStorage.getItem('dataUser') || "")
    let nameGroup = null || ''
    dataUser && dataUser.groups && dataUser.groups.length > 0 && dataUser.groups.forEach(element => {
      const dataGroup = AU_NZ_USER_GROUP.find(p => p === element)
      if (dataGroup) {
        nameGroup = dataGroup
      }
    })
    if (nameGroup) {
      setGroupName(nameGroup)
      if (nameGroup === AU_USER_GROUP) setUrlLink(URL_AU_ANDROID)
      if (nameGroup === NZ_USER_GROUP) setUrlLink(URL_NZ_ANDROID)
      setIsShow(true)
    }
  }, [])

  useEffect(() => {
    dispatch(clearErrorMessage())
  }, [dispatch]);

  const handleSelect=(e)=>{
    if (e === ANDROID) {
      if (groupName === AU_USER_GROUP) setUrlLink(URL_AU_ANDROID)
      if (groupName === NZ_USER_GROUP) setUrlLink(URL_NZ_ANDROID)
    }
    if (e === IOS) {
      if (groupName === AU_USER_GROUP) setUrlLink(URL_AU_IOS)
      if (groupName === NZ_USER_GROUP) setUrlLink(URL_NZ_IOS)
    }
    setRefreshIframe(refreshIframe => refreshIframe + 1)
    setDevicePlatform(e)
  }

  return (
    <AdminLayout>
      { isShow && <div className="container-fluid-padding-default">
        <div style={{ padding: "10px"}}>
            <DropdownButton id="dropdown-basic-button" title="Select device platform to download" onSelect={handleSelect}>
              <Dropdown.Item eventKey={ANDROID} href="#/select-android">{ANDROID}</Dropdown.Item>
              <Dropdown.Item eventKey={IOS} href="#/select-ios">{IOS}</Dropdown.Item>
            </DropdownButton>
        </div>
        <div style={{ padding: "10px" }}>
          <iframe title={devicePlatform} id={devicePlatform} key={refreshIframe} src={urlLink} width="100%" height="400" />
        </div>
      </div>
      }
      { !isShow && <div className="container-fluid-padding-default">Your account has not been added to the specified group. Please add then come back here.</div>}
    </AdminLayout >
  )
};

