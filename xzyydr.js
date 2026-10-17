外链999!wailian999！

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163knqqcads.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163kfaynfox.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163ompoxurh.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163hzcnawok.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163uwildapx.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163cfjbyjrn.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163fjvustvj.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163fqmhhjqk.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163abmithdt.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163sucrueiz.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163paakokbq.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163fttgbypa.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163uyvqlxzm.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163slnoegsn.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ollkijjb.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163xhjmioll.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163vphetzey.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163bcxbpotx.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163ekqewrei.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163lybtzbwm.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163afqgymsr.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163wdagbfiz.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163xrapmycr.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163iytsxhqi.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163xbgxuzuu.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163mxzmxyih.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163bgnendnz.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163vzdjydxu.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163wqzlhwja.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163xmuduoqw.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163iuwypuoo.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ckpizwvv.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163yfrfnnox.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163aucssppz.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163wxqhikhi.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163chqswzle.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163dfivjaxi.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163kjihwony.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163njektnkp.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163fnfimscq.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163vxsndqif.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163qztjoydx.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163twfbmzjx.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163cnfxfhgr.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163kcgradmi.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163scwzykzt.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163fsmjiiik.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163kxoxkllb.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ffdxhysn.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163rggrupsw.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163bowqriya.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163wnigmndv.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163etnvkcok.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163qiwsquay.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163kuylupbz.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163fszwxiul.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163kgxzyrci.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163qnakltmd.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163dsjgmjcr.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163iktrvkdf.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163ropzsavq.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163kyhjewqi.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163hbpzcnew.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163veeksevj.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163isfzdwyz.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163hhslsozx.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ntektukr.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163scdzzatd.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ialvpwlh.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163rzfabynl.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163dwogdrth.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163yxzuawhg.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163eqqxyfrj.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163skxkijne.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163fvxfwdlb.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163hisqddps.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163wxqgogya.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ytlxdaxq.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163efznzkxd.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163qmlwvvbd.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163vgxsqdjj.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163urjbfjpn.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ptxyzaxj.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163vhncatqt.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163cvygawrh.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163nzazjtar.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163opxuahnb.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163tpiytqfu.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163zamekzjt.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163ehjbcqut.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163xpznutak.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163nesvdqkq.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163whazcjli.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163higvoamw.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163nqddpcdt.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163bzakdztb.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163hzdgjnmd.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163vtdhgpsi.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163tqsykcet.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163pdlzlanl.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163xwlppiyj.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163rtskjgtf.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163sebvohwx.html

TS:   // 同上
来源：http://www.xuanzx.com/163wsdgyifh.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163drpmwldn.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163ljtuqcor.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163vszmtenm.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163jbulcvuq.html

================================================================================
来源：http://www.sxryk.cn/163nghqfbsq.html

G. 面向对象
来源：http://www.sxryk.cn/163jochwqmd.html

================================================================================
来源：http://www.sxryk.cn/163ontgkzhr.html

[G01] 定义类
来源：http://www.sxryk.cn/163siorpvfz.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163ccgdzhss.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163cxbbjstc.html

JS:   class User {}
来源：http://www.aibaodan.cn/163jznjqbgx.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163gjuhhjde.html

Java: class User {}
来源：http://www.sxryk.cn/163vmehcolr.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163fzxdnsqm.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163gnicnihn.html

C#:   class User {}
来源：http://www.aibaodan.cn/163cajcgxti.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163puejltpb.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163zkyoehqj.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163gtcfipoy.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163ecekrfak.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163qbpmwdki.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163dlxhpvaj.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163nhzxxegh.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163bwbpoowd.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163yeezlpbm.html

[G03] 实例属性
来源：http://www.xuanzx.com/163benwqcjv.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163uaehgsun.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163lfntgsxj.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163nnxvazjb.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163gqrffkyb.html

Java: private String name;
来源：http://www.aibaodan.cn/163nzbwaaiu.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163xvzhdhdz.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163hbxjqlbo.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163jcdqrkxh.html

[G04] 定义方法
来源：http://www.xuanzx.com/163tpphpwwc.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163lwvgirec.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163iljrhkds.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163qfvgwfcu.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163pbbhdkas.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163hfohjzxl.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163nkitfrpv.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163dspabqdi.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163bomolycr.html

[G05] 继承
来源：http://www.xuanzx.com/163mlyjgilq.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163wmldzrym.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163cxshvvvm.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ddhqmurp.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ffsxmnlj.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163ehhigsak.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163xwlrwpif.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163szqipvij.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163ngvblofm.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163qunenskw.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163luzhejxk.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163eqphcfgf.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163olvyhuke.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163atitzbyj.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163bmqfoinc.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163nmqcqezm.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163isrzilwt.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163fjuxslbh.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163ffvzymkb.html

Py:   super().greet()
来源：http://www.xuanzx.com/163lhtulfue.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163lugitphg.html

JS:   super.greet();
来源：http://www.sxryk.cn/163wrxvbctc.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163udswcecj.html

Java: super.greet();
来源：http://www.xuanzx.com/163isoohufg.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163indpuylu.html

Ruby: super
来源：http://www.sxryk.cn/163vzqmcewp.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163sixmpqir.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163sowzipdx.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163etrgaxkd.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163jyzqowmc.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163fwmzopkl.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163ejmprzia.html

Java: static void f() {}
来源：http://www.xuanzx.com/163veljriwr.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163elplzmiz.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163soartqlq.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163hkeuymgz.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163deksyhah.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163dwfglphv.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163szzseoon.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163kaeqqvjf.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163lfqkdfgv.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163bipvnidh.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163wekwhbzw.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163rymtcnmp.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163btfxlkwe.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163dpkpoilv.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163mtujrfxy.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163xolusyft.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163tllleasq.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163pxzdwlkx.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163vucugthf.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163vjbtehbk.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163ejsrdbsj.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163czoecwvb.html

[G11] getter / setter
来源：http://www.sxryk.cn/163rcvhjrhk.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163tenoyszj.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163iuxeuwav.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163iktmsune.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163xedgbohd.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163fejqjqjk.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163hlqxziuv.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163cqbitrzm.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163ryisuvbo.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163jrjxbsym.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163hilaalhi.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163oqjsoiwk.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163agbeuvdo.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163foggorzm.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163yftbrovi.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163lfzmqqds.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163kkttrzhm.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163zuwhlvzl.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163bdayokrk.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163xerqdyoj.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163nomywiov.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163ugmhujym.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163cardgeze.html

Java: u instanceof User
来源：http://www.xuanzx.com/163amltpciu.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163zvjhxvvj.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163ehcdnwxk.html

C#:   u is User
来源：http://www.aibaodan.cn/163yobtbfqr.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163jdxprkfx.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163ozfvjezp.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163nvatojax.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163yuseegvf.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163houozztc.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163nqpqklzx.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163gsenlzjj.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163wuugqfwr.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163atpdwsky.html

[G15] 枚举
来源：http://www.sxryk.cn/163qvnnkhth.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163mtldpazb.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163cljstikr.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163oloasypz.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163takmzyqe.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163pazihxji.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163thuqmkcm.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163fqdsxoov.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163thlwiutu.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163jucsvuqd.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163eiffsrug.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163zidvrejs.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163mzonnwkj.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163amklvifa.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163xejnroir.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163jjlwhmhj.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163bgokkgjc.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163xqmxpvem.html

================================================================================
来源：http://www.xuanzx.com/163nadrubqk.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163sysyzpnw.html

================================================================================
来源：http://www.aibaodan.cn/163exeapiyo.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163czflqyym.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163baynwtak.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163eapaiezb.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163dlptqqlk.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163mgwdugwr.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163hhhjrzuu.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163etvgafsh.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163guwzzbgp.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163xcfcnzws.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163harjmddp.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163qvluxmxr.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ieousrnm.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163iuelfvsv.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163glabhyca.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163yremfwda.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163vsmsbhpd.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163jhexjsez.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163gkjbjqhh.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163pczhuatj.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163jwdzzjai.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163wnizbjzd.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163zomgmjxf.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163fajbvfjd.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163xfcscdim.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163vzbpuuvj.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163autxucqk.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163zqujzuvk.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163xejhpcph.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163yblklzwa.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163nxsbbfyg.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163tkhxgqql.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ldlzumju.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163fxejhhnf.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163piosvbkz.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163txmkqziy.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163snuycbql.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163vwjknxos.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163slygtdqg.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163zuxqcwqi.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163jnaaxliw.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163gpvcfsfv.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163byqskhpr.html


<!-- 参考信息 -->