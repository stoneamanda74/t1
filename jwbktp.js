外链999!wailian999！

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163npakkucb.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163jphvtixv.html

Java: private String name;
来源：http://www.sxryk.cn/163hiydecbp.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163uzjuiovn.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163wequzbhp.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163lbgcydps.html

[G04] 定义方法
来源：http://www.xuanzx.com/163ocbcbgeu.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163ymdglnwk.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163doveoapk.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163eobervqb.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163wqicfxah.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163kzoqvqrx.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163zohxfern.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163qfxulmei.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163axgoname.html

[G05] 继承
来源：http://www.sxryk.cn/163cskhaqdw.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163ohxhrzex.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163ibyubjmp.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163yedrrung.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163arpgnbce.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163ehhgiwqd.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163ruueidna.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163mequfnuu.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163iobnmcjk.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163gnzjcqwr.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163sxbeuctd.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163bctsxbqd.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163gbnsnbqp.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163uvwtvjaz.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163xdgolher.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163pdjrgywj.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163fmrhtlgl.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163udhbniwa.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163zuagfgld.html

Py:   super().greet()
来源：http://www.xuanzx.com/163lvpalonr.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163pvhvwuhx.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163ifaotyji.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163xvuubgrm.html

Java: super.greet();
来源：http://www.sxryk.cn/163vhzfaupz.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163idajygsb.html

Ruby: super
来源：http://www.sxryk.cn/163zibqvjhn.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163tjxfviss.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163nbgkvtpf.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163mddkfbzp.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163qokkzemj.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163laiesfmy.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163woxumjav.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163wihfpwmg.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163nsjjvvmg.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163cdwxupfq.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163tzhlaoei.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163srdepvpq.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163hizjhvtj.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163nekhkvho.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163pzakkhtx.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163fyshvwyo.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163zdolwmmj.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163vlcjwfbm.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163mlnlkfnn.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163rgpibhng.html

[G10] 访问控制
来源：http://www.sxryk.cn/163pugnewrq.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163obvnmbpz.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163efrlvctt.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163dfblfmtt.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163hcjvabvf.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163lgeqvafh.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163btglufen.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163bzeeneow.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163gflgohbh.html

[G11] getter / setter
来源：http://www.xuanzx.com/163zilzyltz.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163lufuojna.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163gmblzugx.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163jlfogpdk.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163vfbajsna.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163pbxblqef.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163oozernnz.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163wjgwtbcv.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163poakuhrl.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163tyygewnr.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163xgcygeaj.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163rkaxrqdt.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163awfdhwrg.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163mczchazt.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163mbcujbqe.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163gsmlhprn.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163ecgtonik.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163lrrlyqvw.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163hjtjqmmq.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163bagvsngt.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163qekujuin.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163vavglrrs.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163vnvvmrro.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163rydlwqcq.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163ofvkhlfl.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163lfboceno.html

C#:   u is User
来源：http://www.xuanzx.com/163ffontasu.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163cosopnal.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163jzguzvbp.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163kvksytrj.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163dtcrcnft.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163hxslulqc.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163mpioovqn.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163ncjgcfjx.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163jgbqzwtw.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163imcancln.html

[G15] 枚举
来源：http://www.aibaodan.cn/163uaxqqgjt.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163wfnpvcbb.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163ljjlklvg.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163wmilglck.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163jqxulqin.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163jmoohzum.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163cqwzodrq.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163dmxsbqcd.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163lhjeatvf.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163gvkhcikg.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163yigdmvyt.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163rwphdrfw.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163rpkqqnum.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163xoasukhb.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163pccmoxfy.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163rdfqawoy.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163kwvqgzzi.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163ijbgwvuy.html

================================================================================
来源：http://www.aibaodan.cn/163aazcbcep.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163xbalslqi.html

================================================================================
来源：http://www.sxryk.cn/163ofuvatis.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163spmkyniq.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163yhaydjaq.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163aqmisqdi.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ecjchlkw.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163rjnmqnnx.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163zdghfoxk.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163xbgjfmfz.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163qhvcsvrl.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163mrzwpnkr.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163shcxwfgc.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163agbimihp.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163btcbokrm.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163gmnsrlof.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qhyzeqos.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163mowlzqng.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163vyjpqnhi.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163bhvnkgss.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163rjlzicjv.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163vtrlkkuf.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163ufejrxyw.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ikmlxbiv.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163imdsfmed.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163yjactlbm.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163jgmavswu.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163eikwkwbd.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163jysoogwz.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163svazlisx.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163pzvpsjbz.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163ajycahcz.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163fgyosiox.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ucqfkple.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163nbttluev.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163ufeflmqb.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163osjmuhih.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163kqfhmeem.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163uiupoiwe.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163uqheizrf.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163kripjyhd.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163bcacnuax.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163nlzzdjua.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163lyoxjsww.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163zivomjtv.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163kwpujcjj.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163oifsrtxo.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163fewawnlx.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163dsmidbcf.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163mcgjptnf.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163oksidsud.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163avbbifrm.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163solrdnsz.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163nvbfmvkl.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163mswnhgqc.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163mlaohrws.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163zzdjeteo.html

[H07] 断言
来源：http://www.aibaodan.cn/163kqutuvcq.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163rfmgsbzo.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163ogvxdexb.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163bpstbrkd.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163uzcggszo.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163ykpjesiq.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163jhjgfqhu.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163xydwaydh.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163wjmfspzr.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163ryqoxyix.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163vgzweigl.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163uxzrhwee.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163hkogpsav.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163hbmfphiy.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163qiqpkphe.html

Go:   err.Error()
来源：http://www.xuanzx.com/163hpkvkkld.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163wcjxigcl.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163dvmzsueq.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163fompwvum.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163imzciysu.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163ovtubxag.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163gxaukbsi.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163mdvflbxh.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163tmuqicfj.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163wtoblvhu.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163nzezotvz.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163vmjkyhox.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163bmygmnli.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163itctryne.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163yrcwpwwn.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163qpblbazd.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163dduwkcef.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163fjbrranu.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163izxsjhey.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163ryffzymg.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163qxdbigwg.html

================================================================================
来源：http://www.sxryk.cn/163pbscxbsg.html

I. 正则表达式
来源：http://www.sxryk.cn/163mhbgatbi.html

================================================================================
来源：http://www.xuanzx.com/163zaqktcla.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163nitphsiu.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163ughiksxv.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163enhblvvb.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163gaolndnz.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163qxqcccwe.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163zemtusgf.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163qqkovjlp.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163tpnugval.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163zitwgmlz.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163hpcucieq.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163bkvbgugq.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163mdpttmfi.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163rkcdupxr.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163sqvssria.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163nunhaybj.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163azmsnjak.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163nvxxhkzk.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163chneqtmg.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163bsxvskaa.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163amxzorox.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163vldnvbsq.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163wiwvrkpp.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163nefbmgjf.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163rjnhdakl.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163eymttpuq.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163irnsvpqg.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163ulqbenda.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163oawvuvkf.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163uwxqigcc.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163mdpgdpzn.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163lqolrdmj.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163jvcnrybo.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163oaqrcfbq.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163krbhalme.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163zkfipmbl.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163pysfjmiv.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163scdrnxhi.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163wqdjdfel.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163ifdzvmrk.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163kmzjqgmt.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163cgyyftdb.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163pgsjuvgl.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163ieioncjm.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163mksnugyx.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163vrmihpts.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163mxvcmssk.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163jhfpwqcr.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163ufkthkdq.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163kquqlram.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163zofqutlx.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163lgwsfjbp.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163brpiwenn.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163wovgbhnx.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163wgauypsw.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163toabedqx.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163qsnsltss.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163zmtdungw.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163hrxvdqff.html

TS:   /error/gim
来源：http://www.xuanzx.com/163olpkvosh.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163dgjiycrt.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163vddkmeyf.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163zmmxnyoo.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163yyzzeziw.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163huqeqgwz.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163tpujmubf.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163mgnvphxw.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163bozxbrxn.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163xptnmryg.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163regvebxl.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163dyquoxmp.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163xahicdvn.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163wmrzkdon.html

================================================================================
来源：http://www.sxryk.cn/163dcrraeun.html

J. 日期与时间
来源：http://www.sxryk.cn/163qubljfau.html

================================================================================
来源：http://www.xuanzx.com/163umjnpcia.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163dblimelb.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163jfxhkoib.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163hndxpknz.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163fwrqlxej.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163dncjnhuz.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163wpxhomyr.html


<!-- 参考信息 -->