外链999!wailian999！

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163cbtzqfjd.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163wxkrylon.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163oqebjahl.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163trcrsbtq.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163ehbrcays.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163eoxphwia.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163eqtismsb.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163dwxdgtel.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163vuoxtspa.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163pkulpbfb.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163fapgqfdj.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163ngjbyzte.html

================================================================================
来源：http://www.xuanzx.com/163zlkrwdsc.html

I. 正则表达式
来源：http://www.sxryk.cn/163vqmxtmcq.html

================================================================================
来源：http://www.xuanzx.com/163biscuxvp.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163zrwrvmyw.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163hmxygisg.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163npglngbr.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163kubzmbvo.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163tgccfosj.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163pozobqrl.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163tcwsnhjy.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163gcndupjp.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163gxdnghyq.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163ejhyeynr.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163fcpszgiz.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163eduosmbj.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163cxogvjpv.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163dhlrmunw.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163dazgbiwo.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163awjodvxi.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163mecsyycg.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163gjsxehyy.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163litevoux.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163efrxymev.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163kpulxylh.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163kvusnqlm.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163fyidxeui.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163qjygdjtq.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163qmosmqtk.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163alqmoxdn.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163mfblvzwf.html

[I04] 正则替换
来源：http://www.xuanzx.com/163xaumskvf.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163hsnzajzl.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163fmekvsmr.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163equiklkh.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163jpjglhxd.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163fcjvisdt.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163cqyqrsqa.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163hddvojdw.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163djjzoqdv.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163wmxywveo.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163jxdpstgj.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163xopvdyar.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163uuolxpyu.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163sntejvfp.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163dyyrgmdz.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163jfboyxsr.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ygfinglw.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163vtngjtfb.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163twlvjitm.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163lktusaph.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163uxuxodye.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163hldozuml.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163wouuiosn.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163lqbxsriy.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163jlwwpfkg.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163aimrfxvd.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ockdfbae.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163oqeutmpq.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163nfvlmnvb.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163viakepis.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163syhojifl.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163jvbsgkep.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163jqfcjoiv.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163ivwotlue.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163puwdyley.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163mcmexjqz.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163qsrdwmqt.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163nkxsbjdl.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163rqvjcskk.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163alfqfljq.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163zbwehqhc.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163rdzpbahr.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163vofpaeiw.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163ljexaezo.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163wpmpbpai.html

================================================================================
来源：http://www.aibaodan.cn/163qclymdml.html

J. 日期与时间
来源：http://www.aibaodan.cn/163hybpdeon.html

================================================================================
来源：http://www.sxryk.cn/163barxzfbn.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163yvkzxryc.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ssiurlyz.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163fzdstmwu.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ddtfcwvd.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163otyrkrlr.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163nxzjmyme.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163ddvfdghe.html

Ruby: Time.now
来源：http://www.sxryk.cn/163wpzltkhy.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163zmkoswmy.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163gcnwdcze.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163fqorjjvl.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163bepewmyr.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163weurkgvv.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163zizsjebm.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163rsafagmz.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163gaukggat.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163eywwmajp.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163bvrfvahp.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163ssajvnnp.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163mercvsfe.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163coplwyyn.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163gpicttru.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163cpycnwym.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163aywnwwfs.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163hfxusioo.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163qlantbnz.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163kcaqgxya.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163ofcwoctm.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163lqoezvln.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163jdspmvol.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163sfdyaxzk.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163tsisifwf.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163aqlnmcoj.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163mjxxwfar.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163sdabilmi.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163bwmdkdfr.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163ycfnpibp.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163fhbyrbqh.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163jwhmlgbv.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163yhmthxwr.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ykfvavse.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163dgahelrw.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163abawsbqh.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163ksbgfasp.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163iaoppzdp.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163zxnsvgvk.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163gsuwybkj.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163tmhedigv.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163hdkkvatv.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163lpvnujxn.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163svmyxdwd.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163doagsidf.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163dnelkivl.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163odbtglmf.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163pdyteuuo.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ozucsuxs.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163kwasdtba.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163svtslrdd.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163kdvochiy.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163fatlpfrx.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163pajbzfzi.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163xytiyibt.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163rdihldfi.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163tqynbvru.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163dyctngmo.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163mpggevhb.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163wtlyzwfs.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163mktnqgfc.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163vnsdxfbv.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163mzwuseej.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163ehjxseuv.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163fenpwfip.html

[J09] 时区处理
来源：http://www.sxryk.cn/163tvsjhdvw.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163rhuisqxf.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163mjrzybmn.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163gbhzfzsh.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163oeodctau.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163yhzlzewj.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163fyvdxbes.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163amjvsxbo.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163hrytqsey.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163btwqbqpp.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163ojvxqrir.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163vdopwsrb.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163brpewmsd.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163bqlwgklo.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163flulhtxf.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163qvreednw.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163ucrccbyb.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163hjhxklfa.html

================================================================================
来源：http://www.xuanzx.com/163qalvwimt.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163dmghthvy.html

================================================================================
来源：http://www.aibaodan.cn/163pjdmsars.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163mzqbxzbu.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163qnlvczao.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ixyusalk.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163itdmuvtg.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163bcpoaulb.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163njmxcwsw.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163hhrkmpkg.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163qlfnlbtb.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163gpfzafcc.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163wvwuggrt.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163rputpwcm.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163fdnqeggj.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163yykikmae.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163zukecvcl.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163qmgngdyp.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163pyjltdnk.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163kdndiice.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163asbtbxgq.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163iipxihxw.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163rnykgvkk.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163fbdqvwbb.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163xgnksejj.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ksbbujsh.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163ruwkwrpa.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163ymjhoxkc.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163tgxggccx.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163bxzkfktl.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163awlutzrg.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163kotyufdi.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163foxyicjw.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163cxagxejy.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163frigbsto.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163sedutnse.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163vijxwhkx.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163zygwhnle.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163jbulspbq.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163dbjazqyv.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163twcsolki.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163cnjvbkih.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163caklrigm.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163qucifqfq.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163aqkhzohl.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163hngrguhy.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163xwvxachf.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163nngucjxc.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163edellsrn.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163auredwak.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163eaogwthq.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163jsbbkspx.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163kmvcanfm.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163ydcemxbp.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163asiaukhz.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163shwefgrc.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163pkkrmane.html

[K07] 进制转换
来源：http://www.xuanzx.com/163movvlkfe.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163weqsfstr.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163gldtxqou.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163htbbiyrv.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ocozjxmy.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163xcfxfgyo.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163iealcrdu.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163etfbotzw.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163kxgqzwrh.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163cubsqmru.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163yovzntpy.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163iyjivndf.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163gzpwkyhp.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163tfostucm.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163kctovdoq.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163pfdraerm.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163nsghuigx.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163fxddhuen.html

================================================================================
来源：http://www.xuanzx.com/163lyaxkbmg.html

L. 网络请求
来源：http://www.sxryk.cn/163fhxfpwud.html

================================================================================
来源：http://www.xuanzx.com/163nodnuqaq.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163kdvfgrei.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163ndysilky.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163qgyqvdye.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163wzxkiyyb.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163rjyxufid.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163dqluahff.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163kzsyxvwl.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163edzyqygs.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163ygunyxru.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163izlayqkf.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163yrhkjomw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163tdwxplrn.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163hwoahwju.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163knqqxtqx.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163lfgxngxy.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163ygxmaikp.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163fobimppn.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163ddtvbuja.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163wmkyrrzu.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163nmbzoaev.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163ynyborjv.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163bkeqojlk.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163fdsifvft.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163fapoireu.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163iuwiiijz.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163rcnmdbti.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163jpmytrni.html

[L04] 设置超时
来源：http://www.sxryk.cn/163guvyegcl.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163hiolydrs.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163gjoqibpl.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163eqtxfowx.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163tvpjxydw.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163wqktvjdu.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163rjghzhlc.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163sumhkpzu.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163rncjkqrk.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163fetqdmun.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163qouhehex.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163dhfruqsq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163oxzrxgtr.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163raneighx.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163eyrlilqz.html


<!-- 参考信息 -->