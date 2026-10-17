外链999!wailian999！

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163iubvxclv.html

================================================================================
来源：http://www.aibaodan.cn/163mvmyptqm.html

F. 文件与目录
来源：http://www.aibaodan.cn/163jpdycdmi.html

================================================================================
来源：http://www.sxryk.cn/163pujfvfqb.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163dttuzbrp.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163nzmsqbqv.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163zqdjxuve.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163xicytoud.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163kiacepeo.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163uwhxoquz.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163gbqukyfn.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163ofaurzqt.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163rzituxii.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163nihvppzi.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163qdhbfsjo.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163kvvgwqqc.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163ywfvbyfe.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163kpysetmb.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163gbeyfmnk.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163kptlsqqb.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163utjzkkpx.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163rixeujuh.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163wisnmrdq.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163vwghngcr.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163mbclwfsv.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163vioterja.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163irinotau.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163gzieruxz.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163dleivcay.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163ljoeegks.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163ynnswiwj.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163gzpmpzss.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163yptlwmey.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163loowpona.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163vsqfcvzr.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ivotfiws.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163amjxyfwv.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163ozfvuefy.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163chdhtfga.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163rceoidii.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163ficfrzha.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163qcmzkeiu.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163mxrxvruu.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163zwmytshs.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163pohbfeut.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163mhitginq.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163shcdzeyt.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163spfqpzuh.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163ihtnwsmx.html

[F06] 删除文件
来源：http://www.sxryk.cn/163saybcapo.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163ktpcolen.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163hgvxpkix.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163yehcbitd.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163vetqsqkh.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wccckrlz.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163gxmnqyyg.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163fexkeakc.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163robuohyi.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163neyelhju.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163nfkhncgp.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163upnyqeyt.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163tbayjfpx.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163bsjyuhop.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163wkkdjwjj.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163ipyzcdba.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163jmvxhffa.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163uvctfkay.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163incpjbqc.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163gfdkkgsr.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163uktvrmln.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163rleikrad.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163dkrzngmx.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163gmoaekln.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163tdrnpiyd.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163afqfmwxn.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163ytwdulxp.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163hddxqkyi.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163oumgjaqw.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163qwcachqd.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163rrjkqqsv.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163uvoqntlp.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163urdakuov.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163uewsnevd.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163zudvtofr.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163ssqxadzf.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163qtbwsksv.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163mzzowyul.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163urrdqwgg.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163kxbbzhoa.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163faphxgya.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163rmrjqlsa.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163gzzvpekt.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163kirbxbwh.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163gcuphxnr.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163rrbasvxm.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hihdkvok.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163fpxasboo.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163gtsammbj.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163kjteqdyh.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163qnyuohuc.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163bzjaneih.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163bbkkgvgm.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163qmevjzei.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163vhporkbx.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163uasticey.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163qdtftpsx.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163ccvugimf.html

TS:   // 同上
来源：http://www.aibaodan.cn/163hmokepfb.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163tzcvnrim.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163bfwayuhj.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163jeanwtzo.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163lppbizwt.html

================================================================================
来源：http://www.xuanzx.com/163ueovnarn.html

G. 面向对象
来源：http://www.sxryk.cn/163gkwibzzw.html

================================================================================
来源：http://www.xuanzx.com/163xqsrziin.html

[G01] 定义类
来源：http://www.xuanzx.com/163jdmmhbcw.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163xczzqznr.html

PHP:  class User {}
来源：http://www.xuanzx.com/163ocnxwbck.html

JS:   class User {}
来源：http://www.xuanzx.com/163dkedxwln.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163jtgikfzh.html

Java: class User {}
来源：http://www.xuanzx.com/163fsdxxdom.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163dgnprhvx.html

Ruby: class User; end
来源：http://www.sxryk.cn/163bxvptrpa.html

C#:   class User {}
来源：http://www.xuanzx.com/163wdvgyrxp.html

[G02] 构造函数
来源：http://www.xuanzx.com/163hqjrnymo.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163znfelqul.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163zibpcovt.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163ysogwzze.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163zagdrnah.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163rxudnwgj.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163ugydvedy.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163zsirrkhu.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163vzxanqnm.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163fvvqhajc.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163nnxiakwz.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163urscbhtz.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163urfilhwo.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163hrkppzhu.html

Java: private String name;
来源：http://www.sxryk.cn/163vwjkkrrr.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163hmyzmtxp.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163vmodmcic.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163gnmgxudp.html

[G04] 定义方法
来源：http://www.sxryk.cn/163tbsfwish.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163irpimyko.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163gesjvfis.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163hclmldtg.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163wqjgfhwa.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163wqdpgagj.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163twhutzec.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163vxdkjbjp.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163ahrauvha.html

[G05] 继承
来源：http://www.sxryk.cn/163lhotblrz.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163clviawak.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163wddqkepu.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163wgbldjda.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163iswxkdas.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163qpguqifn.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163ywkbgicl.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163nixzuhpt.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163cltlumiu.html

[G06] 重写方法
来源：http://www.sxryk.cn/163znrhxkrx.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163zohqgofg.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ymfwpxlr.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163udfohgbc.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163jowrixyl.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163yjxfqela.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163udbottvu.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163tildypro.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163leryyjpi.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163rzjfzmbu.html

Py:   super().greet()
来源：http://www.xuanzx.com/163fwuydxux.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163cuvwzrki.html

JS:   super.greet();
来源：http://www.sxryk.cn/163lwnoglca.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163uimrrjtk.html

Java: super.greet();
来源：http://www.xuanzx.com/163oeggiyza.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163yyrvdltl.html

Ruby: super
来源：http://www.sxryk.cn/163zokuqxtg.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163phhquvpk.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163eidglodk.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163utyjxngz.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163syjsmutl.html

JS:   static f() {}
来源：http://www.sxryk.cn/163rlabtbhb.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163hopayvsj.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163aauiqnrd.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163jxiodepz.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163hmubxzpc.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163qjettile.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163imboqgnf.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163npoawkmw.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163vuqezxej.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163inzzkwyt.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163mbuoreqt.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163fixhzxed.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163ruddjlss.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163ujrwrksk.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163xwjshhdp.html

[G10] 访问控制
来源：http://www.sxryk.cn/163cvmvokeb.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163asoqewjv.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163olfvpugc.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163tikitrpp.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163ndpvctut.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163qdjlcmwv.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163inxjzrgv.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163hgidoytm.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163qjppwzuy.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163ukufnakw.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163klhwjmyp.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163oqovyjvj.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163mtulzcdj.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163oljlsgpu.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163pdfibzcz.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163ldkpflko.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163xpxnajsa.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163fxcinyjv.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163trmdjruc.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163xqbgugbj.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163mmfhjosc.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163utrepriy.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163qoljqfqd.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163reiyilhy.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163sfbirbga.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163wurmvxyq.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163ejuozjjy.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163vdhopgec.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163ueyomuho.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163jviveazs.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163elvbxbcb.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163feboyrrr.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163forjrhxg.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163dfwrntqk.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163bksgyqpk.html

C#:   u is User
来源：http://www.xuanzx.com/163agywfahv.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163vtixsltp.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163htocjyhy.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163gqwapjqj.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163adizrbjo.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163scrpfqvu.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163bcizewlp.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163rjlnrcrc.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163iwkwbdrw.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163zrjihklj.html

[G15] 枚举
来源：http://www.aibaodan.cn/163yjlbamww.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163mzrhoigy.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163ocgeikvi.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163jefnvltz.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163fzxmqgzu.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163bipaizsf.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163tvgyoeyk.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163abxifpll.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163jivhnqnk.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163vjmjyxcz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163xsfszwzx.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163wmcdfvvp.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163hxwsnhph.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163woozvxyx.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163wbtwnlek.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163aqpiriww.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163lvlxhngb.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163pyvnhcgh.html

================================================================================
来源：http://www.sxryk.cn/163rtkyihat.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163gjsxugiu.html

================================================================================
来源：http://www.sxryk.cn/163zdpoiqxd.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163igtbfdow.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163lzmwxhvn.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163wrnkvnfz.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163qudbtviz.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163smnjjeli.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163apgdfbtt.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163nwykwjwn.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163iekgztcc.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163tmodsxzn.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163hxawjqlb.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163sqtujwtu.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163csrllwsn.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163gpjqbncg.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163cdmgwwyk.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163dctadhba.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163daduirse.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163lxtnwjba.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163qtwvhjvu.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163mpdvqqgc.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163zdxrgeya.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163elqniddz.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163rmutzpkd.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163amtkqmzj.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163rlmahfvu.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163sifwojqy.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163riqrgdet.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163ptvtixxf.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163ruexqgby.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163adaogrpp.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163qtvefxrg.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163gogzjkvl.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163dzffgext.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163fzbyyaim.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163gftlcynk.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163uknqwksr.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163jnpzbhyk.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163qrituhyw.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163gangjypm.html


<!-- 参考信息 -->