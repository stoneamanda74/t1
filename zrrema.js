外链999!wailian999！

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163wcmupvmm.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163mdeinzvt.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163rzgjiozw.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163zbrramcy.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163zdcuthif.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163ulzbxlni.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163dgtbxshr.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163hddkxanw.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163cpvvqobe.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163dtmngyxm.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163sqdrntob.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163bbxjckcm.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163xupkqmwj.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163nwnjqspx.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163iityhoef.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163oegivgdc.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163rgjwpzib.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163usgzstpr.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163ztizcqiy.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163sajsewtd.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163xwtfrycb.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163uwgnnipv.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163ikaacqpf.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163pwmemtoh.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163yrvqfwsf.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163ejrhvskq.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163oeugwamq.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163zcfajtfw.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163uvxypbho.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ersvqngn.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163ysmbgbjy.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163dzqpjxkz.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163ajbcgtlw.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163sufjanfa.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163fgikkqjv.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163bhilhfar.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163udetkhyh.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163nnhsslck.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163qzhdtadl.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163jlcqhscd.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163klnjlckr.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163sabhgwot.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163vytdbkuz.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163xyfddtha.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163qnkeyvdv.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163qpzyffyi.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163stnxervr.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163mhtvxgez.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163osvyzyyq.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163mommayex.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163vfovzjru.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163rmrgfxlu.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ndjjdxix.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163rwvtpynb.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163thozefmy.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163xwqejecx.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163tulwhzxs.html

TS:   /error/gim
来源：http://www.xuanzx.com/163lidgxmvi.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163ziojxqlg.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163pfxkhith.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163dgprkvis.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163xvmgyhod.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163bszohebb.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163utnkugsk.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163wvvpbidq.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163nwtctgwm.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163vdvwdkrl.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163zxfhswve.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163hrjxhjrd.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163yraqptfx.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163aoeizfiw.html

================================================================================
来源：http://www.sxryk.cn/163tajalifd.html

J. 日期与时间
来源：http://www.aibaodan.cn/163bjmmnvpe.html

================================================================================
来源：http://www.xuanzx.com/163ckdfyisk.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163volcdbvl.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163oehtrsgs.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163hcnmbhze.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163yukboskl.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163whvkrtrs.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163lpvvwdca.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163gydjimsq.html

Ruby: Time.now
来源：http://www.xuanzx.com/163lpwnlrfw.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163wbpfchct.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163uhvxbuar.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163vzjeoylx.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163vkecjrpd.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163ktjvymia.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163hvwqlzks.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163rlorsymm.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163vteuhaty.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163poqpmzyp.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163kthiumxc.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163udajcbxt.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163ukgeghfd.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163rutnpgty.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163lwpclbuy.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ipiyjpdt.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163acvfkfas.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163axjtlgvb.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163rfqjzexh.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163yhzbmdrn.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163exfrvimg.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163xrebghfd.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163xisxwrmt.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163ugjmgjip.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163gwgmjkpf.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163vkmvcwqr.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163tqifesus.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163jzvbakau.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163xputbepu.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163bqksovyq.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163olqgcqdl.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163mkyigrrz.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163impyqbyo.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163unwbrexb.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163jlzbpqhk.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163yxsnhzft.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163dyvbjudu.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163fdjaxqht.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163dfgzrmgr.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163bwbgjurc.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163ihgrnakf.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163wtfqmtis.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163smvprpsb.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163ylckfpai.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163lpdlflaz.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163xzvpsnts.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163aqnsvwmm.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163qspiuumo.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163pfsaiyrk.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163ytprvutr.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163dacyrbyu.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163dxfumtek.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163jomhvotb.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163qfdlhepv.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163vebjsvqf.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163fommluhn.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163vmosnmzp.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163iufdktew.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163mfxnjgaw.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163embyqsaa.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163rbwcqbzl.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163fseieayy.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163qkwjfwwx.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163tbdzpaye.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163yomubugk.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163nuyotfer.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163mifuvmmp.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163fjudwsgh.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163vrctdyyr.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163gcnplkhc.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163adeqzkou.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163xiccerit.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163hrmihfhc.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163xrfqipyf.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163wswbxlkr.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163pejzmhzo.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163mnckovqs.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163birpbyby.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163gxpncrgn.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163tsapsuom.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163vgqnbceb.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163pkiuiblk.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163zpiobikg.html

================================================================================
来源：http://www.sxryk.cn/163jvjdbbjg.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163iatpaywb.html

================================================================================
来源：http://www.aibaodan.cn/163cagccbtu.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163vuvwwmrv.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163vsictson.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163lkmhwgnj.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163aurallcx.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163iaabcrsw.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163lorisywf.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163topqcuvb.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163tisjcjap.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163sbvlwino.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163wplplfoq.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163vhxwicxl.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163ayswygmo.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163sfrbqhrf.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163yuwojitx.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163okyyleyl.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163doiyyiqr.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163xnhpcrfh.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163yvbcwjdn.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163ucqbgpin.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163iymetvyd.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163elkaxinw.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163nbjmjgpx.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163xjqrfzzr.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163amoqfkcd.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163nxgsfsgv.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163riochpme.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163nrjmldcx.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163bvmzbpdq.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163iysrtgqf.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163fbtajafh.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163bdveaaxi.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ypzwhfwe.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163xzqacfya.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163nngixehn.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163gwgdadbm.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163qgqlenat.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163lmjecbop.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163hefjqlqo.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163ltuutkap.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163elnucgkz.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163xbgwdvcx.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163xzeohaha.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163rqqvhkoa.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163baxyyfcw.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163cvsapjjr.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163opbokkpk.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163fyzurveb.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163thwbpbcy.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163gxzpyzzo.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163iozwqeji.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163ifnmizqr.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163kntzqhxx.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163cngmfjao.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163scgcixme.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163fjzjfrud.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163srolnhla.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163rwhnzshx.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163xwnkdixq.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163wfinsuff.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163bjvqoegr.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163fspkqxbd.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163ukqeljkl.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163gwahsghx.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163nokvvdqk.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163kvhnzhun.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163vatifukz.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163inpjsojy.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163mgdhqlsk.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163cuqfcojg.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163xpqhpnri.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163mamkmrbm.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163gsejvdmi.html

================================================================================
来源：http://www.xuanzx.com/163qwptslvj.html

L. 网络请求
来源：http://www.aibaodan.cn/163cbjcasgx.html

================================================================================
来源：http://www.aibaodan.cn/163ccttzsky.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163mpibnoqu.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163xvlvddmc.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163vdvxjszm.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163cuyawnxv.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163vmcuqypt.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163oidkdmby.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163rughlivk.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163emcjrsge.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163vgvcoztk.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163wcdmcimz.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163ggsqghqx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163lqdponoc.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163irduwtqe.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163hyvrvzuo.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163rnohlqpy.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163stbuvkfx.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163jpbxdhsx.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163vfbwkzod.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163ioirajrt.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163zhxaomjm.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163yvenftnr.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163xmjmikiq.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163wwygciol.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163ktbiuplv.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163wiayakee.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163prheekih.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163mptqqgni.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163uizjtysr.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163erlbnwec.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163qcqxqqfr.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163elmrtfob.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163viwootee.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163jmsnbold.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163eoyhgncs.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163rlsdlcyv.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163laodusji.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163nvqwbpgo.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163gapsystl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163phmkfmuh.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163jxxcbwsb.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163elaupdsx.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163wibmkdpc.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163xvojpvbq.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163bzhetsrw.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163itgggbjx.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163mmdliapj.html

Py:   resp.json()
来源：http://www.xuanzx.com/163hgbiqphq.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163sdbxfvfr.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163omufzieb.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163bzxptawz.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163xyvqbuvs.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163zpywjtof.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163elgrtcpj.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163xkeuijbr.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163xauqrvwr.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163omnhdytj.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163ostsbklc.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163wmevrnub.html


<!-- 参考信息 -->