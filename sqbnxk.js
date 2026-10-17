外链999!wailian999！

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163gavntwgb.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163llrpdotv.html

[G04] 定义方法
来源：http://www.xuanzx.com/163tdihxmge.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163gqizascf.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163ktwndxrz.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163xfohptfk.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163vvlbckud.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163opvmeenn.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163xtjgukxk.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163ohtefess.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163dcgykokg.html

[G05] 继承
来源：http://www.sxryk.cn/163ifverqjr.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163krybaueh.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163vcgsszhx.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163jsuyefvy.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163xfkhxdvv.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163avcfqtou.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163yzwpfpka.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163szhlgrbv.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163hjyhfycp.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163xzvqaamr.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163siogjqlc.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163vliuxrjt.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163oitiuntu.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163llnjxpjw.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163vqbpgaqy.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163knjyfrrq.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163vbaehxer.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163ampllshz.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163hhymdqtu.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163euazuptd.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163hmvpykfg.html

JS:   super.greet();
来源：http://www.xuanzx.com/163vubjdepn.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163jixbrvec.html

Java: super.greet();
来源：http://www.aibaodan.cn/163tdjevmcm.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163cyqgqdhb.html

Ruby: super
来源：http://www.sxryk.cn/163fmuwmbza.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163jezmpfzs.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163wegikrxv.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163qpswwmmo.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163edsjweew.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163lmsxyaib.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163zpdjxjhm.html

Java: static void f() {}
来源：http://www.sxryk.cn/163rjqiyebm.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163xmkskoww.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163bxewsjjf.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163dgncfwcc.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163ozenuljs.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163dxiwtmba.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163jkbbjuyb.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163ruxsiuie.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163vjncqrwg.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163aieyvxyp.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163hqlkfyrk.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163qrhcwavs.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163vngtoufg.html

[G10] 访问控制
来源：http://www.sxryk.cn/163jhtpzjwy.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163pbwmlvqw.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163pfhfhhtm.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163nqajuzku.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163yruxvglr.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163sqfsmyvh.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163tlxrvjvi.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163amruvqgu.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163bywugrik.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163bozcqppw.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163uhpehibq.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163rztbqknq.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163ylbqxkuc.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163pjcwbsqe.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163zzgetiyt.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163ujgorseh.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163hqdmxtaz.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163zxcmxiej.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163ubajppyd.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163wljahict.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163nlemmyeo.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163ugeecqpi.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163ausddeay.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163zkzofbah.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163cvqgxrfi.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163ditcundi.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163hmbfagfx.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163tnnasrnx.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163qmxsdvfw.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163notptyxi.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163qhykqdyj.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163oqhihuox.html

Java: u instanceof User
来源：http://www.xuanzx.com/163wiofpsuh.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163ovceoylk.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163pyqywyoq.html

C#:   u is User
来源：http://www.sxryk.cn/163hdzhjqvd.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163oyehxnch.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163phyltfmm.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163nzakqgau.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163nhbxwiev.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163vferqudj.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163wuwnvril.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163cqfjvmgx.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163abqnigjt.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163erslvayy.html

[G15] 枚举
来源：http://www.xuanzx.com/163woahgvxr.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163fvdskuyr.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163httxqnpp.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163reorszqg.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163nfcnceuz.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163dcqjfcai.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163nicrlbaf.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163ixxxgpph.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163xyyfpcmn.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163uqmjqyzo.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163zlfofpci.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163wsajmsro.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163anyhidjs.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163jeeleibp.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163ifalfemz.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163bazvmssu.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163gggvjyhw.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163jbzvdmpl.html

================================================================================
来源：http://www.sxryk.cn/163kgxacsgm.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163kdjcvwhn.html

================================================================================
来源：http://www.sxryk.cn/163yzyzeyzs.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163jmagwypi.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163rwtyxdhv.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163mxxcqpna.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163eqynnjsq.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163oaucjcux.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163dsceyyda.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163vodhrgdv.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163bhpramtn.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163screcify.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163awcnwjra.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163afygiviz.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ybvocgar.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163miirejic.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163vxworvwl.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163eodadqyu.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163lgsrnpat.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163eyqvotbn.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163twftbaat.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163zbfnymvt.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163rrwevtmu.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163fbaheofv.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163dcmqqdvy.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163sgxfhxtn.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163zwmydwkx.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163zqyygpjg.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163jrhrlbpy.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163qybwuqbk.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163tqgiyjhh.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163fqgifvoi.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163usikyvbt.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163bidfrqmx.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163jjytfslq.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163koiqjtbq.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163jdnetbsx.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163pqbueevy.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163xofhvphe.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163yudkynta.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163blalfwiq.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163bngiuxxx.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163meumspue.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163uebhtggk.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163ovayvyml.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163leozmxwt.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163dflmcuwg.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163iynpkzgf.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163recziwox.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163bnwwvwqu.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163zyfdssce.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163evlblufk.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163totnneli.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163nrawcvua.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163rwcpaskj.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163tnvmjllk.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163gnmlfbmz.html

[H07] 断言
来源：http://www.sxryk.cn/163iwmxgwwx.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163qcxeyadj.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163ekrmssda.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ibnbsjdv.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163pksipimb.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163rafxeoao.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163drgeheij.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163mclfttvz.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163sqxsjuam.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163avldaljr.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163bbhkvnqq.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163exnlptbn.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163hgsvhvdl.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163auneikrq.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163qxwejipq.html

Go:   err.Error()
来源：http://www.sxryk.cn/163qpgrnfzm.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163dqvxsaie.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163scoafqvr.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163suftdanv.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163kcuusrbp.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163mtgnobop.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163anekfumo.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163qjuizsco.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163ojtkqgjx.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163zotylkml.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163uirqusih.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163cvybalyz.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163oyaclfak.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163xbepdwct.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163buujhxph.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163cmphqqus.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163omhlgyod.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163wxnjypdx.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163pbqgpvhp.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163hswucdiz.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163fzeoxrjh.html

================================================================================
来源：http://www.aibaodan.cn/163nlkswheu.html

I. 正则表达式
来源：http://www.aibaodan.cn/163pxwdtztc.html

================================================================================
来源：http://www.xuanzx.com/163rulmkffp.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163jqrbbkal.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163gqajmkcb.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163xqwnyppl.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ovqqxbyv.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163iqtjlykv.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163xwfvntkt.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163ukfamblc.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163fazzkohx.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163ropwttho.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163jtspbhao.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163nxezqxew.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163ubwcbwhr.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163vpupyaoh.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163yzxsiowt.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163snemujhs.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163khjsbcvw.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163bmijzbcc.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163fgzfezbn.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163patxybxq.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163rnhtggbf.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163qrobnwbx.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163ndbsrayr.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163wvelrnxe.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163cjbzrqny.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163nvjhekog.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163acusklhs.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163fufzlurf.html

[I04] 正则替换
来源：http://www.sxryk.cn/163epflozix.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163eiytfbwc.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ibyrrqps.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163kntdtbyy.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163yfvtwjpr.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163hshqregw.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163rbwkokqi.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163erbdlwaf.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163mkiohicw.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163recduztu.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163zowlnqjh.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163fongzgvw.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163xhslohew.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163whvkopmx.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163wjszqfof.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163xcazyuaa.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163cidclbxn.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163smsskkyw.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163wvwtohwy.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163cobcqnqn.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163dqalcveq.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163xqgtgvcd.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ovwykfph.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163delhhqhz.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163vhoumywc.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163tpraxuib.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163vxgpfsbc.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163vdfxfiwc.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163ubinlqhm.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163htnjmywi.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163lqthmijb.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163cafpiptm.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163dhzekoih.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163snbfvcsf.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163dhttfddn.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163kbsejymr.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163hignhlki.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163oaqrcvad.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163wpzhxjyn.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163uspmahkq.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163hpghknmc.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163sguzmijb.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163odoextrv.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163udtlxeso.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163kkoeewvw.html

================================================================================
来源：http://www.sxryk.cn/163xugyxpap.html

J. 日期与时间
来源：http://www.sxryk.cn/163sgmkvzgn.html

================================================================================
来源：http://www.xuanzx.com/163gkhttuez.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163crfvconv.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163hmorobel.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163dcozubky.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163gwbtgpvi.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163muhwtzdv.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163xmuxddyk.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163onnqvdnx.html

Ruby: Time.now
来源：http://www.xuanzx.com/163fjcvdmuo.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163ogphllzu.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163seowzqkc.html


<!-- 参考信息 -->