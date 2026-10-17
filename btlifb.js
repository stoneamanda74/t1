外链999!wailian999！

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ibawkwhk.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163zqhitsdt.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163mmeydafg.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163lerefrhu.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ziykgmyt.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163osywiucx.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163qybrsvho.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163gtksrinm.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163ecqbaxta.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163fxeflwyb.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163cpdxyabr.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163phrkpnng.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163skojtifr.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hrruybmr.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163uuvswhjf.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163vlhraizt.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163zgdmyrju.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163dtpjwaav.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163bwaxniaf.html

TS:   // 同上
来源：http://www.xuanzx.com/163xwtbdzwt.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163oitltuig.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163whyqgcae.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163qcktkvsj.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163hofxburt.html

================================================================================
来源：http://www.sxryk.cn/163qcpffftn.html

G. 面向对象
来源：http://www.aibaodan.cn/163eierlqfw.html

================================================================================
来源：http://www.sxryk.cn/163wrdufprs.html

[G01] 定义类
来源：http://www.sxryk.cn/163istcdatr.html

Py:   class User: pass
来源：http://www.sxryk.cn/163qpvzlgxe.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163uqrnewvf.html

JS:   class User {}
来源：http://www.aibaodan.cn/163tletdgqy.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163vzrcjhva.html

Java: class User {}
来源：http://www.aibaodan.cn/163pqdumgix.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163avtfcqnx.html

Ruby: class User; end
来源：http://www.sxryk.cn/163lzqvyjht.html

C#:   class User {}
来源：http://www.xuanzx.com/163otnnjvpt.html

[G02] 构造函数
来源：http://www.xuanzx.com/163tnimalhg.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163rqxhgczg.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163iohfuuai.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163gzkfaouc.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163yynpembt.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163wqopmetg.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163vyusgdld.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163hbmegbdl.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163qbilnvcb.html

[G03] 实例属性
来源：http://www.sxryk.cn/163oaheaxyi.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163onwjrfyx.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163cahscxgl.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163poyrgyti.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163agnvlntn.html

Java: private String name;
来源：http://www.aibaodan.cn/163eddywemx.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163ervncnrs.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163tzqqpbcz.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163askngkgf.html

[G04] 定义方法
来源：http://www.sxryk.cn/163btobdiva.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163msbikgat.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163bqeernot.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163wislngla.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163tjbeqrte.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163cwcaznhy.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163uprkethc.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163nakcnwvi.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163ikcdvstl.html

[G05] 继承
来源：http://www.sxryk.cn/163cuxrszrf.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163ffpmzhzi.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163ojolbaod.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163fkevhfzm.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163iwkywbry.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163fbesjvzw.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163mvrtxgae.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163lopatlnh.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163qhlexdsv.html

[G06] 重写方法
来源：http://www.sxryk.cn/163uapeohcv.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163kyyhegiz.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163uegyxlyh.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163gyonqwjk.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163fuvowqju.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163eqpazrka.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163daqghhey.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163pjqyppei.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163ybhgfpkg.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163wauiykwb.html

Py:   super().greet()
来源：http://www.sxryk.cn/163duxxlxfq.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163brrfkxhc.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163wssfuriu.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163xscbelce.html

Java: super.greet();
来源：http://www.aibaodan.cn/163aquzjtun.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163jenltjud.html

Ruby: super
来源：http://www.xuanzx.com/163bhwcofcy.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163cgopdipr.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163zdozoiia.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163sbyknklv.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163wimqhlbs.html

JS:   static f() {}
来源：http://www.xuanzx.com/163bnokncyr.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163yeqmoyoy.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163scsigqpv.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163fpvistda.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163xpcbawwc.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163svyzghqe.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163oeberbiw.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163dxahlduu.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163pxjleepi.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163mxvjcbpl.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163paaluvax.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163dijlwegg.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163gwrwbkmm.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163yambjtuy.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163pzzzyido.html

[G10] 访问控制
来源：http://www.xuanzx.com/163pcgleubb.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163hxqafudm.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163mampvhyr.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163drqkihtq.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163bajlgmil.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163nbnhhwqh.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163vuctktpa.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163ljtedlyn.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163uocflxyh.html

[G11] getter / setter
来源：http://www.xuanzx.com/163jjfcioxw.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163spcjtkka.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163uqliviio.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163slykswzr.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163ddywwile.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163iavyzvsf.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163xgtkkdzo.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163uuyoqecw.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163vnlxfiog.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163jelvrgoz.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163gmxrqtcb.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163nccsjkca.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163hyyiglsp.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163rdbyzgbh.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163oufowrgr.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163xzxussbf.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163uulgevlj.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163mrimwwny.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163pzqgfroi.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163rlijnupq.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163jifplacg.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163bcixyzsn.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163inoaguft.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163ospqbiln.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163pqjgcsaq.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163votjyswg.html

C#:   u is User
来源：http://www.sxryk.cn/163qvrsllec.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163tsfdyefr.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163rjeagfkf.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163rawkvehb.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163dpewdnjf.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163qlhbcmzm.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163lhpgsivx.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163mqhmpzda.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163mjlebjwb.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163zebabjxd.html

[G15] 枚举
来源：http://www.sxryk.cn/163tprdmutx.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163spjpmnhp.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163teaidybw.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163mytrowig.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163rebvewyu.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163ldlmsxlq.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163hotfjbxh.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163dwmnltzv.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163vuiuvvjo.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163xdqvhpit.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163hfpghcwd.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163quzzehnv.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ksfmoxem.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163scpemcle.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163ruoatvkt.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163uheqnzci.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163gwadenhf.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163jreyooov.html

================================================================================
来源：http://www.sxryk.cn/163italurrz.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163ghsjgcvz.html

================================================================================
来源：http://www.sxryk.cn/163kvkavemh.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163httqannm.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163bniowrat.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163djrvxzxo.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163pjdxshfx.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163waumzcmu.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163ulgegfel.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163xzjjkgie.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163oenogevc.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163vpmpaxvm.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163lwqqyzgs.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163jgospmkz.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163yfjjjwlc.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163xiusospp.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163hfqalxmz.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ocnnaqpe.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163hxtuddrz.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163banqnila.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163qvgdwwmh.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163srbgrxoq.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163jceyawlg.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ghhzifff.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163xeztncuf.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163fqimgumn.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163hmwuoxnh.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163tukegjel.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163owsrsstz.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163dsvnhksx.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163zjeilufr.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163fdbkblmm.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163wtivqjjq.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ozwqrmvm.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163owqzpkps.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163iumjnryw.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163lykyccbt.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163vywfpliy.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163phooaazx.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163ayxnbwie.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163wokfojdf.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163jhjjtxmt.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163vybpwwzf.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163bqwjefuy.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163fzuonkic.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163gxztcrxt.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163eancuzpo.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163hletebuy.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163natokmxi.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163modnltvb.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163lycfejjz.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163hveayctt.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163jrujfrop.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163eqlpbvle.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163ckdrbyuz.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163zybwhuds.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163tjiycery.html

[H07] 断言
来源：http://www.xuanzx.com/163cfkebsuy.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163ucskmbgx.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163qknvepwg.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163yacgoawe.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163nhilcbre.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163zfyaxdzk.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163htptyums.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163rtpddybq.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163rkbrmwvd.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163rrbaufhw.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163khxmfpcx.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163itclaurj.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163outgdyhu.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163dfonygny.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163larmdgda.html

Go:   err.Error()
来源：http://www.sxryk.cn/163ngzlftka.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163wrwumgam.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163ysnkrqmz.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163qkmygomo.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163kfqasqat.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163zlmuudcl.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163bznbmdfg.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163dcetmhyr.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163bhiwzqmq.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163pvikrshd.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163qnhvoccr.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163rzwxbvhh.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163ipzfrrlt.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163hgrlmdvg.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163dejlmwnw.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163qrnoqfbb.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163cfzpjitp.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163jraezsfh.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163bmwrqykw.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163vedgefzg.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163pwnbqyfh.html

================================================================================
来源：http://www.sxryk.cn/163ebossjtw.html

I. 正则表达式
来源：http://www.aibaodan.cn/163clpotqqy.html

================================================================================
来源：http://www.aibaodan.cn/163hecqelgi.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163horuuowb.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163lelrvvww.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163usfoayur.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163bzpkzzke.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163awcoxtsu.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163wookkofj.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163ujijkapa.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163sxbnvqoz.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163payjitvb.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163cmnayrqw.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163jmesvfpq.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163orspzbkm.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163wqfkzvfx.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163nofdpyot.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163rgkzswrt.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163hlqxssql.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163gghlmdhe.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163igvovdok.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163nlosolft.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163sgqtfnta.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163iwsfvyvf.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163wcpvxvzu.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163wlxwbmjk.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163aanryvas.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163srbcorau.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163fswyvrvy.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163khytueew.html

[I04] 正则替换
来源：http://www.xuanzx.com/163sblrezrx.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163ndanaenr.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163lqzfelkp.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163oqbqnopz.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163rbasiinq.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163bclesavp.html


<!-- 参考信息 -->