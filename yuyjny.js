外链999!wailian999！

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163vwnjrfja.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163byhgvaro.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ndqyxwrg.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163yolbbarn.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163witxhwyu.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163vptdmrmv.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163voviszyk.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163xtrvgubr.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163qefklifl.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163wguyhlwe.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163pwkephni.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163prllrcgq.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163jmtlwyzx.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163ikbejzjd.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163wbxwnkvo.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163nvyonuuh.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163txzqzqvw.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163bzzgausu.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163xoefnvtp.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ofoxxyjn.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163bgzunhji.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163medzigij.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163mwketkto.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163nfgivsbn.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163udavvdsc.html

[F06] 删除文件
来源：http://www.sxryk.cn/163heqffqia.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163ixzhgujw.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163kkhymshw.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163jlmfjwmp.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163dzxcuirk.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163kphrgjph.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163yfifwbas.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163vbmdobui.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163czdritnc.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163veegfmrs.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163ipsmhwsq.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163cgnklevu.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163rrvuzyuf.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163hkzvhnwz.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163pqhiwlfi.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163hjiskglp.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163zaffruwl.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163vochfnmk.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163kkikzudl.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163oxbhpwqh.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163pzpergql.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ponsgkio.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163pwjfpxbd.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ueilwjqr.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163tmtwbwlh.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163hkoouspw.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163qkeexxey.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163hghpbejl.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163dbaezoch.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163wkpcegwt.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163soxbwjds.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163efphutcb.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wptehhrt.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163ggadufdd.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163weekiggt.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163vwjzvuhx.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163nvkiexso.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163tlupxbch.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163fsamfgyv.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163sewvdovz.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163ypdwwxqb.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163mellaosk.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163wtooorbk.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163yjfvdeul.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163nkchnmpo.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163piiurzmw.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ybgtoqul.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163ftevhvoi.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163yydnyiba.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hacusrad.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163udilegfn.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163edyuqgon.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163qsufhvkj.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163qkssgqwd.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163hzksinkj.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163ueuxsjpd.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163tuwgfwma.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163poqhqnib.html

TS:   // 同上
来源：http://www.aibaodan.cn/163oadubgkl.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163azwfqlxb.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163iwjujepd.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163armopzwk.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163upwvusik.html

================================================================================
来源：http://www.xuanzx.com/163dhffchef.html

G. 面向对象
来源：http://www.aibaodan.cn/163hmrglfzl.html

================================================================================
来源：http://www.aibaodan.cn/163obcykser.html

[G01] 定义类
来源：http://www.aibaodan.cn/163eavsyquz.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163fvtkgjlm.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163hugsdqyz.html

JS:   class User {}
来源：http://www.sxryk.cn/163qgdyrehd.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163bowolnbo.html

Java: class User {}
来源：http://www.sxryk.cn/163zixvvvej.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163ggszgfdr.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163mrqaxwis.html

C#:   class User {}
来源：http://www.sxryk.cn/163oicddfdi.html

[G02] 构造函数
来源：http://www.sxryk.cn/163udqjppzt.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163fylfreee.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163vhihbwil.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163amxpzfia.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163ryflbanq.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163wvfnaipi.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163qpokuexh.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163nnigsxzs.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163zsnpyczf.html

[G03] 实例属性
来源：http://www.xuanzx.com/163dfasuccx.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163rrcbguzc.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163sxfbontb.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163mnayvsdc.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163pcdypxtg.html

Java: private String name;
来源：http://www.xuanzx.com/163yohttuwc.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163lyyybqcq.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163oytghiry.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163tehkozqb.html

[G04] 定义方法
来源：http://www.xuanzx.com/163yfahthas.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163fcvyawqx.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163yqulvjyn.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163lfusmkqe.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163krgzocos.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163cifejzbt.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163fmyeizrk.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163vywqvnyx.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163oyqdmyel.html

[G05] 继承
来源：http://www.aibaodan.cn/163patmfpew.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163nluvqmbc.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163plyapran.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163hhiyzujz.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163uvgtejwl.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163jaeecxyu.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163plwbqvxe.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163ucqrceqy.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163fixlncth.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163slyspspr.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163aqgbvatt.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163wfijfhhb.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163wjlwzeig.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ndgwizcr.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163fwgajbxj.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163bsbbstxl.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163kidntggm.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163hhllcpxa.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163bsydspyb.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163mzxcozpf.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163jizdnucj.html

JS:   super.greet();
来源：http://www.xuanzx.com/163ibeubcwf.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163ghpimawm.html

Java: super.greet();
来源：http://www.sxryk.cn/163nzwagzjb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163naawtxhh.html

Ruby: super
来源：http://www.xuanzx.com/163eqisnops.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163hmghgjyu.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163bbpldfys.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163jqhwaept.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163tmthtvuh.html

JS:   static f() {}
来源：http://www.sxryk.cn/163cpqqledl.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163gujpszhl.html

Java: static void f() {}
来源：http://www.sxryk.cn/163bcsccphq.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163mmehztkl.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163bamybphb.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163jybnxwvs.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163kswbqdsa.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163fhuvbxbl.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163unnpogvz.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163gaiayutx.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163dmaywnmg.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163hdjxckjg.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163yqeigggr.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163mghhnkul.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163hyxyjocq.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163yijyjmrr.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163wqhuyrvq.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163bshyevpp.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163zwyumdhe.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163vxdtqjuf.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163zixgxduu.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163cslnbgja.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163fpspahhe.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163oewjktjt.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163szrzrmpq.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163qkktwbbn.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163dohmkqxs.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163igtxxvmx.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163qlwsjrca.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163qqbkxjzg.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163hpgagmxo.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163lokpckfh.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163txdibqtx.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163rzakkxny.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163unzkpfdn.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163kndujcxz.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163nrrrjhxx.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163cvyvcsio.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163qitgvdfw.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163ebrljnfp.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163astiyjzr.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163ovdrqdjc.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163yxkvhtwc.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163plzeaybe.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163uezeeeuv.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163kjobaqsx.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163afhydvih.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163bectpdmw.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163azpvzhoo.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163qpsnrgib.html

C#:   u is User
来源：http://www.aibaodan.cn/163gwopvjcd.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163gviuixeh.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163cperystb.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163dnrgwium.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163qfdseotx.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163pelrrntp.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163pjarxsno.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163hxphkfca.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163ieycofse.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163edxampoh.html

[G15] 枚举
来源：http://www.sxryk.cn/163bnmmreuo.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163zrynaybc.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163dkwcluum.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163eeovangz.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163zhqxgvmn.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163kfqwxdlh.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163pfhpoptv.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163hsqqttej.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163zfueibzo.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163kfmcqfrk.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163agsrlebk.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163vrfevuxe.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163bosekfjm.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163dknybtod.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163syklcdux.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163jjocmadg.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163bpizcnsf.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163spfwwbyj.html

================================================================================
来源：http://www.xuanzx.com/163tuhsptgc.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163ubmbnaub.html

================================================================================
来源：http://www.aibaodan.cn/163kvamdfas.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163cgbvxbom.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163pwaflylw.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163qqtyklkv.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163pjnmevlq.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163fjyheoxd.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163hklqiidd.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163elkdikft.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163dggfubww.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163tqabjxqs.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163slzuzvzq.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163gupktznv.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163sxojjova.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163mdffdjte.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163cacqglba.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163zjcpcunu.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163ihucqjcf.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163wsgzybpz.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163ewapjswg.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163slzhajwy.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163cjhgaiir.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163kzlltesh.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163xcngzdnc.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163vbqfmlhn.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163wpowihrn.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163qodimxck.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163cpmdkssl.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163jdcgzmmg.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163wspphkdw.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163uewblkst.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163bjdvnthj.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163sfugzxit.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ptsxbbdr.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163qeizkvhb.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163petlehwp.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163iyjvtuvu.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163vhivfbgl.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163uhxcugyr.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163mnlpzkxv.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163ovqziacc.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ikbotwge.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163bwblflnx.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163szwimrgu.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163soxtpcfx.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163uyagqkhp.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163cgdbpklg.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163oaqjxmks.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163amiuecwj.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163etdtfnxt.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163pvvqegxe.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163bqcbgmrd.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163hbryxppv.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163xejnogsh.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163whjjkoxd.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163shskrubd.html

[H07] 断言
来源：http://www.aibaodan.cn/163iwhevcmo.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163uxhipuee.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163qtqtlhyx.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163mefbpaik.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163dnxiljqy.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163hfrzsaht.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163xaiyspxk.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163ccmqbeeq.html


<!-- 参考信息 -->