import { getProviders, signIn as signIntoProvider } from "next-auth/react";
import { Header } from "../../components/Header";
const signIn = ({providers}) => {
  return (
    <>
    <Header />

    <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
        <img className="w-80" src="https://links.papareact.com/ocw" />
        <p className="text-xs italic">This is not a real app, just for test a test of ability and eeducational purpose</p>
        <div className="mt-40">

            {
                Object.values(providers).map(provider =>(
                    <div key={provider.name}>
                        <button className="bg-blue-500 rounded-lg p-3 text-white" onClick={()=> signIntoProvider(provider.id, {callbackUrl: "/"})}>
                            Sign In with {provider.name}
                        </button>
                    </div>
                ))
            }
        </div>
    </div>
    </>
  )
}

export async function getServerSideProps(){
    const providers = await getProviders();

    return {
        props: {
            providers,
        },
    }
}

export default signIn