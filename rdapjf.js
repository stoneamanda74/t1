外链999!wailian999！

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163bnprhbae.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163fcwqpxma.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163smkppvpx.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163ynkmcfar.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163zglqtbfn.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163gkvkvcgl.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163qqyhuunm.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163ogmjnlzg.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163qskgqdkf.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163omxgccxu.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163tqwqkecs.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163uqlaftmt.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163xcikcpgq.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163prhspptz.html

[I04] 正则替换
来源：http://www.xuanzx.com/163rhdaqvhx.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163avueknkt.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163dxouexez.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163lzpnfmzt.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163jasgwzlq.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163xfiohqae.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163efsehsgq.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163ciqmczse.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163kdqgcztw.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163mknhbmry.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163bdfljocm.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163yrixegol.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163etjzytoj.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163qgiihheb.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163snqgnnxd.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163enbmvnwt.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163pkceqnsf.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163auuasekq.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163ijraibuw.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ldfzeifw.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163wxztopak.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163qbpuqgag.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163sfujxxyt.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163ykvyalii.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163iejhingc.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163crxxhldi.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163nrebhdcv.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163otniejem.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163yivfkzwn.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163ebyerqwq.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163youvrdce.html

TS:   /error/gim
来源：http://www.xuanzx.com/163wivejnht.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163yfzhfhmx.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163sklrblqa.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163wavlmbfx.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163ddtjhouy.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163ayfzedqg.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163xskexvlq.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163fgnaozbb.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163iodaxubh.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163jtmrhgbw.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163qwpremui.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163qqvndtgu.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163cagzstos.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163uwzuovcw.html

================================================================================
来源：http://www.aibaodan.cn/163hrrqqebq.html

J. 日期与时间
来源：http://www.xuanzx.com/163yalbskyt.html

================================================================================
来源：http://www.sxryk.cn/163eamwyqdh.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163vkdjkiax.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163crhceesb.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163rqyrxgjm.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163tdufzfeo.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ujzrbtah.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163wgljkslo.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163xcegfwpq.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163tiepwnmd.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163gmnpvdws.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163xcwlfnrv.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163hbcrjxew.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163whlrxsky.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163kbnngsyw.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163gfwucqqc.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163fcikuwqt.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163gcpvmzly.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163sqbbqapa.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163npflzbqd.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163xatdxojd.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163qesdeqhs.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163nwjozeha.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163plwdcjrx.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163tkldvaki.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163lxeqbcrm.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163wlpipcyn.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163igistcun.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163jzrhqddx.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163zixqinqh.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163rryhryrg.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163onosnpfc.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163ozlytojv.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163yclersqx.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163lixmgbuz.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163fyhjroju.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163eqoctqqv.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163nzvaadfu.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163gxkboymm.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163dzfwhknf.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163lrfkjydb.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163qovdhwld.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163nzhwlpsx.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163idlmgcid.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163jabutzwz.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163bknfpaqm.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163venicapm.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163skddjvsu.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163dadrspzb.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163otsooavt.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163bmrpuidz.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163rfsazwdx.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163fulsahwq.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163brncpbzb.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163cbrdixin.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163mltyqubf.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163rpiszijb.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163txfsozyb.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163fjtkwryq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163rhmaxuhd.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163axphwcdj.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163wjqrnpev.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163fzksosjl.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163fdcynhea.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163hobpckch.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163vgwjjubw.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163xbiybvic.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163nfqqqxtp.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163vaahcdlp.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163cwavmjpn.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163trimexed.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163ckemfrrb.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163znscazsa.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163pjduhucc.html

[J09] 时区处理
来源：http://www.sxryk.cn/163jdhlofir.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163mtqkxxbv.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163jtkbuyft.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163aihetair.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163zlffzhcu.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163qctakiap.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163joudetum.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163esffiilk.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163cgyzjwnx.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163pnpmilue.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163epzwtdhv.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163wvrztoan.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163rtchdxrf.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163jelcxuns.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163ikwhpfyw.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163fvciulfj.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163ehpxtjgm.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163xryksdpi.html

================================================================================
来源：http://www.aibaodan.cn/163opaigjpl.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163mblirolt.html

================================================================================
来源：http://www.xuanzx.com/163buclikxu.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163rlzimhfg.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163bwuhdevq.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163tknmorjc.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163zoajusvt.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ldbazrdi.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163glozgwfe.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163gfbaqkbm.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163puggqofo.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163rmixuyoh.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163uvoqbclt.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163mympjwdu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163ldnrwlxy.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163lwqyfbzs.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163xohuofmo.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163naxzxgst.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163otelycki.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163xrpzhygu.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163jtzycwyt.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163duumxsts.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163nokzdvty.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163pgfmcepl.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ijhpxfge.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163lfluoejv.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163wpbompfz.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163wpetfasx.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163wfqifkra.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163gbpbktfm.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163bfgygqtg.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163irixwtkd.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163hgmueyuh.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163teqzkvum.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163kytsleov.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163jpfryqoz.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163uzyvohlr.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163iiyulwoe.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163ropirclh.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163cmosiyrd.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163kajkrytk.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163nalzbkla.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163gbmkihfv.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163sfwatpdw.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163qftivlyn.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163ydindqti.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163bmjqdhnd.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163ewpxezlk.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163najxmuro.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163nliopqkj.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163dvwbiyvl.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163kidovmtq.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163wtqtriyb.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163xxoorcih.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163yxhmamsn.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163wwwiznsz.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163kplgrxcb.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163atylbxxi.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163rjmuyjqt.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163zprvcvfd.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163xdickdje.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163deheuirv.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163yoibejng.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163tzltgrsg.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163pqpiydhc.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163bseyichb.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163guiszkzw.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163bmnjpgwp.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163wyhzrjoh.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163cbwxdfjg.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163oujgcscj.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163scmcrnev.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163kjdqecwr.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163xudjvujq.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163milukjew.html

================================================================================
来源：http://www.sxryk.cn/163pwjsbbst.html

L. 网络请求
来源：http://www.sxryk.cn/163trfpiorn.html

================================================================================
来源：http://www.aibaodan.cn/163svlduzhk.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163paiovibw.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163vfqdjeud.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163lwnzoydc.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163ceoapzsa.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163llltckbb.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163azuuxjcl.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163udrpweag.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163yqjacufg.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163qnvcwulm.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163bbihgyko.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163mibovurf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163hpccbnrj.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163yttbqxhz.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163xumdjxbz.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163mppeuymc.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163ukodubzh.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163lcndobrb.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163ucvfumoy.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163zlpesueu.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163wxhrmvxt.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163rmvnluzz.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163hjvqlczt.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163cwrklzsq.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163adhhftog.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163sararxty.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163dlsgmrro.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163nssqpuel.html

[L04] 设置超时
来源：http://www.xuanzx.com/163shlcrwrx.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163ozhsgddb.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163jbcjorqs.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163lwuoimfl.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163quxqcqft.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163jjvuraza.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163hceotjhq.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163wrremitv.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163bxbypdbj.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163lwhnlrqf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163okvpfjsz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163orsstntl.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163jpyhsprb.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163gwgzlsys.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163zypmafbb.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163mamtalqs.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163dobyyscj.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163zbgdglkk.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163yfllfgcn.html

Py:   resp.json()
来源：http://www.sxryk.cn/163tmzajsno.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163jzxwqrwm.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163mmoiqyfz.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163fzntrpof.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163djwafmnk.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163gyalgxkp.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163gxgcxwzo.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163ohkpzvsg.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163upnpemfa.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163vvbkqmmp.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163pkzzzkxp.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163oxrqgyuv.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163zutrybrd.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163xmwfuqen.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163yddddulz.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163dwlcnjnp.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163ekspuqhc.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163keahyisx.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163agaibqnd.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163mwqgsiba.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163zdfxumyd.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ptmqwwzz.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163dupsxonz.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163gwshyjzl.html


<!-- 参考信息 -->