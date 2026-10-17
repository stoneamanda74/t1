外链999!wailian999！

================================================================================
来源：http://www.sxryk.cn/163hklgvpyy.html

I. 正则表达式
来源：http://www.xuanzx.com/163hbzhfawu.html

================================================================================
来源：http://www.sxryk.cn/163lamlmnrr.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163iatcmzrb.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163nydiejag.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163frdnaodw.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163fshcdzfr.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163wixreylr.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163lhdnmhjg.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163clycogdz.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163xinfxxyr.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163uvcmuupv.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163ggdydwlm.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163xmotwlxf.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163uemuntyt.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163zimnojjd.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163bxpfccqw.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163lvelsmmn.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163vyrwysgr.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163wkkndpxw.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163rvsjykqo.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163drfymbwx.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163apteghwt.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163wzzsnbcn.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163ldtdmcio.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163punbjqgm.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163nzmerkhs.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163uyucxyxr.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163gigavrbv.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163kmbydntl.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163caftiche.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163tydooqem.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163volracpe.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163iqhfeimg.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163jiqrfhxs.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163wbrmbcuc.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163etwcqlrn.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163kabreude.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163vpeyoocd.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163dbwevvnr.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163waxddcqf.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163ttrwoxxl.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163liiepryr.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163mwtubycw.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163iphzjjmd.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163vikvdjsg.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163qsoyazgm.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163trkbsavp.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163chaxsbfv.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163rwkunmqo.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163zjwnzvbu.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163tsvlywct.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163qcgswaxf.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163kjwosjub.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163ngpqyykc.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163clwlkqks.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163gerqxfgd.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163axvorgku.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163apmcrahz.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163jpyibxaf.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163mxeoayky.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163yvcbtunn.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163hheomxtn.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163bkdajgnt.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163fmdxccgf.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163nuljkisc.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163zvxrwpez.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163crmaxnvn.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163ldxrepbm.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ndjshvqn.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163uvchdcdy.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163vkfikpwq.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163gwhzzdoc.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163wnkuzyer.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163uyrkiapa.html

================================================================================
来源：http://www.sxryk.cn/163iousuyxv.html

J. 日期与时间
来源：http://www.xuanzx.com/163wtyhdevq.html

================================================================================
来源：http://www.xuanzx.com/163ybctuoei.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163qraemntv.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163jdrttgnh.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163amysxtrk.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ywwrxocp.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163dyghdttk.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163hsjwoiqj.html

Go:   time.Now()
来源：http://www.xuanzx.com/163ebevotex.html

Ruby: Time.now
来源：http://www.xuanzx.com/163xkrvnvgx.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163ndlmhpnt.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163ardekeha.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163zanzezdq.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163merjemxf.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163bkpajcdz.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163irluhkpu.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163mbcqhxar.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163cpurvpxs.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163wioepade.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163jjvqrqhm.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163upkhjseh.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163mkkdveeb.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163nshuifrd.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163pzrdteve.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163fbbxoqgs.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163femqrrzj.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163kcwjfryu.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163euuenljm.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163hgoqkgci.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163wfqtusxx.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163deaznjtp.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163pbvzmwdr.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163wsjbkshk.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163ibhohzbg.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163ykxrkuva.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163laobzxcp.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163zmmfxbjl.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163wgxtgmnm.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163bsywfnsy.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163ljntlkns.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163pqaaictx.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163avvyvgvf.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163yyvqtbpp.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163mqjjonxn.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163jmxhjxgv.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163pqpembds.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163ascobhmu.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163tommgtcq.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163rrpzjlhm.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163qhcwisou.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163ihuqbhwz.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163yaauiahy.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163dztndqya.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163cicwzaqh.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163gxipznos.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163nobpdtzj.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163wwwhwyml.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ogtqhpcl.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163nidteecg.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163lnupfdph.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163tadyufcw.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163zckywezs.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163ajvjufru.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163vdvvpctz.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163cjaitwox.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163ummyxzuy.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163yvhhirgb.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163oiohtevt.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163empddnqz.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163xdwwzzdi.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163irbjuxpy.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163zqqtiisj.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163rufedlgr.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163chlosjny.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163zduncxon.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163izewazan.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163wivehqzs.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163cwacdozo.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163gqzmuyjw.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163bnnvotzn.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163yxkdyvan.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163tbedrcxe.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163wfvkzvxo.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163nwwligkv.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163steitngx.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163nelqwzlh.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163gajofcej.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163yrpyrdev.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163ddjrydkw.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163ujiqgqze.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163jjfpaaeg.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163sfzneosh.html

================================================================================
来源：http://www.aibaodan.cn/163wobydnii.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163dsxlxxuo.html

================================================================================
来源：http://www.xuanzx.com/163dxnpksvv.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163elkqmoat.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163rloloezo.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163wgtcuxrq.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ghdaghfo.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ggpjalhf.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163hdqlltuq.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163dtzjgrsg.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163cbkwkdaz.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163occqzvis.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163pwfsvxhl.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163flovbpdy.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163fapcprsj.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163qufruczn.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163bbkbwzhq.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163jluefwfn.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163fzhivzyn.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163xeutjpgg.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163rlafeako.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163gxgxpjeh.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163xmspwhzn.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163fafbmiib.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ssehncok.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163uganrkmd.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163yarnbdik.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163vgfepaet.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163aknmuiiw.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163kqxfjlyy.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163ezxtjhly.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163ntltddxj.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163tpbmzcqd.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163yqvbwmmx.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163idbrpesa.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163rykdhbyc.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163hbnpyctq.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163obhsfoqv.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163akvfzvrr.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163fbfcybio.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163demtrqdt.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163tzalzxgh.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163xbepixhw.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163xzdbmjae.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163xxzlneys.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163bhpoiesm.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163iapuxhel.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163umigqibo.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163eifctvoe.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163glgjvapn.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163scvmmslq.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163rswooiyd.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163zfskpexu.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163qaogoxql.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163tascpzwe.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163knkqyoek.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163mjvejato.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163cbqvcvrh.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163hihjpumd.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163hoitawlg.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163nizoydlv.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163shhxsxvn.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163cixazmdp.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163mdupsdsy.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163zwrlglsb.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163bknplvyn.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163musqgwlp.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163ukbvpkxp.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163mnllorus.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163wicqhbff.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163nznxlgjj.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163qxvdcvzx.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163fitypgli.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163shnvoimo.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163lyarceal.html

================================================================================
来源：http://www.aibaodan.cn/163cktgrzyz.html

L. 网络请求
来源：http://www.sxryk.cn/163nxvfrzec.html

================================================================================
来源：http://www.aibaodan.cn/163yaidnpgf.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163qdxrxuvj.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163zmvwztwm.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163hxgpoibt.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163uegkdaxg.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163vgtmluig.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163elmxkcde.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163uuwkxini.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163jgfulcnc.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163ygfoujjy.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163hlspxjwh.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163xgvoyrqg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163finniiei.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163qloqimjz.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ybfmgres.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163osqmhjuf.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163bupbjdfa.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163rgjrkqro.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163bihvhllc.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163cxhioxzh.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163mwjbkgxg.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163glhpucjc.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163hddzzwas.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163umsdhfwn.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163cwtdeopi.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163yhjvqkdl.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163iwwniraj.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163uoyzhhrx.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163dkqxipwk.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163zsccsqud.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163fuhsrzpj.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163hvvsrybg.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163bdkvezuv.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163pxqfyryv.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163jththjkk.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163doyytjux.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163xwnfqeok.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163pzsjkikm.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163xmzaohlt.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163onmuilhy.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163swnoyibi.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163vnsvztjh.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163ezvfxrts.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163dcbqtuvh.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163mfrklxtg.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163lhxkcygr.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163vzkcxbbv.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163vggahykz.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163nwjersea.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163jjglmhhs.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163blajssms.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163jjzpnzfm.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163ixjcjple.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163spblzvdn.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163fqvoqkrq.html


<!-- 参考信息 -->