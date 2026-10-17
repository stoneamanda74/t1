外链999!wailian999！

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163wnqmbgqo.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163ykbqcobh.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163qgrwsdmq.html

[G05] 继承
来源：http://www.sxryk.cn/163ljjmbrxa.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163xyivbyfj.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163afrkkneu.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163biyljape.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163fcdlmnys.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163drijssrx.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163omauxtky.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163mkxroueo.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163nnuifpke.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163vngzrcsv.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163xamlpsuv.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163zmjtnhsb.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163vmrawbeb.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163giuvbryq.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163tfymejrp.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163azrduuhe.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163vkedhmes.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163ahqrgcvj.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163gkxbtzhl.html

Py:   super().greet()
来源：http://www.sxryk.cn/163lnylsrqr.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163nwfeuyrm.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163ekbcmljc.html

TS:   super.greet();
来源：http://www.sxryk.cn/163hmablmqn.html

Java: super.greet();
来源：http://www.sxryk.cn/163ytrjuazm.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163avshvrvq.html

Ruby: super
来源：http://www.sxryk.cn/163zwlapfgb.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163rydopzsc.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163txppxsga.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163gssfqnes.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163vkteyxav.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163bfgjhcgk.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163rnujyrqf.html

Java: static void f() {}
来源：http://www.sxryk.cn/163dopeubox.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163rmhrdtac.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163pamnbiea.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163awewbjon.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163rafyleng.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163iuiaydwr.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163bkgqbuin.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163xwwhvunf.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163tswscgtp.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163helwgere.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163vuxglmvm.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163kmcjgqcw.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163ucwtxyer.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163calxfewe.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163fsfepxtu.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163joepjzjq.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163rvnsstui.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163oraqkbpz.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163kbnwhsvg.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163rlqlhows.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163zoqgnndm.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163dyojorzo.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163wdfozqwz.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163hwadqkyn.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163qhcqmgrr.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163upalgowt.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163pmtypxmh.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163fmzeejpc.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163llybytgu.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163llmukvkz.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163fqdoypho.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163jlyahxrm.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163cyibgtom.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163rmkhiyuw.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163khzezsaz.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163pwunxiti.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163vrwjdxsz.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163agdkjdhn.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163mfmxshjx.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163cbtvlqko.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163aeqtvrfj.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163qmenbbzx.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163smgxnipi.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163elzwkver.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163pazsqdkw.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163zcxcysrc.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163lfahtyyt.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163atuzrddv.html

C#:   u is User
来源：http://www.aibaodan.cn/163sacheqvr.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163ympbpasm.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163oykglnqp.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163veunkjds.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163hkvhqoed.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163ybikpdhz.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163igqrcyes.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163acjjkxxx.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163rmcgftvh.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163ufydahar.html

[G15] 枚举
来源：http://www.sxryk.cn/163fybolvfw.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163rvmpbuoy.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163mhdkfhgx.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163uvdqhkkl.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163fxszqosx.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163bzyaxcgu.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163mxoexume.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163fovevtsu.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ugwkyusm.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163ihdckbvw.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163ttmtdoth.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163joxjrvxf.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163grmteckm.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163brsukpgs.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163ggjgobbh.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163svniepjt.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163tbdtvqjz.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163lhtjlbdc.html

================================================================================
来源：http://www.aibaodan.cn/163uroegpii.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163ahtfzpry.html

================================================================================
来源：http://www.aibaodan.cn/163zvjdmghk.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163cugdfybp.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163xojgdzwo.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163dqqvkgxl.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163zvdssqqx.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163exerdtsp.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163pnallhti.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163rdvdmjzt.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163ihlgbyrd.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163yfwwlfhv.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163jcnclazn.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163pewkwili.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163aeuzatqf.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163fcwznhlg.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163wlqtxjhp.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163uoiuqjii.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163mgtfnzjb.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163enkikqwv.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163icrtskeh.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163yclraahp.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163dtaiyvzi.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163oznczvvu.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163fvthgsbi.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163zpvgvesn.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163amfiyqcd.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163uafwjamz.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163uzmfzvlk.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163erttyjsk.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163xifsgqia.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163jfmrsqtw.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163qszxzkuf.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163zbkxezzi.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163mgavscgj.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163iwesuzmm.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163aejqbbio.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163hmfdztyt.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163shjzwqip.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163ezbwwrut.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163ulkhyici.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163kvpragxh.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163cyxhvnse.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163znptdbxt.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163ezwyaxnd.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163ukrlgtcg.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163tdbbvute.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163wxxmvcxe.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163qqiprqvp.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163tuekaoxt.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163kgbcqajv.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163zqwxlewy.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163zzfbvyix.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163hbrqbkgh.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163mrhdhkos.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163fwclvvvf.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163ocfuhnbe.html

[H07] 断言
来源：http://www.sxryk.cn/163ruencwky.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163gyodijqf.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163znkegwwq.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163qduacvtw.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163awbejmqi.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163yfueenkn.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163ricnsfmx.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163bnqtlhda.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163pltiobyz.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163lherkaxk.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163gdlvjago.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163lwhwntvy.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163ckcbdtxc.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163pbmjmixr.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163hlavpbmi.html

Go:   err.Error()
来源：http://www.sxryk.cn/163akftlmqs.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163xqixzkhj.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163dqmjvlev.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163esclziyq.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163dqmvzest.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163bejipyyr.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163vsgcdcdq.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163hqsefcpx.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163qvenumar.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163npkbywff.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163tdcekfmc.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163oluzoyll.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163dudpotab.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163dvktqmel.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163koeyuhpx.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163bohoqxfz.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163dzfyxauy.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163aoecrqmr.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163usfdyvev.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163pqdjolnw.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163brhlnguc.html

================================================================================
来源：http://www.aibaodan.cn/163uqllnqxu.html

I. 正则表达式
来源：http://www.xuanzx.com/163czqltkws.html

================================================================================
来源：http://www.aibaodan.cn/163oaacvzat.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163hoabbnna.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163fivjyfrh.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163anedbloj.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163rnsseuvt.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163rxxhsafa.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163etchanlu.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163zckwfoel.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163ajhnpidv.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163aeelnabp.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163adepawqe.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163kruqfdix.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163joshzubj.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163hyamzlfc.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163okbnoluo.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163kqhlcbsr.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163scudppfl.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163fnggocns.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163pfqudmlh.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163wbbuospl.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163ywzipqnj.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163gnyvauey.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163zbnucxzl.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163ppzdcxvd.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163egyhkezx.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163ufgwqbsb.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163uxqljsjk.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163kjtvpubb.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163xpmtoxbd.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163kfcuottu.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163qsvrigdb.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163gzcpfcku.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163pzfdsmyf.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163kyavhzyg.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163gwdtgjmx.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163aeqsafsn.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163zdutvqqs.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163txskvsez.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163cozvihif.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163rqjjhgyu.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163phpiqkln.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163edsgsbdt.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163zpdtxnug.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163kfelrsii.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163cuusdqhb.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163dzgjzxmc.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163gccgqtdw.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163bupaqwiz.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163vmvigpfv.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163vgvmnzbd.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163fibvwotj.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163kxmcydvz.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163fqblyawg.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163xyojtvax.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163urahttxy.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163tsmpdydu.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163wqtwtnbd.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163esuovzso.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163muiduwje.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163xzzrufbz.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163lviqgcfn.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163icupgwlq.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163zjxkcrjv.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163dccqjvvx.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163rgjnwidj.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163albscdpl.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163jjwuwzao.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163dwrillve.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163usknkius.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163rgiablts.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163rkvbvcrs.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163ypswbisf.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163oeacvlol.html

================================================================================
来源：http://www.aibaodan.cn/163rehadmkz.html

J. 日期与时间
来源：http://www.aibaodan.cn/163lzstcajz.html

================================================================================
来源：http://www.xuanzx.com/163ohmjtjzv.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163wepczcbe.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163avdxxibt.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163atwpfapd.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163fkksyjjr.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163rnsrldug.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163uaevigmq.html

Go:   time.Now()
来源：http://www.sxryk.cn/163ooqktdzt.html

Ruby: Time.now
来源：http://www.xuanzx.com/163gkktnvco.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163zfgxlfht.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163jhdeyyoh.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163luhibpzo.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163pqwtnzgr.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163hnkermmy.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163vuzemslk.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163gorycxto.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163witkyvmj.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163uhphyxro.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163naqoossm.html


<!-- 参考信息 -->