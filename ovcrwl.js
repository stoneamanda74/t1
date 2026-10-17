外链999!wailian999！

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163cyfxlzya.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163yrvltete.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163lyyqsroo.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163ztrhkyop.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163ehtnlqmy.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163hgcpkzye.html

Py:   super().greet()
来源：http://www.xuanzx.com/163anmkkwtf.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163efuyiikp.html

JS:   super.greet();
来源：http://www.xuanzx.com/163lzjknkzp.html

TS:   super.greet();
来源：http://www.xuanzx.com/163nzgapptj.html

Java: super.greet();
来源：http://www.sxryk.cn/163rbdynynm.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163wwvvulun.html

Ruby: super
来源：http://www.sxryk.cn/163gwekrcxm.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163njjrtyvs.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163aglaxful.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163nzznoxpv.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163jmyadbkn.html

JS:   static f() {}
来源：http://www.xuanzx.com/163dleaeoco.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163awxrxxmz.html

Java: static void f() {}
来源：http://www.xuanzx.com/163xkzctgro.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163chambnaa.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163rywmbzjc.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163ftkzeraa.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163sdzwafsi.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163vdyysold.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163fsfssxdh.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163qeyfclob.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163cutqnnsd.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163lujspqgd.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163mjkykriy.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163zkvcslfl.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163pnnjlfxw.html

[G10] 访问控制
来源：http://www.sxryk.cn/163ajbglnom.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163mehhhkna.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163piyjjyxa.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163fcxxykqc.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163knmpnneu.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163hdxbvzwj.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163bcmtocea.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163xpsvwkor.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163axutpsun.html

[G11] getter / setter
来源：http://www.xuanzx.com/163uwkldddc.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163lmcmsqcp.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163okevgktv.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163wjkuoqpy.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163wzyauszh.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163nwpbcbhf.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163cphoazje.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163avgmsllk.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163cnpymnlk.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163bapmwgua.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163tawfjllz.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163flsbzqfn.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163euzolwtt.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163umnigomu.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163avxsxmox.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163ftsihxeb.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163mhoybcob.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163qrlpntqq.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163kcatpmwn.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163hgnpidmi.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163mxtuypgz.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163ufherdto.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163pnfinyhi.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163xnpbkgnp.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163ncxfgccp.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163rcnunrqe.html

C#:   u is User
来源：http://www.sxryk.cn/163lnqewytw.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163bpbgaghb.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163jdqvnahh.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163uanumbeb.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163eoambwbm.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163fpfovwnb.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163fbcfesis.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163wvonfjhu.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163mzplfowo.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163xjnzwzam.html

[G15] 枚举
来源：http://www.sxryk.cn/163tuuindkc.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163sohzamon.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163xupfpogx.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163ilpjzayv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ddepyjwt.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163svzmsnaw.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163zccjejzz.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163cedyvrhs.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163aviyuedr.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163eqeygrhw.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163ylgieici.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163lyksnqct.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163rqrxvaik.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163uweenkdv.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163wtszvhxp.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163jxhfujmk.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163jfjdspcr.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163nrabbmff.html

================================================================================
来源：http://www.sxryk.cn/163vmhforxz.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163hfhbkoig.html

================================================================================
来源：http://www.xuanzx.com/163hcdawxxe.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163fkdkwinm.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163hpvvseec.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163krkqnpcc.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163hccfhpyk.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163ondavbha.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163lrgqqbza.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163mohzwdzk.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163ppqiemxm.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163fftazpfn.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163syqwqcol.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163pvwahrck.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163seubipbn.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163opcjzmjs.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163lmdvyfde.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163dzltflsr.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163rkejakde.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163avtjqcbg.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163nbxdcasr.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163wtsrvcwo.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163tiiryzis.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163cdfarada.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163gljrpdzi.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163wfozfuax.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163deeopmvn.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163kqptuiqn.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163icwxnslq.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163mgbbpljs.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163gpnjeuvt.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163jjfowuhs.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163nyhjmepx.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163nntzvjyf.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163hyytoipl.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163rgjzuluv.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163rsoltepy.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163wgvfctnm.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163rfvcugkw.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163wccwqnkd.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163tnyfhacd.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163xlyksjgk.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163noxtfgld.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163pbwwnjdj.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163tdrehlht.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163gaehnpjf.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163uzsqjmfh.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163syzcfctx.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163ffoengaw.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163utcytago.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163kzsxrpqn.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163dfjxxxtw.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163nqwoqwmv.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163xdyddmjl.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163ixiawiwi.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163uuprfsdg.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163wamsowjb.html

[H07] 断言
来源：http://www.aibaodan.cn/163bondkvch.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163vmiomtdo.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163broqyifw.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163vxunamtv.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163fcqwvnml.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163zziaglcp.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163oekdctar.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163ofazlufg.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163ubouruiw.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163gvwsxytn.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163dypcsxiy.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163irftuozd.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163osraoawb.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163awnexply.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163yjkviqua.html

Go:   err.Error()
来源：http://www.xuanzx.com/163kcdkrwjo.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163kmmifexl.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163gobuapiw.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163vdaytsoz.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163mzkgvkmn.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163bknquuhn.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163qgukdukd.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163zbhjitqn.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163dcwfktxi.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163oggdamim.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163qwbntbdr.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163lzegjjgy.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163xduphigb.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163fdtcjwdh.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163atxufegy.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163rhlzpxxw.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163pgugtspu.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163wnababzv.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163guhelusv.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163ntgqfprc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163tcrdwwbl.html

================================================================================
来源：http://www.xuanzx.com/163djaepcho.html

I. 正则表达式
来源：http://www.aibaodan.cn/163jtfboshp.html

================================================================================
来源：http://www.sxryk.cn/163jxcaxmzx.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163dtufjkxh.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163xgrkfaer.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163hkzarmut.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ezeeoorj.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163vxcircio.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163awbrzaup.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163rqbhuuph.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163ylglwedp.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163tgxpbxul.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163aripcusz.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163adphenkv.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163sclmsrvb.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163wwetiadl.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163wvbmdzof.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163mskahvsp.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163zrqyubmw.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163gqtsaqzo.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163cdmiofuy.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163oawxojfa.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163hkjcofri.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163ifeaowjl.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163hluiogdu.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163lcpusrqd.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163tiohsjnz.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163ehtwvqht.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163xtrmpbxd.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163apfhmlyj.html

[I04] 正则替换
来源：http://www.xuanzx.com/163mvmzhiyh.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163jqxktugt.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163bbqkavhd.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163cthlodfs.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163bmhprodq.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163iyavrfgg.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163bcrpzidu.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163vruxakrh.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163fkpkibtk.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163asxfwola.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163dpxqpyhm.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163lpufbrae.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163sjotqiwg.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ofndflvh.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163wbhqjafd.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163wecsvsfb.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163bmkgukys.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163bfoddukl.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163mvgpgrjp.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163cggbperm.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163zwqeikvu.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163clegeioj.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163enyadsre.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163rcvbysqi.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163uoeoetgr.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163rajgoalo.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163nlbbescd.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163ujqcdyxj.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163itwemqqi.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163vjufpkur.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163yibrtsfo.html

TS:   /error/gim
来源：http://www.sxryk.cn/163jpwddiww.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163vdgeknca.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163xmcghfog.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163hvhghfsu.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163njxnkjrz.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163rhhhxudx.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163habswfng.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163pebtgjsr.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163lzdrtscl.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163tfhrviwx.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163ixxhtzvt.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163hvplcscv.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163wyljmioq.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163smjdoulx.html

================================================================================
来源：http://www.aibaodan.cn/163zpyefjaf.html

J. 日期与时间
来源：http://www.sxryk.cn/163ctctwhit.html

================================================================================
来源：http://www.sxryk.cn/163nrhielsv.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163mvyvglrv.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163cnxtcrhi.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163qqvqdkhj.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163mijfxxkf.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163qzjtywnl.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163qsnswjyo.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163llwhqxcr.html

Ruby: Time.now
来源：http://www.xuanzx.com/163gtnvpddx.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163hcbybmju.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163lawwasos.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163jqsksjld.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163huwaxnyw.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163nzbkafyd.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163nvpcvhkw.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163xvnxbzvf.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163btjfnlmz.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ayygubgx.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163atsaskbs.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163sbdafiyq.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163hudmsjwl.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163rowbvjsk.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163pnhgocuy.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163egyyxsha.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163bqyanvwy.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163kuazphdb.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163rfkaehqv.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163eafgrzgj.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163mwgetiow.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163xxjciwel.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163oraawkdp.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163ntuuzmtt.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163gzoqxlap.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163tznjacgi.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163vwcgqdpk.html


<!-- 参考信息 -->