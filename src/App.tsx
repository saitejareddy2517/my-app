import {
  KimaTransactionWidget,
  KimaProvider,
  FontSizeOptions,
  ModeOptions,
  ColorModeOptions
} from '@kimafinance/kima-transaction-widget'
import '@kimafinance/kima-transaction-widget/dist/index.css'

const App = () => {
  return (
   <div className='pt-0 pl-6 mt-0 flex justify-center items-start'>
    <KimaProvider>
      <KimaTransactionWidget
        theme={{
          colorMode: ColorModeOptions.dark,
          fontSize: FontSizeOptions.medium
        }}
        mode={ModeOptions.bridge}
        kimaBackendUrl='http://localhost:3001'
        kimaNodeProviderQuery='https://api-testnet.kima.finance'
        kimaGraphqlProviderQuery=''
        compliantOption={false}
        errorHandler={(e: any) => {
          console.log('error:', e)
        }}
        successHandler={() => {
          console.log('success')
        }}
        closeHandler={() => {
          console.log('closed')
        }}
      />
    </KimaProvider>
    </div>
  )
}

export default App
