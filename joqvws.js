外链999!wailian999！

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163pmunsrsh.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163oclyihwu.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163waqydodi.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163xmcsvoee.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163xetvrqjs.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163anaafybi.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163ntyxobpc.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163npdsjzid.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163xcptcoqf.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163tqwjjppf.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163nrwfggrb.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163hkqhimpe.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163ftlkaffo.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163iqkpamuu.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163csdsyrjw.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163mxmufyiw.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163kzwwlocr.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163jsrkabhm.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163gqifngew.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163cxvjhqll.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163wocujkjy.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163yidwoleq.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163bpwpubtl.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163fxuqhlah.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163bgzzuncy.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163wvddpczk.html

[I04] 正则替换
来源：http://www.sxryk.cn/163zluzpfdb.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163ngeuuitd.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163guplstrt.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163gjooyvou.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163lluatxmq.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163glibvdte.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163epfdwzwb.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163yevtgqyo.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163tetuhfnu.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163ynfnbllb.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163mnybqlsm.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163srzdgfhb.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ivphpwjv.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163sylgkdtv.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163yltygcwv.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163sukacbmv.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163xarrgmku.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163oonhifyl.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163xdsqhfey.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163imrmzmrx.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163ycrjlezw.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163utwmllxq.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163europkqi.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163bkaxlwpr.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163iloparws.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163nspuzimh.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163uphqkifv.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163kxbjvmdn.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163kuiprhby.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163znoxscje.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163yauybscs.html

TS:   /error/gim
来源：http://www.xuanzx.com/163copelgsa.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163pufqeyqp.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163ltrmafch.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163wamvhpuw.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163pmgzjopc.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163cwffmiix.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163tvokgilt.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163tvjtxsim.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163pqsubboh.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163jrofapfg.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163sdqgjcqq.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163ghtuzwhu.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163ohnmbesa.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163uyirvziz.html

================================================================================
来源：http://www.aibaodan.cn/163epektwfy.html

J. 日期与时间
来源：http://www.sxryk.cn/163gxigaoyv.html

================================================================================
来源：http://www.aibaodan.cn/163zpsebzbf.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163tqahgdxh.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163azpbvzem.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163zjkooafw.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163unygbbwf.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163jpfbtmzf.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163ciukbveh.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163lmavjumq.html

Ruby: Time.now
来源：http://www.sxryk.cn/163ioglhvmn.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163pgfaabns.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163awsfwupk.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163czjgwacd.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163hkwlrjzz.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163otdanbhm.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163kogemlfb.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163qbxlbjzq.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163zposludq.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163mphbmufr.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163atedlyij.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163qcidvzik.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163izelpcbm.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163covzoszn.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163afwbtrft.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163qngwmsqw.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163hsycuavu.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163bjqhypvb.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163xvkisoim.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163roibesmb.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163wxyhtbsl.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163cwhhdicv.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163iocldtcy.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163vybsaolt.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163aykyjrlj.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163yxkwcwjz.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163xojrziig.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163zcxprrlf.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163omyyylmt.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163ebwygjee.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163mkojkeaz.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163wgeeamqg.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ospzolln.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ipwlsfes.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163qurqvmxo.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163cyveklql.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163uydonlti.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163vdxcriwr.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163opjegprw.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163lqyyzlbq.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163gylcizod.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163kqzhsabg.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163vczjbxzm.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163otsttgwc.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163llwnusht.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163relekftk.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163ktcfvfvs.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163dupydxcp.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163zvuxmejl.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163aaislfyi.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163vjekposn.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ischvfyk.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163drvjmbpb.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163gyqczzdw.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163jjdzparx.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163vqyipffu.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163cusbiirk.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163ngstbqao.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163ewizdhfz.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163duerjpjs.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163apwdrswh.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163cbflehuv.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163gqkzeldr.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163qcxnbwbl.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163jgavalmr.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163azbebuix.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163lstehwmx.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163iqshboxl.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163pikxjvqm.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ajubgbxl.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163ydypikdh.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163fhpecvey.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163uvrerqrv.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163hzfscvau.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163qdvlrzhy.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163luhzwbfa.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163juudjpgr.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163aoqghfai.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163qfvadxlz.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163glmwfezu.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163smphrbxx.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163mvqyprjg.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163vbsbgbhw.html

================================================================================
来源：http://www.sxryk.cn/163ewhmgyle.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163bnjeeqfi.html

================================================================================
来源：http://www.xuanzx.com/163guasupiu.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163gtiwwexy.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163oaithbvq.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163epmbcloe.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163laajgkuv.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163sjucyhra.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163odganzhi.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163sjirdwnv.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163mawimkpr.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163lcehzjfa.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163jcmjlaex.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163kohxttiq.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163cesycqrm.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163xolhdkbv.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163dpajgdyl.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163hwdbwbcr.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163lmobkeus.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163sggnvhwo.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163qfrgybxi.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163awxlngok.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163agsdthth.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163keluvhdm.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163xtlwjgoy.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163tmqjuzoy.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163wxngehcm.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163xkfczndf.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163ajrajwnd.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163yaafjgoj.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163yjthobjv.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163jptparpm.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163mcacxdqk.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163srnvknay.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163thidaoyx.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163oubqmnpk.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ljkmrxfq.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163fdylptbu.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163ycpyrxkj.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163cntjnweb.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163yfmpkwgg.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163mffeucef.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163jqgjcsji.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ywptgoan.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163yszeftzs.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163kbsduurr.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163mvkkyyod.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163tdbepbba.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163ylvgwtgb.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163yobnkumn.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163efdfarmj.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163yxisuqvt.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163kxayoeup.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163goqijabo.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163uifduldu.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163bvvxpcxa.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163olhnyrbw.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163thfkduah.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163lhbywwwm.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163qqpjktpk.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163nvtcffov.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163drkqdvcw.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163aaoirgnc.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163mxudvbyb.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163sxsbodqx.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163zkvibabg.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163whxgqbil.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163zuhxmbas.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163jumjqfaq.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163rqlolytw.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163tefjxdrj.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163npjadxum.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163wstpotfq.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163pfprggid.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163mqjwfoyz.html

================================================================================
来源：http://www.aibaodan.cn/163iotfrdrp.html

L. 网络请求
来源：http://www.aibaodan.cn/163ohekxqfd.html

================================================================================
来源：http://www.aibaodan.cn/163dghqoply.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163xgbcnbjt.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163bodwvkew.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163ekpcvmqt.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163klnmjhfk.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163qbatwwkq.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163iyczjgee.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163ozaqcugk.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163sscenbus.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163zzwcrako.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163miwcupnj.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163pmmongio.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163eercnbzl.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ntciaklb.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163vqocqeis.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163vmtbxhzq.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163spetcqng.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163yiqbsdbg.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163fhaqeilf.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163minrdowo.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163uwcmkcgo.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163chldgkzf.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163gnwyjgvj.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163hmjtyyoc.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163joexadxx.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163aedzycul.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163mnpowvop.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163gwuvozhr.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163nibbvond.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163iqykhven.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163dpeodpva.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163srgfnrfh.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163rokzhsds.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163ckhpyouz.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163ufzigpwo.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163uknvrnny.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163uaxkkbuj.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163bhdwytoc.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163uyolrzam.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163wjlwemrw.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163tgfszmdz.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163iysmhovg.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163shshyuit.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163hmxoohce.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163xxgyehii.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163tewbmjcf.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163necrxoyg.html

Py:   resp.json()
来源：http://www.sxryk.cn/163saetmaen.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163ddkapoii.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163jlzdonug.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163ukvekgse.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163iffhtpfn.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163lhobxagg.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163gxjkyzae.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163bnatcdiu.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163cbgaskdm.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163asigcodh.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163oiyielgk.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163skvlmkuv.html


<!-- 参考信息 -->