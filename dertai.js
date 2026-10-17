外链999!wailian999！

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163avlbvxkw.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163tcdavpyx.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163omnmnhqc.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163tuhkdcaw.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163njewfwqd.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163xvbvenba.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163uelgybli.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163kkeezniu.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ifespquo.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163uimhmvyn.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163bgngbfdv.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163bnfiegiy.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163jahemzuz.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163lpnasiak.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ouytjahk.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163lgbutjlb.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163xwibzxgl.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163lthhpyhq.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163xxcbqsvo.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163lzimkbyg.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163qjzsldic.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163pikprwmi.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163krpxzvrt.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ufujicyp.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163chooodbx.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163zncnugoi.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163iwuzdiyl.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163seboymul.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163vfwhopmm.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ydvzwglw.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163yhzemdye.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163cfslqhod.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163zxszgcaw.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163tmdefqem.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163goohnkzc.html

TS:   // 同上
来源：http://www.aibaodan.cn/163ptfjdhdk.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163mqrspjir.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163sjjhcwfv.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163giyrxjmv.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163cvubuwjm.html

================================================================================
来源：http://www.aibaodan.cn/163lbpnvfhl.html

G. 面向对象
来源：http://www.xuanzx.com/163ydffyeli.html

================================================================================
来源：http://www.aibaodan.cn/163bfuuxufw.html

[G01] 定义类
来源：http://www.xuanzx.com/163eijpgasd.html

Py:   class User: pass
来源：http://www.xuanzx.com/163yfzpryhu.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163elltotvs.html

JS:   class User {}
来源：http://www.aibaodan.cn/163glzcdsdb.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163lxrvbjbe.html

Java: class User {}
来源：http://www.xuanzx.com/163xbufnzen.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163danlqvvm.html

Ruby: class User; end
来源：http://www.sxryk.cn/163oisxvhnx.html

C#:   class User {}
来源：http://www.aibaodan.cn/163oywsrgnx.html

[G02] 构造函数
来源：http://www.sxryk.cn/163ucplajjr.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163jabohpwn.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163iyskujoj.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163smdsjkku.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163zdgmcxba.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163gsouyjls.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163hhymhcjw.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163lizwsvwj.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163fhwugsmd.html

[G03] 实例属性
来源：http://www.xuanzx.com/163sqtejzqg.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163qgukntmq.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163ywobmzrk.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163rsbqibij.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163ajzequzm.html

Java: private String name;
来源：http://www.xuanzx.com/163depvzgcv.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163lbhzjapb.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163kqkqsxpn.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163iosgrfpv.html

[G04] 定义方法
来源：http://www.xuanzx.com/163ioenkqgp.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163vxxtzevo.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163fvokapwd.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163xyjkysjt.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163letewfxq.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163xxbmaqnt.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163jlkbvthf.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163qhtustiv.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163yutkrltk.html

[G05] 继承
来源：http://www.aibaodan.cn/163jacxvncq.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163ofkfpbec.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163ktzcjlzv.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163joolmwzz.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163nygggoyf.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163acqvuabi.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163mxolycgk.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163omodmanl.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163styabjxh.html

[G06] 重写方法
来源：http://www.sxryk.cn/163rdonyccs.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163qaeaasom.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ifxyneja.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163hlwnaszp.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163nxdbwntc.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163epakywpc.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163wxadarjl.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163dhkxuerj.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163ghdijfkp.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163raxrosev.html

Py:   super().greet()
来源：http://www.sxryk.cn/163xcqsajhg.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163qiejwwko.html

JS:   super.greet();
来源：http://www.sxryk.cn/163eixiprrv.html

TS:   super.greet();
来源：http://www.sxryk.cn/163oqswwqcb.html

Java: super.greet();
来源：http://www.aibaodan.cn/163xwsgkybu.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163jzkrxopl.html

Ruby: super
来源：http://www.sxryk.cn/163btjoklog.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163pzkawjyh.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163paydqtdl.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163xclwvdra.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163qscxazru.html

JS:   static f() {}
来源：http://www.sxryk.cn/163xsaerrge.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163rlvhsrfk.html

Java: static void f() {}
来源：http://www.xuanzx.com/163xfygflcv.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163hwtjisgx.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163mujjpytq.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163tkvkbqhy.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163uwikiueh.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163hqzsrayb.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163kdtoadbf.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163ztvupzgo.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163kxeugurh.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163hhplmwvy.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163tceqheyj.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163niptuzrn.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163fouazkzw.html

[G10] 访问控制
来源：http://www.sxryk.cn/163tlzevhuq.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163zuczopwo.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163yvasnwvo.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163wttxsszh.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163zyyglsxq.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163vzmpphln.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163jmsxhlyj.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163bzgvntvy.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163upjxjaja.html

[G11] getter / setter
来源：http://www.xuanzx.com/163ywszqswx.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163anwvfrzv.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ngtwvhio.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163nqjnswqi.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163nojnsuvg.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163mrqogwvc.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163khfljntp.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163fbevsptq.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163hpmjqlin.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163hamwqjez.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163jcdbrizs.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163qsoutdxh.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163ifnkqfur.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163zzjkzlzw.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163zoycakkq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163jwhxbdww.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163tdosczvs.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163tcksdpsy.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163loxyyucp.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163yqixxhpv.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163fwhwvzce.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163gzidclnp.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163lcsiyght.html

Java: u instanceof User
来源：http://www.xuanzx.com/163oppppgpt.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163zwxxiuwg.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163holyewry.html

C#:   u is User
来源：http://www.aibaodan.cn/163fvcbjhon.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163fxxntcrg.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163nvbplhid.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163whiposnt.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163yzczkoqx.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163alyqxaen.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163wpxjrwla.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163yelpptou.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163alrxilrj.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163uwxhtpam.html

[G15] 枚举
来源：http://www.sxryk.cn/163doypkptq.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163fmnjxchj.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163qbnmrlan.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163fqzsqxxr.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163cmalzarx.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163gusrqaeb.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163ncrhixmp.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163ryrlwxin.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163mcjjpdye.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163ijthfqym.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163ggpapsak.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163zxzgwqgp.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163gblaxeil.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163rupdyrqn.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163fdqaqbny.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163kbnmagfu.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163nlhcbbjz.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163htouhkok.html

================================================================================
来源：http://www.xuanzx.com/163rdqqqsxo.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163aczdddnb.html

================================================================================
来源：http://www.sxryk.cn/163cqiqqkss.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163kmoorizv.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163ymbpicpz.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163wzfaqkih.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163lagbsmtm.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163oktulsap.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163xthhdazx.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163xbfuyjlq.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163gaikdkcn.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163mwljkaly.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163cjfokbik.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163ouboblhw.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163xsyknjge.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163hcdflvkg.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jccjllhn.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163usentmil.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163lytcimbz.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163nhcntnla.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163dxgdppgc.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163ikdsznqd.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163jukskfpl.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163zzlgsukl.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163jqxhvalh.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163fardywlp.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163gaojvezv.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163yypdfmmj.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163tqhtzvsp.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163lkrngpgu.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163selrnvfx.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163yjcapxgs.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163utaqawgc.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ksvfuhzs.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163vxozkcic.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163ebkvfnei.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163aidxakta.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163gjgjrnvn.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163eziwgfpv.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163zpkmvfmp.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163npbwwmyy.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163gjafgqli.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163qpkalkyc.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163tduwejql.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163uungyfcw.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163csqioccb.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163oyeylmxs.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163sjlfukce.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163myinklmz.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163cszsrdsd.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163qytdhhie.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163hvxyngvx.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163wmsfkwuu.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163suhnduuj.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163zlbbhlld.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163xjconnja.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163pztojrgq.html

[H07] 断言
来源：http://www.aibaodan.cn/163tkulnfsa.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163nknkanwj.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163avktyihb.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163oqniiptv.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163lwupegbt.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163yuzxbjnq.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163nkiiwhxg.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163bhrxqrre.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163kvkjulpr.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163ydkhcngh.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163wrsydkuy.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163oqwevzgs.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163ngeowtvr.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163zcwjaxhv.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163chcdgfik.html

Go:   err.Error()
来源：http://www.xuanzx.com/163rkbgkkve.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163sujcepav.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163cnxgedcx.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163mohqtpke.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163xikxfnao.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163jaolhznj.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163ioqtsqta.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163qulondgl.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163mxjyunjn.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163yetbgzvm.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163aeximunf.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163pgvsjxfx.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163lsgwurfk.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163zpeqlosx.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163ndrbuzzm.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163cicqffov.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163jauoyihq.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163kkdiouxt.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163jddptqaf.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163glxvyclm.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163uidsjggj.html

================================================================================
来源：http://www.aibaodan.cn/163ueudhxzf.html

I. 正则表达式
来源：http://www.xuanzx.com/163nrsbpmek.html

================================================================================
来源：http://www.sxryk.cn/163yfpgidlg.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163xhapvpjv.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163dzvmfgsm.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163rtugslxj.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163jnqsptlm.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163nbbdsgeh.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163vqwirtyo.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163wfwbvdmb.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163ffjvegmj.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163euagvaew.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163rozpuosz.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163kkhyldlu.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163crddidro.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163jvggzkjn.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163cmusnhmt.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163maifefkd.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163gjwhmgwa.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163okqtbajc.html


<!-- 参考信息 -->