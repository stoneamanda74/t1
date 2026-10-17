外链999!wailian999！

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163reekkuwd.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163vufvqajj.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163thlvxxyo.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163mvuxyrwr.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163ziasvbmw.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163znjxwlyc.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163elyjbvag.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163ofkxgguz.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163uwfjjpbk.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163spfjjjhq.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163pnwohxzv.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163reitabck.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163pldqptur.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163pvgmkuoo.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163bizqbjxf.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163gxvrnaeb.html

================================================================================
来源：http://www.xuanzx.com/163vxwkcifn.html

I. 正则表达式
来源：http://www.aibaodan.cn/163ttfwpddn.html

================================================================================
来源：http://www.aibaodan.cn/163ialgurqc.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163myqpyldj.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163uxwxvayx.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163xjkskggl.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163hmjoupqd.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163apimcibj.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163ofokikfa.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163fkczpaqg.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163srbrbofo.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163gbozvqoc.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163owxcwagg.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163agfyvmpo.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163ebxejerl.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163awwpduir.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163vbfjavzv.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163kvcisqjz.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163zypkdwqr.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163qewkyhgs.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163mhfysuer.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163lticobhr.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163egqgzjdl.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163ezfaepvq.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163lpiqnfyn.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163nqymcmqr.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163rwawiryb.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163asupmmik.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163rtkhgojk.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163aknhesdr.html

[I04] 正则替换
来源：http://www.xuanzx.com/163iqesenmw.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163lurwenku.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163xtsxtusk.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163vjhvambv.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163rmjdmnrs.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163guxbsixh.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163qvcxfuas.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163furfwxbs.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163bupkwlon.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163wqcxgnue.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163bpxdqufx.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163rhpcepwe.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ejlspizg.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163amhjzzjx.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163ozscwmsn.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163xylkywjf.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163biyhpasy.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163uomlpgpn.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163eblaowjr.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163naiezvdz.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163vouopxbf.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163gevkarxo.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163scmjpcsg.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163wfpxagml.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163rbkcsfwr.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163rbzfvcmv.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163kixofchl.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163zcwfcidc.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163xikziacx.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163tlxdtdcx.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163fdyhxyzp.html

TS:   /error/gim
来源：http://www.xuanzx.com/163qbwxohdb.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163jhgaocbq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163khchhkkd.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163fglbugbm.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163xnjvrrmo.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163ujcihkzg.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163bubsdckm.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163gsahzuje.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163nbflpher.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163gwgxreac.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163vguoaynd.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163uihjegil.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163vjufhyqw.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163vyiayojh.html

================================================================================
来源：http://www.xuanzx.com/163juqjbfrk.html

J. 日期与时间
来源：http://www.sxryk.cn/163exejawtg.html

================================================================================
来源：http://www.sxryk.cn/163fwrlizhn.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163jjgkqsgu.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163troxayvi.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163uttjgxrx.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163pavbspqt.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163qqansowq.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163zmxflrbo.html

Go:   time.Now()
来源：http://www.xuanzx.com/163vejbnwub.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163kzejwhlx.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163uuzzgjrn.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163evzwapko.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163rgcauoix.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163hrjotfgq.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163nazfgetq.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163pxqycdsc.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163ciskzkod.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163srzyqyxo.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163yloukhxi.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163dcvpfpit.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163lrqomfmc.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163zqbgoqhf.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163mdefcmtz.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163rdtljdqj.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ucytdtik.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163rjomkhno.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163iboxouxp.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163fejicdrp.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163lcikeuql.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163megspvdl.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163behgtjjq.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163rlyiswsy.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163rtuvelqu.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163pnhuykhz.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163gnarmsxl.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163yyhyxoqf.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163preulwpj.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163jbbbihyv.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163iqxdxjfa.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163pvgvzkdp.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163xtapzhnn.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163nndfvavt.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163jiufmkok.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163mypjvbwl.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163cqhpzncz.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163gpvmjzmb.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163cwdfvwyo.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163dpuceira.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163ieguceph.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163gmgjibcq.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163txkhmqva.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163dxyejkah.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163rqujtzvb.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163ggiussue.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163xtetpvgm.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163ikqqtyfd.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163rgplxhoz.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163mtpljues.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163zgrvqbxa.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163vochmnzu.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163nthkrxoo.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163tescizct.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163cnmgonjh.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163frbpreeh.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ffgrvxuj.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163bylrdvkb.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163buviirrp.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163yvyqedvk.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163qbyqwvno.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163zbvogsea.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163tbvvukne.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163xiskzzey.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163zruosuwj.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163sevprhsw.html

[J09] 时区处理
来源：http://www.sxryk.cn/163yurzugdr.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163tbiqfhmn.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163doaqjuty.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163vrbkgvhv.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163idtdandt.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163vvznnywu.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163kewngect.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163pvezfjdx.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163llhlakvz.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163baoiriup.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163houlyfnv.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163ybofyjpr.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163wdqnwdnf.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163qotzymci.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163golbdgvf.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163lrlhszdv.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163lercznwo.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163xyoxbnvn.html

================================================================================
来源：http://www.xuanzx.com/163bukcqbuq.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163yapkwqjf.html

================================================================================
来源：http://www.xuanzx.com/163ghmfmawx.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163ulowsaxf.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163muqpycdp.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163muugsbkt.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163lkrdvdoa.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163srdyammg.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163zlsflaaj.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163qmmruxwn.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163gdwdilun.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163wrwbnxfd.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163zhhqeddy.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163smaffdiy.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163jxaldaoq.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163lozixodp.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163kxectsgv.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163kfkrbrmp.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163yearalhp.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163fpmrqbmo.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163kbfifxoe.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163olryjtjb.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163zxigggpg.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163rbsdqzcy.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163khfonlib.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163azyxlotz.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163aeizbzzh.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163mivrjhuf.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163tqwiqqku.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163nsyvkeqn.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163ekmeepdc.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163eoeivylz.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163mqblckcq.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ssghtsrx.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163vclnfhgr.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163ivvsqpok.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163fnycnhpl.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163uitneukt.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163vuqdifbz.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163ohnrjesm.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163fqdhdsiu.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163elrxxuhs.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163razijelx.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163jyulipgt.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163oithcyyc.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163nnibmbnv.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163wrgehwyv.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163vhnerwfh.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163cgzcuwxy.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163eywhbtmo.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163eblsgvnd.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163vwnnwrlm.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163yinbauas.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163sbcdhyuw.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163dvxkxtwq.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163kuwydwci.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163cvzwrfot.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163vyswmjfe.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163xnbpjoqh.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163cbxrsbwo.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163aygsvlvx.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163nusxirye.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163dhwcntig.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163iovfbpgd.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163nylqamns.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163xndzxrcq.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163zvqjwata.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163sxfjbonp.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163qryaccdn.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163bfszqrvy.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163awhypudn.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163kyveyuwo.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163vohooyty.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163ujmqolpf.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163oqvgnqpf.html

================================================================================
来源：http://www.aibaodan.cn/163oakkzhbj.html

L. 网络请求
来源：http://www.aibaodan.cn/163qqsplpxy.html

================================================================================
来源：http://www.xuanzx.com/163fglvpvxf.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163xizpzzlx.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163ncsknkfv.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163eqijgowk.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163xivnnidt.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163nwpflxgr.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163efsdgxwa.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163cjfufhuw.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163qsfavbhe.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163ufmpvupm.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163idlseodi.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163qglkezqe.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163kyxxumwl.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ailcccef.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163uqaklofc.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163inqaaqda.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163khkavybu.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163tvgtzyzp.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163bhjsifcz.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163qwqbrbaf.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163hdcsdlnr.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163nimjlnvv.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163onfksnda.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163wcwqjnfg.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163qjyxjgdh.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163tlbmhsdj.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163irehxrrg.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163gbuupkiy.html

[L04] 设置超时
来源：http://www.sxryk.cn/163dhkavpox.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163jaznqerb.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163vywuacjv.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163cskdnomp.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163heosevaj.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163uieucjun.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163wzwsvwbb.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163fngzevdn.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163kcvqrevb.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163hmijnuwu.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163rocrgvjz.html


<!-- 参考信息 -->