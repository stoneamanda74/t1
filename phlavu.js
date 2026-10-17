外链999!wailian999！

================================================================================
来源：http://www.aibaodan.cn/163vkugzqxx.html

G. 面向对象
来源：http://www.aibaodan.cn/163woxwbehe.html

================================================================================
来源：http://www.xuanzx.com/163eszkqcca.html

[G01] 定义类
来源：http://www.xuanzx.com/163emmdhoiv.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163vgvoutwi.html

PHP:  class User {}
来源：http://www.xuanzx.com/163resjeovd.html

JS:   class User {}
来源：http://www.xuanzx.com/163sbozvsti.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163ddfrmxst.html

Java: class User {}
来源：http://www.sxryk.cn/163khkgqemz.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163ixodhejx.html

Ruby: class User; end
来源：http://www.sxryk.cn/163qqfnwifu.html

C#:   class User {}
来源：http://www.xuanzx.com/163qjqlqmjm.html

[G02] 构造函数
来源：http://www.sxryk.cn/163btfrjqtu.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163ybmxugnf.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163ddgfuyfy.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163ijzlezoj.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163mrsgxzma.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163txfhykrd.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163aaotwcis.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163bcnawrsn.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163xikhslha.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163kkclvdmt.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163lkxjslnd.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163orysgdxp.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163fcocapdt.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163epuaxbkz.html

Java: private String name;
来源：http://www.sxryk.cn/163swzndpcd.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163zwiegsww.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163wnvxduqs.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163auvldftv.html

[G04] 定义方法
来源：http://www.sxryk.cn/163egoyrghc.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163thglthyc.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163bvmrarhb.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163ktkxnvpg.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163syrnlonm.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163yaojcnyg.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163etkofaux.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163npbnrohq.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163izcagzgy.html

[G05] 继承
来源：http://www.xuanzx.com/163obucijah.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163rypbofzr.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163bnbsngva.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163zgwldkog.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163recpblea.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163ikefpxgp.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163wfpgurwo.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163ozsjiroa.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163ajondpni.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163urdqyhyd.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163lvdnepqm.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163lngnevqv.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163qlkrdzni.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163sppbuzcd.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163sjhrkrhz.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163unyxnfon.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163oawsxovs.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163plylgbxl.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163chvbflgi.html

Py:   super().greet()
来源：http://www.sxryk.cn/163pqtqhicj.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163kebyojqa.html

JS:   super.greet();
来源：http://www.sxryk.cn/163edrzuzai.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163lofshtss.html

Java: super.greet();
来源：http://www.sxryk.cn/163kvcgjvkv.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163ixzrmbuq.html

Ruby: super
来源：http://www.sxryk.cn/163ptivlhxi.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163fgesiqzo.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163ipdfymzv.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163lksikxrm.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163tqcbvckp.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163qrrmnmqn.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163ojprxylx.html

Java: static void f() {}
来源：http://www.xuanzx.com/163zcahmari.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163ymunwuxl.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163ehxwtdvc.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163bkhphwpl.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163mwjfegcv.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163lfmnwwlz.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163ywlzkmqn.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163bspyptfu.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163ywunvjtl.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163yiinjsvv.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163xvdvhapa.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163ayajcqwh.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163afuflyce.html

[G10] 访问控制
来源：http://www.xuanzx.com/163trlzhoxt.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163ktdefsnd.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163phayyder.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163bdnuihqx.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163aybwatse.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163zkdhdqsq.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163jipkushx.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163ngcpaych.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163uifoekqz.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163niwxyfcu.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163xlgbfwlr.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163zcrgiogq.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163jcztraan.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163frbyjgys.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163bhbhzsnk.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163yvdahpnt.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163gvhshygg.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163yiquuxkh.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163jyjcqtky.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163mrijtaoo.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163tktrobbo.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163oeldaavx.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163gwoliwcu.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163egtefvtd.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163oyzsbxsn.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163udlnbjuc.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163rdgxmwgs.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163lxghlfjn.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163idwhxvjj.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163wxsiqkqi.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163jjpevijs.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163otxcikvf.html

Java: u instanceof User
来源：http://www.sxryk.cn/163ipvnhjvl.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163tphqmqbt.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163uhkhhukp.html

C#:   u is User
来源：http://www.sxryk.cn/163bkahkzzg.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163qvvlbtpc.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163uiqefqvz.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163pahdcaok.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163eqhbljtk.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163pwozhuze.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163tfhmlkcv.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163ohjduahk.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163qpfrjyfu.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163iszkyngf.html

[G15] 枚举
来源：http://www.xuanzx.com/163dvsejekh.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163oyqvgbzx.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163rtwfkkvy.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163ooasqwkg.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ntqnztob.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163dyrnicqw.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163pqkcsdmc.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163phdpbuum.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ptejwoop.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163varoalvf.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163qfmutgnh.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163qgbyynyd.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163czobbgym.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163musgmjsx.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163givtffte.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163zmoosick.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163ufhmccfb.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163outwcyxw.html

================================================================================
来源：http://www.sxryk.cn/163kvdsxxik.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163gbkiaizy.html

================================================================================
来源：http://www.aibaodan.cn/163ezttytbf.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163qkdffjrd.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163pugulknl.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163usmbzgeo.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163fkktqqpo.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163gyfuyjga.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163wjdvevdd.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163samquflz.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163nvtmvfjo.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163omymzsyy.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163arxfeimc.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163ueniomkc.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ughejccq.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ghadhdxr.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163yupjuqot.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163vvzbixej.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163dyvsnavt.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163vwekgpyz.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163oppoxzgh.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163zoltctde.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163gbgejruo.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163sumwofrk.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163stcujlak.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163dyiskayw.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163etsnvkre.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163hjcjrhre.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163rjyrwyfz.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163oaavsdaj.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163jkyyxeqf.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163tqgqiqxv.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163hlypawir.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163gpfbucos.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163aisxwrrx.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163ssmyrrgp.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163taciegnp.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163ydfgtide.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163azvgrfdy.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163frltcbpo.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163ekwslzul.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163wqqwdbtn.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163swmwdwyl.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163iexzkeqy.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163hrrwcdar.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163cgfodjwq.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163bpjkbwge.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163jpvejrev.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163rvujjokc.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163bpvnodhm.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163oaexfsfr.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163acgxwubh.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163cxfcbhyc.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163xhiszwef.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163vvkploju.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163fsnbkhau.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163jqsbokga.html

[H07] 断言
来源：http://www.xuanzx.com/163xmfvrbmk.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163xslrgyvl.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163zvndnvjg.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163gafyfant.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163dqwwhqky.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163xksuvixm.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163xlshsyvd.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163obalkmmd.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163kyncqzjc.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163czreajwu.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163qguvswoi.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163qaiwtmrt.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163igedzccj.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163tprdrxvo.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163paaccqgl.html

Go:   err.Error()
来源：http://www.xuanzx.com/163tiilzukm.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163rvlawwxl.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163huxsibvb.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163jrqnfnzx.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163qndoxkoa.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163fobuwjye.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163cruayzko.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163vihglrrs.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163gkxvhfiz.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163tulsoyyr.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163mnwsptxj.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163gdvcankn.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163lgzahrao.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163ljwdpmrj.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163zpmtzxvo.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163mvbwueqi.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163vtmzaibu.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163rcmuwekz.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163vfrmoste.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163mrkwdqgb.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163jrnoxvvk.html

================================================================================
来源：http://www.sxryk.cn/163pyepyyvj.html

I. 正则表达式
来源：http://www.aibaodan.cn/163iujtgvsf.html

================================================================================
来源：http://www.aibaodan.cn/163qkomnljz.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163kyxynido.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163jwtfmpua.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163mujydjyb.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163egphjhjj.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163lxiieier.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163qbtvyvhi.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163lhaflwtj.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163sediqyvf.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163jptffpkz.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163kpyduhfe.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163cwgdfcwt.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163igtrguwv.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163rzowzdvi.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163hsbzifbs.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163yrhzxskj.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163owspiuht.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163evtbdmbw.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163sxjtenmn.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163yyyixbfw.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163lamzwlqz.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163vyuzwgut.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163qsdclozm.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163vzfrpwba.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163agfbrvmv.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163dflpsjir.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163xmvlgiyr.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163ncjuccdo.html

[I04] 正则替换
来源：http://www.xuanzx.com/163dddokuyc.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163unprnsmg.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163kfquhjxf.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ruysnuxh.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163egewpjml.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163qclssorp.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163cclocotm.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163wupkyeeq.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163vtcnqqeb.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163dfqfmkqo.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163vnrggmdo.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163darilmgk.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163tpbtvqca.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163mhyjybod.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163smmvwvgj.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163tfqkahmd.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ixkbklbn.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163xtgmpobc.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163gkxiemio.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163blpezaki.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163mrcgzsja.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163etjzvkna.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163xfnepfoy.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163dbfefwyq.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163argmhihy.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163aqownrca.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163imytxxkc.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163dlypsvqs.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163ekhjbyqn.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163fwgrbwbp.html


<!-- 参考信息 -->