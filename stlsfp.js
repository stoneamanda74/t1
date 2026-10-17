外链999!wailian999！

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163uwhmpype.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163ljookwaf.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163jpoixndi.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163whdhgquu.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163zgjygjkv.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163yzvihfyz.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163vwsiwxss.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163aqfwamet.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163oyhjfjql.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163qxxmuwzs.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163dgltjxma.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163stiutaoe.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163mevxgpti.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163phjfztxu.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163vffuvayi.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163mhyihhvy.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163czentrkt.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163zpogtsvj.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163tzbuvflk.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163mqasknhk.html

[H07] 断言
来源：http://www.xuanzx.com/163whlbnokb.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163digikmns.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163tqdjhbbi.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163intijcty.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163zttftsye.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163sbapjgvo.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163cpzmphxt.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163pcmboxwi.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163abpimttm.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163jflvjrma.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163mzeuwivh.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163ragivapb.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163cxotglsr.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163wnzdenur.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163chaowbod.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163wejihorz.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163yryvngbp.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163qdjdpmoi.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163xxbzlrwz.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163hmdzlusv.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163twzjlqbt.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163gfkotljc.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163jjmtgcqn.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163bcujqido.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163ltjhwfau.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163jmeqwtys.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163wlglvdri.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163azxdbuuo.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163whugpxma.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163bkapcccr.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163stuabzhd.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163gkpyzqha.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163xisespxe.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163exeopaek.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163urhhwysj.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163jehumcqr.html

================================================================================
来源：http://www.sxryk.cn/163mwkqvmor.html

I. 正则表达式
来源：http://www.aibaodan.cn/163xtjjyvxu.html

================================================================================
来源：http://www.sxryk.cn/163fgazkrjo.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163toeggyxj.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163diupcrzv.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163gczkuxok.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163txqzizys.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163zclqoxyo.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163eurlvqii.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163wivlcvxa.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163pqfrmtrv.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163qchmaaol.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163jmydijhx.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163uxnhpoui.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163htfyeqwo.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163fjrbchnd.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163vapafgbw.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163aamaedun.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163npiezpua.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163dcgufnyy.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163notuirot.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163psywajiw.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163exgfopsv.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163lurnfruv.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163vdssvmyu.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163zengppvh.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163arnicvet.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163cfhvvlli.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163oguicbzo.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163gagqcksr.html

[I04] 正则替换
来源：http://www.xuanzx.com/163giqkbhyr.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163kuqmrzqf.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163nlsjurjn.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163guorrwju.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163rousueor.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163ghxxjfzs.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163mftfqafd.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163jyqstnvk.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163pekskttd.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163dzvceimx.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163paugpcvh.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163htdjuymr.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163bdaxcbkx.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163tkvrvcda.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163fyoykzqr.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163gwtjquxr.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163rfardptd.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163amujxfjg.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163adkeouty.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163yquwsket.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163fuitwbqy.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163xuexbscv.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163uxsvtgvk.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163gvnndcpa.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163tnxijeip.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163xztxqiii.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163xytylhto.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163hafbdmrl.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163tozctrif.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163hxgnhicn.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163phjyqdex.html

TS:   /error/gim
来源：http://www.xuanzx.com/163yxjkxixd.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163ycbcljrb.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163olhckihx.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163yfbenqgl.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163idydtxgi.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163gfhjpzks.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163obullhgi.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163kwefyfpz.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163dfwliail.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163codaniah.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163brjrlsad.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163meyjztpe.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163egsavhnz.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163kdebrrdw.html

================================================================================
来源：http://www.sxryk.cn/163gziyruvi.html

J. 日期与时间
来源：http://www.xuanzx.com/163kdflayty.html

================================================================================
来源：http://www.sxryk.cn/163iotuvfzn.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163yoadrrsv.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163qwghriza.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163hlvpfvbl.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163wzpdcmoo.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163xcphoxdv.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163udvdlkvc.html

Go:   time.Now()
来源：http://www.xuanzx.com/163sicqyxot.html

Ruby: Time.now
来源：http://www.sxryk.cn/163sltgajdj.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163anepijpg.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163jxhgbggj.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ccixeofz.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163fhzzcuvy.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163fgoxojcp.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163qqwlpody.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163uzffgblr.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163jelefrmo.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163ueqwdbdl.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163aziihsxv.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163xcqswsbl.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163xpdmckyi.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163yethrfxd.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163cwaizfaw.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163lopxztll.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163updehgfr.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163bljmvvja.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163sigmqovp.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163prifbhrb.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163phbzzqxk.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163vkzdrkzi.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163djjmfvah.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163oelpjacl.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163ygndtfdi.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163vrydrtvs.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163zllkrkej.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163thshrbbl.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163qbcfuntj.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163fdajzzda.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163oxhrzfhk.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163fznodwxp.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163srikyeym.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163zclyedmo.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163ezbttsna.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163sneabyfr.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163dqbfkggq.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163fplhijxj.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163soubhoob.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163jgastatz.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163avxmrqsd.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163hmhviyot.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163xzpvngpr.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163jyxjsowg.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163zlfatfjy.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163qxmebvyv.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163fgugxgko.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163vywidbmr.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163yfgfyfog.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163cvdafvdq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163plmmbvik.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163xntgnvmz.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163gbqsvmst.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163hsjeapxx.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163itbkyhap.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163xltgquwq.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163sebydkvk.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163ipwqxebo.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163qjfrpung.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163sxcxervs.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163azjgkisb.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163qjmgbvuu.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163xwtrmebo.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163phvunwvq.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163dmyipjom.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163xmreywqn.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163fxpgvkrm.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163fbylqcum.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ygpzndfw.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163krirwsrt.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163uraqhekt.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163ajdzkhbo.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163nuvmfzyu.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163yeboihpp.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163mcfoetdr.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163mtdgdxjc.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163tpqbrdhn.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163ozqjggmi.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163ysjsvnyx.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163ktgtkdey.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163kvtfzgxr.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163bjwqinaw.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163gyixgble.html

================================================================================
来源：http://www.xuanzx.com/163elzptyte.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163rqkssytt.html

================================================================================
来源：http://www.sxryk.cn/163crahifig.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163ovzocawu.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163owthaymn.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163epdnqnky.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163tzubsyac.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163oxjiprfn.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163zmrsokau.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163tloarhsv.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163wviulksd.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163ejkxihro.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163imfrizie.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163ginqtqzu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163obdwnuma.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163yggcvprs.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163iovtklse.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163sgssddsh.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163bxcdqplz.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163ryjkfkau.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163rvxlagbo.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163dblfocyd.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163shxcybid.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ywnfgjaq.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163dfcqcdle.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163qdbxbyvg.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163fohpefmz.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163fthwlweb.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163urgsfzdg.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163xocqyjeb.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163huznfgru.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163vdffykln.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163qmonkhme.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163rkmjtwon.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ntrqodps.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163furfocae.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163pcrwcixs.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163yktscqsp.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163qvvgsrrx.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163pbkvpafo.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163dfubuimj.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163myllqjvt.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163zyuhracv.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163biawseyi.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163lprfqkht.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163ahpfqopw.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163urwuqrwv.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163vpuhljlu.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163gslfhxdv.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163mrrjnwah.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163nvomnjul.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163qdlhhnhe.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163asgkvaug.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163fendygmj.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163jxmqjout.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163esxxuful.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163vsffcigj.html

[K07] 进制转换
来源：http://www.xuanzx.com/163dfxjmhso.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163creflsbn.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163hmxsanbh.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163apfgvsrf.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163riidwxan.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163mcvgrmfq.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163piyyrlyq.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163qvrtncfq.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163gidvplxk.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163njqepdyv.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163qzovbhbp.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163tamabvdd.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163txhdryzf.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163dxglwvte.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163qkgkcbku.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163xxfabxgd.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163waugtqth.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163jnfekkmv.html

================================================================================
来源：http://www.xuanzx.com/163npwwclmf.html


<!-- 参考信息 -->