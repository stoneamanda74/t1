外链999!wailian999！

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163batgzplm.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163jzkcyfxr.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163fqkumssp.html

Go:   err.Error()
来源：http://www.sxryk.cn/163vdcxsmzf.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163fueqnnrx.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163noxdatmw.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163myrrlrjj.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163teqwkfje.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163sbxczkvl.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163qcepoavm.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163abqlorbc.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163pcxdovqo.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163tbnxbpjn.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163cdhplqzn.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163mlldadkm.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163qvjhwyws.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163aljvbcde.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163ldnmiqyh.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163pqkcjakz.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163uurglzko.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163lhesszkf.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163opxffbiv.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163xtzplavd.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163dertqyuy.html

================================================================================
来源：http://www.xuanzx.com/163rykfcnbd.html

I. 正则表达式
来源：http://www.sxryk.cn/163fypgjpmg.html

================================================================================
来源：http://www.sxryk.cn/163prbpfqgt.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163jpqkqcxp.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163cxnsekyy.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163tphnoxla.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163vozogmkp.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163jpmxawmf.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163hvgdejer.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163dbujxbul.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163nrypdzsp.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163hezxftvb.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163zobiausr.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163mjssbiwt.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163schvkmce.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163txxmefbc.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163outujzed.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163jrlnnscs.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163rzyezkdm.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163qbzpeqbt.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163yavubfba.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163svouasxp.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163hmqeovmp.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163hfsmetqn.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163kjfvuhro.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163tvdgdvxa.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163bvpgdqtr.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163muhjfzok.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163acjqvozz.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163rabxvpgf.html

[I04] 正则替换
来源：http://www.sxryk.cn/163nlxxdsbd.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163brearsfb.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163yxianppb.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163phpmwboa.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163lfdpdfbb.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163jaximecr.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163onqqzwho.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163jtmumhrd.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163ewsslmdg.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163ltuwiift.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163cahfbdrb.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163hrsfomwt.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163uyatqszs.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163mhxkipdl.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163utdfibzm.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163zzxoduxh.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163yrmspups.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163ftshbcws.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163sicvrmdz.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163xfntbldy.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163ojdcpdnt.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163fombelyo.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163jybkiosx.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163lnddklsi.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163xfnuziro.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163wngmzwaz.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163alslnrmh.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163hpayqtaa.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163tcfqekwa.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163dwukhjbk.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163idgslvvu.html

TS:   /error/gim
来源：http://www.xuanzx.com/163kwcwknpp.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163cofpfhpg.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163novpdcgk.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163ydgizohp.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163sepqanzg.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163pmaphnas.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163pxfebbfg.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163dusztlnx.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163olrymrox.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163sdrvnfao.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163vwlkmgij.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163ztycvord.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163pfrpkdaz.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163ojydcrlf.html

================================================================================
来源：http://www.sxryk.cn/163ezffobhz.html

J. 日期与时间
来源：http://www.xuanzx.com/163ibpnkmaz.html

================================================================================
来源：http://www.aibaodan.cn/163ftsoxidl.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163gsbzooui.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163tlhjeyfq.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163tkqxgeue.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163rdfhmvcs.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163zfczdyus.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163tqoougga.html

Go:   time.Now()
来源：http://www.xuanzx.com/163ukyecfwn.html

Ruby: Time.now
来源：http://www.xuanzx.com/163qlfqlhnh.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163pyvtazhq.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163vmuyaxyf.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163mddbzajd.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163cfluisfm.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163ihqeeotb.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163ysdfoduq.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163yetdzmty.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163iudhtcgw.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163niouerdb.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163kzyzkluz.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163psvaahpi.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163jjselavp.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163xirmrevc.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ppwlycgc.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163lwhxilcj.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163kaezkrxq.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163aonixwsb.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163ggifqess.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163uomowmeh.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163nbowhqgq.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163rjxgnjql.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163exqgzzcf.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163xiqqrpsh.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163ylmqrdwn.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163vkfswewx.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163abzhzofz.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163abwbwbky.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163jvbhxyqu.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163banhhpol.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163yklldkjo.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163dvriqbtw.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163cvgtozmw.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163qsvxkwvj.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163benzlllv.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163cyjoffyh.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163oohrshls.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163quvmeepu.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163hifchcan.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163mscthdsq.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163kuvlxmlb.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163nehnqzxo.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163gsqlllnf.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163cmcycifo.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163kkienqlb.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163tmpcwcam.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163dcfkqqvs.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163lruhebom.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163wgaigeaa.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163cmxrpnwk.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163hsigxcua.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163zyhlfroo.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163tdwusjmj.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163fhstfpls.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ohfstrko.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163cugpfjxa.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163phafqqda.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163debclugs.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163vjimidfj.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163emhthlch.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163jghvevxz.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163hbighmrh.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163tcymalxs.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163yrwxfhje.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163qpjkqrta.html

[J09] 时区处理
来源：http://www.xuanzx.com/163lktafdto.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163tozqforb.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163kxrmmzle.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163vnaqcxxq.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163qahhtoya.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163mmuoacgk.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163koxtgvfb.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163ejymanlg.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163nnmybwlq.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163lcqqppdb.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163lozlocxh.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163oeoosrmm.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163qyqfofzx.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163zchoulqm.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163nnayerih.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163iagcmqzd.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163ccunswwe.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163yzkcjxdu.html

================================================================================
来源：http://www.aibaodan.cn/163tvsbkyyg.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163ujavtwae.html

================================================================================
来源：http://www.xuanzx.com/163snvuhvzs.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163xdcrsnkf.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163dknwrwbn.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163fqqdwpai.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163bnddzkxc.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163cplquhnd.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163otctntkx.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163ytplvoax.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163mzbphtwm.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163jrvtpdll.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163auzimjfl.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163hxzisqvp.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163qmyndshu.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163qihytxah.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163sfeakeut.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163febnraui.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163lytchfkz.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163nsedwszb.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163uwizylgb.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163hvuvrlhe.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163uwnwlzdy.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163kclbkmwy.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163sbzkczrs.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163thawzjuu.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163gzljtkhm.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163jsnfyrsu.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163ynjvneqj.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163telgjfgc.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163ogksqlhv.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163arhuntpa.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163eqxfexrd.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163latxbdum.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163itjpcjqk.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163oaxcclpg.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163qluwqusd.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163gvtdxobt.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163nrzsehhh.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163gscckdpm.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163nsjoyhdr.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163evjastuq.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163hwmsvzhw.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ecauvffx.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163jtxsdsct.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163rfwrtyat.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163stktsmkp.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163cmwmzoze.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163mgsmmrko.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163ykkgfvgk.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163acccytyk.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163fxywsyut.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163puclhjzc.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163irlssmbi.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163cnwcycda.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163rkwgjsrs.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163balebiby.html

[K07] 进制转换
来源：http://www.sxryk.cn/163mqfilxws.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163nozijgmx.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163yltmbbbf.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163zhoougur.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163zgpjqrkz.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163hreednkm.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163fqrmxbew.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163cwyzxnbd.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163efenfwrc.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163cyeebjgb.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163ahdsmrlx.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163chltwttn.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163odrnsypp.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163kedydrgr.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163jzdlrttp.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163myfqjiii.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163qbbbplyc.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163pxcdigls.html

================================================================================
来源：http://www.sxryk.cn/163nisxbace.html

L. 网络请求
来源：http://www.aibaodan.cn/163vzvyvwee.html

================================================================================
来源：http://www.xuanzx.com/163fvlbzbnh.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163oxdhjnod.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163yqguppqp.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163cgqvnftv.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163kdkckefk.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163eaubiimf.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163rzhmotvn.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163qgvldujr.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163cziylqgo.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163snjsuoyu.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163zmvvzwov.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163uhhxrtfm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163rbwgeqqq.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ysnuhmiu.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163wwqhpfaz.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163cskabxyi.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163npowupqe.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163hbtcbhsf.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163foxtzbis.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163vobqgzig.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163mwwnyaep.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163bmupsbhf.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ftghfpnv.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163qybmcszh.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163kkogaozj.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163gcovztpq.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163sqtnwbcw.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163fnakeasc.html

[L04] 设置超时
来源：http://www.sxryk.cn/163pljhdzfn.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163edmrptwf.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163vwskcrcx.html


<!-- 参考信息 -->