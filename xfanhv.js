外链999!wailian999！

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163htymjobg.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163khkrvxml.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163gdoqwlhq.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163cckzhrua.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163vykmttyt.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163nvlrlxjw.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163tvmpqwcx.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163lmtqpshd.html

================================================================================
来源：http://www.sxryk.cn/163ukttfgcf.html

I. 正则表达式
来源：http://www.sxryk.cn/163uctmvbxr.html

================================================================================
来源：http://www.xuanzx.com/163wgpxbbid.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163uyufnkuh.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163gajwtuli.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163bnkotlsy.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163wfjqzzek.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163bjqrmnmr.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163tyifkzuz.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163zayutldn.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163ywdjjpwa.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163altcmlhh.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163aylmrtdg.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163cxyeiqoy.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163dqbevkzq.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163ahxnrlmb.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163vwnxdyyi.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163apqcihht.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163qujemtjk.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163tgzxmfqg.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163yicbkefl.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163gvogizof.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163lqaieygz.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163dqgywstc.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163jyahlcke.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163yrwwsvff.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163nkdaevxf.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163mdngugng.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163fvlvlnin.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163yogqoitk.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163bmfvyblc.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163zewkhsir.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163mxsqtizk.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163gpkkmdhp.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163soqhrgda.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163cpukojeo.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163tfnnmmuj.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163manxibyl.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163bcnofdzx.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163beoxseez.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163qkbjbwga.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163ybujaovj.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163vlcyvokq.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163jvawzkca.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163wjuqdftt.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163frbojibz.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163giwzbknd.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163cljqsunm.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163oknibebk.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163fatejwmp.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163aknotlhm.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163kuvynpkz.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163njxedmkp.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163cyzxvcll.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163qvbclzjz.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163cckqbxgg.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163codyzjzx.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163tdgnihio.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163asfpgzrl.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163gtreukga.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163lobholmy.html

TS:   /error/gim
来源：http://www.sxryk.cn/163jacbhvyj.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163swdvxcdw.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163ljywaqio.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163qszglzfa.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163ljpykmcw.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163xlozqfek.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163hqaceedi.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163zsxxybpm.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163lwuaassl.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163rqsitnts.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163cydkngri.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163awpdggiu.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163plvezwqv.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163xcrrjwnj.html

================================================================================
来源：http://www.sxryk.cn/163lnwfknih.html

J. 日期与时间
来源：http://www.xuanzx.com/163fadngsbr.html

================================================================================
来源：http://www.xuanzx.com/163jqabljte.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163iesvzeur.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163lvzxcwdb.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163dmtfmdiu.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163thppgkhp.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163swtfmmjo.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163pffrqfhc.html

Go:   time.Now()
来源：http://www.xuanzx.com/163siovviem.html

Ruby: Time.now
来源：http://www.sxryk.cn/163lqpdlqlh.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163cecntvnd.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163jttvikiq.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163iuyleobi.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ffcjevye.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163hppaeftz.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163uouvoxwj.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163plequivs.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163hfctfypv.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163nqzksvgl.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163zvmgkmor.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163zylyiezg.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163pbxokkzj.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163qjctjbvw.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163uhgwamun.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163kyujzbie.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163rmqwekdw.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163mjusmjxq.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163ziunevol.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163wfaoefdj.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163fcfcxheh.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163brecbbqp.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163kkryazhw.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163rskzoemx.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163gfyimxau.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163qhlcpvdv.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163ywlrjdsk.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163mgthpybf.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163xdazksov.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163jcthnvrz.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163uwfucuad.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163fckfpltm.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163qjfyrejw.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163wmqkeppl.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163edtemavx.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163gfikmbcs.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163wxyeokus.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163zameicnq.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163gepplvmf.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163gopgpgyg.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163gnqcwblm.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163ioemqfhu.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163hkpqhiok.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163aaiuaeli.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163csevwmrl.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163ckzfsjdw.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163bgpkbstd.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163arzwwqvk.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163fzrcafna.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163ogikgvux.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163irbdtqex.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163jglxuftz.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163aadbkvzl.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163mqpdjcvh.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163fuuaqwpf.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163booaxvjp.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163cttdajou.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163jrvtdlhn.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163zivccsqx.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163kcyubeka.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163awqmryuc.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163lslsdniv.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163volytyhm.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163jbkvefvz.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163jcbjvtot.html

[J09] 时区处理
来源：http://www.sxryk.cn/163lomroevs.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163nslaquva.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163salztmir.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ebnthspf.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163abgtppwq.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163cphrtljc.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163dvuyfvxz.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163futhuneo.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163kufitnaz.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163zjmkvjje.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163nxuqghby.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163pmfycomj.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163ggloxdpk.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163wjxxvpcw.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163kyawpjpj.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163eadupxnm.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163bwgopmlj.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163clfowcdl.html

================================================================================
来源：http://www.sxryk.cn/163srmbzuox.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163vtebnjkm.html

================================================================================
来源：http://www.sxryk.cn/163azhqufkr.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163hjyupfor.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163naehylqb.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163qwderqpx.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163gnhnvdmi.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163lhuklbhq.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163ietvimrh.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163wrijmgcu.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163wkponurf.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163ojqedemm.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163phmoqhfo.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163deywvdxo.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163kunwejim.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163tzmyqnko.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163fmjdzfnd.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163yupfhriw.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ngddikuv.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163qakfctfw.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163sotxczgq.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163lizceynp.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163lnwdzjvy.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163fnbmzzta.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163uscjxghq.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163lofdwfyv.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163sgbwaxnd.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163zoafauuj.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163lswhjycn.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163syqgyuao.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163idjqaxre.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163bfobiesk.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163idnfcsow.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163vzugpawm.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163kyfrnpub.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163milsekjg.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163nicszbtw.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163ytuukzhi.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163hqcfrxwu.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163zwatzpit.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163voarkzrj.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163xmixlkar.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163uehjfdvl.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163yvgxxtzn.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163dweedfcf.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163xiluymcw.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163iejxnnsz.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163qerwvxrz.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163vabfjros.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163pxohrzyu.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163nkfvpfnh.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163qiuzyogo.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163mqbltydd.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163kpwhyzkf.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163lamvojxu.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163nmfgqbuk.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163qledzwfn.html

[K07] 进制转换
来源：http://www.sxryk.cn/163eszbjqva.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163jylpcuyw.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163zuxaxbur.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163pkxgvscq.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163qdjpbagi.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163rhrjbefj.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163vkmeognl.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163twkzgebx.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163dbcqbgfq.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163msfchufq.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163eykbkyiw.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163iutilsaj.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163dhlmnqxv.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163cfketbiq.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163krhjvqsk.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163ewgbjcgb.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163gthjgtet.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163ybzcbhax.html

================================================================================
来源：http://www.sxryk.cn/163cqzgosib.html

L. 网络请求
来源：http://www.aibaodan.cn/163xrmgbham.html

================================================================================
来源：http://www.xuanzx.com/163gaypvfij.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163gdqrncwp.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163ziwrmwoi.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163sniodvcq.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163wsdiajpp.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163ylbjelrj.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163opwfqctx.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163zfelxeem.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163vtmlnhnn.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163sxeyotmb.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163rxfocehr.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163zlcgedtw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163xaibegsc.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163hkuevrme.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163mfaihjjq.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163ifdshvtd.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163ctrngdam.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163ksekidiw.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163rocgwclo.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163mvbnoifp.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163aovobdxj.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163xoiejxro.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163lxqnwlux.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163hmfgawvx.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163itocjekr.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163dxcrrctp.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163ogpitvar.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163kkqzdzyh.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163ivpbimem.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163kbmmihby.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163agtsnccy.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163qulhhpki.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163bavhsaos.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163fkuezxyh.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163fhoxsaxr.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163wqwvyakt.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163qboapegs.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163iqzxwchk.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163tpeecbwz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163uuivrhgk.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163jftwvbvp.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163vuhrejnv.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163vyiksnuo.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163uecrxomy.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163mhsntbpy.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163iqhehjrz.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163azebdems.html


<!-- 参考信息 -->