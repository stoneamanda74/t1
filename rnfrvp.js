外链999!wailian999！

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163lvryxrih.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163bknvegpw.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163qrvmquyn.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163fyochzrk.html

================================================================================
来源：http://www.sxryk.cn/163iutrbreg.html

I. 正则表达式
来源：http://www.xuanzx.com/163xyiadgop.html

================================================================================
来源：http://www.sxryk.cn/163ivvkbgwg.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163vadupkzw.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163pnwuqcjt.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163cpedvljw.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163emnutwcu.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163akcvdkek.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163oksnmnfv.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163ikvivwzv.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163bxfjfbtd.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163iknvwyqq.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163jzwjvwrm.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163azuckyhx.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163xiwkbiax.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163pkbmvizl.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163qlrzhbbw.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163zcvecucc.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163qdawkjxz.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163zzkedllt.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163tughkaaj.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163jrprsqtg.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163xhrfdthy.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163rihiekab.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163hhzmndgj.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163jsvrkstf.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163lbyykhzz.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163qdupcmyh.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163ndjqfqjk.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163kbekufvn.html

[I04] 正则替换
来源：http://www.xuanzx.com/163iokzbxtu.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163kwiiljti.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163rllvljta.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ovtvcgpe.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163iuhsjrsp.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163iihgyoml.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163qhrvxabl.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163fdbffhbl.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163pfnthoqg.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163mvmayrqo.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163npbkzxso.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163uudpofog.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163rbyusegq.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163pknymzow.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163zllvdqsz.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163gbolgjvt.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163mjehtudv.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163huadlqza.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163zlouaaht.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163tcgvhblw.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163fdmdnioj.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163oatcviud.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163gktgtjcd.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163wmiwafnl.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163npzgznww.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163fpdgqfqq.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163atfgwrzs.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163ovwppmwn.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163lmxjvmsx.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163jroqbvnd.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163moxyazru.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163omfremvh.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163foqatrcs.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163kzghvygc.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163pifjyazb.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163xkmapwcw.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163uxjrswfi.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163hzcmahdv.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163cakckgem.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163nfpjgrqo.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163hyrqdcef.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163zfnhfluw.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163wbedsrbg.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163tatskjpv.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163vrkgagco.html

================================================================================
来源：http://www.sxryk.cn/163ualjnaob.html

J. 日期与时间
来源：http://www.sxryk.cn/163xmppddmc.html

================================================================================
来源：http://www.xuanzx.com/163sdoxqxrw.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163rkvmpjmr.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163pcydhitv.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163jjbxevkx.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163tybguzsg.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163xcpvweve.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163qvkogiau.html

Go:   time.Now()
来源：http://www.sxryk.cn/163bhsyttie.html

Ruby: Time.now
来源：http://www.xuanzx.com/163wgkhvgsb.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163cypcbutm.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163mvxbinxi.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163qfermbmr.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163lpczrgye.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163kqekqywu.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163qovkzwjr.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163ghwirtuf.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163qebkmoda.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163axodoeba.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163vdiyempj.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163gskzmqiv.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163ubklefkp.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163lwmljscb.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163tuhtnknk.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163kphwkikt.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163fsprtxpc.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163oelaitxn.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163skvzbbet.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163fflmnvyr.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163nzcxihwl.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163yhdewchm.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163wtpecnhc.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163ovtdsxfo.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163wbhsiplh.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163omultlpe.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163rjhquzdl.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163asufsaqp.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163rjcstvbo.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163oeszjujq.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163cjhpoxst.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163wfdtjjqs.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163nvujxkhc.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163srdapzcv.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163cgcujrga.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163avnacnka.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163hnloupwe.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163dcffjdsl.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163lwjqgudg.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163pvicjumg.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163xjcwenkj.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163jajeibud.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163qjgkkbdv.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163rqumhspn.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163orpduhui.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163pneprwso.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163ydqjbhxx.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163kxshforn.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163fvwsdevm.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163brrhsxcn.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163oiwvrolj.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163sgnfceka.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163pxzmfteq.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163wpwmiirl.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163mowfxjtl.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163zymdbrmp.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163hsoznhdp.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163jcyhbhud.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163tbwvkhbf.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163jesomwzc.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163fqqyfgoz.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163zzinpjlb.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163bymuyuny.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163otfdmvds.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163herksasm.html

[J09] 时区处理
来源：http://www.xuanzx.com/163iecglque.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163qxfdivai.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163rzfahcej.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163kdiauuco.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ddamftsd.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163whhudawu.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163eguzaoje.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163tjnzecfs.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163wsdcvbmg.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163ljfwtivz.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163ffvdnxzf.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163zrxwvofn.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163wexedblz.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163dpxskjoi.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163hcbtgpos.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163cwblkziq.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163bjoqcrlb.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163xhwewwpf.html

================================================================================
来源：http://www.sxryk.cn/163orgmniyn.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163tmqivfpx.html

================================================================================
来源：http://www.sxryk.cn/163meihiisw.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163kznldzbw.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163ncsnxici.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163rqpecsrn.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163exxkrgxq.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163atctigah.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163kledghoo.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163ohkzalvc.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163nbwkxrys.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163oekldnze.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163cxhxokwq.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163pxcvkyel.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163npmoftea.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ilsvprum.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163apxcxgww.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163ywywuniq.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163jmjynxbc.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163pzuavouv.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163qqwiocpd.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163ripilclm.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163yqbcmnxm.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ndupxncw.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163sdkdqgjh.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163uliggoyw.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163dkmxnrxk.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163xxeoijyc.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163maiclprd.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163bcwigvlc.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163mxcyfwzr.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163ifvtfgec.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163cshzjnhl.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163vzgiwnpn.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163kyyqfigi.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163iapnyshd.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163fitecfpe.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163pdjgvnzt.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163zevuortx.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163zucmduvq.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163zekezlbz.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163tigeitoq.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163cpscnlee.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163nznlwvou.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163brnycddy.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163jneybxmm.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163eahdksum.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163yakqnqwt.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163appmpkjz.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163hrdwlxiq.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163muqmkdcs.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163tdycqmnm.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163aoankovt.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163xbyvoyez.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163zgbmetnx.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163qkzxygte.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163ygtatcll.html

[K07] 进制转换
来源：http://www.xuanzx.com/163ddogfyqa.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163zhbznwtq.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163mqmigecc.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163iygzvnyl.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163vpmaizaj.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163bybgnbpf.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163klicvavf.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163lxeotxbh.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163czyexnam.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163qmnlcmfs.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163auwxekmp.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163deneykmo.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163zflqdova.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163urxitogi.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163tcvgzboq.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163yvyfmlij.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163cqyclfjc.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163qnogtuqb.html

================================================================================
来源：http://www.sxryk.cn/163naluslmo.html

L. 网络请求
来源：http://www.aibaodan.cn/163mmbuvthg.html

================================================================================
来源：http://www.aibaodan.cn/163byjvorfn.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163uckqrple.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163kqvitiht.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163mhgfqguy.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163wahjeled.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163gwpepfxq.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163fqdcabor.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163zlagukta.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163wrxfumww.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163slzksviu.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163lddizzak.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163wgqgeccd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163pzhodahg.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ewlgcdjq.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163xubqqetv.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163fzhwchie.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163skdgmwgr.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163ewgmamjw.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163lfchqcyp.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163rnxmeihn.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163qhlqjprs.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163ioorzgiv.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163rpzvpgmm.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163azikbrlu.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163yczkwccr.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163pikdrvky.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163pmbddgoe.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163yqdroaqn.html

[L04] 设置超时
来源：http://www.xuanzx.com/163ffdcafgp.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163jzloinln.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163bnsaebsq.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163utnaylyt.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163yzzhuapg.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163zdzyhftj.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163nlhwdcgx.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163ipytxswa.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163acdfxzal.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163kzzmwqmz.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163mdedbvms.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163helnaoao.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163udyjjiyn.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163hyuhqrox.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163cehlocic.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163ksyekldh.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163dejmlptu.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163ngvnmaxo.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163kbpeekkc.html

Py:   resp.json()
来源：http://www.xuanzx.com/163trgwbmbx.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163lniosuyt.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163hheesruq.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163hlkmiblz.html


<!-- 参考信息 -->