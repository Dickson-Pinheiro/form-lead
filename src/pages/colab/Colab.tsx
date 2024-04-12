import { FormEvent, useState } from "react"
import { leadService } from "../../services/leadService"
import { toast } from "react-toastify"

export default function Colab() {
    const [apelido, setApelido] = useState('')
    const [marketingRange, setMarketingRange] = useState(0)
    const [cargo, setCargo] = useState('')
    const [principalRenda, setPrincipalRenta] = useState('')
    const [rendaPessoal, setRendaPessoal] = useState('')
    const [outro, setOutro] = useState('')
    const { createOrUpdateLead } = leadService()

    async function submitForm(e: FormEvent) {
        e.preventDefault()
        console.log(apelido, marketingRange, cargo, principalRenda, rendaPessoal, outro)
        try {
            if (marketingRange && cargo && principalRenda && rendaPessoal) {
                if (cargo === "outro") {
                    if (!outro) {
                        toast("Preencha as informações do seu cargo.")
                        return
                    }
                    await createOrUpdateLead({
                        apelido,
                        cargo: outro,
                        marketing_range: marketingRange,
                        principal_renda: principalRenda,
                        renda_pessoal: principalRenda
                    })
                    setApelido('')
                    setCargo('')
                    setMarketingRange(0)
                    setOutro('')
                    setPrincipalRenta('')
                    setRendaPessoal('')
                    toast("Cadastro realizado com sucesso")
                    return
                } else {
                    await createOrUpdateLead({
                        apelido,
                        cargo: cargo,
                        marketing_range: marketingRange,
                        principal_renda: principalRenda,
                        renda_pessoal: principalRenda
                    })
                    setApelido('')
                    setCargo('')
                    setMarketingRange(0)
                    setOutro('')
                    setPrincipalRenta('')
                    setRendaPessoal('')
                    toast("Cadastro realizado com sucesso")
                    return
                }
            }
        } catch (error) {
            toast("Preencha todos os dados para seguir com a inscrição.")
            console.log(error)
        }

    }

    return (
        <div>
            <div className="p-4 flex justify-center h-screen w-full">
                <form onSubmit={submitForm} className="max-w-[900px] w-fit h-fit flex flex-col justify-center">
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Acesse o material.</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">Descubra como fazer com que as marcas valorizem seu produto cultural.</p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="col-span-4">
                                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Como podemos te chamar?</label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                            <input type="text" name="name" id="name" value={apelido} onChange={(e) => setApelido(e.target.value)} autoComplete="username" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" required />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <fieldset>
                            <legend className="text-sm font-semibold leading-6 text-gray-900">Como você avalia a seguinte frase: "O produtor de entretenimento deve entender de Marketing ou seu projeto não irá crescer"?</legend>
                            <p className="mt-1 text-sm leading-6 text-gray-600">Discordo totalmente</p>
                            <div className="mt-6 space-y-6">
                                <div className="flex items-center gap-x-3">
                                    <input id="note-1" name="note" type="radio" onChange={() => {console.log("aqui")}} value={1} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label htmlFor="note-1" className="block text-sm font-normal leading-6 text-gray-900">1</label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input id="note-2" name="note" type="radio" onChange={() => setMarketingRange(2)} value={2} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label htmlFor="note-2" className="block text-sm font-normal leading-6 text-gray-900">2</label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input id="note-3" name="note" type="radio" onChange={() => setMarketingRange(3)} value={3} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label htmlFor="note-3" className="block text-sm font-normal leading-6 text-gray-900">3</label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input id="note-4" name="note" type="radio" onChange={() => setMarketingRange(4)} value={4} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label htmlFor="note-4" className="block text-sm font-normal leading-6 text-gray-900">4</label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input id="note-5" name="note" type="radio" onChange={() => setMarketingRange(5)} value={5} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label htmlFor="note-5" className="block text-sm font-normal leading-6 text-gray-900">5</label>
                                </div>
                            </div>
                            <p className="mt-1 text-sm leading-6 text-gray-600">Concordo totalmente</p>
                        </fieldset>
                        <fieldset>
                            <legend className="text-sm font-semibold leading-6 text-gray-900">Qual seu cargo no(s) projeto(s) de entretenimento que você participa?</legend>
                            <div className="mt-6 space-y-6">
                                <div className="flex items-center gap-x-3">
                                    <input id="note-1" name="cargo" type="radio" value={1} onChange={() => setCargo("Eu sou o idealizador(a) e proponente do(s) projeto(s)")} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label htmlFor="note-1" className="block text-sm font-normal leading-6 text-gray-900">Eu sou o idealizador(a) e proponente do(s) projeto(s)</label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input id="note-2" name="cargo" type="radio" value={2} onChange={() => setCargo("Eu sou produtor(a) no projeto de terceiros")} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label htmlFor="note-2" className="block text-sm font-normal leading-6 text-gray-900">Eu sou produtor(a) no projeto de terceiros</label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input id="note-3" name="cargo" type="radio" value={3} onChange={() => setCargo("Eu sou responsável pelo Marketing no(s) projeto(s) de terceiros")} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label htmlFor="note-3" className="block text-sm font-normal leading-6 text-gray-900">Eu sou responsável pelo Marketing no(s) projeto(s) de terceiros</label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input id="note-4" name="cargo" type="radio" onChange={() => setCargo('outro')} value={4} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label htmlFor="note-4" className="text-sm font-normal leading-6 items-center flex gap-2 text-gray-900">
                                        Outro:
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                            <input type="text" name="name" id="name" value={outro} onChange={(e) => setOutro(e.target.value)} autoComplete="username" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" />
                                        </div></label>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend className="text-sm font-semibold leading-6 text-gray-900">Quanto à renda que vem do(s) projeto(s) de entretenimento que você participa, qual situação mais se assemelha ao seu caso? </legend>

                            <div className="mt-6 space-y-6">
                                <div className="flex items-center gap-x-3">
                                    <input id="note-1" name="renda" type="radio" value={1} onChange={() => setPrincipalRenta("Minha renda provém totalmente da Produção de Entretenimento")} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label htmlFor="note-1" className="block text-sm font-normal leading-6 text-gray-900">Minha renda provém totalmente da Produção de Entretenimento</label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input id="note-2" name="renda" type="radio" value={2} onChange={() => setPrincipalRenta("Minha renda provém principalmente de outra(s) ocupação(es), não consigo me manter apenas com a Produção de Entretenimento.")} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label htmlFor="note-2" className="block text-sm font-normal leading-6 text-gray-900">Minha renda provém principalmente de outra(s) ocupação(es), não consigo me manter apenas com a Produção de Entretenimento.</label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input id="note-3" name="renda" type="radio" value={3} onChange={() => setPrincipalRenta("Minha renda provém proporcionalmente da Produção de Entretenimento e de outra(s) ocupação(ões) ao mesmo tempo.")} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label htmlFor="note-3" className="block text-sm font-normal leading-6 text-gray-900">Minha renda provém proporcionalmente da Produção de Entretenimento e de outra(s) ocupação(ões) ao mesmo tempo.</label>
                                </div>

                            </div>

                        </fieldset>

                        <fieldset>
                            <legend className="text-sm font-semibold leading-6 text-gray-900">Por último, qual a sua faixa de renda pessoal por mês?</legend>

                            <div className="mt-6 space-y-6">
                                <div className="flex items-center gap-x-3">
                                    <input id="note-1" name="renda-pessoal" type="radio" value={1} onChange={() => setRendaPessoal('Até 1 salário mínimo')} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label htmlFor="note-1" className="block text-sm font-normal leading-6 text-gray-900">Até 1 salário mínimo</label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input id="note-2" name="renda-pessoal" type="radio" value={2} onChange={() => setRendaPessoal("De 2 a 5 salários mínimos")} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label htmlFor="note-2" className="block text-sm font-normal leading-6 text-gray-900">De 2 a 5 salários mínimos</label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input id="note-3" name="renda-pessoal" type="radio" onChange={() => setRendaPessoal("De 6 a 10 salários mínimos")} value={3} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label htmlFor="note-3" className="block text-sm font-normal leading-6 text-gray-900">De 6 a 10 salários mínimos</label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input id="note-4" name="renda-pessoal" type="radio" onChange={() => setRendaPessoal("De 6 a 10 salários mínimos")} value={4} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label htmlFor="note-4" className="block text-sm font-normal leading-6 text-gray-900">Acima de 10 salários mínimos</label>
                                </div>
                            </div>

                        </fieldset>
                    </div>
                    <div className="mt-6 flex items-center justify-start p-4">
                        <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}