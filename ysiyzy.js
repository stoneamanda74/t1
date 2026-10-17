外链999!wailian999！

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163qgvwgdpq.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163rgwyympf.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163qvzsidfy.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163vaxcsfnx.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163fdewvsxp.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163nojeobnk.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163mpppuvao.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163sorczdfh.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163uefwkmoj.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163caucurxd.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163lvvnfcdw.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163zxzcuvcy.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163duvnwjcc.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163tkqhjzmq.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163cgskyjco.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163dbxgfucj.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163pkexvxnm.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163gmsinioz.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163uvwxexkd.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163vxbczbyq.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163zztyehml.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163ptxuarha.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163vecivlsj.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163bksvbbgs.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163slqkfbbj.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163uvbkagbe.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163lsfeulqc.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163stucgtbx.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163rtdhrhcx.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163jymvwveb.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163kwjgdcio.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163vcxggkkl.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163orlygaqa.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163qeplicjh.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163yfkeknlj.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163mrbrivvp.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163ygyuruoo.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163mgfpgbpl.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163fnufryag.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163sezuitbm.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163hpegztrc.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163vctpnkpk.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163svrckcbo.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163vodogngx.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163ypiroosx.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163csqobpmk.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163ubbzdntb.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163mhwivtkz.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163vdsbkqtc.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163qizfsxoc.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163kapvbtuz.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163cquuvvom.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163oyefumnt.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163kqicmmal.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163zkghagku.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163twimzwfy.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163acvpejlk.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163ogbwlnhu.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ezmaxgno.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163qbwucogz.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163rgbpmbbh.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163dfbmrkud.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163ydlguwzh.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163cwjsapkc.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163cbtrvlyv.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163sxfwfiaj.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163hthqfngb.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ccnjwfvd.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163htvuphzg.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163tkjdkyjb.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163clxniwwe.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163igaetcdh.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163kwkaocvt.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163qjnwjffh.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163kfxhvcvh.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163xreswsct.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163cvhidooc.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163dweuatlw.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163vljrcfqi.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163lfjejbdg.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ezaqycyq.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163fnjlhclt.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163oznhromj.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163foaawpsz.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163dknmesqm.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163pwztuwtq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hsrvigyj.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163cabdlvge.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163tdlbgugn.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163iewhsetk.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163jrezbxoj.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163cfsxbqdj.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163tajkjpba.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163newecbbl.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163fbtmiuvk.html

TS:   // 同上
来源：http://www.aibaodan.cn/163ygencwaz.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163cwjtswwx.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163lukxrjzx.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163oxeznaof.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163nxhjpnzz.html

================================================================================
来源：http://www.sxryk.cn/163noiogagy.html

G. 面向对象
来源：http://www.sxryk.cn/163jshiyguj.html

================================================================================
来源：http://www.aibaodan.cn/163gxwruucg.html

[G01] 定义类
来源：http://www.xuanzx.com/163ibqqadom.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163amiynndu.html

PHP:  class User {}
来源：http://www.xuanzx.com/163cyndqmrb.html

JS:   class User {}
来源：http://www.xuanzx.com/163cqsbrkin.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163mytvbnwd.html

Java: class User {}
来源：http://www.aibaodan.cn/163dnjmtmsk.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163dcimblgz.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163vvlmfynv.html

C#:   class User {}
来源：http://www.sxryk.cn/163hotxtjwi.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163hfrdppwh.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163dkbgloyc.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163slxpbuik.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163fizceqij.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163bntaafbc.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163fpmwwhjf.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163vvmaqjzr.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163eejsfgop.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163hqznlpgq.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163tbxbbgkf.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163xykaqjqq.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163nboujxvw.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163tblmttnk.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163vyogibxi.html

Java: private String name;
来源：http://www.xuanzx.com/163yuzlijgp.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163reahqbck.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163qbyerewx.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163qiexjkzy.html

[G04] 定义方法
来源：http://www.xuanzx.com/163mfgusehz.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163bojvgjqy.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163pnflldvl.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163uxadcfyr.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163qldxdiiy.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163vinaaokn.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163avgzmcbw.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163ainfkbrb.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163snjynbvl.html

[G05] 继承
来源：http://www.xuanzx.com/163aysmwucd.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163sgznkcek.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163ogztsbwe.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163wsfgrmne.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163lqlqffmw.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163sqdxbrai.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163lcfqivwp.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163nwwfbffj.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163bpqpbrzu.html

[G06] 重写方法
来源：http://www.xuanzx.com/163sxgupnoh.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163wxnhcobk.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163aigayfgl.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163uawmysyz.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163qhkppgxq.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163flapifuu.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163skhmeldb.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163epqblgbs.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163mvdyxobl.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163yvetokbf.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163bybyzrxp.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163movooodf.html

JS:   super.greet();
来源：http://www.sxryk.cn/163chhljlhl.html

TS:   super.greet();
来源：http://www.sxryk.cn/163alsqrbnm.html

Java: super.greet();
来源：http://www.xuanzx.com/163xdfqpbnn.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163juerywzh.html

Ruby: super
来源：http://www.aibaodan.cn/163hzbikttb.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163vuuewgzt.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163giwjdmqe.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163ormsmltw.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163zhutegmb.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163jvsrrcwm.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163icmoooel.html

Java: static void f() {}
来源：http://www.xuanzx.com/163rgbfuacm.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163whhgxvhj.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163eiksjibs.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163uykadwdr.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163nwyidwxn.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163wwpmvnpf.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163rgtdyksa.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163jjvoxzth.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163jmrgafsz.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163ddjtygoz.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163fezfgabr.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163lqxwortf.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163lswvdnem.html

[G10] 访问控制
来源：http://www.sxryk.cn/163gagimfzs.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163mjwudrik.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163zxbohckt.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163brdmzelk.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163wjtrpahl.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163alvstxlj.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163euknzpvs.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163yexdujmd.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163zhpmyqzd.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163tqixymbr.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163kauocjjr.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163hbnzzibn.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163jlsngtbd.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163svgaiesr.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163qurhsxvy.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163tjusfrmv.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163ofdacloo.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163ffoithij.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163izvavguz.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163azwflfdx.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163bhqamkij.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163mlvbcwnq.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163jzkfrihz.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163iuvtmbpb.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163bdfmtqty.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163zjoaqdsx.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163speoztbi.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163icrrvdpk.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163pgcltdex.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163xpcbxpdh.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163udfazdva.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163ztamslbi.html

Java: u instanceof User
来源：http://www.sxryk.cn/163btifesdi.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163hqofolbt.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163znndhsek.html

C#:   u is User
来源：http://www.sxryk.cn/163weuszgxy.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163joklavju.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163weveypqb.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163jyhlckfz.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163rhcoqiod.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163xqjtafaj.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163ofyfihqm.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163kcnreglq.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163caajaybr.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163rzrtyote.html

[G15] 枚举
来源：http://www.sxryk.cn/163gpwwlpdc.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163fvpitpmb.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163nlgdpjdk.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163yewilyts.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ujaakgit.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163arpjmtjq.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163yjcwmcfg.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163emvlntdn.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163qilacqyt.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163orgueqbx.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163clpoifyf.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163bxckmpzw.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163xqxqhjrw.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163kvsboahb.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163ifvjmizz.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163qunkgoqu.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163naotsvel.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163fonatqav.html

================================================================================
来源：http://www.sxryk.cn/163rqsifeyu.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163wocefred.html

================================================================================
来源：http://www.xuanzx.com/163iuchyldh.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163fzohdnhh.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163yyokfxqh.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163gnyqxxiw.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163doypvtvr.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163eprhltjw.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163gaibvdzh.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163jlyqrcan.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163mfcmcyup.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163owhuksfi.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163hyivobaz.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163ihmhimem.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163zrvnsyhu.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qrpupbib.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qzkgartb.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163evrwleeu.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163xgmuzvoz.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163dfuuotus.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163frnnqnpt.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163gnurwape.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163zaboeflh.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163erbgypmg.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163fwyqvkws.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163kcefhiar.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163jildigal.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163iqxjvqxx.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163vsdgurbv.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163pfbxniuv.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163dplawbul.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163oiwsjudy.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163eosetbhx.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163xfjgveyt.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163eljfwtbw.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163pnzjfgqk.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163anyhyawn.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163qkpppoyv.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163cidvetna.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163ypbqdoxk.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163chhjofrg.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163scpocfto.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163nivzssha.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ugksuuvk.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163gkwoantz.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163uizopqvo.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163ejpmehzt.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163pqwyzkzb.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163iijyvrnh.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163horsskth.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163idlmwwda.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163rvjzsglu.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163cebaqamd.html


<!-- 参考信息 -->