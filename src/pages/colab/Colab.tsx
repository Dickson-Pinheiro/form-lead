export default function Colab() {
    return (
        <div>
            <div className="p-4 flex justify-center h-screen w-full">
                <form className="max-w-[900px] w-fit h-fit flex flex-col justify-center">
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Acesse o material.</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">Descubra como fazer com que as marcas valorizem seu produto cultural.</p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="col-span-4">
                                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Como podemos te chamar?</label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                            <input type="text" name="name" id="name" autoComplete="username" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" required />
                                        </div>
                                    </div>
                                </div>
                                {/*<div className="col-span-4">
                                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">e-mail</label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">

                                            <input type="text" name="email" id="email" autoComplete="username" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" required />
                                        </div>
                                    </div>
                                </div>*/}
                                {/*<div className="col-span-4">
                                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Telefone</label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">

                                            <input type="text" name="telefone" id="telefone" autoComplete="username" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" required />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">About</label>
                                    <div className="mt-2">
                                        <textarea id="about" name="about" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                                    </div>
                                    <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">Photo</label>
                                    <div className="mt-2 flex items-center gap-x-3">
                                        <svg className="h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                                        </svg>
                                        <button type="button" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Change</button>
                                    </div>
                            </div>

                                <div className="col-span-full">
                                    <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
                                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                        <div className="text-center">
                                            <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                                            </svg>
                                            <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                                <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                                    <span>Upload a file</span>
                                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                    </div>
                                </div>*/}
                            </div>
                        </div>

                        {/*<div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Personal InhtmlFormation</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                                    <div className="mt-2">
                                        <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                                    <div className="mt-2">
                                        <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                    <div className="mt-2">
                                        <input id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Country</label>
                                    <div className="mt-2">
                                        <select id="country" name="country" autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                            <option>United States</option>
                                            <option>Canada</option>
                                            <option>Mexico</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">Street address</label>
                                    <div className="mt-2">
                                        <input type="text" name="street-address" id="street-address" autoComplete="street-address" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div className="sm:col-span-2 sm:col-start-1">
                                    <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">City</label>
                                    <div className="mt-2">
                                        <input type="text" name="city" id="city" autoComplete="address-level2" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
                                    <div className="mt-2">
                                        <input type="text" name="region" id="region" autoComplete="address-level1" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
                                    <div className="mt-2">
                                        <input type="text" name="postal-code" id="postal-code" autoComplete="postal-code" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                            </div>
                            </div>*/}

                        {/*<div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">We'll always let you know about important changes, but you pick what else you want to hear about.</p>

                            <div className="mt-10 space-y-10">
                                <fieldset>
                                    <legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
                                    <div className="mt-6 space-y-6">
                                        <div className="relative flex gap-x-3">
                                            <div className="flex h-6 items-center">
                                                <input id="comments" name="comments" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                            </div>
                                            <div className="text-sm leading-6">
                                                <label htmlFor="comments" className="font-medium text-gray-900">Comments</label>
                                                <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                                            </div>
                                        </div>
                                        <div className="relative flex gap-x-3">
                                            <div className="flex h-6 items-center">
                                                <input id="candidates" name="candidates" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                            </div>
                                            <div className="text-sm leading-6">
                                                <label htmlFor="candidates" className="font-medium text-gray-900">Candidates</label>
                                                <p className="text-gray-500">Get notified when a candidate applies htmlFor a job.</p>
                                            </div>
                                        </div>
                                        <div className="relative flex gap-x-3">
                                            <div className="flex h-6 items-center">
                                                <input id="offers" name="offers" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                            </div>
                                            <div className="text-sm leading-6">
                                                <label htmlFor="offers" className="font-medium text-gray-900">Offers</label>
                                                <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                
                            </div>
                        </div>*/}
                        <fieldset>
                            <legend className="text-sm font-semibold leading-6 text-gray-900">Como você avalia a seguinte frase: "O produtor de entretenimento deve entender de Marketing ou seu projeto não irá crescer"?</legend>
                            <p className="mt-1 text-sm leading-6 text-gray-600">Discordo totalmente</p>
                            <div className="mt-6 space-y-6">
                                <div className="flex items-center gap-x-3">
                                    <input id="note-1" name="note" type="radio" value={1} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label htmlFor="note-1" className="block text-sm font-normal leading-6 text-gray-900">1</label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input id="note-2" name="note" type="radio" value={2} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label htmlFor="note-2" className="block text-sm font-normal leading-6 text-gray-900">2</label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input id="note-3" name="note" type="radio" value={3} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label htmlFor="note-3" className="block text-sm font-normal leading-6 text-gray-900">3</label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input id="note-4" name="note" type="radio" value={4} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label htmlFor="note-4" className="block text-sm font-normal leading-6 text-gray-900">4</label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input id="note-5" name="note" type="radio" value={5} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label htmlFor="note-5" className="block text-sm font-normal leading-6 text-gray-900">5</label>
                                </div>
                            </div>
                            <p className="mt-1 text-sm leading-6 text-gray-600">Concordo totalmente</p>
                        </fieldset>
                        <fieldset>
                            <legend className="text-sm font-semibold leading-6 text-gray-900">Qual seu cargo no(s) projeto(s) de entretenimento que você participa?</legend>
                            
                            <div className="mt-6 space-y-6">
                                <div className="flex items-center gap-x-3">
                                    <input id="note-1" name="note" type="radio" value={1} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label htmlFor="note-1" className="block text-sm font-normal leading-6 text-gray-900">Eu sou o idealizador(a) e proponente do(s) projeto(s)</label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input id="note-2" name="note" type="radio" value={2} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label htmlFor="note-2" className="block text-sm font-normal leading-6 text-gray-900">Eu sou produtor(a) no projeto de terceiros</label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input id="note-3" name="note" type="radio" value={3} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label htmlFor="note-3" className="block text-sm font-normal leading-6 text-gray-900">Eu sou responsável pelo Marketing no(s) projeto(s) de terceiros</label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input id="note-4" name="note" type="radio" value={4} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label htmlFor="note-4" className="text-sm font-normal leading-6 items-center flex gap-2 text-gray-900">
                                        Outro: 
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                            <input type="text" name="name" id="name" autoComplete="username" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" required />
                                        </div></label>
                                </div>
                            </div>
                        
                        </fieldset>
                        <fieldset>
                            <legend className="text-sm font-semibold leading-6 text-gray-900">Quanto à renda que vem do(s) projeto(s) de entretenimento que você participa, qual situação mais se assemelha ao seu caso? </legend>
                            
                            <div className="mt-6 space-y-6">
                                <div className="flex items-center gap-x-3">
                                    <input id="note-1" name="note" type="radio" value={1} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label htmlFor="note-1" className="block text-sm font-normal leading-6 text-gray-900">Minha renda provém totalmente da Produção de Entretenimento</label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input id="note-2" name="note" type="radio" value={2} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label htmlFor="note-2" className="block text-sm font-normal leading-6 text-gray-900">Minha renda provém principalmente de outra(s) ocupação(es), não consigo me manter apenas com a Produção de Entretenimento.</label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input id="note-3" name="note" type="radio" value={3} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label htmlFor="note-3" className="block text-sm font-normal leading-6 text-gray-900">Minha renda provém proporcionalmente da Produção de Entretenimento e de outra(s) ocupação(ões) ao mesmo tempo.</label>
                                </div>
                                
                            </div>
                        
                        </fieldset>
                        <fieldset>
                            <legend className="text-sm font-semibold leading-6 text-gray-900">Por último, qual a sua faixa de renda pessoal por mês?</legend>
                            
                            <div className="mt-6 space-y-6">
                                <div className="flex items-center gap-x-3">
                                    <input id="note-1" name="note" type="radio" value={1} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label htmlFor="note-1" className="block text-sm font-normal leading-6 text-gray-900">Minha renda provém totalmente da Produção de Entretenimento</label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input id="note-2" name="note" type="radio" value={2} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label htmlFor="note-2" className="block text-sm font-normal leading-6 text-gray-900">Minha renda provém principalmente de outra(s) ocupação(es), não consigo me manter apenas com a Produção de Entretenimento.</label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input id="note-3" name="note" type="radio" value={3} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label htmlFor="note-3" className="block text-sm font-normal leading-6 text-gray-900">Minha renda provém proporcionalmente da Produção de Entretenimento e de outra(s) ocupação(ões) ao mesmo tempo.</label>
                                </div>
                                
                            </div>
                        
                        </fieldset>
                        <fieldset>
                            <legend className="text-sm font-semibold leading-6 text-gray-900">Por último, qual a sua faixa de renda pessoal por mês?</legend>
                            
                            <div className="mt-6 space-y-6">
                                <div className="flex items-center gap-x-3">
                                    <input id="note-1" name="note" type="radio" value={1} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label htmlFor="note-1" className="block text-sm font-normal leading-6 text-gray-900">Até 1 salário mínimo</label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input id="note-2" name="note" type="radio" value={2} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label htmlFor="note-2" className="block text-sm font-normal leading-6 text-gray-900">De 2 a 5 salários mínimos</label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input id="note-3" name="note" type="radio" value={3} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label htmlFor="note-3" className="block text-sm font-normal leading-6 text-gray-900">De 6 a 10 salários mínimos</label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input id="note-4" name="note" type="radio" value={4} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
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