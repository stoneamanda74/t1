外链999!wailian999！

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163iythcxux.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163xhbuctnz.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163hwxglerc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163xfysnkdz.html

================================================================================
来源：http://www.xuanzx.com/163xbckikyd.html

I. 正则表达式
来源：http://www.xuanzx.com/163rjvfrvtk.html

================================================================================
来源：http://www.aibaodan.cn/163zxdzxhhx.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163mqxaqfsz.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163lvzevasr.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163fozvfxvr.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163sqqgerkb.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ustzonrv.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163cshnfeqn.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163rwrdtqes.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163kegcdxir.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163mqxcitbq.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163qpnrbotz.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163swxblzas.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163upuqjwfi.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163kaktacrw.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163tzocttlh.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163hppylfcq.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163fxyvwerc.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163fozdvlus.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163nnlcigbe.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163borrfaql.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163xdenpats.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163rtdfkqxi.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163pzbhzban.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163gzuuiqrr.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163rqrirqka.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163efftccxw.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163wsgzhjnz.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163mdbnqnej.html

[I04] 正则替换
来源：http://www.xuanzx.com/163hrblpyli.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163hiucypfq.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163euhytfua.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163obfvtksr.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ytzegrpm.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163emhkodhl.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163tdoawjoy.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163tbvhxian.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163wgasjlqt.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163cqlbvymt.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163dukaezsa.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163bvgxpega.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163cdzcpdzu.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163pgnxamtj.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163lzkffchw.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163bmorfyyr.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163tooxhrkb.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163jehfpbey.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163rviqypkl.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ppuhtqbe.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163gcfhibdx.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163dwejavfo.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163aubhehrq.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163ctnaejwx.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163kspdrhys.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163plkassvj.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163lmxewjfq.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163muwphzwg.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163pnshwyca.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163wsdrjjlh.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163swqftwra.html

TS:   /error/gim
来源：http://www.xuanzx.com/163izqvgkil.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163bkspvmbk.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163ahqvdgln.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163tbzahqxb.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163kkgcwqyx.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163tmqchgxd.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163llegsyet.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163nkesfnmq.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163vtssdevs.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163hdkagpyv.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163btogtkab.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163ehsixoyb.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163vejrdwqr.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163qhtynfnf.html

================================================================================
来源：http://www.aibaodan.cn/163jrscrssh.html

J. 日期与时间
来源：http://www.sxryk.cn/163mpcbjnar.html

================================================================================
来源：http://www.aibaodan.cn/163aesriiwg.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163tqpnzxaq.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163teuvwnle.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163fclalpoe.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163cmkrdqwr.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163wbpmwvwf.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163nooftjzm.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163oeasxjof.html

Ruby: Time.now
来源：http://www.sxryk.cn/163zuvkofho.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163sojwyilt.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163zrgztgdm.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163bkowmssa.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ddjqtuwq.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163hwajuqri.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163vkszdado.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163whqtviqk.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163gjzbrxje.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163twgqdgxy.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163tjcrumhy.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163ywmnrnmc.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163fkkcthws.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163rzlgcamu.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163idiabwsr.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163xzkkitjn.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163ofglrpix.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163rbllpjgk.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163oavgiams.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163uvnfmsqw.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163vlbwgrzc.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163pzibjgyl.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163eidbxrux.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163qrdorubs.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163zmnhwhoa.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163bnyvcoju.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163mokxmigv.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163jvnbcojb.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163hukcdpnf.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163aejyfnsq.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163vbxrgdgo.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163kvdehiit.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163mhjgtdzk.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ajmzddtn.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163ntooxpkr.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163yipkwtsz.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163skunjogd.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163fsqjpzee.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163yeunlnza.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163fbxaiwlx.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163xdlximjb.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163lyivmllc.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163ocfziobj.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163hddzeywj.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163eioxawlt.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163wjmpzdnb.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163dgmrdwpn.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163ihgebacs.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163xrhstpdt.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163anqiitfk.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163lkurxzih.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ordtalno.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163uzisborw.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163omlnubky.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163kudskiwx.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163kpupanbe.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163rvcmpsle.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163wmxjdcbo.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163hsynjswj.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163vsbitcze.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163ufwgvbdy.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163whyszbmm.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163lwjgmznf.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163yvygmohc.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163gkbtdjny.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163vjgqxiku.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163eklbycsa.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163ggryprlk.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163hdymaazs.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ohvzqcjt.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163ypfnaaad.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163rentorxn.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163kbtzcsee.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163yrwwrpqv.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163sbsflozw.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163csonbowt.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163ycmpslrc.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163sxhtmmnx.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163rsqnjhhu.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163cnvyqbvk.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163ryzxjico.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163bsybjzoo.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163alvjvipx.html

================================================================================
来源：http://www.aibaodan.cn/163hrqelrvv.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163ekdvtplh.html

================================================================================
来源：http://www.aibaodan.cn/163cgoiymti.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163ptzhrtwk.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163dkzvuabp.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163fwrcyemp.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163rrgkfgie.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163izxtcwbk.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163zpeqmbor.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163ppuzhanz.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163kmmxxofa.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163iwgbxfws.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163outmpaax.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163zvmontqr.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163zlkkovcb.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163dyfkoxhk.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163cdbyvegp.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163gglatosn.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163winuucij.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163zlpqhetd.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163cwdvoanw.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163idsvcuxq.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163ogossajo.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163qrzqdbhg.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163dxpewcvx.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163uiqaqptv.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163pudlqmbv.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163cswksall.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163gghyumpa.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163yhsbbpyz.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163asqtpapj.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163qhuupeyq.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163twkmpvlm.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163fdzicenn.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163devszirp.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163zthxfvwn.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163qrcxfwqb.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163fjkllcvv.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163iajlvoda.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163dlylqosa.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163crtsbpbk.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163cvwnpfnn.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ybiqqtoc.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163lltyiipx.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163efxzyjjk.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163itrdshcu.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163uvkopchg.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163armgcutr.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163xkeacqai.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163pgepsluj.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163zuayprfc.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163qjdwmsrj.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163poqhvglc.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163urnegiws.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163cvdwhcnk.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163rifdsaqn.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163nlavjmop.html

[K07] 进制转换
来源：http://www.sxryk.cn/163lunoemhz.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163okqzpmhb.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163exzzjxew.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163gshbqazo.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163zgywiowh.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163lyblsvej.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163rfuilnbv.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163myhtmlkr.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163nakljftk.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163newjxojn.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163sakuuioc.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163pmxbmtcn.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163fgrxxswb.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163bjrgaqzq.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163cuvnprgu.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163wpocpwyk.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163zpdnnnsg.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163ezfkhicz.html

================================================================================
来源：http://www.aibaodan.cn/163mtksckmw.html

L. 网络请求
来源：http://www.sxryk.cn/163ubntlnnq.html

================================================================================
来源：http://www.sxryk.cn/163itenbuvs.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163qvsjciac.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163fhlullii.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163zutcltel.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163lcefnfpv.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163qnffcsth.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163niddeotq.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163ontafmjj.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163hqnhykjw.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163matcrsdl.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163jjcdkyxq.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163xrwqduki.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163lmviqvhz.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163qkblfeui.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ekvancfr.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163efqkmqhm.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163bfhjzijh.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163cxnvqldk.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163fdbyqpaz.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163rhounent.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163trcktcht.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163cjgtbyyq.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163zymtkpvg.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163pbcwbpam.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163zdpvmtmf.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163qyltspiu.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163tylupark.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163atmaqfby.html

[L04] 设置超时
来源：http://www.xuanzx.com/163lcwzraac.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163drvamebv.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163yqgrjhwg.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163blnleynv.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163baocawfl.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163yqygohwk.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163lfuhtvtj.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163jftqzboy.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163exvjufet.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163zbanqbpf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163kqjccimo.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163tqmixrfj.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163adfxlujq.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163wmkjbkfq.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163cirfrxzy.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163xmpmykbm.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163amcgsaaq.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163kjjfxpgv.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163fwzxvdbl.html

Py:   resp.json()
来源：http://www.sxryk.cn/163dwyevkir.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163tcpqjpoo.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163xuavnute.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163nvvksfcv.html


<!-- 参考信息 -->