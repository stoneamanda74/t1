外链999!wailian999！

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163hqqeutmu.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163lyulzkxz.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163egtlvpso.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163xpzjydka.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163ailxddkc.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163ezmfzsry.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163zjufxcls.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163wyskstwa.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163xdsacfht.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163hxsvkrtm.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163goxkekmw.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163izojzhjh.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163xwsvkvsp.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163cxojgrui.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163rhzpgorb.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163kpvrckcc.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163xvuqosmr.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163pxevjdhi.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163ivwndtig.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163kldryogh.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163tzwnpjsg.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163ymgmavwt.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163uqdovvxt.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163pusaryun.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163krfhicxe.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163zjbvusss.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163abczctld.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163hrxhnury.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163jcilkgmw.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163kssgauxl.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163tgrsphjv.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163kidxvoce.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163faojogzq.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163tjabonrb.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163mwyioofo.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163lqgsbdjn.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163tqahdadc.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163dirnstyk.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163qkkfxrlf.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163hrpmczkw.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163watrscjy.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163ygvaetbb.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163nekqvjeu.html

TS:   // 同上
来源：http://www.sxryk.cn/163oxlrrmqh.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163urigikbc.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163lvbdjoyl.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163hrbcmdja.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163jyjpsmgg.html

================================================================================
来源：http://www.xuanzx.com/163tdvyajfs.html

G. 面向对象
来源：http://www.aibaodan.cn/163phbqjgim.html

================================================================================
来源：http://www.sxryk.cn/163stfrddut.html

[G01] 定义类
来源：http://www.sxryk.cn/163mzirfpyn.html

Py:   class User: pass
来源：http://www.xuanzx.com/163rjpulawl.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163ewdkewnr.html

JS:   class User {}
来源：http://www.aibaodan.cn/163bjdzcjij.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163hpzzmivo.html

Java: class User {}
来源：http://www.sxryk.cn/163hbufxykr.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163tsyjldwy.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163jgzyzilx.html

C#:   class User {}
来源：http://www.sxryk.cn/163dhnledky.html

[G02] 构造函数
来源：http://www.sxryk.cn/163msbjqfmu.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163pqxtbivk.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163wxgtgqir.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163ovyzvyua.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163bfonjvaf.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163hqtujnyn.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163iyrfpqpq.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163shxkkfoa.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163uvavatbp.html

[G03] 实例属性
来源：http://www.sxryk.cn/163davmeqwo.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163gblautzz.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163mxjaqkcu.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163rqnnvimm.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163jzhrxsde.html

Java: private String name;
来源：http://www.sxryk.cn/163siofilna.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163hsobndld.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163kdlvmimh.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163xallubny.html

[G04] 定义方法
来源：http://www.sxryk.cn/163hdlbmvha.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163fdvdgdpb.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163vuimvbeb.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163wwyklvuk.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163baftqfiu.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163pxbqgiug.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163flotwjyj.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163gvwfpsjj.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163ezgogusw.html

[G05] 继承
来源：http://www.sxryk.cn/163hjnimgqi.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163ieebghct.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163tzagyckd.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163dcjwcabv.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163fzismpvu.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163ywlcxkdo.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163jbflogyp.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163czjofpqs.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163qwtislgl.html

[G06] 重写方法
来源：http://www.xuanzx.com/163utrcsqcn.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163ymcwbavr.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163zkohkeju.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163pvtwfieb.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163dxxmtprh.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163mmqzznpg.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163uoepwqpk.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163arlukrwd.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163lqylqkwf.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163raksurrs.html

Py:   super().greet()
来源：http://www.sxryk.cn/163sxlusdwi.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163lzshisxp.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163oavnfxyd.html

TS:   super.greet();
来源：http://www.xuanzx.com/163vvgmoajy.html

Java: super.greet();
来源：http://www.sxryk.cn/163kustveqp.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163intneojv.html

Ruby: super
来源：http://www.xuanzx.com/163aogttvgs.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163ertxjxxi.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163yoatbluu.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163vxjjpmhx.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163ngzpetfp.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163jcenqebf.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163mkopsfgc.html

Java: static void f() {}
来源：http://www.xuanzx.com/163kvidnpsv.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163aiiyjdgq.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163rcxxiyrr.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163bdhjeocc.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163uceppgbu.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163kkwykdmc.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163qisiwtcq.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163mlethwyt.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163enphvliq.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163bcjwfbwg.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163zwtajbdn.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163lzrelhye.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163ppbiwzjx.html

[G10] 访问控制
来源：http://www.sxryk.cn/163aptjgsrl.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163fmfxoudt.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163wantntrn.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163aygsruoy.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163jpfcqjni.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163puefcoaz.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163ijilnrsv.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163vorkvisc.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163osiyduvb.html

[G11] getter / setter
来源：http://www.sxryk.cn/163buwjjqxt.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163ulrnfaph.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163nxxfenjf.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163whshumso.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163wzlidaqo.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163cvfbatzl.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163zfgnfwoe.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163pxpruoro.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163emeakyck.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163afftxubx.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163rhqvgyqe.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163dbdvrwhf.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163qphvljis.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163efblwhez.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163omwgmgri.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163lnjpabap.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163xcxtvzds.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163tcsgpxth.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163apyqntia.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163zbgkuvay.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163aljgzqss.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163ftlxuheq.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163gtqklnzp.html

Java: u instanceof User
来源：http://www.sxryk.cn/163fzkbdxlf.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163sszegjvo.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163eouhappy.html

C#:   u is User
来源：http://www.xuanzx.com/163qffepycx.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163bphwzdtc.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163scpwwcgu.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163cnyhulmp.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163tiaiguxz.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163tzycmybm.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163rhuialhs.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163zjjvzhum.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163qidtrrwm.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163jkpwgizb.html

[G15] 枚举
来源：http://www.xuanzx.com/163havfcwhk.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163ifcxnshk.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163xsdarnle.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163hwcdrxmg.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163wtmpbxjq.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163bjwftnpn.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163tyxnbfmi.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163dupgaizf.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ekmpkyhi.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163slyfqngr.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163uluiokcu.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ckueiavo.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163akggwycp.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163obzqqxbe.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163xkwlkdrt.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163amckifzy.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163xmjbikjd.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163tlxpzzvd.html

================================================================================
来源：http://www.sxryk.cn/163smgujkmz.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163gqkymyvk.html

================================================================================
来源：http://www.sxryk.cn/163shoonuwl.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163shcwqlrf.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163tkdyyljz.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163fyxysinb.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163htmcazjt.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163kmqaiqcy.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163oanysbny.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163ululxrxf.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163okawyvtl.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163hvdllqhe.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163fkmptvvi.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163adjgrtni.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163lffcesvn.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163drxmjlaj.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163kscotrmn.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163eczvgsiq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163cskbiukm.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163zdbxfibm.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163aetpshgg.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163xcupwoya.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163bfbyiwyn.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163tmxjpdin.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163yjetqkqi.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163tajpjgkj.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163skwynvxu.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163bvufdbkn.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163lqvgbkiy.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163pnfmawax.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163qaaefkcf.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163yeufbebx.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163xojcdhpv.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ddoxjdjz.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163fhdsskgo.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163qqidnpud.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163qgnikhen.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163gqglhmgt.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163hrrkfmii.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163hqafejtd.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163rfotjmem.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163ckrxwgnf.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ltddfwny.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163qwaxrgxz.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163zkklvhat.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163ruwnwmsj.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163nnlqmsso.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163jfugawrz.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163gzqzafwm.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163pexbtnam.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163vcxkiwlv.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163yhoononj.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163dnxpgnch.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163oubggkmj.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163dcnpdczn.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163yuiqksqp.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163jqpquwne.html

[H07] 断言
来源：http://www.sxryk.cn/163nluufapq.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163eyemgodh.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163lgfwzlib.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163rqxtspxp.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163aitehkic.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163ztsrktie.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163skufoppm.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163oelcxyyj.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163dlxdjcun.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163yoeflzmr.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163fhmebbxh.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163ddfkfcjo.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163efxnfknj.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163pdyqfnpx.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163iznoshae.html

Go:   err.Error()
来源：http://www.sxryk.cn/163hzyyigmj.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163qomzoagw.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163obassggd.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163ufqvlvvv.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163xgxwmvfn.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163cvbwzlrn.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163xivgjzyg.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163swjawcyr.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163wwclxqzc.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163srsptuey.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163dkgzsurb.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163javybpdu.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163usgdbkqq.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163tpiqsuyo.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163eykykjcm.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163gkdqpplr.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163cyitknve.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163tmbjkwox.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163ertdsidj.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163jcckomxw.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163gvzmrzhw.html

================================================================================
来源：http://www.xuanzx.com/163atmzjtak.html

I. 正则表达式
来源：http://www.sxryk.cn/163lzcecwcw.html

================================================================================
来源：http://www.xuanzx.com/163cufolpwm.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163wbwpmtfv.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163gaosjioa.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163jntgbbny.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163qhuathor.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163yjsxavbp.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163zkocuaxh.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163yttixbna.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163jsqhznic.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163lyetdlpp.html


<!-- 参考信息 -->