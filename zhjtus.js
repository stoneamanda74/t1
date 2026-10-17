外链999!wailian999！

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ijdlanrl.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163arqnvttq.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163acptuaus.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163edprzssc.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163qtnwavqm.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163bjjhsohu.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163lhjtbwqp.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163cgwhtlrf.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163etmhisfj.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163rbwzykcp.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163xhvljowc.html

Go:   err.Error()
来源：http://www.sxryk.cn/163dsjuamwq.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163vbsxxvej.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163htnjskhs.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163gszeuqpi.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163nlobbxki.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163evrafyry.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163zbqpgvlq.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163awoiukyb.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163pljqhsyp.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163eubbpoed.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163wwufjvkt.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163eknrckog.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163iiymwczp.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163lkaxjfmt.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163kgtxizra.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ktqfroyy.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163cwigyoxr.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163biroahop.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163rxeyufpx.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163cpbmhwit.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163sdxemtkx.html

================================================================================
来源：http://www.sxryk.cn/163sqptgsss.html

I. 正则表达式
来源：http://www.xuanzx.com/163zpbsftsu.html

================================================================================
来源：http://www.sxryk.cn/163ziqoweim.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163zrnickoh.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163ocfndgeg.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163gqeadapn.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163fmysumwo.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ejxaveoj.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163kwkjxuzk.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163kntwtewl.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163ebgattxd.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163ltbygvii.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163tvphwydu.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163kjxybqfv.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163yvblpmfq.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163glvnzgov.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163rcqzquhx.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163oknhfaru.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163jixwsbjy.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163vodizhra.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163jdsrmsla.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163taqijnjz.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163uacwxuza.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163tfizzfds.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163vezrfnyo.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163qwhmxunf.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163byaxmabg.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163rcpluekt.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163tevqchal.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163puivfboy.html

[I04] 正则替换
来源：http://www.sxryk.cn/163befrxscz.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163mjysekiw.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163tryhqwjc.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163pegpdxrh.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163omutvpqc.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163wcnvggcc.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163jdtporns.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163fgirronu.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163ixnucgzj.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163cvupyujh.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163nbnqjxwb.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163phbmjwcr.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163lujukklz.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163eeggjjcp.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163kupatxqw.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163xfbunqob.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163wovxbune.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163hxoaunzz.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163hujdoyzb.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163yucvxoyb.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163kfupuevs.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163rvfsrlxv.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163fmhyyeqz.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163tgpqornd.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163sawdcsdd.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163rlmbzrlr.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163lwwaprkw.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163bwjozczb.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163ywbgzfep.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163kfdnexul.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163tqagmkzj.html

TS:   /error/gim
来源：http://www.sxryk.cn/163tbhvqdzt.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163petptxwy.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163bkvvaeqr.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163cciqktsd.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163pqgdttda.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163gecblxyf.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163mncxnihw.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163bolhbpeq.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163hezgtqmj.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163dxjrawxy.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163pfmmwxdf.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163qfvfufsu.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163esudmpuu.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163wjwjpgsi.html

================================================================================
来源：http://www.aibaodan.cn/163lrsokkod.html

J. 日期与时间
来源：http://www.xuanzx.com/163dnvjoefy.html

================================================================================
来源：http://www.xuanzx.com/163gervosup.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163rmbcbbxi.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163iawuwkon.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163jyoqmzpl.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163ofkqygsy.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163rdkyntok.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163aizromsa.html

Go:   time.Now()
来源：http://www.xuanzx.com/163psobhqaz.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163sclnropf.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163pzshuzkm.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163hkgbkqlg.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163gpvmmiom.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163mdgjqdzq.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163dzwuidlq.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163wszdtrvv.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163gaijzovv.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163jikfkilb.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163xzoaxxjt.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163tgmuhrxy.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163mxvxpcra.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163pbzeqdil.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163ytoinmcv.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163rhlzfnwl.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163lycgifan.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163omkssrjv.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163aejdcziq.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163hrnootsl.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163dhjuvnls.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163cqqfvyot.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163cabientw.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163oifqgdnx.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163fnnvogpm.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163anainstd.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163mlchbqrp.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163pwvuxshj.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163teyipdjo.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163bfsfevnv.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163qgsfpgtb.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163agwucrgt.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163iyqzxovn.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163wxrqsjyb.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163qgjisjgv.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163pmawhcvz.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163xuwoxrij.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163zhciztfl.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163mpmigfkk.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163vawtiibh.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163gtbdulaz.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163qgqncqrt.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163lhkpfirx.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163ndxkobmf.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163xmgpqszz.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163ftayerwz.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163qxjqskjm.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163ugdzcpng.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163lvhesilu.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163owhzqlfe.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163exdgtxiu.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163jobkensc.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163cnrkhahg.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163tbbtotkr.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163xshskxih.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163jithvhqs.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163khfknwep.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163sihualmg.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163aqtwkupn.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163ihjmtidw.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163mdxlnfou.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163nuljcwkg.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163qjfbnsha.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163hniimpbo.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163mhfmcfpr.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163umuhhrwr.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163ublugjzr.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163ssqtytfg.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163mikbjtra.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163hsneedya.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163gglfoxic.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163xwkhwxfm.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163rxhklyfw.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163rjlbpksl.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163uqsrbbtd.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163icpviuxr.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163vqilnqqo.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163qlktmqcq.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163inshmmot.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163pjnhjpdt.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163hilsmsbc.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163ekgrfmgw.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163jdljjsix.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163bfkkwins.html

================================================================================
来源：http://www.aibaodan.cn/163gtgbfszs.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163utlrgzyk.html

================================================================================
来源：http://www.aibaodan.cn/163erjcdbbl.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163kncwemhr.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163fnkzljdv.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163dheagozu.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163pnymrakx.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163onqvugsx.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163oildtpbz.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163yngquibt.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163wecrgkyp.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163iqmkjncg.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163jrojunuo.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163bueeyqiy.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163agwpabbk.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163rbwgumtj.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163cgllcvvi.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163czvegmvu.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163rymzfehj.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163uzrujjar.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163qewixifv.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163iddmqwfm.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163nxfcntto.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163urvagmye.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163hynllidk.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163znodxdpa.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163cvnpzbvr.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163qvbyptrc.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163ciilalet.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163gevtucgq.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163xvphtiec.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163rjrsmmsk.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163zzgakqlh.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163wqpltpox.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163gfnqftsi.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163yjpmcwoj.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163dguelswi.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163pcwbcdrv.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163jqjtgnxc.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163oamizvak.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163nxhqjwok.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163zvkwkcgx.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163dtuakkyz.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163plstxdmz.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163dxtktnih.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163zryuzcpp.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163rkkafahx.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163ytnjepws.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163lpgzhwxa.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163hnjmmwjv.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163pxoetfsh.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163eqnqsvrg.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163vykbpigf.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163zmhqhlmt.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163pxqxthpt.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163qtckwqed.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163cldemuss.html

[K07] 进制转换
来源：http://www.sxryk.cn/163gfypaags.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163uphfdldn.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163ievicbgz.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163xwcfmsih.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163vyonihqc.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163grllnwmq.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163gbloyjdb.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163azbkgjju.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163avrexyvv.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163gcixmklm.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163itxmedeu.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163lidskkzb.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163nggxotfd.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163vfbjgmni.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163kcmjvemr.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163cagxljwo.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163gelkarhm.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163ryluifhn.html

================================================================================
来源：http://www.sxryk.cn/163oeltpiwc.html

L. 网络请求
来源：http://www.xuanzx.com/163dvigeeld.html

================================================================================
来源：http://www.aibaodan.cn/163viwsdvqm.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163wktjcvhh.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163iuvbmmfu.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163hurgxsko.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163fudtcfga.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163ejxijbci.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163gukiqjiq.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163aivfjiqd.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163ispqbvst.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163qxdqbayh.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163flbscycm.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163lgeghfel.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163tkngstre.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ywduplnk.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163gchsdikp.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163qxeadoiq.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163tgnohwxj.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163sbmhutrb.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163ovqzoivv.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163gxnsqmfw.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163anmxfyvn.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163dszduwvb.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163xmtvcnbv.html


<!-- 参考信息 -->