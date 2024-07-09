import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  active: boolean = false;
  toggleActiveClass() {
    this.active = !this.active;
  }
  title = 'angular-UTC';
  gambar;
  scrollY: number = 0;
  infoPMB;
  navLinks;
  @HostListener('window:scroll', ['$event'])
  function(event: any) {
    this.scrollY = window.scrollY;
  }
  constructor() {
    this.gambar = [
      {
        heroBg: '../assets/images/hero-bg.svg',
        heroBanner1: '../assets/images/hero-banner-1.jpg',
        heroBanner2: '../assets/images/hero-banner-2.jpg',
        heroShape1: '../assets/images/hero-shape-1.svg',
        heroShape2: '../assets/images/hero-shape-2.png',
        aboutBanner: '../assets/images/about-banner.jpg',
        aboutShape1: '../assets/images/about-shape-1.svg',
        aboutShape2: '../assets/images/about-shape-2.svg',
        aboutShape3: '../assets/images/about-shape-3.png',
        aboutShape4: '../assets/images/about-shape-4.svg',
        logoNav: '../assets/images/logo-nav.png',
        logoFooter: '../assets/images/logo-footer.png',
        footerBg: '../assets/images/footer-bg.png',
        logo: '../assets/images/logo.svg',
        videoBg: '../assets/images/video-bg.png',
        videoShape1: '../assets/images/video-shape-1.png',
        videoShape2: '../assets/images/video-shape-2.png',
        videoBanner: '../assets/images/video-banner.jpg',
        blogShape: '../assets/images/blog-shape.png',
        blogBg: '../assets/images/blog-bg.svg',
      },
      {
        kampus: [
          {
            title: 'Kampus 1',
            alamat:
              'Jl. Siliwangi (Ringroad Utara) Jombor Kab. Sleman - D.I.Yogyakarta',
            telp: 'Telp (0274) 623310 & Fax (0274) 623306',
            img: '../assets/images/kampus-1.jpg',
          },
          {
            title: 'Kampus 2',
            alamat: 'Jl. Glagahsari No. 63 Kota Yogyakarta - D.I.Yogyakarta',
            telp: 'Telp (0274) 373955 & Fax (0274) 381212',
            img: '../assets/images/kampus-2.jpg',
          },
          {
            title: 'Kampus 3',
            alamat:
              'Jl. Prof. Soepomo,SH. No. 21 Janturan Kota Yogyakarta - D.I.Yogyakarta',
            telp: 'Telp (0274) 379204 & Fax (0274) 415801',
            img: '../assets/images/kampus-3.jpg',
          },
        ],
      },
      {
        fasilitas: [
          {
            title: 'Resource Center',
            desc: 'Universitas UTC Memiliki Perpustakaan dengan konsep perpustakaan masa depan yang memiliki fasilitas dan buku lengkap.',
            img: '../assets/images/fasilitas-1.jpg',
          },
          {
            title: 'Resource Center',
            desc: 'Universitas UTC Memiliki Perpustakaan dengan konsep perpustakaan masa depan yang memiliki fasilitas dan buku lengkap.',
            img: '../assets/images/fasilitas-2.jpg',
          },
          {
            title: 'Resource Center',
            desc: 'Universitas UTC Memiliki Perpustakaan dengan konsep perpustakaan masa depan yang memiliki fasilitas dan buku lengkap.',
            img: '../assets/images/fasilitas-3.jpg',
          },
        ],
      },
      {
        categories: [
          [
            {
              title: 'S1-Informatika',
              desc: 'Big Data Analytics,Networking,Software Engineering,Multimedia',
              color: [170, 75, 41],
              img: '../assets/images/category-1.svg',
            },
            {
              title: 'S1-Sistem Informasi',
              desc: '(Digital Business &amp; Financial Technology, Creative Multimedia &amp; Metaverse)',
              color: [351, 83, 61],
              img: '../assets/images/category-2.svg',
            },
            {
              title: 'S1-Teknologi Informasi',
              desc: '(2D &amp; 3D Animation, Game, Visual Effect)',
              color: [229, 75, 58],
              img: '../assets/images/category-3.svg',
            },
            {
              title: 'S1-Teknik Komputer',
              desc: '(Cyber Security &amp; IoT)',
              color: [42, 94, 55],
              img: '../assets/images/category-4.svg',
            },
          ],
          [
            {
              title: 'D3-Teknik Informatika',
              desc: '(WebDev, Network &amp; 2D Animation)',
              color: [170, 75, 41],
              img: '../assets/images/category-1.svg',
            },
            {
              title: 'D3-Manajemen Informatika',
              desc: '(Mobile Programming, Web Programming &amp; Interactive Multimedia)',
              color: [351, 83, 61],
              img: '../assets/images/category-2.svg',
            },
            {
              title: 'D3 Sistem Informasi',
              desc: '(WebDev, Network &amp; 2D Animation)',
              color: [351, 83, 61],
              img: '../assets/images/category-3.svg',
            },
            {
              title: 'D3-Manajemen Informatika',
              desc: '(Mobile Programming, Web Programming &amp; Interactive Multimedia)',
              color: [351, 83, 61],
              img: '../assets/images/category-4.svg',
            },
          ],
        ],
      },
    ];

    (this.infoPMB = [
      'Ketentuan Dan Berkas PMB Universitas Amikom Yogyakarta T.A 2024/2025',
      'Ketentuan Dan Berkas PMB Universitas Amikom Yogyakarta T.A 2024/2025',
      'Ketentuan Dan Berkas PMB Universitas Amikom Yogyakarta T.A 2024/2025',
    ]),
      (this.navLinks = [
        {
          title: 'Beranda',
          href: 'beranda',
        },
        {
          title: 'Jenjang',
          href: 'jenjang',
        },
        {
          title: 'Mengapa UTC',
          href: 'why',
        },
        {
          title: 'Fasilitas',
          href: 'fasilitas',
        },
        {
          title: 'Info',
          href: 'info',
        },
      ]);
  }
}
