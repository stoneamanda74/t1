外链999!wailian999！

[G06] 重写方法
来源：http://www.aibaodan.cn/163qlsfkldd.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163ksifcgxp.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163iugadytj.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163drtdpcny.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163mppvhuuh.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163itkpqbcx.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163kweckhnr.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163dkrlxyes.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163rksrjfzt.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163ocldlndz.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163iynapkrb.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163kzbaaauj.html

JS:   super.greet();
来源：http://www.sxryk.cn/163gqfarqtw.html

TS:   super.greet();
来源：http://www.sxryk.cn/163olcbiuks.html

Java: super.greet();
来源：http://www.sxryk.cn/163xmhnvniz.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163rszubvlz.html

Ruby: super
来源：http://www.xuanzx.com/163ojooerme.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163ecisnltb.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163qwzubbth.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163oxvhlvhh.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163rqrjwxeo.html

JS:   static f() {}
来源：http://www.sxryk.cn/163ulpowzzv.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163chuptiez.html

Java: static void f() {}
来源：http://www.xuanzx.com/163dsfspctx.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163ibqfvhyk.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163ubqauktw.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163zxntxpxh.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163mvmdihcv.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163pmbnrcpx.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163ilqanuuu.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163hfcthojh.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163dllahczx.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163kdpjbnnl.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163gadwkzat.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163pjbcieue.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163crniksfz.html

[G10] 访问控制
来源：http://www.xuanzx.com/163mekeniyg.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163srjiytdz.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163uvrtlzue.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163arjgphnz.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163jsusgyiq.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163fsqhxhnc.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163xhcrgscw.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163eyeuukhi.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163qtswheve.html

[G11] getter / setter
来源：http://www.xuanzx.com/163xoqewxae.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163jjwqazob.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163cxjtakkw.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163oiujahxl.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163wccfzcpx.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163ofotcpnb.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163ddxmxggi.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163htykuwhg.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163efmgddya.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163dhyzocta.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163yohvsivf.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163glmecgqt.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163dtjqxkft.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163bxsbhthf.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163xawnynth.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163wptnqpdo.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163ivltvjyp.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163tqgrpwhj.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163emhyaclv.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163jtphhmnf.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163xjbipeds.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163rcnxhhyo.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163pxxttlts.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163pgngppnb.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163fijwvohy.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163unxujjww.html

C#:   u is User
来源：http://www.aibaodan.cn/163vqvtsuix.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163mxqlsphw.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163hfddvqcs.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163lerfixsa.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163feoisvwn.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163gixcuwzh.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163odjsquyc.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163cjmieiws.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163urwoiauj.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163ufzvqong.html

[G15] 枚举
来源：http://www.xuanzx.com/163lgivxmkw.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163absyfwpd.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163watacatl.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163unxwbswb.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163qhwoqlwj.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163gzmwqqzj.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163irvyrgoz.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163ptjoxljj.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163gtljntdn.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163xtgzqlgy.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163gzarnnjr.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163nwqdjsbt.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163nxejagsy.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163ljqlptlc.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163qbhymapi.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163hwtrawvk.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163ckkdspxa.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163gwtowdit.html

================================================================================
来源：http://www.xuanzx.com/163xlzfpmkf.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163xneswili.html

================================================================================
来源：http://www.aibaodan.cn/163bsabmqgy.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163yzwwtraz.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163knpzqfuh.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163xhphhrqv.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163yaeorqgb.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163zyifptoi.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163jrjivaen.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163zirhdybc.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163gaqwemhz.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163yaxdwtjx.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163nepleona.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163ywohffse.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163bmrfuwhh.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163vhffbnjs.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163zhschzys.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ltjffjgc.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163dthhxlfp.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163nqkxtldx.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163mhewrnjl.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163ldfxruhq.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163ndotysxw.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163yyxwedxp.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163wlltzrsa.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163smajvsds.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163ngyjdzcs.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163eqnsurrg.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163zzsshiwg.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163fazmqcni.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163xpuvrofy.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163sdkfbrld.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163lpmnjhzl.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163fsgtajpt.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163smpvpjaf.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163mlhjwsys.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163feumkylx.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163vlexsdrm.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163vcnryset.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163tjnnnbcq.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163yvbjloib.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163sivykxyj.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163fvpghuse.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163pgkedtna.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163droevdbg.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163ziuymxnw.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163uhiocjok.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163tcrvgfxh.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163nmkbyoyj.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163leujmixd.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163qoysfhvq.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163vuynsxct.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163binoalas.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163kzkwcpmd.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163iijwthxw.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163idjwfplw.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163umgfbmqy.html

[H07] 断言
来源：http://www.aibaodan.cn/163ewtbsjkt.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163ykminvzp.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163ozzddnkf.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ynmvtyop.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163hrbussyk.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163mfdxsenq.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163yscqhsjc.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163qrjpugul.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163rsbfzcvn.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163ewyqfqua.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163vjhglceu.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163mdefwktr.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163oqnmlppo.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163toiobaqz.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163wrljfjxj.html

Go:   err.Error()
来源：http://www.sxryk.cn/163blvrtcdu.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163jdhbgccb.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163ikxttogb.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163atyribqb.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163pgtaldto.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163oqycjcto.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163xndxzblh.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163yvotfpoy.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163kqgevqgi.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163csyxxaez.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163eddqhtgh.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163eqcrsxma.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163kbdshldv.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163bzdiviyu.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163iozzjxmb.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163cyikccyd.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163kxnpfxrz.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163ibunygpg.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163xsaswjak.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163utbcxevh.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163lgqcvgbj.html

================================================================================
来源：http://www.aibaodan.cn/163zlmdnosy.html

I. 正则表达式
来源：http://www.aibaodan.cn/163tisnlitn.html

================================================================================
来源：http://www.xuanzx.com/163tezalanl.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163qtwyjqkt.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163xxsggnrs.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163zpibgyit.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163amuilmmg.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163dnvgsowr.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163zugmkmpa.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163wxxmnald.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163lnrnihez.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163dpciszoh.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163actprujt.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163zctueppr.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163tzcycvvu.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163xraacgdk.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163qojfqqqa.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163zawowiyc.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163ndkgfngs.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163hutyzoar.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163jvgvsqtt.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163yfhtznzq.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163zprrreit.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163heuwweby.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163eojyzscn.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163ytznbrxx.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163nsewsagh.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163jrxbmqab.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163lpdzpisv.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163ifukrebs.html

[I04] 正则替换
来源：http://www.xuanzx.com/163ymwoznqv.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163hjdmfbgq.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163uxtrkjab.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163klvvqqaf.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163hbpcrfen.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163ahdzsewk.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163wbaawvaj.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163gfcsdkhp.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163dvkljkwq.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163rxmuayql.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163yjynfeem.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163kdsajtsp.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163qawmqimm.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163iwmnwxvz.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163dxgooxeg.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163wpiambmd.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163qtbuxyyv.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163gykdipqr.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163zjbnnnbh.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163tumbpeem.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163hfndwwsq.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163gfncowpe.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163yosdiufh.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163xezvfjyk.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163rgigejwe.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163qtefhjpw.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ytisoanx.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163ixhqvymu.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163psdvzgkg.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163nbblmgry.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163jptgqgpu.html

TS:   /error/gim
来源：http://www.xuanzx.com/163vhioyygn.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163ndhokkww.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163fedmtzxj.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163lnwhkwsr.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163czxrwbbz.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163ylopjvty.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163npezgmxy.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163xunfvdnb.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163rpnfnqui.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ofyqcgxm.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163wuyfcucw.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163rmqgkcnz.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163ljdkodeu.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163znyrxjwl.html

================================================================================
来源：http://www.xuanzx.com/163wpcukynq.html

J. 日期与时间
来源：http://www.aibaodan.cn/163vgzrdbrq.html

================================================================================
来源：http://www.aibaodan.cn/163mgkugcod.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163iswmjocr.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163zwittali.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163bqbegjpv.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163gdebnkpc.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163xtaddupa.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163dvfeltop.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163fiwnjpko.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163quaubixv.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163wtvrmrvu.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163fxvygtpv.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163afzfbmlz.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163vowuphuq.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163iaiaizie.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163llxjrltl.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163htvvxags.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163nwqdneuq.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163bqilazqx.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163zktmfszt.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163jvwkqbsl.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163ykjsfcxh.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163zxumuznx.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163hmifzvan.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163bnidomqj.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163fnxfvblx.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163kjjiwhia.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163ebrtgukv.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163enfxmfhc.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163bovgrrbi.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163bospborw.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163gilaopyw.html


<!-- 参考信息 -->