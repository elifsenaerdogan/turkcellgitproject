## Global Gereksinimler

Nodejs versiyonu: 18.14.0

## Nx Console

Nx CLI komutlarını vscode içerisinde nx console eklentisini yükleyerek arayüz yardımıyla çalıştırabilirsiniz

<a href="https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console" target="_blank" rel="noreferrer">Nx Console</a>

# dc-mfe-main

Dc altındaki tüm uygulamların çalışma alanı.

<a href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

## Projeyi GIT ile Kopyalamak

Projeyi submodule ler ile kopyalamak için git clone komutuna aşağıdaki gibi --recursive parametresi eklenmelidir.

`git clone --recursive [URL to Git repo]` 

Submoduleleri belirtilen branch ile clonelamak için aşağıdaki gibi -b master komutu eklenerek çalıştırılabilir.

`git clone -b master --recursive https://stash.turkcell.com.tr/git/scm/sh200711/dc-mfe-main.git` 
 

Mevcut repo ve tüm submodule değişikliklerini almak için aşağıdaki komut çalıştırılabilir.

`git pull --recurse-submodules`


Sadece submodule lerdeki değişiklikleri almak için aşağıdaki komut kullanılabilir. git config içerisindeki belirtilen branch a bakar.

`git submodule update --recursive --remote` 

`git submodule foreach --recursive git checkout master` 

## Yeni Proje Oluşturma ve Git Submodule olarak Ekleme

Öncelikle aşağıdaki komut ile proje oluşturulur.

`nx g @nrwl/next:app tl-paket-yukle`

Proje oluşturulduktan sonra tl-paket-yukle dizinine gidilerek tüm içerik aşağıdaki gibi ilgili repoya gönderilir.

`cd tl-paket-yukle`

`git init`

`git add --all`

`git commit -m "Initial Commit"`

`git remote add origin https://stash.turkcell.com.tr/git/scm/ux472219/tl-paket-yukle.git`

`git push -u origin HEAD:master`

Repoya değişiklikler gönderildikten sonra tl-paket-yükle dizini projeden silinir ve aşağıdaki "Git submodule ekleme" adımı uygulanır.

## Git submodule ekleme

Submodule yapılacak dizin daha önce git tarafından indexlenmiş ise submodule eklemeden önce aşağıdaki komut çalıştırılmalıdır.

`git rm -r apps/tl-paket-yukle`

Aşağıdaki komut ile belirtilen bir repo projeye submodule olarak eklenir. En sondaki dizin parametresi, submodule olarak eklenecek reponun projede hangi dizinde bulunacağını belirtir. Var olan projede projeler apps klasörü altında bulunduğundan apps/tl-paket-yukle, apps/baska-bir-uygulama gibi bulunacağı dizin mutlaka bellirtilmelidir.

`git submodule add https://stash.turkcell.com.tr/git/scm/ux472219/tl-paket-yukle.git apps/tl-paket-yukle`

## Ortak Komponentler

Projeler genelinde kullanılacak ortak komponentler libs/dc-mfe-ui kütüphanesi altında geliştirilmeli ve bulunmalıdır. Import edilecek komponent için relative path belirtmeye gerek yok. Typescript tarafında komponentlerin export edildiği dosya `'@dc-mfe-ui'` ifadesine eşlenmiştir.

Import Örneği

`import { AppButton } from '@dc-mfe-ui';`

## Antd Temalama

Antd stillendirmeleri `themeConfig.ts` dosyasında yapılmalıdır.

## Store 

Store içerisindeki name değeri, diğer uygulamalar ile çakışmaması için proje ismi prefix i ile verilmeli.

```
export const deneme = createSlice({
    name: '{projeIsmi}deneme',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})
```


## Paket Yönetimi

Alt proje özelinde kullanılacak spesifik paketler alt proje altına oluştulan package.json içerisine eklenip indirilebilir. React.js, Antd gibi paketler alt projelerde yüklenmemelidir. Bu paketler root dizinindeki package.json içerisinden yönetilmektedir.


## Çoklu Task Çalıştırma

Birden fazla uygulamayı aynı anda ayağa kaldırmak için aşağıdaki komut kullanılabilir. Build ve test için --tager parametresi değiştirilip aynı komut çalıştırılabilir.

`nx run-many --parallel --target=serve --projects=shell,sub-project-1,sub-project-2`

[Daha fazla bilgi](https://nx.dev/packages/nx/documents/run-many) 

## Bir Alt Uygulamayı Shell ile Birlikte Çalıştırma

Shell (Kapsayıcı Uygulama) ile beraber lokalden ayağa kaldırılmak istenen alt uygulamalar aşağıdaki gibi runWithShell sonrasına uygulama adları virgül ile ayrılarak parametre olarak eklenir. Parametreler arası boşluk verilmemelidir. 

Örnek Kullanım: `npm run runWithShell sub-project-1,sub-project-2` 

Parametrede paslanmayan proje isimleri lokalden değil uzaktan projeye import edilip, geliştirme yapılmayan lokal projelerin ayağa kaldırılması gerekliliğini ortadan kaldırmaktadır. Var olan tüm projeler dc-mfe-shell altındaki next.config dosyasındaki remoteList değişkenine eklenmelidir. Uygulamaların remoteEntry dosyalarının sağlandığı url `staticPath` değişkenine setlenmellidir. Bu URL henüz hazır değil.


## Generating new pages

The [@nrwl/next](https://nx.dev/packages/next) plugin has several [generators](https://nx.dev/packages/next#generators), and commands that serve to automate the creation of pages, components, and other common structures in the project.

Knowing this we will create our first page using a generator called `page` for this run the following command in the terminal

`nx g @nrwl/next:page about --project=dc-mfe-shell`

## Generating new pages specific directory

Run `nx g @nrwl/next:page crew --project=dc-mfe-shell --directory=about` to generate a new component.

## Generating new applications

Now we will need to create another application, which we will call checkout. Unlike the first application we created together with the workspace, we will need to use the following command to create a new Next.js application in the current workspace:

`nx g @nrwl/next:app sub-app-1`

## Generate a library

Run `nx g @nrwl/react:lib component-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@component-lib`.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=component-lib` to generate a new component.

## Code scaffolding specific directory

Run `nx g @nrwl/react:component my-component --project=component-lib --directory=foo/bar` to generate a new component.

## Development server

Run `nx serve shell` for a dev server. Navigate to http://localhost:6200/. The app will automatically reload if you change any of the source files.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.



