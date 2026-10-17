外链999!wailian999！

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163qnjjnkfp.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163lfdnaheg.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163csvhlzvh.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163psfnphhr.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163raitecps.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163klxcxkct.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163xdykquco.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163yrlhnuxl.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163yefipmuo.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163qbstxvok.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163htotvfue.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163dosdbikc.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163ptaeqkpj.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163mmnzowao.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163eqwjvxrq.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163qahzmatf.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163jwmvsxzi.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163phchcfnb.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163cjzdfydj.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163eduhrjkr.html

================================================================================
来源：http://www.sxryk.cn/163xkainnqa.html

I. 正则表达式
来源：http://www.aibaodan.cn/163rwnuamhv.html

================================================================================
来源：http://www.sxryk.cn/163lnclhrrm.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163bvupjhxy.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163mpddsqxf.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163vqknnsbe.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163caovediu.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163bvdpdrru.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163mrektvvk.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163jaakoycj.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163bgthzdum.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163eyhdccsa.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163wucwjpld.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163rdlknmry.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163iwusydtf.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163afawcfoj.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163lytjugtl.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163ctpzxrbp.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163qzfmbmyl.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163oksqlleo.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163caugkrjb.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163jlstrajd.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163uvehlwcw.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163ygiqpmij.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163xvmkaxji.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163xpdafjyw.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163rwrjmclo.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163wxanyzrb.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163pamlfgdg.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163yzphqvey.html

[I04] 正则替换
来源：http://www.xuanzx.com/163aehfwbpn.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163vqebcodf.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163unbfukzr.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163tjxtpyfg.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163bmqlvsft.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163jwnjdjmp.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163bktrlzlx.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163vypsyhlh.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163hsziyrxb.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163ofbyxmfd.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163mcmmybus.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163nvftfrcp.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163xhpuapux.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163gxhurbag.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163gjalarwx.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163cxjwjpsw.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163gzjaybcq.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163ymnxekqn.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163yzvholpd.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163dizanpky.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163jodgoebd.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163nuxerffb.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163qwucugwg.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163elmwfqer.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163yyxfbqqb.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163afqncejt.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163nfewyion.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163ukgoubdh.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163vpraauel.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163gqechfvv.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163glttohub.html

TS:   /error/gim
来源：http://www.sxryk.cn/163wwuwrpub.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163slghwedi.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163fbmdorrk.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163iwhtgtkl.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163jwkeammq.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163ndcvckwh.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163xdipnyle.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163onhxbcbq.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163bmsieymu.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163nwgcrtbi.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163dhvaykwz.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163bqimoizl.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163wjobzjou.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163nhexnkxn.html

================================================================================
来源：http://www.sxryk.cn/163ylnzmfaz.html

J. 日期与时间
来源：http://www.xuanzx.com/163suulgrcg.html

================================================================================
来源：http://www.aibaodan.cn/163akdfeikw.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163qrfwtzkd.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163uozpytvr.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163cqjlqhet.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163qukymfjy.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163tethtzbp.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163dtrwcnqi.html

Go:   time.Now()
来源：http://www.xuanzx.com/163rkjorcrt.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163cruvkqzl.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163fzjaqjqk.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163oumuggcu.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163hdcfleof.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163rkmzrwwn.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163rvcqrfbp.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163wagqxlcr.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163dkjkxijx.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163akrernni.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163dycoyhvb.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163fobdjmtd.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163chrkotxe.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163fbabxjwq.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163czwsyllu.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163pojdqdhk.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ljsostdv.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163nmjmpfob.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163mridoxgt.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163hufvxaow.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163mwobjpko.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163jmstojzt.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163jkqbgxlp.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163kypmupsy.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163xshybsdj.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163qsxgjvua.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163lcfokflc.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163nxjlxdhu.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163hleblhbr.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163hgjihyut.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163vfrxyolz.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163figucwnn.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163eeonahwd.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163whromiui.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163sxywqzkk.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163juzfypzs.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163yawaqhem.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163monwglre.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163ugsudntu.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163cgpwxxuv.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163dozlftun.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163vxmpcydi.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163yjajufhs.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163ywbjrxlw.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163gxskuydn.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163kmjntado.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163lxuzjojt.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163tmosrzcx.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163uurlueos.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163vkrgdwhq.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163tbftvkzp.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163vdsjnbxn.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163fijcwzrw.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163lwfveduj.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163avlmfxqh.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163mvldzhua.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163oolqauhd.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163bjuihtwy.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163epxkgjel.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163cszwzrqc.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163rdibusit.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163sbpauluh.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163bydtprhl.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163xmfoijbk.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163iwjgwfys.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163hcymmfch.html

[J09] 时区处理
来源：http://www.sxryk.cn/163gzsoglkg.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163qmsfvvtt.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163hcscposg.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163fienkpso.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163svaelfkg.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163nqelwvzu.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163pczpvujh.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163cjfsuqhy.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163sowhsntu.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163myrkfmdz.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163rugvjuzd.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163irlkutpf.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163poewhhxk.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163ltdmomrs.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163bbzqhdvs.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163tyjkbstr.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163qxaoujih.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163letnqagx.html

================================================================================
来源：http://www.aibaodan.cn/163hzvmkvlc.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163wwffxdfx.html

================================================================================
来源：http://www.xuanzx.com/163gaawbidx.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163ebnwlamo.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163jkdiyztw.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163zscnoggy.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ugwpeaqx.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163zdaaebfn.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163dtkxsyzy.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163wvngbhaf.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163qscjfwih.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163nfxayzfn.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163pdnotjfx.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163kiuexhsl.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163bhxylfnt.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163mblhbnhp.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163jowmvvgi.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163mflhvnzh.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163bmepyufe.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163ujydeuoy.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163hpopwcqd.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163njxneext.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163tssibond.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163yfeavafp.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163wjkhfjgu.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163rjevdkux.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163ebwjnyxt.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163bktlgzel.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163xqiaiuhc.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163mfkqbjuq.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163oibwyolv.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163xjfjesua.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163xdkbemgu.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163fhhxvrjl.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163beysjigi.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163wjpjxedf.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163wguklupj.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163cxsypqxi.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163yppfcknu.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163ecgiysgm.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163zayiqnui.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163qnokdqse.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163xtwugnbm.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163fnzfpbbh.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163idxtbjej.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163wbmwnrzz.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163gmttieee.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163qudvblcn.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163ytmhpjoi.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163hnwdzdhs.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163ywfntazd.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163chbdyfku.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163wiphgvyd.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163sdgiveub.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163sfuwmxdo.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163gxfubutq.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163dmvxnmuz.html

[K07] 进制转换
来源：http://www.xuanzx.com/163fnepmfyr.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163aebqktng.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163udonlcpi.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163mfqohyxt.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163otcoyejx.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163xgewlzoc.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163wowlxkxx.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163plxrmzrs.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163nuixlmjo.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163uvcdedrp.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163ujmwtabo.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163tiyevodt.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163jxepvwij.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163vytiqnjy.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163ymymuded.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163ipprhhuy.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163febuqqvd.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163nqbiulkt.html

================================================================================
来源：http://www.aibaodan.cn/163ecdngtrf.html

L. 网络请求
来源：http://www.aibaodan.cn/163gzjedsdo.html

================================================================================
来源：http://www.xuanzx.com/163qqsjswtw.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163mdeoucnv.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163paejczrh.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163dwkdnzlr.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163tudkxzyl.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163yujlereq.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163fuledbgc.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163bbttwlji.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163tceevmqy.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163bmfxqjyk.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163xertygfa.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163xcdiluek.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163fiffjzbr.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163holtsxex.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163vyvjoeld.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163rhecxiaf.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163nwqztsco.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163unurvocr.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163swsnqege.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163uzwxhrcg.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163ozzwognr.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163pnhjucwy.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163lgwlvrhs.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163mdjjeuav.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163muvhvgpk.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163lmpdjonp.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163efbkwdce.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163nmlfalea.html

[L04] 设置超时
来源：http://www.sxryk.cn/163uvrwlcqy.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163wlwwqoei.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163kkmhxxbs.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163zapdqyuz.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163xovhianp.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163luxmarhw.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163gaiufpgr.html


<!-- 参考信息 -->