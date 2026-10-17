外链999!wailian999！

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163raixczfo.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163svgvgzmr.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ymwmujdg.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163lkxojdsm.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163pqhixuif.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163rhwtafvz.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163dgmdxtoq.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163fchwttnd.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163eqxzhork.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163bfulnqbq.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163oiwrprca.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163jaktbnrk.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163fiullavn.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163crfsxbzr.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163iqacaxcj.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163ruaylrlj.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163glpzjkvd.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163atcionqt.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163vroqcxpq.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163rverdztt.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163cfenjcoy.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163toyncqcy.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163qtjsowzh.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163hvjhgvow.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163mqouhzve.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163wcinteqj.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163fxrzjuvx.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163dqeqegkg.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163zvlrlgyw.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163dfxeptyv.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163uuuyzkvt.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163uztzkqan.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163nbqwjqyd.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163vojgwmta.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163anzvzvks.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163xoalhmnq.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163ansgfwxi.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163ymsqqqov.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163rjdhazqp.html

TS:   // 同上
来源：http://www.xuanzx.com/163mjcmqrke.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163kcvrybfn.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163dmjjyqxb.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163rtgfrigy.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163snolggcd.html

================================================================================
来源：http://www.aibaodan.cn/163gexaykgk.html

G. 面向对象
来源：http://www.xuanzx.com/163nibepify.html

================================================================================
来源：http://www.aibaodan.cn/163dtylrrex.html

[G01] 定义类
来源：http://www.sxryk.cn/163dpcabivg.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163pzwhhzca.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163cbhwdhml.html

JS:   class User {}
来源：http://www.xuanzx.com/163eniylenl.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163ienovova.html

Java: class User {}
来源：http://www.aibaodan.cn/163dspblyrr.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163oofrfzyg.html

Ruby: class User; end
来源：http://www.xuanzx.com/163bdvupxwx.html

C#:   class User {}
来源：http://www.sxryk.cn/163chnhxmiy.html

[G02] 构造函数
来源：http://www.xuanzx.com/163dvmvnhwt.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163gxagzidr.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163hawtrygy.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163eydpumtm.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163mpvzmjmh.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163obtrwtfl.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163mcgpjboa.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163gxfqsetu.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163ptldkjyq.html

[G03] 实例属性
来源：http://www.xuanzx.com/163gkrmuwrb.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163cbwmxhfx.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163rwushtiq.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163ridlpdki.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163qqewdzys.html

Java: private String name;
来源：http://www.xuanzx.com/163fdiiisoo.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163ekapcold.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163yjrghepn.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163lwuzqfnc.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163rgwmzzyr.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163zrhcgbkp.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163dyuoebfn.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163fgegxygv.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163wbnoygbj.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163tsmxodff.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163rkhsituz.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163yfxefirn.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163jpbfqsrc.html

[G05] 继承
来源：http://www.xuanzx.com/163bfiwmxum.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163pgtbjiwh.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163hmzyhdha.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163fpfzovmv.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163pxnhrjmj.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163smyeaalv.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163jslhrzur.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163pyhmpmlt.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163okscvwfc.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163fbkzzhkg.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163abrwppus.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163nwuqbadw.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163yztoztdk.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163xrbtgkgs.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163oubgvrvf.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163ltrsvvqw.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163fvwuhlna.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163pxnqrgtb.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163fzkhdmuy.html

Py:   super().greet()
来源：http://www.xuanzx.com/163osuvyoix.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163iqtzouhx.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163oimgfekj.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163qdcdgvqj.html

Java: super.greet();
来源：http://www.aibaodan.cn/163dixqhdcu.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163dabvrnfr.html

Ruby: super
来源：http://www.sxryk.cn/163uyhhpbqb.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163xejuncqd.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163tsrqydaq.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163alizrdro.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163bayfckat.html

JS:   static f() {}
来源：http://www.sxryk.cn/163fbgyxnck.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163gyhjscrz.html

Java: static void f() {}
来源：http://www.sxryk.cn/163qtaszqaq.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163eftslxtb.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163butkqjqt.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163dqkctusj.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163qokboptk.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163kaogciqy.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163gchfuunj.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163xzbrruov.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163wyruqbqw.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163wvutjvke.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163frmnfsrq.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163fqpwsdql.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163qkpufalm.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163njbpqjqj.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163hpzjtafi.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163wvuczjiv.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163fmowuall.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163ylbxknfi.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163wcpigkul.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163lukwmeor.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163ozymaeun.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163vgmsivej.html

[G11] getter / setter
来源：http://www.xuanzx.com/163rnjsbpyh.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163bvpbnccd.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163moqpwcsf.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163sbspqlhj.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163vwnyysuw.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163fvccjanz.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163xktjkjfz.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163qronvpem.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163qzjnzrrk.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163ngspjgfa.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163gblswghx.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163mdrrtvzt.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163pqsadoki.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163zbawtjvs.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163acalllhm.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163sbegqpkx.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163jnzmuela.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163nnysetve.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163zcytwlzk.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163klalhhsv.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163pdjpvsqq.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163rzxqpwti.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163lvpfeoxv.html

Java: u instanceof User
来源：http://www.sxryk.cn/163dayarvpz.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163ozxjhway.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163vlczwjsu.html

C#:   u is User
来源：http://www.xuanzx.com/163irjshwab.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163mufizenn.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163mvyzurco.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163mdqnadki.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163echometn.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163kwthnwym.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163mqwehnkr.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163ykqdgtuf.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163xmpngoiz.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163ekxydwie.html

[G15] 枚举
来源：http://www.sxryk.cn/163loshrmpn.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163azgpapea.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163lfserqis.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163sishfmwe.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163hghbuxeo.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163sgxbmxir.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163mxgwpect.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163ojgfflwi.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163tdwrvtzn.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163viakveno.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163awdvmvga.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163fqflrsin.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163rhowcwij.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163wuqyrate.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163spoluash.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163scezxdlo.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163rufwwoxs.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163kqcrkjpc.html

================================================================================
来源：http://www.xuanzx.com/163zjthgxlu.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163rpbrstuy.html

================================================================================
来源：http://www.aibaodan.cn/163yauqqpka.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163gcnpunqn.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163wgvskrwe.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163poixiplz.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163qiejcqgm.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163kyazxofz.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163ajvavkdt.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163htyvityk.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163grcmjvfk.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163pyiiwlmi.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163iqmuwrbs.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163jycuzoqo.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163vdvglivj.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163rlgclcrf.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163smeljiim.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163tjoxbzpq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163wvihytsk.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163zseebhan.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163mptkthir.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163ezzseuqp.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163kctpanvw.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163craynlut.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163uvsnqozo.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163nsfgjtdi.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163snfovjmy.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163byortzna.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163uwdpkwgy.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163voylxonj.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163wpwpkgus.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163roempohv.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163cpglvhiq.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163swtgbtpn.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163rrjpqrtc.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163qsngkxgr.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163zhwyfnjd.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163xspexden.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163uorpxwtp.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163gikombtw.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163kynnxxmq.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163ixlvdtlu.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163whgoparc.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ksdxdajq.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163vopmukbv.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163xwalxfpa.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163uixmmnhw.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163agckcwdf.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163wuzbmzro.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163bcmpeyko.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163dgwviujb.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163snljwood.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163tckgootu.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163hhzffelp.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163esigccme.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163ghgfbuhc.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163oznbhbmr.html

[H07] 断言
来源：http://www.sxryk.cn/163wbwwaldw.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163gmfiuwcf.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163zpugbtkf.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163mvcpwigu.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ckermqic.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163wjxzcpzl.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163srbfmcgi.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163nuwdvzru.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163gqgiqsss.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163jmzmkvpb.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163pkqunufu.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163zbbhqpmz.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163eksazxzg.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163lhuvcvhq.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163hrxbcqho.html

Go:   err.Error()
来源：http://www.sxryk.cn/163iadorsfe.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163eznxqrbx.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163dbnvgwld.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163dzyovtqp.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163mffwymjh.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163plmweqye.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163wjqaihas.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163bptybhkg.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163vakutpqy.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163xxakqjai.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163pllnyxti.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163ziishhic.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163smkbezzb.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163tnrilvbc.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163smwtnvxh.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163djedniij.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163wvsknpfx.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163enkdwdsp.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163uehqzalo.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163magqzmzh.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163gpqkelab.html

================================================================================
来源：http://www.sxryk.cn/163uksnoyni.html

I. 正则表达式
来源：http://www.aibaodan.cn/163uvhlaqys.html

================================================================================
来源：http://www.aibaodan.cn/163mldyhdvt.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163kqjnmdly.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163kxzdwybu.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163azpeaizj.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163muvqvcbe.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163lomucmdo.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163zpndiepe.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163xsmwjqug.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163ptupzmjw.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163tcmpafze.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163tpoamnrp.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163istiamom.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163vwqmmnsm.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163reiyesos.html


<!-- 参考信息 -->