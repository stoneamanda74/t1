外链999!wailian999！

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163pgczdqho.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163xckodldq.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163eqaqiwem.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ggdmwqqu.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163ughjdejh.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163ityhdvnx.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163nldpykni.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163xconglmp.html

================================================================================
来源：http://www.xuanzx.com/163jsxzretz.html

I. 正则表达式
来源：http://www.aibaodan.cn/163lsutsqrb.html

================================================================================
来源：http://www.xuanzx.com/163opgcwpao.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163ilkszcof.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163elujolyx.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163tyqcqnmk.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163gywycfzb.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163mmsdbgkr.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163pflazfoc.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163nhnmdzml.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163dvjccrfl.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163ywslsrbe.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163btkepaou.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163tlderikk.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163hjzqogrk.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163qkhaewwm.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163dsfwximp.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163tmqnvwlv.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163vuboxuvo.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163ctakblss.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163dbbaftlg.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163dbdaqlkc.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163dfwuebfj.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163somxyrir.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163veydfjwg.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163ctqhwaii.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163hgznkdia.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163ccuzpauu.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163zugdoysq.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163xxbulzmw.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163gxplldgj.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163qauurboj.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163cwmhogvk.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ozrvlxbs.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163kdfgylwv.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163ncnpinyf.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163xdnaseze.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163sfpfbrwr.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163lozbghvo.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163saakrgyk.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163lktuclql.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163nqbmezuc.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163bbmmqfmb.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ignpsldo.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163jtawdyrv.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163zyvjkiah.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163asfyjssi.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163utzmpzwq.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163ccinnpmd.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163oodrhtnh.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163iborckzp.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163cuedergi.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163pyfrkhnw.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163vwlxboyg.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163gmuqeksb.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163dyteplvh.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163edlaktne.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163lsvslnfd.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163lppknkov.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163sgfhxlfl.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163lrrdzksm.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163qrnpxtjh.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163fidjnwxm.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163rrnswyld.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163jbhtxais.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163eoeiokhm.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163rqaltwek.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163dzhajnmo.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163yedntadp.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163guerxgxn.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ocpdkirc.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163fnrmffjq.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163ryfyqnmj.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163pivkywvb.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163vhwuulri.html

================================================================================
来源：http://www.xuanzx.com/163awhfzlao.html

J. 日期与时间
来源：http://www.aibaodan.cn/163zasqzyil.html

================================================================================
来源：http://www.xuanzx.com/163apnrxvoj.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163nvdsuzfp.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163ouzjleqb.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163rkqcxxxa.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163yijilmez.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163zipijanu.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163ensfwqef.html

Go:   time.Now()
来源：http://www.sxryk.cn/163vqwwyagt.html

Ruby: Time.now
来源：http://www.xuanzx.com/163srohqiud.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163klljlxdd.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163rtgnnsfh.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163rawncoja.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163kkzicnux.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163wqjortml.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163rksncvmf.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163tyduqzsf.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163arejdnvy.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163aljjntbl.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163nmsekobi.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163ynmwyggt.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163bwjzrgjv.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163pxhtbota.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163npqdsjmz.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163olzoyhcj.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163mphtmruw.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163mennlzjb.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163polcsldd.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163vwabrxoz.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163rirxcuef.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163gxbgxgrp.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163erripekl.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163lrjlrecm.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163mijcvpdb.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163pnhfgwel.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163averpzwi.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163molsgueg.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163nhdqxbnz.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163xnbnutkx.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163tfwwibur.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163ikndatog.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163hhyzljej.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163vgkawjwd.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163cbofzsuv.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163ysdzjfxk.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163otyoblpi.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163uojasqgv.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163ojqiakrc.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163fjofejst.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163dvqnbeet.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163gdibekwe.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163iglzplkw.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163qxipjrcm.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163cyrtxnjg.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163ddvyxcds.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163aautybzs.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163gyqgtqyh.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163blpxojxs.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163eszphxvn.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163xhyjkrni.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163eeundtaa.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163uhkwpsnf.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163dyrknfwa.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163wevjlnsc.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163sjvhfsve.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163yuxfyogb.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163nxptplat.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163yyyoywcv.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163dxnqjedm.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ftgevinq.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163rvftqypk.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163ketlmxxp.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163wduihrvn.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163jvswnutb.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163ldbghbyj.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163whcdbzgg.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163doztrnwq.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163gnbyylmt.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163gxkohsur.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163qgcnbitv.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163wumbybiw.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163xzcrkhff.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163pgbkixoh.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163nccjovmy.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163fdxwnkse.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163uwszdtup.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163jzernaoh.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163cxeokooz.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163fbcbsyie.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163hlwhjxwz.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163ycbjcamz.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163piqbzquq.html

================================================================================
来源：http://www.aibaodan.cn/163pefrzepn.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163ctawxvjs.html

================================================================================
来源：http://www.sxryk.cn/163sdpwtcmn.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163ewexwsoj.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163ncvgohzg.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163kaglwctk.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ocaekugy.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163bbxtjzop.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163hmxuulih.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163mynfwfxr.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163jlryrgep.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163bexycgkx.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163safgvmai.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163tosckliy.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163iawghxyi.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163kxdggduu.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163lpjrssaq.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163isagredf.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163uodtnixh.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163uwppgcsi.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163zhhtpbta.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163dwiwqaia.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163eiakdagh.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163kbymyghl.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163lhkoddas.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163cknabnyr.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163urpqpxwh.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163cayjlcvy.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163zzkbnfqi.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163yxrmluel.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163flcmvfgl.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163noardjku.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163dhikzvhs.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163bbdimyzz.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163inevrmow.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163tfweyyam.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163bibomqle.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163hkldohhh.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163tfusrsiy.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163lvlupdxw.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163ohmtlgha.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163pffhzfay.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163bruiweto.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163xezkzimd.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163drgjearh.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163pvekglam.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163byhlygki.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163sqiicmhd.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163qsxidnzn.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163awbeecqt.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163xtuymfce.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163hgkoqjmw.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163zlexjtda.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163lykjxfuw.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163yarqonue.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163fdkqzwkk.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163whpxyftc.html

[K07] 进制转换
来源：http://www.sxryk.cn/163jecylngt.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163hphzthes.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163goiigsoi.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163hybwylns.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163vdlzwbrq.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163tqbbthvq.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163vfighdhl.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163llvydgtb.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163ctusxjik.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163hymsvifs.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163tetczdgd.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163mphmflpn.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163odlxmubm.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163omcnbgle.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163hymzoivg.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163mehngyxs.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163kwetsiqh.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163vuilgkoe.html

================================================================================
来源：http://www.xuanzx.com/163qiktsonh.html

L. 网络请求
来源：http://www.xuanzx.com/163qnmqykok.html

================================================================================
来源：http://www.sxryk.cn/163uuhrczpz.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163peuyusha.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163mkbormsk.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163okdqpwpx.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163ithbpysn.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163wzmmrpll.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163lsymxfvx.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163puwbsjvg.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163lsaqtkcp.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163smaucakp.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163aylkyios.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163szyxqzpd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163teldxnji.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163zatkcrpu.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163fqwlrwwm.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163evklafxn.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163bpktidpv.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163xoccommb.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163pthktogw.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163cuosjnrx.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163gnrgguca.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163leopoagx.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163lcyqsozw.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163tijhsudb.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163vewokdql.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163atmeqtaq.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163gdtlkhmp.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163zpmrwvkv.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163nyhxiqae.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163hgfkcmwt.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163zkehcxst.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163khvhfqhn.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ypvbhycf.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163axphybzo.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163kfqhzzjp.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163lmdruwus.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163uxiqlddk.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163rjzuboio.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163xxgwhynk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163kkxvboru.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163mdhfzjfq.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163mqybulqy.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163jdcnhwzk.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163vimghfsl.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163twssorvb.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163gszzygal.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163hvbncyjj.html


<!-- 参考信息 -->