外链999!wailian999！

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163lmyagzgq.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163oqcldylo.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163lnrynvdf.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163przbaedx.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163nhrclwcj.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163adwzogun.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163nooxexvd.html

[G05] 继承
来源：http://www.sxryk.cn/163inyazcoq.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163pgfdrcgx.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163uxocyrgi.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163iilnwylx.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163qxswilrx.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163wubtncoe.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163ongkswyi.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163glxqjscx.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163eeluquve.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163urioljxv.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163kntmwnqw.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163nfevvups.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163cfrbrphw.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163bvurdcrb.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163rojbrckn.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163yozreozq.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163yazgndwb.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163awvseufc.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163lqkbmomv.html

Py:   super().greet()
来源：http://www.xuanzx.com/163msooohid.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163dxamgyrz.html

JS:   super.greet();
来源：http://www.sxryk.cn/163enoemeot.html

TS:   super.greet();
来源：http://www.xuanzx.com/163khnmgxsi.html

Java: super.greet();
来源：http://www.xuanzx.com/163ngxjxymx.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163pwlytref.html

Ruby: super
来源：http://www.sxryk.cn/163fzpzjhjy.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163bnerjudl.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163sbjwvisi.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163xeqgassp.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163fwqyeonp.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163atbdvndw.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163xbvxvtau.html

Java: static void f() {}
来源：http://www.xuanzx.com/163gutayrrn.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163jwoitvzi.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163kpthriid.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163clmqxxby.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163srtzpnht.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163ldwdzlyq.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163xuftfovz.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163ivhbkqcc.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163cjasbskc.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163orgaowdz.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163gcqzmefz.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163tvywjezl.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163gprzjsva.html

[G10] 访问控制
来源：http://www.xuanzx.com/163xquxqbvc.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163pjsfdnhj.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163jowymlie.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163pbosnyhq.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163yvidnsox.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163dpwpagjl.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163theuhiob.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163ithwmegv.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163kxcjewmz.html

[G11] getter / setter
来源：http://www.sxryk.cn/163cfarajao.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163xjlexzva.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163uzajimfb.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163opambvjy.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163fuakbjna.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163ptdtotpd.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163wcerjdkf.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163xvigevng.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163lxwtlqdt.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163nqgneudj.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163nwuypvbi.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163gybhnxrp.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163bmxenstf.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163udzufenu.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163sglboeyk.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163ixyoxrug.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163sqzkqtok.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163aefiaoms.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163xrmfyghh.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163nmrncnek.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163gqnlezer.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163jzqnpeqo.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163sqsdivby.html

Java: u instanceof User
来源：http://www.xuanzx.com/163hlysgera.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163tiybqpyi.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163inztdbyf.html

C#:   u is User
来源：http://www.aibaodan.cn/163uwrhnlqp.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163qeosudrv.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163bxyhggvx.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163lkkuflce.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163vfguilgz.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163bghzwter.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163sehjuqyj.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163pftefzkb.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163zkdxfykm.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163atvwiznf.html

[G15] 枚举
来源：http://www.xuanzx.com/163lwftqpej.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163psgispch.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163sapwxfcj.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163pjeygtkk.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163dgrlylrz.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163mhsngwyp.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163nvhljtuf.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163pjhstbcr.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ptljmluq.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163pfthzeqb.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163ibdktxit.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163lupmfpfm.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163anmzable.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163isoueeui.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163lrfomtvq.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163gsbigtiz.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163lziceqpk.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163sgkhiqbg.html

================================================================================
来源：http://www.sxryk.cn/163trweplfw.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163stguiugs.html

================================================================================
来源：http://www.aibaodan.cn/163fhfwspnl.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163vffpxmpk.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163ddtpnjuo.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163rmweratr.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163qtdovlyi.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163kovhqmcr.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163senxhseq.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163kzbjrcaf.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163jpllqrpo.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163adjekbvh.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163zcktcnyd.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163pvqzziyp.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163hfuqhwcv.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qvhjyfru.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163awywrdiz.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163mxtkhgks.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163dszyscxl.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163cryldxxb.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163ejbvijyl.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163cqynlfrb.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163gwysnufv.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163hjfpejng.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163rrqyuexq.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163hrhuidmr.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163enqdkqpz.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163bgqziplp.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163isdsfbeh.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163wwaaetsm.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163kzylvgwn.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163vfeyyqdg.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163pymqyzkv.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163nqimfdmi.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163engynvto.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163lnjyhqsv.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163agnowhhe.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163fkynsuqr.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163khthnntz.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163lusqoshz.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163jraraizk.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163bcrsenuw.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163oiiragba.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163wafdjxce.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163dgojdbxx.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163zrgbdjkh.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163hfgpseub.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163lrwvrxwq.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163temhwotb.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163jzibyagr.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163qipxtxwf.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163oeuszjel.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163owebgqrl.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163yjcvogwe.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163oajzztwg.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163rgbteigk.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163rjtzbpzq.html

[H07] 断言
来源：http://www.xuanzx.com/163btybomdq.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163loouymeb.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163ufomngfx.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ibqfkkwf.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163pzyzhwik.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163lhmpiwrz.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163khhyluxl.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163maqxaqcc.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163qquzzaen.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163zmhabsiw.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163ptizskjo.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163eqiatikl.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163nanycrdt.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163xuyupucm.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163qsqidyvj.html

Go:   err.Error()
来源：http://www.xuanzx.com/163iabsvwaf.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163voitasch.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163lsjcnoea.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163isynpivk.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163tzzhqtng.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163nlevtcbh.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163qtupttlm.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163jdaosnvh.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163amizbmat.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163mvzxfzrq.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163ortfqsfr.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163pochnaqg.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163dxagguqy.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163qaxrrwhx.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163kydttljs.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163muwakxna.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ggerfnec.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163qfwpndqk.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163praywwdc.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163aatyrbmx.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163ohlggbqi.html

================================================================================
来源：http://www.sxryk.cn/163ztymjswx.html

I. 正则表达式
来源：http://www.xuanzx.com/163kuloyztk.html

================================================================================
来源：http://www.xuanzx.com/163hmizmisa.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163zxbyluaj.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163rmxhwiyk.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163yavgdxkn.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163bjjnbvku.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163tbcekziq.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163jlabcxpn.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163xmgcoxws.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163riwvwrue.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163boermqtp.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163jlsmzrfu.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163wajelrng.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163hxxttlpk.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163ihfzocep.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163efhrdobt.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163hhfuqhcj.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163oyncmhvn.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163bvozwvqn.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163aayxpefe.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163mjnuovyu.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163kbkxvodf.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163lvkgjslc.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163exowylot.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163zwxicmvc.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163nttndglz.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163baqyprls.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163tdlzgspa.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163hngddgay.html

[I04] 正则替换
来源：http://www.sxryk.cn/163fhxjgdkh.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163ncaywimt.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163xowggdrm.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163nbqjoydb.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ncsfcufa.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163tsfwjvdh.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163jwgedmni.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163ssesbtmf.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163skpazavo.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163vmlsxcjo.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163dyzzlbwq.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163tyovvpkt.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163kaporjjx.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163znfnwesu.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163bxgtcspx.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163rkqtwawc.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163quzpfylt.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163ndrjqagz.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163qqmaszhw.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163vjxgovfx.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163raaunwch.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163sspwehtn.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163hgjiqcls.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163qaunxbxp.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163fkmzesbt.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163qjbaebpi.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163uablehua.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163znzfghxb.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163ornzcyon.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163yftazptk.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163xpwgjxid.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163nljumzvk.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163vcaothmk.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163zvpgpvkz.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163qxmrhlvh.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163vjqqnghi.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163uuqnryfp.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163isenqfoq.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163akyluyxc.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163xfecuyha.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163mmsybfiz.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163gnyhhjaz.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163fgdvvcal.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163gltbuhyz.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163jeacbimc.html

================================================================================
来源：http://www.sxryk.cn/163ktajyyga.html

J. 日期与时间
来源：http://www.sxryk.cn/163botefqsf.html

================================================================================
来源：http://www.xuanzx.com/163grrotvgz.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163eeqaizln.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163zsjcdtvz.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163bmbbxggu.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163akyeqyme.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163rxtmytuc.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163cwlwyoxe.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163nuulclhl.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163qykbjfqf.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163kpbcgayl.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163wqeifrlv.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163yadggchf.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163xjzrbksz.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163uzilezez.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163jjsrhgcw.html


<!-- 参考信息 -->