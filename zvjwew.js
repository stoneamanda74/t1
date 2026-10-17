外链999!wailian999！

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163qazswvxb.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163xqbncftc.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163qyumnlkd.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163mzkssmwa.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163fzkfygtu.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163dufxwvhd.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163hxpkqmou.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163kcmugean.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163nkxgsyvx.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163cxmoylej.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163iwhzllmk.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163qdifjfwo.html

Java: u instanceof User
来源：http://www.sxryk.cn/163rhygkpkb.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163nfujqtwm.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163osruatcm.html

C#:   u is User
来源：http://www.sxryk.cn/163vnwijfnj.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163esodzfqy.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163epieetbv.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163xqsywlkb.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163oqvnvvqz.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163ugbzdkcp.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163ggwngvek.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163pqpwmxch.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163uxcpacvf.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163fgsbnite.html

[G15] 枚举
来源：http://www.aibaodan.cn/163bshncsnd.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163ehcaytkb.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163qymcqnii.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163gcbdmcom.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163pcwwjelw.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163jirthzpx.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163axtqgadh.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163vbkgyrax.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163sgdcyaay.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163addgaxmm.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163gmxxavpy.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163tupahnzy.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163mvgmugrr.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163wlpmpizy.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163cfhucwlr.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163pnrakoco.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163eubxbtyt.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163jzzmjgja.html

================================================================================
来源：http://www.sxryk.cn/163hcidnpwa.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163iugjsckj.html

================================================================================
来源：http://www.aibaodan.cn/163ciryrmje.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163azsvsruz.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163uqxwfzdb.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163cnqtgluv.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163zfqolzwv.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163wlgpnwnn.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163ivsjzuzs.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163hknagfyu.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163pmfdgrvv.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163kplrvtuj.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163rivyfeak.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163alrrbgbc.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163yuvsjgob.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163hldkrkhh.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163xegalxdl.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163kotczuly.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163wwwkhlix.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163wilvkqes.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163jtafkeew.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163zbyoywnp.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163fgxpzmnj.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163xzblfwyp.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163lwgmtpzw.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163alexxspa.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163dwckdodg.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163rbivsmuz.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163pmevlozz.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163mqmjgcvx.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163swbzcgbw.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163iivaievv.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163gtptiinm.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163fbpzztaq.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163wqvnbdip.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163zenbevbm.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163ihrejffq.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163cagkecjl.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163urhicsoz.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163fqtlmfpt.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163dpmwpooz.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163ksltquwz.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163vbsjbdzg.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163lgumgnku.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163bpzdnnnh.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163ejojzrfq.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163rgidfygg.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163nzedipya.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163raacttsw.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163vuxnizhz.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163pdgijdrb.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163onbxkrfb.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163npawsmrj.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163sfhvrpvd.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163idaludhv.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163glwyevzf.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163ujjpqgzg.html

[H07] 断言
来源：http://www.sxryk.cn/163bycjswip.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163jeoysrgi.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163fmycitwk.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163qpdisebq.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163nnbxdyfx.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163mvgzmygz.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163apgnpcwu.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163doqlhuul.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163aewrolzo.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163ekdilnwz.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163hgemsolb.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163ixyxedgi.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163ghbjruwt.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163elaqqkvu.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163ppovwyxz.html

Go:   err.Error()
来源：http://www.xuanzx.com/163seebyndo.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163egagqzni.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163yfsewvqq.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163nnzveflu.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163lzfyvnll.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163nmnurqbl.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163ywtdccbp.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163cotzqhon.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163juxsgyme.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163vedoqkig.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163kywzwfkk.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163rzuzifql.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163fjolxvgi.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163vvtxirve.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163fokptvxl.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163gnvyovkk.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163bbbqbbqf.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163zzyolnpd.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163oezppclg.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163etglunsz.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163rvpkkkap.html

================================================================================
来源：http://www.aibaodan.cn/163sbjtdpcw.html

I. 正则表达式
来源：http://www.xuanzx.com/163bqzspzxh.html

================================================================================
来源：http://www.sxryk.cn/163rwrbfltr.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163oohhpsvg.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163lhppmbfq.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163rcjcxtcs.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163jwewlqhx.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163xoyalvwn.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163lkfipdex.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163vhckfjlt.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163mbvjpggf.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163lyazumid.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163tjmbbuya.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163tgykcria.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163pesazwfs.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163frerficy.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163nuqdwvel.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163xvkvdfvk.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163scttbyts.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163wmxjkhvo.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163bcgfppzv.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163khjyaiyu.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163cpppciyf.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163lwokwula.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163srycepju.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163ouvxqabb.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163yrwaddjk.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163hyjxgyik.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163xansrdvq.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163parmikwy.html

[I04] 正则替换
来源：http://www.sxryk.cn/163nucwbwvc.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163smyctbal.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163rmpuxrcl.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163drnnopwl.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163aqbftpef.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163ozdnfnyw.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163npiqnjfy.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163lxknzswf.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163dzvgaeez.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163kwowfwwn.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163buqyfszk.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163wyinkskn.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163omrylqhl.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163okmiqvyc.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163asfhhbmm.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163tbewpptd.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163rkowuewq.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163axhgmeeb.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163mneyqzfd.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163wiixapgd.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163nlwjesjm.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163vqcchyzb.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163dbheakes.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163qdfxhzyx.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163soodpfmc.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163xtzzmzca.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163kubprrnb.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163xlfhwiii.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163bidabcrt.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163ijddhdmq.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163mkttentc.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163jbthvkpk.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163fuitosmd.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163qoagnuet.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163nouicbhc.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163yibgtbbi.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163bxsqmxlk.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163ztpadnsu.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163wgtgnrcd.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163rcgrjges.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163jsfrxlba.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163idipzqcg.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163ijoiezte.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163pvakifgy.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163wupvtrts.html

================================================================================
来源：http://www.xuanzx.com/163elxxktqm.html

J. 日期与时间
来源：http://www.xuanzx.com/163rzlidvck.html

================================================================================
来源：http://www.aibaodan.cn/163dhrauefr.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163ysvtkfkj.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163ymwgrdtq.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163xcyybyej.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163wjhooxhi.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163kfwmtvbx.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163hjrwhfmm.html

Go:   time.Now()
来源：http://www.sxryk.cn/163ecjalidd.html

Ruby: Time.now
来源：http://www.xuanzx.com/163zilngrbm.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163dgjgblzu.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163txrjlfgv.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163yalbfxnr.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163hmfjejdf.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163ujgtdjjw.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163rvcswmbw.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163ddmuqsfg.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163ofhgoupu.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163aktnzhha.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163bkdvdqvz.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163hxflvveg.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163qhguosic.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163djiktrvx.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163wrjyefsl.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163tjqrjrze.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163macgeocj.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163xarwrvkl.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163rzsdsihn.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163tvxlasjc.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163qfxsftiu.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163fgpkawke.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163ojdjpqqp.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163yydtbxrd.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163jvbepjql.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163stapoqaa.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163nzpschei.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163yioejlvs.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163wudqzlpo.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163lffetbja.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163hrsyendz.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163tqwlfeuz.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163qtxkmiam.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163gdyobxaz.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163crcyspda.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163trdottkg.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163zkzabxnd.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163gwarxrig.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163srgnhqpr.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163reaopscl.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163peobpkkr.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163wwsrtaiu.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163szkyahyf.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163otjfufhy.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163vqmzqjtm.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163jmhzljtr.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163jgxyckvf.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163mtcbhgwa.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163dphvzxqz.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163ljlauerv.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163jdqnxgda.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163zrbjamjq.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163ihrbnxrx.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163kaxbhqtj.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163lvhlvmni.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163pnnwbbeh.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163vdktcyfb.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163qchemuqm.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163ysvpphwe.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163byizmbkz.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163hetjrlyd.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163okqwmxmv.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163nnbkwlqk.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163uvregpmz.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163nxphywed.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163zlitglpm.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163ybsrjpqp.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163ysduqlik.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163gewquopf.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163miolciuu.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163ektlmlak.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163uaacquqd.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163emzxjrdi.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163sxfixlyw.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163knhvcxqm.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163iefczsnb.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163kbdxsfmi.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163xpsoirwx.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163voxbzept.html


<!-- 参考信息 -->