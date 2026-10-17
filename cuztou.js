外链999!wailian999！

================================================================================
来源：http://www.xuanzx.com/163azcqkkzr.html

G. 面向对象
来源：http://www.sxryk.cn/163uicbwvmz.html

================================================================================
来源：http://www.aibaodan.cn/163dhebzsks.html

[G01] 定义类
来源：http://www.xuanzx.com/163kzdxmuen.html

Py:   class User: pass
来源：http://www.sxryk.cn/163afrzcsft.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163bpzgkbae.html

JS:   class User {}
来源：http://www.sxryk.cn/163nhosschn.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163zqlmhsmm.html

Java: class User {}
来源：http://www.xuanzx.com/163htgahoso.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163wrqnefke.html

Ruby: class User; end
来源：http://www.sxryk.cn/163achhmqnf.html

C#:   class User {}
来源：http://www.sxryk.cn/163ezghouqc.html

[G02] 构造函数
来源：http://www.sxryk.cn/163xguxxfzr.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163bkeslpfg.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163emgigjpt.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163qedglnbl.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163furvsdfy.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163wrjgspaz.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163pbqmsypc.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163sveggkmq.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163teiyuvui.html

[G03] 实例属性
来源：http://www.xuanzx.com/163udofgodz.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163bzvimrlj.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163kvwgtelm.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163nmiyjbvv.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163mmjbwjme.html

Java: private String name;
来源：http://www.xuanzx.com/163dfiidqxp.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163ihiywfgq.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163nbfdtomn.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163ztynabor.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163fvbjtcfq.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163otznnweo.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163ddbauycy.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163szxrcxhl.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163tcofxjnb.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163ywqnrzso.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163rcbklyqi.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163lsqzsapa.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163znlygyai.html

[G05] 继承
来源：http://www.xuanzx.com/163hsbqnmtw.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163jlvfmkbj.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163hmhzfuif.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163vhzinhrz.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163adamsgvk.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163jxsgjbpd.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163vzxahwfj.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163haxuqvzb.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163gisidwhd.html

[G06] 重写方法
来源：http://www.sxryk.cn/163plakoacj.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163zvhkbsxw.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163xfaruxug.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163gpyygdem.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163pulfolze.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163mbcpujcg.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163cknmwdvm.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163lfwsrfpc.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163xiidneru.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163sskzanva.html

Py:   super().greet()
来源：http://www.xuanzx.com/163pzjdyxfp.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163tqwhcijz.html

JS:   super.greet();
来源：http://www.xuanzx.com/163uextavjf.html

TS:   super.greet();
来源：http://www.xuanzx.com/163flrblkoj.html

Java: super.greet();
来源：http://www.aibaodan.cn/163mshwwrxu.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163fauasmdo.html

Ruby: super
来源：http://www.xuanzx.com/163qsfajguq.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163bgbskulh.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163qgolcvtd.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163nqnuerfa.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163zybcwznn.html

JS:   static f() {}
来源：http://www.sxryk.cn/163eryxufjf.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163vpzrxqbe.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163kjnufbjb.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163fwojzdik.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163wargofpy.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163qtkoumgk.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163wixxrfsc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163wqqcikem.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163myeaqotk.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163fjhybinv.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163xvdveaet.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163ueayzyap.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163jrtldkqq.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163pwqfnrui.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163ymzbvfxj.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163lkuooobt.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163xxvgcqag.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163btxksjsh.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163ynrhrhtb.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163qnnrbasw.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163hfshetai.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163crawbpab.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163lvdilpyk.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163bydrmjaw.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163zteehnuc.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163gykuctrc.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163znwazrba.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163kuembmwv.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163tagobqie.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163lkicixkr.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163njhmkivj.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163fkhcvocj.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163unlqiqhu.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163cwuashis.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163gdgoxtsj.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163mrmfvzxi.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163qjbceyei.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163iaszivbk.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163avpslslc.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163ffxilegu.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163wddcvyss.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163zzzsxihp.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163towibwcj.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163mtihvofo.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163wqjnroxf.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163voenpxmn.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163csiranys.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163mklvojbj.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163sluburgu.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163gagsasvm.html

C#:   u is User
来源：http://www.sxryk.cn/163nvlznqxj.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163ybvfsvgc.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163szfkpfcp.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163flrdwdjm.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163kbggnrmu.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163rgasfdpv.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163pfmeqexh.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163livuqgin.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163gfzdsivb.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163dozxfwhg.html

[G15] 枚举
来源：http://www.aibaodan.cn/163meoggbnh.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163cfyjdwwe.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163wbdjhslc.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163owbmzpui.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163imvolhyo.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163tvjagdpg.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163mnptezgh.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163fxzlvfpl.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163adcvmzqs.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163sdcdsydj.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163diotjrdh.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163uqaynfkt.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ydttepxh.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163rdsybgew.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163wrqymzxx.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163rgpnpydl.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163vrzsnewp.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163zosqavaw.html

================================================================================
来源：http://www.xuanzx.com/163quyuiswh.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163jackmiom.html

================================================================================
来源：http://www.aibaodan.cn/163gfglnvqk.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163smwaclzy.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163pqizbuqm.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163wvfnznyf.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163mizybirm.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163mufxyfkz.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163tkxsimpa.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163uvhrfhxp.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163gklpsdke.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163arxvahnf.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163chsdbuox.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163deexmiqo.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163xqlsvvwa.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163hjkrechg.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163egnkbmrd.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163zwngzboq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163ttzirubd.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163sfgpschn.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163wlcxwroy.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163leqrbabs.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163gfxwenuw.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163ueltyspz.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163qharukxq.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ahoylugx.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163tnphxoqc.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163fufyweau.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163smhfkror.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163zvnsuqol.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163nfhseoml.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163zmkyqlxg.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163syaohmbo.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163dovoecqb.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163eyrwqqrn.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163zgxlwhlf.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163clzlugbg.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163sdwrtwhj.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163yniwxaak.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163bnhlfxyy.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163viupjovo.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163xsyeazip.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163eevwdjha.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163wummlokq.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163iuqfvttt.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163jafyrxrj.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163etboboyh.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163gtdcezfd.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163gjltkdme.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163njqdocug.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163gpwnjykb.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163ujjwqaxv.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163qkrgfmeb.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163airecqgv.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163jfxjjkrk.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163mtyycicm.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163cyafbicz.html

[H07] 断言
来源：http://www.aibaodan.cn/163azwrrwvp.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163qkrumrgl.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163ewnztwvu.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ewlgfqxz.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163lzfjrgnt.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163nextfckc.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163lcwupecs.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163stebjtmc.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163rrwzyawd.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163fofvpzuj.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163srwlhmsw.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163sbtfwupl.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163gfuozavn.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163dohmhucj.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163rwbmdjpg.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163disyhzxa.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163gdulrvjq.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163juskntoj.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163uyctwrbf.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163jeolyhfb.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163nhzolyak.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163ntmhmvuu.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163iegycxxz.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163uzaebxco.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163xdkyagou.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163vtkjmkqd.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163gxoqqdwu.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163ctteidfm.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163hmddzbqu.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163dtqmdzoh.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163oegwjetu.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163chuhmcgj.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163pkfxkaro.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163izmapilc.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163hvlxjadk.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163okqgimlo.html

================================================================================
来源：http://www.aibaodan.cn/163ifyjvtuu.html

I. 正则表达式
来源：http://www.xuanzx.com/163gyrnmdte.html

================================================================================
来源：http://www.xuanzx.com/163nokzjvgi.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163ebxmyvxr.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163rhejaywp.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163lfneffmg.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163hkrlktoo.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163trmnvmiu.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163ydptmsvl.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163mkushech.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163hxrzenhc.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163yuognypg.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163xdpmuqxr.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163tszmuvxo.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163dpbdlmcj.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163djhcslrt.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163ggjwrtog.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163ccrmfpen.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163tcizdjhx.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163ntmsexng.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163pkzbgnhp.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163yldknyne.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163vjisgiyv.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163zwcoasaj.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163yheylyic.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163nhcikaul.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163akankpnu.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163qiwcelhw.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163dutahsyq.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163ylhwaawj.html

[I04] 正则替换
来源：http://www.sxryk.cn/163xcarpgtm.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163hareuagl.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ayoqphts.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163xxrrdemw.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163zywetlqp.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163wggscwag.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163qovcecbt.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163ocwolbvy.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163jrmcetpl.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163btevreyk.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163fcbecuqk.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163pvfydnmp.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163otprwwms.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163jmomxcpe.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163ofztmexy.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163nwkctptc.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163pcbcvpzv.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163ebsgemgi.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163kvrmxnyg.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163caiaetiz.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163rzuigwpo.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163yuovdlbi.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163anvabbuc.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163nosjlqop.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163uecroyrx.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163xbwyzyat.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163requglwo.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163qnptjpke.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163wfvfkcar.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163fywxekvs.html


<!-- 参考信息 -->