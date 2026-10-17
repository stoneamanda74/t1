外链999!wailian999！

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163fjjgwxls.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163bwekfsrq.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163nxggitrr.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163kczznroa.html

[G06] 重写方法
来源：http://www.xuanzx.com/163sbaqummq.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163tenulznk.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163pjiqoekc.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163hamnqczy.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163nvqiiife.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163rcypqusg.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163xnriqiit.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163qyplqnow.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163xqhjpeia.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163rwusemrf.html

Py:   super().greet()
来源：http://www.sxryk.cn/163qkctohhh.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163vcdklrfh.html

JS:   super.greet();
来源：http://www.sxryk.cn/163mvvfiwly.html

TS:   super.greet();
来源：http://www.xuanzx.com/163higksaak.html

Java: super.greet();
来源：http://www.xuanzx.com/163ifmtbvtj.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163nkieyjkh.html

Ruby: super
来源：http://www.sxryk.cn/163dqiqyqed.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163lamonekl.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163kvbdmvcl.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163nkyiiaas.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163cwxehnkx.html

JS:   static f() {}
来源：http://www.sxryk.cn/163izhtavbd.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163ddxyrdvo.html

Java: static void f() {}
来源：http://www.xuanzx.com/163axryhvpl.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163msplbfis.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163bjcjjppb.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163pywedadt.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163ubbvitfq.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163qwktyxzj.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163wrikdwix.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163kgyzppzp.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163jdxhymro.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163aljccjat.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163lbwfdkwf.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163kzmzlyac.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163llbcoydm.html

[G10] 访问控制
来源：http://www.xuanzx.com/163wkroxzbl.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163rmmsjopy.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163rueqdvop.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163rntqqcej.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163lfxmjcfb.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163irkmzfzs.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163masdqxvm.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163oyaecpll.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163loahpqlg.html

[G11] getter / setter
来源：http://www.sxryk.cn/163hkchyouo.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163jriwloyk.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163uflalouu.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163fcczsxvb.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163vzeqejuu.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163emwnqclr.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163snahdqif.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163uhieuvgj.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163pqnmqdna.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163zuvuoeur.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163kyuztkcz.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163kglwscjc.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163cmpymvrb.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163xxcqshuc.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163xxegyosa.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163vvipbeor.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163aoaljesu.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163jdwzfneo.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163lgpzgild.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163zjmprbuu.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163pgxdcjau.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163mnctutfu.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163ancuttat.html

Java: u instanceof User
来源：http://www.xuanzx.com/163olybhfoj.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163bvqaaste.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163auoeouhh.html

C#:   u is User
来源：http://www.aibaodan.cn/163mrygqswd.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163ytcwdykg.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163ggftovof.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163iypjdoqv.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163oqjwxrzw.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163vlwvcbuh.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163lndhjhcm.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163qufzdqlv.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163knrwnqpi.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163pcvkbdxh.html

[G15] 枚举
来源：http://www.sxryk.cn/163zyvvbvcj.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163mfkmkmtq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163sdmdxlcg.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163qqeyyehb.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163vplxibzo.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163moqmisul.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163teyhhfva.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163aeytkwwz.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163jizycogw.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163izjmqxcg.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163yivtbbyb.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163dbcywydu.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163ixfsvyiq.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163rieajils.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163njlsqyzo.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163drbnnqez.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163xaacsxjk.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163myfikkud.html

================================================================================
来源：http://www.aibaodan.cn/163cwsjzweo.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163hynceuxt.html

================================================================================
来源：http://www.aibaodan.cn/163ayvqknun.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163hfkprkpu.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163yckjrsqy.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163jhsflahi.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163evnxafas.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163gyilxefq.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163gordlbyz.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163hsignsil.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163wngkppog.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163wdtznryu.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163chzongpp.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163ftpnjitb.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163fmnunhpz.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ygouculu.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zoolniqb.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163jvznbgou.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163zpqlxkyo.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163miyrtzjp.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163vlijpcuc.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163fljjurup.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163ivgqnzkq.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163lxlpkwam.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163xlmpbkqf.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163qqndidtk.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163suomxtzh.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163zyryteuu.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163izyylhug.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163hhnnefpu.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163deejoiag.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163kzaifaoz.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163sqpqtmux.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163qsuyetry.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163syeezkva.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163xmhqrwum.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163rwlpnnzo.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163pcnqyfqa.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163kjjnfxip.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163gwpmuqbl.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163hkukkqxh.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163oyavsgdf.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163qgymyfeh.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163aaomnrjt.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163fcuvwrby.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163dveksips.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163gigqnjjg.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163lipijlgx.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163erzyojrf.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163loghlqqy.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163vcoegoij.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ecfozztj.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ylynizgd.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163efrzqnbg.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163rhsdboie.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163kzxuzcqu.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163lmhcbmdy.html

[H07] 断言
来源：http://www.aibaodan.cn/163wvlpthii.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163yahzjcvy.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163tvbrsrdd.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163kayajlkj.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163wuiromyh.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163mcmzgzpl.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163zfagkeaq.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163gnqlcgkl.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163kzstbepd.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163gfvichdi.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163fliweipn.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163wmabinxs.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163bsqibfti.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163rtrdigey.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163moanfgzh.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163dzgtouro.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163xkitedeq.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163qagjhfct.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163caxddjlf.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163gfndyqcc.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163kjzyzxbi.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163parebcgz.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163hkxygzye.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163lruztbxw.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163krwwjwsr.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163fcvggvjq.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163hvndnokt.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163rtubxhrm.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163kgdevbid.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163yyruatui.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163zynffkox.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163olunuluh.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163jvgbovux.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163ibiretvt.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163fvcsbknc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163phbccffb.html

================================================================================
来源：http://www.sxryk.cn/163jfogigua.html

I. 正则表达式
来源：http://www.aibaodan.cn/163peiwywtt.html

================================================================================
来源：http://www.aibaodan.cn/163ipiqtsom.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163ricsvgls.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163pelouoks.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163xlyzmuxq.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163savvxvoc.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ndvzvvor.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163efepofuz.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163tqbigzvy.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163nuzurwfl.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163gnwxzhbo.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163jssahetr.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163juimzfmi.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163sgqemirz.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163tkaubxwh.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163kfqizbpr.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163ewasqdmq.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163aeaydwyt.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163xyhzpylu.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163zdbfiqgl.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163mfpyfuey.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163ylveekxt.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163gfwnzzwd.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163bmugrfpf.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163foyxutyn.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163xzckbqcc.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163uipwvmhc.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163cupgcsiz.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163ijpodqoe.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163zpmfukvn.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163lqnqzats.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163zmooelhi.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163plcvgwsa.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163paktovxm.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163nmynvekt.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163xzphqpps.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163adxdacfr.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163efzxotul.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163jjfbeazk.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163vtdpxljx.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163uhtkqvbd.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163kvjpllvk.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163shnrauyq.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163ouqhvdkt.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163vkvnchoc.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163gncjlfhn.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163uftavyxg.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163dxgpvlzc.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163owkdbdjz.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163symklomn.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163gkvqeycw.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163zfchewyx.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163uxenllvf.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163emqyikrs.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163njoxbyqw.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163dzwgoeik.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163atihzytc.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163sfnaxdks.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163rgsnlefc.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163hgvhhfna.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163vxgljqbx.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163fitlcxog.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163irzpzjru.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163comgezbl.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163kzruzsmn.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163rxzlovdo.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163mehyfukz.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163iyaenber.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163mumccklr.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163tfgomcfn.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163fwufmvyt.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163imdqmjcv.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163pxgeotpf.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163hmngzjen.html

================================================================================
来源：http://www.sxryk.cn/163cwxubmtm.html

J. 日期与时间
来源：http://www.xuanzx.com/163dfqdvqnk.html

================================================================================
来源：http://www.xuanzx.com/163gqjfuwhp.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163wuwqzwao.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163fuxvnkvr.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163vtkzgpal.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163ijblthms.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163xrbbytxt.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163vhvxtlel.html

Go:   time.Now()
来源：http://www.xuanzx.com/163xmolyajx.html

Ruby: Time.now
来源：http://www.sxryk.cn/163yatpkdyg.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163apkvesef.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163rnfuqnbf.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163warwnnnx.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163tifsncnb.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163khptwwyf.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163zhhtxreh.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163bgghqyfs.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163sdtslbpv.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163qsufzppj.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163ahqgyons.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163xvfvaawz.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163gayovsbv.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163rsfyepzz.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163xutfrids.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163kzklqdil.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163diwznaro.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163mcohrojs.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163iipaikwj.html


<!-- 参考信息 -->