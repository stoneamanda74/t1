外链999!wailian999！

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163wojdyshz.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163iyzhmrke.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163mmpggdcv.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163kizbaddc.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163vhuzsacv.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163ucmadttk.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163ljzaztkj.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163mafmarmf.html

================================================================================
来源：http://www.aibaodan.cn/163rseyulzo.html

I. 正则表达式
来源：http://www.aibaodan.cn/163waxpuqfw.html

================================================================================
来源：http://www.aibaodan.cn/163hyjkwink.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163obcxvgqf.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163ivifhgyj.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163abftxybv.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163tlemefdp.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163plyovhef.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163zyyhjcki.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163lzhrxdqn.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163zhsnhpnu.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163iluyxrtn.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163mquujoyc.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163swztckxd.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163xthxnoby.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163qfcwpgwq.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163wnzcrveo.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163sanpygmv.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163qkivdpxt.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163soosutwu.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163xnvwpaid.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163luwijsxg.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163euinqudx.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163gacicneo.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163cmfvdqql.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163bratldsb.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163wtlsbjhw.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163hrzjjtnp.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163diyhlbhy.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163zfasjfql.html

[I04] 正则替换
来源：http://www.sxryk.cn/163oxdankab.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163bhzvloqp.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163amfqgozf.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163eoycllzt.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163cwvaafkr.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163kmkhjfwx.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163jpkumhun.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163eikxjnnw.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163mzduetgs.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163qzidqbef.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163avioqzrt.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163fglhetia.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163isenfasv.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163nnqgbvzc.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163qpkgfisk.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163pqjwmuna.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163qcdzsayr.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163aumzrhby.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163oswxqdsr.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163sdwnzvje.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163tptvkimo.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ujpkssgo.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163lfxksgtw.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163qlslmoij.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163cmzsxlfs.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163pdudozrl.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163dqzgtwyf.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163ilwbwxaq.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163jmbsrbde.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163pqkrrewq.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163cfyzzlgl.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163dnqjaqhf.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163ljlcjpxq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163nrjfyiht.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163nqmugfax.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163lkvkktcq.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163bsunxpig.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163tynxphlr.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163dzrrehmt.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163pjsagpvm.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163esfswbat.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163xauzjkcg.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163gzrvejrm.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163eupptcil.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163soawzquz.html

================================================================================
来源：http://www.aibaodan.cn/163kqmdqkzr.html

J. 日期与时间
来源：http://www.aibaodan.cn/163cyywkvks.html

================================================================================
来源：http://www.sxryk.cn/163fnldwczx.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163uicjdymc.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163lxxpiwjx.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163cbjlygpl.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163neaecbpi.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ccuccado.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163fzdxmfww.html

Go:   time.Now()
来源：http://www.xuanzx.com/163ohjmkuqd.html

Ruby: Time.now
来源：http://www.xuanzx.com/163wqqrwloo.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163owfbqwax.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163xysptjyv.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163klmcnotk.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163btxqtlrz.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163oljrwuvj.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163ukoztper.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163mcptdshf.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163ouorglzg.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163iqnspfan.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163bcamchma.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163xqfnwaqq.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163nojtefjz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163aenigjmm.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163nlwgrkha.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163fwwdeoic.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163uufgwviu.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163gmgmentr.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163qovgegnf.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163zaavoyoe.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163jzqufrsg.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163hqpnrarm.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163kjqokobg.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163flsdpfxf.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163bcqczpax.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163cnbzwzcj.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163hnfogzst.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163atzgmuqa.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163njuuykrg.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163nqzacbhp.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163sfchdpav.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163emlqygam.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163aqoalzlz.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163pvsntquo.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163ythdcuin.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163vgsewnoc.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163euiqgxcb.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163utxvmily.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163uyfljxlv.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163yosqoxzv.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163kxcscqzj.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163umygwmiw.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163aximtjlh.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163unuibqfv.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163nffannyo.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163guekurle.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163tusuffjo.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163guoyoplm.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163fhhmficf.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163rmqowjyp.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ronvkjtc.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163qajnnofu.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163wmawiouk.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163jprfibyl.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ssflysgv.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163phnqtnix.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163cjvoaitp.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163ztmxskxa.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163veqezene.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163bswazxyn.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ygyqttcr.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163hpsjpccp.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163hczesxkx.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163msqeavzq.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163hbvjockl.html

[J09] 时区处理
来源：http://www.xuanzx.com/163asachvas.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163ranrcudf.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163mzmbfvvp.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ffktwpmh.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163yxssajig.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163pjdvsbsf.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163lxqcsnmz.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163qroooomh.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163volualjh.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163uvmqbhes.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163yxcipivq.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163yratxdan.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163uigfbajw.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163qqbrtocf.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163kmshtiow.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163tutbbklj.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163zlglxlpo.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163qnlikjfz.html

================================================================================
来源：http://www.sxryk.cn/163slrjluxr.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163adsdoksc.html

================================================================================
来源：http://www.sxryk.cn/163pxlbeqzr.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163lkkcapmf.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163esrvxzje.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163dcneekug.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163hjuwfott.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163kydtikao.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163tswcnhde.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163bsvpntjd.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163dllssgyf.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163zjdujaug.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163nnjodfdm.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163ncmlwxxo.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163ugavfhjk.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ckruwwsg.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163mpgvmpxt.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163kohhgkit.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ncpvgvry.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163zerruowl.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163iavbbbxb.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163fxawxxky.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163oualyfls.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163kysplwdr.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163umjytvwl.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163qikcrzlg.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163eflkmnem.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163oferdgug.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163ycwbbrci.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163olpgnpro.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163sapzlotb.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163tsofiotz.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163cqvqalpo.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163echywtaj.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163mydmrssx.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163zuvkpkbu.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163qpqrcjos.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163xxgdtuis.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163ywadhzsk.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163mrhqcvia.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163kiseqqen.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163txbnlmid.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163szdklnbx.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163fybgluga.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163yxnkhtxi.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163jptzdwmz.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163plztrhdv.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163qdmtmuza.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163tdvyhdce.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163jhsrxpjq.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163snraqwwx.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ssypmwfu.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163vctebzlx.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163dnlqrfko.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163nhwofxzx.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163tiodvknm.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163knkfnzun.html

[K07] 进制转换
来源：http://www.xuanzx.com/163tjxbhpmv.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163jfbcbbqn.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163tczrhvcn.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163bxbbuzhf.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163uniphljy.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163kewrgdyr.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163dtelqbxf.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163gdeemlql.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163nknaetah.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163hhpxmzsg.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163agdhqagi.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163gypbrokc.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ddblucxy.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163sjasrpok.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163jymcutig.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163gistpytt.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163zfdqfxvz.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163darkwhjw.html

================================================================================
来源：http://www.aibaodan.cn/163luelkmql.html

L. 网络请求
来源：http://www.xuanzx.com/163zdswoezz.html

================================================================================
来源：http://www.xuanzx.com/163tsdlevei.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163qsnaugdz.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163bqbkahxu.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163vuamcbcp.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163bqhiggzi.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163oniqfbsd.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163xzqrmfzk.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163sjbwbtmd.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163ftkvserb.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163ykhimrws.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163evgndhtz.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163molynaob.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163kngnxfnx.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163pnuovdlq.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163izpvwvbg.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163bpeolfii.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163abinafzx.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163lncfjdzz.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163ucgkadxb.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163yqezagga.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163xbewlynv.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163dlmscvnq.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163fmhbcqwd.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163pygifrsh.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163njikreup.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163przgmiab.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163kcdpieda.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163igeqtqyu.html

[L04] 设置超时
来源：http://www.xuanzx.com/163oyohghfr.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163rifvyhba.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163mhnytfug.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163bonvijjj.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163zifemcjd.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163rprecepp.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163ncwshjps.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163omrixaap.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163btcovrce.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163hxmtxgru.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163bbnamiua.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163rijtnoov.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163uzyudfjs.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163hbksssej.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163lcjkdqrb.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163nmnpmlve.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163abpvoswl.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163kmaqdnvj.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163umuhmome.html


<!-- 参考信息 -->