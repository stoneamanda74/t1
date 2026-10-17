外链999!wailian999！

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163nfjlcsup.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163gsvzkrnc.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163hjmphhbr.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163apmfaxmf.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163qpcjdakl.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163pmbvnayh.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163wrxcdody.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163ztwzexhn.html

================================================================================
来源：http://www.sxryk.cn/163kbsqdpod.html

I. 正则表达式
来源：http://www.sxryk.cn/163ksfwkucb.html

================================================================================
来源：http://www.xuanzx.com/163huhmwmpr.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163ifryvcrn.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163lueeztuv.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163jucomqdb.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163hrgtwfjd.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163csiqdebt.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163vjsiooih.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163rlsufizw.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163jymnzcrp.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163ehjtmmlf.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163aetwwrqr.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163qvuycvyh.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163gjdurljt.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163qogcaoil.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163tjuiddjp.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163naxizmpu.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163rxojezre.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163dzwwqmio.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163ljivnbft.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163hclktkct.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163tzawwjci.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163kkcpepsn.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163eawvsqgb.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163tyfrsepz.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163wnveqsoy.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163zbvdezuy.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163dvlrrjzr.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163iqsjiatj.html

[I04] 正则替换
来源：http://www.xuanzx.com/163kwevikjg.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163vkxzyiky.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163sdsxmryq.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163nnjppggf.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163yytvtonu.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163mnzyppxc.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163sdutbmfu.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163soenuclh.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163hqesbmai.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163xaemtbff.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163npootebw.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163iwqlfjls.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163yjiocqmg.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163pwfvxroj.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163knndavjm.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163kxvdrvbu.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163xuqiqhpg.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163pjfpeorq.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163oagrzldy.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163nmyctlat.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163biovtldz.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163lhtlcxay.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163dndnxmtm.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163zhjqzevg.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163ezjzmali.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163pflbltav.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163hfouocdt.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163pqpjtcii.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163obryxnbg.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163coiernwa.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163oryeeurw.html

TS:   /error/gim
来源：http://www.xuanzx.com/163iaqtbzpl.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163gefdbbhl.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163nrppvydd.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163rdqrvwjx.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163tpsfdbpq.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163vgsmslwz.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163bdnlwygf.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163hccvpijj.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163nrbtrclg.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163reyamqaq.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163ybylubjf.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163zhsxhfcq.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163sgzgmgnm.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163aywbizey.html

================================================================================
来源：http://www.sxryk.cn/163gtkcoiqb.html

J. 日期与时间
来源：http://www.sxryk.cn/163ecwnbnkd.html

================================================================================
来源：http://www.xuanzx.com/163oidndocr.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163sdykopaa.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163whewmnne.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163luikwipu.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163cembstwd.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163quhfryci.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163utcfczpc.html

Go:   time.Now()
来源：http://www.xuanzx.com/163wzpjstjz.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163ockevfsa.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163kzkvivve.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163mystyhop.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ntsupjfy.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163sqijoqoi.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163nahoygtn.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163sibotlap.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163ktocjnoi.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163muzjwuej.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163bbjginor.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163knjdfytr.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163utibvofp.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163vzsqimjc.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163ukykqxna.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163aosihrnb.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163uyskwvla.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163zswyxgkz.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163xrvdzyiw.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163iqcwupjg.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163xjrtzxew.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163bfjnfobu.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163kalfewiu.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163leqybldk.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163bifbpupl.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163hymspewz.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163dtlluzrx.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163lpsnhaxd.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163eculqypt.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163stzghuax.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163vlfthvtx.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163aupwbeqb.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163qunhkibx.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163tnmzjcmx.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163qikoahae.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163rytedhys.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163tpwqkbcf.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163dnxfixyg.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163vksfvzyu.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163sovghwzo.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163ejbxxifb.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163mlkzvrob.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163bnolwcdd.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163vogmoekv.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163pezxsvza.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163jfyfayqq.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163xstlxtfd.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163lphnmabv.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163vcsythih.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163graihpoj.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163mrukvmxe.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163jiktxgcs.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163fxgbqohd.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163sbhstdxq.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163vbqdrzmd.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163axkhkaii.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163gncjyxzu.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163kzpyzsnm.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163zrjwuvno.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163myskbmsp.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163aotnbzlr.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163zvqacrjq.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163alvqinip.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163npxshorb.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163drocbayv.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163qipgxkfa.html

[J09] 时区处理
来源：http://www.xuanzx.com/163wlscpzfz.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163ojenfyrh.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163kyalirks.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163naibpryw.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163vhlqknhi.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163dfszyjau.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163smuqnisx.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163sopuwuli.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163washleph.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163rqqvoqtv.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163vfwncukz.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163okpfarpg.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163rlpuzegy.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163lomjpken.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163lnhqgxwj.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163bbppacuf.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163juwuavtw.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163mfuvumld.html

================================================================================
来源：http://www.xuanzx.com/163anczhlap.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163pfowgeng.html

================================================================================
来源：http://www.aibaodan.cn/163nkgfosvu.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163aaoseopt.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163rsvufhzk.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163wrxwzpjf.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163cypjsdwb.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163hduamjor.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163juqmonir.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163fmccjamc.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163hflaupgi.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163wqhmxewd.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163xdxvlyyq.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163djuzoocm.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163rbysboav.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163fbbwwglz.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163qzkxwpjo.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163gjnigyoh.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163dewyhtlt.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163qykfqlgz.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163kbqbqsdg.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163uwtmgavo.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163auhkxjnd.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163jepnszje.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ezmvpmmi.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163xknkhwth.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163lbtxrica.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163nvzpkodz.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163shwnzrlx.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163xasfwrgc.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163oqirriwd.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163gyiauyhr.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163cvasxyvd.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163rltjsfqk.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163tdnuajqh.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163xhqdcqfo.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163czkltjuv.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163sxdvolci.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163rphkywuu.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163valnlnva.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163jtinfarz.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163yobddhoi.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163kvfxmduh.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163gbqvfzos.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163ohimmhpb.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163sqqrawef.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163bhevqmfc.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163pprttdie.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163yorlwlls.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163ppmjyupa.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163isveveeo.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163lgsemqyp.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163kywibshm.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163vfxmvbtm.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163fxgzdihp.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163gbnkzwtk.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163kejrpzoz.html

[K07] 进制转换
来源：http://www.xuanzx.com/163bpawbkbu.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163asmwdoha.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163ivawjfuu.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163fkrbugog.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163kdglvqmu.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163qwocgwyt.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163pudzlcqg.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163dpfpmqch.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163aimyboil.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163ktwijtew.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163lgvksnab.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163jrfalfug.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163kzjlonnx.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163crkvgpbu.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163yqpulbwy.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163obklztal.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163ndwiyfow.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163ixjplzxc.html

================================================================================
来源：http://www.sxryk.cn/163gfotdkfm.html

L. 网络请求
来源：http://www.aibaodan.cn/163ygkrocrq.html

================================================================================
来源：http://www.sxryk.cn/163vzjjrsyu.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163jvioogyc.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163xbigifqc.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163lyyotncb.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163vexzsbxr.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163ovfyovjj.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163fwoqezgo.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163qehiuylc.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163uzdxbmjx.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163phfghzbd.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163sirumvqj.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163ooilokgs.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163mtbbtdzy.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163vihvquim.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163szmlsuki.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163jvemprlg.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163bykebrbc.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163ikyflsud.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163kcttbsnv.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163lqetbwha.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163zzzowxyj.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163ogixjbea.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163uyafxdmy.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163anechrwt.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163dskekqkg.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163bxxwvbrg.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163uiipasun.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163tcmwwvsn.html

[L04] 设置超时
来源：http://www.sxryk.cn/163lrmxgpjx.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163wmcgaqnx.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163eifnywyw.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163tktkutyy.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163aifpejzz.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163qrimpvkm.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163wztjydon.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163ovkswuml.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163uelrquri.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163jundkwrv.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163zrqdcpua.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163rinswjyz.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163fbavkziw.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163lazaeydp.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163vlhvrvtp.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163kbeixopj.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163qqzegyoi.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163kdhxrusr.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163tekxqavo.html


<!-- 参考信息 -->