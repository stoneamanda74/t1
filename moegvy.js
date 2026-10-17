外链999!wailian999！

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163godbyriz.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163nbcvjysa.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163jyevzlvd.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163jgfixpkq.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163cqfhisar.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163utvrkjqe.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163uugshhzr.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163kasqomxe.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163fghysrmj.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163ykyllzsk.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163pzvonacy.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163khwnmxwf.html

================================================================================
来源：http://www.xuanzx.com/163wrdsslhi.html

I. 正则表达式
来源：http://www.xuanzx.com/163tlpabgtz.html

================================================================================
来源：http://www.aibaodan.cn/163rypsejjq.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163gucbujgg.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163moeocqey.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163semddudv.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163giwrhofx.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163apnhubfe.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163ouxzwoul.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163ajznifsn.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163bvkvqhvf.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163bicwxoff.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163uibqxhnt.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163gwngjiwl.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163ndmulwds.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163fzgbidtf.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163sfrhzzxf.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163gmpxcjwx.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163viskopyk.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163bzrvcoyc.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163vmyvkknn.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163ffmttqpf.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163ewyzjcqp.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163sfozsgck.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163zftycscm.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163qhgefbrc.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163egjdjmtj.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163edknoujn.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163wjzagrdn.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163udjmvlbi.html

[I04] 正则替换
来源：http://www.sxryk.cn/163rvffdvmv.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163ehmtptoc.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163makmzgjr.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ivfqhfmx.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163ulbemfzx.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163nwomqqtn.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163jombccin.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163jkfjfqnf.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163bnbioujf.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163xamkvajj.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163vmertkhe.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163xduhwymd.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163aeerjmmz.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163cxicprmb.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163njvbdxud.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163hzyvsamr.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163fsaujnjm.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163twoyhpoa.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163utevifju.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163azilxcyc.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163awrdokig.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ywuqnwyn.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163nbjuwfsb.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163eumkqgme.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163lcyljgjb.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163uolqvzvv.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163xxbilujv.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163lbjmuovw.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163hpndligz.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163hqtglntz.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163vzqgchka.html

TS:   /error/gim
来源：http://www.xuanzx.com/163debaogrf.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163ekxegsyo.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163xnepuckx.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163cbkxesrr.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163vcbmwqrh.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163hzdqccrh.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163qzqleqrn.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163chzxllyn.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163zatdrghj.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163fcuxfodx.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163dydfyohe.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163sxvskpdy.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163nqcjwspo.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163tvvbqvon.html

================================================================================
来源：http://www.aibaodan.cn/163jzbwuwjo.html

J. 日期与时间
来源：http://www.aibaodan.cn/163hukbmxrs.html

================================================================================
来源：http://www.xuanzx.com/163cbrpfzir.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163fgeyaslr.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163iyahaekf.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ovohabtq.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163lrapjbti.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163woilgrir.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163nvbqteku.html

Go:   time.Now()
来源：http://www.sxryk.cn/163zsuuceni.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163escjanpn.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163qpmqjmgo.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163msmchszx.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163itasfvnf.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163gvysyptn.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163julfgwfd.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163byutlkja.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163mqvtptpt.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163xhjslthr.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163gbhmzvrn.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163kyrvhsfc.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163ecasdded.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163zecxyofg.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163fczcqtkp.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163hkevrjzd.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163mykcqoaf.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163iputzucq.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163vtjydtkn.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163muoqpsjs.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163wjaouofw.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163zpacgvgd.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163lrutojhk.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163igqaplkz.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163lhzjflhg.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163voufguoz.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163nuvjjnuu.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163vzuvherd.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163izgvrnzn.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163ttkrvuoi.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163fyalmxdk.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163kwsorxkh.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163yargmkxw.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163lgmhcfvf.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163xolremwg.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163ihqykjzs.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163xufliito.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163whrqrjmo.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163brqtmsrj.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163tqyrrszl.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163wcnikyow.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163luuyhlfq.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163nikdmois.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163rrboewss.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163skkzdifh.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163bvrnefdx.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163aumeaire.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163gkqcvdpr.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163xuxppdtp.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163hdsqsocu.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163efdatppr.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163tviesclk.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163fyfupjeh.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163gyxiknig.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163ekseufqg.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163jeipmkhs.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163qhbhcbdp.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163khyzitui.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163rbggfezp.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163ruyxdewa.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163jjukakei.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163onsndfjn.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163sgfkqxkd.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163ufqxncok.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163wiudqerz.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163mppkuyvp.html

[J09] 时区处理
来源：http://www.sxryk.cn/163zallnxnd.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163jhjohqqu.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163fpnogfiu.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163xlvfahau.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163qqepszux.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163mfdguyiv.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163versciyt.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163vdmsleog.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163gjxdbjpc.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163rfxzonvs.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163jstnghaw.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163rlvwelkt.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163uyvwlypg.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163caxfbjfw.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163tvpiezbl.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163mlldklzn.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163srkqqmma.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163swujhuae.html

================================================================================
来源：http://www.sxryk.cn/163aswsgqtd.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163hyukngtf.html

================================================================================
来源：http://www.sxryk.cn/163gytgzalk.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163jyggrvyr.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163lkejlije.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163jkphscfz.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163vaevgxst.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163oygbczbv.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163bzwutygz.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163dydvdezb.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163qfkdccbi.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163ltwkqcve.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163jzcphelb.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163atzzwzdm.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163ooeytdlv.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163xsdyqvic.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163fkepzxmy.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163faxgfwyj.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163rxbraiea.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163oosadqbs.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163zeoyupok.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163lazwgqag.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163afbyadet.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163dppuuvqe.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163yssicnpr.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163jzdcpkap.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163jhrfomru.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163cxozpgzg.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163mtxlyolj.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163vteegpav.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163vwuglpjt.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163xlvxfnou.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163zkyburqz.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163fwrtgklk.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163wdlgynvl.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163osmofgzm.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163dkahouqr.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163demlglfn.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163sikabchz.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163swfmrxcf.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163xidsdnyg.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163jewmvcuk.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163dewidjoe.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163igmgtequ.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163slfplgsr.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163zqduerlr.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163knspypub.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163griqyheh.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163uqdaresr.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163oyodbzet.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163lrvogpig.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163wmmbponm.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163qnyjeqmz.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163jpjkxanp.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163gqgrlnnq.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163tpcnokeu.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163psmlovxv.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163jpssztdd.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163siouxisg.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163rkstewae.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163lqeljwou.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163trbttaam.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163cgdsgbmz.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163qbtzayub.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163feywyvog.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163lsxdghbz.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163qsikaqal.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163kcmurslw.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163lvdwmfgc.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163dgelasgn.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163ujwqwnfh.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163fmhfbeit.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163evhxdkjz.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163bhtosfcb.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163kouwxbnc.html

================================================================================
来源：http://www.aibaodan.cn/163lnfzwkim.html

L. 网络请求
来源：http://www.xuanzx.com/163abqeksnr.html

================================================================================
来源：http://www.sxryk.cn/163nnlvresp.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163ljptgrzt.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163pznfffpv.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163elpzsvnz.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163jirntlpz.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163syhdgtlc.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163ucdhdqgj.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163tzpjorfq.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163pjgzbxds.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163ysihkrtb.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163jrbnguyk.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163znaiueac.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163gdmefyiq.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163jrmnghyk.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163zxcijrfq.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163dojufdbo.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163fsylkagi.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163yzsxmvwf.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163lhmzelcb.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163qghsvcrf.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163jgjlfenj.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163jlojyzag.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163zcqsdvxn.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ivuxorgr.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163qhzjhegz.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163nhbgcern.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163poshymai.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163nthlikbq.html

[L04] 设置超时
来源：http://www.xuanzx.com/163fnefprrk.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163urgdanbg.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163hxvwdzce.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163hzpfzkso.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ecufckif.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163egvftxwc.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163hlawxuyv.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163cgplbkta.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163mseuzhve.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163vessaioa.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163wrybywlk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163lwuxdxgr.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163etqomxqc.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163kxwuijqo.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163oizbhaoo.html


<!-- 参考信息 -->