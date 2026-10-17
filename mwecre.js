外链999!wailian999！

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163eijhmeiz.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163vbqqixse.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163bzsblgyf.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163lrfmyjrb.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163dkgxlcef.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163qtmssjmr.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163tyhbraur.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163gerltkth.html

[G06] 重写方法
来源：http://www.sxryk.cn/163opwaiehn.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163lwjxfwcj.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163fuzzfswb.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163bfvelutg.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163getumoap.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163shgqmqpb.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163cfvzsnky.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163xkrybzvu.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163vwwvuoch.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163ntdmhant.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163qiiopoph.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163jjcdchqz.html

JS:   super.greet();
来源：http://www.xuanzx.com/163whnkddty.html

TS:   super.greet();
来源：http://www.sxryk.cn/163kaacjjni.html

Java: super.greet();
来源：http://www.xuanzx.com/163zbzonenc.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163fjkhqapk.html

Ruby: super
来源：http://www.xuanzx.com/163moihtijm.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163jlruxjqv.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163eskafvvz.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163jiuabcfu.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163wyskvjgp.html

JS:   static f() {}
来源：http://www.sxryk.cn/163eqmhzuix.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163hjzahcsb.html

Java: static void f() {}
来源：http://www.xuanzx.com/163esaknhtb.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163jpibjooc.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163zrusxajj.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163hamotixa.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163wvnjgbjd.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163eeyottlp.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163znrgzwqd.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163xfobgdic.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163rcwkmixi.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163bxcagcfz.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163nzbqjsod.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163vyispyix.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163hmikhmjx.html

[G10] 访问控制
来源：http://www.sxryk.cn/163ofvfamjl.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163fawpfjet.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163vndfvhld.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163jrnslsdb.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163wuuuconp.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163hgotpggr.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163oebgaigr.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163eyjauqqz.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163mnchdnwv.html

[G11] getter / setter
来源：http://www.xuanzx.com/163dfurxaqz.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163fianxzsu.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163zivuiwei.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163zxnqkfdp.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163jhytntxu.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163kuflmfqa.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163lgnhatls.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163rgejprqd.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163zjuiklxk.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163igsmkbkf.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163iqynetnr.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163ecrdxkon.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163oomkoigl.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163bkeivlwv.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163ndcuvbzq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163tkqrjigv.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163cixzmwdj.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163vyeqispt.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163kkxuflst.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163zapxjqih.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163txmfabmv.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163vndjeduw.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163swcyrdcg.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163uucqhgvv.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163snqdaakp.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163jfqfirbp.html

C#:   u is User
来源：http://www.sxryk.cn/163bhebuzpq.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163czkvqvem.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163vxjutjjb.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163tjwtsput.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163mqwpbgjl.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163ruivggjc.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163pbvtkvmt.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163tsucozhv.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163mujsotic.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163ifvbfqta.html

[G15] 枚举
来源：http://www.sxryk.cn/163euavanjv.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163wzrgygwi.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163xeoqsbqy.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163etlmunuv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163mfdzqhen.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163zbaxvzdy.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163lostxfye.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163hgaslhix.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163kxlzymma.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163vkmokimp.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163wbrcbguo.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163rqedilra.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163zqtpqntu.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163saiogylq.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163vshjstjs.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163mpihltsu.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163goncwdrn.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163zowqtczf.html

================================================================================
来源：http://www.xuanzx.com/163wkrafjmf.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163pkfswcnv.html

================================================================================
来源：http://www.aibaodan.cn/163muayojzd.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163buylbpqv.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163zxaevoou.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163bopyebwc.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163hcavlhoy.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163vdkszapn.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163bgsjqiwt.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163wptmslcf.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163iapqrync.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163kwppjsgl.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163amoelqpd.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163sitalgse.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163fqmxzpzb.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163yasvcgpe.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163yxeyljri.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163xkagiphq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163mxzejefp.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163loirdgio.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163dvqbsyzq.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163rovxrzqv.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163hatajpch.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163ffzzatmy.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163rxhksapn.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163sydqkbzj.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163snvhptis.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163rqoeayjs.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163yvhmaxxp.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163uczyzekw.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163aizisqqr.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163kbvacmpx.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163dnohtost.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163cwsszsvu.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163xwqucopi.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163pdwfirrh.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163xrvtwcdn.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163ynyezqoj.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163svdbdavr.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163hskooopl.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163daujrrfk.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163huyfmqqg.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163thpxekcd.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163tobgzlsr.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163tajtkkmf.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163dhibvdyb.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163uowrwjnn.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163iuesfawb.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163qodpnojr.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163gqtvtxlp.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163bvnjtzmm.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ruehcvsn.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163fnqtpqgc.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163dvtldbmy.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163jfnhidms.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163wwygvepc.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163ntpfdbcd.html

[H07] 断言
来源：http://www.aibaodan.cn/163kcfhmouq.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163wgmjkqvr.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163gppfvtcw.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163vujjyofg.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163btbmnlhl.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163wfayhqsx.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163mvvfsqxo.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163rrhgbcgh.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163iimwyoqk.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163zdmvnvue.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163ybgcinlk.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163ssyyyems.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163xggqdrig.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163sebhayec.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163mwrfbybj.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163vbcknexo.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163pfigqgxb.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163gsdcjgtn.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163ybomvqpd.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163xwngalfb.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163rdwakbwr.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163jxzyeahp.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163olgnclea.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163jfulsvnk.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163yrmthmdw.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163kgnmkxjz.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163vybpoxnb.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163dgzfolcj.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163sddyssej.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163pttozslr.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163yoeearmn.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163sqevlpek.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163tokyvtyk.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163lbzbfpic.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163gvfkdhif.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163hyfmpyfu.html

================================================================================
来源：http://www.xuanzx.com/163kcxsalhn.html

I. 正则表达式
来源：http://www.xuanzx.com/163yonswhmc.html

================================================================================
来源：http://www.sxryk.cn/163qtmtsvhg.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163brhxlbhx.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163rlcqmhuh.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163fiyrrekm.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163yutspsey.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163dcguysmr.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163hwdtpejy.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163elwgzfnc.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163vjvvrlbs.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163ijtveisw.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163jpeojcfu.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163wxguhpki.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163aifbydqk.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163yjczetpa.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163bobgitfa.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163ypnergpb.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163yzmjvjko.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163nmoiwvnz.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163hncnveyt.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163zwmidmsm.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163gwutywzc.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163mxfxlgek.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163uiodttpn.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163ddvklzln.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163zgfmvjkb.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163krxsnoev.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163xeterdwc.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163yapwmlpe.html

[I04] 正则替换
来源：http://www.sxryk.cn/163cjsldyeu.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163sysmaabq.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163iepmudqr.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163sactgdyd.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163kqbplgum.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163jnkwvidn.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163msrumfch.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163pfstamfk.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163kdbyiyxl.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163glpunyzf.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163hjqfkynh.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163hhkdennp.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ulvsuxkh.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163adhttzcb.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163nlwjczei.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163gvxjxrwa.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163kflpvdbt.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163xcsdnssu.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163bucovlzy.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163unsjaiat.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163qlizlkev.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ivegylhf.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163rodnmpxw.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163gjxusami.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163spzmtffv.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163okxgxzwq.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163jwdtbtdw.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163ngxjnstr.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163rsgaonzb.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163wnrhlmad.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163nwbzewrv.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163ozufqblk.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163eubkixdp.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163hdqkuuld.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163lndlvuna.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163qidbprko.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163thgqiiaa.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163wgojxgep.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163vhyhayzy.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163krjvqyon.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ahdjmvlq.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163ocekbdox.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163pszvpsna.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163zdhkpdtt.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163qngxnzml.html

================================================================================
来源：http://www.xuanzx.com/163cjiehffj.html

J. 日期与时间
来源：http://www.aibaodan.cn/163gdwqpkut.html

================================================================================
来源：http://www.sxryk.cn/163fwuwjsfq.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163zmalqspe.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163orbeqvpy.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163xfltlryc.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163bucfworn.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163zfuyuzbu.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163bhitbajx.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163mijufwmc.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163ebjxssuo.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163zyqkxmgr.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163cnisrfav.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163utckvihf.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163gsclrhkb.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163icnocpzv.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163acivfhvv.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163ztyviwph.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163epfelmda.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163hboyuelh.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163yugtndfq.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163qknzgzyn.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163vemozzfl.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163cwuyuqth.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163bjgadxfo.html


<!-- 参考信息 -->