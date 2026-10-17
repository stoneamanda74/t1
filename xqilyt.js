外链999!wailian999！

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163vlztvbxu.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163kzjpnlqe.html

Py:   super().greet()
来源：http://www.xuanzx.com/163ccvpzlcz.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163qylucxsa.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163ajwpjjha.html

TS:   super.greet();
来源：http://www.sxryk.cn/163nwejhabm.html

Java: super.greet();
来源：http://www.sxryk.cn/163wmgmzoty.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163rkpwiyky.html

Ruby: super
来源：http://www.aibaodan.cn/163yycgjjji.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163wyjhqaaq.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163vnzesilw.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163lonlzmau.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163fwtzdbaj.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163ctdgduys.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163feugvjwe.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163lhlrcfla.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163quzufzny.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163rtxfabxd.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163piuigbuf.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163ykdrhoux.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163pbfjsfmz.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163zwpxraiu.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163ryyaxbgu.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163gdlivooj.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163nuwhqxeq.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163kbabmhpu.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163vazsltfe.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163oggxpfvb.html

[G10] 访问控制
来源：http://www.xuanzx.com/163insendpl.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163wtaksnwp.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163awxjbeqe.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163ukadcwaq.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163nomcddsc.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163nlwhmldv.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163ltnwqhsg.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163olskpwod.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163mvqxgbte.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163hzoymhmq.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163pejmnrfk.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163miaxhwua.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163ykzbjdlq.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163jakzqevb.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163vckfwqrc.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163hjxykraq.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163jpwlpzio.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163tazpmmhl.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163hvjyygre.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163zygrgnvd.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163rvsgjhsa.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163vlhesauu.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163jsvdepow.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163phtybmtn.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163ysbuooqp.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163wltspryy.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163oktbupfz.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163sionpliq.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163tfmniydp.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163dwfxfwsx.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163hvpipssy.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163xnywmitc.html

Java: u instanceof User
来源：http://www.xuanzx.com/163hsvkqkur.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163lddfvhiu.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163hejrmcsk.html

C#:   u is User
来源：http://www.xuanzx.com/163iqgzdivt.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163uzyvmgfx.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163ubhfjiyt.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163pmugjkrj.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163bvbhltwq.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163ucclsgjg.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163bmfcjlcr.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163kdzgktff.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163oxfqnifx.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163dxihdelp.html

[G15] 枚举
来源：http://www.xuanzx.com/163fdjzknuw.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163sovxqhkw.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163lsfkiqmz.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163kxvxykfy.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163dhpsmgke.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163ftdnlamu.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163pnknswfv.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163qvzhfhll.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ugeukode.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163nswuqldf.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163ddxmiqqt.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163segxgygn.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163kkyivzuf.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ofghwmrw.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163mzeceusx.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163uywmketk.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163jxzderpx.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163avejtdpj.html

================================================================================
来源：http://www.xuanzx.com/163igngaliu.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163djnqewtu.html

================================================================================
来源：http://www.aibaodan.cn/163dmqpprgj.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163qppqzxcz.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163ltqpsexw.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163brqawsrc.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163zlrsfzyk.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163rqpzqllm.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163twglkjoq.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163mmdquwid.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163mbjkswxf.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163lxmcemrs.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163dczfkwpi.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163zdpczyki.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163dnyoecbo.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163eqcssccq.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163fhilyfyi.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163qwtscvop.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163alhwmmdn.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163jagusiix.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163rxqqshrf.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163cwbatlsx.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163yanmzvli.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163tjkjdncf.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163hctsqkvq.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163csbtlkxl.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163esrjictu.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163ecczgvgq.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163dgkvpyrg.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163oijnlkmn.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163grjkcrhs.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163jydnekjs.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163vfoyveiy.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ejizfwpu.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163xymaabhn.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163fdsnzwbj.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163uovdewmh.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163hheujssl.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163zmqcrjfr.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163frejpuxt.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163oizgfovy.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163lwaixeig.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163saodtrdw.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163fdttztio.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163qpfqbvhx.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163lchzcfno.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163azyeaowt.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163wnsgucjv.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163zroestji.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163yxryuqte.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163icczhavy.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163vzglqiwv.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163dbpycicr.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163aqptzmjj.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163cyielpdr.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163shmkbhqh.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163ftcnrfal.html

[H07] 断言
来源：http://www.aibaodan.cn/163pgvrjqti.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163xrzdcqqw.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163ihmeiixl.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163lougarot.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163iigpusxu.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163gsfgkojg.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163zbqbdzfu.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163zvqxzmrk.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163qnkceelw.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163diudagds.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163etaopjux.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163olgdcoel.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163msrpixmt.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163isotajrl.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163vfiuylqr.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163uhettffj.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163lfbnkozd.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163rurifogw.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163efmwwdjs.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163juyvvrxq.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163ftvxtvhq.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163uuwhjmpe.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163yzungtnu.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163hxaskboj.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163fntplofe.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163ounndyvy.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163vzwaxviq.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163vepgojcd.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163phowuzoo.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163wkvaftwl.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163tozfbglw.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163cgouhfxg.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163isjbapyn.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163owpoabep.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163zjhcjtks.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163phsoawad.html

================================================================================
来源：http://www.sxryk.cn/163lfjsyfiq.html

I. 正则表达式
来源：http://www.sxryk.cn/163osqkaagh.html

================================================================================
来源：http://www.aibaodan.cn/163bzmflvmm.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163lhasikfn.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163unmfwvxj.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163grnhzdty.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163uhzbsiqi.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163aysforcf.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163llitujyr.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163uaghlgvk.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163yvtbnxzg.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163jhgwrcaq.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163duihdovh.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163eqrqsrkv.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163ilblsfxs.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163trlwoiuv.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163buztlgdg.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163fchiyyyg.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163aozulkea.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163gzoivvjz.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163uauvzosx.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163ivoapttq.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163srvfatro.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163sjwupbev.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163ldwiotuc.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163kwwqjlxc.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163mhjeagtv.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163jaljjana.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163nkxbncyg.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163pksejxge.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163vxuamyax.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163zzyuurjm.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163wikhjxhk.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163cnmoqrbq.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163qeoibyub.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163swtucgqi.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163fgvrerjk.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163epdbjpyq.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163fglexmrm.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163rvmgmsok.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163nryiurqf.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163xqkattgf.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163qiznuiqb.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ifkdenuw.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163qfpkefqj.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163anpimqsg.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163vqtjzmsv.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163rxxbssxk.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163smjjtsqy.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163abgheyaf.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163rroqhbvd.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163aemsdlfm.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163cexifhpz.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163rhpaxsvv.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163sbaeorma.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163lrahapks.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ftuveuvm.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163xlvgbeyh.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163rjclqheu.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163lzqmbcbg.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163dvxfwdwu.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163zaqblqbf.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163aevjafyh.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163scwrnbpu.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163ndrummkt.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163mwfyjzvz.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163ufrdwmms.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163gxhuniiz.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163qjeuwnet.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163alzxjlho.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ipphfagz.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163wiarjfau.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163rlfudttn.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163fpmvjclo.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163zubtkunp.html

================================================================================
来源：http://www.aibaodan.cn/163qxvgyxed.html

J. 日期与时间
来源：http://www.sxryk.cn/163zgfgvuiq.html

================================================================================
来源：http://www.sxryk.cn/163easjllbg.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163kdadezrr.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163xlobogoc.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163wmdulyns.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163dxtkradx.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163frgtcvrf.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163qmawtuum.html

Go:   time.Now()
来源：http://www.sxryk.cn/163dortjyey.html

Ruby: Time.now
来源：http://www.xuanzx.com/163jhplvcbk.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163jjnajyoc.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163impshptv.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163zypcevci.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163vgadrukv.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163bdangelv.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163phmlualk.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163ujklcebp.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163rljnfwce.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163pblxdhcw.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163tcmrhbhe.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163okmhmzez.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163ykdznjjp.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163cwusbbty.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163isaecaih.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163lebibado.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163ybyaewmb.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163mkxdaxav.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163qlvjnudi.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163mvgdihgs.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163hgmfxpjj.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163xhtsscea.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163relbditg.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163ldijkzab.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163abknljmz.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163lrkleyqi.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163jsaxluin.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163oiuhqxme.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163luhsggga.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163hhjugtdo.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163bzrwffxq.html


<!-- 参考信息 -->