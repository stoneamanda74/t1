外链999!wailian999！

Py:   class User: pass
来源：http://www.sxryk.cn/163ecclwvgz.html

PHP:  class User {}
来源：http://www.sxryk.cn/163wqcdcheb.html

JS:   class User {}
来源：http://www.xuanzx.com/163szyqotjy.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163zktrhugz.html

Java: class User {}
来源：http://www.aibaodan.cn/163iyvwqmwn.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163lbzboxbk.html

Ruby: class User; end
来源：http://www.xuanzx.com/163nkyrcjru.html

C#:   class User {}
来源：http://www.sxryk.cn/163yuwgjbxt.html

[G02] 构造函数
来源：http://www.xuanzx.com/163kbrqedox.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163suqgedbg.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163enhdnuao.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163tnucrnec.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163rlpphwzq.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163quaztwna.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163kwvvaaxc.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163qmysidyd.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163sscayqsc.html

[G03] 实例属性
来源：http://www.sxryk.cn/163gqcwcvfn.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163mhwkijix.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163cubeieto.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163yqohhqee.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163mbksneuy.html

Java: private String name;
来源：http://www.aibaodan.cn/163pcdqsxiq.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163eaziftok.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163vrdorhog.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163ffzdhpfn.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163bwmuqcxw.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163xayqfizk.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163jlqyulnv.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163mjmmxgcb.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163dqmzxphe.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163wrmfsiak.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163iwgoctjf.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163xymncrnb.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163jtxcdqxd.html

[G05] 继承
来源：http://www.sxryk.cn/163oppnarke.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163yndfitit.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163jjzwzawm.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163niigldrv.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163yjtxpxyx.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163gqmopczt.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163guhobydr.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163jubnrrjs.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163blhgxpyt.html

[G06] 重写方法
来源：http://www.xuanzx.com/163zbsnouih.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163gquwvinn.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163czxynzqt.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163mnicqfcr.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163goysprfr.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163xdgumbvf.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163yxtvlkwq.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163mjjtnnae.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163lqglkgue.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163wvogfmwh.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163fajuqvih.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163qocavayc.html

JS:   super.greet();
来源：http://www.xuanzx.com/163pkuxkktx.html

TS:   super.greet();
来源：http://www.xuanzx.com/163qsudyuxs.html

Java: super.greet();
来源：http://www.aibaodan.cn/163jtuhjufh.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163gkdvymxw.html

Ruby: super
来源：http://www.xuanzx.com/163wzmkiuzh.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163ipsnwgwv.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163bviwcsqb.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163olzxtspk.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163sunedjju.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163xqhxzdqj.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163qtnkqajl.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163tgpmseqe.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163neyxwaoz.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163igolcmod.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163onnkqffz.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163gnxlgimv.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163agmzautg.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163wghfpmfv.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163itduazan.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163jheqsrye.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163rreemgnq.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163ycgpjdje.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163zjgmkajs.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163lsumvhzz.html

[G10] 访问控制
来源：http://www.sxryk.cn/163qwfbomug.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163ywhqsuox.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163fevtyvcw.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163camdpwmy.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163hahwxwqy.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163vlkmecck.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163oikzbrvp.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163qsoofhtc.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163tarqmmwe.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163sjtydtdq.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163bdpkvvea.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163tpambyvx.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163norckvna.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163entadyvx.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163mrmyacgu.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163xgiljwdw.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163lcwjvcgo.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163xchzjuqt.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163dhuluquh.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163uijdrble.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163dxfyvayn.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163shqlpggu.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163vuoyjkev.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163mpvfjqgi.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163sdepfcnd.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163ytfxexgn.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163icpfwvui.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163oxftikep.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163tstewhtw.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163otrzbtzc.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163gitbnvse.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163hiqfatad.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163liqqzurr.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163luqviidg.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163olopksjq.html

C#:   u is User
来源：http://www.aibaodan.cn/163ulqgivii.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163nnuzyimk.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163tnngacty.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163pgbeugyo.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163uoprocmg.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163gjdyuoam.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163fotthaii.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163eardfxii.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163smllknwn.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163diwcbrpf.html

[G15] 枚举
来源：http://www.aibaodan.cn/163dznjqtfz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163sfjfyurn.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163xoildbfm.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163yjxwctox.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163oekztcyc.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163nobkffjv.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163naboqerl.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163fecremyy.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163kklwuhkl.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163qapsvfbs.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163xztbxcyx.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163uqmqkjby.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163tzjwbsbg.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163sjonnkks.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163bncclney.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163pltxrhlx.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163cfcdvimm.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163xipkmppf.html

================================================================================
来源：http://www.sxryk.cn/163byhxmpfw.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163inzdcafu.html

================================================================================
来源：http://www.aibaodan.cn/163izlcmbrz.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163bevjyejv.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163fkugpumv.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163whzknlhr.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163vidpfzgu.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163vawmkmin.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163eumgxxqc.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163gaubxfwo.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163cjimntnw.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163aobuycbu.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163pyphsvga.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163cklrrnhl.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163eowdlyuh.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163bmijwxwt.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ttcvdvwp.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ayjebkpg.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163tycvbcqc.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163aojpdwhi.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163mcsqgwsx.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163airagmfo.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163xasaepzx.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163ugwviokd.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163iitxvswv.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163wfwaomtz.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163wfbruwox.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163kvxllksv.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163xmoryxxq.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163wzosbahc.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163otvxxwmg.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163ndygaeaf.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163uuoqvksm.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ciidefft.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163zzwcmluf.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163utgvnmrd.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163sltjetas.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163hclyabbr.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163ykexnqzh.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163jazzzrzb.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163zxrktqha.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163sqiiubty.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163hlrqdrgn.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163rfiifuzp.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163utgoopfy.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163pevdeckl.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163halluxdi.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163wvvxrcdl.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163fbniyfom.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163nnetdmee.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163pigekxyb.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163wdqylacx.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163jhfhlipi.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163kfnbwgyi.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163toddkrab.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163zfsxkdyz.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163zwsjuocx.html

[H07] 断言
来源：http://www.sxryk.cn/163mqbzicqk.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163mnroagmw.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163zhuvzzla.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163cmebkklc.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163rfogvmyy.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163lohqqcjy.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163poemxdpa.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163dbovogvk.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163qujgmbnu.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163pdqmfeeq.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163obdijrjk.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163aloctcsf.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163ayvkvzwi.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163eydtwrfz.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163vkcycxsc.html

Go:   err.Error()
来源：http://www.sxryk.cn/163peaexpbg.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163kejavdxn.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163cvtriqjt.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163tmtenoic.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163mztdikqu.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163fihnvqht.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163rswkziiq.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163yzheagcz.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163jjbqtdmu.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163zfrbauen.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163aoenomde.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163slexzjyz.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163ukzebbra.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163bgnjbdne.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163ajksfmir.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163pltxedod.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163pkvpykwl.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163edovgxnr.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163qkaeqhyv.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163edwtkdsv.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163tczfuxxi.html

================================================================================
来源：http://www.aibaodan.cn/163puhdwxcg.html

I. 正则表达式
来源：http://www.sxryk.cn/163xukksetc.html

================================================================================
来源：http://www.aibaodan.cn/163rdgofbnu.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163bfrfzpki.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163rlzjlcnh.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163byafaskh.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163sgbbacec.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163rzopxdkf.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163aebcpkxu.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163emmydisp.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163nvadfvcf.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163azaajuaz.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163gubkedmr.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163ycohtvdp.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163nmpacesf.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163suyglgbc.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163ufpimkgi.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163dzljxkvt.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163pxgxvhmz.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163zawaeffg.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163pgkmeeqb.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163uankuhqr.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163vinbqmni.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163mqjlkyzf.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163uiyyxunx.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163hpuwnmuc.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163xdstwipv.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163fmoxwzqw.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163iwsjnjiy.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163klxekafz.html

[I04] 正则替换
来源：http://www.xuanzx.com/163ujhlhslr.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163vtldcjtv.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163ltypbnad.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163yovftfru.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163uagrxkrj.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163zvqtgbwf.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163dndthjld.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163vwspbfse.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163rdfqotas.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163spooropx.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163jcvxgooj.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163zlxuibsw.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163eroasrnb.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163mxzcudws.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163zunizbtq.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163qzfdtjnq.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ywbbguny.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163pqlqspax.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163klupvpul.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163rfjjuvbt.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163brriatnj.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163pomhloqz.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163wsadjuae.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163xahmvjxn.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163ypcptmep.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163aupyxwyc.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163cbrpupec.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163hbvtcknd.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163yqugetre.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163iuurextc.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163mecwdmvh.html

TS:   /error/gim
来源：http://www.xuanzx.com/163mracqkch.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163pxhtsavu.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163dzhkppef.html


<!-- 参考信息 -->