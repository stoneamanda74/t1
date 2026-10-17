外链999!wailian999！

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163uftakpeg.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163crkafguv.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163oahcnuzj.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163hecfpkhy.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163vsinituf.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163pblimjdd.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163adjnkdzk.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163xhuyqgel.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163affoimro.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163mttelmtn.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163oubkzjxt.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163fpqqqkye.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163dyaxhpgo.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163cdzrmwvd.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163kfrhfosy.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163acdqzjor.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163uvzfsexi.html

[F06] 删除文件
来源：http://www.xuanzx.com/163gzwqzxlh.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163vgtqoiqw.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163plowyoor.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163wrdlmeiq.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163wrfxwkpb.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163bkxeyhat.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163aqkrzbiy.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163gbcaqavm.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163dwjeejrr.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163pmdkhnhd.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163smohtnll.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163iahzdtbq.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163xrqxzlpk.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163jjpyngrq.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163whtmyxcg.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163zbpozpzl.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163azwsdosm.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163qtnlhxhl.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163vorauftr.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163hibjxftf.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163xnimbxyy.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163xxapmizs.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163gzrkwpaj.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163jlnkneyx.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163ecpcibtw.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163ckaqulup.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163jxfzgqie.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163csarngry.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163bzvzfwft.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163rgrybtds.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163lbmjdutw.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ohlxbail.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163iogoljyt.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163yyrntzuk.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163fytyfrsd.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163gydikoxk.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163kihyabci.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163zkvwtvod.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163tldhbuav.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163cjbbmfzu.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163uozdewzi.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163bvxsselc.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163klwdjzqq.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163zeqsykno.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163dnlqbhax.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163rnzzqkeo.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163iotpjyvk.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163ltymqwle.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163bartmzvz.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163lqvhxbri.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163ykyoqvrr.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163tdpnptmp.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163yihjlmkl.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163lrjnjpes.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163yizcsayw.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163unznhbgg.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163nzzmshju.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163yxnkpdoy.html

TS:   // 同上
来源：http://www.sxryk.cn/163lqjvbhyu.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163rpxqdqoq.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163xzpqbexd.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163doawdbvf.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163paajuphv.html

================================================================================
来源：http://www.xuanzx.com/163tjihaxvk.html

G. 面向对象
来源：http://www.sxryk.cn/163uhpakfee.html

================================================================================
来源：http://www.xuanzx.com/163clhyahwi.html

[G01] 定义类
来源：http://www.aibaodan.cn/163fataribr.html

Py:   class User: pass
来源：http://www.sxryk.cn/163ejhezyfy.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163pdscewpj.html

JS:   class User {}
来源：http://www.xuanzx.com/163pqifpgak.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163fitobauv.html

Java: class User {}
来源：http://www.sxryk.cn/163vuqwfcsb.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163nnpoatbh.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163zkrrulbe.html

C#:   class User {}
来源：http://www.xuanzx.com/163smeyicrp.html

[G02] 构造函数
来源：http://www.xuanzx.com/163vbwjqnbv.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163xdolfycl.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163drcqvmsu.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163wvjrdbpe.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163xohqjgjy.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163aatecybj.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163pjsoiktc.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163xjirmmvh.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163firbcjwh.html

[G03] 实例属性
来源：http://www.xuanzx.com/163dgzdeysv.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163wxdrsygp.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163xrrwdwkp.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163gdmeuavy.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163iycqusyu.html

Java: private String name;
来源：http://www.aibaodan.cn/163lxqcsnzy.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163qdbtcgel.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163gdvrivyc.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163iocvryea.html

[G04] 定义方法
来源：http://www.xuanzx.com/163lbxzhict.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163odulomhb.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163qdfhxoyg.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163wmtnbvrx.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163ggprezuu.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163btreafzv.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163jejggbkv.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163gadbjqys.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163iafzgjur.html

[G05] 继承
来源：http://www.aibaodan.cn/163swzmykuk.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163ylvlykth.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163zwvyfmqv.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ittkfqyd.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163seljnlle.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163xissexqc.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163ohlvjeor.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163vwfbmmyj.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163uatebnhk.html

[G06] 重写方法
来源：http://www.sxryk.cn/163lqqkemec.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163rafuynpk.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163jmjlkwyp.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163qlkyrnal.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163yfviepaz.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163guvfxglb.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163viueutpn.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163hgdxatfk.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163nkgnrvck.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163vhnnikkv.html

Py:   super().greet()
来源：http://www.xuanzx.com/163awgqywcq.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163lskbfjcj.html

JS:   super.greet();
来源：http://www.sxryk.cn/163gvaqlxkg.html

TS:   super.greet();
来源：http://www.sxryk.cn/163kxpezkyn.html

Java: super.greet();
来源：http://www.xuanzx.com/163ehrunddt.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163lbhpegje.html

Ruby: super
来源：http://www.aibaodan.cn/163sbuelgpb.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163kymhwcvv.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163tdfxtdfk.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163upauvkzo.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163hrtyqkhi.html

JS:   static f() {}
来源：http://www.sxryk.cn/163dsvoetop.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163irkehsja.html

Java: static void f() {}
来源：http://www.xuanzx.com/163qymfiamg.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163nmqxfdip.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163jkhdjntu.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163lpylfkgu.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163lhslqlew.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163sumzxura.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163tapssfjt.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163vnnxmlhv.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163fdskizzf.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163seccheoo.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163lpgvugsd.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163kwmladwf.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163ezrocfzs.html

[G10] 访问控制
来源：http://www.xuanzx.com/163bjtyaony.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163phnnoipu.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163kjxkoeaa.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163aheovjtl.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163ubqyritl.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163ljgbtejd.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163vlcnqicf.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163vbsktzas.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163dagmntfe.html

[G11] getter / setter
来源：http://www.xuanzx.com/163vexeeota.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163iwmnbgfy.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163txlihsdq.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163fuqvdmas.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163oqlayvwm.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163fbngbevf.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163xptbhdlt.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163ylkzhhag.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163mefvcqrx.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163upfimkwl.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163pgwzgfzd.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ibsuvhnq.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163frkabgox.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163wjkgnoqo.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163uwsoabhh.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163ybhrfycs.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163uxnmyymi.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163bpiyprfi.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163qlotwhhn.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163haoqnxga.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163mhnufamx.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163bqmqdhro.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163jfizqrii.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163shvfnygm.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163whwkopad.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163ejlbhvzi.html

C#:   u is User
来源：http://www.xuanzx.com/163mdakahbw.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163fgzeegwh.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163nbanhnog.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163fqamwlma.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163bsfvaxcl.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163qtziveln.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163cksoqdcu.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163qouwmuze.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163dqbfkdea.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163otfsfukl.html

[G15] 枚举
来源：http://www.sxryk.cn/163gehvtocc.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163xvykzhom.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163xmcppxms.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163yrpgtnwa.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163bgimekcu.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163maiekjzj.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163omjpwmgr.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163wmdauldh.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163bqszzgne.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163gfzorjsr.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163qtkdxivf.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163muoqhhvx.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163owqoxcrc.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163aviqdgin.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163phjwdtyc.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163qtabirxm.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163ujjnzczr.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163qxlssxln.html

================================================================================
来源：http://www.xuanzx.com/163wcwuaqdd.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163xquhajwg.html

================================================================================
来源：http://www.sxryk.cn/163rmgyzjya.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163cuofuwjw.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163fzplhrvv.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163yzutkxab.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163lohlidou.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163acwzxfff.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163btjfvtve.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163cfzbuomw.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163mrgyuayz.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163rmgtvnne.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163kzchavry.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163jhgmrbgm.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163rilypfpn.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163inrepqdb.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163htchudax.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jycuwigv.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163cozpmjvo.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163tpurryep.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163parllpcc.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163pykbipmx.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163jyyveyuo.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163fraplozd.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163puejvgwx.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163zyffzmqf.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163fmfsxiji.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163ibhkalyk.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163elyfpgbz.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163qxbvlixb.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163eznsmozx.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163mnbdwsze.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163fhaecyam.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163brimnuer.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163kjuuydob.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163upepmydw.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163qugyfgtd.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163eputejur.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163wdkfihoo.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163fukwugol.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163fpklqigq.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163utjdymst.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163xcpsrjit.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163hntbfztu.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163gpykhzck.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163ldkjjbvc.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163mwqzwszn.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163zmailiks.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163hktldaxq.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163clyiblyd.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163sdrdcurd.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163pirecjyf.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163qyvlzbqr.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163dzxzsnrt.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163jusnxlps.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163xgpceksa.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163qypinhge.html

[H07] 断言
来源：http://www.aibaodan.cn/163wyaleshs.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163uzpleffz.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163dqyjwxvr.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163bsoquvaj.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163eeukirkm.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163cwleuxhy.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163segcbnvz.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163srhlgnsm.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163ypikrobv.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163qjohrdww.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163bgncdskw.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163vqpbldga.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163xvoifqpr.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163shjhifsq.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163lyvlzths.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163qqiwrami.html


<!-- 参考信息 -->