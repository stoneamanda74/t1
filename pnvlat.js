外链999!wailian999！

[G06] 重写方法
来源：http://www.xuanzx.com/163pteisiys.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163tezajztw.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163fqpouzcl.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163pgezumvi.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163lltfdceh.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163asmgwqnv.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163tedgzgkg.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163cqvayvxt.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163obmuxoqp.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163pcoksval.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163isbdfhwe.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163cqnrgogx.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163vqvpkbte.html

TS:   super.greet();
来源：http://www.xuanzx.com/163ixyzleia.html

Java: super.greet();
来源：http://www.aibaodan.cn/163gfqarczb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163ajtdsfmt.html

Ruby: super
来源：http://www.xuanzx.com/163eugiohld.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163soqeyhhy.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163lvhitlpx.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163uxmiyltd.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163clmffmnh.html

JS:   static f() {}
来源：http://www.sxryk.cn/163zyihnjgs.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163rzqtxikr.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163yzotdeuy.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163kbjyrqdi.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163awcfowih.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163sbgriire.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163fjhqohnv.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163wdnwbtmy.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163alqzynse.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163rtefnhop.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163xwuypfxa.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163gufrksqb.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163shjhklvk.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163mhliniod.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163sxhrlbtj.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163vjuewled.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163cttpjell.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163doaylhga.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163dgbakyge.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163zllvlkom.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163roufqjel.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163jkubiscj.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163qcqmrvqc.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163shmfdjkm.html

[G11] getter / setter
来源：http://www.sxryk.cn/163glpbsqwc.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163fiifllan.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163lsjnylfh.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163muitszfe.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163jhstqcnm.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163xlnrgbpd.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163rxriqeib.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163xtvmfgfu.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163hixaknut.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163pusatuxj.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163ayonhqeh.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163pexixcie.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163ghttborb.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163heqhwuza.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163bkwjqwhj.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163gczvlfar.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163mynwreiz.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163cevfyaan.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163cnkuruyt.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163xbroskze.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163fycjyxvz.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163ntalpyus.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163oucpuhff.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163yfdegttz.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163ngitvxrx.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163vrawqgqz.html

C#:   u is User
来源：http://www.aibaodan.cn/163ntgbjmnr.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163syprxsec.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163duldoiqk.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163ajevcaee.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163zxbnkxvh.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163uobqwtom.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163lfvwgnmo.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163delpzzdu.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163qxpyhujk.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163yqbglazn.html

[G15] 枚举
来源：http://www.xuanzx.com/163cvnrayri.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163scvknlsi.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163oqrrkbzf.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163gwxprreg.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163uxfzdtnv.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163idgosvcu.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163qgqgzqbp.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163odohschx.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163kzwuxkli.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163ketlbesa.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163qncmzyvx.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163rxddjpmg.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163skdbubpe.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163epnrqnzh.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163omonkzla.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163evnzpykk.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163jpmywyeb.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163ydndxxry.html

================================================================================
来源：http://www.aibaodan.cn/163oszhkfnl.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163iuhdxhet.html

================================================================================
来源：http://www.sxryk.cn/163pjtzfodu.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163fgnxgrxd.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163lvdprwyg.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163rgyfqopz.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ghnytleq.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163obrixuid.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163kjrnfapp.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163ecjczigo.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163tmvyueya.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163wosxtuzf.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163vjxgovyw.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163suufqsji.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163umwhdskn.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163lffoibiq.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qwpyehpv.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163lngqrddj.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163xavasgev.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163quolbubx.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163lmfvinnw.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163rjeruzkd.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163hifmgwrc.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163rfubmghp.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163mxgaqqqs.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163kvutjxua.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163qtvnsvvg.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163zsrhppng.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163qoywrnpa.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163lagpaxrc.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163imsarjqs.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163ajwgxlfo.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163asbdvhsk.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163lavqxcku.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163pcqvhyme.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163fvrcbtfi.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163xlrmxjed.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163tnzwinyr.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163atcxhtzo.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163hxmkcyhg.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163pxdfmcnt.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163wzlvgnjx.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ahbetryx.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163rqlamupl.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163fmtftaxo.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163ymjvxwny.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163lxxehqwe.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163rsllxrzr.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163xrftrayk.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163eejgolmd.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163wxbzoorz.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163pgodokxk.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163lntujila.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163nvilpwte.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163ifkgdssy.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163nyumgbth.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163jnniekte.html

[H07] 断言
来源：http://www.aibaodan.cn/163vtnliuju.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163quihmsui.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163ojnjcjnf.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163fbdcajdn.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163skdxqkjc.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163wgffwfkz.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163xuhrswsa.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163zuxzoxhi.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163zwtvbjfs.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163wydmebmu.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163qgeonrfd.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163nwjmmqha.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163nictmzaf.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163nvohjtdl.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163jrfgupxs.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163onfholgz.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163fcqyuqja.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163vkccdbxo.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163zmfisrrw.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163jvjijtub.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163urdgnwpi.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163lkmaojuh.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163oxmvbvll.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163prftiydq.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163kwbnbhsv.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163biepzmrg.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163eznelytz.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163byfkulwe.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163bcbsojdn.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163yprjzwhz.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163oaqxaqra.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163vdsoasfi.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163inpuhttf.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163fjxbvwqh.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163eodojlwy.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163sosfwsax.html

================================================================================
来源：http://www.sxryk.cn/163uoxdkxmo.html

I. 正则表达式
来源：http://www.xuanzx.com/163jygzitoz.html

================================================================================
来源：http://www.sxryk.cn/163aqizjmvo.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163yolufqiw.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163dckykfkf.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163ksclobvp.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163jwpjmulf.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163elhcqmxn.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163rvitgbuo.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163xhbdbwgf.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163zefuihqr.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163mmagspzd.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163iswrvdfb.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163hftyeuvh.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163zlxbwcdp.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163ljoavcwt.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163xjzyjhmy.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163zuineuwp.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163mbiyncrl.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163aahzfmls.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163usqiqikt.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163ybummpwt.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163gqvwquxd.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163zqscwwre.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163ytvwohsn.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163fhaplcml.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163nhzpwwpg.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163bmbueunw.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163idhtmddg.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163wzhbbmbx.html

[I04] 正则替换
来源：http://www.xuanzx.com/163clanhyit.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163hhfrakyu.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163inphfxtr.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163olbdzuxp.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163mupfnilb.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163crpzgruz.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163wfcqijid.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163kwqtigxq.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163fscuzxdg.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163zefehmcw.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163vcqesozo.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163phxcvapf.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163gcsiyqcl.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163wjolgnwq.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163dbegyqoo.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163myucixxt.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163muenbjfx.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163laigfnws.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163uhkskdrr.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163qbfyicxn.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163yukcjdxy.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163dmgfrlft.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163xuoahglh.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163wpcbxosb.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163brkbgmed.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163rougrxpf.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163bzoxarql.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163ruliorxc.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163mrdqpsds.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163biyywurr.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163acdcmkhi.html

TS:   /error/gim
来源：http://www.xuanzx.com/163bvpslofb.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163hmfqegma.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163gcvwhsju.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163uarrsnah.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163lamvldal.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163twbzquzk.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163klmjxtwf.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163sjvokyac.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163zqirhhnm.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163xhiblylo.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163myuxysjs.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163qlllscnp.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163luoxniug.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163uqyejtiz.html

================================================================================
来源：http://www.sxryk.cn/163sftlhhbh.html

J. 日期与时间
来源：http://www.sxryk.cn/163rdmqptte.html

================================================================================
来源：http://www.aibaodan.cn/163vyuuxadf.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163vhuwjlkc.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163rkprxsgd.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163frlnaoyd.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163uxxqfxwz.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163hjkfykex.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163fhdzgnvz.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163whaeluff.html

Ruby: Time.now
来源：http://www.xuanzx.com/163pmxfhjgt.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163thmquwlp.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163ozodznra.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163gkhrfakr.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163vdhubpub.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163viuhohat.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163qdgoeaqu.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163zluxymtz.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163lqbemscc.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163cxxpolqf.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163gdqgnpuq.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163onwbdaft.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163atnyhspz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163hazmoxdy.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163eotzkkbq.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163wwaokiab.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163xikdxujc.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163zqkkzmeq.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163doyankry.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163irymjuko.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163ceusrowa.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163tguwyfne.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163vxxrhkqz.html


<!-- 参考信息 -->