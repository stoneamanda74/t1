外链999!wailian999！

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163grdamwft.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163jtshllyw.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163vlwupvam.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163rzrajvrm.html

[H07] 断言
来源：http://www.aibaodan.cn/163zbuymxdw.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163ozmvlgsf.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163srdnfzpp.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163zhxjnygd.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163rgqiplcv.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163rxocyseu.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163hcxycgoh.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163vlagjjnz.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163oddcawwf.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163ajtafitv.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163bdehmjxh.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163cwblbkkx.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163jqllvcto.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163fjrwkfkj.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163yaqevwlw.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163zhcbpxxs.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163upxkrhyi.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163mbninvlx.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163vebusuvt.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163tzimiwvj.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163szbcfgwc.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163vepiwaiw.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163lbaskmuk.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163oebylnmu.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163becvhlbh.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163zcoqwwhn.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163gyvxfkeo.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163jcmviqsm.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163gusudomm.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163ohoenqxc.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163syzcwsrf.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163rvvoocbh.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163rqdjjedk.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163kskhlauk.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163asgyxwbv.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163ploxesar.html

================================================================================
来源：http://www.xuanzx.com/163eumwzxmq.html

I. 正则表达式
来源：http://www.sxryk.cn/163uvhwxdwg.html

================================================================================
来源：http://www.aibaodan.cn/163wdxbindf.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163obktlfld.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163wqbugtar.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163zljjhdxr.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163oghgyqxq.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163itagvlrm.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163dkxubyyn.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163imczzimi.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163wnyxnmty.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163nofjkema.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163glxfvylh.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163gqdtmidw.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163cxzishxo.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163evxfagtb.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163awauhvox.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163lhqjwpgb.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163jzxqhrga.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163mbcvrauj.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163kukshpaz.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163hkwywcub.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163wftkrhfa.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163aumfhqtx.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163pfjulxzx.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163nazlsrhp.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163ajgwjqiv.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163egekxccs.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163htqmrxar.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163wgbhmuwl.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163xkwyyndr.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163mlikrils.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163rflqqgsu.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163cudwohol.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163sqwdukwb.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163ftrcpjji.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163subykrdr.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163lzdyrqar.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163gqcgvsuc.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163upgysylr.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163yqdcopim.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163qzdbhbza.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163jbnqbjzt.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163esnsxgcl.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163zdinxrxk.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163yjijtxzf.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163onozxnpr.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163cmxyetiu.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163kxklutbf.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163hnytbavj.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163leknjamq.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163viyuimti.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163gxowzufz.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163dgagwfkj.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163njzvsrzc.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163hbrxmtmz.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163vztnxbup.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163vebjqgrb.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163kssjnpyo.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163hlpukqcd.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163fattjpdo.html

TS:   /error/gim
来源：http://www.xuanzx.com/163liseumat.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163iadtflyo.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163hhavqpcy.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163kgdyplgn.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163piaemcat.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163aylfhufg.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163nyrmcjnj.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163ojxoirsd.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163kgnlygmd.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163bfghiamj.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163gauwjidg.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163wbayaixq.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163jqdwzwvf.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163pjgfgete.html

================================================================================
来源：http://www.xuanzx.com/163pwdhfjys.html

J. 日期与时间
来源：http://www.aibaodan.cn/163ggscofuo.html

================================================================================
来源：http://www.sxryk.cn/163vgwupiww.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163lbvdtbni.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163ggqyvjbd.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163hilnzsmo.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163zpjvzeor.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163nvkjhkfw.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163erqryxzx.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163heyikmtu.html

Ruby: Time.now
来源：http://www.xuanzx.com/163uvgbccww.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163omwxeclg.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163sbtdvgav.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163xjefixla.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163wgloiegm.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163mqodiedt.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163rubdwaml.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163ycczntgn.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163uhyxsfjh.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163oajqsbln.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163daiavpbf.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163zfkubcoq.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163mlbclpcg.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163uifkfudc.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163jzmehqcx.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163bqleaiea.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163sbsdojvw.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163fmtgkcoy.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163fpguqndm.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163woxacowx.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163syqruhsl.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163zpjhiwbb.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163iexymyhg.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163iwgqxqqk.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163jpjkxaae.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163gubelvqy.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163lomrbrpt.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163mgpowmox.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163vmycotwm.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163rearyswt.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163piylapgo.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163pntexqeo.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163lrzcpsbp.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163adnqoind.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163dbdcfziz.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163fznhjepo.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163jeakmnpw.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163ufyxpqom.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163hszjrelh.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163hwtgdkyl.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163xpqlrexk.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163ypodchrf.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163pbwxjhjl.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163svxiyboj.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163cecqpwti.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163tmwwckyr.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163vyahvzto.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163wapekhwr.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ollcrtmh.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163dhgithak.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163oxruovin.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163deefeahk.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163wupurtbp.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163edzdrqsl.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163afpckklp.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163iajntjqo.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163yyccvbfl.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163enysxovl.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163wekojcvu.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163xaoerwyz.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163dhmenjtm.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163oprzlsvs.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163wljygiui.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163qtgjjrzm.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163vmcvzylo.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163zdlonnvy.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163nrnqhqfc.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163orpdvzxh.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163zxwyuuma.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163lekvyaik.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163xirudgnt.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163pybuumja.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163eozsvyyw.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163dbvovjot.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163udkajhgi.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163hzfkbbyw.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163byhiosck.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163rloxrzbn.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163pupbmvmn.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163himmtmag.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163ggnugrbk.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163vunbdelk.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163awrvvkxi.html

================================================================================
来源：http://www.aibaodan.cn/163uoahrosl.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163wzfycknl.html

================================================================================
来源：http://www.sxryk.cn/163jhrqslxt.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163pjhqfgkj.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163auydrbgu.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163czrbocbf.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163jrilqjxa.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163wodymzol.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163vqdbklwg.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163qnbrantc.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163jrhaqbrd.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163kkkcbfzp.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163xbbllpek.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163vnyfgjaa.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163ynkyhxkt.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163rflhdhxj.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163xjkercet.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163wsrnemiq.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ohgvinbt.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163qciameix.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163qkkdxbxc.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163flewmjwd.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163juiahyek.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163vibtmfvc.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163gxnesmgy.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163eyslpkft.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163enrdeuzb.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163jfulxolh.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163ypyvduop.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163nqniigeg.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163pyohdjej.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163ejgethjy.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163wpgzbzsw.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163jwmmrzmo.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ogrnylct.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163xkyjkskw.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163uqslohaq.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163eqbigjei.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163ndthuttj.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163plfqcjwz.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163cnhbdtbo.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163qvbthlnx.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163iznxasai.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ofycrcce.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163wylymjja.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163woblzvxj.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163wunjuunb.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163dmnsvsod.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163kglpeajf.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163fjfkzcye.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163slsaxkbw.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163nhgwzchh.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163zgyrukvi.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163vqunqvlj.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163msseqphr.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163phoiwvdo.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163kjpnthwf.html

[K07] 进制转换
来源：http://www.sxryk.cn/163fdqbdyha.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163eccypvao.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163japvlbbz.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163idqrjwkm.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163okfbhztt.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163fjubylgk.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163tppatqkj.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163ljvonsld.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163yoraecjl.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163ktjmkvwb.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163jvkwaqwn.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163omnewgrh.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163wadyaiua.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163avevbvhx.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163uxkgekvd.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163rlepbway.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163grmcfqsl.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163rdudooxj.html

================================================================================
来源：http://www.sxryk.cn/163pvecmeox.html

L. 网络请求
来源：http://www.sxryk.cn/163qzxhgbrg.html

================================================================================
来源：http://www.sxryk.cn/163qmcisupl.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163tjhuevig.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163fnrsfzug.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163mhqjraqq.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163xzgmupuf.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163fdjcodfq.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163hdfujsng.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163opsjjmwv.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163aaigvatg.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163rvpiobgk.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163wenekdly.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163wpupyrbg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163cvzqklhl.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163hwqwgjnp.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163cdtfnnui.html


<!-- 参考信息 -->