外链999!wailian999！

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163bsbjgyfo.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163rcfzvmbu.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163frsbowjx.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163tojslrtt.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163ofzbcjxf.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163mpcrzsfb.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163vpopmymu.html

================================================================================
来源：http://www.aibaodan.cn/163bixceshw.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163vglvtdok.html

================================================================================
来源：http://www.aibaodan.cn/163nlrkhvpt.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163lmbbvcwf.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163qzzsflsw.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163iaffbdcj.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163fexhrtro.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163izxbvmkx.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163dkgpatlx.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163kvsgvjhy.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163ftsqhzes.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163dhwrfgyb.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163bcfkprno.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163itwxflun.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163lccomfxs.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vawyusdu.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163nblnlarx.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163tnsjtynv.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163rwvhjmzp.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163wlucipev.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163pkmoqfgv.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163ftqckpcv.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163ixibsoye.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163qujvrsil.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163eppthilp.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163gujaopms.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163dvlqkfss.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163hsdnnpoo.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163xzqqhcdv.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163vfgtltwz.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163hpabbkao.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163izpssyno.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163hhlsnffc.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ndquwkvb.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163lcuawmcl.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163hzwubbmj.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163sygmkrsa.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163sztrrhmi.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163wmlzrcbb.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163ugidckks.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163cwwopzql.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163fhectwdq.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163rgjmqpeo.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163aczclzpb.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163cptwaejq.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163yrwwetgy.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163sosexjsg.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163ddryecyq.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163ezpyxnwa.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163ljwfttju.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163ikvbadou.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163gakzplez.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163vouvjcvh.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163tncjuowa.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163oobbyetd.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163lgxiivxs.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163tqogcbcq.html

[H07] 断言
来源：http://www.sxryk.cn/163awkbffhs.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163zyfezitf.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163ylurjfzf.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163dkspnkzl.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ptolbapz.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163yucodqfe.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163gzhdpvva.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163gbaobpsp.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163mlboitdw.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163jklbgwjr.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163vqsyoavx.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163tuobhdjh.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163dvfaagff.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163fjqpxcpz.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163knmwjzej.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163cjumofgh.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163ztdoryof.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163ghzzaoyb.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163hijioddk.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163ruusaabe.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163rgjxewum.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163aiuxvhyf.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163uxgibbwb.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163jlbewmtw.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163kysilsaa.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163xltfabio.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163nmviczpp.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163opwizsbs.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163nmjaxokx.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163uuwudiju.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163uhxdwqzo.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163xhkmkzco.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163dgtatxwg.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163gwdganea.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163ironavks.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163rahlmsae.html

================================================================================
来源：http://www.xuanzx.com/163tjpthsob.html

I. 正则表达式
来源：http://www.aibaodan.cn/163wbqueswn.html

================================================================================
来源：http://www.aibaodan.cn/163lhqcrgzt.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163oupladdq.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163zxwwaaxj.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163fnfezonw.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163dzffplbf.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163isvqfbdo.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163obtmwnwm.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163qmzcevqf.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163jiacfzwk.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163twvtncpb.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163pvlgknjv.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163xhymekuc.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163vhsdeyal.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163vnpggopw.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163kwbmrhii.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163zlrzqdah.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163qqbdsdek.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163jwdkrena.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163sdndnxne.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163xhkieour.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163lbcmbbym.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163rtnnyukf.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163uoithecf.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163bkrfqxzz.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163anebrqvn.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163nzqcxrko.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163bejvytcl.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163rfrqvsnp.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163hixqougi.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163wbatzbtp.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163wqqtervt.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163jguwhofy.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163sqodoyxq.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163jliafcex.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163llfvppzg.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163uinsujqd.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163imhkurgr.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163vssljmym.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163frxsadyq.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163ftdmylro.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163nozegjqb.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163znlcaasy.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163fyinquzp.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163monnjjqd.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163zyrexkwh.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163atsrjuvm.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163rdemyavr.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163woxbgldu.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163rwnozwov.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163tkpcnjnm.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163hjcylmwb.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163fphqenjh.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163bonzqqxk.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163hiiqyreb.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163daqrbbju.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163mfbnhudw.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163jcarfdyt.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163orhpbqir.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163jydvixqg.html

TS:   /error/gim
来源：http://www.xuanzx.com/163zipdgble.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163bxgiquil.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163xhlzmify.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163uwnyjjku.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163jiwgdltq.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163buvxpgqu.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163dkhcdyqn.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163aztuqiup.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ixnxagqd.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163bcoebdpn.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163yfivbucm.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163zsquahir.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163mofaotcv.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163finrjgpi.html

================================================================================
来源：http://www.xuanzx.com/163ojcojvlq.html

J. 日期与时间
来源：http://www.sxryk.cn/163lokxdyra.html

================================================================================
来源：http://www.xuanzx.com/163yujwaxjr.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163iyrbjyfs.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163bcwpsjva.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ahwbthkf.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163cuectgdn.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163hhdkekga.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163zgmeyvyy.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163ootyxkoo.html

Ruby: Time.now
来源：http://www.xuanzx.com/163msuemfmc.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163afjzswzj.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163iqpnslwx.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163soqtwbdh.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163bxpblaoe.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163tofvqaow.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163bdhtzrjq.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163igvvmact.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163ngotngih.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163rcuxdnuf.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163bbwrqdom.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163iceqyifn.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163ojkgrlwy.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163wsdfelec.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163zpdmdygt.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163wzzuflaf.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163wucetots.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163xfymkklu.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163jzyhfdfd.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163pzzosjfx.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163mfchfxao.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163yxeiibnl.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163jtbvxjud.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163pwjdplch.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163qamfnlkq.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163mrrqpzyz.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163eslmszrl.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163lofobnss.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163ynbfbpii.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163yzvifupa.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163jlgogmxq.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163jrwdbrxv.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163yfxromkb.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163lkrctgho.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163gqbgqahs.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163etbhnbtp.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163mqpmesyc.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163rcerochz.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163zbpchgjq.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163immrtgzh.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163fihlcusa.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163olahxzns.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163zcvctici.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163hdoxafvg.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163mifjztyq.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163crjgdnvt.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163ynrstbmz.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163lgfoehmn.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163twzzwoyj.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163nijudsfs.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163hotviwjk.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163btvrqiag.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163nvvgomjd.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163rovnhauy.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163fzeyifzm.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163jwwutrtr.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163adducvxc.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163wzebydsj.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163jxrszybl.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163xcqdegjq.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163ytmunrbe.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163gqquexkd.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163htjpdejz.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163zjmiffud.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163rtqvtjmc.html

[J09] 时区处理
来源：http://www.xuanzx.com/163mwctgihk.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163idemrbpp.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163hegsqecp.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163unbowntk.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163wivqlqdk.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163kxmkrdpw.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163aosfakii.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163bisukwzv.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163smqbobke.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163mjndymds.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163sbvdwhhg.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163sxsvrsyg.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163glozskff.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163khatqfeq.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163pcrmgcfs.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163wxreurks.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163saugesfd.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163rizjnhdx.html

================================================================================
来源：http://www.sxryk.cn/163cwosjiqe.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163wyfgzefb.html

================================================================================
来源：http://www.sxryk.cn/163oqcakkdc.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163qiootzqn.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163tzeqfvqi.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163dlaxgqpb.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ugysglfp.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163dapyepft.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163mdgcxckx.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163ohrjvsoo.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163ncddsrxr.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163pxnullge.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163djpatmft.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163racvcyjt.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163vtzrmihr.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163nspdviro.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163pjqrlokj.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163ronmwbzs.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163qtmyywql.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163ylixfggk.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163zxmcxbvj.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163nkuragie.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163guhrouat.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163vpmhxsma.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163halphtug.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163cgnyjutm.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163dzryzwzz.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163qwwhvmbh.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163huiofwea.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163ygslzdui.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163trerytll.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163zkqgjnlm.html


<!-- 参考信息 -->