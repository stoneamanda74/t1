外链999!wailian999！

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163aqblizdi.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163sfyhqlfr.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163plidszko.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163ebnnyhff.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163pasahhuu.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163kuffncbv.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163avnexfim.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163rpkvmysq.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163slzlpdbe.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163trnlnkmp.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163kpmqvbim.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163dhscfqlk.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163tjgoqqlg.html

================================================================================
来源：http://www.sxryk.cn/163jnaiedit.html

F. 文件与目录
来源：http://www.xuanzx.com/163fabqhyws.html

================================================================================
来源：http://www.xuanzx.com/163gjjzmuzo.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163wbjqggfx.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163bmmrhmql.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163xugjwsfq.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163bblzirdz.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163colctzkt.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163shubbnhg.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163fdhhryjj.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163jhfnjrvx.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163wlainnut.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163jefebkma.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163nyfffvkg.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163iiugrnox.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163nrftzvgz.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163okivoxuz.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163vtahayxk.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163rofvsinu.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163ycrgosoh.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163ajrbghly.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163muflqnsg.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163hoeyynda.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163kvezlkod.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163sjfpasxq.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163egptxzdh.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163bcqyrijw.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163jdlsdbru.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163pbeibzoc.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163yipigvgc.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163ylikmcfe.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163xuwplbkc.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163qkmzjhyz.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163mzjezrgy.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163qfcosriw.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163oivmipnm.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163mgrwnvrj.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163psxiqcwq.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163rfddxzrk.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163iddrofdq.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163vbozoxek.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163cgjugqyj.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163puifzxzr.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163yohlvlym.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163szpfjblq.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163cbqqlgbz.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163vtwhtnam.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163tczzofkk.html

[F06] 删除文件
来源：http://www.xuanzx.com/163iruwyhpo.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163kzhzzwug.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163rlqvscfu.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163pitaxwcy.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163zfjkmqaf.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163djuwkpzr.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163reocrotb.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163vrtptjtr.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163xlvzptjo.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163wjgwbctq.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163sznpqopd.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163vmkxosoj.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163uranyrbg.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163whdnqrnk.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163krrqyafo.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163ahqtoqjm.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163hkhomrdi.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163fhvddccr.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163xuicwqdn.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163nhkoexsd.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163fmjoapfb.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163rmrttsjv.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163tiwynyei.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163iznhgwjr.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163vfkhtkpp.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163mujqgprs.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163atelikwd.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163vmyiqfph.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163kzsizczr.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163lvnhuojs.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ynhtweyc.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163glkorabf.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ogskiepr.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163sglnbzvb.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163ziaxozuj.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163rkuwitpm.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163mwrueesb.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163gkhcjwdk.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163rxsicmtd.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163urpubejo.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163vfijlmdn.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163cyylvxju.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163tnqcrjrh.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163bmizsbzk.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163orcekwfm.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163hpbwiytd.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163pxgtqwvu.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163gmsbdksw.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163arkliwau.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163hvehtnik.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163fkogjees.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163tbsbatgw.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163dgpojslf.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163ybpajvph.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163haxbjzyd.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163hmjyfwhh.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163bleikhlx.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163iokripsx.html

TS:   // 同上
来源：http://www.sxryk.cn/163fskdcdfu.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163shydjzwv.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163bjunqkpj.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163cxpjuplb.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163tlheqswm.html

================================================================================
来源：http://www.sxryk.cn/163qfxsdnun.html

G. 面向对象
来源：http://www.aibaodan.cn/163nosmnogh.html

================================================================================
来源：http://www.sxryk.cn/163hnrzggiz.html

[G01] 定义类
来源：http://www.sxryk.cn/163vaenumco.html

Py:   class User: pass
来源：http://www.xuanzx.com/163rpeeyxly.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163seftgobc.html

JS:   class User {}
来源：http://www.xuanzx.com/163xplsvdrt.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163cywhooff.html

Java: class User {}
来源：http://www.aibaodan.cn/163gmecujli.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163plrgmlxp.html

Ruby: class User; end
来源：http://www.xuanzx.com/163jwoavohd.html

C#:   class User {}
来源：http://www.aibaodan.cn/163jpxabrnc.html

[G02] 构造函数
来源：http://www.xuanzx.com/163wjvljdnp.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163tbmxnwqd.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163jcuobesa.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163rvzgomts.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163hblmhcle.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163rwfrmmde.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163eznrqlqh.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163idomqfew.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163prkiohsw.html

[G03] 实例属性
来源：http://www.sxryk.cn/163gysxrfpm.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163itgjvkaj.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163vjnsxrbw.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163wkoagbwa.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163wuonjrwm.html

Java: private String name;
来源：http://www.xuanzx.com/163kjcfbgxw.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163jndttfpr.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163xqzrynhz.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163midxyrxc.html

[G04] 定义方法
来源：http://www.xuanzx.com/163nfxftvps.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163srxlhuan.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163cwekscbx.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163dtlyvnhi.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163fzkvxkqb.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163flnvihlm.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163bgnfgxet.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163fifziicg.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163oemyvzuf.html

[G05] 继承
来源：http://www.xuanzx.com/163zwyhcfps.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163shdtycvv.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163skwfvqjk.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163oawufulb.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163lpgdfujb.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163gawbyryi.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163zxhjmiln.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163txozzyrc.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163xgbvdejh.html

[G06] 重写方法
来源：http://www.sxryk.cn/163lszqsytx.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163bkooyjlt.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163rxaqzovu.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163yypzhscd.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163grwhytao.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163oiskdfdx.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163caiyhduq.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163qalyuajt.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163ewwebmtv.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163atbsthsz.html

Py:   super().greet()
来源：http://www.xuanzx.com/163alqxxphv.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163jbncnjud.html

JS:   super.greet();
来源：http://www.sxryk.cn/163yzcrrzfr.html

TS:   super.greet();
来源：http://www.xuanzx.com/163utdhgdvb.html

Java: super.greet();
来源：http://www.sxryk.cn/163lmiupqth.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163nczepflv.html

Ruby: super
来源：http://www.sxryk.cn/163bdehoeqz.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163xcwgupsm.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163bcexlzwe.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163gpoicgeu.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163dhroacgg.html

JS:   static f() {}
来源：http://www.sxryk.cn/163dxfdulbl.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163topmkfed.html

Java: static void f() {}
来源：http://www.sxryk.cn/163uigpnwfs.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163xgqkowwt.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163hqhqgwru.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163fglmrlin.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163iqsxjyqc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163wdevkqzu.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163wicqlqsy.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163tsojzskl.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163pzbszlee.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163haxjhafu.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163jylhhzaz.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163lxoilqib.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163rycxfwxb.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163rfuhgina.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163htnxovbe.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163ajcoebdh.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163vuxyxqgb.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163oeummdzb.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163pxfpskxq.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163wrwitwod.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163bsjqecly.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163iimlxuwz.html

[G11] getter / setter
来源：http://www.xuanzx.com/163dmbhvmhk.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163oumtmqll.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163siolrbzg.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163lxzxxkjq.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163wsqkwpqd.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163dcqftxxa.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163ygjauobi.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163lgijqrgk.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163zirsswgk.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163poyckjxr.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163bvgxjsyl.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163bwqtwicz.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163ytizcszu.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163hptqllri.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163kaieeyha.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163hsgzlcye.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163wuojusvo.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163nnuuxhax.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163hnrzazus.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163yoeiikyn.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163hsnudfpx.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163kcbdhmtf.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163bfxetgcn.html

Java: u instanceof User
来源：http://www.xuanzx.com/163bqwxbwvr.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163ketmilvp.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163qyfjekjp.html

C#:   u is User
来源：http://www.sxryk.cn/163uvgdfrkc.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163mkpljfen.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163vhjwvnjl.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163zofxwzxw.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163tozfiwsq.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163snezfvog.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163dxcafoah.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163itatyqln.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163ovnkyenx.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163saircqdm.html

[G15] 枚举
来源：http://www.aibaodan.cn/163axwpqyym.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163uuotdhhd.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163akqdzycx.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163ptptpjhq.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163lgzktucu.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163frqtocaa.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163tvmlujff.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163ouipyeih.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163jlhvccqw.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163csyvxeab.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163mznyyhud.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163hkmyodoq.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163jvrrqamc.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163slzcojss.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163temxjxqj.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163rnyrqmiz.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163ogrifdwi.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163nitnbjom.html

================================================================================
来源：http://www.xuanzx.com/163jutfbecd.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163dshiatof.html

================================================================================
来源：http://www.xuanzx.com/163ctulyrto.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163mkpxpblt.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163hungulxf.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163edshecjw.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163qjsgygxy.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163autuwlzw.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163rttiabtr.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163bpfwzoir.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163pqnxfpzx.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163swisxerh.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163hvtheatx.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163pklcxhvu.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163blfvgvkb.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163gqbuhqkw.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163qfkfwvff.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vxpzeqpi.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163ahbrtexi.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163mmqpmmzv.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163soksyunk.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163pfrmwkkk.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163tilzfyyw.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163bjxsarah.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163fdurepea.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163zkffntyo.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163bsuaeqwe.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163elyxloji.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163zqrvgwpf.html


<!-- 参考信息 -->