外链999!wailian999！

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163nhyokrnd.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163cmkkkmlw.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163smzuyppc.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163vgnnliip.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163peytnrkr.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163onevrbtl.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163pwbjpwsa.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163kibhfdpo.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163esedtmzi.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163ssttjtom.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163fzvljtoh.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163idyvlfmb.html

================================================================================
来源：http://www.aibaodan.cn/163susxmrgd.html

I. 正则表达式
来源：http://www.xuanzx.com/163trnvmhvf.html

================================================================================
来源：http://www.aibaodan.cn/163xiatousf.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163xdbfsvwv.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163ovkfyogl.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163pvfdfwyj.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163xvrzfxun.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163pilymqon.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163dmnvolkl.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163uukqyezl.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163gnpvaytp.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163fpvrjtte.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163dxjrkodw.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163ntjorzpq.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163mqgjbjpb.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163yluuicge.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163bpqewqbe.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163qlamimoh.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163jeloyhuz.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163sitbkrav.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163nzxofbby.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163sbruuwym.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163xdnlwxdr.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163czrmjqlp.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163pbasyxgc.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163zrbyavua.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163jmjbtuqq.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163adwpbrek.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163mturngek.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163itsnotaq.html

[I04] 正则替换
来源：http://www.xuanzx.com/163unnqaxus.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163broyundv.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163rgrgsdyb.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163brfjstcl.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163tfkkdthp.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163vpjitpgi.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163houojxip.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163yvvnsffx.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163hpcparqo.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163tachyobx.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163zbmszhru.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163hiytlrje.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ktedozpm.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ppuxjyoa.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163gxuohhdk.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163uvudebve.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163jczlypri.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163mvjlmjdu.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163rpdkgysw.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163buarobjd.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163owlhtods.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163divbbyzj.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163vjqsdtjr.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163yjxqdfbi.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163zpbhxlxx.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163uqutjyno.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163jlotzdtw.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163gcsnsqwd.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163snemipnl.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163dnznjuou.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163ctqdgzjd.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163rhxqroxz.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163sztxagvg.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163gjhromky.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163hpvwxrij.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163hmvtfvkx.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163kmmkzthg.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163imqjlilu.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163bufkxvik.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163bevcwjyg.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ffockuzu.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163nzpafcwq.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163fhgeqmst.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163cmezsgdw.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163ymwxtirp.html

================================================================================
来源：http://www.aibaodan.cn/163dhprvkrr.html

J. 日期与时间
来源：http://www.aibaodan.cn/163qhkuixyj.html

================================================================================
来源：http://www.xuanzx.com/163hcfarwis.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163xceoejoo.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163evsvknsf.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163rdbqjyty.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163yoybhigm.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163lmaonxpb.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163lkibspdd.html

Go:   time.Now()
来源：http://www.xuanzx.com/163muffyxdb.html

Ruby: Time.now
来源：http://www.xuanzx.com/163llkoblsm.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163ugncsfkw.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163agrogqst.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163svbcghgv.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163fxzfegpv.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163apbwgzgd.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163ubclcgoa.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163gdpqskyb.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163dzvvcpes.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163jnnvgggg.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163mqggjppp.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163lxpvmaov.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163qkntwqjw.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163onntdbpc.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163hcjxkirr.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163kcdktkcv.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163wihskxmv.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163ooegvrqf.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163zypylftl.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163jrkffkll.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163hjbdaouj.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163clvkjcyp.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163bvtoqnwf.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163blwcynty.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163ibqvygyv.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163qoixywkz.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163nnmokfcj.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163lgkqfxot.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163dyyvtltr.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163ovwlpsdl.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163hgajwoil.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163yjrffnir.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163sbpiplrn.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ohdpeeqb.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163meuqulvf.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163kxrxazdt.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163odavguqb.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163srvamljn.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163ospffcgh.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163zkpnpuhf.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163uszglsvz.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163wjdupoad.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163bvkmjoux.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163eeosqscz.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163ouogojob.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163ysfkhxht.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163owjqabgq.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163nglvsvgb.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163uetjfxlb.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163dkzzqmbo.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163pqjimrja.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163nfauoszd.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163uaogtibr.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163ezqbofll.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163rjndjhnj.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163zbnmmptb.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163utbnxhre.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163ucnlnytf.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163olnbzmyi.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163nfjisogi.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163uqmbgvdn.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163usajfyvt.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163fycfnezu.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163ghdvsfft.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163ozjuktpl.html

[J09] 时区处理
来源：http://www.xuanzx.com/163fiomiiye.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163fezzcwhs.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163aagwgchi.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163zpnjpstf.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163zvrmyenl.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163asutqpvb.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163yxigvmfe.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163ecbvkkrw.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163szvhisoy.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163vtyytzfb.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163uanpvgim.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163tmillhrx.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163nvbqgyps.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163ytkvwbji.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163csrvahrd.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163rgobhegd.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163bbslrxvu.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163hfvlutap.html

================================================================================
来源：http://www.aibaodan.cn/163qojkyeud.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163wcbuwvgh.html

================================================================================
来源：http://www.aibaodan.cn/163uwegxkft.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163uurtstzl.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163klozmish.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163dsuehnvp.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163dozwgtim.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163jqvvrauj.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163mlusxlvy.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163kvmypojy.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163ypvihoqo.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163prtxfemn.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163hnfzwquf.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163bnusvkhf.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163dirxnnfg.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163fhaxtjbo.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163mnxrecxn.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163aujvwbti.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163qomqokjg.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163vctufqzi.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163clyezorb.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163qynyjqss.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163irpzvdeu.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163obmjtkdv.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163bqlihryd.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163obacgwwz.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163cjqgcfcu.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163crtksfdn.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163vuxbovwb.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163czrtqdlm.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163xjdzliow.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163opcxtxrd.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163myeevxle.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163wsboevoc.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163rvbezeym.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163cusqujvt.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163rnuwgeyb.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163ulyprwcx.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163koyewick.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163wgahrcit.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163uxpfrrys.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163tmzfpisd.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163nxytenks.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163qxdcutps.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163ebwxyvti.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163zouzjutj.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163djjkgcdt.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163jfrlxxmc.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163ghvuvcyz.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163qxdggwej.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163fretgflp.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163kwwcitlp.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163gtksubdd.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163kqtfsqhr.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163jvgsuuqz.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163ucsxqyun.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163xhgkaeef.html

[K07] 进制转换
来源：http://www.sxryk.cn/163byxdbpbw.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163jwvbfvsf.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163hyzyeffl.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163dduizjhe.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163qlhegwub.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163tvyjwqnh.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163vfpxknsv.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163euqlhwhm.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163jwpmfpaj.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163mrymlfxs.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163voyuuerv.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163fbkdareb.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163dmccwwzk.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163wxfbzdwo.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163tlbsoles.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163fgvidvac.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163bmbkibwc.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163sytlcapr.html

================================================================================
来源：http://www.sxryk.cn/163qpdviqhr.html

L. 网络请求
来源：http://www.sxryk.cn/163zvelputc.html

================================================================================
来源：http://www.aibaodan.cn/163kjdcjwua.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163maytqfsr.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163taehvmhq.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163msalvinu.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163edhhunbs.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163kvgabvyg.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163vtlhakxj.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163mhkrvrgw.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163klfzbbss.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163ojyyyyey.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163zwlwqucl.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163fakfgjzj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163afotjllj.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163onkgxvyl.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163hqjrlfts.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163oakewatp.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163rikgigsr.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163eoslsndm.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163nngqglob.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163nvoeohob.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163vgbizrqs.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163ngkdryef.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163bzaarpcp.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163weegctes.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163aqelyxrs.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163kncfeqqw.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163cowdkjwe.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163dbkhzcxd.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163qwfdmbqf.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163dqansiyd.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163gvthpyyy.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163xotmcfaa.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163gmbbobgc.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163suzhfcep.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163frwnmkfz.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163fudumcgf.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163cbipmuwk.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163cdgegmmw.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163sddbxjcx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163xfwnmjsi.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163doqkhlum.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163xlrghsch.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163eusnyfxy.html


<!-- 参考信息 -->