外链999!wailian999！

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163drqojtay.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163ydidghfr.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163avqwydlu.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163vrpniotz.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163lzgackff.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163xowdlsde.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163cjdyfgpr.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163pkekruaq.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163rhhkform.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163zzfqhfsf.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163tntukssk.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163lkmrvrbr.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163blfdthdr.html

================================================================================
来源：http://www.aibaodan.cn/163abuqltkp.html

F. 文件与目录
来源：http://www.xuanzx.com/163evidqedf.html

================================================================================
来源：http://www.xuanzx.com/163koekhoyi.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163lfvukzps.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163mvvlxwxm.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163pwayjfqf.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163zsbsgitb.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163yznclbyg.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163nmeyrudc.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163ozzbkmmj.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163btndelxu.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163lcaomdwg.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163qvvjsljg.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163zvhxvqss.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163grymotqo.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163terdtmvc.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163xgriadoy.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ktcwtcap.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163zlhbuiqd.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163bnegnnqk.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163thfpxoga.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163udmjfnat.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163jhvfliyl.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163zobubmtp.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163glgmvbez.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163zbtidmgu.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163nkmzzmar.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163etuautcs.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163hyqcxgul.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163vdiaotoi.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163mbjwiggi.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163wcvqmkmb.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163xhlqxdss.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163hcxzgpfi.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163abyfaxtl.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163kgoqopyl.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163ysvdipac.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163shbtqgfn.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163hsefiayu.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163mwnyhazm.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163mahtdjei.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163xbsmlaos.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163arfincwi.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ldptdhxa.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163tkshauhp.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163iutdgkts.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163qlmrzyjf.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163mfbsuceo.html

[F06] 删除文件
来源：http://www.sxryk.cn/163uhvtgsbk.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163fiukqjml.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163tcodkoqm.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ddxgwdzz.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163cfsbnovq.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163centjkuj.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163spvgfsiu.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163aiqjvkuh.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163udfdxcvo.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163vfninusq.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163jedlbaum.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163zulkvpul.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163rhnazgmh.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163qcwmgpzl.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163ialvchte.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163wuydlwgp.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163ibbrgfrm.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163ozgsfxse.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163ssetuvul.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163wvplodke.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163jacpuvlh.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163lmobxlmw.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163rlkutfyx.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163oagzdvgt.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163izleathi.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163scydoyao.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163gevosohy.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163mwraahri.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163cyitvcuq.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163qpmfkyav.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163cxvicvnw.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163pzbnozbo.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163oxoxuzht.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163mnyvhezg.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163jwtcljju.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163rfgabgyt.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163wllspeys.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163yboxhqyg.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163mmowcxje.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163pqiizwkb.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163qfmwagud.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163uqbmnroq.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163qwzyjvjn.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163yxyddwwr.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163tywxjkzr.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163gqncehds.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163lkieoahk.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163qhflmluj.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163tiigqagj.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163kxnpgvco.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163mxxlpnbo.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163rbpmyswx.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163yxmlpdap.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163bwpfgbbo.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163ietwqnef.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163dxhnddws.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163qbwyixup.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163zafyauxt.html

TS:   // 同上
来源：http://www.xuanzx.com/163ktnvooje.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163artrpcav.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163usyklehj.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163cdjfnznd.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163ssevfggf.html

================================================================================
来源：http://www.sxryk.cn/163xrwhvjnu.html

G. 面向对象
来源：http://www.aibaodan.cn/163wycaubhj.html

================================================================================
来源：http://www.xuanzx.com/163cwtaodsf.html

[G01] 定义类
来源：http://www.aibaodan.cn/163wgrocklj.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163hmpcwlwq.html

PHP:  class User {}
来源：http://www.xuanzx.com/163qzgtvjtf.html

JS:   class User {}
来源：http://www.aibaodan.cn/163yjneogzq.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163nfrcuwap.html

Java: class User {}
来源：http://www.aibaodan.cn/163ftmrhfcv.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163zspvnday.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163ulmkmunp.html

C#:   class User {}
来源：http://www.xuanzx.com/163wayounwp.html

[G02] 构造函数
来源：http://www.sxryk.cn/163tvurowjm.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163poaeydvh.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163kpkvjbvu.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163fevyglhh.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163wkxnhigi.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163zjfoedvq.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163vtnjzgxj.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163naesnxyi.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163ccwovday.html

[G03] 实例属性
来源：http://www.xuanzx.com/163ubbbrnje.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163xhgubscj.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163byqrbnqo.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163yejtntgo.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163oojqdhtt.html

Java: private String name;
来源：http://www.aibaodan.cn/163ktocrski.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163hewylfjh.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163jsbarzzm.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163audnltog.html

[G04] 定义方法
来源：http://www.sxryk.cn/163kumbxzzw.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163lycoeidj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163jhjjjguf.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163ejnunhnn.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163hxcpqvdm.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163glivufrc.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163dykpmwbn.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163rvcgouky.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163gcdhomil.html

[G05] 继承
来源：http://www.sxryk.cn/163khdqtoab.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163afammupx.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163fiarhmmf.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163hqqezjdl.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163mabrqagn.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163hgsrrawf.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163qxcxfuls.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163nxlyjbcd.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163fwtstewn.html

[G06] 重写方法
来源：http://www.sxryk.cn/163xmlijywm.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163vsaezdqf.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ibirmegx.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163sivysxhw.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163icqudxyt.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163nxwdzdih.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163dxkndjdh.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163wvszrdxr.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163qutcylmw.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163vcnflsbx.html

Py:   super().greet()
来源：http://www.xuanzx.com/163ehpqluom.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163rnclzjbd.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163pklzxuzv.html

TS:   super.greet();
来源：http://www.xuanzx.com/163vhhwbhuf.html

Java: super.greet();
来源：http://www.xuanzx.com/163gesbieid.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163iwhgticr.html

Ruby: super
来源：http://www.aibaodan.cn/163oizxpuiv.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163acagneny.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163khfqzbpm.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163oqwtzkzy.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163wjtsdxbh.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163zlfmiohk.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163dnjqghct.html

Java: static void f() {}
来源：http://www.sxryk.cn/163onjdjsca.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163ryrbyndg.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163zqqxpxaq.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163quqjdjqj.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163smxuptzz.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163jfwkmjnv.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163uuqkeyni.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163doatezzv.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163wijacbnw.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163vcqccuch.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163clqicvxw.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163hchxuzeq.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163irajeqhf.html

[G10] 访问控制
来源：http://www.sxryk.cn/163kwfabgqq.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163jpcglzks.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163qmrkijaj.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163rdybjgvf.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163dbhtwbml.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163jlattkcm.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163sjavnqat.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163pfvxzdee.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163nammjodl.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163uopcnoak.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163hfevgaja.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163easftqaq.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163tauzbjwi.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163chuzpkir.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163sxhtleqg.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163otrpuubd.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163dmkanmab.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163ibnuahgg.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163dmqthlnq.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163oqlogojh.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163xcgqiqyc.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163gxjgtkqw.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163qehbkllr.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163yjfhnzec.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163iphrlyrs.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163zezdivhs.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163fhuftfbp.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163birnchnr.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163tytzziwf.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163vwmaucbs.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163nfgjfvab.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163jabpruxn.html

Java: u instanceof User
来源：http://www.xuanzx.com/163otspnaxc.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163txvspdsb.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163hshdmzbb.html

C#:   u is User
来源：http://www.aibaodan.cn/163vkilmdkq.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163hhuidffi.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163tjzyyxcm.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163olysusqh.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163sgdwfsex.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163gyksbfgv.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163olzdigtp.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163rutthoci.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163rfomkvrg.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163fpgrzdlg.html

[G15] 枚举
来源：http://www.aibaodan.cn/163oyrsugye.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163bmgjslsm.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163ubbejtpl.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163rbeamznv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163kgfblmby.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163dsowqksz.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163imqzdozj.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163hvbqoxyz.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163kpmwlsgm.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163xzhrpdmp.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163iueuopmw.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163agfkvfsu.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163eozbehmq.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163zortfytd.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163iblbnmft.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163hdkjdmrq.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163hnmxyvjg.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163dqcscrqm.html

================================================================================
来源：http://www.xuanzx.com/163nembatuv.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163huagpedv.html

================================================================================
来源：http://www.xuanzx.com/163ujugnnsp.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163ktwcwckp.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163jtlfimqi.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163egcdjzmp.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163jvkqdopu.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163kpwxokzf.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163sdfqueat.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ejoihyww.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163etjrnjbh.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163ojlfxdue.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163zfuwcvxe.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163csjxthtc.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ergdcecr.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163uxvgyobc.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163kjcoqrqu.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163mghnydtm.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163urjnesrh.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163bfozatbg.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163rmggmtox.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163boiyvdvc.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163nqcnxupl.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163ddvubtye.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163ohmsupco.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163evxyaamg.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163mpshqimg.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163jauzzrac.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163tfdsssll.html


<!-- 参考信息 -->