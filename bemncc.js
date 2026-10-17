外链999!wailian999！

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163vcuahsdi.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163jdjcakyk.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163fsdameox.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163gixeydvc.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163sqcmkxak.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163ngfhfkvg.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163dejgbbfr.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163bnmluizd.html

[G06] 重写方法
来源：http://www.xuanzx.com/163vwmkovqn.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163qjasrytf.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ebrojdni.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163fpqfarve.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163todjawml.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163bjptobdo.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163ioudghow.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163jqccnhkk.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163dfhqzzyx.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163rlweoqjz.html

Py:   super().greet()
来源：http://www.xuanzx.com/163rakrkzty.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163hzhscsbz.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163ubppklwy.html

TS:   super.greet();
来源：http://www.xuanzx.com/163oxausnfx.html

Java: super.greet();
来源：http://www.aibaodan.cn/163pswzxbdp.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163yfbleman.html

Ruby: super
来源：http://www.xuanzx.com/163byplusdt.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163awxabsvm.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163frpfeizw.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163zcaakhlu.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163okidcywp.html

JS:   static f() {}
来源：http://www.xuanzx.com/163lotxzdoc.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163mdofefej.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163twdzmqsk.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163nkckwyvz.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163nymlwcmp.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163sbbizkxj.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163tedkjrsk.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163iwyuryec.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163bexzpohk.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163vvkgiklk.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163kpgvsirc.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163slywmsxc.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163qeedaomc.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163jvcqbkkh.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163gfoeebgl.html

[G10] 访问控制
来源：http://www.sxryk.cn/163uoixguph.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163wjtoxkjg.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163wkjbidzd.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163odzwmvmf.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163jrxmaboc.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163iloaejsq.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163ucihysvu.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163qrvneysf.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163dxwgbiwj.html

[G11] getter / setter
来源：http://www.xuanzx.com/163ftmgccyu.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163wtsbvklt.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163xajdsqcv.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163giwzsubs.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163dtjkebgf.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163pxxaidch.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163mdyvdtrv.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163inctxhco.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163yccihlal.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163hgiruvdm.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163uktpzsji.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163folyycqm.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163yfnpvmdj.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163ipgwqwyl.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163qyilcxqy.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163gqdkibmk.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163xklhaaml.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163fyepifno.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163azohfyno.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163onxvawtl.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163mhmlxybm.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163kjpzymtg.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163ptzvdazz.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163mtqxprjs.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163zdqbuiir.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163mzkubewy.html

C#:   u is User
来源：http://www.xuanzx.com/163hpuqhhzs.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163lyfkhqqt.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163itpikmak.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163ewduiipo.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163mtuopitc.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163exnnhsbl.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163mnjvdtvb.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163glqqkpcy.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163flcteasn.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163hiejpneo.html

[G15] 枚举
来源：http://www.aibaodan.cn/163cykfblpq.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163vxuztcsr.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163swrnpnhy.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163yluzkbev.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163paixzlfb.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163jzpizwqm.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163cozvlwld.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163gicguros.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163matoznjr.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163tqtdnfod.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163pvvmcfij.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163rbdhsyqr.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163cqjdnygl.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163xmredbir.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163gighndts.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163jwwojeaj.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163mymbxxxa.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163udxdagvw.html

================================================================================
来源：http://www.xuanzx.com/163bpuxeyco.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163uizvmcfv.html

================================================================================
来源：http://www.xuanzx.com/163yxggutfc.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163gebjjxnn.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163juavtkvz.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163sqpffplg.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163orrjjyaf.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163bazylocl.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163lstmdfqo.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163furzpbyh.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163xhthmsvv.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163xwwuehre.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163bwfgjidm.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163yutpnoyt.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ckpvuzgd.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163srzlxdux.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163zwipsuru.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qavmsxfn.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163eualbfnh.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163wefwopjr.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163vqcpufso.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163vivyzyaa.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163uodxdavt.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163rzpxnzmx.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163afxmwbze.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163wlfgcdah.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163tabmnsqj.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163ubnuywac.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163kgkfzhqv.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163alcsiell.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163xnkgpojy.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163fkrdrgch.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163xtcqgnvq.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163sxahsbbo.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163aevlekvt.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163qugxwiuh.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163lrghezsa.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163zxliyffx.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163ivtlzxqy.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163pzyjojut.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163ijykyzui.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163qpmcfbae.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163uvogyjaa.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163rfesxkyr.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163rximrotn.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163bvrlyrjt.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163yridomhm.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163ktydsyft.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163gfegtsdb.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163nvbzuipp.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163zyqveapi.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163eohpfxyo.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163dcjqyapi.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163ejvnhkls.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163ryziaaba.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163jpfzlewr.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163qowrgmuv.html

[H07] 断言
来源：http://www.xuanzx.com/163qmpffuri.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163hpandayf.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163wfuxixrm.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ovncapag.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163nsfotbuc.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163lhsywzje.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163nibfxtwq.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163kzzpfrel.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163nlckrxev.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163rforlunk.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163vjxcykul.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163vjjkjble.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163tavkdpzj.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163rytctadc.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163iwjecojo.html

Go:   err.Error()
来源：http://www.xuanzx.com/163xkfyqegy.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163nwtqykki.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163znjididb.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163cqljqqnm.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163erxncymq.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163yusllqna.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163ezmahmpd.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163ylmdvqtr.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163ypojevhk.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163orolydcx.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163fvczzxxv.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163kkznfyfc.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163vxmoreso.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163rdjxrgwt.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163dozldbtx.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163kcgjbuxk.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163itliqwmy.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163xjlponqo.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163ecivmtan.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163aarqaecg.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163uidfcetj.html

================================================================================
来源：http://www.xuanzx.com/163wxthpnpk.html

I. 正则表达式
来源：http://www.aibaodan.cn/163dzffheuv.html

================================================================================
来源：http://www.xuanzx.com/163bytfansu.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163ydfwuyhk.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163sqknbjle.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163qsfczqxj.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163xmeufach.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163acmreeip.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163gggnblgy.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163oeckvqwm.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163hrciorna.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163cvntakfx.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163irkwuttj.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163ytmkgtdg.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163ixqtppoa.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163zyhtlrah.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163yxjmcdwx.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163ttrykkhi.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163cjuaewfe.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163urhykimq.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163phwxuouv.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163unbvhtqu.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163xwpsnrdj.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163htwplsym.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163vdjivgfp.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163gnhdccyy.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163elrrcukk.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163yygbwfxh.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163qphscame.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163rlkbisjv.html

[I04] 正则替换
来源：http://www.sxryk.cn/163lcrjivwm.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163oguzsyer.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163vpxwkaqt.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163mmvbgsjk.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163lcopdawm.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163luqtjykc.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163vwmxmvwf.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163cchpjxgg.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163kwvqiwlv.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163pbzlmkfw.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163laekujxk.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163kqeuvuuy.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163kwztrcye.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ulzlcnyz.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163pgnbqcri.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163owssrjzy.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163svkltkdg.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163dtragsdc.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163ydgaklyn.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163fnvekhjq.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163ezypxgdp.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163iejdgzvo.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ppwzwxdu.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163kzovorce.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163dzewregy.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163nnvfvxzt.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163qjatjsqy.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163micmmvzz.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163afrbwuyq.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163ivmrhqec.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163ycuwntjw.html

TS:   /error/gim
来源：http://www.xuanzx.com/163vjeemagj.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163laczhqqa.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163wqelnvdg.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163cdajprbw.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163xscfyesp.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163yyghkjcl.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163cuvgqrak.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163nklcvmaf.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ryvbwsdw.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163epicnpju.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163jnifqlfl.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163plerryan.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163fsgcfbkh.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163rvwjlyrc.html

================================================================================
来源：http://www.xuanzx.com/163xkcqqgsx.html

J. 日期与时间
来源：http://www.xuanzx.com/163faclafob.html

================================================================================
来源：http://www.sxryk.cn/163cdffaqgs.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163wygmaprr.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163femwqrvx.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163iewyffik.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163krddngio.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163axnaelww.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163rgdscrmv.html

Go:   time.Now()
来源：http://www.xuanzx.com/163htqzgwre.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163ixkcdtzy.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163fkixowup.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163tkqjcfch.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163pjeyofog.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ivsjvjaq.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163xzxoetft.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163iskwndvf.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163otaafxsu.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163mjiqtzgz.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163bjtdyrjq.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163qgxqfcng.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163nvsworon.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163egwuxftt.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163aaqemula.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163atkafnkt.html


<!-- 参考信息 -->