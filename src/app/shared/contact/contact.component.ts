import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section class="section-proyects mx-auto max-w-3xl py-5 px-5 flex flex-col mb-6 mt-6">
      <div class="Title-section flex gap-3">
        <h1 class="text-white font-bold text-2xl flex items-center mb-6">Email</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="29" viewBox="0 0 36 29" fill="none">
        <path d="M0.118646 4.35522C0.336551 3.35024 0.876341 2.45198 1.64961 1.80755C2.42288 1.16313 3.3838 0.810741 4.37498 0.808098L30.6249 0.736277C31.6161 0.733496 32.5788 1.08062 33.3555 1.72081C34.1321 2.36099 34.6766 3.25628 34.8998 4.26006L17.5382 15.3551L0.118646 4.35522ZM0.0160801 6.95198L0.0584356 23.1037L12.7312 14.9795L0.0160801 6.95198ZM14.8304 16.3083L0.482543 25.5035C0.839672 26.2807 1.40183 26.9366 2.10359 27.3947C2.80535 27.8529 3.61786 28.0944 4.44653 28.0914L30.6964 28.0195C31.525 28.0175 32.3359 27.7709 33.0348 27.3085C33.7338 26.8461 34.292 26.187 34.6446 25.4077L20.2488 16.2912L17.5452 18.0198L14.8304 16.3083ZM22.3431 14.9554L35.0583 23.0079L35.016 6.85622L22.3431 14.9532L22.3431 14.9554Z" fill="white"/>
        </svg>
      </div>
      <div class="flex gap-4">
        <input 
          type="text" 
          disabled="" 
          class="dark:bg-white/5 w-full py-3 px-4 rounded-lg grid place-items-center dark:text-slate-300" 
          value="diego.mejia@pascualbravo.edu.co">
        <button class="gap-2 w-fit flex items-center text-sm bg-bamboo-600 text-white py-2 px-3 rounded-lg font-semibold">
          <svg svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
          <path d="M4.178 16.712H1.0445C0.54314 16.712 0 16.3161 0 15.6675V1.0445C0 0.542095 0.39691 0 1.0445 0H15.6675C16.3161 0 16.712 0.545229 16.712 1.0445V4.178H19.8455C20.4941 4.178 20.89 4.72323 20.89 5.2225V19.8455C20.89 20.4941 20.3448 20.89 19.8455 20.89H5.2225C4.72114 20.89 4.178 20.4941 4.178 19.8455V16.712ZM5.74475 5.74475V19.3232H19.3232V5.74475H5.74475ZM15.1452 4.178V1.56675H1.56675V15.1452H4.178V5.2225C4.178 4.7201 4.57491 4.178 5.2225 4.178H15.1452Z" fill="white"/>
          </svg>
        </button>
      </div>
    </section>
  `,
  styles: []
})

export class ContactComponent {}
