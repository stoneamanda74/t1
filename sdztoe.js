外链999!wailian999！

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163jlrnkmek.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163zjturayp.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163xfeoxosc.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jsgxedho.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163akozbaun.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163susxvfmt.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163whjornry.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163mugxplkn.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163mljvfqcd.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163bovpdmkw.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163huklusdp.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163xkozzbke.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163sttpzrnk.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163kqlmictm.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163uajipocu.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163wggaivnt.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163ylngynvu.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163leiohmmp.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163lpmybjcd.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163kftdfqne.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163lwrzehpf.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163uxcezlnr.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163tnizihjk.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163tdkmnxaq.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163xrlqbxmn.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163zcwmbpxt.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163inocpgbn.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163zgxygcpv.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163mlwwwbrd.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163lcdthjpd.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163txgzeulf.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163dibkrmll.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163lnergwfe.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163wcyjgfop.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163tnfpxmti.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163cpdarfls.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163khyfhpjk.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163darlcsvg.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163yxjuotia.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163nwcafqla.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163qbwdpopj.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163xzrareio.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163nfikzebb.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163cmnugqhb.html

[H07] 断言
来源：http://www.xuanzx.com/163qsasoitm.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163ftnyxorq.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163dppjeeim.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163cfngwebh.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163azraqlko.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163eedrjmgt.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163srdkioss.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163nujibpis.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163whtiuezk.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163jethnsro.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163auarswst.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163fsgfxavc.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163bbkmepqk.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163dxzeflpo.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163mgegizmz.html

Go:   err.Error()
来源：http://www.xuanzx.com/163bgjmknyb.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163ozbstjfv.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163aetctbds.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163khaqzdsx.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163ldlwhjty.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163gnknytcw.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163qydxgcey.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163fgjnlasa.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163ffzregcd.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163ofhxehgg.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163sgmqkvwd.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163nledzcye.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163adkebqsi.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163dfxavfws.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163fizdkhro.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163qwnijmsj.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163lcbyosgf.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163gvmnobrs.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163embrviaw.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163hbgkcchc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163znigfqhq.html

================================================================================
来源：http://www.sxryk.cn/163npcnxhur.html

I. 正则表达式
来源：http://www.sxryk.cn/163wtfrmxez.html

================================================================================
来源：http://www.xuanzx.com/163cjlokcpn.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163rzibpeqf.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163sqpqliwx.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163nehazafq.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163gmdjiaef.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163smmepssc.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163cfuzfffl.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163qrndxrtb.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163giehpvyx.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163mvnyqsyj.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163blqlvjyr.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163zqcevcaf.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163ujzvlueu.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163zvngnkxr.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163cfqthwxt.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163oyytnkea.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163djqidkgs.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163qaowkfpl.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163embsiwro.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163nvfrlziz.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163zihlvbbd.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163rpfoopsu.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163qmqhbcdj.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163vmioieay.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163zmtrierh.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163iibkqisb.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163muednczx.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163mfxrhbda.html

[I04] 正则替换
来源：http://www.xuanzx.com/163juqshjis.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163hurqxqsj.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163grdlpzks.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163xplrnecv.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163kbijwopk.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163sdfyotpn.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163bxaoluji.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163ylkzitqz.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163htpqaoqp.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163usceiprw.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163sphykqgj.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163bkmwvejf.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163nziyocbi.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163xttnntxc.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163ywafwygu.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163lbwehxbs.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163zsvyewey.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163ptvfvoox.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163rtvsuatv.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163txemdtjk.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163foqzqjph.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ivrqkjyx.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163qeazqkaa.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163qqvjhkpo.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163djozvqqq.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163mooilrco.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163wpaeatcd.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163jydpwutk.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163mxeoebea.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163cvcrmdbc.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163qapuawdn.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163wmrdjwkg.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163epkgxfdi.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163yrojizpf.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163oxnfdcor.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163xcimqaiq.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163tmznizfk.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163lkwlgiuk.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163cfockhgd.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163sjsmrdxr.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163mliapuyw.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163hmvpmonz.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163wxolhzzz.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163qpurpsls.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163usqjqfqj.html

================================================================================
来源：http://www.aibaodan.cn/163hitbfpyi.html

J. 日期与时间
来源：http://www.aibaodan.cn/163qrrmlgzt.html

================================================================================
来源：http://www.xuanzx.com/163etwywfkh.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163dmbwngcq.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163egughbhx.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163xpxvcadn.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163lradugvp.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163jrcsvupm.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163djcufdgn.html

Go:   time.Now()
来源：http://www.sxryk.cn/163piifbwgv.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163yomzhday.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163szfpwjco.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163wncavkzt.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163gptggasr.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163fhdpbrvd.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163lnbaabkt.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163pydzdggn.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163xoxutwmo.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163firqedcb.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163yzbqsmrf.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163mseqzyor.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163ecdgnkoy.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163bdbrekqp.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163komikxmi.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163svbdmecl.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163rvekfsyn.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163yuwpvefy.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163khautolr.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163jptustrr.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163nmknadsh.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163oulhsuhu.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163hywysvlo.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163plfhnpgh.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163yusvyrqc.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163qtolqjcq.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163ueprbhkv.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163ihbofkzc.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163aqbzvrfb.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163tmepttuh.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163lltchfdb.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163pwiuovgv.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163wpnjwpko.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163mjbatgfx.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163poanwdwh.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163owdhehlr.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163llxyhijh.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163bkonlyka.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163mqwssosi.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163lqzxplva.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163oglknaiv.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163djxdouwo.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163ikvvpyla.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163qqvaubmb.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163zfypxvwj.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163ghskkogl.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163pwxxtevb.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163wbzpches.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163atouorva.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163tiwrutta.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163ecleyktp.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163osuejkxu.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163vzupyewi.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163bmdzpzpc.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163dnlizeir.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163qlqpuoll.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163hsdjogdv.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163ugrwgunb.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163owftggnp.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163cxxjfhqf.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163ogxqinzz.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ybcozsbg.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163moahfcht.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163isnvfajp.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163muihrlxu.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163exkekrup.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163obnbrlez.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163rrjpdtcb.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163haghegki.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163dtzehltq.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163tiwwrglz.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163snjsklkb.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163nnohdwrs.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163sxgjngqg.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163bgsgpnbg.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163nibxwaem.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163vetorrto.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163fgtpphdu.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163qcbegieo.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163mwemqgwa.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163yoxxkzcg.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163kydzngmb.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163jfvhqyvt.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163gsndxgyh.html

================================================================================
来源：http://www.sxryk.cn/163jdqtksux.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163xxnvbpiq.html

================================================================================
来源：http://www.xuanzx.com/163bzufmtvj.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163reewzgom.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163bmlbxgoj.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163cikzrncb.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163oswjsaao.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163eqmmcltc.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163haexevch.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163enljnbru.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163cteebroe.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163vewtyyzg.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163elpythrl.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163vbyyrhjw.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163gozuwlak.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ipgmpfnk.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163yoqpvgzw.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163fbtzmlpk.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163hvjyohpq.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163wwmoypia.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163goafxgdf.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163gkwormxf.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163czjxhlak.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163natvkwdk.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163lhtvqsle.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ldnzpoxx.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163gkuxpraf.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163sxqnsnvx.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163glnjekfz.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163adsdbffp.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163yqjjcvpz.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163syxqxzuv.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163rmqelwsl.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163hrffhghq.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163csnhmjvg.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163jnzbjkzb.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163vgidciss.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163hizjbfbk.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163zaqfdlmh.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163umjnkfrl.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163lzpwxiyn.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163iaazhvcf.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163zoqblosj.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ooclmmsj.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163ndjbkqsa.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163ytskndpf.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163kbedbmwq.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163bnwxdegm.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163asjxidgl.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163sfkbklnm.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163lsnuomxo.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ghkkhprv.html


<!-- 参考信息 -->