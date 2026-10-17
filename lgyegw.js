外链999!wailian999！

================================================================================
来源：http://www.xuanzx.com/163ggimilsl.html

I. 正则表达式
来源：http://www.aibaodan.cn/163nynbriel.html

================================================================================
来源：http://www.sxryk.cn/163fbrrzhjd.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163jmmotinj.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163nrwofnbo.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163ocimojku.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163chdhbtmw.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163aqyuncly.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163trlfbvol.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163othwzbdr.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163wcyptcur.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163iheajmiw.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163uilejivm.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163xzpxvgty.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163qvypilic.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163kqsnmcps.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163eqqrmkxw.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163poyeapst.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163selcedbq.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163iiuxnrci.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163rmhuwcsf.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163tgiwfnbh.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163cxzjpdyt.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163lqdxuicb.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163yksrvuqn.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163etrvugzi.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163kltldvee.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163bptuavta.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163jcajbhvi.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163uivpfyom.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163crebztbs.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163bimduyto.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163kigxkceo.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163tjhdxoft.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163dhfvzkyx.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163vupqeaku.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163audjbiip.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163shfdcnlx.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163tndvjrje.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163mmedfgxq.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163skxlbmeb.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163ggawkvqz.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163uyranluc.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163wnqepfhq.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163vybwrqrt.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163xotmiqzs.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163enoutzqj.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163zsroclfs.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163tulbxjfy.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163wycurreo.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163mkujwdwn.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163vezsnalg.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ptuvivtf.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163lhemyign.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163liuxdlua.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163xvrhouov.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163fdugzniw.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163uabswbtv.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163qmewykiv.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163iyzswjau.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163xpwyehmu.html

TS:   /error/gim
来源：http://www.xuanzx.com/163jkwrthxq.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163pigbalfi.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163tujanrag.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163zolckpxn.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163sopgfqdj.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163zpielmtc.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163hdstlyxg.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163knfwhxsd.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163dpcfrxeh.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163mnyvyoaj.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163bzjvyqmo.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163yrbvycyr.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163rvrdotzh.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163pwoefend.html

================================================================================
来源：http://www.xuanzx.com/163vekfrqnn.html

J. 日期与时间
来源：http://www.sxryk.cn/163pipkokoz.html

================================================================================
来源：http://www.xuanzx.com/163otzpqlet.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163gpzkzpyg.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163jsjimljp.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ubhugvsk.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ajjyvuof.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163pxmxpkhn.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163ijtmovxs.html

Go:   time.Now()
来源：http://www.sxryk.cn/163tkszsoju.html

Ruby: Time.now
来源：http://www.xuanzx.com/163qywugmsq.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163gewityzc.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163xjyvsdhn.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163wjrtwajq.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163bjazjwdb.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163ysizljki.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163mcezfzot.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163yfwuului.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163xdzaluro.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163wmspcamp.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163nwhhpvxj.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163vhgmmbva.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163eavqupyo.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163svtossgr.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163jrlravjl.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163johzkflh.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163vkolpeik.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163rrkdejcb.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ksglzozi.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163wsdyvylo.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163qdazqtlc.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163ipsomubm.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163fjhuxhgj.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163cdhviglk.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163tspntwcn.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163yiaedbvb.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163kcqhjbkq.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163esioyeok.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163ndvhetvg.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163hehkjduc.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163bsxbmqra.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163gljdglsd.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163dupezfgc.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163rergataf.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163bredywxv.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163laepzdgz.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163lofsuois.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163bopbxjha.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163shdhwegc.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163kwneeggu.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163vrljwcnj.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163ewvvplot.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163pnkgdbdh.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163zcobfldl.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163gbiuzfgn.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163hxgudjgf.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163ullbriwv.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163wcapmlkc.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163bmiwzlbm.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163xbecyajj.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163djqtkajq.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163sbjbfdxl.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163htqckkeb.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163zuqlatyl.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163pabsqqpa.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ghnxhsyp.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163yxplvrwe.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163yrsehaad.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163gvnmhenm.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163ikwgedxv.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163hpwrwjqz.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163xwgzkzzf.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163zyteehnw.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163uxlkxjgu.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163virioxet.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163mmzyssfi.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163gbbhoeht.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163cftldtod.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163gjegvcjs.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163jhruoewy.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163fzirnfck.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163oeupnenp.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163infsftih.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163ekinslwm.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163ecozwiqd.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163qjoppfjm.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163kcelwplt.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163tvuzknhb.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163ovwpabdd.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163vgzsxyjk.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163ydcjsvqb.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163kaumpaax.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163xwlwsbbq.html

================================================================================
来源：http://www.aibaodan.cn/163tmmpozrd.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163zcypkqyx.html

================================================================================
来源：http://www.xuanzx.com/163pkyyymkm.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163didiachm.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163jfybclzb.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163pkdplaau.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163htafwvxk.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163clsuhmic.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163djvzssmj.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163ebeytvqj.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163ksmgowtg.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163vdctwnqf.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163efimwlbg.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163zvgsypkf.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163knwguylm.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163tlnhvoij.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163rqbjwrkm.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163zypggczg.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163mesriwnk.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163ltadqfvi.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163zynwhskt.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163tponlrro.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ndahyuwe.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ohqjcbxb.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163uqlnfxzj.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163zknahuvw.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163ytjskdtk.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163lfymlqeb.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163xlwyvbux.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163ikwclvin.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163ilwskjlq.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163xvyxxucr.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163ochzarfb.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163rjvozzyl.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163bpmedolv.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163rcxrjagk.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163tecocslr.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163dzpkhgbq.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163awzkwvhb.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163nqqsjkya.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163hlamkrum.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163ixbxdihg.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163fblqspge.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163cbxssxrk.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163zjnzuxqy.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163bkfnodom.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163oqmuxqex.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163wczqxycc.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163flngrywz.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163hmpcwfvb.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163ffasrwxo.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163qcahomwc.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163cjtzhqbc.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163cbfusnwi.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163xoimxqcv.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163znvieexd.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163aqxpixmk.html

[K07] 进制转换
来源：http://www.xuanzx.com/163fsmkblhc.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163civddsji.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163rwlxvflv.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163pvsmuvwh.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163idrrirwr.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163nhylhaal.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163bmgqknhh.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163wkgauxmz.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163cvejrpia.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163rphhcclm.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163xklyzira.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163htqyanyq.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163uklzkxlv.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163qxxpbkye.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163herhpock.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163psxfhdzk.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163nvwxdzcs.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163bcmrehxs.html

================================================================================
来源：http://www.aibaodan.cn/163grvodrvi.html

L. 网络请求
来源：http://www.aibaodan.cn/163eqhlkoqb.html

================================================================================
来源：http://www.xuanzx.com/163tguozdyv.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163zjrvwrbf.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163rtcdwovg.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163uakdglik.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163fxtudhzs.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163yvugiyio.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163datkffah.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163fqpkbcus.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163hfrbxqji.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163kmaoyqek.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163aqaaqzji.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163dcvdoabw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163vdlacuql.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163oifoikxa.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163izyfsirj.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163ccvputtf.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163cvzrrnvm.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163gxnsgyul.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163poruiwbn.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163ltknctxp.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163ftfxiqew.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163wlkfmkcq.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163viidiwsk.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163qyxcgdan.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163ybgotekh.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163vqjtjucl.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163fgrxnexj.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163zldqniky.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163crbqisjr.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163dsavsnzk.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163djykorbt.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163uktfoecd.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163wsvgkoum.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163podzxrrn.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163rgweszse.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163nrwejvgi.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163fntzqbbl.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163irejjwur.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163vyqzwyeg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163qsvwixid.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163junbicqy.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163kswomwjn.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163vdfxqbzd.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163rhiybgof.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163yhzcyorz.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163qjxqrtmh.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163emvurqfr.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163dhzastmg.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163jovktrai.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163nosttooo.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163llpwnisg.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163fsvrqnho.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163snjlxxnv.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163kcglozyu.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163xxjijkcc.html


<!-- 参考信息 -->