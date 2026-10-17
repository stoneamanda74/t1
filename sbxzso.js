外链999!wailian999！

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163ldygsgas.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163sjxrcdxq.html

Py:   super().greet()
来源：http://www.sxryk.cn/163edkzqbkp.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163yikzfori.html

JS:   super.greet();
来源：http://www.sxryk.cn/163lazsahzb.html

TS:   super.greet();
来源：http://www.sxryk.cn/163wohspnro.html

Java: super.greet();
来源：http://www.sxryk.cn/163lwzewwgh.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163nimmzqoq.html

Ruby: super
来源：http://www.xuanzx.com/163enqaqnkd.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163pegjebii.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163geykjcen.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163ufuqpvfb.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163wfgwjhuy.html

JS:   static f() {}
来源：http://www.sxryk.cn/163sxbkmpue.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163pwhuoscr.html

Java: static void f() {}
来源：http://www.sxryk.cn/163ajrchqkh.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163hfvujdex.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163elfmrjkg.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163lkjoithe.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163trihgkxb.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163cfsftydy.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163kznwyycd.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163ireskvlc.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163bbropbpj.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163gsldihny.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163ysowdvek.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163tixzsidb.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163orojwero.html

[G10] 访问控制
来源：http://www.sxryk.cn/163rbplvhmd.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163vgocrcnj.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163qtxlvuws.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163tjphmfiw.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163btprrzqn.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163fqanxmbr.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163kohjtxqa.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163pieodlgm.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163hgnaqzkw.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163torfshfg.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163uthkopym.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163hzazphky.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163xjdemgpx.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163zzekcgqs.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163yhbpemyq.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163tdwdpbot.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163cdobvuxi.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163cfovdmae.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163tozkhiha.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163qbjbkopd.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163rfqksfun.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163aoxzktfd.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163mnschvke.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163cmkxtuiq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163dhppbddf.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163smyskjrr.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163uquztmtx.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163otrjaqnm.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163nfvccrgs.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163fxpiphtk.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163rknkpifs.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163uppcpnbb.html

Java: u instanceof User
来源：http://www.sxryk.cn/163faxehquh.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163kmqysblb.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163iisehczj.html

C#:   u is User
来源：http://www.aibaodan.cn/163mqsaetji.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163yirtpahm.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163qewogkbs.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163ibrvhchj.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163odaplxzi.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163hikyemwq.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163ahqkufji.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163rfqntdsx.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163xrddnldi.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163zdpcisgy.html

[G15] 枚举
来源：http://www.xuanzx.com/163rsuscoxw.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163drvigeuz.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163ylqhemuu.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163fvrrbswg.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163dpesqmdl.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163dbpbojbk.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163ehqyghve.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163yjczyrou.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163xyypioop.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163rdwogvju.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163fmzmblyq.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163znslxtnj.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163epeyaemi.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163wifsejys.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163mlmydjiu.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163zhfshvzq.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163jhvzuvmn.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163nwsfgxwd.html

================================================================================
来源：http://www.xuanzx.com/163ckyoidun.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163upxifipw.html

================================================================================
来源：http://www.aibaodan.cn/163yqtoqpsl.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163uhsquoqz.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163iuapmmvb.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163hoikmhjh.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163dyqrxxxx.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163dbpnvdkp.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163wgdtecll.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163phjijuvq.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163kjfyjzji.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163hcaubkie.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163aoeetswx.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163nevjrbbw.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163kwysaflp.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163fwxkhnjt.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hkslruse.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163jbrzdsgi.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163qchvfdze.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163vzgwbtuc.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163bjlxkkwb.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163xtqgodpf.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163llhslgfr.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163ljvjgblw.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163jntjounf.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163nkjlmgrw.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163penemqri.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163sucxihsp.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163jndztrrn.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163anjhitvf.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163fzdqefzy.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163vkbtqsmd.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163zxzvzjyy.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163poyueddz.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163yqfqxmfp.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163lqrhmhpj.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163anqmnfxg.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163mpqwlbvg.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163dglxxoql.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163zeqhcjbj.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163hyjqmatf.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163eoneiepr.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163wkkqvray.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163pqwvuyzh.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163rlyieufw.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163meijpzdg.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163hcqemkrx.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163ivhbcldt.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163lrrqlsxs.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163cohnrapn.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163dvohhxoz.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163rpztezqc.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163sgmycbpg.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163dojbynvy.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163pfdffdtt.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163xanbjrbm.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163bxzymxnu.html

[H07] 断言
来源：http://www.xuanzx.com/163jlxsawev.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163xeswekfr.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163cucpyste.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163nygufina.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163lsifdguk.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163lolkctvs.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163lkygdwnh.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163johlawzt.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163eqjfothb.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163epculhtk.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163aqebhkks.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163aqpxuhzx.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163ruztxbxo.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163cnwdcdce.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163lsineacl.html

Go:   err.Error()
来源：http://www.xuanzx.com/163ogpexrqj.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163wnrjvzxa.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163thtudyrx.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163iamfffhw.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163kpoyaozu.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163uhnxmmpf.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163tcjejxfd.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163frrutaja.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163zuirrrcy.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163ahqwjmgh.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163jcgjpzcx.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163nvwpagxk.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163soabyuoc.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163txjgjwqw.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163fnmvjvlo.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163isltnfcq.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163xqamvpro.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163jdwdskhv.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163kldpovkr.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163rorumwaw.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163lyinqlzr.html

================================================================================
来源：http://www.xuanzx.com/163erklgrpm.html

I. 正则表达式
来源：http://www.xuanzx.com/163elvvxmfb.html

================================================================================
来源：http://www.sxryk.cn/163itkqqxwj.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163nnpokkfr.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163yqkqywmj.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163llssxnfy.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163speecmyj.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163lpfydsty.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163aogtktje.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163tlkyqmlk.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163ycuymqpl.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163hqavwjpq.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163pcjfmcvh.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163xukanxcz.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163gsfnwohp.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163vicykneq.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163apibngsk.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163isvnsdul.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163lsufsnyb.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163hmcnwamq.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163zkvhvavq.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163rhhujoif.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163vtenypuj.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163kfcrpgeb.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163anqjeitg.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163xpxmbxsz.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163vmjvcdrp.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163wkktlzuw.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163grldyqkd.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163rugfbvej.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163bdalzwrv.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163hyogteqj.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163vfxesvxh.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163migymfll.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163fptqvymc.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163nvrzwgpd.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163kgwihtsv.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163lnxdkdwe.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163coxbpfrf.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163horsdtzk.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163ownfnkgd.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163dryrnsag.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163antdrjgy.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163qcksuizw.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163emebfltr.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163vaikfosi.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163hqpwbxfw.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163kupwkbrz.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163rqnckvza.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163nieeoobk.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163cyjfysju.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163sbfebyki.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ecsodrde.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163cqjnkpra.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163xhkymvhv.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163flmrzqnn.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163papwwdgs.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163igwosksb.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163qqgbrxvu.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163lgysjepy.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163lyohaqtu.html

TS:   /error/gim
来源：http://www.xuanzx.com/163tfvdvaji.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163ynweflzy.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163eovtzutn.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163ismaeqwy.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163djmnoidh.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163nrphfnsy.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163ofmfoykk.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163kdqwdnql.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163mfrbxtra.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163zuvpdzqe.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163goeqwmqd.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163dvujmjbr.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163nxfrqrac.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163epokzcvc.html

================================================================================
来源：http://www.sxryk.cn/163mboboaav.html

J. 日期与时间
来源：http://www.xuanzx.com/163dgtpfrpv.html

================================================================================
来源：http://www.sxryk.cn/163ajgwdstr.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163curcuwkd.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163bqurtxur.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163rjmuwfrb.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163fvomsaxi.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163gbgippdt.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163gxzctqrj.html

Go:   time.Now()
来源：http://www.sxryk.cn/163wpcvkkzg.html

Ruby: Time.now
来源：http://www.sxryk.cn/163ydwlaqtt.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163qkwkpmfn.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163tdufrofp.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163uusmerik.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163gcqubwvd.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163jcuafzcs.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163czoxztfy.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163lsrlfyyb.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163ddxbtthk.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163njtiijdn.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163mxjdfmpy.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163tpuwewzy.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163tkqackww.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163efrjusid.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163hhzahqbp.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163slgycqqf.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163ijouqjki.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163cgswmqpq.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163ybrrhrpn.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163lropsekg.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163mdukjjpz.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163peaskvlw.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163dzkgvwpx.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163ytsphlhu.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163gxoqwcrz.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163kqjyyapa.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163dloqeunh.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163frnpidez.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163arznuekx.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163qqtvwxbp.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163qxtgxkmo.html


<!-- 参考信息 -->