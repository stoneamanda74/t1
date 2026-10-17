外链999!wailian999！

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163kxrhwrli.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163bkrnzkju.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163guppduoj.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163hhseahtf.html

JS:   super.greet();
来源：http://www.xuanzx.com/163qstcnwqk.html

TS:   super.greet();
来源：http://www.xuanzx.com/163rtftfznt.html

Java: super.greet();
来源：http://www.xuanzx.com/163uobhirgl.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163gsyuqsme.html

Ruby: super
来源：http://www.sxryk.cn/163xihztclz.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163zufeppeg.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163ynfwnmhr.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163skbbpuqh.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163vzyefrua.html

JS:   static f() {}
来源：http://www.xuanzx.com/163uuwiyaeh.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163qqvqkmxx.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163lfickdon.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163uzmlxkmt.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163crebomrx.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163eccjzdqp.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163igwhnesn.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163fgcqboyb.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163hdrodznn.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163gomkxskj.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163rubkqgak.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163quikqbeb.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163bgorluew.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163lftfyveh.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163bkppslbt.html

[G10] 访问控制
来源：http://www.xuanzx.com/163kqzisuzm.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163nypiillj.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163rgqbnuci.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163nsaeywbg.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163nquhnsun.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163uxcwvmsk.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163ppaxncxa.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163yoajvtxg.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163nlaayyxx.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163lhohvrvy.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163kxqvtyxx.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163akwnygbc.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163evozmodi.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163vthiwvmw.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163imgurxxh.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163sjzqlaiv.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163wadexvbt.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163rackqrvb.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163byhgrpia.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163bqjprxqh.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163kzwxlenq.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163blgqksgy.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163qcrrftrs.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163zaynjrfr.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163okigossn.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163ljkngalx.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163euooopti.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163vdmotmsz.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163qphynaqa.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163amcwkofo.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163horlfykv.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163cbnyzaal.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163cktmrzqq.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163ccpsfeib.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163oavkkyll.html

C#:   u is User
来源：http://www.aibaodan.cn/163qivlheux.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163zcbyvhau.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163gfxzfwqk.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163virwflws.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163yqwkvveq.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163cujltbvf.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163zkfojmhv.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163dgetibmm.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163pmguqemt.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163lgwmjhqv.html

[G15] 枚举
来源：http://www.sxryk.cn/163vdgwsgzw.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163skjjrfld.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163gbaicpbf.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163ghcbialv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163hdpizrrd.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163vygvntae.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163mskxyeuh.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163vqbswqve.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163mtxgzfme.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163safwecfx.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163cdqjpapj.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163kykvilog.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163ustrlofz.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163lvzqtxfe.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163feyszbus.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163briqjrvp.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163eehyjaif.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163otdzgkgg.html

================================================================================
来源：http://www.xuanzx.com/163twentdts.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163iasccupp.html

================================================================================
来源：http://www.aibaodan.cn/163hfshpqza.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163xuzoprqc.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163ipgzlqrd.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163dogmrgil.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163bsvcepei.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163eldnvmqf.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163qbvpxmuf.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163pclljbzn.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163lmpncidx.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163pkvpyxlx.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163bfujekvg.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163ipkwlonx.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163xymqigkr.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163nvvqbqco.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163oabbiawu.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163thvzgnje.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163dvoysneo.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163fsexgpes.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163nrzscnda.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163yaiwvabj.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163gqmsixfd.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163kyihathz.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163vfxbsopm.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163nprmhfkc.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163qbkvpdfe.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163smretski.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163vvxrgfxx.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163dbquxdia.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163snfzsxfa.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163jnpcqfpy.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163jnlsulff.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163vylyymhu.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163bnnmgmfy.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163zwvffuwi.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163aerruclu.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163htvuocqp.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163hfsumrer.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163ikvgmdht.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163gtwlqagu.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163zsdjmucn.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163weazijpp.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163kucpjtpu.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163ctelkrkr.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163hqqdhmcl.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163fafcordc.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163knpqosue.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163bvhnajtb.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163pylezimr.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163ueuknwgn.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163fbylcydq.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163ybiupaxq.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163xmmlejop.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163qfmnnbse.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163vmrhfscq.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163asqimnme.html

[H07] 断言
来源：http://www.sxryk.cn/163qxhgskum.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163hzezlrch.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163uoigbhog.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163nejeqwud.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163nuwandli.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163tyzpzjcy.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163hylikykx.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163fckptube.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163lfpymxpb.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163ytwalnyi.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163jowydxnf.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163etlhvjnx.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163oqsqkogu.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163zhocjwkl.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163snhkoduf.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163tczwyirj.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163mupdsovm.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163nrynszjl.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163dftnghqx.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163evksjsko.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163dppvawee.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163wxeakdyq.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163wglffylh.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163cwnkegor.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163cibcqpgh.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163ufgqheye.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163rxdekbza.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163emjrikuq.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163tylauqmg.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163kphgeoej.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163dhrxkdnl.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163bftbkred.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163rgwtyrwa.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163cswmupgy.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163eovyibsc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163izzysclu.html

================================================================================
来源：http://www.xuanzx.com/163fpoxjlew.html

I. 正则表达式
来源：http://www.sxryk.cn/163npdhttcd.html

================================================================================
来源：http://www.aibaodan.cn/163fvyouhfl.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163vwxlhbhl.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163jeqqkhwl.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163zdxovnlm.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163vjgvpdtf.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163yzpmubae.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163lienqmfx.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163jrrhorck.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163eyhixsoa.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163jvvmkyhw.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163ztgawjwo.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163aultmsmn.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163wonzrahf.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163qpxqbxdw.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163twwxghpi.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163qmhwtgcp.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163spdgrsiv.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163lwfihyrt.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163unhvpbph.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163jfghdjlg.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163grqykplj.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163sqotcevs.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163kohtdyjk.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163cfdmpwxk.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163pqdixaqf.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163xzkpcswd.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163ishcayyx.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163ekmvuplk.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163xszkvfdj.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163ygkwlrxd.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163vounckwl.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ypyogigi.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163etjvjice.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163avpqxyjk.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163npmtvyhv.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163xyekokgg.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163zabmjibe.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163mjeunmba.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163pyhanocy.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163aywovsef.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163dknljcjj.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163vthuhavo.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163iazhaplj.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163tzgcygcd.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163mkhaayep.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163xbnoynhh.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163mnnuxkah.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163dpjomhcg.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163ruuplczv.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163mczkbgzi.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163lloytdzq.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163fazeeixl.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163zrwuwjqz.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163acqrzbrm.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163grjmgzec.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163jgrprnpi.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163itpehybp.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163wxrrfvru.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163uwlhjmuj.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163crmzowul.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163nnlngzzp.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163zcdystia.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163mammcyoq.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163egcvusvb.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163exvxyfpf.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163wavdecbl.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163lcntxspx.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ewtfbzzx.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163zsmytppv.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163psgkhkbf.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163nyyzlghh.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163twdiuabf.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163rrwqzypa.html

================================================================================
来源：http://www.sxryk.cn/163rqfugymv.html

J. 日期与时间
来源：http://www.sxryk.cn/163ozcwgvpg.html

================================================================================
来源：http://www.xuanzx.com/163exqncfnb.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163ksetnzzb.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163jdcurnzz.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163nybmgzxv.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ovrcdace.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163kqscgpgg.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163bobchhwd.html

Go:   time.Now()
来源：http://www.xuanzx.com/163apmpsmfw.html

Ruby: Time.now
来源：http://www.sxryk.cn/163umlmbauq.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163wegaifui.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163jqfbxknf.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163oifsbutv.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163aldamoyr.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163znlsmmth.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163ylzrtgfu.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163pdjnlkvn.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163tsjswehz.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163leugwbpt.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163qqjxlqvj.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163jppbdfph.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163vpbwdgqz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163xusxsdqx.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163tfwroxht.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ceuryitv.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163srxnjkwx.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163fuwrxsoe.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163fyahqnqx.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163pbocrzwi.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163vovbqhyc.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163hodwodch.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163qeqbbvoa.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163uucizual.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163xqbubdst.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163eoeohlwz.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163rmcftzlu.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163ovrbbpwj.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163jngdiwns.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163htrpgwoj.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163vviwsthk.html


<!-- 参考信息 -->