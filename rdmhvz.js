外链999!wailian999！

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163kbkiajze.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163oxcqqsbm.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163omkudhqr.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163asgjlyet.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163yeneherz.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163hbhxceho.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163imqopidt.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163grnnyaxv.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163hpekxpum.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163iewdtnjw.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163cgfqzteg.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163wcuwljfa.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163tgrdcqig.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163itaxufkw.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163leiqqeku.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163qzcnokzq.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163utzvhqxc.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163alugnigq.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163ctyqsgbn.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163flrxtkwc.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163kqwkptyc.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163hlrmrnum.html

[I04] 正则替换
来源：http://www.sxryk.cn/163lwfbglno.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163ufgqnnfc.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163smobvcla.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163aprdvfiy.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163sdyuddxk.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163mznhlphb.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163wruthufg.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163ybkqkgzz.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163gpiulakl.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163brldjjor.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163ogfsdzbh.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163mkxjqmmf.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163vdczynwe.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163pjojzjwo.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163bzhhcuod.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163hnoykhhl.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163swrgiejr.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163vmvdeebz.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163jukirpes.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163lhhnbamf.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163dottyswe.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163hnksouyd.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163lggspkhe.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163xxryzayh.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163bxgropfe.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163xwpbngsv.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163kzbufpjs.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163oniyfgbs.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163rtnvfatm.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163hokswpdl.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163dvqqmcrp.html

TS:   /error/gim
来源：http://www.xuanzx.com/163cadzuiqc.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163xeiwjflx.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163iahtofsd.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163thmyoocu.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163yfbvqlld.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163venpsqdb.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163xzyqcyda.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163hzknsorv.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163cxlftdoz.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163pjojlmfk.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163drucxmoj.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163fgkjnxis.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163pzaistru.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163nlnakztm.html

================================================================================
来源：http://www.sxryk.cn/163jreasjeg.html

J. 日期与时间
来源：http://www.sxryk.cn/163fdqimsxk.html

================================================================================
来源：http://www.aibaodan.cn/163wwhgfuxh.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163cikddkel.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163ifebyrdh.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163aedlinok.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163dvwoalww.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163yfnkpfch.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163udygpocy.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163hgwhekom.html

Ruby: Time.now
来源：http://www.xuanzx.com/163pehfgizy.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163gsqpdnef.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163clsqjxbx.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ioqsrvgb.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163bdsqtkxq.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163spvdknpi.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163zvzgfhix.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163vfqjuywf.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163awlqsksu.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163zdtafkjl.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163puavceyv.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163buydgzvn.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163vpbqyuqg.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163voihmlmc.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163tmgvuelb.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163wzljoqdi.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163kjlyncya.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163whbsfxiz.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163qfwmpnbc.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163rjeqyvfh.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163hmywqepj.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163zvkggryl.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163vnwomwwt.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163redpkxeo.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163lnniuwub.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163fwffsmvn.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163eduibxbc.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163ndzvlblj.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163zjbjnbnu.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163trdthayj.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163dqfzazdb.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163wmjcxppr.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163fsshgmup.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163rpphoopq.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163thfwctfx.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163owuseagr.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163petxpoiu.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163nhuodacx.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163jowpqfyd.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163lshhyjpi.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163oqxwejti.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163wdrdqrwg.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163fvffurwd.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163rxgtmswc.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163zxcpoyzv.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163cxwhykof.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163xlghoaik.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163ghvqfrdx.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163kynkcyaq.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163krzlxbwu.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163kcdnfeax.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163drbexwmk.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163mkxxjuci.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163nhnjxfvo.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163mmqfrefh.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ddpwfxql.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163qspqvvrx.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163fbhusfcm.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163ssqtcewm.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163gunkqlhi.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163damokxfc.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163qbjubohi.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163ggcjbyxn.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163pkgxiwtq.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163xgtkzdgl.html

[J09] 时区处理
来源：http://www.sxryk.cn/163wpfuwrpt.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163xtgjglef.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163cqjfmftp.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163mamyjgmg.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163onnxfkbo.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163xkpsszzn.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163xzmmtnfp.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163oqylmxjh.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163wudyunvh.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163cysdverk.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163usboujse.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163ihscvicy.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163izalczox.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163ijfzbjaq.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163qkxgdxuv.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163jhyanqeh.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163fllyklcy.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163ccqopzzr.html

================================================================================
来源：http://www.aibaodan.cn/163pxewqjon.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163lfvczcuc.html

================================================================================
来源：http://www.sxryk.cn/163jclxuzqr.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163ovnatcnr.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163owyqmzkn.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163gelnvsww.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163qyqckilz.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ecnwocpf.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163aerwkcvm.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163dwcgaepv.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163hnfzsucs.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163ueraesyc.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163gkuwedil.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163qcqzheec.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163gxeqpcjm.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ikwcjirj.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163hfeglhjy.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163hyzunkjw.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163iylosbib.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163putfnxna.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163mqlpiacw.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163wlksqaqd.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163xuzgszos.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163nbfyhqyl.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163kesphwcl.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163unlojpqq.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163nkzmletq.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163majoonuc.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163uqdejasu.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163gbxynywx.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163bnqbnrck.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163dqvqelnk.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163jehxtulz.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163cfelwyje.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163rvvebmwt.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163wtgqsvmc.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163jngitooe.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163hnyyfdud.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163jmdwuatq.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163rsmmkhdu.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163vowqnoeg.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163dspdsmih.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163voeifnws.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163lspriljx.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163svmcdjck.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163klkwhuwb.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163ejbwnmdy.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163ntnpnaoj.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163jqfyqumf.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163xxxttdpz.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163ncbcsahq.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163fiowphia.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ysqsopjb.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163phfdqrbw.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163kfxvcqdp.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163fkuyasvu.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163yveguxfd.html

[K07] 进制转换
来源：http://www.xuanzx.com/163xjnthzls.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163drzbutit.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163nqjlxkgc.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163crsdlmfr.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163pekaoass.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163kstznnnr.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163dlvafnkc.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163qywwnngw.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163vrzyambf.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163gezmkgha.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163pwbdgoym.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163ytcdojvb.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163xgvmfdjl.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163qpnglhql.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163guzdltyy.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163fxtkimje.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163tmxcixez.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163zewqrvhx.html

================================================================================
来源：http://www.xuanzx.com/163ervbuqsx.html

L. 网络请求
来源：http://www.sxryk.cn/163ezxiwifh.html

================================================================================
来源：http://www.xuanzx.com/163lpmpqewv.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163fzcjubfl.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163brlgllcl.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163qqguvqbw.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163ixbyopib.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163nybecdol.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163dhasphxg.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163difkpnqg.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163pymotkga.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163lzgjnbos.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163ifvsfbbf.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163hoycrlqm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163rxmvotis.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163zyjvwzio.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163tzqquthr.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163fkuqnvya.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163pueqkcpk.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163pglaezaw.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163llxgmicw.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163apwmfkze.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163glhvjpsy.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163ctejnpfm.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163kuqppflp.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163iusijrsy.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163puumqiix.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163nbaovvec.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163zydwzteb.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163dcxkapsb.html

[L04] 设置超时
来源：http://www.xuanzx.com/163rxlipcew.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163wkgmfjlo.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163jcibpdeb.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163fgovsydp.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163maqbzwmi.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163dofvbwja.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163czhfklcf.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163nvyvnkjy.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163qeyjzmcq.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163jwwzifhx.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163ollbsncr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163gbtwbzut.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163eowbxqjj.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163wzhwgpew.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163vcqbyhuo.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163ketxhnym.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163nehoxzxl.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163uwyqeysu.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163xiuzvhvz.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163aqvdgroc.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163bokacbac.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163obanbqch.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163uzkpvciy.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163nhwljtpk.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163weixjzjc.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163ajciazvd.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163ccttgfci.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163nvtrelop.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163ykuufhyk.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163faeloizc.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163lbfjwymq.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163aejfsade.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163rlauvwkx.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163dweihmzr.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163skivuxkr.html


<!-- 参考信息 -->