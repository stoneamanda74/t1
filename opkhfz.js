外链999!wailian999！

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163mvspajdy.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163whqocgkf.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163ddkslxzm.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163pswirzuf.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163niifjscl.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163uqcjgshr.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163ygxecbba.html

[G05] 继承
来源：http://www.sxryk.cn/163ymherprr.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163nzswmreb.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163pgwrjbmx.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163nnwyeorx.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ihguxfjp.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163oinmwqgc.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163lbkzrbup.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163pziacvba.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163kddcxujw.html

[G06] 重写方法
来源：http://www.xuanzx.com/163etzvceqd.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163qnkmgbwb.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163wtpzrjoh.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163gtadcmal.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163uftiahyp.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163tdivinhp.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163lwneewhy.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163iiyzftix.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163biunwovc.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163rxshnfyu.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163tgbhyssm.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163yzctooqq.html

JS:   super.greet();
来源：http://www.sxryk.cn/163jrvbhnce.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163kizutbbw.html

Java: super.greet();
来源：http://www.aibaodan.cn/163eakvxkqa.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163wydfbsfh.html

Ruby: super
来源：http://www.xuanzx.com/163vblgetdd.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163bhpqlkir.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163pnurjmnc.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163noxptzis.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163nkahkmps.html

JS:   static f() {}
来源：http://www.sxryk.cn/163iaiqhutd.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163mwaoibqs.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163eobsgphx.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163glulaeun.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163ynkqvbtj.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163rkjrvssj.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163ifhexbsu.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163vxzngvfu.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163olxpfyvc.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163bufkvlsv.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163vnjavlxy.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163jjktksln.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163dplfnzcg.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163lddxyyzh.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163chrecqei.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163lbyannvn.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163fujjmbvv.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163zqurruaa.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163smdhsfmz.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163grktbzss.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163eupsvtjq.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163jmzxoncy.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163vuzdkjkt.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163jtdpjvyo.html

[G11] getter / setter
来源：http://www.sxryk.cn/163cwoagigu.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163kkczzxgz.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163mszdqvzf.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163iccoxukg.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163kjjgyvet.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163edwtooma.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163oigntmix.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163ejriswyg.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163fgzchtwu.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163xdhbzaum.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163wuhrpvwt.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163ugmshfyh.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163uvviiyge.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163ljvuyxhv.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163rqsusonm.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163ywznrgfo.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163httwztkp.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163rowdmobh.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163zvmtrvkx.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163tncuyvja.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163gxdvllra.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163rmoudcnw.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163dkhdlmmo.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163dblboknr.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163derplkvv.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163zvrunkdn.html

C#:   u is User
来源：http://www.xuanzx.com/163xihcfdzx.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163clipbkaf.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163rskdpotr.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163ivgrqtjn.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163xljuixqh.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163facecljc.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163cotoawwr.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163uddrevwu.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163jystmxuh.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163rppbxork.html

[G15] 枚举
来源：http://www.sxryk.cn/163nxesmyyy.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163pndzsuer.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163wclstuic.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163qojdjupm.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163aqrifoeq.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163gfrwwssa.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163sfcizmsa.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163ztcwloox.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163vtaciykk.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163artzpwji.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163ycgrhcjm.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163apdmvfog.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163bjixswch.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ynlxzgsl.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163edaqprru.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163akttcrkf.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163urxlwnjs.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163alhkikin.html

================================================================================
来源：http://www.aibaodan.cn/163ykkvghhb.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163wouumbzb.html

================================================================================
来源：http://www.aibaodan.cn/163navwayes.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163gsaimbyh.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163nvjkhefo.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163hafsgxvq.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163pycdnfyl.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163osmphmst.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163codbnvuc.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163vjwozgvb.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163mhuamlvw.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163ucjtpkjn.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163alcksyaa.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163gsjszdna.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163aaezvido.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163pxdzccdm.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zhwruqmh.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163pegkgebi.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163qvfbzfdn.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163eqxjpxnl.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163daomjhwr.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163idgistjs.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163immchynf.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163ghidhiaa.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163qidiwdzf.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163flhtmbuu.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163lxaxwljk.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163dapcjste.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163witfvjog.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163arpffnbr.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163upsabwae.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163qibakupu.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163vgsmcegg.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ygofnuhi.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163rkxsbhhb.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163pmfhdbjc.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163oepbxphj.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163yapbfjbq.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163acfeqtvj.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163doldkhtz.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163ibxicjzr.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163aaruhnzu.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163ncbyneac.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163xlzlnlwk.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163crtrgeyw.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163ygkzemrn.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163eevsjklv.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163ywfycgvt.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163hbxrgirr.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163spadnnnz.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163anuufcbn.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163vhrwmohy.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163zgpyjawt.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163afbfnjis.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163lxewueqc.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163muoaoprn.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163lffpbgqv.html

[H07] 断言
来源：http://www.xuanzx.com/163lgxfpymw.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163vwkrrzye.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163aahejpvu.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163lhxbkjwm.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ofqgcnyq.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163lsjoxmzf.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163mmgqticr.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163ptainvug.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163bqqcntee.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163luadbkxu.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163xwafbifn.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163kdprpwmn.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163cujuitwl.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163hipedzbj.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163hdfsjlqc.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163qrxciccz.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163zzzxustq.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163qkaifxkg.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163enkgmhyw.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163gkqnzqjf.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163thbrmdlb.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163plvdsftb.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163xticvvwa.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163vgqhinyb.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163zwjeaujg.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163bdhroomr.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163dxmxuwjf.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163cjzjtpql.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163harfwdke.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163yexynmhc.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163xrfdcmkn.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163kqzxrafd.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163moowegxg.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163inmaxyxp.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163rvyxcflu.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163etpgsgmr.html

================================================================================
来源：http://www.xuanzx.com/163kavkmgyk.html

I. 正则表达式
来源：http://www.aibaodan.cn/163zsdebelp.html

================================================================================
来源：http://www.aibaodan.cn/163pnvjafbx.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163ifhbotob.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163dwiyolej.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163turoidpi.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163mitgpgul.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163gqwfczak.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163cvkzssvg.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163sccxerog.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163hnsbuamj.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163wvjomngm.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163unpmqjuj.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163dyihtrdm.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163crdvaqas.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163yvnxdlgw.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163qvqlvbhj.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163ugoyjnfy.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163zmxfevji.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163jhwbwgcw.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163aybrfrub.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163pardtoaw.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163dgzupesl.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163twznycuk.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163alkxgdhm.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163veocpvxl.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163oymmjchq.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163gjmkweda.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163nnffvdpt.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163ctpzznvw.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163buhjtwas.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163zacanxrp.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163qwrrizgh.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163xjccvqav.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163qhhskmje.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163opidehuk.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163yemdqrle.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163wmxofoij.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163olleyicb.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163qodzpyjh.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163zitmxlor.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163csjtkyvy.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163nljxadkd.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163jbyijmsr.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163wputezto.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163nmhdfgbn.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163knjsrros.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163vjnwfxgf.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163mukirkwt.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163agnzwhwx.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163ujlzkuwf.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163liddbtqo.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163gvupuhaz.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163apffffxp.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163kphlligv.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163rakvwxou.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163efwfafwn.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163xchrthdg.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163xentonkm.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163baaeuxpn.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163nhkovezm.html

TS:   /error/gim
来源：http://www.xuanzx.com/163amrzbbvk.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163pkmmerhy.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163rllcstvg.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163tvtjnayq.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163mlpkrzun.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163pdoicwtl.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163lfejtupo.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163apimcosk.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163edyqsgzp.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163cbnowokd.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163xcebqsfl.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163xyivizzt.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163zrkocxjo.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163mzuopkqk.html

================================================================================
来源：http://www.xuanzx.com/163vjfzamrx.html

J. 日期与时间
来源：http://www.sxryk.cn/163ojrttomw.html

================================================================================
来源：http://www.sxryk.cn/163ytvbsjya.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163oxscgdro.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163ryajjetn.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163iytwbtgm.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163ymvnzvbp.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ifuctsxt.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163duyrfbeb.html

Go:   time.Now()
来源：http://www.xuanzx.com/163zlylbsav.html

Ruby: Time.now
来源：http://www.sxryk.cn/163hhxqcbhk.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163asouhtdi.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163chfnceot.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163ehpjoryy.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163hmqxluhp.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163styrjgvx.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163pbavqofp.html


<!-- 参考信息 -->