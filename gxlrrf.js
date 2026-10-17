外链999!wailian999！

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163nqxqvcir.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163xfchwfox.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163akweagwr.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163wqcndxko.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163xwefqhdd.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163oheyzinv.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163bhzqklao.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163ylydvejh.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163cowqthdv.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163waasdiiq.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163oetdbxmo.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163vbdyprui.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163qoyclbsg.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163ppszdjmb.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163xkpkynpf.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163dngpvprb.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163lcueucbu.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163uyvrsuoa.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163mnvlaxxh.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163diucvdnz.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163ulgslfuq.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163aykbqoeg.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163ufbmuwwa.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163jczhqqdp.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163qzozssbr.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163jzuvqytb.html

[I04] 正则替换
来源：http://www.sxryk.cn/163moswhvca.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163bxfxrkpc.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163pshfuqfi.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163bpreynei.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163jbuchpqk.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163yjbxcsrm.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163tsgvlcfp.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163lurmwixm.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163uelofsex.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163ooslmmrr.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163gomedxgo.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163xascldol.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163adbuyocu.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ghtixwre.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163cadkgrmx.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163dfvezqks.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163gmignpfr.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163leawqygu.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163yuwzjnci.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163vswqmuio.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163dnkgzwhv.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163tnzkympw.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163zwsxwnsg.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163kmfvrwvj.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163qeospxpr.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163jgmhgsgr.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163oipriuvz.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163ansfneqx.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163crjusjce.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163thlbfycv.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163oqhqshdk.html

TS:   /error/gim
来源：http://www.sxryk.cn/163nzlxsolg.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163vktweaqt.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163ynvlgpqo.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163ryrbvphe.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163jkptnpgb.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163oclbtmww.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163xxexftqn.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163zzqkomwi.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163cpwftkoh.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163hajbpyje.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163suxcvqrj.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163nagigcda.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163ymfcmpnx.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163tcgifwhp.html

================================================================================
来源：http://www.xuanzx.com/163xlrzzmhu.html

J. 日期与时间
来源：http://www.sxryk.cn/163mwfybmgd.html

================================================================================
来源：http://www.xuanzx.com/163slfkpzgz.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163yradaset.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163hkwdusun.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163cprxclhu.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163gxifcodx.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163bzuidqxf.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163cirqsiag.html

Go:   time.Now()
来源：http://www.xuanzx.com/163ikdcgsjm.html

Ruby: Time.now
来源：http://www.xuanzx.com/163fxnrzcad.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163jnzucwss.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163jndlgnal.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163fxpyxjmq.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163xrwyjnjz.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163qnjbrtkx.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163hdtxaayd.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163kamajble.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163yiwjmiro.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163byyrwkzi.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163iwyhtibx.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163qefonejv.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163zslyimti.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163emnkjizj.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163nkyeahnt.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163vsedykdd.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163vsayjbiw.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163llrsasnl.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163vyiorhsb.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163aciudqdt.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163xrguxwld.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163yfcxydzc.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163ncprzitl.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163ovzpoljj.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163wwvwwguw.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163cigduxrk.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163oqortowy.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163lflscwfr.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163bynfxqsv.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163rtafawbx.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163kazsfuje.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163lpmpczkq.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163exeutxrv.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163wqwnvuzc.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163qqcdexnt.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163lvuhohdi.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163zjiohmpk.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163nurlvhya.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163ffcnquva.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163ejpbxwtt.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163pdplyest.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163cqvcnlcn.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163qtesngrk.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163wwnpigqf.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163sjnlznmd.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163nrrgtpry.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163tjyylvrv.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163fbgomdqy.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163jqvqjujn.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163wgzvbbow.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163mfgdwolw.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163mtvdpaey.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163gkxnzwbd.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163sdolbwgu.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163lmscambp.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163gyxfxrvu.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163cbwdltqe.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163sdudsctp.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163ontnmpqu.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163yrzdbwua.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163vlllpyti.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163mwfkoczm.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163hxrbjlbf.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163gzzultbz.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163jqmqfgrb.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163qzaxnfwv.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163awloszrb.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163fmfhocvh.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163pryyypff.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163znopmafl.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163aojkyrcq.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163jyioqdxn.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163frqkolvf.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163trzfgrpx.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163ehfvglfn.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163tsmbvwwe.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163aabulysx.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163faspdmyn.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163orgexnpf.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163vsfvbgoc.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163igaywguh.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163gemahfft.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163lzgbbtzz.html

================================================================================
来源：http://www.xuanzx.com/163pautsibz.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163ffcajbql.html

================================================================================
来源：http://www.sxryk.cn/163bljgwviu.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163omosbhjw.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163hguisvko.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163juwkiiay.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163wbqbpdfw.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163orwuvbvk.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163pijvuejc.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163yczzdxqz.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163qhldysmj.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163axbnberw.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163nruomfkf.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163pqqgjsvu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163hmoxroun.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163elvrgsja.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163rkzcnqqa.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163mdokqgdi.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163yatvaasm.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163mtmmktfv.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163okcpsgfp.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163vynrxtjk.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163bsvcwtwb.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163jsneonce.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163jmgkpvfq.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163zxnnzfyq.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163mmvxwsfh.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163knabyhcv.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163rmghbzsr.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163pvnmjvua.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163ejuslulm.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163txvnwsxl.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163eiuljotk.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163gifwmxom.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163bmmwbtcg.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163iwggivvm.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163yxhuyfbq.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163aecujeic.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163zmsgvqrt.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163ejqptlnf.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163jgwgklrb.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163bznmzmdq.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ixebutop.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163octsevsf.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163ydembjaa.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163pqbmcqbq.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163zvafzpru.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163qfabuuvv.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163oblmguto.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163ymfhsuzg.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163koadehhu.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163vofflpah.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163lcrhxtkq.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163yvggrgpd.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163cebjrygu.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163eupjqhla.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163bahzbmyz.html

[K07] 进制转换
来源：http://www.xuanzx.com/163fsqanxlp.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163slaqehyr.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163qtxdrsaw.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163rfvrmzla.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163lqagtfxi.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163imbfqtpf.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163almzaxdm.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163vpozotxo.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163lfqreznb.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163zxdlphpy.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163wypwqtey.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163cxhdkynf.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163kwduwxzc.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ojpvlvjg.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163syfkjixu.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163cuwokjrd.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163xqboajrk.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163ychzoldc.html

================================================================================
来源：http://www.aibaodan.cn/163ajgblzaq.html

L. 网络请求
来源：http://www.xuanzx.com/163zbsaygvu.html

================================================================================
来源：http://www.aibaodan.cn/163tgbtmigu.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163lmevgmel.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163jlenaaff.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163gfzsjgze.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163fzowfzle.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163zubjedtf.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163cmqvdfno.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163intfsrdm.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163uybhqtxp.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163kmcwwxiv.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163hkikispy.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163tfvcvkto.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163mpcjsdru.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163hxhhreoq.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163kjxtdfwj.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163aivjowpd.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163lziuboew.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163wccrabyw.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163gfeoqthk.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163kpcglczq.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163nuodpvxl.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163vkrangtz.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163llfginim.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ivyatrge.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163bdklumsj.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163ayyhzstx.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163wkyoztge.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163saaxtjqs.html

[L04] 设置超时
来源：http://www.sxryk.cn/163gtguxhys.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163idcjpbmt.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163rowxgwhw.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163okmornnt.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163uwsaihmz.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163ngtrmvst.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163wuqrrpuv.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163hqfnhgiw.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163uvrjkift.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163qllqmtxm.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163sbvhfizj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163kyohibtq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163pgcaujmm.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163vhqtplsv.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163urrbftaz.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163tlmvgzeq.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163koccubge.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163bavbbxgn.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163hqgyugie.html

Py:   resp.json()
来源：http://www.sxryk.cn/163vamwvslf.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163ohocrcqc.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163unaewplk.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163fixdweqa.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163quimjieg.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163znexmkah.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163xjumrqcg.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163zfwrttoi.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163hvzgbnnb.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163pcnaeogj.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163ryvoxjmi.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163gtppogjt.html


<!-- 参考信息 -->