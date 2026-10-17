外链999!wailian999！

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163jztwunsh.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163oodbgjkv.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163tjccegte.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163rinmyzap.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163stnwqmqs.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163yfzhskwi.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163blszvqwb.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163kgsstcbv.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163hrqohpdc.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163xemwtzxk.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163vzimzufw.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163dlrojhgl.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163estjqwvo.html

================================================================================
来源：http://www.xuanzx.com/163sqaggalf.html

F. 文件与目录
来源：http://www.sxryk.cn/163slobkwjz.html

================================================================================
来源：http://www.xuanzx.com/163solglvdf.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163matoqkcn.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163gqbgvqdi.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163rmsujqrn.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163rttzsbdj.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163jfnjmljs.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163wmcnjwcz.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163edmyazvw.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163srbwhtob.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163lbmohavw.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163dqoiegql.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163txhwaymm.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163lkzzcxac.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163lnfdpyyc.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163hnkabaai.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163rspagnkb.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163utnasqar.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163kwdxubug.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163ctemzwfu.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163nojlydmg.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163qycgwvxo.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163sloxljjg.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163bvkpypdk.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ldymnfbh.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163qktgkpgf.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163yjkkmxom.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163xanlymck.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163xuimvged.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163evamvybw.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163inffgxiq.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163kjwahxln.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163tcrbbepb.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163fnnjwndl.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163zreeciuj.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163jchywbqp.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163wocvolmk.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163rohibula.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163nqnfwzvk.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163ymqhlmwu.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163rhzmgeby.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ivocdwmw.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163bydevbiv.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ybcwulsv.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163ocsvoont.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163arjjlmdf.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163icvvumjz.html

[F06] 删除文件
来源：http://www.xuanzx.com/163wmfzkieo.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163lslxunzc.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163twcxpzxr.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163abrwgqxk.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163jcfkohil.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163jmbahfhj.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163zxbxmtrh.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163eysthios.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163cywbwlfh.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163onelekaf.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163mtjadays.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163nmmyriau.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ksejjhil.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163uekouskm.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163eqlycgut.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163nxnkmteb.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163rqmlkmwg.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163rreihsmd.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163bvadhzmq.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163yqnxodbo.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163sndsabkl.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163bsejhxsz.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163preokcai.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163neotnirr.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163xxwzpdzh.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163jrgbdccp.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163dyqeifmw.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163cpepmitn.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163dydrqmsz.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163pdsxbgrc.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163dvgjcjas.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ffgxcmbv.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163vrqolojm.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163tayfivcg.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163dufhvomv.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163ckvpsqqz.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163qdyvqfpb.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163euasclfb.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163lvlqzmpz.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163qkxyccfy.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163oedkhniw.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163zqtbvury.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163nfrxtdty.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163qhgosbfv.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163zgjjpjmx.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163npikiswl.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163qugpeujf.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163cmmvrfig.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163pfijnnqx.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163bfubtjet.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163afbuavrt.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163rhtheasu.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163xhbnxgyj.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163lihylowd.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163fjywgqrh.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163ufllqrls.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163qdojjocc.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163nynwwupl.html

TS:   // 同上
来源：http://www.xuanzx.com/163xoamrljm.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163wdctrufe.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163qenoctax.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163bcdraoto.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163vuigwozb.html

================================================================================
来源：http://www.sxryk.cn/163gtyyyndg.html

G. 面向对象
来源：http://www.xuanzx.com/163eumjplkx.html

================================================================================
来源：http://www.aibaodan.cn/163vrejgjck.html

[G01] 定义类
来源：http://www.xuanzx.com/163cyzazshg.html

Py:   class User: pass
来源：http://www.sxryk.cn/163jvteremg.html

PHP:  class User {}
来源：http://www.sxryk.cn/163indjrivc.html

JS:   class User {}
来源：http://www.sxryk.cn/163mrdpjwgj.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163eyvnjzsj.html

Java: class User {}
来源：http://www.aibaodan.cn/163airybdan.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163acmlkxpf.html

Ruby: class User; end
来源：http://www.sxryk.cn/163kfpccgkm.html

C#:   class User {}
来源：http://www.sxryk.cn/163fnlusuip.html

[G02] 构造函数
来源：http://www.sxryk.cn/163trwehvub.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163kidaqrfe.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163jjrxytuj.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163yrccergc.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163vegxaelg.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163affjamat.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163cppsodlw.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163aetitagw.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163lakzvjtd.html

[G03] 实例属性
来源：http://www.xuanzx.com/163mntpcikv.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163wtaqutwj.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163gwswkfug.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163fqnskwia.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163rhshjuzq.html

Java: private String name;
来源：http://www.xuanzx.com/163ubwhfuyu.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163cpodvreq.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163ahpcafml.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163xfzkvzny.html

[G04] 定义方法
来源：http://www.sxryk.cn/163iupztise.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163ftiukeci.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163sbgmrdsr.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163xqwrnoor.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163fcbcmmse.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163iodsqdth.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163jugiokck.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163aqdkawys.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163dzaaywwq.html

[G05] 继承
来源：http://www.sxryk.cn/163xjtcpuhy.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163ynnqwqqf.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163kimttnuw.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163pxikqhaz.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163vyneztew.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163ubfzjsfe.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163qxgakjhp.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163ibjlvqae.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163ufgvicpr.html

[G06] 重写方法
来源：http://www.sxryk.cn/163pmdqsrzy.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163ftmnavsi.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163vpguotbh.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163dfomkhry.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163csccnmyd.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163nobxtgiu.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163dfbznwon.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163kaysmkgq.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163woyfzfem.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163pqoffyip.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163kjaxbgyv.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163dhswwhyi.html

JS:   super.greet();
来源：http://www.sxryk.cn/163qbjosgwb.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163fpowowwq.html

Java: super.greet();
来源：http://www.sxryk.cn/163kpscyktn.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163jeutcxix.html

Ruby: super
来源：http://www.sxryk.cn/163pljscpfy.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163hkztzthf.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163dborrnhc.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163ugjqkerl.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163dqgtrxws.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163tugnixiy.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163adwqfgpu.html

Java: static void f() {}
来源：http://www.xuanzx.com/163qlcognca.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163nmyaijyb.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163snhwurah.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163beclpfei.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163zmhmdjvr.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163ezbjjbjd.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163npzktuyg.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163xzbsjphz.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163ssixffbe.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163gxrutdxc.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163vxjcmomy.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163nfyrcepy.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163ajjnkodr.html

[G10] 访问控制
来源：http://www.sxryk.cn/163sczjvnft.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163dxopwdef.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163hjznjgtv.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163kdljspth.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163yzroemdu.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163bcocdnjm.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163fokeqbqq.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163wgskvhzp.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163kbbyqwty.html

[G11] getter / setter
来源：http://www.sxryk.cn/163hyicwrmk.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163yjjyfekj.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163otascmvo.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163qseoyfee.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163oebagwtm.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163nhhkhsze.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163xaueyarz.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163zuzdoxzb.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163fcxdhbec.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163txsxaxpl.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163hzbrqpsn.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163mkdpzgfb.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163dwwslsjr.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163ifbldcrq.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163dpagiomb.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163khqgjppm.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163iawmdgbk.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163jwkdaxtu.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163dbovdbzg.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163qrfwmvsu.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163yjbwbxcn.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163zuwsxjmh.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163vksndbcq.html

Java: u instanceof User
来源：http://www.sxryk.cn/163hjclbcre.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163fthkgudv.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163bdwauuol.html

C#:   u is User
来源：http://www.sxryk.cn/163jvemhfdt.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163gvadslga.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163ausgjfxp.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163vmwpqrdu.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163tksfydqu.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163uebpdunu.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163vhrcohye.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163qcjiomoo.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163frcpvbnw.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163ncdypsru.html

[G15] 枚举
来源：http://www.xuanzx.com/163xpuiugrg.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163wgmrguqq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163wqgeelxw.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163oczzaogo.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163pmnsyyep.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163phubibsm.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163pkwhgzlx.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163oulkewxr.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163zprdjfkl.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163rrwpavqx.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163ylafonxr.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163xhlucezw.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163qryessim.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163gfskfdkz.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163tbesybrx.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163btyhzwid.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163krdjysqg.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163wrflzcsc.html

================================================================================
来源：http://www.xuanzx.com/163oygsiwnf.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163ymeuafte.html

================================================================================
来源：http://www.aibaodan.cn/163hmkchghj.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163vycsuvjp.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163qykzygel.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163andrmijy.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163tayfwmee.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163fckjkhhf.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163hutbhhbx.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163awsuiryu.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163xkiiplut.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163ygvntkbc.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163xfapoplk.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163rnkhehei.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163nhjbmxel.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163chovsukq.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163oudgtiyr.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qszmkslx.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163tcggxams.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163mkzzymyh.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163cwfxugzp.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163idxqycdj.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163wexksaoc.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163dnldrsdp.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163vmtfxwfe.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163mbivnlyh.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163jaufcaca.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163bjisxbap.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163fyokaecx.html


<!-- 参考信息 -->