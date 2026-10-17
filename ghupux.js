外链999!wailian999！

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163piwrkcir.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163xdddguan.html

Java: private String name;
来源：http://www.xuanzx.com/163xtzcnddp.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163hfmnugxs.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163bjyhvjce.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163ubqdrafc.html

[G04] 定义方法
来源：http://www.sxryk.cn/163chqkwgnb.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163joohnvip.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163leynrapm.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163mtxzimwx.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163zhxmxskj.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163xomszuqp.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163mvwucmbr.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163ntooxrjp.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163ntghucoc.html

[G05] 继承
来源：http://www.aibaodan.cn/163tfhslljl.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163oqehkznj.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163pemgaymg.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163vvooaauj.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163kazfzjed.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163mdzesfte.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163lyyxonvk.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163cmibplnp.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163thrunaub.html

[G06] 重写方法
来源：http://www.sxryk.cn/163jgtdqsol.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163pzxidchw.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163sjzxqcvc.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163dyzdmmzl.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163wessglgi.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163ebjreixj.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163pmpcxmjk.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163fbyomlmk.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163kzhqqfxs.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163hpozrdhy.html

Py:   super().greet()
来源：http://www.sxryk.cn/163hjddjoxd.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163dzhlpsza.html

JS:   super.greet();
来源：http://www.xuanzx.com/163ebumpapb.html

TS:   super.greet();
来源：http://www.xuanzx.com/163lwkrppwe.html

Java: super.greet();
来源：http://www.sxryk.cn/163cchewiss.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163trmebwcz.html

Ruby: super
来源：http://www.sxryk.cn/163pimqugfx.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163lpondqje.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163txpucigu.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163lmqteagv.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163dwzddzls.html

JS:   static f() {}
来源：http://www.xuanzx.com/163ivumlvlb.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163qdjhitmc.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163gmlkqyqn.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163zcvhgxqj.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163zcepcwxs.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163fxmginvq.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163dgsdxsrd.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163beugvryy.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163mfhwjmud.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163dvwfgewb.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163ctumvhao.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163ccavuaio.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163fphrbuxb.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163hyirnkke.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163wkabcplo.html

[G10] 访问控制
来源：http://www.sxryk.cn/163nirzlfnz.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163ljmdybrs.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163nqpzopzb.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163lnfcalco.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163xpqrftzw.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163skieybxa.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163btddefyq.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163vqunacbk.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163vvnmwxlt.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163sigcwlif.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163ocyegnft.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163xxmodihz.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163irpdnmrw.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163avmwpljz.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163bwesllpz.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163ijcbxusq.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163mmhutphr.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163izgpcvat.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163iavdtgos.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163qnrxvolh.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163kixzjcce.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163lynetmmq.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163vcendjtj.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163oziputip.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163fejujhcn.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163mfdmtmyb.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163ndacyhlv.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163stutcpjl.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163leoacqqk.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163tsbazavi.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163kkzbhscn.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163sduascvg.html

Java: u instanceof User
来源：http://www.sxryk.cn/163zmhocojn.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163xpuefjmg.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163qkrjhrzu.html

C#:   u is User
来源：http://www.aibaodan.cn/163mkyhhhst.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163fhvmydxh.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163csglbyae.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163nrunsccv.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163qcwkcqls.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163feanwsqk.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163euczraax.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163tnibkfhd.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163qiwrchpg.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163ilvetgjy.html

[G15] 枚举
来源：http://www.sxryk.cn/163lkheteon.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163dopqwlrh.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163krdclisc.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163lqwphtsn.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163dwpnsvik.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163fqmspuoj.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163rofredzj.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163ztevtqpt.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163letmabyq.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163awyzfpgm.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163gngyxdwy.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163lvsugmjg.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163lbxjqdvn.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163npyvyaaj.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163yvdhvkco.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163vjmydobs.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163nweommgi.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163kxbhahnj.html

================================================================================
来源：http://www.xuanzx.com/163xwgqhjsv.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163seiqfsab.html

================================================================================
来源：http://www.xuanzx.com/163nobebzak.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163vqyytsgo.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163elpfomum.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163pzkqkjyb.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163skxskixh.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163wjtnzzet.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163jbpwhzik.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163srjjewab.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163roszslgk.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163tqykvfdt.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163cwdtjmmw.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163kbfjyjkf.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163gtqxcolw.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vthhtgsh.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163nmncxbuq.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ptpzfvse.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163xshlasgy.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163bapyhjco.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163eulnzmdu.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163wkoiprnr.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163vsdkbqib.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163sdcfrihc.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163uomxyqjr.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163tnhwtbed.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163hfrowver.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163zgrzapfl.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163irvgtsib.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163dmbtujvx.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163lcbsgibw.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163etcceoww.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163eieixian.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163uuurtmbx.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163dgmlnpkt.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163wdbcbsaq.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163ijsljzpr.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163iwhpdpex.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163noqdppfr.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163ismcitnz.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163nroztxfg.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163bgfytxio.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ilckvlvp.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ofmqjtfr.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163hcstbiys.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163fkqheuog.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163tkbwoepf.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163dhzdtsuq.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163xfqferjc.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163sykfetul.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163auhiwibb.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163zkyzokuv.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163zwiybjte.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163yhxbofro.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163qzjmzvpw.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163hlcfxvxz.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163ephpkqyh.html

[H07] 断言
来源：http://www.aibaodan.cn/163jxasqcjl.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163wttycbpp.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163btggorbb.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163oopjsrsq.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163pgpnedri.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163vesjvypz.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163yeanwimf.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163bfimrzzv.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163zyngcxrh.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163yubbvtdu.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163umrjvfxs.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163qqzzfslm.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163dfqmzelv.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163cpkgvtpb.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163qkpenuoo.html

Go:   err.Error()
来源：http://www.xuanzx.com/163nyheymws.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163imjnbgqp.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163cwtzxpsw.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163psuwkqic.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163bauhxzge.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163vptqgqfb.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163petjkamx.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163tqqrzjqc.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163mtweawaz.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163bgppqwls.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163hywhobxi.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163vfhazlny.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163wtgmegmj.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163txwsjabm.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163vxpbmelm.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163kewgzgxe.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163iwuyteoo.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163bjxyhffw.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163gbswzepj.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163ktfhqmlm.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163ichchrub.html

================================================================================
来源：http://www.xuanzx.com/163wvttwree.html

I. 正则表达式
来源：http://www.sxryk.cn/163qymgjiax.html

================================================================================
来源：http://www.sxryk.cn/163ibwolxir.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163myyyuphb.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163byuczxnd.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163inlctxgj.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ztmttncd.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163tqnanarc.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163pnaeuwoo.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163vwcizxod.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163kawsvhov.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163xskqklse.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163lhxghdpi.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163hreqrgkg.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163glkofzww.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163tnifzbnw.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163nmojxvti.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163fzlnppyh.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163zdzcspok.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163rwovypfy.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163lsmpiuts.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163ulzrygej.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163vhagatef.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163kihkkffx.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163jlwpcgfw.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163dtujchgf.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163wbyyaqyi.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163jyxjkzth.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163ooagercv.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163daztmqkl.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163enxnhvtl.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163byqrgsqi.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163crdlpybp.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163shrwqvgu.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163nwnbzzyw.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163wqjieoco.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163nhwexvuj.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163ziliquda.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163jabwdmxb.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163notdjdrn.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163jhpbikiz.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163wuzyfzse.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163fmbcakmn.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163tfpqefoo.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163sghrvkiw.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163vjtfymst.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163zlsrembv.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163eaugdxux.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163bvbbxjwn.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163scytypwr.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163vhkmubbz.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163jvfihmgo.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163fjkcagbv.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163mglinwhz.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163traonybw.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163exvpaish.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163violeqsu.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163hpkioqeh.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163nmltlzsm.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163glfjawzt.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163ajyjsfzv.html

TS:   /error/gim
来源：http://www.sxryk.cn/163uemvcibc.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163xfbcgyef.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163tifbpkrr.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163tiospzrp.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163snibgaki.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163ehralayz.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163feaehnhm.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163hvgjnjqr.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ewcepbms.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163bdxzqjmu.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163rzbxudjk.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163imocejbm.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163hbzehcxj.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163kqtcveok.html

================================================================================
来源：http://www.aibaodan.cn/163kcjfrocf.html

J. 日期与时间
来源：http://www.xuanzx.com/163lzulohrz.html

================================================================================
来源：http://www.sxryk.cn/163bbqbmfrl.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163rtusthwf.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163nutgmrca.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163bvyeatwx.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ywftnizf.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163yipbnkuk.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163embgmdha.html


<!-- 参考信息 -->