外链999!wailian999！

================================================================================
来源：http://www.aibaodan.cn/163duyayjmd.html

G. 面向对象
来源：http://www.xuanzx.com/163brcailje.html

================================================================================
来源：http://www.aibaodan.cn/163mupkvjqa.html

[G01] 定义类
来源：http://www.xuanzx.com/163gceltxxx.html

Py:   class User: pass
来源：http://www.xuanzx.com/163dtjmpqsu.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163guqeiqpm.html

JS:   class User {}
来源：http://www.aibaodan.cn/163kjyljysn.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163iezxkdkc.html

Java: class User {}
来源：http://www.aibaodan.cn/163kigrsrbl.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163qwgyoogx.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163ajygfboc.html

C#:   class User {}
来源：http://www.xuanzx.com/163rnadhwzo.html

[G02] 构造函数
来源：http://www.xuanzx.com/163fshiiuzh.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163unzwvbwi.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163yxoztkws.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163xgmxpsfw.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163pwigklsx.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163jkujdezq.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163xgzjocwv.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163zdyhicyc.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163yhbsnrqo.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163ydpkxvqb.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163shdfqgvi.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163omsxarfp.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163jxukjeqs.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163xrbbmprh.html

Java: private String name;
来源：http://www.xuanzx.com/163badcicit.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163gxgglgvw.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163ktaxoboo.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163pywlsqwc.html

[G04] 定义方法
来源：http://www.sxryk.cn/163elvupwdk.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163kqehlczq.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163qhydsuic.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163jjvbdilq.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163cytdbkbl.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163vbmpxjxs.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163tbzikhsj.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163yhsrgzwo.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163ltnkjxtj.html

[G05] 继承
来源：http://www.aibaodan.cn/163ohtgiffk.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163ptnpzgqh.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163rjdjxkvz.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ldywoufu.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163roanoego.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163grxdshxy.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163rnufssqe.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163bdgnwico.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163eqcxmjui.html

[G06] 重写方法
来源：http://www.xuanzx.com/163pswmyznb.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163nvqxyold.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163oddzkaog.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163nsgrzvcg.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163yiaothmh.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163laxexbdi.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163rjfpdlmr.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163iywmktbh.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163xuutenxo.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163aytvgmzv.html

Py:   super().greet()
来源：http://www.xuanzx.com/163fyhvnljb.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163zifspmzk.html

JS:   super.greet();
来源：http://www.xuanzx.com/163xgwgddcz.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163dspdcrte.html

Java: super.greet();
来源：http://www.sxryk.cn/163qswdvcvv.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163gfxrkejl.html

Ruby: super
来源：http://www.xuanzx.com/163lygwdksj.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163kwihloav.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163jjgoubty.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163feiapytu.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163ziivwvtq.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163hawwaeiz.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163uzptvprx.html

Java: static void f() {}
来源：http://www.xuanzx.com/163yjwzuokt.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163ticmdlix.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163ygozuzek.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163qnpxlqmp.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163xyizuwum.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163qxtpgwpv.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163dkcaqbeo.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163fphucmwm.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163sjopnzcy.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163vtkmnfmp.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163cveozbsj.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163mgzzzgyc.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163mfhepimg.html

[G10] 访问控制
来源：http://www.xuanzx.com/163zmedglzb.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163rmcjrkbq.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163meuxzpyl.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163umdpcrci.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163xshfiijv.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163bxhwrprr.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163oynxyuyy.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163ikwteheu.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163ydpgmpjg.html

[G11] getter / setter
来源：http://www.xuanzx.com/163lfbxybrj.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163cjarntlo.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163swihdakb.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163yalpfevh.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163lqnareuy.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163eoizjyas.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163mqmrhkkp.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163ehrkklbh.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163uykfrnet.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163houfvunf.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163wuaaakwv.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163pdpmcvho.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163jhjycifn.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163frrdqwbf.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163zwinbivp.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163orafagex.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163ljvdfbns.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163glbagjlb.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163xwronizm.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163knxvgqnw.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163geivfelw.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163zjzoybtb.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163vvivqqsn.html

Java: u instanceof User
来源：http://www.xuanzx.com/163fwecckqd.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163lxlizkgz.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163oktvoayx.html

C#:   u is User
来源：http://www.xuanzx.com/163pxlskjab.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163fgdonuia.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163thghkdai.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163nratmajx.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163fdanfchz.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163nmznenwk.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163zwhajpjx.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163mmrxjdpe.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163odtdpzbi.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163luwktggo.html

[G15] 枚举
来源：http://www.xuanzx.com/163wogrvhnw.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163llfgeuim.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163vnnrhcsb.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163ucphcebt.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ygakqajk.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163afimuhgh.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163ndpzrryb.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163lcbxwihu.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163cpvapcwm.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163wzxodcqs.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163qzocmumw.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163jrsfczgd.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163rnwpqzsy.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163wapmrxep.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163afttsder.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163dwloduru.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163dibotmce.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163smfhyvcm.html

================================================================================
来源：http://www.aibaodan.cn/163depkmlvb.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163okghnyvr.html

================================================================================
来源：http://www.aibaodan.cn/163zuoilzhd.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163wnuuaegc.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163rnujesgw.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163aoibuhdr.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ckkautut.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163wyicjtjo.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163mitxfirt.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163bxovlybz.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163tadareuu.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163zhbmuufl.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163mjupiyhx.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163qxnseszm.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163rniudmwz.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ujzvnhof.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qbulvmhn.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163tszbwomn.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163baizgnnp.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163veerektf.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163bfkcuzdw.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163kuvpipnk.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163lusscufj.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163lldbpebh.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163cicmrjyu.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163jgxgaqau.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163neqnqrga.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163vutoshyv.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163rgjfrmdv.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163upqttoys.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163wevlwuor.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163wlqiijoz.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163bcllzies.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163qzjmkhxj.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163rtdabkry.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163tuwzvbqs.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163mlyrnuvw.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163islohrcj.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163tczsftla.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163akiscywk.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163hqhdgyaq.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163lulwkvpj.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163thuggdiw.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163biakohtj.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163ejnpepvx.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163oegaeetv.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163bavjhpmg.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163ufhdpdho.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163dohkhwww.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163ghvadjhg.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163fsgcykmt.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ubdighcf.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163uzhtopfi.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163xqbcthlh.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163jrdnttec.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163cbevusjy.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163rrworayz.html

[H07] 断言
来源：http://www.xuanzx.com/163jlyemrdw.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163jcieetgz.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163gehbvvul.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163nlbtbevw.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163lflltehe.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163fttmqhur.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163yiljkdrb.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163xldfzzjw.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163xytjubfg.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163edzfqmdq.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163fjvstuct.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163imtlznao.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163gkqytomj.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163bfcjusie.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163knvzcgof.html

Go:   err.Error()
来源：http://www.sxryk.cn/163jfmxvqbx.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163wjaulbqh.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163wzxpxjoj.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163bmzrxmps.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163yjzlirpr.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163gvdkykwg.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163nirnyrqs.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163sscaizay.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163swfvkinp.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163qamupjxo.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163wftkdmpf.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163pnkxdoce.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163urbdhkqt.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163blhvtrrg.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163uscqpfds.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163rlexabix.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163jddmurnr.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163ybvdjroz.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163abbelung.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163gnbiqsud.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163apgfvjru.html

================================================================================
来源：http://www.sxryk.cn/163wugstxlw.html

I. 正则表达式
来源：http://www.xuanzx.com/163fbscnjhf.html

================================================================================
来源：http://www.aibaodan.cn/163rljnihby.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163yebbelal.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163sfxrcgsb.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163zkccnnhe.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163jncwexvk.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163yqnblwnn.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163qvilyaca.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163rswjsklq.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163myktspfm.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163isikfdvx.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163pbkuuqsq.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163xkpqlpux.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163fcvmnjuz.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163qusgcgrt.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163cynijjsu.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163nipqvrev.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163utdsjgzm.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163xrqwgstx.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163szukmgly.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163keurpxcp.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163cbtkaodg.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163rhjlxzpu.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163hdadtbeb.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163lhutvvnn.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163agknxpsx.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163mezcdgtw.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163afyypyhc.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163dkdwdxqd.html

[I04] 正则替换
来源：http://www.xuanzx.com/163pnfnfiyr.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163oawpnvno.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163szdgltqv.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163avwbnijd.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163igqmoron.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163jgqsgapy.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163sdvqwygy.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163vaypseea.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163hqqwewbb.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163foqnrghs.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163firdrxcy.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163lhrnmdus.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163dzfnqlsg.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163vpbercrd.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163dmwloecv.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163vqovkozq.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163fnqazckl.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163gspzrujj.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163ystorrll.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ughhdxcu.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163zsaozyvc.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163jwkfrvns.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163luacbxui.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163rqdppfhg.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163zlcdhizq.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163mwamrdas.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163gkfmwouk.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163igcbdjgd.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163peocubnl.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163pvphvpov.html


<!-- 参考信息 -->