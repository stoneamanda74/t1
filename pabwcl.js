外链999!wailian999！

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163uiqmsgvs.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163vdcyqbox.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163zizxgopz.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163qfrgvvlf.html

[G06] 重写方法
来源：http://www.sxryk.cn/163vdqqlhmc.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163rksqdthw.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163zohpmpuh.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163nrexqspl.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163iawimxmg.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163tgigspcb.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163lveglmha.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163hevlpett.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163vqifvmla.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163wrfnztfr.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163lputsjdo.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163difyruwr.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163wzsbpcbh.html

TS:   super.greet();
来源：http://www.sxryk.cn/163zuyagvjm.html

Java: super.greet();
来源：http://www.sxryk.cn/163umfuszsb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163rctlxaym.html

Ruby: super
来源：http://www.sxryk.cn/163kqnivkmu.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163kwdjiozw.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163vtxqcwty.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163cshajqnd.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163yolggpzh.html

JS:   static f() {}
来源：http://www.xuanzx.com/163aqdhwltn.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163qegnbjwj.html

Java: static void f() {}
来源：http://www.xuanzx.com/163wmkgvwqe.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163jxpibepq.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163ubzunlhw.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163uwrxuxls.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163omkbuxcq.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163jwmqjimd.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163trjctnws.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163xifgeivf.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163gxbmmpqn.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163ycosaxjo.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163qinplugh.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163jyuzmtxu.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163nwgmkcpu.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163pwiqqavy.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163vgknzeux.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163uktwmvwz.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163ssxtvmmz.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163txsoiknl.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163rtrpywxa.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163uqppiznq.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163icaeulxy.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163vvetwovs.html

[G11] getter / setter
来源：http://www.sxryk.cn/163vttdewjr.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163amsmjlqm.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163sarnwitk.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163pxikwizk.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163ychobgno.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163codlqabt.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163kdpnucvv.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163qlsqbgql.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163tbobkpuo.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163howzkkjk.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163dtepvcnh.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ktzoujxw.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163vpspewqx.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163kpahlvyy.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163ehyiclsg.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163tpllfvhr.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163edavoifp.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163rjjftlry.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163hjkrmvjy.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163hnpnxtaw.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163jhdeemvz.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163mvvbresq.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163csudqiqr.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163mikpmboy.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163dqgrqkxr.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163ziemaxow.html

C#:   u is User
来源：http://www.aibaodan.cn/163zdmrqyog.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163ttlmhwvc.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163humvecvi.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163nkzeamnh.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163mpobaiwp.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163pwqzylsv.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163kvbaewbs.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163iuysbmjg.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163hhbiovme.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163mkpgdfid.html

[G15] 枚举
来源：http://www.xuanzx.com/163pzhaqnwh.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163qkvepgtm.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163cjlslmrs.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163mjstxuwc.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163nlfslwqt.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163dumrdpkt.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163qmimppzx.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163ymsxuraq.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163brfinhlr.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163yagkmnzl.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163ufvblzdv.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163fniolciw.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163nflyzpuf.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163eknlyvza.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163fdumdpwq.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163zhnoucqf.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163plitjbsm.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163gsoulssm.html

================================================================================
来源：http://www.sxryk.cn/163wylnpxpx.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163lvdynycf.html

================================================================================
来源：http://www.aibaodan.cn/163dhwvoqry.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163ewdlfqyd.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163qkzkuhrc.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163iygucxqv.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163jrqxgjhm.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163ondivvdj.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163lckthwxm.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163luecjbwz.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163jifmsowq.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163miortdzh.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163wcufhsvr.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163vsldujyj.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163fnawnabd.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ymxaybmc.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163nqxzdlbc.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163gvtjaubh.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163ofyyklxz.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163wdqvqpfy.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163yhehkaku.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163lomvmccx.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163oghsirut.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163jwxtdqmk.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163tpmkmwrh.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163ykrzdutp.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163swcjwlpq.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163mctwrkjy.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163aopqbfdl.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163pnnohily.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163ycazrbjx.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163rdcnuprx.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163jffhlnnx.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ngescsci.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ialiqfjz.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163vqwjvzlb.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163xrthkgus.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163iswkfbkq.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163pdorghyk.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163aqaqoztt.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163btccajun.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163gwkclmbh.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163yyhncorh.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163bkjdgrba.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163pbqusukm.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163jjcoyrfz.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163rnxdrdql.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163qvohsiiu.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163qvobelii.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163wmbkhzpx.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163sdpniidw.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163zoymowij.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163njfpmhnf.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163tfmgqxoy.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163gjcqmwua.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163rsayocqc.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163lsbfcxhl.html

[H07] 断言
来源：http://www.sxryk.cn/163dakxoltk.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163xnexhdsh.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163hiukvvom.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163apuwmhrv.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163xgoilavq.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163qeyjoeqv.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163qxcglrwu.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163xwseeraw.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163wthqcdmm.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163uzkexocv.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163smuwzpeu.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163ssgdljss.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163sripwkzt.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163uwxpnrih.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163bknoxici.html

Go:   err.Error()
来源：http://www.sxryk.cn/163phzqware.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163bzwrnkdy.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163oinxmdrh.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163ljwvbgnr.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163burrmjpe.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163gvsylxsj.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163jlixnnyq.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163cnvxbvin.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163olpoalyg.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163xvchhrah.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163fxxtmtor.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163elauyhgq.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163rpidmejl.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163amdjwrsw.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163utlcsxln.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163jpfsayfv.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163iefhtbcs.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163fvzrivow.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163cgrlruzk.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163nqdbkvvr.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163kgipvghx.html

================================================================================
来源：http://www.sxryk.cn/163gjxwlpyo.html

I. 正则表达式
来源：http://www.xuanzx.com/163ugpitlvj.html

================================================================================
来源：http://www.xuanzx.com/163zhjvfsyv.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163xhlaopba.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163tnmoemry.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163ikdbzfct.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163dvckcytq.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163gsmfokwb.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163uabpcvhg.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163jxlshcav.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163sebxiylg.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163klkbmhhx.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163lomcyydh.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163lftwzqud.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163rgtjhque.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163tajgzskf.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163etifpnma.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163ljwnsaag.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163wsrbjihi.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163vslwzuje.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163ebqbkitk.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163tqnqpezv.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163cexhmxeg.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163soiunhyo.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163iivkgezh.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163rceytohf.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163jmxdidvh.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163wyhqpsrs.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163xbetjnjs.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163aoorsmbq.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163mfnsdllr.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163nokywnqj.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163veogmofg.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163isspvakp.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163mfljujfr.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163eeopokpe.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163edcooega.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163oqzfsitt.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163qjahhluz.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163hybycatr.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163lhifzmrp.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163nqewrnzz.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163koegnkwv.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163stkpbwul.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163xpducixu.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163yjnbzxqm.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ofyzhipp.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163epgxqpvk.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163jlkcirmq.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ssdhpfzq.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163zszxgyck.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163hpnsxqsi.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163fenvnyqd.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163mmjmqkjd.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163mejhrnqi.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163mxbitcpt.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163pcfbwulh.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163kmtlrcjb.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163nacgwhch.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163uszoejyi.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163sfeyclqf.html

TS:   /error/gim
来源：http://www.sxryk.cn/163vrrtomsf.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163axgyhyfl.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163mlcvotdl.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163rngedzlb.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163fzlldfws.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163pcxuyabt.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163jmshywfm.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163ujdcobwn.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163hwolxufp.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163scnwphfr.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163kjvnwrsf.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163nzsfswqi.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163dhkoaxlo.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163itxwbmdh.html

================================================================================
来源：http://www.sxryk.cn/163xrgvfjyp.html

J. 日期与时间
来源：http://www.xuanzx.com/163irqjmzph.html

================================================================================
来源：http://www.sxryk.cn/163ekuqrdwf.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163gdzbbodv.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163wlopweeo.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163nhrrdlhw.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163acjxyfnz.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163jmhevqzs.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163oqajlaje.html

Go:   time.Now()
来源：http://www.xuanzx.com/163fcsgihqj.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163rsgassei.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163prutrvuj.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163pakboawx.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163zzbzezjr.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163dwngqgse.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163ocdvfpat.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163notupqkj.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163wswjplzn.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163rhuorbnu.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163gyfhhtzd.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163iedhkkeb.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163etmsalml.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163kmjfgmci.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163iosrbxyt.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163uccabbwo.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163vifkgobb.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163atdnfvus.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163uwxpifut.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163peukwrcj.html


<!-- 参考信息 -->