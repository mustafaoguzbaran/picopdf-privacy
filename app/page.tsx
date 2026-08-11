const effectiveDate = "August 11, 2026";

const googlePrivacyUrl = "https://policies.google.com/privacy";
const adsPrivacyUrl = "https://policies.google.com/technologies/ads";
const playServicesUrl = "https://policies.google.com/privacy";

function BrandMark() {
  return (
    <div className="brand-mark" aria-hidden="true">
      <span className="brand-mark__fold" />
      <span className="brand-mark__line brand-mark__line--short" />
      <span className="brand-mark__line" />
    </div>
  );
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
      <span className="external" aria-hidden="true">↗</span>
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <header className="hero">
        <nav className="topbar" aria-label="Language navigation">
          <a className="brand" href="#top" aria-label="PicoPDF privacy policy home">
            <BrandMark />
            <span>
              <strong>PicoPDF</strong>
              <small>PDF Tools</small>
            </span>
          </a>
          <div className="language-links">
            <a href="#english">English</a>
            <a href="#turkce">Türkçe</a>
          </div>
        </nav>

        <div className="hero-copy" id="top">
          <div>
            <span className="eyebrow">Privacy first · Önce gizlilik</span>
            <h1>Privacy Policy</h1>
            <p className="hero-lead">
              PicoPDF processes your documents on your device. Your PDFs and photos are
              not uploaded to a PicoPDF developer server.
            </p>
            <p className="effective">Effective date: {effectiveDate}</p>
          </div>
          <aside className="privacy-card" aria-label="Privacy summary">
            <span className="lock" aria-hidden="true">●</span>
            <strong>Your files stay on your device</strong>
            <p>No account. No broad storage permission. No developer cloud.</p>
          </aside>
        </div>
      </header>

      <section className="policy" id="english" lang="en">
        <div className="section-heading">
          <span>EN</span>
          <div>
            <p>English</p>
            <h2>PicoPDF Privacy Policy</h2>
          </div>
        </div>

        <article>
          <h3>1. Scope</h3>
          <p>
            This Privacy Policy explains how the PicoPDF Android application
            (<code>com.mustafaoguzbaran.picopdf</code>) handles information when you
            compress, merge, split, organize, scan, or create PDF files.
          </p>

          <h3>2. Your documents and photos</h3>
          <p>
            Files you choose are processed locally on your device. PicoPDF does not
            upload document contents, photos, filenames, or finished PDFs to a server
            operated by the developer. The app uses Android&apos;s system file picker, so
            access is limited to files you select. Outputs are saved only to the location
            you choose.
          </p>
          <p>
            PicoPDF may keep a small, device-local list of recent results for convenience.
            This list can be cleared inside the app. Removing an item from the recent list
            does not automatically delete a PDF saved elsewhere on your device.
          </p>

          <h3>3. Document scanning</h3>
          <p>
            The document scanner is provided through Google Play services. Its scanning
            flow operates on-device and PicoPDF does not request broad camera permission.
            Google Play services may download scanner components, and only scans you
            approve are returned to PicoPDF.
          </p>

          <h3>4. Advertising and consent</h3>
          <p>
            PicoPDF uses Google AdMob and Google&apos;s User Messaging Platform (UMP) to
            display ads and manage privacy choices. Depending on your region and choices,
            Google and its advertising partners may collect or share:
          </p>
          <ul>
            <li>IP address, which may be used to estimate general location;</li>
            <li>app interactions such as launches, taps, and ad views;</li>
            <li>diagnostic and performance information; and</li>
            <li>device identifiers, including the Android advertising ID or app set ID.</li>
          </ul>
          <p>
            These data may be used for advertising, analytics, and fraud prevention. Where
            required, UMP asks for your choices before ads are requested. You can review or
            withdraw eligible choices from <strong>Settings → Privacy choices</strong> in
            PicoPDF. Declining personalised ads does not necessarily remove all ads; limited
            or non-personalised ads may still be shown.
          </p>

          <h3>5. Third-party services</h3>
          <ul>
            <li>
              <ExternalLink href={googlePrivacyUrl}>Google Privacy Policy</ExternalLink>
            </li>
            <li>
              <ExternalLink href={adsPrivacyUrl}>How Google uses data in advertising</ExternalLink>
            </li>
            <li>
              <ExternalLink href={playServicesUrl}>Google Play services privacy information</ExternalLink>
            </li>
          </ul>

          <h3>6. Retention and deletion</h3>
          <p>
            PicoPDF does not maintain a developer account or cloud document archive.
            Temporary processing files are kept only as needed for an operation. Local app
            history can be removed in PicoPDF, app data can be cleared in Android settings,
            and the app can be uninstalled. Files saved to shared device storage remain
            until you delete them with PicoPDF, Android&apos;s file manager, or another app.
            Google retains information according to its own policies and your consent
            choices.
          </p>

          <h3>7. Security</h3>
          <p>
            PicoPDF limits file access to user-selected items, blocks cleartext network
            traffic, and processes PDF content locally. Network transfers performed by
            Google services are encrypted in transit. No method of storage or transmission
            can be guaranteed to be completely secure.
          </p>

          <h3>8. Children</h3>
          <p>
            PicoPDF is a general-purpose utility and is not directed specifically to
            children under 13. The app does not knowingly request names, email addresses,
            or account registration from children.
          </p>

          <h3>9. Changes and contact</h3>
          <p>
            This policy may be updated when PicoPDF&apos;s features or service providers
            change. The effective date above will be revised. For privacy questions, use
            the developer contact method displayed on PicoPDF&apos;s Google Play listing.
          </p>
        </article>
      </section>

      <section className="policy policy--tr" id="turkce" lang="tr">
        <div className="section-heading">
          <span>TR</span>
          <div>
            <p>Türkçe</p>
            <h2>PicoPDF Gizlilik Politikası</h2>
          </div>
        </div>

        <article>
          <h3>1. Kapsam</h3>
          <p>
            Bu Gizlilik Politikası, PicoPDF Android uygulamasının
            (<code>com.mustafaoguzbaran.picopdf</code>) PDF sıkıştırma, birleştirme,
            ayırma, düzenleme, tarama ve oluşturma işlemlerinde bilgileri nasıl ele
            aldığını açıklar.
          </p>

          <h3>2. Belgeleriniz ve fotoğraflarınız</h3>
          <p>
            Seçtiğiniz dosyalar cihazınızda yerel olarak işlenir. PicoPDF; belge
            içeriklerini, fotoğrafları, dosya adlarını veya oluşturulan PDF&apos;leri
            geliştirici tarafından işletilen bir sunucuya yüklemez. Uygulama Android
            sistem dosya seçicisini kullanır ve yalnızca sizin seçtiğiniz dosyalara
            erişir. Çıktılar yalnızca belirlediğiniz konuma kaydedilir.
          </p>
          <p>
            PicoPDF kolaylık sağlamak amacıyla son sonuçların küçük bir listesini cihazda
            tutabilir. Bu liste uygulama içinden temizlenebilir. Bir sonucu listeden
            kaldırmak, cihazın başka bir konumuna kaydedilen PDF&apos;yi otomatik olarak
            silmez.
          </p>

          <h3>3. Belge tarama</h3>
          <p>
            Belge tarayıcı Google Play hizmetleri üzerinden sağlanır. Tarama akışı cihazda
            çalışır ve PicoPDF geniş kapsamlı kamera izni istemez. Google Play hizmetleri
            tarayıcı bileşenlerini indirebilir; yalnızca onayladığınız taramalar PicoPDF&apos;e
            aktarılır.
          </p>

          <h3>4. Reklamlar ve rıza</h3>
          <p>
            PicoPDF reklam göstermek ve gizlilik seçimlerini yönetmek için Google AdMob ile
            Google User Messaging Platform (UMP) kullanır. Bölgenize ve seçimlerinize bağlı
            olarak Google ve reklam iş ortakları şunları toplayabilir veya paylaşabilir:
          </p>
          <ul>
            <li>genel konumu tahmin etmek için kullanılabilen IP adresi;</li>
            <li>uygulama açılışları, dokunuşlar ve reklam görüntülemeleri gibi etkileşimler;</li>
            <li>tanılama ve performans bilgileri; ve</li>
            <li>Android reklam kimliği veya app set ID gibi cihaz tanımlayıcıları.</li>
          </ul>
          <p>
            Bu veriler reklam, analiz ve dolandırıcılığı önleme amaçlarıyla kullanılabilir.
            Gerekli bölgelerde UMP, reklam isteğinden önce tercihlerinizi sorar. Uygun
            seçimleri PicoPDF içindeki <strong>Ayarlar → Gizlilik seçenekleri</strong>
            {" "}bölümünden inceleyebilir veya geri çekebilirsiniz. Kişiselleştirilmiş reklamı
            reddetmek tüm reklamları kaldırmayabilir; sınırlı ya da kişiselleştirilmemiş
            reklamlar gösterilebilir.
          </p>

          <h3>5. Üçüncü taraf hizmetleri</h3>
          <ul>
            <li>
              <ExternalLink href={googlePrivacyUrl}>Google Gizlilik Politikası</ExternalLink>
            </li>
            <li>
              <ExternalLink href={adsPrivacyUrl}>Google&apos;ın reklam verilerini kullanımı</ExternalLink>
            </li>
            <li>
              <ExternalLink href={playServicesUrl}>Google Play hizmetleri gizlilik bilgileri</ExternalLink>
            </li>
          </ul>

          <h3>6. Saklama ve silme</h3>
          <p>
            PicoPDF geliştirici hesabı veya bulut belge arşivi tutmaz. Geçici işlem
            dosyaları yalnızca işlem için gerektiği sürece saklanır. Yerel uygulama geçmişi
            PicoPDF içinden silinebilir; Android ayarlarından uygulama verileri
            temizlenebilir veya uygulama kaldırılabilir. Paylaşılan cihaz depolamasına
            kaydettiğiniz dosyalar, siz PicoPDF, Android dosya yöneticisi veya başka bir
            uygulamayla silene kadar kalır. Google, bilgileri kendi politikaları ve rıza
            seçimleriniz doğrultusunda saklar.
          </p>

          <h3>7. Güvenlik</h3>
          <p>
            PicoPDF dosya erişimini seçtiğiniz öğelerle sınırlar, şifresiz ağ trafiğini
            engeller ve PDF içeriğini yerel olarak işler. Google hizmetlerinin ağ aktarımları
            taşıma sırasında şifrelenir. Hiçbir saklama veya iletim yönteminin tamamen
            güvenli olduğu garanti edilemez.
          </p>

          <h3>8. Çocuklar</h3>
          <p>
            PicoPDF genel amaçlı bir yardımcı uygulamadır ve özellikle 13 yaşın altındaki
            çocuklara yönelik değildir. Uygulama çocuklardan bilerek ad, e-posta adresi veya
            hesap kaydı istemez.
          </p>

          <h3>9. Değişiklikler ve iletişim</h3>
          <p>
            PicoPDF özellikleri veya hizmet sağlayıcıları değiştiğinde bu politika
            güncellenebilir ve yukarıdaki yürürlük tarihi yenilenir. Gizlilik soruları için
            PicoPDF&apos;in Google Play mağaza girişinde gösterilen geliştirici iletişim
            yöntemini kullanabilirsiniz.
          </p>
        </article>
      </section>

      <footer>
        <a className="brand brand--footer" href="#top">
          <BrandMark />
          <span><strong>PicoPDF</strong><small>Privacy Policy · Gizlilik Politikası</small></span>
        </a>
        <p>Local-first PDF tools for Android.</p>
      </footer>
    </main>
  );
}
