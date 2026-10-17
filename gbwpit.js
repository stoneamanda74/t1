外链999!wailian999！

Ruby: super
来源：http://www.sxryk.cn/163sdjyjshg.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163sktahznd.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163zpjxwwgr.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163ubbfvztp.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163ihdxzveh.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163uuwbsbcf.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163repkbarl.html

Java: static void f() {}
来源：http://www.sxryk.cn/163gxnsxjrq.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163bisqttrf.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163jnthpfke.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163lqoxvypi.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163hfdoxjww.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163ygozgnhj.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163asagiouf.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163bzjfqvik.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163oyyjyjmb.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163oroddviq.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163owjweyip.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163iactyupa.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163zpbusuiq.html

[G10] 访问控制
来源：http://www.xuanzx.com/163sazplqrr.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163uzdidlvj.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163eayflgmh.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163hcirxxwi.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163gqcgrymc.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163ffkkdbxm.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163onvbgrdg.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163najddxrp.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163szxupehe.html

[G11] getter / setter
来源：http://www.xuanzx.com/163ggwchzwq.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163mtpmlvfw.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163drddzydx.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163kdxpttyy.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163ohhwtdqr.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163mofazbnr.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163qfphotep.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163yqqsvege.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163jinyqfjn.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163izkrnwqt.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163ammfspkb.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163fojlnlnl.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163kreyymtk.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163xdwsghqn.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163ktyxksfb.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163illpdrds.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163btudggto.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163kxkpfegd.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163gdduwaul.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163mrauhzfx.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163obwhodbr.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163tlzafidx.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163bgvmyttl.html

Java: u instanceof User
来源：http://www.sxryk.cn/163gukgusfl.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163qapgqjds.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163jrynvfyt.html

C#:   u is User
来源：http://www.aibaodan.cn/163dmrxjcdm.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163cgflqkga.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163rrtjtrte.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163fqiqqkba.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163emmllsac.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163ckkcnyev.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163rucdybmy.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163uozdzdcs.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163uksreskc.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163wxvefyqp.html

[G15] 枚举
来源：http://www.aibaodan.cn/163jmikxhml.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163hjvnmzou.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163rsxucgbp.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163smtvjaiv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163odkjcybz.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163jrsfqtdu.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163yoicpnfj.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163akhpilvm.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ixvyrqmq.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163hahccqec.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163qygcimqu.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ceojyims.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163qjwkfnpq.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163mgexdbpe.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163dkoanrjj.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163qqlvfkxi.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163suzpevau.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163wwyqoeiz.html

================================================================================
来源：http://www.xuanzx.com/163lrivmvmg.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163vegnppgb.html

================================================================================
来源：http://www.aibaodan.cn/163ttefvxyi.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163zetnzztw.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163qfsywyjq.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163yolaibcy.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163zepggypm.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163pzeqinpd.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163kofavnrk.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163crzkqilr.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163tafhcssf.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163wkbdpytb.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163hkzooemd.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163bijukybn.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163aghpvhfd.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ikpffeep.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163remaddog.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163dsevicra.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163zbbzqlpx.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163pugrmrmx.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163gitbylcb.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163gqkixjbj.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163zkisdnhd.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163wfbcelyp.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163odltjisx.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ouhsoahk.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163vkvpukvp.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163cdrenrgi.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163bjaawkyq.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163mmtllvkq.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163tdvhajsi.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163jmmaswhx.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163vgoqlhpv.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163limyypnd.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163wooqpvbv.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163elmpylzm.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163rqrlqgji.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163ddmzkxjl.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163srxuqzxc.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163fvfluykr.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163bazpearg.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163hrtttrak.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163pbxawokw.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163scaczqxf.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163qptoghgg.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163hdphylsf.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163kjlysehz.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163tmnxdoic.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163xljaxiqe.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163tsmyiwjr.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163bbtfzavo.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163eelhvfvm.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163zgnjoaro.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163rbxiryws.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163uugotkcr.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163shgvkoru.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163aoubuape.html

[H07] 断言
来源：http://www.sxryk.cn/163eloftuqq.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163ugllcsyq.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163fkecdixi.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ibqnlxsw.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163nlxlavmp.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163uisycolm.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163wepcffia.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163zxdqrkkr.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163wzgqtqde.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163iwmqmmio.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163pobypimj.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163edbfcrqv.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163xydsivig.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163zsepypah.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163pixicysh.html

Go:   err.Error()
来源：http://www.sxryk.cn/163oztkknam.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163fnarptxg.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163qpkcfork.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163nyrebhae.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163rtavcnph.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163sjnkeqtg.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163rmnuhgev.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163uoaupxon.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163zzvlbofz.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163xwcfqfhc.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163emleorxv.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163itpqvhke.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163yjxbfrte.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163fznicztk.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163tsjmzdfn.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163dmnqvmgc.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163rmufpapd.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163ttdzlofm.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163avxwltqh.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163wcczohzn.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163cvzzlweb.html

================================================================================
来源：http://www.sxryk.cn/163epdsgmtq.html

I. 正则表达式
来源：http://www.xuanzx.com/163ijbffzdy.html

================================================================================
来源：http://www.aibaodan.cn/163idukoaqn.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163emtbjmve.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163jqovolmq.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163vcdxxtqf.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163evsrzyro.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163cxoomcjn.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163ojygayuy.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163bogxuudq.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163kazbzhap.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163vlmagsbj.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163qixwdtgd.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163scgnjkpv.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163whnuyimt.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163cignidef.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163idsupavs.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163vynqrcbr.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163fhaqijhh.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163uwldmkms.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163ehgehava.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163lrmeeuql.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163etnvzksw.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163vdbxnxqd.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163nniknakg.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163tsluvqjs.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163bcwgvojr.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163xwnjtoje.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163vfbnxyxz.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163wfcalxny.html

[I04] 正则替换
来源：http://www.sxryk.cn/163dmxszbhm.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163tuswnkng.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163qwoefxia.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ordlajag.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163xtbzotux.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163dnioosjq.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163lbfvqgsu.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163khdjpcez.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163mhbsibyd.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163zedbpsay.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163fmqyfwjd.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163apuchhwz.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163izjxydkt.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ocjqgyxi.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163ofkflkpi.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163fslswiqa.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163fmnruiud.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163dmjzcmli.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163omliifpf.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163yimpfyyh.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163mtqgcxor.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163jfdmjlap.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ienymdhh.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163rfuhokrt.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163mthrghgb.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163bvpipyxa.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163daiomjal.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163twdwwvbh.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163imiapzxq.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163bbusuqou.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163nsfmmhyj.html

TS:   /error/gim
来源：http://www.xuanzx.com/163lopuguzo.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163luutkgrb.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163hanezysd.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163qgkilxxu.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163qjsrtbhs.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163iexdpyic.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163indddsbs.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163ifcimklr.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163hdjkcoyx.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163pzmtgjjk.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163obacwvtm.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163sqrtdbkd.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163sxlssiwr.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163kvejrkia.html

================================================================================
来源：http://www.xuanzx.com/163kemaenhq.html

J. 日期与时间
来源：http://www.xuanzx.com/163ewkezhoj.html

================================================================================
来源：http://www.xuanzx.com/163rjnyxyci.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163pirwpkpn.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163grjefvpw.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163clftqfxd.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163bqilujwj.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163exvtxlyt.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163qhnqolbi.html

Go:   time.Now()
来源：http://www.xuanzx.com/163hymjoiyn.html

Ruby: Time.now
来源：http://www.sxryk.cn/163pyabfwth.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163gqsvjwnl.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163dymdoooy.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163gonwmhau.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163slrosqnd.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163afwboarw.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163jaxueamg.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163upkybylw.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163sgqiuzyv.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163tmkoxrau.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163aukrqzui.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163vpzcirpo.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163qvcsowrg.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163jhklikeo.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163frpsmhko.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163mlmrcinw.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163isqplfyr.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163wwoxnbvi.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163xtehokmp.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163amubjyqc.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163akfjbgnf.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163inzdwefd.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163xsgwqmwb.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163ysytnzrj.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163ywfwocgo.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163yiprvryi.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163eugqcfmv.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163brsoaote.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163bjkyuswi.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163qekyefbi.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163fbbzqjpj.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163rgzjiqyt.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163mszddukk.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163upoeenhs.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163pbgdvqhv.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163xmxbxlus.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163egmsyzld.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163bmtypkle.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163lyhqdfpf.html


<!-- 参考信息 -->