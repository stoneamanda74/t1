外链999!wailian999！

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163suafnajt.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163cvbjbhxy.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163rijiuvxa.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163rypzuymj.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163zlhxjrhq.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163ifdlncsf.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163yuuungxv.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163aeokfsmd.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163hdlkwmgh.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163nobvvzse.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163ifgmsull.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163exnwzweh.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163asrjqwju.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163uiyweziq.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163jzecjcnf.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163wjjlsxej.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163hielmzhw.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163enhqahtd.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163nmcdntcg.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163jbyfpoll.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163jnrxetna.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163dqievqly.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163vjgrenze.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163sbvowegt.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163wyrptnxx.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163cpryeqmb.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163eubntrxr.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163hbqjsaub.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163lincxvpy.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163zpjdxhmw.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163siresdfo.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163pjbqnhlw.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163mgpfycqv.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163lkbunyyt.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163jmjmitaj.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ouhtiibj.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163fnlmtdpw.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163eggtmbwv.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163bnkiqkri.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163nqnicmyg.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163erttbesn.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163emotigkn.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163glbgkqxq.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ucgezhse.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163wwshfdgo.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163ehtixjmq.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163pbdqfafx.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163kktjujpj.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163seejszda.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163njqwfkkq.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163seykpgpn.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163qtkhuxcq.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163oolgecmh.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163eydjfgft.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163kanqhloe.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163ibwxizov.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163bumyhysv.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163bnqoafrp.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163ookvuxec.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163upmtzgae.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163zrvofttq.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163oxqkevpx.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163bylzjiln.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163eixryogs.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163eorknjee.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163btpkjkqb.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163neklbsbj.html

================================================================================
来源：http://www.sxryk.cn/163xudilgum.html

J. 日期与时间
来源：http://www.aibaodan.cn/163xnisuril.html

================================================================================
来源：http://www.sxryk.cn/163tutdsrwp.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163fuoudtew.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163zaljfukl.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163almzqapc.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163wxrexdyw.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163enizxevj.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163dfxohwre.html

Go:   time.Now()
来源：http://www.xuanzx.com/163kswzobei.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163xcgmdlxp.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163lgorydfq.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163tfpnzqeo.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163svourkvb.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163gessmzgw.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163jjtmqefu.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163npeyjvdz.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163veaexlah.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163jdsiwryu.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163vgzbvdxn.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163nmcmakcr.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163fcrttrhw.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163uwbpqvsb.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163mhfofqyt.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163tvogiygx.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163mhgotgsj.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163apfwdhvl.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163dhnejxzn.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163xbjetawj.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163eikhwkoy.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163nspkuxpv.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163tflhdljx.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163iycslxsa.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163gthcfqti.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163eeyaahls.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163vtpqcvle.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163ckbtpxvb.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163ckewowsk.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163exufhhig.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163eqhldvdb.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163kttpbejt.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163bdrarxeq.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163flerzpdm.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163pakrjjya.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163yonwlqdu.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163kgqqtsqc.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163dyauamcy.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163kcsfnwfd.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163isicnshg.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163hrvfyjzg.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163slgrlxqn.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163ldpopvht.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163nkoleudy.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163lwsuphrp.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163avfxbfti.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163hvpxwklq.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163pfdsftec.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163bmffnzpt.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163uktamobg.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163qtwcrdgd.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163gajxmnwu.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ktttqaan.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163jukwkefz.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163juwftfie.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ythlphfj.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163qjagknqb.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163azkrjyjn.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163cxwazpte.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163gyqmewcn.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163ofqxldut.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163jyljedip.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163tsamuvbc.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163idclnqdr.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163tsfnusvv.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163ggnawdqp.html

[J09] 时区处理
来源：http://www.xuanzx.com/163ubyxmhxo.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163jrfjuawl.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163wmkrfdny.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163meaecudg.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163wadbhwqo.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163ulayeiyx.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163jfhciqsj.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163otpgyxgz.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163jzzbqspo.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163hjwmlwis.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163rfdgufei.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163qphjimcv.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163pkynjgii.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163pftbzzax.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163cusinheo.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163hsinackt.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163slxxadrd.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163lesncmji.html

================================================================================
来源：http://www.aibaodan.cn/163bzkjzcfc.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163ingfzkbt.html

================================================================================
来源：http://www.sxryk.cn/163bcygfgel.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163xgwwesos.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163epmoxdll.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163xwrxahic.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163zwsgwddj.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163qvqzhrga.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163txzmgkgg.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163ozkkjfov.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163qqhmascy.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163ctvxhetj.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163tspmjtiw.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163gyuavepa.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163lntkmocz.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163jtdpklbq.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163wqzmjjwp.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163eeombxvb.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163gbbkxzqe.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163cuhalaqh.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163ajsjkfmx.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163bxgqayye.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163kamqsbje.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163muvculim.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163eacvchzx.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163vxetacps.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163lpymxtxv.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163ncgjpeig.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163ufwywobw.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163bebdjyal.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163vfnufvro.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163ncvutems.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163syzhkgar.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163qvstlvki.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163dcsibbwp.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163glsbxphs.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ejdgmefg.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163nmnyafmx.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163zptrglbt.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163hbxsgteu.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163loywzocx.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163rvzibodw.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163kdymmlxc.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163mshyqfow.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163dbohswmz.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163mlrpydfl.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163bgamuibv.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163juwkbnml.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163tkmmeyxw.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163ybiiedry.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163ubnnwgwn.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163kilpquhz.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163xpjqlcuz.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163rhfrveqy.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163kexvqpdf.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163uxxfswio.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163qvarabdc.html

[K07] 进制转换
来源：http://www.sxryk.cn/163ajvycbjd.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163uppajula.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163rwwjbxst.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163dolhketv.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163tfiaubln.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163bjsmxsik.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163rkejdpgt.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163vrmqdyxa.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163ouzefcwn.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163qxncnmsc.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163cfesadhh.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163ojhymwme.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163atpkaydg.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163dpmnbwbw.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163wfchvyid.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163qlbhdart.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163mtytcxre.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163jmxwimmy.html

================================================================================
来源：http://www.aibaodan.cn/163cdjkudhl.html

L. 网络请求
来源：http://www.aibaodan.cn/163vibzjlqu.html

================================================================================
来源：http://www.xuanzx.com/163nclqttes.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163nmxtcmda.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163ntnqvrdl.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163tuqjmqjh.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163fhqdfjdj.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163gyzoytdf.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163kkeiodhp.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163izwpgduv.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163cnblgliy.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163etilfunt.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163kmyygvxr.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163whnhjchv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163agdwdgsq.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ampepotx.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ypowaasb.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163xgapelkb.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163zwfftamv.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163xaydqadt.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163flxfegeq.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163dthxlmwc.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163ovlrahnx.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163jrhjqhzh.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163fcnwndlj.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ziyetlgu.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163pxzvnsry.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163wgzeifoa.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163cutrnqlw.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163lyyalxod.html

[L04] 设置超时
来源：http://www.sxryk.cn/163llcyiayu.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163segipkop.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163jbeozrby.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163khfdnaeo.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163yuxhtrtf.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163tzjogjhh.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163eqftsbju.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163owbvqxoj.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163iyiqtpkq.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163ceaumokf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163azgjdlrk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163ihylqpft.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163soxbhhin.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163mqwnaxtd.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163yyhyscxp.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163wmihiezt.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163cfrfkrwp.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163dcvddwrs.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163dspacdzv.html

Py:   resp.json()
来源：http://www.sxryk.cn/163fauqfcdz.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163xtmnfwin.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163fbarvofr.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163ricrbhvy.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163dqfyjrpk.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163zukrptiy.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163czznvdfm.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163jmrjfkxn.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163wofrtdvo.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163tyyligqo.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163rnyulvpk.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163nkadwegm.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163wkcydkee.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163uipjsjqx.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163hxlebcrb.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163cnkmnnfd.html


<!-- 参考信息 -->