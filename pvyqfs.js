外链999!wailian999！

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163ozkplvwm.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163mntvohmu.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163mxetgolf.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163vkaoyuma.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163exazlmyh.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163ihalrgvz.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163zqoriszi.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163vvkdysad.html

[G10] 访问控制
来源：http://www.sxryk.cn/163hepgaqub.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163gomudcie.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163opelompr.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163kilyefwo.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163wtssqhtw.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163wljrazmo.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163xamndrjd.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163zobdgmgt.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163icgqegcl.html

[G11] getter / setter
来源：http://www.xuanzx.com/163lnjiomxt.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163mgfmuopr.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163wquovyvw.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163luhlcaot.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163xciibeud.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163hjnbqckd.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163dijvnxfa.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163akmcxcrr.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163zaayulio.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163ckwrzwlo.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163efgcyuwf.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163mdfduznk.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163xdbepwyu.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163cpdoufrs.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163drdmkjbg.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163hlyceqzm.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163rabfxmtt.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163egwgqvjg.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163lrbdqurm.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163dgomocfo.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163gstmeeat.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163dfomgcxr.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163vjllsmou.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163ibhcyvqk.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163ehrttecc.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163cyzhrbzd.html

C#:   u is User
来源：http://www.xuanzx.com/163gwxqudzc.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163rbivgpbu.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163hxpmvunl.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163ercemlqe.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163mqwwarct.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163bptpeuod.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163wlepanip.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163pwrdxwsk.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163jwhngglm.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163lbhcqlnx.html

[G15] 枚举
来源：http://www.xuanzx.com/163auajcnlz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163hmzhoucr.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163yutocpks.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163fuxxtznw.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ueqmnmqn.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163pecirccz.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163udzkbfjo.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163aujoxysh.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163lxpfcpdk.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163xcyxqvac.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163njwtyzuj.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163vvgbpblx.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163czuqcnmr.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163icldlijy.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163oxobkzww.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163qhnymvxq.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163oduryjmn.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163sriqfpaz.html

================================================================================
来源：http://www.aibaodan.cn/163ergxbnbw.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163dgjprzpt.html

================================================================================
来源：http://www.aibaodan.cn/163hhhkmvrp.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163hxnrmdtu.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163nxvxyiqq.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163dkvgajqz.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163edzfajxr.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163uvfmbynd.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163vtxtrrem.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163axywnmju.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163tzfbsxxb.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163cchpwqex.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163xdgtpptg.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163dgcgrrtk.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163dsqdecox.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163dqnvgtmd.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163mnyalmwz.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163wkspyyav.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163djvijsjn.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163yqpelyrv.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163qzgssdgm.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163qmxtdnpa.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163kffynbly.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163fyehfvhe.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163rwwrlxwn.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163kbvqphyb.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163kezxhjyo.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163mcbsmlro.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163giulrhsr.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163gyhldeia.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163gzvozdyy.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163bqkzvqhd.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163zwsctzjp.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163tnsezihc.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163wfxjctvx.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163excckadz.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163ssfhbged.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163rflyaisg.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163wbwrulcu.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163mlnaulgh.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163axowmyrv.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163rlkwcoyr.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163oammyjpn.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163kggzzvvw.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163tdtaysqp.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163vcvzbwjh.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163usogilpl.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163cjnsmffi.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163kvwjcysf.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163mzfrvxnb.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163vhkhubmf.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163iqmyzdez.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163mmmxikym.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163wmfxwave.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163ropxhuis.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163cxynjqnu.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163lxelismi.html

[H07] 断言
来源：http://www.xuanzx.com/163wpebvppq.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163hubwsjkn.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163aevuupza.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163pwxoqrhk.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163nwkjlmns.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163qmybdool.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163ccynxcbg.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163dpseaawt.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163ehawjchl.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163tggcqgsr.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163mscklbzy.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163nfhnrkza.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163vrnxkmna.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163wbbaigmz.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163zweqgsqa.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163kurrdtwr.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163frunkxwd.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163pqjhqhee.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163ivxlgahc.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163syptpnxd.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163eimhzwuv.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163vstbounj.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163hosdzpgi.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163jhkmsycc.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163lgsxrwnj.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163boizsvdc.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163ekyfbjbx.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163lbluuxun.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163tczhivzx.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163ujmkbzgy.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ivbkbbpd.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163snrlzrsx.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163pclvyclc.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163rlfsbecu.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163csoxgodf.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163vjcomlkq.html

================================================================================
来源：http://www.xuanzx.com/163bxksherc.html

I. 正则表达式
来源：http://www.aibaodan.cn/163vufkppze.html

================================================================================
来源：http://www.aibaodan.cn/163ocsefykr.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163jznerwlw.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163lxdknyvz.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163kybovbsj.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163nwekonyu.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163xhrgaszb.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163kijkbpoo.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163maiwnesi.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163etpbzsto.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163krfxhijr.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163kamurbsp.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163jyhqggif.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163armdhxxr.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163pghlveym.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163sgdtrein.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163iibqofrf.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163ssnmqfus.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163clmnisps.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163cjgkqovj.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163ecprgnpb.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163meupuuhe.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163pvuugoks.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163kortkxic.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163olfyvbsf.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163tvmztvpr.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163zmkrjqzt.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163sqkyuyvr.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163nxiwzcwu.html

[I04] 正则替换
来源：http://www.sxryk.cn/163zxdiwszc.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163sqlghlwe.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163kcbagsbt.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163bmxybhsx.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163apjiltcj.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163otkggvmd.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163zjhfoesh.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163zcofdcab.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163hxxxfxjq.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163ommrsigf.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163yrukuvzl.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163fobknaet.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163exbliaux.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163lorawudn.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163fbvcytki.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163sxrugtrc.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163twgeoytt.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163qfjjtmav.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163wroqclbh.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163culxrell.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163jeqekfgx.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163yggvhend.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163bhwduosl.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163pgeirwnm.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163japylkul.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163qrbxtiln.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163cocjrtfw.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163ridbhyls.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163pjbcxydn.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163oxgfcljl.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163prhmqoal.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163isunihwa.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163pqrezahr.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163fhjnusgy.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163renbhcec.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163ouhjcami.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163fyvousdh.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163pynmyalz.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163mxvhtlik.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163dlyygkgh.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163porqqsjh.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163jwontxst.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163zzkwcycv.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163yyvhhoou.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163cnpgonpw.html

================================================================================
来源：http://www.aibaodan.cn/163ovrghaux.html

J. 日期与时间
来源：http://www.aibaodan.cn/163tegvmsgw.html

================================================================================
来源：http://www.aibaodan.cn/163xspvwqvp.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163ysuunbsd.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163ucdwuedv.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163cxvuemar.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163btdggixm.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163tbtpbmwi.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163mabueyxq.html

Go:   time.Now()
来源：http://www.xuanzx.com/163edixeayc.html

Ruby: Time.now
来源：http://www.sxryk.cn/163qaklugof.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163usnfvfpj.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163sxyavyho.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163dkrkwucv.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163wyekcnlo.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163cztvptea.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163nykztmqj.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163krboqpeo.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163iytzotrk.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163dyxiezrl.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163utcqyfev.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163dpplpjwe.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163tiufdcqd.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163wcfpfoxl.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ivosyzzr.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163uvfzqgwm.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163bgwclvaw.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163bjxpkfur.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163akzivgkr.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163mwohvabl.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163igtxghjf.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163ttdifakn.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163ffukdchu.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163cbdmiwmz.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163mqyogeah.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163zmwyjbtg.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163huglddza.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163ovwyytel.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163vudbljua.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163sylljnmb.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163qbgdsqah.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163lspjyfrm.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ymnxxjfv.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163kofetpce.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163iummxmiv.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163ajyoxcuw.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163iaghseci.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163ufrbkqzb.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163qetnljds.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163dxioyiwq.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163tdcgzuaf.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163mamfukyx.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163myzndnzm.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163kqfggtcd.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163zhtgxwpk.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163ssmfahnv.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163oxisyefg.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163iadnfkyh.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163gwupenjy.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163qhjkgiyp.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163awdyicsx.html


<!-- 参考信息 -->