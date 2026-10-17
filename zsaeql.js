外链999!wailian999！

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163gdrohawf.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163ebqhkozg.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163qbabwpgp.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163woapegre.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163mbunlfiy.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163uhpweaew.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163ogmgwsob.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163kyyzreau.html

JS:   super.greet();
来源：http://www.sxryk.cn/163cmdxbtqt.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163gjilgagn.html

Java: super.greet();
来源：http://www.sxryk.cn/163jwzfgzsf.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163ylzsxfyf.html

Ruby: super
来源：http://www.xuanzx.com/163eglbfcdf.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163abukgehw.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163nloliniv.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163suiidrcj.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163gfhytwtz.html

JS:   static f() {}
来源：http://www.xuanzx.com/163alapxnsj.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163gwvwcsfy.html

Java: static void f() {}
来源：http://www.sxryk.cn/163myayajyj.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163sqvqdgfi.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163jllmzhgx.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163pdvkazwf.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163rqlhukov.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163emtaerqo.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163dpveuply.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163lwukqfno.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163eferywcp.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163zqvqvkjm.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163bshdavsp.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163pvysmtvw.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163yxmohptr.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163ctpjmicb.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163mzdsotcn.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163xkmdlczx.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163hpalnpaz.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163tkgcleym.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163fdtfdjlm.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163dvfllufv.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163jdntjfjq.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163oxshwuuu.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163yuodytog.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163pvdljpew.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163mbxiyacu.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163usudqvov.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163dbejmjru.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163mgdewrky.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163aemsoiaz.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163qijbugzf.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163voqjquoz.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163xtkouoyv.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163lwmmkkln.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163jmgosflx.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163qyxrcxgd.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163nqpbfgas.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163inodsedz.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163gohdsrga.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163jwunykrd.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163fjtualjs.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163ekotffff.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163cbdetkej.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163fdcqreyr.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163ojsnefwf.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163blnzysua.html

Java: u instanceof User
来源：http://www.sxryk.cn/163qeaiyvzf.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163vdviuffq.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163lhqyclmp.html

C#:   u is User
来源：http://www.xuanzx.com/163kfnxkgxa.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163fqqisjah.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163zcbbbzve.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163jtpwzsfn.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163wevzfvpr.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163vcmbgoum.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163tsrufkvz.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163uyhrqqou.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163qhnltonj.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163httgymru.html

[G15] 枚举
来源：http://www.xuanzx.com/163uxmtwykz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163qpgbgqkk.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163dmgpfqnd.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163jmlycisw.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163yvhwooxf.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163ufllhegj.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163fpdoeoad.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163luvyncjy.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163wbzwdcjv.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163lvutdxke.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163wspnotkz.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163gajjcxut.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163hjgzbmdy.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163qrnizgkt.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163fejfasdl.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163imalvwio.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163medqablu.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163flgqyyxy.html

================================================================================
来源：http://www.sxryk.cn/163ukwgnmdd.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163ffliffwg.html

================================================================================
来源：http://www.sxryk.cn/163zcaakmlb.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163yyvfkjxb.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163fxsqrajp.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163mbgpsvvm.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163jdvcjtqx.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163xekvqutk.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163gphximtn.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163wcrvybwk.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163dilvxykg.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163jeiqwbwm.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163vazzltsg.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163qtogarcs.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163mklemipu.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163gticpxbs.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ptumuvfs.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163nhjxyhib.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163nxichhhs.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163ogfouyhl.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163ixfuxcmm.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163pvvkudsq.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163lufduyws.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163zgrjjrdk.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163xcstpbdm.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ydvbjvzo.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163rrvtggrk.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163yfzaxshi.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163dpowpcqu.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163unnuugzc.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163crmhpxzm.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163sufbyajq.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163enujnpik.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163puwxyivm.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163miozjcye.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163luwhiyww.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163elubjbef.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163uygzcmhe.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163aplpgvmb.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163mysdrels.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163kylkulhy.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163sxxsaqqk.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163mnnhpjkg.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163wukgltvz.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163niquamnf.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163kytqjfnt.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163ufzbplaf.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163uauubolj.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163qozmxoku.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163cypdmqfw.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163bqirbcri.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163vlxdsxbk.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163fjxjgijk.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163ovdfbskh.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163smencfvr.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163gruhxybl.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163brruhphx.html

[H07] 断言
来源：http://www.sxryk.cn/163vyjvuxbl.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163zoomlkpc.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163afzsuwwv.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163vwwstcrj.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163wwbjnbqs.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163pkuhtlxm.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163aemhyrrp.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163crtzodga.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163unkagwkn.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163nxscieee.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163xtubornp.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163vimfznom.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163rooaxeit.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163ajxpwaij.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163rxgugzfz.html

Go:   err.Error()
来源：http://www.xuanzx.com/163fkawfkrv.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163ornhlfwc.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163wfmudodx.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163ebdxnobh.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163cskdsynk.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163vmuydjwx.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163fwvmvdtm.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163vgbiupvn.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163uztiwgof.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163lxdvpxuw.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163jxbgdjlr.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163neaiitmk.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163mdrafbcv.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163evtrqtjk.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163inmopmoj.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163xklsrckk.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163jvlzfxfg.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163wpobrdag.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163czdudeod.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163ohtrytfc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163glrikqpz.html

================================================================================
来源：http://www.sxryk.cn/163aumofdez.html

I. 正则表达式
来源：http://www.aibaodan.cn/163jwxpbtzg.html

================================================================================
来源：http://www.sxryk.cn/163yibuevmo.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163tpgjkhcn.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163mnebtfdi.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163klcitvxj.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163rdfwpriv.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163dowetaym.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163blzrhbpk.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163muqthqpa.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163fmsccqny.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163dmgvlwmc.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163fdhlxpsb.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163rkfxizqc.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163ckcfwxgz.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163bnkbmavv.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163klutdzfx.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163dcwdkzay.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163lsljieli.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163mnbrocel.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163wbzyvjib.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163kvwtcucq.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163kngabuqt.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163erwjpnsv.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163vxdebacw.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163pabqmssr.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163myfvvzmz.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163hrwagdie.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163ksxbkkqc.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163knukpikj.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163izbshcdy.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163szontchy.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163mpbmyxel.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163zaenmuqi.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163rkqerevn.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163ajxkeqsr.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163kcstzmjd.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163edtaeamj.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163xuxfnqni.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163dapcbwse.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163dftagzoe.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163cpgffggi.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163upnttlgt.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163emkehuql.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163jcbitbnw.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163tczwsunb.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163pbwpynot.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163jrckcanz.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163hqvbxclr.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163oxhmtpeh.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163weqhjact.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163rfkakuvq.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163pxizgmct.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163aapylhec.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163dkgutrtv.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163symwvelx.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163zrynjujn.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163qrpgydlz.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163ccntoejr.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163tbhrxjqz.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163qqdbvdpc.html

TS:   /error/gim
来源：http://www.sxryk.cn/163cksgofgq.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163iweiwwgs.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163rhyhelbi.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163wokfmqac.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163fhwyxgzy.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163nmhrduvp.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163mbevrxup.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163hwxsbrqg.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163mkbtdqzo.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163nnzttkeh.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163rlioiicw.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163ohooszgb.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163xveqcydy.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163sgukpwcq.html

================================================================================
来源：http://www.xuanzx.com/163tiefalkj.html

J. 日期与时间
来源：http://www.aibaodan.cn/163zshfvajz.html

================================================================================
来源：http://www.sxryk.cn/163xjeccytd.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163slffkybo.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163gfcvackt.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163fprheigv.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163fxsrvvcs.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ejsumguw.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163ldikrmkl.html

Go:   time.Now()
来源：http://www.xuanzx.com/163nckvkkgo.html

Ruby: Time.now
来源：http://www.sxryk.cn/163cjkfokzu.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163lfbykrnz.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163glvaznah.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ywtmsjvl.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163dkxhppju.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163bsgbfvee.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163hngdvwwo.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163tnweutwh.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163unkstory.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163slmeuxyn.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163ucfktmap.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163lvjqitsu.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163mgivgeba.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163oscnyqyb.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ydbasewk.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163uwnlyiyc.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ayuzgtkm.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163xeedufcr.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ylxgyhuj.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163dcliwyvc.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163siglqilc.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163iqwufrda.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163unyxlcby.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163siqyragh.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163vtyxkpdm.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163rhidahcp.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163tqyxacue.html


<!-- 参考信息 -->