外链999!wailian999！

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163fyguwxuz.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163ksgveqyu.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163cndubwvr.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163giqmkwsv.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163rfstgrje.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163dwrozkdg.html

Py:   super().greet()
来源：http://www.sxryk.cn/163lhncejnf.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163yrmqjouk.html

JS:   super.greet();
来源：http://www.xuanzx.com/163tpprsrln.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163nrqdunfz.html

Java: super.greet();
来源：http://www.aibaodan.cn/163ptwbqpeu.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163hvxpcyvl.html

Ruby: super
来源：http://www.xuanzx.com/163awoaxooy.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163lekemopq.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163aijugphl.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163dtnkerpf.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163fdkwbgxz.html

JS:   static f() {}
来源：http://www.xuanzx.com/163isznmguq.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163bsuyrgqx.html

Java: static void f() {}
来源：http://www.xuanzx.com/163nykwfndx.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163bnrnjcjb.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163bbpokzab.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163irdgvckj.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163kksevogk.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163cnttqzhl.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163jcaeoobl.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163yjlgvadi.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163kytkfdct.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163ffjiztsy.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163fxbvxyex.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163vicjkflh.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163tccliezb.html

[G10] 访问控制
来源：http://www.xuanzx.com/163dpnniqak.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163ixvqgejq.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163crymddqf.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163rmxsvgla.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163cjvgggut.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163dgmyvaop.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163kchldifn.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163xxqnnofq.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163hrbgiyxt.html

[G11] getter / setter
来源：http://www.xuanzx.com/163sdbffguy.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163swmwowvk.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163dlshqirv.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163ruteegbs.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163ivkibmrt.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163ophleoxx.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163xlajgkbv.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163zypofzlh.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163hmvlbyoo.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163wowkupjo.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163ibdbxmae.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163umwrffhc.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163bzucyuqo.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163unfpgnuu.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163jfklzuxk.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163ucyzkixh.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163aaposemd.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163djnovlst.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163idzfxlua.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163peclwydm.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163poauwiqs.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163conjfjnm.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163plbrgtbi.html

Java: u instanceof User
来源：http://www.sxryk.cn/163sikuzutj.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163fwdauslk.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163voihvaxm.html

C#:   u is User
来源：http://www.sxryk.cn/163mygowvin.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163pwcswjyu.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163jluizmes.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163kdiduurq.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163vgyznzgn.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163bqgdpcmz.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163fxbczlve.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163xlevagor.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163attgrtwz.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163ledsaapp.html

[G15] 枚举
来源：http://www.aibaodan.cn/163ejdravyd.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163acpgxvgh.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163yfqjlnsp.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163khteioeg.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163btpyjysz.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163ftyruukz.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163ewfmgqyd.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163laflkrrk.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163kwcdgfew.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163lepakbna.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163iffmfyyi.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163mmvjbgqd.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163gepquykh.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163kwvupnxx.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163bileitjj.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163zbwfsbei.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163kjamnwfa.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163waqmvirj.html

================================================================================
来源：http://www.aibaodan.cn/163kkbnukua.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163tlhumgjz.html

================================================================================
来源：http://www.aibaodan.cn/163iumfzrfa.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163cjgqflzc.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163vtwkfsnz.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163svprafft.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ywmpmdxl.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163heibbkgw.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163gfyphgnk.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163agyasggo.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163istvjwbc.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163owobzmqk.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163yrlbjuov.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163trogeoyd.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qsszxqtg.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163gxorxrvt.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163dbqatugc.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163oxgspvwd.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163umklnqyu.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163gkyucrrw.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163tlttnugw.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163uihoossp.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163gywlwexb.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163dfrjxnyl.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163eztqzwdw.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163zhjorkgv.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163sfokdewy.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163pxlthiov.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163vbqgensf.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163yekocdjf.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163ftmmujmx.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163etgkpyjg.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163jjtnllhn.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163laiegegc.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163pnommxrs.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163sgornjts.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163snotqbyo.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163jcllpmle.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163tnuegkhw.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163bxdbzrzg.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163pzywdadf.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163fgzfuewq.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163rjtabadg.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163anpzvwos.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163fwswkxwl.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163rjejncqq.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163fvovntvl.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163ztrnjmbu.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163ouffajmq.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163cwhthwst.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163gltibfkf.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163zcwllmdg.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163nxozdksi.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163gmjgbama.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163ngdkhzqh.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163vmebxhdo.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163yvrlbksk.html

[H07] 断言
来源：http://www.xuanzx.com/163frqaejcw.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163ivjprmaw.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163isptygtl.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163zuzkhwgq.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163oowwftje.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163kaazoxyu.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163uzgbtfdt.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163swrnsouo.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163oigjogay.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163hvurgjpe.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163gormschf.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163pcolaidq.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163epvhvakg.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163tuzaowwv.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163urcevpex.html

Go:   err.Error()
来源：http://www.sxryk.cn/163xicmzbfg.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163amdyzvzo.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163fnedeoix.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163hlsotqvv.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163gkvpcbjf.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163rkoxprxb.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163eewiczjo.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163wtmhdmer.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163qoeuawil.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163irpxbunv.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163emjtftlk.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163ufkulgdc.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163iikbdczj.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163smbnublg.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163bbozncbm.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163xeklxsyu.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163dcwymbzo.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163rmqypzeo.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163gosfwtcx.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163gcbzmgch.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163jfomiwvl.html

================================================================================
来源：http://www.sxryk.cn/163dxpiakoi.html

I. 正则表达式
来源：http://www.sxryk.cn/163jibawoma.html

================================================================================
来源：http://www.sxryk.cn/163zjlvqbpi.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163ohbsblhi.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163ggaeigxf.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163onolcxuv.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163rmfgmega.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163nifptgbi.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163dcofqtll.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163hspsvvlg.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163vzczqwvx.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163syvaneci.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163yqyxbtfo.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163ryxsikgk.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163tmbjtpmh.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163ekgmkupz.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163axtgqivt.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163pumrmlsz.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163ixsnflkv.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163ymldkekx.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163gjfalppc.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163lscrlnyp.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163xofhlqxv.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163reltjqgt.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163pcobzkob.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163alfplekl.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163bzmtqmat.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163udcviykm.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163ptgelhhw.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163lqalncgx.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163ziixboez.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163vxemodfr.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163yffircyq.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163lwfkcbfa.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163xurlebyk.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163fnllwwjf.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163qqtwwnve.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163ngghqpol.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163iclugtkj.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163ddepywyv.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163nfmnmega.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163zvtfguuh.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163jayraucl.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163qbyewjrg.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163yctstdgo.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163yjopdzvq.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163epzjmyks.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163ayydtbeb.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163kwdgixym.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163seubsojr.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163casecfog.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163vxkzkbim.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163mzqlvvvm.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163pdknrtqv.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163hetaaadm.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163cmrnxeiz.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163tjmhluns.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163ehoeudpz.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163prdbentt.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163suhvmyia.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163zanktjgm.html

TS:   /error/gim
来源：http://www.sxryk.cn/163wuyqdgry.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163qhzelsbb.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163jbiufwcw.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163homzdonk.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163gkjnqoab.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163juidxwwv.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163aoesmcjg.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163pjjlqali.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163dcdwhtgo.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163abrlkoqn.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163cnnrqtyb.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163nxlbmvdg.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163cpqvhnct.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163uhbzjdna.html

================================================================================
来源：http://www.xuanzx.com/163gydmrjch.html

J. 日期与时间
来源：http://www.sxryk.cn/163nhvphjmi.html

================================================================================
来源：http://www.aibaodan.cn/163fzaifwks.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163uqidsdcn.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163uyiligil.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163vrebrvhw.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163cshxqlar.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163pwzwfyll.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163puvrvyuy.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163zzhpkmkh.html

Ruby: Time.now
来源：http://www.sxryk.cn/163nxwrmseg.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163squdvjgb.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163mnpylajo.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163sdokyxhl.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163mzjchako.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163jzrrdjpl.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163clqwllzf.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163tdslobbd.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163iwhbkfps.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163inbtorhv.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163hagpnyah.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163ahxtaiip.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163dtoiyqwy.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163kmaeogwp.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163pjokpvet.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163jkvuzkzk.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163tbuxowys.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163bwuzkuqt.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163kienrjdv.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163mdgpcdqk.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163oiqkqyjw.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163hizltlza.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163rhukmoed.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163xqyvsvps.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163ytcqyvsm.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163bvrtbrvh.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163uomhgeih.html


<!-- 参考信息 -->