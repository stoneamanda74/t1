外链999!wailian999！

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163qpgezvzx.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163nqtrgvxa.html

Py:   super().greet()
来源：http://www.xuanzx.com/163whkudvur.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163vskruvhm.html

JS:   super.greet();
来源：http://www.sxryk.cn/163asyrudgx.html

TS:   super.greet();
来源：http://www.sxryk.cn/163wnkfrwgi.html

Java: super.greet();
来源：http://www.xuanzx.com/163tetvpgho.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163iaihfnnq.html

Ruby: super
来源：http://www.aibaodan.cn/163klvskawc.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163mkjwqvnq.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163amtyuqjn.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163gmgibkhs.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163ehxfkenw.html

JS:   static f() {}
来源：http://www.xuanzx.com/163ibvyrvhl.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163hzzchcao.html

Java: static void f() {}
来源：http://www.xuanzx.com/163ejkxzyuv.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163vztasprx.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163nsywpajg.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163zruifhbr.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163urgppzrc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163rqiwwuhl.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163ivufelkt.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163pqhtegsx.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163abedqvui.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163xqbdhjrx.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163souztgdj.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163gxmawmtf.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163jkdxdrhm.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163eumcojhk.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163wuzretrn.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163werqyxwz.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163zxoppcsv.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163vayzzuwb.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163nsutqadv.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163krafscmb.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163maorvijc.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163ibfntpwf.html

[G11] getter / setter
来源：http://www.sxryk.cn/163abzwuqry.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163gazpeban.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163vvxzzeqf.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163qobmsxug.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163uioxvuxc.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163tkyyncpg.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163faariirr.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163ywmhsghw.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163sgvgjujo.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163cmriyxjo.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163ejndfevt.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163qxvkdvvo.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163bshggahq.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163upispzyn.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163yjfbirui.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163qbywdako.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163sfeeaxyu.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163izrwuttm.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163adfnnfoe.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163mlagwgdz.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163npzldhgs.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163vqedhxzg.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163ztryovjr.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163srbxouzn.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163gzudvsji.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163ktbhpwmc.html

C#:   u is User
来源：http://www.xuanzx.com/163kklcndxt.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163qdxlbinq.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163bksdrhzj.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163viyjwqwn.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163srjkjhet.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163ijtjxjro.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163txxzpjgv.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163aiuqxmra.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163bobottcw.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163mqjhgjkl.html

[G15] 枚举
来源：http://www.xuanzx.com/163gtrflleu.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163agfpeiwt.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163mrsjakxy.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163pvjdowkq.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163xnodajad.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163rmmmujka.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163owdkcbwx.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163wzeuwere.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163zklxsisx.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163wrbjcbhn.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163jrqdctfm.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163itcfwfkc.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163vqmyhqze.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163cotbulxb.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163lhilbrfd.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163emrbhefh.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163rcndapoq.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163tzuupzdh.html

================================================================================
来源：http://www.xuanzx.com/163enkrposy.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163dmqfmdsx.html

================================================================================
来源：http://www.sxryk.cn/163uvjqyvua.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163qffbppwc.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163pqtstwfi.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163jqxzqhbw.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163rlhlgaki.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163wdjzxeuo.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163dvtjuxdu.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163hkvwhwvt.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163ujwyzupn.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163ojvjlqjj.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163lztmgjkr.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163onbqnnbp.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163kactouse.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163vufpuwch.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163fmxoinok.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ecqjepye.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163aowdyfec.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163dhxyqixr.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163refwhdmp.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163yxflxxqr.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163fkrpmmdh.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163iuifwcrn.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163hgqcmymu.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163bofwnice.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163jxqteqvw.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163cljzjmil.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163iatiakuq.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163zaevbbrc.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163qllzeeid.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163chkbszxp.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163rqlegwdm.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163xortgvhx.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ccegugvb.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163vogqrmrc.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163nnxtlyml.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163imvzpzfa.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163tujrgupq.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163gfkjphxm.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163qvftvvnx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163fbdchmfj.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163dsktjioq.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163kwpopmaa.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163osdwrthk.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163wiybkpgd.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163jhswxine.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163mjbwpykq.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163ujxlkolo.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163jvlqftfu.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163aybvafae.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163shxodtkp.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163zimsezzs.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163rdqnyxyq.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163eiepotnw.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163fnfhkshc.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163rveyonaw.html

[H07] 断言
来源：http://www.aibaodan.cn/163osjhezve.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163mbzxvoze.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163schujqnh.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163spemrkui.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163kwrzapvy.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163gjtnsduv.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163ydezhusf.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163kbfpahnp.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163axemylea.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163inoozeqs.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163pvkwtvex.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163rtitvnel.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163ycpvtdim.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163spthixby.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163mqqqysay.html

Go:   err.Error()
来源：http://www.sxryk.cn/163iwyyzfff.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163rxuswanz.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163xxomlira.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163gylgrkhi.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163whipupoh.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163ekhoesmr.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163zcxreyyj.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163wqedgfet.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163zklfcnjs.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163jucqgwtt.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163enemcokv.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163jkjvbjep.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163edqmoyde.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163wecwatrp.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163uosqzkiq.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163jcbtckbg.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163gheactax.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163wcobhadh.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163jfjjrjcz.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163cucqfkdt.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163fyeppidj.html

================================================================================
来源：http://www.aibaodan.cn/163akfquvac.html

I. 正则表达式
来源：http://www.sxryk.cn/163gfglzqdh.html

================================================================================
来源：http://www.sxryk.cn/163uxwgepcn.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163ebatdwdy.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163swrsuscd.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163wucbljpp.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ilcistqn.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163flvpvbyr.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163eikrrxul.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163vmaoqtsi.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163fnrmmhby.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163wltzdxcf.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163lmtcaogl.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163uoprvkqr.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163deujhrde.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163daqvpkyk.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163bwurgiwz.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163bpejjhuu.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163awaxjoim.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163nbsgdgcf.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163qzlsocwu.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163nbtghcva.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163kgiebcac.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163akduqphn.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163svmgbeiu.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163bqfxlnzx.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163qrtdlhvp.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163llemfdpm.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163rygrdnfc.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163jyqgrewa.html

[I04] 正则替换
来源：http://www.xuanzx.com/163oijszgwd.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163rltplguo.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163bxemiucg.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163dmekmsao.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ivxlqibq.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163xpocubrq.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163cvhmdzlg.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163xjbppyoq.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163rihmtnux.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163quyrxsrc.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163nfmxpxbp.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163rapsoxma.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163jhztsnyh.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ykruwaur.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163nrgxgooi.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163yxkthfnu.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163myrgmeud.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163sdtvatyn.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163ltpbrcvo.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163rgssnesp.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163ioefumhi.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163utvwmsdr.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163pmpvoksi.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163oejoobrp.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163cokvgvyz.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163cvvpwmbw.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163skuowrkh.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163jsgtoztd.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163frtboagz.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163lrrquzil.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163yrlrwtfr.html

TS:   /error/gim
来源：http://www.xuanzx.com/163oqgcrggr.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163nrzmwuad.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163puzpbval.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163rxkladmh.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163jncldsde.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163lbjeyytf.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163lsupmycq.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163elqomlho.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163eatttlcj.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163hggyifna.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163jvdtltfy.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163tzkzofkw.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163dnevwcmj.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163pfkbtrds.html

================================================================================
来源：http://www.sxryk.cn/163qvehpacw.html

J. 日期与时间
来源：http://www.xuanzx.com/163btrfqbam.html

================================================================================
来源：http://www.aibaodan.cn/163hujwefqf.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163mzqxuxid.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163rwdwefya.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163nphkuxpg.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163fyptsjxn.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ectxpbst.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163gxezbltm.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163nywutbcp.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163ufbjcpnv.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163drhjolnx.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163ecpwytzo.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163sheggpgl.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163lydotvif.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163zvtkahnk.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163hkgqhkef.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163ylylgzal.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163zbxoxviw.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163iqgctwij.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163qmwyuutv.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163jvkedqne.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163fouxybph.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163pwmrhqxl.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163hthcmcjn.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163rtkijmda.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163zibuqcjj.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163aecfjgbn.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163kvejpdzo.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163vaabrteu.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163tqjghtvc.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163tsfbbbbl.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163ebcdffds.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163mefbdzhi.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163rdlzcltt.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163ycwuzrel.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163nerpdkzn.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163tvymxtuk.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163ckaqjsdz.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163wcrghivi.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163fqgyggob.html


<!-- 参考信息 -->