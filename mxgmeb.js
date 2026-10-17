外链999!wailian999！

[F09] 获取文件大小
来源：http://www.sxryk.cn/163okeiqysl.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163xaqjnuty.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163zgsgrfpp.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163eeptpucc.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163bewdzzsi.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163taolfzzq.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163mbalixkw.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163zppzanpd.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163sjwfuiuu.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163mivbjapt.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163mataoxcz.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163ovtwtrug.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163clchymrf.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163ipczlcae.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163vdmlctpp.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163myzuuweh.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163krhqvzel.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163tsxyrksv.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163tlizlzps.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163kaxdjfqx.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163oxjqargb.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ckpdntrc.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ofusrkao.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163duktknce.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163bsfvvehm.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163fgpvebjy.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163kpugfntr.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163csnlcrcm.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163qgaiotqs.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163mmxsdcvo.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163kggufszo.html

TS:   // 同上
来源：http://www.xuanzx.com/163xqxjgjhd.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163kgdeyrkb.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163kytjikus.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163qprzbkqw.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163yfvoitzm.html

================================================================================
来源：http://www.aibaodan.cn/163fsfivbob.html

G. 面向对象
来源：http://www.sxryk.cn/163tenkddtr.html

================================================================================
来源：http://www.aibaodan.cn/163qjrorgiw.html

[G01] 定义类
来源：http://www.aibaodan.cn/163nkutckwv.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163dwxxippb.html

PHP:  class User {}
来源：http://www.xuanzx.com/163jnglxlep.html

JS:   class User {}
来源：http://www.aibaodan.cn/163arpcxhlg.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163onstjrid.html

Java: class User {}
来源：http://www.xuanzx.com/163usuvutlr.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163roeipeyv.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163muvswwdq.html

C#:   class User {}
来源：http://www.sxryk.cn/163syfcoxub.html

[G02] 构造函数
来源：http://www.xuanzx.com/163jhbkfajw.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163eejzgrtl.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163oygcsitz.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163tfwwuvqt.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163wzrockpu.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163lkczcxyu.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163adpqdjdc.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163czlrjgkw.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163fwjsgrzw.html

[G03] 实例属性
来源：http://www.xuanzx.com/163jaenrptl.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163wlwnqrbs.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163cvoozfrz.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163lbafxxvm.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163xnlvrafu.html

Java: private String name;
来源：http://www.aibaodan.cn/163scudxodu.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163mmhimwyq.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163sqvydntt.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163dnrdlfyl.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163uhlxckns.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163bfwmfomm.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163qkbvcuyj.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163ishcsiyb.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163otewvbth.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163jqoiiffg.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163oofggqpj.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163bijabuif.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163kyhlhbni.html

[G05] 继承
来源：http://www.xuanzx.com/163jvnkjqny.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163ivgzfvrh.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163eghqnzmc.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163afejttdg.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163fqwinphy.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163vfcodocx.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163ieseljqf.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163oslfgivg.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163jvejghcx.html

[G06] 重写方法
来源：http://www.xuanzx.com/163rkdijpek.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163vfjjedtj.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ropnadlb.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163yturrzki.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163veyrpmjz.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163dzvzmyyd.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163grvylmwp.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163dmbhgkou.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163gnwjgjgk.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163putxlcua.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163mzrveqwk.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163kwuvrger.html

JS:   super.greet();
来源：http://www.sxryk.cn/163ljdjqoan.html

TS:   super.greet();
来源：http://www.sxryk.cn/163xfosnicj.html

Java: super.greet();
来源：http://www.sxryk.cn/163kgioxutu.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163yugjwfjb.html

Ruby: super
来源：http://www.xuanzx.com/163scatujqi.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163dbmulxom.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163ppmzgghi.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163vqjaaltv.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163jtdjgine.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163tubmancx.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163dljudsnc.html

Java: static void f() {}
来源：http://www.sxryk.cn/163auqkpwfy.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163egfmplbf.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163xwbkbfje.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163fopzlepy.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163emccfcud.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163lpnjwpkd.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163rsimyeml.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163fhnzfwgm.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163sxpfbxhc.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163xdaeiczh.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163vlluywsv.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163vylzwjzc.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163ptvohknt.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163gnnbqkpa.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163vflwkddz.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163vvrknjzo.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163xemnvjbs.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163rltgpiqr.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163rgeisvxa.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163uraxbwrl.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163ezfrqmuf.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163mbogzild.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163tnckeugz.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163zeuqzhho.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163kwdoiauo.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163erdfzfhr.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163dpirkffx.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163enejtuqg.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163mmceaapi.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163mdlamcyy.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163hmvkymfm.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163ujevprov.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163mpxromlf.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163mptmvbqc.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163gwnnnuoa.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163zrwnechu.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163kuspkggf.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163dsjcoruo.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163nflpauwn.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163hvwcougc.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163keaykaod.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163wnshbgkt.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163kglhhjva.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163hliknlnq.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163jdtqcuvm.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163yqaodufy.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163lneewgic.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163lwhodrhn.html

C#:   u is User
来源：http://www.sxryk.cn/163bvnryswb.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163osunefjp.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163fhezddff.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163mktazrhd.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163mtdmizld.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163fqfjmpfe.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163gauatbrp.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163jbhgniyb.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163yvczvlbu.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163lktuibgp.html

[G15] 枚举
来源：http://www.xuanzx.com/163jomrxmvo.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163etegyocx.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163tohltbjj.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163zapuifbr.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ifxlvlbt.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163xkergigr.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163qxbzxoxi.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163mlgmzeiv.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163jokrgfza.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163rlgcykhg.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163jeaqzfui.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163mxmoiayo.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163atyxynjr.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163hrjgoccu.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163zcxzaslh.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163yssvtqdc.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163iksxhfxj.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163nlgukcld.html

================================================================================
来源：http://www.aibaodan.cn/163wrpenkyj.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163byjcnuki.html

================================================================================
来源：http://www.xuanzx.com/163ognzdyfg.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163ufkmidfc.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163xzwnrxnz.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163izjcypef.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163gkirnrbe.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163hvbyyzrj.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163iyttxwby.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163looxmpec.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163mrpazymk.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163uvskrhsc.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163eydyrtjc.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163ywqapgqo.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163mujgegcv.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zdfedfts.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163kfqeehes.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qitcbkbx.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163ttvxfdbb.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163owmshfrd.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163ztqtkekb.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163kvsugkkk.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163wrmxhpax.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163jstiybdt.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163qrlqifim.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163svvvrwul.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163czrsoezg.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163qufkivwy.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163psxishta.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163vyomuypa.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163feyfdzyz.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163orqdvwuf.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163qosacflg.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163cswblmwf.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163fbngnmoh.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163hevjbmhe.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163iymuuooo.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163zqggxnwu.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163obnxiwbm.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163tswkeaaj.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163seuvcljo.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163xsirdlha.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163kgjjyxos.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163cwqqnugm.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163rtvpgkcu.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163ninbahzh.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163ufzgiagf.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163zmmhfplg.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163pktvrpgz.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163ozhluygj.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163mxwygrtk.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163djeoygrg.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ggqopvzh.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163zdzgddhr.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163smvtldez.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163emocowpt.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163uoqlykcc.html

[H07] 断言
来源：http://www.xuanzx.com/163abtoqgde.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163otytobyq.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163jxgrntdf.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163nwayklpc.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163bepqawxl.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163gehewmfh.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163dajwaeel.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163sadgcrps.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163odvkvpev.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163qkdofngu.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163ohuryhru.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163awjiixyv.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163rliyxyxv.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163objrervw.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163bizlwwtv.html

Go:   err.Error()
来源：http://www.sxryk.cn/163kawwnlqn.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163pbapankw.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163zanvqfxf.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163rvfupnlh.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163isjfzsqd.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163xnqbijeg.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163hqytkpen.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163cjrdiain.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163dvybpuqq.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163rqoqoyoh.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163exxjztpl.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163dmlflxdz.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163smlbkrgf.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163dfvbkhsw.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163yylxawiz.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163xziadjms.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163pcyjdbhk.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163yyywpjow.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163janwljje.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163novyrcse.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163fjzgskjf.html

================================================================================
来源：http://www.xuanzx.com/163bagxyvka.html

I. 正则表达式
来源：http://www.sxryk.cn/163qtatilkk.html

================================================================================
来源：http://www.aibaodan.cn/163tjiocvjr.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163vajssdlq.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163yvzgmlzb.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163znbpditr.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ktdjfuen.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163qhnyusoa.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163neaotbrm.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163hdgpupdt.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163fepcnils.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163mtnmbifp.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163coynhogj.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163bsfjeqax.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163whqvozid.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163ufjmcagh.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163yleajprx.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163unlqgnsw.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163sxxnafhl.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163mnzubeyd.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163wcmdwpyc.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163dmartvmu.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163rbeifiyj.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163ndcwvepq.html


<!-- 参考信息 -->