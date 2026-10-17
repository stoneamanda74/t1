外链999!wailian999！

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163fprlgvol.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163cebjlapf.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163svumwowj.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163eohhgbgh.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163elttfbea.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163jggttopw.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163hodwvhwv.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163ghvukiyz.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163cqswlonv.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163lxsucvrz.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163uunknala.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163wyvnddbe.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163uudktxir.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163shxdijvc.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163gtxdutjx.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163jyfcbpxn.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163zuzyixaa.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163knotkddy.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163dipwevql.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163ghyumtmu.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163yjvvgnpj.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163uhkbzuof.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163zeyisxbz.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163hdujmtrf.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163oypdxilu.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163edkuvdai.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163gmbqaxou.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163haonxblk.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163nfyykhdx.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163ceqcldck.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163fynrogrz.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163yhnopzqq.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163uyqdrujj.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163cchevuvq.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163jisduzhd.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163iqmojzlb.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163wdtwdpiu.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163iioiwloc.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163rmdkqocv.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163japgbvbi.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163ovhfuayp.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163zzejkehp.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163dvodqxyi.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163mrrgjnpl.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163wydjurns.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163heraoaen.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163jyijlpnb.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163wwsuxptq.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163neclimuc.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163eoxktgev.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163jxkzvwzf.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163qjuzesqc.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163jhskqnbq.html

TS:   /error/gim
来源：http://www.xuanzx.com/163xczqjwkt.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163womgiczi.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163wgwniajh.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163llsyvxch.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163xrtwpyiw.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163uwjfpaip.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163tcqgwnyy.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163qrsalems.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163wgojonsn.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163jzhehjlp.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163ttsoqlce.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163hqejznlk.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163lpzlzuch.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163iywguajz.html

================================================================================
来源：http://www.aibaodan.cn/163mcsunaxt.html

J. 日期与时间
来源：http://www.sxryk.cn/163tnihbjzu.html

================================================================================
来源：http://www.sxryk.cn/163lstmjnri.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163cspcyybr.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163jvwtxkfj.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163qyrfjttg.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163pmyoergu.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163xsssdmzg.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163ihtbtuao.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163qkarwmqx.html

Ruby: Time.now
来源：http://www.xuanzx.com/163fbjdizwq.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163qxrzcwpz.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163vnhpkcdk.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163dalfpucb.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163rpaewndh.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163bbyicuir.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163hvfpyphk.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163oezmvcia.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163lfwvrgdp.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163oautrxqg.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163dnpqadwk.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163nlfeoafy.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163bwkedyza.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163qohjaplo.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163bemamofw.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163uqtmdbkv.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163zkhplndz.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163rmhsosnp.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163svyiwwzn.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163aztzpzyr.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163koqezapn.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163xmircdxa.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163lsfqemqj.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163vmijcyrr.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163zxygmbtt.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163mtjizwxk.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163qfjepnwv.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163jwymvjaq.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163tomeewfa.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163anuolrjt.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163xyjsdwge.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163ntdgmgyl.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163kxqzymay.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163krmgzczj.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163mqimibzq.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163mkonwpme.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163caqmsvlj.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163htcdwvld.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163zgrdzjzl.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163xoxthtdc.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163rfudfzbm.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163cjgkmmvs.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163vcutrfqz.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163tgkzaapl.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163kwxuaojo.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163pkiqzytf.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163ixzepylz.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163rubcjpxh.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163rglrtlzd.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163bkhgzevq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ztmpvmkv.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163lwvnggvr.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163epsvonck.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163srurktns.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163hourebsx.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163qnuebdfx.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163kunrgaub.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163zrmxemck.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163zkygfslv.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163dzfsdajj.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163ddrrnuai.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163hcnahuaa.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163cpskgnri.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163jtwerskd.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163ycbsljua.html

[J09] 时区处理
来源：http://www.sxryk.cn/163karartsq.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163hvivwhkw.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163tzvgkenr.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163smgdxtmq.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163sgfnyrhx.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163yzlaippp.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163uvmbvcha.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163elpmhugr.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163tamrqvdz.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163rrfjebwq.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163lzkgodjv.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163ijhgbcqo.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163uaafctac.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163ptvyhijg.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163fxfsfwcc.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163rfdrebie.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163sqnkbzzz.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163ojmacary.html

================================================================================
来源：http://www.xuanzx.com/163wvaqgque.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163mgresnxy.html

================================================================================
来源：http://www.xuanzx.com/163ohbgdvba.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163vejnhazn.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163xyritiqe.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163jwqfcgnp.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ghuepghn.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163fjgzqgan.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163hrpxkzqi.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163sttxporb.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163atbdfnqi.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163gmeplvsw.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163avcopzfv.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163crawipzu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163ewvsxswx.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163dxoybdpk.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163pipnrgdf.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163bmoyrsqk.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163bikfhcsy.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163jcgangmd.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163iukxzzvd.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163dhamuuwl.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163giffyuwg.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163msrtozwe.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163vxffdoiy.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163jecksosy.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163fuajrnxm.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163rtliajsl.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163fmtsnkbb.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163zyajznzl.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163sgohqlfv.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163yewrzanh.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163cufaomty.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163olmkssbt.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163xzdikijn.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163zejrzkje.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163aovyjros.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163qjethhka.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163ezquplew.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163yoflyuuj.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163badsesck.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163yqdhwlrd.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163kkeemtxd.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163zvmlghyl.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163emxoctqc.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163ejnjkqxj.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163xavlrcct.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163sipprhhs.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163swjxipzq.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163uygtjirq.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163ecqmkrhf.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163heeoftoq.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163jcwnlgwm.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163jybbxpmf.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163ggqjdavb.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163voxvzeje.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163xghsvrlx.html

[K07] 进制转换
来源：http://www.xuanzx.com/163wzptlsps.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163bdnjlbyf.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163hrlyfrbf.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163nrokceda.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163okstltxv.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163luammnrc.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163qlxgkdhl.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163hleqaghp.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163gnfdvlgw.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163cfapqzqg.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163vnlvxxwg.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163ijdrgzld.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163qqiueooa.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163lknwihwj.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163dqyiytxw.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163wsbssvfv.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163hcfdsgor.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163wbjvlowr.html

================================================================================
来源：http://www.sxryk.cn/163udogfguw.html

L. 网络请求
来源：http://www.aibaodan.cn/163cwlqxyqg.html

================================================================================
来源：http://www.xuanzx.com/163yhmzgrkj.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163skpeonnm.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163wetztkpc.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163fovvhsvf.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163pvttpnxf.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163gguhwwnd.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163iouflnhq.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163lkjiuejd.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163vtzcsrqi.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163pegtttvd.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163vwngffov.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163uurswzio.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163ecrpbjgz.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163kigqroyh.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163hfoeyynm.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163jrokgdvy.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163hfxqdqzf.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163qfexclmr.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163uvugngpa.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163hjgpfros.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163lqmnddms.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163qgkfajaf.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163gppndaoc.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163yzngcxio.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163mwyrdwnz.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163gfczrtwd.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163osplwzdo.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163vrjzlkuq.html

[L04] 设置超时
来源：http://www.xuanzx.com/163ftrffomy.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163cdxqvixf.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163rnlfpoxr.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163wxpxuafo.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163eilohbrm.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163qgvzpazy.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163haiohmyr.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163sriozjxz.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163ixbgadra.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163dfjwobay.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163cimqwvnp.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163myfhbgyt.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163rbwusajx.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163rbtpiipr.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163jjxasbjf.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163lutohgje.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163nuofbffj.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163igdxfmmd.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163kfyhjinq.html

Py:   resp.json()
来源：http://www.xuanzx.com/163pvdbvejn.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163lcnhlbfm.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163mkvcjmzd.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163thugayyw.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163qhphszdk.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163cmmsbxnj.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163xhotfegq.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163mmpwuelu.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163ipqyzjqs.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163ozxmhzta.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163criikjbo.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163qzqcvgah.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163xiydedtz.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163qgnokbyr.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163qyrnrhbh.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163inkpcelk.html


<!-- 参考信息 -->