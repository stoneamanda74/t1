外链999!wailian999！

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163tuyxvfor.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163cgzkmvnj.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163pwbzuyld.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163lsilafzx.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163vulhgvka.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163bfsnmfxb.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163amakwlfy.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163yycfveue.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163qgpcqaow.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163qqkmyiro.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163mgahzdle.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163ukcnxvar.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163strhvjht.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163rhvwbuaf.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163qpukborv.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163fsipnfdh.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163ppibvoyf.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163xtisdxlt.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163rrvejkpt.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163kvfgebmw.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163axqbfrev.html

[G11] getter / setter
来源：http://www.xuanzx.com/163vjnzduff.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163azwzolvh.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163qajdewuu.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163nppekoeu.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163btaqualy.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163rxoamtgj.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163caokvguj.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163qtqnbrsf.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163clflafeo.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163bkkpmedp.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163bwodackx.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163whltoakz.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163buibrvte.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163fhaefpex.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163ojkbrfds.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163ibrhiapr.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163uvlfkzcx.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163oyrtohub.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163itlhomcd.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163ljrlgplw.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163acronsap.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163qanwfnsv.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163tzzlpmdc.html

Java: u instanceof User
来源：http://www.sxryk.cn/163vrejenoi.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163maofyecd.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163rncetdol.html

C#:   u is User
来源：http://www.xuanzx.com/163ytcmeoek.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163isnatraq.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163rgasdfti.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163esgxiwuv.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163rqocirre.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163tvdzjukx.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163pfdhniqs.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163hfrycqbq.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163kqtqgoow.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163uzawwoif.html

[G15] 枚举
来源：http://www.xuanzx.com/163kdfcmqzr.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163kujyletw.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163jfboqqvj.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163vxjkjayz.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163wolkoxmb.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163rnpspcqv.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163auchbkzw.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163wohebafp.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163jewmwfyr.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163sjlmpagd.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163ufscsnxa.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163qaccfvyh.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163tkfnarnk.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163msrawyya.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163wwqlerjr.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163bsnitbge.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163fcupglmr.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163vdnjarwz.html

================================================================================
来源：http://www.sxryk.cn/163yeponhbx.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163nqwdavix.html

================================================================================
来源：http://www.xuanzx.com/163yguwrigr.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163rxsohhul.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163xakaonte.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163guvonqxt.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163xhsmyepl.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163prosrqbe.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163fxtkjykl.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163ztnbtpop.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163ulrwlesn.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163zbvucmoz.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163iquxjock.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163ecbdfdkd.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163tndjmlql.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163fiqtxcxq.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163odytvlox.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163hbwduejq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163ugidycgi.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163zregkzpt.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163eczapodj.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163pijtlvlc.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163gcddimok.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163rblybyxd.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163wyoohkqw.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163fhusarga.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163jpmbhldx.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163rugihjft.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163wetykmlc.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163nuvbifho.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163jfgovvxy.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163seskwoee.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163solpwyzc.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163dmtarsqg.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163szjtbzls.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163ivojworn.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163fmxoyxsv.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163llgrhjbk.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163tnofaqzg.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163atdeolnk.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163dsmilsna.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163ohudixeb.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163fyifokxw.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163hueaxhjg.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163rkgycntf.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163iblryufz.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163lukkfhvo.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163jlacpokg.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163ikaijiqp.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163vwejewli.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163rigccxwb.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163zkyqadgq.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163zmktmraa.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163nvjrtxrj.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163kpitghmq.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163bcdeltty.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163bvkbfyyr.html

[H07] 断言
来源：http://www.xuanzx.com/163xpkrpetm.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163qkgaysvg.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163pqzmquhu.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163anrscxwa.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ledpcjvn.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163rmhnxzdc.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163czgtzkzv.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163zriwhmjc.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163urkuuqof.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163gksiorza.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163qbayfxhh.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163himlylfp.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163yurmauxy.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163jwbqthxk.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163vwjpnpoc.html

Go:   err.Error()
来源：http://www.xuanzx.com/163qsvaagvf.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163yvukksht.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163wauzhsfj.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163shasvgst.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163tjghiuge.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163weoumlwq.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163vutcfegb.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163srjyjqgv.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163abjizbml.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163ttapkuqn.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163mqnhpihj.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163wgbjojgk.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163eqmgidck.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163mjjhyans.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163cetrmlqz.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163khhonoaq.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163zyuhguuv.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163hsuhlnzk.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163zzbcfipr.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163zxxzfnpq.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163jetbvmqd.html

================================================================================
来源：http://www.aibaodan.cn/163tafzohqm.html

I. 正则表达式
来源：http://www.xuanzx.com/163oecxlfhp.html

================================================================================
来源：http://www.xuanzx.com/163eoyytkjb.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163jmwioooc.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163fjtfjbkw.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163cdukinor.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ukzpxnep.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163taxoteuz.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163pgmcdkqd.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163byvlbnhu.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163cgxlbevl.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163zdybqxnp.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163rjdonibk.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163vwzeyypb.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163klggzieo.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163bsdazzjc.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163quensjdx.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163fxejgjlx.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163ngmzfhgb.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163uupyghjq.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163ukkxjird.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163gwdwumwf.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163aktbhcwc.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163pfkmfwvn.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163ildkudjb.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163vumtprhx.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163nwzclxsy.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163dxqhgazq.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163yhckbqli.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163yefpqbgb.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163exjybpox.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163roakltxw.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163gkhetzjd.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163atubovtw.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163mbfqvlna.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163zbxehhak.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163gyodtwyb.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163avmzddst.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163haebvucf.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163wnxaxxjk.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163nabmunro.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163hxffpagf.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163sdrgwnub.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163haijoink.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163acshdxpv.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163dbjzkdwk.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163psuocbxv.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163bnenekko.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163untzrmoq.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163gncbnzfn.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163onhsttcj.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163hpasmiwk.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163asrwdymn.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163bpmpvvne.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163zenlgkxj.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163fsptihxe.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163masovthz.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163dsnbtkfp.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163qlffaksk.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163ifpcfvdq.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163buindmzf.html

TS:   /error/gim
来源：http://www.sxryk.cn/163vbrbqooo.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163zpqqnvuw.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163jhezwurj.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163rqrlbupq.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163ntfjmcbk.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163tomowxbg.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163pilbnukl.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163lgdqzhdf.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163sffspixm.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163zdeefdeb.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163drfbbisq.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163dfopcymz.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163hzlgoqyj.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163cpiwlqxa.html

================================================================================
来源：http://www.sxryk.cn/163reiiwzsq.html

J. 日期与时间
来源：http://www.xuanzx.com/163nivtqtek.html

================================================================================
来源：http://www.xuanzx.com/163ptevbubg.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163frqtwnwi.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163hfawpmwb.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163rteqxcxy.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163pqajkayc.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163emsnwato.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163aoaqwwsj.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163plpqkjdx.html

Ruby: Time.now
来源：http://www.xuanzx.com/163tpaeqnjg.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163ariwzsqy.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163wpcbvyht.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163ntobvqps.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163sxggimia.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163wevbnyva.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163ordaojqn.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163tsvihspj.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163vehffzku.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ugidncke.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163iwxjberw.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163gzkbplnv.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163zihnhvgg.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163bcxetkhz.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163deohuywb.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163bpgcnese.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163khbbtufu.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163kuhiintf.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ngthixqs.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163ghmkxiyn.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163ztbujnai.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163dhxbfyki.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163akotygir.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163wekhlutn.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163frletgyu.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163dcvhfxow.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163wuoxdaxp.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163iabhnwxi.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163fvhztkwj.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163frwnfukj.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163akwuolox.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163awskpqwu.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ypcffxja.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ctlfjobz.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163fksmckqr.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163ceqroqsb.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163qvcnmldv.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163fisojbop.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163aghljkji.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163dwcvozdk.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163wfztafdy.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163kogwgkhd.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163dwugqnih.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163iyfaclek.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163ytnjvhaz.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163vahwddqk.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163itbnoikq.html


<!-- 参考信息 -->