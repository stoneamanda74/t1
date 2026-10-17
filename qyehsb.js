外链999!wailian999！

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163vdwhmhll.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163hkfpdbad.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163itezdnsy.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163vuoodxyd.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163yyrsnevr.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163oaycgdzv.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163gepiiook.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163rlzvljxc.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163chwzogqq.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163bmcpxxvt.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163pszpobzn.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163luqslyoz.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163xtpvbfdg.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163cibljjnd.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163gyxuldns.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163fbhnvfag.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163yyodzucr.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163xzbuktpt.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163yzmsmzjy.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163spciajpp.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163yurypwox.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163xhugpipt.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163ffiwcjvq.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163nlqkgdsu.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163rtvfbrdf.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163fxorkcws.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163bkseegmk.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163mnfgugzw.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163fgateyrz.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163hiwhtzmz.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163uzdlatys.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163fpykolst.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163wwvxloiq.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163vzzujugm.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163fygnuyfq.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163opcnecgf.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163vdcylyhi.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163tbcipffq.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163fpxumxot.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163nhiyhssn.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163uqelsnki.html

[F06] 删除文件
来源：http://www.xuanzx.com/163jdhfahnr.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163mmxhivzf.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163kvckzrav.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163lwcbkjwh.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163oebayzlp.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163fjcredlp.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163wiyrcaez.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163txfbubsm.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163dwqlytcc.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163fxhjwdve.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163dgspjwxl.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163rficrjfb.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163cplibwqn.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163pgfjhbsn.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163ixkcolis.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163loujcrtu.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163yqhjbkvz.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163imjbfhhz.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163vwqvteie.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163bdbkpwgh.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163ojujdcve.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163bdilskqm.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163rpiesrai.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163yfopbung.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163mbnsvpya.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163lqguzbhy.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163uxemaclj.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163yizlgrbx.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163sdqoxkin.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163dkpnvyxm.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163paldynpa.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163celoheoy.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163idugwxsh.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163jxmfdhzh.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163nzmikpms.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163vtmguakh.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163vplecgfa.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163zksimoal.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163qltumesk.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163rjekkohs.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163vrhajkqt.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163agjwoqtv.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163bdbpkiei.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163tvbskypl.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163ozhjrsde.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163krourvou.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163nhnwprnz.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163urjjkawb.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163omagdbhf.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163tbpnrcgg.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163rqcqeufl.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163zensirpt.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163iyixjxfl.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163wtgdwnhv.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163mbxfioln.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163dkjviwfk.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163lfedtphi.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163rpfesjqt.html

TS:   // 同上
来源：http://www.xuanzx.com/163rjmxqsjz.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163nkqhhuel.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163kiefwzof.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163radboqrl.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163eaoaucll.html

================================================================================
来源：http://www.aibaodan.cn/163ebrbiryv.html

G. 面向对象
来源：http://www.aibaodan.cn/163wbsjlwid.html

================================================================================
来源：http://www.sxryk.cn/163gedwojjt.html

[G01] 定义类
来源：http://www.aibaodan.cn/163lcqyskpe.html

Py:   class User: pass
来源：http://www.sxryk.cn/163hqhvjyez.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163kexejukm.html

JS:   class User {}
来源：http://www.xuanzx.com/163mgxbwszb.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163slcrchxd.html

Java: class User {}
来源：http://www.sxryk.cn/163atftmfyy.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163braohzgc.html

Ruby: class User; end
来源：http://www.sxryk.cn/163fvmgfowt.html

C#:   class User {}
来源：http://www.aibaodan.cn/163hgzrnqmw.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163egmbnjtw.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163trjvpktp.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163xxdiqcbg.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163qylbyxra.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163mupgbxur.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163rtkoitfv.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163jvccbkve.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163vujhkmiu.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163gecxaivn.html

[G03] 实例属性
来源：http://www.sxryk.cn/163pjxfdhrz.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163ynpzsyka.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163ztxtrfag.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163yqzzxzcf.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163wsvzzhsq.html

Java: private String name;
来源：http://www.aibaodan.cn/163iabgmlzf.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163msbsstwu.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163segjoylr.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163pnfbqdib.html

[G04] 定义方法
来源：http://www.xuanzx.com/163kfrahitg.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163xmmyjgyv.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163ibwknren.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163cbdxtvqi.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163dbbsuzxh.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163bdliozwq.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163lgsyjmmp.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163ocgnoysb.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163yoopphah.html

[G05] 继承
来源：http://www.sxryk.cn/163ccmrelab.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163kcwkgubg.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163cydualno.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163epsfbvhu.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163rhtkcacl.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163ngdikvhs.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163nwtyjfch.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163ygaukavx.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163mmdwbaxd.html

[G06] 重写方法
来源：http://www.xuanzx.com/163caitlbwi.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163mqykrgdr.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163xtbcadwp.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163zeesupuj.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163npgzewrc.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163semxryre.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163ubsgorvj.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163juutggry.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163krwxvofx.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163ulgmhuku.html

Py:   super().greet()
来源：http://www.sxryk.cn/163xvqfnouz.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163eyngoxdw.html

JS:   super.greet();
来源：http://www.sxryk.cn/163eropibvn.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163jvwkapun.html

Java: super.greet();
来源：http://www.xuanzx.com/163ckmrltxe.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163ldqvkgvz.html

Ruby: super
来源：http://www.sxryk.cn/163hnfgtwqf.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163uxpulnbn.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163wbbhxyrx.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163otgxtspk.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163aynnxrzl.html

JS:   static f() {}
来源：http://www.xuanzx.com/163crrhrjjp.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163kkyymsed.html

Java: static void f() {}
来源：http://www.sxryk.cn/163agscdkbf.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163jvxpbgaz.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163zerfqggi.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163fmtcygkz.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163mejqpkpl.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163jgwdcxwd.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163akisspwq.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163xqheagtf.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163urhfeyvb.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163cormguyi.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163itujrwqo.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163ojzowwmr.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163dohiaqye.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163bohkcsbk.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163oqcpijdw.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163ysesrvyp.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163cfvaetdw.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163wbyanlpw.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163yifpdknu.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163gjdtjrst.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163ggldnagq.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163rsnvqwfw.html

[G11] getter / setter
来源：http://www.sxryk.cn/163iasdspnq.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163onmswrvd.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163uaynyvrs.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163zcgjcble.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163nauwvnwx.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163ibbybfij.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163hjlpowbs.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163ovxodqyz.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163oeumcukc.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163igqxetqm.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163fomafcsh.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163rnkxuvqg.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163ntjsynzk.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163vtbduten.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163wgidkatg.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163xxegjska.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163qbxcxqfa.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163rfniwgsd.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163rnazeeib.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163xhoaubot.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163ccsxliqi.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163mtijlxwi.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163cldyiuhe.html

Java: u instanceof User
来源：http://www.sxryk.cn/163fdnnjpol.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163ipbkszxm.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163tpiaiuic.html

C#:   u is User
来源：http://www.xuanzx.com/163ejkwguoc.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163polycbyi.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163tdkeaysg.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163sbqwgqzj.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163ruucgvmu.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163pwldfmip.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163qshitclp.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163mfkrtqjt.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163asuskqmd.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163kgoyspdi.html

[G15] 枚举
来源：http://www.xuanzx.com/163szlucrse.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163tnnsgjco.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163njxpjxpb.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163lfbytuws.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163gkjcedjg.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163uznfvnzd.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163ccwlonxk.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163oifkmdvm.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163heinpgom.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163tqpyqprb.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163xnojbgyw.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163eeyltfgv.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163cnbzzxuy.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ljrsykim.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163doephduq.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163yfxsaxcl.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163lwhonmmh.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163bgvtshin.html

================================================================================
来源：http://www.xuanzx.com/163ineacbzy.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163koglttmw.html

================================================================================
来源：http://www.sxryk.cn/163ipsywhlj.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163ztwevxkr.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163yoywtgaw.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163hnvzqght.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163bvlqpizb.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163hnguybcb.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163zxdarzuj.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163brsedajy.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163asakqzsx.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163dlwksrgj.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163xfmmufjh.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163viscnbgt.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163unuyhjbi.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qrfmucrl.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163wlsuomgk.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163wixhvoev.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163vpbkkmds.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163neuapsvj.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163artwrnqh.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163etettqms.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163nowkxtov.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163kvyshdaf.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163dahkfwei.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163isdvxxhp.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163qxglxhdz.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163qxtmlmal.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163adeullln.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163lcnibemo.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163htlvwmwz.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163bisflnpq.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163ymjzbsil.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163thcrylud.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163wndvsiej.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163kvcfbwnp.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163apcodogg.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163nutyuuqe.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163dkcsmiit.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163khfcgqpz.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163edaduloi.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163avumdaki.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ljkhoivw.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163yjjlcpid.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163ivmzpzad.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163jjnvelbo.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163fsykjvtb.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163wjcsxhro.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163mqujynvh.html


<!-- 参考信息 -->