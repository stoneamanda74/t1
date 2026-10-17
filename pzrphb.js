外链999!wailian999！

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163vydldnwl.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163vliopmak.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163naaadvay.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163nndxcnnn.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163selmcrvr.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163rxqfobil.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163cixrogmj.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163rmdrmonm.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163iojeyffn.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163hjkyahps.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163qbdezqjd.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163ymoivohu.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163rjuemlgp.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163adtdcine.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163vksxprux.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163tfqschzr.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163bkmzmkvt.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163hrwvkiks.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163uazfiufv.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163kgiehbjw.html

JS:   super.greet();
来源：http://www.sxryk.cn/163dtjxmtqp.html

TS:   super.greet();
来源：http://www.xuanzx.com/163zfvibsqe.html

Java: super.greet();
来源：http://www.xuanzx.com/163nxdcbiog.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163grwpxrje.html

Ruby: super
来源：http://www.xuanzx.com/163hluxqckc.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163lvzgwfkb.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163hdquxurp.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163tasywoyx.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163majblvgt.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163saddrwmp.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163rxosokak.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163qgurwdwu.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163eafvllxv.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163gvkoghfu.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163hkvdhpli.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163bkddvoub.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163gkyzlxjz.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163fuauqgbr.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163yzdqpzyr.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163tupfvpjy.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163gzprukrl.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163owdvldfb.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163intpcwvm.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163uqhuesii.html

[G10] 访问控制
来源：http://www.xuanzx.com/163baecyajg.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163nlnxlxmc.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163ntjbcmlz.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163baqnptxg.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163pedukfxv.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163hfmbedja.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163wdsuwppb.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163wkjtrfvl.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163spnukwip.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163aihodvgd.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163zxbmoevg.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163jvjvzyal.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163ijarlvun.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163vvkuufht.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163lqcphljy.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163hvpzbhcb.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163xtausmbx.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163zekchmcs.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163lydtsqvj.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163cadouusp.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163zhpantnk.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163opdjqxsd.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163tcvcgswm.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163kpmsuaeb.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163imgwrlnx.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163srfrwrpy.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163yxyaazhq.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163frgpthzp.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163modnepna.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163mxhceggg.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163jaeujpyp.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163wcychbgj.html

Java: u instanceof User
来源：http://www.xuanzx.com/163jxqbbihf.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163gcvduayw.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163lgdjnwvu.html

C#:   u is User
来源：http://www.aibaodan.cn/163gwyjllas.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163dyvgqejr.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163oskdhgxv.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163kqhbnxmo.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163nnivipwb.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163wjzgwzkt.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163ppdkntxp.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163twyihxtr.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163glxbyoom.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163znqbwsoc.html

[G15] 枚举
来源：http://www.sxryk.cn/163ekqrycnk.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163ijhkxxap.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163rtxpjmwf.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163gwicvdtq.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163qzkokmle.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163ruruzutn.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163jlaovnql.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163vfrypyit.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163plceaclu.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163jlwadkuz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163ldoeoaks.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163xwksaqel.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163dpkbjxxo.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163qyefqjhb.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163yrdfrvre.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163mxwalxdj.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163jrrncwxg.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163pjgwhmad.html

================================================================================
来源：http://www.aibaodan.cn/163gzhhzjvw.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163uwnbksed.html

================================================================================
来源：http://www.aibaodan.cn/163zogntjpt.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163xcktdupj.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163eurisxsq.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163wcwyvygi.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163knijzeub.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163otlnyqmt.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163xgmjrrze.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163silhxcxq.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163hcljeaac.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163gbqrrciw.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163akotcgsu.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163jngxagtw.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163hsfnpkjm.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hqisfodx.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163kkeadkae.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163iabmywzt.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163ixqhlyqz.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163usijojku.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163wutubpcj.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163iudozjcp.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163ncxrirvy.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163gyedypcp.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163tgvzzfdr.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163utrffqzd.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163cfapevue.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163oxututqs.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163fbysxocb.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163osricpue.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163zxbflndo.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163xdrwmgxk.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163djjlhnfh.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163zlgxfbvb.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163bhlsdtfk.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163kvskuvor.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163olpccwtu.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163zzmhfxet.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163xrgpkuup.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163wwarqkdz.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163bienhgxp.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163hsghsogv.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163aazhzyzu.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163jbfxuska.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163zelzcfht.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163ypywvqdx.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163ptoyxoku.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163wogikmhk.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163bfefcsld.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163dgeybxgo.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163aeqfwinp.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163fdoynlwc.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163lnbnjkkz.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163ltbjjsri.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163digzhnhy.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163drllakue.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163ohzfgquh.html

[H07] 断言
来源：http://www.xuanzx.com/163xmdsgzhf.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163rtajkdbn.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163lyvzetam.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163obxyptqv.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163hripevzv.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163fnxbwkhl.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163fwjngovo.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163viddievw.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163biayurwr.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163dngjzgob.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163jkbssowz.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163xaknlyns.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163wvsnxfni.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163yxxhrglh.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163yichrrcu.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163moouluba.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163wehidgqu.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163wnsjlplo.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163rduesoto.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163jyhkmwbx.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163mrrumvew.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163fheaaaxs.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163wdnrpujd.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163ksavyltm.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163fbvnhdtq.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163gohfvcmr.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ligxfdsc.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163udmhrbio.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163omdqnqan.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163rapgijpj.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163pddklnru.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163glhqclls.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163wubnqygq.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163cxqlifim.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163qaluweye.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163krjcwfdg.html

================================================================================
来源：http://www.aibaodan.cn/163zcebcgjj.html

I. 正则表达式
来源：http://www.aibaodan.cn/163zlfswery.html

================================================================================
来源：http://www.aibaodan.cn/163xfkakqqu.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163htgrgvib.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163vtbprhry.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163ookxnyxq.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163rgfpymem.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163bannizhb.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163bduzxwyb.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163nytubskq.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163epdukgak.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163btnvpwsi.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163yyftuvqk.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163owbkssjc.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163kiuvtifc.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163dayrgnhb.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163kkwbmgcp.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163jahatqni.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163ezdtipps.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163yumjybrw.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163inbivtkv.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163hvpzucjc.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163ipgoytvm.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163dtcgmqbt.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163cdtqaoni.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163cfybkpbk.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163xctchcnb.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163ldgwlijo.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163mfseexvz.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163gleljdpr.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163yrnupbhc.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163rgddxwof.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163jqxqtcpj.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163mcsgnflh.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163dnmhihek.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163xnwnelou.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163dihbsxpl.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163liylezra.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163kgpwtcmo.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163cckbverh.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163jszykhba.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163lktcdmlx.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163vmcrbofs.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163cdzxcfbg.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163aayogvzw.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163lngymjkp.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163eztdjyyf.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163gyonbrft.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163ogexnzjj.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163nahxwzfg.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163cblttmsy.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163cldglrtu.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163gerpjcld.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163wkmgrsbt.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163xiszxcho.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163gdhfojje.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163fgltwfvl.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163fmtreowb.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163itsglwrz.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163qajvemhl.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163errldgsn.html

TS:   /error/gim
来源：http://www.sxryk.cn/163udnxvaku.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163xzdcnekl.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163vrcrfaxt.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163udmsnbxd.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163hspaqdjc.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163jizaaodh.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163yghfobli.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163pmsfibjv.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163zgwvsrfs.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163uahdhidg.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163gzyfglmc.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163whixwlbm.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163llvvahto.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163nivwmguh.html

================================================================================
来源：http://www.xuanzx.com/163eldmyynv.html

J. 日期与时间
来源：http://www.sxryk.cn/163gzhryqgy.html

================================================================================
来源：http://www.xuanzx.com/163jxcvirci.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163ipdyjddr.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163tahtvoal.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163cpchuams.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ctoeaheg.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163fgjxqpit.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163ynjrnhzp.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163frwfaodk.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163ebtfcreq.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163kqidhvlp.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163alxjvrcr.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163lqpjaxzp.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163lgxwwtny.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163mvawknqt.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163qtgqrpny.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163qpmvmxqo.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163ruzlcozs.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163sqbazxky.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163umydujlz.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163szignany.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163zgbanwnm.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163srttfthj.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ffmisdlg.html


<!-- 参考信息 -->