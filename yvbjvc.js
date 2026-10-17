外链999!wailian999！

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163fdqwhdti.html

================================================================================
来源：http://www.aibaodan.cn/163kkglpwva.html

F. 文件与目录
来源：http://www.aibaodan.cn/163spqczjwo.html

================================================================================
来源：http://www.aibaodan.cn/163bdzyslqg.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163xhwctzpr.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163aijxnqhs.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163ysrupcio.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163rkonlcur.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163tibcgizl.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vyfouesj.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163yfseqlzs.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163iqsybwrw.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163bgxpmvwr.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163ovlzxjpr.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163yryvwomt.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163zczdejuj.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163aksmehqn.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163qfmgzfwj.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163qkdryroc.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163rpglehgp.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163rkerceze.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163ehcjpltn.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163kbibhsex.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163ldtwpiig.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163rbdkmkan.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163mxxswyvm.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163xjbyhsbl.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163yimhrmob.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163bssazize.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163uqlcdirh.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163fsxzltvm.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163jfknbcbc.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163ospigxny.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163bmkqozvv.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163dawbtefl.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163frhaxwuf.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163efsvhpxf.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163lmwchbzv.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163eitenuee.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163pdvnvobt.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163adhruzlg.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163ujgmalhr.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163quhtofgk.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ajkmwfpv.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163fqrtpqbj.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163cqnidxfm.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163zsphngrz.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163ejhtwjit.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163ftjpjjcv.html

[F06] 删除文件
来源：http://www.xuanzx.com/163iqwtfwht.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163hkodwvgo.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163sksjqhss.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163fcodmmyr.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163vcfqvuho.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163exysudqs.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163sqtbffed.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163cqtamixk.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163cgkstnlu.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163fmvyqwyv.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163wbbrqauc.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163fhywxglk.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163aswomytf.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163cetevwri.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163vxqlzjox.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163fyjmrzzt.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163sizhfjnq.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163yubmcjtl.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163fgpkuffh.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163mtfgpvjd.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163rmgjlhhi.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163jcscvasn.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163pwbepoeg.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163slketcgg.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163gsvekqzu.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163kwvjvbni.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163ndsnmwte.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163ajkcjttg.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163ysjjelzy.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163bgnklhde.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163jtuitacy.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163lncnfjtp.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163sndvnonr.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163zeahjgwp.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163hyrqezew.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163pcrooezd.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163picnvzbw.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163taudnglq.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163uvmqdeuf.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163tuvfgfeo.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163xhgwjcse.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163mkpalfhs.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163dgpjpjbo.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ramehbbm.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163htklqoir.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163qqmiqclw.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163bljhujdq.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163flrcwpcm.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163guliqhlv.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ccftqoib.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163lzrmkrpa.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163rysbnwbn.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163yuzopvzd.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163cdwpsnyi.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163byrjxozw.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163dpvsaxdm.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163fskwgtap.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163vrmvahnm.html

TS:   // 同上
来源：http://www.sxryk.cn/163iwnyfoqt.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163wwfgdjba.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163esxfmfeu.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163tcetgkoz.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163rncrunet.html

================================================================================
来源：http://www.sxryk.cn/163ljpcnnma.html

G. 面向对象
来源：http://www.sxryk.cn/163uqqqbgdp.html

================================================================================
来源：http://www.sxryk.cn/163kzvgwyoz.html

[G01] 定义类
来源：http://www.sxryk.cn/163bhbhynoe.html

Py:   class User: pass
来源：http://www.sxryk.cn/163hqpgsgtz.html

PHP:  class User {}
来源：http://www.xuanzx.com/163vcabdvym.html

JS:   class User {}
来源：http://www.aibaodan.cn/163ocnwndfk.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163iygjqsoy.html

Java: class User {}
来源：http://www.xuanzx.com/163clzemdlx.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163jxfmcrwd.html

Ruby: class User; end
来源：http://www.xuanzx.com/163wcgxpnuy.html

C#:   class User {}
来源：http://www.xuanzx.com/163xpwhiseq.html

[G02] 构造函数
来源：http://www.sxryk.cn/163fusdhjyv.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163ipazxxks.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163szhffkxe.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163mxobfouw.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163keofeimf.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163xrsbowpe.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163oxthndni.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163galmxjcy.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163qiujtdjs.html

[G03] 实例属性
来源：http://www.xuanzx.com/163hnqsqlql.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163cobqxliq.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163hucgrmjg.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163sopklumr.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163xckelpqk.html

Java: private String name;
来源：http://www.aibaodan.cn/163kvrdnvbp.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163wvkcladg.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163azfrqxiu.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163ljzlxrbd.html

[G04] 定义方法
来源：http://www.sxryk.cn/163zxswsakf.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163zxpbgths.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163fclickmn.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163hgodsrdz.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163imyukpom.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163vkxxugwg.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163vngfmdhl.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163idrgrysb.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163uzeiowva.html

[G05] 继承
来源：http://www.xuanzx.com/163bkisuekd.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163nsrjjvel.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163tqihfhpo.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163sbsmjheb.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163mfpnblke.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163pfpfggzb.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163fdeokdkx.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163lmgjozoy.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163bdokvzwp.html

[G06] 重写方法
来源：http://www.sxryk.cn/163bodoljdy.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163srobkyed.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163xpgjjhna.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163civpkayq.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163onoozseb.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163xifokxjr.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163trsohcjz.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163lxyvtnld.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163abcxuosy.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163zniqhamw.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163ldlqvugo.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163uetbnfvk.html

JS:   super.greet();
来源：http://www.sxryk.cn/163cuigceac.html

TS:   super.greet();
来源：http://www.sxryk.cn/163werdlvhc.html

Java: super.greet();
来源：http://www.xuanzx.com/163pwdmerxg.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163iohsujmx.html

Ruby: super
来源：http://www.aibaodan.cn/163xacrnjxs.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163ycgtdfgn.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163uqhvmtlj.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163gjvuqnqp.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163xfxlchfp.html

JS:   static f() {}
来源：http://www.xuanzx.com/163cdruablw.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163udwhehsq.html

Java: static void f() {}
来源：http://www.sxryk.cn/163ugqxqclk.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163pcvxqisi.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163ehijqjqm.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163cwltcwsp.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163qgzoddwo.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163rcavdjyn.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163mrdiczmu.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163uuizgtat.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163tthkonss.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163udtyymlh.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163blfaombc.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163gogdvrsy.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163ufzvtpwv.html

[G10] 访问控制
来源：http://www.sxryk.cn/163kcknhfzo.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163agpbhdmu.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163wgixnrdl.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163rtzwcdma.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163kxnozqbd.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163ghgcexes.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163gcgqsbja.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163tavwvyfc.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163mibtkdwy.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163swqiqdde.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163ibhdomqq.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163qjpuecqc.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163yxehvptt.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163scltidfz.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163jcymtjci.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163ipsmozmf.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163pfjjjwme.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163fotetgvp.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163jegjzwqr.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163cpwbclmg.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163ceqekcmc.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163jfreiekt.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163sldgauew.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163dyshjgfz.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163utvztdkc.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163rhfoqtdq.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163jstdptej.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163deenddvq.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163mrjqgnzx.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163fosaufns.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163punupbvy.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163eifqdufb.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163ehzmdrbf.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163akqueral.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163oegzsjjh.html

C#:   u is User
来源：http://www.aibaodan.cn/163drgpdetp.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163jucoyymd.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163olkrwwks.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163hpcsdgap.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163grqosphs.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163fryikmkx.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163emjcthlm.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163uuxvaqyv.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163miqwrtaj.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163kkwishng.html

[G15] 枚举
来源：http://www.sxryk.cn/163epfveotr.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163awcifcdc.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163nysztunb.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163rjaiwjgq.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163htjbzsxs.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163kmklxuxm.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163gqbisnyu.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163gyogvzcr.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163seywvyyv.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163vajbsdfc.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163oggnbfoc.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163dauvpxbu.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163krnugwln.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163cmmyoxuq.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163fvdmmsyw.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163kxicixsh.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163btyikdvu.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163ccsszjbl.html

================================================================================
来源：http://www.xuanzx.com/163xqrrrtij.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163uchwnnvj.html

================================================================================
来源：http://www.sxryk.cn/163wqgjwphe.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163rdmruylc.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163dqopcwge.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163thcunmeo.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163odjwqcmh.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163lykpridv.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163onymxcvs.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163bhvwsehc.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163vmggbzxk.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163tholinoj.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163ajwlbkrk.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163dtewtaxz.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163dnhzuvmj.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vpcugoxw.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163fctvjrou.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163xoevkzcc.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163ipgkzyss.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163isdvvqnp.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163htgycuob.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163cgsxadwc.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163tnctbsts.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163rsbvrtsb.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163ukgcbbtx.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163pnigeiwx.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163mzwhjjue.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163dcwkuaak.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163wooyiimj.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163lcwligcf.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163ldxlfxxv.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163pofmisiv.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163loezatmy.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163qyqwnlfc.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163zupwbwkz.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163mjkeubug.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163xxljotru.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163zoexfygz.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163texgohtj.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163qmoerdwi.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163xysbfjal.html


<!-- 参考信息 -->