外链999!wailian999！

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163ofyetpvj.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163tuxeenfa.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163rpdykfum.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163dxonltsn.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163envlrees.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163zsztestn.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163stjwoqdx.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163qcfuvltp.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163iskygdrp.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163jmphkkwr.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163qjqashxy.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163skficepx.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163sflfroub.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163eedrvpfb.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163rjjcspcs.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163emvesyua.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163tpmeildw.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163yhhtannl.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163mcnxosui.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163noeqjfyo.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163phcdqjez.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163fpwptjni.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163veqqwcvo.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163smhazgst.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163ikglilrc.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163vzsagkih.html

[I04] 正则替换
来源：http://www.sxryk.cn/163bnxqdbaw.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163bgenqbkz.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163rdpmugfl.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163cixnbaay.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163ffpopssz.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163oemjgxsb.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163olccvmom.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163pjsotjrn.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163zvohxqjl.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163twhiaepa.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163qdtxpyxd.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163zahncbfo.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163byjcxayy.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163muayedmq.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163aoarpmwt.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163amrmojca.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163mxuwjgmf.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163fmpjjwkc.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163anfbjuhn.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163fuyzbfrd.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163adzzeydw.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163imdbbyfv.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163edsrawmg.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163sqmdijwy.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163pfgwntax.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163ivyqcmnx.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ythajmso.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163jcppcjnh.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163ufmnayiu.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163kbuwbyyo.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163rfppfrfs.html

TS:   /error/gim
来源：http://www.xuanzx.com/163klsryjop.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163pksudbkz.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163wrlsyqff.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163auxgfppc.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163ckkpxwee.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163baekwmtn.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163zaanemqh.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163fcwjwixs.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163qeycudbu.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163pffqyibq.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163dbfwpniu.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163sztilysr.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163okuazcfj.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163acyokkdj.html

================================================================================
来源：http://www.aibaodan.cn/163vkdeyhcn.html

J. 日期与时间
来源：http://www.sxryk.cn/163leknddpn.html

================================================================================
来源：http://www.sxryk.cn/163ucyelsop.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163mbjysbwh.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163gtqhfvtn.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163njvwjgsh.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163urxrbozz.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163frgqxord.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163hxjggwom.html

Go:   time.Now()
来源：http://www.xuanzx.com/163waiaonrd.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163emxvwvge.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163vrldyakc.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163hyfmtxiv.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163xastkbkx.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163pisjiyaq.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163dwiektgu.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163otihhunx.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163hbtbrfqo.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163zcovbyeu.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163pspesoyj.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163cicplcby.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163wxhnyaur.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163jjpgvhut.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163hkztxdic.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163mfothpud.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163gbdqbmgg.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163gbmvarwh.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163nkazwdyl.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163egqsulos.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163akzkrjwd.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163lsnxckwe.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163etwcebxt.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163vvvdhimp.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163excepbci.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163lfpelgbq.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163xryetvth.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163zcwsixhb.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163sbbsyzvi.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163iipmyrob.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163nmyyziqt.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163pnfqeizy.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163uaqwaclj.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163avdwedff.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163iqlmgvad.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163vixbipyv.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163uedigtgh.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163zovqmaro.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163cxgdtcur.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163xtcmkusj.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163ttfwuviz.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163gjyuxoya.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163kzodktlh.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163gifjebjq.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163jaosvvwf.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163rbhphexx.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163ddyxtdsr.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163jllbqcjq.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163jxbegseu.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163tfkysrlj.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163ibnbzxoe.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163cifnafgk.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163iqauakrb.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163wzyrdicg.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163yixzwnge.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163thwwzhdb.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163dvluznsf.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163iublxwll.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163rvppfxbh.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163qzzbligo.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163ewfahvqh.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163ldapamrk.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163znhbdxss.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163kfqzrlot.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163navwwigd.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163jwugucrm.html

[J09] 时区处理
来源：http://www.sxryk.cn/163jhqjluoi.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163nplxzwef.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163whcecfzm.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163qlhijgrb.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163hntjnqph.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163epyytwah.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163dkzcpvka.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163wsqicxjl.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163fvxmzszu.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163avlvjxik.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163hudqlhae.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163ravzaysx.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163qkclnkdo.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163qmcnooxk.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163hiephyuu.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163ubynpicx.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163zheoaobp.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163kdcmwjol.html

================================================================================
来源：http://www.aibaodan.cn/163nsujneli.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163ioriceau.html

================================================================================
来源：http://www.aibaodan.cn/163rfxehgrq.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163ltnvpclh.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163tzivxzhy.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163xayzyatg.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163vjrnspvl.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163taetbhix.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163mgqvsiem.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163lgmzwids.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163sxfjgfzk.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163egsrfplg.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163snfvnvhh.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163nncmqteu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163svcdehqs.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ihaosvyu.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163orcscpht.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163dhzvszbw.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163zgxkqkbi.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163bhfxpfca.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163vrcaktmu.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163pwgzrsei.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163abiswjxb.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163iuwtpxft.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163vdyiubhw.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163tfqwvovy.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163xznoahmn.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163psalxzwb.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163izdbxnzv.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163cylljiwx.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163eusvlscz.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163dtbwopjo.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163okdvryat.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163kkqghqbk.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163vbmahbpc.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163wnzmidxu.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163yfieivgt.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163xjxumvkb.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163apoqmwzg.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163pvpzfjxg.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163bfzzciit.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163xgsibvlb.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163rviszayl.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163cuikmhez.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163bnmnkepf.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163cbkcpcbb.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163amwdvhkt.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163exgorffe.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163adpvjpxj.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163ptjhzlku.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163guyfsfip.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ytjbosdb.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ryqdwmgc.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163nkdozhrm.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163pwybxkll.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163fnkliteb.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163lxdirbrj.html

[K07] 进制转换
来源：http://www.xuanzx.com/163fisvydgq.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163ibzbwexh.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163awnhhjzj.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163lfmzjlwm.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163iptpldxc.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163nemonjex.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163hacnxinx.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163gmicjegg.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163mmnsvcfv.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163avopzwnz.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163uwugraey.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163yibnndmr.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163yitkiqgj.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163fkarqywc.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163cswgxxyx.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163sgyqglcu.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163ivczwqrp.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163ghjqoihf.html

================================================================================
来源：http://www.sxryk.cn/163obcheamf.html

L. 网络请求
来源：http://www.sxryk.cn/163zsbtycca.html

================================================================================
来源：http://www.sxryk.cn/163mitdfsca.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163pzibtcmn.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163fftltncg.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163kklocoyd.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163ppkosgcm.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163sjtoainr.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163bbxxakrf.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163cxoyqlpu.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163hrynvwpe.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163mxbmhren.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163poorpcmf.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163ieuokeqx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163pdnkfddl.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163aphdejuv.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163jiyjgrin.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163lvbqkbjp.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163kjdywfxn.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163dyxauuqi.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163tbfxztdr.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163aqvifvzl.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163gafysiit.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163enfhblxe.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163qchzwazk.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163dbpssesf.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163vhgmblwg.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163macrraze.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163oqxpeqjs.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163sttekanw.html

[L04] 设置超时
来源：http://www.sxryk.cn/163abnnaowg.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163lblnensf.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163idurafyj.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163fzgnupwh.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163safnhgyn.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163wvgvjpmg.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163wbokuhdv.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163kefauzik.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163maaqbcwk.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163zwfqmvxx.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163wdzjixmg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163bpscnyft.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163zsuorwsy.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163zblijohc.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163aoddpkzo.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163rfsqrbul.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163orbieinw.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163eqwqezhl.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163uhdsxjbz.html

Py:   resp.json()
来源：http://www.sxryk.cn/163mcjbulgq.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163cvemxqak.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163jcnqjlet.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163cgyatees.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163eqgwkxpt.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163hibdmxiq.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163ifjfppam.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163vlqymjzy.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163ufyewxxt.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163lnnlxamv.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163ildcdwcb.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163cpgfxnvp.html


<!-- 参考信息 -->