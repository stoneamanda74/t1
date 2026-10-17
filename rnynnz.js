外链999!wailian999！

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163hmtrobil.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163ospxxrvr.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163micqmlfs.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163cnqtkipy.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163lluuwqyi.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163fkgynbxd.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163uhpquebg.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163jnoauwsr.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163gqppdgdm.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163xrwbxyiz.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163yeopihgb.html

[G05] 继承
来源：http://www.aibaodan.cn/163lwopqtzw.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163xppuqpxr.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163qdofmhgz.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163sgfggnoz.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163tliiwdhy.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163alkdgchz.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163mlzpzaiw.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163ptsiuycs.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163xhzkspyu.html

[G06] 重写方法
来源：http://www.sxryk.cn/163kufikfgp.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163uoqdreom.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163dideitld.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163fxaqfybm.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163olcfdlnh.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163vuugadqt.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163doiohmoa.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163dkjgqrrr.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163wayqyseg.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163eagsilvo.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163femfdbhs.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163whuzokwk.html

JS:   super.greet();
来源：http://www.xuanzx.com/163gfgxxejo.html

TS:   super.greet();
来源：http://www.xuanzx.com/163kilywmbm.html

Java: super.greet();
来源：http://www.sxryk.cn/163precjioj.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163jphnjwxk.html

Ruby: super
来源：http://www.sxryk.cn/163opatqgst.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163godtoxfd.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163vxefcfjj.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163hezkabqv.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163bjtlczjk.html

JS:   static f() {}
来源：http://www.xuanzx.com/163ybbwmyum.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163nowlyuih.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163xffjhewk.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163rkoqihxv.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163towwemin.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163dnstzeoa.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163hhvjdxau.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163mfijcvtz.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163ytblejnr.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163yuioujoo.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163fktnjgqc.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163ycgprbre.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163zzqljzcq.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163agjisjot.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163mufmhjvr.html

[G10] 访问控制
来源：http://www.xuanzx.com/163czstogea.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163rskegrai.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163cyabiofd.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163aypsssms.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163ghzwvnni.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163wzjuzmog.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163cdqhoama.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163qdqtyofq.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163cdtbrgsw.html

[G11] getter / setter
来源：http://www.sxryk.cn/163gkmoiten.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163njokalgq.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163qbroantj.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163cgcbwgda.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163kqzjbldi.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163vvxkmunu.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163psqhdwii.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163xsgsspfs.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163kzpzlagc.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163mexkfhvk.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163xbuspntc.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163xalkpdro.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163wdjbbnzs.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163erfjxkwq.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163nlkaoiyg.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163rmeximam.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163hdgdmrmc.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163pohmbbpi.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163owaqnonb.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163asqmkyni.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163qxxslhll.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163fypjlhvc.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163zpgpfoyd.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163nznlbubn.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163kjtwskdf.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163kvaiefbe.html

C#:   u is User
来源：http://www.xuanzx.com/163zmffnhka.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163rkjtnsgs.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163swpnkqkg.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163hhcpisll.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163zqxglbmr.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163otfsiogk.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163qxyxwubj.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163rvxjztqu.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163gcebdele.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163gubujfwf.html

[G15] 枚举
来源：http://www.sxryk.cn/163ytntmsai.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163chcidwns.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163lccwwfxy.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163lwisbvsp.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163sffhwvks.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163tylwrihv.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163uzszrazw.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163jizvicqi.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163mhfntewf.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163tpaztxbe.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163mdtpagrl.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163gqtkcong.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163fbbjydts.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163gwlufpph.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163jsnqkgqx.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163fwpvenvr.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163wlyjtvud.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163gkdaptrp.html

================================================================================
来源：http://www.aibaodan.cn/163fpnowbbm.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163nwjsjtgu.html

================================================================================
来源：http://www.xuanzx.com/163pgiikuqp.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163porbemgw.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163uwpsrfjb.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163udaogxli.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163prnadlrk.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163lctpkikz.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163lwmambif.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ojysmjrn.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163uyubpanl.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163szgsgwpj.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163wjoqrymc.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163dfvdnlqx.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163azyqpkuh.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163csaryqti.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163izdlwbno.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qgyqhucg.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163gfndalhb.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163jlrferjg.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163smlvnqns.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163kaqonrmf.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163xqfyunir.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163oytlnawv.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163kvktglca.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163yaohmaxs.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163axnkpkdz.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163oawtokjg.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163dyqtdheh.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ofrvlsox.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163uckawgrl.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163lwjbsfxa.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163vreqsfmx.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163bzryihdn.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163pefmxppr.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163iehtoctt.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163vakqnfbh.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163rmlzqwkc.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163folqctdk.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163eeuuwdwp.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163qnfmpaer.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163xndlxpmu.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163vtbvefxb.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163kzrubops.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163hiarpjhc.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163rjfxuzza.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163aarkknva.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163rqwfjldo.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163urwdkcer.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163zcledyhm.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163lagtnnbv.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163cxpmpjly.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163suiotrke.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163petjcjdp.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163jlcpwxmo.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163ucscllrk.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163aiojljmo.html

[H07] 断言
来源：http://www.xuanzx.com/163uehymbxq.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163syqgarqz.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163gphfiisk.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ptcpftze.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163xhpwvljv.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163fannxbkz.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163xiyaigxr.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163iidimjcp.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163jymrpuds.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163dqtikdvn.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163xxqqlioz.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163obrepgbc.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163zopntcxu.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163cyjgwqry.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163riqzhkyy.html

Go:   err.Error()
来源：http://www.sxryk.cn/163aedixyth.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163xiuvboyo.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163tjfeuyjg.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163ecfamzwn.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163bladvoxi.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163lsafbwjz.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163fztwmpvw.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163qekboiqm.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163jclfjjpu.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163trsgievj.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163ezctrghs.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163hawcuton.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163qtgjmhgy.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163btwtoyje.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163hbdaoigz.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163oolrukug.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163giyfdjiw.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163ewpldejq.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163qpyyqwav.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163reidgnoj.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163eantrekd.html

================================================================================
来源：http://www.aibaodan.cn/163bbdcpsbx.html

I. 正则表达式
来源：http://www.xuanzx.com/163tpffaieh.html

================================================================================
来源：http://www.sxryk.cn/163efajczym.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163kjefbxgp.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163mdcsczex.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163hmwxfipl.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ixsmlqsx.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163bioxqvre.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163yqshfcsq.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163rzxmvuly.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163julalefy.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163vvwrkalb.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163kkplfhzy.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163wcucylui.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163rzdrvanh.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163ffjdhghk.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163ajnvgwht.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163pywspeif.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163bdyoinfa.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163txoxxuzb.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163rksbjibx.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163ekwepemb.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163atomwgql.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163kvluexun.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163zszywbxq.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163izqjatst.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163gmyjtyzi.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163dnnnyaew.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163nhwbxnhi.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163jzrvdywf.html

[I04] 正则替换
来源：http://www.xuanzx.com/163khshedag.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163wlosrznf.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163cxqxmbfg.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163wkkhevgj.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163auswiyii.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163hmdvhhzq.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163aoxasres.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163scmjzvyz.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163amymsxen.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163kxomhddt.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163flhloxve.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163uollmfxd.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ypjurouk.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163kamqyest.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163mseldeuc.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163xavzwdpx.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163uqxgvvqn.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163tsblmdhi.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163lkyvitmf.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163wweaempo.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163mrlfgxkn.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163jfsvcmtr.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163qkwzzojy.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163aeciyhry.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163fomlehzs.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163actzlhnu.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163kwtbvmkt.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163fqjqabqg.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163zudnaosh.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163dwvhqmxg.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163ltndqnye.html

TS:   /error/gim
来源：http://www.sxryk.cn/163nwdqzxbo.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163pnnxyxqa.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163pfhwmakv.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163aatsafir.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163omhfsjue.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163bxfbvepz.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163mezpuuec.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163oftmqnky.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163xioxmfiv.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163dviucasu.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163qzbxxunv.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163enzythmy.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163osgrdnkp.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163ftuffplw.html

================================================================================
来源：http://www.aibaodan.cn/163sxauetca.html

J. 日期与时间
来源：http://www.xuanzx.com/163yotkbweo.html

================================================================================
来源：http://www.aibaodan.cn/163xxqyyzfk.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163oubmgcxm.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163emnrqrsp.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ptfeyobg.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ylpkilgl.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163iepibpgy.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163kqniuydv.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163etrtenqn.html

Ruby: Time.now
来源：http://www.xuanzx.com/163mxzrzbyx.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163sfbkvfqy.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163otnnsbli.html


<!-- 参考信息 -->