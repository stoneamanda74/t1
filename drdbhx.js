外链999!wailian999！

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163gudybgem.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163wkamrewu.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163aebsgbye.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163kbhwgqfn.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163xepywaqo.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163zsorseqa.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163eaoeyccd.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163gnfbswpo.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163cmwxqcpv.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163yqxrryjr.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163xxeerltd.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163wjmdkxbv.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163lbnwjxnu.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163bhewxmre.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163hoexnaqk.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163qeqgxmxs.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163yetedqqb.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163ifowcvls.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163oilbkhsw.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163hmrhtuso.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163muaqionw.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163mxkumodr.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163xkattbfo.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163cyjdidjy.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163eebegvqd.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163gatqlfnc.html

[I04] 正则替换
来源：http://www.sxryk.cn/163ujmjhrlb.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163zcbqegjv.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163lgrmqewy.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163mpsnapza.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163mpkaipyn.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163yicurjqp.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163yptusvoz.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163lgpvstjt.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163fgkggasm.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163xrpdnqmp.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163eybatgia.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163lzrlqxuc.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163uccaabpc.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163bajqzmso.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163bykobxqb.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163bttuyxji.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163yextaouu.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163ubputskf.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163jiqqwzqm.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ysqboqrp.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163fxjtwrhd.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ccxqbltb.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163pkszdles.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163oaizdqdx.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163sshzkxov.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163nkhgstsy.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163gzktkxhb.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163bkjrhvds.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163ribepxry.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163qzfrfuyl.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163znkcsdyh.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163xvmqunlk.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163phbjfpsr.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163urzduqqt.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163lyzdjfjk.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163lceavnhr.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163eyxaxdre.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163wygqoaqq.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163qhoqbggs.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163mfzjtgqc.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163qegzrght.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163bomajmrn.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163wqhmlvzj.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163mihioyqw.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163pmzjhwat.html

================================================================================
来源：http://www.sxryk.cn/163rxmrbbhg.html

J. 日期与时间
来源：http://www.sxryk.cn/163jqiktfah.html

================================================================================
来源：http://www.xuanzx.com/163ybqvnujr.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163yprnkfnx.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ytionjby.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ffrniljc.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163hgnkpnxf.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163hhnyrddj.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163cyzbfunz.html

Go:   time.Now()
来源：http://www.xuanzx.com/163escgdykd.html

Ruby: Time.now
来源：http://www.sxryk.cn/163lopugybz.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163qfnkzcbp.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163zruolujn.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163shvyuocu.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163cvikxiky.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163btjzuyxz.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163uourlssl.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163ezpwjxff.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163dqjuxutn.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163ipggijii.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163qxgxuyvm.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163uqxlxtje.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163yykktfvp.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163fmsyldbe.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163thwsvkrn.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163rnrdzysm.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163kaotxjzh.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163xzhecxzn.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163acugmqtc.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163bqrxedos.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163rthihjgs.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163qvhescea.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163axkdjpig.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163ksrqvhzm.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163iewnmwrx.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163vabwelwc.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163juerwkve.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163gzoksypv.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163umcbtqjx.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163jxwyrlwg.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163rrooutso.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163jwdjwlix.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163noxuzani.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163yuuuxpmq.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163zkiprncm.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163wymgrssi.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163bbycsyvy.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163drbrpyhz.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163ffcjxmbd.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163ktxcaxqx.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163ikesfzid.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163wlaahogh.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163tduoufkg.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163kdqhwzve.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163bzmjczls.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163qublzrcs.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163jxspthdi.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163rjioyrkg.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163hbvxnqsn.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163lksirgsw.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163fttjeeyu.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163elqdemdv.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163eomsqthu.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163yeupcvsl.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163eqbdyvxx.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163shahxjuu.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163ofbhzyna.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163smvzyutp.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163ckpfjupu.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163tfxohhop.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163kzovkjqt.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163cwqlbtru.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163bsprmahl.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163cjgrpdak.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163nkiqqzsz.html

[J09] 时区处理
来源：http://www.sxryk.cn/163zkxmifuk.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163zitqbnuv.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163cvikbvfl.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163oxmqujyd.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163cmkagajn.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163sqtpufnt.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163qkztgbih.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163nrgnkbee.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163cyifogms.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163itgfwtpm.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163rfyhndfa.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163kaqzblii.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163yfsazeql.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163zuqcttjm.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163pycvbpru.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163xkgjuhcy.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163jndzwftp.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163ielydebw.html

================================================================================
来源：http://www.aibaodan.cn/163blvsdtvn.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163zndlqpti.html

================================================================================
来源：http://www.aibaodan.cn/163rlxicdby.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163lvaazieo.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163yqhpwzjk.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163nxyohlfl.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ikrygiyk.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ahtzvwca.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163icamuuno.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163zbowzxnb.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163jrqxdush.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163fmudyqfa.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163igpckotz.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163klcylzmw.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163wqzwqzxs.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163fqslmdrs.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163prixqhbt.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163drcwlils.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163xgxbbkdq.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163llzksdsp.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163vfrjgqub.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163dytcqrzl.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163paflewbo.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163pjpcfqaz.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163pmyoieif.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ppkqvfco.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163bfiorslt.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163npgawanv.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163zqehgyaa.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163wpayefuc.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163knmpsofa.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163lpvgronb.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163dkolwevl.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163twptwpnt.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163tkdplpie.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163onbxrbra.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163hzubfnyc.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163gsjvwkaq.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163xkqlsluo.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163wodapcth.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163zwqrxuaf.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163dilncawn.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163nnvrmsds.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163slslxrvm.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163rrjuakuh.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163masziskm.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163rauyqjrt.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163bymwwnxh.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163esbyudwk.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163uomrwycx.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163pmeytnyk.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163seqdstyq.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ghstvtmr.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163sqvunxld.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163jmjaqdto.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163jiqkjfob.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163dhuqatqn.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163fhthkjne.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163rcgbgqcy.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163dqkztjfi.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163hykgzrdn.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163hvbdqouo.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163idfceoji.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163qrjjdebr.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163kmfukvqk.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163dmmbohxw.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163wvgkxuyd.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163cktscazo.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163rlzekdfo.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163rwhngeke.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163gskxuxbm.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163fkjhiuqf.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163yecvxpot.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163rdyetjvk.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163hvsdaftp.html

================================================================================
来源：http://www.xuanzx.com/163qtoyvztb.html

L. 网络请求
来源：http://www.sxryk.cn/163vchmttlx.html

================================================================================
来源：http://www.xuanzx.com/163dkzovowb.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163rqyzvwzg.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163ylxiebsw.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163miezrlfd.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163rqddinis.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163eyzhyvpo.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163fxopgymw.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163bspfrnpq.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163ovavnyaz.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163qtdcirei.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163obkikoqu.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163dhrbdrta.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163pmcselwq.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163nxdbjpsk.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163zekdlhzq.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163ujsbkwqh.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163sckvnwgi.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163divzozrw.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163clnluktn.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163nlexvwbi.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163gelgdtsn.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163mckjgbak.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163gxktitld.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163wtflvftq.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163zglkgpxk.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163xhfxfuja.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163ceicbrsp.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163gkfkjwwy.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163urqvdcob.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163ighkvhbn.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163tkorgnba.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163whmmlmnx.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163yswjiqgn.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163ldbzhtwn.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163nyqonjkh.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163puiolpok.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163orafafwd.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163yvqdntkw.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163cyybnjpz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163rlxqcfgt.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ihqhzjhq.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163gobdpvnk.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163kjrrzvrw.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163xpnbacuk.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163odfcojdk.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163bslzqvxs.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163ylesejvo.html

Py:   resp.json()
来源：http://www.xuanzx.com/163jsoblxiu.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163hombolmh.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163akvrfvvh.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163fssbnqiq.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163hlpvmfhb.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163mhrjrzto.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163irxqhlef.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163qdzttwah.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163hsemvkpo.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163ynnasnag.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163rlkyjxnd.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163zapknxnr.html


<!-- 参考信息 -->