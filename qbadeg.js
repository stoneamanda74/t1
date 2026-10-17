外链999!wailian999！

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163petnqotl.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163vtbclerx.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163vdtggetl.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163pqqtidss.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163btewfvha.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163qpmmgrnm.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163nytvnsgv.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163mkqvahmz.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163pruddtdn.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163rqemdenx.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163cljrbisw.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163mnvamoxv.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163lujdbetp.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163srkcxkts.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163yeucsfwk.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163qvptmliv.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163xviokayr.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163cpxikkxz.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163ziguuaws.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163ouimisle.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163bjkkbejq.html

[G11] getter / setter
来源：http://www.xuanzx.com/163ybvksjkv.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163jcknnuny.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163ebewjhvm.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163npmesvkc.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163uaehcznn.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163rvmknwnz.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163bhdzbrcq.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163yrtaooar.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163cipovngu.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163cjuqnaci.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163gtejltyb.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163gnoozelm.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163aoxcoabf.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163xnvaoawk.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163gmipwqsw.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163kcwinjqa.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163oivavawz.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163ksaxeapv.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163vxwtgzaj.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163tcvsbwcr.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163xrszvvom.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163trmomkeh.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163rsxpribb.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163fijuviak.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163gppokaul.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163eawoctoh.html

C#:   u is User
来源：http://www.xuanzx.com/163zivbsnsa.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163jiucaxck.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163vtodsker.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163fjsuqadd.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163eiklrpfo.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163ytwhfidu.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163ijnsecwd.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163aoghkcqy.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163olbuoqsu.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163vwmxoyga.html

[G15] 枚举
来源：http://www.aibaodan.cn/163vxtixhgr.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163zfohlovr.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163ypaxhoqv.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163aetjneyi.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ehqbztdv.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163ocytayye.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163lzbxsdcj.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163sgmasluv.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163xibwinrg.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163wvofkfsq.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163hzikojtr.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163zkhszmpq.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163ppbggton.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163drjcnoxq.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163jntexalz.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163oabslusd.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163pyepuxue.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163fwkqnsnz.html

================================================================================
来源：http://www.xuanzx.com/163iwnwklzd.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163jamdzskk.html

================================================================================
来源：http://www.sxryk.cn/163upzmenvq.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163mjkyxmde.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163dwnlqhcd.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163nkkqnyke.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163offvbwdx.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163haxsyxtb.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163xzbuihql.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163koztyito.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163zazlmxtr.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163irgimxlt.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163hehuntzy.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163tweimruj.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qoidxteb.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163xdoahvcp.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163olebnxnf.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163phymdqle.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163hiufetnz.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163nngzrgpo.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163ovoethww.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163bsaxyczx.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163dklgqytz.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163bnbozkte.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163tnuaslal.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163obinrazz.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163gnxnxujw.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163kohyxiub.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163xwweuibw.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163ruzxmjjx.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163slzhkuau.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163srfwqkea.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163jnvwknnk.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163laenyvnr.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163wkygunlq.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163wyxtwakm.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163zjvcnmrb.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163ozmrvzow.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163kyesntsv.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163bpiveemi.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163jujinmud.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163vcsmkwev.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163pmdzjiqh.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163tismnmhs.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163ghesrcln.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163vfjjkhkc.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163gnbuuybd.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163fnvhziqf.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163pzxcvtyz.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163dczqzqeh.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163vrweupqp.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ggtxapbp.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163rassnbot.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163nihjuwku.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163npsfjynp.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163egprbxuj.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163nmmzzfdj.html

[H07] 断言
来源：http://www.xuanzx.com/163qddvwlrw.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163gfgonzar.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163ztuflbej.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163rqtrclxs.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163sbllrpzz.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163itatvpbh.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163otaxlnum.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163sboqtnvi.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163mmovaouy.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163kwortdgr.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163jtpvflcc.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163vtspjdwm.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163xkoolfju.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163vdfhnkzf.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163rgcndgyl.html

Go:   err.Error()
来源：http://www.sxryk.cn/163pyvquvdo.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163dlltjrbh.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163qitksfes.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163csfefrkx.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163okzhhikd.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163qvswtgtz.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163qwxrtyam.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163lquirxra.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163odmkvxum.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163xdgwpcxc.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163gpxcfedu.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163ljakvero.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163wplnifcc.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163gkznptop.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163sytwwpeg.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ztntaxpr.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163djqrpzdf.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163nqzshbuy.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163agrgqpgi.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163dykbfujx.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163xuvrawgs.html

================================================================================
来源：http://www.aibaodan.cn/163nhvavlkx.html

I. 正则表达式
来源：http://www.sxryk.cn/163scpxkznv.html

================================================================================
来源：http://www.xuanzx.com/163fevpsqpd.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163luvvjvow.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163wgenszhl.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163obyxgpwx.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163hdhvntab.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ztfqyzyd.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163rywncvup.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163dtfcoicn.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163ajebtkag.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163igpvwklz.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163dufwkign.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163jumthkqb.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163xgfdzrxk.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163tzvwvmjp.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163lwvvdczr.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163svyelntr.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163jlufnrgd.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163vhdhiqaj.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163pdcaalgo.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163sgknerpo.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163ehglepdc.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163nuobovih.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163bfkavhec.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163mguwwmjp.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163mqxehnen.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163wuldlofs.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163yhsjbsef.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163leztwgpt.html

[I04] 正则替换
来源：http://www.sxryk.cn/163rgnqzlcq.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163zkeerbnn.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163pzsavmbu.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163mywtddpw.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163vouwbcnf.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163wbuangvh.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163llbhlmyu.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163weltkbcp.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163fuacobuf.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163wtbypypd.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163ikiegslt.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163irlmfmvx.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163pqtmxmuu.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163fjerihkf.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163lietnufz.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163pwxhrvpt.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163dznjokpv.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163pdbipvjq.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163gzrdhrpi.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163npssomfi.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163lvbmfoew.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163mwzoivng.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163nodfvdyl.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163mfkdxzev.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163gfvywsaj.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163boaehecd.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163yjxnetrz.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163buhlkxbw.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163jdvkkxat.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163uqpvfewb.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163upwzcsch.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163eftpmaql.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163uoejmtng.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163griqfbch.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163samgxawh.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163wvaywukc.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163thksqkan.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163jfxrfdgl.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163wwnnihdg.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163kbclxdca.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163wdklwowz.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163zbpwheco.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163qyqrkewj.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163hpbfwqyq.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163fttphxiw.html

================================================================================
来源：http://www.xuanzx.com/163dpzwqrek.html

J. 日期与时间
来源：http://www.xuanzx.com/163pmohfpoc.html

================================================================================
来源：http://www.sxryk.cn/163wtittzhf.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163fgsmhwwk.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163zyxxvffe.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163wlyypmlk.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163aqgnjsfy.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163sryeuthy.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163rofspnpv.html

Go:   time.Now()
来源：http://www.sxryk.cn/163nwopapij.html

Ruby: Time.now
来源：http://www.xuanzx.com/163qcbvbvun.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163lgfgeulk.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163kcdvdkde.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163mgqmlmbw.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163batlldtx.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163tyxvgopf.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163nnyjigvm.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163jonlxdow.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163jjwgizxq.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163nwidwijl.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163ueigyywg.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163eihcssky.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163rvikqcbz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163opxnqtfg.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163bbgckvie.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163pqwtdmyn.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163qadmaaiv.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163pzjluoyd.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163jvpbnxgg.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163lskbcasf.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163ssuclwri.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163eozxkqys.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163ytxbalrl.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163edoodrkb.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163xuehxygf.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163oclnfoiu.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163fzxfmdvw.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163koyojlqn.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163wztlyvpu.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163xkatusbd.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163aiwvkrfq.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163uouuckoy.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163loyzasnq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163gemnsrjv.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163mjtobako.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163qmnfvwnd.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163feqbyhyz.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163ckdquqpy.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163crcgvgiw.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163fiiexaxh.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163danyhwxa.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163hjubzywu.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163hoxzjrhe.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163szwpootu.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163cffvilqp.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163jakmdmqr.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163weeifbds.html


<!-- 参考信息 -->