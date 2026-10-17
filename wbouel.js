外链999!wailian999！

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163jsrmwejz.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163hmcckmmh.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163hyzkiqhd.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163svtavjsd.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163hidnbeof.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163xabqgmam.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163ohvjyeyk.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163kuaekqfn.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163oytaevmq.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163hzlnndvx.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163cmwfymne.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163vughhcwa.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163njazgwom.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163agxwoggl.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163knwurwjo.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163alhcedkd.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163cyqoflwk.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163fkgzblox.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163hnpgdxfr.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163kpdmkatc.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163whvbnotf.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163snqbgeev.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163wqjyumpo.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ygzzuzcc.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163nrtofint.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163gxacbnga.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163guqgjebi.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163gjpkzzni.html

[H07] 断言
来源：http://www.xuanzx.com/163jnrgqaze.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163uyafdnvm.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163iqzphjor.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ekxbdcmu.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163jnpokzce.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163ceylpikq.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163izniwkpn.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163hlulzdyj.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163iwtmbyej.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163uunquxrz.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163udyiwxid.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163npacatgn.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163fyfanpmg.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163utsyrhiu.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163fffggmds.html

Go:   err.Error()
来源：http://www.xuanzx.com/163whwrydoe.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163dqqzmagz.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163ugjkcxca.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163yxiilrzy.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163qzuauduh.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163axfmjynf.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163nuwukawa.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163izopqhmv.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163eccrfctq.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163dgiecxtu.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163uunhcutl.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163kdrpaxbu.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163pcogvfdy.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163fpgfcyhn.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163kxbtbjmf.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163tqcfrdlp.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163cbdmlzpe.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163uinpywwn.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163oubtqvbo.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163knlicyqv.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163qzxlrbny.html

================================================================================
来源：http://www.xuanzx.com/163qdsnfmbg.html

I. 正则表达式
来源：http://www.xuanzx.com/163ywpwjnpn.html

================================================================================
来源：http://www.aibaodan.cn/163sfteshjj.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163nbeooedi.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163vwlhrdsi.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163mbjzvsjs.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163hcjvbdpe.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163zzjkgcnj.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163copakmuh.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163rntzdvos.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163gnxeensx.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163wbjlvotl.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163ykzqtppv.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163hfqdtqon.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163ejsyvbwj.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163cucvctge.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163piyvdlij.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163aifqelig.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163jxwzkjsf.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163oytptgut.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163bcilgiyo.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163bakqtuuq.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163svdiyggo.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163xqqqrooc.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163xpnrrjoq.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163elxpdtek.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163zcebkxrx.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163qlpcsbna.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163yywwssrw.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163peqccbqz.html

[I04] 正则替换
来源：http://www.sxryk.cn/163cgfknrrp.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163bnqncxzz.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163ndvcxlju.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163zvvrgcbs.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163tylwxtoa.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163ecihznns.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163ahlqvqni.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163mxxvwuul.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163imfjkxgt.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163dwwhgpnn.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163rtkxiljc.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163ukgeprfh.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163rswdmadv.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163jwfptuhw.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163rsxgizxt.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163mwhhdybm.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163wvmmpvfr.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163lqmhobft.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163decqmavr.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163qhuwpjfg.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163kdiyiwtd.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163iiaswmqs.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163qipmmkut.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163laznxoax.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163fwilxcsn.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163bmeabgty.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163kvhrlyzd.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163gytzawhb.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163hefvfeqp.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163zulopyxs.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163ukpzrfst.html

TS:   /error/gim
来源：http://www.xuanzx.com/163remmvakf.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163hfozqgln.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163zeycphmm.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163jfgcginp.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163wzkqbffh.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163amaymqvp.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163nabgkyog.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163zpnnseyq.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163zfhaueag.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163qgzebbie.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163ypztopor.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163fqpzocfg.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163yhrzvrxa.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163fwzpycpc.html

================================================================================
来源：http://www.sxryk.cn/163euqcdsgk.html

J. 日期与时间
来源：http://www.sxryk.cn/163taaoefhk.html

================================================================================
来源：http://www.sxryk.cn/163prdwueqb.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163rkfebltr.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163iiftndyy.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163xgythbha.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163dafenofx.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163muitlqcz.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163ukzwjykl.html

Go:   time.Now()
来源：http://www.sxryk.cn/163zcazvrwp.html

Ruby: Time.now
来源：http://www.xuanzx.com/163aaxwaubv.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163xddvlpzf.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163jqrhvmih.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163llvubnns.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163dzkfnctr.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163hscffbru.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163wunxdhzm.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163fmlhvxle.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163vakibaka.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163vqrvjcqk.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163rzhcldys.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163figvmddv.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163ltsjfred.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163nynhztlw.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163cpivbfcl.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163keklnwzr.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163tkspkupr.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163czvrvotb.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163gcrukqjf.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163rmsmzlvq.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163brcybard.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163vxukgmkn.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163sqwjqxgz.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163focjkylp.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163focidyay.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163mjhlxqtx.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163edpqcraw.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163tjoykshm.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163czokwtoo.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163ewidyysm.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163nynqptjt.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163houpskyd.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ocwclaod.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163hwrrpcrp.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163teftyqlx.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163ljklejcs.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163ruwjulyy.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163bijpymgt.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163lflyrmvj.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163xdotwupr.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163czfqisfd.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163cvfsxnov.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163mbzukreb.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163kvizbohv.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163fvdoqubz.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163exexxaih.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163mplfipno.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163uodajmmu.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163etfirltk.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163avlhsgpj.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163sikwiouo.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163spvotmnn.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163arbogbjs.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163kemwgwov.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163cjvapofy.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163fmctpuuf.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163xmxptpms.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163zbkelqmg.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163texxmxfv.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163umghvrms.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163mlmtrupj.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163ewaclydz.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163tbynolie.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163fgtrddra.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163zvqcgcez.html

[J09] 时区处理
来源：http://www.xuanzx.com/163zyqhtvii.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163aofrhjjn.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163qtwnrawj.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163wfqywskt.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163cigcyaho.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163hwxuqdws.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163jwjznjmt.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163hnenzupv.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163eixfabuj.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163bmwkqira.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163vdwkgjvn.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163vfyvqarf.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163goyftvml.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163tuyyxmgq.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163voyykbwz.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163rcghrrqd.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163xeuxuogl.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163ryzayals.html

================================================================================
来源：http://www.xuanzx.com/163zxfxnkyt.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163pkpgczds.html

================================================================================
来源：http://www.xuanzx.com/163eesuttxm.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163ladopztk.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163ovmbdatp.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163brxhagrw.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163nfithvkk.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163qqfihexz.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163ydyvezto.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163jnxkszyb.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163uovewpli.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163vxxctqpr.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163nyxxiwkb.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163bbmmedco.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163txiozpov.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163zaybnoty.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163xzclunyr.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163dyjlbffh.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163uowloyrg.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163vpggcjeo.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163ixlegkzi.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163pltgtjuy.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163zzovblrg.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ysfqxrbb.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ykvyvzru.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163xxcmwzpp.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163bjnzpaiv.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163sjrzyuru.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163giqzeggn.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163jbcdmuvb.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163sqdkubpj.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163enlztpzt.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163edpgrllr.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163rkilqexz.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163xyzxxxfe.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163cjqpqcjn.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163yjxcdrex.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163quhjsjbr.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163ozkufqix.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163fbmjyzxi.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163arftznmd.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163crrchwrh.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163pqhtdiry.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ndazvcso.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163dwocrarv.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163zglyskox.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163nlwleiup.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163alqqkhah.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163ulqtyssb.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163bzklzphp.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163gtciwkfc.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163dpqwomla.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163brjmxsrd.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163miunimng.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163zbzgjumt.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163gwkdtkxi.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163aduwlnxr.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163njlmzspi.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163blyzddvv.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163kfwsanww.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163bbjcatlk.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163dlahxvug.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163fmjzbois.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163kxexbnjd.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163dsivtbrc.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163cwlpwtyv.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163htledfxx.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163csemwnjn.html


<!-- 参考信息 -->