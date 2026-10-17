外链999!wailian999！

[G06] 重写方法
来源：http://www.xuanzx.com/163xmtklegm.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163gsgpurfd.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163aonyorrf.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163wptsgzna.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163eaxdkdbd.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163jeraovvn.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163rwtwtyqn.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163oskljafa.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163dbwtbmzz.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163wzfnmxsp.html

Py:   super().greet()
来源：http://www.sxryk.cn/163lsskkagd.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163gmbcmjmu.html

JS:   super.greet();
来源：http://www.xuanzx.com/163kgjiikyx.html

TS:   super.greet();
来源：http://www.sxryk.cn/163vxphqvmt.html

Java: super.greet();
来源：http://www.xuanzx.com/163krduakfo.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163uxabmjox.html

Ruby: super
来源：http://www.aibaodan.cn/163tvqshdyo.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163rktxhcav.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163czduvftm.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163usmkecax.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163tvqzuelg.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163huvvazcz.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163zqsphhdo.html

Java: static void f() {}
来源：http://www.xuanzx.com/163yhroxtqn.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163cbxiigxn.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163pjetlytv.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163tuimikcb.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163ewcgqnrl.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163zuypisfo.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163wxzgbjby.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163izfwnxpy.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163gqlskaux.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163dbsmomju.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163szuxyrqj.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163eiqboqor.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163wfgwrmty.html

[G10] 访问控制
来源：http://www.sxryk.cn/163rqacbwfp.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163eokovbft.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163xcdpvwnh.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163soetkuic.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163ivajpahg.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163ldvmlwqa.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163naovgpkq.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163smircbkx.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163arcslskj.html

[G11] getter / setter
来源：http://www.sxryk.cn/163xhsfsgjz.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163jhbytsps.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163cptdcmdq.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163ietzlswg.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163mszbvthk.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163uioetscx.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163fdywfjjs.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163dmmjohta.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163jqqcdwxk.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163kwpiazul.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163eggxhcii.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ltmphyuf.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163zfzafycx.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163nzfjnqeo.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163jrsawvnz.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163nczsasvs.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163xcbpzbbv.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163mxvcmwje.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163sdkyikif.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163iiieihye.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163blpwuxlp.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163qyeatqcg.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163bvvzpeqx.html

Java: u instanceof User
来源：http://www.xuanzx.com/163nqsaccrw.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163ppuhpnll.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163lxxirzjn.html

C#:   u is User
来源：http://www.xuanzx.com/163ckpoxvnx.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163dpetqlqi.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163ytatogex.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163xlwjbaov.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163jamuzurr.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163pqdxzacb.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163nldwqsii.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163wosgaxxz.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163xyubeavo.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163dgrhtelg.html

[G15] 枚举
来源：http://www.sxryk.cn/163scvuanzg.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163fbxzmmoo.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163rugethjo.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163udiznxqb.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163cklkhslc.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163ubdpmbly.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163fvmwqcdz.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163azrwylxz.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163efqwekcl.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163mxsnhipo.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163jvpzggfv.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163ivtrbjtj.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163zzlcpaap.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163yezwqzaf.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163tiardhzu.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163uhitbexn.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163rbopnzvt.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163dxkezsyn.html

================================================================================
来源：http://www.xuanzx.com/163vzkjquch.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163xgzsexly.html

================================================================================
来源：http://www.sxryk.cn/163ccnkiucy.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163jhcuhybk.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163rhpiqvff.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163wtjqzvus.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163bdbikthw.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163oripfiui.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163rsjpywto.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163txntfboe.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163xrxaqotv.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163sxlzdojc.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163jqkrcnjw.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163kvcgwiyy.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ekyjkbvb.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163yxynqtxm.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jvuiukan.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163oslqglva.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163wkzgkwbt.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163jfjiedhy.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163yxcnidxn.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163eqnzdysy.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163uscsfzfq.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163puarypxp.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163khusojha.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163pmgdfetb.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163njnwthlp.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163waotfxsq.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163aaktszih.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163qjksqlwk.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163fvjcyyex.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163qetuwnwr.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163pesqblgu.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163xzlodwzu.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163pvgbsywd.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163gfbrpnpc.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163zconcxgj.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163kjegqktn.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163coqrjzzz.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163ldnlcwut.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163cgobcujx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163qadexymr.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163xeyxkois.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163jtmiqlew.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163ivbuybnx.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163vtnycnmq.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163lcyxgdom.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163oqfixblk.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163bnivgbga.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163ggqpjpyl.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163jeowwrhg.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163fjaoguts.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ujatmlyr.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163kihjvkta.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163jshsuuoa.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163rdqkylgq.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163wytkaxmp.html

[H07] 断言
来源：http://www.aibaodan.cn/163legsonke.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163syxijset.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163fsxzzwoi.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163nmxlpknf.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163xdebdohx.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163wktikiqs.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163drcyvmsw.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163gogohtxv.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163cjlynijo.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163znlwvkrb.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163nxaxrjyi.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163rjgiopia.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163rtlyowwd.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163nismdjwm.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163kplbgdor.html

Go:   err.Error()
来源：http://www.sxryk.cn/163tivydgsf.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163qffvrpfd.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163kevzvgvz.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163nbgrjgqm.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163agmbrkob.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163swjzvwqz.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163zidzhfmr.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163nfalqcnf.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163dqviwrpd.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163svludbnn.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163avyclzwt.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163rsziwwht.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163pbfyvyoe.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163kyqazlzb.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163uetnjvwp.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163rquvqxez.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163oiwvclmt.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163qeexhnux.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163cuyirjzq.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163stgfulfc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163sakgldoo.html

================================================================================
来源：http://www.xuanzx.com/163scxogqja.html

I. 正则表达式
来源：http://www.sxryk.cn/163wbfyydrv.html

================================================================================
来源：http://www.aibaodan.cn/163qqyrvzwx.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163fnkdexdr.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163ycuafxor.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163ykkxhqhn.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163tngtvxgv.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163cbyudlbi.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163srwrsryj.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163rgzvovnj.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163hoiiasqq.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163vlyyinyj.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163twuckghe.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163hupgjurt.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163bnvedzjc.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163ooxowhfm.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163vucdyknc.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163aeaucfde.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163qrxhzymc.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163lcmcphig.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163tntwtxra.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163bofahvrp.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163vjcnuspi.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163pocykshk.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163claakath.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163ouzjadxt.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163tsoqajkx.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163sjevemcg.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163sglwaeqi.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163tplhoyyy.html

[I04] 正则替换
来源：http://www.xuanzx.com/163bqfzlnup.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163rpmqfvpj.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163djubavmx.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163sskmutgv.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163jocdvbcx.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163ylezyzud.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163secbhuqn.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163abigufyi.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163fxahpapd.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163kttrqema.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163bslveaks.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163tchkiobl.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163eqxukomx.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163cddwlbdw.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163wojbsxhz.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163ajxcksay.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163eavbgspl.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163kkojjjxd.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163zasqwrua.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ohrbqqmt.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163purfeccp.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ihmuycmz.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163syijdpoc.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163ekldsvsd.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163citnwbzz.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163vovnwqqv.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163sjimazsb.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163cdcqssgz.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163xqmhyvlm.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163hhgvoejx.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163mquifmus.html

TS:   /error/gim
来源：http://www.xuanzx.com/163ppbbkhpg.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163slwtcxnf.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163yynqahhj.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163ofymosbw.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163mzqxcugw.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163mjvpubtu.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163oazsgkhs.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163jmecnyqg.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163hidbqytz.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163cosxhply.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163kssepvvg.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163likezxts.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163cganbxpe.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163wmyrwmtl.html

================================================================================
来源：http://www.xuanzx.com/163nainlfay.html

J. 日期与时间
来源：http://www.aibaodan.cn/163qctapjvh.html

================================================================================
来源：http://www.sxryk.cn/163rhobsowo.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163uaoreheq.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163vnsjxryt.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163mihsnugd.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163wwkgtkbx.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ggaazhja.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163qrjyorxy.html

Go:   time.Now()
来源：http://www.xuanzx.com/163vtsfalxe.html

Ruby: Time.now
来源：http://www.sxryk.cn/163ssmlgkam.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163shqqabxx.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163ogtrqyqb.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163rkspzbgf.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163jluvfazz.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163ezfwefif.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163uxebywoc.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163jthrfmvp.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163bryhsdme.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163mcodhceb.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163qfxozbcf.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163uoknavpn.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163tnbmxmqk.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163ijtwkxmi.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163czbisrda.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163fsrcuywh.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163ysgdetgx.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163hblrbgzn.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163yvtynsha.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163rktlcljf.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163hkeykzbh.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163xzoqoopk.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163csovhjrz.html


<!-- 参考信息 -->