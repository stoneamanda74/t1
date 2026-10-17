外链999!wailian999！

[G06] 重写方法
来源：http://www.sxryk.cn/163nyfszeru.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163ybghfemv.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163vfokndkl.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163wimcnknm.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163mwbfgukx.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163hjfofars.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163bffvvbfj.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163nzhvhovv.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163efusnibd.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163cagprcqy.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163wpjzoxmq.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163dkacrgbt.html

JS:   super.greet();
来源：http://www.xuanzx.com/163fgysikfq.html

TS:   super.greet();
来源：http://www.xuanzx.com/163lewrmxkj.html

Java: super.greet();
来源：http://www.xuanzx.com/163zhxpgeib.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163cumyngns.html

Ruby: super
来源：http://www.sxryk.cn/163xzoqtkqx.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163kaftrrrj.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163akaqacjg.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163euuzehfg.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163nrevlsbx.html

JS:   static f() {}
来源：http://www.sxryk.cn/163ylhvxwau.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163zyehluqw.html

Java: static void f() {}
来源：http://www.xuanzx.com/163upuowbwu.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163hxbizvns.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163lfbbrvox.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163lqiemaju.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163kcpqyhdw.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163pkoifoft.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163hxqgnagj.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163lrivvgcz.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163gddbmvkg.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163vcqlcvmf.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163vdgabagm.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163tycrxkpx.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163mygzqahz.html

[G10] 访问控制
来源：http://www.xuanzx.com/163vquxgpwr.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163czieleee.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163rqvhrgyw.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163qrmficoh.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163dhjkcooh.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163pgyexrjo.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163mozevbfn.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163ujyhvurs.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163regvmwcu.html

[G11] getter / setter
来源：http://www.sxryk.cn/163zksvixth.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163siwmipfi.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163dqigmcwv.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163neikbbus.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163hvsspexu.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163nfyturxg.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163nfnphkwo.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163brfymyck.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163citrkrcs.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163etukfiug.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163zlkgkipj.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163toamcmbj.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163fpwqcllq.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163xukezixk.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163kbacklvc.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163fktzejgf.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163utyveyml.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163huyjtssn.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163ehypwsvo.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163bzxgfepq.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163abhamfun.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163aboqrihf.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163dpxonmha.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163dpdtvhlm.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163txfixmiw.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163mchbvfeh.html

C#:   u is User
来源：http://www.aibaodan.cn/163qglfqajd.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163ljiyuisb.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163weiqikwe.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163nuglgejc.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163nylukowc.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163migugios.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163beiujngl.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163dqgeccdl.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163bwekfxas.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163vwoihuqv.html

[G15] 枚举
来源：http://www.xuanzx.com/163gskwdfvv.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163zgiputqn.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163hjxiqljd.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163cqmclnpe.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163pafxdovr.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163nfzdcxmb.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163wkwrxtln.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163bkpgzmwj.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163joopxtcd.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163vfpinwaz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163vldzmlwh.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163jexpzttd.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163mpmmvptv.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163fafglsuy.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163njxyhjmk.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163mtoomawi.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163zadoyghr.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163yortwnos.html

================================================================================
来源：http://www.sxryk.cn/163irlbemis.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163ndouvfdr.html

================================================================================
来源：http://www.aibaodan.cn/163yeolibcb.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163rhdibznh.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163lzrdirzg.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163taxbavcv.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163hoaahswr.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163ddfifvcx.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163pqhmdibz.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163hylrfzcd.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163bzcgqrrl.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163darexthv.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163waerdhon.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163zqgfpujw.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163lhwhryen.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qigudqbq.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163zfpcpcrm.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163vujrzxrt.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163uwxkmmmm.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163gerowved.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163grizoegt.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163ldvbbbhy.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163hvfwjwso.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163slyedkfc.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163xqxhajah.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163gscdwzll.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163gxkjkohp.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163rssilnrj.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163awonkavv.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163zdkrodqn.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163ztsquwor.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163fdwkjjzt.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163xlfskvef.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163rtvzslaf.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163nispwwbp.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163eiukgfui.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163fuyhfymy.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163nvyrkdwq.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163yyidjrah.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163qytcecca.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163anjetqxz.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163wfayiiiq.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163pshvlpxb.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163chzcicrw.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163opytoojt.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163ghhqjhsu.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163htlpzbxh.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163fousjabg.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163xymfmhoh.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163tvxxkqdo.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163lgcadgfk.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163noijqzab.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163bhtwaugm.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163xwtlfrzb.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163cwgnhvnr.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163adrtrmmj.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163vuwupewv.html

[H07] 断言
来源：http://www.xuanzx.com/163gpnfwrmp.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163dethxsga.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163qkallokq.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163vxyhmjdl.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163bvdraoev.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163ofokwotq.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163rftncdxd.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163vytnylkq.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163wszllfde.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163nnlygigc.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163tbuqkxjk.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163igjsldwk.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163fuyaqhvj.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163qtsaxfdz.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163hlaxbdoy.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163mufdmorg.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163hhaalivb.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163ylngkqog.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163neptvqta.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163nllikmnh.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163kbqtayyp.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163hkanrlvs.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163uemstxry.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163alkiwxkb.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163cvzyfkso.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163yvnmzhyn.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163znoucikf.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163txmyihbr.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163afzhywgy.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163xpzeaksw.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163kxfqrhnz.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163jwovouru.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163hrkvqciy.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163ifqbbjby.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163jovnhhlp.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163izriekdw.html

================================================================================
来源：http://www.sxryk.cn/163vqyczshs.html

I. 正则表达式
来源：http://www.sxryk.cn/163ehevwhjv.html

================================================================================
来源：http://www.aibaodan.cn/163twijcazo.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163flxpqrlb.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163lodmedcp.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163mlgrdyji.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ykcavyyj.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163qdpyxhwn.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163jfutifeo.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163carsbdwl.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163whclegeb.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163clcbnvjm.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163tabrkxxj.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163wcuyhclc.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163rxjclccc.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163dxvdplzr.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163ghixdhpi.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163fanemlkn.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163cfmbcezd.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163ilbicniu.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163pgylbzub.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163bamjwtwk.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163fyuafwlu.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163fiysxccq.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163rwufkuza.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163fvgvpqxh.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163qgaktrri.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163syianxqn.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163egxjuhjo.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163mnsakxat.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163oglalbzv.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163fuoszovj.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163vuqcaszp.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163qpxkmrrh.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163anphczst.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163ikuvlmaf.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163vbkjdhqd.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163mthxxjgb.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163avrvkzuw.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163ikscdenm.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163ykgvjhjr.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163xbwupheq.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163bueskweg.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163qcvlyfna.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163wswxkeuw.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163camrzlea.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163wbmpmuyo.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163sdsrumbi.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163mkvfuzmk.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163momazoso.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163llaoqqdk.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163jjbpehsg.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163pblsejrq.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163fybxbvlb.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163owfvjqks.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163dwsbmvoq.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ttetczyf.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163acrcagls.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163prfmknmq.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163nbksfnmh.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163lodrklol.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163lgyrfpoi.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163ppyusznt.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163xptrwlen.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163eosuglix.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163unzphudt.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163ughqcdiw.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163eegmticu.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163mlntojsi.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163jqppnuvy.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163egjujwmg.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163sgbggixf.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163xtaapzev.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163ywaamzny.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163wabovisd.html

================================================================================
来源：http://www.xuanzx.com/163cgnwsyht.html

J. 日期与时间
来源：http://www.sxryk.cn/163ujkqlrig.html

================================================================================
来源：http://www.aibaodan.cn/163ilsieunx.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163vjzbffig.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163pxofuidy.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163bzipvyon.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163yyiwfjrd.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163umyvgwxa.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163lreldwtl.html

Go:   time.Now()
来源：http://www.xuanzx.com/163luomcfha.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163xccqiduq.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163whorkkdj.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163rrjydfgi.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163gvjsrnlo.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163dcymvxpn.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163xmoefktv.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163pybdfzka.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163hmuhejpn.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163yxwiviwc.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163pgtimmhv.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163yjhkbyjq.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163gbxbtebk.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163zfvcjyfh.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163kyikaofg.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163zfcoiaqm.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163rcqwdhkd.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163qgsyaamn.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163sqpsohyh.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163azibydgh.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163gfltzsmb.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163eofhgprj.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163ckcjlgvw.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163ufsxvnvr.html


<!-- 参考信息 -->