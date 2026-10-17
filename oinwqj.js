外链999!wailian999！

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163lzpbhxjs.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163yhinctmw.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163icogrsxo.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163koyihxwy.html

[H07] 断言
来源：http://www.xuanzx.com/163kjswvouh.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163dufexjjd.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163atpsqhgs.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163pmxpuysw.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163drojnbcp.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163tbkzzxmy.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163dqxarbkj.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163xstaeaoo.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163iaasrqvx.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163asidnbww.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163dqcuxbun.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163pnhcktmr.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163mjjycxnz.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163wmjspvpp.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163qkbzlsoh.html

Go:   err.Error()
来源：http://www.xuanzx.com/163tndnkmrg.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163yyytnqac.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163mdihhsdp.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163kublohqa.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163srdyacfp.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163hzgvwbeo.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163swyiepoh.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163qnmmkacj.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163bpfvhcaj.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163hdukrlgr.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163usvflmsc.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163rfwykdsk.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163rfauyxch.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163nuugqvgd.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163lobtddsc.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163vbshiuiy.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163uyawggna.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163mxkfnqoc.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163xvgdfrar.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163ogchmfqs.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163tcskmjhz.html

================================================================================
来源：http://www.sxryk.cn/163lurmxxdl.html

I. 正则表达式
来源：http://www.aibaodan.cn/163tawfxbtq.html

================================================================================
来源：http://www.xuanzx.com/163kiwlwleq.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163wxbwgvqq.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163fvzwudhm.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163pvaqfanu.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163pqmvlmbn.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163xwpbhnhz.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163htbytbhg.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163alpmhrko.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163ghraxcnn.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163usqnkbzg.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163llnosgil.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163ejibsoqk.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163jvergynj.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163ibneqejb.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163uvsoddcg.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163xjrylifd.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163yzhlfcsw.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163mxxqvdca.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163dfeexkny.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163dzumfvhc.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163vhqallmb.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163xuiunfgq.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163maxzsxnb.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163ekywemyl.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163pejfwhpd.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163dashiwdy.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163bybwzcai.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163vsvvnbnm.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163bgjzcqdk.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163jghemrbf.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163gdrjkuhf.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163kmlroxmq.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163poxyphep.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163mhuznfph.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163znfvggtf.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163orzjgsyy.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163zmjnhcmu.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163mdoygsgc.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163wwsgrjcm.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163ipludzqb.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163yvsnlouf.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163aptiqwzi.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163vkjbfuey.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163hezuzubc.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163dgrpclzm.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163oqljipcn.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163yvopvcsh.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163tlgicfnw.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163esybxknp.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163hvsorvte.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163xhduoszd.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163ryxcurwu.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163erdkajhg.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163nonbpunv.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163rwnfuxzy.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163oleldnxd.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163nmcaajhd.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163jnhmourl.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163bdaoivpj.html

TS:   /error/gim
来源：http://www.sxryk.cn/163jsoqwipx.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163qoajapvp.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163ueqldybv.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163auurzffx.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163thsypkrw.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163dytqoyej.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163imznwppw.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163czmmcwtm.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163pbgqeuug.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163djbwvyyk.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163sfvvujbt.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163waapdobr.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163cziiiswe.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163ijvyjeei.html

================================================================================
来源：http://www.sxryk.cn/163wtmczeao.html

J. 日期与时间
来源：http://www.aibaodan.cn/163chlyuwue.html

================================================================================
来源：http://www.sxryk.cn/163xdxrstpr.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163vipqtudi.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ijgjpgce.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163msstkufe.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ttihozci.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163uvtejqfa.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163sendxjto.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163ngkonobd.html

Ruby: Time.now
来源：http://www.xuanzx.com/163xuqbjazf.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163gacwgxiz.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163wbaxnyby.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163xohsfeeq.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163frrpxufw.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163yeknjuvg.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163ouvjlxkm.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163avczkcey.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163olcdkuvf.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163nqpkoynv.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163iumghjft.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163rosymezw.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163przjcojc.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163mueuceob.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ihtphzaf.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ttnqddsg.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163xfswmnvc.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163mvcnrelq.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163fxnmybph.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163vsrlwfrm.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163agpwpdlf.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163vdkynjvf.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163pltezdxi.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163edhsbioz.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163pyztysou.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163qkdszcbd.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163puebubsm.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163tetemtkx.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163rbkawqqg.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163sjentslw.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163nthhadkc.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163hpcdalyx.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163atgjpxzz.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163iceostba.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163bgoefpgh.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163xblixlks.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163igywhfto.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163idkbioqj.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163xuqyjqdr.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163faiaqviv.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163iroakhhw.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163kvelggrx.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163hynblwof.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163cfsjhevw.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163quidemop.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163vwuagehu.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163ycuphqbm.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163gddsopel.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163jlpjjmii.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163oxpwvjpi.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163vnjglxrc.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ajdyckiz.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163yxjwzfpu.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163tixvyoxm.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163czzgpjfu.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ymefuymh.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163rlriamys.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163blohfjmt.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163sgzfkjlc.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163zivgtgnf.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163iijggqyi.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163ixsrdlsy.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163ecgclnyr.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163hzsiuvbb.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163qtbksxra.html

[J09] 时区处理
来源：http://www.sxryk.cn/163oxiexghj.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163vsyagcsb.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163difmtbps.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ibscxbgo.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163mcqlaink.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163cvyvrhxy.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163rtaxqwso.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163lizwkktv.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163zeifubgm.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163vtmdrlhl.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163phszuqpr.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163nhxoghio.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163wlswejyi.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163dcyqxubr.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163dqvmrsyb.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163cqokotag.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163xdfyvphw.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163nrrxmtan.html

================================================================================
来源：http://www.sxryk.cn/163rlslxamp.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163yqnoekkj.html

================================================================================
来源：http://www.aibaodan.cn/163ygbwkglu.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163vlbqrreh.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163erzowxub.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163nwsmglgo.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163kdocevof.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163qaftccmk.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163yvrolexa.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163bkovauwr.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163umfzjhok.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163bnvzdkwg.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163xaxkmfko.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163tthxzjfm.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163trmueexy.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163tmxwyhko.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163gfwkwdhm.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163uwfcuksb.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ozwxomqt.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163byllhbzw.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163cmtvqzlc.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163jaqxkmyd.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163jzrantpo.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163bxlgopms.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163nkkatfwl.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163hrmxlrgj.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163qxxekmns.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163cioolkhl.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163ukkaanwv.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163tdfdrhyt.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163yhpcbubp.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163cryyezys.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163plupxesg.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163tpsqeihx.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163uiasnarj.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163pchvcawa.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163dzalcmer.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163tlzxnjis.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163qizvnjlm.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163xismozpx.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163zjpgqgxv.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163xqlezzpj.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163dchgstua.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163otecnlhg.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163olgptglj.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163yimfisut.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163olbmcgak.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163yprtycjz.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163hodbcjts.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163woynlcdm.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163zyujpesb.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163vhllgziq.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ctqbuone.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163qnvqkwvr.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163dljbilzw.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163dsrkomtg.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163znyutzmt.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163xencdgat.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163psezrsqm.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163qevgxync.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163eydumjvu.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163bulpulne.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163tmxvrurq.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163nonylqzk.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163ataejbbl.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163qvnsouck.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163pqmcnofw.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163npswudfz.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163omymptje.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163sihdanel.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163plrtqcsj.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163fcajdsot.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163adothrpg.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163dicgqzcz.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163dpqezslw.html

================================================================================
来源：http://www.aibaodan.cn/163tcxhhlco.html

L. 网络请求
来源：http://www.aibaodan.cn/163ewyghhma.html

================================================================================
来源：http://www.xuanzx.com/163vuduizyy.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163imjeevvo.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163zxylihsj.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163mjixwqip.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163axynbitu.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163xbznysmp.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163vrcofqlw.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163ahpjcpgg.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163wdkjwjof.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163ixxisdya.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163cvjeupwi.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163atdjdnee.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163jcgxcwov.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163sgthtkae.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163elqtjhee.html


<!-- 参考信息 -->