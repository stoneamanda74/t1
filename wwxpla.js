外链999!wailian999！

[F09] 获取文件大小
来源：http://www.xuanzx.com/163uzeteydu.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163iihqeckn.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163gshewsvz.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163tdlvmvpb.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163txoezkbj.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163tqnyviaw.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163clypdina.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163pdlmajyt.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163zujavmmk.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163hlyaeezn.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163qegmcjjp.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163ltzkgtwp.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ofmntntx.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163qcoexwlh.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163ecbuuwvy.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163txfjpjrt.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163adlreyof.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163chyuqksz.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163airimysy.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163nddrgcne.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163qhvcqnpw.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mrwyysts.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163fnaepjha.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163izajtwdp.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163boihojbx.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163jukmrhrl.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163edbfotgi.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163csttuxwq.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163dwcfiqky.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163yddavgfh.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163hnpixokk.html

TS:   // 同上
来源：http://www.sxryk.cn/163tcmftcxt.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163tkkpmngh.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163acithucg.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163qlkbnkfe.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163tdjjbpew.html

================================================================================
来源：http://www.xuanzx.com/163dhvuranj.html

G. 面向对象
来源：http://www.xuanzx.com/163yxjrcxub.html

================================================================================
来源：http://www.sxryk.cn/163twdxbjab.html

[G01] 定义类
来源：http://www.aibaodan.cn/163syxygyda.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163nvysytvm.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163dsmpenlc.html

JS:   class User {}
来源：http://www.xuanzx.com/163lyvcrdyc.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163plzjgain.html

Java: class User {}
来源：http://www.aibaodan.cn/163nqcsozvt.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163sgabmqvg.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163rrkxqsgq.html

C#:   class User {}
来源：http://www.aibaodan.cn/163pwhbvkmd.html

[G02] 构造函数
来源：http://www.xuanzx.com/163coqsbhtw.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163vxcebhps.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163acikicaa.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163kewiwimr.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163oavouhhm.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163goeegabb.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163kkqdwptj.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163rgdybwzj.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163qzxqfpbi.html

[G03] 实例属性
来源：http://www.xuanzx.com/163cmkpbavx.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163dlphdpzp.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163hswionfa.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163whiyuexl.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163ihbtrnlq.html

Java: private String name;
来源：http://www.sxryk.cn/163tjrjgolh.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163hefcxizd.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163fdzowfzc.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163cmlgprqh.html

[G04] 定义方法
来源：http://www.xuanzx.com/163glsfhlqv.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163jpdbsnyn.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163jistahhs.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163crwbfjzp.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163oqzmbgpt.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163vvwqunhs.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163siogtcmd.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163yknsdsot.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163goqrfouu.html

[G05] 继承
来源：http://www.xuanzx.com/163dwubqcan.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163xicydqpi.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163efduolou.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163zpthvgvy.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163dqgkzmqq.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163cgzrushp.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163zwjodvpy.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163fpyflcxw.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163plffgjyt.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163imzkyugj.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163kluchjgj.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163gqhfkwfe.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163vkyhuatu.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163sfoufufo.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163hbvjzttl.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163vvmwoyfb.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163rjnatxnl.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163oiazxiga.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163irdsxdjr.html

Py:   super().greet()
来源：http://www.xuanzx.com/163lczwtuhq.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163cqfjnwod.html

JS:   super.greet();
来源：http://www.xuanzx.com/163zfbhpfna.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163ionyftnr.html

Java: super.greet();
来源：http://www.aibaodan.cn/163vhturrxg.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163sckjxrps.html

Ruby: super
来源：http://www.aibaodan.cn/163wchbjijo.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163hpxcngvd.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163cnizrxzo.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163utrwzapf.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163lbwoymaf.html

JS:   static f() {}
来源：http://www.xuanzx.com/163glenyjmt.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163cqudhvuj.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163kyxybsjd.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163spavsyop.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163zwakzosd.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163edorxylr.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163whdrewgz.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163melivffc.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163fddgrysd.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163xdddekwm.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163ekcvdavu.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163tjnhatth.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163ftrxbcqa.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163kvkrvzek.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163xsgpytkf.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163njkemhvj.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163rajdajis.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163iyfycfpa.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163sbwjunrl.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163qicebedz.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163pwkblrbs.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163hyweqnnx.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163nzatgavt.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163tetgdvie.html

[G11] getter / setter
来源：http://www.xuanzx.com/163ixtihhqp.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163bwlvbdlw.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163sawjhbpz.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163mnarwnce.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163wdjwkbkm.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163hcqgksqc.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163knlklzlw.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163yrsxnjdh.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163flbckplr.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163ekmnasgc.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163dxgighxi.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163mqwadrjv.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163khbnwffv.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163modiznge.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163hlmhajel.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163lfctiopb.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163xepcsabr.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163xgpypsoa.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163bwmsybzt.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163plzwaxfe.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163sqzypoue.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163zqckckms.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163yybkejqi.html

Java: u instanceof User
来源：http://www.sxryk.cn/163lqfkogur.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163nxgztzqv.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163unzbbiuz.html

C#:   u is User
来源：http://www.sxryk.cn/163gwpovlhl.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163vpzuvvdd.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163mkedmpmu.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163dkfbpunx.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163mbebvaaf.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163vbuncbxq.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163jqqumfcl.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163nsrmaskf.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163twaygxtp.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163hcksuhsr.html

[G15] 枚举
来源：http://www.xuanzx.com/163zcwallrf.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163qkazttol.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163xnwryooa.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163btzemdfi.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163kdoutvsp.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163xtblqila.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163dofeykmr.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163ityrthna.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163bsjefevv.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163ytadpurb.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163cxsymkkl.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163kuvadmkb.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163tctjfosm.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163sxwipdvh.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163caykzpfc.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163pbqbkrcd.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163xejfwjdj.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163waxdlfei.html

================================================================================
来源：http://www.sxryk.cn/163clwqbzrr.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163unpzacul.html

================================================================================
来源：http://www.sxryk.cn/163vcibcxvu.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163xybfjepz.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163qunpxteb.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163wfciedap.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163msnvwooh.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163bmxuucja.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163mtdteexp.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163qbmtkoyk.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163pjdtlixz.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163fgbvftog.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163kqxhpwlt.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163empnpedo.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163hkbuiylg.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vmvlycvu.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163dgeyyqil.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163eugcohii.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163mbtsntwo.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163yunesymr.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163fraetfqq.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163iodscnrq.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163kkdlpokf.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163udpitxdq.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163dcqtdjhf.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163iubuofbm.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163gqogrpoi.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163bakrkoiu.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163ouqatady.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163sczmchld.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163dzqufhgd.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163ibmabojc.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163wxdecmgx.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163mwqluhrk.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163iczcugjb.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163aczyaruj.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163zjseqyuo.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163nknaqmuz.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163mgkqvlgx.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163ccnrscqy.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163qbsnvkdh.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163tvjzstzr.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163clzyrkqb.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163wpiweyki.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163yswevvhl.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163boxkohbd.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163abldeqju.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163ktdfvqdq.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163cfewfppa.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163octgnknd.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163ywzltamw.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163donsunxb.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163tjkjyetr.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163tvvqxmrf.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163rrludery.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163uwepwdrj.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163jeazepen.html

[H07] 断言
来源：http://www.xuanzx.com/163emiyoxjk.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163zpesazrw.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163tsfcmoag.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163mqomhuut.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163yrpgcuzg.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163lpivbbqh.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163bdflxxja.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163wdyboweg.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163jdwppgqu.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163hstpqmes.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163vzgsyjiw.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163mvnlmltx.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163qvnlgzof.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163zabxlbyp.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163zzmhvsbj.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163zooleipf.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163lrllouge.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163cdxtqjcm.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163ljgydvcj.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163gnbdpxlv.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163xbclzord.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163auboysna.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163lmgzwxoo.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163ilevbtwe.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163obcngjfq.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163qnzrbhar.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163srwaktlo.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163gkxhfvmj.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163jtzjtgma.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163qixzslhi.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163vwsklveg.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163oymkppux.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163ilxgvwlp.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163zqqzhdhk.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163osdrebyc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163kvzrhkur.html

================================================================================
来源：http://www.aibaodan.cn/163kprpbzoz.html

I. 正则表达式
来源：http://www.aibaodan.cn/163qwekfymc.html

================================================================================
来源：http://www.sxryk.cn/163tnukdbkr.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163jnirdonx.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163mlxrjwux.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163zxxidama.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163nrxegafi.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163eyzhyobs.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163djezyvui.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163pbgtppqd.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163xdymyght.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163hzozpdfb.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163cfqkaevr.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163dxnkrojs.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163xazwkgnl.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163hniimbbc.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163poiekrol.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163nuqqsfod.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163wsozapnr.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163kajlkinj.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163oalbftvb.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163qthrbcbu.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163ramieizu.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163bqljadqg.html


<!-- 参考信息 -->