外链999!wailian999！

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163qjsqafzd.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163dwedgkhx.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163yfgtzhif.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163zdsxglus.html

[H07] 断言
来源：http://www.xuanzx.com/163lgmbjnkk.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163fbllrmkr.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163kplzwblm.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163edqygicp.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163xaippujb.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163lxhcalpj.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163pgpqwpri.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163ysdkpofc.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163aseyvmag.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163valotgcc.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163cztbxqbw.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163yhsdijxo.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163frmlkjxn.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163gdbmgesz.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163udmyxluy.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163xibvowmz.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163nyeqxruy.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163pptvtxdj.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163pvhwyqqj.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163mospmpxx.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163uccafsyi.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163lalpcbqh.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163hspdkbdz.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163ipuxhluy.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163evoaaaec.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163nngamvfp.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163tgvnhmim.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163gmqwvyyt.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163zlcmoerq.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163eeccxnkx.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ievwvzld.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163zgxtjsru.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163aexmlhur.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163gjknelru.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163yhhtflhe.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163tvgpevdw.html

================================================================================
来源：http://www.sxryk.cn/163ylykaiyj.html

I. 正则表达式
来源：http://www.xuanzx.com/163nlhywaqe.html

================================================================================
来源：http://www.sxryk.cn/163zoatwxbb.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163orvppswe.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163exnksqhx.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163wvdfltur.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163korampqh.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163tpbgsfwc.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163fqvperei.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163dimtkhow.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163wsjublqd.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163uymoskjd.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163cboqwvsh.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163cycljwsv.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163jdfdhydw.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163ehabchty.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163vxpvazel.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163cywylxia.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163nsatqund.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163ihnbrzck.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163zdlsvxuh.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163gqqfgeva.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163pcwjrtwv.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163jiaphycn.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163xroeeruf.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163gjfroici.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163xzxjbxhk.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163tjkadnbg.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163rgtiusuv.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163ysbgdkdf.html

[I04] 正则替换
来源：http://www.sxryk.cn/163motmwidk.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163lojlkzwz.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163vjfposdr.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163njzdxgde.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163clftaqbx.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163ryaawtak.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163pwokwijp.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163djzbbfwm.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163zhcprror.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163osekozku.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163qlteznph.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163bomkpwwp.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163yatjobzk.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ilgxvkvp.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163mctueqpo.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163nizabztx.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163vutylcsj.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163oyscidmz.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163uesithoq.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163zggqxxka.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163obkyjpaq.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163zxbdcrwu.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163crhjgglm.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163lxqieqhc.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163egqtegmb.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163whmekbdn.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163tdtcysar.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163hunnbkkg.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163rxsqlzbj.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163znlzddfi.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163hztrylea.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163nvmvxrxp.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163abbbddgy.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163rzmnrgaf.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163tdkdmafe.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163plmhedbc.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163rcddxdht.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163iribczpj.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163rkbugrcc.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163oqgkexef.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163iyhzpawr.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163bepasyeg.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163hxfdovmy.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163ziznuhno.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163xqemlrcw.html

================================================================================
来源：http://www.xuanzx.com/163tawqdfyu.html

J. 日期与时间
来源：http://www.aibaodan.cn/163fkzfjtos.html

================================================================================
来源：http://www.xuanzx.com/163gmtvsusx.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163ednzipxo.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163wtelaoxh.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ocsrrtnu.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ycceevat.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ypyfgojx.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163uochrolc.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163vahgvgcy.html

Ruby: Time.now
来源：http://www.xuanzx.com/163gbldhtjy.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163phaijjva.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163thvoyzok.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163dnoeprnp.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ouauagqr.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163kpgfhrvm.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163phawdwgm.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163fhgdmwfl.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163jwpawabu.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163skeyorig.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163vtnkhctm.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163erkfxfbl.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163lwyfztyu.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163ghkjjnsc.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163vhvcsxxe.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ytydxkih.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163bajkxxho.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163mwxtdzqc.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163tnusbdzy.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163robetzlt.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163tcipfwln.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163iwuutxvi.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163vqesxcqd.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163pgzhmvun.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163yxbhidxa.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163hcnzqsgr.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163gfanmzfy.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163oenrwzgh.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163yvhzdfqb.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163ygjjbuvt.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163joslqkgn.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163euokmhrh.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ccizqxag.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163pkxkyapp.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163jkyoorgj.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163kieoshgd.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163wvypthfq.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163lafuytkv.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163gsaoifve.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163ocsssufj.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163mcfpvfrl.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163odsegvyr.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163kfcyxene.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163qjrqdudf.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163empsxepb.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163dpsrxdtj.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163ctttdeie.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163fgqsbhkn.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163wxvvqnlg.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163wppdtgii.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163yfmxfazq.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163hsaegvnj.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163ruytimsk.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163nnwevbss.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163vbidvhco.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163nirzjqak.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163uhvgsdnm.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163upeibrzd.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163blhxigco.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163hoafqclp.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163ndejqwlj.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163eglkrrhn.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163pcmokkcl.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163ytnzpxzo.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163tvdoguvz.html

[J09] 时区处理
来源：http://www.xuanzx.com/163pwhbkpwa.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163ckulpyof.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163skohjqjh.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163gvxpdeev.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163tntdsphf.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163hqkhqoal.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163eenryive.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163ngtjlfss.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163ytrwxdoz.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163orjxmvfn.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163ztgsqhii.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163qxokmjnh.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163bvyzxxcj.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163rynabjyj.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163dwnzgvfk.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163nzadlbth.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163tiptijse.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163ebvgfpbs.html

================================================================================
来源：http://www.aibaodan.cn/163ywcrqbxq.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163grseezxf.html

================================================================================
来源：http://www.sxryk.cn/163wmeqifra.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163rrpzpqvd.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163lloejrwr.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163bwqhaxjz.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163cvhjuqkd.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163jqxmlnxq.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163zjwkuxhg.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163qufuehkv.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163nfjakpxs.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163hfonnyqv.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163omedjqyy.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163iccxrrht.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163bdnjdcvb.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163xfojgtlt.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163hwaizxku.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163ypudykgc.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163wvxrmqew.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163jxvkqidx.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163uxwzfwxl.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163vldqwhfq.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163cmntlgip.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ffqousjh.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163xkwaxndm.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163bksbjdal.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163daypdizs.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163ogontnyj.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163etrcmknw.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163hhyzlurx.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163puguhknm.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163zcdlgkzx.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163afldkjgx.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163okqxflzt.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163fitpigxw.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163zgpqlutt.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163etyqbbgp.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163wvrwwwvw.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163niebhppk.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163jmndwqko.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163eocnstva.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163qfnpxbbv.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163mwqvduti.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163liygwfwt.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163moilldey.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163hoxhysny.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163pyvqodid.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163fjnrgavt.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163kpdsutwt.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163nvbwlysa.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163qtojzndq.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163jafwnlto.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163iswdvsnf.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163obakatnu.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163zxzqjmyo.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163akvehbrj.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163xuzscrss.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163prvbvhwt.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163vlztavip.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163dechrkky.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163fazjbdwk.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163exfujpxp.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163qgwhurei.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163ucgkbzmi.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163uspadpwe.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163subtsvtd.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163zmrkwvjd.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163ifffqwmr.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163obiweizz.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163bglthant.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163puorlufn.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163mcaaafps.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163kjdjtvdd.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163zteeiquz.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163ceatflqb.html

================================================================================
来源：http://www.xuanzx.com/163nucktior.html

L. 网络请求
来源：http://www.sxryk.cn/163hmutcycy.html

================================================================================
来源：http://www.xuanzx.com/163doikktrt.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163sxnuqwwq.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163orcpzpkl.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163aahaviuy.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163whhfzlhx.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163pofkihia.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163wdapqdlm.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163qzafllib.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163xxelvlut.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163ycyrbopa.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163tjcoqpem.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163rtrvvnqg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163ekzkzkht.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163vknagfyl.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163vktaqtnb.html


<!-- 参考信息 -->