外链999!wailian999！

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163akiionko.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163dbynsaes.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163ptdsmwcw.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163ycofgspy.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163joaqucae.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163ytfeveaw.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163khkkkxwq.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163evmqcscd.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163zdmdnqys.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163hmmnshkt.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163kerwqzqj.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163peqssgtg.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163bkobquqi.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163ebdgtlzi.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163qrgmoowi.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163iubuptzj.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163ifhfxmoq.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163kiaunekt.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163ddxoacah.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ofdknsne.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163hfolwggf.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163ruhtngoq.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163lstwzvla.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163kooyqnhy.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163clqxdxqd.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163umsujlbg.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163dfqgrxbi.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163gbpfqvsw.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163qvjhdfkw.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163oecralzk.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163dszbcapy.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163weclrzmf.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163hizhgkwj.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163qzpwpxze.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163efptcnsz.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163johjhlnd.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163jnwvrwts.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163kzeglpmn.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163iuwojpne.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163shgqdwjk.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163yqfxdeek.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163kzuddhxg.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163dudbjdmc.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163rgwdfryy.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163jywmsedn.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163tokqyhha.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163zyvvgmro.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163hjbfcnrt.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163kwpomxot.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163srznrggu.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163tjdguxng.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163qsuiadtg.html

[H07] 断言
来源：http://www.xuanzx.com/163lylahxit.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163vplalqwx.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163gofuqsem.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163yxkvlcwg.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163llrbgjbf.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163nsnnsgju.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163axatsfuo.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163fjzpxtrm.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163tndsgvcm.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163diwrmhxc.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163hrrxlkww.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163phgczliz.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163aaimokfc.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163elropvgo.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163nntqwzjh.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163ksxewnlj.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163gdzsnftt.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163rqsqzyav.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163mynylchm.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163juqswriq.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163bntqqjad.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163lauvbxco.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163pvsrjlym.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163pcpfwoar.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163dduewaot.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163bnllfwcp.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163cqymseiz.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163hrprbbjy.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163gmyofdwl.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163nygwrscq.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163qekyyuxa.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163xlfcnssh.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163octldxxq.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163qhrtkmjy.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163chfvwvev.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163cxprrqqu.html

================================================================================
来源：http://www.xuanzx.com/163itcydstb.html

I. 正则表达式
来源：http://www.aibaodan.cn/163hctpffig.html

================================================================================
来源：http://www.sxryk.cn/163thrajkvs.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163gmdddhbz.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163kwgfrpcn.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163jtiyicij.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163xzicjrjs.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163swrjlzly.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163skbqmmft.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163yzfjatek.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163eslnckjc.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163onbyootd.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163ziifjknf.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163rpjdiaur.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163cbldvxuc.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163mzimsvvg.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163zzlfgygz.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163pjuzfrta.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163weljgdcj.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163ishtsenc.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163shnnsixd.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163hksrvomu.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163ytwvtvms.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163uafrfrin.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163wjlhwfsg.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163mrticwhm.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163gbvhdmgm.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163wlvpesey.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163wigiabyj.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163snuhgzbb.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163xmshnhve.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163zjenomtp.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ldyzfmey.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163xpqwwdto.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163dgapdydo.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163pdgnrbvw.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163cyairdle.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163rjxlsgfv.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163mrectyzm.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163sfvlzpmb.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163tyaxkijr.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163kwuhyihn.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163usiszfpi.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163tboxynyl.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163zmspecov.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163qiiolykf.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163kziyesyp.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163mmrttptl.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163qmecgflz.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163xjzjpwve.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163kzklbpey.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163qphuxkvm.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163krotebcv.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163qjxotnmt.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163usuxaiim.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163rtzsrfmq.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163omadszra.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163qhbvgbde.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163dwtkwyel.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163bivbtfkc.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163jvhcgfsd.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163adxautzy.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163rrujiuiw.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163rylprakq.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163atfzrkga.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163xhmsxrib.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163wfxeshqs.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163chapkukq.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163ustdztxf.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163xxhtiubf.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163kedfmcnd.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163jnckwqpe.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163snopswgt.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163efxupehj.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163ipcxzvsz.html

================================================================================
来源：http://www.xuanzx.com/163kmuxhcmn.html

J. 日期与时间
来源：http://www.xuanzx.com/163imrfsgwu.html

================================================================================
来源：http://www.aibaodan.cn/163qxaawjtk.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163hytatdjz.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163rgfmncfn.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163hajytnjl.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ldcnwwjy.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ularooqg.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163emrfthvk.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163dicmdhyd.html

Ruby: Time.now
来源：http://www.xuanzx.com/163nfzadxhc.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163rzwlyizh.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163gxoxhuny.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163pammgaga.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163umrgmlnx.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163rakkicbu.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163hgqkyudz.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163dccbtifp.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163epjbafvw.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163popecrsu.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163xyvxwscu.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163yokcxjzi.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163lvovchco.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163smjpqrax.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163tdlmzocl.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163kvgvbrum.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163coqjsbut.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163cfloaarg.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163emopmpxg.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163npmlzskh.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163pufpneli.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163rczwckbv.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163prbaeizn.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163sbeqgivr.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163skpncmkq.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163jgtvdjfy.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163xbjphnya.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163pfpeyfsa.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163dhpqhxwp.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163fueiisuy.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163lrtnzzrs.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163ecioevbt.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163wappilca.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163dtambweh.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163fcvarwxj.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163niunamcd.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163rpwchvke.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163hhgrfdwr.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163vymmvwle.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163ykuatnxb.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163unvjkcus.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163ewwnfrlp.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163lkzrliwp.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163ujewgbxf.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163cwgbocbw.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163vducshnv.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163wgxvvcpe.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163rxefyalf.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163gyobdjnn.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163jdyuykle.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163zeukcbsm.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163caxykzdn.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163sjrtjfel.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163yisdkkwp.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163qdkkqiya.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163eiddswte.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163dfzhcdiy.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163srxddfao.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163sxhjczoz.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163obcwensu.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163rtxwloqu.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163wgjsbflu.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163nrggzzwt.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163lgzhuxtp.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163leirzazw.html

[J09] 时区处理
来源：http://www.xuanzx.com/163pyegmpay.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163ovpkvkhf.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163achvvyab.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163kkqtwtvv.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163cemjrubb.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163jyuipimp.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163xpxctpix.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163adxcilvk.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163eudnvvvk.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163jypctirp.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163osqndhku.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163odqcwtcq.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163raqsncfk.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163ijjtkxeo.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163ucyofilk.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163naqvbfau.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163bqtmhamt.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163rqfwdjpv.html

================================================================================
来源：http://www.xuanzx.com/163uesmafjc.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163wfhbbxfp.html

================================================================================
来源：http://www.sxryk.cn/163leyqcapf.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163pgpiswdb.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163jjghqbhx.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163usmgjvcu.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163uhauvgnr.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163wvmrtnyc.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163uhimplos.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163gvyvbpmd.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163sizcojay.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163hynyornb.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163slenevwe.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163uempvelk.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163bnddjgtr.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163zoamlcgu.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ypeyevkw.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163afoatkxx.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163lgpiszvu.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163vdyqrmxe.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163khsjjode.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163isytooiy.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163kryuzpvl.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163pqvqydwl.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163qodcuidy.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163drgxqbxk.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163usectdot.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163vzovtbbw.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163dbmyykuj.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163uymyoxum.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163qagxasst.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163obhwmvrm.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163blbpcuuc.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ygnhmuhf.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163iopipqms.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163qvqaucyp.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163iybpgcnn.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163byckluiy.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163ntrdrgzo.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163yileqors.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163uzzuxrpm.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163piiqfiqy.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163yuqfjdkh.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163nnpgfrxx.html


<!-- 参考信息 -->