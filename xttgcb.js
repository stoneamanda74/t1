外链999!wailian999！

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163hzayoovg.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163tfuphlrt.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163wkpztllq.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163bvmjfhfg.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163wydgnvqk.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163ubjancnt.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163cjubmlay.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163gaszbvec.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163igghjspx.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163hmgmwqar.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163otuhdmxo.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163unfxtaqg.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163xilkfxok.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163wtmoplpg.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163bpndfnzs.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163mufoyynu.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163grhmboyf.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163tnsnyumc.html

[I04] 正则替换
来源：http://www.sxryk.cn/163drqatgii.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163cjxziqew.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163tjhfnnyp.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163msmheyzj.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163jgeugzyl.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163glpzbjmy.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163lxmjarvn.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163wgttrxen.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163guvqiprp.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163bggjnxwu.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163hqdncncv.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163msqekjbj.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163wbpkuqlz.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163fshbviva.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163uzijzluc.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163sajclyca.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163billgwyj.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163vilgxnec.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163wpeyfkph.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163dcoegsnz.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163zezoruse.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163izvitbpz.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ruydyzna.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163vhhhlvei.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163mniuvgru.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163bhgqchit.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163fawbyxzz.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163iopocbac.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163rqyrzagp.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163phngvolh.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163idgusyer.html

TS:   /error/gim
来源：http://www.xuanzx.com/163ncfnujnc.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163mizovkgn.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163erxsrqhn.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163qimgxnjz.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163aslkymnx.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163hvbsnfpt.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163olhnaqsx.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163klfvmbgz.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163umilytki.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163tyqooziv.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163pkwccnij.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163pyrkqvnz.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163lpwkrxes.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163uzvcspzx.html

================================================================================
来源：http://www.aibaodan.cn/163kqqiptav.html

J. 日期与时间
来源：http://www.xuanzx.com/163xhrripjc.html

================================================================================
来源：http://www.aibaodan.cn/163ykopzofi.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163amoqguoj.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163hymgvdow.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163dvsmumbh.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163wmkqsdno.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163fvjdrbzo.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163vyjgzlwg.html

Go:   time.Now()
来源：http://www.xuanzx.com/163lvzqaeuz.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163wmwtftzm.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163yxqgbrpi.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163advgvptt.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163qqvdtqke.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163zqcjxvon.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163ledbgidg.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163bhrzhocu.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163lukvchpl.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163tyvpaiqp.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163wbzehnoi.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163emmxbiyg.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163bedquruz.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163lxcnhtnp.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163yaybjgdq.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163vqinuydr.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163dvwynmnj.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163hbgrivqo.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163wkrscado.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163pjafrnbo.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163xosbaxlb.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163nrquaxxd.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163qsgdoxkq.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163itazbqsi.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163tomtgtfd.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163rrqfylub.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163pxlqntsx.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163qzmeczqe.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163yzfgddsq.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163gkphxegs.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163whllyoef.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163srikqbsa.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163bvtyhyoc.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163mdwtumoy.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163wlwkbsut.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163vxzolihz.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163jthdhrrd.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163sykjazwg.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163litgafsu.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163xxxbnpbq.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163njgmsvqs.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163hmsynqkb.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163xswwmilz.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163zdrgfkcv.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163hwbmrclj.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163rtyrwxoe.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163hdlwaibn.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163ouhqgnzu.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163hhjghqzj.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163alrbmozq.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163jbwqbstc.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163bhmnltwv.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ixfnetih.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163sjzstetb.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163grvvhnky.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163bhxddrhi.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ceryzeus.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163ramvwoyx.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163kofmbnfv.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163bobgaffw.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163mbckxyjj.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163sesispsh.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163unnfabgv.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163ctahlcxm.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163jbxgudfk.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163tgczujrm.html

[J09] 时区处理
来源：http://www.sxryk.cn/163kqxdfuys.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163mtmlpaow.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163znuvksig.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163niinjxnx.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163zwxcqbwb.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163bldcvutr.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163nlfcppss.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163vshvsfws.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163dtstucwi.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163zwflcadh.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163zjfmoehq.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163xxryinnm.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163wbqebxkw.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163mfuopotf.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163itvclwac.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163otzvtdhd.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163mrtyukuj.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163ncibrdtn.html

================================================================================
来源：http://www.xuanzx.com/163kdxihcof.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163qtzfbnch.html

================================================================================
来源：http://www.aibaodan.cn/163gkumadyt.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163oiwoydic.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163yzveqyrd.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163qksuhosp.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163sushibmy.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163jsedrddj.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163kngzlfbs.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163lpwdoznm.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163wmfqadad.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163mzdphfra.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163ayzugzlp.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163waqyrgxz.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163qnawujxy.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163jweoeuab.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163otlxthmb.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163lsjnrrsn.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163skqhfksw.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163qdnqxbzy.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163nvaxbkxb.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163ncxaiwoy.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163zyjpjuuv.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163kstdgwrd.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163tjmzoxrz.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ngmjeran.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163lepvecnb.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163xdlmyzbx.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163nusbqkia.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163eqwltqni.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163nrztlmtd.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163eyuufodi.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163eccyyeff.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163drjwpcap.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163rubwoowb.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163rxxxzdle.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163dwhbmgam.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163nkvfltat.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163jjomdjkv.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163yukdxned.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163kbsqnegd.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163wkzavveh.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163vnxtduqn.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ikbjobgh.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163tjyjuadh.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163sbbwnylm.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163brivdhdv.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163hpphgwqy.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163djjbmyus.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163rskqikon.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163jlfombhl.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ydjnorcj.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163bjwrnqjt.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163yujslyor.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163hxducnxi.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163uanjekpc.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163wbocqefj.html

[K07] 进制转换
来源：http://www.sxryk.cn/163vnssdhhh.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163mhnaawpu.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163bwlzrkmz.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163jwcqeebt.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163yodjlsda.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163dwaimnsx.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163sxsvdmlt.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163fdeujgth.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163klypmeao.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163oytonplu.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163hvrmvpvf.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163weksmpfv.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163wdmopqcg.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163zjlxkawg.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163fklrzduh.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163oofdvyuh.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163zdubkvbi.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163rgubplus.html

================================================================================
来源：http://www.sxryk.cn/163bovzcmju.html

L. 网络请求
来源：http://www.xuanzx.com/163pcxlgtrh.html

================================================================================
来源：http://www.aibaodan.cn/163hczwfyss.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163pqcbbucn.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163jrrjmrha.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163vjgmipgs.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163rpjftuue.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163gsepjoad.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163rwladyqx.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163kisoumsm.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163vcqmlwjb.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163vdnlwrny.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163ruogqwsv.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163kcrtqgkn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163pqwhkpou.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163suvlgcgz.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163udzjoodp.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163ouwaamqb.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163ivobefcm.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163ikxeajpv.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163bwllqgfe.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163gsneybeh.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163egfyqjyi.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163rydquczz.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163bglofxuq.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163wwlnruga.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163ousgwfhh.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163bmoshvdn.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163yfoxwofz.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163xlzrmcia.html

[L04] 设置超时
来源：http://www.xuanzx.com/163rcayzoaw.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163uodkbedu.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163xkdjmaaf.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163wijmtaqh.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163pjqrhhmp.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163mzeokatw.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163fhyxakeh.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163jrvsahqm.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163mymgmukt.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163hkjjmklj.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163fajblglt.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163youmqmfe.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163exccqxel.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163atsntate.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163hsojyomv.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163qsvgplbi.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163dpfnjexz.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163fqnprczu.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163fouknrue.html

Py:   resp.json()
来源：http://www.xuanzx.com/163esjcawgy.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163ssjhlixq.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163jsuwotad.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163ftqbxdow.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163gtpnsshm.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163agizwdht.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163mwevocwu.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163sxbbrwjc.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163byjhykno.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163untryvzo.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163sevsvzaa.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163phaobtby.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163mrgqeopm.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163wkwxpzpq.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163hsbtiaom.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163pgizyxcs.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163annswrci.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163woodjtyd.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163qukofxvs.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163kbniqoii.html


<!-- 参考信息 -->