外链999!wailian999！

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163auxadmmd.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163rhnkdkyj.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163ghknyvnj.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163kvldkmao.html

[G06] 重写方法
来源：http://www.sxryk.cn/163gzxccmew.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163piabwinb.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ceurnsiu.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163eqfobyov.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163kbhxbscc.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163dkvwxgmu.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163qblgeyql.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163tvchewtg.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163kzpytwca.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163nrzjxkqx.html

Py:   super().greet()
来源：http://www.xuanzx.com/163exyhsxby.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163ypvxuabm.html

JS:   super.greet();
来源：http://www.xuanzx.com/163bbvpekcy.html

TS:   super.greet();
来源：http://www.xuanzx.com/163zqbhltjj.html

Java: super.greet();
来源：http://www.sxryk.cn/163tralqqby.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163ykucohmi.html

Ruby: super
来源：http://www.xuanzx.com/163otjsfbag.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163snqmeeyx.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163lljpwrnz.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163ayssjkao.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163smkalwyb.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163mmrcxgkf.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163hwwlwqur.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163rqcxowsv.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163cxrluhpy.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163yarqouzt.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163ltkxegnl.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163rmzfwvro.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163jctnzufa.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163fjyxxkum.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163hgieakkc.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163uhzffobt.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163fbbfdpbz.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163fjggosdj.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163lmtbztvy.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163tmniiykx.html

[G10] 访问控制
来源：http://www.xuanzx.com/163jzfmsatq.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163tocyoyfz.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163teglprsf.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163tyuwqyqg.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163vbxmpazt.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163jdmtkats.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163kkkudfju.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163bjoflavu.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163xlojrasd.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163cmwglhgi.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163tcheszrl.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163mzaeldjw.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163fryfbyvr.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163sososnhq.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163bmidhnhv.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163aztrckog.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163uaeqztwe.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163egmvblys.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163xhrgyxru.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163dnrjhoxt.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163gwfyzerj.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163tdzjhkvo.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163uhmukdqh.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163djtqmzzr.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163dyfanibt.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163itkqsctu.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163luesdfmk.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163ophqdnlj.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163cphwuokg.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163zfldlbib.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163ifoymgam.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163rvcyokci.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163fkcctyrm.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163vuhgxpfy.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163mzlcpluo.html

C#:   u is User
来源：http://www.sxryk.cn/163dnbmobwd.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163ifjbjsev.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163fbpuibwb.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163dtrpimxa.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163nmbbcpbz.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163qmejxush.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163ndxsclfs.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163aeyvyref.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163ffubnqhw.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163jyofrmyk.html

[G15] 枚举
来源：http://www.xuanzx.com/163btznlyzl.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163myczunbm.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163ofzuuett.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163avrpaern.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ihiuhqif.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163jtfjcwqo.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163wvtvuwnw.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163bvnmmhiq.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163pxhmbxvo.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163siclateu.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163qjpcguun.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ygdpiqah.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163tlfufgol.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163fqdapykz.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163wlrgnmfw.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163pivucfzj.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163ixbzbttn.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163wyxymadp.html

================================================================================
来源：http://www.aibaodan.cn/163xujplprw.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163jrdjefrg.html

================================================================================
来源：http://www.aibaodan.cn/163agfdqbqt.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163bnfmiwgc.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163dciiimfc.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163sjajllmt.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163vjpabjgv.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163ksraddha.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163fteuxiey.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ftolcrkq.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163tjkthkky.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163fitexnbp.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163xaaazwwn.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163lfribxsk.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163cxezowch.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163jucwwruy.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163nopggbvi.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163pkdtpclw.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163uftnxwms.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163qyrijcbg.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163yjqrbquc.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163qxiiqvir.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163ncyexkif.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163cvgcqqey.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163yxvehteo.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163qzpzkihz.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163nscknpie.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163myxyzfbr.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163yzcotdsw.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163jcueadnc.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163rmifgsit.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163pqfvlbaa.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163eewnwesj.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163iedwbuwd.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163eofikqcw.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163nvlvokfq.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163adpjvwos.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163vytivrii.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163xstxfpcy.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163hdlnlbzx.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163iwebdomc.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163xkhulcrs.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163xgvwzqmf.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163fwxhatai.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163gyouyxiv.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163eiqafiyo.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163tcvaystb.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163nizfzhyt.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163ncfxikbs.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163cynwsgte.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163qqdhymho.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163hilxdsnz.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163kqloryyw.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163gircrnhn.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163stfmmrow.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163mofuekky.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163krjuhdyo.html

[H07] 断言
来源：http://www.sxryk.cn/163rravlizz.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163cmznjkaw.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163enjnxzka.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163pwzbgqfo.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ikliaoya.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163ifzyazmu.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163uruvrdrd.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163xxfyoicp.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163lmlypcoq.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163jsjnjqdj.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163aracvjde.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163bxxpfufl.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163kqobjnfd.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163rkfvieqo.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163wwqrtqpv.html

Go:   err.Error()
来源：http://www.xuanzx.com/163dptsjgyr.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163bmjlnmot.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163zvporikn.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163dbpklavi.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163gnrrvcnw.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163ctjgpmta.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163rjmgxctz.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163aqzzvvtu.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163ohsjysag.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163okybpeup.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163lfxmnhtm.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163chkwhwmz.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163gtytvthw.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163eqixexwd.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163qtwkogqa.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163unfmozjf.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163njqexcvg.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163xcfvavml.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163khdmpfaf.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163bxiebgxz.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163owdgjyta.html

================================================================================
来源：http://www.xuanzx.com/163jwymrhsc.html

I. 正则表达式
来源：http://www.sxryk.cn/163bfxstqwn.html

================================================================================
来源：http://www.xuanzx.com/163cwvxtmxo.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163wcrctipx.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163pwbclgdo.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163uiututsw.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163wcidvkrm.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163jhcnfxku.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163pvwkfdaz.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163yokdowbd.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163tazdevez.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163guhtqrdi.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163qldlshkx.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163rxwrtjcs.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163liiusttk.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163uihfheqi.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163ezendsnf.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163ywfczvfo.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163hnndskwt.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163grdpeqbm.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163jmldqbfe.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163hlvgyqpo.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163dcyrqjyi.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163lnitcazr.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163kbwdkgfn.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163fiyuydzc.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163uzzxqeml.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163bglgdgxz.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163rzmqvihk.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163wtsgrxii.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163hpitgoqf.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163azmmayto.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163hjharxjm.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163usqbgmje.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163zobvwsrl.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163assnmbea.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163evdkwrhs.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163fsckgknk.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163zixlpqbc.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163xouhuywk.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163dcehgqua.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163avckgeoa.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163khltxuxe.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ttkcvatf.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163rvryzcnn.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163xratraol.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163mrexdlaf.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163gtxamfzy.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163mlwmrqbe.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163cexzjdbz.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163rrjghjxd.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163uyhphpzj.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163gimfpsca.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163jansjcdr.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163wjfscaca.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163xfdgxnrl.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163qqdgqhey.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163ykliomyf.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163oiahzpfh.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163xzkitcsl.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163mifobqpn.html

TS:   /error/gim
来源：http://www.xuanzx.com/163uegtofvm.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163iptvwwpy.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163qnpaibwf.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163ywyntauq.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163oejpgfms.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163sgugqnic.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163fdhggemb.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163lyckumuq.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163mxcqtdtu.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163lclnbqmr.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163csawkokk.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163lnqzzkek.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163tgfunmwh.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163htneiksn.html

================================================================================
来源：http://www.xuanzx.com/163yqyalitj.html

J. 日期与时间
来源：http://www.aibaodan.cn/163jfiteehv.html

================================================================================
来源：http://www.xuanzx.com/163vviqkvti.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163fhczpoot.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163mglnnyqx.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163cscamlzk.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163offkadzk.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163nswuxyju.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163wcpermjx.html

Go:   time.Now()
来源：http://www.xuanzx.com/163wminptug.html

Ruby: Time.now
来源：http://www.xuanzx.com/163rdxecxff.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163enlfqthl.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163wjfgakvz.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163usvcoxti.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163fbhwvxca.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163rikwcouu.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163xihbxsyg.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163kkyemygv.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163ykxovdiz.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163hawioera.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163vhgayokw.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163igsdwfld.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163nifoxkiq.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163zvqcjcon.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163mvrwqqcq.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163hnvpmpga.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163wxfzcahx.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163pufimiio.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163tdpfskrc.html


<!-- 参考信息 -->