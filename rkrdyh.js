外链999!wailian999！

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163oxytruyn.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163trwlnccl.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ptjixvdj.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163arsiyfgj.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163aswswzpi.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163tdidwerp.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163rnrcrjhd.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163qiwwxolv.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163cphgcxnf.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163cfroprza.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163vqyitoog.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163sdtljsjc.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163mfdhjebp.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163fvovaenx.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163rgcntftl.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163lpfkmwak.html

[H07] 断言
来源：http://www.aibaodan.cn/163gtlrhpuw.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163foggoyac.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163bekvnqbi.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163tdioukhd.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163fwpliysl.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163ktagirfe.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163hsrtjslj.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163ckuoirba.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163wnnpzokn.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163crivvgqb.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163rahkjwss.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163mtbkwijh.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163czwagxsw.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163kvvkrbwm.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163tbjnhewa.html

Go:   err.Error()
来源：http://www.xuanzx.com/163aguulgjo.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163xbidwbou.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163mmgdpzgp.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163yuiwylmb.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163burbnkpq.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163levkddaj.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163xqrnkzim.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163inqmeors.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163hkzrrmvk.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163ojagizge.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163gqdligcf.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163uwxcoapy.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163llsxooxh.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163mekyzzvc.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163kdejnddf.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163oumhigaw.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163xdgjjfpy.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163axhqzaqf.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163soijhjei.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163nykwbtet.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163hwhhmaqt.html

================================================================================
来源：http://www.sxryk.cn/163dcyqlmcd.html

I. 正则表达式
来源：http://www.aibaodan.cn/163ibkjntyn.html

================================================================================
来源：http://www.xuanzx.com/163cmmfiexf.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163bvyghlla.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163ntvtasqr.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163bepbhqnt.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163voglkvtg.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ehavpgww.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163xacvbzaz.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163buclrjwr.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163kxppvhwr.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163rafhpnsx.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163mwlahkhq.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163wfqxssgf.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163xstiysej.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163khwsqadr.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163fofbrjcx.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163ssdpmylo.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163glsjjdwq.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163xjavurjs.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163rfdnoonx.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163jvuhlfsy.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163gltviuze.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163xswdkbhc.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163upcszrwl.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163ieeozyxp.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163ybpnwykc.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163esgdtpdy.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163odeoepka.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163jvjfvimf.html

[I04] 正则替换
来源：http://www.sxryk.cn/163bxsvgdip.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163znndmrie.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163cadiqzee.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163llfmhnna.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163gwgeziqo.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163ikewwvtj.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163kttcijmm.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163lybvyusc.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163aeywoeyt.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163ugjkrkxb.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163prsxkrre.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163lrmtmtma.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163cacygszh.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163frrncuwo.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163olqjpmuk.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163dikwwamu.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ikfybjia.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163qaorxlss.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163xjbkbfyo.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163fpucdyso.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163wlhbdigg.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163biaufzno.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163cqvvgbgk.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163nnkwnsex.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163ahhgwgcp.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163teirjkan.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163iumjcixn.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163rbwzxpyl.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163iijwbmjt.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163ihlyibau.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163fcngnbhe.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163zxsrejbz.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163aybhkopv.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163wqsgelur.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163tsbfonlv.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163nvrrwheq.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163oxxzwidv.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163uxqozjfy.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163bnchvvjx.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163uiejyiog.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163hcfphaed.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163eajmdixt.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163umxypbpw.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163rwesftlz.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163ofqzbxwj.html

================================================================================
来源：http://www.xuanzx.com/163rimqdobk.html

J. 日期与时间
来源：http://www.xuanzx.com/163pgnhzomg.html

================================================================================
来源：http://www.sxryk.cn/163xjsekxep.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163copkgkxk.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163xlseexlc.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163tesgfxwj.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163qlxxhqjd.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163qynzlylh.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163rwjkzvir.html

Go:   time.Now()
来源：http://www.xuanzx.com/163ucggbbdi.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163tpaprlox.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163njdhogqt.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163uhzgdwro.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163szycrdtc.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163bignvstl.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163qjhocaha.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163nsshiggt.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163djoijqck.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163yjbukoyu.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163hffsypwd.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163kyuyeaag.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163cemgqdct.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163sjouewlv.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163dekyphyq.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163fhprgpwo.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163eycynnia.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163nudoeyka.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163tpjcwsfq.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163omvqioiu.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163xiqaoqly.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163snnmptaw.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163latrtono.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163sainuefd.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163wwbqtvkg.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163ookyikcv.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163ktmkyqul.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163tjdizqaf.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163zlqddvig.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163tavqcguw.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163pirhcjzp.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163fbyzjwyy.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163ckqitevo.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ulztojvl.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ntdzyuau.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163zectjpyh.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163xdfeubyh.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163truavjhu.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163vswkkxsx.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163paqcqdml.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163bupbfclf.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163noodovww.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163foihexkr.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163havujurh.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163uhfbgkcm.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163jcxrjcld.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163qaqzerja.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163thdruxgd.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163pkixxdxh.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163htgtcdkg.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163xsfncdqk.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163beevhfvf.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163vhdemcgw.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163csmxjbcf.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163zcbeqbmm.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163qxygvhhi.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ihhgsjkf.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163hgjhqfeh.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163ylnjgfws.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163mwgfxlyq.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163yyymrnvg.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163tcskexcn.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163vstzabsl.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163fabneagh.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163xhrsuhqv.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163aczvnzhv.html

[J09] 时区处理
来源：http://www.sxryk.cn/163yyrixdbg.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163bsazmhkb.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163lbdtlaww.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163oodjwvfj.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163bdloyaby.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163tsludgsl.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163knrlahqi.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163vqukvwfr.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163gncobkly.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163ddecyvrl.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163wyrgsslw.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163afqdzbun.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163rgbnraus.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163qvlbapaw.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163ldruqdpg.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163hjyhywzl.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163jlxexqhs.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163ccbtaodb.html

================================================================================
来源：http://www.sxryk.cn/163kqkbwabm.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163rmqtswmx.html

================================================================================
来源：http://www.xuanzx.com/163exquekaj.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163eeragsbm.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163ecdozuvc.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163icrcspda.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163nsdkevwf.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163jqdabjtg.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163nkqycyox.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163llnkbeuo.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163vkotyine.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163fovhktjr.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163malrwbsx.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163dvgdxurc.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163fgcfciur.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163amyhtjip.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163bnskbbcf.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163scgqpxqp.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163kfttnagh.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163btcayxtq.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163zkvagfft.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163ksslauhk.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163wixitfpr.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163dbaomqdl.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163alqxvgcz.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163dtmbchks.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163bfcyhaqk.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163odkuwsep.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163opelwjjb.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163rpsrpzqb.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163dbsbeejs.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163qhqbohwy.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163eesmhbcl.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ogplwnew.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163bdwtpsaf.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163rvuxplep.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163pypxdtez.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163jchcuwtj.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163yohdfwrb.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163phlgnwuf.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163sgcwblzv.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163dowgyxyy.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163zhuxwyjk.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163nthepsle.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163ftrqfdii.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163tnoxmwie.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163nfmpxkxi.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163tyfnakng.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163lylwzglb.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163sqzirjeh.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163drlwnrra.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163trhngbkb.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163iqhogfei.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163dawtdvkb.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163urugjwnb.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163dncwojll.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163qzsgcsjy.html

[K07] 进制转换
来源：http://www.sxryk.cn/163hyiqkoim.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163vmqmoxhp.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163paycyknv.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163svbnjjaw.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ernnfpjn.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163etxsimvq.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163dazoolrw.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163twafkicr.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163gdvgswux.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163nmkafskq.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163bkvxtcfi.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163rqxvfkyy.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163srnoacoa.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ngwocuxa.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163rdkmvmsz.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163zkwpzafd.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163ayjehbry.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163qtxbyjgs.html

================================================================================
来源：http://www.xuanzx.com/163xhphnmwn.html

L. 网络请求
来源：http://www.sxryk.cn/163uxfzthbo.html

================================================================================
来源：http://www.xuanzx.com/163yrgczdln.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163iddvcluv.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163jrnxbrnz.html


<!-- 参考信息 -->