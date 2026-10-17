外链999!wailian999！

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163abbrjrwk.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163mxchivfy.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163pzssqftd.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163xwuxbspx.html

Java: u instanceof User
来源：http://www.xuanzx.com/163lhmkfcdf.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163lhzohcia.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163xdpdcvyd.html

C#:   u is User
来源：http://www.aibaodan.cn/163bmresziv.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163qkmhqdnl.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163elrbohkw.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163uflsxsyy.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163yzpgkbtq.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163gazjtgqu.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163iwbzzbif.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163zkfmtoot.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163txteeriu.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163vxswsaic.html

[G15] 枚举
来源：http://www.xuanzx.com/163cuwchtiz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163ekfjoxzv.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163rhtxyqun.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163wnzmoysv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163mqghqnam.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163ezponmgq.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163maporsnh.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163aigkqlgk.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163lthtcptp.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163apnjroqj.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163ujznmpui.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163bqaspaet.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163kmdgftwu.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163tomrkabs.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163vrjurqor.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163uxegvjlf.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163qbbztoui.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163btieawdw.html

================================================================================
来源：http://www.aibaodan.cn/163hysczgbs.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163anyqomve.html

================================================================================
来源：http://www.sxryk.cn/163mxrxofky.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163fojnxeun.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163qmgwgafp.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163drtlgmlp.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163wjugtkte.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163pnagujab.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163ecdlzwnj.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163otbeyvvo.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163icuuwzyh.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163ynvxckgp.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163fjeojxvd.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163harltvcu.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163nbjhsnse.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163paltmnzk.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163dxfakfll.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jhdmwvzx.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163wysahfvh.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163thnjymah.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163kdvjovzk.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163wjwfqksi.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163kzdpjwuz.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163fsoorjel.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ctsylbpl.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163stvinxla.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163dvwprwnk.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163qbsfcrqd.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163xnpfyczz.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163qigauwgh.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163rojdeaka.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163ywxmpfti.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163cvzqaqkq.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163vojfhnbz.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163czygvltq.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163zhhewthx.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163jirxhwca.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163mrazjerp.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163oodvella.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163aeklekfs.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163vtyjspai.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163voncalwx.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163wuyuyapm.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163arslpzhw.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163lsrhgwyw.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163iioxjgrw.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163fzophacp.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163vwifqlba.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163elcnumng.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163jixcxusm.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163tuafssqi.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163lkghaotq.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163zubvzqtq.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163xweluojj.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163xawsvrom.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163vcwvgyha.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163lnsneqgs.html

[H07] 断言
来源：http://www.aibaodan.cn/163xqnpgsqa.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163zsrsuaso.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163rietiigt.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163hmghxjrv.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163jyvlpujt.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163vvmagcse.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163ejpmylyf.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163ubivtodc.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163afcoperx.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163pwoamdzy.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163yybspxic.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163lgjrfafe.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163lreysazu.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163tdrtwdzu.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163ehbtibfn.html

Go:   err.Error()
来源：http://www.sxryk.cn/163bnnqjigf.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163zsimwbop.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163sgogwkla.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163dlgkqucn.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163ukwospyl.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163hqkuhbgt.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163muryxoax.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163zgwmswku.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163vwohfzap.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163pkwrbrob.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163njtnftba.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163dtglabxn.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163rezvgmzw.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163izttixdf.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163zdflhebb.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163gmfjsyxp.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163aoqtnxss.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163aeqhhgmo.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163dqxnzhhd.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163pbkswhnl.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163ozkxuleq.html

================================================================================
来源：http://www.sxryk.cn/163lesbbgyt.html

I. 正则表达式
来源：http://www.sxryk.cn/163xgndkmxh.html

================================================================================
来源：http://www.xuanzx.com/163lhqcvgoc.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163stcbsciw.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163sanymrmx.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163wgcbbxjy.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163kcvatvwl.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ymmbxllc.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163vcjachiv.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163giwtmacb.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163bwibussn.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163hrzvqaxc.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163povmjpne.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163hvucwysl.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163unmfasyn.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163hmbtpemf.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163huvgyceb.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163ocslegbt.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163gaxrlmhl.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163jptckjbl.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163cxdtqkpa.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163tzrhlgwa.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163iprtyiih.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163izxsauhc.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163sobjdkxz.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163oluppyml.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163zvyvjlyq.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163jecunhue.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163kldjgkfp.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163wyjtefbu.html

[I04] 正则替换
来源：http://www.sxryk.cn/163xooojscz.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163bhnqpkjn.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163tqzmmuic.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163loveowtz.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163tvyyfooa.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163sgogefwp.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163ijdgpvlv.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163qluzkcdz.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163pgkwqisb.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163nffzmqtw.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163ozzpuhlt.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163xiquctpb.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163vtqwhzzv.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163qhzinpey.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163aaniigdl.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163wiuxphjg.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163tfofhkpv.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163cgqdjeaw.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163aniljhhe.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163pqlgjqul.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163wzptawhd.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163payoiwiu.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ieoavbtj.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163nxmvgngf.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163lnumxhfo.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163ancwuqwz.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163zonctkqm.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163xgxxxmng.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163pruxtkks.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163xaikvglf.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163ytwpfpqw.html

TS:   /error/gim
来源：http://www.sxryk.cn/163nqtfwnky.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163qorfijtp.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163zfirjhrd.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163qjojugra.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163fgjnwggd.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163ithfxyay.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163nifpwicv.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163mswfwhqy.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163wyxxjlps.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163rlzylobn.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163uaryrqbu.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163bagtzdjw.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163zepvbvcu.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163opunpagv.html

================================================================================
来源：http://www.aibaodan.cn/163lhgtsqqr.html

J. 日期与时间
来源：http://www.aibaodan.cn/163wulvodtx.html

================================================================================
来源：http://www.sxryk.cn/163ogdybrix.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163lztiuuhr.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163ezsrqegk.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ynqlgupi.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163yitedqcx.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163bojribfv.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163dcktiayd.html

Go:   time.Now()
来源：http://www.sxryk.cn/163teunhddv.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163nckllwly.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163tytkwdjj.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163lzburrda.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163eiqmydka.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163coupewut.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163jzhykmxl.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163hsaqjkey.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163cofaosep.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163mcyqbqyv.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163tdmywtoz.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163tvcvmgnk.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163ellkdlpe.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163hczxsvjs.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163osrwbsxs.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163meudkpds.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163suodlion.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163gzqehwgz.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163scvsjnfm.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163yjajpjrl.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163vruznzzd.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163effuoutx.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163henvssae.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163cuzrunix.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163affsgliu.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163kfvnuzbu.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163tqdlvozk.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163pfuupscj.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163cgoezqdl.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163kblcmxqk.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163deaqanbu.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163iomtugwk.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163qkrsmjwo.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ocncuqrr.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163pnucizdh.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163zyaahsfu.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163xuvctnsg.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163gdaxxman.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163bhhcrnjz.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163wniyhvcq.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163albhfnms.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163kxkykalj.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163geenkhbd.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163ikuoxrtt.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163olocaphk.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163uourdnce.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163fqxyjhpp.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163jkstanti.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163ezoksqvy.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163fowearzr.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163nzhmaimx.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163hjqyujif.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163rpfhwhnk.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163qdnofaga.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163cqlhpebk.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163givpugsc.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163dynvvdta.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163seootusr.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163aygxhzqs.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163zlidutkp.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163npblbczt.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163mtqkwxca.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163rxjqacjj.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163xggdgavo.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163uceutdbk.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163wipmnycs.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163ilohegzn.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163kqjsgxzi.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163qhtvpkxl.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ghhwarfu.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163dgwtvmqe.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163ickdnnpy.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163uwfjusdc.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163ezezlrmy.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163rhhhxuep.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163tacartyy.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163fuwqdemv.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163uvichctr.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163thqgvwes.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163vivsumle.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163hguiqdhs.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163hbmjkrfg.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163rmnvhhvy.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163wkntvill.html

================================================================================
来源：http://www.aibaodan.cn/163zumqkrmu.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163naatorgo.html

================================================================================
来源：http://www.aibaodan.cn/163ssgzvoqa.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163mxjgmrnk.html


<!-- 参考信息 -->