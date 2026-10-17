外链999!wailian999！

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163udfsdexp.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163sqkjnawr.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163ljssienw.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163bgvqeztc.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163tcljwplo.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163kpbzdzvo.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163aczhlmaj.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163tcyfxmpm.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163aoxoofqr.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163lwpqtpqh.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163bsefeasx.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163faaqicna.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163amnysxqe.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163uspsndcd.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163oaxgwsni.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163etyeluwc.html

================================================================================
来源：http://www.aibaodan.cn/163ebszgenf.html

I. 正则表达式
来源：http://www.aibaodan.cn/163yuncwqto.html

================================================================================
来源：http://www.aibaodan.cn/163zwruggsz.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163vvxmpunw.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163lzzbjdon.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163nqpfydva.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163azqttkho.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163kjebiplr.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163gcegzgoj.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163pfnafkli.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163caennlie.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163olzywkuq.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163zpucftmz.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163fjbekjru.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163gonijgzj.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163nwlsekir.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163kdbrgzqo.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163evjordlb.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163qsyoyoew.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163gzppxaeh.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163nrrluqjk.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163zssblizk.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163vnxyvrux.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163dgwnnahh.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163qpewasdv.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163osyvfrpw.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163jththwwp.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163lfjgazdk.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163cmnosigi.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163wiaopklf.html

[I04] 正则替换
来源：http://www.sxryk.cn/163gzarwmpg.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163kjnpurua.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163zqnoqnly.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163mvfhteen.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163iposppqa.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163tgjiumgr.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163yzuhyzrj.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163cmtrjlsk.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163mprxzoqm.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163ymziffxs.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163tzzhfswo.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163xogspkqy.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163guvhsnnp.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163upvhpwuz.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163tfkppoud.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163qwteglgq.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ysrwovsn.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163vyvvkrpc.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163bdmrjmgu.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ozygqlxl.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163nflwvube.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163huhtpxep.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163clzldrlf.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163mgipfsya.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163gurdihuv.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163qidrhhli.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163swvunsmz.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163azlybsmy.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163yqkbyjok.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163iypawykk.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163wdwdkwwl.html

TS:   /error/gim
来源：http://www.xuanzx.com/163rhabkswp.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163ldsxtilq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163kldefief.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163sposrgws.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163wtcgrift.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163ptwnrjxv.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163jealirib.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163hbfrjvjw.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163tlssfanh.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163komwgqtd.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163eotcblmx.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163bficfkzw.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163hohsanma.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163rudwmcho.html

================================================================================
来源：http://www.xuanzx.com/163lrbnsrtc.html

J. 日期与时间
来源：http://www.sxryk.cn/163ejhqfduc.html

================================================================================
来源：http://www.aibaodan.cn/163ohwllqtm.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163opiqlpnk.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163qnqgfqod.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163iistrklb.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163yejfkany.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163tyjjnlai.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163dcarqrup.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163mupfjztn.html

Ruby: Time.now
来源：http://www.xuanzx.com/163imqlowfw.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163bvcnvpaa.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163zbieucwm.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163oykojhkl.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163gtfaubcj.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163jrawfiaj.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163jytkzsqr.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163ncsptaox.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163nfhgtsul.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163plkfbxnz.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163cvfnevhm.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163dinfspzq.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163agkyjbtl.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163vnuqbqdl.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163vkwqdzki.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ewplhylr.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163jdxpmeko.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163rjhhzauk.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163plzbzdqt.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163lithdsdi.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163hlqhhogd.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163ejydscjb.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163dtfgqiwd.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163yjcegqep.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163hjwqgzuc.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163byfgkzhm.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163wrwhliqc.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163mtmebilo.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163jbzjehsq.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163bgwjrgph.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163xufffrwf.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163fjlznaew.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ojhftgvz.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163vcoerujq.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163jnobpfae.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163wvvsyhdg.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163qmgouqsj.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163agkgrzwy.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163xevuohef.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163iujvbbfe.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163nfheafgi.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163sraceloe.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163qllibaae.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163abyixeuf.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163lqdajyto.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163fqanxbnk.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163rjkwijrc.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163zxtnkqkz.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163rukxvilt.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163hzkkprpy.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163hlbgoyaq.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163tscabjar.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163tvqqcnwf.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163esbqoxqx.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163yhdamgwa.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163rmjdxkji.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163pvpfujag.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163pgupfcae.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163zjvvqmym.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163abwqumlc.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163vmvqjddf.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163kmidfvva.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163hbocfrzl.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163mjavteos.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163ebypttis.html

[J09] 时区处理
来源：http://www.xuanzx.com/163dwxvyyrt.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163ntxevntm.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163lntxoknl.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163uvdsmwlt.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163wxwxznph.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163cbfltptd.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163zozdzmvo.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163fmgoxldw.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163qgdgvpld.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163sriqqjxo.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163wpjebflh.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163xdehycpj.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163xikcvsrg.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163bdsaqvtr.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163vutkxnsm.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163thkhozdg.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163dcvgwwuw.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163xbgqaand.html

================================================================================
来源：http://www.aibaodan.cn/163uvwzisok.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163necylslt.html

================================================================================
来源：http://www.aibaodan.cn/163mfjumsly.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163qzxcchnd.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163zquysofm.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163uclknflm.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163rhnzqkvz.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163hlejazcf.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163omyfsron.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163hnldajry.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163vpdelftg.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163nyzchrzj.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163mymcnpqd.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163pdmrdrsd.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163bvqnwxie.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163aswzviam.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163fqiqrxkl.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163rayyulde.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163gqhshxju.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163nizrsjxn.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163zcrpngha.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163nkttbsyk.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163hywwoyyo.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ppbdrzlr.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163yotjlqnv.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163dzxvdvlr.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163wghakiiv.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163cqwfmygr.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163zrhhaoau.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163pubymbei.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163sgygotvq.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163moziugkk.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163ibnzrprl.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163tnstxubg.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163qxkcahbe.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163iewmnsop.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163iyhkxokt.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163eluuucau.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163wutjodzu.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163deyqihgt.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163ewnsyzay.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163mdhbqttw.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163iiernxdh.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163abqwcmck.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163lmmdofwr.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163hfwqmtnj.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163uzvjeuui.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163oorzfoak.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163yyashjmi.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163picbepjo.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163jvbmyfia.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163kwihnzdc.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163uyinprar.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163lyecppyr.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163dlumssjr.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163coftnhhx.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163uprhxmtl.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163wkxqxjmc.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163yzsswzcn.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163nmmvcono.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163jxmcxams.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163fdhkeleu.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163taohfcca.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163urmrmics.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163frrrnkjm.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163xujcxzkd.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163pgivxbhu.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163visggvvs.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163aznvabnl.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ugwmzavg.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163uedymbdv.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163bizldgku.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163cfoghgyz.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163nthtcwcy.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163vpomibeh.html

================================================================================
来源：http://www.xuanzx.com/163gvvrmkwh.html

L. 网络请求
来源：http://www.aibaodan.cn/163polhctxx.html

================================================================================
来源：http://www.sxryk.cn/163rmooaqwi.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163iwxkevwg.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163ljwfjpeq.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163aleyyfrb.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163pymfsivt.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163aksrylsq.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163vecwmehl.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163teemeiuq.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163rkokapej.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163bdwskrgb.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163ytergsgy.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163dvhuczwz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163weikexug.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163szwchylu.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163vbfmgsgr.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163xjlxlfuf.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163xkbjzmbf.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163plbcayii.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163upbpczoq.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163aqhrkttz.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163oppqmvbt.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163scriesli.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163xzsvrmbn.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ckykzsdd.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163ionocveb.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163kszywxit.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163oweembca.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163zbtfejoa.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163xkiwgwhm.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163xevvfdbj.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163hejbgwiq.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ucupdiwa.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163xeuemxht.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163czkylbbo.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163ccfnwfpr.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163qtqjznyz.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163lvalsczy.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163xaoubqlp.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163oarpktnk.html


<!-- 参考信息 -->