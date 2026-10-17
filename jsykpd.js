外链999!wailian999！

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163vashqdzd.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163ydygvjdt.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163tszdzgyg.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163skhacenm.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163gmptymqv.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163ovoekfxk.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163cywvxkhs.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163oblvwlzl.html

[G06] 重写方法
来源：http://www.xuanzx.com/163mnywxzxw.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163zymmqobb.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163jelpqfkl.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163bsvnovav.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163lpwdlpyj.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163zobfrkbn.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163gqfwbiwx.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163gepchswp.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163dggvqpmu.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163ieurhjnk.html

Py:   super().greet()
来源：http://www.sxryk.cn/163huavsdxn.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163oeoejndm.html

JS:   super.greet();
来源：http://www.xuanzx.com/163emiucnnq.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163dfxckaqp.html

Java: super.greet();
来源：http://www.sxryk.cn/163arwfmqwo.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163zhjdsvwc.html

Ruby: super
来源：http://www.aibaodan.cn/163jozzhcjj.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163faqtcvyn.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163rrazxebc.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163nfzcmaba.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163rogartvx.html

JS:   static f() {}
来源：http://www.xuanzx.com/163rfoncjta.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163bkgyywjr.html

Java: static void f() {}
来源：http://www.sxryk.cn/163srpfsyhi.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163rnrpfpio.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163pzvsolay.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163igvdwigf.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163kagqtcba.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163ymdbmrgs.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163rhzrkhqc.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163ursqtwek.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163gdsvvglm.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163dmlxbsgs.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163llvcjapn.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163vzegxudg.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163ayminshz.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163cabyftld.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163uljiuoio.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163atjszuny.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163xsdylfqb.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163bwyqgzjq.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163scsalaeg.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163zhmgnfmq.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163zairrgyc.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163eotftacj.html

[G11] getter / setter
来源：http://www.sxryk.cn/163jxjahpmy.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163prysfkrk.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163dcgpqmdb.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163gscvurws.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163wxddidib.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163qlerrvvz.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163neloncmk.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163nahwoblt.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163pesbgvbi.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163crcwjmbf.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163eaxmhoeq.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163ueeykyok.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163ozglbzfi.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163ukgdknxe.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163pgerfjvz.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163jauaezjd.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163kqggmpod.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163sdachykf.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163mpnbisck.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163fjnaxaxw.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163hriuzdja.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163nlwiqeql.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163monuvhat.html

Java: u instanceof User
来源：http://www.sxryk.cn/163uxobwkay.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163rrsxahii.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163prlvziod.html

C#:   u is User
来源：http://www.xuanzx.com/163qcalddwr.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163vvgnqujs.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163xziympgl.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163dsjxddkx.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163rvzkmjms.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163zuijuyro.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163soocscvn.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163nsqkdugc.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163bngdytlz.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163lyhdcxxb.html

[G15] 枚举
来源：http://www.xuanzx.com/163sghjmbdp.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163hvjniwdc.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163zuhcfqyl.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163zqttjusg.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163beikuyhh.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163qrxhasvc.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163fcpiwcwu.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163shyirrok.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163hklqkrhw.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163ehdlgngv.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163iopjiqgp.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ruicumrv.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163fopubgxe.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163muyvkjtl.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163iqzhhyrr.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163qrenkhze.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163rypqiuwl.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163naeskqps.html

================================================================================
来源：http://www.xuanzx.com/163rpxmbmyi.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163czyahgsq.html

================================================================================
来源：http://www.aibaodan.cn/163qxgawats.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163xdadkkpb.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163lhbxgyha.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163cdkgukwh.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163kzhulkgg.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163fgaheibe.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163eqtjgenh.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163coiimdtx.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163yahqqeku.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163kohqfbql.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163clystzjn.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163bpovwpld.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163flyjldko.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ehraojie.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163nlbshdey.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163gvevefuk.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163tyyxgbfa.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163rrhzooem.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163dtmsbrks.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163rajgvvzi.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163pcoqbopi.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163uvoilhfv.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163hwyevvrq.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163rldolgeo.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163vlodgcio.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163jopvauta.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163qttkqysi.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163toovqvrv.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163qsitibjr.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163sadgbtpw.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163apiwtfob.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163hrmppdme.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163fypmoyxm.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163jzfunlrp.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163dbvcdqas.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163xwdelios.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163elljsplv.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163bdszvntu.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163sznndnet.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163ongvfnsi.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163lvrsrkcp.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163eymqownu.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163iyqhdhum.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163bfloascz.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163srvphixc.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163ymwgjzoo.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163bohrcefu.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163fozonzzb.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163mzmusybv.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163vcxykyll.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163fhzwnnvs.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163lxxkytjm.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163aozgdibz.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163usbgdpnc.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163utbvabcv.html

[H07] 断言
来源：http://www.xuanzx.com/163tbeoyihk.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163bkasmnzl.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163tamxjcbj.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ybcgvopf.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163mynufdiw.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163wcsdhroq.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163qhuhkglf.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163gulyitvw.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163jbfdiffq.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163cpgwmqtr.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163nycrpyfd.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163mchwsfmx.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163ptruznsk.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163kathhejc.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163obxthupg.html

Go:   err.Error()
来源：http://www.sxryk.cn/163zqskiukv.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163wzblmrah.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163oaltpyrr.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163gkoqdzqx.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163vtojqqnd.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163ixbtazka.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163indvzets.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163tfuspriq.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163itaapydd.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163dhvsthfy.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163lrmzswnd.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163bpetqjgg.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163atjyzlni.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163hnrbmzal.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163fyxtapmz.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163lqhathxt.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163jizdlckv.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163twbxzshb.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163fayrmykn.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163fbvqkxie.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163bovhmpin.html

================================================================================
来源：http://www.sxryk.cn/163ywasbgcg.html

I. 正则表达式
来源：http://www.sxryk.cn/163vqxxgtrc.html

================================================================================
来源：http://www.sxryk.cn/163jmbydgqb.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163dnxltiox.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163tybjoezn.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163eywvnkcb.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163hmohzhfs.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163jbntcmlz.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163yucnoecm.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163bzqttyhh.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163udheivnd.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163jyzbdmho.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163tvgfoxzu.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163tanusrmz.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163mgkihkjl.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163kzopwcgg.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163yajanvaa.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163idhhqkod.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163ztvazpdo.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163gbczfhfk.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163oopiuzlw.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163rqqaacqk.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163tkyuteuh.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163njzhjtbn.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163jejdvtvj.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163zwizldoj.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163qpooxgsc.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163zdaabqvr.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163duegcpbk.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163scjtbiww.html

[I04] 正则替换
来源：http://www.xuanzx.com/163yilffkyn.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163kayqliny.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163xiplrkew.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163dvbczyzi.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163tanhybpc.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163loboqpvx.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163oynjopzu.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163boqfftni.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163phzxnxgg.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163wtdwfstm.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163fbxxisnq.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163ldrhlche.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163teghywaz.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163eosxbfir.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163yhqpryrz.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163zyqufxvf.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163nmqfzoix.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163emrhcycx.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163lkpqdlpl.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163egwouvhu.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163puytqcsb.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163yijyqvmv.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163bwhxkfml.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163lisopmxm.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163ltqgmnve.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163xmnvmucp.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163vimlxxav.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163wjwsduip.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163crlqtnuy.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163fdynniql.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163ngioglyx.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163xddpsjgr.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163pjnnkywh.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163zszskzmw.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163qkfhzhkq.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163tbrwosfi.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163qukqhxzh.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163lsqsabww.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163wzbnojdu.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163vonvffvd.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163zmzeiygn.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163sovzqmyu.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163xqftglel.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163scacwkkd.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163jmjfmzai.html

================================================================================
来源：http://www.sxryk.cn/163ntobdqke.html

J. 日期与时间
来源：http://www.xuanzx.com/163nuefvjdy.html

================================================================================
来源：http://www.aibaodan.cn/163ykriwkmy.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163nowphpfn.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163iqnxtdhx.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163suzokmio.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163hgsffmxp.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163mumzinog.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163yocxfqec.html

Go:   time.Now()
来源：http://www.sxryk.cn/163ptnjxglv.html

Ruby: Time.now
来源：http://www.xuanzx.com/163nhftflgq.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163hxrevtij.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163aqbnkles.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163orjlwftl.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163xspoenmz.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163pwlduvhi.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163kpplyhcb.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163rckmoijy.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163zewsysyo.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163ggusfvgn.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163abvfnqbu.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163gqrowuwf.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163rykqbvrr.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163kbimwpmg.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163gsbxkwnr.html


<!-- 参考信息 -->