
import { KTCard } from '../../../_metronic/helpers'
import { UsersListHeader } from '../../modules/apps/user-management/users-list/components/header/UsersListHeader'
import { ListViewProvider, useListView } from '../../modules/apps/user-management/users-list/core/ListViewProvider'
import { QueryRequestProvider } from '../../modules/apps/user-management/users-list/core/QueryRequestProvider'
import { QueryResponseProvider } from '../../modules/apps/user-management/users-list/core/QueryResponseProvider'
import { UsersTable } from '../../modules/apps/user-management/users-list/table/UsersTable'
import { suplierColumns } from '../../modules/apps/user-management/users-list/table/columns/_columns'
import { UserEditModal } from '../../modules/apps/user-management/users-list/user-edit-modal/UserEditModal'



const SuplierList = () => {
  const {itemIdForUpdate} = useListView()

  const Data = [
    { name: 'Damini Barman', mobile: '4394377847', email: 'hazelgulati@gmail.com', company: 'Bains-Hayre', location: 'Nagaon' },
    { name: 'Reyansh Brar', mobile: '01586438688', email: 'abram63@chad-hari.info', company: 'Ray-Banik', location: 'Jalandhar' },
    { name: 'Indrans Rau', mobile: '05367007837', email: 'rheachoudhry@hotmail.com', company: 'Chakrabarti and Sons', location: 'Tiruvottiyur' },
    { name: 'Biju Seshadri', mobile: '07523392876', email: 'gbajwa@gmail.com', company: 'Karpe Group', location: 'Ambala' },
    { name: 'Sara Gara', mobile: '360907267', email: 'irarattan@yahoo.com', company: 'Lall Ltd', location: 'Chennai' },
    { name: 'Jhanvi Bhalla', mobile: '02851144081', email: 'fkhare@shetty-raman.com', company: 'Comar, Banik and Tata', location: 'North Dumdum' },
    { name: 'Mahika Vala', mobile: '4273796873', email: 'warya@yahoo.com', company: 'Dua-Sandhu', location: 'Farrukhabad' },
    { name: 'Farhan Keer', mobile: '5696731163', email: 'xchander@chatterjee.org', company: 'Kakar-Sathe', location: 'Indore' },
    { name: 'Ehsaan Lad', mobile: '08340161555', email: 'dalalryan@tailor.biz', company: 'Rege, Batra and Chaudhary', location: 'Tezpur' },
    { name: 'Mishti Ghosh', mobile: '05631026121', email: 'dhari@dhar.com', company: 'Lall-Deep', location: 'Rajahmundry' },
    { name: 'Tiya Deshmukh', mobile: '+910463818575', email: 'zoyamannan@gmail.com', company: 'Soman Inc', location: 'Raurkela Industrial Township' },
    { name: 'Vardaniya Chadha', mobile: '04209626988', email: 'priyansh35@dara.com', company: 'Gera PLC', location: 'Thrissur' },
    { name: 'Lavanya Mane', mobile: '+916190700411', email: 'adahhans@gmail.com', company: 'Walia-Babu', location: 'Tumkur' },
    { name: 'Shray Gera', mobile: '03492304683', email: 'lagan89@gmail.com', company: 'Bakshi PLC', location: 'Gurgaon' },
    { name: 'Tushar Vohra', mobile: '4276204925', email: 'bamble@iyer.org', company: 'Bal-Mane', location: 'Amravati' },
    { name: 'Mohanlal Amble', mobile: '0654412041', email: 'zcherian@yahoo.com', company: 'Bhagat, Barman and Mannan', location: 'Howrah' },
    { name: 'Zaina Karan', mobile: '2073016092', email: 'gbadal@chaudhari-tak.com', company: 'Devan-Sahni', location: 'Bhiwandi' },
    { name: 'Ivana Lal', mobile: '+914493129088', email: 'vivaanlal@hotmail.com', company: 'Ramakrishnan-Bhat', location: 'Noida' },
    { name: 'Romil Gole', mobile: '0613671074', email: 'nakultalwar@hotmail.com', company: 'Ganesan, Vig and Gour', location: 'Sultan Pur Majra' },
    { name: 'Zoya Choudhry', mobile: '09116086639', email: 'nitya75@gmail.com', company: 'Khosla-Kaur', location: 'Bhopal' }
  ];
  
  
  return (
    <>
      <KTCard>
        <UsersTable column={suplierColumns} Data={Data} Title={'Suplier'} />
      </KTCard>
      {itemIdForUpdate !== undefined && <UserEditModal />}
    </>
  )
}

const SuplierListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider >
      <ListViewProvider>
        <SuplierList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {SuplierListWrapper}
