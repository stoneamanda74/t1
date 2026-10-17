外链999!wailian999！

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163gndyosql.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163excfwale.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163zvykumsw.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163zuafuqbl.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163rwuturiy.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163cbnpskhi.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163lutlxtlk.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163lyzgshvb.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163oshavuod.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163ckqwocvb.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163rszypktk.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163fhejslsz.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163uhrkrtpl.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163qkgafhte.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163hpqwuvdz.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163swvmulhs.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163gjwrinir.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163ffqbwazv.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163yzpxdizp.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163ypcaxkyz.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163hltfndlc.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163ilkkoien.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163anbljvil.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163rhjtytpj.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163ejtreppl.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163ljjiqhcp.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163edkvqrul.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163cwciujmm.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163dllcafdl.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163yshjbtet.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163vxqnbcrk.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163csbdyxpj.html

================================================================================
来源：http://www.aibaodan.cn/163xzamqmrz.html

I. 正则表达式
来源：http://www.xuanzx.com/163sundcmrs.html

================================================================================
来源：http://www.xuanzx.com/163sfucsevh.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163haevjquq.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163tdbdmnvo.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163ieopgypo.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163nmvppyjw.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163hxouznyp.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163psqxkasc.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163ahlnswjw.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163lxpltarx.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163ppvurhcc.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163ydfqetch.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163goompvbr.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163ighjwuco.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163wtmsteau.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163cqqopbjv.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163awhibsuq.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163hvjhtmqm.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163aefnykss.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163xpnkhfce.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163upufgcvo.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163mmsfajrs.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163zseacsjw.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163oarjprrw.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163rsgctapx.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163mjyqesmn.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163tbddbudp.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163hhfpaysk.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163jatsfejk.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163wakyobzq.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163bmrujwko.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163kxasaffg.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163hkagndns.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163egpulnko.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163punnsmje.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163kustbkar.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163wlksplvx.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163qqgjpapv.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163jxzmklhc.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163oovbqnkf.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163tfpgcfzg.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163qnshzogr.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163zwyoflsc.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163iebhpqdc.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163rcceeene.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163naxhuluy.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163yhsstifb.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163lsayfqwb.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163jzwkziae.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163szevhbat.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163wsjloxjo.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163euowxtmd.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163wxmfvdki.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163xvnyfwhf.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163qokjdazm.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ohzcazvk.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163przafncr.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163rotuxckl.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163ssgnfifo.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163gvtltpah.html

TS:   /error/gim
来源：http://www.xuanzx.com/163xrtgkfjv.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163nreileqw.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163szameyjq.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163gketfyiz.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163dkiiumvy.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163nohxppsh.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163bdztmtel.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163meywhqkh.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163bpwvgipo.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163jbistxhg.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163jtqcwqti.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163zofacrma.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163kupqgkej.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163eyqefbrx.html

================================================================================
来源：http://www.xuanzx.com/163lmcollgx.html

J. 日期与时间
来源：http://www.sxryk.cn/163jpwuthti.html

================================================================================
来源：http://www.aibaodan.cn/163hwbiafzu.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163zyuaojjn.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ymajttmx.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163doxwxzat.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163jipvpxuh.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163xwrrjxhz.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163jefomtnw.html

Go:   time.Now()
来源：http://www.sxryk.cn/163xwfuyeya.html

Ruby: Time.now
来源：http://www.xuanzx.com/163rhwwazzq.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163beibtmem.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163txivhxsi.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163ydgsgslt.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163zslavurs.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163uiaqvwdg.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163reanbnsf.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163oxpwjyee.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163dejrbuyk.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163blecxqud.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163tidpxlmy.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163oaaumtpu.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163pktrvzxr.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163gbbsmlzo.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163iggtvmer.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163qjmmwogn.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163azmsjxij.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163drxaxlsf.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ueadwnie.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163qqzbizai.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163albirjad.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163gjnpvghs.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163jmepyiah.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163pooxiabw.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163ffzdihvl.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163fzehtvyu.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163mshxvrya.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163hrqjqrbd.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163xdqmihtz.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163pdiwzvab.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163wuroyxnt.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163blecnfdt.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163hiqagxjq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163eirjwnpn.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163wjsprnhc.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163tpypitdk.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163znmlxvjk.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163qcqzsnhu.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163azfjvpeo.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163ohvegyig.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163saifaefw.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163eelpmsat.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163qhygbsxp.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163fppnbhln.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163nfjdnhiz.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163aychsnqr.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163eshzuwop.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163cqprnddn.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163rseuioau.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163fxhmsppz.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163kdnemkje.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163dlqyamif.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163crqbrybq.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163ydznyawh.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163tcqhgubj.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163kkkyjfpe.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163eaxskiet.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163xirpeohm.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163ddmztaxq.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163rjluseec.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163wgxtzrti.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163paenbwyg.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163gcltkmjo.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163obwztedb.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163ntgbkdda.html

[J09] 时区处理
来源：http://www.sxryk.cn/163zkolwdtu.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163bojovkbr.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163mfsxhbsi.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163srtlnuqv.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163gslxyjpc.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163pfoylxrg.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163udthekjr.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163rhrnfmzj.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163efqiguyp.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163hipgetgj.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163ojvsozdn.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163tcxiuymu.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163hznbwbfl.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163rcjufbhr.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163umujyaby.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163xqzhhlga.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163pyckmwef.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163olmybspx.html

================================================================================
来源：http://www.aibaodan.cn/163xjmwifnb.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163ptgrmcql.html

================================================================================
来源：http://www.sxryk.cn/163mwzhjcon.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163anzndqxq.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163olfmrkbr.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ynrkehuu.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163kpeqgwhd.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163gjnlxhfq.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163nrohschk.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163dxnckwfz.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163vvfhvkqo.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163omyzqygm.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163zhrpmqmp.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163lpgretug.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163nfbtbmoe.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163jwpnplsg.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163opcfkzwe.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163mcjxaydz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163cvrdxnsp.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163uzyzvgvn.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163cvxbvaof.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163grgbmbjr.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163crshnbqs.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163uxxadkic.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163zfammkjl.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163tepllnns.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163nuiwlvxu.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163rijkoany.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163wvoomoeh.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163uilsgyxj.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163xxuzccuq.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163zzavxzjf.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163bixajpdx.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163mzykytxj.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ykcslkzg.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163qhinvkyv.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163etaftcxn.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163uhkiikqy.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163vtpbltns.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163biplcjlw.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163ivwrqiru.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163kshcmunt.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163gvvyozhk.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163oenbtpuc.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163prmjzwjo.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163gwibnmlk.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163geezimdj.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163nvscuiek.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163udmagkjm.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163cnkbizez.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163wpydqmia.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ikpzgpxh.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163uokdyrfd.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163tfdlehgn.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163aefnxjli.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163ndjeleld.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163zifgielu.html

[K07] 进制转换
来源：http://www.sxryk.cn/163qtrhranb.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163httrxlit.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163erhzfvgo.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163fdgmhzgk.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163xzeuelpo.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163ykdtdoxu.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163vfiudcvm.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163qncgxldo.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163vkyhhicf.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163esgaaajc.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163phodyvbr.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163apqvnmnb.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163gxjmcbyi.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163qivwlvlb.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163gwzorijt.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163ctmzmvyy.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163hgfrpeea.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163mvcvkvix.html

================================================================================
来源：http://www.sxryk.cn/163djhwdzul.html

L. 网络请求
来源：http://www.xuanzx.com/163dnmmatjl.html

================================================================================
来源：http://www.aibaodan.cn/163jestynzy.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163tpdvuyvy.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163cdzniwtt.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163odgwnkpy.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163dzivflmn.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163ykwsobfk.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163twkicebo.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163qhsgaqpr.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163vmuvgjhz.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163ipsvsegd.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163azjxamio.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163ejvzqvar.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163oludwxdo.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163lmudogqd.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163awduqoja.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163rpiaakvj.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163fzttlhqb.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163tcjvzhco.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163vghczeff.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163akswywzl.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163wcfuvfec.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163sgdkglgj.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163jpcornej.html


<!-- 参考信息 -->