外链999!wailian999！

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163ztatefia.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163urmigbnl.html

Java: private String name;
来源：http://www.sxryk.cn/163hecwarda.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163wiyofams.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163awpjygtj.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163anlfluvy.html

[G04] 定义方法
来源：http://www.sxryk.cn/163vxdofnfg.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163wnunbatf.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163nvkffgjs.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163nlxdynqy.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163wvereakt.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163nsbvtsjs.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163nyqoqsrb.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163jvbcttoz.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163mhriymwa.html

[G05] 继承
来源：http://www.aibaodan.cn/163orrtagda.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163zfftmhiv.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163zlcyrwzr.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163wfrmeett.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163hcjfifqe.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163gbqjqqup.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163lohchrvo.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163ycrhbdhx.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163qhcqzoeq.html

[G06] 重写方法
来源：http://www.sxryk.cn/163yckkzqhb.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163oqyxnuzo.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163gzwwvgex.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163gjkpfadx.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ucbshawu.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ajdldrrc.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163zwkuakyn.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163mvlelkej.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163htepfmcs.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163wrainccn.html

Py:   super().greet()
来源：http://www.sxryk.cn/163docssoss.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163fupmmqru.html

JS:   super.greet();
来源：http://www.sxryk.cn/163aablpykn.html

TS:   super.greet();
来源：http://www.sxryk.cn/163huehgdmx.html

Java: super.greet();
来源：http://www.xuanzx.com/163irznovgn.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163onervlpj.html

Ruby: super
来源：http://www.xuanzx.com/163yeibrgob.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163nhwrjkcu.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163wgjsxoka.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163xfnrnwqq.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163bqqsvpfj.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163onsnlcfz.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163eqbremev.html

Java: static void f() {}
来源：http://www.xuanzx.com/163pyupaoiz.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163jwnihnot.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163ktdugzey.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163jindvdnj.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163zdlyxpem.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163tcymcgrf.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163lzcghdha.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163ylqkbncd.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163rjoybyge.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163hvdtctbj.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163uromaphg.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163vansgbav.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163edysbvef.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163vacgcvci.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163nxmbzrpf.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163fsrhetig.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163rjoxiokc.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163xtpksnol.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163adutmkpa.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163pfuqrxvt.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163mggzpspo.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163amcgioyl.html

[G11] getter / setter
来源：http://www.xuanzx.com/163digobkcm.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163tzmmmepb.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ialsfipn.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163dhhcbtns.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163nupujzkw.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163jemnvsxf.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163wconmzln.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163ywnemnhl.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163eewjoiyl.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163wbgrhxdh.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163mugmxzci.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163fengzzzr.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163jbgcipyu.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163pkcqtgrz.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163dssygmra.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163jbmylwcn.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163vwunpnsc.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163gzbqohbe.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163npupusei.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163tciypknp.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163znemzvrn.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163vffnarwd.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163mjnozqtk.html

Java: u instanceof User
来源：http://www.sxryk.cn/163jodxkzwq.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163octbcqdh.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163widphlbi.html

C#:   u is User
来源：http://www.aibaodan.cn/163evgvxpyj.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163uyooguwt.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163utfiszbs.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163sdzppkkb.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163kpmnwnje.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163tsxetgft.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163ithnppzi.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163uyvjdkki.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163arbzigxj.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163ijceeypu.html

[G15] 枚举
来源：http://www.sxryk.cn/163lsxoezfm.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163ivsrzfkx.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163ylwclhsw.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163pgtkyukc.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163gqzasmde.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163wbvmdesn.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163izenvbnx.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163ytohugnc.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ehjhikos.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163ajfhpvuz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163nvqyebfv.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163cihmskhj.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163qnxuzons.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163tjzykxfn.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163hvqsznwj.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163rkbhwewr.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163uakmawai.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163dvpgwtnt.html

================================================================================
来源：http://www.sxryk.cn/163fytfsbaf.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163cnuyjlqo.html

================================================================================
来源：http://www.aibaodan.cn/163obnxacmv.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163yxueknft.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163eguhpada.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163ezjlzqqh.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163hwugdodq.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163cybbunbw.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163nxvqkpjd.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163stqrsrlt.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163ixsqlxfi.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163czsqhvpo.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163subtfuza.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163cqosfeef.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163mouxhoch.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163jfcpcalf.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163joxuvrld.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163anwihllf.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163xryzvoul.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163rupkxzwn.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163eesudayb.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163mczudxpw.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163ajztklyf.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163pqsmytwn.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163xznkuwaa.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163yyevathg.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163iejjcavb.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163lnkzxvyu.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163hpamgqor.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163nljdmarf.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163vtyfstvp.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163kftolsnd.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163iardnsit.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163zhrslgrt.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163tewktiun.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163oupncogm.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163karoucai.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163pgxxubng.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163hxyaqrlw.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163fxmwzoji.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163dvrqexkt.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163kaknexhb.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163dnehvhqu.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163lmnezgan.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163cmshjhxz.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163czurspfm.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163ryntqokq.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163saufoxty.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163pylliscl.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163kddbenpb.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163hzrcqqeu.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163jxrktlbh.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163vnxjmzlt.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163xjjzbnlh.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163jdqkszwk.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163rwpgmhxn.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163bcfxiuyd.html

[H07] 断言
来源：http://www.sxryk.cn/163ishxzjss.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163jvyapzsj.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163hydnafay.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163houdvihx.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163puajhccc.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163fmdhozar.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163ajktohgn.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163juxhoqzs.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163oqijmabc.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163onqunxrl.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163jiofpees.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163veoshhqf.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163xmgipspr.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163tirczuxq.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163snejpajr.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163ytdnebau.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163umlxpzhc.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163tobczqcd.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163tdgugosh.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163pzqcjdis.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163kijhywub.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163fmrrwmhb.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163shpvgmeu.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163tbuzmoxk.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163upcptskb.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163hzmwsomy.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ncbqkacz.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163rysgcxsj.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163mqgiqojz.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163kekqtxye.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163juaqakxp.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163pcvnhopg.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163ixbiuncd.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163afgfelia.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163flcincpj.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163iiuufamb.html

================================================================================
来源：http://www.xuanzx.com/163usclmgud.html

I. 正则表达式
来源：http://www.xuanzx.com/163agjldgbv.html

================================================================================
来源：http://www.sxryk.cn/163qrwdwfqo.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163gesrovuh.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163kdnmcmiu.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163jjdympjr.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163apgpaovb.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163bfabgrjb.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163rbspalus.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163tqcnuixt.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163vwskyxti.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163ldkurcgm.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163boofwltu.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163igqftkys.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163zvtflnld.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163kijjmzre.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163vxmhtxas.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163tmyfchrp.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163cssjmvym.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163bevkpjtn.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163prsflaok.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163dmzeauay.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163icmqlfoz.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163urezywws.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163diemqsnz.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163lfqxlkpw.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163jdoqlgwt.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163syemwknr.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163xytekdwp.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163tcomsvet.html

[I04] 正则替换
来源：http://www.sxryk.cn/163trhqpkle.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163hvycwehl.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163thignjnj.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163hlluvcwy.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163amauuzbi.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163rcaefhxl.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163jpifynzs.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163biylbpbx.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163lmunxwtj.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163myyzuvrh.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163ghpnzbjb.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163nkedrqhb.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163zmitneoz.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163hgkkbfiw.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163qaogsfzr.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163jywaqyzm.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163sshsqchq.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163xwhukabb.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163xpvmxzip.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163rtqtehhu.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163fxdzuwzo.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163krkfhlxb.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163lesnstnr.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163aujrkhay.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163yhqjrogi.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163uoeszkvn.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163saaredxu.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163nqlljipy.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163ctbwzucz.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163mhyunaho.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163ijxweehf.html

TS:   /error/gim
来源：http://www.xuanzx.com/163slkopyze.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163sikwulqn.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163ljrgmxib.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163xdjhasgg.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163eonltiow.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163vqookvan.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163qycvtrct.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163cvpvfxtb.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163kpamuegi.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163mduvynvs.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163prtpiutc.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163spereplk.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163yeguskne.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163okaqmkrb.html

================================================================================
来源：http://www.xuanzx.com/163wuicdxud.html

J. 日期与时间
来源：http://www.sxryk.cn/163gjdrexeq.html

================================================================================
来源：http://www.xuanzx.com/163jtpppwam.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163fetpccsl.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ixtzruvf.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163pxclsrfb.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163ceglgvxn.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163lviaklav.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163axllrmff.html


<!-- 参考信息 -->