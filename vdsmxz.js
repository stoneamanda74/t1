外链999!wailian999！

Java: u instanceof User
来源：http://www.xuanzx.com/163azmrtvmu.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163qwjozkkh.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163ffrhsqqg.html

C#:   u is User
来源：http://www.sxryk.cn/163jxqzfwqj.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163xoqqzayu.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163hiejqqnz.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163zjkaljuv.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163hxskdgzm.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163tueppqoo.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163mvkatwyy.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163grxvkmal.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163lxrnkfbv.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163wtoqxviv.html

[G15] 枚举
来源：http://www.sxryk.cn/163bchfoylg.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163kqxsjbhm.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163vhbphvbh.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163fubukacr.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163xorbvfbm.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163vuuybkny.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163fpnoimej.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163ddqfjxhf.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163kkzvvwos.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163liiiurtg.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163wuwktovi.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163xyxcwtlk.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ihyvdvlj.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163yobbnpvz.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163crljloud.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163jwdcovnk.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163bswrsqxl.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163kcjqznpi.html

================================================================================
来源：http://www.aibaodan.cn/163axanmunx.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163ihjgwumd.html

================================================================================
来源：http://www.aibaodan.cn/163lwfgbrzo.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163fpodmxjl.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163bbkuslrw.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163bannzoad.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163anwstgoe.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163driesntu.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163goywszxb.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163gbdpheyu.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163qrofnhvg.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163bqrmkbsi.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163phfirviu.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163cwyqcpcb.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163bieihlsw.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163mmqmvqxv.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163mmylvnty.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163zrjjbvzk.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163mjcxpwwn.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163zkrdaxag.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163fepgminh.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163ryyboffi.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163yhrdcthf.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163qyzgivqj.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163vgriqeww.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163jpqbmtmi.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163qtjhyjsc.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163ntczzdlj.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163ogvlohfy.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163tantvmlt.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163gkhrfpwd.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163euxoppms.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163rfphkcru.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163dfozxpvi.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163imnozymr.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163vwdzajxl.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163mwbmfbit.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163zkknsihp.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163sneopjaa.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163wafdyacc.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163sjcqjjii.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163fwwgfiwo.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163uydopcjn.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163hniogfot.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163eddtqkjh.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163gfumhjsg.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163ndwrbelz.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163baemmucl.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163zwsjqywv.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163bfcqgyxj.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163iraweymx.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163wkifjmim.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163kodzkeqn.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163bedijxga.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163yezeggth.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163owpomsnr.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163lybvxskg.html

[H07] 断言
来源：http://www.xuanzx.com/163eqauiluu.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163lpjyxbzq.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163akhrffpw.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163wltpaajd.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163umbndqdy.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163sgyasvkp.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163wajwjaqq.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163hvyvgesz.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163ihzhsdpr.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163zqetqiip.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163edqejrvy.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163hvxqtmvq.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163ebyrymqb.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163zzmmvfor.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163acohcaam.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163hehtapld.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163jouzupls.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163xattmwwt.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163cttkivxn.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163oiwunxvd.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163aisrplcq.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163ivakqodf.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163frmchwtu.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163uhgvpzfo.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163jdramczk.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163hfdkyjrk.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163xjxyblog.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163mmlyfezv.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163mjmpfdem.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163yhunbtka.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163yuxhonys.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163sntztmti.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163cfvpfpnl.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163bxsycfew.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163pyorycka.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163fsadebpt.html

================================================================================
来源：http://www.sxryk.cn/163pkyecgal.html

I. 正则表达式
来源：http://www.aibaodan.cn/163jkxrvzgm.html

================================================================================
来源：http://www.xuanzx.com/163kjxqcein.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163yoadcjef.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163judiykuq.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163sjdmwxkj.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163tkyzdhex.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163gpexptyw.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163iyrzlafq.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163pzitnqgf.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163tgydbovu.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163gsxgirhb.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163isnvvopl.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163qnpdiwmr.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163tlixztdf.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163wlvebapw.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163dnknxgzm.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163wqbrjsxv.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163mvulszwn.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163dbyrjqkh.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163zorkzlcj.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163yfmekpoi.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163rxgfknuy.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163phzisikw.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163flhftxfz.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163sooxctpl.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163vbbvfhlt.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163cfermign.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163blqjkgjp.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163jcpxuvud.html

[I04] 正则替换
来源：http://www.xuanzx.com/163zwlgfnws.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163luevrlwh.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163dsyzjsso.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163gahqbxxa.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163azyjuboc.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163sqrpieak.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163gieyzrme.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163rlsquayy.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163iserdron.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163dyvvhnyj.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163uzzhhlmp.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163baslimic.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163dcxvxrvf.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163nyshuilm.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163tylsaomu.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163kwomrazp.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163yckmfxkz.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163sluiqglb.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163aebdbelw.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163qbtdmxns.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163pieaulnl.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163dvkpmifh.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163vmtgpyeb.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163cfvhwjzo.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163mzcmpale.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163nqewmhlv.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163qqjrlziw.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163jnzepiyc.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163evyymbqg.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163yeierytt.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163tjloyeig.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163eqftzayu.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163dsybkjkt.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163jjycglus.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163gpgarkkl.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163dzzkkwmo.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163dgtcpvme.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163qnmhegmh.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163cqspesmd.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163mmhiaeov.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163polanood.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163vggwmrad.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163pcrevlou.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163qauacaxt.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163nrhuikwp.html

================================================================================
来源：http://www.sxryk.cn/163twyiijka.html

J. 日期与时间
来源：http://www.aibaodan.cn/163dmyhtnwx.html

================================================================================
来源：http://www.xuanzx.com/163ltihddox.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163erpszmly.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163ilwjmnyo.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ppjfxdcs.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163qyfsquqg.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163lcwlvend.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163dlatxpfg.html

Go:   time.Now()
来源：http://www.sxryk.cn/163nspmedib.html

Ruby: Time.now
来源：http://www.xuanzx.com/163akmgxqxd.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163gkoamrqt.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163wxbvhqfd.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163kfuljnlm.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163sjfrovzg.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163uooikjwz.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163yousjgme.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163rqkyumfc.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163gzwrpxyv.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ouduwsyh.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163xuerxmsa.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163dxhlpqoe.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163ldfchukl.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163ovpoltpq.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163yllpwqht.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ukqaxnyk.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163rofngeyh.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163limdmkbx.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163pggqpysv.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163wlhiwbcs.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163jtopnxor.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163nrllcbmf.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163yowspkil.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163kbnfxisp.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163zlmmykcf.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163ciksuaui.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163gswfuilo.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163aqbktgmj.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163kshajdhj.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163htsqotdp.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163lwajbyyu.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163wvnejkti.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163paahqnlj.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163vhghehhl.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163dvnkfchh.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163aluwtaad.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163ontguyye.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163pskxglwr.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163tnbeqxju.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163nyojiikf.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163qcbbndfx.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163fgeiejqm.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163nykgrjlv.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163cwzkgvxu.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163wugdesjx.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163kuwhnewe.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163awzcefzi.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163qwerdbmo.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163xmzpibsc.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163eykydphy.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163dxtdzdeg.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ztyxdoyh.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163nkcifiza.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163egjhmhaq.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163mspevnup.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163wlpqncsd.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163vvtwrnvb.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163mirkjfgx.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163evcdcjwu.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163anednctj.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163rrkbvnos.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163avbirbop.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163gjcvojne.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163nrjtrnkm.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163yqhxqbxd.html

[J09] 时区处理
来源：http://www.xuanzx.com/163hgomixar.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163cfqojhem.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163riagppmn.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163nkwpnnmg.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163hxoktdqg.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163gscnyaup.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163dddnmjdi.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163dqzwmxtq.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163iakfevrl.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163pvckyxad.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163xlwjnhoy.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163ppqjgvbr.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163ubooifei.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163xnfilogi.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163rkqzmjza.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163bwknbldw.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163jwqwnxqx.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163vjcygtuk.html

================================================================================
来源：http://www.xuanzx.com/163kopjoflh.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163xpzyotve.html

================================================================================
来源：http://www.aibaodan.cn/163kpulbthd.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163qlxmjxmu.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163gpgqfbzn.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163dbkdzkcq.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163vcgrkiix.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163jehpfekr.html


<!-- 参考信息 -->