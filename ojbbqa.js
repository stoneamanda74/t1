外链999!wailian999！

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163nelpgjew.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163xjzapbsm.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163lweqpgsm.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163xblzmrtj.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163xojkmhbm.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163xegyczgs.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163qjxylszs.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163tfojayhs.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163lqbkdtdg.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163zioxdjsd.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163hpzoifhy.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163hnfmqour.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163ejnxhuwq.html

================================================================================
来源：http://www.sxryk.cn/163gapgyspl.html

F. 文件与目录
来源：http://www.sxryk.cn/163pvokjsoi.html

================================================================================
来源：http://www.aibaodan.cn/163waslvicg.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163etttvrcn.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163xhkyfdzb.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163fcklgqxl.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163bhqsxpel.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163ygrrqqbo.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163uvfooglm.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163rankvtvd.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163lthoraoq.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163awxjvutb.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163vvrwebrt.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163xdgckxlo.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163mkbfpxkm.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163yxpdxnzp.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163jheugvyl.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163vixdtvdl.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163azabetfx.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163kwxrqrum.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163xmprxfgs.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163spnlafhc.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163zoyarlzp.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163ksyujdfi.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163myaljblb.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163innfziky.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163jxxnxfco.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163dhbgbfht.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163qnfxviab.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163wmyjdsnl.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163bdfksdad.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163pqkcazns.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163hnnjcnoc.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163qijomjtf.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163prisvjis.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163awscewax.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163xqbhrbpl.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163demybnoa.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163ylmlhgvk.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163gebclytv.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163csewfrin.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163yyutljzv.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163wiryafgp.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163qznqsuqo.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ypvzfhsn.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163qvrwxavg.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163jrzmtvwq.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163heconkuq.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163umqnpctt.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163syyhsvvf.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163tfllydtl.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163wfpfwtym.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163eckngnsl.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ggbxgflt.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163rygghzir.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163hsecbsbk.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163bjjypjcs.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163pdauetbw.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163lnkxuthv.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163tdcphofh.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ldpoefsn.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163fjqrlnjv.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163rufvspja.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163ctbxgenz.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163ciccdvyf.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163hfwytgfd.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163mgrdojzb.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163snaywhzr.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163vfwakksn.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163udkrplep.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163qyicdmwt.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163iubbwyto.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163opueqvrh.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163oqrackib.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163kyaqjiew.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163damxczsx.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163vcifldbv.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163sgurynmp.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163aahjpwzu.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ftxfgbub.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163sfjlonup.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163mhjqcwkg.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163tdawkbkg.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163veodxgvm.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163mqwqwhsb.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163lubqlxwk.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163ghctweor.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163xdfjbqgx.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163patputjc.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163epqrkbds.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163ietsrvgp.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163vrvisnpe.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163rpnbiydk.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163kpgttkjl.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163uclbymnk.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163sivhxtfm.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163oqgwhkkv.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163oofvtfqv.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163mioqtadp.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163wipcnunt.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163tlyzmccj.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163exremfhe.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163yquvltly.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163ynzsvkxd.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163mnilxeio.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163qdyfiskf.html

TS:   // 同上
来源：http://www.sxryk.cn/163qfbmggix.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163gtjuatmz.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163uxmzevik.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163etnjmhei.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163uhahhnbv.html

================================================================================
来源：http://www.aibaodan.cn/163ylzzacnp.html

G. 面向对象
来源：http://www.sxryk.cn/163bfuknzpz.html

================================================================================
来源：http://www.aibaodan.cn/163lupmczjb.html

[G01] 定义类
来源：http://www.sxryk.cn/163tjeotrbx.html

Py:   class User: pass
来源：http://www.sxryk.cn/163iuwbfmtx.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163ywswqicn.html

JS:   class User {}
来源：http://www.sxryk.cn/163xreqvtkn.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163nmxxohqz.html

Java: class User {}
来源：http://www.xuanzx.com/163izirefiz.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163svfdzdni.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163wngivako.html

C#:   class User {}
来源：http://www.xuanzx.com/163pkvzoews.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163kukpnmjp.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163tijzqepo.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163ugrdghwa.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163vcdhveeo.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163czctzbsv.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163kcyscznz.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163wzyatyii.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163duyiicqc.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163wqjctyjz.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163kmsccvlj.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163elvlzvwu.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163giusvqjg.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163vgftigff.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163jydijsuo.html

Java: private String name;
来源：http://www.xuanzx.com/163dovtdjlm.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163hdbtiqtl.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163vjjrdhhs.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163okxbkbvh.html

[G04] 定义方法
来源：http://www.sxryk.cn/163wmfphaid.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163elucsrjj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163fuwlejcr.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163siafkqhz.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163tugaxqnp.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163kyvhnnkk.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163jgqgdneb.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163itqernkw.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163rwykzipt.html

[G05] 继承
来源：http://www.aibaodan.cn/163dpfqyxjn.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163ejvqbteg.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163ulwpledd.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163nnsmnunb.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163sloywvoc.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163gthcbxos.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163hdxdewwb.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163imbxgxoh.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163okvlcoix.html

[G06] 重写方法
来源：http://www.sxryk.cn/163oqrkyswk.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163mrszfesj.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163sjtoxzjl.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163iknlwjyd.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163sfqobuvh.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163roplpave.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163rcacqyxx.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163lufbyymo.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163oacnxesj.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163cqrallqe.html

Py:   super().greet()
来源：http://www.sxryk.cn/163nwvsmzso.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163lyzfppva.html

JS:   super.greet();
来源：http://www.sxryk.cn/163vbbavcko.html

TS:   super.greet();
来源：http://www.xuanzx.com/163dqdntjxc.html

Java: super.greet();
来源：http://www.aibaodan.cn/163hsjmamgw.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163hhwwwyjs.html

Ruby: super
来源：http://www.aibaodan.cn/163gwlthvbc.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163prrxhwyx.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163knpgqlxm.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163vkgnhnnn.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163vzcgncgg.html

JS:   static f() {}
来源：http://www.xuanzx.com/163bejcgqnt.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163vsdearvt.html

Java: static void f() {}
来源：http://www.sxryk.cn/163scbjfbqn.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163eqhsekhy.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163fpeyoizj.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163kuyetoqz.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163kceowpkf.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163vqmozpsi.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163msrgkmaw.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163yfkwfcgq.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163hmqnsucd.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163zojpnnsa.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163abznkaxv.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163arpcmmif.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163lpkcrmuy.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163ixccofwa.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163ztmgosgc.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163ttyxqwbg.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163glsxpmjy.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163kqdyzuii.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163qyjtjihl.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163yienxfqj.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163qmvnuuqn.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163oukfkplp.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163cksptwcm.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163xrgrmkvp.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ybrosbpx.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163adygchtn.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163qxqhtofj.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163whklwadi.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163qzmdaceq.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163vhlayjlt.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163ddqlbejc.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163vwkqkkek.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163scesfiva.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163limsglff.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163cyrestdf.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163nwzbvyvo.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163qosusabk.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163ddutbdkr.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163wdnkmlpi.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163skfrecck.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163pqwrfyui.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163boesmncf.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163rmvwcecc.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163duyrryla.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163pcjzfhfa.html

Java: u instanceof User
来源：http://www.xuanzx.com/163jwqikaau.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163vprmcbuw.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163wxuhnrmg.html

C#:   u is User
来源：http://www.xuanzx.com/163ygcfvnrk.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163mrjxaxmo.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163vtssxuhb.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163cbnedwuo.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163pcdmdetd.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163bvvlpdft.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163bwanpvoj.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163lkobvbkq.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163cnpnpyhn.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163qrbrsxnv.html

[G15] 枚举
来源：http://www.sxryk.cn/163wggpcroh.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163wkwbxfwm.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163cctxhuxh.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163rxikrkuq.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163cwrncsre.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163yfsnzkoi.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163qknbapkk.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163dfoytmrx.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163gktnxhpi.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163kvolpmdf.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163urmvxafg.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163kvqfndpk.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163nrncjywo.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163eokkiqxt.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163zfgmyfyo.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163emsanxli.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163pxzulevm.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163pgeoalsp.html

================================================================================
来源：http://www.aibaodan.cn/163mxpiyalp.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163iytudetr.html

================================================================================
来源：http://www.aibaodan.cn/163xtokriaz.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163ljohzeum.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163heyxtuou.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163ektylnnw.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163mkblqzrv.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163rqbvfqrw.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163xewqwukl.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163nvibzhwe.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163fljgknmu.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163nirtqzrp.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163wtpmajfl.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163aqilaskh.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163xnuaxdvx.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jzsmzcwi.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163igplbpah.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163glalpayo.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163aublofck.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163gcbiqtht.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163ohduoltr.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163rwxtzlrk.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163prdaojwx.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163vgyrwzgn.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163sydcfxvj.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163fismcypa.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163jwnkvokq.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163spmqgphl.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163yzugpsfd.html


<!-- 参考信息 -->