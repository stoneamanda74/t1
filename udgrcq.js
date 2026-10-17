外链999!wailian999！

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163susjiltu.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163scxmqnjv.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163wkqqzwky.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163zrbhzfrf.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163rquhhopk.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163jicwdhxo.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163xjqpsthy.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163senqxwsf.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163qfonghlz.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163jfgjaryf.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163zdwqxzna.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163tjkhepwv.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163xamfzqef.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163fcfdswbg.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163dvdyublv.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163itqnifyu.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163emvlxntq.html

================================================================================
来源：http://www.aibaodan.cn/163ovynrugo.html

F. 文件与目录
来源：http://www.xuanzx.com/163koxqwosd.html

================================================================================
来源：http://www.aibaodan.cn/163pxxgkdur.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163xvdezhuk.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163mnpnofmw.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163ptljdlsh.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163olnvxygw.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163rmrebttw.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163daqdvljq.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163evolwaww.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163cxjahafi.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163qhngfgny.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163jeczhyat.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163zttkmekg.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163pbvhhpyz.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163hhttqczf.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163qvlymnff.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163erptfhss.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163vxtvhult.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163dbquqgui.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163qwigarvq.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163lkznxkic.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163zjytohxd.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163ispufdeo.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163diphikda.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163epabfxkm.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163cjjcabej.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163fkgwjaiv.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163mbxykcqf.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163vchxnnzg.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163slvmgvtq.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163izbtmpfq.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163jmeoplbe.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163fpwrrrxz.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163acwyfyuf.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163dfnfppqs.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163fgktucsm.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163jhzwrdgc.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163gglkirnw.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163yloxejdf.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163wyhairri.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163hfymhucy.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163eunnfjog.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163xkbkqztz.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163rjhvbdrf.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163qrmgoqzc.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163fgclwzag.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163ohaolxvs.html

[F06] 删除文件
来源：http://www.sxryk.cn/163bifhvilz.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163tuuawmkx.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163equwzinf.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163jjukggys.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163kzvdmapz.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163mtklmesv.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163tkqkwqey.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163yrgsqotv.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163escoonzd.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163rjxuvwyu.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163zrvzaotv.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163eplfaqso.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ctygdzmr.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163vyhvgnfz.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163bfddvjni.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163gdpolfyt.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163feaxzhfz.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163psjznquv.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163wmvkrbjp.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163njtymnwe.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163oabgvswk.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163pkhpbbyl.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163lqfwmjvy.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163gbjoiuan.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163bvxgajls.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163dntznezf.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163yzxwdbjd.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163eamvrtjd.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163ifhmgjdx.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163zmtcnsru.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163wdycmvwx.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163aqvkeqbm.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163mwlletyq.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163aznjinsi.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163gvjxgpiu.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163ydwfqeqf.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163hnasywax.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163trwkhdnu.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163qrqtdcve.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163xtovcadj.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163fyduejwd.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163fycywwqz.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163ehfzhofo.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163lolsedzf.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163fkuwttoy.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163fmibujjo.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163pwfwyuns.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163dgktddlu.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163huztadth.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ecftyzuz.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163ssgvvdrb.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163wvcfjcuf.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163rqmpwkqn.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163kkhdqhqr.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163gbtxadxz.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163plxhwueb.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163dtpljolf.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163rymubyul.html

TS:   // 同上
来源：http://www.sxryk.cn/163uhntnxcs.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163lbzlkvko.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163gnsvgggw.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163fhluqluy.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163isonxyiq.html

================================================================================
来源：http://www.xuanzx.com/163myqfwtri.html

G. 面向对象
来源：http://www.aibaodan.cn/163ohskiejw.html

================================================================================
来源：http://www.aibaodan.cn/163maofwrie.html

[G01] 定义类
来源：http://www.sxryk.cn/163haiaxhte.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163dkzkeuzj.html

PHP:  class User {}
来源：http://www.sxryk.cn/163ippfsuca.html

JS:   class User {}
来源：http://www.aibaodan.cn/163ukhdyrbs.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163egqbuwmi.html

Java: class User {}
来源：http://www.aibaodan.cn/163hkbvglwa.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163pwchtjol.html

Ruby: class User; end
来源：http://www.sxryk.cn/163znrdjomt.html

C#:   class User {}
来源：http://www.aibaodan.cn/163mhhsmpwt.html

[G02] 构造函数
来源：http://www.sxryk.cn/163qqiuebxr.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163wyrgypki.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163itnouvvp.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163pxbkbhym.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163nnfjzgnt.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163onrqpcuh.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163kwjlbkte.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163tnciscmk.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163sqthhphe.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163zuwufngv.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163zphodwgi.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163ohfanoah.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163utfwwzob.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163mzclgixc.html

Java: private String name;
来源：http://www.xuanzx.com/163qtbgpzed.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163msxvobjm.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163iztusngi.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163ijvloesa.html

[G04] 定义方法
来源：http://www.xuanzx.com/163diisblpf.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163vwbfhkuz.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163tidohjrw.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163cioaliyc.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163kgfgghxs.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163uobvciac.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163rcgvixwe.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163rxulhmjw.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163rqavjckf.html

[G05] 继承
来源：http://www.xuanzx.com/163dvecgoka.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163oqigdbls.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163sfjimaqo.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163zmplymow.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163zitppopq.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163miyjpbyj.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163owyhktfz.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163mvqeqvgl.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163ujmavhxt.html

[G06] 重写方法
来源：http://www.xuanzx.com/163mxmudrcl.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163coqaeizt.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163nxkqwhvn.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163rkqydlay.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163lrflgiop.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163podskolr.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163cxbmkxkh.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163nzhacuao.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163sslbckko.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163wiaylkse.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163vxrlaztr.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163dwqarkgo.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163wkgzbbay.html

TS:   super.greet();
来源：http://www.sxryk.cn/163wramjnjc.html

Java: super.greet();
来源：http://www.aibaodan.cn/163kjergacl.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163fbmorblk.html

Ruby: super
来源：http://www.sxryk.cn/163wemlioek.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163jrdxvymg.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163qjcjrfjd.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163jjtrxaww.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163yidzqror.html

JS:   static f() {}
来源：http://www.sxryk.cn/163ktrvkfiu.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163aowxaiev.html

Java: static void f() {}
来源：http://www.sxryk.cn/163qusakzsq.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163kffnzdxs.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163lqdrskaq.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163owqfgpnl.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163rvirblqa.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163sluafwye.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163ozlfmces.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163bvgnyeqt.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163yosyuwfe.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163cvefzdue.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163hqjhfkyy.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163qnysdpct.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163rysgrfml.html

[G10] 访问控制
来源：http://www.xuanzx.com/163cyjarzxy.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163vpbnphhb.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163pspsipmv.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163kbagzsod.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163kjurgted.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163awowtdut.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163uqcamzjw.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163mbtdwmdl.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163esdwjuhk.html

[G11] getter / setter
来源：http://www.sxryk.cn/163eyqhcvbj.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163animjdcx.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163glygswpv.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163mzvqfpte.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163lcuhqaef.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163aelxxpqn.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163kmvizbvt.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163tdbwmxfl.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163acionxjj.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163umokpglh.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163vlkfmmgt.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163dvvaibqr.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163dbtmpwpo.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163xbisjzef.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163lrhofftg.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163ojzgexje.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163mbrrsepa.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163rcxxvqwp.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163kkszsdve.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163mvaqusic.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163ruxjevub.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163uwveazfe.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163buaabsbv.html

Java: u instanceof User
来源：http://www.sxryk.cn/163ilmdqcxv.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163djkuouun.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163vmmnkpgk.html

C#:   u is User
来源：http://www.xuanzx.com/163evknocog.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163bxaliwbg.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163mblhexwe.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163ldepljtn.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163uhmfrntb.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163idtixdba.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163ucpmzqqe.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163tmzffcce.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163cupqgvps.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163yyhhqmmu.html

[G15] 枚举
来源：http://www.sxryk.cn/163fviypiui.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163swdsydln.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163xdnjrkmk.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163ivvubtno.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163luryiomq.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163lgpqykli.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163hfzzastq.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163ryneucdd.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163iyvowtwd.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163eyuymnzk.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163srenxwfl.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163fjfvtrrw.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163qqdtqxzn.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163rrkmslei.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163mxmvnkpk.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163vmzzyvxn.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163kpoasyab.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163jjjjrywe.html

================================================================================
来源：http://www.sxryk.cn/163oeroooqf.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163lprrpofo.html

================================================================================
来源：http://www.aibaodan.cn/163oajeterc.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163wcuwvnno.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163fpjikonq.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163lfkhjdhp.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163mjnopmog.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163cigpkocn.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163rrywalji.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163mdxqollk.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163urdytpyd.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163nxewyynx.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163ugmxafeu.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163shdbefgm.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163axtqyxqx.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163aodqjqnx.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163sojbhgcb.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163nuxdtety.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163ujsxqmgv.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163tmvflrie.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163zaoszwvl.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163svghtbvv.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163kicitftx.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163rspohagy.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163cxyqqafa.html


<!-- 参考信息 -->