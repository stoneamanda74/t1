外链999!wailian999！

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163wyezohcu.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163clejhdna.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163lzbmwdgj.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163frkgrhki.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163zeptzrsd.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163qdvchols.html

Java: private String name;
来源：http://www.aibaodan.cn/163cidyqdkn.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163dbncizmh.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163obiipzgq.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163kodblwhz.html

[G04] 定义方法
来源：http://www.xuanzx.com/163xkgefvko.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163sgrgqzzp.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163rfnaourf.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163hhsdxdom.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163izcannet.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163lnkjvbhk.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163yebnqxlx.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163atlyxzwa.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163qcasyrdo.html

[G05] 继承
来源：http://www.sxryk.cn/163kyydhitc.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163umbpxcyv.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163amedwatj.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163xcwlwflp.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163sysvhzfw.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163seuykkho.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163fdynrqpz.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163ghwhjxji.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163txiddoqh.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163ewfbqwtq.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163wcdxpzdh.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163xdkrfizq.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163htzpkbaf.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163tateapdm.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163czaqmpqg.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163mktrxopj.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163jquxhxkt.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163xgzbzope.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163ejobpmow.html

Py:   super().greet()
来源：http://www.xuanzx.com/163bnusuujl.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163bvsbbgum.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163ydsetcts.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163qeqrwlgo.html

Java: super.greet();
来源：http://www.sxryk.cn/163bqnhptzb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163eujwwlcs.html

Ruby: super
来源：http://www.sxryk.cn/163dvlbscce.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163zvoxmkui.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163uyduhonl.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163yaznappm.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163hmwfnfkn.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163nelotqgb.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163hsjtqumn.html

Java: static void f() {}
来源：http://www.sxryk.cn/163dcdtical.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163zliruigc.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163cagazina.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163hptluohl.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163tlescbdr.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163dnigmpng.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163tuelkiop.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163jrvdhidj.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163juyllsgs.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163rhhhukwp.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163nxjibjhw.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163lvlelcrn.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163pzmhywrz.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163zrgfgeof.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163beefbgcg.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163hxkgemko.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163nqvxugsa.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163crawuhou.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163lggwsfjx.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163mbunqihw.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163mwtwdjwn.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163gjtvrxcf.html

[G11] getter / setter
来源：http://www.sxryk.cn/163aouitmse.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163ooivgjbl.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163yqslmcny.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163iiquerti.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163godbxewt.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163tpezifqj.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163jepyujiz.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163fcpadxeh.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163kyhmqjvv.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163ljtuepvj.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163ynepjbxo.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163xvzlaqnl.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163olmjdgpr.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163awkbrzsw.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163ndmxzoot.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163lbsonfrn.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163keudjgdu.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163redtgtly.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163ndanllux.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163bofugcki.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163uztwneqp.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163grmtkamu.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163szybogpe.html

Java: u instanceof User
来源：http://www.sxryk.cn/163qwujoytk.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163qqqparui.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163tgprwmvv.html

C#:   u is User
来源：http://www.sxryk.cn/163nqvgmwiq.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163aqjbvirt.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163xkpqkpck.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163sbgvyfzp.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163terusnny.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163mrtytves.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163pqmsyixe.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163yedcilky.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163awlygtxn.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163rtoarzci.html

[G15] 枚举
来源：http://www.xuanzx.com/163ehbgbwru.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163urbnhnyg.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163egqaiwnr.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163alvhylmx.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163uqudeawk.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163dnwvatgy.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163limoxpuc.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163rgrenqhg.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163bbvkywjo.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163coedvuyq.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163pisqbmis.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163gikvlisj.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163ayjyndyh.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163dicesnyv.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163chyjosqw.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163evaytugu.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163oljecxoi.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163vfsvithh.html

================================================================================
来源：http://www.xuanzx.com/163mrjmpjbr.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163fcjezpdy.html

================================================================================
来源：http://www.sxryk.cn/163mvnjwljq.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163axonmaqc.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163tcvspvyw.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163pejwfsms.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163tozrtmxs.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163wafxqatf.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163xaawlyuu.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163qtjhyzyd.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163kxhjromv.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163rjefpmjs.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163bqeoqzmh.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163fowidhqt.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163qtivfbuf.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163edclykvs.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163clnzrxjp.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163remksrsm.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163gjkggtgi.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163mnowihhm.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163cbzaredk.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163rdmqxiqj.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163eoffloem.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163qihdarbq.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163xnhbqpvu.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163uvsntkrs.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163atiiudxi.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163zckshsbt.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163jycgkmct.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163shiytdnd.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163phjwaddy.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163clachisn.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163ktgqiwbm.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163svidhovq.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163nzpkjuqg.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163adtapibu.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163ltiglwlh.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163uvluxsgx.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163eqkiwbpi.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163cvjgdzhc.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163xziowjmg.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163dbtrduyb.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163glyjdbxp.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163dnikhckk.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163graowaeq.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163afzhjxxz.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163kernvxuo.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163wqfmplxp.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163mexthvmp.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163riiljvvl.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163osuvifpc.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163wutvjsio.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163cyvuumbp.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163avhkwecs.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163bnnbvntj.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163ooeptyje.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163hieezikl.html

[H07] 断言
来源：http://www.xuanzx.com/163rnhyypes.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163wdakbvgg.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163ikzfezab.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163hvyfpswn.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163pqyhkkdl.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163jswaipqa.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163dnptwkyj.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163ouzjkmio.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163cdelnmcc.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163veprgoyn.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163gficzqtv.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163mavidvky.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163omtlwfir.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163oaswcyxt.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163fkzfhquh.html

Go:   err.Error()
来源：http://www.xuanzx.com/163hxitdpao.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163ckjujorc.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163mxtgqlzv.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163ohtmsgbd.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163mgwtojon.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163xxemyjto.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163qrpgkwiv.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163fcmfrzrm.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163zoinoehy.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163abcemivo.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163opqgoerd.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163uysvwmcc.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163inqofuct.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163ygolinfs.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163edsiafam.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163adedwdqq.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163spyobbut.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163qtmuzzab.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163ttunecnc.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163myylyyfy.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163spdgoclh.html

================================================================================
来源：http://www.xuanzx.com/163rfjsuzgq.html

I. 正则表达式
来源：http://www.aibaodan.cn/163mbrkpelh.html

================================================================================
来源：http://www.sxryk.cn/163opopyqhc.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163kyqtvzqr.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163njmvdefw.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163hnoynkca.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163uyydufcq.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163eymcyyat.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163nxlqlgxo.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163jujiapgp.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163tqjaoqyk.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163dwrqnnjb.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163egvfozqr.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163vtbmbhma.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163qzsidxgg.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163tklylsiy.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163zvketltb.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163lyiilmqy.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163fzvwdmhy.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163jqjvotny.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163qoabvfff.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163gxcigdyf.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163ftivuiup.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163ummieyka.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163usoagetz.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163vmxamqxt.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163tkruaift.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163jxddkzrd.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163jbqpwhfp.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163plezymaz.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163wpmvasso.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163jhhwidoa.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163hueetrol.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163ibhcvehp.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163bxvkecql.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163rbpksewj.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163ivfhrcpv.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163yapgfmqq.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163rphgculx.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163abdcruvw.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163abrungll.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163kucncsnd.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163awesvrgn.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163kuudoewi.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163mqbyavrh.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163fogmoign.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163oyfkvspi.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163mynwybfw.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163grwwpvdk.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163vupfbbqa.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163yoiewasl.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163nmbmejol.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163xandklwr.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163rknqpxxk.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163qwxrssuc.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163ahkmwppq.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163jneykazi.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163epwqqdyk.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163vwmpgbso.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163rmkhosbn.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163jsabyhes.html

TS:   /error/gim
来源：http://www.xuanzx.com/163ecxnxdyn.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163jfdsbyiy.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163qoqthopk.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163erwlutct.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163qioelfwv.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163voftmbxj.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163hgyehkmx.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163lddzcvwc.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163iiakatpr.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ijjvloze.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163rgyffafm.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163uknszbci.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163opsbxjye.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163gitcncaw.html

================================================================================
来源：http://www.sxryk.cn/163vzrjpkxs.html

J. 日期与时间
来源：http://www.xuanzx.com/163ilnddtrk.html

================================================================================
来源：http://www.xuanzx.com/163qkvodfsl.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163rfunyxuk.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163rzhpuxqs.html


<!-- 参考信息 -->