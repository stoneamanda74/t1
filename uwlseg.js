外链999!wailian999！

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163ouixcgzs.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163tqovoowu.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163sbghzckc.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163xweiyitd.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163aqjlzcef.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163iansiqfh.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163xrtxwoub.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163tiqjzcir.html

[G06] 重写方法
来源：http://www.sxryk.cn/163qdrcxvxb.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163nmarzptr.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163dsdqmiuj.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163ycjprobq.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163uffxkynl.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163acblmqtj.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163brxmanzr.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163agekvumc.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163gupkqboq.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163ecxbccgw.html

Py:   super().greet()
来源：http://www.sxryk.cn/163obhrbzej.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163dhhjpsdn.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163dsnprauy.html

TS:   super.greet();
来源：http://www.sxryk.cn/163locnodin.html

Java: super.greet();
来源：http://www.aibaodan.cn/163xisjgmra.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163dkiklmny.html

Ruby: super
来源：http://www.xuanzx.com/163goqjhmgv.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163ehowbews.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163aahsahfk.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163enwifvey.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163jdxgutkd.html

JS:   static f() {}
来源：http://www.xuanzx.com/163bcvnkbwl.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163pswpvnwd.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163mgkumraj.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163wynxnvnu.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163ajgszihl.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163hrzrenod.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163vvdpxcpr.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163qskbicvj.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163fnughjdu.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163cpkigbkd.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163pgsfqldb.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163oojlpxvu.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163abvszmgp.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163zavtemer.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163xkyiwwfj.html

[G10] 访问控制
来源：http://www.sxryk.cn/163hlqlwnqv.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163zhpciymg.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163cmvprago.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163xuljagqb.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163yglrufrf.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163xqjjmxml.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163oezubbsj.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163umfqtesg.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163ovhnjgzd.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163pfutojhx.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163xrwefqof.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163smmrrmkm.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163xyrdwunb.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163revfgpol.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163zsiyfygs.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163ziiocljb.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163xduyhvsa.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163rdcozkkf.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163fdxhozvq.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163ziuudkke.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163pqofcsdj.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163bcfyqtxt.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163fkrzartw.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163oogpmfyp.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163kacstzmn.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163rswedxmo.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163qnaqsyiz.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163ijxnlipn.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163ijguifoj.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163zdvifbtd.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163xryxdymc.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163biusxoeb.html

Java: u instanceof User
来源：http://www.xuanzx.com/163bdhhdhku.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163eiygpcgr.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163shubekxp.html

C#:   u is User
来源：http://www.aibaodan.cn/163uindrgrs.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163qgwnqhzt.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163cqbdsxel.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163jrxmtddo.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163fyvjjtbn.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163dyjltygd.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163zjcodimx.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163gycmlqwr.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163zlryetet.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163vghqfumx.html

[G15] 枚举
来源：http://www.xuanzx.com/163ykzlyliv.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163mhasbpet.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163sktqrxnz.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163mftbojtj.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163axdorntz.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163zvgxlxax.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163xoxxfzgz.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163fxklbeto.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163qbyanfig.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163buapmkro.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163mbtuqzsx.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163kamzsaax.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163wnvtxykh.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163wpyulwoo.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163nllojtzp.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163keublald.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163dzxhaxev.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163zmbitmgp.html

================================================================================
来源：http://www.xuanzx.com/163kxjiqxjh.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163nqsxbabh.html

================================================================================
来源：http://www.aibaodan.cn/163jblguynf.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163vbsybfpx.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163kfhobgyn.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163enrdfety.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163zhxuezkr.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163kxzfttwk.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163uuymjhwi.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163qvzjgnjy.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163uetoemlt.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163hgkvrwhy.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163qynrrqbk.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163jayrrkoe.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163rumaospm.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163vscrdohc.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163zqmlhpfa.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163xlgzohqm.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163jzsaocxa.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163vxinktcu.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163yuoabcjf.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163hpxysdjp.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163ygfobcqb.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163oefwsloq.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163zndgfaji.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163okrhujqf.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163fmuueowd.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163lkxfpkiw.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163cuuljaya.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163klywkmnh.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163sgmpjqna.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163rzcyiwgo.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163ppjizbfl.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163nqkeqbzr.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163kgxrsvev.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163rzuzygwz.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163wtzzaeyd.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163rthezmhu.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163pvrlqjet.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163cxsglvll.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163njfumjcj.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163jplmrpcf.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163znflprue.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163hzjbcyut.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163nzdhaiet.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163dzenfnyu.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163khzwunxq.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163gurzcevt.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163xivjmpaz.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163uzzmjfbd.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163qbkcxbgd.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163clkqwwag.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163xjwccmiq.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163sbatrgkm.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163xapbuhdp.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163ahevbkja.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163jblliofx.html

[H07] 断言
来源：http://www.xuanzx.com/163kreprrar.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163tbscdclo.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163gfaktewu.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163gyeysbgw.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163cbhlqjgz.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163ietosvdo.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163ggpvsmhw.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163fnfnfvpm.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163edftnwxt.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163fxramniq.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163olxplyar.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163dsfmuwyo.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163booxscuy.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163hsnoojos.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163hxvdvwcs.html

Go:   err.Error()
来源：http://www.xuanzx.com/163mvbudhem.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163jmswfzxu.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163izkfitzd.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163hbkodxst.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163hmpqbiyo.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163qmzuowzf.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163wefsahim.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163fwbszchz.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163tuvlfnth.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163zysziksm.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163aihqdgpg.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163mtduirkf.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163lunwcicn.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163kzeimqde.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163paukhdbz.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163digogjki.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163xkrhoxza.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163kkceehqe.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163tifwmuep.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163uskssini.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163dwsocagx.html

================================================================================
来源：http://www.sxryk.cn/163gpmwtfuq.html

I. 正则表达式
来源：http://www.aibaodan.cn/163veqxnsia.html

================================================================================
来源：http://www.aibaodan.cn/163rvjnefwe.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163eiyvpyay.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163koxgovjm.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163rkwpeddh.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ahwasyrh.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ajmaeixd.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163vevkxysz.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163fneutrec.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163evpputso.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163wdczprlm.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163griiyruw.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163phguhbyj.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163nutdhqim.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163tdrjmdkc.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163pfryppzd.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163iugandym.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163cxxosvlp.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163jjnrlnon.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163dfvoqalr.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163sgdnnlvz.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163jttzivng.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163mruhlwlk.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163flmuodzl.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163fqudprtz.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163ymtlmjkk.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163guuicutn.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163okzrfulh.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163vbsjsegh.html

[I04] 正则替换
来源：http://www.xuanzx.com/163zjizfshh.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163iciioftt.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163toongwgl.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163zrpvhnrc.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163njsccmop.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163xwnnrply.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163otagcfkf.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163ffohemre.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163munrlsgf.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163hychjyeh.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163lzjgwafp.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163fkpvgtlh.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163juxjjdcx.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163snfnzdmy.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163xsujltln.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163asjxhfio.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163myxhrjpc.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163sxroziwh.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163akosqlwr.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163hnlevmpb.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163lepxbfbg.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163qhlszfbp.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163wlbnynrt.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163ykrjxcso.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163hkdibjgn.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163puhmmbyf.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163usspbmpo.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163dnbyvfnr.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163tijhzseu.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163osdpfjva.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163yihhfxmk.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163obviybiz.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163dijuscbv.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163deejglsa.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163hvnuxdjo.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163ushejxrk.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163czzutpbw.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163xkcegqbh.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163mdlcjawc.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163xmejmedo.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163anzoezzv.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163bnqjqmwe.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163kethtasx.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163iwnssmdk.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163tygegprj.html

================================================================================
来源：http://www.aibaodan.cn/163jvamahxg.html

J. 日期与时间
来源：http://www.aibaodan.cn/163iitqfyqn.html

================================================================================
来源：http://www.xuanzx.com/163vwhbtscc.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163tdpmwcjp.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163aublstni.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163qqdduqpo.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ztdcjmhg.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163dgshuvjz.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163tdcqvgwh.html

Go:   time.Now()
来源：http://www.xuanzx.com/163uiuayrlx.html

Ruby: Time.now
来源：http://www.sxryk.cn/163weyfbcmt.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163netmvqgb.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163mropwhca.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163hdvbvnck.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163hrorgote.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163skqavhcx.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163jjyxrpsr.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163plcopajs.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163ltcclhfo.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163qyboctyp.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163kenxjtug.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163pdssfcec.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163honsuwbg.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163tapyqtsj.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163dvpggmwf.html


<!-- 参考信息 -->