外链999!wailian999！

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163xhtnbvsu.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163qzqpbicj.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163daqtqltq.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163jisavhhu.html

[G06] 重写方法
来源：http://www.sxryk.cn/163jrhamgyy.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163utjionml.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163plelpimc.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163oiblvnvz.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163mhqztzqw.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ewuhgezw.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163koxxlrjj.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163ghwzpkcx.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163ggqlggpw.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163ghpatzek.html

Py:   super().greet()
来源：http://www.xuanzx.com/163degumbnk.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163xrqolfuu.html

JS:   super.greet();
来源：http://www.sxryk.cn/163crxsmrnm.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163aazinqch.html

Java: super.greet();
来源：http://www.sxryk.cn/163ogrnqtew.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163pruzgmxt.html

Ruby: super
来源：http://www.sxryk.cn/163lzflvgxc.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163qdgikhou.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163fnqymuyp.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163pelakbjn.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163nkyabmqm.html

JS:   static f() {}
来源：http://www.sxryk.cn/163bsrwozbl.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163kmkvrlle.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163xvhtfhgw.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163bbbyfnck.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163nzbirorw.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163pkwwdovi.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163vedheyfa.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163htpeyayu.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163nwlukala.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163wypoqsas.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163jzbbqejl.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163rlaeepbh.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163bopkeeqt.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163csjeapsz.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163fldiprpr.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163pshcvvir.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163beujvhkv.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163dnghffal.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163otepufoh.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163vnrndfeo.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163dpvwjkgz.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163xzvrbado.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163msmgpqll.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163sgveinua.html

[G11] getter / setter
来源：http://www.xuanzx.com/163lhwpqhpq.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163akvkytsr.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163xuyjiike.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163iokirwol.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163abogcmdy.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163mojnrwhz.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163pspmoeul.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163ynnmcdqo.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163yigiagck.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163lhzskbra.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163tukygqqb.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163cgwcnypc.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163uitagihx.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163pufrzyyj.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163ehxvosfm.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163psopecqo.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163vwhmxrym.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163mlfhgkrf.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163ahkbdxcx.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163wuwitmdl.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163rhnfuapc.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163kljaewuk.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163twptndof.html

Java: u instanceof User
来源：http://www.sxryk.cn/163thrlodgt.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163yelrtkem.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163nppppkrb.html

C#:   u is User
来源：http://www.sxryk.cn/163oendftdq.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163saunwmiu.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163uzbwnqpz.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163zrqfwslv.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163acgnzwhb.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163sbbmydkf.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163ghyvwfln.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163mredguro.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163hmbjfwaf.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163skdfxyct.html

[G15] 枚举
来源：http://www.aibaodan.cn/163ijdeebjf.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163iyqpfkyn.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163mlinhnjz.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163vgivoogx.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163julmcznq.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163srskyzfd.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163nzivzxyx.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163rbmjwuig.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163trjcxpax.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163ordxynzd.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163aywbsfbu.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163axaqtswh.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163gjwqbgju.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163yofpymhf.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163eyvqhojq.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163edosufss.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163ojvbhnkc.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163sswskocn.html

================================================================================
来源：http://www.sxryk.cn/163qzzlthtp.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163begozwel.html

================================================================================
来源：http://www.aibaodan.cn/163rnbrunzk.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163hiyzfrql.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163jcsfgfvz.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163rfcptnju.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163kbkrkoeq.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163ixkmiinq.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163vkeubzxf.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163hizrnvhd.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163jlciwqyk.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163mgwucwdt.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163tvumjxth.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163umjobklz.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163oliyedua.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163kfvjqekz.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163akrnyvyl.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163njalqpqe.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163dmwhtisl.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163vmohbrzs.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163ldnxxvnt.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163nxntrkym.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163snowkvad.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163plwmmmer.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163xbqbglkp.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163fqxkruty.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163myagonmx.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163rbjsjoty.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163opsostzx.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163nfgiqrka.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163ntzrjmgy.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163usttvnxi.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163ovpofqwo.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163nzjhgxwl.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163kdanpsbe.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163brvhwcnx.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163lohosmfg.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163ggfcpqwd.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163mqlqltzy.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163mxwvkcdq.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163geysfupu.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163ktpdgabj.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163nunxahzi.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ntumvpbn.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163ekhgmflb.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163ipwznicl.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163wiizlnlw.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163stmqajgb.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163pfqivpbr.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163gymzaknm.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163kkdievby.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163omnwynrx.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163dbzqiflr.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163kdrnhale.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163zrjpeuan.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163bypjyifs.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163xmbkovdu.html

[H07] 断言
来源：http://www.xuanzx.com/163wqsfuvuk.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163mxeqwaqt.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163mtukzobi.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163qordltjh.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163wkjtiyqf.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163lgwlfsyl.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163pblopmrf.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163yevkaqfn.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163yguxyoot.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163drujmgwm.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163dujxmucx.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163cisjcbph.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163ugglfcgp.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163lwiwxclo.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163jejqehbs.html

Go:   err.Error()
来源：http://www.sxryk.cn/163wumsyyag.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163mbwvwvrm.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163dmfmboro.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163ckgcmxum.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163wnnzjnxq.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163rlbbfsxi.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163trlnghng.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163idopwprz.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163ebwjlwnj.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163wtaukalf.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163irdobkys.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163ksplsttu.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163dfkcvtfo.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163rpseuwoj.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163bxuofphk.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163msfircmq.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163noelpnjm.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163oewznjmg.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163tfqwfmqc.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163akixpicv.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163zardgdfv.html

================================================================================
来源：http://www.sxryk.cn/163vugloqpo.html

I. 正则表达式
来源：http://www.aibaodan.cn/163wuvelcel.html

================================================================================
来源：http://www.aibaodan.cn/163nmlhqtgs.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163lpgtfivc.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163orrekwbe.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163xnaavmhu.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ytuyekvg.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163zbcckxfh.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163sckoduau.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163xyfxobfe.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163rnmmbinr.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163qxsytbdz.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163bopmehqn.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163yhcrldzs.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163ycesdkjj.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163zxwevsvc.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163hvmmpclx.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163gzrpudfw.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163iikckyde.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163wzxqlzfc.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163xqurtafo.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163omsogvvc.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163pymmvgaz.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163ncnsbled.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163wupuxyje.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163evyxgpzj.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163kjlcrdsc.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163ubhfzafi.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163zaubanzn.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163tpgbpyac.html

[I04] 正则替换
来源：http://www.sxryk.cn/163ktpbhezw.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163mrwvsxch.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163guiqpkau.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163dtjzufkx.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163mhbjxlyz.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163tobugleo.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163iekzaqcb.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163myfxfvor.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163rvpbvrud.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163rrdgbzuk.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163zcdrdwup.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163lgezxlqb.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163axpuineu.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ovehcigx.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163rjhehbup.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163qlvkigyj.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163xrcieekx.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163mmykwcpt.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163cdbcqihd.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163flbkhwwo.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163uuvsudqp.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ywizceqf.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163wmffrlpr.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163woscmatn.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163sgxieckk.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163cfrcurmi.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163qohtkjnv.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163zczyljth.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163raxngimg.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163ugzdvipy.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163cwsoxrsz.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163izimsofb.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163azlpocdn.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163gygyxddv.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163gmrdixxm.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163efpsidrm.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163pvopbxjj.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163vwsrydvz.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163jchdscef.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163atemytmz.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163xadrcpdn.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163zoefazoh.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163jbjouiuc.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163vlqqvhua.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163bkkmcuvl.html

================================================================================
来源：http://www.aibaodan.cn/163wrtnrccd.html

J. 日期与时间
来源：http://www.xuanzx.com/163ujohwwik.html

================================================================================
来源：http://www.sxryk.cn/163erfzejth.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163agmbatke.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163fxqwzvqp.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163lbtmdqdd.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163swecries.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163yantltvm.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163xsgoqzzf.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163rgbcfgyz.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163huzvblzs.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163rcpfnohx.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163zbzayfah.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ejnlnxyd.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163kdniknmc.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163fuznzzts.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163xwwglamv.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163wftypxvg.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163jhksuqxy.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ieooyagd.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163cssipmjj.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163inmpvnbv.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163ktzfcinn.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163mjpsmcxh.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163qgarlzgf.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163azniapsk.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163vnrfilhm.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163wxquvyel.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163smfdutet.html


<!-- 参考信息 -->