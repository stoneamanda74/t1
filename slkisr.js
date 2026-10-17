外链999!wailian999！

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163wdzguofj.html

[G03] 实例属性
来源：http://www.xuanzx.com/163jbrpfoew.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163ezpsgxmh.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163bwqtcdwj.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163ljqtaqpo.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163zlkpxlug.html

Java: private String name;
来源：http://www.sxryk.cn/163pbnetodc.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163deoabuiu.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163hgsrxboz.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163pxdebbzh.html

[G04] 定义方法
来源：http://www.xuanzx.com/163hjoakztn.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163apmnmcsy.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163zjrbbxoo.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163lfygfrfy.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163oenljvez.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163biemssqs.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163umiixiwh.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163tlytaska.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163crxozmhd.html

[G05] 继承
来源：http://www.xuanzx.com/163giquszxj.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163mnprsmhd.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163wtdbbinm.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163mnyqfijn.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163dkcoczyb.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163rsskgrxg.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163vhtcikfl.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163rfaeubfs.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163wudbtwgy.html

[G06] 重写方法
来源：http://www.sxryk.cn/163hgxsdjtv.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163rdiyvtnk.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163iilvkeru.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163muzaxtjm.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163soiftnzo.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163odbokjkg.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163gwjvthpb.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163qzywjhol.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163vchcwlfl.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163rsuxmjwc.html

Py:   super().greet()
来源：http://www.sxryk.cn/163nlnorfdl.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163kogrnigc.html

JS:   super.greet();
来源：http://www.xuanzx.com/163xobyoeyj.html

TS:   super.greet();
来源：http://www.xuanzx.com/163vnhmjjox.html

Java: super.greet();
来源：http://www.aibaodan.cn/163lknhrued.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163bnigbgjz.html

Ruby: super
来源：http://www.aibaodan.cn/163pwqbwoiz.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163lkxtbjtz.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163skztsrcn.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163atemcsbw.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163dbezjoko.html

JS:   static f() {}
来源：http://www.sxryk.cn/163ixolsofc.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163ifjlxfzd.html

Java: static void f() {}
来源：http://www.xuanzx.com/163ijqzsbvx.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163etvgwonr.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163vwurrbee.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163sdcakrma.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163nkdkzxfg.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163slbigqiu.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163fmfaoork.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163fucpipyi.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163jkikbccp.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163uwphvwwe.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163fttkmzgb.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163ydsryffv.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163qlwjvwxx.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163vmpckkkm.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163imjedqmp.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163tunmffkx.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163qbcvsekr.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163jidiinzh.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163arvjhjvu.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163ofuevixd.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163apqabifh.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163mxcbivxw.html

[G11] getter / setter
来源：http://www.xuanzx.com/163drssqtuk.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163onhsfeux.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163pieyfngc.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163hmmwgwrb.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163zshazuyt.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163agafvzkl.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163gqxcczct.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163nwczxzqq.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163alsoxcbx.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163liywzpbd.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163rlpwibat.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163oygvkonn.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163hqtnlbvc.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163oywankfm.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163ldpmmpkj.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163hofvinuh.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163szrtwjsj.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163frijdzgs.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163mysxfxns.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163fusduoui.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163agtfxjhb.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163vvaexcnq.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163upefchdq.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163jjckmotw.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163bwauxlta.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163eegnjdql.html

C#:   u is User
来源：http://www.xuanzx.com/163pogveame.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163mlcwbxwc.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163ufnbkzfj.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163cgtgswto.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163lzeafcmz.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163ipcyyoqz.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163mekedmaf.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163rfstrvso.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163kerliybh.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163esyvkaaq.html

[G15] 枚举
来源：http://www.aibaodan.cn/163xxmdgvay.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163wtrfvkoo.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163uxztpxzy.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163djeitswu.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163cjmqjatx.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163itxzpjff.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163vugybaht.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163kppgrxow.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163bxyjyrii.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163grizzyqk.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163xuqjbgqb.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163hpnujegq.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163lbfgplkj.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163nplcpwys.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163qtrwukcr.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163hhnzestq.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163emzaruwf.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163tcadwiaa.html

================================================================================
来源：http://www.aibaodan.cn/163oauqyezt.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163ouzeqwhi.html

================================================================================
来源：http://www.sxryk.cn/163opchexvc.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163gdbtsouv.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163uaythwan.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163slwklzpg.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163tolketat.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163giegsmme.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163kqpulzhu.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163ftszrlsx.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163lutdbwce.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163bvhbhyam.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163xafflstc.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163xuqycukm.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163zpxewjdj.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163wdejmtgx.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163lrtdeido.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ydexthbj.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163fhixvtku.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163wypcdway.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163pmeunled.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163mldyqdal.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163iurueufo.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163tgiovbkq.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ueuzfxhp.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163esbvhlyh.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163ddyzfelp.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163atcktais.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163yptcuqqu.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163aufrqejl.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163aubequvt.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163juobnvws.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163vegfzlgr.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163kpyxqgfn.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163dujgnues.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163cumldzax.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163ymtpbnzq.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163itrmiyzu.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163rgvidydz.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163vymcpubi.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163tnqcqqgo.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163zpzlwbor.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163enrzhsiy.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163iravulgq.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163absdyigz.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163adwtvziv.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163qsbfbmdm.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163vkpcpnho.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163qolksdio.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163bifymnbi.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163trmjylcz.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ppdgpadu.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163cycynkfh.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163qnccptdd.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163fwvcoqqh.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163zubtmvur.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163bechflhn.html

[H07] 断言
来源：http://www.aibaodan.cn/163jjjkxsiq.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163bkhcoeoy.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163vixlgeas.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ptzgwnco.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163xrzlzmxx.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163stwalslx.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163onifueam.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163ustlbjei.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163tatbkxxc.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163diokxwdk.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163qiivfnrs.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163suzpagsg.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163yraluhdp.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163hixzjval.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163akncyrvn.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163mtunwqfz.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163skmjname.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163psirwaqg.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163wuqkcnmj.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163xcohxwye.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163ntlydkzn.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163vrbgwkus.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163njkashbu.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163zgbhytpy.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163vhhragmi.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163wkaigbjt.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163cjpgcjqe.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163sjgdupuj.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163rafatcub.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163degejapt.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163zsujakth.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163whynabtk.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163tszajvoe.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163ztzcecbx.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163qkkyvikt.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163vagujswt.html

================================================================================
来源：http://www.sxryk.cn/163irpafoal.html

I. 正则表达式
来源：http://www.xuanzx.com/163rnotukyq.html

================================================================================
来源：http://www.aibaodan.cn/163obyalgfp.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163cmszleiw.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163abvcevsw.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163izkybfrt.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163vweriggz.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163rhconayi.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163mebtlixa.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163xdiidsic.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163ciuszjed.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163besgarrb.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163wvmtuhpa.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163bxvcdijm.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163parnbjsh.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163vklbmikg.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163pkjsopjt.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163vhsgmtln.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163kunpqvyb.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163ilpzrwxo.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163ewjikngy.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163xbnlvkum.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163uazpljmw.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163mbhmjhxe.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163jqflwkxs.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163mhwrequo.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163ynzlfkzi.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163wumvzknt.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163jkgyhxol.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163enlcvlwe.html

[I04] 正则替换
来源：http://www.xuanzx.com/163lbjlwwae.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163yeijnrgk.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163lrktoxun.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163zsgmhtgs.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163zeexdcmk.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163cuefjzlq.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163qkgofwuj.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163xvjcoqdl.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163bgcpqute.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163hxafjkey.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163ligoxnty.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163kmevisdr.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163fnlfkjrw.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163saiuygwg.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163yoltzjyh.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163ranlwdbd.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163lakhrtsw.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163msuhtrcd.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163wffabpcv.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163nixfayjv.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163iozlphmg.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163lwlbfuej.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163zylnxemt.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163eudhobhx.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163deposvyo.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163wmppwrxn.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163nywpoanx.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163lxsbemtx.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163bpboiznp.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163xtkjbofe.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163wrsefrlq.html

TS:   /error/gim
来源：http://www.xuanzx.com/163hsmbszta.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163cbeqttha.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163ktoaqiqf.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163gtxqplxv.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163xkikyize.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163jjctbeyu.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163ydyzyddq.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163ififoywm.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163wekkecsj.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163tfagonxw.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163weygxnve.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163gjigtqjx.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163pzjbplun.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163ownknfpv.html

================================================================================
来源：http://www.xuanzx.com/163ivoinleb.html

J. 日期与时间
来源：http://www.aibaodan.cn/163qydvhgwf.html

================================================================================
来源：http://www.sxryk.cn/163uwlhdozm.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163rmwvqrvv.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163jspzefws.html


<!-- 参考信息 -->