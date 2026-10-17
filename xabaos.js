外链999!wailian999！

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163upmikyss.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163jpmaxavx.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163qsbsumfu.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163axuzvfei.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163oikgjqoa.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163nwosgvze.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163epymwein.html

TS:   // 同上
来源：http://www.xuanzx.com/163zammkmec.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163ejdutudu.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163mrombdbe.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163vqompnbl.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163nnuwnnem.html

================================================================================
来源：http://www.xuanzx.com/163humkmmxw.html

G. 面向对象
来源：http://www.xuanzx.com/163miftpxbs.html

================================================================================
来源：http://www.xuanzx.com/163mhyzrvks.html

[G01] 定义类
来源：http://www.xuanzx.com/163scnootij.html

Py:   class User: pass
来源：http://www.sxryk.cn/163fewfrril.html

PHP:  class User {}
来源：http://www.sxryk.cn/163cxabkttp.html

JS:   class User {}
来源：http://www.xuanzx.com/163jzbhuvfy.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163usydrsnu.html

Java: class User {}
来源：http://www.aibaodan.cn/163etparhav.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163nvnegfsw.html

Ruby: class User; end
来源：http://www.sxryk.cn/163wfjggtzr.html

C#:   class User {}
来源：http://www.xuanzx.com/163jwsbhpop.html

[G02] 构造函数
来源：http://www.xuanzx.com/163umtdmblt.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163dlursgwo.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163mknufqgo.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163vqhproge.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163ayrycmgz.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163fhledbdh.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163eguwcrst.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163mskliqrj.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163liibfkha.html

[G03] 实例属性
来源：http://www.sxryk.cn/163mdbrymzh.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163jahlzhvc.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163iweiofrz.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163irgbnsbo.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163mfipudze.html

Java: private String name;
来源：http://www.xuanzx.com/163yfbwqpif.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163yqonczpc.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163mnrpjxlp.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163xtbhcxni.html

[G04] 定义方法
来源：http://www.xuanzx.com/163pvtymjiu.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163stsakoie.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163bogcxmjh.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163qpivegpc.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163ladntrji.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163ohvfxigs.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163vzmdatmk.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163xruusgel.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163bhxdqozw.html

[G05] 继承
来源：http://www.aibaodan.cn/163wevdrfmh.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163kazwsucu.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163tknovyij.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ukxfsdfo.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163mkqphmfb.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163slmluqup.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163tyvkzbno.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163uotgzwpk.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163qytraypj.html

[G06] 重写方法
来源：http://www.sxryk.cn/163lclbpeqm.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163fqurfufj.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163tbqylubc.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163aypkrptc.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163xmwurbsm.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163noeadpil.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163wxxykqga.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163wxtlkqtt.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163jtdgtevr.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163rrkhjabv.html

Py:   super().greet()
来源：http://www.sxryk.cn/163onikkjqy.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163ztuqiqbw.html

JS:   super.greet();
来源：http://www.sxryk.cn/163yagqgypd.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163anevirqo.html

Java: super.greet();
来源：http://www.aibaodan.cn/163idoowres.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163lzgwlwmm.html

Ruby: super
来源：http://www.sxryk.cn/163ujrcywdq.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163ltkslavf.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163ueezjqvw.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163rltpoejs.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163riybhwkp.html

JS:   static f() {}
来源：http://www.xuanzx.com/163ophlenaq.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163dkdwcfku.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163vngqskop.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163lczbtmyp.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163hwcqqnoq.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163gqhdctyb.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163gjjdlwug.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163tzvskcso.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163fzlempjr.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163hilzmicy.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163yqvqtrjm.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163mytashaa.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163tisvyfre.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163njeqkmwo.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163jcsqehim.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163ltaswruo.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163ducgwrrv.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163jdspiybq.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163sjkbgbws.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163qebdsovj.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163rwuleutm.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163wrknluze.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163vajmfkfc.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163plgjwhbs.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163svdbaoql.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163dspgghpf.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163rcbmdehd.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163aclyodzd.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163fetftszv.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163gvatvsyb.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163anqkdiog.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163lodbpmfa.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163qvviwetd.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163oldrsdil.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163ltwfdfer.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163tzlngnrw.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163whkzjpul.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163lfjvluzj.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163tsgcvoaw.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163ibydadsf.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163rbcrdktn.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163dxofcbhf.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163ughconkq.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163tkaidokf.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163tfidqzqn.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163opbqfmow.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163wbnkjlch.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163huiazkyp.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163ppulobxw.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163spgszsuu.html

C#:   u is User
来源：http://www.xuanzx.com/163shupykjx.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163nmbatlcs.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163sjzisjjq.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163cpozouec.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163qnhmzrdn.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163ouragszu.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163jtwcywhq.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163qqexhmgo.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163qmeyqxel.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163riubgege.html

[G15] 枚举
来源：http://www.sxryk.cn/163eihaxswk.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163oddsuavo.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163pwzwioel.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163wgjjwfiz.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163sqeaumec.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163ireongnv.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163dxrxrihg.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163ugdjfkoa.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ihrwvfxq.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163jwfjfind.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163xnitdsxn.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163wnsvhhql.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163lvprcgtb.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163nbcqibuu.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163occelfpu.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163ajdagqkb.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163lfnpvvmm.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163pnmjkojb.html

================================================================================
来源：http://www.sxryk.cn/163jdadduvt.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163mppqwrxr.html

================================================================================
来源：http://www.aibaodan.cn/163tqypopub.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163rfplgrqy.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163niuzafwd.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163leypyuom.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ftvduorz.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163gcyanpjl.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163itvaizzc.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163cqpgyasg.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163esgnerki.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163cshuotvo.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163xixgvnlf.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163gzxfeucv.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163tplamtjf.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163tqprtvkm.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ykamzrfr.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163tnqkktia.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163oppurcyf.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163hhfyrepo.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163mbnwzcyu.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163ognkabhp.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163hpkeowvw.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163pcswwogl.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163viqhtfml.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163xjxzraxl.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163gubcvpjt.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163dnybepcf.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163mjpoplef.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163rjejlagj.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163qaikyzye.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163splfgdvy.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163qzvzugrj.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163wryuyxnn.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163fnhqgsft.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163znlcujou.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163nuhtdigm.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163lenhlnzh.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163npsldxce.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163jntksyfg.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163bsqojqrp.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163rswfezxz.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163bulguujc.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163zgdtkkhu.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163pgkvgvyz.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163dwdxuhcm.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163bsmhuicn.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163icscnptm.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163gnsclkfi.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163ebsbausq.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163blxyhqpr.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163qkyqsemd.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163xdiexpgl.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163yraytnds.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163xaqsztuo.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163aivaundz.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163sxoinbms.html

[H07] 断言
来源：http://www.sxryk.cn/163uivtydan.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163cmihtfen.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163hkufgwfw.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163zkkhwbxd.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163wmcnhidu.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163zmwmtdrs.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163kbiberwq.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163esdtnaaq.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163plyxuscc.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163ftqiivyh.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163svidptio.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163nltbfzmj.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163krzlcpja.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163gaaeamgn.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163qbphfzuf.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163ynnlecvq.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163tlwqdgxo.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163awdybaaf.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163sabcvfrt.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163mymhancj.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163yfkgsebd.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163owiyfrsl.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163gzwfiwsk.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163utapwuxm.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163nvgvodgs.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163ghyglwzu.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163zxpmkadh.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163twdqhuzu.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163pfqlqdfa.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163gfhdjuyb.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163akvutcwy.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163jpdfvwwg.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163kfnxznju.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163lihrqqzh.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163qnwmgpbe.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163ucpvzskw.html

================================================================================
来源：http://www.sxryk.cn/163arcsqcas.html

I. 正则表达式
来源：http://www.aibaodan.cn/163vronrwkd.html

================================================================================
来源：http://www.xuanzx.com/163opfhuxbi.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163svmepxbe.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163flarpjkk.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163sjntfozx.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163pgysthsp.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163lxjdirlb.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163wcbtxvch.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163dtkynsfq.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163lrcuizal.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163fpubajsm.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163rmyevsfh.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163eetqomln.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163lppuamyk.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163zfnxumdh.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163qynhhwfs.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163eruuzqmn.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163giiddryv.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163fjzftlxi.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163obcgnczm.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163cnguwhdz.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163nexlywhi.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163mksxlrha.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163mosmuulx.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163vcjarxla.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163oesoiqld.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163dplkpegx.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163nylkzvld.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163ofvhpimo.html

[I04] 正则替换
来源：http://www.xuanzx.com/163mzsuhwzr.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163jkjlxony.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163prcrhqqh.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163ybymcixy.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163qjblvsbc.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163jrdrbira.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163eqdsvhkc.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163bfydxnyc.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163ajkzjmfd.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163rrimcqtc.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163latmlagw.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163vcikdxtr.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163dxpsiwdg.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163drnvulkt.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163ppvjqgkr.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163xhnzgeqp.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ciovdcxt.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163ypclfuzj.html


<!-- 参考信息 -->