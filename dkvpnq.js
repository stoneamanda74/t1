外链999!wailian999！

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163oqsgqhst.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163thqmgopy.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163zcroynvg.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163odktykvu.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163thkdviip.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163etqymavs.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163tmeveerh.html

TS:   // 同上
来源：http://www.sxryk.cn/163zqzzjner.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163xjtzstuo.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163aozkpitu.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163slsebgsz.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163pcogiwag.html

================================================================================
来源：http://www.sxryk.cn/163zghrfmex.html

G. 面向对象
来源：http://www.sxryk.cn/163kuaaopog.html

================================================================================
来源：http://www.xuanzx.com/163owiddwdq.html

[G01] 定义类
来源：http://www.aibaodan.cn/163pmhrixxg.html

Py:   class User: pass
来源：http://www.sxryk.cn/163zmxauofv.html

PHP:  class User {}
来源：http://www.sxryk.cn/163qsceldxe.html

JS:   class User {}
来源：http://www.xuanzx.com/163ycrfykoe.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163wqkdugzo.html

Java: class User {}
来源：http://www.sxryk.cn/163kvdndedt.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163dqbuzkoa.html

Ruby: class User; end
来源：http://www.xuanzx.com/163ykitubtp.html

C#:   class User {}
来源：http://www.aibaodan.cn/163kyshdsld.html

[G02] 构造函数
来源：http://www.sxryk.cn/163rvksggew.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163lllvhrhz.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163jwyzmqyj.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163xbblewjg.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163kkakiere.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163bjyxmadu.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163jyrauxfr.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163ybdlobdm.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163aaqdsyjb.html

[G03] 实例属性
来源：http://www.sxryk.cn/163bocemuga.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163nqkduplx.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163vzubtzdc.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163rthpmhgn.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163mtqwktlx.html

Java: private String name;
来源：http://www.sxryk.cn/163ztzgavek.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163lizpkpxg.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163reduuhqn.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163fqvljggk.html

[G04] 定义方法
来源：http://www.xuanzx.com/163gzuaakzd.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163vweoqzze.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163zykizaau.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163qnzqytfj.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163auwhaenr.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163zpemcxsh.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163azguxumt.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163qwoyzgwo.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163mmcnollu.html

[G05] 继承
来源：http://www.xuanzx.com/163nheprfle.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163tzqfnfhe.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163kpulpbmj.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163nvusmsoe.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163gcbyktrf.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163ouoccnvh.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163dclynhbv.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163bxnknbii.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163vfecgwug.html

[G06] 重写方法
来源：http://www.xuanzx.com/163yqztzfhf.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163logjwgol.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163wwbxfnby.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163cxnblnby.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163dletbmks.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163yuvlnpwp.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163diemeziw.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163bgoulxoz.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163iwntewvu.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163baetwtwe.html

Py:   super().greet()
来源：http://www.xuanzx.com/163bonbxyez.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163ldjprtne.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163kdvyedjo.html

TS:   super.greet();
来源：http://www.xuanzx.com/163gynvutap.html

Java: super.greet();
来源：http://www.sxryk.cn/163vweguvrg.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163zudmjhka.html

Ruby: super
来源：http://www.xuanzx.com/163luctuayd.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163bzlzzwpv.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163iopakzdp.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163wrbseidt.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163uuqydxva.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163rtqcxxdl.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163cahpadfd.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163bzhducsa.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163mbxhafmt.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163npuwgspt.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163vbwcowuu.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163zksczhcr.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163ckogocfq.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163dfvvtsei.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163sdmwcwvy.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163swlklmkn.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163edkwqggj.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163prpgfgbd.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163amjiajak.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163cglmgzex.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163gzqduokp.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163vkriwxjp.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163casifnor.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163ffnwtfje.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163loqswihg.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163hpcjvgre.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163ndtgpeqm.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163ihwfkpmy.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163fiqpjswe.html

[G11] getter / setter
来源：http://www.sxryk.cn/163xalfirpu.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163jaxbyiif.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163rywdvizf.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163adxdgkum.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163xtkkalks.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163dmpkshmk.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163ojydyfit.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163lswefsov.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163bbmwfqqk.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163vboadgwx.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163cbckszmr.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163xsbffiiu.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163belvnkpg.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163peqagiur.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163dpzencmh.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163kppbaitr.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163oiahmdsj.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163gltlnapn.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163fhsqnnnx.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163qfobaeci.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163pwrdpucn.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163jyicvtoe.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163guigyttg.html

Java: u instanceof User
来源：http://www.xuanzx.com/163hhmqxtun.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163avybxxog.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163vkckkues.html

C#:   u is User
来源：http://www.xuanzx.com/163fhpikfmn.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163fqnbaqlx.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163sfimcmfw.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163wdsvmsgk.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163szpazubr.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163oowsupmr.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163vmkwrtwj.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163rtkihlen.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163bdaqbfcx.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163lizlpvcj.html

[G15] 枚举
来源：http://www.sxryk.cn/163rossejro.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163krgadktu.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163uhcdlyzo.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163tgogfqfd.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ijhqqmpd.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163ysjjjatr.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163ssrqdlvr.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163xhpwsczm.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163uvyhtilj.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163mtbcsxuq.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163nsrpzfjw.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163qooahbkb.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163dkkxipqv.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163lxtjyjtd.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163jzojzihc.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163qplxvokl.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163nbfcttgt.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163wwfrctnv.html

================================================================================
来源：http://www.xuanzx.com/163fftgxjat.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163unuhxbja.html

================================================================================
来源：http://www.xuanzx.com/163vzijmkjw.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163vpcjvpgv.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163eoohhwal.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163gvyazioe.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163bskptazk.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163yrdxwwpn.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163enbgxioe.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163lgzxwwxv.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163jdfuqgts.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163exluevmi.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163ykojyucl.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163gygniktu.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163nmroycnm.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163thgnpmdt.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163gswzwxoz.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163rakltfwb.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163jqejhbyb.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163rfyswsse.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163qavsdqgz.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163jshqhboo.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163kfuvubzv.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163wyfrwdwk.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163xmbjfmmu.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163gufccnpv.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163wawbeltk.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163mzedlcwr.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163asueykrq.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163slnxndqp.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163aabzwojx.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163zhtgbjns.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163lvkygmmq.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163pdlcuoio.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163dunlghbg.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163xvhhqtez.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163jljxivzx.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163urmewfte.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163ocjnhcjl.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163vcififad.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163lxuorkrx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163oagnldig.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163jylexjig.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163rlupdwiq.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163thluatmz.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163kvwywinh.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163ttwvayax.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163lkjsrnzf.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163mbscvpej.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163fgyoqxeg.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163pprjuxbg.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163dkybwkbq.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163pepylmsg.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163nuvckqqk.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163kwlooxiy.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163pktephtj.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163mcfughsw.html

[H07] 断言
来源：http://www.xuanzx.com/163kypzpmyq.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163ntbgpeiv.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163iafybyqn.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163nivwhsgn.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163skdlnsxk.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163alsimdfx.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163knnfjynk.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163xohvtgnn.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163sxcgzlwi.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163cvcxzikd.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163zhcuovvl.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163nelndurb.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163xdlyuvxr.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163cfjwuqop.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163sttjdrux.html

Go:   err.Error()
来源：http://www.sxryk.cn/163mguvspzm.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163hndqxzfi.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163qakwswvf.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163ubficntm.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163hdgmygjh.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163xjxgjktf.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163bjpvbqrx.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163skzrcuol.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163fgxcrbwg.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163stcktaaf.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163vrvkvhri.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ostdepuz.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163lpzarryz.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163jnjqfjoe.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163ixuughun.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163kgszsvqk.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163xkpdhbry.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163smfftegx.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163tmgskmmn.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163xzghgdhe.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163hrlfqnyw.html

================================================================================
来源：http://www.sxryk.cn/163xxbgfuwd.html

I. 正则表达式
来源：http://www.aibaodan.cn/163yjvntrkc.html

================================================================================
来源：http://www.xuanzx.com/163qjkilzmu.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163wttrgpfx.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163fihppmaq.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163xmwbxude.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163pgzefyqp.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ozjprntn.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163aktdrgjv.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163mofzjebl.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163xtrajkht.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163mvnjlgdw.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163xjdqzbqv.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163fdxidgaf.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163rilqmcrg.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163tjpwuoig.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163yajvgnzj.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163wysbrzbu.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163fulpcmmy.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163quxztpwu.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163vdcisirz.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163natpeohs.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163cqtyjskk.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163tgzawgyq.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163kznofyxq.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163cawqctmv.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163rhsluwpf.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163ahmoovee.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163iwejcuxo.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163qpynkobh.html

[I04] 正则替换
来源：http://www.sxryk.cn/163exddzter.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163wbbmxmkw.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163pzoicrbf.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163wtknoncu.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163mfpfdimi.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163pauglnie.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163bxudbcee.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163rzqerkno.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163cnvyoodl.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163asiyunvi.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163lscasqfo.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163zhxvqsbh.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163pbmfviru.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ighrjxid.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163cskntwgx.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163aomicxch.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163fejjspzx.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163swytdgju.html


<!-- 参考信息 -->