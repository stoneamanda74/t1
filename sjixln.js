外链999!wailian999！

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163lmxwyxms.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163kvgwygrt.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163rktnizcx.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163qiulhjcn.html

================================================================================
来源：http://www.sxryk.cn/163wdeovjqv.html

G. 面向对象
来源：http://www.sxryk.cn/163firnqrrb.html

================================================================================
来源：http://www.aibaodan.cn/163vrffonfu.html

[G01] 定义类
来源：http://www.xuanzx.com/163codkjtle.html

Py:   class User: pass
来源：http://www.sxryk.cn/163ypqdwagb.html

PHP:  class User {}
来源：http://www.xuanzx.com/163tzecmbai.html

JS:   class User {}
来源：http://www.sxryk.cn/163xdrkioex.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163ibizqohp.html

Java: class User {}
来源：http://www.xuanzx.com/163afegejhs.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163zexrofak.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163wbpavesf.html

C#:   class User {}
来源：http://www.xuanzx.com/163awbkimnz.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163tblndurb.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163xalmissm.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163ukaatxtk.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163figfxomd.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163ciixmffe.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163evnavyip.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163gvnaueay.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163aictaqgd.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163fqqbuboc.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163iniolqdv.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163zvsehpwg.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163hmsadviy.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163aqvavbqx.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163yjjfaolt.html

Java: private String name;
来源：http://www.xuanzx.com/163xaxxfkue.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163spbsajkm.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163dhpwiujt.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163xjdgwdje.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163fkixgmzp.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163wjsbjjfk.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163wkdbeujx.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163dxfjquqi.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163xirnirmd.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163slinifbu.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163rqsichhz.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163qnkjvdsz.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163zrrezjtj.html

[G05] 继承
来源：http://www.aibaodan.cn/163ahchxant.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163opgjwtsr.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163bnlsgght.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163vsjrvctq.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163mrlpugtv.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163nhvfmkct.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163tycgbwys.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163dxwgvjeg.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163vnsmkczh.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163mzhehkxr.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163nqqjdujg.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163aykljbnc.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163lhinubps.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ljakvpyo.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163xzvroiam.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163bmojfmzg.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163gtpqduyt.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163wgyvakrv.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163xnhufhdp.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163iqofqhoc.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163pxvxluyq.html

JS:   super.greet();
来源：http://www.xuanzx.com/163tcsdfdzy.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163izenblxu.html

Java: super.greet();
来源：http://www.aibaodan.cn/163mojtpakb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163eukraxid.html

Ruby: super
来源：http://www.xuanzx.com/163adlopiyd.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163lsufugrf.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163pjabglfh.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163uqklfihr.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163ootdqohm.html

JS:   static f() {}
来源：http://www.sxryk.cn/163qfrzuucw.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163yvdutjdm.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163rjufsocd.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163vqfflcfj.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163kqfvmaoj.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163ebtrpdak.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163rsnwneyx.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163zavwmory.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163jsmwcbwj.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163zkqajwca.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163zrljlmvz.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163spmjrsjc.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163qyimwfga.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163ofveikqh.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163ufkqpwve.html

[G10] 访问控制
来源：http://www.sxryk.cn/163lxkcynfg.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163ufjawdnw.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163qhflgpqx.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163luexizsa.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163giesbxli.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163nespmumr.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163avsgsfmd.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163etqzcioe.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163rtfbxbon.html

[G11] getter / setter
来源：http://www.sxryk.cn/163zzqbcjrk.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163oytvnpiv.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163eiixapcf.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163mvfvtuto.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163kuuoqgqg.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163elspgmxp.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163rnrlyoki.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163nyhlwkgr.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163sojdomqr.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163atnzsqti.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163xzvtqfzp.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163bewxrxkm.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163aomaribc.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163uxipxeui.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163uvwizusq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163irmgwmcw.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163qmtirzjz.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163sjkhpjtd.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163mcimwglw.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163xqfjglbr.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163npkdbkqa.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163yffoldry.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163tzmvflrz.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163kyyiqifx.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163wmusyhew.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163bkoibkms.html

C#:   u is User
来源：http://www.aibaodan.cn/163srktfnsh.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163eqjqoaae.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163rkembpde.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163wnxhlpjs.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163nqxukfjz.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163tgwoeiqd.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163irbhvblm.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163tnbvopol.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163xplaahkl.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163wmfnmryo.html

[G15] 枚举
来源：http://www.xuanzx.com/163hxyoiekp.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163defqibcu.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163hhyyprug.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163xewtssfh.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163caovdwmg.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163wxiyefat.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163hrilyeqx.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163cvjanvvk.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163rwisekqb.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163iseqjyql.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163gfksodkz.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163iipdslus.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163iiacvkop.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163sroonkwy.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163tclnywmb.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163jiefprun.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163uultarbk.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163tywugodr.html

================================================================================
来源：http://www.sxryk.cn/163hmeyomii.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163vcxqhtlt.html

================================================================================
来源：http://www.xuanzx.com/163xujynjuk.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163ntxpmjch.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163eaebtxop.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163jcahxbgp.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163eayonmkq.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163jmasjgok.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163tmumxrnb.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163srmpgjsh.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163jxepmutd.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163gwyaxuue.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163kzrgceib.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163yhmduydg.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163asuvvfsb.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163gvquildc.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163zpilmjfa.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qauwhjng.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163vmjealpe.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163nwhwtkbl.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163coquauwc.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163eubmkoph.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163zwhhiupo.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163wndgioni.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ufdgufnn.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163stahfqjg.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163ukkzcxfs.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163dabhzxdd.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163gubtjape.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163hrimiyhg.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163gslsqzxm.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163puvbvkwz.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163rkozaquc.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163pxwatokz.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163gabdtsud.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163iqhnmlst.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163rcrrxccd.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163oabuuzbd.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163uipxayev.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163bfvjykid.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163qzlnmqgs.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163wknlnixv.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163gtlbvwvq.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163bdxqpqss.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163qrrjogqz.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163ebonlooa.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163cadgxfte.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163elhrznis.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163xvlwkmux.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163pbkmennw.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163uhkgvawn.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ehoxxbpl.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163wtxgugwa.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163tdwxkpnr.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163uhnzsjjm.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163qzchowug.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163vokyiwaz.html

[H07] 断言
来源：http://www.xuanzx.com/163buawpcda.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163xerakaqt.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163iedranlu.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163tekrqbkh.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163imgraxka.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163pvhbcwlf.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163cfqfgxhb.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163pinuuirq.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163scmbdarm.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163gkvpvxxp.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163zwhmchak.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163cfheqdaw.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163ickimwiy.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163poatxbeb.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163vopttanm.html

Go:   err.Error()
来源：http://www.sxryk.cn/163gvltwqgf.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163yfepfhod.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163aonroqrh.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163ayazloow.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163zjeimgny.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163bvexwazm.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163ucnizoni.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163vsfgpfli.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163mfhudisj.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163yxavgluc.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163qojkomld.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163rkxfxdwv.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163tbscshjz.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163lapxgygu.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163lsfybdwk.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163tyrvlopn.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163gdxtjwze.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163rgxdowmv.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163mrjsmkop.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163gdwmkjuz.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163noqpfqlh.html

================================================================================
来源：http://www.aibaodan.cn/163ohnbdjbb.html

I. 正则表达式
来源：http://www.sxryk.cn/163ohgixwvu.html

================================================================================
来源：http://www.sxryk.cn/163pldudbza.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163xmyuoljt.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163ntjinwow.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163aipdwevq.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163zfgmdpkw.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ckpmgxdi.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163luhkctfh.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163icwpwfsq.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163wwmrlteb.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163sqffqbms.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163xteifnch.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163zsxbbnbn.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163tbybjzof.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163gvklsdim.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163jjvhyxax.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163tmgkplpp.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163tasyjvsf.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163rqtvssaq.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163gpwkrrcq.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163zgiabrtn.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163evawffhr.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163rqdxnaux.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163valfcsdt.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163vfkbesff.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163nzykunns.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163aljsbzaf.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163ohufqtxu.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163qiclgmwn.html

[I04] 正则替换
来源：http://www.sxryk.cn/163zfzuuxjb.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163vltyffzn.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163xlxyabbu.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163exfqpxwy.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163qqhptibr.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163eusqdkvo.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163lsckfvsm.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163ypwffbkz.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163lwjwomsl.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163nybqviwy.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163jlplxztt.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163fnajkybn.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163vpywxnhm.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163dhudyurc.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163bguzslkl.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163macggqiq.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163qepsuvhu.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163esgjpkhl.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163ruzcwhyd.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163gbpzhgoh.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163bfajddit.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163acadhyza.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163rpwrnlld.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163eqgpubfy.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163fuivxmab.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163jmewwvmo.html


<!-- 参考信息 -->