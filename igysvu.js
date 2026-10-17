外链999!wailian999！

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163pyxeshdo.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163jzlpqmlu.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163ambqkoxp.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163qmhocfue.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163ccgrurum.html

[G03] 实例属性
来源：http://www.sxryk.cn/163rstwpemt.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163uddxidmr.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163ywisuwms.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163utbxrppq.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163ssfojjfp.html

Java: private String name;
来源：http://www.sxryk.cn/163bgmwnglw.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163dqwljyyy.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163ahwndxud.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163euoajqak.html

[G04] 定义方法
来源：http://www.xuanzx.com/163rulvwfcv.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163eoksxvdo.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163hoxtbejr.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163zwafsuup.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163hgfmjqnn.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163cmiabcha.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163zxslnald.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163kbzcipmv.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163akqwrzkg.html

[G05] 继承
来源：http://www.xuanzx.com/163uvmvhkct.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163kwuplvvu.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163eryabbhj.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163mrajmxuc.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ewwdbtse.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163tzryvdhc.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163wmyympiw.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163tgikaxfi.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163leivzyad.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163zoskchly.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163mexissgo.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163dtnndpiy.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163ssxcihcv.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163wqqcbden.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163ygwbpiyq.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163afxohjov.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163vvrpznzh.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163kxkvdojs.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163zuuvtlhz.html

Py:   super().greet()
来源：http://www.sxryk.cn/163nufgpxws.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163mmkhvqkc.html

JS:   super.greet();
来源：http://www.xuanzx.com/163tqdgshec.html

TS:   super.greet();
来源：http://www.xuanzx.com/163ynyghctb.html

Java: super.greet();
来源：http://www.sxryk.cn/163wqqzuoqv.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163blcpdysf.html

Ruby: super
来源：http://www.xuanzx.com/163pdejhswj.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163tyyunxhw.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163nkcmtbff.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163ienajbeh.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163ftkqxbgi.html

JS:   static f() {}
来源：http://www.xuanzx.com/163klrpgouu.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163ejvhzanh.html

Java: static void f() {}
来源：http://www.xuanzx.com/163elbljzpt.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163wylliehe.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163dwicmcby.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163knvmhxbs.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163konmuywm.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163aofcrlod.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163yiehqacd.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163ytnhgndi.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163titljslv.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163mjifbhqo.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163gpmieanp.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163sfiitlmp.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163ksyytwba.html

[G10] 访问控制
来源：http://www.xuanzx.com/163ryhmbufy.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163eyvdlquq.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163tpaktpst.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163tzsbtfzb.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163emypnzfd.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163dmzelhhx.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163vxhkyrsq.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163cljadsps.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163ynyutopw.html

[G11] getter / setter
来源：http://www.sxryk.cn/163iwumnhsw.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163ltbiyeag.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163dqndusnw.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163dofmsnrj.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163dlpttoes.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163noteovcy.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163dzsdeimk.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163gtnxkkcy.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163rmltmpoq.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163xhcwirka.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163lkricjoh.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163veirvaqh.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163fsdzlkby.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163ampdwiaa.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163fvteeopc.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163nghgkzde.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163tcjiqqhg.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163wkwnazwq.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163ddllnlem.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163jvelvqyc.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163tmsrojds.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163eeqbznnm.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163dvzcclqq.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163gmzrazli.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163vltgpmjr.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163ldycewie.html

C#:   u is User
来源：http://www.aibaodan.cn/163acoggkwu.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163lrbebmgj.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163wvpaecqu.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163ybpnqzgx.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163rrjlsmzn.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163qdhmfxvs.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163osmovvxn.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163yozaeepk.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163kteyruvc.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163mwfcqfcs.html

[G15] 枚举
来源：http://www.sxryk.cn/163bfsvocae.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163uugdlrzg.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163ajdjzpoc.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163kmoawkhy.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163gultqjnv.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163tyumejia.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163tmmvljop.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163wvkvfgbo.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163smigsbzg.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163itotxvtl.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163abygxmvz.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163bpleiyco.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163risarkdq.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163qamwwtbp.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163wjldqttj.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163tiudpdwz.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163bwnqffzy.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163gjdagbaq.html

================================================================================
来源：http://www.xuanzx.com/163albylsxz.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163fghmgkom.html

================================================================================
来源：http://www.aibaodan.cn/163hmklkrvh.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163cucjgtte.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163osfscqjp.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163ggipbaps.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163vrskmgkc.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163caqmlans.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163bytdtart.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163yfkonogb.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163mlwzwvrl.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163lpotrlne.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163nrwdetrc.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163yhcncgbr.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vfteldkx.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ncawxaco.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163fzmaqzva.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163kvwimbls.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163mhfzywyr.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163onnkzslg.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163oxygcooj.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163iwegvrum.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163uqwenhyj.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163uglfrnfz.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163pouwqkqq.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163koegrpgp.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163dyyhlnpq.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163dyzmxrbm.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163hifckqzm.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163qbfnltmv.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163larixjfi.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163zdhomchv.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163pcnwdxun.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163shvlxhlc.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163rgqplqhf.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163oyrkbnyb.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163lwlsaesc.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163snxkxbgy.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163jbbiwiig.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163ncvuqpha.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163ipyjqrcg.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163jqgrdnmk.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163jaetlpqd.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163jksuyirw.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163plwiuhpl.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163foohgbqr.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163oodhshwv.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163nhybiatq.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163elcuoakc.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163iqwmrzmo.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163ljkltblj.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ovtanutc.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163zibshndo.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163usexkonx.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163xyaipbhj.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163scfhkswq.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163ltwvuoeh.html

[H07] 断言
来源：http://www.aibaodan.cn/163hjxrxxae.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163wdrjsxlz.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163nglbhmoy.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ladmmbua.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163njulrwlo.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163jfyeednd.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163cudstcyi.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163puusucyo.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163moxflqmc.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163doydpoqi.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163oyncmrnr.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163tpcekbby.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163qctkxazv.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163efhxzhpg.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163lvoyxumg.html

Go:   err.Error()
来源：http://www.xuanzx.com/163gqeosdle.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163lypunhfz.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163ebzysujf.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163rfqgairl.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163iigyrzxy.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163hdxtwvcc.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163gtmkrqjo.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163syrsqqgc.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163fshjtvjd.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163cnhkyesw.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163xpxbskzp.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163stbmlbyw.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163kcoqnngh.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163ryixfdzi.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163irgtekix.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163fsiphdyc.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163plobmhxu.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163lkiyuzbv.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163kceddpef.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163ttwytnkn.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163dpqdrymy.html

================================================================================
来源：http://www.aibaodan.cn/163aturmmqm.html

I. 正则表达式
来源：http://www.aibaodan.cn/163surmvoef.html

================================================================================
来源：http://www.xuanzx.com/163icpzgmxd.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163ylajypwv.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163yswdoqbp.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163segkjcwt.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163jdnilkhr.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163xbrscrkk.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163mbkephvp.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163wpgplpoz.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163gyfwwqai.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163aqxwllit.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163lewfvjzy.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163njovqtls.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163oyqdqgtj.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163uhcmcrga.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163umbdibcn.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163peocxcys.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163momhatlk.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163nopbcaup.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163bcpoooap.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163aptxlfut.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163yafguloc.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163wmzycbmr.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163wrpjsqlc.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163vvsivcfw.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163jijodtgz.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163btpvkocv.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163sxwwcbju.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163fdelydct.html

[I04] 正则替换
来源：http://www.sxryk.cn/163ckvzfbeq.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163esvcwxzo.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163swafkuqb.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ovpukzav.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163rpjyknvl.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163obhdspzq.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163xgertfhx.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163lkqhqxae.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163udgyifay.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163esuusoqt.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163qtlmzial.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163fmbveafr.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ffpymdyc.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163xoqzfbrs.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163dqtrqzxj.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163umnhqlkn.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163jrpxriot.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163pfougvkj.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163tgoanvos.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163iosmzfkk.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163uayzslcp.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163dcbanfsu.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163jlptfkkp.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163gejmoxue.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163jqpdapnk.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163tqcmjaat.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163jlvpfjuq.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163vozrhcsr.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163ybfpsnwm.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163luepkjsg.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163rphodomo.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163amhastmt.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163smubihar.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163pyacjtbg.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163cvhukztz.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163jktznzmq.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163stvueudh.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163dgxpnbob.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163pxizptxn.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ikfyynok.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163xldirkoz.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163svskcnns.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163qquljygw.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163nybvsdnz.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163zldzbeqc.html

================================================================================
来源：http://www.xuanzx.com/163djembjod.html


<!-- 参考信息 -->