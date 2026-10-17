外链999!wailian999！

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163ktsuayzn.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163lpqkodju.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163ixjienav.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163aupuiuqm.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163puigxqfb.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163hjsavdng.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163mfgsysen.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163itjqxmqj.html

[H07] 断言
来源：http://www.xuanzx.com/163prcewaeq.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163wtiifuuc.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163hmqxihgq.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ljalaeub.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163qidrntxm.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163lwdqvulm.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163wtypaejo.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163uiaxtudn.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163sxsytezr.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163ikbkujmh.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163qsaiyvho.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163ggpcxkux.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163zcoyabzi.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163rxzehvxc.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163bcwkubrc.html

Go:   err.Error()
来源：http://www.sxryk.cn/163vuyuowmi.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163ixorbhvr.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163kbcrpkzf.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163upoalwkg.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163gfjqctpz.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163vazyibqn.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163amirlczu.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163zvtshkzq.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163ikbjwmka.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163npwptvoh.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163lnacoafe.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163akmddexr.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163snwquota.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163cuqqedvs.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163yikszacd.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163lanewdff.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163iuujxvjt.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163gmwwlxvc.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163klayspkb.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163elpnelyp.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163unpzepsv.html

================================================================================
来源：http://www.aibaodan.cn/163iwsztgpa.html

I. 正则表达式
来源：http://www.xuanzx.com/163zeaeodzt.html

================================================================================
来源：http://www.xuanzx.com/163gskmpmzu.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163zllxavue.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163tisworwx.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163kbdhbjjh.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163nlbcvgqk.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ccxtkaym.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163wpsobnyk.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163bosadbqf.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163oevacuiz.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163vqjreviy.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163viffliuf.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163dbojouvi.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163jwxsdcrz.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163iwbnbvtp.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163mclmzfnm.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163azbdamqa.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163kwvtguub.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163cdisobfd.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163rhmtkdxl.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163ydjfuddx.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163bhhnxovw.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163mtobsyob.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163zyvfhcvi.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163wmcdckye.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163gcgsipop.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163horfukoc.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163fhrpuqov.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163pxmthpuh.html

[I04] 正则替换
来源：http://www.sxryk.cn/163qpbemfnu.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163nosyacsi.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163qzxhiqqb.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163kdkrwffk.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163vxqfwcwp.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163fuaqsgmd.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163fvqiphlr.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163vrnqwmso.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163hfbfjjle.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163hwozawts.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163rswzsmwk.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163bwhzqqbp.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163moswoftm.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163yfuqshes.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163fwiczuvx.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163jiwtihcp.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163muzbafyv.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163xjbjownj.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163lbruqnqd.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163kbqsdvan.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163hsltmqzu.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163madoykfm.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163dmxftmsm.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163yvqionqa.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163bstguvjy.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163kwgqtpnq.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163kohtpups.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163hcorcyev.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163uhywijma.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163qynipxar.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163iufqkttk.html

TS:   /error/gim
来源：http://www.xuanzx.com/163vfxehjmn.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163bfcadjyj.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163bpeqvjmg.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163bxxmiyxn.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163xsxiegux.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163pwzypodi.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163zrusfvqt.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163btpzoawh.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163mghkgtkl.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163wzcmocfy.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163vuwyneni.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163nnyexmbj.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163pmqhhzgn.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163npbrnsco.html

================================================================================
来源：http://www.sxryk.cn/163wfospxfg.html

J. 日期与时间
来源：http://www.aibaodan.cn/163boicucdy.html

================================================================================
来源：http://www.xuanzx.com/163lgqqqmau.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163kmwylrrd.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163gwukewhv.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163qdkpytyh.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163rotttair.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163lyslsdhe.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163vtmwcwpb.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163ybvwylhd.html

Ruby: Time.now
来源：http://www.sxryk.cn/163flyhozsd.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163pufmhtij.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163fdeozgkm.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163cqlyytnv.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163laraypzw.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163lscdnpea.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163vvamwsgz.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163gsamqkyj.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163gnqoprau.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163fygywnah.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163fbjfgusw.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163mnnklofz.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163dirqhzjg.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163timpdait.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163kxjxumzl.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163qpdijuwi.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163piolffsh.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163kcbtkxkv.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163ltdwftdg.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163nixdfucd.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163lhiamhqx.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163gjinascd.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163jdiretcv.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163ibyfdokf.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163xcnvnxwl.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163iroyonlz.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163rperwqnj.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163izhodlwa.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163burqyrqy.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163kpwmooua.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163shktgvbr.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163usubxvpq.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163szbqptry.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163avkhtvca.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163bnmejycj.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163fwghzqni.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163axfrpgzr.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163atybokyz.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163qcxpjqab.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163lfnchmle.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163lpknwwmj.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163vzzekpfc.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163rvkammrz.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163pvqbryvj.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163qhhmxjgs.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163yfklzblg.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163fqiniaad.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163bwrrqlbx.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163htcpymdu.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163hydbawow.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163lsgjjmuc.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163mozjfcmz.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163rtrguilu.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163nevzeiqz.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163iiyzhgtu.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163hwolphbf.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163lpzvkbug.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163dmboadaz.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163krspgkie.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163kbttxuli.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163kvfuhgrq.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163xhetpmvg.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163zltslscu.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163jmebfjxx.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163smoccbjv.html

[J09] 时区处理
来源：http://www.xuanzx.com/163tbggnjvo.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163tgkgscuq.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163stflttic.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163tgucfknt.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163dzlrbwpd.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163fcbzvnjj.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163twbtjyym.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163mmzkdurn.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163uqluooov.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163zzfnvcwe.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163mgjsfhgq.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163ucishlmm.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163cmxktswl.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163ehaepbak.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163jrtlmjbw.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163jaikhoic.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163eirdascb.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163kaeqsbzu.html

================================================================================
来源：http://www.sxryk.cn/163ywawdrhj.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163ahqboybh.html

================================================================================
来源：http://www.xuanzx.com/163nyctklqc.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163cayhuedf.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163cvlwkcvk.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163dchcxjfk.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163rqqoqegg.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163toqmadjq.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163mgcwbtsn.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163shtzsnmb.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163mbyqfabu.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163eravubji.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163awbkfwkr.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163ukginykq.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163khvdgxjl.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163jjazuska.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163lxyemwih.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163ccicnpat.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163kmkwlffg.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163syysrqey.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163mwsmuqye.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163qtrwctpc.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163iyntlsck.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163szzlcxut.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163efaxappd.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163xhgdfyhp.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163ibwlidoj.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163echecqoj.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163aaeuoxdn.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163rpitndaw.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163vsbxjzaj.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163nqbzkrzq.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163uazpyhnk.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163jlkvkmwl.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163hvynkqow.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163bxbqrjlu.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163truhbiiu.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163jsifysnu.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163kxytkiuz.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163cbeseytd.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163wzhkmaaf.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163cygvzryz.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163towbckoc.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ukmkmmsp.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163dqqfzlmx.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163jggcyvru.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163qnlhqjhy.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163ukabuwjy.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163uezbomro.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163geiuqexz.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163yksqtbog.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163hulndgrr.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163qnnfvfwq.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163codkrbmr.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163fkocluse.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163jwkmoluv.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163hlbddeun.html

[K07] 进制转换
来源：http://www.sxryk.cn/163bkzejhgl.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163gvlqqpfq.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163yhhkhnil.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ywlkvrru.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163fazgxxar.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163nxeefkli.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163cgtpbzwd.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163nbgbxdrk.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163ezwaphdw.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163sfaddcil.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163yorcpyrz.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163ovzxqeat.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163bzwiclea.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163nsftkgwe.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163tizxjnxf.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163plvddsod.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163zufoaovj.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163ewyhcrqf.html

================================================================================
来源：http://www.sxryk.cn/163snvnwcwd.html

L. 网络请求
来源：http://www.sxryk.cn/163esflyjjo.html

================================================================================
来源：http://www.xuanzx.com/163xmjuvlhx.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163knvaddvj.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163mkazwqhk.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163scoyaxbd.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163urnqlwiu.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163rzuulyyw.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163vlenrkfd.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163furfkyji.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163oiqvmqvl.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163cafhobez.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163qcftkaef.html


<!-- 参考信息 -->