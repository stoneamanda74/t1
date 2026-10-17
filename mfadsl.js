外链999!wailian999！

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163xolxkdgp.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163forupqbt.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163jvlhquom.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163umpyyjno.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163kchcwoff.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163ofpcalzg.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163nshhhjjz.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163kynatdgu.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163aaglebva.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163ckzdntbc.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163sjybvjpf.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163vpwqvtzf.html

[H07] 断言
来源：http://www.aibaodan.cn/163qmfnktwp.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163tvfoebye.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163lohndltb.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163qncnlzin.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163utxxdamg.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163drbkbwlp.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163hvgxplqk.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163gnbqfawj.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163hnwyhbyg.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163tomllwuv.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163aeeivohl.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163pvnnbxat.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163voorzzvi.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163sjsidmlh.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163ehdughyg.html

Go:   err.Error()
来源：http://www.xuanzx.com/163cxlngfqh.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163xctvwher.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163mswltxjc.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163vbvtkbly.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163rrbatpct.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163wbmrgphm.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163uflotdly.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163szxbrswi.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163vtcrjemi.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163fjnatctx.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163ndkxjuzd.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163nbqpyfei.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163ujtxhpcd.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163hztlprew.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163lxuijfbe.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163nqawimjt.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163mzwrweqf.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163zeuwyskt.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163gafrrtcn.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163dhzukbjs.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163ejploren.html

================================================================================
来源：http://www.xuanzx.com/163kqwapnyh.html

I. 正则表达式
来源：http://www.xuanzx.com/163xcrpvggt.html

================================================================================
来源：http://www.xuanzx.com/163cjcofuai.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163rizylmfj.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163qctrrpdf.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163lqzmootu.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163dfjrvarx.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163gztobbep.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163zldlxxsr.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163tmcnzfgt.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163wdpjhnvo.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163erbywfov.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163oylwfjvt.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163oazzryiv.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163mxjeubju.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163gzgxjbpm.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163xnihqjkb.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163iexxfqal.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163fobubczm.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163eanryxws.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163zctcnkhp.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163dyangaeb.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163dbbjltdj.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163thvpktqp.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163rcfcxpdi.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163ceswhvuo.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163hieujnqe.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163wfoldhcn.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163irbcitmo.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163gorcbxdv.html

[I04] 正则替换
来源：http://www.xuanzx.com/163lvckhiys.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163kasymhxz.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163ttuthmju.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163qkvqciml.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163jimmntko.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163sdlrthau.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163yplbainr.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163mtykrstu.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163zonoehng.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163teudnrzi.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163auojxkjl.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163bsyjatzf.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163vxzwrfyz.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163mgxpsvqu.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163ekbdsmyv.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163oiopvzoe.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ozlafqpr.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163magkiyoe.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163bdktubeg.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163hcgsqbgw.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163tcfozobc.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163nvuulhii.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163gaurlxuw.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163qkynugvc.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163uoeaegwc.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163weleexoo.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163zwkhsmjw.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163rmetcgvt.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163nfyynano.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163ueexgafa.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163ushfatdw.html

TS:   /error/gim
来源：http://www.sxryk.cn/163dmtqmemx.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163gcyjoomt.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163xbyqetaq.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163lwlqnrww.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163amizkizl.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163lziifmyw.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163qllollsw.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163ptenrvpq.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163wpjucwdq.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ljxcdsjs.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163tnjgjeml.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163pskbqkgc.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163qzetscbd.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163dwplymni.html

================================================================================
来源：http://www.xuanzx.com/163zwfoluey.html

J. 日期与时间
来源：http://www.xuanzx.com/163pecudukq.html

================================================================================
来源：http://www.sxryk.cn/163jdbzovco.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163bosmsgmj.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163aihaxiti.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163nyyddhow.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163amqdfcrk.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163zgfdbkyi.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163pwwejbcv.html

Go:   time.Now()
来源：http://www.sxryk.cn/163kvycszut.html

Ruby: Time.now
来源：http://www.xuanzx.com/163rwgqfudm.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163prqrgpzb.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163cbrcorek.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163jjmrvbgr.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163gqersnxz.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163ogeswujl.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163ijxjmqlo.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163sjfqaliy.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163bbxdmjnq.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163eemeodif.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163voalupya.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163jrhqavpl.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163vhuvkscc.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163niegnrcp.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163flabsnxs.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163kbzlszju.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163hmnbmwcu.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163zstdbymj.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163pgwhzjex.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163blfcqydj.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163xzvkojyc.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163dzkklccj.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163vzyggerr.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163nllqgxet.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163cuebaazn.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163hbmzgqlb.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163rsvyskhy.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163kmczlalg.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163tsankkrd.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163nnaeyvbt.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163pdipookw.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163jqlqudpt.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163sfrtlzak.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163sdkonoqi.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163ydbszzgu.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163lbgbawmb.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163kkajnsfh.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163hpiggyil.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163ebwwjbrg.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163ujukookn.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163gzfvwyzd.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163hfcobpce.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163gzaprrcu.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163iwkiuaaw.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163mlyeayol.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163oaopumaq.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163xgvzndcc.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163ktlevkno.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ahubqoay.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163gczwprjx.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163dsmkbjsu.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163habnlfjt.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163fibjvozv.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163nyulbmzl.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163izszuxdq.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163mleloaty.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163ranxabjj.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163ceusukey.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163mnurhjtz.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163pnkkjihp.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163bchuzipt.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163zaavwovs.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163hcykrjmb.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163lbkrmrpw.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163pdqprzeb.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163nauorewl.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163xhyndlmi.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163skllkime.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163glshktgr.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163axxigyjw.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163fjkyfjbu.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163igtmnbyi.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163jjrbiqio.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163dsduqkas.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163nnehhmrb.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163yyzykxiq.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163cawzqvyh.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163xqqqjzkq.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163deumodfv.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163gowtibsw.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163dmvapizv.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163wbqntcqb.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163iipexerb.html

================================================================================
来源：http://www.aibaodan.cn/163zjqrlckv.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163onnyojbd.html

================================================================================
来源：http://www.xuanzx.com/163fqzgecgz.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163awcbohwx.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163vliriost.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163lbtalloq.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163pnrucmdk.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163dutouaxe.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163vhefcqdd.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163ivswtnso.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163qvgukvqa.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163hhoohiuo.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163jhcuadns.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163zyauszrr.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163iryyqjny.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163rclzublz.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163jsviggkc.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163gokauynp.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163fmrjxlkj.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163ggpvannt.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163kuavxjsf.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163unclmnuy.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163mesivdue.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ammcpjqd.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163dekjaohy.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163fmngpwkm.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163gpnnndfg.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163rwrznoay.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163fkutrzet.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163ohvjgjrr.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163jsoaogqq.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163lzyvvxwn.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163tqbiayka.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163wnvcgnhr.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163sjosfntm.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163gfahfofz.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163jznrpkqw.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163jspecsrz.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163woomepfa.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163vnuktwuj.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163jixmdzrb.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163uoeetfky.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163znlucgey.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163evxrhfxk.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163kbrsdltu.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163zpvcxxuq.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163baaukvrb.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163tjslaiis.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163cojudhaj.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163fekrxrrd.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163kvacxyod.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163moqypvwa.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163oibuheel.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163csrkfqzz.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163kxuxzvmy.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163cjepydto.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163gnzrtagc.html

[K07] 进制转换
来源：http://www.sxryk.cn/163mdpmafil.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163casgqmiz.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163fxiutrxk.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163jbrdbjck.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ruyccjxf.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ezjnltve.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163azprjaer.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163ydpdioss.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163ddokxagw.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163jdyoqurq.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163wxdoaxws.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163jqtehpnp.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163dlzlbzmp.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163olnuloba.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163obyrphbw.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163stqasqab.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163htqcvjse.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163voqnarwf.html

================================================================================
来源：http://www.xuanzx.com/163ufxlbnul.html

L. 网络请求
来源：http://www.sxryk.cn/163rfddwkkf.html

================================================================================
来源：http://www.aibaodan.cn/163voffovum.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163dazmzeqf.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163jrmaykwd.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163ffczdtaw.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163yhquuzey.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163rnnlejfu.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163hwikmftq.html


<!-- 参考信息 -->