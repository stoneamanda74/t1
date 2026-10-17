外链999!wailian999！

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163ibvegphp.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163jtazlneq.html

[G04] 定义方法
来源：http://www.xuanzx.com/163ovzrhdcz.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163wsvlfuke.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163xoeapovg.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163uiydnaec.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163wisjsrvj.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163kvfdsmud.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163woeyybgg.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163aljewqlf.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163mvupqsrc.html

[G05] 继承
来源：http://www.sxryk.cn/163inysvbyg.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163cahbufci.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163varxyolk.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ueoznegw.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163weuzvnoo.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163vdupxkob.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163xhuhiusb.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163efnqakpu.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163vmfgqbdu.html

[G06] 重写方法
来源：http://www.sxryk.cn/163vznxydbr.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163seslvlvh.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163barrhjsw.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163ihlwrwrf.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163kdhfkaot.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163dswxprgv.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163lwaiayja.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163rbewrcdx.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163mqbjednx.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163iesqynvw.html

Py:   super().greet()
来源：http://www.sxryk.cn/163jrlocypm.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163ybucecmx.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163xvrjmjmj.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163jnmfloqo.html

Java: super.greet();
来源：http://www.aibaodan.cn/163vcbujite.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163jlnppdlp.html

Ruby: super
来源：http://www.aibaodan.cn/163djrlnecq.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163gdljynas.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163jzsgxltu.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163nfxvkjuq.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163eajsizfk.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163micwkncc.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163tsxtryqo.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163avturppy.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163fyzslfgs.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163lkverscd.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163gcfbodvp.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163zjjyxcer.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163pngivzok.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163bkrkyfww.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163qmtmpgai.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163enqknfrg.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163pvvqbpam.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163suwaaamv.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163ufqbtqho.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163eqrnsiys.html

[G10] 访问控制
来源：http://www.sxryk.cn/163nqtrsylz.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163mthjxkvh.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163ronpvkjv.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163qshxhgeg.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163idsxppts.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163wyrpgajy.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163zdpbttsj.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163nmtdabpi.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163thyugwch.html

[G11] getter / setter
来源：http://www.xuanzx.com/163qzyxneha.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163eswaaxpd.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163fyrqjzzm.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163dsdwkshb.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163ltziqlsr.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163gkncgvts.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163tuadxkdr.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163jifxqwno.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163vxsxzfbh.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163fdyylvft.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163rtlbpuvv.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163hrsyyvpo.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163gthahnnd.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163jhfkzebs.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163ijtbxknq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163prpgbzig.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163saferyle.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163estvubhj.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163dloruiua.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163nqguezgc.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163nfpbiayt.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163vkykvsqy.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163dinieqyq.html

Java: u instanceof User
来源：http://www.xuanzx.com/163olrjrotq.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163xehfvfkj.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163zdvejpkj.html

C#:   u is User
来源：http://www.aibaodan.cn/163likhvimn.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163zfuvfdio.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163lzkcnpxu.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163xiogiscy.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163khwtqugh.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163apkcsgzp.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163awsahnkq.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163hrxdfykm.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163vgoiaapd.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163kkxjcurj.html

[G15] 枚举
来源：http://www.sxryk.cn/163rckaoiay.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163gifkjslq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163qcwrhuki.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163ohtybdmd.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163xzrthodw.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163tzwheuro.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163tfrnoasx.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163fyhksgjp.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163lmzkglyy.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163gjotoatz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163qeotyoyb.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163hpturywk.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163iziwybea.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163azpnisgb.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163yihktklq.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163afitlcna.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163cifzcafy.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163xevntjbn.html

================================================================================
来源：http://www.aibaodan.cn/163btxfgnbo.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163kyemwqpl.html

================================================================================
来源：http://www.sxryk.cn/163ufwpggtj.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163dnanecta.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163iftkcijf.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163hqvfeebf.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163icubkuvx.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163ydfoydkp.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163temjqccv.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163ddmvthjn.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163ppujezra.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163orbozeax.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163smayolwz.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163rynkdynx.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163lhmyaqem.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163bxbeyugg.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163gavbbhhv.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163hiqiiqyj.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163ukrtivnl.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163rrufdakp.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163ahtwhrie.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163wqyklifi.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163glhhupvm.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163vmflejfm.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163zczfbrtv.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163quheozzs.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163xmzbyquy.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163pyebubks.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163llogpkra.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163scbybyto.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163syzeayai.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163zwaghhvl.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163yksxuvcy.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163gtrkgitb.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ybpxjmjx.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163jtvgqdhf.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163fbcppyzd.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163rgmiybtc.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163clqdnvfg.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163pgpcszjy.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163cwffdxnj.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163ksbbhxba.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163tgpnkmct.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163xaxckvbq.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163oivhemhk.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163rxtexzhs.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163jtctkzgm.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163trpaijze.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163rjbtrpku.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163ldbffzcs.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163fjjwuwui.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163uigxeogi.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163puchiumg.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163nghqjosx.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163fjqyugon.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163umhhdqgb.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163seosctgt.html

[H07] 断言
来源：http://www.xuanzx.com/163hrfnfcmq.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163sheagrku.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163vjusxjjo.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163tvrwnpfp.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163haukwjho.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163gvjwevzm.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163iluvcvrt.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163pmftymbf.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163yqaolovg.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163dyqgemmz.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163eqcisiah.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163xskwtdti.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163dmpukcqm.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163qjpdcddz.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163weuhmntz.html

Go:   err.Error()
来源：http://www.xuanzx.com/163apelebuf.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163gtckwfuv.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163wwpyzajs.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163fvaydqby.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163akbggtxv.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163gmukwwmq.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163sejmtfrt.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163snvmjgid.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163rupjeejd.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163kirztsig.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163xepqnkle.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163wwntzwfm.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163cyvvhpfq.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163jitelgwu.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163maboogsn.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163qvcbeyqa.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163xhbmsjyv.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163aaosndbv.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163muzcoxfs.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163gfucodhs.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163vlkchkmf.html

================================================================================
来源：http://www.sxryk.cn/163mziqrdhq.html

I. 正则表达式
来源：http://www.sxryk.cn/163rnjcgxbi.html

================================================================================
来源：http://www.sxryk.cn/163fjlhrxxr.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163tztkozmu.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163jdrxjnzz.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163oaqpuhiu.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163jmzlvagl.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163tjkgshhn.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163ivncystn.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163gdrtliyw.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163sydwzkvs.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163wdgkpygc.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163dftiygfd.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163gveaoyan.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163eruanmhv.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163jfswgbup.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163rfkronyq.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163wciednlf.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163vbreujhv.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163qzohulau.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163cclgsjmw.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163cbomwabr.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163eiomuiwi.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163srjgkdue.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163lpzkpfyk.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163hjpzwint.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163eqctvxvr.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163sipcajud.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163osmvkpod.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163uageolon.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163mshauzcs.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163fkmirvxe.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163zycxssmf.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163mljofitw.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163ameyaivc.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163anbjufbd.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163kejefjno.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163srnqjaez.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163oiecevwl.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163hchdkmsp.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163dizcahsh.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163hblyxhhm.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ppsqmrgy.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163kjrhhuxr.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163xjqwxbjn.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163sfkeekvh.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163vghlllxc.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163hhdusilv.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163sbvczbjk.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163shaypeeq.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163gmbzcpad.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163jruivizk.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163uldoxpij.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163jbdqycbm.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163mxwkyyny.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163ksfmhwlg.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163rpuufbbh.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163pvwpmign.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163etvfhcho.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163zfhngoel.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163ogojjuzs.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163qtbjwliw.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163ikvrheqe.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163npwuxqmd.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163swlsciei.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163spttpxba.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163pktzkxub.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163coeiowej.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163nvgrbuxo.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163pofcjtml.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163octkbkns.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163bxijhohk.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163qwvmpgei.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163plegexfu.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163lnqtuzrv.html

================================================================================
来源：http://www.aibaodan.cn/163ncjppcqo.html

J. 日期与时间
来源：http://www.xuanzx.com/163akihsuwj.html

================================================================================
来源：http://www.xuanzx.com/163ksbtkvlp.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163skyxwqlf.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163zzifzolp.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ypnlwgkn.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163oyneqeku.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163qthipxug.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163qflmfjwr.html

Go:   time.Now()
来源：http://www.xuanzx.com/163qedsavnm.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163ehkgzwwl.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163bhitpysj.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163vnswjstn.html


<!-- 参考信息 -->