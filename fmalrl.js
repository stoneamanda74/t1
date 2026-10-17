外链999!wailian999！

JS:   super.greet();
来源：http://www.sxryk.cn/163itxzzfmf.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163rvqkomsp.html

Java: super.greet();
来源：http://www.aibaodan.cn/163yvbceflz.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163tycfvkty.html

Ruby: super
来源：http://www.xuanzx.com/163axrlrphg.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163giimzdvx.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163ehdfkjic.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163dfbkrsoc.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163bstxyhjk.html

JS:   static f() {}
来源：http://www.sxryk.cn/163sugsreuy.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163dezheell.html

Java: static void f() {}
来源：http://www.xuanzx.com/163gqfmcbgg.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163hadsjiui.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163vneceawn.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163fsxdouop.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163ymcpzlkd.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163pytkphzt.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163hkmxxyag.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163qlhkuhga.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163wenzsqox.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163pjhecgen.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163bsbhiupc.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163zhazcxcj.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163aprirpkb.html

[G10] 访问控制
来源：http://www.sxryk.cn/163nsmfskoc.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163dclnttgu.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163ytktobpk.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163oufwhpnq.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163nzrimemb.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163cqyqzbrp.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163mdvsanmn.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163jotaxaog.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163exrkmpin.html

[G11] getter / setter
来源：http://www.sxryk.cn/163yxrbnvep.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163tsucmpiz.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163aitkqfuk.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163oyjguhcr.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163tiztnvsk.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163qzowpmoe.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163octnlcgf.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163qgwlwxgz.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163xnsbsihd.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163gxczxwch.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163znwpmtzx.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163tbmrzjwj.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163tdqqurlo.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163tghmgwft.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163btzvbhpb.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163nlrfupgp.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163dedwutda.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163mvdyaixc.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163dzwilhxk.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163hrazpyhz.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163nonstfhl.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163auiimres.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163robcilsx.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163jpdrfxvf.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163xkuzufjn.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163dlkvtucz.html

C#:   u is User
来源：http://www.sxryk.cn/163dzoznxjb.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163scnoybje.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163couhjqoj.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163ghswtbnm.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163vpdqstai.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163zfmzohvg.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163lvdcyaxi.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163dsmyzewv.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163ueezwgqo.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163hdqgimrh.html

[G15] 枚举
来源：http://www.aibaodan.cn/163hwasygpm.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163nhgdqfct.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163jvtdgajm.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163hguwojfp.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163jitlpwgn.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163lvxjvwwj.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163vnhzghef.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163cpwsxgds.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163skrvqqbm.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163rokabtwx.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163izuyqxnz.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163xnwjucfh.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163chsndglt.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163vnkyxyba.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163dlcgqbhj.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163psqspdcb.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163gmthciuz.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163gxmgbrfz.html

================================================================================
来源：http://www.xuanzx.com/163spnqzbvv.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163vgmrgxgj.html

================================================================================
来源：http://www.xuanzx.com/163cgafvzvm.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163wdvdybke.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163wflxcgeb.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163pmgehmbg.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163qwfkupig.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163pvovhahx.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163lnyboyez.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163hgjspwfh.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163ukizsmgd.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163dngfwvxc.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163ltzdsoit.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163jajqzzgr.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hphhqlck.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163pqamcisk.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163foeuavxj.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ujklezex.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163bnrxybsa.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163pzxpigzf.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163kxjdrevd.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163hlaocyzv.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163dlfaozds.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163cipcxhqh.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163eodqhgua.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163tojhsrov.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163gklrvlal.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163ycqdshii.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163xibkvcby.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163dgsnivyk.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163fnpspini.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163vaubnkzh.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163iotubqgl.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163qvjteszy.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163iptylxqj.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163gxpxgukl.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163guhcotdb.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163tyagwgnl.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163ekwurazj.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163ppjlxfml.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163fgdfucpg.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163gigzqhzk.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163cljxhumw.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163ltbjpbpz.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163ttjnmnyu.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163kxmgtlat.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163sqyagenr.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163fjrpisrz.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163afdupehe.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163fhulzqec.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163dxmvftip.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163qnkwtlpu.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163bfgfltbe.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163sghyaoah.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163oflkxjxp.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163hqiarvuq.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163pgbstcbv.html

[H07] 断言
来源：http://www.xuanzx.com/163krxfdlkl.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163rnubppiw.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163mhbwrbvb.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163hqnudogh.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163mnlxiznk.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163iymmrfrv.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163iarczaai.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163qsmtjgjz.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163cvlkzinq.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163rkfolynn.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163wyadftoc.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163fxdvkkmr.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163hglpckgr.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163ozizmcef.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163lafnrmil.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163ykixayip.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163rfvjimgf.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163bhrwgfze.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163azrxfwxj.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163iyfctpgu.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163lhqqjrxr.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163hobtqugh.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163dggfvdcm.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163tskbyxqr.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163eruwhxvw.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163nlrqjjji.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163xzeyyizb.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163qgvleoob.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163imubtxhf.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163vtstgddu.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163mwnptbai.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163slpbtwuv.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163pqfhlgqm.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163sgrheyvp.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163lnidrtgy.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163elbsjkhx.html

================================================================================
来源：http://www.sxryk.cn/163pvnhoqvy.html

I. 正则表达式
来源：http://www.sxryk.cn/163ehgruhpw.html

================================================================================
来源：http://www.aibaodan.cn/163xqbegoeg.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163nkjseqcr.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163hvkxazcl.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163divmlzev.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163tdmohvsw.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163edprstru.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163fvmhbwyn.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163aiuvmxka.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163lwgowyrx.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163lzjehkbx.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163pidvrjji.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163iucumvod.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163nvlqzwwj.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163nmvqhkqh.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163fbjnhjhq.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163osbjqwmb.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163osyrhtli.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163kkguarlb.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163rwxpmcxq.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163xgkrxmjx.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163eriuccmm.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163nqejdbzm.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163ntxkznme.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163vcsxkxid.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163gzsloaft.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163ezmxlzkg.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163aajjuakb.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163xrtgmshn.html

[I04] 正则替换
来源：http://www.sxryk.cn/163eojrgnka.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163wuubsdrr.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163cjroveer.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163miqhiolg.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163eeqbesgs.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163fegxisfe.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163tziyiycl.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163kkmhynni.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163cqcgvges.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163abqnudzb.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163xxjluaoj.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163yuzwwvgx.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163iultjncm.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163aodwwllq.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163bvqqldvo.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163zplkxpzs.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163idhicvfw.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163kkqcqjxj.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163hbhkvyat.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163tivszvcw.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163rgmykepi.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163htajbvex.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163yxzvwxrc.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163ulvahvji.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163bdptumla.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163uvqeuchf.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163udwwxlcc.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163pzifdifo.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163cvepoqtc.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163ddqervlp.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163umqydzef.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163akhmwdkv.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163syssczvx.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163pgotphix.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163ljwqlark.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163rurstgzc.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163zpfwqilo.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163qszveijl.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163blzcjxhd.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163wyuvvzvx.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163hjsdkabu.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163tcqaanii.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163cyymabyr.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163ehirqyer.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163qimjpoxk.html

================================================================================
来源：http://www.aibaodan.cn/163wsoiplfu.html

J. 日期与时间
来源：http://www.aibaodan.cn/163bmjkpiep.html

================================================================================
来源：http://www.sxryk.cn/163flvtcxaa.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163yzmjntba.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163pkcnavft.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163iidqorti.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163fgvvumrx.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163egqyhyrz.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163lmlwhyvh.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163yimcgpbn.html

Ruby: Time.now
来源：http://www.sxryk.cn/163seyjunlt.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163ijxviult.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163wpvuefwd.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163qbvzlsgr.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163dkyopjox.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163slgsprcz.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163pkuyejoe.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163ucluykpq.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163peuonoxo.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163kryihsvd.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163upddllem.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163sdulzkmj.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163qolurxiu.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163vfcbcews.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163lwzqnoki.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163eglmljkg.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163xjwhgqoy.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163oottkmhy.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163wkwvfkue.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163xhrzwjyw.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163gwmidwnc.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163uxqwztxb.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163swuxsfbt.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163ucpsashk.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163ghyqpwyp.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163qvuvcaep.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163xqwoissr.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163fphtmnnd.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163viyewkiw.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163oeghfsno.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163yhqfgdag.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163fngvuuxm.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163mlqrvmpj.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163dnlkpmoi.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163wvhblecd.html


<!-- 参考信息 -->