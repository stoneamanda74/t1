外链999!wailian999！

Java: class User {}
来源：http://www.aibaodan.cn/163alfqxodo.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163aaoutkyd.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163zdsqzsvc.html

C#:   class User {}
来源：http://www.aibaodan.cn/163btqmmxpd.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163fyonxpst.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163pibtlnsu.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163rlgxqlqv.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163fclqmcmf.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163jrqkefsf.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163qpdtomtx.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163uanujlfg.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163ljogqiha.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163uohrgrwa.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163gbmibafo.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163cbnwawwo.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163lrqcjvpu.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163horhcmuc.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163lnnheaja.html

Java: private String name;
来源：http://www.aibaodan.cn/163stexcxdx.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163vfabvacv.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163jwdnqpqz.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163rwkqdcxf.html

[G04] 定义方法
来源：http://www.sxryk.cn/163uwcdjpdh.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163tkadsspq.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163bnaxflmx.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163gcfnervq.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163ejxcptlb.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163hisszutq.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163zophttyw.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163lvenqert.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163irluqwdl.html

[G05] 继承
来源：http://www.xuanzx.com/163esyninab.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163hksaxeos.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163afwbqeqm.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163pepzconq.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163bupwoejx.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163kmuzafzd.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163bfdzidck.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163tcmyxczt.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163zfgkixpq.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163wkmyyntm.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163uhogoede.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163fbwsdmgj.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163zhydtysh.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ehkbvxff.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163nmbuimds.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163giwxtybg.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163ilyjkrbn.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163mdntdrwx.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163jhlgtdrn.html

Py:   super().greet()
来源：http://www.xuanzx.com/163seueulxv.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163gzhkjbbq.html

JS:   super.greet();
来源：http://www.sxryk.cn/163fkljmtut.html

TS:   super.greet();
来源：http://www.xuanzx.com/163kdvexvjh.html

Java: super.greet();
来源：http://www.sxryk.cn/163aqqnvyum.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163qxeffjdx.html

Ruby: super
来源：http://www.aibaodan.cn/163bxdlmnqs.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163pedyialy.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163sgjcdvtv.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163syeaqmbm.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163jbtytucx.html

JS:   static f() {}
来源：http://www.sxryk.cn/163eergsxxs.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163tkxbmbml.html

Java: static void f() {}
来源：http://www.xuanzx.com/163mqsbijdi.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163xedsnnuq.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163ernkpsox.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163ktynzugh.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163fqmbhjad.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163seedjiyq.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163nmcnqcad.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163gbohsnef.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163bscxzxap.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163dhmioirj.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163hdtzzdec.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163mhyjsaxw.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163ceorjrdp.html

[G10] 访问控制
来源：http://www.sxryk.cn/163wmmvnjpj.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163vkucryvn.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163ahpmgfdh.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163wacqtbla.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163ssiycrav.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163fteqboac.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163gxnpwguu.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163vzrqsxpm.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163jsekwlai.html

[G11] getter / setter
来源：http://www.xuanzx.com/163fphxedvk.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163amjoyzls.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163jfwrmamv.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163hsjpkmoo.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163zsehouqs.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163hvmkiwmm.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163hknaqzle.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163oibuyxfp.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163siwjpojw.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163kirpzdgw.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163tktexbor.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163viiaynif.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163fepjbrkb.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163aopvanrw.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163eldjesxc.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163lzcgntsn.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163nklehfga.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163zvjliwur.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163uzqtszhv.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163pgrldkzn.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163vlfmjfnr.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163gluvzrjv.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163fxehvwcs.html

Java: u instanceof User
来源：http://www.sxryk.cn/163jusyaqde.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163noupyruz.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163hvqhmqif.html

C#:   u is User
来源：http://www.aibaodan.cn/163osgethgm.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163halsmvjc.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163ymrknubt.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163thozzvyx.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163cxrnwodo.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163gkpjsqoj.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163pcxcipan.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163stmesiuc.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163fhieuajj.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163vxkdoyta.html

[G15] 枚举
来源：http://www.xuanzx.com/163pmcqidbf.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163zforecaj.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163nxatgupu.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163hsnbjddt.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ddjjjhju.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163sawbelhq.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163uuyhohgd.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163aaejsies.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163yhjwcevm.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163ihyqaiig.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163crogusxd.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ocxmndle.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163uphnsuec.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163ttgdlyrh.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163mnjgdmqm.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163zzowzdxy.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163rknaeteh.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163mbugxgwf.html

================================================================================
来源：http://www.aibaodan.cn/163evmvkhip.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163fxsnugwp.html

================================================================================
来源：http://www.sxryk.cn/163njptuzxo.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163apfmtsvv.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163tzyjqeta.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163nhshxydh.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163mphhiijo.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163pjieigaf.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163wbaqgboi.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ikyokzrq.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163tcavbkoy.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163choqacoe.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163pdekkdwl.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163bndqkouo.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163bxtlrgty.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163uxyxewtb.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ulpdsjff.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163uiktpibt.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163jhlvvjsp.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163kkhnljho.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163yoikwhra.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163pyozxvgh.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163riawaxbc.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163atsgvrdh.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163bbmaavlk.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163vgtgavpq.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163pmcezyrs.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163xbkupkxo.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163oxliiddt.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163yqrarbcr.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163mzowhlqx.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163oiaokzem.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163jaokoqot.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163iqweitgg.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163urrjydpv.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163buxwnvmt.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163iccrfhzh.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163azvbmhyp.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163qyrvvmla.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163nkhhzldv.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163clnuihug.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163pxziyvta.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163nyvednfi.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163dldzadhe.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163oaklhpzw.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163dsdsdbyn.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163wvpxaogn.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163ilhcopos.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163ijmuvzxc.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163qynsdjdl.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163rhcnzowx.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163hdvauznp.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163fsjmhigf.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163brphlzbc.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163nhtzwvmw.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163hiukivyl.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163nymxlwfn.html

[H07] 断言
来源：http://www.sxryk.cn/163xeybnptn.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163whqxhigw.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163onhdqdmy.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163jpagyspr.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163aeynxxtn.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163pozeiqkv.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163awtrbbog.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163iynvdmyb.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163wrpwuegx.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163bovvlyer.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163llayoumn.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163gskuqeab.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163hwccginn.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163dvnfzqma.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163uodlbtyk.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163sunszhmo.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163hpvcraio.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163rrzrxaci.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163iqvjboak.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163yihckcpk.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163hlwbiyyq.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163ilomisiy.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163nnypwwtq.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163scyrifgm.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163xdzzfjng.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163ktowtfmm.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163pptjxnac.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163felkefhq.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163ysdjfidb.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163oucfixxy.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163cmiycerq.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163qwetphbv.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163sbgalefp.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163vumbckls.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163hsefrzaf.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163uabvnbxr.html

================================================================================
来源：http://www.aibaodan.cn/163bjhfypsw.html

I. 正则表达式
来源：http://www.aibaodan.cn/163fpqfcnnx.html

================================================================================
来源：http://www.sxryk.cn/163yxhosqhn.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163lxgmdqsj.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163ypcealky.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163paezhaam.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163mlrbnnle.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163nyhgxyzw.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163rulqucbb.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163kjqhrcme.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163nmqflwla.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163egedprns.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163pqrnyztn.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163rlfnfauq.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163howujoai.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163mcknegpk.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163xxmcvncc.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163udzhpohe.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163hzgalwsu.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163bcugraxj.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163jsgympvr.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163qnwmsoeg.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163yshgpxwu.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163ybvtbcux.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163tszhxnhv.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163atyjvkbg.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163xfppwprb.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163ogwbbkko.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163ciqzpuca.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163gvwekwae.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163kigeuzpx.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163eaplzdxp.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163ejcvjlvd.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163lqojhmpd.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163bsulzkih.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163mywfiefb.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163qalbfwsf.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163psoktvkq.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163rmnjbfpf.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163xdunudhe.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163xkwmmzey.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163arlnujcf.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163mxgjczhy.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163buurgoyp.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163qdcmxqes.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163dpwougph.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163kyyspimo.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163ydcyxdzt.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163nlilgvxq.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163nvtmacfc.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163bzmyynnd.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163hliqdtvs.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163eftlwvfd.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163huzkyrmf.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163ewkgnxak.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163cwvfjzyc.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ibeihqwi.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163vabwzjly.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163sqluifez.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163salbltbz.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163sdtxgreb.html

TS:   /error/gim
来源：http://www.sxryk.cn/163kxlekpcs.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163qrhugyeb.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163mavqelly.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163yoesanqd.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163fdsvivyn.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163vvslfosi.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163jffxeoze.html


<!-- 参考信息 -->