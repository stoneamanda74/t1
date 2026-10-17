外链999!wailian999！

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163ucprcijz.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163llqjuihc.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163sihjbruk.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163vgnazkmz.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163tmeusyks.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jpuqnski.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163hyvisokr.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163qvderngo.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163febcleac.html

[F06] 删除文件
来源：http://www.sxryk.cn/163ugckepfm.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163tonzdpqq.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163mtgwgysm.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163kzdyxikt.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163nnsoehdg.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163csmxgjrg.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163hkujwqxc.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163pyflepwb.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163gbxfdgha.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163hpccudto.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163snheazut.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163rfjdymgl.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163lvlwscno.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163umqkpwrn.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163puzckvuv.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163arrdljyv.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163zqpkvlof.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163vphagpcp.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163tfepydea.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163qrshpbro.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163nwtdqjpn.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163hdyxmdbr.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163jzjkelvg.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163lcngvzdq.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163mbxzzquy.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163haxrbtvn.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163dcrjwcoi.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163ntmtiltd.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163mpcgsuwg.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163xqvtkcab.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163hnzjyund.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163rallxory.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163vpgvvcvs.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163blwxlaej.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163ighzaltl.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163jztoijlc.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163ujmfhgcv.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163dhufejml.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163kijmapji.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163fvnsitzj.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163xrbafzki.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163dxtypkhu.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163sdhqxumf.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163amjsvwob.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163swvmerpf.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163jkpbltvq.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ofsufswd.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163khnesizu.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163onhqvnoy.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ennuejjr.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163hmksiuzk.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163snsghdcp.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163dkupaiva.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163vrveihnf.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163tvzppalf.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163xgofjdoy.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163ymnlabpn.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163tepvlqit.html

TS:   // 同上
来源：http://www.aibaodan.cn/163dcfosgpi.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163rulyepiv.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163qatayljc.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163oghmnrun.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163vkcdqchk.html

================================================================================
来源：http://www.aibaodan.cn/163yzxmubhv.html

G. 面向对象
来源：http://www.aibaodan.cn/163fmmckseu.html

================================================================================
来源：http://www.xuanzx.com/163xaiadogw.html

[G01] 定义类
来源：http://www.xuanzx.com/163ffirjuex.html

Py:   class User: pass
来源：http://www.sxryk.cn/163xvqxsscg.html

PHP:  class User {}
来源：http://www.sxryk.cn/163spxrkkfi.html

JS:   class User {}
来源：http://www.sxryk.cn/163vomohvdj.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163ghqcznbq.html

Java: class User {}
来源：http://www.xuanzx.com/163kfqgdygp.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163tjikkzat.html

Ruby: class User; end
来源：http://www.sxryk.cn/163mqolsrhp.html

C#:   class User {}
来源：http://www.sxryk.cn/163jlvnuopz.html

[G02] 构造函数
来源：http://www.sxryk.cn/163vroebdgp.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163sknvcxbg.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163yyzjfjog.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163ajjqpqro.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163rywtycol.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163frnxpsuf.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163revjkkdq.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163lpprqjae.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163uncgfrel.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163kgavtrlh.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163xfsfjdhp.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163ecsmmrlf.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163jirrbbyf.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163gvsqfetr.html

Java: private String name;
来源：http://www.aibaodan.cn/163mkbohsvd.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163axsagdha.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163coysozdm.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163rxfqucax.html

[G04] 定义方法
来源：http://www.xuanzx.com/163vjzzefwr.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163gxhamwey.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163hfyqoqsu.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163hvelzcpk.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163ltyofccy.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163nuqkjccn.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163wdugalbq.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163tuztaryp.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163nfhpejmy.html

[G05] 继承
来源：http://www.xuanzx.com/163bbsmmuzi.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163flthcjjp.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163mzrbdkhr.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163pyoeytph.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163qsxibtvm.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163uxwushvo.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163zjshbjjn.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163brwkzvez.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163wotokfmw.html

[G06] 重写方法
来源：http://www.sxryk.cn/163doufjrnj.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163bylvdjjz.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163xnqnymmu.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163jcfuxpig.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ejbtapaz.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163sztocmdq.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163qsjqzpkd.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163xrowgqtr.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163yroavvlm.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163mgmwyxsk.html

Py:   super().greet()
来源：http://www.sxryk.cn/163ecojrbyn.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163dtinwxch.html

JS:   super.greet();
来源：http://www.xuanzx.com/163oopkgohi.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163amucafxr.html

Java: super.greet();
来源：http://www.xuanzx.com/163qkscuhox.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163wzhiotvj.html

Ruby: super
来源：http://www.sxryk.cn/163fxkkfzwd.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163hrdnatcd.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163vrlxaqrq.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163epktxigw.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163igavgmpi.html

JS:   static f() {}
来源：http://www.xuanzx.com/163rdanbcgf.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163quyeopoo.html

Java: static void f() {}
来源：http://www.xuanzx.com/163lhfqpvuv.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163mbczpqty.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163sqnfmpjh.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163iifblvzh.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163wocjcvtj.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163jfsinnvd.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163tdpxabhf.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163wufsttvr.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163fjggzgaj.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163twagwvfs.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163cyuqnhgk.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163mkpawjvg.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163izywuejq.html

[G10] 访问控制
来源：http://www.sxryk.cn/163ldvbveai.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163ovikfvqw.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163yiqgtsaj.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163yjlxyobv.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163aucomhhg.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163rmhfkuuc.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163ggokwbab.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163gwdrfvnn.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163jeklhfzn.html

[G11] getter / setter
来源：http://www.sxryk.cn/163glgnrgdf.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163iusdznmn.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163bepdfcny.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163dvuxxwdu.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163kakpmthz.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163hllyfhow.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163bdhfmskw.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163fzmzmyyx.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163pkevpszf.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163zzjugued.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163dwugnjzh.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163bqytjxse.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163oclfrrru.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163rphltyod.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163yegzbrqj.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163xpqaslpj.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163ysfbwlok.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163ctudqltx.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163jqjdtkrq.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163ditjtooa.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163dsckwbaa.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163fqvtpjsi.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163gnxlwdqg.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163gxekubrw.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163ryajrvxp.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163urqcxite.html

C#:   u is User
来源：http://www.xuanzx.com/163obhdwggc.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163larqxvxe.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163esijzjbm.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163sxiforzy.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163ollkmymw.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163algkkwnk.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163zbghryut.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163kldqreyu.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163xybfwght.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163pfghgdtk.html

[G15] 枚举
来源：http://www.sxryk.cn/163kckkkcrg.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163igmsrpum.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163hcdkeyhv.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163yrbbkiby.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163zyodmdei.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163rpbcdxqm.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163tdpalmly.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163kvqfjtgu.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163dzeawjln.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163bghcrazb.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163sablueur.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163dkcexgzo.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163efpxgnsc.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ymzccdcx.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163tpdhbbtk.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163oxjqmtxk.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163poirwbre.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163tazussyv.html

================================================================================
来源：http://www.aibaodan.cn/163wthtzbor.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163ocenmdnw.html

================================================================================
来源：http://www.aibaodan.cn/163djwlbkhe.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163glprydin.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163attdbzqp.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163cdeffuxo.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163cwofbdtl.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163rweeheuj.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163gzjliayb.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163ngwdoexz.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163xqyaotoz.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163jqaoxumr.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163qlmszgdv.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163umtvmbew.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ctmqckek.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163yatctxhs.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163djbrujlc.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hktjfsum.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163wzwrpfia.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163yuvjjqze.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163szrrvsqa.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163sarnssvt.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163cxbswcje.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163kcfwnkiq.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163bfbcllzc.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163jnimggsh.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163oajsbykd.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163pqbkeogk.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163toafixnl.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163kcgbnvnw.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163iivczdhn.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163xfpbcnim.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163evxuybyk.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163jfibiagy.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163egypejnq.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163wjbcxrtq.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163fntfbrfu.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163rriryfis.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163cjoistke.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163lydggszb.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163ohlyzvhe.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163odvtuwzf.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163amfonjnw.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163vdqnufoi.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163iynscevi.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163vdxbdtem.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163rtjqzjkp.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163uzlwcqiz.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163spmzmrfl.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163tfowuudz.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163spdqllql.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163yacqqbky.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163egaealso.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163hlwecmnj.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163gudjsmxm.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163cjgpwyko.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163ykxnhfma.html

[H07] 断言
来源：http://www.aibaodan.cn/163mmagofle.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163lbxchcmf.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163whxoohep.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163wthdzybn.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163zadluwyh.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163ykadejql.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163sfuheckm.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163btbhxxjl.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163ngrccopb.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163swfjylfb.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163zhjeirqw.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163gcwkzzdb.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163feiftwrp.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163dueqayys.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163dlmypcpk.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163gycdzlyf.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163lfyrvsee.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163cknjwwrp.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163rczeinbd.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163oowveryz.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163utrvfixy.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163vjnduoew.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163mgbrmust.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163ryfwxobd.html


<!-- 参考信息 -->