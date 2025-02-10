export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">めいおフェス</h3>
            <p className="text-gray-400">
              沖縄県名護市で開催される音楽フェス
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">リンク</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white">めいおフェスとは</a></li>
              <li><a href="#artists" className="text-gray-400 hover:text-white">アーティスト</a></li>
              <li><a href="#timetable" className="text-gray-400 hover:text-white">タイムテーブル</a></li>
              <li><a href="#access" className="text-gray-400 hover:text-white">アクセス</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">お問い合わせ</h4>
            <p className="text-gray-400">
              めいおフェス実行委員会<br />
              〒905-0011<br />
              沖縄県名護市宮里1-1-1
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} めいおフェス All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}