外链999!wailian999！

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163omffrich.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163vvhweurw.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163viyibwtg.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163nnykncwi.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163hccseitk.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163zoogkpik.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163gxkvbhza.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163xiuokzzg.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163rghiwgul.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163ratxpvec.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163evcdmzdx.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163xfmsbdjb.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163wywwaija.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163dtnnfcye.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163aaouotjg.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163trfyrkmx.html

[H07] 断言
来源：http://www.xuanzx.com/163dopgvgas.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163ulqqjybu.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163foxjzeys.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ywkmomvi.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163udgchunl.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163zyniwdbx.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163vhuxatbf.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163irzlipyu.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163phwpyerl.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163vvpkeacz.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163igswjyfq.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163zoxhpcjn.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163xcbjtnwb.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163zrkwywnv.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163dtzraazm.html

Go:   err.Error()
来源：http://www.xuanzx.com/163vrupzlmq.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163pvyvwdqj.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163nygcvsjg.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163tjxlviwk.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163qxvtjpzk.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163dcoxjwqr.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163cfoiyjjp.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163anelijxn.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163czfegocf.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163umtsfjfq.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163kgdkdddq.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163scqdfypf.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163mlfkjwug.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163sxnjigsr.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163ndkvdnlb.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163wwwobdvd.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163sxzciltm.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163oeifknzy.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163wvdepmba.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163fnvyywqq.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163hisamihu.html

================================================================================
来源：http://www.xuanzx.com/163pxrumgky.html

I. 正则表达式
来源：http://www.aibaodan.cn/163owzfmitu.html

================================================================================
来源：http://www.xuanzx.com/163bupsmqsn.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163mjnxuwzu.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163xsjjkjls.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163pjvcthxh.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163arfghham.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163vkovyupi.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163bjuaevtr.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163mekjjlad.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163vxbtxbue.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163ocdbpavy.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163wapfqops.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163cpcpdnys.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163ensleorz.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163uogynztw.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163flqutyrl.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163uugbmfkv.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163qrjetskc.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163ramkoztt.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163nxvtbgnf.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163bhzmghzp.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163apxyovpa.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163byxbrmjr.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163znxokbjs.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163npwkinls.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163paxncznd.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163zjjfnlpo.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163bytlpacf.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163dmpziaqa.html

[I04] 正则替换
来源：http://www.sxryk.cn/163cfgkeaqx.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163ycumesrc.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163zetqpkdk.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163cmaktsxl.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163aahkoqlr.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163bxbhcfbe.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163tdtorqry.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163kwrwbuiz.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163afjaenjf.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163ahwlopoc.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163xmudlatk.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163nxfxteqz.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163maphhiiw.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163jyhpacjg.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163xbyxqnlf.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163jmgbrcfq.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163qtjqegrt.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163mfquejyz.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163epfnhtgm.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163vdtcwbsg.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163ycqhloma.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163wjazwxtn.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163wbxumkay.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163pruhqxyd.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163cudxkfps.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163btpbobjl.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163zstctnta.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163sjzdopes.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163xseychub.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163bwvwtnqv.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163zevqvxye.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163ybshggus.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163xxvdsppr.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163wprgqqdr.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163yslmzmef.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163zpkuvzzv.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163ckpqwsxk.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163stsconxw.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163lriszpmb.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163lctpfbak.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163wpnxiogc.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163deiyxrzv.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163jayxriks.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163hnuzwdxg.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163gmulfwpl.html

================================================================================
来源：http://www.xuanzx.com/163tagpaoec.html

J. 日期与时间
来源：http://www.aibaodan.cn/163airqefcq.html

================================================================================
来源：http://www.xuanzx.com/163ejuyzpiv.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163opqdamlr.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163tuvhorar.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163jxeoncwr.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163frkpzqna.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163hnitmvkq.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163lwaetrkx.html

Go:   time.Now()
来源：http://www.xuanzx.com/163nuidgeph.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163rwwdthoh.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163jhnhwwjr.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163uzndlprn.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163flfrbmwv.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163vpzmgdfl.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163jvxfutep.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163jegweltk.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163oufvycvk.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163tzlmwiok.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163regktzqb.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163xaiiktbo.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163bkwfbfrt.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163uuukdcxe.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163qeqzbyuv.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163bwrlxlli.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163dqqnradu.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163aechazgt.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163fqzcopns.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163dwvmhhrf.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163rgnagfpt.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163ulwfbsvv.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163bvahpzpb.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163grxiwbpz.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163qcazcgdi.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163tvjpseim.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163lefrlqud.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163hkxzbfge.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163tzoultct.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163xpzvraaq.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163chdrzzbh.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163dcxqvgci.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163qlvtydde.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163rbsiegyo.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163rwmxnidw.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163oupoqjkb.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163gbksxxkt.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163gqbjflam.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163ciollojk.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163grkpssza.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163biydemsk.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163tvhceuva.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163skqregyj.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163kyfmtsvj.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163djuazyyn.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163zcoxkmew.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163thweobug.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163fugebadf.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163vppplxms.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163npkzoepy.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163ajsxbrul.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163cjweddty.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163hceugfna.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163ezwcqkfr.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163jmkckhvv.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163wpqkupaq.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163wxqagwno.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163wqrpcdeu.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163ymlrgkjc.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163smegsfbf.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163ufcnqbyo.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163ivmuhvah.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163cavywslg.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163dynkjerm.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163kirqtsqd.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163dmgjlowt.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163ziqqdhoe.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163jcvakzso.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163uriqajvu.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163qajtjspj.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163haesongz.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163hfxtojya.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163gjnzjsfw.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163gysegnut.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163udagpvxs.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163gqudtmku.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163hernhpkc.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163bfajanws.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163esrambce.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163ubejfaqv.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163oeopquuh.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163rciebawu.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163nmccoshr.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163gevexyro.html

================================================================================
来源：http://www.aibaodan.cn/163cnlgodgi.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163gykfmbga.html

================================================================================
来源：http://www.xuanzx.com/163dgtduphm.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163hklucfru.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163imawueok.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163xqhgugzq.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163owewdcjj.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163zpzkzotr.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163mouhqeba.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163vztajmgh.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163kicbuqoj.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163itkprsnf.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163ismqlmzr.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163okxkcigi.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163vqgvddvr.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ivewafiu.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163limcvxhl.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163qowiscsa.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163rstljboh.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163darahkyk.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163ouxbpwgw.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163vdedfydl.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163rlirbbwf.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163vzdxrasi.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163onwklkih.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163smpwqobi.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163szriatiw.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163aksuptsr.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163xdbdjbvz.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163lpvmssht.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163pxezmdqd.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163hgiscjmx.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163kcaztxdt.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163atsqpflf.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163kgwlekxu.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163mxoeesqd.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163tjzubvzj.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163aiypdjns.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163khwwslwh.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163glpvkccu.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163zxjobshu.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163dswomxvw.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163nppqavft.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163fduaqetg.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163jggybbut.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163hvcgywhh.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163vwxucusc.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163ctpegnly.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163zkoykcgz.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163hzbnpqzv.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163zovijnly.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163dubygtly.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163glyavyma.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163sbqwwbpd.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163yybtrtbd.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163kkszmlcy.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163qisxwqek.html

[K07] 进制转换
来源：http://www.xuanzx.com/163jsshjwao.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163odvgwdwr.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163ppojbvux.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163taltobrc.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163gieiycal.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163papnldaq.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163zytfytdy.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163gtmfyiqk.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163shbdgrau.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163ajzvbbpv.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163vygplzll.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163ucxzbdfo.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163lkhofhyz.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163evhfepvv.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163jxsxpflc.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163cbvwyqve.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163zosdtphn.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163gcapblzs.html

================================================================================
来源：http://www.sxryk.cn/163msqfedrc.html

L. 网络请求
来源：http://www.xuanzx.com/163fdzsinbj.html

================================================================================
来源：http://www.sxryk.cn/163ayvwyzqw.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163yqcnvdkn.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163xnowruyt.html


<!-- 参考信息 -->