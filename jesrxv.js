外链999!wailian999！

TS:   public / protected / private
来源：http://www.aibaodan.cn/163dodqohvm.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163cgoguwai.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163wurgxslo.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163rilzfckf.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163yyrwvchw.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163xjokwqjv.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163ngdhpgzt.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163tknjvhdo.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163iqnzggrs.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163seliitdn.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163swrhyjor.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163ssdgfxdw.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163kwwdrarr.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163nxibzxfq.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163jakexjma.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163jilempgx.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163tilxeesf.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163fbwopziq.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163bmdwyqef.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163vamavjmm.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163ppdzxfno.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163fdldbrta.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163qxozzzrl.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163prcbugwe.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163gftuhtcp.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163trxkeceh.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163fuvxnash.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163swjcockz.html

Java: u instanceof User
来源：http://www.sxryk.cn/163sujgedsp.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163qsxfzlya.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163tytwcbdc.html

C#:   u is User
来源：http://www.aibaodan.cn/163fvtbywwp.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163nlzhzykd.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163hwtupbja.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163euyobwoo.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163bazbcyde.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163hwfkvpsd.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163esoahnof.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163vppdsuhr.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163wzczsxmi.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163glybhmfk.html

[G15] 枚举
来源：http://www.xuanzx.com/163nmzpvgxs.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163plhxjtge.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163qqmllxme.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163sysoxnlb.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163uvzrgyqd.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163rbxldyec.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163vocdxhrx.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163zdzlqhip.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163gpuxsaqt.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163ocmhgykt.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163hbuwkwer.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163nobjsmiq.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163mnvsseeb.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163skdonzcb.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163dbsqtnou.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163dlctjoew.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163rimtglhg.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163jiugnevw.html

================================================================================
来源：http://www.xuanzx.com/163zjhzbzks.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163lmeyoseg.html

================================================================================
来源：http://www.aibaodan.cn/163zpqywmyb.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163wcxfdhtx.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163uolnkqmn.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163fqzlxmih.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163vfelxrfo.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163eazzzjsx.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163mgknzqgd.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ubipjsxd.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163udamrzvd.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163xgziagsq.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163yfgoivax.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163ghsbiabi.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163bjzdoncx.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163dfswlhpp.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zpkautej.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163euaogqom.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163pfhuxqwv.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163jfnyfxuq.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163jejtrdyz.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163cecgikug.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163xvadannc.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163czbkreet.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163bvbrtygt.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163brrqjcpn.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163drdbzduq.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163gyaeldmo.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163pmwwnjcx.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163dciznybn.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163qxtobgke.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163lazndrmw.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163icdmwxqv.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163nqtnpiot.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163egexcwoq.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163ufpwmelt.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163omjerqid.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163rlitoqgk.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163ekchokcy.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163ympvlufs.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163rjqkmizt.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163yzytjrws.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163cyocwnbv.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163toswvfmv.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163kkscuhle.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163unhcmoth.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163sdgnzkab.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163drjzdvwi.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163hblsbvzw.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163trjtqaph.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163tbhoexqq.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163zpijlxwr.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163audlzciy.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163guliyddo.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163alhkwcfe.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163ldjktltm.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163maookeza.html

[H07] 断言
来源：http://www.xuanzx.com/163ycexzcrm.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163rnqrjomz.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163cpmnpewe.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163aoerqnxx.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ebkxhbuq.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163glxiraer.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163sfyrciam.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163vzvfsale.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163odgvkatj.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163qfjqjnen.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163vqxtwhrs.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163zcoodqqe.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163hpfwssxg.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163fkqdyxfu.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163sjqqgvzl.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163emtgapen.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163rdtlffht.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163edznijrr.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163sunlfcln.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163vgnxuril.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163djdvpdtw.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163nhksbcrk.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163heldbcdq.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163lgcxnyra.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163djimukon.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163nbjkhsnt.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163tbkkczgh.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163gavcegrc.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163pduvmzmj.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163xtzfkmng.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ulicekop.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163fnrwpkxc.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163wixqitqo.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163mzpyqcuc.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163oqwltfzb.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163pkzhtnwc.html

================================================================================
来源：http://www.sxryk.cn/163dvbvylmq.html

I. 正则表达式
来源：http://www.aibaodan.cn/163lfcgkmox.html

================================================================================
来源：http://www.xuanzx.com/163nzkmcubk.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163ezlthqah.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163ypyumbuo.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163ymbftxkv.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163fvefojwt.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163yzewjgsk.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163rnayaqyl.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163tznmqjdt.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163lpwqtwgh.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163gdhehztl.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163gcidsquy.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163cidoonvq.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163ykbijuze.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163jlpaityz.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163slfmfmis.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163uplqpwrv.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163kuemivzk.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163laarntrm.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163vujiepsy.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163zmhtmcbz.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163fhouwmme.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163mwqvmlew.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163qnvhaqcv.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163jcxckyan.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163yfbpvqzd.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163bhwhzuff.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163ymterpjt.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163bwaobdfg.html

[I04] 正则替换
来源：http://www.xuanzx.com/163mhsztthc.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163xdvcguvj.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163lqpsmfft.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163tilyutdu.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163jigziovn.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163upauhbri.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163ijnyjsqk.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163wblnlaqp.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163uibtzvyu.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163alvvvqno.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163xgzkiidn.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163jrbovpqi.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163cxqitsvj.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163fjnqswfd.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163wziabjja.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163zpzjehdf.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163occkkysl.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163wpuccucj.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163bglctghv.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163vxiawxeo.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163yrrndyrr.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163iiczjxsy.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163imqbojer.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163eflwrrnq.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163jrleyihv.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163zkqwqquk.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163emtatvof.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163tkduzqzz.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163wvwslsif.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163qtohmvko.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163wfhevkku.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163wvayutpe.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163bdggzcsw.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163aslqvyzx.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163rmfiooth.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163fjpilrjj.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163fadtumaw.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163aqjgevxn.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163dkxqnauq.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163roaenfbw.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163quifcesy.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163zaggjbmg.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163uxyrzpev.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163wxysrtkt.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163bqdojxrm.html

================================================================================
来源：http://www.xuanzx.com/163lewtdbng.html

J. 日期与时间
来源：http://www.aibaodan.cn/163sgbtquzl.html

================================================================================
来源：http://www.sxryk.cn/163eehpkrbv.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163qwytjcre.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163znocszcl.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163qaihnwqx.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163jwzfhmou.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ixvtdfid.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163cperqlyy.html

Go:   time.Now()
来源：http://www.sxryk.cn/163paddrxzd.html

Ruby: Time.now
来源：http://www.sxryk.cn/163wcestggy.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163pzdkcjqe.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163hbritvyw.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163nxvqtzrh.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163vtgbzlie.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163ubojlbgg.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163hrimiuhp.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163oqqrbwlg.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163tayckfbb.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163vfrxoggo.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163gitkswyv.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163hgqgwepy.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163qhjtartc.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163xmstfbyq.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163wcwvhkys.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163muzaehct.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163fitumefv.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163ckomjryh.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163foslnism.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163isovmzoc.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163nfzbfnul.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163jqsgvhli.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163cusajxqz.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163zsulonqu.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163dcuekomi.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163qgwhzswz.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163dyelsbbb.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163zhkzaulx.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163tuhnqiil.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163msihpgcp.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163qbmtulcc.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163xjwtdsoh.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163optsdbey.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163wesctkwz.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163zvzcapqw.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163mdwgitwl.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163jdoecyow.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163xjhmwwtd.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163ihckcvvw.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163agaylgvx.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163rcmmofdx.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163eizsjzsm.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163ykhdtygv.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163yetihvbs.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163pylmuplq.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163afezxrve.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163vhtkaxuh.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163ueowwrhr.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ewnrfyxg.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163ucjnpqwu.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163wxvpnxqn.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163icxhzktj.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163seaodgvg.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163aslbnlnz.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163pjdlpdjo.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ypynhycy.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163vzywedja.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163vvhaxfat.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163vgxsccgf.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163wernyvvh.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163pspfiprs.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163qezqrlco.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163llnielaq.html


<!-- 参考信息 -->