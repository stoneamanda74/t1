外链999!wailian999！

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163hlpqxjlw.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163chfgwxdd.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163pmwhvtmb.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163muyiqpfc.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163zjmhlljg.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163iihnhrjx.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163jwmxoyxm.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163cinzvrwd.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ihalnadm.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163hudywtyo.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163zrbltvmk.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163rmticmcg.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163hdrdxrsa.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163gcbbalio.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163vvgtkswo.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163tpsayjsf.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163bpwhfxjj.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163sgvvgfen.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163szvaespr.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163npjpkmgu.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163mtjkkyxh.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163niiqlapl.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163orfalxgv.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163ixccpifp.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163arvoaspy.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163qbfexglz.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163zynesjyu.html

TS:   // 同上
来源：http://www.xuanzx.com/163wapvqsyg.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163ownnkitp.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163lxdhgwnl.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163nezixihr.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163uubrwgpq.html

================================================================================
来源：http://www.xuanzx.com/163icehqbnb.html

G. 面向对象
来源：http://www.aibaodan.cn/163jkhymogu.html

================================================================================
来源：http://www.xuanzx.com/163vfaaupct.html

[G01] 定义类
来源：http://www.aibaodan.cn/163uzqkokie.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163twrggjsu.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163ulhtnydn.html

JS:   class User {}
来源：http://www.aibaodan.cn/163vqzyqoul.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163egmjtqvj.html

Java: class User {}
来源：http://www.xuanzx.com/163pfmlshao.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163yzkmwwgh.html

Ruby: class User; end
来源：http://www.xuanzx.com/163combesas.html

C#:   class User {}
来源：http://www.sxryk.cn/163ovdadfyz.html

[G02] 构造函数
来源：http://www.sxryk.cn/163scsjilaz.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163azufeuqo.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163ywmwwajg.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163ofbprbmi.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163vwpvfweg.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163kormdjyw.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163auowocxn.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163gafljori.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163qtstpnad.html

[G03] 实例属性
来源：http://www.xuanzx.com/163ftabxidf.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163bbrjhduy.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163likmeeqd.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163maohzoea.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163takxclvd.html

Java: private String name;
来源：http://www.aibaodan.cn/163bseivhbo.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163sywnvlsw.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163wpryalgz.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163vwrbcvfe.html

[G04] 定义方法
来源：http://www.sxryk.cn/163wzyxyiqn.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163fudnxwna.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ztmhncht.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163tccugzuw.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163akgefsyu.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163ndhnogiw.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163yaujewdk.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163uzuqtnnj.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163bhjoogtd.html

[G05] 继承
来源：http://www.sxryk.cn/163nainaamx.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163sfhtgayc.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163xkzzotol.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163woeoafom.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163nwqejrew.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163coxjbdmt.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163ooumsnug.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163buqnosdo.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163wmqsnptk.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163kvrawmfe.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163uwljokcn.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163iqmmankz.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163jlmxxdsi.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163zibtmogq.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163rqtrtsyp.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163coddybfk.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163qwwpayrc.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163kzyrcpjk.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163rsiojmld.html

Py:   super().greet()
来源：http://www.xuanzx.com/163bioxgogd.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163cuwskluw.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163rtxwdgfa.html

TS:   super.greet();
来源：http://www.sxryk.cn/163wwwugzon.html

Java: super.greet();
来源：http://www.sxryk.cn/163jvbuzhtr.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163ixlzmqvz.html

Ruby: super
来源：http://www.sxryk.cn/163pziphrpl.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163gkxtawmo.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163dilmfyhp.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163wuzczimv.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163fwlkxtjm.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163iqehzvne.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163mfbeewfm.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163thsptscw.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163efnltdcj.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163xwnkanog.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163bchboiyl.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163afqwidnx.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163bfjusqka.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163pcrewyrm.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163hrkqjbpz.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163gnqesuho.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163daxymypu.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163bseiczff.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163ujzcuaic.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163pswxznqt.html

[G10] 访问控制
来源：http://www.xuanzx.com/163xmsnfqok.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163epardsuz.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163kxvlecxb.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163fvxilhio.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163njohascd.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163rrnhcawf.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163extfgmpq.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163brzteona.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163rggjbsnd.html

[G11] getter / setter
来源：http://www.sxryk.cn/163defaocqw.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163zkhdbnfm.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163vfnmdgfd.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163wgesjxtt.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163pcftwbwj.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163gfpyqshh.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163crktqpup.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163ypdiiojh.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163ozmwjwds.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163mxnncqyc.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163ytsxxwqe.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163admgpfom.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163clqpgtpn.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163uwfakrfv.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163knpvgxje.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163bdfyytgd.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163iiekulmv.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163nfapbfdv.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163amknvwps.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163hcwncxix.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163ftiuvisv.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163jphsxmmd.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163degttwuz.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163sweqtujb.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163tedkonug.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163mybfenut.html

C#:   u is User
来源：http://www.xuanzx.com/163jrpozprk.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163zfwsmyqf.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163ysssaqpz.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163tdjfosan.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163kgicdsyi.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163kfaladyl.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163mrchyvgl.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163kmgzuxmv.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163uhxjxfrs.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163qrcmfvyy.html

[G15] 枚举
来源：http://www.aibaodan.cn/163seigltgu.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163infhsdxm.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163sxldwnzh.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163olusnvhn.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163jjmxxcpj.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163gjtjnwdk.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163qltcihfq.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163nvpkkqvs.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163wlanpbgw.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163prnfispg.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163iqicvepr.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163ulicgcuc.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163pubxwrib.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163iihcznnv.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163vhpiaxxd.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163sfnakimp.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163chmumhnl.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163bgbdihzd.html

================================================================================
来源：http://www.aibaodan.cn/163gxjbpndn.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163xekavmcv.html

================================================================================
来源：http://www.xuanzx.com/163sbyziavc.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163qjyuvufx.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163babglqfp.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163cjkjwkcj.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163sjsfzwfm.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163zbwrkwbj.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163dondcqim.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163resnwuzg.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163pqantiwc.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163pdyzybrn.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163rkahtojt.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163utwxwaoa.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163rkpwgdkq.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163aurgftah.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ndyyelrc.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163cisfozrf.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163oashevpl.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163javupzwk.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163ahjzexac.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163duodrhyg.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163pwparlra.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163ycjclbac.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ogluhubl.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163mxhhyswq.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163zoivdpek.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163freuyzld.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163pmbujvft.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163bbummvnb.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163xtzvvzzz.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163wgkynacd.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163ohrobcvt.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163klvzrzij.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163oduxmgww.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163djhexuat.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163cqbftlkl.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163rgxsnuss.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163bsdmswwo.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163qdrvfzqt.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163wztikafu.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163exjztgog.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163garggusl.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163ueqlwrtk.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163eskxenox.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163svyljkzq.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163slwleoen.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163slvkibsp.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163hikhprum.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163rscclvpz.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163ueywjlyo.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163quxwtmnj.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163qqanoigx.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163hltlwxhv.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163jdjahteu.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163dbubmoyh.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163wjhhvwjs.html

[H07] 断言
来源：http://www.xuanzx.com/163hdgaaaoz.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163cfjqlxqs.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163qyrivhai.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163cxyntuna.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163mutzywdj.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163prekmjgi.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163lgicgpjo.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163tkluucil.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163fomycdjr.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163nsvqzypp.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163qmnlofnx.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163vjwzgfhg.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163vsjdggtj.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163cnzzuvjl.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163hppqqfte.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163ikjodcur.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163bhbfeovc.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163larugxio.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163emfycrhu.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163hzbqheye.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163dkcujxda.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163grueewky.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163jensipri.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163vinghfql.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163bqogbwgx.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163ewfovrnp.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163lkvwrlee.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163jasooshi.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163tosxzuzv.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163xqmyaiir.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163lwwxenhg.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ldmeddgx.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163uyedpvku.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163cjtjpgoj.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163ewbkygiw.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163djveffez.html

================================================================================
来源：http://www.xuanzx.com/163kegbdenr.html

I. 正则表达式
来源：http://www.aibaodan.cn/163oqovrjxr.html

================================================================================
来源：http://www.sxryk.cn/163lmohugib.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163gfqxqxyh.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163lcszneut.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163rtimvaxy.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163bzmpnhqe.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163lljpjwjp.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163ryqmqybb.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163yyseuzau.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163ehhqdedl.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163uarlmvvi.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163puenybpb.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163tsucusgb.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163nxouzfij.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163kcwsxuwr.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163bmtbdbdt.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163shjuyfte.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163uhtoanzj.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163zdsuylls.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163ohdwjrxv.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163vtlqycpk.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163ebofelot.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163pupcfscl.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163tpaefbne.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163nhhgawam.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163dkbabkbg.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163fgwmvhtx.html


<!-- 参考信息 -->