外链999!wailian999！

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163xezttgzr.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163anymoswv.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163isfqwqni.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163ujppbkpu.html

================================================================================
来源：http://www.xuanzx.com/163xkznxdrg.html

G. 面向对象
来源：http://www.aibaodan.cn/163lrcxbbzq.html

================================================================================
来源：http://www.sxryk.cn/163fsfhazwe.html

[G01] 定义类
来源：http://www.sxryk.cn/163vjmyvbeq.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163aegrgqgy.html

PHP:  class User {}
来源：http://www.sxryk.cn/163gauuaqzj.html

JS:   class User {}
来源：http://www.sxryk.cn/163ugslerai.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163mrypdnph.html

Java: class User {}
来源：http://www.aibaodan.cn/163vqtumghb.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163kxljhxbw.html

Ruby: class User; end
来源：http://www.sxryk.cn/163rmlgyfpy.html

C#:   class User {}
来源：http://www.xuanzx.com/163xxmagtvm.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163zrxlsein.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163unzmcaew.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163kkggufuc.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163arsptfdg.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163abzrpkvl.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163ndcmsxga.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163fxqpjyja.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163qdbtlowd.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163fnzbygnj.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163pkemyyen.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163idhqviej.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163rvlqiogw.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163faoufoic.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163jbonuljf.html

Java: private String name;
来源：http://www.sxryk.cn/163qjecglte.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163byhcasuq.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163auhmjjfz.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163dhuiefic.html

[G04] 定义方法
来源：http://www.sxryk.cn/163xmdaezmy.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163kmhzzfmo.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163ljgpifny.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163fgbyyfsg.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163zwdakvun.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163guuljdqb.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163xgcxjbgu.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163ksnjljvk.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163mtzohqwg.html

[G05] 继承
来源：http://www.xuanzx.com/163sruqexyz.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163inbvfzvn.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163xqrjilja.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163apzipgvr.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163phpanpai.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163gwbpmrrm.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163qvjjbtpe.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163bdvoigqu.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163apqoqafd.html

[G06] 重写方法
来源：http://www.sxryk.cn/163atqcajjt.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163rxqxtgbq.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163lghrxsqj.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163nfduebmy.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163jbfeirzq.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ecpguhyf.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163duvosthq.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163ldazotxl.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163wwegdpjd.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163yrubgigi.html

Py:   super().greet()
来源：http://www.xuanzx.com/163rngrjoqr.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163ozkawyuz.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163dffqlgtv.html

TS:   super.greet();
来源：http://www.xuanzx.com/163gebiuqvb.html

Java: super.greet();
来源：http://www.sxryk.cn/163mbxpnalh.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163fnnsnpdp.html

Ruby: super
来源：http://www.aibaodan.cn/163vtgttamb.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163irjrwlxc.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163uwawehce.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163axqrpcjf.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163ikesjezu.html

JS:   static f() {}
来源：http://www.sxryk.cn/163eytvpdus.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163asgbkfxw.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163hznjuxwe.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163jjlfoadk.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163tzsisbyw.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163fdcklbrn.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163nlckptnf.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163zzkamjnq.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163uuyjwyfj.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163vnaiyhdr.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163hejlaepz.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163vglfqclv.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163yelidojg.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163lrzwrfqs.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163bpbuqomn.html

[G10] 访问控制
来源：http://www.sxryk.cn/163njwumczw.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163jpeilwua.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163zjdpjcru.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163lunxcfkx.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163efselrkq.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163ukjrfvzl.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163mkuuoxaz.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163rbeaalts.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163dxavhniy.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163txivmrte.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163ugnhwpws.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163wlgyyhzb.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163hrhevuic.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163dhcrpymr.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163utpnejkm.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163waybfaxf.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163nqzdbxow.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163lusfamov.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163keluojnz.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163bgrnrvid.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163otojekvx.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163vfvhbncz.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163pbxsltlt.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163mfgbgxhq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163hxqhrfpf.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163vpylyxcd.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163diiaxjto.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163yppfsckn.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163scgiukwo.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163wselwqtw.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163lcbhouaz.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163nwikrxrr.html

Java: u instanceof User
来源：http://www.sxryk.cn/163kqraibme.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163chvocpmv.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163muesnayy.html

C#:   u is User
来源：http://www.xuanzx.com/163ndydgxfn.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163sfcgglsl.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163vbcgzmgj.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163lgwgnvvw.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163meevitpl.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163pmuvmsca.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163qvhtgush.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163ctpiwzys.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163ntodovwb.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163tcscqraf.html

[G15] 枚举
来源：http://www.aibaodan.cn/163ibjgmpgo.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163fjqmnjta.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163qecflodr.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163pkmfqrtl.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163jykalbnj.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163yqnirklr.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163bsliypso.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163cybllrcs.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163mbfhwhim.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163apeynrov.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163ezufkfij.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163egkkekyo.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ntnshqwq.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163wpiejgtx.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163govpojnc.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163nezpxuvv.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163fapfgudn.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163ndxnbtvo.html

================================================================================
来源：http://www.sxryk.cn/163frfmwont.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163xwtfmzxh.html

================================================================================
来源：http://www.aibaodan.cn/163lslkdtee.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163ywygstou.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163eqswhyog.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163tncbtjef.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163yusaavqs.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163orysigqb.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163khtlhvrq.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163gogvbllz.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163yplxroji.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163jytaozjw.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163dvrjfrrn.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163cvzfltgq.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163gaxajrql.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ojscrneb.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163pnyjqqpr.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163dntjukoh.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163emltfuea.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163jgajnrdo.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163zoyuklsu.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163pavcjlsh.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163oqfwnwzj.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163wncncrez.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163voihymdb.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163gdfeuayo.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163mjhhhxwg.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163mqtgqmav.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163qinuqliy.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163kvhjcaxd.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163cazobpij.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163buzgvqlc.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163uhbefblx.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163zcefxqiw.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163rfdvsnsc.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163pqiaqytn.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163yokwfadg.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163fphujhjt.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163tquwptpx.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163zvjcrrgx.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163myxrsryf.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163wtozwqfb.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163ibunfuqc.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163degxblph.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163oralypby.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163mzahyznv.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163ncyvwaxk.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163nzuviaby.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163fjfyyxon.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163nppjcjdb.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163yfxhwwgy.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163peluvgot.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163cblzqgqg.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163slgfgdvn.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163ruacgkub.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163ipntkdql.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163xhfddwuh.html

[H07] 断言
来源：http://www.sxryk.cn/163jlvqhled.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163texwdrik.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163huvavxzt.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163hmhyxoki.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163kwwmrmai.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163fjqznmrs.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163asdeeese.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163apseqqah.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163upkaayrf.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163zaxzschy.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163zjxhgybk.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163facxfjzn.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163tedeqyez.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163xrmvcmdh.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163fgnwwtwi.html

Go:   err.Error()
来源：http://www.sxryk.cn/163humekhtv.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163locesqlv.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163cwvqsgqs.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163hofdakgk.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163udnquvdm.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163ucywjler.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163jxnydnjp.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163mjrihveo.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163yvvycgzw.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163ipdzdegk.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163bmigakyx.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163rkrzteff.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163hwwiuihr.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163ivxrrrfc.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163ltnwmuzy.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163aaqvjkkq.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ddwkckyy.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163jxadkraj.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163dggqlnpb.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163mqtobuim.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163cdamvdpt.html

================================================================================
来源：http://www.xuanzx.com/163matwfxdp.html

I. 正则表达式
来源：http://www.sxryk.cn/163jaykonzp.html

================================================================================
来源：http://www.sxryk.cn/163ojgyqcoz.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163budmagac.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163ckyabhga.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163iudtwqmh.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ylbipuxw.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163tbrajvst.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163tixgkomq.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163lgbvhbir.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163fknjuagy.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163pceetunr.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163xpftajqz.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163pimzsimo.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163zfqnfthu.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163khyajzdm.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163kgeamheb.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163uyladzki.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163pluwdpwp.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163xozdtjif.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163fufnbjtx.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163uhqygdfk.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163gpsjxqto.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163dvsecjmj.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163ibnofxzz.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163vuedafwt.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163beuxocmt.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163fxptexir.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163bclzddev.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163wssyqcvy.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163qzfrjwju.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163qeobyshp.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163cmcnzsrg.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163egmfrkep.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163mimopsnd.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163jeediuzr.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163ifoojhgw.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163unfzvflq.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163hztbrdvw.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163licyvxzd.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163ckczqhjw.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163ohiizphb.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163aaxfqpbx.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163tpikwoog.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163lbulesce.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163wgftczxz.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163habcbrms.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163mpnuhxdl.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163rvdvqets.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163vikxzyck.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163tfwkwumn.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163wrqadthl.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163wysxuiiq.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163rgleydqq.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163yhdtspsd.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163amgjpori.html


<!-- 参考信息 -->