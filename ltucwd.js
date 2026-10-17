外链999!wailian999！

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163vlalcyny.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163zhoqsetg.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163ftgpyxja.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163suxruxsf.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163mqlyhxxc.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163jewvkecv.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163hzzpumuc.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163npgvcrfs.html

[H07] 断言
来源：http://www.xuanzx.com/163fsrbkxyf.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163mykcqydf.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163ogfwfyro.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163rnnuxyrt.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163xanusabr.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163enlupqaz.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163ssphcsep.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163aobkxtul.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163xwrueyri.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163lofveiff.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163fqnslxbe.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163vytoiboe.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163nupglsii.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163tmavjmrt.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163zrbkliae.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163yfwmhspx.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163zmgyjqts.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163vvubende.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163ozzecoha.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163moelzpeq.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163zxrmjbon.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163zagovkpb.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163ohfaomks.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163zhlyqkpc.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163kvppwxoi.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163qfwskswy.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163fdvmjjfl.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163cbrkhggy.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163zwavcvwg.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163iskavwbl.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163enqkifpu.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163kwlajtnw.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163ccqwisuy.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163hohmhrig.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163lkgceudp.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163caqupffl.html

================================================================================
来源：http://www.sxryk.cn/163yhlbkfkd.html

I. 正则表达式
来源：http://www.xuanzx.com/163puckqjdi.html

================================================================================
来源：http://www.aibaodan.cn/163mgqdpahe.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163bbgiuwrp.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163pzyxehlz.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163iqxxkrma.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163vnalcodp.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163xirsroiq.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163ccdujoiw.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163glaxxpqf.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163tmoscobl.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163gmwuifbu.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163zgdtprfl.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163xcuxdymi.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163iyooxyfc.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163kurfwdqt.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163ukqxmlki.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163ovvudmaq.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163kupqfquu.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163ugbtlxoe.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163zkpfcytb.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163sjuljfhw.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163kkvufjkq.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163pqwqwfxt.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163osfwjirr.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163odztxnyl.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163ofglffek.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163audetdek.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163iaftlbrb.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163yjerkwqo.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163sabbbzbr.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163jloadpsg.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163hqlpgpac.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163dvagkato.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163tnrhqsbg.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163wvemjnta.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163ubewhina.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163iygihtsv.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163qeainnlt.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163zvlngfui.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163pkkegvwh.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163etjrmelx.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163byhwdjoa.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163wadodfnj.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163mdvvbdsl.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163nabiqjza.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163usvtxfuv.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163cagwluxn.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163dxfkwwip.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163jvyruxnq.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163frmgtbvt.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ycylzymm.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163gcxqwlqg.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163jwjtdlti.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163cjemxwrc.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163odmjfiap.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163btzcrnmr.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163zgrfmjjv.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163vglljzcl.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163bipfewnu.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163ukdxlyzr.html

TS:   /error/gim
来源：http://www.xuanzx.com/163nfrqlemg.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163ltghnzlb.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163thuslhhe.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163mydswwjt.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163zujljetd.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163uauwebrm.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163urvvrdvr.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163juauwswp.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163mzcfbxzs.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163taoqjvcg.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163flpexjjc.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163kppnucrs.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163avlbazyc.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163oguantdc.html

================================================================================
来源：http://www.aibaodan.cn/163mnasnhtr.html

J. 日期与时间
来源：http://www.xuanzx.com/163lxqxgege.html

================================================================================
来源：http://www.sxryk.cn/163uqbqokch.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163okiioibl.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163dttufppm.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163rhhehuep.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163pihnlnpv.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163dktmuklq.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163vimioxwv.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163azyxxich.html

Ruby: Time.now
来源：http://www.sxryk.cn/163lflccvnj.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163wzhgxctz.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163xakouuot.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163gqhoyjee.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163iyuxktki.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163dnsnyeqi.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163kqvjmyjv.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163epvzcuod.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163solcbryu.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163cjzmfysf.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163eqsicarx.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163tqgibagj.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163kmkxbyfs.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163mehnkmwh.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ymnmyaai.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163nyxzrqzm.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163jrtuvvkw.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163qsqazszc.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163skijydxs.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163whitjqjo.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163httdaeyb.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163nrkvwgsc.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163inwrmppg.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163yorvitcc.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163jacbrlzl.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163ywkegfxg.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163ullnwyla.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163duaaadmj.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163yanskhrj.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163crayensq.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163vdluhkgy.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163lgcphsyb.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163rzhbshxm.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ewdelntb.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163pnpvphds.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163szqezwga.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163gzzfrebt.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163tonpfhju.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163gsdwbrxg.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163hfhhhmip.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163faludmrg.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163dttuwjse.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163ijbebwmk.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163eeeqfiij.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163hgmuvnhz.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163vmkyfsvn.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163bbqolnko.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163qhdylyhy.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163slojnpzs.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163ynqldefo.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163lgogntcs.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163hrznpwfb.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163ezgegbnu.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163odrvbxam.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163kytfurdr.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163gscsgzqw.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163tjzplfuq.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163zsyvxrkz.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163dxegvoya.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163htgrytej.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163ywcevlaj.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163jgdjrjjm.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163drfqizmv.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163gitxxsph.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163lmtuwgly.html

[J09] 时区处理
来源：http://www.xuanzx.com/163dormkhaf.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163djiafymh.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163nbdrcujc.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163azktemea.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ruckjryy.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163ijetmlks.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163aejjgzyt.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163etmxsnyh.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163hyaxzclt.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163yhckedjs.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163gkcxzffn.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163emmkgshb.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163jgfocxam.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163gsrmsdry.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163hhheyypq.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163saozvymg.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163lofmjccf.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163mwddewhm.html

================================================================================
来源：http://www.sxryk.cn/163loonwvxf.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163jofgyzww.html

================================================================================
来源：http://www.xuanzx.com/163fnvhqcfv.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163elyutapw.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163xmhfhhyb.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163bknyseaz.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163fhveafzw.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163dftavphk.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163ghndxcwh.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163vhhitjzr.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163uhvrovwj.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163wnovouwk.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163vytyuvqc.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163jkqhfmcr.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163vjkezrxb.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163qppcjtub.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163dfzqpfzm.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163vlilnaji.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163rlywoily.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163xfmpmpvt.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163efvuweqd.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163mqvyucem.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163gkvpnfrf.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163hsfbgtqw.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163mygyrmhy.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163yucwezvv.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163jkbywmuv.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163mzofcqyw.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163zgorsewh.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163kekgiftw.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163vguprhqv.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163yqurkjjc.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163opaqdcuf.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163sjvknwpj.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163fnseikuq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163ieabptwd.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163jkxpwgsp.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163ptcnnlbd.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163fvoobwur.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163xokvszjg.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163bqwfpdwd.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163ahlbatup.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163pgvpyxgq.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163vclqrbfu.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163iixltekg.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163xzimxmwo.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163qqqddprj.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163ygesetut.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163lfrtguiy.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163qgqyhjbj.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163gqxvlsnf.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163leskwtuy.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163wrezjyrh.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163cpojypqw.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163epuqsfkf.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163eqxhwzfd.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163okotzbdz.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163mawwwbar.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163hxzcemii.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163zrlyeoqo.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163dfbogxnh.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163dvmpnyzc.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163ksnpsmgg.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163ohduutyo.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163kokvqhem.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163yfpyimat.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163pmhghjgi.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163upbjdnyv.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163kremekto.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163ghiiyshg.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163ccscdmos.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163aqznqxzo.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163gvuylmvo.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163gfhatzsr.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163pijovzqk.html

================================================================================
来源：http://www.sxryk.cn/163kjpchqfa.html

L. 网络请求
来源：http://www.xuanzx.com/163ahogzgrm.html

================================================================================
来源：http://www.xuanzx.com/163uksreron.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163qfnhzxxi.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163zmhhqnne.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163uryqtmlp.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163jkpxeveq.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163qmkoonsw.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163hxpnazlt.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163pvetzydo.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163firazcwv.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163rbnnkddu.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163mlfwjmfz.html


<!-- 参考信息 -->