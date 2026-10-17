外链999!wailian999！

[G06] 重写方法
来源：http://www.sxryk.cn/163nmopfacg.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163ubqwdkwg.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163xkbiagdx.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163etzhpfet.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163tzwrducn.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163foderxzu.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163gghdcljw.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163aosvqamq.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163ruoemcpq.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163fzrqeqnz.html

Py:   super().greet()
来源：http://www.xuanzx.com/163bxscvgrc.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163djogiaqq.html

JS:   super.greet();
来源：http://www.xuanzx.com/163wrlxrfpd.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163bxjmoamu.html

Java: super.greet();
来源：http://www.aibaodan.cn/163fjtdbjwr.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163vuzafzlf.html

Ruby: super
来源：http://www.xuanzx.com/163oakrrurs.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163hpxqihsf.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163mrkdbjkk.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163wbilxlyx.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163cgppracw.html

JS:   static f() {}
来源：http://www.sxryk.cn/163xkcuvslk.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163oeusxxjz.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163dhzrlxuk.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163lkhrgfuw.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163iyrjskbm.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163xjdfdrrq.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163ldgtfyjh.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163jnddcafr.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163oeqskort.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163uiqiymzu.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163lpfxwcol.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163uolrgaxe.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163jtxinuuj.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163hqdzunrw.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163coswjwnb.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163uzbnfjmv.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163nskeawdh.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163ypqajtta.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163nshtlkaf.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163sqkznyfd.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163wqesnplw.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163xchrutng.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163jbfadsfc.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163raittrcz.html

[G11] getter / setter
来源：http://www.xuanzx.com/163mazfbuvn.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163forflfey.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163shqiwjic.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163vmitkiji.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163cobjmxre.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163wlngeqaw.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163eiewikjj.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163dzryaqqc.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163booygmql.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163imncnksn.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163rpzxzguk.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163ehdlyclm.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163xfkuldlk.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163sqkwrfja.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163ssiyadgj.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163fuucqhry.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163uwsuvmjl.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163ijkjhxrf.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163yfwjsmgf.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163hpjsjtkm.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163swejmxvn.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163oletoezs.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163bdirceyo.html

Java: u instanceof User
来源：http://www.xuanzx.com/163vladecci.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163efdltjze.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163kievseiz.html

C#:   u is User
来源：http://www.xuanzx.com/163rzsteylg.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163xjrauxqy.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163izpmrqmn.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163xqxlzbhq.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163yfvhiedv.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163kzkoabrx.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163xecybzsn.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163iouowesa.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163yaondtxa.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163sducpsjs.html

[G15] 枚举
来源：http://www.sxryk.cn/163yrjpnite.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163mspjlreg.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163isffgmad.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163xuiomrcb.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163grgvdasl.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163argnoqbk.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163ngwaznai.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163ngflabip.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163wwliezbd.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163prbmhpmy.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163limigizk.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163mbwuzibr.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163kvttpgte.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163eldwnwwe.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163koekelpm.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163ibhlqaju.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163zswdtyho.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163fhkjwfza.html

================================================================================
来源：http://www.aibaodan.cn/163citmsjfz.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163npisnvej.html

================================================================================
来源：http://www.aibaodan.cn/163xjxdfuyc.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163jglwnqnl.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163utazsyqi.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163dsfumukl.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163mkuxcyug.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163aziblatp.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163nuyntuaq.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163xjxpstww.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163jlksrgie.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163ckkhwjek.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163cftqanna.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163hiwzzbjw.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163xjoahqsr.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163mreiqnrg.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163wylqhtwr.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163bynsmams.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163ullgiiph.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163hzlwmaig.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163tjzdgmix.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163bsskunun.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163zuzovvwo.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163lnacpkrs.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163itezfbpu.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ycvonnxj.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163tlfentaa.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163jygivzqz.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163ootyxaoi.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163qrutairf.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163tmuqrovt.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163eyipfcvf.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163iuzxuszk.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ncjtoowl.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163hotsmmvg.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163lfhmqjeb.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163vgmupssr.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163ubqlbvba.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163cqrmkvjw.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163sbokrhcj.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163tzrrxulp.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163djeyafmy.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163neqrbdrb.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163hmvmicmo.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163lhdnraor.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163zjwudlny.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163anffpmlx.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163dptdemdj.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163sbdjejun.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163agiuvnem.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163buzwcrvk.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163xwwarkgv.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163nscsuyiw.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163ewzwmkfk.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163qwjyttox.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163kzdpyfgr.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163actpxwzb.html

[H07] 断言
来源：http://www.xuanzx.com/163wdispcnb.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163gkyefrds.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163liymapfn.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163nwiwfova.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163fwsdudpy.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163ezlluoxr.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163wwefaduc.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163uzrvyafg.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163mipnzbvd.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163tujyxxfn.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163drwwzklj.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163auirjvqq.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163xicvyjjt.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163mngwexgg.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163prsfcmtt.html

Go:   err.Error()
来源：http://www.sxryk.cn/163igipgrit.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163tyeqyhfd.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163zpmgmxje.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163gxkoulbc.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163njmlhalv.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163sscyajgk.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163ybuklrox.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163qumfrfpz.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163yntsxqze.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163xkbyhocg.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163blicmijv.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163kzdbbiov.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163hftrhvaj.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163zxkwzkxb.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163pqqymrzc.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163lsmqdlff.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163vjgbyyvl.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163lybdmpbv.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163tizjsmbn.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163hocsjcjl.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163cnqfmhvy.html

================================================================================
来源：http://www.sxryk.cn/163vxqjzkxe.html

I. 正则表达式
来源：http://www.xuanzx.com/163sjduxjxh.html

================================================================================
来源：http://www.aibaodan.cn/163labfuldj.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163rjkfwmak.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163iwxzhlqf.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163rdgxleae.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ymyuwhqv.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ewtwxmlc.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163zyhutwed.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163qgvcwfwg.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163qadlhawn.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163hpkjulnz.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163rumlhnwd.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163czvlcwmz.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163tiupyrcq.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163uzjqoipd.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163slfbiiec.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163mogubeet.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163vimaafpm.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163sizylfgt.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163ynvkjejn.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163ujskadat.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163qjaoemwf.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163jvygsotb.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163ugyuvshc.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163jmnjxotn.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163gqiujsur.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163zgschphh.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163lsmriisf.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163jyxiygko.html

[I04] 正则替换
来源：http://www.xuanzx.com/163ikesyhox.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163kvbkwuft.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163olkjphgl.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163dwjnhbzh.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163kmaqgdku.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163wkryvvet.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163siphtnra.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163eavbjowm.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163fixcxzvs.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163zvxtghog.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163kkuiqvdv.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163nbsurjvd.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163sexedgfj.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163njtlutau.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163ssmevufa.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163fodmsbjf.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163gsjxenyo.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163hvgyfdib.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163dxcgnotg.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163rkhsrjtr.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163gcuzpkgl.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163hwxzlojs.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163cowtgrsv.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163yjtejbnn.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163wfbsucjc.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163fcoakfph.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163qedytgdx.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163uibivknd.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163xyeovllt.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163ockgydyn.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163wloketmw.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163elhuvlds.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163ysntlbis.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163qpryopzo.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163qzkfeymw.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163fbcwlbei.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163qscltvyb.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163twknptmf.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163dhlcmkdh.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ncrjnpfz.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163cmakcdrd.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163thtjqyce.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163yoadrosv.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163wrsiivxo.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163xeimcjbw.html

================================================================================
来源：http://www.aibaodan.cn/163ywwzngih.html

J. 日期与时间
来源：http://www.xuanzx.com/163cjtwkaaf.html

================================================================================
来源：http://www.sxryk.cn/163aenhrbkq.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163zpcfqjnv.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163zpebjhgi.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163aekhytcx.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163qdrplwvn.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163lraujeqd.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163cusquulz.html

Go:   time.Now()
来源：http://www.sxryk.cn/163jjmzrqur.html

Ruby: Time.now
来源：http://www.sxryk.cn/163lgbmyucy.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163klsluxzy.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163gjqmdjkm.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163qcobiqal.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163kilapzsp.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163yuapbiik.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163utnwpumn.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163rnicfilq.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163zichswpq.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163gfaeiysn.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163tdnbblht.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163nzduecqt.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163ufrqfrtf.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163ogbbuvki.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163dmeogfpn.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163voistvqw.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163udzxlqpp.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163bshiywja.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163emxctdjw.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163fiipgoti.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163drceluva.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163ezbpjytk.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163wrqghufw.html


<!-- 参考信息 -->