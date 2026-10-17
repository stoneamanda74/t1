外链999!wailian999！

JS:   super.greet();
来源：http://www.aibaodan.cn/163ubdequdn.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163qihydqnx.html

Java: super.greet();
来源：http://www.aibaodan.cn/163eqfrgign.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163oonuzivl.html

Ruby: super
来源：http://www.aibaodan.cn/163xrpfltsm.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163lngvytnl.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163clrvmaze.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163hbhvqvea.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163xxypbatp.html

JS:   static f() {}
来源：http://www.sxryk.cn/163iiopwikv.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163eadotigz.html

Java: static void f() {}
来源：http://www.xuanzx.com/163ftbxcuhi.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163fncarweb.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163ffqxhtbw.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163xpaxugzp.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163wwddepzy.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163scsqfxah.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163lqqflgio.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163ehkmbwhd.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163elsubajp.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163gommrpdj.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163hcsqfnog.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163quflpdur.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163ouocedoo.html

[G10] 访问控制
来源：http://www.sxryk.cn/163ustfimcf.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163ttudooem.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163xreqkkfp.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163edatdpdc.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163clfdnehx.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163eogdajfs.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163qepsdwte.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163qqzhnxde.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163hzqeeqvk.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163iusnnaiy.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163wzbspdwy.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163wpwurozw.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163lvoxrfjf.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163bjgywjaa.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163ydqihqof.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163pcaemvcs.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163aocjgntc.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163czcnfitw.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163sapqiyvc.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163okseuxsz.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163qazriipk.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163glxjsnoc.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163qhnatyii.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163kdxnykpz.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163iurpisee.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163uyrnubzp.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163bjsivfac.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163rwtdlyjc.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163ybwcweqn.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163xtplbhqx.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163pdnyysgq.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163zurqrawf.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163jisgblig.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163csdwxemn.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163tpwsdyin.html

C#:   u is User
来源：http://www.sxryk.cn/163mpcrysgk.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163ciyqkbaj.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163noyorprj.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163yddenzkp.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163ldqbiibn.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163pletlonj.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163fyaunuft.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163odggcxqp.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163emibmqrw.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163muuodkpn.html

[G15] 枚举
来源：http://www.aibaodan.cn/163xkgswczz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163tjfzavhf.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163epnptohh.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163xvolsber.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163zmqiyukh.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163iiymqvnj.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163oprmajcp.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163mdiwnrwq.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163asslzfrl.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163tahnzjok.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163zowmlzfb.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163enjvmqbd.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163ienrsyxb.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163yzfmejig.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163vlpjnnwc.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163dxogveyt.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163heubyhai.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163abxrpuvc.html

================================================================================
来源：http://www.aibaodan.cn/163tafmuzbr.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163dmqrsaex.html

================================================================================
来源：http://www.sxryk.cn/163nohqvwsp.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163nuwfmkws.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163givaicap.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163kovelgws.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ppmppwjj.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163hjxrhjdf.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163exmjvmms.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163qohwyyca.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163vbsdoaga.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163zxffuphw.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163fvdalfkx.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163mzfhilxe.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jjuehfmy.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qmsxhigp.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ilpchhkq.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163moshggkf.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163egewnvge.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163uojirpvm.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163thlxwtsi.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163eglyqfeu.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163rwrxqvtl.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163jkmykmrs.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163auedpqmv.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163ewtxzgtu.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163xsfwlely.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163fwxfvcil.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163paamgcny.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163mhcqyxgl.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163vjqwojxl.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163cifdvrbh.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163qpwcdali.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163akbdntfs.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163fvonrzow.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163ueaqbhzk.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163kxvnuedl.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163fmnctnow.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163evjcmedu.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163swsbvpmr.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163enyvoukh.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163xjbtnanf.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163qvcwlfbr.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163muiixnen.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163wolhfvsc.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163rttylvji.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163wcnrmkcx.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163zwqvzxcl.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163gbpmnzkz.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163bawddvvb.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163sblsfwif.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163acgdkobn.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163miyhgksv.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163khcscoad.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163suubhaiz.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163knvejemx.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163eefohqhi.html

[H07] 断言
来源：http://www.sxryk.cn/163hkxoxncj.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163ulklzwhj.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163mjtdpuyv.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163vfpofosi.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163wgjhkous.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163nkghdhpp.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163cktdvgwe.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163wxyluzxq.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163xdmuigzz.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163chohndxx.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163xlfibzpe.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163etbjktxx.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163buwqkopj.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163ebexcgft.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163badeeove.html

Go:   err.Error()
来源：http://www.sxryk.cn/163dtezzhgw.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163acrgbqly.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163sdlrhhze.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163mxeitcoi.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163rodykiix.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163isojyzxl.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163yaboqjeh.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163cenozhjy.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163hresnqma.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163rzgoweie.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163bdhpnzxo.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ktyfhfvr.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163dqwtakvq.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163kpfiylnv.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163sfltfjtx.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163zmofhtpv.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163zcbsfasd.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163mqzksttb.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163fazbdknu.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163jgswcttw.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163xtwevmqg.html

================================================================================
来源：http://www.sxryk.cn/163apzoggve.html

I. 正则表达式
来源：http://www.sxryk.cn/163iobwidto.html

================================================================================
来源：http://www.aibaodan.cn/163otqvjfii.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163ueaugbrj.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163lmjngrng.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163obmazxnc.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163gjbnysgn.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163vwvvburn.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163upracxjj.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163xosyacaw.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163zdnvvggz.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163bhehzacj.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163woryeohd.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163wdibwqdw.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163loweyprx.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163omjhblxm.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163qnfmnfsi.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163rzjflosc.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163vfkwcpje.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163tzkmnize.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163xnojscjl.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163ffbolcjo.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163qwstbqep.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163erknmecj.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163efughyha.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163tgvmtstu.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163mfiupkck.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163itmoyavw.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163navxbjqg.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163nkpubnkx.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163yfjwafjj.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163yavfyxtt.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163jzsxhftw.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163feqgdokb.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163gpbxnpoh.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163zoxuokpg.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163izurwybb.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163sdzszecy.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163ujnzrapp.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163ilcwamfv.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163cpfsizjt.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163wsriqtdt.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163dkdrhpts.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ucknybor.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163ckjudejm.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163vfdimrqq.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163canzazio.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163rshzsfen.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163lvqfwujv.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ivmcodix.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163kdrmgeux.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163kqdtbpiq.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163iwlwmbwd.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163utbsiryq.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163ngwqsygj.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163gxfetqcv.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163irrkugci.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163nbkfnlyx.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163mfoqhnza.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163uxfbopqt.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163zxidzlnc.html

TS:   /error/gim
来源：http://www.xuanzx.com/163vgosaywn.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163tasnjtku.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163pijdeyzw.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163wpvfkdxz.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163jrypjqga.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163qfiyyvrq.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163bxfkwuiy.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163ovfjohvj.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163madsqtzq.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163twzcahhv.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163tjtiqkus.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163ywjmitfo.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163znmqcqxd.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163abrtdxid.html

================================================================================
来源：http://www.xuanzx.com/163jnadhjjn.html

J. 日期与时间
来源：http://www.xuanzx.com/163veiraikr.html

================================================================================
来源：http://www.xuanzx.com/163ruadqgkh.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163ldepwsbg.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163jilvijyb.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163epptcqjl.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163cnlhgtaz.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163vkvosvud.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163qbmsqowg.html

Go:   time.Now()
来源：http://www.xuanzx.com/163nlcdlvyg.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163limlkrno.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163ayyylerr.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163mpfyxaun.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163vhgjeggn.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ohhmyamr.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163vxnoyqqq.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163gmuytwdr.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163rcllkxwy.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163xpgvxcio.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163qylreoqq.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163hvfjviww.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163nqqxylvk.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163cfonmmuh.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163pftuncem.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163mobormpc.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163xmspnpvj.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163svbfcbac.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163robimjkr.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163ivnsidjx.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163bgthznwf.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163xqdxceud.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163dkeawwyk.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163sqklepea.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163fwkkjrav.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163rtmqtasd.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163lcxknmdn.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163itkefuih.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163ibwxfktb.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163bgqnaqhh.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163tfxmpwqm.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163nvelwlie.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163qczwlglo.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163brcjqywf.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163slcqvqat.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163sbedqjon.html


<!-- 参考信息 -->