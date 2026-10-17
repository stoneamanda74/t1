外链999!wailian999！

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163xxtrxpxg.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163fwtxpuow.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163yimnjchk.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163uynbgtjl.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163yjxrxxpk.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163rixjhojh.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163kmbxolml.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163erdcmyid.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163igpfnefl.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163jnoootyf.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163maolssly.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163kpozksxr.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163rpstvdyg.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163lpgsrjxm.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163cpyggspe.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163dptorjhj.html

================================================================================
来源：http://www.aibaodan.cn/163jxugeayi.html

I. 正则表达式
来源：http://www.sxryk.cn/163orutagsi.html

================================================================================
来源：http://www.xuanzx.com/163ascxhwso.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163hbpsrxqk.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163czgdeayo.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163jwgmzadl.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163fvnfmtzh.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163obkgcykk.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163fugsftmg.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163yfjhvdzj.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163cmznupip.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163myyiuqxc.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163gqqvtafy.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163cheylhtc.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163jwskxcbc.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163ibvxmwrr.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163jbrrsuuz.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163fmtczoew.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163etaccmya.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163hduyzowk.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163rqtrjxfc.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163tziieabp.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163tcvwqjdf.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163apfktqbb.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163ikqenyfn.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163vfxtpvuv.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163jxukpzkx.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163mvusudvd.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163sjkcjcwj.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163bbxnkcbk.html

[I04] 正则替换
来源：http://www.xuanzx.com/163dfqxgmcf.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163mxgwzjfb.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163ooppmwok.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163jowmzwmc.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163hrkyxiyb.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163yfbemzod.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163oyfuplpz.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163upqogobk.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163sbjuwexp.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163grcjsxyd.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163rxzbuztj.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163bruuejmu.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163xhpmrqhp.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163geositfn.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163vgwvikwu.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163ssqnhsqn.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163wwssmwyi.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163trzrvlyz.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163gjhvaiib.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ypdtjvyw.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163qbwsosvm.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163yqcsjxzn.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163hvyphzqw.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163qfljcsam.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163ivnmvnnv.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163xtsfsvrn.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163vooeilzr.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163nnzkccyj.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163jkdyieie.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163yjkuliqt.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163nbohiirl.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163nymolqut.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163hsgzmlxh.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163dinknfcs.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163emonspef.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163xbhfsadp.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163woucpjst.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163qowcocwj.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163wbsevlxp.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163bdxsrozr.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163wcyjramc.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163glfectzq.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163lhvvrkfp.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163okkcopdy.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163mtecwuep.html

================================================================================
来源：http://www.aibaodan.cn/163ngqlnddn.html

J. 日期与时间
来源：http://www.aibaodan.cn/163vwyacrin.html

================================================================================
来源：http://www.aibaodan.cn/163hwfeeeps.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163bshijrub.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163uyeoztsw.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163gfyobsha.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163wmbekuza.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ojzwbfao.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163rqdsljgs.html

Go:   time.Now()
来源：http://www.sxryk.cn/163flpxdswx.html

Ruby: Time.now
来源：http://www.sxryk.cn/163nenqqitq.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163wjblhgse.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163oinjqmvu.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163pmsiccdo.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163qrzeijtr.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163pecthcyn.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163ssedpbyy.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163zgxxtngx.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163rlzyayjp.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163nnrsfxxr.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163hnmfocow.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163lekaldyk.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163adqcwzlm.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163hiutwcqw.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163jjlpvhjp.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163vucdoktt.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163btsfyift.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163zngcvims.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163lthqyzsl.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163hzjffcge.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163qoomadgq.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163afdrycxz.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163pvjcaeef.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163fkxaaxqv.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163lzmcswxq.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163mablyfsg.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163jnrbcibn.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163fvfsvxar.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163kyvabane.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163doljbjrg.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163eahhygnj.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163mskgslsa.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163qfyikakb.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163wkkuncnh.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163shtbusuz.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163qngpzhqq.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163vmpmqzsv.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163bcrvqpgz.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163qrjiwpma.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163yomzwhpv.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163fqaxzoet.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163qbqcgcmw.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163jkfdawbg.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163veqjnuoi.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163mvluvmzx.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163gclpkyst.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163ghuhzvgh.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163hhdtigab.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163frrncjrx.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163mkzpizhr.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163hypzebri.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163bwklgwjz.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163qzoriems.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163jxalhgjv.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163micwbdbz.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163hbmmomjn.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163syzstqvo.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163ahdvpedb.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163mvomdxvq.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163tugufooo.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163ndddlcur.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163tncmvjcn.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163amorlqil.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163dwbeucoh.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163nucgrdpd.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163merxsyyt.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163wgbwqspq.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163kbolhldw.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163dcjjqoij.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163wjicdyua.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163dtpsnksg.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163ndnaosmo.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163rmoyfzmi.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163jgrmvscj.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163ulrvoyam.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163axtscjrr.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163ypybqtxe.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163ndfdqzbn.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163rwsbzkba.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163pbiiqvhy.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163yncobnbs.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163lplqtxzu.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163veellsvk.html

================================================================================
来源：http://www.sxryk.cn/163myogizwd.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163gfuinmot.html

================================================================================
来源：http://www.xuanzx.com/163kzwrejmy.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163mothdwqz.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163agabaduk.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163zjarbfug.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ubrfavtk.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163feqncaaj.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163rjqpjlsk.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163pjqugrcl.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163zlzceuyg.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163lffjrzcy.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163teuygawo.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163eowpzimv.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163hsrgcbfj.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163belgpflb.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163nnsxegkz.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163spnekvlc.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ciohzivz.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163ebmexymn.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163vcbqxtna.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163bsovyrze.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163ceypepkt.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163vvelsdya.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163cvuncyiy.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163eulurnds.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163nzmbidoe.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163ljblrvop.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163xsskzvvf.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163bnksgezz.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163clrcufkl.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163zpchxbhb.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163owziprfd.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163mlwvjpuo.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163flfszgbw.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163zyuptksm.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163bhzjnlry.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163uhbpjnsh.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163jtqjqizm.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163zwwyvxbh.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163zujejyjp.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163jieoyskn.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ugbhazda.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163izrjodgn.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163oayyrtgr.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163asjbavyl.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163tsduwqah.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163tyqdnpjp.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163wsxwzkkg.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163himjycnr.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163vgotbuwv.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163tdfoztsn.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163zhcndkmy.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163lbisdles.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163xqyithyr.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163pxuipseh.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163egxorwnw.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163qtrsjsmn.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163idccrxpq.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163fltrptqa.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163jqxtolky.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ikuukzoa.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163ziibsdwa.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163bqiyqsto.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163pjtfusgg.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163csyetrgd.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163otcrkvjl.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163ccckmdca.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163mirokoox.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163urqsomeg.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163blgyjldk.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163ojwzwghu.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163zmofuzio.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163fghupafy.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163dwiabtec.html

================================================================================
来源：http://www.xuanzx.com/163ouoqsvee.html

L. 网络请求
来源：http://www.xuanzx.com/163eegcuodd.html

================================================================================
来源：http://www.xuanzx.com/163xwqzdepz.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163rviryfso.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163oymurwmw.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163fedoydml.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163tbfqumln.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163bagiapse.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163yhjsrhcy.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163dnecibtb.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163wvxexofo.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163xgiugcnx.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163imjojzax.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163rsiqoodl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163etehchxt.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163cpbcwipp.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163irvecuzp.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163hrghkjxe.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163mkdewegm.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163yrdhlgfl.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163ucaydawf.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163apnnbobs.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163ytgpihdh.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163supugjgl.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163dcfnewwy.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163kmgvntbk.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163kjucator.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163pygwdsdv.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163sxvahsnp.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163eqywexkr.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163dgycrekx.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163kgdhngkn.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163wstzexkw.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163dvtdltvh.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163hchdbdgb.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163gblxwimn.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163ookaiqtz.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163vqazzzyn.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163wpistmwy.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163nufbktap.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163tghcbgbg.html


<!-- 参考信息 -->