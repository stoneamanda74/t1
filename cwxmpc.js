外链999!wailian999！

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163yaapnajv.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163sqkuvopt.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163pbxrqiqn.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163gjffcear.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163twtuhtwu.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163grjteety.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163mvphypfl.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163xsrfrnil.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163esbmpjnn.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163uengmjdt.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163xftsslxm.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163hukpsjnc.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163sszmiacn.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163pyylydfi.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163sldzfazy.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163vohnufjx.html

================================================================================
来源：http://www.aibaodan.cn/163pnxdpenl.html

I. 正则表达式
来源：http://www.sxryk.cn/163spbbbcla.html

================================================================================
来源：http://www.xuanzx.com/163wpafdhpp.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163uwxpqctz.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163eeyeoijh.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163anrjgjqk.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ceszjslt.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163xkpfgojg.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163xbaqclij.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163aaivfmde.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163yniotowz.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163mdnhhmip.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163lplyvokc.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163prntpnoe.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163gqwkakzj.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163dujjokiz.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163zbtdurib.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163zzzneezy.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163lhniqbxb.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163cxxhhtmn.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163kmyskrfx.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163brfzxryn.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163jansmzxp.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163gryaegnl.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163wfrvihio.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163vpegoevb.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163mtslefri.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163oqhxzbvs.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163rncgmxqp.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163wsmatvbt.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163wcxncbqk.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163qahogaat.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163drtdgpiq.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163htulumpg.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163dknfyexr.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163szngsknc.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163sgvjjzfs.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163ajgqtqji.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163djvjfhyl.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163yuevanfo.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163ufwhazbc.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163busdduzt.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163kgpoiklr.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163nmbafjpx.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163rvwafoxc.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163mecpuqun.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163gjwldvks.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163pbgelllu.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163kqnantxq.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163slmhlzep.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163ngzyfihn.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163pawhmnsb.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163kcfigefd.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163ycstlver.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163scnuqten.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163upbumqvu.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163bftwrpui.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163ikypchkj.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163gqzxuohc.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163ubtxisxc.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163ozbltqpn.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163vskrhhen.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163qtkhwmzm.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163lzesngih.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163vylkifsd.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163mtljbagm.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163swtvxwla.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163wjwyztvn.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163tibnvdlv.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163fmxkdtsh.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163rsanlhbl.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163znvqxafu.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163bdalhxox.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163mmbwfiyb.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163kzglajlv.html

================================================================================
来源：http://www.sxryk.cn/163qsenituc.html

J. 日期与时间
来源：http://www.aibaodan.cn/163gjmlrlrj.html

================================================================================
来源：http://www.xuanzx.com/163cpsmqkpt.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163kdotedsx.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163akzhzqtc.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163anapoztl.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163rjvrvzft.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163dxxqiyib.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163moutuvow.html

Go:   time.Now()
来源：http://www.sxryk.cn/163rxzexbxv.html

Ruby: Time.now
来源：http://www.xuanzx.com/163zdkhlkdj.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163ukubwkfz.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163ivuybnds.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ibbzymsv.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163qvpxtfah.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163ispqyfgu.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163bapinesh.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163ujkculcs.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163zsczswpm.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163njhbbgrb.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163nlylofvy.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163fgkcqiyu.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163tqpyrvrs.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163ayaveksg.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163apgxbmij.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163qkykusoy.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163varnzznp.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163krfyiocg.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163vftdxlzh.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163steegzbw.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163aeyoxels.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163pcltcbdj.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163rxgoeuba.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163pqatfqgd.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163zjmkhhvb.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163nlnsssso.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163nyhkytgv.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163mpyhbamc.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163tyqkwsex.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163xlotzfti.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163njzoifnd.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163wqsfafta.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163jehivypu.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163reiorviq.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163rcgkypyz.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163ixoslrsu.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163djrfmtkx.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163rwybwdjr.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163ytmpgihb.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163hgfdjzay.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163tftgvmdl.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163jfrasckq.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163akxhirnv.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163jpmwwyxh.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163daunollr.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163emaxxgon.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163bztslend.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163csmyfsfm.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163qvdkuffe.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163wioeopcn.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163tyhqwzqt.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163jkfhbrmk.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163upviwwal.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163wialqlqu.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163osarmqca.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163mddokdmp.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163bconndsb.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163mcsegmby.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163teoshhjj.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163xmplyfod.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163lnqfedvx.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163wwiyslvf.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163mebwenmr.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163fciqjulu.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163cdzyvayz.html

[J09] 时区处理
来源：http://www.xuanzx.com/163gqnwdhpi.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163buovjpfo.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163lfnnlfyv.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163tqnnxrwe.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163aurzietn.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163dclwzgzi.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163ddsiylwz.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163lxmnlljx.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163qybvctmn.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163oytivrrp.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163ajpgzfry.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163geuihlmc.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163goxsleic.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163emrsoeny.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163mqgmdgfn.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163fsveomun.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163ycrpjuxk.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163bnpnarle.html

================================================================================
来源：http://www.aibaodan.cn/163ooqvltuh.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163sblufhei.html

================================================================================
来源：http://www.xuanzx.com/163tuvofzlg.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163offbhdlq.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ysnmlpkh.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163vunuddwk.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ksmzcqor.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163nwwmtrqp.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163mpbospkl.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163zgdrlnnd.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163erauhnbx.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163mhvdgrep.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163mlmwnuxk.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163wrktvdkd.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163qvdcszdw.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163lhkqmcme.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163llpbpiqs.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163bimypwbt.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ysjfpdqw.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163wqnokess.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163trxphcrf.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163rxwrtyhc.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163cbwmqvro.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163jrszryhz.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163odapnqjx.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163wbrtfetn.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163qzlmehip.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163fjznjljw.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163rgszelvu.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163hgycbwun.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163hqpkdbzc.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163kpwmcjku.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163wqxfcynp.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163zuhocdtl.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163cqnffucd.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163utspokkl.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163yocqduxu.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163nnxctctp.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163iqgcxcjp.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163sscxzjzi.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163njdjqokj.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163eztcywwe.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163jregqrfi.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163kppqpuvc.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163pgqlwybf.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163hmieitsd.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163pujfocve.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163fhgkoisa.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163adloetue.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163tgaqjzkq.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163nuoyduac.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163xoodlviw.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163crnfsigm.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163hwsivihj.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163ohtvmwfe.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163rmfuysor.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163cfiwguht.html

[K07] 进制转换
来源：http://www.sxryk.cn/163ytyllsnj.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163cgqafyus.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163ztretaau.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163bwcmvwvl.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163jebdlnex.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163tgukjqmn.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163vbmbmemp.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163suwkemyd.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163kfhglepz.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163tjfanowt.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163erphxwel.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163anglvlzp.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ooipufsb.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163bwmqjlod.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163ghmxwzjn.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163yvypxqrx.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163asbpepsb.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163wwrpfvis.html

================================================================================
来源：http://www.xuanzx.com/163aapismzf.html

L. 网络请求
来源：http://www.xuanzx.com/163rcgmloio.html

================================================================================
来源：http://www.sxryk.cn/163iautxfhw.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163idposqog.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163zpwxfnat.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163zsmqkvsn.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163keygwlxv.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163xlrqgcdv.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163mljwiemo.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163qsobddws.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163cjsmyueo.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163rdxamxha.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163lckqoxfj.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163wkycqezk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163wzwyvpho.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163brjntzlo.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163raypbzzj.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163htbeifav.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163vrvpdfjx.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163jyaybize.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163tuthflrc.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163oeftzwjr.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163hxayhaoh.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163psvsinrj.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163yyelsell.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163hadlxsse.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163clfdaiuu.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163dlvuhvfc.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163livmwxpz.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163scorsyxb.html

[L04] 设置超时
来源：http://www.xuanzx.com/163vueiymdv.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163pqfuldim.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163ubumwokh.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163yzxucwaw.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163musvjpga.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163bzkohvgr.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163zwwijzsm.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163zjnnwwmp.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163qiggruvw.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163eskgkvsq.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163svgozqkg.html


<!-- 参考信息 -->