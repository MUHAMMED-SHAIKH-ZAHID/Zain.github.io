import {useIntl} from 'react-intl'
import {MenuItem} from './MenuItem'
import {MenuInnerWithSub} from './MenuInnerWithSub'
import {MegaMenu} from './MegaMenu'
import { PageTitleWrapper } from '../../toolbar/page-title'
import { ToolbarType, useLayout } from '../../../core'
import clsx from 'clsx'

const showPageTitle = (appToolbarLayout?: ToolbarType, appPageTitleDisplay?: boolean): boolean => {
  const viewsWithPageTitles = ['classic', 'reports', 'saas']
  if (!appToolbarLayout || !appPageTitleDisplay) {
    return false
  }

  return appPageTitleDisplay && viewsWithPageTitles.some((t) => t === appToolbarLayout)
}

export function MenuInner() {
  const intl = useIntl()
  const {config, classes} = useLayout()
  if (!config.app?.toolbar?.display) {
    return null
  }

  const isPageTitleVisible = showPageTitle(
    config.app?.toolbar?.layout,
    config.app?.pageTitle?.display
  )
  return (
    <>
      <div
      id='kt_app_toolbar'
      className='pe-2'
    >

    </div>
      {isPageTitleVisible && <PageTitleWrapper />}
      



      {/* <MenuInnerWithSub
        isMega={true}
        title='Layouts'
        to='/mega-menu'
        menuPlacement='bottom-start'
        menuTrigger='click'
      >
        <MegaMenu />
      </MenuInnerWithSub> */}
    </>
  )
}
