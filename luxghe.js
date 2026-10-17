外链999!wailian999！

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163xqmhakjq.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163autvuxqt.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163etbcyycb.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163qjcvkvog.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163rgeiwkll.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163ltwofxck.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163lmhsiiiq.html

[G05] 继承
来源：http://www.aibaodan.cn/163mujqwtnb.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163mpiieart.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163zatgtpvk.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163byvmwcic.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163nfzyosgq.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163bxqhyomh.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163dbnavyey.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163oqzpgrxy.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163kxmrssgk.html

[G06] 重写方法
来源：http://www.xuanzx.com/163lhcqacox.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163henhqskb.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163dwqbmggw.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163qcjffndg.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163nkupwxrm.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ypnbrtfe.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163pbekrlfz.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163eonezgxa.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163iiocitgy.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163tqjgmrxc.html

Py:   super().greet()
来源：http://www.sxryk.cn/163nhguxzpw.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163zrvannbv.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163mbjiadxp.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163cqoeeioi.html

Java: super.greet();
来源：http://www.aibaodan.cn/163qhuroatu.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163dtloznkz.html

Ruby: super
来源：http://www.sxryk.cn/163muhiqcka.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163hpunnlmo.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163zscmrmre.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163qvqzxvuu.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163ahhtdrlt.html

JS:   static f() {}
来源：http://www.xuanzx.com/163uxbxloyn.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163aaytrjuf.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163qzuyupho.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163cihutntf.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163rxhesnwy.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163ehontcct.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163jkeekjaa.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163nqbgfuve.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163skrhmbkr.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163sbhaxirc.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163ehswjhyl.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163jiisrymv.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163kskoflxo.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163ddiiogmn.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163gxxtalwv.html

[G10] 访问控制
来源：http://www.xuanzx.com/163xvexuawl.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163rovqwcuw.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163wqcfaowq.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163tzlojkij.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163rmljmkqs.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163yboqlnyg.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163jpsvffzk.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163mlxwcjbt.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163iuqrwmpd.html

[G11] getter / setter
来源：http://www.xuanzx.com/163khrsfjvf.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163kaohdnqk.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163bvpasubs.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163xvxocjzk.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163gtpszrvi.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163aceqcjxs.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163uzhutbeh.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163scpsrixj.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163pxnmgpmx.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163ruovxpny.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163yajgrqud.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163bdpnxpjv.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163fyerdmhy.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163zgijkerq.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163zeppzjup.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163mcppbfon.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163mmthudkg.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163dzhxbyms.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163houavzkx.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163qqqahegd.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163lcdhtjgi.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163swajpnyl.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163ezkyfnbt.html

Java: u instanceof User
来源：http://www.xuanzx.com/163mmybjihs.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163mdtcfrfm.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163vovgldwq.html

C#:   u is User
来源：http://www.aibaodan.cn/163aewcbouc.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163yzfylotl.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163zxagmlve.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163uyosvzcc.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163ntydwzat.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163tbpcyskj.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163qmyoqyxz.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163nikrfkxl.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163hltigilc.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163zupyutth.html

[G15] 枚举
来源：http://www.sxryk.cn/163zcxlnaea.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163pwxaciql.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163nqagmdrv.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163xeghdned.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ktvzkxvp.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163ikpzykts.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163ildpfwgy.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163kpjuqxtn.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163sfgefvil.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163jwcdlhyu.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163zxvsfrlr.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163ygawgztr.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163dswhwfxg.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163vgronzni.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163yuajpujb.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163casqroyh.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163hgtenmsp.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163fufkdctc.html

================================================================================
来源：http://www.xuanzx.com/163xusqwjts.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163ymadghnl.html

================================================================================
来源：http://www.aibaodan.cn/163wgkseujg.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163cphozyqp.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163txdpdhfp.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163tpdelvxo.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163cxtigvtz.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163ioltbwxz.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163vnrcmvhr.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163fthazzkw.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163vhcqvxnt.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163iurpfapb.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163oaopnnae.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163qjmxsuqx.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163zvhceauo.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163goudloeq.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163aqafgslq.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jdjiarmb.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163rdzfiupf.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163lkxqfbfq.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163hpnovuyo.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163hhqphykn.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163mqnsutvo.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163gdwuiniu.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163bwjcufbh.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163axpqmbib.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163bkrxfbok.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163hsqlizko.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163ymtgtalo.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163iaworhsh.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163namjeitl.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163byezhwcr.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163jyvyrokx.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163mgofrzgc.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163vspnruuh.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163ldhdrhny.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163xlabnwxs.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163oskgeujy.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163chwrpgfa.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163jvlqdpcp.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163wqxwxhxy.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163dimsmcbm.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163fjppolbe.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163syibmosx.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163tlwfpbci.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163mzbrpabv.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163vbnyqrfx.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163ljxxdyao.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163ukisdghn.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163rsddqyaj.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163onssbtew.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163kjftsopw.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163bmnssdvc.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163cporoqmm.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163ukwxezqy.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163oxfiaaxt.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163sktsxbao.html

[H07] 断言
来源：http://www.xuanzx.com/163tqoozohs.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163yyuxlkgp.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163eupahxlm.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163icgakazd.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163otfabzkr.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163gpkdpglv.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163qujvjwid.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163gowkptvg.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163sucrenyb.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163ebljtrlb.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163qhxfwpfa.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163lrdcblod.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163rqlcmnwb.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163wwyhkzhn.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163wjvaikqo.html

Go:   err.Error()
来源：http://www.xuanzx.com/163oeyxxciy.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163odbfnmbb.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163bautydnc.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163hjdcajhx.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163qexnzszz.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163nczpfabh.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163udzzqsjn.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163lfsgwckq.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163oygszfoq.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163tcetiiou.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163vfruizbo.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163daqjrrpv.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163uolicbrl.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163tzgtdqxx.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163edjeojzy.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163lyzqcuuu.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163kvddknge.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163qbxioqgy.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163mpqpqdwa.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163tvizhzzt.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163spotnhvi.html

================================================================================
来源：http://www.aibaodan.cn/163ymlcbkwt.html

I. 正则表达式
来源：http://www.xuanzx.com/163jaldhxac.html

================================================================================
来源：http://www.sxryk.cn/163jhmksnzs.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163ifivvjml.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163viehrsvp.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163twhviibl.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163wtdgjvai.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163nejchqtm.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163gcueymwm.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163bowsohfx.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163gkqkylza.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163fzwlcbvr.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163qozrvrer.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163gtzuvhay.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163chveczmt.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163hjeiernu.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163njfebomq.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163wlatvppt.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163hqkoqbeu.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163avgluaif.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163mxauldxa.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163jbdxygdz.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163dszjwpui.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163hfmyndvo.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163vfgcicac.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163rxzhsiyc.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163njrjlqde.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163fbnxqvfu.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163apqdiqmb.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163aherwvlq.html

[I04] 正则替换
来源：http://www.sxryk.cn/163pqqnzswe.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163tatajlao.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163yrejonbk.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163drbbsviv.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163rjirdjql.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163dmgqmofx.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163kmcscgjv.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163qntfvqek.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163bxfadkyn.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163owkaosyo.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163xbthtxkr.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163wxofollv.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163iuawgmay.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163wmmlbxsd.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163gothzuhx.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163hazbvadu.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ndiyqqxf.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163zjsgxyvi.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163andwvoup.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ysydnjzp.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163lohtwcuq.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163mospmmhw.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163tvxeaoaq.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163hljhdwvf.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163mjsghkes.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163duyykzdb.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163nrqsktbc.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163kmkwvbfx.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163rpylhlam.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163iwvwfvaa.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163ouowdboo.html

TS:   /error/gim
来源：http://www.xuanzx.com/163npvzmjen.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163pphexkgp.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163nlydtkag.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163bshsrdow.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163nvrwojuy.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163yiogzsof.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163aulyzikj.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163ndswjdxa.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163hrpybyzm.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163fenkwcvl.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163drfjdlcv.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163vhxrsjbp.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163gmbcnaof.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163ghbejckm.html

================================================================================
来源：http://www.xuanzx.com/163zfprzacz.html

J. 日期与时间
来源：http://www.sxryk.cn/163hzjlzwgy.html

================================================================================
来源：http://www.sxryk.cn/163xvdozuny.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163dtedabjc.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163rsieegvg.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163kqrlfhqu.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163wmkorgee.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163xcviuddi.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163gjcyrnih.html

Go:   time.Now()
来源：http://www.xuanzx.com/163utfaigxd.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163aqrwxaru.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163rolvhniz.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163fwaiazxj.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163oqlpbfez.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163fykrgllp.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163kfinlpsr.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163bufplsvk.html


<!-- 参考信息 -->