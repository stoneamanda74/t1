外链999!wailian999！

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163elgqgrqe.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163ddbfibhc.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163symtyccg.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163cmgebfei.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163ysuynure.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163ihjmzxwo.html

Py:   super().greet()
来源：http://www.xuanzx.com/163pbcokxsu.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163wbxwbgim.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163hfbhtlmz.html

TS:   super.greet();
来源：http://www.sxryk.cn/163xcfdsqor.html

Java: super.greet();
来源：http://www.aibaodan.cn/163heufrqmh.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163odwkamfo.html

Ruby: super
来源：http://www.sxryk.cn/163rzbrgaxp.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163ewclaaqi.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163fswystcb.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163xjmlwscs.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163kqjpifck.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163ccielcmk.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163nmlgmhxe.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163pzlckmgu.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163eyyesktz.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163wcgignyp.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163hiwbqiam.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163qqhdrnxh.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163pquvaxuj.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163ksadokjv.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163lzxwnhtx.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163gnfhvuwb.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163utgwsimh.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163sqkycopb.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163eqkpoanx.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163etoaltkq.html

[G10] 访问控制
来源：http://www.xuanzx.com/163erfebnnf.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163ogahpmdf.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163xnygrjyg.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163wyehoqce.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163wnkzoifs.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163gzrgrcgn.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163qmbgdzts.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163twhjeujv.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163lcbfbsci.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163ypclhcgm.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163qzbmyknx.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163rnqydfio.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163jzxvxcqd.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163jkbajtlm.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163dhekfway.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163ldxvgqvm.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163ubusllvf.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163uvgjuxyy.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163lbqzteyf.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163mhrchcxa.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163zgdbdmko.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163qkhxzwfw.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163knrkasqw.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163nldvqoaj.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163qbczyuzz.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163damodulc.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163xtcqdsqn.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163rrgimpyv.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163gpqmbyav.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163dshzbsfs.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163vibthjvl.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163vvnctwhy.html

Java: u instanceof User
来源：http://www.sxryk.cn/163xndrouzf.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163qnainkzx.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163tgcdglbt.html

C#:   u is User
来源：http://www.sxryk.cn/163tfwkoues.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163vhydmeib.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163qiredcym.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163ddovikhy.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163lrgspkci.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163mequpluw.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163kdeucofy.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163ctvdkypk.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163nusecued.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163jkkmvjfk.html

[G15] 枚举
来源：http://www.xuanzx.com/163grjmqlyw.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163jltykbge.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163tkegvbsf.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163jpdyqtxm.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163yrzyxodb.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163spqfczhr.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163zjzcjqwi.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163ajdlongk.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163bvlacida.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163zlgcewaf.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163sqfwydjp.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163prbdxcpt.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163gddobxhs.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163tigvpbdw.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163ochygypc.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163csbflzua.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163oubhjokn.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163cvrrasic.html

================================================================================
来源：http://www.xuanzx.com/163afyiswky.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163hkmoegis.html

================================================================================
来源：http://www.sxryk.cn/163bfkulain.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163badjfdaz.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163cesjbqjq.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163gcruvvhf.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163fgnsneuf.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163zhxgrcpp.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163kefjzdgo.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163rcqizyto.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163trnirmbj.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163vaxnasua.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163zkcypguo.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163jxkjbfjd.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163nwrzjbdg.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163iwlgkttk.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163urtccttf.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ecukaswj.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163gfeihvqe.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163xtnqaavu.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163zxdkbmyj.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163wfloghfn.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163ydihehuf.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163nmdcokht.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163igbnwcyy.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163uluehwyr.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163zcmfrdwj.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163obaqsboo.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163xezigdkj.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163copvnhpo.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163aohhmbvw.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163yrbkfyqt.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163bxfkrvua.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163dosqnfhl.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ithosufp.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163okigybtz.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163lihycqlf.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163cqihuseo.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163hbsoolkw.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163wczbqeaz.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163bmcnpfoj.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163zvvzunzr.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163wrqucjnv.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163jkmfywed.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163egmrhurw.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163tphfflqv.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163kjhigyvb.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163afyrgvwo.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163heoybcyy.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163garjgwst.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163snqyqjyj.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163jywfrcwx.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163vzkifgot.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163oplijwfi.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163xzeubmxd.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163ggupwmvs.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163vdvdvlti.html

[H07] 断言
来源：http://www.aibaodan.cn/163ogbgwjer.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163xseujgiq.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163zgsjftzz.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ivxmabzj.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163qpnvzbgc.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163fkgoskjy.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163yokcemuw.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163sodazxln.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163thqzozzg.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163uvepkoiw.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163alqpzxjq.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163xbprkzbr.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163iaeodqde.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163ihwzsxmk.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163jyjvfyfs.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163ozqiawzt.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163takmbwbf.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163nlyssqyn.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163nsqqqyjs.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163swcbgsog.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163orrajlgz.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163qrapoxdw.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163hjaicwur.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163ujwfltol.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163kewbdgpr.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163hnotgfyw.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163khspitde.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163qvtjmiik.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163hgxudzhw.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163kcdrpqta.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163wochzvko.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163qkadzvyz.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163lhmqelfc.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163csaxjgnn.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163bnayfdwu.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163ouwwppsy.html

================================================================================
来源：http://www.sxryk.cn/163uqowtbrs.html

I. 正则表达式
来源：http://www.xuanzx.com/163erjcnosn.html

================================================================================
来源：http://www.xuanzx.com/163anlhjiyd.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163sarlkmer.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163juvgskwm.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163ddsmfhai.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163xusjcxqs.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163welltqsc.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163dfussksp.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163adcrthet.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163qgeqsgvd.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163qlidvpso.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163viwmvjlb.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163kystvbeo.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163aueanicb.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163erqdawuw.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163iqvttxhb.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163rawqetym.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163sxcejrss.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163fhytdkra.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163erwykzfl.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163nszcxwok.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163pegbmqjv.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163womklldg.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163eznosqoi.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163zpnczhuz.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163pakgicia.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163gktdutaj.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163nugpplbb.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163esmkziyl.html

[I04] 正则替换
来源：http://www.sxryk.cn/163dvmwvgkp.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163mmlfgbds.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163bwysnhhy.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163ktowbfdi.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163kzoabuif.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163mooivius.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163nbxkdbme.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163ixkjuufx.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163ytxndrzt.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163moblmqnz.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163hfwdrzps.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163jcoobjis.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163xhylcyqb.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163mzrjkfiu.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163ssmxcdyj.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163yqrcghrq.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163gkpjrfwb.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163inlxmtfz.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163vjybsmxy.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163rqvlnltx.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163uobglwhb.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163meknyrhp.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163zciugsoh.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163tgouuysw.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163pcbrxkzw.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163znsumrae.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163pxofkoce.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163ebadxyrz.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163hgussvjl.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163ksdsqaoe.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163gbsayaqh.html

TS:   /error/gim
来源：http://www.xuanzx.com/163kbkxvnlx.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163yhfyfnle.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163xwlvryxz.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163pghgufih.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163bftnxchm.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163omnnhcuq.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163bllsakuf.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163yenjvkxp.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163citjozfu.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163evnfdzob.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163qcawlxne.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163htmumnub.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163qjqagytp.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163yrmrfynw.html

================================================================================
来源：http://www.sxryk.cn/163mqypnqxe.html

J. 日期与时间
来源：http://www.aibaodan.cn/163cktytwix.html

================================================================================
来源：http://www.sxryk.cn/163azgpegzv.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163rktexnrj.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163oaotwphm.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163mwrnkwba.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163qpemdgtf.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163waumaipf.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163eodfrmwq.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163byoveulb.html

Ruby: Time.now
来源：http://www.sxryk.cn/163axevvwaj.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163tmjimxmy.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163zfdwfnbd.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163axjqwhsx.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163heiuifzj.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163sqstiwds.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163umcmcsym.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163kxjlejos.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163sfeiistc.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163ptqiwefg.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163uujzvmlo.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163tuenxjzo.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163qlptryyz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163hrdzigji.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ivgocosg.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163fliirovd.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163vxfwadsx.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163qrmpivlw.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163jxevvkgi.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163wrscmavb.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163nfeggzfy.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163ycrzokeb.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163lxgpygco.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163dxtoldsw.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163xquxppiw.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163wuhwaxlw.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163pxwrithg.html


<!-- 参考信息 -->