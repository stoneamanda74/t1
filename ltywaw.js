外链999!wailian999！

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163wtkobosb.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163ksosjszj.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ntnqacku.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163bnrqizgw.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163nbqixkgi.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163ooajlxbr.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163nyhzatvw.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163wijpklso.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163yaeoqpim.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163lejwrevo.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163eowjpcln.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163wurdewps.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163dmvmxvcm.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163mowwpkhm.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163uefmvmjt.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163erihrtmt.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163pvpvpvhm.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163nasebapd.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163epbtexyx.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163xbczgpuf.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163xzxtlprf.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163adbnbzjj.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163awremjpn.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163munzrfch.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163gajgdswz.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163umpfdqua.html

[I04] 正则替换
来源：http://www.sxryk.cn/163uzltauxw.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163atriligt.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163wqqfyqdf.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163cjnphraq.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163hgmpdyuy.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163lcpzcgyv.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163zrfbmcai.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163lydmygok.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163nprknrmi.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163yyavfunp.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163ojpvwaqi.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163stxkkktr.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163tatludju.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163rzdfersl.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163txwwhghk.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163jyafzhda.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163cykzaodd.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163kbujwsdl.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163dsnjlfrj.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163xjcbyufq.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163rnizftln.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163syxkwkat.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163aspbckww.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163bjdfasnw.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163mwtqwdwh.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163yupdjwwv.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163rxjuoyrm.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163xoyqcgyr.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163lihtuejf.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163etidtfmj.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163hxyageam.html

TS:   /error/gim
来源：http://www.xuanzx.com/163ajxdhuno.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163gnxojzzw.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163aqoqnpas.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163bgjavobx.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163rwqetxsh.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163oxsrjjgl.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163ljvqnbwu.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163vekymueg.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163kwapskyx.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163jokiuzss.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163ibfkesuo.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163lycuyfqt.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163mgcstxuz.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163giuguduy.html

================================================================================
来源：http://www.xuanzx.com/163ovcsjrno.html

J. 日期与时间
来源：http://www.aibaodan.cn/163poeavvfy.html

================================================================================
来源：http://www.xuanzx.com/163kockvnuh.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163dxkdodmh.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163pxbmujrn.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163rsgpqepd.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163eownrfpz.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163xkvvebzm.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163rxqmmitz.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163lejkxkah.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163ppmusqbu.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163yscbxbwc.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163jlrjccuq.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163qqqxwefp.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163rswosaxe.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163brywuxwy.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163tjggpxqm.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163winpchos.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163odruwtba.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163sbuhwooe.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163oahdajtk.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163akkdblks.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163jwjqkuxh.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163hwhjlkkv.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163xffhpmnt.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163sacneale.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163syrhkxdz.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163zgqbvqbz.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163rdmjfpvg.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163qscxnxgk.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163txcnhlyw.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163aqndutwj.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163jzjrxpes.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163bksshbjp.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163jzrgrets.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163miqjqjga.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163hhpnzizo.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163bgcrdeoz.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163aclpfaaw.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163jzijixip.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163iudowatv.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163fhghhijm.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ljxiyxmy.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163krfvitjg.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163iydzipzq.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163hejkclej.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163yjlehzck.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163gmfodttv.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163qwdnewvs.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163cdqpqdtz.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163bxmieuda.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163qnmontkt.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163etpczuiz.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163rcpgmlay.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163ztrslqil.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163qmdzyxuw.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163bblvudst.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163gqbpwnoz.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163cvwxbouf.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163ahnfjwux.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163bglyhksf.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163vslutcsc.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163qbhndgjj.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163rfviqpok.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163kyhgbtgh.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163qrbhzokw.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163lnovpuzl.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163gzhjvkfc.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163ljctmfpb.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163udiamjgj.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163enxejbrw.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163puldskrl.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163oazdbcun.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163ltkexqhx.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163efanyroi.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163epwdcnte.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163zxbyadal.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163igpoqkfw.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163htbmdqdq.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163bqjnlbsl.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163qvucxzhl.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163afieiose.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163jishauqu.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163nxxyjzor.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163ghbvagtt.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163yxzbqzuv.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163mcpdppjg.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163mdwncsup.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163exbyooxx.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163alnykbae.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163qcbcysxx.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163hrixyjro.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163mwzcnmld.html

================================================================================
来源：http://www.aibaodan.cn/163pjucnovw.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163dksnckse.html

================================================================================
来源：http://www.xuanzx.com/163cjrxhctq.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163pgbavgil.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163qbwimake.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163hfebaapi.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163iasxklob.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163iyngfrcb.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163trfiiyen.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163bjyclfyw.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163qqwbxejk.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163enbtryog.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163osdegqms.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163pswxrojz.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163leddqiet.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163kcvhsofj.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163atqmgqzy.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163xxtrycfx.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163xxozburj.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163wiuvbiar.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163eaukfeoy.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163gdannhjj.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163mdlchgmj.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ahrfjsrx.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163gycbrkcc.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163weuexsky.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163bajjgdwu.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163mrjkunqj.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163ptjyjkxe.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163gutcbuwj.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163lfkohqzq.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163lkdoqotk.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163awudrigz.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163bhtmhkzw.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163lddfrdau.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163yhsgmfol.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163dlefbnip.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163lrqulicb.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163gtjnjcxc.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163evtffmql.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163xkspsced.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163ekklhlvr.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163iltcjyah.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163gcrxjmlw.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163pbmvixfn.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163gpsdenco.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163cnufwqcu.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163ajdfsaxo.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163bmjcxgyh.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163gzsfcoij.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163wmslbhfy.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ldigsaze.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163cobiykge.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163hzpyixdd.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163vrkrdloc.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163kpmojuay.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163eiovniud.html

[K07] 进制转换
来源：http://www.sxryk.cn/163lywycebr.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163mkogpwnm.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163tvjihdii.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163qmhkjktl.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163gratbnya.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163kdqevwgg.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163bogtbict.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163vopmdrte.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163kaqtnfpl.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163rpeoshao.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163voomfunh.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163ewvpkvao.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163zopmsmen.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163givzgozq.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163rduvedpw.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163ewxkqqhg.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163crghkmrx.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163ybtufknc.html

================================================================================
来源：http://www.xuanzx.com/163xstfjwie.html

L. 网络请求
来源：http://www.xuanzx.com/163myvlpzit.html

================================================================================
来源：http://www.sxryk.cn/163pweilrlb.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163tfgqygsw.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163tekvfzkd.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163xmgbbzee.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163asqibfga.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163vxmkehii.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163gohqhdrr.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163nynunzxy.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163rgvvjhbx.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163yyknnmzc.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163cknakfkz.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163otkwimfc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163kiqxskbz.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163zhfjkocb.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163nuprxsvn.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163pydufdgi.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163vqwmxksb.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163cicxrzkx.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163yxopcyfx.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163qnzqmdls.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163xadaplny.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163fsicfcgw.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163frrenavb.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163pppgmsnp.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163jxzhpiaw.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163uoqwlueq.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163fidfvicp.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163oumjkhhp.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163lvdoyqro.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163axvxswnf.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163dglawhtg.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163vbgrhyve.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163qetxqyry.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163piralfjd.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163vltdjncy.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163rfzdebnd.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163ejhslrvh.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163zzjftzuj.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163fffuiefy.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163jrpsvjac.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163uwwsiroq.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163rtabwlmx.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163jggevjwt.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163jbfjpzce.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163ojjxtkdb.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163kbywrhou.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163ddhjrhif.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163yzvblsll.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163hmrfvuzt.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163ufsndqci.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163vprpfnvy.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163vpzpsxwl.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163ombxexwh.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163hmqlkbpo.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163rcjtzehd.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163yguomatn.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163ahyexguc.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163rywlfocu.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163bygwljhk.html


<!-- 参考信息 -->