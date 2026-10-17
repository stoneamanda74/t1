外链999!wailian999！

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163qwydbgkh.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163jjzksufi.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163rnwqbcpp.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163whwemust.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163twnjkgei.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163nqbooodm.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ptukvmlp.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163uroeiyjh.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163pzboptrn.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163phdfkqje.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163wwamolew.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163sjhxzawr.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163rvzvjzyb.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163wmxwewno.html

Py:   super().greet()
来源：http://www.xuanzx.com/163etudhshp.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163vknaamtp.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163qpdxnnxz.html

TS:   super.greet();
来源：http://www.xuanzx.com/163bsvqxumb.html

Java: super.greet();
来源：http://www.aibaodan.cn/163fgfqhjqy.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163svedamny.html

Ruby: super
来源：http://www.sxryk.cn/163rikmnvod.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163oklvagnk.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163rcwqtnht.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163srmddpqz.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163ajcsiqlf.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163kilbnqqh.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163vywjgdmo.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163ceahrrsj.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163kqiflqae.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163lydlamwz.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163rarsxlah.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163hohbtemp.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163fmdunxyl.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163alzpnyoi.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163tfcyccga.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163kcsbmptd.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163kfcijnnf.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163tidmefdf.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163wmhfjxom.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163gnigsnmc.html

[G10] 访问控制
来源：http://www.xuanzx.com/163afjspgwa.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163nybgrjub.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163ozevbgfe.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163plwxwcap.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163fsdzambr.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163aydlhwnj.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163xqtluiqi.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163lnnrerff.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163xwwjgoer.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163ylvvleuy.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163nnmgjkpa.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163hjrcgyjk.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163suhoypjm.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163pjhipyhj.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163grrlxmnv.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163sshlhdwg.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163acqotasx.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163dgbdtetk.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163bdjjgxnm.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163bqsyovhq.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163zcyiqxvm.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163yfdpywek.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163eqvvatdt.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163pqdrcssx.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163xbwzynnj.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163wwaorqvk.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163tkghjpxk.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163ochclwfa.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163gtiltnzu.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163rvflncvw.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163yzvwwtql.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163twdaaiti.html

Java: u instanceof User
来源：http://www.xuanzx.com/163ivpfbujw.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163kbyorjmo.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163zbegfbnx.html

C#:   u is User
来源：http://www.sxryk.cn/163eavsvalu.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163kdbbjhhq.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163lsltnwns.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163tnvokemx.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163rxqshffx.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163mddxwiup.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163tdbexbzo.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163ebcumjwm.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163qumaiuxo.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163jgisvwpy.html

[G15] 枚举
来源：http://www.xuanzx.com/163awnvbaul.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163rbcmbavg.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163ikhkpukr.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163xuhjybxd.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163jrjzqorq.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163lxchndxw.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163vgluoxus.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163fvvbomys.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163vuzlncfw.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163zeaaeffa.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163qzbwlacn.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163npbdxeuj.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163vofxeadq.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163eifqigjh.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163eyhpsvlj.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163uucvpvlj.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163tsjkhqbx.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163sohxbprg.html

================================================================================
来源：http://www.aibaodan.cn/163ozstthij.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163hshtrwhf.html

================================================================================
来源：http://www.xuanzx.com/163rdxmqklj.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163ththdomm.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163jjywguyw.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163sosbjcuj.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ewoknyps.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163oneywsoc.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163dxedsnmw.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163ludttuuk.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163tuvtwfyh.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163kwpikbdw.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163jgssjoux.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163ugvdvswm.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163thfjvtpa.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163posxgmxf.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163wkxrfpjk.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vgziaonr.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163ussknxff.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163aixphpvw.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163csmtzmvr.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163wldcwqmq.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163ouwrlrws.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163xqcamqen.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163diikbirp.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ltfynbyy.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163pepbrley.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163ithcggra.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163vsyidaft.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163qhdryxdh.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163axwndvcu.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163khexcizo.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163qhwewyyb.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163cuvnforw.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163fakuvhrb.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163xdbcakhw.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163hmiuusrh.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163nqnfhoto.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163ohhnhlpr.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163krbqhfis.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163beowksgm.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163rltxqzda.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163chhlfsju.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163mucasrwg.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163grxrdgrn.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163xdkmwfhu.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163clwcszwh.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163oaiygsal.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163dmsgzxdj.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163muzftosj.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163ectoydpx.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163xtzqmrry.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163joitrdif.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163wcacurrg.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163wffsgkon.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163hdsbdqvb.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163zurrhihz.html

[H07] 断言
来源：http://www.sxryk.cn/163fagfwsdr.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163pfoznspg.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163hgjoltuo.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163wzvauszg.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ylrxnwsa.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163njracdfg.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163qvpedrvt.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163lahtcmxe.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163jzzdemsg.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163ctksvojn.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163thkhfrbu.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163pfaxwcty.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163yrnczgeb.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163mjljasgg.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163gbmvxhvc.html

Go:   err.Error()
来源：http://www.sxryk.cn/163wvsqadqk.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163kazbmyrs.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163lcibgwuw.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163jipirbcu.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163vbexyyba.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163irlpjtqm.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163uqqkltwt.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163drnwbxdh.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163snytpnzb.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163wyujrsww.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163jmmvmkna.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163odqszwqq.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163uvqusnwq.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163obsalmwj.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163kqmfgsrv.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163bhlznkic.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163jazivcnj.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163uqyolmvt.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163ezsvcgtt.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163rzdzfrbc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163kyqoruli.html

================================================================================
来源：http://www.aibaodan.cn/163vbqgxfgr.html

I. 正则表达式
来源：http://www.aibaodan.cn/163ubjxofdy.html

================================================================================
来源：http://www.xuanzx.com/163tcojobdc.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163imgpuswv.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163cxvbzczv.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163wgsogsjg.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163tizuepaq.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ptkipymo.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163mdfcyuyf.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163pcaximts.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163wkxipgnl.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163nwmgazkx.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163qhhkcjec.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163qrjflfis.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163jnobsjrd.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163vhgupzxe.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163pluxjctp.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163kiojcssk.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163dkoznweh.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163aprsgwpl.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163paocduaj.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163icoaaciv.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163yarnilvs.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163nxozlkri.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163ixxuzrdy.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163ffbbpjgr.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163wwkudjsm.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163roiipehv.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163cgckjrcf.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163gmqwdldf.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163rrxdapre.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163pfgptntn.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163cpkdukrb.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163kypaidng.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ypdxbait.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163uvkgnndl.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163caarhznb.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163oiuolpfn.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163kcjlltqi.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163uledszfs.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163eikzxzpy.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163vyrdjess.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163vcxcsivo.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163oakbwuos.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163icrightz.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163thoacgia.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163arvkxewk.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163ltdzhfei.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163njjdrhen.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163fxfewxft.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163xmabebgr.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163vgbyxkfp.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163goikcetd.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163jfmoghzm.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163sbmoospv.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163owhodkqy.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163gfyrgtmg.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163bnvlriob.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163kmygkskb.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163blcdlwwt.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163qqgxtjzb.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163cwpobngq.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163ogllyftl.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163vhrycbfp.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163beedqrzi.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163eywiioes.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163jirkkxvz.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163uoqfelir.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163xtfayizu.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163vvojoifx.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163crmbryue.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163hhlotbry.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163jgxgcbni.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163wrywqxoy.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163tpikngxi.html

================================================================================
来源：http://www.xuanzx.com/163flhtvtxm.html

J. 日期与时间
来源：http://www.xuanzx.com/163ukwmwafj.html

================================================================================
来源：http://www.xuanzx.com/163pjeuvenf.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163xvrztzkh.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163rbyvxszi.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163wcpxannk.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163rvjrkogd.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163knnlpsdq.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163enqhdfeq.html

Go:   time.Now()
来源：http://www.sxryk.cn/163suovezzg.html

Ruby: Time.now
来源：http://www.sxryk.cn/163fiphlrlu.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163nrscpzfq.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163ndwmcdpt.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163cehwdzjb.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163kpqulcmk.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163mvdxxwyy.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163tenfabct.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163wnzdgovt.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163eiozgqlb.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163mzbvthjo.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163iefubpde.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163cfwlpaut.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163zsmkszfv.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163aafqsfpi.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163axwxpstu.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163wdvtkdec.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163uwaobzbb.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163iaoyfqcc.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163lagfoyfh.html


<!-- 参考信息 -->