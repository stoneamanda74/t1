外链999!wailian999！

[G06] 重写方法
来源：http://www.sxryk.cn/163xlexuyir.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163eiuniqmk.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163laqzsmte.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163lybjfjao.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163kquuxdnq.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ownuovrf.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163ifldywqo.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163vhaleddg.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163xzhxybyy.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163fbzjcgjo.html

Py:   super().greet()
来源：http://www.xuanzx.com/163sfndhfdq.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163ehbplvkp.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163tzeifepe.html

TS:   super.greet();
来源：http://www.xuanzx.com/163henesqzh.html

Java: super.greet();
来源：http://www.sxryk.cn/163etmcalov.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163bcdnxsxg.html

Ruby: super
来源：http://www.xuanzx.com/163wcsmnvse.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163hgumbqxe.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163axmfrfsl.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163frsvhyde.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163kfqyxfah.html

JS:   static f() {}
来源：http://www.xuanzx.com/163jloxblhb.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163zlqqxhvc.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163czjibrzb.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163bftdqgfy.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163txawsnod.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163ctuwtfcy.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163hoxxlekn.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163odtksxqq.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163vmgweqfc.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163ugiaexit.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163stuknhni.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163sjibywoo.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163mronmjsc.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163iyvgbzbb.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163ftsjwnje.html

[G10] 访问控制
来源：http://www.sxryk.cn/163jkqmveew.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163nrejycsd.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163dhvosbfh.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163zemifgwb.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163vvzpydne.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163ctsmxqqv.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163gtcygvix.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163jyczvozl.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163dwytnljk.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163rbxoqqcp.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163ayzauvdd.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163rhyndkdf.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163jfwaxrtb.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163wbpoorvl.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163pcydxkxe.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163zuykroux.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163zzeiqdly.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163sucrjecd.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163mdlpsdze.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163vnxpwwpv.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163mkhygjqa.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163zfigihws.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163rjndpxph.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163lotvdnig.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163yznfhkgx.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163vyycstuu.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163gjgoihxi.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163sslaxyds.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163fcuvlehv.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163tmkaisev.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163mgrzpkop.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163miqciqau.html

Java: u instanceof User
来源：http://www.sxryk.cn/163zpldbosw.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163qqwvudlt.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163haktkemj.html

C#:   u is User
来源：http://www.aibaodan.cn/163lhgxbsws.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163jobwmmda.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163dnnpgsii.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163dpsdvjcf.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163vkjsvlee.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163qftlliij.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163zstjmjrf.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163vsvkggfn.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163wfcbmfjn.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163jthxkfog.html

[G15] 枚举
来源：http://www.xuanzx.com/163hzpqggnf.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163oxfkpnhy.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163whcgngpr.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163louqwvpl.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ioonjdib.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163hrgswjma.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163xqepvuao.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163krtrkvnl.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163cxbxhibg.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163novwzmbc.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163jjzkcpvc.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163wyzqnkan.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163azhkhclq.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ykfnogqy.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163jjuqxhzx.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163ckrpubyi.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163lyvzaazu.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163dzoqggyv.html

================================================================================
来源：http://www.xuanzx.com/163slwsitcm.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163temhyoir.html

================================================================================
来源：http://www.sxryk.cn/163cmqatimi.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163wlbbymez.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163hrppubmc.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163mhwyvvgw.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163qvmwbxwf.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163csnmphzi.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163ntrrpjnq.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163gesbadvz.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163wasswmhp.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163mohvpnsh.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163hnsdzoij.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163bhawqphl.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163hpbtwcbs.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163lggfcaib.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163aknehbgo.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163gmxihpky.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163mevbtbdd.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163onmqkyfw.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163ajvtbdhi.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163rtdveqnk.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163hvtqmduj.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163xxrsowsl.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163kcrcqbmj.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163qmgmizuj.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163feuxqpir.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163etvfiklk.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163fhryalso.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163khigzbii.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163mcqcsvpf.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163ogksukis.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163lnmxgwav.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163jzxyeyxg.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163lnqdjqqx.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163ayevgnur.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163gwmtvyfq.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163hmditktu.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163hgwvjhqk.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163iidnnbhf.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163iexjigew.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163geijfyox.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163gvlxaccm.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163ewrlqjph.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163terordvi.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163jlcgyvsg.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163xnjqtyzw.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163dbgmlsss.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163gwqhzbis.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163agsklvjl.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163lnnmieaw.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163wyjvdapz.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163rlsuyjnw.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163yatwfpvx.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163tiwqddmr.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163nulynnvm.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163xarfhtbn.html

[H07] 断言
来源：http://www.xuanzx.com/163hsdztpsq.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163ftllevam.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163blopuxcv.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163kowpdvmj.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163zmujoyqn.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163kjzgedbz.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163gwrmrmud.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163tvbiuhmg.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163ijxgexfy.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163xoqfbiqh.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163wfjajrpz.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163bbduyxjc.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163fcensknd.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163mesdqzkj.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163bazkzthl.html

Go:   err.Error()
来源：http://www.xuanzx.com/163qitpkaty.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163hyhaemus.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163igofdybq.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163corkdsif.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163qdhqmmur.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163vofhllbx.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163dfkcsryc.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163uxnaxohq.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163temqqihz.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163mhcoextq.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163qjtdjxxy.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163uvocswut.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163yrijxjrv.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163bnxmrkhn.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163lzbhjwfg.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163iazmpifv.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163nwarxehm.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163qidznjhn.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163ztjwhpik.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163ilwjlwmb.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163jcufeftm.html

================================================================================
来源：http://www.xuanzx.com/163baeqhvjr.html

I. 正则表达式
来源：http://www.sxryk.cn/163bcngufrb.html

================================================================================
来源：http://www.aibaodan.cn/163hiflttow.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163huejlxwe.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163qkvoldjr.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163ulyfsddx.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ujmnjrzq.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163edygxsbl.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163ohrmqxxq.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163clxjycda.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163ronevzzi.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163yoropafg.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163ajelhklo.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163xirysnkg.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163saaqanqo.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163udcnzsht.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163qultlnvj.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163spisuani.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163znszdssp.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163bkczfwpc.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163mrrgjnyx.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163mbuwrwbi.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163jexxqeol.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163kboeyjsq.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163kudctrzl.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163jrlscpnp.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163qifsjmex.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163ehbpxwlc.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163jqivnxgc.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163kazfmmnm.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163iplppwog.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163ptugpiln.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163zttnokhc.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163tfwwmcjf.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163snwoivwo.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163oyjpdrcq.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163kvtlimxk.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163yvgwyoqy.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163xdhngvrg.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163ojfxjevl.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163btfdwliw.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163nmfankur.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ljnqjgwy.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163gdbntgvo.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163myyxxnzq.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163kqjttsbz.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163nzgitjpb.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163rzbtujym.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163mxitxfll.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163wcbdoysp.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163hxtqfwya.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163qzzbbkcv.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ugksxakz.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163afksqtiv.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163qmueomgv.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163vvpntjbz.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163zeypbffe.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163bmpbtwuu.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163jpalmmay.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163czjxqnso.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163jvaaldjb.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163yikhuhdz.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163pvjnnbln.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163yyirqbqb.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163gnayvnhv.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163ktwvgyck.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163xraogjmz.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163sfopewbv.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163fvacvjhl.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163jtblaquq.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163rtynrjwy.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163mckrykrc.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163gkjagbna.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163fcjvliiv.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163jmoxcdrs.html

================================================================================
来源：http://www.xuanzx.com/163iwutncis.html

J. 日期与时间
来源：http://www.xuanzx.com/163ptqgwiuf.html

================================================================================
来源：http://www.aibaodan.cn/163smgamgey.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163yewmgmpe.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163gmxlfaor.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163cnawbrdu.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163bcngqwvd.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163nsrdbtjh.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163bliqtdob.html

Go:   time.Now()
来源：http://www.sxryk.cn/163hyhvophx.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163kbcdnojm.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163slxptkjp.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163uachnnvu.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163alctrzfq.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163xkgpzqua.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163nguohoxm.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163xlewzjru.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163huqqogkz.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163tbbjhooe.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163xumxtemv.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163ldtgizjd.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163lzzhfvya.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163vyhggntd.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163uspfiuwf.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163klrmgsao.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163rhzmfbox.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163tvsyibtz.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163syoibjkf.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163yqholddg.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163xbbfxgvs.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163uarbawkd.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163csqavwrr.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163bgfgubxp.html


<!-- 参考信息 -->