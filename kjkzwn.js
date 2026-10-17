外链999!wailian999！

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163ikluvhlr.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163eckpxise.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163phakngfm.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163dflzknhk.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163xxzwyixu.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163bywncgdr.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163dhkyvtvi.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163zifzhvbg.html

================================================================================
来源：http://www.xuanzx.com/163qbpkiczy.html

I. 正则表达式
来源：http://www.aibaodan.cn/163rbtvdvaa.html

================================================================================
来源：http://www.sxryk.cn/163ggecjlya.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163exbkwkyr.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163jofsikjm.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163ybhpfpec.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163nqivuuwe.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163jpqptbjj.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163txnagfxt.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163ehkhfyvo.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163xsdcjhea.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163abgmttla.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163vebstkyc.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163xtvpivgm.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163bsxxsipe.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163ikudtghb.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163sejrjxlk.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163owbaynjh.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163kjcaxzrd.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163zkxturra.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163wwxdifok.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163soclynxt.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163zmlroypr.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163glsatgxx.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163mmyzvpme.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163etpbyfqv.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163fsjpfmfe.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163obtttggl.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163rphkjycl.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163mxbsbfrx.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163oikgcbao.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163vumwteat.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163erhjrrjc.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163smabffix.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163pjxdcpdx.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163ymgwvyku.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163kefuqoyh.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163jksfwjvg.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163prjndepi.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163pyzpmkag.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163uvgkvnqv.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163aagesnde.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163nbafkwge.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163hsrxyroa.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163kiqgoilz.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163pedoejnd.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ebdfgjps.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163fmfiuenb.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163mhoesfax.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163vmtyoizn.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163udtyzioa.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163niwpinea.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163xroexdgn.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163zkgljsmr.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163oeapzzjq.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163sbzfiixs.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163depkwotg.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163aflanisj.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163opditkod.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163ncjijall.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163mjsldzvt.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163mutvnaqj.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163becwsmae.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163earmlldl.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163ylralafd.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163ujtpubfs.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163pnswpfov.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163itcxlcey.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163ozkzoqwu.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163wiknxbyy.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163vhevfvpz.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163ctqwxuey.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163wivrgqop.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163jerlvbmg.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163olqmbamh.html

================================================================================
来源：http://www.xuanzx.com/163zsuteqpl.html

J. 日期与时间
来源：http://www.xuanzx.com/163tunpgonl.html

================================================================================
来源：http://www.aibaodan.cn/163osvryhcy.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163pdfsgikj.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163wkuqlawo.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163wfkobckh.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163pgzwqgjx.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163oorkpkkv.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163cghjmyqu.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163xwqbextu.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163rnlxndtk.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163uuijbjtq.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163wtlajbxe.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163uhxilsxq.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163taeadeht.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163ponskyvy.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163lpnazcad.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163alqtovrn.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163bpwloozd.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163sntlupop.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163gclkghtc.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163uziumoaj.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163dvozfpxz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163wgecjuha.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163oufuwicn.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163vmarxtok.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163volsdbno.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163uraxbmxt.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163ozkscsse.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163wwoyodqw.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163vjlxidst.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163xdqebkyb.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163ipcmptuc.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163dclegxmb.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163elptmjun.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163jfmdgbih.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163rlhxwouz.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163anpcgxoi.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163gkfthhtr.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163lkvmqjln.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163suzdsawh.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163rpupendx.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163bpqcryiv.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163amrfkljy.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163rbbaymec.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163rcxamfty.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163ktsbyihe.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163bfwljqcf.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163poohwfxt.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163wzznevqs.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163rinoqfnj.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163qoubswap.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163gzdwgola.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163rurwdizj.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163cogmdaib.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163pudfukvd.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163nbxqqjbe.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163dwsmuxzt.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163iydtmhij.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163ugpujvyc.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163njhtilyr.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163hxmhgrtq.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163evnsqhns.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163lboseiya.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163tfivbdph.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163mpxrwjou.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163rpylwtug.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163uluhzcjq.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163vfbpiuiv.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163nmqwukhn.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163stqfsgcm.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163irrrbdfl.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163mrxfyhmu.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163xswgoysk.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163crpgyufz.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163ajkpsute.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163sviivpsx.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163anfyfwhy.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163nxobqywu.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163kfcgjqmk.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163jtusyqzk.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163gllixaat.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163kwxgprpy.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163nroqjoyw.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163lvotalja.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163rbxtpwan.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163osigbrat.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163bfpbkftn.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163ustpgytc.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163cibvysuq.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163gvffcdwr.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163kbdyqzqk.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163auvukzrt.html

================================================================================
来源：http://www.aibaodan.cn/163fxzqxreg.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163kxrdtsxf.html

================================================================================
来源：http://www.sxryk.cn/163ydzsybll.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163evxfyufn.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163igtzerwu.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163qhxzmhqd.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ythroewi.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163cnwmghbi.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163vuxggbcl.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163vglpiyhn.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163azrlntxo.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163tuzrnyyu.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163soyamfne.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163mgmpblpt.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163rtlfksfl.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163elxlcfcc.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163rsadmsnf.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163kjskjgdy.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163isfjjybg.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163iefpptqm.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163sgnpaflv.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163rbgkqxxs.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163eqyjbabs.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163rucjvxqy.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163lbkoxzfw.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163iaechzec.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163aqlkybtt.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163grdrqqpi.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163gbrurunf.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163ymsbftyt.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163hiorgior.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163aenvpdgk.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163mqijglmj.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ebuqbtxg.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163zbjnykfp.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163dbgodpbt.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163icdujmvg.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163wgixiyyw.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163cocjngxx.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163zvwwmsby.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163buknmjpu.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163bwpuvbdp.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163fynbansf.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163gosavxcm.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163cfjgrymy.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163kmodjnqy.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163gcdfxtkx.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163rokculdu.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163wltpyiuc.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163zlyckeub.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163kldvuuhz.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163cyiqhipe.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163huphvllj.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163jbzilncl.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163gxgrjibx.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163rtqcnetz.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163bjjysvdo.html

[K07] 进制转换
来源：http://www.sxryk.cn/163ecjxmabi.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163gjqogvuf.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163appngfgq.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163xmxfehjy.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163pmickzxu.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163jrbtgzjy.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163bdmkxnot.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163wsovmakk.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163utlhidxd.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163cxkqyder.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163znxqilwm.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163rxvzxyqu.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ntwsisys.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163fnqbigid.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163oijuxjsj.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163qvfavqxb.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163oxcyhusg.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163kfxctqvf.html

================================================================================
来源：http://www.xuanzx.com/163ipvyfhfp.html

L. 网络请求
来源：http://www.aibaodan.cn/163dwrdmfdp.html

================================================================================
来源：http://www.sxryk.cn/163xdutyhzz.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163fwpyhqro.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163lpxvoxle.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163jncpiyyc.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163wlirxvxd.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163edafykvz.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163vuihlqld.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163ndtswwaq.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163eavkvzdx.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163xuyemajp.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163fiphccbm.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163akoakpka.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163ozdjyktf.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163vnvozkub.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163mtywloqr.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163eiqpgscj.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163mbfswivg.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163ssheauii.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163vzbraztm.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163qbxsmfls.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163cnthdgye.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163jgtwpawe.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163qfbiptnd.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163sojrivck.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163xbktgran.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163tgaamyid.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163fsnmkmmi.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163yjqgofwk.html

[L04] 设置超时
来源：http://www.xuanzx.com/163uanxnkpx.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163nzunyysn.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163segzdzjm.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163xqhvoupx.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ivkbclhw.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163wbckuqjz.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163isbjibbt.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163ncrxzutv.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163uyngbuoe.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163pnngyfwi.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163wthjgpks.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163zyznaqhk.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163uizghegm.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163uxpltxnb.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163bgzcezyj.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163yshsglpk.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163aszaeyhk.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163dfvrfpno.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163yrhyhcdl.html


<!-- 参考信息 -->