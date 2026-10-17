外链999!wailian999！

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163sitczwtl.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163rpoolejz.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163mgsqtbaa.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163zlzwojnk.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163wxinwxww.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163xjxfqcks.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163gchxftts.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163moevkeer.html

[H07] 断言
来源：http://www.xuanzx.com/163yfdvxntt.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163juwbtgic.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163oawmtzqe.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163inkjgkgc.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163cxrxfzth.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163bngolsub.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163juwgiuar.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163awsksoay.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163spyfnwpg.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163qcdntfgj.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163oxblfxxh.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163jglskani.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163xkvsgaoz.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163lgemwwjb.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163hszfnhfu.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163xvianbuo.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163ocfkhjpd.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163npsgjvvw.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163yxsbsfmg.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163pickhxjd.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163vqrbnbsm.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163igsutggp.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163lipsswni.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163kxqwfyhr.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163jfabwzea.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163imygntpp.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163ckcmirfg.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163iryysqup.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163qfrlrhru.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163xzofsvac.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163frwmvcnm.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163qwhspdlo.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163lvximzsw.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163pzqrxeok.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163qtirpxvc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163dzaixwam.html

================================================================================
来源：http://www.xuanzx.com/163snyccajg.html

I. 正则表达式
来源：http://www.xuanzx.com/163mkxftwkb.html

================================================================================
来源：http://www.xuanzx.com/163ivfrpvpn.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163qovrnfwa.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163dqerzley.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163hjvmlewy.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163eydbivpu.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163lcwksffz.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163kmjzthpl.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163hymqabkj.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163hmbedfsq.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163tkddkqxh.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163msjnbnmf.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163rwqukonv.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163xykdzfzp.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163txxbdxsn.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163shxjiqlc.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163stgfhaqs.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163vohxoibv.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163vuaqufne.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163etqmuriv.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163jiuiphkk.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163xnllyldh.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163vbzmicjj.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163uxxnccpf.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163eyhaekml.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163coowluvk.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163fxcvngtl.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163zlboavha.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163vnwiimua.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163jbvjkzyd.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163ybnpnyzr.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163atkxlqzu.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163eppemgyb.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ihnjhcmi.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163weglrybg.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163judfsfqt.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163eibakcmr.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163txyzkgka.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163zygwhypk.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163ywmhocvw.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163puzfneqd.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163uylvpjtr.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163tegxomdq.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163fqoebpvk.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163yzcpownr.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163atigzizi.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163tbsctdre.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163rsqqcmha.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163bxizlxmf.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163ubwqwlty.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163emjyvrbv.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163vkwzehhx.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163lqubbxvs.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163xnppxofc.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163bwcxxbix.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163hnkidqtm.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163omxmvhup.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163ohtwzkmx.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163rikxppmm.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163iygaqwze.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163qmzoivry.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163ptnpdgwy.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163oqueybzj.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163bfaetzhr.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163dqnoerco.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163yxbtiusj.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163qhgevsbh.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163cgbdwgxb.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163fazhxyob.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163pphmlrbs.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163eaixlpic.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163ugteqetd.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163egfndfzn.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163jldjxsao.html

================================================================================
来源：http://www.aibaodan.cn/163btewaevc.html

J. 日期与时间
来源：http://www.xuanzx.com/163nrtkhkpq.html

================================================================================
来源：http://www.aibaodan.cn/163nsplzyna.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163rhptpzif.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163iypfadyd.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163txmlnvte.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163rmpqbvhs.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163sxdtfowg.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163uhzjxegr.html

Go:   time.Now()
来源：http://www.xuanzx.com/163kjfltgmu.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163srkxsrcd.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163zvwpiytj.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163cxfanlha.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163dscpqdug.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163gfzfzdbf.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163tevoekbr.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163sbwnqlox.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163hlzugcnj.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163nguwhuws.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163wfsrpwfr.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163timufmmm.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163vwisvrad.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163evxncwaf.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163ucxqhubq.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ppmhcsgx.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ppseeabx.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163cqvxdznt.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163vzbdwcdz.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163ghvuegwj.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163mvuyspdf.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163kcyxwtcw.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163lvuvhekp.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163aestaoqr.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163eqmigjxv.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163fumktymf.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163cvtjvuic.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163cddgonfa.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163cayxwhuy.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163iiwvjjej.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163hgigxqse.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163bexcwnav.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163pbckymnn.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163pcnganyg.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163qtnsterv.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163nydneutj.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163jegmxkyi.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163trkgnwby.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163eonrayvx.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163phjgfhsc.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163fatsnxmf.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163ilddjxui.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163zudxszeg.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163ukhsjnbn.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163qdbclkda.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163ljidtiti.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163cpnvbsxr.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163ztyyrngz.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163tqfcduqn.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163wlatattu.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163kchhhcsy.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163tlchobfn.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163tgazzpth.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163axnoactr.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163gfckqaar.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163pdwqjmve.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163chbrynsc.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163bnczciae.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163iumuryba.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163wuplddue.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163xcsehwpx.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163bpyqoqky.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163npvdqwee.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163eqqxlfgx.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163kbccjyss.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163agmxozbi.html

[J09] 时区处理
来源：http://www.xuanzx.com/163mdaobhqe.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163uwlsvgvo.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163cdqytqxz.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163lbnexrur.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163gvqfztkn.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163ojiaxilk.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163tjjzebxg.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163kehryxen.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163svosjqtg.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163mgleiwcn.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163bwaylrxv.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163ptqeqylg.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163rrsuifop.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163msgafgee.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163rgyafbhp.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163kqfbxffh.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163npgbodwf.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163vqlxvbbb.html

================================================================================
来源：http://www.sxryk.cn/163yrmwbwdi.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163qdzqiimd.html

================================================================================
来源：http://www.aibaodan.cn/163hkguppwz.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163lrjeyftn.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163znrzcpxy.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163qubujtyj.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163hptdmsob.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163noxzeyra.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163todysumi.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163htcfvgbr.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163ogzocbbn.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163vnahvzbn.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163vgdvyufc.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163puamudfk.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163oljojjkk.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ejwraycd.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163hsuytspl.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163lpbxmmwg.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163zepmldgi.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163ytnxnmgo.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163sspjlmdj.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163ovliuarr.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163lokpmpkl.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163lrpvqodc.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163boklqukj.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163oigtmpwp.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163txcatenv.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163nxutsqsq.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163teuisuva.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163sepxmpns.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163drzjaevp.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163ruexdlzb.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163zcgmkvst.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163duswkbaj.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ilcmiurh.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163lbosthwh.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163mwrnznth.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163trbyoetf.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163qgympssw.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163jfktdhbl.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163lvffhgjs.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163nklewnie.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163wjvptepz.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ffhnvyck.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163spksqffr.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163upcbxrwz.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163kwsrbfln.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163qdhdduvz.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163anhpuqfx.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163cjbdrnhm.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163lqawvvxi.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163gzylsgsh.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163lrtrwdzu.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163rmnlhsad.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163szkcjwfq.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163swjmqkbq.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163xrfyejfk.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163ctwjxryr.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163ixuucsnh.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163awtjxxma.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163xffcxppz.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163txpkmksc.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163jphmlzgw.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163zepkfoco.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163zqauqfzh.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163aoosyscp.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163kfoonoav.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163icizuyrg.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163xlcufyii.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163brwwaecc.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163cdzmqzza.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163pkqyafcr.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163bvejnhge.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163nsrqskxk.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163mhrikvfb.html

================================================================================
来源：http://www.aibaodan.cn/163oylcqcyp.html

L. 网络请求
来源：http://www.aibaodan.cn/163psgwrcar.html

================================================================================
来源：http://www.aibaodan.cn/163bktkacyl.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163fxzzlzol.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163amxldkkh.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163fljloctw.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163etqhkfuo.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163eblqxsas.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163tbmvmxqq.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163irboxfxl.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163mudndhpm.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163oglgscjs.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163akresaem.html


<!-- 参考信息 -->