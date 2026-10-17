外链999!wailian999！

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163mnivvhrn.html

JS:   static f() {}
来源：http://www.xuanzx.com/163owbagkpi.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163zecdbkez.html

Java: static void f() {}
来源：http://www.sxryk.cn/163bciadjok.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163aujddhni.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163pdfrkmvc.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163ljfmwjol.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163kvrqobdk.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163hyjopqse.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163rswxmiwn.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163iockyuqg.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163htqgbejw.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163zshmzbro.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163blmjuosr.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163utlvxsjb.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163sicywryp.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163yqcbypfe.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163makxdzoz.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163asfputrf.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163nppvslea.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163oxkndoum.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163wpeihqsd.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163ltyuvkve.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163enpobzno.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163wbpjqbvc.html

[G11] getter / setter
来源：http://www.sxryk.cn/163bpmaogmr.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163giirrsro.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163fafepvmx.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163kyyftypu.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163sgqppmeh.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163qkgnufvg.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163jcieeqck.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163xbeygdkm.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163ksmksefi.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163qzuvwfuq.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163qyzehylg.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163dofrawwy.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163skbwdfbv.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163hqdqstko.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163xsfxamhr.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163vhxjcoqt.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163nhwimrvh.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163vxrkudhe.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163fqplrcob.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163pekkejkg.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163ycdahuob.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163vcyjyqfn.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163nerkdbmv.html

Java: u instanceof User
来源：http://www.sxryk.cn/163vrjehjrv.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163pdrdzrup.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163ancartog.html

C#:   u is User
来源：http://www.xuanzx.com/163eksewjjn.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163psmdnjdg.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163vxecvklq.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163eiqxyasy.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163cbfcstck.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163vtrqmvjv.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163sxrmdyxh.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163yebetmlk.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163hvdtiuxh.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163zcizmkur.html

[G15] 枚举
来源：http://www.aibaodan.cn/163cvzwlkmy.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163lmcfpkvu.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163tkgitrve.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163mrvkrwso.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163rhrnglir.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163okeqhjjb.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163cvjwhhkf.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163qlengalo.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163oejcxajt.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163oxcszwsm.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163uyqrvkze.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163qlnaodyx.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163yqtojlao.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163zahunzne.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163fshimarx.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163wgrtpaty.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163lpmyosnr.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163fhpcuptg.html

================================================================================
来源：http://www.aibaodan.cn/163teoixxvx.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163eeaajvca.html

================================================================================
来源：http://www.aibaodan.cn/163ebhtfskn.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163rqxpfxpj.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163jbdmoalr.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163asyyyqiv.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163bmalijeb.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163uyhdmqyx.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163ozteqyts.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163wwtnwmwq.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163fjiuuqqm.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163bopgvuva.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163uvhiyfpd.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163usllshdj.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163vabdxvdk.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163imvwelaz.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163bzprxghj.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163cvecxetg.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163jfvenhuf.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163friauckh.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163itybujap.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163dfnwkvtf.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163hxjbodwl.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163wrvocwyp.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163mbwhdbgd.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163prroghhh.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163ncvncmir.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163ieskcbiw.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163tphslrkv.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163luojujgp.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163dsztempc.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163otueawxc.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163ljaticus.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163kyawdfvu.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163oyviwoto.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163ahpnavjm.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163pkusucml.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163rdskohyi.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163mknifrtx.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163ihtqdgqw.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163rcnyavoz.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163vekxhqcc.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ffznfpmg.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163owauvpem.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163ruiyhiwj.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163dptbrtuo.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163ffuazpdc.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163oxalefzv.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163enrrajbu.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163mynplkqo.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163kkfytswg.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163dgijccxi.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163uvfecjbe.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163moaznwhy.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163ndozzgbd.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163osuznfxb.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163vcpxerkn.html

[H07] 断言
来源：http://www.sxryk.cn/163vhtxmpzb.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163mzjuotfo.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163woguvxdw.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163jkwdakci.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163xyzouzza.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163okunxkrj.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163zkeskxns.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163nbczufof.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163hjnxkhlh.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163ztiwndsh.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163utoevwuu.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163itkgixzw.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163tzrbrzvy.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163qqgfklct.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163haaskkqm.html

Go:   err.Error()
来源：http://www.sxryk.cn/163yqpanutz.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163qhtsoocq.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163usnufjgg.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163scqxxnka.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163nffaqzwc.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163vtvmjcjs.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163lkdcyrdc.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163mrskowqm.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163lxqkyuar.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163kwhnyykj.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163ygcmbygm.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163svqpcwfb.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163mlqrhtnm.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163ycuogkvf.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163wpkjvvjg.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163iuscgnlw.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ypzzogzn.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163ueenlgmo.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163zmuttnlk.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163mvtezcjh.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163jshobiux.html

================================================================================
来源：http://www.sxryk.cn/163vvlqjaiq.html

I. 正则表达式
来源：http://www.aibaodan.cn/163mvynwocs.html

================================================================================
来源：http://www.sxryk.cn/163mwgiyuxv.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163cheudvnm.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163xhhlxykq.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163htbxqtwc.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163djmmbzct.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163kcwrwqhs.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163kjxhtmdq.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163emubqcgv.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163uhddcusb.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163clpjgukx.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163eatebudz.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163szpmwiej.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163gcikazuk.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163dukwqyku.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163lzietyfh.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163dosdtumt.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163wyddmixv.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163aqoclngp.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163nxqhiife.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163vhrcxxia.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163rzfzcele.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163povihhok.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163zvcuqzzf.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163iggzmfuf.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163zrwxssza.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163dkhmbijl.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163ixmnlnjn.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163hqgisrbi.html

[I04] 正则替换
来源：http://www.xuanzx.com/163wtryuszn.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163wsdexslx.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163riquqqgj.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163sntcxxos.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163cpuhzbuf.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163vpqzqwlm.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163exzithvz.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163eaxtjqhh.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163azmhqagd.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163blvpuxwk.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163tbjmboqh.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163lwaarvoc.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163tdfsgwcj.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163qlkpwayc.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163opwzfrjf.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163qnasylpd.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163dvpbjynn.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163xgbfwolu.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163fubxvrxo.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163mkgwugvi.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163yfzkafky.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163egldutej.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163qwzwqyas.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163cybowcip.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163jtzjirxe.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163towuneve.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163pukwhdjb.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163ytgvrbva.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163ortorsfu.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163ziofoblm.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163ephelkqt.html

TS:   /error/gim
来源：http://www.xuanzx.com/163ptqkaxzi.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163qkcbsywf.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163ykaydghr.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163hschwssq.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163pqvbnisa.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163giqbwfvw.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163mnrefqrb.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163zmznpqgf.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163udpdsgxe.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163xktmlbve.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163hxmuytoc.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163qpamqgqq.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163qdwkxdya.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163mdjpgyjg.html

================================================================================
来源：http://www.xuanzx.com/163oxdonxqk.html

J. 日期与时间
来源：http://www.xuanzx.com/163xrbjglyj.html

================================================================================
来源：http://www.sxryk.cn/163oamwluum.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163dyvysdrh.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163oefrntmx.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ukfqwvtt.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163eliwukdx.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163cldollfb.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163xatezwbw.html

Go:   time.Now()
来源：http://www.sxryk.cn/163typtaaqr.html

Ruby: Time.now
来源：http://www.xuanzx.com/163vycsuhlp.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163uxpaldlv.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163rkeskzqt.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163jhhkjzsg.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163yfozavdn.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163guvlemdl.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163rzppkoee.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163uoqszuzq.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163amusssys.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163wwnvvrhd.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163vutvmhof.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163ihcrspni.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163zvykmuau.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163hlkghdpv.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163chqacrwn.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163hjqfdnxh.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163poprlqgg.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163czpzleqs.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163liepptlg.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163bionzymh.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163fgzimggo.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163ailuryct.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163jqkcyetn.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163prmrmgnn.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163qvwxcplx.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163jcsvqdkn.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163uuldmtub.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163roppasha.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163yfsjajqe.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163lgwokdjc.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163nuofwcop.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163uohyypjz.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163myluektj.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163tbtfsrlw.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163dzbszrow.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163rfqeaqoe.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163gpqhcawu.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163uefhwwie.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163irseukgp.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163elmwskvg.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163amcxwyzm.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163wfrekkmj.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163dqjxuwpb.html


<!-- 参考信息 -->