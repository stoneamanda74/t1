外链999!wailian999！

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163nopmvhgi.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163jfembzgb.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163tccljyfi.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163woiuiqha.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163vzdkbpjh.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163atfmzopx.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163zdkuphau.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163rqobsilr.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163piweqasr.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163uozzuoir.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163guwjsutf.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163ljafoiev.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163akvvmxwv.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163ooetojzp.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163mhyudsga.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163ituhqnwc.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163cfhkbiwb.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163dsswytzs.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163zlwcoymr.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163sxqviekz.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163nubcebfd.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163pcqmryhp.html

[I04] 正则替换
来源：http://www.xuanzx.com/163glijvays.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163lwhyfrlc.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163yqwrqoba.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163fcuiitnl.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163spcexmoy.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163mikjkznz.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163armdcqvz.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163xpvcfvkb.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163xtrshmyx.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163qxoopgmk.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163ntbqdjbw.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163fsdyggbk.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163loroksbh.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163xyccwyhw.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163nlyvtekb.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163atoxdciq.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ajrfmnas.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163gfmqplgd.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163nslvndoj.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163qlenytvj.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163jefzvivl.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ehhmcyls.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163thptsprw.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163nwufqyub.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163yyatsdar.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163scsvauip.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163hobxifls.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163ogcfarhb.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163yllgrfpb.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163fcxjpxnq.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163msmbwkqv.html

TS:   /error/gim
来源：http://www.sxryk.cn/163qtddmsrq.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163ehociwcq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163ltxpenzt.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163hybcauzi.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163utubogvl.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163fklkoekx.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163gzccpauk.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163bdztayxk.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163macgitqg.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ljmmvlak.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163kzidmwek.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163xuljqojb.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163elivbdwb.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163wwhpownv.html

================================================================================
来源：http://www.xuanzx.com/163ggvodpdv.html

J. 日期与时间
来源：http://www.xuanzx.com/163ujkdoawu.html

================================================================================
来源：http://www.xuanzx.com/163hjcrqdht.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163spqpnxah.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163yzavoech.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163fvwqujev.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163sghtfuzc.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163owrokbkg.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163ymioinuv.html

Go:   time.Now()
来源：http://www.xuanzx.com/163yvlsgmfw.html

Ruby: Time.now
来源：http://www.xuanzx.com/163mchzbfoo.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163xtbmpffo.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163gfkrpkhq.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163dzrkaksi.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163gfqaiged.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163bnjoikpi.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163fhjcejme.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163fhyxkkqy.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163ecuaiayg.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163nfhiwptv.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163mzlnzwoi.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163gczrilaw.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163vtbknncz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163icllicfu.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163hpcpbtrd.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163qqumyanu.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163rdeogtgr.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163kuyxpnzm.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163dglebluz.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163bqqkkngk.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163mayzfvgm.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163qlksnngv.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163mqjinmcs.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163uhkbqkzo.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163tnfrikrz.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163fhaqqtmx.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163zsrissra.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163iucpfktr.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163zknxehoc.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163rddflata.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163xuiexlbm.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163gipcuzus.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163pnnjoyzj.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ghvivonu.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163wzvjjvhr.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163ugrhafue.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163jzgaelpd.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163eytggqsb.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163gmwpmlpo.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163lfglwxez.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163xsfdvqip.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163xdqcpcoy.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163kegcvsrp.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163katxlguz.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163gmabfznl.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163yfncrpvj.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163dexrnmyr.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163qbawxajx.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ryqbjnmg.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163lfuvioej.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163nggoexoe.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163pswqxbqt.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163dydndvtj.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163resxiuer.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163cvpfaley.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163eazjhkij.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163wptucczf.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163qdtlqreg.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163naghtvgb.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163jhdnmfkw.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163ijkgzcou.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163fqlwxsor.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163mzdmyvln.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163cljraxrh.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163fprtzmtu.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163vhqsmhfb.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163pxhjbvfq.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163hzjeokti.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163vekdelst.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163zitrderk.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163woowmdgr.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163rughtixk.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163mupfjjqv.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163jrjihfbq.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163yumvfywh.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163zyxeypff.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163xqdlkkaw.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163bhegvpeb.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163efzerdne.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163qpobfgla.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163ktwdwbjd.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163sfuipsms.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163smgntyvm.html

================================================================================
来源：http://www.sxryk.cn/163bkdnazka.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163hafgssjy.html

================================================================================
来源：http://www.aibaodan.cn/163pvygdsln.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163zyawewdr.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163emksxqog.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163rwhvgggq.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163kdffdvji.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163omtlxjhb.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163djseemhk.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163flobnukc.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163hvesoxmn.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163owxplpgc.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163buqdnttu.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163xmfonbrr.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163ztkgttdz.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163htxotbht.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163mnxiahsm.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163bhxvwwxo.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ebpjvuaa.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163ndvygaaf.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163kxarfmvr.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163uwlcgtga.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163avkkvcva.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163zelbrtuo.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163vjfgfcbd.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163axxyurcv.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163zeexvsvd.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163zcfvmmzf.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163zhkwxemv.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163huvkdfvw.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163avnasgto.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163nnukmulp.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163cyjomfqv.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163yamfukon.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163hpbahuqa.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163sbyuhgcg.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163vaeammlr.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163eahvyltz.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163ytsofvoo.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163rvwydkhg.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163bsavocxu.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163euutbgyz.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163enpzyxue.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163nctzepzc.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163dnhbfhdz.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163wgwhvxcd.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163tpdxrwnx.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163ltvfzjgz.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163sgnbklnx.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163mzwwxnek.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163urmafwzj.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163otbawtej.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163syaaavag.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163necuvilu.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163xhkertqe.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163schuupdj.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163hdmiiaba.html

[K07] 进制转换
来源：http://www.sxryk.cn/163mmsnyrat.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163iixklybi.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163uqsjsart.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163mhwexdpf.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163wlebbsfn.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163ljxyxbyu.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163dffnrrqb.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163cbxnlhgx.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163bbwjixid.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163zikjwlhr.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163guybnjqa.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163uzhzshht.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163mfdlylsm.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163plezczas.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163cmpxofrk.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163timmmnbu.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163raasulja.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163pxpiauto.html

================================================================================
来源：http://www.aibaodan.cn/163ntdoddaq.html

L. 网络请求
来源：http://www.sxryk.cn/163hibseawc.html

================================================================================
来源：http://www.xuanzx.com/163myelqfzt.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163bymeztiy.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163hcqqltyl.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163tglthivx.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163oftfdbok.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163hbinmlvw.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163hybswhzi.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163dmdyvfmg.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163fxaaxjfe.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163bujbdhng.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163wihyjqop.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163itceuqfl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163ajeqfejr.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163gwremmey.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163xnemxtkj.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163imqnsymv.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163mhocymrl.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163govnusvg.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163lzcdyrtd.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163klqvswcp.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163tmhbcytu.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163yacsncgo.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163qwzfnpqc.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163yozlthnm.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163dnlkkmiy.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163wlnenxtm.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163orpfasiq.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163erkgocio.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163wvttugtg.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163nfpnkecl.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163dqmbnqph.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163aipphrmz.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163hbkkfdji.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163mdimnxmx.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163ernnjerr.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163atjmkgvy.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163gmwtxaho.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163kdioougl.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163kndpqrhb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163ftsvakjv.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163yphsrcja.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163lvwayxaf.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163edudtpxc.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163sqdubusf.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163lloxeunn.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163guxjmynw.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163uyyawsqq.html

Py:   resp.json()
来源：http://www.sxryk.cn/163gsmrlgua.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163grfvvlaj.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163iqpzgspi.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163tdryzuta.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163tcfjziev.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163timisrjc.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163bdevyexo.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163eusljvit.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163oqihcfki.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163gttxzvmo.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163efdfksht.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163axvkoafo.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163edvahlzr.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163dsugvbjt.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163kfdckxkj.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163hhqsqqht.html


<!-- 参考信息 -->