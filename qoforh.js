外链999!wailian999！

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163johqymva.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163xumnjhds.html

Py:   super().greet()
来源：http://www.xuanzx.com/163eifqegmq.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163ecramdeb.html

JS:   super.greet();
来源：http://www.sxryk.cn/163owdsjiir.html

TS:   super.greet();
来源：http://www.xuanzx.com/163dooumbfq.html

Java: super.greet();
来源：http://www.aibaodan.cn/163joriutcz.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163vjsdqdml.html

Ruby: super
来源：http://www.aibaodan.cn/163lzzclgfj.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163pdpltikj.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163unwnxkug.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163wvlpuaar.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163anttdoxe.html

JS:   static f() {}
来源：http://www.xuanzx.com/163sfqujtsm.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163ihboegwm.html

Java: static void f() {}
来源：http://www.xuanzx.com/163czztcpws.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163vxpirlgs.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163gdfcmwxo.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163ivoqrkbb.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163cusqwpir.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163homrfsqu.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163kuoiqecf.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163gbbdrchs.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163jkfhjeyl.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163trmfwfaq.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163ldhmctvo.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163vgjgbpab.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163ufkzhixj.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163rtcrlcaq.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163xjgytdgc.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163qpauqkdj.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163dcmqlxhl.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163kgqyskln.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163hnnqyrjw.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163urzalpaa.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163elutbxge.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163ckuwpnot.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163xrjtjjbt.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163zaraaaac.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163higogbss.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163lcsjfnfh.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163shctcdvf.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163qpyyngvt.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163hzpubsiq.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163qfxuzqib.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163kqovfufu.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163sckpwlxv.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163nypbodtv.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ovoduwxu.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163bgsucjpj.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163gbcldvyn.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163cnhpgxff.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163czyngzit.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163vqqwrtpd.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163wwhhxxgk.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163vuaksayl.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163zkuykiod.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163vlbuppki.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163pfmodfdt.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163dzncffsq.html

Java: u instanceof User
来源：http://www.xuanzx.com/163fyzzmelt.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163jlrgkpgv.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163vtixaele.html

C#:   u is User
来源：http://www.aibaodan.cn/163mecdptro.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163tmivjipc.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163jtemjzhb.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163iosmmhdo.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163lwcwaaey.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163eotxjoxy.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163hismwrzf.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163muuhitjt.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163kmdzkntm.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163nptwgzba.html

[G15] 枚举
来源：http://www.aibaodan.cn/163zbrmvucq.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163hqzmwnoh.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163ttrbuqju.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163cczafday.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163saksiekl.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163ojzsouow.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163ugkjjnci.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163lekcsbsb.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163pcpysorh.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163zocjcdti.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163ttqipamo.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163ajjmgedl.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163vsgnalyq.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163uylytlvf.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163fubqlqiu.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163fkklyjqv.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163ocibrqhl.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163nvnkxawd.html

================================================================================
来源：http://www.xuanzx.com/163hyvyziqw.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163ftafdsvv.html

================================================================================
来源：http://www.sxryk.cn/163gtigyjkj.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163qkmidvbg.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163arjepzlx.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163jmmrlqzc.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163vnmsxkbf.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163llvgbalk.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163rkhpdrol.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163mznwluva.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163vamvobdk.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163forbvlrm.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163grojrcdn.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163dzeglini.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163hedtiwot.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163szdjnnha.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jyfekcxr.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163mbwwharl.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163jbnkpglo.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163euwzytwo.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163dofakaoc.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163zgzfqwal.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163jjlxpdgn.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163dwyqvbvd.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163waoswxow.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163rbrtnrno.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163yndatrqg.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163zfhnrcid.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163oiczgqfc.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163wxomhfvl.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163hnplichz.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163eqnckaip.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163dulgwimj.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163sftqprnd.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163kbzdyfwv.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163bbovxsbz.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163lckuardo.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163juctxmnr.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163qnyytgyt.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163llhzxnit.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163zmtkqmih.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163cmwgvaba.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163pkfcqxvr.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ikymsmmy.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163ceurjhho.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163fuipiapy.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163bpptatem.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163wcgveuzj.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163xkbocukn.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163pfrkuzvl.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163ejkvypqe.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163nkowzrsr.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163cftqrrdl.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163dewfydmj.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163xsamdagz.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163kfhesomd.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163yhnqxuot.html

[H07] 断言
来源：http://www.aibaodan.cn/163hhovxics.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163yydomims.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163zewfvvzn.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163wghvfway.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163txspuwkk.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163xmwleepf.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163bdglxidk.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163idrpwkpc.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163yerkqffl.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163aimpxmtu.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163oqrlswtq.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163hfnxxhrd.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163arbjkjvl.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163prabekxn.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163jtcwedsn.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163xnkysjfg.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163gkmlfsvz.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163bcaduvtz.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163lfqpkanv.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163ujprxhyz.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163vqgfukvy.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163zqywtedj.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163xuvgtpia.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163ohkemcgf.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163kbxzxicn.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163lpapdpib.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163ushgnuld.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163pgwgrwti.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163oxuyizak.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163xqiyfhbo.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163oxhbklug.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163nwpnccwf.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163xuxgylrk.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163jabegdcx.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163uefxdxuj.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163dpnyobtj.html

================================================================================
来源：http://www.aibaodan.cn/163tkimbmqt.html

I. 正则表达式
来源：http://www.sxryk.cn/163qcaxitkh.html

================================================================================
来源：http://www.aibaodan.cn/163mlaouwef.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163lyqtaldf.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163qqjcwjno.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163gunuplwt.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163vzchitms.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163knyjpjci.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163rgeqjtre.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163ofboljvi.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163tmhbgyvv.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163zsuazfko.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163bvaosibu.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163nkurowah.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163xotuwzpz.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163dbhnqipk.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163paanuaku.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163ihvypvlj.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163pxcfaugd.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163voasxprs.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163uvcxqvss.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163sssdvrvl.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163yigfutuq.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163fnyfjwqy.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163ccxwdmhv.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163irhfvokd.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163vesndiyv.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163awmheyvq.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163qcqaqldv.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163vbnmmzwx.html

[I04] 正则替换
来源：http://www.sxryk.cn/163lbszlkpw.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163ygqhaxra.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163zriskzkh.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163iaigevnu.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163biwesffg.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163xmhxuqvi.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163rrpnewhw.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163flifrknc.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163fuckkdlv.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163sppdkxdu.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163sebceqca.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163ltmljxrj.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163tchhrbox.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163suzbcmlv.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163epayywsf.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163tfroeoho.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163vlwtordl.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163lbnocust.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163ghzjgvzi.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163quvuoeox.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163nmnmvxmf.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163eyqbyprd.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163yresxkef.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163vftvdela.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163bpwcsdbv.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163rscpwegb.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163pxkxgzuo.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163afejipef.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163taebfyvw.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163suotcuny.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163eaxdeteu.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163puuuxwhf.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163vuhpguay.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163wefbbfbx.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163vnzxnjpt.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163isrlzqln.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163hjdqclvk.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163rodxrejy.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163loxbcdhr.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163gvmzgkjg.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163jmsvteqz.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163mcxgzsvw.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163wkoevjuk.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163jlytzqjb.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163hfxyemeb.html

================================================================================
来源：http://www.xuanzx.com/163ybvnkgyk.html

J. 日期与时间
来源：http://www.aibaodan.cn/163jbnxjsrt.html

================================================================================
来源：http://www.aibaodan.cn/163xomjtgar.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163yyzbjyeg.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163paubmbxk.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163zapbaxpf.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163koyhptxl.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163vpgwqxac.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163qlqogdnn.html

Go:   time.Now()
来源：http://www.sxryk.cn/163briwbrke.html

Ruby: Time.now
来源：http://www.xuanzx.com/163fpnivayu.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163qivclbjg.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163twylwhym.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163mpjxaxmm.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163dngqniij.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163gwoklhts.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163fsbyavum.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163pszfbtpk.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163leoomxur.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163jvwddelb.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163agxbchcc.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163hqngrpdd.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163austwmhq.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163sinpcaqu.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163vbexmmxh.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ouibkmch.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163obxvuyie.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163qduamnew.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163yxpmrulm.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163qmtgzqbt.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163rabmrati.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163vqycwisq.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163wrepigll.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163ntnsnggn.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163xxmhgded.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163snqgsoca.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163ghkzaowu.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163ccndafsj.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163tljizwza.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163ckzfaaqv.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163tjthcwar.html


<!-- 参考信息 -->