export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h4 className="font-bold mb-4">お問い合わせ</h4>
          <p className="text-gray-400">
            第31回名桜大学祭実行委員会<br />
            〒905-8585<br />
            沖縄県名護市字為又1220-1<br />
            <a 
              href="mailto:s1422162@mail.meio-u.ac.jp"
              className="hover:text-white transition-colors"
            >
              s1422162@mail.meio-u.ac.jp
            </a>
          </p>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>Copyright(C) 2024 第31回名桜大学祭実行委員会. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}