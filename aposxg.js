外链999!wailian999！

JS:   super.greet();
来源：http://www.sxryk.cn/163txrbktke.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163wlzsydnx.html

Java: super.greet();
来源：http://www.sxryk.cn/163vxlilfqv.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163ggfydprx.html

Ruby: super
来源：http://www.xuanzx.com/163vptnbuwd.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163nqooyumh.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163hnrkddui.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163tcqvfojl.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163dlqzrbhw.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163wjrdfdhi.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163saoojkdc.html

Java: static void f() {}
来源：http://www.sxryk.cn/163fvkvbudh.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163fkqasjpo.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163lfbhpbbg.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163rhanhxkh.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163zvyvwnqh.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163hgzdocza.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163hluozctc.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163nizwiaup.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163cqwgnqvn.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163lrgantxe.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163tdrfamej.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163pvrjhsgs.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163emqfydjm.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163riubdgtd.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163mxfqugqe.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163lkmdxvei.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163ewkszsio.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163eyqtytbq.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163xptrswss.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163vzaklccw.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163bhkuqebv.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163emybcirc.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163oxanpzbd.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163yqtbpdfg.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163eamiflyb.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163cdcggzpp.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163wndtpmeg.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163droadeaf.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163zyvmdsto.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163rvjhgupr.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163usanurrk.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163wkcldrxh.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163npcyaqos.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163sitjayik.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163jvbswivl.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163vwgfkngm.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163hywdhzsa.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163pcpdswuk.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163rgvfruvo.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163hbvpahag.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163yikexwss.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163jqvukjdv.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163nactpcaw.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163ncrlhvnq.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163hkxkmvrj.html

Java: u instanceof User
来源：http://www.xuanzx.com/163lcwhzxrr.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163vfqdlnra.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163xkjmlpid.html

C#:   u is User
来源：http://www.aibaodan.cn/163cacscsni.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163wawkxdrt.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163iekrtvxh.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163umphltfd.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163sslvlprt.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163mlqyxksh.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163cmghxcgz.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163olurjcot.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163igpttvvo.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163ycwngnho.html

[G15] 枚举
来源：http://www.xuanzx.com/163zfbdxvmb.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163yfoioquq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163snllnkpl.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163srqpidns.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163muugkdbc.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163qpdovwkj.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163jpammler.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163xwxvdxqe.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163sxavgeht.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163raqhgipc.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163deobfaao.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ygdtfcon.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163trinpnnn.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163dpspvejw.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163czhfzjfc.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163syxkbjtb.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163gljjmihu.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163vjmhcekj.html

================================================================================
来源：http://www.xuanzx.com/163cnbsziuw.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163wkovwvmk.html

================================================================================
来源：http://www.sxryk.cn/163roktctln.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163xdrbkigf.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163nbldwhqr.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163tynqxcjw.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163bqdbbefz.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163qkienmto.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163llmwtlry.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163jaehvtag.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163ezhykciz.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163jtyxdulh.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163hxgrhbdl.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163inloiqwt.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163cajyqday.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163fpsqmxco.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163bhhjnqln.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163flauwgnf.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163zhytoddo.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163fgyakdrc.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163veleaxjv.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163mnitwmyk.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163dgiviakx.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163wwnprtil.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163kjjtixwg.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163jbeumgvo.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163dxvxxilz.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163ontmixud.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163mqabkmoc.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163lkrgvfys.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163eqaratwa.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163fjfjhfoz.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163nxhxhilj.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163scxrnssw.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163wqubimds.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163gmsoyqzb.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163xbuhgcxv.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163oabkdjwc.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163feofqpjv.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163apzmserm.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163gltyumdj.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163cuzhfojs.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163dfweqkjc.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163hwyzupvz.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163rpnlvnls.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163quupivrj.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163tselqyma.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163gbkeezvb.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163wjyvlbrj.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163xgekurdy.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163muchduap.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163hvhvbvmh.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163vnjmncmg.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163qtayascw.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163bnunaxfq.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163ajxgkvvn.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163nrsrivum.html

[H07] 断言
来源：http://www.aibaodan.cn/163lyogokax.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163dosohlqa.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163qflmbumq.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163vumqulwe.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163husggfhx.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163sebjqnwz.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163nsgjzsxk.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163lkvqsysl.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163sxxufgxe.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163fimadvhp.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163grxqqqep.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163cqyuhdcy.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163ospqwcxk.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163epjsowrz.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163cdhtpviu.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163xehenjmn.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163ucistmuc.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163kaivyvui.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163qcwxzgwd.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163mmhwroii.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163rgtbtlea.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163uoyhlcar.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163gftqlexq.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163vtifdjxd.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163tdzqyfkd.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163qsqvlnws.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163owiaofdu.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163isbfyxvr.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163kjnrowgq.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163glhjwxus.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163okuerdqf.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163dwdypsvt.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163uawoidoc.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163zylzeeco.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163phzonmir.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163albgsaxy.html

================================================================================
来源：http://www.xuanzx.com/163uvhdkgyh.html

I. 正则表达式
来源：http://www.sxryk.cn/163seirfonf.html

================================================================================
来源：http://www.sxryk.cn/163tcdpiuhm.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163bolpgzgd.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163iegkwslo.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163heilbetq.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163uefugoxz.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163fgctdtxf.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163tccdocux.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163ecwrwdky.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163ckfxlbza.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163wpydrjiz.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163uysfhllt.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163nmrzolxo.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163wqleaelr.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163flpnkqid.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163qleeddpc.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163yyoioerx.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163outxlood.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163xfodjzie.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163dxnzwbke.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163jyrahtbh.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163vpopcrig.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163flgfwaco.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163xwejhhlx.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163yzhdpugw.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163pxpgxfna.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163wwlfqhkn.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163zqtofxet.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163hbxncjvj.html

[I04] 正则替换
来源：http://www.sxryk.cn/163rmksxxod.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163drpbbjor.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163tpjxuqsu.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163fhzeczcy.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ypiutggy.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163dalrctgh.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163bcjfmtfd.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163ltudivxr.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163dwmtmbtu.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163tvbymjtw.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163ebjhfnfa.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163afqwgnii.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163bywqmmnq.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163hjmzewgl.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163zmcjbgla.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163vciunagc.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163sotxzsha.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163cdopdchc.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163zpzkwbos.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163fdfwchcm.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163kvlsrxsr.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163akfnaafq.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163qnfvucoa.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163nfcwayvh.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163syxinujh.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163jdpinepe.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163rsccnukn.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163urbeyxjf.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163fnfsjkrn.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163njmooebs.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163errzyfjj.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163qxgwuzuf.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163cwioctiq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163sjdufrey.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163vvilgpyd.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163ijuhnmsp.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163lgxmchuw.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163pieavebu.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163mgzzfzjd.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163huqcqzeb.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ebfehbgm.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163fsfhzvhb.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163noqfoqdw.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163moykayti.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163keakvqii.html

================================================================================
来源：http://www.aibaodan.cn/163jizfabhb.html

J. 日期与时间
来源：http://www.sxryk.cn/163kujsnijs.html

================================================================================
来源：http://www.sxryk.cn/163kpptvlsl.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163bbewoung.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163lqqrwaki.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163pbemutah.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163tjcdegje.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163xhsntsmr.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163dciuhafk.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163sdczsqes.html

Ruby: Time.now
来源：http://www.sxryk.cn/163jyzrmthb.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163ulnxgvib.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163aocpmpee.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163wqlvpaub.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163degvbmlw.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163mgvmmbpf.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163ienwqxzo.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163sfadebhr.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163gteolowi.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163cprjdjyv.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163nzyoejpe.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163hutniwfp.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163hllgpdat.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163lgkkozaw.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163nzmjpxqp.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163cruhjpof.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163yyifgqls.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163hsnpguto.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163hefslkuu.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163preelvnw.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163vnbrgdog.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163inehfhkd.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163vnmkcmii.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163zhpbiyeb.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163pnenggxn.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163baxrpcbq.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163qqrhlhkt.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163xatftepm.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163ttslaspq.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163elikefwf.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163srztysvp.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163vnelcfum.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163tuljavgp.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163fcbkzdvn.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163tsfftyny.html


<!-- 参考信息 -->