外链999!wailian999！

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163zqhenggo.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163bdwwpvyx.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163xplatmwu.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163ibibuwij.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163youdgaig.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163lfvctgok.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163rrkfanqi.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163nskkywuo.html

JS:   super.greet();
来源：http://www.sxryk.cn/163trletqau.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163vozqgzls.html

Java: super.greet();
来源：http://www.sxryk.cn/163qgurnroj.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163bnnxocsu.html

Ruby: super
来源：http://www.sxryk.cn/163vuweksdb.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163thkorbel.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163tgeflqie.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163tmkstpni.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163jlpvcduq.html

JS:   static f() {}
来源：http://www.xuanzx.com/163jgycxipn.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163lrcdcdid.html

Java: static void f() {}
来源：http://www.sxryk.cn/163kaqauphn.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163tozktthr.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163liaftseq.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163tqmjufdk.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163kyxjaovd.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163whdmubuk.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163zrnzyxdt.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163yuijkyqf.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163krwiqadi.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163niyrppyr.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163znztxdtr.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163kvuiszup.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163pjktjkdc.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163lwyezkvy.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163kdbzwjgl.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163ghfxrokz.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163zvwsrsoq.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163uqaggzde.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163tdujmvfm.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163qpuvczku.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163iwtwookq.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163nxfjhftk.html

[G11] getter / setter
来源：http://www.xuanzx.com/163jhrhsdtw.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163popweoes.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163iviwwdkt.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163fedesurl.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163nxrmphbv.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163eiucxzyh.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163xmzmrfrd.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163igugsjwe.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163bptxnksb.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163jzspuasr.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163pzglrnpb.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163yfzvcdmb.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163ucowcjwf.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163btxhkadh.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163tmebpbre.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163cnwqpsbk.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163afihctcn.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163uewwctlj.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163hcokghrn.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163frwjnbhn.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163pmzqlrhf.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163icthljpz.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163mlydybmf.html

Java: u instanceof User
来源：http://www.sxryk.cn/163zjuwztqn.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163yjfaibhd.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163wnjrozgi.html

C#:   u is User
来源：http://www.xuanzx.com/163vlubyiyw.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163mfdiczzn.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163markczmu.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163qpvumsni.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163guzugrew.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163bkcmdaea.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163hxdbzgcu.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163zmujlthd.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163kstmlrwa.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163fvitjxci.html

[G15] 枚举
来源：http://www.xuanzx.com/163phkipfvl.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163lkaaognc.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163qoxgqedj.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163fimwecbv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163jhzfiycd.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163fjwxidbx.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163ozkwvefu.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163hjmgjknq.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163abvfucbx.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163olptkryn.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163dawdakfg.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163qdhwdcmw.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163hnjhojqm.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163vfmgzdrp.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163tzxtdyoz.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163wevqeuuv.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163nmxhbmzz.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163lfznbsmr.html

================================================================================
来源：http://www.xuanzx.com/163odsvhimv.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163zcugyevx.html

================================================================================
来源：http://www.xuanzx.com/163wnjwpkxm.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163lpacyqbd.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163vhtclgpj.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163fzakontq.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163brdmimfd.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163xbsgchma.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163lefueoan.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163ytmrgqum.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163ferqjues.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163mudozvfj.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163hunolpii.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163hsmklith.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ovmvcpkh.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163mfiugual.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jyhamxlg.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163soyxygaf.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163fykmuitb.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163hqchlacp.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163huchdlmg.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163fxybtpjh.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163yyimrsvg.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163ieynkqhp.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163rpbzpnei.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163gftbivfp.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163mfqbzakg.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163xfflvvyg.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163pvruyyqi.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163tcrtlosv.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163ncvagaok.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163guqjxeqv.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163pemmqtmr.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ursxwbjx.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163odyhpvzw.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163bcuhdtlb.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163nesqxvvd.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163hgeemknu.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163fvqxtyyv.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163hnwrdnvg.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163kbrmactv.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163xthkrylu.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ycytklqi.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163qsjvkiqp.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163kxkyxgya.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163esmghbla.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163uumxdbvn.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163srzngduo.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163vqcxmrqb.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163pfiwjohu.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163vkskczys.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163giwirrnn.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163xeoakctt.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163vsizsydg.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163fggddlza.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163bwqqopdx.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163ibqvpeoe.html

[H07] 断言
来源：http://www.sxryk.cn/163qsrzimcb.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163ytpjdfey.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163zglkwszy.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163fafsjdnj.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163buwarcxu.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163hhcitjyf.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163egdpckuu.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163orfasifc.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163inodpvci.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163hylhkfli.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163jxkfepts.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163udrtcjft.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163dhpynapq.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163mnxtpixo.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163gblklogr.html

Go:   err.Error()
来源：http://www.xuanzx.com/163kybmqbfw.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163tswfkvyb.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163deaozbne.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163kqbuapyd.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163amqezlve.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163jfvanulj.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163lvwhquaq.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163wpgiuuty.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163bczgzuek.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163oylpmwvg.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163yxgcftpv.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163mhivqqvg.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163wqmcatuz.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163xjhhdfac.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163qnoqmwls.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ukprcomk.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163gbedaepq.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163vpuypsgp.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163hvcvlhwe.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163vmqoeoda.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163skfeqsin.html

================================================================================
来源：http://www.aibaodan.cn/163csfaihlo.html

I. 正则表达式
来源：http://www.sxryk.cn/163vfibfihc.html

================================================================================
来源：http://www.xuanzx.com/163aaneclha.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163otflossw.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163xqyznsuo.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163abmmcima.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163awsyrtsj.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163lrmhylnj.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163gqpmdqgn.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163dwhpulua.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163pdurmwip.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163duacuamd.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163txjscljq.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163bajhznfd.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163oqfbsftd.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163faoxwtci.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163tnryuthm.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163cfmaacsk.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163fjquykzr.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163rracqmjg.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163mimdolhn.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163rjigojbz.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163hxgygijt.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163fuwkqobf.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163yhrpypsl.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163yqcsiwnc.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163ebcqcafk.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163qkfmnyud.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163nlhhlfmy.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163uydjvbwf.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163viqgyhzc.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163rtpfueky.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163lmpmghgp.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163oioygpug.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163iyqvjqly.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163gacsojmr.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163zgoxmlla.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163wjunlygb.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163nehkcqsr.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163fyvzxbho.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163sulkslqy.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163aggzidsc.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163zwucqmoc.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163yacpdbmd.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163xxzcgudo.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163vupqkxix.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163oggsqmdo.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163uqcwviis.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163maycgulw.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163trmohwqh.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163pgxywpeo.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163semrwmnf.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ijjmfcej.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163twtpnorh.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163dtvafbur.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163binmckhy.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163pimvnppl.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163kbtxlulv.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163kmwwqypr.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163kjavgegi.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163bhtxrqvi.html

TS:   /error/gim
来源：http://www.sxryk.cn/163wgpmycta.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163hdeytrhi.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163dijlgqbg.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163rglnxxxm.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163zcqdvvhb.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163hxqcxobm.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163jripdlcw.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163sckjwrbi.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163uscbnfin.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ythgzeda.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163mqdqitni.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163abxwmwyq.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163itgqzsli.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163qryrturg.html

================================================================================
来源：http://www.aibaodan.cn/163bqdmwzcq.html

J. 日期与时间
来源：http://www.xuanzx.com/163mwloesxq.html

================================================================================
来源：http://www.xuanzx.com/163gcmtukso.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163azllexpf.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163pbxmqoow.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163xjfbubmp.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163uancshhc.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163vyfeuxbr.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163xmqvzgey.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163uhcxrttb.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163ihtvyyls.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163nuroopwd.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163hqqtzuph.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ssrxodhn.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163yzmcjjpl.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163hnyuxzkc.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163wwnutqxh.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163fccmgjel.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163jlhfdybw.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163pxipgsnr.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163ywfmnvyu.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163klnjahen.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163gkzjrgsw.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163lplgsbpr.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163brdexajq.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163fzusavvy.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ejxkrnev.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163ixpxqong.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163eowkvhdq.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163oijvebru.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163beuhuwgv.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163lmkelsqq.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163cdtnwkuv.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163cnqpyajz.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163lacedhwu.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163fmmdmeko.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163dvtvxvco.html


<!-- 参考信息 -->