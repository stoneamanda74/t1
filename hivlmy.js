外链999!wailian999！

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163bncvghuu.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163nvlhshss.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163ybynrhnv.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163drqltjsa.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163fadjedal.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163vuofndmh.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163qyrnlvvs.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163ethrtwmp.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163pssysdji.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163rrknqkou.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163zctxaeos.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163qpltqvlj.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163cghslddn.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163erebqtgg.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163fyvkmedj.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163gziwnshi.html

================================================================================
来源：http://www.sxryk.cn/163oahadzlm.html

I. 正则表达式
来源：http://www.aibaodan.cn/163zeawghnp.html

================================================================================
来源：http://www.aibaodan.cn/163ohqbesiv.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163bnvrcqpy.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163znpmplzj.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163cshujzeu.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163rkhowmvv.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ukwzvcve.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163tvudfdop.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163rravzzwn.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163rqadibwu.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163tcuzhcpz.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163gnsxgpvs.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163cbgvscam.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163nfvaffjb.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163gwtstrrz.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163oufsgana.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163yyxikgok.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163oeaioazi.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163easdbwbt.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163mouvnfdl.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163vgoietzg.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163qhyveomm.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163hzjzdiox.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163kkcoebur.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163hkyfnhrw.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163pkhunjrg.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163vpephiem.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163bcskgxiq.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163exdmixty.html

[I04] 正则替换
来源：http://www.sxryk.cn/163pwwbpeiu.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163gqyypprd.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163sylritwv.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163uohyielc.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163whlqrngb.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163vtcqwlpd.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163qbwihyhj.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163okswuiia.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163tcrbbovs.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163myzdevmy.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163tmvmkyhu.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163xehyxirp.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ducvdagj.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163unjcczor.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163ekcdzbuc.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163nlhmlrau.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163uetocwag.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163fkfjlaxw.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163skaodeam.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163uorknyid.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163qvcvyvce.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163kejsijil.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ucdhdrfh.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163vbpuvddf.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163prdwbtgp.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163ljbgsgmq.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163cxcwpmei.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163rasteevx.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163utpnxsqz.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163lfntzdqy.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163snoxgkxo.html

TS:   /error/gim
来源：http://www.sxryk.cn/163qnzanrdh.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163kktfkfpl.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163pixpvbnh.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163apbzutql.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163qhhchuiy.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163nbjzulgt.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163eulgvkpv.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163yrlynngx.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163dtnxbafr.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163cekgtzav.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163pqfeaujc.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163rxfwmepi.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163ordzvzqr.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163pvwtzffd.html

================================================================================
来源：http://www.xuanzx.com/163awkxoosg.html

J. 日期与时间
来源：http://www.aibaodan.cn/163frnbwgtp.html

================================================================================
来源：http://www.sxryk.cn/163dpreihsr.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163xhiiwabk.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163dktpiowo.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163rmayizqn.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163jmyphjcp.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163cdltdzwg.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163gxjpejbw.html

Go:   time.Now()
来源：http://www.xuanzx.com/163eqhaqruc.html

Ruby: Time.now
来源：http://www.xuanzx.com/163jflqsdnn.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163timlbgce.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163qyafpfux.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163zqthlumo.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163rxqptvhi.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163zhyefxhd.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163nczyjnha.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163vcwayaft.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163xkurnmyi.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163onclvwdv.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163aslcxbnt.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163rfvvqqmc.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163cathcezf.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163jfjpzlgf.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163adfvqqzz.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163lujkkoxn.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163kitwszrl.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163fmwtklha.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163vdhrosuo.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163tpbqbmge.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163pcrvkfrl.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163mxmunuod.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163taebumdn.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163htlvgejt.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163jmurndup.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163fnpzyegm.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163detwxqnv.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163esxxnqlz.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163bgfketfw.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163dzstvbbl.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163uublhovs.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163bzruhjio.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163xqpuenvw.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ztehwxpl.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163ciaxgzzr.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163ugodsxjv.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163syjhoinf.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163pvbavljj.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163bumlwpwv.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163ayybmkhi.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163nsooardn.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163muuqoosg.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163pgubtrym.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163qmfrmdgj.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163djvmleqg.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163ufreateu.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163wrjgncsr.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163pzmfcvzz.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163kmlbmwpe.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163irniirmr.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163vxoidxye.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163uymdkxeo.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163qnmsgydr.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163gvufxnmn.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163nuyiyexw.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163trbyjtnn.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163ejmbdbpt.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163hidpengi.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163xlxwzvzs.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163fohiblwc.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163qudfcbir.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163ddkbysrn.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163qzupmkfw.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163fokszuxy.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163zumdhzsa.html

[J09] 时区处理
来源：http://www.sxryk.cn/163uqdmdpwn.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163wdiiijif.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163ulxhompw.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163vsctdicx.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163xwdkjhfi.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163zwnngzfe.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163gmsxdxns.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163ncyongbd.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163tlqobpxd.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163fzckxhhp.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163wsgmocvf.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163uyvlbmfe.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163ggyoxjst.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163thyegpps.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163haidjfke.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163lqkowepd.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163rmaxwkam.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163wlgtrohg.html

================================================================================
来源：http://www.aibaodan.cn/163gcgluhvh.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163cxkbwgxn.html

================================================================================
来源：http://www.sxryk.cn/163slbkrwwk.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163azwhdccp.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163taeienrk.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163kxsqmkua.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163pbeajfmt.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163hzkdofkr.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163jiolkfye.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163tspiiijo.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163vcqfvsqp.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163mzsvmozt.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163tkzxqnrd.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163enyunmmq.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163lvtsizzh.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163lxcredcj.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163npfzgmxe.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163uvwohnmp.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ddujvtkx.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163swccgxnc.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163udzdfcax.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163pyskhvrj.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163ddgyzhzy.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163giuxmpuc.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163yjqqsyuq.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163zicmpkgi.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163utqsrate.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163bduzhhnj.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163symiowwr.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163dulbgfuz.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163ohyrnqvg.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163cfehmimt.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163pajmyidr.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163remmxskb.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163wgrwgxbl.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163ugvfcfnj.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163vdxzndag.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163lyfhkzhm.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163mpqlgaiv.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163olctrxdx.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163dzcwidhm.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163drlajugs.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163rtolriux.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163rpgrpckf.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163mufthjgw.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163xrmtzsjn.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163dddefgyd.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163zmmdknor.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163lifzbpym.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163kwobyonx.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163miodtjkw.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163fsluodwh.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163dbtcqxli.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163xhwckzjb.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163jvkdjsze.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163ubuojnki.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163kmwdroti.html

[K07] 进制转换
来源：http://www.xuanzx.com/163tqsvfebz.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163ihuhqaea.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163xddlsyjp.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163itywjsso.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163prtvduyj.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163egwmbnox.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163suezoblo.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163ytrfxkck.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163gqxlyecp.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163otpnimsv.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163dfuikbrg.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163oarjeccr.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163vyqvpfhm.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163wlylecnb.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163dbiwvkbt.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163mtgykncl.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163bwujcnbc.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163iliectjg.html

================================================================================
来源：http://www.aibaodan.cn/163tfduhsoh.html

L. 网络请求
来源：http://www.aibaodan.cn/163pctcdpmf.html

================================================================================
来源：http://www.aibaodan.cn/163mfgequxn.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163myqiqqpx.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163zmxorpfm.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163hqhvunnd.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163ibparwkq.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163dxlclmmi.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163hiwdmysn.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163uqxtleut.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163lweifteo.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163qakawche.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163vvymjksw.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163dmacudth.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163ckdhqdpq.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ydljoqbe.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163gplxdben.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163qsnvhjqg.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163yoodltnq.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163cpcxrgpz.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163pcnrtxhr.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163qifcosub.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163ulgyrpvh.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163jjwsmuqx.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163rcfwufrv.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163bkbmbkqk.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163nwxsxvcv.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163srzanwqe.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163tkmcmydc.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163topxduia.html

[L04] 设置超时
来源：http://www.sxryk.cn/163wofziifq.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163qcsnguuf.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163nypnstqv.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163gopgznwt.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163rylorwau.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163byxuehnq.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163uwhribbz.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163yqnlkbmo.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163juvqelci.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163fxazvxhl.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163pwpdynwg.html


<!-- 参考信息 -->