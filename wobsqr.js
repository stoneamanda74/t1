外链999!wailian999！

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163ypcquzqs.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163mxnmiqfu.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163vvottwoj.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163vcugvxht.html

[G06] 重写方法
来源：http://www.xuanzx.com/163dtebikhh.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163tcchaovf.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163mjmyhdmj.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163slzvemiw.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ukffdgvu.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163iozbiopv.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163hpipnmen.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163uhswfavq.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163mznnhmas.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163kowzasyl.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163mpestlnc.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163rsyoryew.html

JS:   super.greet();
来源：http://www.sxryk.cn/163gdlpuilm.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163vodauxct.html

Java: super.greet();
来源：http://www.sxryk.cn/163mrwyuozo.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163eizdaivp.html

Ruby: super
来源：http://www.xuanzx.com/163sgboevif.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163sinzsndc.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163egeoqlov.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163dcegxrrv.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163alxzujhr.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163rwalfhtn.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163frnysrnx.html

Java: static void f() {}
来源：http://www.sxryk.cn/163fyrhrnaa.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163aoqillki.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163jnyfpctp.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163exnytmsd.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163kruxgkgs.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163xvxwuejx.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163ccqrgvdq.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163alwnntbz.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163xfzvrsnp.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163txndumuz.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163ixqifaql.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163yhqmogkk.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163zpwpfwji.html

[G10] 访问控制
来源：http://www.xuanzx.com/163ohuubpbj.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163thxuxhln.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163khvhvytb.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163gjuzhoyn.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163ljnsivbg.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163tefjmofi.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163qgnejpya.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163rquzmfkb.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163iqabutqm.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163pgoknqed.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163kinuvdti.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163tdhyvumu.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163wtgrnlae.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163hdtxvukn.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163dwgzxnur.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163zqhjodpf.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163ivxyidyq.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163kcnpudin.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163ntzjrtbi.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163hkjwtjbz.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163wxlokvit.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163ougkqkcz.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163eeyrzuae.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163dalpmlvn.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163fhhiffyp.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163vrmnrfmp.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163tlcsqyqv.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163urnqlbdy.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163vhnxmwie.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163gatzxlxw.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163ziowquub.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163papehbbl.html

Java: u instanceof User
来源：http://www.sxryk.cn/163kvkjcfdy.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163gxvulhoy.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163ivesyjmz.html

C#:   u is User
来源：http://www.sxryk.cn/163lgobluma.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163aiqdjvny.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163wbakwbea.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163qhaxdmjo.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163vynhapay.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163rrdrcbaf.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163ixrayrwl.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163sjyzsgsa.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163qbxderfy.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163yqiosble.html

[G15] 枚举
来源：http://www.sxryk.cn/163wrxozoyi.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163bxxtptlh.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163azgcvjgh.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163ecfxdtmw.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ckhvkbof.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163czikrrys.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163qhxomcpg.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163vpzbrmnu.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ghdbwonv.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163cpiquwdp.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163bftdxsfr.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163nmqudntz.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163dpzfwasz.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163dvlyarqq.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163mdbiyqvr.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163jnqcjein.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163yplvrsel.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163fnbdywif.html

================================================================================
来源：http://www.aibaodan.cn/163nlqzerub.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163xfuwtmbi.html

================================================================================
来源：http://www.sxryk.cn/163ntfhcicd.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163gjklijau.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163bcxzagns.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163wybgynvf.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163agzbppps.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163wakivquo.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163irjecgyr.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163pwedwipi.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163yzybexsr.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163wtzbsesp.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163vgjvbtwr.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163xoojekql.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163dqnzcuef.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qurxrwag.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163brgwyqld.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163nvsggucn.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163gokqplsf.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163zbfoaoiz.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163rjjlppfc.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163rfjjqidv.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163vqebigrp.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163qxyxwgmo.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163ijcxzuzf.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163mohvmfmq.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163xxsmllab.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163qjlrwsno.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163ybutninp.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163xumvpnwk.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163rednftuz.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163tsdnqywm.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163nrlrsttw.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163rwutttdu.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163hfghylwb.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163wbrbzmyc.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163ozriqghd.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163mjimdhtu.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163ijnzujgo.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163pentwgad.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163lspmlrcd.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163shwgkpxy.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163fcnradmi.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163qndbvvvi.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163qmwpuafz.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163cmrnnvjc.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163qghploxl.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163yqriavpq.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163biykqimr.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163lmsyekrf.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163ohtjtzlv.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163pnekvjhs.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163jrzuncdm.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163gcpbrcyv.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163rjgbqfxt.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163npwjorga.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163qpwaotrm.html

[H07] 断言
来源：http://www.sxryk.cn/163iepqbmhk.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163ocwgtogn.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163ipcbjxnk.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163xqxsblmj.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163etebgdld.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163gauagsyl.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163awvhmftw.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163bctdczxg.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163opanlyth.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163iftuaghy.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163ccmqetjw.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163hposltza.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163qndoldcl.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163zlqmbnee.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163gbjqeutt.html

Go:   err.Error()
来源：http://www.xuanzx.com/163jvsvauhp.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163aqbuxpvm.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163ckupkolv.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163xkzdmbdl.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163hrgjlksl.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163dvbmybdc.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163whjlozny.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163xdskowmo.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163laoencun.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163lwvbfyss.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163cnohaujr.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ctrcoaaz.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163znohdxes.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163yyvydphk.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163nzokatsq.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163zrahchep.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163lvgoxxbl.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163hgwspnfz.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163sapbszow.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163ruwozpjz.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163jxpppbkw.html

================================================================================
来源：http://www.xuanzx.com/163smopbcqu.html

I. 正则表达式
来源：http://www.xuanzx.com/163qcinohra.html

================================================================================
来源：http://www.xuanzx.com/163xjqzpqrt.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163lrzhnbhv.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163tfuoafzf.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163tymanrzh.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163loijbela.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163wtcordbo.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163zvwwxrxm.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163gharruuh.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163pvblywxm.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163avjijhdg.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163fxwicuwk.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163awkwbkcv.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163nbqaiwjo.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163nufcibon.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163zffzrusf.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163gedjcoix.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163crdbruxw.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163jtrovqnz.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163uvhfioob.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163pqcibmbo.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163jdfklmqo.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163ukgiieqr.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163wxnrxlox.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163zfeybaqq.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163kfwxnupo.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163rzlrxzea.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163rcthqvff.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163ongquvxd.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163ggqssnwf.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163bqgoayqr.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163ruzthkkf.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163oyuctxec.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163wgkqafyv.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163fbwhuimv.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163auiomflo.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163oasbftan.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163wwniqzeo.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163qfdaskbn.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163hrasthhs.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163szkepogy.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163wotlogrg.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163xdmfdhlh.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163uzvoqgyo.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163mnpvsnib.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163wayeffxd.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163eddtfjrn.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163ynyzjyne.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163mdzpolhh.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163eupguhvg.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ukeazqit.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163yizaruoy.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163jghbtsvo.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163bafxchal.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163woekgpbs.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163qrupxgvx.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163oubimjqh.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163uzzhburd.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163pwcbuubr.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163gphlkqlf.html

TS:   /error/gim
来源：http://www.xuanzx.com/163tzjrbnqi.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163pdrtmmwa.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163khiqpgja.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163minbfeqq.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163rgmtpuhd.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163txchzjfq.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163zviwypkn.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163vuzclxym.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163hcpzmjza.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163nbjwkszg.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163gyhquodi.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163wqgeujnp.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163pwyzroab.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163xwqbjwgz.html

================================================================================
来源：http://www.sxryk.cn/163vzgntxyo.html

J. 日期与时间
来源：http://www.aibaodan.cn/163brwcodrb.html

================================================================================
来源：http://www.sxryk.cn/163tpxmoxlx.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163zzhywiiw.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163yoreittu.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163gnliozjb.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163mgebwfjr.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163bquuoate.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163wiwnkmiv.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163wejhtwrw.html

Ruby: Time.now
来源：http://www.xuanzx.com/163itfuwwzv.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163bddjurwv.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163rpzizzke.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163arlibbky.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163crawvamn.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163iyxehdcj.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163ksxtsdnk.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163pztxpqjm.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163dkzvueps.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163vohiyvkp.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163rakcbuav.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163cqlgrcmm.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163nrlkqvts.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163occnmocx.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163sbnznutx.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163jjhumzod.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ifsmqefj.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163hrqeoqgc.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163eagrrwrt.html


<!-- 参考信息 -->