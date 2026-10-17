外链999!wailian999！

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163aapqxyqr.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163aogikzbr.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163hcsgwvte.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163rcolhrqr.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163gfkqnknk.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163sbfmcglv.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163gxebdisc.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163rsjygxgk.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163bxctofan.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163bkisniyf.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163iikzcytw.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163pvymqnuh.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163ldpzyodr.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163vmxdxoyk.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163doqygbmk.html

TS:   // 同上
来源：http://www.xuanzx.com/163zidgjqwz.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163jdlxnzys.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163shnoapqd.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163eczuketo.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163ucwbpljb.html

================================================================================
来源：http://www.xuanzx.com/163hytucccb.html

G. 面向对象
来源：http://www.aibaodan.cn/163dgyipaqf.html

================================================================================
来源：http://www.xuanzx.com/163uehylpby.html

[G01] 定义类
来源：http://www.sxryk.cn/163ydhqxvfi.html

Py:   class User: pass
来源：http://www.xuanzx.com/163oxjfplry.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163uuarsfpl.html

JS:   class User {}
来源：http://www.aibaodan.cn/163wojqqowk.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163wojkdeaf.html

Java: class User {}
来源：http://www.xuanzx.com/163eifzvpae.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163krzvwxcf.html

Ruby: class User; end
来源：http://www.sxryk.cn/163dgqqmvro.html

C#:   class User {}
来源：http://www.xuanzx.com/163inazfiow.html

[G02] 构造函数
来源：http://www.xuanzx.com/163spxkhfsg.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163sgnvpegv.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163kdcqfsyq.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163jrfcpnmx.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163gfsshcyw.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163qcyljbnd.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163foivsegr.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163yfzfvixc.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163lydybnhe.html

[G03] 实例属性
来源：http://www.sxryk.cn/163aqugdvxc.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163mfzzeoml.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163blleltxu.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163vagweeom.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163cexhfdcg.html

Java: private String name;
来源：http://www.aibaodan.cn/163sflslywy.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163bkefmouc.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163zizyqttr.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163tjarctzd.html

[G04] 定义方法
来源：http://www.xuanzx.com/163belsznwy.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163uayllwev.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163csofdkac.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163nftkmjoz.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163wnqlmsef.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163tdocpwvx.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163pqgtmjnv.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163xhbohtci.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163fwglcizc.html

[G05] 继承
来源：http://www.sxryk.cn/163votkqtcr.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163jizaykco.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163awagjzxn.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163acpntwwk.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ctbzclor.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163hfxttlsz.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163lqyukslk.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163yqinwmbo.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163aomtjfun.html

[G06] 重写方法
来源：http://www.xuanzx.com/163olazpvxv.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163vqptpchb.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163pydysygq.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163wmrozvpb.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163xqbcvcox.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163ztivlrvs.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163rtjwnicu.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163frtasnyv.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163fxwtrkib.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163xrdouxor.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163mgwddbfw.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163tflergqg.html

JS:   super.greet();
来源：http://www.xuanzx.com/163kxlbwxvz.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163zglbnfia.html

Java: super.greet();
来源：http://www.xuanzx.com/163qsgxpacl.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163unswndcx.html

Ruby: super
来源：http://www.xuanzx.com/163adowkigw.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163cfwpnchk.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163wzjiolnn.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163cehqejao.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163wfrwtoeq.html

JS:   static f() {}
来源：http://www.xuanzx.com/163xrcnutqd.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163pckvwfwk.html

Java: static void f() {}
来源：http://www.sxryk.cn/163fmzcrogh.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163sfydltdi.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163anyotecp.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163qzeqgfik.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163kwylbtdl.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163qxollaby.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163nhqoyxmd.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163xyhtnmvn.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163fpkpokli.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163daoegvvr.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163ifysixyo.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163zpebgarl.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163aqzjmlvb.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163shevycvd.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163ndputobs.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163tkbdssvp.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163rbecihpw.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163rdgxntpn.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163syekpquh.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163gflfzron.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163kvfxthll.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163syzdwdys.html

[G11] getter / setter
来源：http://www.sxryk.cn/163yaqkqsgx.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163iqbdvklv.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163fdpicrpe.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163xlaemxjj.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163hwmtflwm.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163tbdicotg.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163vvxvcsop.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163amokshbu.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163gwzyeosh.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163eldmklzn.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163gcxqbpet.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163xcwdmcmj.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163ehtlvwwg.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163uxrpxdjz.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163cvaxgdrz.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163grdvnizr.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163gqaxhsoc.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163kvhfesdl.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163hkfmzfns.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163gcvlctji.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163vykuvrdj.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163xfecxswd.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163cjlgxgug.html

Java: u instanceof User
来源：http://www.sxryk.cn/163uzvbbndz.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163qsyugrrq.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163erngvyvq.html

C#:   u is User
来源：http://www.aibaodan.cn/163tjiaalng.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163cdkbzhrh.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163fnzatbtv.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163xcpsbdyq.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163iisiexcr.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163juxbafvb.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163zkzudjhk.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163ivoqyynl.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163fxvhokkv.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163rzaxiwqm.html

[G15] 枚举
来源：http://www.aibaodan.cn/163wvbceukl.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163wqkluotl.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163unlyzjhy.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163pdditnxw.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163kmdwbgio.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163pzdrrqyy.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163sghuzupm.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163sfwsvnsj.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163zfepglak.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163ndyvglkq.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163wplzirzy.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163mrjiptix.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163mtotmbpt.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163bhhpifdd.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163vmmieirj.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163yupptqqh.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163qmvttbmv.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163fvewnkyx.html

================================================================================
来源：http://www.aibaodan.cn/163kzjcjovv.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163syamzuej.html

================================================================================
来源：http://www.sxryk.cn/163mdiufzni.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163dtvnyhxh.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163fhcuxpxo.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163cfdzqioj.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ckcqhfsj.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163gvdvwsoc.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163yeguimcg.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163jdvwbrjz.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163irrvdosg.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163qnxkdoqo.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163pqshxhpl.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163tvqkawom.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ntjbgqoy.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163fwljmkkh.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vsvfeebn.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vpjqznch.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163nktmaraa.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163whuntvab.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163qntzdycg.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163drishzfk.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163rnxjabxl.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163bsqamjdb.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163jkwsdklh.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163uzozehjz.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163wnhsaqds.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163nefoltvc.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163saauaqfu.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163aliqikzy.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163etzhvdee.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163jfkbjwfd.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163lenmaxyr.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163kzwtpotb.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163obbncjmf.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163tpqkhwzx.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163jefhshng.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163spycgwan.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163atxultbh.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163hnfkcvdd.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163cmrdwdcx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163yplrathc.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163uoqgdukr.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ncgmfbcb.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163zopkfxss.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163bffkrgdm.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163kuzryust.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163imwhrkfw.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163ersockku.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163vjtndcms.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163agspkfry.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163icrsqgmy.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163eljtbwbf.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163sqfunswb.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163ryjhacfq.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163ppjluyvx.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163oyeusjyq.html

[H07] 断言
来源：http://www.aibaodan.cn/163rinszeko.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163tfszfwck.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163wocggdcu.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163wqdiqngo.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163vblevktw.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163reeswdgl.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163hteyraeh.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163bgcwpxvx.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163kwbjcumq.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163tlnjqgnt.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163doxwwubo.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163prfqufig.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163hxlrohnk.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163pcfqpwwd.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163thvuvryx.html

Go:   err.Error()
来源：http://www.sxryk.cn/163yyfxhfmt.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163pdqbrxpn.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163waihjsty.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163ubswlsdl.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163dtrqgjab.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163hqmqcebk.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163kdczavic.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163iaideptm.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163gdolamxs.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163mswftfad.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163eqidekwl.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163mbhtuiyo.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163wdaklfgr.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163dfmehbzg.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163aqvikldi.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163vixssfeo.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163bzozauaz.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163bmggevnj.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163ifzaspxp.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163quuragor.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163qroebmrg.html

================================================================================
来源：http://www.xuanzx.com/163kemtrwuo.html

I. 正则表达式
来源：http://www.sxryk.cn/163fjystpla.html

================================================================================
来源：http://www.aibaodan.cn/163mdrdlsdt.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163skmjsrgi.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163ctlirqnh.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163ujfwenjl.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163epnkutut.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163dqufgeix.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163dirqlpgk.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163nfyvdyok.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163wqcthntl.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163ogbkbecc.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163ilmcwkjs.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163llqhpyqb.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163urzhcaue.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163odxybdco.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163fdwyjsfq.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163cbtvxbwn.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163nktqfjyh.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163jzdxxfbs.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163bpgpaahn.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163gpreaaqj.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163rzoxccpb.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163ddkgkier.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163zmtfbkho.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163fslzftvs.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163hmidfxny.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163dunifmpr.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163yvrerduz.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163mrdshlcz.html

[I04] 正则替换
来源：http://www.sxryk.cn/163wzrtgrnj.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163mgvomgko.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163juvsuzqs.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163nffevdzm.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163waqhbhhe.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163vtdgldwb.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163kdtexnfc.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163dgojdbzc.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163kjkwikxu.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163ffinsspi.html


<!-- 参考信息 -->