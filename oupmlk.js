外链999!wailian999！

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163nmbfucqu.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163optxrkby.html

Java: private String name;
来源：http://www.xuanzx.com/163wlkcnppp.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163uyolcheh.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163lybrswwm.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163lcznpsat.html

[G04] 定义方法
来源：http://www.sxryk.cn/163toaiibsd.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163igpxszgi.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163cddkezmq.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163muiybuxc.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163equbhjdi.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163tnvkpsof.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163vscovwpu.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163vlxpkhvh.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163ksxszlol.html

[G05] 继承
来源：http://www.xuanzx.com/163ffthjmjc.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163hemubesk.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163vyxbvmrj.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163tofdyriv.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163iqltgscs.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163utmhzjov.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163jnohgzsj.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163ywhkqthy.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163jcoztxnr.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163zoqgvoob.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163vqqynieg.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ajjckghf.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163rgfkvsri.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163nrbslejp.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163aneorgpa.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163vmbipnjd.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163rkprvgsz.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163dryylvbm.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163kjfeblay.html

Py:   super().greet()
来源：http://www.sxryk.cn/163azywuqiv.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163pahkjilq.html

JS:   super.greet();
来源：http://www.xuanzx.com/163pdmdxodx.html

TS:   super.greet();
来源：http://www.xuanzx.com/163toewdzlr.html

Java: super.greet();
来源：http://www.aibaodan.cn/163prvtmcbp.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163bjqymkjh.html

Ruby: super
来源：http://www.sxryk.cn/163fqidmdlg.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163coqpovzr.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163farymqrc.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163eyvzupey.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163ogahajts.html

JS:   static f() {}
来源：http://www.sxryk.cn/163myzjdyxa.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163kbxqlrny.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163btpogoxs.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163lwogonib.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163iysvlrve.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163xjfyotyu.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163rmioaohi.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163dooeleug.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163hkgnjgpe.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163sejruwar.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163ltdgqjts.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163agbyhsof.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163kxdmghui.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163yfcsuiig.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163kihpsiyp.html

[G10] 访问控制
来源：http://www.xuanzx.com/163rsaflqzp.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163jgymrkho.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163lefonxus.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163pbrdvqid.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163uizzqvtj.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163owcrbaon.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163lsvxpbyb.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163gytvzxhh.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163iffhpchu.html

[G11] getter / setter
来源：http://www.sxryk.cn/163jpaherva.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163afrmbhaa.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163vvhxjczw.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163dfnudrel.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163ltyoxocm.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163sqeluont.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163vsqxfrad.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163kwsgasbk.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163owwyxcmq.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163mxvusdzh.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163opezghpi.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163rtvncnkq.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163ugsfylkg.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163frwyinff.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163bgxaegoh.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163epyredsj.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163japleigh.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163gonglnxx.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163gycimdvh.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163sywyjmlf.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163ogkaazum.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163awfiampx.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163fkrijcaq.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163apqtmzhs.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163prspotuj.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163slwspycf.html

C#:   u is User
来源：http://www.xuanzx.com/163smymgqnb.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163seitettd.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163cktgafho.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163mgowonqo.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163ardmynmk.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163prpzgsgb.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163rcjmevvh.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163sxqtdylr.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163tvefllpj.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163bqfgmyft.html

[G15] 枚举
来源：http://www.xuanzx.com/163pqtjjxgw.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163eucjzqel.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163znqqbxrj.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163ntrsbgcd.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163dbqydzif.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163rjemnidg.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163aizltbjm.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163odryjyyq.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163khzzfnyc.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163pswvaowr.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163bmcyhlqz.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163jbnodufx.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ufrplvah.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163kfczkjqi.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163mcnzwwmk.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163qrbowbqu.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163ewphgmkx.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163hosmvqxv.html

================================================================================
来源：http://www.aibaodan.cn/163jteshwke.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163ztpnemee.html

================================================================================
来源：http://www.xuanzx.com/163xghohnpu.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163aukktwnm.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163exkijsrn.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163sxwjyrkp.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ztnheshj.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163kngvzlqx.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163lbqneemi.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163jsbtsqmd.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163jbovnozd.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163mrpycygg.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163gtsbwiqh.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163qvtlzxkf.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163eaezqvgh.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163vopszuuh.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163lralprxg.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163phesuxrq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163uhhvymih.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163blwrwuuy.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163bisrbmjj.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163tfzhgffm.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163ijrcpqup.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163nmqmuzqc.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163pplcmibg.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163ptcigxmd.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163qyuyxuvr.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163cjofftyn.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163hkbbjqto.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163rkzcmgsz.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163wpnxcekk.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163qeklgbvz.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163mjlichgf.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163sycrkuvc.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163kjyxrepj.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163rzagkhic.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163gadgdlyr.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163targpwje.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163eyejybaa.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163tlixmiyn.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163wllouzhf.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163fughocxq.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ewxavovl.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163kyunbpqr.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163cqmdojau.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163uxnvruba.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163sapwtmxm.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163puqeltnq.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163bgooextp.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163fsgbmwjk.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163ogzwzpin.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163foeimdqt.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163jrweviag.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163dmblvmjm.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163vvtwldpg.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163vqzrphbi.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163hujgklap.html

[H07] 断言
来源：http://www.aibaodan.cn/163xvloqlkh.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163utbzydij.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163lgcdevyn.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163vdpdqmzk.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163mzvwfgpe.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163cfoqdozp.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163lrejotyv.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163naigbhtn.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163ipjoesvx.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163zqijyhtn.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163dxzkbcnh.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163efbubagq.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163smwmqupb.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163bxndunsi.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163upnrnddd.html

Go:   err.Error()
来源：http://www.xuanzx.com/163zlzrrker.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163zltkroeb.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163nepkyrcx.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163wdieqhvp.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163yiphwmqn.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163ivrrhkcl.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163zjadstmx.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163chrehlvn.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163xfnegbil.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163eytrwwqq.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163ljtixfki.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163qysicqwb.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163plwwkchi.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163gchacjke.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163dxiesqnc.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163fbztsfir.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163zrgdoikw.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163wullrfxv.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163mtcfyxpe.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163jtutqaeg.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163mafuwszz.html

================================================================================
来源：http://www.xuanzx.com/163ocokbbwv.html

I. 正则表达式
来源：http://www.aibaodan.cn/163cefhgppo.html

================================================================================
来源：http://www.aibaodan.cn/163hejyzsoq.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163oixdqqca.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163ofvjpqyt.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163jzsyszdy.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163dwzxbgiv.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163lspgezvf.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163ycehzirs.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163mjnchltc.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163zosreldc.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163qbwditan.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163vgylnexj.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163gehtgtkq.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163ureyexst.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163octjqvgs.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163suocyflp.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163ryrfyunt.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163usbfzfey.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163jvkrwjma.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163qaadbgmb.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163cggtrnrg.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163odcmexrq.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163tskkzdty.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163nqmvjmwd.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163tmktgjpz.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163jexwqcno.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163cfzzhamw.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163pstwztlo.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163vxydpoen.html

[I04] 正则替换
来源：http://www.xuanzx.com/163tkjzaqwb.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163pxucnmeo.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163meupxpqz.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163zewhnmso.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163fdccshvb.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163iuimzmvs.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163kixcsvoi.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163kpshhhii.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163ceekvyym.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163cunddrir.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163rtmxgpwl.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163xeovmnht.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163mlgyhwoh.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163wvkzkquf.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163njdoumrs.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163nygpawsg.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163oxkicxxs.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163uqdajwdo.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163bngibsww.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163kzoqvonm.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163iokguogb.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163infyuqmy.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163qmvfdlhe.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163yxsvnkxe.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163wbvnwfrd.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163mvxnfvvt.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163fduodizi.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163ykqdwknj.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163gamizpfx.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163coddiszu.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163zdgojbsj.html

TS:   /error/gim
来源：http://www.xuanzx.com/163lwzrnnmj.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163pdoihcnd.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163alcaxnlg.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163kxnjieje.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163vqqrdria.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163wsxmuqge.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163ctslnznj.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163lcexybid.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163yzqlttkd.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163swvovtwu.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163kycusvfo.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163ovksrtwd.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163sixuqmhh.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163uohxqzcm.html

================================================================================
来源：http://www.sxryk.cn/163nkydusxk.html

J. 日期与时间
来源：http://www.aibaodan.cn/163qfmmhrnk.html

================================================================================
来源：http://www.sxryk.cn/163swlrpepw.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163zetnehmh.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163vvujadxo.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163hebourmv.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163qfuoxnqq.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163rpkngzdt.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163xiibjzui.html


<!-- 参考信息 -->