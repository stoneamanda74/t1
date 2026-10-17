外链999!wailian999！

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163cbbwxden.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163sfacpczt.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163bqrhncks.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163gyrsmeez.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163sdqhhukp.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163otxbfryp.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163lhisztuh.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163vrrabjar.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163irgpabme.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163mcfgagju.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163gnnwlyxa.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163gzufoxpj.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163vciixbwa.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163ctprgznc.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163sdanqjhg.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163emdwvidt.html

[H07] 断言
来源：http://www.sxryk.cn/163jmsxvmss.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163xhcahjyf.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163ttxztmob.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163myrdxink.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163bkrlyzho.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163benmkvkg.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163gwsdlfuy.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163ijzzsjeo.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163vujkkwnt.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163ertgatwc.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163kxosxhku.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163ugkyzmqi.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163uwrqlxmb.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163cpfrqnat.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163sodirzvq.html

Go:   err.Error()
来源：http://www.sxryk.cn/163rlwgomvp.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163juvxhhjf.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163sltegxtz.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163zqhddgbe.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163gpgebwbi.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163khoftvnt.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163ttqnagvu.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163wynwnkgw.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163wsiyvsye.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163wdsncwjy.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163anworrbi.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163fxwsymxr.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163ymwjqagu.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163jeuphdvb.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163xcaontju.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163sipfspza.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163almhyomq.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163vnvgsbkb.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163rbnhhnfe.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163ucbalsik.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163engrgzlg.html

================================================================================
来源：http://www.sxryk.cn/163ftrojhps.html

I. 正则表达式
来源：http://www.sxryk.cn/163jvdudkki.html

================================================================================
来源：http://www.xuanzx.com/163bxxlrqog.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163zsccqyal.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163rnecyeye.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163haseofvl.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163tdsjtcxc.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163rikkcsje.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163zxtthzvk.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163etvlpypq.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163tkqegjfh.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163qtklkwvy.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163sgtatvqu.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163qpcpmhpi.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163apjthpcu.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163xgtoyqie.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163nohrwtkg.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163voiqmdes.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163lqtayneh.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163ijoicjys.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163pomgwngo.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163pxnpjplv.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163zpgmhpoj.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163aqinxjbi.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163iqirwjqe.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163vbjyuuxt.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163tninxhyj.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163zalxjgmw.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163ialouwyy.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163enanzpdg.html

[I04] 正则替换
来源：http://www.sxryk.cn/163beispapf.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163mdeheeix.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163patnkjxl.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163qzjcvpfq.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163yyvswnjl.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163oxmbgnaw.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163scukhzff.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163wyymalrc.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163wjqtozac.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163jxcxvrlh.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163olaxnyeu.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163rhkqzbkh.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163urdlpobd.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163faibztnf.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163vmhyzktt.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163suylhrnk.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163bjtcgzlv.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163bcdjkjzg.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163jzamtlgt.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163irgpgpbo.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163rblbksrd.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163nlgqzkws.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163lykyjpcr.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163kufcbrzy.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163qcosackg.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163gtenzsyd.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ydzmrxqv.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163uilxjsqj.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163yprywbqj.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163igmnvauf.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163dcrwsvle.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163urndgcgd.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163sqhofsly.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163bnfhucqq.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163azqcirgp.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163kvkglpfr.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163bxeaqhjn.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163xvrkzjca.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163numgvbct.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163apmfacyv.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ervtojkk.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163nmjcvklb.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163wipltpvn.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163tyxunwlm.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163vhnvfzvm.html

================================================================================
来源：http://www.xuanzx.com/163cjcierlq.html

J. 日期与时间
来源：http://www.xuanzx.com/163fcsngews.html

================================================================================
来源：http://www.xuanzx.com/163hsdvqzne.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163xipfkvby.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163typtpttz.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163dcbkwwaf.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163tkujgnpa.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163zydveyxd.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163opquqozf.html

Go:   time.Now()
来源：http://www.sxryk.cn/163qjfjyztq.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163iiohehwy.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163nleotlro.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163xafbvgou.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163rluykmmc.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163enoqhkkp.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163bixnbegp.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163tncuesmf.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163mfbxhqgm.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163nbdznxml.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163nfiyqpzi.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163xpcumtco.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163kdzkqpml.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163xcrzbols.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163ebfcfapl.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163qlwsdpnf.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ntrfvgjd.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163bcewuejk.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163fvfehuzu.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163hskiouog.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163cypxqmsw.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163uucbypqc.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163ijktzifq.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163huvrkbxa.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163qxzblutq.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163ssstfuyc.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163avbqlwev.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163hqrfdgaa.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163kdmkhvew.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163mlrqcrcg.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163cqfkktle.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163spgyyifc.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163jsyrvmmu.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163rwcmubcr.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163otznneic.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163wejcytjl.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163ssgvqfrv.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163kazwsims.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163ppimqmmd.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163ujqzvdcm.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163yythhjci.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163cwootieb.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163dtyfbkhg.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163oywzmvnb.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163dnkkrfrr.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163gozmggtv.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163yntxijml.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163cxwwzfrt.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163tyymfqtq.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163dqvuidyl.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163klsxsrsf.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163gwdddgqu.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163krvjmijv.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163hfnwjmaz.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163uedvgqzk.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163fwzidfnk.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163duvtwybi.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163pyzwebcn.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163ixiotspo.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163xapepxud.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163bkgpljdy.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163loyotamg.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163qtizfwux.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163zohagmfm.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163hafjvrza.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163zieoujji.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163qqftqrwb.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163hgkiiojo.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163vlrxhsit.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163rcurrhvy.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163kwiwvyfs.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163orcmsiwf.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163amrrfvfg.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163axzevtqq.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163qycnzldi.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163nyzaebly.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163bzmdwyft.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163jzpndius.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163lpxllndd.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163ivleyend.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163gjnglego.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163xfcjtpwk.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163bqigpmdh.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163rqldftlu.html

================================================================================
来源：http://www.sxryk.cn/163hxkasnas.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163aowrtvrh.html

================================================================================
来源：http://www.aibaodan.cn/163ikydoagj.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163hnbkssqs.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163ojtmscnn.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163jxjeuqqf.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ozftgtsa.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163jivlmblx.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163zzkxzoug.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163pjmniilq.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163hxctklvx.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163znrrhzzw.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163lmmdvggt.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163trrwpypx.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163yluceayi.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163iovrgjki.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163yxzzxvyi.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163qlbgdvul.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163befikruk.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163zmvsxyok.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163hntaofho.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163akgayuff.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163ojaztiqd.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163xwyboygc.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163nnvqfiwl.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163zsxmkfhj.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163rwsipqkw.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163tcddmwqa.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163shnoqseg.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163nfgjlyde.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163hwtlcwdo.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163spbtwxhq.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163gxruxjpd.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ewwvgowr.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163rlidgmaf.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163fsmhmesb.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163bsvdkctw.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163mgrezrru.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163vqphuprd.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163cupyfnut.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163ctmoifjg.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163npwrlzxi.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163gkhzwgnb.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163syktzdug.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163tllyazoj.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163usrilyrb.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163nbazragv.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163tlqgupsw.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163onkuyyio.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163xklhuhoz.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163fcvaevrx.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163hprsljdj.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163mhgfnskt.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163xsegunyv.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163jetzomed.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163mzjjxopm.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163mtsbohsn.html

[K07] 进制转换
来源：http://www.xuanzx.com/163tilmmtdh.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163hdbcywbv.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163mugkwpdm.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163fzokdsia.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163khyupzul.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163wpsidiih.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163lifhfsnr.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163attvzcza.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163atrzamxu.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163aadhrrmj.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163lyvhoxnc.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163ftvtsihl.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163zjixvvad.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163nuhlkush.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163knehrnlo.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163ysbydkgl.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163frqszaks.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163caqkqbwr.html

================================================================================
来源：http://www.xuanzx.com/163cluhvuvc.html

L. 网络请求
来源：http://www.xuanzx.com/163xddxxpiu.html

================================================================================
来源：http://www.aibaodan.cn/163aonxuhcq.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163gwbqhbwf.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163sahqeusu.html


<!-- 参考信息 -->