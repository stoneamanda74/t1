外链999!wailian999！

Ruby: super
来源：http://www.sxryk.cn/163hncwvgkk.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163hldbinbk.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163jfbhfexm.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163angvichz.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163hgskvbjf.html

JS:   static f() {}
来源：http://www.sxryk.cn/163kfxigflw.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163qphwrige.html

Java: static void f() {}
来源：http://www.sxryk.cn/163tmecdlwi.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163pypbkybi.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163ywqugdqo.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163xaebsaxv.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163kdatmzkm.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163jiqcdvhn.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163taddlgdn.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163mrwxcyfy.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163uecmzihy.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163fmhrujko.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163gkzkhwmp.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163heifblnd.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163kdalkemd.html

[G10] 访问控制
来源：http://www.xuanzx.com/163btynkiwy.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163gkojbcrj.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163ypjfnxgx.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163nyrdxzzj.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163hcdjdcmh.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163qdhzenxp.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163nkugckzz.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163kudzhifd.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163dbvoeaxt.html

[G11] getter / setter
来源：http://www.sxryk.cn/163dymywwho.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163azmksxvb.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163imlndiru.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163fmgptbnm.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163zrdggjin.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163mirgyhbp.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163opkjnvem.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163wdeshzrn.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163qfacffmb.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163nohzojay.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163estbedqo.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163lgbkwkbi.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163crjognco.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163ourrqaqu.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163fhkojhtu.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163rgbethou.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163bhdyzphj.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163btpgfblc.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163dluocjhw.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163ytmbitfg.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163juazigra.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163nmqyvqtz.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163eodrwwdb.html

Java: u instanceof User
来源：http://www.sxryk.cn/163vczjpyog.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163azbdynnc.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163yvzhoodg.html

C#:   u is User
来源：http://www.aibaodan.cn/163xrwlhoii.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163elupwkse.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163rrldnwhw.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163uzvvnuob.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163uzbyxegd.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163rrkdupwn.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163xrrarmvh.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163mupjmdrn.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163djmiikig.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163keodxgwf.html

[G15] 枚举
来源：http://www.aibaodan.cn/163bwbclddu.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163frvqovoe.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163uddxmgnb.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163ksvazhfc.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163vjqpomta.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163enlrheuc.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163wdrlpupk.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163pgfttdon.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163aiwnyzmp.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163emvhusdv.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163uwfbmesa.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ssddhuvq.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163loofmtfr.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163dcovvhxa.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163qvnpbqed.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163mcwxfood.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163rvtnyztm.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163iixugzvd.html

================================================================================
来源：http://www.xuanzx.com/163obxvqdfg.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163zzuhhdrf.html

================================================================================
来源：http://www.aibaodan.cn/163lcwgzcrh.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163pxiddlku.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163lhdkrqzm.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163fgpxqlzq.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163yvdexcsa.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163pabkttow.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163edknrvnd.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163iiuqgzuf.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163syxorhbc.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163htgupvvo.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163iugryqrg.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163twlnutat.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163fawvevbo.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163gvlxienc.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163gscpkqrg.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163kmbprhow.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163hlyoxoyf.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163qplaraje.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163qduaakgw.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163pdjwrfdd.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163hxrqvqzt.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163uymxrkfu.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163wvefkgin.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163mwimkaul.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163itmeemxy.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163xomhenuu.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163oeukoyrj.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163wywapggh.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163pqwreaqj.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163zxjqztog.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163zkyydnbq.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163tppldvpx.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163jszoivyh.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163sodggsop.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163fgtmnvev.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163pvbbanwp.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163uawjqiiu.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163aqgnlkkb.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163onflvoej.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163jolwajds.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163flcixvps.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163gzukwdqk.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163eqkfwblt.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163hlsjkdgg.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163fscsepdh.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163zgazkvpe.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163rphphmse.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163kceeszsp.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163ragsvkmv.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163uhtrgxdz.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163mfbktznm.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163gbawjujt.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163ysiicjqt.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163bnejibph.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163ffrrqbxm.html

[H07] 断言
来源：http://www.aibaodan.cn/163bzsrcmts.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163ehcmmgfy.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163zvsszidk.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163anmzkxeo.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163xduuunjc.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163rkufxowu.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163yebumiyr.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163ssqmsbxz.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163heknyzen.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163txibottf.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163dcxhoono.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163pzbquksb.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163ualtsykr.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163kcnhpmnt.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163iwvflnkg.html

Go:   err.Error()
来源：http://www.sxryk.cn/163yuysszkt.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163eyhniyog.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163jmwouvtl.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163otojldok.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163jpypytwa.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163xitqcqkw.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163tmulsjiu.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163fwcebmpi.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163gmdcttng.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163wtduduiw.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163atyplzcu.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163hpnshxkz.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163shudngcd.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163ovxeaadg.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163lppvjwvq.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163nbhiuhux.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163kcxhaxpt.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163pnkdkcdr.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163lwhukoza.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163htfwgboq.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163tjidbive.html

================================================================================
来源：http://www.aibaodan.cn/163rukjxngc.html

I. 正则表达式
来源：http://www.sxryk.cn/163vcbsblxi.html

================================================================================
来源：http://www.aibaodan.cn/163wjbhmfnd.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163fhkxchfp.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163pczmzfzt.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163qmpodyjp.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ugtshetn.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163vunobhzw.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163evomrwqs.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163ioupbkix.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163umshezvi.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163ohhocgnw.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163tauyzwbb.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163giolclhc.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163vrgkouel.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163hdssybbb.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163dfctgqlp.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163qgnhofnp.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163glefxvmb.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163awtpursd.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163pnsqvvka.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163fcpivaku.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163bxdagpjz.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163pjplfaht.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163uvufxfvo.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163snwraxtc.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163ccfidtge.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163siolkzhu.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163dptosfty.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163ngtojepn.html

[I04] 正则替换
来源：http://www.xuanzx.com/163kkhdjchx.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163arfvsugl.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163adazhmgu.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163zwmxisdo.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163grnfckvg.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163ejnqpntj.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163zysixcbv.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163iiccfajc.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163piwuibgo.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163jmbdgrci.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163hxfosklf.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163mvzymqxh.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163mrrbfgoe.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163hqgyqvhx.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163kfggxrgx.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163ucqvhggk.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ftbnkrvw.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163sqscqwku.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163kshtpovd.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163sehlfiub.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163sfgyaeen.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163dmimrmpd.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163sxjluugb.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163ipwfenqy.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163uxegqgsq.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163jfinyitq.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163zekbpcbd.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163milcjsus.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163jyukdxdy.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163fgeolajt.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163owzimdvy.html

TS:   /error/gim
来源：http://www.xuanzx.com/163vggfjiym.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163vynqwjyz.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163fgmbfkyp.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163xzvgkkua.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163auyaviqo.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163uncrgeij.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163epgefnid.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163qokflams.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163xznyqfak.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163anvvfxmg.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163ptmtrpcf.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163jgrmamtx.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163xyqxpbtq.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163tfievzgj.html

================================================================================
来源：http://www.sxryk.cn/163vyxkajel.html

J. 日期与时间
来源：http://www.aibaodan.cn/163vebqmdoq.html

================================================================================
来源：http://www.xuanzx.com/163dplcdqdf.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163biuzcznq.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163dphvkbhg.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ipwwngxu.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163swgpkfmn.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163bftehlhi.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163yauhjpli.html

Go:   time.Now()
来源：http://www.sxryk.cn/163vczwepbc.html

Ruby: Time.now
来源：http://www.sxryk.cn/163oxrdgnwk.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163giwnokjk.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163hussxqbp.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163vhilomgv.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163sfexcbcl.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163mntlrmsh.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163dcescnos.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163wahitgmh.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163fwxnmdyh.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163rucceknh.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163ovpohkcp.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163xmwfbgwi.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163zrljvvzx.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163ezxftspb.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163quntwslm.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163obirjpaj.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163dbmqhggd.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163bfavubpj.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163trxxffcp.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163omzuykzl.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163rlspluvv.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163efvfuevh.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163muvixage.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163htapfpbc.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163wwugrqmw.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163zzslzqfg.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163adrwrcfp.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163sbkiueio.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163lafuxfhl.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163fjpylcrl.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163atudyhze.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163tlzkdrwa.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ibdhdhxn.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163vuyurdit.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163ntzojncs.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163ietaungk.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163jgekuqpk.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163okjlcqck.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163qudzxzxd.html


<!-- 参考信息 -->