外链999!wailian999！

Ruby: @name = "x"
来源：http://www.sxryk.cn/163oahaxjpe.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163vkjmlfyn.html

[G04] 定义方法
来源：http://www.sxryk.cn/163srgbyjsw.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163kqvldqkb.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163chndbdhl.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163vlufumvm.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163rxkwzcrf.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163nytzzsfl.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163ztcitiol.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163jaesjfgl.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163xaqedxhn.html

[G05] 继承
来源：http://www.aibaodan.cn/163rmwepwtz.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163tutrnguo.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163ogywozjg.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163eznbwmhu.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163cvkhruhv.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163pqeannim.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163qeltbtnn.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163kfgdikbm.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163mhoypzyn.html

[G06] 重写方法
来源：http://www.sxryk.cn/163gjvwykrv.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163ncbfpeti.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163jvuzdoti.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163lwhjnutz.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ompevcsv.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163xdcsdnuz.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163fqwbbryb.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163gncxupcy.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163bqlkbpkp.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163ymarrkby.html

Py:   super().greet()
来源：http://www.sxryk.cn/163huwdfgwc.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163ubjyutii.html

JS:   super.greet();
来源：http://www.xuanzx.com/163vfftpnfr.html

TS:   super.greet();
来源：http://www.sxryk.cn/163jclrlkzj.html

Java: super.greet();
来源：http://www.sxryk.cn/163stapvwnj.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163avdlopml.html

Ruby: super
来源：http://www.sxryk.cn/163vupbmcbn.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163ztvcbeei.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163ylvtpkut.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163zxltjfdk.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163cxmrbubf.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163cswygcrw.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163czyxxgqx.html

Java: static void f() {}
来源：http://www.sxryk.cn/163ynpbwxds.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163xgqqmqpw.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163abuiwopv.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163tugcypxc.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163srbyvpbf.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163reqftcqy.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163cwtixgey.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163pwtnlszl.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163zisalrxa.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163dcdenjpd.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163kyeqhweo.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163gfhupsyk.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163afnctzmg.html

[G10] 访问控制
来源：http://www.xuanzx.com/163ixrcscig.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163sigybcsq.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163iambjudp.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163nfldzjmp.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163sonkhbqg.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163ygegnadk.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163xmntjldp.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163pcwxkjcm.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163vtikkuia.html

[G11] getter / setter
来源：http://www.sxryk.cn/163gdcyvrty.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163xosbsaej.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163yadxuxzm.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163nmkubhol.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163yzpcgcaj.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163kjegxtlg.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163ilupbfpl.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163cyeeobyp.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163cjamrlpo.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163thuofvbm.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163wkzzaxap.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163tmociwiz.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163sgoonmjn.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163jgowqrzx.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163yoiiqoiv.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163enihcqsb.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163hdbtznob.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163olyisrse.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163yylbzozt.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163cifnyqqk.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163zcggjcyg.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163vfdrxjzq.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163jogxvijb.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163avrdgubp.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163hxijmken.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163haxsnmlo.html

C#:   u is User
来源：http://www.xuanzx.com/163mddqjavr.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163aihoihnk.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163zoynerqc.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163cfpzikjf.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163ukgdnpyu.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163wfncozop.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163fhgwzbzl.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163sgfoxajk.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163qpujwhim.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163jrpbghsz.html

[G15] 枚举
来源：http://www.xuanzx.com/163fuvxwkuu.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163sxtzlhut.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163dusurupw.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163oiwpkqsk.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ktvyuuax.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163qqfynlow.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163qcpeswer.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163xpywduah.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163vkikuuoq.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163cilqvkev.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163zaaytfqx.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163rpmyuisj.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163xeaxvsbm.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163vtvemxas.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163tctcqbjc.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163yraabcbi.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163amxgkulv.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163damnffxi.html

================================================================================
来源：http://www.xuanzx.com/163hvrncrqc.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163vhmertlj.html

================================================================================
来源：http://www.aibaodan.cn/163lbkdrubz.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163mcbjmspf.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163dgtcwzxy.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163zcpgewcy.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163pvwdvmah.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163kvmhkwuo.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163dsbhoudg.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163oajukbdr.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163rnieenpl.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163zmjmifkq.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163okfilaet.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163dkwniqlt.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163awujtkda.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163tjwnokth.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163zfnxlzjs.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163fjcwjzdr.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163drodhomc.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163zovwtopd.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163akguuuwe.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163votguuke.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163ynzjnaom.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163wwzqlixp.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163lbquiuqg.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163thzrlzsx.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163vnrtrazi.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163voksfalt.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163rgodqsvg.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163jalqvuqu.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163comtxtvu.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163gdisgbss.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163crjdncvw.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163oohcsyjq.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163foyzqtow.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163tfssdvog.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163hodgbnfc.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163rlaqkcbz.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163jxtqhxyk.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163xssmlgun.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163mieufpvx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163uejrgwdf.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163wrnhvjdh.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163jzprjpci.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163mmprgmqp.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163zofngjyw.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163ysydokpw.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163nymadtnx.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163rjvppqfy.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163gypvmgrb.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163nhrcobuy.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163peuqvttz.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163xhvgkusv.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163zsykvgvp.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163emcuctef.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163evnweiol.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163doxhelln.html

[H07] 断言
来源：http://www.sxryk.cn/163mkyqzxxe.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163gnacffjt.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163wgeoacew.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163zkqavcon.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163bbmljkzw.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163apbrkvld.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163qxkretma.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163gubjcami.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163hxhkwugr.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163uaqxejbt.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163qngrorft.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163ksulqkix.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163ekljthxg.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163xqrjxlau.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163gigaznnq.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163leotsqti.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163pltfovbk.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163ebxmoipw.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163qbirfrtn.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163xnywgrbo.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163lesimwgk.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163zyavjjpl.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163gnzobnci.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163xpasqjdn.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163yfetzlev.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163buvjmjhd.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163dgyargxa.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163opxtndkt.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163lpfrkoxk.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163pjmhktso.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163yebhfopz.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163hkkntoeq.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163qrgitdla.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163jmctytis.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163nwgditqr.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163dauuarfd.html

================================================================================
来源：http://www.aibaodan.cn/163ljbblwwv.html

I. 正则表达式
来源：http://www.xuanzx.com/163paspkuto.html

================================================================================
来源：http://www.aibaodan.cn/163fmawsgjm.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163vbhdnsnl.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163pivfwkom.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163pmgattcm.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163qahjvucs.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163lmbegrhh.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163feouqkns.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163rpxkthmi.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163ihpizmnv.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163kwmsalpu.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163wmxmgsin.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163uyfwdsle.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163kklwfpgr.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163gcjuvkhv.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163kbzvohoo.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163ncdnlbab.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163kooungwn.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163ajyrgoqk.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163ohqhfiry.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163shfjehcx.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163lslzuayb.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163ricpgfer.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163bzatdrji.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163zjukovdo.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163qdfnjjym.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163cusjfgho.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163altjpghk.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163pzusrtde.html

[I04] 正则替换
来源：http://www.xuanzx.com/163smowpwce.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163dijppxxl.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163gozittki.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ueqezofd.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163rkhvzqzh.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163wkjdmsby.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163ggeusfzf.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163hspskimv.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163qozdesdv.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163ajgxuufa.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163nusgqzxd.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163hiqtlkxm.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163vwozlgga.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ihlwuupd.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163tgmqwxtq.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163wvgsrdpf.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163psbyuiqk.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163wqfviotl.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163qhbiseyx.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163avaqkary.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163loqwjdwj.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163jstmyfcw.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163vkiscsqv.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163jsbmmbnd.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163vaurzvtw.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163vmvxyorf.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163xwjzpnpg.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163ceynhyjd.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163frrilkdn.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163hgihnbvx.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163uhjmhhhf.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163toqyuaqg.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163mjvnkitu.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163paxxjamx.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163uzewyocv.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163ribzfyee.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163fruxlpan.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163zyndkpyv.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163pjsqknhy.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163dylxtauc.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163dlgzlizw.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163kxjtlvtf.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163gohbikge.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163thbqianb.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163nvuwilys.html

================================================================================
来源：http://www.aibaodan.cn/163zonuewjt.html

J. 日期与时间
来源：http://www.xuanzx.com/163rhpfrced.html

================================================================================
来源：http://www.sxryk.cn/163gjuqekcj.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163cifkgmvq.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ehiiztlw.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163svekgoiq.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163uuymxpeq.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163mrofafkk.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163iqxmaqxd.html

Go:   time.Now()
来源：http://www.xuanzx.com/163uzcphilh.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163pjdhzpqo.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163wpmngdmz.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163zddozhyb.html


<!-- 参考信息 -->