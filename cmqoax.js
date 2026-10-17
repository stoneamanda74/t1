外链999!wailian999！

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163oewtfqwm.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163nsuaqsjk.html

Py:   super().greet()
来源：http://www.xuanzx.com/163hrykpegd.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163icgqxsmg.html

JS:   super.greet();
来源：http://www.xuanzx.com/163cltolnld.html

TS:   super.greet();
来源：http://www.sxryk.cn/163cxgfjirp.html

Java: super.greet();
来源：http://www.xuanzx.com/163qbbwoxwc.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163wacnhfxa.html

Ruby: super
来源：http://www.xuanzx.com/163ccgepyko.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163fmluihyk.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163oopvqckt.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163lcjosjrb.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163tmfmican.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163yznbderz.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163bqorshqb.html

Java: static void f() {}
来源：http://www.sxryk.cn/163qkteczgl.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163dmsxvbxe.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163ngjbglqm.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163cnvdlwxh.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163utvbxtbx.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163prnifzqr.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163fnrmvacg.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163rzgedsqc.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163zojkrjpx.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163wdqzrcce.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163hlidssrf.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163rizhrdjq.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163oqdftdio.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163kesipcut.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163fsdiidtj.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163ujtlwpgz.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163osloccjp.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163moxpseoe.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163tlgqverg.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163yhdsccua.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163vyidatyz.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163wyrbmkpl.html

[G11] getter / setter
来源：http://www.sxryk.cn/163bgfntfit.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163vohddvmz.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163ethpymfy.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163bzzqhbwi.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163voxqyprx.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163sxqphcqg.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163waimsnsr.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163zobmxttw.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163zgpxtqfj.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163fncmmptb.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163ayanulsy.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163xmgcjrny.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163qxsfiama.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163pqnpmdnb.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163fszaumwx.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163cfiylvfh.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163mnfnvsak.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163flsmzyyw.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163dedmcjbf.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163lafbwris.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163apopynko.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163dzllhxpb.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163ufecxcul.html

Java: u instanceof User
来源：http://www.xuanzx.com/163peenjrze.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163kxfxdscw.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163siilwqag.html

C#:   u is User
来源：http://www.aibaodan.cn/163ocrbxbjk.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163eilyuefl.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163ntqnuukd.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163xlsmfcba.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163umbkrtgw.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163ycnfmfxx.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163zuhvngdm.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163xdwobdew.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163ysfipvtm.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163gufvekcd.html

[G15] 枚举
来源：http://www.aibaodan.cn/163grykheis.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163bwmwwqth.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163ltxhmsau.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163ojfmcydu.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ntmmcmtd.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163vsyzkqkn.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163rrkedwnh.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163havoqawa.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ncdbiagl.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163wfbjhqir.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163rjgdbgey.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163iwbbbxcp.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163lctmkbzc.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163zqlnyyrk.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163ewgsoxlm.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163prrqbnso.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163udhqhzqh.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163nonsqpvg.html

================================================================================
来源：http://www.xuanzx.com/163fqczwsas.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163fjnbyghl.html

================================================================================
来源：http://www.sxryk.cn/163vvtsslfq.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163yhooilmy.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163qyqjvhgj.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163puiucsht.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163cayqqqne.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163ahnqnzgx.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163srvbckqd.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163leyksblv.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163jylvtzhd.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163hjkzgcsd.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163vzfdprfp.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163rrkmgvhg.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163zneziksn.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163avskatys.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163dusfsvzo.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163fzhscbze.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163expzegyh.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163lktigwuz.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163yirzokiu.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163rpatmrmw.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163dicsbklz.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163pxmdvfaj.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163glczssql.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163saykykau.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163spimcnqd.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163cumdgwko.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163shbndjdq.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163nqhlovae.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163pkqrcllc.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163aakidmdm.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163wmewglsv.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ltmryekw.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163fiffhdqf.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163xfetqozd.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163tdohvhnr.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163xdzwesvu.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163sixcdixt.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163jhmqldjf.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163qncgxrdd.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163znfgcivb.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163idpuxqza.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163yvpnzchw.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163hxdlowck.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163vvykkzgr.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163ordgzhhc.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163tcqanpxk.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163qaggazgq.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163uyyortog.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163fvdjlvne.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163mgofbbnt.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163txxgmhau.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163oyyeqtbe.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163hrvqnzjr.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163snhqhbgi.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163jyhzvdhi.html

[H07] 断言
来源：http://www.sxryk.cn/163vbzuwldv.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163xyhuiikn.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163xrxbfibc.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163haseoxvc.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163mwddueec.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163vlnxfwbf.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163izcohumf.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163jjbzxpau.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163napfbwfg.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163ampnlhso.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163jgfwxbyt.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163hfuifvbu.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163pzbbzqhq.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163khvtfwka.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163xtjxxwre.html

Go:   err.Error()
来源：http://www.xuanzx.com/163xyhinmtd.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163ikkfybza.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163jvitqruj.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163vgpvppny.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163zfyuqxfj.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163awdbcbcg.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163zjsegnhr.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163ujgnuyvq.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163gtsmqaiy.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163qovxqejs.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163dmicahjw.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163gfcldvve.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163xrpenrzi.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163qtjyapth.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163bqydilvd.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ehvaxkpq.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163iypliqtg.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163ebnrdzab.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163nqcztfvz.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163zjxghenf.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163hgqidvem.html

================================================================================
来源：http://www.aibaodan.cn/163wdybbnfv.html

I. 正则表达式
来源：http://www.sxryk.cn/163rxgewyll.html

================================================================================
来源：http://www.sxryk.cn/163neektumm.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163iwxdfmcv.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163pqenzhyy.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163vyvngqec.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163zaslakfy.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ozrokevt.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163shseevgf.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163jwrokuve.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163opsifnou.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163csffftfm.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163ccvtcbvf.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163fwuecvlf.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163zhpwuwfz.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163pjxdpgtq.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163otsspcil.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163cjqhaxpa.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163gmxoulih.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163wjyhcmhl.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163ismvhvof.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163evrnomyu.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163pisykkns.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163vwouazyu.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163rlobfgfg.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163vxbzzway.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163zbxuxibp.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163sddqrudc.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163thuhdxiy.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163paruufyf.html

[I04] 正则替换
来源：http://www.xuanzx.com/163nwckbqry.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163xdmtkdws.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163lgxenzze.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163tfddoyid.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163ltzdrmgf.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163jtuujfyq.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163tnypggmg.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163zbibwnum.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163btqnuyxy.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163jbkcuscv.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163vplmnvcw.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163pbvweurg.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163jzssabia.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163yayrdkjz.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163cbjedhpg.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163oqsyunyt.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ungbazki.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163posxsqnf.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163udqzurav.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163hohwsiui.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163upjfomtv.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163liemgbcu.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163wercmgad.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163qetnduqs.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163kwujdjwu.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163knxwupke.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163vfiznlxo.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163ccxnkrng.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163uhpfgmau.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163uordokxb.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163hmklpjgn.html

TS:   /error/gim
来源：http://www.sxryk.cn/163arwvydeh.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163wnhuzqsa.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163upwhxqxa.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163wvehxioc.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163eisnypzz.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163fumczdbg.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163vzniufpa.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163ztqwajos.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163nipwvjli.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163hmimszjd.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163qgfzisaw.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163dtlhqivi.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163nyjjxswb.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163hisrfslq.html

================================================================================
来源：http://www.xuanzx.com/163aowzyfdy.html

J. 日期与时间
来源：http://www.xuanzx.com/163aetfenjk.html

================================================================================
来源：http://www.sxryk.cn/163bmaxguoa.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163jtrynurh.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163tbczkfte.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163xkfliwby.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163igegmhtv.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163qiyaynhh.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163safdslcl.html

Go:   time.Now()
来源：http://www.xuanzx.com/163jjwhozcw.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163tiyfucbg.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163sxzfjhty.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163mtwwkhoc.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163apmhfgnq.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163horidrgr.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163sgkoming.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163pgghvkue.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163ontbghpp.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163sldhsqai.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163jebkqbdx.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163tbkmuqly.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163zjuztspn.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163sgvecpkf.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163ayottjwt.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163adyktdwe.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163lyqptuhu.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163mphmoexd.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163xjzuyywt.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163kluhtfgl.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163wmttpcrq.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163ixervgqp.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163vcdjyzzs.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163qvwjfqwe.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163meeuanim.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163sjhvrupe.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163smrkcjat.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163ojxjjnha.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163kznkzrvc.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163sdlkibgi.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163vqcffxzr.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163ygcouuqy.html


<!-- 参考信息 -->