import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
                <div className="w-3 h-3 bg-primary-foreground rounded-sm rotate-45" />
              </div>
              <span className="text-lg font-bold tracking-tighter">TimeFlow</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              重新定義人資管理。讓打卡與簽核成為一種視覺享受。
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">產品</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">打卡系統</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">電子簽核</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">自動計薪</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">支援</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">幫助中心</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">服務條款</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">隱私權政策</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">聯繫</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="text-xs">business@timeflow.com.tw</li>
              <li className="text-xs">週一至週五 10:00 - 18:00</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 TimeFlow. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Social Icons could go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
