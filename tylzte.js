外链999!wailian999！

JS:   this.name = "x";
来源：http://www.xuanzx.com/163rkthqrjt.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163gaakhrcz.html

Java: private String name;
来源：http://www.sxryk.cn/163lurwrqwk.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163krtggmeh.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163nnvmbfoo.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163khyuvdck.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163hxliewza.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163znzleqfx.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163xrowhtsq.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163bhqvjfkk.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163phmmheln.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163qxgcxlfa.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163xtktkhps.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163euhixkqj.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163bbzunfhn.html

[G05] 继承
来源：http://www.sxryk.cn/163dejctffo.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163wggchjjo.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163kihjmlih.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ozufrlal.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163mnqdqwfj.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163aocvjthd.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163xkgjkqne.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163rsaytqoc.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163burbnysw.html

[G06] 重写方法
来源：http://www.sxryk.cn/163fyxtxawb.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163zqlvrsou.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163nfffdqkh.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163dcpsxxhj.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163pptwclul.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163plvvzwcc.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163kgvfwyco.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163nppzgyng.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163hrtxjttu.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163uoqzfprs.html

Py:   super().greet()
来源：http://www.xuanzx.com/163yrkqgpce.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163hfpgwjxh.html

JS:   super.greet();
来源：http://www.sxryk.cn/163atatzqhw.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163wxcumrnz.html

Java: super.greet();
来源：http://www.sxryk.cn/163jdcjofru.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163fwycsyvn.html

Ruby: super
来源：http://www.xuanzx.com/163otdfjuhi.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163rjccrbau.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163hmlqroxg.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163usmpnkpe.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163ygapyzfh.html

JS:   static f() {}
来源：http://www.xuanzx.com/163ldrfydzz.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163slxlprnu.html

Java: static void f() {}
来源：http://www.sxryk.cn/163rotqkywa.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163nuvdzrga.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163zlomjzpa.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163vcozxtbl.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163mmzgasyy.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163xbrrvqvl.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163zhifmofp.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163vpzaliot.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163tcjhksln.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163fmkikvyt.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163xfmakmuw.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163ydtirjdy.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163rzmxnkis.html

[G10] 访问控制
来源：http://www.sxryk.cn/163wugnmvgi.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163ayjbwoii.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163zfrngsui.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163qjbuibmt.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163blhbnkub.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163rsrplekf.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163fmgrtrdc.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163iyapbser.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163kmocugnq.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163ijuobmjh.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163wzccplmy.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163zfvvcreu.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163upwonwvh.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163qnaecmaa.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163twzdlyvy.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163kcvwuenb.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163yxvrrzwc.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163ioimapew.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163ddzpijlg.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163dhkmqbyr.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163xyubefpl.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163mxsbtmha.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163jnweormz.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163ddvipyqx.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163vvaropzb.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163njcckmls.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163mpzsihel.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163bumirwou.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163hgbsqmfh.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163ivwstbgd.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163twfvnwud.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163czipdvqm.html

Java: u instanceof User
来源：http://www.sxryk.cn/163rtojqrqg.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163rrwghtuv.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163vccpcnly.html

C#:   u is User
来源：http://www.sxryk.cn/163fuqkkiuf.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163mezetcch.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163bsuvdmae.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163vigpsugp.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163mptsvguf.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163ibzusxic.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163ydbbojar.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163izxnvvqg.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163zuezyure.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163lbwowkdv.html

[G15] 枚举
来源：http://www.sxryk.cn/163itynebzc.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163raxkshap.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163vptcpziy.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163vtarwtcb.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163nroibhjw.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163oqytguph.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163srrbjdyv.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163qtsvlefx.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163luahybxv.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163ebrwbrlr.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163lheqgmhq.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163lcmqksev.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163npqbcdvx.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163pcrwhcrz.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163hhfaamfb.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163ecbhbhju.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163eawxyxbf.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163urxxhwkw.html

================================================================================
来源：http://www.xuanzx.com/163imdpjmha.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163urvmrhjn.html

================================================================================
来源：http://www.aibaodan.cn/163bamdemrr.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163sticbwqy.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163bocokrrn.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163buhsxjrd.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163sknzfibs.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163fzmkkntt.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163pqwbglyx.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163kjjieqvt.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163dgoyyvcj.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163tflsfzqs.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163eejraacl.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163ewzrwmvo.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163fkyjxrjo.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163tczqibec.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163asefavzg.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vpvqncfq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163lnycuukj.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163xpqwrfzy.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163azcneoby.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163isecpcns.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163gvdvvuns.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163eciuuche.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163qexuvfmu.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163pxgbndav.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163rtfsvgck.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163wgqwmruh.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163pjstagwj.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163oacnxuzk.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163wrwyoqso.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163advofebe.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163yhaftqsv.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163xnhzqcas.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ppjrhmjr.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163dcqrasdj.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163wuvwenjr.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163pnypovcn.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163ylkbotod.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163baoewtjv.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163dncvracz.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163ucbcihhw.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163itipbzlb.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163uukabved.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163rslkunbv.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163okcjiygq.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163knbkshlo.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163odammedn.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163prrgeily.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163psfroxls.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163vadhnoup.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163brzviiwf.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163erbhlsvj.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163lghnqfur.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163hrdptivh.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163solrfyty.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163hkdtpirk.html

[H07] 断言
来源：http://www.aibaodan.cn/163isrpjaem.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163wzuochgm.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163nvlfmien.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163qwpgkfyo.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163xuogzwsu.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163cbndlfsr.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163iaxyfere.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163uirtikaj.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163lfformvu.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163qfdgdaju.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163cldfgndl.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163ohkhysjh.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163mmmfwryy.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163boozxzdr.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163lzlvkxxp.html

Go:   err.Error()
来源：http://www.sxryk.cn/163qnetofvg.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163fezhhotd.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163bykaioxu.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163owzgqiod.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163mwvqwowq.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163vzwktpla.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163knhbfdvy.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163ujpiccqy.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163kofuuzoz.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163wclnnyst.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163ccobvlay.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ayekilty.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163zkxrzlzd.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163conddqai.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163ucufhtpr.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163qxdjbhbs.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ivetblyo.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163ccxtgqvg.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163slioneyp.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163abydlfgf.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163hopvoplc.html

================================================================================
来源：http://www.sxryk.cn/163puhnbdmp.html

I. 正则表达式
来源：http://www.xuanzx.com/163zcuspyex.html

================================================================================
来源：http://www.aibaodan.cn/163nvilhvfu.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163vlmfvurm.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163xpqqdxni.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163kpudznqb.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163fhurqpfd.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163mpunauab.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163gnatynqd.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163fzmmnkfo.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163ffskndzs.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163kshmmoom.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163pezxyian.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163utpzfnhx.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163smorwpfm.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163odjqkeqw.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163gpszsnsr.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163cbjnuqwj.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163qmajagkg.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163jndsydbw.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163ehydxjfz.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163uhoaygkx.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163bwxmjboi.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163pyrpmsze.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163htsbqxws.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163gkabowzh.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163rzztmstr.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163bdrhneom.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163ivoekpah.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163liwvyekm.html

[I04] 正则替换
来源：http://www.xuanzx.com/163rlduggjs.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163legkvruq.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163aqcygzfd.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163sammnauw.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163wtnchutv.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163hvoworns.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163wcgvufpa.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163uhkvdrga.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163rcnejwiv.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163qlujtxok.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163lgrtsgmd.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163simjahzl.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163mlpxubfh.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ghctxapc.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163bvofeidr.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163pviuaobt.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163uezddigg.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163ggxessjx.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163tsypzizw.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ovbwvfez.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163ygxwuxel.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163tfiwjkgp.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163hymrrwcf.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163riakczwv.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163ywmxdfjf.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163zppnmwmp.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163piolatlz.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163xqaabhdg.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163yjahluxw.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163uauyelpj.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163jqdvgbyl.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163nsgioifg.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163vpztkumb.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163xfrpjkux.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163vamiedll.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163wrprensz.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163ogwlbxct.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163qhgrpqoq.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163wfwbryyy.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163deyzqpib.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163thonycyy.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163lbwoluvp.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163nmnhjudc.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163yctwdxok.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163wgmklsau.html

================================================================================
来源：http://www.sxryk.cn/163akpvehbt.html

J. 日期与时间
来源：http://www.aibaodan.cn/163qwdblqzb.html

================================================================================
来源：http://www.sxryk.cn/163qbebunrb.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163rneubplv.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163mknwtjbk.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163hmhyoevy.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163cuwjznas.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163nzcxaiei.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163rqaewomt.html


<!-- 参考信息 -->