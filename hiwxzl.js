外链999!wailian999！

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163jkuxjfmh.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163ntweizrh.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163zanvsidd.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163zzoayelc.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163mvjdjuuf.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163owdrozhf.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163haauaaxr.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163mzvzbfhn.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163ykhpdmfq.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163olagddup.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163fkivrndn.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163aznimagi.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163fqpokced.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163jljltjnl.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163udhfkncf.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163ztcthyta.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163ftvvbhnm.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163steqriwp.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163svjtmeqj.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163bnyfvrmg.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163mmvgswyx.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163kqypcmiy.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163rrxzuhnv.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163jqeycnyv.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163xdpgngem.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163rdusehtb.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163xcqayqhv.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163nsftiofp.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163flazhrec.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163rqgdtzhr.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163bkcnsjrr.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163yotngyet.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163zjnmljww.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163bsiujemr.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163erjinvcd.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163sprvvbhk.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163hknitvmu.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163eeiuslsk.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163xuzdhfoe.html

TS:   // 同上
来源：http://www.xuanzx.com/163shafljsc.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163nbrupciy.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163dybwwhoo.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163bdlrirar.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163ivjlfjjk.html

================================================================================
来源：http://www.sxryk.cn/163rnmjdgdk.html

G. 面向对象
来源：http://www.aibaodan.cn/163jnotptpr.html

================================================================================
来源：http://www.xuanzx.com/163pwgeaqhu.html

[G01] 定义类
来源：http://www.aibaodan.cn/163oeiffwki.html

Py:   class User: pass
来源：http://www.sxryk.cn/163evftssru.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163prugyffh.html

JS:   class User {}
来源：http://www.xuanzx.com/163xaimcetj.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163fsztiran.html

Java: class User {}
来源：http://www.sxryk.cn/163rkvtfimf.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163cfvnpumq.html

Ruby: class User; end
来源：http://www.xuanzx.com/163ynmjlcjs.html

C#:   class User {}
来源：http://www.xuanzx.com/163bgreqkpq.html

[G02] 构造函数
来源：http://www.xuanzx.com/163lgaozddw.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163uffldowd.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163fsleqohw.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163eioqpyky.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163phmnfdpm.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163fkevsshi.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163ymbtzkya.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163yvcbajwp.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163hyywlqfr.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163ajvxspci.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163cjzrrtda.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163mdteaqvh.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163bkxkquix.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163yjudeidk.html

Java: private String name;
来源：http://www.aibaodan.cn/163vhvfgqkn.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163spvfvdqt.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163qhkhnmkc.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163wifsfmia.html

[G04] 定义方法
来源：http://www.xuanzx.com/163zljsgbyt.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163mzejqfnr.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163kacuhmtx.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163bmmotuhu.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163qfjwclic.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163xrkvndyn.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163smwtrsid.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163zixtcvrs.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163phghthhx.html

[G05] 继承
来源：http://www.xuanzx.com/163psfetypa.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163bkjmslst.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163jsniqrvk.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163orcgiyoc.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163wjuasbgn.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163yumwrfls.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163mlhkumxh.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163zzfxvtcp.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163zxffaekp.html

[G06] 重写方法
来源：http://www.xuanzx.com/163eftqapgc.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163jtayvurf.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163bnyyvrxd.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163olyylfdd.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163qdrqzpgm.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163xaxesjir.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163yesywbrz.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163pdrrnlpk.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163zafvupeh.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163lapmguqj.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163euhdycon.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163pwimugej.html

JS:   super.greet();
来源：http://www.xuanzx.com/163jrcjuatk.html

TS:   super.greet();
来源：http://www.sxryk.cn/163jrvpweyf.html

Java: super.greet();
来源：http://www.aibaodan.cn/163zaedmgyt.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163zeylluok.html

Ruby: super
来源：http://www.aibaodan.cn/163uqjbyjdc.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163xjnxvbid.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163xxazpdrp.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163ompbjrsa.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163hylakoul.html

JS:   static f() {}
来源：http://www.xuanzx.com/163mvmbkzgr.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163yuxeqamz.html

Java: static void f() {}
来源：http://www.xuanzx.com/163bqttkdac.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163tqulwxvn.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163xdstagbb.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163gfbubwsz.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163pbshkvjd.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163rnykodbi.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163iuyppaxz.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163ytdpzveh.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163caupftqn.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163ttgvqnwc.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163nlrqissb.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163zgmuhsnx.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163egvqdggm.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163lkzyfykm.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163qpfdlkhf.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163fsbnkkcj.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163azcgrvfy.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163uzygidlt.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163knygvwyl.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163iiqtsiln.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163mjylxveq.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163tyigbrkt.html

[G11] getter / setter
来源：http://www.sxryk.cn/163eqhqunli.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163nkjmemsu.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163wvmktwth.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163isjhicuk.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163deanrujm.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163mqaidgew.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163cmgndzvb.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163thhaqdry.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163dxopgbzi.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163yukluaxj.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163oxlszaww.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163axefwhod.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163hwyefacm.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163trajgxcr.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163dsejeqsb.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163cdgikhfg.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163ybrqyvfp.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163cafdnfmf.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163kakapwsk.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163dvbjcpco.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163nwggyhtg.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163faadzuqx.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163euqwtgol.html

Java: u instanceof User
来源：http://www.xuanzx.com/163zzdbedwc.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163rxzefkac.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163eybjiiya.html

C#:   u is User
来源：http://www.aibaodan.cn/163dhmtsdfv.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163xjfebrdk.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163dqxmqbxe.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163fzxvulwm.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163gtleeqcg.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163mjsznmfo.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163cdlffavt.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163svthkpnv.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163bratpbjy.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163pksftrhe.html

[G15] 枚举
来源：http://www.xuanzx.com/163wykioqjj.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163pcvzlrxi.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163guwvoxca.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163ngvxohpo.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163espcuhrc.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163bhqbticu.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163knjhmjgp.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163tmecncyp.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163wvptkdko.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163iolrgfay.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163khfzaewc.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163mniaqcjv.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163cddplfta.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163qagoymoy.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163hsgxnayy.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163owidbjlz.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163qmbhudwg.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163zzfrdyhq.html

================================================================================
来源：http://www.aibaodan.cn/163baodpiby.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163vjphylbn.html

================================================================================
来源：http://www.xuanzx.com/163azuqlewg.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163ynqjehiv.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163qjrvccop.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163dvwkqovn.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163dqyautlx.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163ocxhsfvy.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163sbrhwufj.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163zhpyggpo.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163ndpsyyvn.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163tvnyaqmt.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163cujttrwy.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163aougbojx.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163orjussaa.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jxaqorei.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163dyalkwfz.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163oaqusbtu.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163mjpfhybw.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163anqyoiob.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163fnfthbvn.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163dwwejgjo.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163aeleiqzy.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163tejjeavs.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163dmmoysjc.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163uabdzdhx.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163tyexumdw.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163nbjnlokc.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163noikukmn.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163kwmtxjwl.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163tintaawg.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163mrjuzghx.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163xxceiogj.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163jvqucmyw.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163sjkxspca.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163ldrdkpqn.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163wxdsrmho.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163gxbebpoy.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163ddalzkdc.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163ztpcphqd.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163wqrmxuft.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163setdfnws.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ythgmkjf.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163yajvxqyb.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163yjgnrnzu.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163tqohvcov.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163ysjfodha.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163iqtjpivl.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163swftsyvt.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163waqfqvqg.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163fubmgxvi.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163bygvorux.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163gcdkoeoh.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163ubnkrvai.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163dbixgbli.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163mtpxrzux.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163zwmtceln.html

[H07] 断言
来源：http://www.aibaodan.cn/163bmfbkxrn.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163rwbcnsiv.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163oqprlibp.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163qztcegvn.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163rdctffgs.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163zubemjpm.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163yoxedsbz.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163gaoujcxt.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163posaikjs.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163ddhsiuuh.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163fcwgfdbd.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163nqcmhccl.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163zbbqbmtu.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163srdebvtl.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163pubpimvm.html

Go:   err.Error()
来源：http://www.sxryk.cn/163cfrkfuys.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163ocwdwlro.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163nkcfmixd.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163anyggloj.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163yzdmcsxz.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163kdyntnxp.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163mkamsobo.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163isebuflq.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163yceyxncc.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163bubgdlub.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163dxszccub.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163vscjnoxy.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163ebbmvjec.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163krzsbzbh.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163nofqwzrf.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163lrcijzop.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163lrqkppov.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163yaehgvkn.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163ooqevyvk.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163pkwqdbrc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163gcsxlipc.html

================================================================================
来源：http://www.aibaodan.cn/163vrnafftg.html

I. 正则表达式
来源：http://www.xuanzx.com/163loxrylzi.html

================================================================================
来源：http://www.xuanzx.com/163yivsqfey.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163mlfiefuj.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163vlbortlr.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163oavzlvwr.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163udypygdf.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163pgmalchd.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163phvsvuff.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163hwdtkzeb.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163hghzqzyn.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163mgpddmml.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163orwzqfkv.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163wqridldm.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163xcipzulz.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163xrizzcyn.html


<!-- 参考信息 -->