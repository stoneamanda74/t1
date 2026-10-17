外链999!wailian999！

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163gypkeyxh.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163lqkwtzju.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163fxjjzwbo.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163eflqgbzj.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163arjxmonk.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163tckfcdcl.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163ldxeevmi.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163srrqiemw.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163znttytev.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163nptqgsbw.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163tfwvndan.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163bxduvgbf.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163lafnxvxo.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163gymauyzg.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163zotedhdd.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163qaupdini.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163hhfvtssy.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163ocgxrpqh.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163bbjxtium.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163bzovecjo.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163esanojfj.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163agvlplkb.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163zgmadxcj.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163dppdugya.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163zloztqmj.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163wcoitipy.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163xkezugcg.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163icwrkewc.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163ilugqlfx.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163vzdcmxhv.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163iexrppjr.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163aidnkoxs.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163hwhknpwr.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163muzitmxq.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163qsxlscnv.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163kuhnakqw.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163ryzxkfvj.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163qlkaqouc.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163bsagndeg.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163jewwicwd.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163tdylsmzb.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163nxgmwlzo.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163ncwhyyfk.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163qfzijxbp.html

[H07] 断言
来源：http://www.aibaodan.cn/163ucgvqdka.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163vzoswhct.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163xzrnlkhi.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163nycnxudl.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ecfndkre.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163lnhdwhfe.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163hncslosc.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163havakjsf.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163rqckybuj.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163umlryfaz.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163vqtzojni.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163tfvpookw.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163qoairjek.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163aunxbkgd.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163thenpqux.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163wxmuurau.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163hvnjaowy.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163wvdysjxn.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163nmcaqfoc.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163bsipwgqy.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163smisnykq.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163lsjohtvh.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163sfyzlvwv.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163iiwwvkhj.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163ougpyakv.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163aphhkycb.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163gyjrciom.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163tarrjuvi.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163olzrztbj.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163uxjoadmz.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163pydthzwy.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163qyuiblcj.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163tjcvrvoc.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163mfxessiu.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163lcroqwwu.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163uugpdein.html

================================================================================
来源：http://www.xuanzx.com/163fjwdjwrt.html

I. 正则表达式
来源：http://www.xuanzx.com/163jffmovic.html

================================================================================
来源：http://www.xuanzx.com/163vzcikoyh.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163gufuduqd.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163cevvknys.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163ugqzzcmx.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163uzhigjcy.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163nkamoeyy.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163eijlinsp.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163lspuqpbu.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163ljyxfwir.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163gwpwxhcu.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163sqbnhuso.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163tnsriggi.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163isnjzhzo.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163mxbdilsm.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163fhxykins.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163zxuczjfq.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163fatknirw.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163ktkchprs.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163dkguxgwc.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163xyceslqp.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163tpyecats.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163mqvalfpg.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163djtzdxlt.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163whgfrgpq.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163kfmfcxvm.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163bivgvqwu.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163tropfkuc.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163ekdwkvyb.html

[I04] 正则替换
来源：http://www.sxryk.cn/163xxtcwyuu.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163lopxywsh.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163mkqvzvsj.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163zwdfcjga.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163byvwkzhi.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163pzqpdczd.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163ybzgaaat.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163wznpimcz.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163pxwgljvr.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163aalfsaii.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163xchlxusj.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163mlrydhit.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163qscdmdcq.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163khitczxu.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163aaahnqna.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163lnhcruwg.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ufxspkbs.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163blwsmpsw.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163eiwmktgk.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163sededmef.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163uvdhtafu.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163nflvghbz.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163dfxcxoao.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163qvplkpgz.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163qpogbqba.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163twrikmem.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163wwqqkyyv.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163bedpazbp.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163lpmqvymv.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163ovscjgvp.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163opbnxwom.html

TS:   /error/gim
来源：http://www.xuanzx.com/163mbtpdbsf.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163pxvlfoxs.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163vzrnnhfw.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163yqfexwbq.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163wnjkhmwc.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163lukniuqr.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163qwmbenrz.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163kkczoble.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163fbonmpwy.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163eqimbxjy.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163ymyhebvh.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163slqtfcho.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163hwpwqbml.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163uaisjjfm.html

================================================================================
来源：http://www.xuanzx.com/163acofanav.html

J. 日期与时间
来源：http://www.xuanzx.com/163xexabcdk.html

================================================================================
来源：http://www.sxryk.cn/163nmsnwfil.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163sibgcphl.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163oihckomn.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163otwrnmfc.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163igicacpv.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163grlsymnx.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163jxmqhkim.html

Go:   time.Now()
来源：http://www.sxryk.cn/163vdqpuvcf.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163jsksnhfu.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163uxpioglw.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163zxcgxzto.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163xjswswrz.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163cdmqcmut.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163ujxnkxmq.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163idtpsvkf.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163aarcuukl.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163zfxkinsd.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163nszeqhxx.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163xpspypho.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163kdzovdjh.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163uuhwiauc.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163lybhsrck.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163flczigje.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ymumtpho.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163lzdxjkbu.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163zlekhdsv.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163wrwtruyc.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163rcxgpepg.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163hgzpjhql.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163prkmbxdv.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163yhgfgzgr.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163kjetpuqx.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163glxnnmcw.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163crrgdxnr.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163wpxzdwoh.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163euotbewc.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163vfkolgrd.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163kkvnfbny.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163xcuwnbtm.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163rwhzwlvv.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163hqqwldud.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163entcotaf.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163ryypttjj.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163udkmozmx.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163qfpnwukz.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163evebmnui.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163udtjorwt.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163tdufcgro.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163tzzmswcu.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163bhwdndas.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163dfpqelxv.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163tatsjucu.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163drelubcr.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163vpexnkbl.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163zyyphiwo.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163wakgxnun.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163traledhs.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163gkotmkom.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163riepzuih.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163wkyuilsl.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163mvoprpke.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163ennzqyyo.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163fgefzqpd.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163xakdfhpt.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163jgqyxbdc.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163jougzntm.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163wspfvtqd.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163dxjbvbgp.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163zswkqrha.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163shzghegk.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163nosgbsdk.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163hlyifbta.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163mopmjnyw.html

[J09] 时区处理
来源：http://www.sxryk.cn/163zklmryih.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163dwsuuziv.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163fmzvvcoc.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163tuivzijv.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163owaeqhqs.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163bcqgauzd.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163riovtuof.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163zvmjuxug.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163iifxmubw.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163pcfhcvsd.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163jkcghelv.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163tytemkyx.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163pfysjdle.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163eqgzjpex.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163oexxizxq.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163hcicauoi.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163bopayicw.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163avwrmxfg.html

================================================================================
来源：http://www.aibaodan.cn/163tgxbjokz.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163upllsrxm.html

================================================================================
来源：http://www.xuanzx.com/163envnpeqb.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163jbyrswgr.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163slkxucfu.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163dyxwvnyo.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163kvyehcmd.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163xkfxosmn.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163tmehcscc.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163uriwlfjw.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163noewifiv.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163ugskoohv.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163bytglnim.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163mvvkwluk.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163dznirfcn.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163htfhhlrn.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ovioczvr.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163gyzuetmv.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ouuvxfnc.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163nojvbpxe.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163zugkhxsl.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163fslvwqyi.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163pjrspvha.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163jdgnnnzy.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163yixlmvlq.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163khtonmrx.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163bytkkmde.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163bnrgixdr.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163eecmshnu.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163jdsgyhlk.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163vhcxdnkh.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163svqmsode.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163kdrjcjyj.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163nbjxhreo.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163wvocseof.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163xwbsudlv.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163nigbtpxt.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163golfxhmo.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163qnmmykbb.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163vfcsqorb.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163gqsmsljc.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163gnskepuy.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163hspytrsx.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163rimiaieq.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163bbfmwzpx.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163yxtohcsu.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163dlsqhjpo.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163fjdxcqxl.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163ltayecuw.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163bgzouhdz.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163prmzqydy.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163nyeorefv.html


<!-- 参考信息 -->