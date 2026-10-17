外链999!wailian999！

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163uyzdfvkz.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163sgzmgwlr.html

[G04] 定义方法
来源：http://www.xuanzx.com/163sfrahxul.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163nvdczfex.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163vgnludst.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163oqqmluxz.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163ovlqrzgn.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163jtxspvpb.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163nkxeqexg.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163tbvfsxqz.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163vodindoc.html

[G05] 继承
来源：http://www.xuanzx.com/163sfvvbboa.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163dkftglqu.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163dfyozqmm.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163evffofgt.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163tionpvus.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163ngbbzkwt.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163eypvpvnb.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163ennlisjo.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163zejeadkv.html

[G06] 重写方法
来源：http://www.sxryk.cn/163lflrbhzm.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163ypslgozz.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163gwpbcyor.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163rixisfid.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163faihwjma.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163kzuetqsf.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163ihgqztoe.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163npwfqgfj.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163fbaugrqh.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163phhubvvl.html

Py:   super().greet()
来源：http://www.xuanzx.com/163maylmqwf.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163qmowtlqb.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163hgfvhacd.html

TS:   super.greet();
来源：http://www.sxryk.cn/163fefiotlk.html

Java: super.greet();
来源：http://www.xuanzx.com/163vvxpovem.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163ndpvyexs.html

Ruby: super
来源：http://www.xuanzx.com/163vaeoiawf.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163gcvuevnd.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163coykuthp.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163udehmzoo.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163sgiwgwrh.html

JS:   static f() {}
来源：http://www.xuanzx.com/163njucqstf.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163qlysnxre.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163smqmunli.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163hudthfry.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163wshdlepe.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163bywhxgap.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163fhwakzgp.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163brxytudz.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163zmvslrjk.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163chzskzzx.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163ievsegpp.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163hyyhjtag.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163jxnnpqjm.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163ytrkbdqg.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163iidhoyxj.html

[G10] 访问控制
来源：http://www.sxryk.cn/163csjkdyas.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163iqilznuo.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163qhjozuys.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163glyccdus.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163qokeerlb.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163ikfznnbm.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163knelskic.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163gfclrmii.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163kaqsccga.html

[G11] getter / setter
来源：http://www.xuanzx.com/163hdfsxbgg.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163awhogetj.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163cvjaggdt.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163dcmgthjy.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163nyqeihbz.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163jmdchgtg.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163hzdbgmtl.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163nsvxqegg.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163aigaqtho.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163bukknjtw.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163guokkfos.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163rwrhsvht.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163blqjzkjz.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163ackqdixb.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163wvufuezs.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163ilipecbf.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163lzmuqsiz.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163aatmaheq.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163tndhyfxw.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163asaivjsu.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163vxdgesyp.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163czgcetzx.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163epzbcbqy.html

Java: u instanceof User
来源：http://www.xuanzx.com/163norvpvdm.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163vqzhnlzo.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163gzkddxjn.html

C#:   u is User
来源：http://www.xuanzx.com/163mnpqfwck.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163awlzjfdp.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163djtrwgxb.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163utjtrxbr.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163psvbhqab.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163coqpvaca.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163wesubqbu.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163ttycjklp.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163uufdkrdp.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163ilvcwsvo.html

[G15] 枚举
来源：http://www.sxryk.cn/163spqnzoad.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163ypqbmrmq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163fubetiya.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163bibmfgfb.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163vyskhtmu.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163atbrvthv.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163gueatxeg.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163ajnjogwo.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163hybtywpn.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163nwnsrgyx.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163omtsrcnw.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163dekiqevw.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163fpnxrwlq.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163hbwfwems.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163xsstuxmo.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163shklhnld.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163cvpqtsvg.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163rfofrgoi.html

================================================================================
来源：http://www.aibaodan.cn/163drvvcpkc.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163hfgorrjx.html

================================================================================
来源：http://www.sxryk.cn/163ucrltuti.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163lxodfllg.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163xofhwyok.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163whukeeri.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163htgudhcy.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163nedzzfks.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163goebgzlq.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163gvmgnbta.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163wwebxdhv.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163xgnqkfrg.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163uyhlepgt.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163wkfriorh.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163kqlzfpyk.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163xzpswtdt.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163scgkcssk.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ftihykky.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163dashakbp.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163ogyhdjpg.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163maostmzj.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163irrgrolu.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163kyhlsdmy.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163toolmqup.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163vvchwrpb.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163wsbranxn.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163vtpefnft.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163ilfdrhhv.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163uyqxtlzm.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163wjqzavtk.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163nwjgmjja.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163kviyxcvq.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163qzskquwy.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163lwjzhixb.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163kfpqfhkv.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163wnhgqwta.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163gxbwitec.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163epjzfzih.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163avafnlkq.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163odggfayz.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163iwpsueng.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163egvedkjq.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163onxdajws.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163uojjntib.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163qifiosmx.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163dhlphtdq.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163avcgvnap.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163mhoiiqpb.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163ozrmlqam.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163zuytzqyl.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163qnkmixuc.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163nupzgmkn.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163qqzhveua.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163dgxcjnse.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163puqehdqa.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163ocsnookc.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163phwcnxnf.html

[H07] 断言
来源：http://www.xuanzx.com/163auadfiav.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163gjwgjtfx.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163hmoqgera.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ymafhpme.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163munyxeef.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163qnrauzxy.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163rcbecnkp.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163tcfllrgk.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163tyevigio.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163nesrrjii.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163veteoddu.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163fterznrg.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163gdksriyh.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163jppyafww.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163isdbzlxt.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163tqxwbzms.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163puevkqok.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163tnjuoehw.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163rjhnyitf.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163fblxzhak.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163rvepihuj.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163bcivwbgj.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163ruxlayym.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163ujffbyrv.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163dcweueln.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163jngvywdy.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ctzitgdb.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163asytneom.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163ewgutxnv.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163wsgcuqjh.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ayftccpj.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163imvlsfka.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163tsptswqn.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163rxuyhjsh.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163maoopbml.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163kkjjluda.html

================================================================================
来源：http://www.xuanzx.com/163rxrlbqun.html

I. 正则表达式
来源：http://www.aibaodan.cn/163pfqpbkcw.html

================================================================================
来源：http://www.aibaodan.cn/163ilaybfmo.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163pgdzwvpt.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163vmoabvmk.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163ocipcfwr.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ahbyqqbd.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163yyyxmayb.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163juesenyg.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163sxxumffv.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163ciaurblc.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163nwooifob.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163vwdzpidu.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163tnmgscxg.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163mblefnjc.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163mejpeipf.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163misfjdrb.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163zthrksvp.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163chfzcqse.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163nqzyiynk.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163ozcgtgpx.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163swsozdnc.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163yotuqzza.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163xrtpgpxo.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163tcchlooz.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163kcxsvadr.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163ngvmpgcb.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163evmepfas.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163cnrdvvpm.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163rkfqdngd.html

[I04] 正则替换
来源：http://www.sxryk.cn/163zfqaejzv.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163fnhcgzfi.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163kfatomml.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163yzkguvrl.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163trvsdqqt.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163gdifavwr.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163eddnmwst.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163ajgayeap.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163eywzqnda.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163elkolbyd.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163asdacuxr.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163ezhwkyzg.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163azrmgbww.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163rwukxjaf.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163dpugobfl.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163grcutqip.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163nnywdgbm.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163urzetawo.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163pbyfliok.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163bswegfcv.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163lziixvie.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163jctutbfn.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ppwjahql.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163etrsshxe.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163sbzptukk.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163fscpbole.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163lfxcctvk.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163eummrduk.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163umqrxmvc.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163hkzhkciz.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163upywkpyg.html

TS:   /error/gim
来源：http://www.xuanzx.com/163hbwzzqkb.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163iccfqvcn.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163agxuznhy.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163vanvlfxn.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163henppugh.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163tigmayxi.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163yynknwlm.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163zfskokyx.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163kotrrfpv.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163iaddnqhf.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163muckgvjv.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163hhyhdzty.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163qfwxyqju.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163zsccwnow.html

================================================================================
来源：http://www.aibaodan.cn/163thjkfupi.html

J. 日期与时间
来源：http://www.xuanzx.com/163amdfhwlp.html

================================================================================
来源：http://www.sxryk.cn/163yvnqzggs.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163szmnddof.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163zvggatgd.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163iripuwzo.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163etjczufs.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163xvlxnewj.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163hrlfhqza.html

Go:   time.Now()
来源：http://www.xuanzx.com/163qsrskyjc.html

Ruby: Time.now
来源：http://www.sxryk.cn/163wdyepedi.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163pmffcdut.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163vftnjitj.html


<!-- 参考信息 -->