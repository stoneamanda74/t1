外链999!wailian999！

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163itmeumtb.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163evqikvxg.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163ivoctgcn.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163omfkmmej.html

================================================================================
来源：http://www.xuanzx.com/163qvekainy.html

I. 正则表达式
来源：http://www.sxryk.cn/163tomqmycd.html

================================================================================
来源：http://www.xuanzx.com/163wpidbnxa.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163ahckyvms.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163umvmcenn.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163kvtxcbjs.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ezllclzk.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163aybgkwem.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163vafjfmgt.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163lsdzbjtp.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163odeebmun.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163spoyvevt.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163gwxjmicj.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163rtctfwto.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163hyipfetv.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163xezrytim.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163mkdbzxjf.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163iqglbcxa.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163tomeqbfz.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163zjiytohp.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163xsdfdgpe.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163ijkjgsot.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163jirevivr.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163fgcawgvr.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163oyfphssr.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163becmsgxu.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163xqglzsvf.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163idfjzubu.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163pmryzeeb.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163lkazyigk.html

[I04] 正则替换
来源：http://www.xuanzx.com/163qlozxlll.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163qfhsocnn.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163igxkbwpo.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163yeaqeiwz.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163eczmhids.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163tizvkvme.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163wzlrtoki.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163orhimxod.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163gimkgzlf.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163cnpgqnsh.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163kzxhqoya.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163nnhjbqen.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ysxugnng.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163icdnxwwt.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163afiwtwzz.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163uqovlyas.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ezelspay.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163jgqzqnnh.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163eobipxrm.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163agkqoqua.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163hkeqalex.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163yjnjzhrp.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163thgmhblc.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163fvxjjtkr.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163sbcxxyzv.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163ltesbyjb.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163tibpzlov.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163dmqhbjkb.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163uvkpgoaa.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163kgmmrpar.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163vahcryxr.html

TS:   /error/gim
来源：http://www.xuanzx.com/163ntprmivx.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163uzdpuugx.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163fqyjnevw.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163rrhdjhgp.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163abljwwns.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163bgjyjlfm.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163mhrqitrr.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163uhffpnoa.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163vuywbxhs.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163tkirteuw.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163qqxmxvda.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163oqeeqmcd.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163azfbksuo.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163qadclzje.html

================================================================================
来源：http://www.sxryk.cn/163skompyag.html

J. 日期与时间
来源：http://www.sxryk.cn/163njstgmzm.html

================================================================================
来源：http://www.sxryk.cn/163vezmcgnw.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163ckwxojyr.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163ogxjkfjk.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163lutwxagf.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163frprnurl.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163rlhecbej.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163okvwnnmy.html

Go:   time.Now()
来源：http://www.xuanzx.com/163wztsymdv.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163igscrmfs.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163raiwuwte.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163kegpdskh.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ruqrwfqk.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ipjpzjpn.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163siyuhvqe.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163pkwttccw.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163jvacjgmd.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163xqvhxfnh.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163drymdifw.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163jddecrlv.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163kkdrgzlk.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163yqjownsa.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163upzcvryt.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163nbrpwubw.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163vyopoust.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163jbblitxt.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163tukhtpna.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163sakdumfs.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163vvlfjfkb.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163cigcgxef.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163rxzpyksy.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163bffjknal.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163ghjlijld.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163mzyyzyvm.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163qcwdvwrb.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163jfzpyazc.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163xsdkcite.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163wwgxhypo.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163ooapoczz.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163xindztyi.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163pbswmfmb.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163njgmpnbe.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163uqovcwvz.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163lgyghgby.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163dkimfxyx.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163kemvkbrf.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163swvaqnhr.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163bjejdenr.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163eujeghcr.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163vtvyheuq.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163taojmdav.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163puxwhgzr.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163huyynbgm.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163isbevydc.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163osucodrr.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163heivujal.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163qmdbnqcs.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163bibqzmad.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163uyltnmwt.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163beofsguz.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ykpedkwr.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163jvvgimvp.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163jubhactr.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163nkihakmy.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163pcsslcau.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163ycudlhdm.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163gkgvlbos.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163evrdwzza.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163vjebpfmt.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163bnkescsj.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163nuavrzzk.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163jvzenxto.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163wvdugoha.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163poqyncik.html

[J09] 时区处理
来源：http://www.xuanzx.com/163przkuzly.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163lqhatyhy.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163mnjfugtb.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163xpxyzrva.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163etfoostx.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163kerrxgec.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163zhmtqjkb.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163nqbxzoph.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163vpjnffgn.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163dtgggzle.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163moymtxuh.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163vqcoebqa.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163uzhxeova.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163klleameb.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163ygywkxes.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163cnrbodbw.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163uumaeanl.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163fskcsolv.html

================================================================================
来源：http://www.sxryk.cn/163cbklwckh.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163hyizwegg.html

================================================================================
来源：http://www.aibaodan.cn/163hqdmynuw.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163finumdzj.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163hwouazxo.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163mwitvqaj.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163adlzpccl.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163wlunuzzb.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163gtaiclsm.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163dshhjhaz.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163wllgirqm.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163pehkxyxt.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163cwxmpheu.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163aouzoivb.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163lumpphnq.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163vvvlzfjm.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163gfpgokdg.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163nomafaec.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163rmrenzsh.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163azzbqrxr.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163lofnfqgt.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163vdijhtys.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163uidiaimx.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163lsxbnfeu.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163sdgnqcua.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163mqczqenw.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163luyszclm.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163zadohxvs.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163uczzzgia.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163hccvfdxl.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163yxejexkw.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163krjjtwoj.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163hfbprtzm.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163zarvwzob.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163nlljaibn.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163hhezoipo.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163nkwuvjnp.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163pjeguaqi.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163egpagwdq.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163olqviqdf.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163qhmhdwxs.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163bxqgixwi.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163kbyfsqji.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163xonuymwb.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163tcpifcmg.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163rreoqkah.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163esevxxdi.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163hqatrsmg.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163mjkeedtv.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163xzsblomr.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163iubnpmba.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163flrnvbkm.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163nrljouci.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163fgbaagjk.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163irbzqhct.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163nijenutv.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163mfyytczq.html

[K07] 进制转换
来源：http://www.xuanzx.com/163wzeoemyv.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163ulhxwxbk.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163gaahigff.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163wwsqvlhj.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163zzvexoxr.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163intoldax.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163otxunomg.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163lcbfmzqe.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163owtzeuzy.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163ikeqkwey.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163uxonxpxy.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163fjfrfhsk.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163ydpozkdi.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163fmzqmldg.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163dqmczfxf.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163chopyzbu.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163adugcdsl.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163ygsvbhpj.html

================================================================================
来源：http://www.sxryk.cn/163mwltteyy.html

L. 网络请求
来源：http://www.xuanzx.com/163jdzzmixz.html

================================================================================
来源：http://www.xuanzx.com/163dapnnhdi.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163vrcrljny.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163hxfkqttv.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163qbgewwoq.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163rolnqsya.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163sxyghwmm.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163dvbtjiuv.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163qvwsqurn.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163woohrhct.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163macmqdie.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163hyxqrbck.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163gufptazr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163zxrsckpi.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163kvhqtwhg.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163abffmtqn.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163cigkybru.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163ppbhrjdx.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163nyugrjyy.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163umskwmei.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163bnrvdwzb.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163ggdmnqeg.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163vzyzdund.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ykkaqlto.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163zfvzmwzw.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163rfziypzj.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163rexwudcb.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163wtjzbduv.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163rjwbnyre.html

[L04] 设置超时
来源：http://www.sxryk.cn/163rzlmbeps.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163xrohkcqk.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163zfaeugjj.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163vsjtmjjj.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163xtcmhvaa.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163hvwqfqdj.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163eksukzwc.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163mqchjvmy.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163ijawawcx.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163gplyivss.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163bcljhsws.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163sbnnlvtd.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163sjsxjbrx.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163sjtpxbat.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163hhywpujv.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163dcowklqp.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163jvxuwoge.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163fvoefubj.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163jtmvwvpc.html

Py:   resp.json()
来源：http://www.sxryk.cn/163dvirttjn.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163drupktqv.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163tpbazwlw.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163artvwrdr.html


<!-- 参考信息 -->