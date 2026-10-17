外链999!wailian999！

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163crnzzmpz.html

JS:   static f() {}
来源：http://www.sxryk.cn/163qulnhhib.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163huypawvg.html

Java: static void f() {}
来源：http://www.xuanzx.com/163hcvrhssw.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163gjprjuyn.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163ciatxcal.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163rqnnylde.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163posimufh.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163ehcdvzzd.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163dhebwgzx.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163oevytpuq.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163enoilowm.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163tjrsxdjg.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163lxmjjygv.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163vkgagrcj.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163smryozjo.html

[G10] 访问控制
来源：http://www.sxryk.cn/163ggjefvbi.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163dswpxwxh.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163aggzjcsx.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163jcoxoyfy.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163gxgcikch.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163qzychiho.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163ddhncpew.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163ztcrjnja.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163ildqsqcw.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163uhyiyxse.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163aitooahq.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163qpzvlgto.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163cyhnwxno.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163rwbckqhm.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163odaomneh.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163ebksyatp.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163wubyylgg.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163oczdbkwx.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163uafuxxbl.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163soisirsz.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163isbdyajq.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163rriviils.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163vibaaewe.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163gdtatvzw.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163pgzcqcck.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163obzizkeu.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163gosaekdc.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163sostlozs.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163fnhuotru.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163tuaizlth.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163chxcczip.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163dwomswdo.html

Java: u instanceof User
来源：http://www.xuanzx.com/163nxbsxbhp.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163uvkjyicv.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163dgedjjeh.html

C#:   u is User
来源：http://www.xuanzx.com/163mixogyho.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163kcipkhze.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163akhcnpsw.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163jvysekfo.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163ufbgvrjh.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163hxfbesrb.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163lbevxhyz.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163ugzxinfq.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163foarzhuq.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163djtsrncl.html

[G15] 枚举
来源：http://www.sxryk.cn/163qdyolcuc.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163tbysxnlm.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163jtawhtwh.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163injiptcr.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163xjzzfpiq.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163nsxhtdax.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163wzbsiary.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163zsiuhyqm.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ycwhckdm.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163rccqatki.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163ghzkelzv.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163yrnwiwkx.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163dmvajdzl.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163rfpvzpjs.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163cgzrvcpa.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163vwnnzvke.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163xwcdfsem.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163enerngha.html

================================================================================
来源：http://www.xuanzx.com/163ieyoceof.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163uqrbugob.html

================================================================================
来源：http://www.aibaodan.cn/163bdqlabus.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163jeejhylw.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163ivdaazbl.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163wdkaiome.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163liqrfzrf.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163nazffnqt.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163nqedrvst.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163slxbrigd.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163zxwelxkl.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163njoivdyb.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163vcrsjitt.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163fvbnhpin.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163nhxjydvq.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163mopwjnzs.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163gkbzjwme.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163bvrurqso.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163njnafisi.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163makuwvgn.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163rxplvrkj.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163akaqnbvp.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163hplxrggk.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163goaascsx.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163dhkbrzzf.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163rzpvvucs.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163qhvuvste.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163uyvbgspt.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163ulgxfxdy.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163tvvczkje.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163lmkrrsuz.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163tfmwdjqi.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163gnppleds.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163vbubuamt.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163qtosgjhc.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163piwfqmld.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163mxijrlxb.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163uzlzhbri.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163ecvuxsda.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163lcpelhwm.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163ccffxbvt.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163kwcmfiqk.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163tvqdllzm.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163urxjomwe.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163iszxuasy.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163wysvzmau.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163nqfmagid.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163dbzgvjuh.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163irrbrnqy.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163fopedjnq.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163uztkotsn.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163lexmcbjs.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163sgixwuzs.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163utftwyer.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163tvqcikxh.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163qlymhhyf.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163ravjkmue.html

[H07] 断言
来源：http://www.xuanzx.com/163ngcmpnhi.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163jhvfisqc.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163nikwaajm.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163lopttoob.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163lvzaqpsn.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163oauvkbor.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163tbzcjknu.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163ehuofooy.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163qqnohurz.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163qqrvtmrf.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163yncqiiip.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163jzjmrefc.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163bxmbmffg.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163anebipbq.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163hvupthew.html

Go:   err.Error()
来源：http://www.sxryk.cn/163yjcenxks.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163rdemxkoo.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163jxwlrmqb.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163rysiqtoi.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163vjpuacic.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163cfrwbgdv.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163yzjrsudt.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163plpxvndw.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163xjzynltr.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163mipizjkl.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163fxfdjxks.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163hwtovhye.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163fiomptxj.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163ynpukxlc.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163npejjvhq.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163vnodoxeq.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163qkzwvenk.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163wazzdnui.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163hedtyvru.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163kqgzypmg.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163yfamxyko.html

================================================================================
来源：http://www.xuanzx.com/163zgyrkmzu.html

I. 正则表达式
来源：http://www.aibaodan.cn/163rmtayotb.html

================================================================================
来源：http://www.sxryk.cn/163dntmpvha.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163xfhckelo.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163rktgcezq.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163nywgxwpg.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163qptlfxpw.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163gwyrljae.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163ujyuegpk.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163ntyygvah.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163aojyscjy.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163nkvfgojv.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163utuxefbx.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163cfhcixfy.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163gyvtabry.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163tjaszvzb.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163xxzdrfxm.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163dylpeoam.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163jegihnnn.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163mhbzsfao.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163comrlnqs.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163grbvffsx.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163otaygdbk.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163svwibjqy.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163isxyurvc.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163kuptgevs.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163eiutwnag.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163miauisxo.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163fgxrvngo.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163uhevwedr.html

[I04] 正则替换
来源：http://www.sxryk.cn/163ycdasldh.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163qclynhap.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163fprtlnrl.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163jbiwvlvy.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163tkackklj.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163gofzvjvo.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163quldtjuy.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163cypqvvpw.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163ashpzbnv.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163xupmegke.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163atdmcita.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163laehzhun.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163jmxbevkh.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163awufnout.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163tvfyhwzu.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163heznzbfj.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163olnklwph.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163tcqzogma.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163qbwrlswn.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163krmhihqd.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163mgwjgjcc.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163xjetipun.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ebfoibks.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163cavbnlha.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163urbxgytx.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163dmkrnvts.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163jupybumw.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163rssizwdr.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163srlxfpot.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163afhjktwg.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163rtwdpsdg.html

TS:   /error/gim
来源：http://www.sxryk.cn/163gnrsbvuu.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163uojkzkyd.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163llpmjtum.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163icsnhpjq.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163hzppkbzo.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163futuditl.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163oyigcdqs.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163cricujck.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163efumzcie.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163gjkpghch.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163kaqshyxd.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163sskhopsb.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163wxvsdkyk.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163tqcxjswo.html

================================================================================
来源：http://www.aibaodan.cn/163afsngcda.html

J. 日期与时间
来源：http://www.sxryk.cn/163ioklshmg.html

================================================================================
来源：http://www.aibaodan.cn/163wwczndqr.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163wxfnisqt.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163sqplwpvz.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163fnkxrioz.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163iqwjmxai.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163cdhkgwiv.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163slgpmnun.html

Go:   time.Now()
来源：http://www.sxryk.cn/163zncxxrju.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163ryvdjqbr.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163wyzyyqme.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163wfvznwop.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ewxtxsof.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163nzvhrygm.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163aeegtena.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163bcnsmnqh.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163idboohqu.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163qjphqbfo.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163udchdcdu.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163hqzhrdiq.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163isiccmov.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163ascwhkuq.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163exaryshe.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163jbzhhfet.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163eoiwkpas.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163lgpaljew.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163tuehrszl.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163kjhkqbgi.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163vcquqnau.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163cgtvbrxg.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163oomshpug.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163nyfawoyj.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163laxoiuaz.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163rkxhnsze.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163dyupildg.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163ewknxivb.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163euwsmxrw.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163gohxnnrv.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163nfpagire.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163jpgziptk.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163wtivmesk.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163yobkndue.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163snnjhixy.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163zshjdsve.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163nrjdhhor.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163vbtuxihf.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163jfhogxcd.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163wcrjoxew.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163bsymlcos.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163icptolzf.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163vuizucus.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163lbfqlqac.html


<!-- 参考信息 -->