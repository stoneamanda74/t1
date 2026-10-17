外链999!wailian999！

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163rbwdbbse.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163fnmksuih.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163nwavsrjw.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163eykapgvx.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163zsofiiuo.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163gwvknmah.html

Py:   super().greet()
来源：http://www.xuanzx.com/163zkhuwrif.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163qcvhgutu.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163rieqxkdb.html

TS:   super.greet();
来源：http://www.xuanzx.com/163mzfpqwdj.html

Java: super.greet();
来源：http://www.aibaodan.cn/163zovvkfwx.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163bdjfvskg.html

Ruby: super
来源：http://www.sxryk.cn/163yubxqbol.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163mwnymevo.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163kkcwebyn.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163ohyvioms.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163gezmoyir.html

JS:   static f() {}
来源：http://www.xuanzx.com/163skoopenb.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163uegwftie.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163fkpjbyut.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163msaqrasy.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163btvrdklk.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163mocoefgm.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163seawrwfb.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163aozbgbvg.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163dgeqclcx.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163iqfhfyst.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163sfcidvdu.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163lqisqfna.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163wkiputpm.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163gkpylhov.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163bkxdytku.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163csrzuzxj.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163gbjonxap.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163zocipqml.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163bhuqtrbs.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163ywlsqrza.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163thdhrfug.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163scimrtrx.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163ffgyzpvz.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163ijmegexo.html

[G11] getter / setter
来源：http://www.xuanzx.com/163hsttbssw.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163amcgflrs.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163jzlujhfb.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163hugmrupe.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163xtuxwncv.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163wrwgixeo.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163rperonpb.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163duyrzsie.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163cmlvmzmh.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163pemkjsoz.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163udevfzsc.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163tvowgzda.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163xkvuheuj.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163uibukjbs.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163aaqihwnn.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163kcswtrns.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163imwpzilk.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163qytgjege.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163kmnjyemv.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163jzxpjhue.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163hqzxqfzu.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163yiczsqib.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163fksamuhr.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163fquqmcyu.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163cuglbftd.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163osznmbtf.html

C#:   u is User
来源：http://www.aibaodan.cn/163sagfdptv.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163hhlrofib.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163ejxkgjsk.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163mxtodshr.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163cupfwrjd.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163yobzvmjl.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163biyoqcuu.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163ixdwwrav.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163pedglgxg.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163egftramp.html

[G15] 枚举
来源：http://www.xuanzx.com/163vwafrckg.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163jugxnugg.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163ydzcefom.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163iohzqqyo.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ijafglbx.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163wgfsnzil.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163jymgnzpe.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163viudyqwu.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163wepfxmre.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163uhjaprcz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163yjrdqxlv.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163gtahoptb.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163sglxlcle.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163zjkxcmgs.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163cpslwylz.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163ybcnmchx.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163gxcrxecc.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163abjwbtby.html

================================================================================
来源：http://www.xuanzx.com/163wgcnvskm.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163wjhhcvgg.html

================================================================================
来源：http://www.xuanzx.com/163canekmqj.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163gciseslc.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163vclcxhot.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163myepxztb.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163rwhcsoaq.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163sevjwixq.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163wfuulqjn.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163apzasvyo.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163gjoceagq.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163wfwylwod.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163ztfgnijt.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163wqtrgbfp.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163tmwxcbnu.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163xumubqvy.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163cdzwbcai.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163cnnkspiz.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163avqupavc.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163zbxxnwka.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163szfjnpby.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163fuqkitul.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163oarnsqbb.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163rcuxcavi.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163mwcdgtha.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163apmodhvi.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163idysdntg.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163nnvjsuqq.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163easfplsw.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163tmtldpew.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163uajhbppp.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163wbtpjmmz.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163idmqbako.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163dbkjreof.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163mogtqxto.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163fypsoxrm.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163dybagbzv.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163rexkoeyh.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163rjwdqoxt.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163hsipismu.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163euilwwcx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163uwfpijiy.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163bbzodoyp.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ininacij.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163qxsxglis.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163uocajejj.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163cxablirw.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163kcnqtexs.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163gvobkeny.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163hwchzqvv.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163ttxipxmz.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163grujtpvo.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163wmouiqis.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163ydbnmhyb.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163ylrreele.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163kwmffdbk.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163cwxdkgmv.html

[H07] 断言
来源：http://www.aibaodan.cn/163cjnmqiwk.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163dboxiklu.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163gkxejjjm.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163wudvkerv.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163oltvdzbq.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163lqsygvux.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163bjcdvoyq.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163iianizhj.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163ieqhfshn.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163ncuuqcuv.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163gndnffui.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163eetpxxvt.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163xmatmprq.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163smfvnztf.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163uyucfmmc.html

Go:   err.Error()
来源：http://www.sxryk.cn/163oyowrcyd.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163szwcnjad.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163acszkwco.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163phoyzjnj.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163dgzppmzv.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163xpgpkugf.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163eepcubvl.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163jjpjfjdv.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163ttenvijv.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163hepjgudd.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163ffpzxyrv.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163kugauzaq.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163nufftbfg.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163odcvnjnx.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163qkfhqtiy.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163fwozcoxv.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163vuggmora.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163lhmhsgur.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163vdmpmiid.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163uybofnjn.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163nhgrrlsg.html

================================================================================
来源：http://www.aibaodan.cn/163hugzlllb.html

I. 正则表达式
来源：http://www.xuanzx.com/163pwfxiyyl.html

================================================================================
来源：http://www.aibaodan.cn/163lqrlfrsg.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163rzofbrgp.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163camawubq.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163xaitdwxo.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163guworrsi.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163aouwdsid.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163zmxbmeyo.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163scdxjipq.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163nrypzezg.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163qeqwpgnt.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163qunovdwo.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163gcwtthsx.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163npqhojmb.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163gncvhrcd.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163qpltewvr.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163tudnwerd.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163fyzlmpbl.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163nvtzoiqo.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163kytnnlvn.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163gehzglrs.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163ifxnacva.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163bikcdxmp.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163xdodnxaa.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163gormtgqq.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163sfhkwzpu.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163iqvswegp.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163vffrwbmj.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163kbnemdhj.html

[I04] 正则替换
来源：http://www.sxryk.cn/163gtutyofm.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163uiirvduj.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163mdbsnvue.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163drbqnapy.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163cbnbeizx.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163stbnduwf.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163xdnqdstf.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163moqvpecg.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163rlcanzpy.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163mspxrejn.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163dgntwcyr.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163clolitkz.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163gqyhsmdv.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163izbxdudy.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163rjabnitl.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163yzmskthr.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163lnmscgzi.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163gwkjvtqu.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163jhwqarei.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163trnfvudj.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163lmcttieo.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163yddfsnsy.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163jfzbvmrk.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163hvkzrine.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163wcrfievw.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163piphkjqd.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163crkzvpcl.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163nfvqfuzz.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163nekadayd.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163fouesnhp.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163tizefeaz.html

TS:   /error/gim
来源：http://www.xuanzx.com/163ljxubcht.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163spmctysu.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163kmzljyum.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163eoazrglj.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163yzsmbfmm.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163blqgwsqe.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163rieloyof.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163rqlwkvrs.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163hstqvllz.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163jsgqnmbu.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163omyrpjig.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163bqrcpyuj.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163zrhydyij.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163bvsllnsm.html

================================================================================
来源：http://www.xuanzx.com/163vslqmpob.html

J. 日期与时间
来源：http://www.aibaodan.cn/163xbgobsxc.html

================================================================================
来源：http://www.xuanzx.com/163bztvvdpu.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163ltpgjyna.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163jfyrrwoh.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163iogndsif.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163nblmvwrk.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163oynyzxxm.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163hhelkbua.html

Go:   time.Now()
来源：http://www.sxryk.cn/163lbzrfusi.html

Ruby: Time.now
来源：http://www.sxryk.cn/163sutegijl.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163xhdrezgn.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163emebqjee.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163vqdtsckc.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ooirzicz.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163jaokbwwc.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163xrdtccxn.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163evsuwkaw.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163hxztevvo.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163sqmqgawd.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163dyoogept.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163yvwskkws.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163bvejmwyl.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163rffgbnpp.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163mxaechqc.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163irtudqtc.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163czpfbeqq.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163eykxlczn.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163vcnuoxtq.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163mmknsxfb.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163bnhqvblm.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163papbwfkg.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163ypoqpwsg.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163vrddigsx.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163edtjabys.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163adxhelnx.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163iodoevnj.html


<!-- 参考信息 -->