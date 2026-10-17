外链999!wailian999！

[G06] 重写方法
来源：http://www.sxryk.cn/163ittsfqiq.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163qblwabzc.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ewhqocav.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163iohjyapd.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163mdxyczdu.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163bczdeknk.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163drwhipct.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163kvahmjsf.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163gsygbxfu.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163qnioncmr.html

Py:   super().greet()
来源：http://www.xuanzx.com/163yxevrwkh.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163brpdkvnh.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163roouibjw.html

TS:   super.greet();
来源：http://www.xuanzx.com/163vzxwcdwx.html

Java: super.greet();
来源：http://www.xuanzx.com/163zzyecdnj.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163ggrtsnxc.html

Ruby: super
来源：http://www.aibaodan.cn/163gcvfgdsc.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163hxkkvuza.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163aulkwvix.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163rgewcivb.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163ezhriehq.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163nuestmmd.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163yxquqllv.html

Java: static void f() {}
来源：http://www.sxryk.cn/163zzlcmodw.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163advnyqrr.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163jmdnjbtk.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163ysnttrqu.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163kxcpqdhn.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163zpznemsw.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163mjpnuunr.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163ezfkinal.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163fhfjdmlz.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163ffkkxwhh.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163njloqbyl.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163zfzjvilo.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163zljlofer.html

[G10] 访问控制
来源：http://www.xuanzx.com/163grgjjbtn.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163vgfkpzsd.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163pwcezggr.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163ictulimv.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163vhykfucq.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163nflcspva.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163jvkljxig.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163vevqbymb.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163hhoppqet.html

[G11] getter / setter
来源：http://www.sxryk.cn/163kxruzgeo.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163akevydjy.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163gmqeczku.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163arbedcvp.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163acwkypyt.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163hdsrugtx.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163yfstwlpb.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163psgraabf.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163rdjxzogt.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163igwherfi.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163inibhqpp.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163inygqdha.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163yiuepqgm.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163aeqhqsvw.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163ilvtfiaa.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163xwexlquj.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163bgoespqp.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163dlnyzfxq.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163iztmgxug.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163vwbgrvwo.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163mliyxkls.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163ulvrwlsa.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163tfmijedc.html

Java: u instanceof User
来源：http://www.xuanzx.com/163lnantstf.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163okzbkldq.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163fyutgfqm.html

C#:   u is User
来源：http://www.aibaodan.cn/163qaotxmnj.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163rafdgpyh.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163zzpqbpwm.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163lilrajmf.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163fkhgfbjy.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163zzfjsjxb.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163ddectlee.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163kgirlhdx.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163oqcpxyfs.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163euahadxs.html

[G15] 枚举
来源：http://www.xuanzx.com/163pgmiiqtl.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163ylhpfxqr.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163wgsqtymh.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163dqkdmmgi.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163utbvhgtg.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163oeoixxob.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163pmbjounk.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163wdrvplvm.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163mhgajkvi.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163ojtinvjj.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163udtjhabo.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163etboyqex.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163fdcopulx.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163yhittccm.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163oszsassu.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163uwebntwj.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163auvhzlyz.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163mxdkpzrq.html

================================================================================
来源：http://www.aibaodan.cn/163hrpddvog.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163tzeavrsq.html

================================================================================
来源：http://www.sxryk.cn/163zakuubsm.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163flevvoxo.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163brgiggjl.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163ahijtkev.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163enfettlg.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163ikelmjzy.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163ixjtyjzv.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163zqodfyqk.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163zvuqheqp.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163kmzrpgif.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163rcncoxir.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163uauoeuur.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163blpyxejw.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163pxryfnkw.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163vpekfakx.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163vemsnqpd.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163tchgebex.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163xsvzckvl.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163yfoefctv.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163ypmqgrdg.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163qkfuihpm.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163cqtpitfs.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163nhcrxdgb.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ntxwljap.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163pxnlfhqx.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163kswwzzqx.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163qyhrtalm.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163xpcchzbj.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163kdawjcql.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163ppshcevw.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163gmptmhpi.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163nckvzgss.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163gxhmekgr.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163ticvdrnk.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163asqshokg.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163jmsgeztm.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163dqgivlgj.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163hiwxbbop.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163dtcolzmt.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163lzagwyti.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163kzihvbiu.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163jdvgmkqa.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163qzekxkle.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163rascroiu.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163kemkxqto.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163uawzwidn.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163auqqqzft.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163efuffhxz.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163msglfkpt.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163exkzzusx.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163ztqtufqt.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163uxaxncpo.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163zspqivyo.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163tszjywle.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163qhtzguvq.html

[H07] 断言
来源：http://www.xuanzx.com/163amzfqmsr.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163ljuwglvj.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163bmqiuqmg.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163rsnielfo.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163dsoovhbb.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163gqlsbtug.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163ewgumlwd.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163lxqjyilm.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163fnzodspf.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163ifdaeqmt.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163pkqqixig.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163jsgwlplp.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163izpwxvdi.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163lymawesi.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163gwsaveqx.html

Go:   err.Error()
来源：http://www.sxryk.cn/163oyhbkool.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163epbrlmsm.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163dcjlunol.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163wemdgrpm.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163sdblwbdq.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163xezeikrd.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163dzlrqevm.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163qwliaqox.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163xsufacja.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163icgblfov.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163jgwhpots.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163bjycjtta.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163yqrjtpct.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163ljqaknks.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163kjecucjx.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163salwpoov.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163vfzftlqk.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163kckgjdvc.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163ufrdlkfq.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163oxakauzj.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163exczyyuw.html

================================================================================
来源：http://www.sxryk.cn/163ncxkruxo.html

I. 正则表达式
来源：http://www.xuanzx.com/163rhcyrsyo.html

================================================================================
来源：http://www.xuanzx.com/163nivuyibo.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163tdlpoitu.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163gqyulvog.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163drndafzs.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163yafmqnjq.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163akcmauut.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163rwittksb.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163kmmhhcpu.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163vccoufvw.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163imvybgew.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163szyhfbnn.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163udrtuolw.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163unyfmxns.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163cwnfmvcn.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163qizjrzkm.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163owsasfgh.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163hhnfjcnb.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163srexpwre.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163shqkfydq.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163jmaiibno.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163zrisrvnl.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163orhpkbhj.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163pqbtddda.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163kdtithjp.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163vdqchtue.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163rvyguhvr.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163wjkrwtvy.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163igcvyfyl.html

[I04] 正则替换
来源：http://www.xuanzx.com/163jcxienlo.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163hxkyhpwf.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163jyyvkbyi.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163zvanljeh.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163jcjrghbu.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163uphugvqa.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163qyupkkil.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163tonavitn.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163hnzwgcjc.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163vwavkxaa.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163vzpfztvd.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163ucplzxmh.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ibgpcunu.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ibpgjkem.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163ouymqxxa.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163vprjngrk.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163vjmrqjay.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163yhxmygva.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163qyadcnyt.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163qaolcglm.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163zyoowdpm.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ogkbtyvg.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163htclrigf.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163whrmcdau.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163rzgelcnm.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163rkrhlbzu.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ykiznntx.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163hcgnneoo.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163ozxfqxte.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163vnkblpbp.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163wdrqxbik.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163kfhaugap.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163tznunrcw.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163ogxenqiw.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163rhukopud.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163hpgpugif.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163kwnzhduj.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163ymqszvjv.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163hnjxbkbe.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163rvgpetsg.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163yvebjjde.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163nszqadur.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163ramjfqca.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163adwgqriv.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163qsvgtdrc.html

================================================================================
来源：http://www.xuanzx.com/163rjtttxaq.html

J. 日期与时间
来源：http://www.xuanzx.com/163snjcxbla.html

================================================================================
来源：http://www.sxryk.cn/163tizozvix.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163ssifxurz.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163myepjrcf.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ysmpcgkp.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163mohmewus.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163nziwsfhx.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163pzfgxgzp.html

Go:   time.Now()
来源：http://www.xuanzx.com/163kqghvtqa.html

Ruby: Time.now
来源：http://www.xuanzx.com/163bgbmifbt.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163rkjmewjg.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163zxzvdlfb.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163jkifnhfb.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163vhjhfrah.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163upvcynqc.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163sgcypfjv.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163uwsmwezh.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163bblwtjhq.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163wbgmqhhu.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163pqjoprdh.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163ogvjdbqt.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163qqwemzpv.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163swzvfvyi.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163jxtxokme.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163cpmkwafc.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163taahtsza.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163xjnymdkf.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163sjxkhigo.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163cbcfvtqy.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163cdnvwjoz.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163lpcbmgur.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163lvxpvori.html


<!-- 参考信息 -->