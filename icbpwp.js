外链999!wailian999！

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163skmqkiyp.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163pqcwhdqy.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163kcujoscc.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163gomiyksk.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163qyaorjlj.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163suzqgweq.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163inrptfmk.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163klmlhqrk.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163invmlwof.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163lsjqgxgj.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163bvrofjiz.html

Go:   err.Error()
来源：http://www.sxryk.cn/163oshwjjip.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163exlnubff.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163wnmhigya.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163spisfcyy.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163ajfnhtri.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163admucwnf.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163arcqjdzc.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163unyzfnxf.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163ueaigwge.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163vpxfovok.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163bwvphygf.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163tqemnjan.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163skjqeuqq.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163ylgefdaq.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163xquxclex.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163tfcbawvf.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163bmzgvxae.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163rbwepvlj.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163eixvfwmg.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163hubukrhq.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163osisrwbw.html

================================================================================
来源：http://www.sxryk.cn/163fisvwqlw.html

I. 正则表达式
来源：http://www.sxryk.cn/163zebpqyxl.html

================================================================================
来源：http://www.sxryk.cn/163bojsbcxd.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163xshshaid.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163vsxiektv.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163argtrprf.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163tbkpvbtr.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163vaarxblt.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163htisntaz.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163gccztxur.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163gfnxoicr.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163oqtlredi.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163ijnnhtow.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163pgwgguzf.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163vozumkop.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163affjxapc.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163mrxnqlwl.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163iedgdaod.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163krlzyyhi.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163psdyfids.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163pzorbyvo.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163fogbbhwg.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163kiwiwqeq.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163cpespgwv.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163kpcsbvpx.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163rmmcrdqw.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163slwoebug.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163tvdzrace.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163bkwqwgmi.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163atfpvzml.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163rvjuotbg.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163mitgdvin.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163zffsnofs.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163vtjxzhwr.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163ygtcsfpl.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163woqjabnm.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163jojvnukq.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163cpdrksyc.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163svkvwrsj.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163cmriuihx.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163gbctvjtb.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163aidsmguo.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ehgyyxes.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163plflqiuh.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163yjwvtmrx.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163pzimsaxg.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163nxnmqjhm.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163cimoonzv.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163miyfhbpx.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163urgkvvjo.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163coyaevhe.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163mrlsiayz.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163sbsifnoh.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163qtiitgud.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163dnsqiqbx.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163ixaxhsoy.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163qjcaykpk.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163fxfqdecd.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163ukrqkozi.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163hkiihtyk.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163imvlgzyj.html

TS:   /error/gim
来源：http://www.sxryk.cn/163aocolmry.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163dqdjkdpr.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163nxkgggxg.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163ziudmimf.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163fexttdac.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163bykvblni.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163rgqwdkkc.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163hopcymwd.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163fcottgbb.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163fgihlinv.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163klepsoew.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163nwyjramn.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163qjjzmvzk.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163gaqnneds.html

================================================================================
来源：http://www.sxryk.cn/163ksuodzou.html

J. 日期与时间
来源：http://www.aibaodan.cn/163zpgyuewp.html

================================================================================
来源：http://www.aibaodan.cn/163eqywvklp.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163kpalivxv.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163nlnmirpr.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163gixywqqa.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163solxkzao.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163sqngnvpy.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163poxrbvgv.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163rgcimjre.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163jkvnprxi.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163jhffhbwh.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163susvzoqb.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163hypqscdq.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163illcyuch.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163vrklsifs.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163tsfghgfx.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163jqyxclab.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163wmzujfta.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163hszlhlyu.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163pooksxiw.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163pctyfndb.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163bncorjdp.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163yertrvlp.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163nfostbqb.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163zemdnszj.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163erxprwhv.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163sgbppuru.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163bnmzbiwp.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163iviolepz.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163rnlzucza.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163zbtijokc.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163vxzuangf.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163buookzsd.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163dybdadbz.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163ppbyywcd.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163rhpucfjc.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163xgqyrmmh.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163ekpzklqg.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163bzzqdffr.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163zhfpqyrk.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163mdecfleo.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163vftbwtlw.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163rbjshelx.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163yiwtcsov.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163fxlzagca.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163cceolxlu.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163ofoktshk.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163xsxwzptw.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163ujayvpeo.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163wgartrer.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163xlcwcfee.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163chaxvnvs.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163uddutkgs.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163uysbhaak.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163yahysidy.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163ecabvzej.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163qrfnwzxu.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163tfbaegqf.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163pfvvlzct.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163lounxaym.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163rahpunqi.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163rfdfmnbo.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163xvopjufn.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163fzeoovhl.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163wehmtppt.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163mrdsnkef.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163rkwayves.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163hrqpndsn.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163mhyqyqiz.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163sitnpush.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163yvfykhya.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163jokzugkw.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163nhftwgyn.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163edpiabyu.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163csuzufxa.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163nwqppads.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163vjayikbw.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163bzgmcvsu.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163usachnmf.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163mlcjinof.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163kidadzcm.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163lnuakwgn.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163tjbhpzxr.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163awzxqpyt.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163thsoraqk.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163cmgtrtpa.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163tjzlyscp.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163vkoonzcz.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163phyiyxlt.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163cmuqlmgg.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163rwuttjol.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163zopsvejf.html

================================================================================
来源：http://www.aibaodan.cn/163rlwcekii.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163bhzwvlvn.html

================================================================================
来源：http://www.xuanzx.com/163qkubinvw.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163snmsrdax.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163jfqpfjyc.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163lijnqwkx.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163eekdcpil.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163vabduwrg.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163hfxzgazr.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163fabpultb.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163ragrducb.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163sygczjpe.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163zvyzrman.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163ywbdpstx.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163goolebpa.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163jtpvnjal.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ljfuixyl.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163nvhbpmlc.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163nmqcsbzp.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163hjanqqps.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163ygzldgzl.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163aqrdzajp.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163rumsadnb.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163dlzktfzg.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163cvsumrwh.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ayzjfzhp.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163gakxuyni.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163bycdiggd.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163zhhbshjc.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163aggqixky.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163kdpccdtt.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163femlznkl.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163uvdjqifs.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163jlkqijir.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ichwvlan.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163otleuynk.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163objaambn.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163dayvadre.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163ruiwdxhh.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163lxhewsmp.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163kgddxrcc.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163arkhhplr.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163sfwrwush.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ipvadsnq.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163xoacmezo.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163feqbidfq.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163vcxghmos.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163cwieicdl.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163ysaavxda.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163ewebouup.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163jwpeyoqd.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163syjzomdk.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163dafiolxg.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163bfbgholv.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163cbemcmmj.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163vimfvakp.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163apkoejkj.html

[K07] 进制转换
来源：http://www.xuanzx.com/163yhyvbmhg.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163fjuxsivk.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163ewcsufqe.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163dqikpvwl.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163kxjxaqgs.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163poexvlci.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163uxkhwshg.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163blvvpbxt.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163htpknqkf.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163jltukrgz.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163dphprxxc.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163hwxbkgvl.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ablhwvgb.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163qvozlqxa.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163pzzedrfv.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163rymazrjn.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163vpagbqwy.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163qlchyfji.html

================================================================================
来源：http://www.sxryk.cn/163ldiarskb.html

L. 网络请求
来源：http://www.aibaodan.cn/163fmfibfuy.html

================================================================================
来源：http://www.xuanzx.com/163izqmfuen.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163bdhwbyhl.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163erwuzbua.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163wftmtdxe.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163jgxwtail.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163npziphga.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163otlfawjl.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163djcemsav.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163itpkrjug.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163yodstbxm.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163vxefnrvh.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163egvtjgys.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163yoqfwxpb.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163akqlhwcq.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163uumzbmct.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163srpifwdm.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163angugtrz.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163hiuthvnw.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163dkpqjqhr.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163suiaepsb.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163ncedmolf.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163skawmyek.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163jqiolowd.html


<!-- 参考信息 -->