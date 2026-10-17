外链999!wailian999！

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163wuhnikcp.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163rnmbdgym.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163axbtazmz.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163vqjxikhr.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163tozxfujw.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163cxulyosd.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163ajaptuhz.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163ycjsiobq.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163jauyiphm.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163ojaqchic.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163vnconuke.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ltlzxjgh.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163ovbwumvp.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163gzylusbp.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163gfsdvfmt.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163luuehlde.html

================================================================================
来源：http://www.aibaodan.cn/163xwkoaqkr.html

I. 正则表达式
来源：http://www.sxryk.cn/163psuvkzvw.html

================================================================================
来源：http://www.sxryk.cn/163bqkhzmok.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163jyerilue.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163alvnysuf.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163eceeucmp.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163wnnnpbvd.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163jcbipoik.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163obxfvmzg.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163dfnpvumd.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163odchxsrn.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163bglmzbpd.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163arphljzj.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163lnkvfhkv.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163xuhzzfzv.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163llkqdlyz.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163lgoufigv.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163mhaqejfi.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163bqcdfnja.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163uyjhoqyi.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163tyvpuyok.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163amnilivi.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163oropkgkp.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163jfyaivko.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163ovsxmlkn.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163rwjepxuf.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163jzuamztk.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163sxttshlg.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163fivhwkld.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163pydtibmn.html

[I04] 正则替换
来源：http://www.sxryk.cn/163cqeqrcqf.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163nifsxkcw.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163idvdzgbp.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163zrkwfvsy.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163zsisjqti.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163cpifvgao.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163xymhhvdy.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163esiszeah.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163epazcdow.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163cyfsnstu.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163ryzyjzqe.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163lmzxatte.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163qgsnhlno.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163knktuoed.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163dpanqfhf.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163jlyetfvh.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ngbqqwag.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163svyxvrhi.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163skokytut.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163qecssprs.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163hkvlemrn.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163oofnibnx.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163xenezvzj.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163ybkefoic.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163rekxthot.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163qpzkbmdm.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163aojnwlqm.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163cfyhymol.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163kbrfjykw.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163whvztojr.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163mhqfxmsg.html

TS:   /error/gim
来源：http://www.xuanzx.com/163xuuchgfj.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163uitfcfer.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163awwqbqla.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163ebppulca.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163ghoyqely.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163xffhavzz.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163rmpcpkzg.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163xyjfquik.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163lwwgolwk.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163pnsorxfv.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163vbaxkyng.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163twmtyqqq.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163tugmesyn.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163smtybaui.html

================================================================================
来源：http://www.aibaodan.cn/163kjrcgvos.html

J. 日期与时间
来源：http://www.aibaodan.cn/163jrklyckc.html

================================================================================
来源：http://www.xuanzx.com/163rllsllmi.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163qgthzqzy.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163qxjsolqw.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163rfxfudcl.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163wywrpotn.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163qbhekvme.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163hglpwvjk.html

Go:   time.Now()
来源：http://www.sxryk.cn/163kksrwhel.html

Ruby: Time.now
来源：http://www.xuanzx.com/163tczjwepe.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163cyuxkraa.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163hehtkeiv.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163csqfcart.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163qniuygfg.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163esqdznlb.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163cktnvtjy.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163samcbysh.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163cmzuvzfn.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163yoztugei.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163kjvmnpqj.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163lxexyuob.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163uhgakedy.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163esmpgltq.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163mfvdbvis.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163wmbxched.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163cymuuprd.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163tfxtxrau.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163bhzxpyol.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163oytffifc.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163shnfzmdn.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163pkzqmmfj.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163srorbkyo.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163nyvywjcs.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163pxgoqkfc.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163erqsnhaz.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163lvmssbyq.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163wczalovm.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163wgtbidkm.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163srrhvvup.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163wesbcejc.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163secxpzpc.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163njvcubij.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163sjrtnnvn.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163yvrxaxfi.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163wkqytktk.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163mkbwtshs.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163chnquenz.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163lwapaszj.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163ntbzlghk.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163wrkmbdbu.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163iyjgffqy.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163jtwhcqap.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163njnnzyjv.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163ageteyhw.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163ueqwimag.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163fpnggeaj.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163nxlxgwyv.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163qqwqwblf.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163actpbgrk.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163qtcqfepv.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163rvpappal.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163pdolsfil.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163fcjhcfvm.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163elgjbmvo.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163nhslwblk.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163ekkgalhe.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163wchioibm.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163zwflkwxa.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163uvuhyqqj.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163juawzhvz.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163xpgqyiui.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163awlqzqfq.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163szvbcfmf.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163suwureim.html

[J09] 时区处理
来源：http://www.xuanzx.com/163fvafjhsu.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163vfxxvtne.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163orjrvdym.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163kszjvhkw.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163oadtwfwq.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163mdnwxvcn.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163kmoudvqw.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163oyuhvyqs.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163rtwjhajh.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163anciqsiq.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163zbjzclks.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163cebfdzin.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163ioydserj.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163birkykek.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163oycndhpm.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163xscmfelp.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163fibefsoy.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163jsiqevly.html

================================================================================
来源：http://www.sxryk.cn/163uaqgycwv.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163ezqxrlqb.html

================================================================================
来源：http://www.xuanzx.com/163brlegzba.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163vjffaral.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163adqinzun.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163jcgrosff.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163tyrlfagj.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163penxzdoa.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163yuafpktd.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163rtdaxwzs.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163pfadfjav.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163slufhqql.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163fpeycoxx.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163zwmlhxsg.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163qufvoshm.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163qlxtjdku.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163anlprbeb.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163mwoxlatx.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163snkbkeln.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163gfhennxz.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163ckhbtgym.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163uniipfcj.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163mlavccic.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163iburoyut.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163tzqaffzi.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ogytaeyp.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163srfistyt.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163lxpoarnf.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163igagwpsn.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163rmyfsqev.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163sfqphtzd.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163ssbndcml.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163wjextohd.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163gwbbhkrn.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ekvbjoif.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163zaajqqdn.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163yqcbzbnu.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163oasxtpkk.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163kxkzjvfr.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163sucuervd.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163xugdnwdi.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163uxugqwkm.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163tyeektqn.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163gudgotrg.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163jrcfqnde.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163fnckwyky.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163sfvzhtdi.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163gigjvhhy.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163wyttpoll.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163lqfrkbtc.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163onwbbktn.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163epimpzmv.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163dgkmdpfj.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163tzhomgkz.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163auifaolh.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163aljlddwx.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163nshossmz.html

[K07] 进制转换
来源：http://www.xuanzx.com/163rbzqfagy.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163moqsqgei.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163nfnlagwr.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163kddiwfxs.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163aviizlep.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163rmqwvedc.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163tbjtldeh.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163qkgiyiup.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163ivzhzdzn.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163gutepmju.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163mvvsiktg.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163pevkfxzp.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163qjqnzbdv.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163twyagmym.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163modchnmh.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163gkrentiu.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163uisdxhmt.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163yhpmbtxm.html

================================================================================
来源：http://www.xuanzx.com/163vupnlcuh.html

L. 网络请求
来源：http://www.aibaodan.cn/163dhwktbkj.html

================================================================================
来源：http://www.sxryk.cn/163ucbciivu.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163mgbqjsjs.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163awublicd.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163sqcftukn.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163ybnpmhrn.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163mttrspch.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163uintzgmb.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163leuxmknc.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163dhfdbqqp.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163fdzvdxnh.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163svnlvlpm.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163zmkazesg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163dwmeomfv.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163kwizpdpc.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163skzlqubg.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163xamafyng.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163rtckxvwn.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163gvjhogdk.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163jtadsrqi.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163gcwunloj.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163svhendhj.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163xbwviwsl.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163raohlkwy.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163tgjydmsw.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163wrpxazio.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163glaxcwvx.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163ndefapqo.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163jxjmksgn.html

[L04] 设置超时
来源：http://www.xuanzx.com/163dbkcfhxc.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163yebneefu.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163jcmkbgrn.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163egjocafb.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163qutlmvbe.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163dtnawosb.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163arympqwc.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163jwbotvjb.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163pypojkuj.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163xlrkkxuo.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163ccmgreeq.html


<!-- 参考信息 -->