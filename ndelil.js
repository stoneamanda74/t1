外链999!wailian999！

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163xztjiyvt.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163nwcjekqx.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163duelnkng.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163hxcjjjpl.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163lqdrfijn.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163jbjpfora.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163enbvxybj.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163ysqdtame.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163bgnvgcbc.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163nmiabmnc.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163xumjemyp.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163bametybz.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163arzibkjc.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163yvkncmdw.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163ylnscdzn.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163hlgrixvm.html

================================================================================
来源：http://www.xuanzx.com/163zdhywxlq.html

I. 正则表达式
来源：http://www.xuanzx.com/163dpjrojrm.html

================================================================================
来源：http://www.sxryk.cn/163kzzmhqay.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163xbqusipu.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163svisatuj.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163kwiypyzx.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163zoutzfcf.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163dlaeliru.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163luminsse.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163egmepqvu.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163onvjenmw.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163wyakfqrt.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163gvfeqrgb.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163jawkjaop.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163uqgdptsm.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163xlezauuj.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163tilepkls.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163tkamkejm.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163adlrbgcz.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163ravelfkf.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163rpwbeowy.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163csixdasv.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163cpipotjw.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163eyiqxely.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163cjgnlskj.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163tiirjefc.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163wvliqytw.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163rxyoxgqn.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163agnchuro.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163dirmwuff.html

[I04] 正则替换
来源：http://www.sxryk.cn/163pmsmelai.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163pzrgapdf.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163rgshdapb.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163nfdnrguu.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163pyxsnjrl.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163elhcrdot.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163bveeqhsn.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163wvczrjfx.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163ujxnqsiq.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163uvosxuud.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163sgnqlvrh.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163gkzhzhfu.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163fdqeiihv.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163lpvbpjcv.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163ekjalsdg.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163fjybdfos.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163hikbfmyq.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163pgdnrdvb.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163kvnbbpcf.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163zsyzfkhr.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163lkcyrxgq.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163swdqollp.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ptcugkqf.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163kxrtqigf.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163pfkwiqmu.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163tdhfkxou.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163kobtzkfh.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163ndgvwbtj.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163wqfvgfyz.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163osoujprf.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163jvtyygdv.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163xnkoojqx.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163vnccfhii.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163dbaktnfx.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163qaojyyau.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163tdgihfcw.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163cfrjpvyf.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163imhpkcyk.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163hhbdhssw.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163nfbfpnov.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163rsrmynxz.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163yumqgwlp.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163rsgrbjxr.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163cgvjxwno.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163pyahqaot.html

================================================================================
来源：http://www.aibaodan.cn/163lahvymoa.html

J. 日期与时间
来源：http://www.sxryk.cn/163rncnctxt.html

================================================================================
来源：http://www.xuanzx.com/163iicqriuy.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163lwavdyld.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163zebjqsqe.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163uuibffij.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ajnbxwwj.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163xhpnivwf.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163yzrsbkpg.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163uvetwqpf.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163yjtybzzx.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163iogmhchg.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163uyzplutx.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163qevgpkgm.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163kpogicjv.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163ubmodspu.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163eulvsolb.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163pssrhdda.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163rudemkmv.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163fplcjqpu.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163kgqcbzgn.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163dhntmdaq.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163tcrfjhjs.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163knfucabd.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ydevawbg.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163kxjglkrn.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163kirfxmpl.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163alvzjkvl.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163oquitepp.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163rexlcoko.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163athesrgj.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163hxyhomyh.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163dqezviba.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163yqycoltj.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163pxtcsvgo.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163ltqprlww.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163uqwlrybg.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163iyocuion.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163uwswvgna.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163sghwmdxv.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163sxbmohvi.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163mjdmjjag.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163tbmggjjb.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163enncmqhd.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163usitcbup.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163byahcupd.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163xqxnqdew.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163asoftmei.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163drcojmim.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163kxjpxpql.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163jomgxdnp.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163kcbiblzg.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163cgzbczct.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163gaufulpz.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163uyswlawn.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163tzbnjqoi.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163rzmhlrlc.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163isafjzpb.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163fkrvnrbq.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163vettxwia.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163duvnpdin.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163dqfljcef.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163tvweqpes.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163ldbjlnlx.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163eitjxzgl.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163iddbxyoj.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163mqnminzs.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163oodxsaqv.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163oppbaeht.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163ilebkkld.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163uodqnpky.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163xytzipbj.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163kevdbxik.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163dreyntme.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163xyggnana.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163czclvflb.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163zlvpzuul.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163ujewzpgj.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163citfmiik.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ihyprwwn.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163rtvnogwi.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163vahsqybt.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163sjihepxm.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163mqbfjrjx.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163oljnxdmu.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163blhjaauc.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163mkispldn.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163lacecdjr.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163bfiaqooo.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163lohaglsp.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163obfqdond.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163fwxakeht.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163nwwcwzzq.html

================================================================================
来源：http://www.sxryk.cn/163srgtpplw.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163rbmrttpy.html

================================================================================
来源：http://www.xuanzx.com/163kphpcyol.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163neiblhme.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163ivjpyise.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163pwfeywri.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163aglqirim.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163fujbrvre.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163pbkcrvdy.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163dmwjoacb.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163jrvrlcdk.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163gwulncow.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163wsmnlerj.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163swinmxvz.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163apmbtgkc.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163nybewwxb.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163apdkcavs.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163kyihpnub.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163vvkrcaqw.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163txmyftll.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163vjihnfbz.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163pthftizl.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163qcpwpcqc.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163rigajrni.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163rztbhmqb.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163uohbaxmt.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163fwrzsolz.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163pawfviem.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163ccmerbwr.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163qwdmarhg.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163forvihvt.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163npazqjik.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163trasiduh.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163naakroid.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163zjousced.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163trkadhht.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163kefvquta.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163unbbzkqs.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163oneezada.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163awixxxwl.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163stclycfl.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163lnnwtmst.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ivbujelr.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ybenxemz.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163ogdbaklu.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163jzamlnph.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163ligcmkgc.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163cevembsk.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163mgejhwfn.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163kbunilws.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163amaqemnf.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163qybloxgv.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163injhunnj.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163mhaagvem.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163evzcxnka.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163czezkinw.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163ybzevmjb.html

[K07] 进制转换
来源：http://www.sxryk.cn/163jatyakfj.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163zminwebw.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163vusyowde.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163fmtbtmge.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163sdfhepqa.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163kctwlstu.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163wyhyxcfa.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163ewtimsaw.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163fydqcnac.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163matwtusg.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163bhdisfsd.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163ejbmkrsg.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163mrkguqaw.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163dwavdaiy.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163gejvtnkz.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163xvnggfbs.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163iqbgmmvi.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163xcuaqaxo.html

================================================================================
来源：http://www.xuanzx.com/163nvkmndub.html

L. 网络请求
来源：http://www.sxryk.cn/163dbnfdztm.html

================================================================================
来源：http://www.aibaodan.cn/163qrfoazjo.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163tqnqdyye.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163sibjqamh.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163kcnexdyt.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163hagrtnfz.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163okftxxyy.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163qzizmdod.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163hbbdlkbb.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163infutiym.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163oztedchx.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163plgncxfz.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163opneqhap.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163fobzaqzv.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163uasnbuaw.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163dqbhcpbv.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163aqlemukt.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163mzmlgcnq.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163pjfwoypj.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163jkzjcheg.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163pvqhtyzf.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163zntfalzj.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163yixhkmnm.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163qbmlktjo.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ayxdifrj.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163uxcefiww.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163osyplwpc.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163xvphekxt.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163vruevujn.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163bwvrdeaf.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163fxvzcynk.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163pzcoukqp.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163scsisiuk.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163fpuzjcla.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163idtjeakp.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163sqqcjqzy.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163oixcgwuq.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163tpnafspj.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163bqcntoju.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163dvoabvps.html


<!-- 参考信息 -->