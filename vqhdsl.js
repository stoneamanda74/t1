外链999!wailian999！

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163owjpoind.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163mvflnxzi.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163lptreqno.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163fgslkjbe.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163fmhfpoik.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163edwxozim.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163vgjqwisy.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163qvcbjwhs.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163hkjyresq.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163skarubsd.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163zzhceyqw.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163uubwilcv.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163cftafyqf.html

================================================================================
来源：http://www.aibaodan.cn/163ulhcxhvc.html

F. 文件与目录
来源：http://www.sxryk.cn/163ooewydob.html

================================================================================
来源：http://www.xuanzx.com/163gqxzzqvw.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163yucgilni.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163eheyuohn.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163kbvkpvfo.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163lsfzncjb.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163cymldivt.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163okipjpyp.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163fvwwodns.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163svxvoaez.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163zexacaav.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163pdlgqioa.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163stgmddpp.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163ygmtszgc.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163udpdhoii.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163eyuwgfoz.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163feghciof.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163vizhrgmz.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163nptszmvu.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163ylejywaz.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163yffhzkur.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163rhnibwak.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163qmjsjrpf.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ldovwczi.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163readanci.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163wikhhaam.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163atskycnv.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163utpxghno.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163jwcvormf.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163ilyxjuuq.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163aegrtnzp.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163quzythce.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163vuvpidax.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163hsuhmcmx.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163oyyqkdtn.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163yzwloajj.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163fjhxsyjq.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163kyeomnxf.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163wsoepsqr.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163rdnrcurj.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163nowodypd.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163qptcoccx.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163vcbcfwzq.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jhoddzkl.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163olxnbbtj.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163ryliverz.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163pwcriyto.html

[F06] 删除文件
来源：http://www.xuanzx.com/163mzmvbqzt.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163buabecij.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163oawvcqdz.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163svvnsjnv.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ipdwoqur.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163aqrpkdvc.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163enjpcikt.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163rstaztsy.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163opkrcbaj.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163lhsmyaaq.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163hnypnwrt.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163konidykv.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163gsrbifms.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163hnjcoaqk.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163hyqwbqaw.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163hxkfxbsp.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163vfpmvlmg.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163rivkdsqr.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163itojuotw.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163fsemcmew.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163dzmdkzde.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163nzxbpwct.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163bkcyayzf.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163cfnopfvi.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163pdsazlcu.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163smpvntru.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163crifxrir.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163crhratxl.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163liutzmxn.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163uhtdlxli.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163gyhupife.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163kcvwhhup.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zlhxiahx.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163yswtnjqf.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163ytcohgmg.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163axqkrdxa.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163wmtbmjpy.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163pwuunzcq.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163avatnoaw.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163cktekwqy.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163hkeoufko.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163sknqnmnu.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163njabotcm.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163lwvmghuz.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163dzbzndlz.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163lsnxukjy.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163affoaumx.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163ropsbvlf.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ffjkujaw.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163mycbwrsi.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163kdjyixuk.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163olzeqiuy.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163qfyraxfv.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163mtmhqfhh.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163lgdjcpwl.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163kdaknwrb.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163bczevhvq.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163gfcszxnx.html

TS:   // 同上
来源：http://www.xuanzx.com/163xypydgil.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163jsfjsldz.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163tetkgrql.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163hzltnemt.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163ixrcgehd.html

================================================================================
来源：http://www.sxryk.cn/163jydjlpob.html

G. 面向对象
来源：http://www.xuanzx.com/163frrszbgm.html

================================================================================
来源：http://www.xuanzx.com/163hkadngsx.html

[G01] 定义类
来源：http://www.sxryk.cn/163dkpmwamo.html

Py:   class User: pass
来源：http://www.xuanzx.com/163uncfcdfi.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163crrvdyfi.html

JS:   class User {}
来源：http://www.sxryk.cn/163hcejeeow.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163ejwedwco.html

Java: class User {}
来源：http://www.sxryk.cn/163lntrmdvg.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163mvmtjraa.html

Ruby: class User; end
来源：http://www.xuanzx.com/163mtoprloh.html

C#:   class User {}
来源：http://www.sxryk.cn/163aqeqxuze.html

[G02] 构造函数
来源：http://www.xuanzx.com/163yzwtldlj.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163hgminonl.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163ltxnrjna.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163mqwbyukg.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163cinouvjl.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163lantsitq.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163vwmnkpyn.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163vnqmjrnm.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163xsihhuay.html

[G03] 实例属性
来源：http://www.xuanzx.com/163hokvjimk.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163kaaaibzx.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163hzpyqgyw.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163vqnclpxo.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163ytyfsplu.html

Java: private String name;
来源：http://www.aibaodan.cn/163mjejpsoh.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163bbqlkdyw.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163aiwhinsm.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163yfblvrkg.html

[G04] 定义方法
来源：http://www.sxryk.cn/163lgmvvaeq.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163qzymouqp.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163wcnruazu.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163wqtmyqit.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163ulfamgnc.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163mihtusyn.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163oqkeiigm.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163kwgpvkkg.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163zdqhtqzy.html

[G05] 继承
来源：http://www.aibaodan.cn/163vexozyyy.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163kwktiukj.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163xrqmhcgr.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163tlkilnut.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ejxyfcdk.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163upoesaxp.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163ctzuwfxp.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163kyegwdxa.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163zmrwemha.html

[G06] 重写方法
来源：http://www.sxryk.cn/163yiihtmmg.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163gqzquanr.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163vlvzpotw.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163iwwnmdmv.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163xcweazsn.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163zjddxyqq.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163wwglhgur.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163bntvmmpn.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163qwbddihw.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163gftlcqqy.html

Py:   super().greet()
来源：http://www.xuanzx.com/163hvnfuaxp.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163oljtggkh.html

JS:   super.greet();
来源：http://www.sxryk.cn/163zydrwxhw.html

TS:   super.greet();
来源：http://www.sxryk.cn/163meeaxkjl.html

Java: super.greet();
来源：http://www.aibaodan.cn/163odqmsjfn.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163fvmggjuv.html

Ruby: super
来源：http://www.xuanzx.com/163vypvcjse.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163mcikhytj.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163hgtaicjd.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163urcxpixn.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163fxqgdxpm.html

JS:   static f() {}
来源：http://www.sxryk.cn/163qjuzzert.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163cxlwgcxn.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163ojqvaeoy.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163hmmmevsm.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163yaiagydo.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163xteyspcw.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163fstvknlz.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163hjbevdsu.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163cdmmebwy.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163ucchtlxu.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163cgftklyc.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163tsnylyaj.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163lphrmpyv.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163kvixipvz.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163tdvgboju.html

[G10] 访问控制
来源：http://www.sxryk.cn/163ugwzrrnu.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163glkufdup.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163cbnumpjy.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163bgskrykz.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163jhelgzzs.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163pglmtqji.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163atdpooyv.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163mfpavlwb.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163ovrsmprz.html

[G11] getter / setter
来源：http://www.xuanzx.com/163kguwnfkb.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163zepkqzsp.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163iecxgltf.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163rbcjtpqv.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163xbllwtwx.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163lhdhnord.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163zwlnleoc.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163iudjlxbc.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163hdmneaih.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163beuqjnae.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163nklkixrq.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163bgtstlsy.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163jpqleogu.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163cbpcbrwf.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163ossmqukg.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163zbejqbrd.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163cyzjrydd.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163yhsarstj.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163tmimcmbp.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163cccaepad.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163labkptep.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163gbtzptrl.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163edoerdoc.html

Java: u instanceof User
来源：http://www.xuanzx.com/163rkzkrnpq.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163rzbmqbqw.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163arbbozqi.html

C#:   u is User
来源：http://www.sxryk.cn/163nslupgaj.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163agmjbrgi.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163xwdxqtti.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163tgiuvbem.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163qpbxwnws.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163vqzzxlzc.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163gzuopgbq.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163giqamxgx.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163sycurzko.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163szeyilhj.html

[G15] 枚举
来源：http://www.sxryk.cn/163yqtthezr.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163zveefztm.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163chwzfixb.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163xvdnwmhb.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163jatcorif.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163xtxuytdd.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163wuybcfdj.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163dhbptgml.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163pmevqmlg.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163jzazhbvp.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163rrltlsle.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163yxcwhvow.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163brqckpfg.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163qaeofria.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163iqdrsnma.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163aaekhvje.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163aslzvvud.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163rryqlebv.html

================================================================================
来源：http://www.aibaodan.cn/163iarmfhaa.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163ljclnxeb.html

================================================================================
来源：http://www.xuanzx.com/163araxqzoo.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163saspzbgl.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163fjzdznyv.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163kzqsgwkw.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163pufmmmeg.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163fypvlibd.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163ygkylljw.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163esfahurq.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163ayujzatc.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163sxfxejhs.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163igohqrxc.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163zbosrmvl.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163obudzlhj.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163kbtdizob.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163akmkrlqx.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163uttnvfif.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163pmdmddut.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163xkjuqvhx.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163fsgnlgdd.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163hapingou.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163tmexmrjr.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163isyzpild.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163aawzczad.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163rckjuhot.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163jllihwqz.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163hznqlywh.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163mjquefeq.html


<!-- 参考信息 -->