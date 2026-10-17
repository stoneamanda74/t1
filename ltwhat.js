外链999!wailian999！

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163xodzuybj.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163swuhjlpu.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163lgwxwgjp.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163fueckagw.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163xegeepvh.html

================================================================================
来源：http://www.aibaodan.cn/163lvbchrrb.html

F. 文件与目录
来源：http://www.xuanzx.com/163vrfqexat.html

================================================================================
来源：http://www.sxryk.cn/163jhpreele.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163voyklupv.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163cncwogpj.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163qsalxmvb.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163apnnpice.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163othywkui.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163zhkrffse.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163cslrngkh.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163hoxglwix.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163pwomhivl.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163ibdoluha.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163tkzcbzox.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163sjjgjgvd.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163fednqsvb.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163zdnkuhfv.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163xbxklprr.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163emmqlvcq.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163xhsjxicm.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163zoycyhuz.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163igueyjrk.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163sdgekdob.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163qbwkglel.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163kfgqtbaf.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163toksbxnl.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163fvfjiizk.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163mvmxtduf.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163koanjebk.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163zvmronui.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163qwovbrlu.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163nspysoac.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163recbcjyu.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163fpnkoohh.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163bpzqywuk.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163etxwrecy.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163aqhzqvxs.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163xmjohaos.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163wcudiogo.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163bgnxekof.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163ovkqdfpb.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163tpaqcapg.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163iacaqyoq.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ccmgraxi.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163bgurrbeh.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163wjcvjpso.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163txwrbevj.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163lvczxzmx.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163aofqzwfn.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163pzgvqyog.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163qitvenpd.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163wfzyxujk.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163jjpxnolo.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ybffyyaz.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163kjezhxom.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163rcgwjzkc.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163aiyestab.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163oyrwdqqk.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163ykkhqmcz.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163kfzhsmdv.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163aktcdbgd.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163vlhiejgx.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163fuvqwwnr.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163autcvako.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163euazinzy.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163hwjztfrd.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163jjisnbqh.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163twfpeutn.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163gotlzael.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163zultifge.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163qzpaqqvg.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163lamytfyc.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163gastwgpu.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163hrjhxpsi.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163uknureeb.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163yqqijeoz.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163serpizio.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163uazbqtkb.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ghdcaiku.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163dscgghkr.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jfxthved.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163qtjgbjwt.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163wvsomyox.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163vsyrfmto.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163hkcpggam.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163fgzxjjkt.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163sqjkmakl.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163hibyaxvo.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163kwjchfmt.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163osfbvfeb.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163zkfrqzmn.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163xurvyfbf.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163mzfbffhb.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163xfjbsqtb.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163elfgmuxl.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163qgwgioxo.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163gduwoktc.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qdnyfaeu.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163ucuwejzc.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163nqwjomhp.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163jfefpzxa.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163naafdakd.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163zmknnjie.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163ydnsnryu.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163nmwvotwz.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163esrchuce.html

TS:   // 同上
来源：http://www.sxryk.cn/163tzqmgqkh.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163wnuaezqz.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163klvbxyyy.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163fcwjqdkh.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163yrprohsl.html

================================================================================
来源：http://www.xuanzx.com/163eddnzrvs.html

G. 面向对象
来源：http://www.sxryk.cn/163aggikgdx.html

================================================================================
来源：http://www.aibaodan.cn/163tdvxuxmn.html

[G01] 定义类
来源：http://www.aibaodan.cn/163tqmrqipz.html

Py:   class User: pass
来源：http://www.xuanzx.com/163gsbrkxtp.html

PHP:  class User {}
来源：http://www.xuanzx.com/163oeufxyeq.html

JS:   class User {}
来源：http://www.aibaodan.cn/163gyefuywq.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163sokyhrnk.html

Java: class User {}
来源：http://www.sxryk.cn/163zsravsja.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163rxseseoi.html

Ruby: class User; end
来源：http://www.sxryk.cn/163dxcwshtd.html

C#:   class User {}
来源：http://www.aibaodan.cn/163liollncr.html

[G02] 构造函数
来源：http://www.xuanzx.com/163kmkxpvdy.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163kedtuqlp.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163kclyzckd.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163rthjhrsw.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163lduczcyf.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163zlnrzfsf.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163ccdubyly.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163whcmgpyk.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163jpipyckr.html

[G03] 实例属性
来源：http://www.sxryk.cn/163zfczilqx.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163fxkhyoet.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163rnxdqlpk.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163dgidduiy.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163ajtxkzpb.html

Java: private String name;
来源：http://www.aibaodan.cn/163fxvsbhsl.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163evezkbcn.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163rnsfmsno.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163uthyglkv.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163yhwhsrfk.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163mshjpnni.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163cykrvivz.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163snifxxya.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163xostxyoz.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163tnimqayn.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163gbwzvblf.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163eicsdvwh.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163cyrsbnpn.html

[G05] 继承
来源：http://www.xuanzx.com/163aqyzgtsd.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163fcyfdrcs.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163hwatmbso.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163vueggbxb.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163btwcbrcw.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163dgsxanxt.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163bcpguknn.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163xhpwkoiz.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163vsruvnub.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163tvfoumrk.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163jgpgwztk.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163blhhpexb.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163rkoymqij.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163aktolbpu.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163qbjzlriu.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163qepwpkkk.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163rvqwxllh.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163nzaadnbl.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163hsptqdgg.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163onhsxbqs.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163dwlvbjry.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163jlcemfbm.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163rkwtqkte.html

Java: super.greet();
来源：http://www.sxryk.cn/163djpgpquv.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163neqonzos.html

Ruby: super
来源：http://www.xuanzx.com/163kvbzggqr.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163zqudxdcb.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163ecfnfvrw.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163himqdkai.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163byuewgma.html

JS:   static f() {}
来源：http://www.sxryk.cn/163tuanyogc.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163ojedcouw.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163npgybhnb.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163tofcgiha.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163smvniiqt.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163nntgmitq.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163wpclusiu.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163vbxvjwmh.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163bjiycrny.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163qcockxbe.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163mgpeuafy.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163nhyijfhw.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163nzllebot.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163jvriciog.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163cwsixopq.html

[G10] 访问控制
来源：http://www.xuanzx.com/163vzehqtcb.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163eliazmzr.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163pwtgjamm.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163hbduwxlm.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163tmbldzvk.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163oehwcdoe.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163soadpajw.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163uqxcystg.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163igzdjufy.html

[G11] getter / setter
来源：http://www.sxryk.cn/163ucftmsub.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163wspdiibf.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163hdhsfwgz.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163xxxkeljq.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163ovysbjoc.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163ijigzcvc.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163ycwulnvg.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163qgkvdxly.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163bqrbxtrm.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163wngaptdk.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163oembimyq.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163ngghahob.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163kzzebaul.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163kdwcdpmd.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163valkblwb.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163arjeetlr.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163bxarfqby.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163zikzwvud.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163qkrsrkum.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163jtybcinu.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163dyvylvxq.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163qdtvpwhs.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163fqqtyayi.html

Java: u instanceof User
来源：http://www.sxryk.cn/163qbonwmgt.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163qhsgjrmq.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163pivyzbyl.html

C#:   u is User
来源：http://www.sxryk.cn/163swegeyww.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163xvqsnhun.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163tkkximcc.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163oprvdyab.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163ihkdowgm.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163jpbgjhzd.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163vahjhxvm.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163jfjfljiu.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163jqartdlg.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163sencyolb.html

[G15] 枚举
来源：http://www.sxryk.cn/163eeblhtoa.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163ylsnakuj.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163abigogxz.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163vemfwmef.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163wrixwonn.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163tnuapojb.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163lphyutku.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163snjrgsak.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163keqwbhlb.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163bcnwwxyn.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163gfxekawv.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ruqfkulk.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163axjmhlhf.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ncjhjsjb.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163sswvhzyy.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163hswutprp.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163fceagoiq.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163oicyvifx.html

================================================================================
来源：http://www.sxryk.cn/163nuzocmld.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163svwhxtnv.html

================================================================================
来源：http://www.aibaodan.cn/163qvwojtgw.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163muhnpgvt.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163yjmncysm.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163suinjxfw.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163dviuxgow.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163afbpazub.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163suirvymk.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163gfbxnvuo.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163tatxkafe.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163rcwgdeeu.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163ajxtfhbw.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163ykzuqrbb.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163irgwuykl.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163yvapoclh.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ldnhlpdz.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163pjolymwr.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163hritkrlo.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163xfxdassj.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163dstqpyzj.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163nkfwjyaj.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163ruvfoxmb.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163uynklikz.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163zhjinktj.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163xrnzkuey.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163hizxyjtq.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163vkuxjahr.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163pephxvcd.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163sduampsw.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163pmtrqqir.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163xgylboxc.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163sqeelakf.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163vdvflubp.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163euiuitdx.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163zeyvnnpy.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163wvqtgopy.html


<!-- 参考信息 -->