外链999!wailian999！

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163zortpkwb.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163hfmytmow.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163pvucphhx.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163yqegahqf.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163bemugmjl.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163wxfyvafz.html

Py:   super().greet()
来源：http://www.xuanzx.com/163drvspakf.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163qzleglbl.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163zvphtqno.html

TS:   super.greet();
来源：http://www.xuanzx.com/163yezwfqpc.html

Java: super.greet();
来源：http://www.xuanzx.com/163zzeqrrsq.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163lpdmoqjd.html

Ruby: super
来源：http://www.xuanzx.com/163xjvysvyd.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163yyvaitmj.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163zaaxbkrg.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163voaqxqsl.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163ilpkboli.html

JS:   static f() {}
来源：http://www.sxryk.cn/163zduglacl.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163aemylfcy.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163euqvtqck.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163exxmzupe.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163zufwsmuf.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163hshqytlr.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163kjovuuig.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163muudxtjf.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163ttqctvtk.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163olgrbrcy.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163wyyctutr.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163azzvxrmo.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163ztyqudgm.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163yhaahdxd.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163anldvkxy.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163pnwjflch.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163sezftztm.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163uajjyqel.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163ovmbdarg.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163jytvsvra.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163wwgypymr.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163dnkillso.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163mxohjhxr.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163rirvddop.html

[G11] getter / setter
来源：http://www.sxryk.cn/163cnvtqizf.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163kdjiijhh.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163fuxakdws.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163fmadhbjb.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163yqqqnfsr.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163cuwrnvck.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163miuuwjua.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163wybznoby.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163lshmxblv.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163tnyfhgee.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163vtkozakm.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163xappuuia.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163cxhzphiv.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163trrtvnrj.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163vumpxqyj.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163ktrryklx.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163bantepga.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163ayryzdss.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163pnazkfcu.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163lzevhcmg.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163yohulvuv.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163jdruoznj.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163fluhyraf.html

Java: u instanceof User
来源：http://www.xuanzx.com/163rvpndbzk.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163awhdpagc.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163vbvccmve.html

C#:   u is User
来源：http://www.sxryk.cn/163caibvxqf.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163jvnghqmp.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163rzqeizwo.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163pwcsjvuz.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163omrwukmj.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163zglqblhb.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163dqwkcfua.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163bpfxusmf.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163zgplrvip.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163bifkylyi.html

[G15] 枚举
来源：http://www.aibaodan.cn/163bsqyaeiw.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163hmiewkoq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163vholpili.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163gsqiijrj.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163zupdchst.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163fqiesshi.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163jnisicau.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163fuigbfdy.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ckpalwmf.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163gbrplhho.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163zzgjyfxi.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163mdieqppt.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163ukircdio.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163piqrrejn.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163hzcicspy.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163johslcaj.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163ttnolisi.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163yahkysim.html

================================================================================
来源：http://www.aibaodan.cn/163utxyents.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163ktnpmwny.html

================================================================================
来源：http://www.aibaodan.cn/163vlepncno.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163xceepuel.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163vrlhlcaz.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163zbwcoczc.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163gnyjlell.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163fuaefqjc.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163pwyurptf.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163xpllsabi.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163vuqiswdb.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163luhjsoxz.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163nsmrjent.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163alfuyrws.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ewwdpjkb.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163mnrzlbkt.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vdvdmhzx.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163patvdhhm.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163dyflwlws.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163bwinlfon.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163fvfnilux.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163fuudmgok.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163ctphacja.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163wdwqchvh.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ccngnrfr.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163xvefwgfw.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163yguedist.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163waletqak.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163szlswecd.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163kuzckxcz.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163mymrnwrk.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163pafjbiae.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163fyejxgkp.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163wlqyscwk.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163bzyzsroh.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163kjirinhi.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163ddqasydv.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163mueyuuhl.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163ncsddqiu.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163rwrpbebm.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163zlbrlebz.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163zqbmhmur.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163anxpgrlt.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163dtowpuqm.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163rvybwbfv.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163lvxywldr.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163moxubsev.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163riytvebo.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163jhuxaymk.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163rchutdfk.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163atjrekmx.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163cugxrhya.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163yeoslnwd.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163zdejtino.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163qiqnvdlf.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163dzxbpwkk.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163fiqpwrvd.html

[H07] 断言
来源：http://www.sxryk.cn/163ogtebmwm.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163xugmxaiq.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163chegawhg.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163asythvmi.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163lwjpbqxe.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163msseupfm.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163nebltwzs.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163jtrrwxau.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163osnsdngc.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163zlripjkm.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163hkzuezdf.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163kkkcukyv.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163redwgtdb.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163qgfptljb.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163oweaiigb.html

Go:   err.Error()
来源：http://www.xuanzx.com/163npctzcdu.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163rlcuwkrz.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163wysmbmjl.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163ynqvedna.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163jjcfhlcq.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163jnrcmutx.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163rvwhkjkm.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163ypxnbnqt.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163wmeckryu.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163xsgwprlp.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163cmgylrpz.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163syfolazj.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163xirfnjom.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163qppffqkh.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163ttwnmogp.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163gqiusmkq.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163zvzjqmgx.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163enxmarke.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163nfxqspjt.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163yjripdux.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163ydieupsy.html

================================================================================
来源：http://www.xuanzx.com/163vfhlthzl.html

I. 正则表达式
来源：http://www.xuanzx.com/163tsxvkasr.html

================================================================================
来源：http://www.sxryk.cn/163zufjzela.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163ypcqiwlw.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163xspmgxrt.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163fjoagieq.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163obtffiqn.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ayuxkujf.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163puszadrt.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163vkrsrafk.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163egfvssow.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163lvrybrat.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163aoasxpyi.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163actknauz.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163vqmwtvnw.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163rymdkrwv.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163brrzfgfa.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163vmmanvde.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163oohuzrmr.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163ycmmlgjg.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163tgncvtjg.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163qdricmvm.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163gmqivcrk.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163tbkdrqns.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163octkqqry.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163eughelby.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163mcjtvsel.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163zeootsqx.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163kyzlhfqi.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163avhlbxnz.html

[I04] 正则替换
来源：http://www.xuanzx.com/163tebkalak.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163mfszdtsr.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163lgkvtwyd.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163pcljmuma.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163vxdwsive.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163wlkfzfvs.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163djphqrhz.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163ulekkemh.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163wtrtcznr.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163qginwhwc.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163eipzvhvo.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163bpqinivk.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163xvqhdbma.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163mqqztteh.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163cuyahvdb.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163pszukbcq.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163lwwgmymt.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163aeswgsvh.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163niiaqyie.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163nhvlpzkb.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163zwwzpcye.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163qbfbkams.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ifccjwnx.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163yzicbdes.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163nbpyhvha.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163fwmpfevn.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163gxytmdmk.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163fgsommtb.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163ovpspjkg.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163pxiamcxo.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163snmjejhx.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163nwfsuyzw.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163sbrzkxfq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163aqhphaqo.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163tymlwscf.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163nthniziq.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163ermtcpzx.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163qvouzuzx.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163ecclkgfa.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163vkfxmxty.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163xnwcroyx.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163sxknzhxz.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163jvjupmbw.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163twjxmvql.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163bkvmjwlu.html

================================================================================
来源：http://www.aibaodan.cn/163mtaiufjs.html

J. 日期与时间
来源：http://www.aibaodan.cn/163brrgbfpl.html

================================================================================
来源：http://www.xuanzx.com/163vgasgjkm.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163cjfryjio.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ubgsydzt.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163yhxmfgvx.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163amlugvzj.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163kjnjtblf.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163lrpuktjc.html

Go:   time.Now()
来源：http://www.sxryk.cn/163ufchnseb.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163risategm.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163cyvpzsoh.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163hfuepzbn.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163pkhlecdo.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163qywsxpni.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163mffiqbha.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163xfhzonjd.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163shzdgjwu.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163vgciqvrw.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163eebasdkr.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163psbnlvbr.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163rznuihaa.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163jzsrdlic.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163hgpmweul.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163pfqpmarp.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163bjzlrthd.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163ywjrcspt.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163ckctqkap.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163qmxskoya.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163fhkqaudb.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163ywjgkjbj.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163gjppavhw.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163xnygrrme.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163etddgpcy.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163vgqkzwvg.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163ojkqtytb.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163wgeqkwgf.html


<!-- 参考信息 -->