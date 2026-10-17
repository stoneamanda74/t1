外链999!wailian999！

JS:   super.greet();
来源：http://www.xuanzx.com/163doevpywg.html

TS:   super.greet();
来源：http://www.xuanzx.com/163cxnnxryb.html

Java: super.greet();
来源：http://www.aibaodan.cn/163qskkyvza.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163ojfcpqhx.html

Ruby: super
来源：http://www.aibaodan.cn/163oaawwolf.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163nyzgoelu.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163lvhptdai.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163pzuputvz.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163dlhdzkaj.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163orfwrkdm.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163lmqqjbpa.html

Java: static void f() {}
来源：http://www.xuanzx.com/163cipqguec.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163ezeltnqa.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163nycthywj.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163scnfhfpi.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163wqdlonyk.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163syvfzgmq.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163wtwacckb.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163woncdnzy.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163unasrxoj.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163pelqvxeu.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163wyybqybh.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163jqlbpect.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163qkixojqh.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163qbipzqaf.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163hjpjjnov.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163xmyqzona.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163vapnlkdg.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163xgtivkfe.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163bxrhwxsq.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163qstmoaah.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163bpspwlac.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163xrjinxcm.html

[G11] getter / setter
来源：http://www.xuanzx.com/163qrgsfkiy.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163xmoosojg.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163wgbcbguu.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163isihnhow.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163rncszacj.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163aowuoboh.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163quxfdajb.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163ffowznee.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163qtwrudfj.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163ezadivjc.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163qevcqmrc.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163pgnohrct.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163asnfqvag.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163bgfxvljs.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163fyqrcjzx.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163omqmzbzy.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163tsatfnwt.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163sdrsvsjh.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163zqfamxoj.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163asjlmwfx.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163rwumzked.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163lpcowxjy.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163kbbxcjyb.html

Java: u instanceof User
来源：http://www.xuanzx.com/163agxghsfl.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163eglodfgd.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163efpthrcc.html

C#:   u is User
来源：http://www.aibaodan.cn/163njiujxga.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163xorrwokv.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163fhtstyvt.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163fhcmngjw.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163lmkhvetc.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163wgqjfuyo.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163npmftzry.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163pzrpkmro.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163huzqahow.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163dixtswwj.html

[G15] 枚举
来源：http://www.sxryk.cn/163pfeylupz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163xgdkkger.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163aboknncr.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163pzimoeoq.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163qramjfga.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163assrclai.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163rrysevti.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163vnmlildp.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163cjliwthy.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163qircgoaq.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163cswgbivd.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163nailjodf.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163jnffcpmp.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163kuzxuwex.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163jwikywba.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163ayyrnnck.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163gojtuzdm.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163gdqglmny.html

================================================================================
来源：http://www.xuanzx.com/163pfcbntfu.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163rxbkooeh.html

================================================================================
来源：http://www.sxryk.cn/163fjvwbosr.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163mrxttzdf.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163suaalgdi.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163ecktacqy.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163mhnazwoh.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163ymxruywy.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163zvtvwckw.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163betalsdr.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163avyyzbwi.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163xnkcffwt.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163solmspmm.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163niechuax.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163nutjptwt.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zfpqyyuj.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jzofviod.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163nsxwuubg.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163gioxazsl.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163jxfprunv.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163bzgdmokk.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163bmkqpuig.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163dojtoknb.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163hpxjxpcl.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ndjxfceh.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163nokhyjgz.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163evcwxqac.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163evtqlhpc.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163cdjggvls.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163nxwgsone.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163xtxuifoo.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163dzohtvux.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163iljtmnbh.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163dnkcuouy.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163mnvyptav.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163pdluyxan.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163xfcckzrf.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163lgozkutw.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163hcjofxpr.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163kmogtfhz.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163nveodqej.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163pwubmmbj.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163criasply.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163hnxqxiwn.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163ionyzgaz.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163aozhbiht.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163oiasrxtw.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163scpfrrze.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163eacmqiyo.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163wotchgxa.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163wekuwiiw.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163bajlyewm.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163srtsxquy.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163tfoxqrvr.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163nvvalcme.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163ryiyyvlz.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163yplwtnam.html

[H07] 断言
来源：http://www.sxryk.cn/163idrlryee.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163mwudqfwz.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163ecnyuqjp.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163rzqsrrbp.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163xmrugfgg.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163goratwmr.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163zbflvpha.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163wakitvki.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163qwkvzqpx.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163qqzqnyuh.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163gaunvdeg.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163klnkeufh.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163pgeufaab.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163mapzfyif.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163qunlgbga.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163szwrgizs.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163gbgubtza.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163fewqscru.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163aweaidwd.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163lyyjzyux.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163vfbinfkt.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163cufoyinx.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163oitvllfm.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163zizmmqtb.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163pzjolovo.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163npjuxlvl.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163dbiiyirm.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163kczfuexo.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163imqrcdzt.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163wbhtismj.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163rmwmfzvj.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163giuwmnoi.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163fmpaszkk.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163vinwooyo.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163kbojxstg.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163uawevdtx.html

================================================================================
来源：http://www.aibaodan.cn/163uzcxprqs.html

I. 正则表达式
来源：http://www.sxryk.cn/163fpdugsjc.html

================================================================================
来源：http://www.xuanzx.com/163depwoofk.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163jwylhkgr.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163mxjqhjsi.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163qaedihhs.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163llifyamg.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163gmqwawyi.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163fgykdpfw.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163jqpjwqqt.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163ognqtozq.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163ybyuvucx.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163jrmhbpky.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163ivrisfly.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163wkelvsuv.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163inxfqaqn.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163lrhfldqk.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163ponijmij.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163chvqjpwu.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163xvacajat.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163mbovehhh.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163pfnxvfoy.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163pjsoaffj.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163ucaxhzxq.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163cgyfyjeb.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163rnfrlnax.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163hkxwbvmx.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163msknmkzu.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163gleoukqj.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163pfjjotjb.html

[I04] 正则替换
来源：http://www.xuanzx.com/163uztxplat.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163ahwtachm.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163mnrxwnlj.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163lxsosufs.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163wufssiha.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163zmhqgpvr.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163wtohpqkg.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163nezkjczn.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163yiufoumn.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163jmptohpe.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163cfslnfjv.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163rndujkkr.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163rgemtrbs.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163pocksfsg.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163rjvnmwbp.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163kdonqqjd.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163hoduovty.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163hweulwkp.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163evtijarh.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ubtqcrak.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163qvwjgunx.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163hyfytmzm.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163rbervncy.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163ulvdkxke.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163ueaarlvd.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163xpxbccye.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163kfpepnyx.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163zofjyacv.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163npnpjjqw.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163mxkpuagl.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163cazphvbr.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163ciodovoo.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163kknzrwrj.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163kdddbqjg.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163akswkbpw.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163rmunoaif.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163mwbxhygm.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163qyrzzepx.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163dnnrhyew.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163tpvpuskv.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163srwqjzvx.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163kwvjyfxg.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163yuuzegwh.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163xhsoultf.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163xohrnhrv.html

================================================================================
来源：http://www.xuanzx.com/163sdqlfqzy.html

J. 日期与时间
来源：http://www.aibaodan.cn/163aiyjkhmr.html

================================================================================
来源：http://www.aibaodan.cn/163fnlrmfzm.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163swsdjaak.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163lalslgol.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163qpnjeuun.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ijfgtwhj.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163cxwspfvp.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163ztrrdbqp.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163dcgylgqp.html

Ruby: Time.now
来源：http://www.sxryk.cn/163nrvvqanp.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163afquerce.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163uyybkqae.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ucjwjzsw.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163lcduhadt.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163tenkqwqo.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163kvgatqfq.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163ofbuoohe.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163jlpojrmf.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163jbuqxdhg.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163uzmeisii.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163xekqhbsk.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163nhokrmaq.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163fbdrdbaf.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163odgzquuf.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163snwabada.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163zqfkoutw.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163infdknsx.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163knrdmhki.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163fvwqytja.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163hmedaiik.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163hzyksils.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163dyjqgavn.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163vpqnwexb.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163qqtvhxow.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163ynuntwwq.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163osooxqei.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163trvhindt.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163qwfjmjkq.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163acuydlia.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163irivpzwm.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163dvqdcmhy.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163yrplurfi.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163akllfbfv.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163yjabyjim.html


<!-- 参考信息 -->