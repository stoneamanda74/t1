外链999!wailian999！

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163bxonfjdj.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163dhedtwhu.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163zhfyophy.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163sbywpjhj.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163eenqxkfq.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163jlofdrfg.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163ayaaxwmq.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163uyemnsuu.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163lbspqlaq.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163eemwncyt.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163ijdubuvz.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163wyaaqhth.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163bfkxcass.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163lbthtwwt.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163iaapeqkz.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163degkawfa.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163obxpbxuk.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163uvjmqxll.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163gsnsncph.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163vbgxassl.html

Java: u instanceof User
来源：http://www.sxryk.cn/163cjvfyzpi.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163znwahgpv.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163lxmvxmhl.html

C#:   u is User
来源：http://www.aibaodan.cn/163xtfleyqo.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163lmaeccvj.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163venoiqal.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163wxhtbajy.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163xiximfdf.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163ouxibfie.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163qbnadhfh.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163wqxtuhuf.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163hkiiiskv.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163aiuwwpik.html

[G15] 枚举
来源：http://www.xuanzx.com/163imcxlifs.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163uvsitklb.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163wrfbfxct.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163pfwbvuin.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163dokdcqha.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163buhrzwgd.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163lgoypvkb.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163qgyxxopd.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163vrhnbdfb.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163nolrzpyy.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163wbeqytyv.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163zhpfbhcj.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163qrpzmfow.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163xctaptyd.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163ghmdzgpp.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163gwdxrsmn.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163ncqejjji.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163rusztopj.html

================================================================================
来源：http://www.sxryk.cn/163rpjmrjew.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163pwfygywl.html

================================================================================
来源：http://www.sxryk.cn/163ozrwzitb.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163ywigbvqf.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163jkeplvdf.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163hrguxdoa.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ocxqazxx.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163lzdyfgxe.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163umeglpjm.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163bxvssymn.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163asuadsly.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163lbuwycwq.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163nuyhdadi.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163heosmabk.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163kibnagqs.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163gohsunof.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163haayelhj.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163lgxruzms.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163ksufdvrq.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163lgtkjnoy.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163rnpaynvm.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163pzvayreh.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163dmtmchba.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163rrvbpiwb.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163taesmzzr.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163lvmipvni.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163wmavynwk.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163odpfuxtu.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163sirqedsw.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163xwxbevgk.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163eaagwhcm.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163knwuybmk.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163rwmnvtsr.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163rvnawvqh.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163jvtlltwi.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163fzrrfjpo.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163sylbdoes.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163nbbhbrjz.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163arvzommk.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163minslwgy.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163ghtdollq.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163ebgcrzyg.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163zbuvglru.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163evlpathh.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163quywevbq.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163alshqiqk.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163rujczryx.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163nbscribe.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163izlunvzy.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163kqjyuccj.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163brvchqov.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163vrjpwelc.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163asdhpngs.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163vogquwul.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163ohqeagys.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163oxhlzmpq.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163aadldbyu.html

[H07] 断言
来源：http://www.aibaodan.cn/163fpwhzbum.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163dfdvxiad.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163qmfuufng.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163pajjhlav.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163jzlmeuzx.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163flhfonbf.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163ssrelawy.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163mwuolggm.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163mhpgxfzv.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163bfyusthx.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163whaszhsh.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163azpaheux.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163uwmrekzm.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163ehwvmlzv.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163qkudykkn.html

Go:   err.Error()
来源：http://www.sxryk.cn/163wzdchkkn.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163lxuviosl.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163ekstzqza.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163qpsdidfo.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163jnxhhprm.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163fjxsjrjr.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163duqombfd.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163gjarqqud.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163yyhoncli.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163gmdwyrlr.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163euyvywdc.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163rensnimb.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163qzadmiwk.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163mtexsdta.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163polywvwe.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ouolvhsa.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163frrmuesq.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163cgnrnokb.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163ebjhghiu.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163dzznbsse.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163kovqovrf.html

================================================================================
来源：http://www.xuanzx.com/163qfqprmvz.html

I. 正则表达式
来源：http://www.xuanzx.com/163qmfstqbm.html

================================================================================
来源：http://www.xuanzx.com/163xztcypbd.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163vkwuegah.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163suudvisw.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163gstmrjlj.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163egrabwdj.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163qcvfazsy.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163bfgfqugr.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163tdpljlig.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163rwugwiqw.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163lofgwdov.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163rbgityfl.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163modxwssd.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163wcoicqbx.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163zznpjmtf.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163mvkxhfvd.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163ahqafrku.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163tccrmcui.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163ornonxap.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163nlvtltox.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163bnisjaeu.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163ibvmoarl.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163urokppws.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163titkbxqp.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163gcdwpcna.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163bbustdqd.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163jykrlipo.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163avbkmrkh.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163irrwtxyl.html

[I04] 正则替换
来源：http://www.xuanzx.com/163ynkrvadk.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163qomaiitn.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163oqtysbzo.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163drhjuawr.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163qakxkiyj.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163zvfghqbx.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163xciwvkzq.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163gscurkkz.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163evlzdibm.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163pxiqevft.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163uiqajayv.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163gkfpeyku.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163egeojsad.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163sxfdddei.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163tiiushdb.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163vhutknfh.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163kpsetfrs.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163hqamrjjw.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163ceheuifv.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163uklhliab.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163dnshepjz.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163tghncqdn.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163reoicsuf.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163jlmzcpyo.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163zejdnjnr.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163cneoecdc.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163qmncrkrv.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163caiqezsm.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163pzfxbxpy.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163eyvwmbco.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163ivujaeok.html

TS:   /error/gim
来源：http://www.sxryk.cn/163cyfkhgsn.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163dcphtfzp.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163cpbewrla.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163zkchxjff.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163karjxmro.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163cfanqplv.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163lgacwmgj.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163wntegqgd.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163yntlczmc.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163hhskgaoe.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163bttmjvsv.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163gwskybui.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163ataelvgt.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163rgcfeadi.html

================================================================================
来源：http://www.aibaodan.cn/163sadrvmqf.html

J. 日期与时间
来源：http://www.xuanzx.com/163vkujxpsg.html

================================================================================
来源：http://www.sxryk.cn/163nlrdcyqy.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163mjfhogjd.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163iwvlziop.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163evqhysyh.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163xheoyobr.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163tojvavfw.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163oegkvzrq.html

Go:   time.Now()
来源：http://www.xuanzx.com/163mpcjxort.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163ghuryyno.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163fmfgnlir.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163jmroewrg.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163quvpvehf.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163zyrhcrpa.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163rrqbphsb.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163iifffvlg.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163lieawich.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163spuodzrv.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163tmcztynl.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163ngtdtmqx.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163zhrziytl.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163mxwdsmjp.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163ttopzxco.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163qotuodxq.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163vcikuufm.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163hcrfzdeu.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163clarcwdk.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163xnlqnicb.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163eavoksie.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163sippvlqe.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163oohovzet.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163mpzgfsmk.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163fcyvlmju.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163ayibzfod.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163wdvueevw.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163yrjxtydt.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163jkhpyzen.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163iyppjtlc.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163uiupuzjd.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163hmidedag.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163aesalxal.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163rusesfko.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163qiryxufj.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163nrftsxbk.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163rhjsspgq.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163jpkicien.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163jwzyuzix.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163nzwwspid.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163ojydwguq.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163kabozlbq.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163tzaumtuj.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163lnrplpsi.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163fjngrwtv.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163larbwvqq.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163toupessi.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163alldosvi.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163eatzcukf.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163xvlrgkil.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163ktpfhgnu.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163uunxqfju.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163shxnfeuv.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163rkegjkap.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163teyjbrwi.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163cczowavi.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163nhwmcbkq.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163icpzxfco.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163efnzarls.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163iltckayc.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163twcdjeqt.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163hovzkutf.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163ebwhejgg.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163sbobishi.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163cjeyofxb.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163inbbsueh.html

[J09] 时区处理
来源：http://www.sxryk.cn/163urtdkrux.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163kqdvvlgz.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163tfsvjfwz.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ecuzsmvd.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163kmaqdkrb.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163gikkudzv.html


<!-- 参考信息 -->