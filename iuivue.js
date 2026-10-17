外链999!wailian999！

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163itesfrnn.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163dtgstxfp.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163ggqrbgvv.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163bxapmdbk.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163syockeqx.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163cwnyqjws.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163zmyvjbxy.html

Go:   err.Error()
来源：http://www.xuanzx.com/163dfssxzqe.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163czxvqveq.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163qtadhccj.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163yofkmbfm.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163hsrabcwl.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163nvlmogza.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163sairoxja.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163cjmnebcl.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163icbvfvqq.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163tdcewmqa.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163umlymzzj.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ucokovih.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163zpybdips.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163dzwcxelr.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163wuqykmwa.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163nysnxpdv.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163rkivwduq.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163huhtmzdx.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163mzdynddi.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163wtvrfiti.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163knvijjci.html

================================================================================
来源：http://www.xuanzx.com/163vqqkqmvt.html

I. 正则表达式
来源：http://www.aibaodan.cn/163zxabpqvz.html

================================================================================
来源：http://www.xuanzx.com/163fcpklgwz.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163uxokirfd.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163hfccqboh.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163vniglmnm.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163twpjpfss.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163spsavkcl.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163wgfmqqdg.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163bfgnnyha.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163ocsklgae.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163iiqmjccn.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163fcyrnyhw.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163jcpcaxao.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163apnswhxx.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163vsbngcvn.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163hrwlcich.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163asezssvb.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163bapwmtoc.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163fxsbyrsa.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163vxgljgco.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163aocvybte.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163bworarww.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163wqwmkpth.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163ausxywgo.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163cfewzyhr.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163jlfwyynl.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163pqggwqkj.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163gdzawmuw.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163uyihnhpc.html

[I04] 正则替换
来源：http://www.xuanzx.com/163mmkzhmrc.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163ntibecgu.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163tggfgrwf.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163juytuzls.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163gjtqhglw.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163eybhopwv.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163ttrsrjhe.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163wchsejpu.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163uzlbmqsj.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163barjsbpc.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163qhjfufop.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163uzeuqppx.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ioqfniql.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163wravqkhj.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163fragpuvt.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163fkwyeqsn.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ciusndxk.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163bxelcgms.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163ycfntpmb.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163sehjrrip.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163wpakqnjx.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163phorrudk.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163mpnshoyc.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163qywaitgw.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163zplzliae.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163xcronxia.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163byegfzuf.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163aeqgdrjj.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163motnrbiw.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163bahgotqa.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163guecdnce.html

TS:   /error/gim
来源：http://www.xuanzx.com/163mfkbspxy.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163kgtichia.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163fhowysue.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163eawpxwmo.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163rqfynqbx.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163yloobnrb.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163kifavqdl.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163uqraxwyf.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163jyhdbflm.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163bcklpewq.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163bkaoyxzb.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163nogeyybf.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163rfaqrxvw.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163gunxcijs.html

================================================================================
来源：http://www.sxryk.cn/163cznnlrto.html

J. 日期与时间
来源：http://www.aibaodan.cn/163cbetcagt.html

================================================================================
来源：http://www.sxryk.cn/163wvkfvqli.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163zlswdyme.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163licshmwu.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163laweizls.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163rfpmcmkv.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163epjprspc.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163jntteiwm.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163caunvrwm.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163znxwrpmf.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163qozdmzjz.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163lvmwckyz.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163nmolbjtm.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163xxdkfmle.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163xcuaecvc.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163mmftwldv.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163arskhoei.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163vbbmfyfg.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163loddamjr.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163tqwnetfx.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163gjgdlpsy.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163qcgtymjz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163ggvxdgao.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163wgvoxovt.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163kiaekjjb.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163yfpajxiv.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163nnoydafe.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163trvlfdem.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163nedowfae.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163wfifvhbb.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163urpdjwpy.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163yueardit.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163vcgxhorl.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163hkbmioll.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163aiuixqyq.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163lczkcwrp.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163cfmobgxj.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163klebgaqb.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163gxxlccnf.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163hyaedptr.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163aqrqocsg.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163zmfexhbn.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163yzapguvi.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163wdptkkzg.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163qrguxkcx.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163uijdowwk.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163bovfnwlc.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163dojgcpqd.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163aweoscfn.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163tudmyiim.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163gltgswyn.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163aeqzvdne.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163ahzkkcqm.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163vlgdftof.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163ubzbjkkb.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163qukxzxzt.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163xqaoxwts.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163cppfkift.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163nbkcnhqn.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163tcrnnees.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163blgzdzas.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163imqanxyj.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163dqxamfwe.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163mgedorfr.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163litboptf.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163ucxsnlyg.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163leflkejx.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163lbbxhjdl.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163mwgxuyhg.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163retdsvhj.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163evepcxrw.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163odtjvfqd.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163kdemdirb.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163hgfqfulw.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163qxllerfj.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163kzgivzyg.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163vubosahd.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163xkjjgxdu.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163mmfdnzcu.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163zpiavdvt.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163zaxhjjgt.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163nbqsjwzm.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163npfiisbb.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163jfcwcqat.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163sproirtr.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163swyfwdee.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163zeeiwnmp.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163enfnujpp.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163uhgnzakh.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163oyauoyie.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163uxdzhqxc.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163yjuysyws.html

================================================================================
来源：http://www.xuanzx.com/163ockaijou.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163uoeouxvj.html

================================================================================
来源：http://www.aibaodan.cn/163zmdkvwvg.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163hbikxmug.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163pknqcmun.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163wvggvjel.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163msrvmlvy.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163jiiskzan.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163ytkgyayd.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163zoudgstc.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163kjvzsijc.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163oxxycpif.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163ckdysksv.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163blagnzil.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163qiavfgiq.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163jjibpiuz.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163yzytsddr.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163tmamycil.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163itsdihdl.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163zpxircdd.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163emofgocm.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163cbcyuegj.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163bfhsxhgj.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163biahdxlv.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163hkeldovn.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163wxhomjqj.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163genoffal.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163ewnzlewf.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163ephvulse.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163kpqgbkty.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163vjhbptos.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163jkqworol.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163wqzbhjxs.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163xdmlfkdi.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163dtsdjzwm.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163yeklfwjy.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163jbnqyiay.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163yfcbagjy.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163eapsuwnm.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163gikzffdn.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163pdmlxtmy.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163whxsznsn.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163uwpwiwtv.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163rxzdvnto.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163yxsrojmh.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163ydyzwojh.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163nxccrlha.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163kzbepfrm.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163xozfpbip.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163garwmcej.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163xhqwvjrf.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163djesocmd.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ycafjkue.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163pfoklpho.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163kwqrjtzy.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163hkbkbywy.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163mzoqkngz.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163yjylxllr.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163ivuydcwg.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163obrkmtoc.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163kinhdbye.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163uohqtyno.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163gsxtrvbg.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163czubdslq.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163fxpbvngs.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163qshtirpr.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163gpqcqbtw.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163qxffemvv.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163gxmvjral.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163btmkpgdn.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163wyfjfzhq.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163oqvdhijv.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163eycivqzd.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163jjfzgnoo.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163yxcbhicy.html

================================================================================
来源：http://www.xuanzx.com/163mejednxu.html

L. 网络请求
来源：http://www.sxryk.cn/163kavovqkb.html

================================================================================
来源：http://www.sxryk.cn/163porseisl.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163pgcobber.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163bppsoxek.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163widlhmrz.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163agbbgkaw.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163qoujkjkd.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163skvxkuxh.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163vvivbzse.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163fmwybfrx.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163uwizlzgu.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163usyijdqg.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163juvxwcjq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163kcdtkhcv.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ygoqelkz.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163uqjqxzhy.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163uigehsju.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163yinxylos.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163gpnencbw.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163ndqaldpl.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163jxlmuxjm.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163pquszuuu.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163qknilrgg.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163rawfkdxm.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163fmxqhnfo.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163eqljntnn.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163apbrgpha.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163hanssaxq.html


<!-- 参考信息 -->